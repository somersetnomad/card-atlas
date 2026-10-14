// Card Atlas — Browse, game pages and the Play hub.
(function () {
  const P = (CA.pages = {});
  const pk = () => CA.state.settings.players;

  // ---------- reveal-on-scroll ----------
  P.observe = function (root) {
    const items = root.querySelectorAll(".quick li, .steps li");
    if (!("IntersectionObserver" in window)) return items.forEach((li) => li.classList.add("in"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const sibs = [...en.target.parentElement.children];
        en.target.style.animationDelay = sibs.indexOf(en.target) * 90 + "ms";
        en.target.classList.add("in");
        io.unobserve(en.target);
      });
    }, { threshold: 0.15 });
    items.forEach((li) => io.observe(li));
  };

  // ---------- Browse ----------
  const deckType = (g) => {
    const d = g.deck.toLowerCase();
    if (/hanafuda|hwatu|whot|tarot/.test(d)) return "special";
    if (/40-card/.test(d)) return "40";
    if (/32|36|24|20 cards|48/.test(d)) return "short";
    if (/two 52|108|104/.test(d)) return "double";
    return "52";
  };
  const DECKS = { "52": "Standard 52", "double": "Two decks", "short": "Short decks (20–48)", "40": "Spanish / Italian 40", "special": "Special decks" };
  const bstate = { q: "", fam: "", deck: "", diff: "", sort: "az", partner: "", play: false };

  P.browse = function (el) {
    const fams = [...new Set(CA.games.map((g) => g.family))].sort();
    el.innerHTML = `
      <div class="page-head">
        <div><div class="crumbs"><a href="#/">Globe</a> › Browse</div><h1>All games</h1></div>
        <div class="crumbs" id="b-count"></div>
      </div>
      <div class="filters">
        <input id="b-q" type="search" placeholder="Filter by name or country…" value="${CA.esc(bstate.q)}" style="flex:1;min-width:180px" class="field-in">
        <select id="b-fam" aria-label="Family"><option value="">All families</option>${fams.map((f) => `<option value="${f}">${CA.esc(CA.famLabel(f))}</option>`).join("")}</select>
        <select id="b-deck" aria-label="Deck"><option value="">Any deck</option>${Object.entries(DECKS).map(([k, v]) => `<option value="${k}">${v}</option>`).join("")}</select>
        <select id="b-diff" aria-label="Difficulty"><option value="">Any difficulty</option><option value="1">Very easy</option><option value="2">Easy or less</option><option value="3">Medium or less</option><option value="4">Hard or less</option></select>
        <select id="b-partner" aria-label="Teams"><option value="">Teams or solo</option><option value="yes">Partnerships</option><option value="no">Every player for themselves</option></select>
        <select id="b-sort" aria-label="Sort"><option value="az">A–Z</option><option value="easy">Easiest first</option><option value="quick">Quickest first</option><option value="world">Most widespread</option></select>
        <label class="toggle"><input type="checkbox" id="b-play"> Playable here</label>
      </div>
      <div class="grid" id="b-grid"></div>`;
    const $ = (id) => el.querySelector(id);
    $("#b-q").style.cssText += ";background:var(--glass);color:var(--ink);border:1px solid var(--line);border-radius:10px;padding:8px 10px;font:inherit";
    ["fam", "deck", "diff", "sort", "partner"].forEach((k) => ($("#b-" + k).value = bstate[k]));
    $("#b-play").checked = bstate.play;
    const draw = () => {
      let list = CA.games.filter((g) => CA.fitsPlayers(g, pk()));
      if (bstate.fam) list = list.filter((g) => g.family === bstate.fam);
      if (bstate.deck) list = list.filter((g) => deckType(g) === bstate.deck);
      if (bstate.diff) list = list.filter((g) => g.diff <= +bstate.diff);
      if (bstate.partner) list = list.filter((g) => !!g.partners === (bstate.partner === "yes"));
      if (bstate.play) list = list.filter((g) => g.play);
      if (bstate.q) list = CA.search(bstate.q, list);
      else if (bstate.sort === "easy") list.sort((a, b) => a.diff - b.diff);
      else if (bstate.sort === "quick") list.sort((a, b) => a.mins - b.mins);
      else if (bstate.sort === "world") list.sort((a, b) => b.countries.length - a.countries.length);
      $("#b-count").textContent = `${list.length} game${list.length === 1 ? "" : "s"}${pk() !== "all" ? ` for ${pk() === "1" ? "solo play" : pk() + " players"}` : ""}`;
      $("#b-grid").innerHTML = list.length ? list.map((g, i) => CA.gameCard(g, i) + "").join("").replace(/<a class="gcard"/g, (m) => m) : `<p class="empty">No games match. Loosen a filter or change the player count.</p>`;
      // add flags under each card
      [...$("#b-grid").children].forEach((a, i) => { const g = list[i]; if (g) a.querySelector(".gc-meta").insertAdjacentHTML("beforeend", `<span>${g.countries.slice(0, 5).map(CA.flag).join("")}${g.countries.length > 5 ? "+" : ""}</span>`); });
    };
    el.querySelector(".filters").addEventListener("input", (e) => {
      const id = e.target.id.replace("b-", "");
      bstate[id] = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      draw();
    });
    draw();
    P.redraw = draw;
  };

  // ---------- Deal animation ----------
  function dealAnim(felt, g, n) {
    felt.querySelectorAll(".fly,.seat,.caption,.deck").forEach((x) => x.remove());
    const solo = g.max === 1;
    const per = solo ? 0 : Math.min(g.hand || 5, 6);
    const deck = document.createElement("div"); deck.className = "deck"; deck.innerHTML = CA.cardHTML("A", "♠", false); felt.appendChild(deck);
    const cap = document.createElement("div"); cap.className = "caption"; felt.appendChild(cap);
    const W = felt.clientWidth, H = felt.clientHeight;
    const targets = [];
    if (solo) {
      const cols = g.id === "freecell" || g.id === "forty-thieves" ? 8 : 7;
      for (let c = 0; c < cols; c++) for (let r = 0; r <= (g.id === "klondike" || g.id === "yukon" ? c : 3); r++)
        targets.push({ x: (c - (cols - 1) / 2) * Math.min(52, W / (cols + 1)), y: -H * 0.28 + r * 12, rot: 0, up: g.id === "klondike" ? r === c : true });
      cap.textContent = `Shuffle and lay out the ${g.deck.toLowerCase()} as shown in Setup.`;
    } else {
      const seats = [];
      for (let s = 0; s < n; s++) {
        const a = Math.PI / 2 + (s / n) * Math.PI * 2;
        seats.push({ x: Math.cos(a) * W * 0.38, y: Math.sin(a) * H * 0.36, a });
        const lab = document.createElement("div"); lab.className = "seat";
        lab.textContent = s === 0 ? "You" : g.partners && n === 4 && s === 2 ? "Partner" : `Player ${s + 1}`;
        lab.style.left = W / 2 + Math.cos(a) * W * 0.44 + "px"; lab.style.top = H / 2 + Math.sin(a) * H * 0.45 + "px";
        felt.appendChild(lab);
      }
      for (let r = 0; r < per; r++) for (let s = 0; s < n; s++) {
        const st = seats[(s + 1) % n];
        const spread = (r - (per - 1) / 2) * 9;
        const tang = st.a + Math.PI / 2;
        targets.push({ x: st.x * 0.82 + Math.cos(tang) * spread, y: st.y * 0.82 + Math.sin(tang) * spread, rot: (st.a * 180) / Math.PI - 90 + (r - per / 2) * 6, up: false });
      }
      cap.textContent = `Dealing ${g.hand || "the"}${g.hand ? " cards" : " cards"} to each of ${n} players${g.hand > 6 ? " (showing 6)" : ""}…`;
    }
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    CA.sound("shuffle");
    targets.forEach((t, i) => {
      const c = document.createElement("div"); c.className = "fly";
      c.innerHTML = CA.cardHTML(CA.RANKS[i % 13], CA.SUITS[i % 4], false);
      felt.appendChild(c);
      setTimeout(() => {
        c.style.transform = `translate(${t.x}px, ${t.y}px) rotate(${t.rot}deg)`;
        if (t.up) setTimeout(() => c.firstElementChild.classList.replace("down", "up"), 300);
        if (i % 3 === 0) CA.sound("deal");
      }, reduce ? 0 : 300 + i * 70);
    });
    setTimeout(() => { cap.textContent = solo ? "Ready to play!" : `Each player holds ${g.hand} card${g.hand === 1 ? "" : "s"}. Ready to play!`; }, reduce ? 0 : 500 + targets.length * 70);
  }

  // ---------- Game page ----------
  P.game = function (el, id) {
    const g = CA.byId[id];
    if (!g) { el.innerHTML = `<h1>Game not found</h1><p><a href="#/browse">Browse all games</a></p>`; return; }
    const key = pk();
    let n = key !== "all" && !isNaN(+key) && CA.fitsPlayers(g, key) ? +key : g.best[0];
    n = Math.max(g.min, Math.min(g.max, n));
    const counts = []; for (let k = g.min; k <= Math.min(g.max, 8); k++) counts.push(k);
    const learned = !!CA.state.learned[g.id];
    const used = new Set();
    const glossList = (arr) => arr.map((t) => `<li>${CA.suitify(CA.gloss(t, used))}</li>`).join("");
    const fact = (k, v) => `<div class="fact"><b>${k}</b>${v}</div>`;
    const firstCountry = g.countries[0];
    el.innerHTML = `
      <div class="crumbs"><a href="#/">Globe</a> › <a href="#/country/${encodeURIComponent(firstCountry)}">${CA.flag(firstCountry)} ${CA.esc(CA.cname(firstCountry))}</a> › ${CA.esc(g.name)}</div>
      <div class="g-hero">
        <div>
          <h1>${CA.esc(g.name)}</h1>
          ${g.native || g.say ? `<div class="g-native">${g.native ? CA.esc(g.native) : ""}${g.say ? ` · say “${CA.esc(g.say)}”` : ""}</div>` : ""}
          ${g.alt && g.alt.length ? `<div class="crumbs">Also called: ${g.alt.map(CA.esc).join(", ")}</div>` : ""}
          <div class="g-flags">${g.countries.map((c) => `<a href="#/country/${encodeURIComponent(c)}"><span>${CA.flag(c)}</span>${CA.esc(CA.cname(c))}</a>`).join("")}</div>
          <div class="facts">
            ${fact("Players", CA.playersText(g))}
            ${fact("Best with", g.best.join(" or "))}
            ${fact("Time", "≈ " + g.mins + " min")}
            ${fact("Difficulty", `<span class="diff">${"●".repeat(g.diff)}${"○".repeat(5 - g.diff)}</span>`)}
            ${fact("Deck", CA.esc(g.deck))}
            ${fact("Family", CA.esc(CA.famLabel(g.family)))}
            ${fact("Ages", CA.esc(g.age))}
            ${g.partners ? fact("Teams", "Partnerships") : ""}
          </div>
        </div>
        <div class="g-actions no-print">
          ${g.play ? `<a class="btn btn-gold" href="#/play/${g.play}">▶ Play now</a>` : ""}
          <button class="btn ${learned ? "" : "btn-gold"}" id="g-learn">${learned ? "✓ Learned — stamped" : "🛂 Mark as learned"}</button>
          <a class="btn" href="#/records/sheet/${g.id}">📝 Score sheet</a>
          <button class="btn btn-ghost" id="g-print">🖨 Print rules</button>
        </div>
      </div>

      <div class="oneliner">🎯 ${CA.suitify(CA.esc(g.goal))}</div>

      <section class="sec"><h2><span class="num">1</span> Play in 60 seconds</h2><ol class="quick">${g.quick.map((q) => `<li>${CA.suitify(CA.esc(q))}</li>`).join("")}</ol></section>

      <section class="sec"><h2><span class="num">2</span> Setup</h2>
        <div class="table-wrap">
          <div class="felt" id="felt"></div>
          <div class="deal-side">
            ${g.max > 1 ? `<div><b>Players at the table</b><div class="seg" id="seg">${counts.map((k) => `<button data-n="${k}" class="${k === n ? "on" : ""}">${k}${g.best.includes(k) ? "★" : ""}</button>`).join("")}</div></div>` : ""}
            <button class="btn btn-sm" id="redeal">🔁 Deal again</button>
            <ol class="steps plain" style="margin-top:14px">${glossList(g.setup)}</ol>
          </div>
        </div>
      </section>

      <section class="sec"><h2><span class="num">3</span> How to play, step by step</h2><ol class="steps">${glossList(g.rules)}</ol></section>

      ${CA.demos.has(g) ? `<section class="sec no-print"><h2><span class="num">4</span> Watch an example</h2><p class="crumbs">An animated walk-through of how a typical turn works in ${CA.esc(CA.famLabel(g.family).toLowerCase())} games like this one.</p><div id="demo"></div></section>` : ""}

      <section class="sec"><h2><span class="num">5</span> Scoring</h2><ol class="steps plain">${glossList(g.scoring)}</ol></section>

      <section class="sec"><h2><span class="num">6</span> Mistakes & variants</h2>
        <div class="tabs" id="mv-tabs"><button class="tab on" data-t="m">Common mistakes</button><button class="tab" data-t="v">Variants & house rules</button></div>
        <ol class="steps plain" id="mv-m">${glossList(g.mistakes || [])}</ol>
        <ol class="steps plain" id="mv-v" hidden>${glossList(g.variants || [])}</ol>
      </section>

      <section class="sec"><h2><span class="num">7</span> Strategy</h2>
        <div class="tips3">
          <div class="tip"><h4>🌱 Beginner</h4>${CA.suitify(CA.esc(g.tips.b))}</div>
          <div class="tip"><h4>🔥 Intermediate</h4>${CA.suitify(CA.esc(g.tips.i))}</div>
          <div class="tip"><h4>👑 Expert</h4>${CA.suitify(CA.esc(g.tips.e))}</div>
        </div>
      </section>

      <section class="sec"><h2><span class="num">8</span> History & culture</h2><p class="history">${CA.suitify(CA.esc(g.history))}</p></section>

      ${g.related.length ? `<section class="sec no-print"><h2><span class="num">9</span> If you like this, try…</h2><div class="grid">${g.related.map((r, i) => CA.gameCard(CA.byId[r], i)).join("")}</div></section>` : ""}

      <p class="foot">Rules written in plain language for Card Atlas. Card games vary from table to table — agree house rules before you start.</p>`;

    const felt = el.querySelector("#felt");
    requestAnimationFrame(() => dealAnim(felt, g, n));
    const seg = el.querySelector("#seg");
    if (seg) seg.addEventListener("click", (e) => {
      const b = e.target.closest("[data-n]"); if (!b) return;
      n = +b.dataset.n; seg.querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b)); dealAnim(felt, g, n);
    });
    el.querySelector("#redeal").onclick = () => dealAnim(felt, g, n);
    el.querySelector("#g-print").onclick = () => window.print();
    el.querySelector("#g-learn").onclick = (e) => {
      const on = !CA.state.learned[g.id];
      CA.markLearned(g.id, on);
      e.target.textContent = on ? "✓ Learned — stamped" : "🛂 Mark as learned";
      e.target.classList.toggle("btn-gold", !on);
      if (on) { CA.sound("stamp"); CA.toast(`🛂 Passport stamped: ${g.countries.map(CA.cname).join(", ")}`); CA.records && CA.records.checkBadges(); }
    };
    el.querySelector("#mv-tabs").addEventListener("click", (e) => {
      const t = e.target.closest("[data-t]"); if (!t) return;
      el.querySelectorAll("#mv-tabs .tab").forEach((x) => x.classList.toggle("on", x === t));
      el.querySelector("#mv-m").hidden = t.dataset.t !== "m"; el.querySelector("#mv-v").hidden = t.dataset.t !== "v";
      P.observe(el);
    });
    const dh = el.querySelector("#demo");
    if (dh) CA.demos.mount(dh, g);
    P.observe(el);
  };

  // ---------- Play hub ----------
  P.play = function (el) {
    const playable = CA.games.filter((g) => g.play);
    const s = CA.state.sol;
    el.innerHTML = `
      <div class="page-head"><div><div class="crumbs"><a href="#/">Globe</a> › Play</div><h1>Play now</h1></div></div>
      <p style="color:var(--ink2);max-width:640px">Fully playable solitaires with undo, hints and auto-complete. For games with friends at a real table, use the score sheet — it does the maths and keeps your records.</p>
      <div class="play-list">
        ${playable.map((g, i) => `<a class="gcard" href="#/play/${g.play}" style="animation-delay:${i * 80}ms">
          <span class="gc-suit">${["♠", "♥", "♣"][i % 3]}</span><h3>${CA.esc(g.name)}</h3>
          <div class="gc-meta"><span>${CA.flag(g.countries[0])} ${CA.esc(CA.cname(g.countries[0]))}</span><span>Played ${(s[g.id] && s[g.id].played) || 0}</span><span>Won ${(s[g.id] && s[g.id].won) || 0}</span></div></a>`).join("")}
        <a class="gcard" href="#/records/sheet" style="animation-delay:${playable.length * 80}ms"><span class="gc-suit">📝</span><h3>Table game score sheet</h3><div class="gc-meta"><span>Any game, any number of players</span></div></a>
      </div>
      <h2 style="margin-top:34px">Learn something new</h2>
      <div class="grid">${CA.games.filter((g) => CA.fitsPlayers(g, pk()) && !CA.state.learned[g.id]).sort(() => Math.random() - 0.5).slice(0, 6).map(CA.gameCard).join("")}</div>`;
  };
})();
