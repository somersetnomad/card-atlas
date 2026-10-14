// Card Atlas — playable solitaires: Klondike, FreeCell, Golf.
// One small engine: games define piles + rules; the engine renders, animates, drags and undoes.
(function () {
  const SOL = (CA.solitaire = {});
  const RED = (c) => c.s === 1 || c.s === 2;
  const rankTxt = (r) => CA.RANKS[r - 1];

  function deck() {
    const d = [];
    for (let s = 0; s < 4; s++) for (let r = 1; r <= 13; r++) d.push({ id: s * 13 + r, r, s, up: false });
    for (let i = d.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [d[i], d[j]] = [d[j], d[i]]; }
    return d;
  }
  const top = (p) => p[p.length - 1];

  // ---------------- Game definitions ----------------
  const DEFS = {};

  DEFS.klondike = {
    id: "klondike", title: "Klondike",
    rows: [["stock", "waste", "_", "f0", "f1", "f2", "f3"], ["t0", "t1", "t2", "t3", "t4", "t5", "t6"]],
    deal(st) {
      const d = deck();
      for (let c = 0; c < 7; c++) { st["t" + c] = []; for (let r = 0; r <= c; r++) { const k = d.pop(); k.up = r === c; st["t" + c].push(k); } }
      d.forEach((k) => (k.up = false));
      st.stock = d; st.waste = []; for (let f = 0; f < 4; f++) st["f" + f] = [];
      st.score = 0;
    },
    fan(pid, st, g) { if (pid[0] === "t") return "down"; if (pid === "waste") return g.opts.draw3 ? "right3" : "stack"; return "stack"; },
    canDrag(pid, idx, st) {
      const p = st[pid];
      if (pid === "waste" || pid[0] === "f") return idx === p.length - 1;
      if (pid[0] === "t") return p[idx].up;
      return false;
    },
    canDrop(cards, to, st) {
      const p = st[to], c = cards[0];
      if (to[0] === "f") { if (cards.length !== 1) return false; return p.length ? top(p).s === c.s && c.r === top(p).r + 1 : c.r === 1; }
      if (to[0] === "t") return p.length ? top(p).up && RED(top(p)) !== RED(c) && top(p).r === c.r + 1 : c.r === 13;
      return false;
    },
    scoreMove(from, to, st) {
      if (to[0] === "f") st.score += 10;
      else if (from === "waste" && to[0] === "t") st.score += 5;
      else if (from[0] === "f") st.score = Math.max(0, st.score - 15);
    },
    after(from, st) { const p = st[from]; if (from[0] === "t" && p.length && !top(p).up) { top(p).up = true; st.score += 5; return true; } },
    clickPile(pid, st, g) {
      if (pid !== "stock") return false;
      if (st.stock.length) {
        const n = g.opts.draw3 ? 3 : 1;
        for (let i = 0; i < n && st.stock.length; i++) { const k = st.stock.pop(); k.up = true; st.waste.push(k); }
      } else if (st.waste.length) {
        st.stock = st.waste.reverse().map((k) => ((k.up = false), k)); st.waste = [];
        if (!g.opts.draw3) st.score = Math.max(0, st.score - 100);
      } else return false;
      return true;
    },
    won: (st) => [0, 1, 2, 3].every((f) => st["f" + f].length === 13),
    canAuto: (st) => !st.stock.length && !st.waste.length && [0, 1, 2, 3, 4, 5, 6].every((c) => st["t" + c].every((k) => k.up)),
    targets(pid) { return pid[0] === "f" ? ["t0", "t1", "t2", "t3", "t4", "t5", "t6"] : ["f0", "f1", "f2", "f3", "t0", "t1", "t2", "t3", "t4", "t5", "t6"]; },
    hint(st, g) {
      const tabs = [0, 1, 2, 3, 4, 5, 6].map((c) => "t" + c);
      for (const from of ["waste", ...tabs]) { const p = st[from]; if (!p.length) continue; for (const f of ["f0", "f1", "f2", "f3"]) if (this.canDrop([top(p)], f, st)) return { from, idx: p.length - 1 }; }
      for (const from of tabs) {
        const p = st[from]; const i = p.findIndex((k) => k.up); if (i < 0) continue;
        if (i === 0 && p[0].r === 13) continue;
        for (const to of tabs) if (to !== from && this.canDrop(p.slice(i), to, st)) return { from, idx: i };
      }
      if (st.waste.length) for (const to of tabs) if (this.canDrop([top(st.waste)], to, st)) return { from: "waste", idx: st.waste.length - 1 };
      return st.stock.length || st.waste.length ? { pile: "stock" } : null;
    }
  };

  DEFS.freecell = {
    id: "freecell", title: "FreeCell", cls: "fc",
    rows: [["c0", "c1", "c2", "c3", "f0", "f1", "f2", "f3"], ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"]],
    deal(st) {
      const d = deck(); d.forEach((k) => (k.up = true));
      for (let c = 0; c < 8; c++) st["t" + c] = [];
      d.forEach((k, i) => st["t" + (i % 8)].push(k));
      for (let i = 0; i < 4; i++) { st["c" + i] = []; st["f" + i] = []; }
    },
    fan: (pid) => (pid[0] === "t" ? "down" : "stack"),
    seqOk(cards) { for (let i = 1; i < cards.length; i++) if (RED(cards[i]) === RED(cards[i - 1]) || cards[i].r !== cards[i - 1].r - 1) return false; return true; },
    maxMove(st, toEmpty) {
      const cells = [0, 1, 2, 3].filter((i) => !st["c" + i].length).length;
      let empty = [0, 1, 2, 3, 4, 5, 6, 7].filter((i) => !st["t" + i].length).length;
      if (toEmpty) empty--;
      return (cells + 1) * Math.pow(2, Math.max(0, empty));
    },
    canDrag(pid, idx, st) {
      const p = st[pid];
      if (pid[0] === "t") return this.seqOk(p.slice(idx));
      return idx === p.length - 1;
    },
    canDrop(cards, to, st) {
      const p = st[to], c = cards[0];
      if (to[0] === "c") return cards.length === 1 && !p.length;
      if (to[0] === "f") { if (cards.length !== 1) return false; return p.length ? top(p).s === c.s && c.r === top(p).r + 1 : c.r === 1; }
      if (to[0] === "t") {
        if (cards.length > this.maxMove(st, !p.length)) return false;
        return p.length ? RED(top(p)) !== RED(c) && top(p).r === c.r + 1 : true;
      }
      return false;
    },
    won: (st) => [0, 1, 2, 3].every((f) => st["f" + f].length === 13),
    canAuto: (st) => [0, 1, 2, 3, 4, 5, 6, 7].every((c) => DEFS.freecell.seqOkDesc(st["t" + c])),
    seqOkDesc(p) { for (let i = 1; i < p.length; i++) if (p[i].r > p[i - 1].r) return false; return true; },
    targets(pid) { const t = ["f0", "f1", "f2", "f3", "t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"]; return pid[0] === "c" ? t : [...t, "c0", "c1", "c2", "c3"]; },
    hint(st) {
      const src = ["c0", "c1", "c2", "c3", "t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"];
      for (const from of src) { const p = st[from]; if (!p.length) continue; for (const f of ["f0", "f1", "f2", "f3"]) if (this.canDrop([top(p)], f, st)) return { from, idx: p.length - 1 }; }
      for (const from of src) {
        const p = st[from]; if (!p.length) continue;
        for (let i = 0; i < p.length; i++) {
          if (!this.canDrag(from, i, st)) continue;
          for (const to of src) if (to[0] === "t" && to !== from && st[to].length && this.canDrop(p.slice(i), to, st)) return { from, idx: i };
          break;
        }
      }
      return null;
    }
  };

  DEFS.golf = {
    id: "golf", title: "Golf",
    rows: [["t0", "t1", "t2", "t3", "t4", "t5", "t6"], ["stock", "waste"]],
    deal(st) {
      const d = deck();
      for (let c = 0; c < 7; c++) { st["t" + c] = []; for (let r = 0; r < 5; r++) { const k = d.pop(); k.up = true; st["t" + c].push(k); } }
      st.stock = d; const w = st.stock.pop(); w.up = true; st.waste = [w];
    },
    fan: (pid) => (pid[0] === "t" ? "down" : pid === "waste" ? "right" : "stack"),
    canDrag: (pid, idx, st) => pid[0] === "t" && idx === st[pid].length - 1,
    canDrop(cards, to, st) {
      if (to !== "waste") return false;
      const w = top(st.waste), c = cards[0];
      if (!w || w.r === 13) return false;
      return Math.abs(w.r - c.r) === 1;
    },
    clickPile(pid, st) { if (pid !== "stock" || !st.stock.length) return false; const k = st.stock.pop(); k.up = true; st.waste.push(k); return true; },
    won: (st) => [0, 1, 2, 3, 4, 5, 6].every((c) => !st["t" + c].length),
    lost(st) { if (st.stock.length) return false; return ![0, 1, 2, 3, 4, 5, 6].some((c) => st["t" + c].length && this.canDrop([top(st["t" + c])], "waste", st)); },
    targets: () => ["waste"],
    golfScore: (st) => { const left = [0, 1, 2, 3, 4, 5, 6].reduce((a, c) => a + st["t" + c].length, 0); return left ? left : -st.stock.length; },
    hint(st) { for (let c = 0; c < 7; c++) { const p = st["t" + c]; if (p.length && this.canDrop([top(p)], "waste", st)) return { from: "t" + c, idx: p.length - 1 }; } return st.stock.length ? { pile: "stock" } : null; }
  };

  // ---------------- Engine ----------------
  SOL.mount = function (host, gid) {
    const def = DEFS[gid];
    if (!def) { host.innerHTML = `<p>Unknown game.</p>`; return; }
    const info = CA.byId[gid];
    const opts = CA.state.solOpts = CA.state.solOpts || { draw3: false };
    const G = { def, opts, st: {}, hist: [], moves: 0, t0: 0, timer: null, done: false, els: {}, map: {} };
    host.innerHTML = `
      <div class="page-head"><div><div class="crumbs"><a href="#/">Globe</a> › <a href="#/play">Play</a> › ${def.title}</div><h1>${def.title}</h1></div>
        <a class="btn btn-sm btn-ghost" href="#/game/${gid}">📖 How to play</a></div>
      <div class="sol-wrap">
        <div class="sol-bar">
          <button class="btn btn-sm btn-gold" data-a="new">🔀 New deal</button>
          <button class="btn btn-sm" data-a="undo">↶ Undo</button>
          <button class="btn btn-sm" data-a="hint">💡 Hint</button>
          ${gid === "klondike" ? `<label class="toggle"><input type="checkbox" data-a="draw3" ${opts.draw3 ? "checked" : ""}> Draw 3</label>` : ""}
          <button class="btn btn-sm" data-a="auto" hidden>⚡ Auto-finish</button>
          <span class="info" aria-live="polite"></span>
        </div>
        <div class="sol-board ${def.cls || ""}" tabindex="0" aria-label="${def.title} board"></div>
        <p class="crumbs" style="margin-top:10px">Tip: tap a card to send it to the best spot, or drag it. ${info ? CA.esc(info.quick[1] || "") : ""}</p>
      </div>`;
    const board = host.querySelector(".sol-board");
    const infoEl = host.querySelector(".info");
    const autoBtn = host.querySelector('[data-a="auto"]');

    // layout slots
    def.rows.forEach((row) => {
      const r = document.createElement("div"); r.className = "sol-row";
      row.forEach((pid) => {
        const s = document.createElement("div");
        if (pid === "_") { s.className = "slot"; s.style.visibility = "hidden"; }
        else {
          s.className = (pid[0] === "t" ? "col" : "slot") + (pid[0] === "f" ? " found" : "") + (pid === "stock" ? " stockslot" : "");
          if (pid[0] === "t") s.classList.add("slot");
          s.dataset.pile = pid;
          if (pid[0] === "f") s.dataset.s = def.id === "freecell" || def.id === "klondike" ? "A" : "";
          if (pid[0] === "c") s.dataset.s = "";
          if (pid === "stock") s.innerHTML = `<span class="recycle">↻</span>`;
        }
        r.appendChild(s);
      });
      board.appendChild(r);
    });
    const slotEl = (pid) => board.querySelector(`[data-pile="${pid}"]`);
    const piles = () => def.rows.flat().filter((p) => p !== "_");

    function snapshot() { return JSON.stringify({ st: G.st, moves: G.moves }); }
    function pushHist() { G.hist.push(snapshot()); if (G.hist.length > 300) G.hist.shift(); }

    function stats() { CA.state.sol[gid] = CA.state.sol[gid] || { played: 0, won: 0, streak: 0, bestStreak: 0 }; return CA.state.sol[gid]; }
    function startedMove() {
      if (G.moves === 0 && !G.counted) { G.counted = true; stats().played++; CA.save(); CA.records.checkBadges(); }
      if (!G.timer) { G.t0 = Date.now() - (G.elapsed || 0); G.timer = setInterval(updInfo, 1000); }
    }
    function updInfo() {
      const sec = G.t0 ? Math.floor((Date.now() - G.t0) / 1000) : 0;
      G.elapsed = sec * 1000;
      const t = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;
      const extra = def.id === "klondike" ? ` · Score ${G.st.score}` : def.id === "golf" ? ` · Strokes ${def.golfScore(G.st)}` : "";
      infoEl.textContent = `⏱ ${t} · Moves ${G.moves}${extra}`;
    }

    function newDeal() {
      const s = stats();
      if (G.counted && !G.done) { s.streak = 0; CA.save(); }
      G.st = {}; def.deal(G.st); G.hist = []; G.moves = 0; G.done = false; G.counted = false;
      clearInterval(G.timer); G.timer = null; G.t0 = 0; G.elapsed = 0;
      board.querySelectorAll(".pcard").forEach((e) => e.remove()); G.els = {};
      CA.sound("shuffle");
      render(true);
    }

    function cardEl(k) {
      let e = G.els[k.id];
      if (!e) {
        const w = document.createElement("div"); w.innerHTML = CA.cardHTML(rankTxt(k.r), CA.SUITS[k.s], k.up);
        e = w.firstElementChild; e.dataset.id = k.id; board.appendChild(e); G.els[k.id] = e;
        const stock = slotEl("stock") || slotEl("t0");
        const br = board.getBoundingClientRect(), r = stock.getBoundingClientRect();
        e.style.left = r.left - br.left + "px"; e.style.top = r.top - br.top + "px";
      }
      e.classList.toggle("up", k.up); e.classList.toggle("down", !k.up);
      return e;
    }

    function render(dealing) {
      const br = board.getBoundingClientRect();
      const cw = slotEl(piles()[0]).getBoundingClientRect().width;
      const ch = cw * 1.4;
      let maxBottom = 0, z = 1, delay = 0;
      G.map = {};
      for (const pid of piles()) {
        const p = G.st[pid] || [];
        const r = slotEl(pid).getBoundingClientRect();
        let x = r.left - br.left, y = r.top - br.top;
        const mode = def.fan(pid, G.st, G);
        p.forEach((k, i) => {
          const e = cardEl(k);
          let cx = x, cy = y;
          if (mode === "down") { cy = y; for (let j = 0; j < i; j++) cy += p[j].up ? ch * 0.27 : ch * 0.13; }
          else if (mode === "right3") { const from = Math.max(0, p.length - 3); cx = x + Math.max(0, i - from) * cw * 0.24; }
          else if (mode === "right") { const from = Math.max(0, p.length - 8); cx = x + Math.max(0, i - from) * cw * 0.18; }
          G.map[k.id] = { pid, idx: i };
          e.style.zIndex = z++;
          const place = () => { e.style.left = cx + "px"; e.style.top = cy + "px"; };
          if (dealing && pid !== "stock") { setTimeout(() => { place(); CA.sound("deal"); }, (delay += 28)); } else place();
          maxBottom = Math.max(maxBottom, cy + ch);
        });
        if (pid[0] === "t") slotEl(pid).style.height = Math.max(ch, (p.length ? 0 : 0) + ch) + "px";
      }
      board.style.minHeight = Math.max(420, maxBottom + 40) + "px";
      const stock = slotEl("stock"); if (stock) stock.querySelector(".recycle").style.opacity = G.st.stock && G.st.stock.length ? 0 : 1;
      autoBtn.hidden = !(def.canAuto && def.canAuto(G.st) && !G.done);
      updInfo();
    }

    function doMove(from, idx, to) {
      const cards = G.st[from].slice(idx);
      if (!def.canDrop(cards, to, G.st)) return false;
      startedMove(); pushHist();
      G.st[from].splice(idx); G.st[to].push(...cards);
      def.scoreMove && def.scoreMove(from, to, G.st);
      def.after && def.after(from, G.st);
      G.moves++;
      CA.sound(to[0] === "f" ? "chip" : "flip");
      render(); checkEnd();
      return true;
    }
    function autoMove(from, idx) {
      const cards = G.st[from].slice(idx);
      const order = def.targets(from).filter((t) => t !== from);
      // prefer foundation, then non-empty tableau, then empty tableau, then cells
      const score = (t) => (t[0] === "f" ? 0 : t === "waste" ? 0 : t[0] === "t" ? (G.st[t].length ? 1 : 2) : 3);
      order.sort((a, b) => score(a) - score(b));
      for (const to of order) if (doMove(from, idx, to)) return true;
      CA.sound("bad");
      const e = G.els[cards[0].id]; if (e) { e.animate([{ transform: "translateX(0)" }, { transform: "translateX(-6px)" }, { transform: "translateX(6px)" }, { transform: "translateX(0)" }], { duration: 250 }); }
      return false;
    }
    function checkEnd() {
      if (def.won(G.st)) return win();
      if (def.lost && def.lost(G.st)) {
        G.done = true; clearInterval(G.timer);
        const s = stats(); s.streak = 0; CA.save();
        setTimeout(() => modal("No more moves", `You finished with <b>${def.golfScore(G.st)}</b> stroke${def.golfScore(G.st) === 1 ? "" : "s"} (cards left). Lower is better — try again!`), 500);
      }
    }
    function win() {
      G.done = true; clearInterval(G.timer);
      const s = stats(); s.won++; s.streak++; s.bestStreak = Math.max(s.bestStreak, s.streak);
      const sec = Math.floor(G.elapsed / 1000); if (!s.bestTime || sec < s.bestTime) s.bestTime = sec;
      CA.save(); CA.records.checkBadges();
      CA.sound("win"); CA.confetti(160);
      // card cascade
      if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
        Object.values(G.els).forEach((e, i) => setTimeout(() => {
          e.animate([{ transform: "none" }, { transform: `translate(${(Math.random() - 0.5) * 800}px, ${300 + Math.random() * 400}px) rotate(${(Math.random() - 0.5) * 720}deg)`, opacity: 0 }], { duration: 1400, easing: "cubic-bezier(.3,.0,.7,1)", fill: "forwards" });
        }, i * 25));
      }
      setTimeout(() => modal("You won! 🎉", `${G.moves} moves in ${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}${def.id === "klondike" ? ` · score ${G.st.score}` : ""}.<br>Win streak: <b>${s.streak}</b> · Total wins: <b>${s.won}</b>`), 1600);
    }
    function modal(title, html) {
      const m = document.getElementById("modal"); m.className = "modal reveal";
      m.innerHTML = `<div class="modal-card"><h2>${title}</h2><p>${html}</p><div style="display:flex;gap:8px;justify-content:center"><button class="btn btn-gold" data-new>Deal again</button><button class="btn" data-close>Close</button></div></div>`;
      m.hidden = false;
      m.onclick = (e) => { if (e.target.closest("[data-new]")) { m.hidden = true; newDeal(); } else if (e.target === m || e.target.closest("[data-close]")) m.hidden = true; };
    }

    // ----- pointer interaction -----
    let drag = null;
    board.addEventListener("pointerdown", (e) => {
      const ce = e.target.closest(".pcard");
      if (!ce || G.done) return;
      const m = G.map[ce.dataset.id]; if (!m) return;
      if (m.pid === "stock") return;
      if (!def.canDrag(m.pid, m.idx, G.st)) return;
      const cards = G.st[m.pid].slice(m.idx);
      drag = { ...m, x0: e.clientX, y0: e.clientY, els: cards.map((k) => G.els[k.id]), moved: false };
      drag.start = drag.els.map((el) => [parseFloat(el.style.left), parseFloat(el.style.top)]);
      board.setPointerCapture(e.pointerId);
    });
    board.addEventListener("pointermove", (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x0, dy = e.clientY - drag.y0;
      if (!drag.moved && Math.hypot(dx, dy) < 6) return;
      if (!drag.moved) { drag.moved = true; drag.els.forEach((el) => el.classList.add("drag")); }
      drag.els.forEach((el, i) => { el.style.left = drag.start[i][0] + dx + "px"; el.style.top = drag.start[i][1] + dy + "px"; el.style.zIndex = 1000 + i; });
    });
    board.addEventListener("pointerup", (e) => {
      if (!drag) return;
      const d = drag; drag = null;
      d.els.forEach((el) => el.classList.remove("drag"));
      if (!d.moved) { autoMove(d.pid, d.idx); return; }
      const r0 = d.els[0].getBoundingClientRect();
      const cx = r0.left + r0.width / 2, cy = r0.top + r0.height / 3;
      let best = null, bestDist = Infinity;
      for (const pid of piles()) {
        if (pid === d.pid) continue;
        const sr = slotEl(pid).getBoundingClientRect();
        const p = G.st[pid];
        let bottom = sr.bottom;
        if (p.length) { const le = G.els[top(p).id].getBoundingClientRect(); bottom = Math.max(bottom, le.bottom); }
        const inX = cx > sr.left - 10 && cx < sr.right + 10, inY = cy > sr.top - 30 && cy < bottom + 30;
        if (inX && inY) { const dist = Math.abs(cx - (sr.left + sr.width / 2)); if (dist < bestDist) { bestDist = dist; best = pid; } }
      }
      if (!best || !doMove(d.pid, d.idx, best)) { if (best) CA.sound("bad"); render(); }
    });
    board.addEventListener("click", (e) => {
      const s = e.target.closest('[data-pile="stock"]') || (e.target.closest(".pcard") && G.map[e.target.closest(".pcard").dataset.id] && G.map[e.target.closest(".pcard").dataset.id].pid === "stock" ? slotEl("stock") : null);
      if (!s || G.done) return;
      startedMove(); pushHist();
      if (def.clickPile(s.dataset.pile, G.st, G)) { G.moves++; CA.sound("flip"); render(); checkEnd(); } else G.hist.pop();
    });

    host.querySelector(".sol-bar").addEventListener("click", (e) => {
      const a = e.target.closest("[data-a]"); if (!a) return;
      const act = a.dataset.a;
      if (act === "new") newDeal();
      else if (act === "undo") {
        if (!G.hist.length || G.done) return;
        const h = JSON.parse(G.hist.pop()); G.st = h.st; G.moves = h.moves; CA.sound("click"); render();
      } else if (act === "hint") {
        const h = def.hint(G.st, G);
        if (!h) { CA.toast("No moves found — try Undo or a new deal"); return; }
        const el = h.pile ? slotEl(h.pile) : G.els[G.st[h.from][h.idx].id];
        if (h.pile) { CA.toast("Turn a card from the stock"); el.animate([{ boxShadow: "0 0 0 0 #d4ad55" }, { boxShadow: "0 0 0 6px #d4ad55" }, { boxShadow: "0 0 0 0 #d4ad55" }], { duration: 900, iterations: 2 }); }
        else { el.classList.remove("hint"); void el.offsetWidth; el.classList.add("hint"); }
      } else if (act === "auto") autoFinish();
    });
    const d3 = host.querySelector('[data-a="draw3"]');
    if (d3) d3.onchange = () => { opts.draw3 = d3.checked; CA.save(); newDeal(); };

    function autoFinish() {
      autoBtn.hidden = true;
      const step = () => {
        if (G.done) return;
        const src = piles().filter((p) => p[0] === "t" || p[0] === "c" || p === "waste");
        let moved = false;
        for (const f of ["f0", "f1", "f2", "f3"]) {
          for (const from of src) { const p = G.st[from]; if (p.length && doMove(from, p.length - 1, f)) { moved = true; break; } }
          if (moved) break;
        }
        if (moved && !G.done) setTimeout(step, 90);
      };
      step();
    }

    const onResize = () => render();
    window.addEventListener("resize", onResize);
    host._cleanup = () => { window.removeEventListener("resize", onResize); clearInterval(G.timer); };
    requestAnimationFrame(newDeal);
  };
})();
