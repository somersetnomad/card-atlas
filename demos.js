// Card Atlas — animated "watch a hand" demos, one per game family.
(function () {
  const D = (CA.demos = {});
  const NO_TRUMP = new Set(["hearts", "tressette", "sevens"]);

  function Stage(el) {
    this.el = el; this.cards = {};
  }
  Stage.prototype.reset = function () { this.el.innerHTML = ""; this.cards = {}; };
  Stage.prototype.add = function (id, rank, suit, x, y, up = true, rot = 0) {
    const w = document.createElement("div");
    w.className = "dc"; w.innerHTML = CA.cardHTML(rank, suit, up);
    w.firstElementChild.style.cssText = "width:56px;height:78px";
    this.el.appendChild(w);
    this.cards[id] = w; this.pos(id, x, y, rot);
    return this;
  };
  Stage.prototype.pos = function (id, x, y, rot = 0, scale = 1) {
    const c = this.cards[id]; if (!c) return this;
    c.style.left = x + "%"; c.style.top = y + "%";
    c.style.transform = `translate(-50%,-50%) rotate(${rot}deg) scale(${scale})`;
    return this;
  };
  Stage.prototype.flip = function (id, up = true) { const c = this.cards[id]; if (c) c.firstElementChild.classList.toggle("down", !up), c.firstElementChild.classList.toggle("up", up); return this; };
  Stage.prototype.glow = function (ids, on = true) { [].concat(ids).forEach((id) => this.cards[id] && this.cards[id].firstElementChild.querySelector(".pc-front").classList.toggle("glow", on)); return this; };
  Stage.prototype.fade = function (id) { const c = this.cards[id]; if (c) c.style.opacity = 0; return this; };
  Stage.prototype.label = function (text, x, y) {
    const l = document.createElement("div"); l.className = "dlabel"; l.textContent = text;
    l.style.left = x + "%"; l.style.top = y + "%"; this.el.appendChild(l); return this;
  };
  Stage.prototype.instant = function (on) { this.el.querySelectorAll(".dc").forEach((c) => (c.style.transition = on ? "none" : "")); };

  // ----- scripts -----
  const S = {};
  S["trick-taking"] = (g) => {
    const trumps = !NO_TRUMP.has(g.id);
    return [
      { who: "Deal", cap: "Four players each hold a hand. South leads the first card of the trick.", do(s) {
        s.label("North", 50, 6).label("South", 50, 95).label("West", 7, 50).label("East", 93, 50);
        s.add("s", "7", "♥", 50, 82).add("w", "Q", "♥", 14, 50, false, 90).add("n", trumps ? "2" : "4", trumps ? "♠" : "♣", 50, 18, false).add("e", "A", "♥", 86, 50, false, -90);
      } },
      { who: "South", cap: "South leads the 7♥. Everyone must follow suit (play a heart) if they can.", do(s) { s.pos("s", 50, 62, 4); } },
      { who: "West", cap: "West follows suit with the Q♥ — currently the winning card.", do(s) { s.flip("w").pos("w", 40, 50, -8); s.glow("w"); } },
      trumps
        ? { who: "North", cap: "North has no hearts, so North plays a trump (2♠). Even a small trump beats every heart!", do(s) { s.glow("w", false); s.flip("n").pos("n", 50, 38, 6); s.glow("n"); } }
        : { who: "North", cap: "North has no hearts and discards the 4♣. A card of another suit can never win the trick.", do(s) { s.flip("n").pos("n", 50, 38, 6); } },
      trumps
        ? { who: "East", cap: "East follows with the A♥, the highest heart — but it can't beat North's trump.", do(s) { s.flip("e").pos("e", 60, 50, 10); } }
        : { who: "East", cap: "East follows with the A♥, the highest heart, and takes the lead.", do(s) { s.glow("w", false); s.flip("e").pos("e", 60, 50, 10); s.glow("e"); } },
      { who: trumps ? "North" : "East", cap: `${trumps ? "North" : "East"} wins the trick, collects all four cards and leads the next one.`, do(s) {
        const [x, y] = trumps ? [50, 6] : [93, 50];
        ["s", "w", "n", "e"].forEach((id, i) => s.flip(id, false).pos(id, x + i, y + i, 0, 0.7)); s.glow(["w", "n", "e"], false);
      } }
    ];
  };
  S["fishing"] = (g) => {
    const sum = ["scopa", "escoba", "casino", "basra", "tablic", "chkobba"].includes(g.id);
    const fifteen = g.id === "escoba";
    return [
      { who: "Table", cap: "Cards lie face up on the table. You hold a few cards in your hand.", do(s) {
        s.label("Your hand", 50, 96).label("Your captures", 88, 96);
        s.add("t1", "3", "♣", 26, 40).add("t2", "4", "♦", 42, 40).add("t3", "7", "♠", 58, 40).add("t4", "K", "♥", 74, 40);
        s.add("h1", "7", "♥", 42, 80).add("h2", fifteen ? "8" : "J", fifteen ? "♣" : "♣", 58, 80);
      } },
      { who: "You", cap: fifteen ? "In Escoba you capture cards that make 15 with your card. Play your 8♣…" : "Play the 7♥ — it matches the 7♠ on the table.", do(s) { s.pos(fifteen ? "h2" : "h1", 58, 62, -4); s.glow(fifteen ? ["t1", "t2"] : "t3"); } },
      { who: "Capture", cap: fifteen ? "8 + 3 + 4 = 15, so you capture both table cards together with your 8." : "Same value = capture! Both cards go to your pile.", do(s) {
        const ids = fifteen ? ["h2", "t1", "t2"] : ["h1", "t3"];
        ids.forEach((id, i) => s.flip(id, false).pos(id, 88 + i, 82 - i, 0, .8)); s.glow(["t1", "t2", "t3"], false);
      } },
      sum && !fifteen
        ? { who: "Sums", cap: "In many games (Scopa, Casino, Basra) you can also capture several cards that add up to your card: here 3 + 4 = 7.", do(s) { s.glow(["t1", "t2"]); } }
        : { who: "Opponent", cap: "If you can't capture, your card simply stays on the table for others to grab.", do(s) { s.add("o1", "5", "♠", 42, 8, false).pos("o1", 42, 40, 3); s.flip("o1"); } },
      { who: "Sweep", cap: "Clearing every card off the table is a sweep (scopa, basra, pişti…) and usually scores a bonus!", do(s) { s.glow(["t1", "t2"], false); } }
    ];
  };
  S["shedding"] = () => [
    { who: "Start", cap: "One card starts the pile. Everyone tries to get rid of their hand first.", do(s) {
      s.add("p", "7", "♦", 50, 45).label("Pile", 50, 70);
      s.add("a", "7", "♣", 20, 85, false).add("b", "3", "♣", 50, 92, false).add("c", "8", "♥", 80, 85, false);
    } },
    { who: "Player 1", cap: "Match the rank: a 7♣ can go on the 7♦.", do(s) { s.flip("a").pos("a", 51, 44, 8); } },
    { who: "Player 2", cap: "Or match the suit: 3♣ goes on the 7♣.", do(s) { s.flip("b").pos("b", 49, 46, -6); } },
    { who: "Player 3", cap: "Special cards change things: in Crazy Eights an 8 is wild — Player 3 plays 8♥ and names a new suit: ♠!", do(s) { s.flip("c").pos("c", 50, 44, 12); s.glow("c"); } },
    { who: "Rule", cap: "Can't play? Draw from the stock. First player with no cards wins.", do(s) { s.glow("c", false); s.add("d", "?", "♠", 85, 40, false).pos("d", 20, 85, 0); } }
  ];
  S["climbing"] = () => [
    { who: "Lead", cap: "The leader plays a combination — here a pair of 5s.", do(s) {
      s.label("P1", 15, 92).label("P2", 85, 92).label("P3", 85, 8).label("P4", 15, 8);
      s.add("a1", "5", "♠", 15, 80, false).add("a2", "5", "♥", 18, 80, false);
      s.add("b1", "9", "♣", 85, 80, false).add("b2", "9", "♦", 88, 80, false);
      s.add("d1", "K", "♠", 15, 20, false).add("d2", "K", "♥", 18, 20, false);
      s.flip("a1").flip("a2").pos("a1", 45, 50, -4).pos("a2", 50, 50, 4);
    } },
    { who: "P2", cap: "The next player must beat it with the same kind of play — a higher pair: 9s.", do(s) { s.flip("b1").flip("b2").pos("b1", 47, 46, -8).pos("b2", 52, 46, 2); } },
    { who: "P3", cap: "P3 can't (or won't) beat it, so P3 passes.", do(s) { s.label("pass", 85, 18); } },
    { who: "P4", cap: "P4 plays a pair of Kings.", do(s) { s.flip("d1").flip("d2").pos("d1", 49, 42, 6).pos("d2", 54, 42, 12); s.glow(["d1", "d2"]); } },
    { who: "Clear", cap: "Everyone else passes, so the pile is cleared and P4 leads anything new. First to empty their hand wins!", do(s) { ["a1", "a2", "b1", "b2", "d1", "d2"].forEach((id) => s.flip(id, false).pos(id, 50, 50, 0, .6)); s.glow(["d1", "d2"], false); } }
  ];
  S["rummy"] = () => {
    const hand = [["5", "♥"], ["9", "♣"], ["6", "♥"], ["K", "♣"], ["9", "♦"], ["7", "♥"], ["2", "♠"]];
    return [
      { who: "Hand", cap: "You hold seven cards. The goal: group them into melds — runs and sets.", do(s) {
        hand.forEach(([r, su], i) => s.add("h" + i, r, su, 20 + i * 10, 80, true, (i - 3) * 3));
        s.add("stock", "?", "♠", 38, 30, false).add("disc", "4", "♣", 60, 30).label("Stock", 38, 52).label("Discard", 60, 52);
      } },
      { who: "Draw", cap: "Start your turn by drawing — from the stock, or the top of the discard pile. You draw a 9♠.", do(s) { s.add("n", "9", "♠", 38, 30, false); s.flip("n").pos("n", 90, 80, 8); } },
      { who: "Run", cap: "5♥ 6♥ 7♥ is a run: consecutive cards of one suit.", do(s) { [["h0", 0], ["h2", 1], ["h5", 2]].forEach(([id, i]) => s.pos(id, 15 + i * 7, 58, 0)); s.glow(["h0", "h2", "h5"]); } },
      { who: "Set", cap: "Three 9s is a set: same rank, different suits.", do(s) { s.glow(["h0", "h2", "h5"], false); [["h1", 0], ["h4", 1], ["n", 2]].forEach(([id, i]) => s.pos(id, 45 + i * 7, 58, 0)); s.glow(["h1", "h4", "n"]); } },
      { who: "Discard", cap: "End your turn with a discard: the K♣ doesn't fit, so it goes. You're close to going out!", do(s) { s.glow(["h1", "h4", "n"], false); s.pos("h3", 60, 30, 4); } }
    ];
  };
  S["patience"] = () => [
    { who: "Layout", cap: "In patience, cards are laid out in columns (the tableau). The aim is to sort them onto foundations.", do(s) {
      s.add("f", "", "", 80, 20, false).fade("f").label("Foundation", 80, 40);
      s.add("c1", "7", "♠", 20, 40).add("c2", "A", "♦", 40, 40).add("c3", "6", "♥", 60, 40).add("st", "?", "♠", 20, 80, false).label("Stock", 20, 98);
    } },
    { who: "Ace up", cap: "Aces go up to start the foundations.", do(s) { s.pos("c2", 80, 20, 0); s.glow("c2"); } },
    { who: "Build", cap: "In the columns, build down in alternating colours: red 6♥ onto black 7♠.", do(s) { s.glow("c2", false); s.pos("c3", 20, 52, 0); s.glow(["c1", "c3"]); } },
    { who: "Stock", cap: "Stuck? Turn a card from the stock. A 2♦ — it goes straight onto the Ace of diamonds.", do(s) { s.glow(["c1", "c3"], false); s.add("n", "2", "♦", 20, 80, false); s.flip("n").pos("n", 40, 80, 0); } },
    { who: "Foundation", cap: "Foundations build upward in one suit: A♦, 2♦, 3♦… Get all 52 up there to win!", do(s) { s.pos("n", 80, 22, 4); s.glow("n"); } }
  ];
  S["war"] = (g) => g.id === "snap" || g.family === "matching" ? [
    { who: "Flip", cap: "Players flip cards onto their own face-up piles in turn.", do(s) { s.add("a", "8", "♣", 30, 50, false).add("b", "4", "♥", 70, 50, false); s.flip("a"); } },
    { who: "Flip", cap: "No match yet — keep flipping.", do(s) { s.flip("b"); } },
    { who: "Flip", cap: "Now the top cards are both 8s…", do(s) { s.add("c", "8", "♦", 30, 85, false).pos("c", 31, 49, 6); s.flip("c"); } },
    { who: "SNAP!", cap: "Shout 'Snap!' first and you win both piles.", do(s) { s.glow(["c"]); ["a", "b", "c"].forEach((id) => s.pos(id, 50, 92, 0, .7)); } }
  ] : [
    { who: "Flip", cap: "Both players flip their top card at the same time.", do(s) { s.add("a", "J", "♠", 30, 85, false).add("b", "8", "♥", 70, 85, false); s.flip("a").pos("a", 40, 50, -4); s.flip("b").pos("b", 60, 50, 4); } },
    { who: "Win", cap: "The higher card (Jack) wins both cards.", do(s) { s.glow("a"); } },
    { who: "Collect", cap: "The winner puts them under their pile. Ties start a 'war'!", do(s) { s.glow("a", false); ["a", "b"].forEach((id) => s.flip(id, false).pos(id, 30, 88, 0, .8)); } }
  ];
  S["vying"] = () => [
    { who: "Deal", cap: "Each player gets a hand. Players bet on whose hand is best — or bluff!", do(s) {
      [["A", "♠"], ["A", "♦"], ["7", "♣"]].forEach(([r, su], i) => s.add("p" + i, r, su, 20 + i * 6, 75, false));
      [["K", "♥"], ["Q", "♥"], ["J", "♥"]].forEach(([r, su], i) => s.add("q" + i, r, su, 70 + i * 6, 75, false));
      s.label("You", 26, 98).label("Rival", 76, 98);
    } },
    { who: "Bet", cap: "Each round, players call (match the bet), raise, or fold.", do(s) { s.add("chip", "", "", 50, 50, false).fade("chip"); s.label("💰 pot", 50, 45); } },
    { who: "Show", cap: "At the showdown, hands are revealed. A pair of Aces vs a straight flush (K-Q-J♥)…", do(s) { ["p0", "p1", "p2", "q0", "q1", "q2"].forEach((id) => s.flip(id)); } },
    { who: "Win", cap: "Higher-ranking hand wins the pot. Learn each game's hand order — it differs between games!", do(s) { s.glow(["q0", "q1", "q2"]); } }
  ];
  S["banking"] = () => [
    { who: "Deal", cap: "You and the dealer each get two cards. One dealer card is hidden.", do(s) { s.add("y1", "9", "♣", 40, 78).add("y2", "5", "♥", 50, 78).add("d1", "10", "♠", 40, 22).add("d2", "7", "♦", 50, 22, false).label("You: 14", 45, 98).label("Dealer", 45, 4); } },
    { who: "Hit", cap: "14 is low, so you 'hit' and take another card: a 6 → 20!", do(s) { s.add("y3", "6", "♠", 80, 50, false); s.flip("y3").pos("y3", 60, 78, 4); } },
    { who: "Stand", cap: "You stand on 20. The dealer reveals: 10 + 7 = 17, and must stand on 17.", do(s) { s.flip("d2"); } },
    { who: "Win", cap: "20 beats 17 — you win! Go over 21 and you'd bust.", do(s) { s.glow(["y1", "y2", "y3"]); } }
  ];
  S["adding"] = () => [
    { who: "Play", cap: "Players take turns playing cards, keeping a running total.", do(s) { s.add("a", "7", "♣", 30, 50).label("Total: 7", 50, 20); } },
    { who: "Fifteen", cap: "Your 8 makes the total 15 — 'fifteen two!' You score 2 points.", do(s) { s.add("b", "8", "♥", 50, 85).pos("b", 42, 50, 4).glow("b"); s.label("15 → +2", 50, 30); } },
    { who: "Pair", cap: "Another 8 pairs the last card: total 23, and a pair scores 2 more.", do(s) { s.glow("b", false); s.add("c", "8", "♦", 50, 85).pos("c", 54, 50, -4).glow(["b", "c"]); } },
    { who: "31", cap: "Nobody may pass 31. Hit exactly 31 for a bonus; if you can't play, say 'Go'.", do(s) { s.glow(["b", "c"], false); s.add("d", "8", "♠", 50, 85).pos("d", 66, 50, 6); s.label("31!", 66, 74); } }
  ];
  S["collecting"] = () => [
    { who: "Ask", cap: "Ask a player for a rank you already hold: 'Do you have any Queens?'", do(s) { s.add("a", "Q", "♠", 30, 80).add("b", "Q", "♥", 70, 20, false).label("You", 30, 98).label("Rival", 70, 4); s.glow("a"); } },
    { who: "Give", cap: "They must hand over every Queen they hold.", do(s) { s.flip("b").pos("b", 38, 80, 6); } },
    { who: "Again", cap: "Got one? Ask again! If not, 'Go fish' — draw from the pond.", do(s) { s.glow(["a", "b"]); } },
    { who: "Book", cap: "Collect all four of a rank to make a book. Most books wins.", do(s) { s.add("c", "Q", "♦", 50, 50).add("d", "Q", "♣", 50, 50); s.pos("c", 46, 80, 10).pos("d", 54, 80, 14); s.glow(["a", "b", "c", "d"]); } }
  ];
  S["poker-trick hybrid"] = S["vying"];
  S["matching"] = S["war"];

  D.has = (g) => !!S[g.family];

  D.mount = function (host, g) {
    const make = S[g.family]; if (!make) return;
    const script = make(g);
    host.innerHTML = `<div class="demo" role="img" aria-label="Animated example of ${CA.esc(g.name)}"></div>
      <div class="demo-cap"><span class="who"></span><span class="txt"></span></div>
      <div class="demo-ctrls">
        <button class="btn btn-sm" data-a="prev" aria-label="Previous step">⏮</button>
        <button class="btn btn-sm btn-gold" data-a="play">▶ Play</button>
        <button class="btn btn-sm" data-a="next" aria-label="Next step">⏭</button>
        <div class="prog"><i></i></div><span class="stepn"></span>
      </div>`;
    const st = new Stage(host.querySelector(".demo"));
    const who = host.querySelector(".who"), txt = host.querySelector(".txt"), bar = host.querySelector(".prog i"), stepn = host.querySelector(".stepn");
    const playBtn = host.querySelector('[data-a="play"]');
    let i = -1, timer = null;

    function go(n) {
      n = Math.max(0, Math.min(script.length - 1, n));
      st.reset();
      st.instant(true);
      for (let k = 0; k < n; k++) script[k].do(st);
      st.instant(true);
      void st.el.offsetHeight;
      st.instant(false);
      script[n].do(st);
      i = n;
      who.textContent = script[n].who;
      txt.innerHTML = CA.suitify(CA.esc(script[n].cap));
      bar.style.width = ((n + 1) / script.length) * 100 + "%";
      stepn.textContent = `${n + 1}/${script.length}`;
      CA.sound("deal");
    }
    function stop() { clearInterval(timer); timer = null; playBtn.textContent = "▶ Play"; }
    function play() {
      if (timer) return stop();
      if (i >= script.length - 1) go(0);
      playBtn.textContent = "⏸ Pause";
      timer = setInterval(() => { if (i >= script.length - 1) return stop(); go(i + 1); }, 3200);
    }
    host.querySelector(".demo-ctrls").addEventListener("click", (e) => {
      const a = e.target.closest("[data-a]"); if (!a) return;
      if (a.dataset.a === "play") play();
      else { stop(); go(i + (a.dataset.a === "next" ? 1 : -1)); }
    });
    // first frame, cards rendered without the step-0 action already done
    go(0);
    host._stop = stop;
  };
})();
