// Games of the Americas and Oceania. Original Card Atlas wording.
window.GAMES = window.GAMES || [];
GAMES.push(
{
  id: "spades", name: "Spades", alt: [],
  countries: ["United States of America"], family: "trick-taking", deck: "Standard 52",
  min: 4, max: 4, best: [4], partners: true, diff: 2, mins: 45, age: "8+", hand: 13,
  goal: "With your partner, bid the number of tricks you'll take — spades are always trumps — and reach 500 points.",
  quick: ["Partners sit opposite; deal 13 cards each.", "Each player bids how many tricks they expect to win; partners add their bids.", "Play 13 tricks; spades always beat other suits.", "Make your team's bid to score 10 points per trick bid."],
  setup: ["Deal all 52 cards, 13 each, to four players in two partnerships."],
  rules: [
    "Bidding: starting left of the dealer, each player bids a number of tricks from 0 (Nil) to 13.",
    "The player left of the dealer leads first (any suit except spades, in most rules).",
    "Follow suit if you can; otherwise play any card, including a spade.",
    "Spades can't be led until 'broken' (a spade has been played on another suit), unless you only hold spades.",
    "The highest spade wins; otherwise the highest card of the led suit."
  ],
  scoring: [
    "Make your combined bid: 10 points per trick bid, plus 1 point per extra trick ('bag').",
    "Fail: lose 10 points per trick bid.",
    "Every 10 bags collected costs 100 points.",
    "Nil bid: +100 if that player wins no tricks, −100 if they win any. Blind Nil (bid before looking): ±200.",
    "First team to 500 wins."
  ],
  mistakes: ["Overbidding and collecting bags.", "Forgetting your partner's bid when deciding whether to win a trick."],
  variants: ["Cutthroat: three players each for themselves.", "Jokers as top spades."],
  tips: { b: "Count your Aces, Kings with support, and long spades.", i: "Protect a partner who bid Nil by covering their high cards.", e: "Count spades: 13 total. Know when your low spades become winners." },
  history: "Developed in the US Midwest in the 1930s, it spread with American troops in WWII and remains a staple of college dorms and family gatherings.",
  related: ["bridge", "whist", "callbreak", "hearts"]
},
{
  id: "hearts", name: "Hearts", alt: ["Black Lady", "Black Maria (UK variant)"],
  countries: ["United States of America", "United Kingdom"], family: "trick-taking", deck: "Standard 52",
  min: 3, max: 6, best: [4], diff: 2, mins: 30, age: "8+", hand: 13,
  goal: "Avoid taking hearts and the Queen of Spades. Lowest score when someone reaches 100 wins.",
  quick: ["Deal 13 cards each (with four players).", "Pass 3 cards to another player.", "The 2♣ leads. Follow suit if you can; no trumps.", "Each heart is 1 penalty point, Q♠ is 13. Low score wins."],
  setup: ["Four players: deal 13 each. Before play, pass 3 cards: left, then right, then across, then no pass, repeating."],
  rules: [
    "Whoever holds the 2 of clubs leads it to the first trick.",
    "Follow suit if able; if not, play anything (but by most rules, no hearts or Q♠ on the very first trick).",
    "Highest card of the led suit wins; there are no trumps.",
    "Hearts can't be led until one has been played on another suit ('hearts broken').",
    "'Shooting the moon': taking all hearts and Q♠ gives 0 to you and 26 to everyone else."
  ],
  scoring: ["1 point per heart, 13 for the Q♠.", "Game ends when a player reaches 100; lowest score wins."],
  mistakes: ["Keeping high spades when Q♠ is still out.", "Missing an opponent's moon attempt."],
  variants: ["Omnibus Hearts: J♦ is −10 points.", "Black Maria: extra penalty cards in spades."],
  tips: { b: "Pass high spades and high hearts.", i: "'Void' a suit early so you can discard penalty cards.", e: "Watch for someone shooting the moon and take a heart to stop them." },
  history: "Evolved from the 18th-century game Reversis. Windows included it from 1992, introducing it to millions.",
  related: ["spades", "whist"]
},
{
  id: "euchre", name: "Euchre", alt: [],
  countries: ["United States of America", "Canada", "United Kingdom", "New Zealand", "Australia"], family: "trick-taking", deck: "24-card (9 to Ace)",
  min: 4, max: 4, best: [4], partners: true, diff: 2, mins: 30, age: "8+", hand: 5,
  goal: "With your partner, win at least 3 of 5 tricks when your side picks trumps; first team to 10 points wins.",
  quick: ["Deal 5 cards each from a 24-card deck; turn up one card.", "Players may 'order up' the turned card's suit as trumps.", "The Jack of trumps (right bower) and the other same-colour Jack (left bower) are the top trumps.", "Win 3+ tricks to score."],
  setup: ["Use 9, 10, J, Q, K, A in each suit. Deal 5 cards each in batches of 2 and 3. Turn the next card face up."],
  rules: [
    "Round 1: each player in turn may pass or 'order up' the turned card's suit as trumps. The dealer then takes the card and discards one.",
    "If all pass, round 2: anyone may name a different suit as trumps.",
    "Trump order: right bower (Jack of trumps), left bower (Jack of the same colour, counts as a trump), then A, K, Q, 10, 9.",
    "The player who chose trumps may 'go alone', with their partner sitting out.",
    "Follow suit if able (the left bower belongs to the trump suit). Highest trump wins, else highest of the led suit."
  ],
  scoring: ["Makers win 3 or 4 tricks: 1 point. All 5 ('march'): 2 points. Alone and all 5: 4 points.", "If makers fail ('euchred'): defenders score 2.", "First team to 10 wins."],
  mistakes: ["Forgetting the left bower is a trump, not its printed suit."],
  variants: ["Stick the dealer: the dealer must choose trumps if all pass in round 2.", "Bid Euchre for more players."],
  tips: { b: "Order up with two or more trumps including a bower.", i: "Lead trumps when your partner chose them.", e: "'Next' rule: if the dealer's team passes, lead the same colour as the turned-up suit." },
  history: "Probably from the Alsatian game Juckerspiel, brought to the US by German immigrants. Euchre's tournament needs gave us the Joker in the 1860s.",
  related: ["500", "twenty-five", "spades"]
},
{
  id: "500", name: "Five Hundred", alt: ["500"],
  countries: ["Australia", "New Zealand", "United States of America", "Canada"], family: "trick-taking", deck: "43 cards (with Joker) for 4 players",
  min: 2, max: 6, best: [4], partners: true, diff: 3, mins: 60, age: "10+", hand: 10,
  goal: "Bid how many tricks your team will take in a chosen trump suit (or misère) and be first to 500.",
  quick: ["Deal 10 cards each and 3 to the kitty.", "Bid a number of tricks (6–10) and a suit or no trumps.", "The winner takes the kitty and discards 3.", "The Joker is the highest trump."],
  setup: ["Remove 2s, 3s and black 4s, add one Joker: 43 cards. Deal 10 each and 3 to the kitty."],
  rules: [
    "Bids: a number of tricks (6 to 10) plus a suit or No Trumps. Suits rank ♠ < ♣ < ♦ < ♥ < No Trumps.",
    "Misère: the bidder plays alone (partner sits out) and must lose every trick.",
    "Trumps, highest first: Joker, right bower (Jack of trumps), left bower (Jack of same colour), then A, K, Q, 10 …",
    "Highest bidder takes the kitty and discards 3.",
    "Follow suit if possible; highest trump wins, else highest of the led suit."
  ],
  scoring: ["Bid value table: 6♠ = 40, rising by 20 per suit rank and by 100 per extra trick (e.g. 7♥ = 200, 10 No Trumps = 520). Misère 250, Open Misère 500.", "Make your bid: score its value. Fail: subtract it.", "Opponents score 10 per trick they win.", "First to 500 (by winning a bid) wins; −500 loses."],
  mistakes: ["Bidding No Trumps without stoppers in every suit."],
  variants: ["Three-player 500 (33 cards)", "Six-player with 63-card decks."],
  tips: { b: "Count your top trumps including the Joker and bowers.", i: "Use the kitty to create a void.", e: "Defenders should lead through the bidder." },
  history: "Patented by the US Playing Card Company in 1904, it became Australia's national card game.",
  related: ["euchre", "bridge"]
},
{
  id: "gin-rummy", name: "Gin Rummy", alt: ["Gin"],
  countries: ["United States of America"], family: "rummy", deck: "Standard 52",
  min: 2, max: 2, best: [2], diff: 2, mins: 30, age: "8+", hand: 10,
  goal: "Form your hand into sets and runs, then knock (or go gin) when your unmatched cards are low, to reach 100 points.",
  quick: ["Deal 10 cards each; turn one card up as discard.", "Draw from the stock or the discard pile, then discard.", "Knock when unmatched cards ('deadwood') total 10 or less.", "Gin (no deadwood) scores a big bonus."],
  setup: ["Deal 10 cards each. Turn the next card face up to start the discard pile."],
  rules: [
    "Melds: sets of 3–4 same-rank cards, or runs of 3+ consecutive cards in one suit (Ace low).",
    "Deadwood values: face cards 10, Ace 1, others at face value.",
    "On your turn draw one card (stock or top discard) and discard one.",
    "You may knock if your deadwood is 10 or less. Lay down your melds and deadwood.",
    "The opponent lays down their melds and may 'lay off' deadwood onto your melds (not if you went gin).",
    "If the stock is down to two cards and nobody has knocked, the hand is void."
  ],
  scoring: ["Knocker scores the difference between the two deadwood totals.", "If the defender's deadwood is equal or lower: 'undercut', defender scores the difference plus a 25 bonus (some play 10 or 20).", "Gin: 25 bonus plus opponent's deadwood.", "Game to 100, with bonuses for winning and for each hand won."],
  mistakes: ["Waiting too long for gin when knocking would win."],
  variants: ["Oklahoma Gin: the first upcard sets the knock limit.", "Hollywood scoring: three games at once."],
  tips: { b: "Discard high deadwood early.", i: "Track the discards: don't feed your opponent's melds.", e: "Knock early when your opponent is collecting." },
  history: "Created in New York around 1909, it became a Hollywood craze in the 1940s.",
  related: ["rummy", "kalooki", "chinchon", "conquian"]
},
{
  id: "rummy", name: "Rummy", alt: ["Rum", "Basic Rummy"],
  countries: ["United States of America", "United Kingdom", "Australia"], family: "rummy", deck: "Standard 52",
  min: 2, max: 6, best: [3, 4], diff: 1, mins: 30, age: "7+", hand: 7,
  goal: "Get rid of all your cards by forming them into sets and runs on the table.",
  quick: ["Deal 7 cards each (10 for 2 players).", "Draw a card, meld if you can, then discard.", "Melds: 3+ of a kind or 3+ in sequence of the same suit.", "First to empty their hand wins the round."],
  setup: ["2 players: 10 cards each. 3–4 players: 7. 5–6 players: 6. Turn up a card to start the discard pile."],
  rules: [
    "On your turn, draw one card from the stock or the top of the discard pile.",
    "You may lay down melds and add cards to melds already on the table ('laying off').",
    "End your turn by discarding one card.",
    "When someone goes out, others count their remaining cards as penalty points."
  ],
  scoring: ["Winner scores the value of cards left in opponents' hands: face cards 10, Aces 1, others face value.", "Play to an agreed total, e.g. 100."],
  mistakes: ["Holding many high cards; they cost you heavily."],
  variants: ["Rummy 500: score cards you meld.", "Indian Rummy, Kalooki, Gin, Canasta."],
  tips: { b: "Watch the discard pile.", i: "Lay off onto other people's melds.", e: "Hold back melds to surprise opponents (if rules allow)." },
  history: "Probably from the Mexican game Conquián, it spread across the USA in the early 20th century.",
  related: ["gin-rummy", "conquian", "indian-rummy", "canasta"]
},
{
  id: "canasta", name: "Canasta", alt: [],
  countries: ["Uruguay", "Argentina", "Brazil", "United States of America"], family: "rummy", deck: "Two 52-card decks + 4 Jokers (108)",
  min: 2, max: 6, best: [4], partners: true, diff: 3, mins: 60, age: "10+", hand: 11,
  goal: "With your partner, build 'canastas' (melds of 7 cards) and score 5000 points.",
  quick: ["Deal 11 cards each (4 players).", "Draw 2 from the stock, or take the whole discard pile if you can use its top card.", "Meld cards of the same rank; Jokers and 2s are wild.", "Make canastas of 7 to score big; then you can go out."],
  setup: ["Shuffle 108 cards. Deal 11 to each of four players (in two partnerships). Turn up a card to start the discard pile (red 3s and wild cards are buried)."],
  rules: [
    "Melds are 3+ cards of the same rank. Runs are not allowed. Wild cards (Jokers, 2s) may be used, but a meld needs more natural cards than wild ones.",
    "Each turn: draw two from the stock, or take the entire discard pile if you can meld its top card with two natural cards from your hand. Then discard one.",
    "A team's first meld must meet a minimum point count (50, 90 or 120 depending on score).",
    "Red 3s are bonus cards: place them face up and draw a replacement.",
    "Black 3s are blockers when discarded: they freeze the pile for one turn.",
    "A canasta is 7+ cards of one rank: 'natural' (no wild cards) or 'mixed'. You need one canasta to go out."
  ],
  scoring: ["Card values: Jokers 50, 2s and Aces 20, K to 8 10, 7 to 4 5, black 3 5.", "Natural canasta 500, mixed 300, going out 100, red 3s 100 each.", "Cards left in hands count against you. Play to 5000."],
  mistakes: ["Discarding a card the opponents can use to grab a big pile."],
  variants: ["Samba (with sequences)", "Hand and Foot (USA)", "Buraco (Brazil)."],
  tips: { b: "Freeze the pile when opponents are hungry for it.", i: "Build towards natural canastas.", e: "Count cards: 8 of each rank exist." },
  history: "Invented in Montevideo, Uruguay, in 1939 by Segundo Santos and Alberto Serrato. It swept the USA in the 1950s.",
  related: ["rummy", "kalooki", "gin-rummy"]
},
{
  id: "crazy-eights", name: "Crazy Eights", alt: ["Mau-Mau", "Switch", "Last One", "Pesten"],
  countries: ["United States of America", "Germany", "United Kingdom", "Netherlands", "Austria"], family: "shedding", deck: "Standard 52",
  min: 2, max: 7, best: [3, 4], diff: 1, mins: 15, age: "5+", hand: 7,
  goal: "Be first to play all your cards by matching the suit or rank of the top card; 8s are wild.",
  quick: ["Deal 7 cards each (5 with more players).", "Turn up one card to start the pile.", "Play a card of the same suit or rank, or any 8 (and choose a new suit).", "If you can't play, draw."],
  setup: ["Deal 7 cards each for 2 players, 5 for 3+ players. Turn the next card face up."],
  rules: [
    "On your turn, play one card matching the top card's suit or rank.",
    "An 8 can be played on anything; the player names the next suit.",
    "If you can't (or choose not to) play, draw from the stock until you can (house rules: draw one card).",
    "First to empty their hand wins."
  ],
  scoring: ["Winner scores cards left in others' hands: 8s 50, face cards 10, Aces 1, others face value."],
  mistakes: ["Using an 8 too early when you could follow normally."],
  variants: ["Mau-Mau (Germany), Pesten (Netherlands), Switch (UK) and Kadi (Kenya) add action cards like 'draw two' or 'skip'."],
  tips: { b: "Save 8s for emergencies.", i: "Change suit to one you hold many of.", e: "Track which suits opponents seem to lack." },
  history: "A 20th-century game with countless regional variants; commercial games like UNO were adapted from it.",
  related: ["kadi", "whot", "sevens"]
},
{
  id: "go-fish", name: "Go Fish", alt: ["Fish", "Happy Families (similar)"],
  countries: ["United States of America", "United Kingdom", "Canada"], family: "collecting", deck: "Standard 52",
  min: 2, max: 6, best: [3, 4], diff: 1, mins: 10, age: "4+", hand: 7,
  goal: "Collect the most sets of four cards of the same rank by asking others for cards.",
  quick: ["Deal 7 cards each (5 with 4+ players).", "Ask a player for a rank you hold ('Do you have any 5s?').", "If they do, they give you all of them and you ask again.", "If not: 'Go fish!' — draw a card."],
  setup: ["Deal 7 cards each for 2–3 players, 5 for more. Spread the rest face down as the 'pond'."],
  rules: [
    "Ask any player for a rank you already hold.",
    "If they have cards of that rank, they must hand them all over and you take another turn.",
    "If not, they say 'Go fish' and you draw one card. If it's the rank you asked for, show it and go again; otherwise the turn passes.",
    "When you have all four of a rank, lay the book face down.",
    "Game ends when all 13 books are made."
  ],
  scoring: ["Most books wins."],
  mistakes: ["Forgetting who asked for what — that's free information!"],
  variants: ["Happy Families uses special illustrated decks."],
  tips: { b: "Ask for ranks you hold several of.", i: "Remember what others asked for.", e: "Avoid asking for ranks that reveal you're close to a book." },
  history: "A classic children's game played worldwide for over a century, ideal for teaching numbers and memory.",
  related: ["old-maid", "snap"]
},
{
  id: "old-maid", name: "Old Maid", alt: ["Le Pouilleux", "Schwarzer Peter (Black Peter)"],
  countries: ["United States of America", "United Kingdom", "France", "Germany", "Japan"], family: "collecting", deck: "Standard 52 minus one Queen",
  min: 2, max: 8, best: [3, 4], diff: 1, mins: 10, age: "4+", hand: 13,
  goal: "Get rid of your cards in pairs. Don't be left with the odd Queen — the 'Old Maid'.",
  quick: ["Remove one Queen, then deal all cards.", "Discard any pairs from your hand.", "Take turns drawing a hidden card from the player to your left.", "Pair it if you can. The last player holding the lone Queen loses."],
  setup: ["Remove one Queen (traditionally ♣Q). Deal all remaining 51 cards."],
  rules: [
    "Everyone discards all pairs (two cards of the same rank) face up.",
    "In turn, fan your cards face down for the player to your right, who draws one.",
    "If the drawn card makes a pair, discard it.",
    "Players with no cards are safe. The one left holding the single Queen is the Old Maid."
  ],
  scoring: ["One loser, everybody else wins."],
  mistakes: ["Giving away where the Queen is with your face!"],
  variants: ["Black Peter (Germany) and Babanuki (Japan, using a Joker)."],
  tips: { b: "Shuffle your cards before offering them.", i: "Try putting the Queen in a 'tempting' spot.", e: "Watch others' faces when you draw." },
  history: "Played since the 19th century; special illustrated packs were sold by publishers like Milton Bradley.",
  related: ["go-fish", "cheat"]
},
{
  id: "spoons", name: "Spoons", alt: ["Pig", "Tongue"],
  countries: ["United States of America", "Canada"], family: "collecting", deck: "Standard 52 + spoons",
  min: 3, max: 10, best: [5, 6], diff: 1, mins: 10, age: "6+", hand: 4,
  goal: "Collect four of a kind, then grab a spoon. The player without a spoon loses a letter.",
  quick: ["Put spoons in the middle — one fewer than the number of players.", "Deal 4 cards each.", "Pass cards round the table quickly, trying to get four of a kind.", "When someone grabs a spoon, everyone grabs! No spoon = a letter."],
  setup: ["Place spoons in the centre (players minus one). Deal 4 cards each; the rest is the dealer's stack."],
  rules: [
    "The dealer draws a card from the stack and either keeps it (discarding another) or passes it to the left.",
    "Each player picks up the passed card, keeps or passes, quickly and continuously.",
    "The last player discards into a pile, which is reshuffled if the stack runs out.",
    "When you have four of a kind, quietly take a spoon. Everyone else then grabs one too.",
    "The player left without a spoon gets a letter: S, P, O, O, N, S. Spell 'SPOONS' and you're out."
  ],
  scoring: ["Last player in wins."],
  mistakes: ["Grabbing too obviously when you get four of a kind — sneakiness wins."],
  variants: ["Pig: touch your nose instead of grabbing a spoon."],
  tips: { b: "Watch the spoons, not just your cards.", i: "Pick a rank early and focus on it.", e: "Grab as quietly as possible." },
  history: "A lively American party game, popular at family reunions and summer camps.",
  related: ["go-fish", "snap"]
},
{
  id: "war", name: "War", alt: ["Battle", "Bataille", "Beggar-my-neighbour (related)"],
  countries: ["United States of America", "France", "United Kingdom"], family: "war", deck: "Standard 52",
  min: 2, max: 2, best: [2], diff: 1, mins: 30, age: "4+", hand: 26,
  goal: "Win all the cards by flipping higher cards than your opponent.",
  quick: ["Split the deck in half, face down.", "Both flip the top card. The higher card wins both.", "On a tie, it's war: each puts 3 cards face down and one face up. Higher wins all.", "Win the whole deck to win."],
  setup: ["Deal all cards face down into two equal piles."],
  rules: [
    "Both players flip their top card at the same time.",
    "The higher card (Ace high) wins both cards; put them under your pile.",
    "Tie: each player puts down some face-down cards (often 3) and then a face-up card. Higher takes all. Repeat if tied again.",
    "If you run out of cards during a war, you lose."
  ],
  scoring: ["Win all 52 cards, or have most cards when time runs out."],
  mistakes: ["None — it's pure chance! Great for practicing number comparison."],
  variants: ["War for three players.", "Math War: add two cards each."],
  tips: { b: "Use it to teach young children which number is bigger.", i: "Play 'Peace': lower card wins.", e: "Try Math War variants for older kids." },
  history: "A classic children's game known throughout Europe and the Americas.",
  related: ["egyptian-ratscrew", "snap"]
},
{
  id: "speed", name: "Speed", alt: ["Spit (UK, related)", "Slam"],
  countries: ["United States of America", "United Kingdom"], family: "shedding", deck: "Standard 52",
  min: 2, max: 2, best: [2], diff: 1, mins: 5, age: "7+", hand: 5,
  goal: "Get rid of all your cards before your opponent by playing them onto centre piles as fast as you can — no turns!",
  quick: ["Each player has a 5-card hand and a 15-card draw pile.", "Two centre cards are flipped at once.", "Play any card one rank higher or lower onto either pile. Both play at the same time.", "When stuck, both flip a new card from the side stacks. First out wins."],
  setup: ["Deal each player 20 cards: 15 as a face-down draw pile and 5 as a hand.", "Place two face-down piles of 5 cards between you as side stacks, and 2 cards face down in the centre."],
  rules: [
    "Both flip a centre card at once; then play simultaneously.",
    "Play a card onto either centre pile if it's one higher or lower (Ace wraps to King and 2).",
    "Refill your hand to 5 from your draw pile whenever you like.",
    "If neither can play, both flip a card from the side stacks onto the centre piles. If side stacks run out, reshuffle centre piles.",
    "When your hand and draw pile are both empty, slap the smaller centre pile and shout 'Speed!' to win."
  ],
  scoring: ["Best of three or five games."],
  mistakes: ["Playing with one hand only — be quick but play one card at a time."],
  variants: ["Spit (UK): uses five tableau piles in front of each player."],
  tips: { b: "Keep your hand full.", i: "Look at both piles at once.", e: "Spot runs in your hand (5-6-7) to dump several fast." },
  history: "A fast, modern American game with no turns, related to the British game Spit.",
  related: ["snap", "egyptian-ratscrew"]
},
{
  id: "egyptian-ratscrew", name: "Egyptian Ratscrew", alt: ["ERS", "Egyptian Rat Slap"],
  countries: ["United States of America"], family: "war", deck: "Standard 52",
  min: 2, max: 8, best: [3, 4], diff: 1, mins: 15, age: "6+", hand: 26,
  goal: "Win the whole deck by slapping the pile at the right moments and winning face-card challenges.",
  quick: ["Deal all cards face down.", "Take turns flipping a card onto the centre pile.", "Slap the pile on doubles (two same ranks in a row) or sandwiches (same ranks with one card between).", "A face card or Ace challenges the next player to play another face card in a limited number of tries."],
  setup: ["Deal all the cards face down. Players don't look at their cards."],
  rules: [
    "In turn, flip your top card face up onto the centre pile.",
    "Face card challenge: if a J, Q, K or A is played, the next player has 1, 2, 3 or 4 tries (J, Q, K, A respectively) to play a face card or Ace. If they fail, the challenger wins the pile.",
    "If they do play a face card, the challenge passes to the next player.",
    "Anyone may slap the pile when the top two cards match (double) or the top and third card match (sandwich). The first hand on the pile wins it.",
    "Slapping wrongly costs you a card or two to the bottom of the pile.",
    "Out of cards? You can still slap back in."
  ],
  scoring: ["Win by collecting all the cards."],
  mistakes: ["Slapping without a reason."],
  variants: ["Extra slap rules: top-and-bottom, tens (sum to 10), marriages (K+Q)."],
  tips: { b: "Keep your hand ready over the pile.", i: "Watch sandwiches, not just doubles.", e: "Agree the slap rules before starting." },
  history: "A 20th-century American school-yard game descended from Beggar-my-neighbour.",
  related: ["war", "snap", "speed"]
},
{
  id: "kings-corner", name: "Kings in the Corner", alt: ["Kings Corners"],
  countries: ["United States of America"], family: "shedding", deck: "Standard 52",
  min: 2, max: 4, best: [2, 3], diff: 1, mins: 15, age: "6+", hand: 7,
  goal: "Be first to empty your hand by playing cards onto foundation piles in a patience-like layout; Kings go in the corners.",
  quick: ["Deal 7 cards each; lay 4 cards face up around the deck (N, S, E, W).", "On your turn draw one, then play as many cards as you can.", "Build piles down in alternating colours.", "Kings may only start a pile in a corner."],
  setup: ["Deal 7 cards each. Place the deck in the middle and turn four cards face up, one on each side."],
  rules: [
    "Start your turn by drawing one card.",
    "Play cards on the piles in descending order and alternating colour (red 6 on black 7).",
    "Kings can be placed only in the four corner spots, starting new piles.",
    "You may move a whole pile onto another pile if it fits.",
    "You may start a new side pile with any card if a side spot is empty.",
    "First player to empty their hand wins."
  ],
  scoring: ["Others count penalty points for cards left: Kings 10, others 1 (or face values)."],
  mistakes: ["Forgetting to move piles to free up side spots."],
  variants: ["Draw two per turn for faster games."],
  tips: { b: "Look for whole pile moves.", i: "Hold onto Kings until a corner suits you.", e: "Don't create spots that help opponents." },
  history: "A family favourite from mid-20th-century America, blending patience with multiplayer play.",
  related: ["klondike", "crazy-eights"]
},
{
  id: "casino", name: "Casino", alt: ["Cassino"],
  countries: ["United Kingdom", "United States of America", "Sweden"], family: "fishing", deck: "Standard 52",
  min: 2, max: 4, best: [2], partners: true, diff: 2, mins: 20, age: "8+", hand: 4,
  goal: "Capture table cards by matching or adding up to the value of a card from your hand. Score points for valuable captures.",
  quick: ["Deal 4 cards each and 4 face up to the table.", "Play a card to capture matching cards, or sets that add to it.", "Or 'build' a combination to capture next turn, or just 'trail' a card.", "Score for most cards, spades, Aces and the 'casinos'."],
  setup: ["Deal 4 cards each (in 2s) and 4 face up to the table."],
  rules: [
    "Capture: play a card and take all table cards of the same rank, plus any groups that add to its value (number cards only; A=1).",
    "Face cards (J, Q, K) only capture matching face cards.",
    "Build: play a card onto a table card to make a total you can capture next turn, and announce it ('building 9').",
    "Trail: if you can't or don't want to capture, place a card face up on the table.",
    "When hands are empty, deal 4 more each. The last capturer takes any remaining table cards."
  ],
  scoring: ["Most cards 3, most spades 1, Big Casino (10♦) 2, Little Casino (2♠) 1, each Ace 1, each sweep 1 (in some rules).", "First to 21 wins."],
  mistakes: ["Making a build you can't defend."],
  variants: ["Royal Casino: face cards have values 11, 12, 13.", "Swedish Kasino."],
  tips: { b: "Grab the 10♦ and 2♠.", i: "Use builds to protect valuable cards.", e: "Count spades and Aces during play." },
  history: "Probably descended from Italian fishing games, Casino was popular in England and America by the 1790s.",
  related: ["scopa", "escoba", "pishti"]
},
{
  id: "pinochle", name: "Pinochle", alt: ["Binokel"],
  countries: ["United States of America", "Germany"], family: "trick-taking", deck: "48 cards (two each of 9 to Ace)",
  min: 2, max: 4, best: [4], partners: true, diff: 4, mins: 60, age: "12+", hand: 12,
  goal: "Win the bid, score melds, then take point cards in tricks; first team to 1500 wins.",
  quick: ["Deal 12 cards each (partnership).", "Bid on the total points you expect from melds and tricks.", "Winner names trumps; everyone shows melds.", "Play 12 tricks; score Aces, 10s and Kings."],
  setup: ["Use a 48-card deck: two each of A, 10, K, Q, J, 9 in each suit. Deal 12 each to four players."],
  rules: [
    "Card order: A, 10, K, Q, J, 9.",
    "Bidding starts at an agreed minimum (often 250) and rises by 10.",
    "The highest bidder names trumps (partners may pass cards in some variants).",
    "Melds include: run in trumps (A-10-K-Q-J) 150, marriage (K+Q) 20 (40 in trumps), pinochle (Q♠+J♦) 40, 100 Aces (one of each suit), 80 Kings, 60 Queens, 40 Jacks, dix (9 of trumps) 10.",
    "Play tricks: you must follow suit, must try to win, and must trump if you can't follow.",
    "If identical cards are played, the first one wins."
  ],
  scoring: ["Counters: A, 10 and K each 1 point in modern scoring (×10 in older), last trick 1. Total 25 per deal (250).", "Bidder's team must reach the bid (melds + tricks) or loses the bid amount.", "Game to 1500."],
  mistakes: ["Counting melds that use the same card twice in the same type of meld."],
  variants: ["Two-player and Three-player (Auction) Pinochle.", "Double-deck Pinochle (80 cards)."],
  tips: { b: "Learn the core melds.", i: "Bid based on your melds plus likely tricks.", e: "Count trumps — there are 12 of each suit." },
  history: "Brought to the USA by German immigrants (as Binokel), Pinochle became a favourite of American workers and soldiers in the 20th century.",
  related: ["bezique", "doppelkopf", "spades"]
},
{
  id: "texas-holdem", name: "Texas Hold'em", alt: ["Hold'em", "Poker"],
  countries: ["United States of America"], family: "vying", deck: "Standard 52 + chips",
  min: 2, max: 10, best: [6, 7, 8, 9], diff: 3, mins: 60, age: "18+ (for money)", hand: 2,
  goal: "Make the best five-card poker hand from your two private cards and five shared cards — or make everyone else fold.",
  quick: ["Each player gets 2 private cards.", "Betting round, then 3 shared cards (the flop), betting, 1 card (turn), betting, 1 card (river), betting.", "Use any 5 of your 7 cards.", "Best hand at showdown (or last player standing) wins the pot."],
  setup: ["The two players left of the dealer post the small and big blinds. Deal 2 face-down cards to each player."],
  rules: [
    "Pre-flop: starting left of the big blind, players fold, call or raise.",
    "Flop: deal 3 cards face up. Betting round starting left of the dealer.",
    "Turn: 1 more card; betting. River: final card; betting.",
    "Showdown: remaining players reveal; the best 5-card hand wins.",
    "Hand ranks (high to low): royal flush, straight flush, four of a kind, full house, flush, straight, three of a kind, two pair, one pair, high card."
  ],
  scoring: ["Chips are won from the pot. Play for points or matchsticks at home; play responsibly and legally."],
  mistakes: ["Playing too many hands; fold weak starting cards."],
  variants: ["Omaha: 4 private cards, use exactly 2.", "Seven-Card Stud.", "Short Deck (6+)."],
  tips: { b: "Learn the hand rankings first.", i: "Position matters: act later = more information.", e: "Think in ranges and pot odds, not single hands." },
  history: "Born in Robstown, Texas, in the early 1900s, Hold'em exploded worldwide after the 2003 World Series of Poker televised hole cards.",
  related: ["teen-patti", "blackjack", "chicago-sweden"]
},
{
  id: "blackjack", name: "Blackjack", alt: ["Twenty-One", "Pontoon (UK)", "Vingt-et-un"],
  countries: ["United States of America", "France", "United Kingdom"], family: "banking", deck: "Standard 52",
  min: 2, max: 7, best: [3, 4, 5], diff: 1, mins: 20, age: "8+ (for fun)", hand: 2,
  goal: "Get closer to 21 than the dealer without going over.",
  quick: ["Each player and the dealer get 2 cards.", "Number cards are face value, faces 10, Aces 1 or 11.", "Ask for more cards ('hit') or 'stand'.", "Beat the dealer's total without going over 21."],
  setup: ["Choose a dealer (banker). Deal 2 cards to each player, with one of the dealer's cards face up."],
  rules: [
    "Players act in turn: hit to take a card, or stand.",
    "Going over 21 'busts' and loses immediately.",
    "An Ace plus a 10-value card on the first two cards is a 'blackjack' and beats any other 21.",
    "Options at casinos: double down (double the bet, take exactly one card), split pairs into two hands.",
    "The dealer then plays by fixed rules: hit on 16 or less, stand on 17 or more."
  ],
  scoring: ["Win: even money. Blackjack: usually 3 to 2. Tie (push): stake returned. At home, play for points or sweets!"],
  mistakes: ["Hitting on hard 17+ — almost always a loss."],
  variants: ["Pontoon (UK): 'twist' and 'stick', five-card trick.", "Spanish 21."],
  tips: { b: "Stand on 17 or more.", i: "Learn 'basic strategy' charts.", e: "In home games, rotate the bank fairly." },
  history: "Evolved from the French 'Vingt-et-un' of the 1700s. The name came from a US casino promotion paying extra for the Ace of spades with a black Jack.",
  related: ["texas-holdem", "teen-patti"]
},
{
  id: "truco", name: "Truco", alt: ["Truc"],
  countries: ["Argentina", "Uruguay", "Brazil", "Paraguay", "Chile", "Venezuela", "Bolivia"], family: "vying", deck: "40-card Spanish deck",
  min: 2, max: 6, best: [4], partners: true, diff: 3, mins: 30, age: "10+", hand: 3,
  goal: "Win two of three tricks, bluff your opponents with calls like 'Truco!' and 'Envido!', and reach 30 points.",
  quick: ["Deal 3 cards each.", "Play 3 tricks with a special card ranking; win 2 to win the hand.", "Call 'Truco' to raise the stakes; opponents accept, raise or fold.", "'Envido' is a side bet on two cards of the same suit."],
  setup: ["Use 40 Spanish cards (no 8, 9). Deal 3 each. Partners sit alternately."],
  rules: [
    "Argentine card order (high to low): 1 of swords, 1 of clubs, 7 of swords, 7 of coins, all 3s, all 2s, 1 of cups and coins, all Kings (12), Horses (11), Jacks (10), 7 of cups and clubs, 6s, 5s, 4s.",
    "Win 2 of 3 tricks to win the hand. Ties follow rules about who 'leads' (who won the first trick).",
    "Truco: worth 1 point if not called. Calling 'Truco!' raises it to 2, 'Retruco' to 3, 'Vale cuatro' to 4. Opponents can say 'Quiero' (accept) or 'No quiero' (fold).",
    "Envido (first trick only): bet on the value of two same-suit cards (20 + their values; face cards count 0). 'Real envido' and 'Falta envido' raise it.",
    "Flor (optional): three cards of the same suit.",
    "Partners can signal with traditional gestures."
  ],
  scoring: ["Game to 30 points (15 'malas' and 15 'buenas').", "Points come from tricks, Truco calls and Envido bets."],
  mistakes: ["Using your best card in the first trick when you'll need it later."],
  variants: ["Truco Paulista (Brazil): manilha cards chosen from a turned card.", "Truco Gaúcho, Uruguayan Truco with 'muestra'."],
  tips: { b: "Learn the top four cards first.", i: "Bluffing is essential — call Truco with weak cards sometimes.", e: "Count which top cards are still out." },
  history: "Brought from Spain to South America, Truco is the national card game of Argentina, Uruguay and southern Brazil, known for its theatrical calls and verses.",
  related: ["mus", "tute", "escoba"]
},
{
  id: "conquian", name: "Conquián", alt: ["Coon Can"],
  countries: ["Mexico", "United States of America"], family: "rummy", deck: "40-card Spanish deck",
  min: 2, max: 2, best: [2], diff: 2, mins: 20, age: "8+", hand: 10,
  goal: "Be first to meld 11 cards — your ten plus one more — into sets and runs.",
  quick: ["Deal 10 cards each.", "Turn a stock card face up; the player may use it in a meld or pass it.", "You can't take cards into your hand; only use them in melds on the table.", "First to have 11 cards melded wins."],
  setup: ["Use 40 cards (Spanish deck, or 52 minus 8s, 9s, 10s). Deal 10 each."],
  rules: [
    "Melds: sets of 3–4 same rank, or runs of 3+ consecutive cards in one suit (7 and Jack are consecutive).",
    "Non-dealer turns up the top stock card. They may use it in a meld with cards from their hand (and must then discard one), or pass it.",
    "If passed, the other player may use it or discard it; then the next stock card is turned.",
    "Players can rearrange their own melds on the table.",
    "An opponent can force you to use a card that fits your melds ('forcing')."
  ],
  scoring: ["First to meld 11 cards wins the hand. If the stock runs out, the hand is a draw."],
  mistakes: ["Forgetting that turned cards can only be used in melds."],
  variants: ["US 'Coon Can' versions."],
  tips: { b: "Keep flexible cards that fit several melds.", i: "Watch which cards your opponent declines.", e: "Force unwanted cards onto opponents' melds." },
  history: "A 19th-century Mexican game, considered the ancestor of all rummy games.",
  related: ["rummy", "gin-rummy", "chinchon"]
},
{
  id: "all-fours", name: "All Fours", alt: ["Seven Up", "High-Low-Jack"],
  countries: ["Trinidad and Tobago", "United Kingdom", "United States of America"], family: "trick-taking", deck: "Standard 52",
  min: 2, max: 4, best: [4], partners: true, diff: 2, mins: 30, age: "10+", hand: 6,
  goal: "Win points for holding high and low trumps, capturing the Jack of trumps, and taking the most 'game' points.",
  quick: ["Deal 6 cards each; turn up a card for trumps.", "Players may 'beg' for a new trump.", "Play 6 tricks.", "Score: High, Low, Jack and Game."],
  setup: ["Deal 6 cards each in 3s. Turn up the next card: its suit is trumps. If it's a Jack, the dealer scores 1."],
  rules: [
    "The player left of dealer may stand (accept trumps) or 'beg'. If they beg, the dealer gives them 1 point or deals 3 more each and turns a new trump.",
    "Lead any card. Others must follow suit or trump; if they can follow, they may still choose to trump.",
    "Highest trump wins, else highest card of the led suit."
  ],
  scoring: ["High: 1 point for the highest trump in play.", "Low: 1 point for the lowest trump in play (to whoever was dealt it).", "Jack: 1 point for capturing the Jack of trumps (Trinidad: hanging the Jack scores 3).", "Game: 1 point for most 'game points' (A 4, K 3, Q 2, J 1, 10 10).", "Trinidad games go to 14 points."],
  mistakes: ["Letting the opponents capture your Jack of trumps."],
  variants: ["Trinidad All Fours: 'hang Jack' for 3 points.", "Pitch, Setback (US)."],
  tips: { b: "Hold your Jack until it's safe.", i: "Capture 10s for the Game point.", e: "Lead a high trump to 'hang' opponents' Jack." },
  history: "An English pub game from the 1600s, now the national card game of Trinidad and Tobago with national tournaments.",
  related: ["whist", "euchre"]
},
{
  id: "kalooki", name: "Kalooki", alt: ["Kaluki", "Kalookie"],
  countries: ["Jamaica", "United Kingdom"], family: "rummy", deck: "Two 52-card decks + 4 Jokers",
  min: 2, max: 6, best: [3, 4, 5], diff: 2, mins: 45, age: "10+", hand: 13,
  goal: "Be first to go out by melding all your cards; Jokers are wild.",
  quick: ["Deal 13 cards each.", "Draw from the stock or discard pile, then discard.", "Your first meld must be worth at least 40 points.", "Swap Jokers out of melds with the real card."],
  setup: ["Shuffle two decks plus 4 Jokers. Deal 13 each. Turn up a card to start the discard pile."],
  rules: [
    "Melds: sets of 3–4 of the same rank (all different suits) or runs of 3+ in one suit.",
    "To take the top discard, you must use it in a meld immediately (in most rules, only after your first meld).",
    "Your first meld (or combination of melds) must total 40+ points.",
    "Once you've melded, you can add to any meld on the table.",
    "If you hold the card a Joker represents, you may swap it in and take the Joker."
  ],
  scoring: ["Card values: Jokers 25 (in hand), Aces 11 (or 15), faces 10, others face value.", "Players pay the winner, or accumulate penalties until one reaches 150 and is out."],
  mistakes: ["Holding Jokers too long — they're heavy penalty cards."],
  variants: ["Contract Kalooki: different required melds each round."],
  tips: { b: "Get your 40-point opening early.", i: "Steal Jokers whenever possible.", e: "Track discards to avoid feeding opponents." },
  history: "A Rummy relative hugely popular in Jamaica and in the Jewish community of London.",
  related: ["rummy", "canasta", "gin-rummy"]
}
);
