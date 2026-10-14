// Card Atlas — the animated globe, country panel and "surprise me".
(function () {
  const G = (CA.globeView = {});
  let world = null, features = [], hovered = null, selected = null, centroids = {};
  const FAM_COLORS = {
    "trick-taking": "#e8c46d", "fishing": "#62c3d6", "shedding": "#f08a6c", "climbing": "#ff6f91",
    "rummy": "#9bd27a", "vying": "#c79bff", "patience": "#f4ead2", "collecting": "#ffd36e",
    "matching": "#ffa94d", "war": "#ff8a65", "banking": "#b0e57c", "adding": "#7fd1b9", "poker-trick hybrid": "#d0a8ff"
  };
  const OVERRIDE = {
    "Russia": [61, 95], "United States of America": [39, -98], "Canada": [58, -100], "France": [46.6, 2.4],
    "Norway": [61, 9], "Chile": [-33, -71], "Indonesia": [-2, 117], "Malaysia": [4, 102], "Philippines": [12, 122],
    "Japan": [36.5, 138.5], "New Zealand": [-41, 174], "Croatia": [45.3, 16.2], "Italy": [42.8, 12.5]
  };
  const CONTINENT_VIEWS = {
    "Europe": { lat: 50, lng: 15, altitude: 1.3 }, "Asia": { lat: 30, lng: 95, altitude: 1.9 },
    "Africa": { lat: 5, lng: 20, altitude: 1.8 }, "N. America": { lat: 35, lng: -95, altitude: 1.8 },
    "S. America": { lat: -20, lng: -60, altitude: 1.7 }, "Oceania": { lat: -28, lng: 145, altitude: 1.6 }
  };

  const pkey = () => CA.state.settings.players;
  const countIn = (name) => (CA.byCountry[name] || []).filter((g) => CA.fitsPlayers(g, pkey())).length;
  const maxCount = () => Math.max(1, ...Object.keys(CA.byCountry).map(countIn));

  function centroid(f) {
    const n = f.properties.name;
    if (OVERRIDE[n]) return OVERRIDE[n];
    const g = f.geometry;
    let rings = g.type === "Polygon" ? [g.coordinates[0]] : g.coordinates.map((p) => p[0]);
    rings.sort((a, b) => b.length - a.length);
    const r = rings[0];
    let x = 0, y = 0;
    for (const [lng, lat] of r) { x += lng; y += lat; }
    return [y / r.length, x / r.length];
  }

  const altOf = (f) => (f === hovered ? 0.06 : f.properties.name === selected ? 0.045 : countIn(f.properties.name) ? 0.014 : 0.005);
  function repaint() { if (world) world.polygonCapColor((f) => capColor(f)).polygonAltitude((f) => altOf(f)); }
  function capColor(f) {
    const n = f.properties.name;
    const total = (CA.byCountry[n] || []).length;
    const c = countIn(n);
    const light = document.documentElement.dataset.theme === "light";
    if (f === hovered) return "rgba(255, 224, 140, 0.95)";
    if (n === selected) return "rgba(255, 210, 110, 0.92)";
    if (!total) return light ? "rgba(120, 100, 60, 0.18)" : "rgba(244, 234, 210, 0.10)";
    if (!c) return light ? "rgba(120, 100, 60, 0.12)" : "rgba(244, 234, 210, 0.06)";
    if (!CA.state.settings.heat) return "rgba(212, 173, 85, 0.78)";
    const t = Math.min(1, Math.sqrt(c / maxCount()));
    const r = Math.round(150 + 105 * t), gg = Math.round(110 + 90 * t), b = Math.round(50 + 30 * (1 - t));
    return `rgba(${r}, ${gg}, ${b}, ${0.45 + 0.5 * t})`;
  }

  G.init = function () {
    const el = document.getElementById("globe");
    world = new Globe(el, { animateIn: true })
      .backgroundColor("rgba(0,0,0,0)")
      .showAtmosphere(true)
      .atmosphereColor("#d4ad55")
      .atmosphereAltitude(0.18)
      .polygonsTransitionDuration(350)
      .polygonSideColor(() => "rgba(20, 40, 30, 0.5)")
      .polygonStrokeColor(() => "rgba(212, 173, 85, 0.35)")
      .polygonCapColor(capColor)
      .polygonAltitude(altOf)
      .polygonLabel((f) => {
        const n = f.properties.name, total = (CA.byCountry[n] || []).length, c = countIn(n);
        const pk = pkey();
        return `<div class="globe-tip"><span style="font-size:1.3em">${CA.flag(n)}</span> <b>${CA.esc(CA.cname(n))}</b><br>${
          total ? `${c} game${c === 1 ? "" : "s"}${pk !== "all" ? ` for ${pk === "1" ? "solo" : pk + " players"}` : ""}` : "<i>No games catalogued yet</i>"}</div>`;
      })
      .onPolygonHover((f) => {
        hovered = f || null;
        el.style.cursor = f ? "pointer" : "grab";
        repaint();
      })
      .onPolygonClick((f) => openCountry(f.properties.name))
      .pointsData([])
      .pointLat((d) => d.lat).pointLng((d) => d.lng)
      .pointColor(() => "#ffe08a").pointAltitude(0.02).pointRadius((d) => d.r)
      .pointLabel((d) => `<div class="globe-tip">${CA.flag(d.name)} <b>${CA.esc(CA.cname(d.name))}</b><br>${d.c} games</div>`)
      .onPointClick((d) => openCountry(d.name))
      .ringsData([])
      .ringColor(() => (t) => `rgba(255, 214, 120, ${1 - t})`)
      .ringMaxRadius(5).ringPropagationSpeed(3).ringRepeatPeriod(900)
      .arcsData([])
      .arcColor((d) => [d.color + "00", d.color, d.color + "00"])
      .arcStroke(0.6).arcDashLength(0.45).arcDashGap(0.2).arcDashAnimateTime(2600).arcAltitudeAutoScale(0.4)
      .arcLabel((d) => `<div class="globe-tip"><b>${CA.esc(d.game)}</b><br>${CA.esc(CA.cname(d.from))} → ${CA.esc(CA.cname(d.to))}</div>`)
      .onArcClick((d) => (location.hash = "#/game/" + d.id));

    const mat = world.globeMaterial();
    mat.color && mat.color.set("#0d3b4a");
    if (mat.emissive) { mat.emissive.set("#06202a"); mat.emissiveIntensity = 0.6; }
    mat.shininess = 18;

    const ctl = world.controls();
    ctl.autoRotate = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    ctl.autoRotateSpeed = 0.45;
    ctl.enableDamping = true;
    el.addEventListener("pointerdown", () => { ctl.autoRotate = false; clearTimeout(G._rt); G._rt = setTimeout(() => (ctl.autoRotate = !selected), 9000); });

    world.pointOfView({ lat: 25, lng: 10, altitude: window.innerWidth < 640 ? 3.2 : 2.3 }, 0);

    fetch("vendor/countries-110m.json").then((r) => r.json()).then((topo) => {
      features = topojson.feature(topo, topo.objects.countries).features.filter((f) => f.properties.name !== "Antarctica");
      for (const f of features) centroids[f.properties.name] = centroid(f);
      world.polygonsData(features);
      G.refresh();
    });

    window.addEventListener("resize", () => world.width(window.innerWidth).height(window.innerHeight));

    // continent chips
    const cbox = document.getElementById("continents");
    cbox.innerHTML = Object.keys(CONTINENT_VIEWS).map((k) => `<button class="chip" data-c="${k}">${k}</button>`).join("") + `<button class="chip" data-c="world">🌍 World</button>`;
    cbox.addEventListener("click", (e) => {
      const b = e.target.closest("[data-c]"); if (!b) return;
      CA.sound("click");
      ctl.autoRotate = false;
      const v = b.dataset.c === "world" ? { lat: 25, lng: 10, altitude: 2.3 } : CONTINENT_VIEWS[b.dataset.c];
      world.pointOfView(v, 1400);
      cbox.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c === b));
    });
  };

  G.pause = () => world && world.pauseAnimation();
  G.resume = () => world && world.resumeAnimation();

  G.refresh = function () {
    if (!world || !features.length) return;
    repaint();
    // small clickable markers so tiny countries are easy to tap
    const pts = Object.keys(CA.byCountry).filter((n) => centroids[n]).map((n) => ({ name: n, c: countIn(n), lat: centroids[n][0], lng: centroids[n][1] }))
      .filter((p) => p.c > 0).map((p) => Object.assign(p, { r: 0.25 + Math.min(0.6, p.c / 25) }));
    world.pointsData(pts);
    // arcs
    if (CA.state.settings.arcs) {
      const arcs = [];
      for (const g of CA.games) {
        if (!CA.fitsPlayers(g, pkey()) || g.countries.length < 2) continue;
        const from = g.countries[0];
        if (!centroids[from]) continue;
        for (const to of g.countries.slice(1)) {
          if (!centroids[to]) continue;
          arcs.push({ id: g.id, game: g.name, from, to, startLat: centroids[from][0], startLng: centroids[from][1], endLat: centroids[to][0], endLng: centroids[to][1], color: FAM_COLORS[g.family] || "#e8c46d" });
        }
      }
      world.arcsData(arcs);
    } else world.arcsData([]);
    // headline count
    const n = CA.games.filter((g) => CA.fitsPlayers(g, pkey())).length;
    const countries = Object.keys(CA.byCountry).filter((c) => countIn(c) > 0).length;
    const hud = document.getElementById("hud-count");
    if (hud) hud.innerHTML = `<b class="count-tick" data-to="${n}">${n}</b> games across <b>${countries}</b> countries${pkey() !== "all" ? ` for <b>${pkey() === "1" ? "solo play" : pkey() + " players"}</b>` : ""}. Tap a country to explore.`;
    if (selected) renderPanel(selected, false);
  };

  function openCountry(name) {
    CA.sound("flip");
    selected = name;
    const c = centroids[name];
    world.controls().autoRotate = false;
    if (c) world.pointOfView({ lat: c[0] - (window.innerWidth < 640 ? 12 : 0), lng: c[1] + (window.innerWidth > 900 ? 18 : 0), altitude: 1.5 }, 1200);
    if (c) world.ringsData([{ lat: c[0], lng: c[1] }]);
    repaint();
    renderPanel(name, true);
  }
  G.openCountry = (n) => { if (!features.length) return setTimeout(() => G.openCountry(n), 300); openCountry(n); };

  G.closePanel = function () {
    selected = null;
    document.getElementById("panel").hidden = true;
    if (world) { world.ringsData([]); repaint(); }
  };

  CA.gameCard = function (g, i = 0) {
    const pk = pkey();
    const suit = ["♠", "♥", "♦", "♣"][g.name.length % 4];
    const red = suit === "♥" || suit === "♦";
    const star = CA.bestAt(g, pk) ? `<span class="star" title="Best at this player count">★ best</span>` : "";
    const learned = CA.state.learned[g.id] ? `<span class="gc-learned">✓ learned</span>` : "";
    return `<a class="gcard" href="#/game/${g.id}" style="animation-delay:${Math.min(i, 14) * 45}ms">
      <span class="gc-suit" style="color:${red ? "var(--red)" : "var(--blk)"}">${suit}</span>${learned}
      <h3>${CA.esc(g.name)}</h3>
      <div class="gc-meta"><span>👥 ${CA.playersText(g)}</span><span>${CA.esc(CA.famLabel(g.family))}</span><span class="diff" title="Difficulty">${"●".repeat(g.diff)}${"○".repeat(5 - g.diff)}</span>${g.play ? "<span>▶ playable</span>" : ""}${star}</div>
    </a>`;
  };

  function renderPanel(name, anim) {
    const panel = document.getElementById("panel");
    const all = CA.byCountry[name] || [];
    const pk = pkey();
    const list = all.filter((g) => CA.fitsPlayers(g, pk)).sort((a, b) => (CA.bestAt(b, pk) - CA.bestAt(a, pk)) || a.name.localeCompare(b.name));
    const stamped = CA.stampedCountries().has(name);
    document.getElementById("panel-body").innerHTML = `
      <h2><span class="flag">${CA.flag(name)}</span>${CA.esc(CA.cname(name))}</h2>
      <div class="sub">${CA.continent(name)} · <span class="count-tick">${list.length}</span> of ${all.length} game${all.length === 1 ? "" : "s"} ${pk !== "all" ? `for ${pk === "1" ? "solo" : pk + " players"}` : ""} ${stamped ? " · <b style='color:var(--brass)'>🛂 stamped</b>" : ""}</div>
      ${all.length ? "" : `<p class="empty">No games catalogued for this country yet. The atlas is growing — try a neighbour!</p>`}
      ${all.length && !list.length ? `<p class="empty">No games here for this player count. Try another count above.</p>` : ""}
      <div class="glist">${list.map((g, i) => CA.gameCard(g, anim ? i : 99)).join("")}</div>`;
    panel.hidden = false;
    if (anim) { panel.style.animation = "none"; panel.offsetHeight; panel.style.animation = ""; }
  }

  // Surprise me: spin like a roulette wheel, land on a random game
  G.surprise = function () {
    const pool = CA.games.filter((g) => CA.fitsPlayers(g, pkey()));
    if (!pool.length) return;
    const g = pool[Math.floor(Math.random() * pool.length)];
    const country = g.countries[Math.floor(Math.random() * g.countries.length)];
    G.closePanel();
    CA.sound("shuffle");
    const ctl = world.controls();
    ctl.autoRotate = true;
    ctl.autoRotateSpeed = 35;
    const t0 = performance.now();
    const step = () => {
      const t = (performance.now() - t0) / 1800;
      ctl.autoRotateSpeed = 35 * Math.max(0, 1 - t);
      if (t < 1) requestAnimationFrame(step);
      else {
        ctl.autoRotate = false; ctl.autoRotateSpeed = 0.45;
        const c = centroids[country] || [0, 0];
        world.pointOfView({ lat: c[0], lng: c[1], altitude: 1.6 }, 1100);
        world.ringsData([{ lat: c[0], lng: c[1] }]);
        selected = country;
        repaint();
        setTimeout(() => reveal(g, country), 1000);
      }
    };
    requestAnimationFrame(step);
  };

  function reveal(g, country) {
    CA.sound("flip");
    const m = document.getElementById("modal");
    m.className = "modal reveal";
    m.innerHTML = `<div class="modal-card">
      <div style="font-size:2.4rem">${CA.flag(country)}</div>
      <p style="margin:0;color:#8a7a52">Your game from ${CA.esc(CA.cname(country))} is…</p>
      <h2>${CA.esc(g.name)}</h2>
      <p>${CA.esc(g.goal)}</p>
      <p style="color:#6c624c;font-size:.9rem">👥 ${CA.playersText(g)} players · ${CA.esc(CA.famLabel(g.family))} · ⏱ ${g.mins} min</p>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <a class="btn btn-gold" href="#/game/${g.id}">Learn it →</a>
        <button class="btn" data-close>Spin again</button>
      </div></div>`;
    m.hidden = false;
    m.onclick = (e) => {
      if (e.target === m || e.target.closest("[data-close]")) {
        m.hidden = true;
        if (e.target.closest("[data-close]")) G.surprise();
      } else if (e.target.closest("a")) m.hidden = true;
    };
  }
})();
