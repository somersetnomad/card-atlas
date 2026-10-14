// Card Atlas — Record keeper (score sheets, stats, groups, badges) and the Passport.
(function () {
  const R = (CA.records = {});
  const LOW_WINS = new Set(["hearts", "golf", "chinchon", "kalooki", "indian-rummy"]);
  let tab = "sheet";

  // ---------- Badges ----------
  const BADGES = [
    { id: "first", ico: "🃏", name: "First Deal", desc: "Learn or record your first game", test: (k) => k.known.length >= 1 },
    { id: "five", ico: "🖐️", name: "Handful", desc: "Know 5 games", test: (k) => k.known.length >= 5 },
    { id: "poly", ico: "📚", name: "Card Scholar", desc: "Know 25 games", test: (k) => k.known.length >= 25 },
    { id: "trick", ico: "🏆", name: "Trick Master", desc: "Know 10 trick-taking games", test: (k) => k.fam["trick-taking"] >= 10 },
    { id: "fish", ico: "🎣", name: "Fisher King", desc: "Know 3 fishing games", test: (k) => k.fam["fishing"] >= 3 },
    { id: "climb", ico: "🧗", name: "Climber", desc: "Know 3 climbing games", test: (k) => k.fam["climbing"] >= 3 },
    { id: "world", ico: "🌍", name: "Around the World", desc: "A game from every inhabited continent", test: (k) => k.continents >= 6 },
    { id: "trot", ico: "✈️", name: "Globetrotter", desc: "Stamp 25 countries", test: (k) => k.countries >= 25 },
    { id: "sol1", ico: "🌟", name: "Clean Table", desc: "Win a solitaire", test: (k) => k.solWins >= 1 },
    { id: "sol50", ico: "😇", name: "Patience Saint", desc: "Win 50 solitaires", test: (k) => k.solWins >= 50 },
    { id: "sheet", ico: "📝", name: "Score Keeper", desc: "Finish 10 score sheets", test: (k) => k.sheets >= 10 },
    { id: "family", ico: "👨‍👩‍👧", name: "Card Night Regular", desc: "Record 5 sessions with one group", test: (k) => k.bestGroup >= 5 }
  ];
  function kpis() {
    const known = CA.knownGames();
    const fam = {};
    known.forEach((id) => { const f = CA.byId[id].family; fam[f] = (fam[f] || 0) + 1; });
    const stamped = CA.stampedCountries();
    const conts = new Set([...stamped].map(CA.continent));
    const solWins = Object.values(CA.state.sol).reduce((a, s) => a + (s.won || 0), 0);
    const groups = {};
    CA.state.sheets.forEach((s) => s.group && (groups[s.group] = (groups[s.group] || 0) + 1));
    return { known, fam, countries: stamped.size, continents: [...conts].filter((c) => c !== "Other").length, solWins, sheets: CA.state.sheets.length, bestGroup: Math.max(0, ...Object.values(groups)) };
  }
  R.checkBadges = function () {
    const k = kpis();
    CA.state.badges = CA.state.badges || {};
    for (const b of BADGES) if (!CA.state.badges[b.id] && b.test(k)) {
      CA.state.badges[b.id] = Date.now();
      setTimeout(() => { CA.toast(`${b.ico} Badge unlocked: ${b.name}!`); CA.sound("win"); }, 800);
    }
    CA.save();
  };

  // ---------- helpers ----------
  const totals = (sh) => sh.players.map((_, p) => sh.rounds.reduce((a, r) => a + (+r[p] || 0), 0));
  const leaderIdx = (sh) => {
    const t = totals(sh); if (!t.length) return -1;
    const best = sh.lowWins ? Math.min(...t) : Math.max(...t);
    return t.indexOf(best);
  };
  function newSheet(gameId) {
    return { id: "s" + Date.now(), gameId: gameId || "", group: (CA.state.lastGroup || ""), players: (CA.state.lastPlayers || []).slice(), rounds: [], lowWins: LOW_WINS.has(gameId), target: "", date: Date.now() };
  }

  // ---------- Records page ----------
  R.render = function (el, sub, arg) {
    if (sub) tab = sub;
    const tabs = [["sheet", "📝 Score sheet"], ["history", "🗂 History"], ["stats", "📊 Stats"], ["groups", "👥 Groups"], ["badges", "🏅 Badges"]];
    el.innerHTML = `
      <div class="page-head"><div><div class="crumbs"><a href="#/">Globe</a> › Records</div><h1>Record keeper</h1></div>
        <div class="row"><button class="btn btn-sm" id="r-csv">⬇ Export CSV</button><button class="btn btn-sm" id="r-json">💾 Backup</button><label class="btn btn-sm">📂 Restore<input type="file" id="r-load" accept=".json" hidden></label></div></div>
      <div class="tabs">${tabs.map(([k, v]) => `<a class="tab ${k === tab ? "on" : ""}" href="#/records/${k}">${v}</a>`).join("")}</div>
      <div id="r-body"></div>`;
    const body = el.querySelector("#r-body");
    ({ sheet: sheetView, history: historyView, stats: statsView, groups: groupsView, badges: badgesView })[tab](body, arg);
    el.querySelector("#r-csv").onclick = exportCSV;
    el.querySelector("#r-json").onclick = () => download("card-atlas-backup.json", JSON.stringify(CA.state, null, 1), "application/json");
    el.querySelector("#r-load").onchange = (e) => {
      const f = e.target.files[0]; if (!f) return;
      f.text().then((t) => { try { const d = JSON.parse(t); if (!d || typeof d !== "object") throw 0; Object.assign(CA.state, d); CA.save(); CA.toast("Backup restored"); R.render(el); } catch (err) { CA.toast("That file isn't a Card Atlas backup"); } });
    };
  };

  function download(name, text, type) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type }));
    a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  function exportCSV() {
    const rows = [["date", "game", "group", "player", "total", "winner"]];
    CA.state.sheets.forEach((s) => {
      const t = totals(s); const w = s.players[s.winner];
      s.players.forEach((p, i) => rows.push([new Date(s.date).toISOString().slice(0, 10), (CA.byId[s.gameId] || {}).name || s.gameId, s.group || "", p, t[i], p === w ? "yes" : ""]));
    });
    download("card-atlas-records.csv", rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n"), "text/csv");
  }

  // ----- score sheet -----
  function sheetView(body, gameId) {
    let sh = CA.state.active;
    if (!sh || (gameId && sh.gameId !== gameId && !sh.rounds.length)) { sh = CA.state.active = newSheet(gameId); CA.save(); }
    if (gameId && sh.gameId !== gameId && sh.rounds.length) CA.toast("You have an unfinished sheet — finish or discard it first.");
    const groups = [...new Set(CA.state.sheets.map((s) => s.group).filter(Boolean))];
    const draw = () => {
      const g = CA.byId[sh.gameId];
      const t = totals(sh), lead = sh.rounds.length ? leaderIdx(sh) : -1;
      body.innerHTML = `
        <div class="surface">
          <div class="row">
            <label class="field" style="flex:1;min-width:200px">Game
              <select id="s-game"><option value="">— choose a game —</option>${CA.games.map((x) => `<option value="${x.id}" ${x.id === sh.gameId ? "selected" : ""}>${CA.esc(x.name)} (${CA.playersText(x)})</option>`).join("")}</select></label>
            <label class="field">Group (optional)<input id="s-group" list="s-groups" value="${CA.esc(sh.group)}" placeholder="e.g. Friday Card Night"><datalist id="s-groups">${groups.map((x) => `<option value="${CA.esc(x)}">`).join("")}</datalist></label>
            <label class="field">Play to (optional)<input id="s-target" type="number" value="${CA.esc(sh.target)}" style="width:110px" placeholder="e.g. 500"></label>
            <label class="toggle" title="For games like Hearts or Golf"><input type="checkbox" id="s-low" ${sh.lowWins ? "checked" : ""}> Lowest score wins</label>
          </div>
          <div class="row" style="margin-top:14px">
            <label class="field" style="flex:1">Players<input id="s-name" placeholder="Type a name and press Enter" maxlength="24"></label>
            <button class="btn btn-sm" id="s-add">+ Add player</button>
          </div>
          <div class="pill-list" style="margin-top:10px">${sh.players.map((p, i) => `<span class="pill">${CA.esc(p)} <button data-rm="${i}" aria-label="Remove ${CA.esc(p)}">×</button></span>`).join("")}</div>
          ${g && sh.players.length && (sh.players.length < g.min || sh.players.length > g.max) ? `<p style="color:var(--brass)">Heads up: ${CA.esc(g.name)} is usually played by ${CA.playersText(g)} players.</p>` : ""}
        </div>
        ${sh.players.length ? `
        <div class="surface" style="margin-top:14px;overflow-x:auto">
          <table class="sheet">
            <thead><tr><th>Round</th>${sh.players.map((p, i) => `<th class="${i === lead ? "lead-col" : ""}">${i === lead ? "👑 " : ""}${CA.esc(p)}</th>`).join("")}<th></th></tr></thead>
            <tbody>${sh.rounds.map((r, ri) => `<tr><td>${ri + 1}</td>${sh.players.map((_, pi) => `<td class="${pi === lead ? "lead-col" : ""}"><input type="number" inputmode="numeric" data-r="${ri}" data-p="${pi}" value="${r[pi] ?? ""}"></td>`).join("")}<td><button class="btn btn-sm btn-ghost" data-delr="${ri}" aria-label="Delete round">🗑</button></td></tr>`).join("")}</tbody>
            <tfoot><tr><td>Total</td>${t.map((v, i) => `<td class="${i === lead ? "lead-col" : ""}">${v}</td>`).join("")}<td></td></tr></tfoot>
          </table>
          <div class="row" style="margin-top:12px">
            <button class="btn" id="s-round">+ Add round</button>
            <button class="btn btn-gold" id="s-finish" ${sh.rounds.length ? "" : "disabled"}>🏁 Finish & save</button>
            <button class="btn btn-ghost" id="s-discard">Discard</button>
            ${g ? `<a class="btn btn-ghost" href="#/game/${g.id}">📖 ${CA.esc(g.name)} rules</a>` : ""}
          </div>
        </div>` : `<p class="empty">Add players to start a score sheet.</p>`}`;
      wire();
    };
    const save = () => { CA.state.active = sh; CA.save(); };
    function wire() {
      const $ = (s) => body.querySelector(s);
      $("#s-game").onchange = (e) => { sh.gameId = e.target.value; sh.lowWins = LOW_WINS.has(sh.gameId); save(); draw(); };
      $("#s-group").oninput = (e) => { sh.group = e.target.value.trim(); save(); };
      $("#s-target").oninput = (e) => { sh.target = e.target.value; save(); };
      $("#s-low").onchange = (e) => { sh.lowWins = e.target.checked; save(); draw(); };
      const add = () => { const v = $("#s-name").value.trim(); if (!v) return; sh.players.push(v); sh.rounds.forEach((r) => r.push("")); CA.sound("chip"); save(); draw(); body.querySelector("#s-name").focus(); };
      $("#s-add").onclick = add;
      $("#s-name").onkeydown = (e) => e.key === "Enter" && add();
      body.querySelectorAll("[data-rm]").forEach((b) => (b.onclick = () => { const i = +b.dataset.rm; sh.players.splice(i, 1); sh.rounds.forEach((r) => r.splice(i, 1)); save(); draw(); }));
      if (!sh.players.length) return;
      $("#s-round").onclick = () => { sh.rounds.push(sh.players.map(() => "")); CA.sound("deal"); save(); draw(); const ins = body.querySelectorAll(`[data-r="${sh.rounds.length - 1}"]`); ins[0] && ins[0].focus(); };
      body.querySelectorAll("[data-delr]").forEach((b) => (b.onclick = () => { sh.rounds.splice(+b.dataset.delr, 1); save(); draw(); }));
      body.querySelectorAll("input[data-r]").forEach((inp) => {
        inp.oninput = () => {
          sh.rounds[+inp.dataset.r][+inp.dataset.p] = inp.value === "" ? "" : +inp.value; save();
          const tt = totals(sh), ld = leaderIdx(sh);
          const foot = body.querySelectorAll("tfoot td");
          tt.forEach((v, i) => { foot[i + 1].textContent = v; });
          const heads = body.querySelectorAll("thead th");
          sh.players.forEach((p, i) => { heads[i + 1].textContent = (i === ld ? "👑 " : "") + p; });
          body.querySelectorAll("table.sheet tr").forEach((tr) => [...tr.children].forEach((td, ci) => ci > 0 && ci <= sh.players.length && td.classList.toggle("lead-col", ci - 1 === ld)));
        };
        inp.onchange = () => {
          const tt = totals(sh);
          if (sh.target && tt.some((v) => v >= +sh.target)) CA.toast(`🎯 Someone reached ${sh.target}! Finish the game when ready.`);
        };
      });
      $("#s-discard").onclick = () => { if (confirm("Discard this score sheet?")) { CA.state.active = newSheet(""); save(); draw(); } };
      $("#s-finish").onclick = finish;
    }
    function finish() {
      if (!sh.gameId) { CA.toast("Choose which game you played first"); return; }
      const w = leaderIdx(sh);
      const done = Object.assign({}, sh, { winner: w, date: Date.now(), totals: totals(sh) });
      CA.state.sheets.unshift(done);
      CA.state.lastPlayers = sh.players.slice(); CA.state.lastGroup = sh.group;
      CA.state.active = newSheet(sh.gameId);
      CA.save();
      const g = CA.byId[done.gameId];
      CA.sound("win"); CA.confetti();
      const m = document.getElementById("modal");
      m.className = "modal reveal";
      m.innerHTML = `<div class="modal-card"><div style="font-size:3rem">👑</div><p style="margin:0;color:#8a7a52">${CA.esc(g ? g.name : "")} winner</p><h2>${CA.esc(done.players[w] || "")}</h2>
        <p>${done.players.map((p, i) => `${CA.esc(p)}: <b>${done.totals[i]}</b>`).join(" · ")}</p>
        <p style="color:#6c624c;font-size:.9rem">Saved to your records${done.group ? ` for “${CA.esc(done.group)}”` : ""}. ${g ? "Passport stamped for " + g.countries.map((c) => CA.flag(c)).join(" ") : ""}</p>
        <button class="btn btn-gold" data-close>Nice!</button></div>`;
      m.hidden = false; m.onclick = (e) => { if (e.target === m || e.target.closest("[data-close]")) m.hidden = true; };
      R.checkBadges();
      sh = CA.state.active; draw();
    }
    draw();
  }

  function historyView(body) {
    const sh = CA.state.sheets;
    body.innerHTML = `<div class="surface">${sh.length ? sh.map((s, i) => {
      const g = CA.byId[s.gameId];
      return `<div class="hist-item"><div><b>${g ? `<a href="#/game/${g.id}">${CA.esc(g.name)}</a>` : CA.esc(s.gameId)}</b> ${g ? CA.flag(g.countries[0]) : ""}<br><small style="color:var(--muted)">${new Date(s.date).toLocaleString()} ${s.group ? "· " + CA.esc(s.group) : ""} · ${s.rounds.length} rounds</small></div>
        <div>${s.players.map((p, k) => `${k === s.winner ? "👑 " : ""}${CA.esc(p)} <b>${(s.totals || totals(s))[k]}</b>`).join(" · ")} <button class="btn btn-sm btn-ghost" data-del="${i}" aria-label="Delete">🗑</button></div></div>`;
    }).join("") : `<p class="empty">No finished games yet. Start a score sheet!</p>`}</div>`;
    body.querySelectorAll("[data-del]").forEach((b) => (b.onclick = () => { if (confirm("Delete this record?")) { CA.state.sheets.splice(+b.dataset.del, 1); CA.save(); historyView(body); } }));
  }

  function statsView(body) {
    const k = kpis();
    const sol = CA.state.sol;
    const solPlayed = Object.values(sol).reduce((a, s) => a + (s.played || 0), 0);
    const byGame = {}, wins = {};
    CA.state.sheets.forEach((s) => { byGame[s.gameId] = (byGame[s.gameId] || 0) + 1; const w = s.players[s.winner]; if (w) wins[w] = (wins[w] || 0) + 1; });
    const top = Object.entries(byGame).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const topW = Object.entries(wins).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const max1 = Math.max(1, ...top.map((x) => x[1])), max2 = Math.max(1, ...topW.map((x) => x[1]));
    const streak = Math.max(0, ...Object.values(sol).map((s) => s.bestStreak || 0));
    body.innerHTML = `
      <div class="stat-grid">
        <div class="stat"><b>${CA.state.sheets.length}</b><span>table games recorded</span></div>
        <div class="stat"><b>${k.known.length}</b><span>games known</span></div>
        <div class="stat"><b>${k.countries}</b><span>countries stamped</span></div>
        <div class="stat"><b>${solPlayed}</b><span>solitaires played</span></div>
        <div class="stat"><b>${k.solWins}</b><span>solitaires won ${solPlayed ? `(${Math.round((k.solWins / solPlayed) * 100)}%)` : ""}</span></div>
        <div class="stat"><b>${streak}</b><span>best win streak</span></div>
      </div>
      <div class="tips3" style="margin-top:16px">
        <div class="surface"><h3>Most played</h3><div class="bars">${top.length ? top.map(([id, n]) => `<div class="bar"><span>${CA.esc((CA.byId[id] || {}).name || id)}</span><i style="width:${(n / max1) * 100}%"></i><b>${n}</b></div>`).join("") : `<p class="empty">Nothing yet.</p>`}</div></div>
        <div class="surface"><h3>Most wins</h3><div class="bars">${topW.length ? topW.map(([p, n]) => `<div class="bar"><span>${CA.esc(p)}</span><i style="width:${(n / max2) * 100}%"></i><b>${n}</b></div>`).join("") : `<p class="empty">Nothing yet.</p>`}</div></div>
        <div class="surface"><h3>Solitaire</h3><div class="bars">${Object.entries(sol).map(([id, s]) => `<div class="bar"><span>${CA.esc((CA.byId[id] || {}).name || id)}</span><i style="width:${s.played ? (s.won / s.played) * 100 : 0}%"></i><b>${s.won || 0}/${s.played || 0}</b></div>`).join("") || `<p class="empty">Play a solitaire to see stats.</p>`}</div></div>
      </div>`;
  }

  function groupsView(body) {
    const groups = {};
    CA.state.sheets.forEach((s) => { if (!s.group) return; (groups[s.group] = groups[s.group] || []).push(s); });
    const names = Object.keys(groups);
    body.innerHTML = names.length ? names.map((gname) => {
      const list = groups[gname];
      const wins = {}, played = {}, h2h = {};
      list.forEach((s) => {
        s.players.forEach((p) => (played[p] = (played[p] || 0) + 1));
        const w = s.players[s.winner]; if (w) wins[w] = (wins[w] || 0) + 1;
        s.players.forEach((p) => { if (p !== w && w) { const key = w + "|" + p; h2h[key] = (h2h[key] || 0) + 1; } });
      });
      const ppl = Object.keys(played).sort((a, b) => (wins[b] || 0) - (wins[a] || 0));
      return `<div class="surface" style="margin-bottom:14px"><h3>👥 ${CA.esc(gname)} <small style="color:var(--muted);font-family:var(--font-b)">· ${list.length} sessions</small></h3>
        <table class="sheet"><thead><tr><th>#</th><th>Player</th><th>Wins</th><th>Played</th><th>Win %</th></tr></thead><tbody>
        ${ppl.map((p, i) => `<tr><td>${["🥇", "🥈", "🥉"][i] || i + 1}</td><td>${CA.esc(p)}</td><td>${wins[p] || 0}</td><td>${played[p]}</td><td>${Math.round(((wins[p] || 0) / played[p]) * 100)}%</td></tr>`).join("")}</tbody></table>
        ${ppl.length > 1 ? `<details style="margin-top:10px"><summary>Head-to-head</summary><table class="sheet"><thead><tr><th>Beat →</th>${ppl.map((p) => `<th>${CA.esc(p)}</th>`).join("")}</tr></thead><tbody>${ppl.map((a) => `<tr><td><b>${CA.esc(a)}</b></td>${ppl.map((b) => `<td>${a === b ? "—" : h2h[a + "|" + b] || 0}</td>`).join("")}</tr>`).join("")}</tbody></table></details>` : ""}</div>`;
    }).join("") : `<div class="surface"><p class="empty">Give a score sheet a group name (like “Friday Card Night”) and its leaderboard will appear here.</p></div>`;
  }

  function badgesView(body) {
    R.checkBadges();
    const k = kpis();
    body.innerHTML = `<div class="badges">${BADGES.map((b) => `<div class="badge ${CA.state.badges[b.id] ? "got" : ""}"><span class="b-ico">${b.ico}</span><b>${b.name}</b><small>${b.desc}</small></div>`).join("")}</div>
      <p class="crumbs" style="margin-top:14px">Progress: ${k.known.length} games known · ${k.countries} countries · ${k.continents}/6 continents · ${k.solWins} solitaire wins.</p>`;
  }

  // ---------- Passport ----------
  R.passport = function (el) {
    const stamped = CA.stampedCountries();
    const prev = new Set(CA.state.seenStamps || []);
    const all = Object.keys(CA.byCountry).sort((a, b) => CA.cname(a).localeCompare(CA.cname(b)));
    const byCont = {};
    all.forEach((c) => (byCont[CA.continent(c)] = byCont[CA.continent(c)] || []).push(c));
    const pct = Math.round((stamped.size / all.length) * 100);
    el.innerHTML = `
      <div class="page-head"><div><div class="crumbs"><a href="#/">Globe</a> › Passport</div><h1>Card Passport</h1></div>
      <div class="crumbs">Learn a game (or record one) to stamp every country it comes from.</div></div>
      <div class="passport"><h2>✦ Passport of Play ✦</h2><div class="passport-inner">
        <p style="margin:0"><b style="font-family:var(--font-d);font-size:1.4rem">${stamped.size}</b> of ${all.length} card-playing countries in the atlas · ${stamped.size} of 195 countries in the world</p>
        <div class="pp-progress"><i style="width:0"></i></div>
        ${Object.entries(byCont).map(([cont, list]) => `<h3 style="margin-top:18px">${cont}</h3><div class="stamps">${list.map((c) => {
          const on = stamped.has(c);
          const rot = ((c.length * 37) % 24) - 12;
          return `<a class="stamp ${on ? "on" : ""} ${on && !prev.has(c) ? "new" : ""}" style="--rot:${rot}deg" href="#/country/${encodeURIComponent(c)}" title="${CA.esc(CA.cname(c))}">
            <div><span class="fl">${CA.flag(c)}</span><b>${CA.esc(CA.cname(c))}</b>${on ? "visited" : `${CA.byCountry[c].length} game${CA.byCountry[c].length === 1 ? "" : "s"}`}</div></a>`;
        }).join("")}</div>`).join("")}
      </div></div>`;
    requestAnimationFrame(() => setTimeout(() => (el.querySelector(".pp-progress i").style.width = pct + "%"), 100));
    if ([...stamped].some((c) => !prev.has(c))) setTimeout(() => CA.sound("stamp"), 300);
    CA.state.seenStamps = [...stamped]; CA.save();
  };
})();
