// Card Atlas — app shell: router, player-count bar, search, theme, tooltips.
(function () {
  CA.indexGames();
  const S = CA.state.settings;
  const $ = (s) => document.querySelector(s);
  const viewGlobe = $("#view-globe"), viewPage = $("#view-page");

  // ---------- theme & sound ----------
  function applyTheme() {
    document.documentElement.dataset.theme = S.theme;
    $("#btn-theme").textContent = S.theme === "dark" ? "🌙" : "☀️";
    CA.globeView.refresh();
  }
  $("#btn-theme").onclick = () => { S.theme = S.theme === "dark" ? "light" : "dark"; CA.save(); applyTheme(); CA.sound("click"); };
  const sndBtn = $("#btn-sound");
  const applySound = () => (sndBtn.textContent = S.sound ? "🔊" : "🔇");
  sndBtn.onclick = () => { S.sound = !S.sound; CA.save(); applySound(); CA.sound("click"); };
  applySound();

  // ---------- player bar ----------
  const pb = $("#pb-opts");
  const pips = { "1": "♠", "2": "♠♥", "3": "♠♥♦", "4": "♠♥♦♣" };
  pb.innerHTML = CA.PLAYER_OPTS.map((o) => `<button class="pb-btn" role="radio" data-k="${o.key}" aria-checked="${S.players === o.key}" aria-label="${o.label} ${o.sub}"><b>${o.label}</b><small>${o.sub}</small>${pips[o.key] ? `<span class="pips">${pips[o.key]}</span>` : ""}</button>`).join("");
  pb.addEventListener("click", (e) => {
    const b = e.target.closest(".pb-btn"); if (!b) return;
    S.players = b.dataset.k; CA.save();
    pb.querySelectorAll(".pb-btn").forEach((x) => x.setAttribute("aria-checked", x === b));
    CA.sound("chip");
    b.animate([{ transform: "translateY(-4px) rotate(0)" }, { transform: "translateY(-10px) rotate(-8deg)" }, { transform: "translateY(-4px) rotate(0)" }], { duration: 380, easing: "cubic-bezier(.34,1.56,.64,1)" });
    CA.globeView.refresh();
    tickCount();
    if (CA.pages.redraw && location.hash.startsWith("#/browse")) CA.pages.redraw();
  });
  pb.addEventListener("keydown", (e) => {
    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    const btns = [...pb.children], i = btns.findIndex((b) => b.getAttribute("aria-checked") === "true");
    const n = btns[(i + (e.key === "ArrowRight" ? 1 : btns.length - 1)) % btns.length]; n.focus(); n.click();
  });
  function tickCount() {
    const el = document.querySelector("#hud-count .count-tick"); if (!el) return;
    const to = +el.dataset.to; let from = 0; const t0 = performance.now();
    const f = (t) => { const p = Math.min(1, (t - t0) / 600); el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
  }

  // ---------- globe controls ----------
  $("#tg-heat").checked = S.heat; $("#tg-arcs").checked = S.arcs;
  $("#tg-heat").onchange = (e) => { S.heat = e.target.checked; CA.save(); CA.globeView.refresh(); };
  $("#tg-arcs").onchange = (e) => { S.arcs = e.target.checked; CA.save(); CA.globeView.refresh(); };
  $("#btn-surprise").onclick = () => CA.globeView.surprise();
  $("#panel-close").onclick = () => CA.globeView.closePanel();

  // ---------- search ----------
  const sIn = $("#search"), sOut = $("#search-results");
  let sel = -1;
  $("#search").placeholder = `Search ${CA.games.length} games, countries…`;
  function showResults() {
    const q = sIn.value.trim();
    if (!q) { sOut.hidden = true; return; }
    const res = CA.search(q, CA.games).slice(0, 8);
    const countries = Object.keys(CA.byCountry).filter((c) => CA.norm(CA.cname(c)).includes(CA.norm(q))).slice(0, 3);
    sel = -1;
    sOut.innerHTML = countries.map((c) => `<a class="sr-item" href="#/country/${encodeURIComponent(c)}"><span style="font-size:1.4rem">${CA.flag(c)}</span><div>${CA.esc(CA.cname(c))}<small>${CA.byCountry[c].length} games · country</small></div></a>`).join("") +
      res.map((g) => `<a class="sr-item" href="#/game/${g.id}"><span style="font-size:1.2rem">${CA.flag(g.countries[0])}</span><div>${CA.esc(g.name)}<small>${g.native ? CA.esc(g.native) + " · " : ""}${CA.playersText(g)} players · ${CA.esc(CA.famLabel(g.family))}</small></div></a>`).join("") ||
      `<div class="sr-item"><div>No matches yet<small>The atlas is growing — try another name.</small></div></div>`;
    sOut.hidden = false;
  }
  sIn.addEventListener("input", showResults);
  sIn.addEventListener("focus", showResults);
  sIn.addEventListener("keydown", (e) => {
    const items = [...sOut.querySelectorAll("a.sr-item")];
    if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length; items.forEach((x, i) => x.classList.toggle("sel", i === sel)); }
    else if (e.key === "Enter") { const it = items[Math.max(0, sel)]; if (it) { location.hash = it.getAttribute("href"); sOut.hidden = true; sIn.blur(); } }
    else if (e.key === "Escape") { sOut.hidden = true; sIn.blur(); }
  });
  document.addEventListener("click", (e) => { if (!e.target.closest(".search-wrap")) sOut.hidden = true; else if (e.target.closest("a.sr-item")) { sOut.hidden = true; sIn.value = ""; } });
  document.addEventListener("keydown", (e) => { if (e.key === "/" && document.activeElement.tagName !== "INPUT") { e.preventDefault(); sIn.focus(); } });

  // ---------- glossary tooltips ----------
  const tip = $("#tooltip");
  function showTip(el) {
    tip.textContent = el.dataset.tip; tip.hidden = false;
    const r = el.getBoundingClientRect();
    const x = Math.min(window.innerWidth - 290, Math.max(8, r.left));
    tip.style.left = x + "px"; tip.style.top = r.bottom + 8 + "px";
  }
  document.addEventListener("mouseover", (e) => { const g = e.target.closest(".gloss"); if (g) showTip(g); });
  document.addEventListener("mouseout", (e) => { if (e.target.closest(".gloss")) tip.hidden = true; });
  document.addEventListener("click", (e) => { const g = e.target.closest(".gloss"); if (g) { showTip(g); setTimeout(() => (tip.hidden = true), 3500); } });
  document.addEventListener("focusin", (e) => { const g = e.target.closest && e.target.closest(".gloss"); if (g) showTip(g); });
  document.addEventListener("focusout", () => (tip.hidden = true));
  window.addEventListener("scroll", () => (tip.hidden = true), { passive: true });

  // ---------- mobile nav ----------
  const mn = document.createElement("nav"); mn.className = "mobile-nav"; mn.setAttribute("aria-label", "Main (mobile)");
  mn.innerHTML = [["globe", "#/", "🌍", "Globe"], ["browse", "#/browse", "🃏", "Browse"], ["play", "#/play", "▶", "Play"], ["records", "#/records", "📝", "Records"], ["passport", "#/passport", "🛂", "Passport"]]
    .map(([k, h, i, l]) => `<a href="${h}" data-nav="${k}"><span>${i}</span>${l}</a>`).join("");
  document.body.appendChild(mn);

  // ---------- router ----------
  let cleanup = null;
  function route() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
    const [r, a, b] = parts;
    if (cleanup) { cleanup(); cleanup = null; }
    document.getElementById("modal").hidden = true;
    const navKey = !r || r === "country" ? "globe" : r === "game" ? "browse" : r;
    document.querySelectorAll("[data-nav]").forEach((x) => x.classList.toggle("active", x.dataset.nav === navKey));
    const showPlayers = !r || r === "country" || r === "browse" || r === "play";
    $("#players-bar").style.display = showPlayers ? "" : "none";

    if (!r || r === "country") {
      viewPage.hidden = true; viewPage.innerHTML = "";
      viewGlobe.style.visibility = "visible"; CA.globeView.resume();
      document.title = "Card Atlas — Card Games of the World";
      if (r === "country" && a) CA.globeView.openCountry(a);
      return;
    }
    viewGlobe.style.visibility = "hidden"; CA.globeView.pause();
    CA.globeView.closePanel();
    viewPage.hidden = false;
    viewPage.style.animation = "none"; void viewPage.offsetHeight; viewPage.style.animation = "";
    window.scrollTo(0, 0);
    if (r === "browse") { CA.pages.browse(viewPage); document.title = "Browse · Card Atlas"; }
    else if (r === "game") { CA.pages.game(viewPage, a); const g = CA.byId[a]; document.title = (g ? g.name + " rules" : "Game") + " · Card Atlas"; const dh = viewPage.querySelector("#demo"); if (dh) cleanup = () => dh._stop && dh._stop(); }
    else if (r === "play" && a) { CA.solitaire.mount(viewPage, a); cleanup = viewPage._cleanup; document.title = "Play " + a + " · Card Atlas"; }
    else if (r === "play") { CA.pages.play(viewPage); document.title = "Play · Card Atlas"; }
    else if (r === "records") { CA.records.render(viewPage, a || "sheet", b); document.title = "Records · Card Atlas"; }
    else if (r === "passport") { CA.records.passport(viewPage); document.title = "Passport · Card Atlas"; }
    else { viewPage.innerHTML = `<h1>Page not found</h1><p><a href="#/">Back to the globe</a></p>`; }
  }
  window.addEventListener("hashchange", route);

  // ---------- boot ----------
  try { CA.globeView.init(); } catch (err) {
    console.error(err);
    $("#globe").innerHTML = `<p style="padding:200px 30px;text-align:center;color:var(--ink2)">The 3D globe needs WebGL, which isn't available here. Use <a href="#/browse">Browse</a> to explore every game.</p>`;
  }
  applyTheme();
  route();
  setTimeout(tickCount, 400);
})();
