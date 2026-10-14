// Games of Asia, Africa and the Middle East (plus the Balkans' Tablić). Original Card Atlas wording.
window.GAMES = window.GAMES || [];
GAMES.push(
{
  id: "koi-koi", name: "Koi-Koi", alt: ["こいこい", "Hanafuda"], native: "こいこい", say: "koy-koy",
  countries: ["Japan"], family: "fishing", deck: "48-card Hanafuda (flower cards)",
  min: 2, max: 2, best: [2], diff: 3, mins: 30, age: "8+", hand: 8,
  goal: "Capture flower cards by matching months, form scoring combinations (yaku), and decide whether to stop or push your luck with 'Koi-koi!'.",
  quick: ["Deal 8 cards each and 8 face up to the table.", "Play a card to capture a table card of the same month; then flip a deck card and do the same.", "Make a yaku (combination) to score.", "Stop and collect, or call 'Koi-koi' to keep going for more."],
  setup: ["Hanafuda has 12 months × 4 cards. Each month has a flower and cards are worth bright (20), animal (10), ribbon (5) or plain (1).", "Deal 8 each and 8 face up to the table."],
  rules: [
    "On your turn, play a card from your hand. If a table card has the same month, capture both. If not, leave your card on the table.",
    "Then flip the top deck card and capture a matching table card the same way.",
    "If two table cards match, choose one. If three match, take all four.",
    "When your captured cards form a yaku, choose: stop ('shōbu') and score, or say 'Koi-koi' and continue to build bigger scores.",
    "If you call koi-koi and your opponent then makes a yaku, they can stop and win with doubled points (in many rules).",
    "A game lasts 12 rounds (one for each month)."
  ],
  scoring: ["Example yaku: Five Brights 10 or 15, Four Brights 8, Three Brights 5, Boar-Deer-Butterfly 5, red poetry ribbons 5, blue ribbons 5, 5 ribbons 1+, 5 animals 1+, 10 plain cards 1+.", "Viewing the moon / viewing flowers with sake cup: 5 each (house rules vary)."],
  mistakes: ["Calling koi-koi when your opponent is one card from a yaku."],
  variants: ["Hachi-hachi (3 players).", "Go-Stop (Korea)."],
  tips: { b: "Learn the 12 months by their flowers.", i: "Aim for one yaku and stop early.", e: "Watch the deck count: late koi-koi calls are safer." },
  history: "Hanafuda cards were created in 18th-century Japan to work around bans on Western playing cards. Nintendo started out in 1889 as a hanafuda manufacturer.",
  related: ["go-stop", "scopa"]
},
{
  id: "go-stop", name: "Go-Stop", alt: ["고스톱", "Hwatu"], native: "고스톱", say: "go-stop",
  countries: ["South Korea"], family: "fishing", deck: "48-card Hwatu (flower cards)",
  min: 2, max: 3, best: [3], diff: 3, mins: 30, age: "10+", hand: 7,
  goal: "Match flower cards to capture them, build scoring combinations, then choose 'Go' for more or 'Stop' to collect.",
  quick: ["Three players: deal 7 each and 6 face up on the table.", "Play a card to match a table card's month, then flip a deck card and match again.", "Reach 3 points (with 3 players) to choose Go or Stop.", "Each Go adds points — but someone else may then win."],
  setup: ["Hwatu cards are the Korean version of hanafuda. With 3 players deal 7 each and 6 to the table (2 players: 10 each and 8 on the table)."],
  rules: [
    "Match by month as in Koi-Koi: play a card, then flip one from the deck.",
    "Special events (e.g. capturing the card just played by matching the flip, known as 'ppeok' rules) let you steal plain cards from opponents.",
    "Points come from brights, animals, ribbons and plain cards ('pi').",
    "Once you reach the target (3 points in 3-player), say 'Go' to continue or 'Stop' to end and collect.",
    "Each Go increases the payout; three Gos double it."
  ],
  scoring: ["Score is paid by each opponent; extra penalties (e.g. 'pi-bak') apply to players with few plain cards."],
  mistakes: ["Saying Go too often when opponents are close to scoring."],
  variants: ["Matgo: the 2-player version."],
  tips: { b: "Learn the months first.", i: "Collect plain cards; they add up.", e: "Count what's left in the deck before calling Go." },
  history: "Korea's most popular family card game, often played during holidays like Chuseok and Seollal.",
  related: ["koi-koi"]
},
{
  id: "dou-dizhu", name: "Dou Dizhu", alt: ["斗地主", "Fight the Landlord"], native: "斗地主", say: "doe dee-joo",
  countries: ["China"], family: "climbing", deck: "54 cards (52 + 2 Jokers)",
  min: 3, max: 3, best: [3], diff: 3, mins: 15, age: "8+", hand: 17,
  goal: "One player is the Landlord; the other two are Peasants working together. Be first to get rid of all your cards.",
  quick: ["Deal 17 cards each; 3 cards go face down as the kitty.", "Bid 1, 2 or 3 to become the Landlord, who takes the kitty.", "Lead a combination; others must beat it with a higher combination of the same type, or pass.", "Bombs and the Rocket beat anything."],
  setup: ["Deal 17 cards to each of three players; put 3 face down."],
  rules: [
    "Rank (low to high): 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A, 2, black Joker, red Joker. Suits don't matter.",
    "Bidding: each player bids 1, 2 or 3 or passes. The highest bidder becomes the Landlord, shows the kitty, takes it, and leads.",
    "Combinations: single, pair, triple, triple + one, triple + pair, straight (5+ singles, no 2s or Jokers), consecutive pairs (3+ pairs), 'airplane' (consecutive triples, with or without attachments), four + two.",
    "Each player must beat the previous play with the same combination type and a higher rank, or pass.",
    "Bomb: four of a kind beats any non-bomb. Rocket: both Jokers beat everything.",
    "When two players pass in a row, the last player to play leads anything."
  ],
  scoring: ["The base score is the bid. Each bomb or rocket doubles it.", "If the Landlord goes out first, they win from both Peasants; if either Peasant goes out first, both Peasants win."],
  mistakes: ["Peasants competing with each other instead of helping their partner."],
  variants: ["Four-player Dou Dizhu with two decks."],
  tips: { b: "Use long straights to dump low cards.", i: "As a Peasant, don't overtake your partner's winning play.", e: "Count 2s, Jokers and bombs." },
  history: "Created in Hubei province in the 1990s, it became China's most played card game, especially online, with hundreds of millions of players.",
  related: ["big-two", "tien-len", "daifugo"]
},
{
  id: "big-two", name: "Big Two", alt: ["大老二", "Big Deuce", "Capsa", "Choh Dai Di"], native: "大老二", say: "dai lo yi",
  countries: ["China", "Taiwan", "Malaysia", "Indonesia"], family: "climbing", deck: "Standard 52",
  min: 2, max: 4, best: [4], diff: 2, mins: 20, age: "8+", hand: 13,
  goal: "Be first to play all your cards. 2s are the highest cards.",
  quick: ["Deal 13 cards each.", "The holder of the 3♦ leads first.", "Play singles, pairs, triples or five-card poker hands; others must beat it with the same type or pass.", "First to empty their hand wins."],
  setup: ["Four players: deal 13 each."],
  rules: [
    "Rank (low to high): 3, 4 … K, A, 2. Suits (low to high): ♦, ♣, ♥, ♠.",
    "The player with 3♦ starts, playing it alone or in a combination.",
    "Valid plays: single, pair, triple, or a five-card hand: straight < flush < full house < four of a kind (+1) < straight flush.",
    "Beat a play with the same number of cards of a higher value. Five-card hands are compared by type, then by rank.",
    "Pass if you can't or don't want to play. When everyone else passes, the last player leads anything new."
  ],
  scoring: ["Others score penalty points for remaining cards: often 1 per card, doubled with 10+ cards, tripled with all 13."],
  mistakes: ["Spending your 2s too early.", "Breaking up a strong five-card hand."],
  variants: ["Pusoy Dos (Philippines): different suit order, 3♣ starts.", "Capsa (Indonesia)."],
  tips: { b: "Get rid of low singles early.", i: "Count 2s and Aces.", e: "Hold control cards to lead your final combination." },
  history: "Developed in the coastal provinces of China, especially Hong Kong and Guangdong, it's hugely popular in Southeast Asia.",
  related: ["pusoy-dos", "tien-len", "dou-dizhu", "daifugo"]
},
{
  id: "pusoy-dos", name: "Pusoy Dos", alt: ["Filipino Poker"],
  countries: ["Philippines"], family: "climbing", deck: "Standard 52",
  min: 2, max: 4, best: [4], diff: 2, mins: 20, age: "8+", hand: 13,
  goal: "Shed all your cards first, playing combinations that beat the previous play; 2s are highest.",
  quick: ["Deal 13 cards each.", "The holder of the 3♣ leads.", "Beat each play with a higher one of the same type or pass.", "First out wins."],
  setup: ["Deal 13 cards each to four players."],
  rules: [
    "Rank: 3 lowest … A, 2 highest.",
    "Suit order (low to high): ♣, ♠, ♥, ♦.",
    "The first play must include the 3♣.",
    "Combinations as in Big Two: singles, pairs, triples, five-card poker hands.",
    "When everyone passes, the last player leads fresh."
  ],
  scoring: ["Track places (1st, 2nd …) or count remaining cards as penalties."],
  mistakes: ["Confusing suit order with Big Two's."],
  variants: ["Some groups allow two-pair as a combination."],
  tips: { b: "Lead your lowest cards.", i: "Save a 2 to regain the lead.", e: "Plan your hand into combinations at the start." },
  history: "The Filipino branch of the Big Two family, played at home and in many online apps.",
  related: ["big-two", "tien-len"]
},
{
  id: "tien-len", name: "Tiến Lên", alt: ["Thirteen", "Killer", "Southern Poker"], native: "Tiến lên", say: "tee-en len",
  countries: ["Vietnam"], family: "climbing", deck: "Standard 52",
  min: 2, max: 4, best: [4], diff: 2, mins: 20, age: "8+", hand: 13,
  goal: "Be first to shed all 13 cards by playing higher combinations; 2s are top, but they can be 'chopped'.",
  quick: ["Deal 13 cards each.", "The holder of 3♠ leads (first game).", "Beat each play with a higher one of the same kind or pass.", "Special combinations can 'chop' (beat) 2s."],
  setup: ["Deal 13 cards each to four players."],
  rules: [
    "Rank: 3 (lowest) … K, A, 2 (highest). Suits: ♠ < ♣ < ♦ < ♥.",
    "Combinations: single, pair, triple, four of a kind, sequence of 3+ consecutive cards (no 2s), double sequence (3+ consecutive pairs).",
    "Beat a play with the same type and length, higher top card.",
    "Once you pass, you're out until the round of play is won.",
    "Chops: four of a kind or three consecutive pairs beats a single 2; four consecutive pairs beats a pair of 2s."
  ],
  scoring: ["Placings (1st to 4th) or points per remaining card. Instant wins exist for special deals (e.g. four 2s)."],
  mistakes: ["Breaking a double sequence that could chop a 2."],
  variants: ["Southern and Northern Vietnamese rules differ."],
  tips: { b: "Group your cards into combinations early.", i: "Hold a chop for when someone plays a 2.", e: "Count 2s and Aces." },
  history: "Vietnam's most popular card game, especially during Tết (Lunar New Year), and well known in Vietnamese diaspora communities.",
  related: ["big-two", "pusoy-dos", "dou-dizhu"]
},
{
  id: "daifugo", name: "Daifugō", alt: ["大富豪", "Daihinmin", "President", "Scum"], native: "大富豪", say: "die-foo-go",
  countries: ["Japan", "United States of America"], family: "climbing", deck: "Standard 52 (+ Jokers)",
  min: 3, max: 8, best: [4, 5], diff: 2, mins: 20, age: "8+", hand: 13,
  goal: "Get rid of your cards first to become the 'Grand Millionaire'. The last player becomes the 'Grand Pauper' and must give up their best cards next game.",
  quick: ["Deal all cards.", "Lead singles, pairs, triples (or runs, in many rules).", "Others must play the same number of higher cards or pass.", "Finishing order sets social ranks — and card exchanges — for the next game."],
  setup: ["Deal the whole deck (with 1–2 Jokers as wild in Japan)."],
  rules: [
    "Rank (low to high): 3, 4 … K, A, 2. Joker beats all.",
    "Play the same number of cards as the lead, higher in rank.",
    "When everyone passes, the pile is cleared and the last player leads.",
    "8-giri (eight stop, Japanese rule): playing an 8 clears the pile immediately.",
    "Revolution: playing four of a kind reverses the rank order until the next revolution.",
    "After each game, the Pauper gives their two best cards to the Millionaire, who returns two cards of their choice (smaller exchange for second and second-last)."
  ],
  scoring: ["Ranks: Grand Millionaire, Millionaire, Commoner, Pauper, Grand Pauper. Play several games and track rank points."],
  mistakes: ["Keeping a revolution too long, letting opponents use it."],
  variants: ["President / Scum / Asshole (Western names).", "Many Japanese local rules: 'Shibari' suit locks, 11-back reversals."],
  tips: { b: "Get rid of low cards early.", i: "Save 2s and Jokers to regain the lead.", e: "Use a revolution when you hold many low cards." },
  history: "A Japanese post-war favourite, now one of the country's most played games; it spread to the West as 'President'.",
  related: ["big-two", "dou-dizhu", "tien-len"]
},
{
  id: "twenty-nine", name: "Twenty-Nine", alt: ["29", "Twenty Eight"],
  countries: ["India", "Bangladesh", "Nepal", "Sri Lanka"], family: "trick-taking", deck: "32-card (7 to Ace)",
  min: 4, max: 4, best: [4], partners: true, diff: 3, mins: 30, age: "10+", hand: 8,
  goal: "Partnerships bid how many card points they'll capture, with a hidden trump suit that is revealed during play.",
  quick: ["Deal 4 cards each.", "Bid from 16 up to 28 points.", "The bidder secretly picks trumps by setting aside one card; deal 4 more each.", "Play 8 tricks; Jacks and 9s are worth the most."],
  setup: ["Use 32 cards. Partners sit opposite. Deal 4 cards each."],
  rules: [
    "Rank (high to low) in each suit: J, 9, A, 10, K, Q, 8, 7.",
    "Card points: J 3, 9 2, A 1, 10 1. Total 28 (some rules add 1 for the last trick, hence 'Twenty-Nine').",
    "Bidding starts at 16 (some play 15) and goes up to 28. The highest bidder picks a trump suit by placing a card of that suit face down.",
    "Deal 4 more cards each.",
    "Follow suit if able. If you can't, you may ask the bidder to reveal the trump card; then you must play a trump if you have one (by most rules).",
    "Pair (K+Q of trumps) held by one side can change the bid target by 4 once trumps are revealed."
  ],
  scoring: ["Make the bid: +1 game point. Fail: −1 (or −2 if doubled). First to +6 wins (or the opponents reach −6)."],
  mistakes: ["Forgetting that 9s outrank Aces."],
  variants: ["Twenty-Eight (no last-trick point)", "Double and redouble options."],
  tips: { b: "Bid on your Jacks and 9s.", i: "Delay revealing trumps if it helps your side.", e: "Count the 28 points as the tricks fall." },
  history: "Popular across north India, Nepal and Bangladesh, Twenty-Nine is a descendant of European Jass games brought by Dutch traders.",
  related: ["belote", "court-piece", "omi"]
},
{
  id: "court-piece", name: "Court Piece", alt: ["Rang", "Coat Piece", "Hokm (related)"],
  countries: ["Pakistan", "India"], family: "trick-taking", deck: "Standard 52",
  min: 4, max: 4, best: [4], partners: true, diff: 2, mins: 30, age: "8+", hand: 13,
  goal: "Partnerships try to win 7 tricks; winning all 13 is a 'court'.",
  quick: ["Deal 5 cards each.", "The trump caller looks at their 5 cards and chooses trumps.", "Deal the rest (13 each).", "Play tricks: first team to 7 wins the deal."],
  setup: ["Choose a trump caller (often by dealing until an Ace appears). Deal 5 each; the caller names trumps. Deal the rest in 4s."],
  rules: [
    "The trump caller leads the first trick.",
    "Follow suit if able; otherwise play anything, including a trump.",
    "Highest trump wins, else highest card of the led suit (Ace high).",
    "The first side to 7 tricks wins the deal. Some play on for a 'court' (all 13)."
  ],
  scoring: ["Win the deal: 1 point. A court (all 13 tricks): bonus points (52 in some scoring).", "If the caller's team loses, the deal passes."],
  mistakes: ["Calling trumps with too few of that suit."],
  variants: ["Single Sir / Double Sir: tricks accumulate until a team wins two in a row."],
  tips: { b: "Pick your longest suit as trumps.", i: "Lead trumps early with a strong trump hand.", e: "Count cards in your partner's long suits." },
  history: "A favourite in Pakistan and north India, often played on rooftops and at family gatherings; closely related to the Persian game Hokm.",
  related: ["hokm", "callbreak", "twenty-nine"]
},
{
  id: "callbreak", name: "Callbreak", alt: ["Call Bridge", "Lakdi"],
  countries: ["Nepal", "India", "Bangladesh"], family: "trick-taking", deck: "Standard 52",
  min: 4, max: 4, best: [4], diff: 2, mins: 30, age: "8+", hand: 13,
  goal: "Each player bids how many tricks they'll take with spades as permanent trumps; score your bid exactly or more over five rounds.",
  quick: ["Deal 13 cards each; spades are always trumps.", "Each player 'calls' (bids) a number of tricks.", "Follow suit, and you must beat the current winning card if you can.", "Make your call to score it; fail and lose it."],
  setup: ["Deal 13 cards each. Play 5 rounds."],
  rules: [
    "Bids: each player calls at least 1 (up to 8 or 13).",
    "Player right of dealer leads (rules vary).",
    "You must follow suit and play a higher card if able. If you can't follow, you must play a spade (and beat any spade played) if possible.",
    "Highest spade wins, else highest card of the led suit."
  ],
  scoring: ["Make your call: score the bid, plus 0.1 per extra trick (e.g. bid 3, take 4 = 3.1).", "Fail: lose your bid.", "Highest total after 5 rounds wins."],
  mistakes: ["Overcalling; it's costly."],
  variants: ["Some allow an 8-call to win the game outright."],
  tips: { b: "Count Aces and high spades for your call.", i: "Void a suit to trump in.", e: "Track spades: 13 total." },
  history: "A Nepalese and Indian favourite, especially during the Tihar and Diwali festivals; it's one of the most downloaded card apps in South Asia.",
  related: ["spades", "oh-hell", "court-piece"]
},
{
  id: "teen-patti", name: "Teen Patti", alt: ["Flush", "Flash", "तीन पत्ती"], native: "तीन पत्ती", say: "teen pah-tee",
  countries: ["India", "Nepal", "Pakistan", "Bangladesh"], family: "vying", deck: "Standard 52 + chips",
  min: 3, max: 6, best: [4, 5], diff: 1, mins: 20, age: "18+ (for money)", hand: 3,
  goal: "Bet on having the best three-card hand, or bluff everyone into folding.",
  quick: ["Everyone antes into the pot ('boot'); deal 3 cards each.", "Play 'blind' (without looking) or 'seen'.", "Bet or fold in turn; blind players bet half as much.", "Best three-card hand at showdown wins."],
  setup: ["Each player puts a fixed 'boot' in the pot. Deal 3 cards face down to each."],
  rules: [
    "Hand ranking (high to low): Trail (three of a kind), Pure sequence (straight flush), Sequence (straight), Colour (flush), Pair, High card.",
    "A-K-Q is the highest sequence, A-2-3 the second highest.",
    "A blind player bets at least the current stake; a seen player bets at least twice it.",
    "Players may fold ('pack'), or when two remain, ask for a 'show'."
  ],
  scoring: ["Winner takes the pot. Play for chips or points with family."],
  mistakes: ["Seeing your cards too early gives up the blind advantage."],
  variants: ["Muflis (lowest hand wins)", "AK47 (A, K, 4, 7 wild)", "Joker variants."],
  tips: { b: "Learn the hand order.", i: "Play blind to keep stakes low.", e: "Read betting patterns." },
  history: "Rooted in the British game Three-Card Brag, Teen Patti is India's most played card game, especially during Diwali.",
  related: ["texas-holdem", "blackjack"]
},
{
  id: "indian-rummy", name: "Indian Rummy", alt: ["13-Card Rummy", "Paplu"],
  countries: ["India", "Pakistan", "Nepal", "Bangladesh", "Sri Lanka"], family: "rummy", deck: "Two 52-card decks + Jokers",
  min: 2, max: 6, best: [2, 4, 6], diff: 2, mins: 30, age: "10+", hand: 13,
  goal: "Arrange all 13 cards into valid sequences and sets, including at least one 'pure' sequence without jokers, and declare first.",
  quick: ["Deal 13 cards each; choose a random 'wild joker' rank.", "Draw a card, then discard.", "You need two sequences, one of them pure (no jokers).", "Declare when all cards are grouped."],
  setup: ["Shuffle two decks with printed Jokers. Deal 13 each. Turn up a card to choose the wild joker rank; another card starts the discard pile."],
  rules: [
    "Sequences: 3+ consecutive cards of one suit. A pure sequence uses no jokers.",
    "Sets: 3–4 cards of the same rank and different suits; jokers allowed.",
    "Your hand must contain at least two sequences, one of them pure, plus any sets.",
    "Draw from the stock or discard pile, then discard.",
    "Declare by placing your final card face down and showing your groups."
  ],
  scoring: ["Losers count unmatched cards: face cards and Aces 10, others face value, capped at 80.", "Points rummy, pool rummy (eliminate at 101/201) and deals rummy are common formats."],
  mistakes: ["Declaring without a pure sequence — big penalty."],
  variants: ["Pool rummy, Deals rummy, 21-card rummy."],
  tips: { b: "Build your pure sequence first.", i: "Discard high cards early.", e: "Watch what others pick up." },
  history: "Indian Rummy blends Gin and Rummy 500 traditions with its own rules; it's a mainstay of family gatherings and online platforms.",
  related: ["rummy", "gin-rummy", "kalooki"]
},
{
  id: "omi", name: "Omi", alt: ["ඕමි"], native: "ඕමි", say: "oh-mee",
  countries: ["Sri Lanka"], family: "trick-taking", deck: "32-card (7 to Ace)",
  min: 4, max: 4, best: [4], partners: true, diff: 1, mins: 30, age: "8+", hand: 8,
  goal: "With your partner, win more tricks than the other team; score tokens to win the game.",
  quick: ["Deal 4 cards each.", "The player to the dealer's right chooses trumps.", "Deal 4 more each.", "Win more of the 8 tricks to earn tokens."],
  setup: ["Use 32 cards (7 to Ace). Partners sit opposite. Deal 4 each; the trump chooser names trumps; then deal 4 more each."],
  rules: [
    "The trump chooser leads.",
    "Follow suit if you can; otherwise play any card.",
    "Highest trump wins, else highest of the led suit (Ace high).",
    "Winning 5 or more tricks wins the deal."
  ],
  scoring: ["If the trump-calling team wins: 1 token. If the other team wins: 2 tokens. All 8 tricks: 3 tokens (in common rules).", "4–4 tie: tokens carry over.", "First team to 10 tokens wins."],
  mistakes: ["Calling trumps without enough cards in that suit."],
  variants: ["Local scoring differences between regions."],
  tips: { b: "Pick the suit you have most of.", i: "Lead high to draw trumps.", e: "Count the 8 trumps." },
  history: "Sri Lanka's favourite card game, played everywhere from village verandas to office lunch breaks.",
  related: ["twenty-nine", "court-piece"]
},
{
  id: "hokm", name: "Hokm", alt: ["حکم"], native: "حکم", say: "hokm",
  countries: ["Iran", "Afghanistan", "Tajikistan"], family: "trick-taking", deck: "Standard 52",
  min: 4, max: 4, best: [4], partners: true, diff: 2, mins: 30, age: "8+", hand: 13,
  goal: "Partnerships race to win 7 tricks in each hand; first team to 7 hands wins.",
  quick: ["Choose the 'hakem' (ruler) by dealing until someone gets an Ace.", "Deal 5 cards each; the hakem chooses trumps.", "Deal the rest (13 each).", "First team to 7 tricks wins the hand."],
  setup: ["Deal cards face up one at a time until an Ace appears: that player is the hakem.", "The hakem deals 5 to each, looks at their own and names trumps, then deals the rest in 4s."],
  rules: [
    "The hakem leads first.",
    "Follow suit if able; otherwise play any card.",
    "Highest trump wins, else highest card of the led suit (Ace high).",
    "As soon as a team wins 7 tricks, the hand ends.",
    "If the hakem's team loses, the next player becomes hakem."
  ],
  scoring: ["Win a hand: 1 point. 'Kot' (7–0): 2 points, or 3 if the hakem's team is shut out.", "First team to 7 points wins."],
  mistakes: ["Hakem choosing trumps from a short suit."],
  variants: ["Three-player and six-player Hokm."],
  tips: { b: "As hakem, pick your longest suit.", i: "Partners should signal their strong suits.", e: "Count trumps for the endgame." },
  history: "Iran's national card game, closely related to Court Piece; legend links it to the 1500s Persian court.",
  related: ["court-piece", "whist", "tarneeb"]
},
{
  id: "tarneeb", name: "Tarneeb", alt: ["طرنيب"], native: "طرنيب", say: "tar-neeb",
  countries: ["Lebanon", "Syria", "Palestine", "Jordan", "Iraq", "Kuwait"], family: "trick-taking", deck: "Standard 52",
  min: 4, max: 4, best: [4], partners: true, diff: 2, mins: 45, age: "10+", hand: 13,
  goal: "Partnerships bid how many tricks they'll take and name the trump ('tarneeb'); first team to 31 points wins.",
  quick: ["Deal 13 cards each.", "Bid between 7 and 13 tricks.", "The highest bidder names trumps and leads.", "Make your bid to score your tricks; fail and lose the bid."],
  setup: ["Deal all 52 cards to four players in two partnerships."],
  rules: [
    "Bidding starts right of the dealer (anticlockwise in Arab tradition). Each player bids higher or passes; one round only.",
    "The winner names trumps and leads the first trick.",
    "Follow suit if able; otherwise play anything.",
    "Highest trump wins, else highest of the led suit."
  ],
  scoring: ["Bidding team succeeds: score the number of tricks won. Fails: lose the bid amount, and opponents score their tricks.", "A 13-trick bid made often wins outright.", "First to 31 (or 41) points wins."],
  mistakes: ["Overbidding without partner support."],
  variants: ["Syrian Tarneeb (individual bidding).", "400 (Lebanese variant)."],
  tips: { b: "Count your sure winners plus long trump suit.", i: "Trust your partner's bid information.", e: "Track trumps and voids." },
  history: "Hugely popular in the Levant, especially in cafés with backgammon, and among Arab communities worldwide.",
  related: ["hokm", "whist", "spades"]
},
{
  id: "basra", name: "Basra", alt: ["Bastra", "باصرة"], native: "باصرة", say: "bass-ra",
  countries: ["Egypt", "Lebanon", "Iraq", "Sudan"], family: "fishing", deck: "Standard 52",
  min: 2, max: 4, best: [2, 4], partners: true, diff: 2, mins: 30, age: "8+", hand: 4,
  goal: "Capture table cards by matching rank or sum; sweeping the table is a 'basra' worth 10 points. Reach 101.",
  quick: ["Deal 4 cards each and 4 face up to the table.", "Play a card to capture same-rank cards or number cards adding up to it.", "Jacks sweep the table; the 7♦ is a special wild card.", "Clearing the table with a match scores a basra."],
  setup: ["Deal 4 cards each and 4 to the table. If a Jack or the 7♦ is turned on the table, return it to the deck and replace it."],
  rules: [
    "Number cards capture same-rank cards and/or groups that add up to their value.",
    "Kings and Queens only capture matching Kings or Queens.",
    "A Jack captures every card on the table (it doesn't count as a basra).",
    "The 7♦ can capture any sum or the entire table and counts as a basra if it clears it (rules vary).",
    "Clearing the table by matching is a basra: 10 points. Jack on a lone Jack is a big basra in some rules.",
    "Deal 4 more when hands are empty. The last capturer takes the rest."
  ],
  scoring: ["Most cards 3, 2♣ 2, 10♦ 3, each Jack 1, each Ace 1, each basra 10.", "First to 101 wins."],
  mistakes: ["Leaving a single card on the table that your opponent can match."],
  variants: ["Many local Egyptian and Iraqi scoring differences."],
  tips: { b: "Save Jacks to sweep big tables.", i: "Avoid leaving one card on the table.", e: "Track Jacks and the 7♦." },
  history: "An Egyptian café classic related to Scopa and Casino; also played across the Levant.",
  related: ["pishti", "scopa", "chkobba", "casino"]
},
{
  id: "pishti", name: "Pişti", alt: ["Pishti", "Pisti"], native: "Pişti", say: "pish-tee",
  countries: ["Turkey", "N. Cyprus", "Azerbaijan"], family: "fishing", deck: "Standard 52",
  min: 2, max: 4, best: [2, 4], partners: true, diff: 1, mins: 20, age: "7+", hand: 4,
  goal: "Capture the pile by matching its top card or playing a Jack; capturing a single card is a 'pişti' for big points.",
  quick: ["Deal 4 cards each; place 4 on the table (3 face down, 1 face up on top).", "Play one card on the pile. If it matches the top card's rank, take the pile.", "A Jack captures any pile.", "Capturing a single-card pile with a match is a pişti: 10 points."],
  setup: ["Deal 4 cards each. Put 4 cards in a pile in the middle: 3 face down and the top one face up."],
  rules: [
    "In turn, play one card face up on top of the pile.",
    "If it matches the rank of the previous top card, take the whole pile.",
    "A Jack takes any pile.",
    "If you capture when the pile has only one card (by matching it), that's a pişti.",
    "Deal 4 more cards each when hands empty. The last capturer takes any remaining cards."
  ],
  scoring: ["Pişti 10 (Jack on Jack pişti 20).", "Most cards 3, each Ace 1, each Jack 1, 2♣ 2, 10♦ 3.", "Play to 151 or an agreed total."],
  mistakes: ["Playing a card that lets your opponent make an easy pişti."],
  variants: ["Partnership pişti with 4 players."],
  tips: { b: "Hold your Jacks for big piles.", i: "Remember which ranks have been played.", e: "Set up opponents to have nothing to match." },
  history: "Turkey's most popular fishing game, sharing roots with Basra and other Mediterranean games.",
  related: ["basra", "casino", "tablic"]
},
{
  id: "tablic", name: "Tablić", alt: ["Tablanet", "Tablić"], native: "Tablić", say: "tab-leech",
  countries: ["Bosnia and Herz.", "Serbia", "Croatia", "Montenegro", "Macedonia", "Slovenia"], family: "fishing", deck: "Standard 52",
  min: 2, max: 4, best: [2], diff: 2, mins: 30, age: "8+", hand: 6,
  goal: "Capture table cards that match or add up to your card, score for valuable cards and table sweeps ('table'), and reach 101.",
  quick: ["Deal 6 cards each; 4 face up on the table.", "Play a card to capture table cards of equal value or groups adding up to it.", "Clearing the table is a 'tabla' worth 1 point.", "Score for big cards and most cards."],
  setup: ["Deal 6 cards each (in two rounds of 3) and 4 to the table."],
  rules: [
    "Values: Ace 1 or 11, number cards face value, Jack 12, Queen 13, King 14.",
    "Play a card to capture any combination of table cards that equal its value (several groups at once is allowed).",
    "If you can't capture, the card stays on the table.",
    "When hands are empty, deal 6 more. The last capturer takes the remaining table cards."
  ],
  scoring: ["Each 10, J, Q, K and Ace: 1 point. 10♦: 2 points. 2♣: 1 point.", "Most cards: 3 points. Each tabla: 1 point.", "First to 101."],
  mistakes: ["Forgetting Aces can be 1 or 11."],
  variants: ["Regional differences in which cards count."],
  tips: { b: "Look for multiple capture groups.", i: "Grab the 10♦ and big cards.", e: "Leave tables that are hard to clear." },
  history: "The favourite fishing game of the former Yugoslavia, played in every kafana.",
  related: ["pishti", "casino", "scopa"]
},
{
  id: "chkobba", name: "Chkobba", alt: ["Shkubba", "شكبة"], native: "شكبة", say: "shkob-ba",
  countries: ["Tunisia", "Libya", "Algeria"], family: "fishing", deck: "40-card",
  min: 2, max: 4, best: [2, 4], partners: true, diff: 2, mins: 30, age: "8+", hand: 3,
  goal: "Capture cards by matching values or sums, sweep the table for a 'chkobba', and reach 11 or 21.",
  quick: ["Deal 3 cards each, 4 to the table.", "Capture a matching card, or a set adding up to your card.", "Sweeping the table scores a chkobba.", "Bonus points for the 7 of diamonds, most cards, most diamonds and most 7s."],
  setup: ["Use a 40-card pack (remove 8, 9, 10). Deal 3 each and 4 face up."],
  rules: [
    "Values: A 1 … 7, Jack 8, Queen 9, King 10.",
    "If a single card matches your card, you must capture it (not a sum).",
    "Otherwise capture a group that adds up to your card's value.",
    "Sweeping all table cards = chkobba (1 point).",
    "Deal 3 more each until the pack is used; the last capturer takes the rest."
  ],
  scoring: ["1 point each: most cards, most diamonds, 7♦ ('El Haya'), the 'bermila' (most 7s, or 6s if tied), each chkobba.", "Game to 11 or 21."],
  mistakes: ["Leaving 10 or less on the table for an easy sweep."],
  variants: ["Chkobba with 61-point games."],
  tips: { b: "Take the 7♦ when you can.", i: "Count 7s and diamonds.", e: "Calculate what sums opponents can make." },
  history: "A North African cousin of Italian Scopa, the most popular card game in Tunisian cafés.",
  related: ["scopa", "escoba", "basra"]
},
{
  id: "whot", name: "Whot!", alt: ["Whot"],
  countries: ["Nigeria", "Ghana", "Cameroon", "Benin", "Togo"], family: "shedding", deck: "54-card Whot deck (circles, triangles, crosses, squares, stars + Whot cards)",
  min: 2, max: 8, best: [3, 4], diff: 1, mins: 15, age: "6+", hand: 6,
  goal: "Be first to play all your cards by matching the shape or number of the top card; special cards make opponents pick up, skip or change shape.",
  quick: ["Deal 5–6 cards each; turn one up to start.", "Play a card of the same shape or number.", "Special cards: 1 hold on, 2 pick two, 5 pick three, 8 suspension, 14 general market, 20 Whot (choose a shape).", "Say 'Last card!' when you have one left."],
  setup: ["Deal 5 or 6 cards each from a Whot deck. Turn the top card of the stock face up."],
  rules: [
    "Match the shape (circle, triangle, cross, square, star) or the number of the top card.",
    "Whot 20: a wild card; you name the shape the next player must play.",
    "1 (Hold on): play again. 2 (Pick two): the next player draws 2. 5 (Pick three, in many rules): next draws 3.",
    "8 (Suspension): the next player misses a turn. 14 (General market): everyone else draws one card.",
    "If you can't play, draw one card from the market.",
    "Announce 'Last card' when you have one card left; announce 'Check up' when you finish."
  ],
  scoring: ["The winner is first out. In scoring games, others count card values (stars count double)."],
  mistakes: ["Forgetting to say 'Last card' — you'll pick up a penalty."],
  variants: ["Many house rules on which numbers are special."],
  tips: { b: "Keep a Whot card for emergencies.", i: "Save 'pick two' cards to defend.", e: "Change shape to one your opponents lack." },
  history: "Invented in England in the 1930s, Whot became a phenomenon in West Africa and is now considered a Nigerian classic.",
  related: ["crazy-eights", "kadi"]
},
{
  id: "kadi", name: "Kadi", alt: ["Kenyan Crazy Eights"],
  countries: ["Kenya", "Tanzania", "Uganda"], family: "shedding", deck: "Standard 52 + Jokers",
  min: 2, max: 6, best: [3, 4], diff: 2, mins: 15, age: "8+", hand: 4,
  goal: "Get rid of your cards by matching suit or rank, using special cards, and finish only with an ordinary card after declaring 'Niko kadi'.",
  quick: ["Deal 4 cards each; turn one up.", "Match suit or rank.", "Question cards (8, Q) must be 'answered'; Aces request a suit; 2s and 3s make the next player draw.", "Say 'Niko kadi' (I'm on card) before your winning turn."],
  setup: ["Deal 4 cards each (rules vary). Turn up a starting card (not a special card)."],
  rules: [
    "Play a card of the same suit or rank.",
    "Questions: an 8 or Queen must be followed by an answer card of the same suit (or another question).",
    "Ace: request any suit (Ace of spades can request a specific card).",
    "2 = pick two, 3 = pick three, Joker = pick five; these stack and can be blocked with an Ace.",
    "Jack skips the next player; King reverses direction.",
    "Before your winning turn, say 'Niko kadi'. You can't finish on a special card."
  ],
  scoring: ["First to finish legally wins."],
  mistakes: ["Forgetting to announce 'Niko kadi'."],
  variants: ["Local rules on which cards finish legally."],
  tips: { b: "Keep an Ace to block penalties.", i: "Plan your final cards early.", e: "Watch who hasn't announced Niko kadi." },
  history: "Kenya's most popular card game, a Crazy Eights descendant with East African flair.",
  related: ["crazy-eights", "whot"]
},
{
  id: "ronda", name: "Ronda", alt: ["رندة"], native: "رندة", say: "ron-da",
  countries: ["Morocco", "Algeria"], family: "fishing", deck: "40-card Spanish deck",
  min: 2, max: 4, best: [2, 4], partners: true, diff: 2, mins: 30, age: "8+", hand: 4,
  goal: "Capture matching cards and the run that follows, announce 'ronda' and 'tringa' for pairs and triples, and reach 41 points.",
  quick: ["Deal 4 cards each and 4 to the table.", "Play a card to capture a matching card, plus any cards in sequence above it.", "Announce pairs ('ronda') or triples ('tringa') in your hand.", "Points for captures, announcements and the last capture."],
  setup: ["Use 40 Spanish cards. Deal 4 each and 4 face up to the table (redeal if pairs appear on the table, in many rules)."],
  rules: [
    "Play a card. If a table card matches its rank, capture it plus any cards that continue the sequence upward (play 4: take 4, 5, 6 if present). Face cards follow 7: Sota (10), Caballo (11), Rey (12).",
    "Capturing the card your opponent just played is 'missa' (1 point, or more by local rule).",
    "Clearing the table also scores.",
    "Announce 'ronda' (a pair in hand, 1 point) or 'tringa' (three of a kind, 5 points) before playing.",
    "Deal 4 more when hands empty. The last capturer takes the rest."
  ],
  scoring: ["Each card captured beyond 20 scores 1 point at the end of the deal.", "Game to 41."],
  mistakes: ["Forgetting to announce a ronda."],
  variants: ["Many local rule sets in Morocco and Algeria."],
  tips: { b: "Look for sequences to capture several cards.", i: "Announce pairs to score early.", e: "Hold matching cards to snipe your opponent's plays." },
  history: "Morocco's beloved café game, played with Spanish-suited cards since colonial times.",
  related: ["scopa", "chkobba", "escoba"]
}
);
