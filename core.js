// Card Atlas — shared utilities: storage, sound, flags, glossary, helpers.
(function () {
  const CA = (window.CA = {});

  // ---------- Country metadata ----------
  // Map world-atlas names to ISO alpha-2 (for flag emoji), display name and continent.
  const C = {
    "Canada": ["CA", "N. America"], "United States of America": ["US", "N. America", "United States"],
    "Mexico": ["MX", "N. America"], "Cuba": ["CU", "N. America"], "Jamaica": ["JM", "N. America"],
    "Trinidad and Tobago": ["TT", "N. America"],
    "Argentina": ["AR", "S. America"], "Uruguay": ["UY", "S. America"], "Chile": ["CL", "S. America"],
    "Brazil": ["BR", "S. America"], "Venezuela": ["VE", "S. America"], "Paraguay": ["PY", "S. America"],
    "Bolivia": ["BO", "S. America"],
    "United Kingdom": ["GB", "Europe"], "Ireland": ["IE", "Europe"], "France": ["FR", "Europe"],
    "Netherlands": ["NL", "Europe"], "Belgium": ["BE", "Europe"], "Germany": ["DE", "Europe"],
    "Austria": ["AT", "Europe"], "Switzerland": ["CH", "Europe"], "Liechtenstein": ["LI", "Europe"],
    "Italy": ["IT", "Europe"], "Spain": ["ES", "Europe"], "Portugal": ["PT", "Europe"],
    "Poland": ["PL", "Europe"], "Czechia": ["CZ", "Europe"], "Slovakia": ["SK", "Europe"],
    "Hungary": ["HU", "Europe"], "Slovenia": ["SI", "Europe"], "Croatia": ["HR", "Europe"],
    "Bosnia and Herz.": ["BA", "Europe", "Bosnia and Herzegovina"], "Serbia": ["RS", "Europe"],
    "Montenegro": ["ME", "Europe"], "Macedonia": ["MK", "Europe", "North Macedonia"],
    "Bulgaria": ["BG", "Europe"], "Moldova": ["MD", "Europe"], "Sweden": ["SE", "Europe"],
    "Finland": ["FI", "Europe"], "Russia": ["RU", "Europe"], "Ukraine": ["UA", "Europe"],
    "Belarus": ["BY", "Europe"], "Lithuania": ["LT", "Europe"], "Latvia": ["LV", "Europe"],
    "Turkey": ["TR", "Asia"], "N. Cyprus": ["", "Asia", "Northern Cyprus"],
    "Georgia": ["GE", "Asia"], "Armenia": ["AM", "Asia"], "Azerbaijan": ["AZ", "Asia"],
    "Kazakhstan": ["KZ", "Asia"], "Israel": ["IL", "Asia"], "Lebanon": ["LB", "Asia"],
    "Syria": ["SY", "Asia"], "Palestine": ["PS", "Asia"], "Jordan": ["JO", "Asia"],
    "Iraq": ["IQ", "Asia"], "Kuwait": ["KW", "Asia"], "Iran": ["IR", "Asia"],
    "Afghanistan": ["AF", "Asia"], "Tajikistan": ["TJ", "Asia"], "Pakistan": ["PK", "Asia"],
    "India": ["IN", "Asia"], "Nepal": ["NP", "Asia"], "Bangladesh": ["BD", "Asia"],
    "Sri Lanka": ["LK", "Asia"], "China": ["CN", "Asia"], "Taiwan": ["TW", "Asia"],
    "Japan": ["JP", "Asia"], "South Korea": ["KR", "Asia"], "Vietnam": ["VN", "Asia"],
    "Philippines": ["PH", "Asia"], "Malaysia": ["MY", "Asia"], "Indonesia": ["ID", "Asia"],
    "Egypt": ["EG", "Africa"], "Sudan": ["SD", "Africa"], "Tunisia": ["TN", "Africa"],
    "Libya": ["LY", "Africa"], "Algeria": ["DZ", "Africa"], "Morocco": ["MA", "Africa"],
    "Nigeria": ["NG", "Africa"], "Ghana": ["GH", "Africa"], "Cameroon": ["CM", "Africa"],
    "Benin": ["BJ", "Africa"], "Togo": ["TG", "Africa"], "Kenya": ["KE", "Africa"],
    "Tanzania": ["TZ", "Africa"], "Uganda": ["UG", "Africa"], "Angola": ["AO", "Africa"],
    "Mozambique": ["MZ", "Africa"],
    "Australia": ["AU", "Oceania"], "New Zealand": ["NZ", "Oceania"]
  };
  CA.flag = (name) => {
    const iso = (C[name] || [""])[0];
    if (!iso) return "🏳️";
    return String.fromCodePoint(...[...iso].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
  };
  CA.cname = (name) => (C[name] && C[name][2]) || name;
  CA.continent = (name) => (C[name] && C[name][1]) || "Other";

  // ---------- Game index ----------
  CA.games = [];
  CA.byId = {};
  CA.byCountry = {};
  CA.indexGames = function () {
    const seen = new Set();
    CA.games = (window.GAMES || []).filter((g) => (seen.has(g.id) ? false : seen.add(g.id)));
    CA.games.sort((a, b) => a.name.localeCompare(b.name));
    CA.byId = {};
    CA.byCountry = {};
    for (const g of CA.games) {
      CA.byId[g.id] = g;
      g.best = g.best || [g.min];
      for (const c of g.countries) (CA.byCountry[c] = CA.byCountry[c] || []).push(g);
    }
    for (const g of CA.games) g.related = (g.related || []).filter((r) => CA.byId[r]);
  };

  // ---------- Player-count filter ----------
  CA.PLAYER_OPTS = [
    { key: "all", label: "All", sub: "players" },
    { key: "1", label: "1", sub: "Solo" },
    { key: "2", label: "2", sub: "Pairs" },
    { key: "3", label: "3", sub: "Trio" },
    { key: "4", label: "4", sub: "Four" },
    { key: "5-6", label: "5–6", sub: "Group" },
    { key: "7+", label: "7+", sub: "Party" }
  ];
  CA.fitsPlayers = function (g, key) {
    if (!key || key === "all") return true;
    if (key === "5-6") return g.max >= 5 && g.min <= 6;
    if (key === "7+") return g.max >= 7;
    const n = +key;
    return g.min <= n && g.max >= n;
  };
  CA.bestAt = function (g, key) {
    if (!key || key === "all") return false;
    if (key === "5-6") return g.best.some((b) => b >= 5 && b <= 6);
    if (key === "7+") return g.best.some((b) => b >= 7);
    return g.best.includes(+key);
  };
  CA.playersText = (g) => (g.min === g.max ? `${g.min}` : `${g.min}–${g.max}`) + (g.min === 1 && g.max === 1 ? " (solo)" : "");

  CA.FAMILIES = {
    "patience": "Patience / Solitaire", "trick-taking": "Trick-taking", "fishing": "Fishing (capturing)",
    "shedding": "Shedding", "climbing": "Climbing", "rummy": "Rummy", "vying": "Vying / Betting",
    "banking": "Banking", "collecting": "Collecting", "matching": "Matching / Slap", "war": "War / Slap",
    "adding": "Adding & counting", "poker-trick hybrid": "Poker + tricks"
  };
  CA.famLabel = (f) => CA.FAMILIES[f] || f;

  // ---------- Storage ----------
  const KEY = "cardAtlas.v1";
  const defaults = () => ({ learned: {}, sheets: [], sol: {}, settings: { sound: true, theme: "dark", players: "all", heat: true, arcs: false } });
  CA.state = (() => {
    try { return Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || "{}")); }
    catch (e) { return defaults(); }
  })();
  CA.state.settings = Object.assign(defaults().settings, CA.state.settings || {});
  CA.save = () => { try { localStorage.setItem(KEY, JSON.stringify(CA.state)); } catch (e) {} };

  // ---------- Sound (synthesised; no files needed) ----------
  let actx = null;
  function ctx() {
    if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; } }
    return actx;
  }
  function noiseBurst(dur = 0.05, freq = 2500, gain = 0.15, delay = 0) {
    const a = ctx(); if (!a) return;
    const t = a.currentTime + delay;
    const buf = a.createBuffer(1, Math.floor(a.sampleRate * dur), a.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2);
    const src = a.createBufferSource(); src.buffer = buf;
    const f = a.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = freq; f.Q.value = 0.8;
    const g = a.createGain(); g.gain.value = gain;
    src.connect(f).connect(g).connect(a.destination); src.start(t);
  }
  function tone(freq, dur, gain = 0.08, delay = 0, type = "sine") {
    const a = ctx(); if (!a) return;
    const t = a.currentTime + delay;
    const o = a.createOscillator(); o.type = type; o.frequency.value = freq;
    const g = a.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(a.destination); o.start(t); o.stop(t + dur + 0.02);
  }
  CA.sound = function (kind) {
    if (!CA.state.settings.sound) return;
    if (kind === "flip" || kind === "deal") noiseBurst(0.045, 3200, 0.12);
    else if (kind === "shuffle") { for (let i = 0; i < 14; i++) noiseBurst(0.03, 2600 + Math.random() * 1500, 0.07, i * 0.035); }
    else if (kind === "stamp") { noiseBurst(0.09, 400, 0.4); tone(110, 0.15, 0.15, 0, "triangle"); }
    else if (kind === "click") tone(880, 0.05, 0.04, 0, "triangle");
    else if (kind === "win") { [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.35, 0.07, i * 0.12, "triangle")); }
    else if (kind === "chip") { tone(1800, 0.06, 0.05); tone(2400, 0.05, 0.04, 0.04); }
    else if (kind === "bad") tone(180, 0.15, 0.06, 0, "sawtooth");
  };

  // ---------- Glossary ----------
  CA.GLOSSARY = {
    "trick": "One round in which each player plays a card; the highest card (by the rules) wins all of them.",
    "tricks": "Rounds in which each player plays one card; the winner collects them.",
    "trump": "A suit chosen to beat all other suits for this deal.",
    "trumps": "The suit (or cards) that beat all other suits for this deal.",
    "follow suit": "Play a card of the same suit as the first card of the trick.",
    "meld": "A group of cards laid on the table for points, such as three of a kind or a run.",
    "melds": "Groups of cards laid on the table for points, such as sets or runs.",
    "foundation": "A pile built up in order (usually from Ace) to finish a patience game.",
    "foundations": "Piles built up in order (usually from Ace) to finish a patience game.",
    "tableau": "The main layout of columns in a patience game.",
    "stock": "The face-down pile of undealt cards you draw from.",
    "waste": "The face-up pile where unused stock cards go.",
    "kitty": "Extra cards set aside during the deal, usually taken by the bid winner.",
    "bid": "A promise of how many tricks or points you'll win.",
    "partnership": "Two players on the same team, usually sitting opposite each other.",
    "lead": "Play the first card of a trick.",
    "leads": "Plays the first card of a trick.",
    "deadwood": "Cards in your hand that aren't part of any meld.",
    "run": "Cards in consecutive order, usually of the same suit, e.g. 5, 6, 7 of hearts.",
    "sequence": "Cards in consecutive rank order.",
    "dealer": "The player who shuffles and hands out the cards for this round.",
    "discard": "Put a card face up on the discard pile, ending your turn.",
    "revoke": "Fail to follow suit when you could have: a serious foul.",
    "pile": "A stack of cards on the table."
  };
  const glossKeys = Object.keys(CA.GLOSSARY).sort((a, b) => b.length - a.length);
  const glossRe = new RegExp("\\b(" + glossKeys.map((k) => k.replace(/ /g, "\\s")).join("|") + ")\\b", "gi");
  CA.esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  CA.gloss = function (text, used) {
    used = used || new Set();
    return CA.esc(text).replace(glossRe, (m) => {
      const k = m.toLowerCase().replace(/\s+/g, " ");
      if (used.has(k)) return m;
      used.add(k);
      return `<button type="button" class="gloss" data-tip="${CA.esc(CA.GLOSSARY[k])}">${m}</button>`;
    });
  };
  CA.suitify = (html) => html.replace(/([♠♣])/g, '<span class="s-blk">$1</span>').replace(/([♥♦])/g, '<span class="s-red">$1</span>');

  // ---------- Fuzzy search ----------
  CA.norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9\u0080-￿ ]/g, "");
  CA.search = function (q, list) {
    q = CA.norm(q.trim());
    if (!q) return list;
    const scored = [];
    for (const g of list) {
      const names = [g.name, ...(g.alt || []), g.native || ""].map(CA.norm);
      const countries = g.countries.map((c) => CA.norm(CA.cname(c)));
      let s = 0;
      for (const n of names) {
        if (n === q) s = Math.max(s, 100);
        else if (n.startsWith(q)) s = Math.max(s, 80);
        else if (n.includes(q)) s = Math.max(s, 60);
        else if (subseq(q, n)) s = Math.max(s, 25);
      }
      for (const c of countries) if (c.includes(q)) s = Math.max(s, 50);
      if (CA.norm(CA.famLabel(g.family)).includes(q)) s = Math.max(s, 30);
      if (s) scored.push([s, g]);
    }
    return scored.sort((a, b) => b[0] - a[0]).map((x) => x[1]);
  };
  function subseq(q, s) { let i = 0; for (const ch of s) if (ch === q[i]) i++; return i === q.length && q.length > 2; }

  // ---------- Confetti / celebration ----------
  CA.confetti = function (n = 120) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const host = document.createElement("div"); host.className = "confetti"; document.body.appendChild(host);
    const suits = ["♠", "♥", "♦", "♣"];
    for (let i = 0; i < n; i++) {
      const p = document.createElement("span");
      p.textContent = suits[i % 4];
      p.className = i % 2 ? "red" : "";
      p.style.left = Math.random() * 100 + "vw";
      p.style.animationDelay = Math.random() * 0.8 + "s";
      p.style.animationDuration = 2 + Math.random() * 2 + "s";
      p.style.fontSize = 14 + Math.random() * 22 + "px";
      p.style.setProperty("--dx", (Math.random() * 200 - 100) + "px");
      host.appendChild(p);
    }
    setTimeout(() => host.remove(), 4500);
  };

  CA.toast = function (msg) {
    const t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add("show"));
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 400); }, 2600);
  };

  // ---------- Learned / passport ----------
  CA.markLearned = function (id, on = true) {
    if (on) CA.state.learned[id] = CA.state.learned[id] || Date.now();
    else delete CA.state.learned[id];
    CA.save();
  };
  CA.stampedCountries = function () {
    const ids = new Set(Object.keys(CA.state.learned));
    for (const s of CA.state.sheets) ids.add(s.gameId);
    for (const [id, st] of Object.entries(CA.state.sol)) if (st.played) ids.add(id);
    const set = new Set();
    for (const id of ids) { const g = CA.byId[id]; if (g) g.countries.forEach((c) => set.add(c)); }
    return set;
  };
  CA.knownGames = function () {
    const ids = new Set(Object.keys(CA.state.learned));
    for (const s of CA.state.sheets) ids.add(s.gameId);
    for (const [id, st] of Object.entries(CA.state.sol)) if (st.played) ids.add(id);
    return [...ids].filter((id) => CA.byId[id]);
  };

  // Playing-card HTML (used by demos and solitaire)
  CA.RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  CA.SUITS = ["♠", "♥", "♦", "♣"];
  CA.cardHTML = function (rank, suit, faceUp = true, extra = "") {
    const red = suit === "♥" || suit === "♦";
    return `<div class="pcard ${faceUp ? "up" : "down"} ${red ? "red" : "blk"} ${extra}"><div class="pc-inner">
      <div class="pc-front"><span class="pc-r">${rank}<i>${suit}</i></span><span class="pc-c">${suit}</span><span class="pc-r pc-b">${rank}<i>${suit}</i></span></div>
      <div class="pc-back"></div></div></div>`;
  };
})();
