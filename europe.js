// European games. Original Card Atlas wording.
window.GAMES = window.GAMES || [];
GAMES.push(
{
  id: "cribbage", name: "Cribbage", alt: ["Crib"],
  countries: ["United Kingdom", "Canada", "United States of America"], family: "adding", deck: "Standard 52 + pegboard",
  min: 2, max: 4, best: [2], diff: 3, mins: 30, age: "8+", hand: 6,
  goal: "Be the first to peg 121 points by making 15s, pairs and runs, both during play and when counting hands.",
  quick: [
    "Deal 6 cards each; each player puts 2 face down into the dealer's 'crib'.",
    "Cut a starter card. Take turns playing cards, counting the total up to 31, scoring for 15s, 31, pairs and runs.",
    "Then count your hand plus the starter for 15s, pairs, runs, flushes and 'nobs'.",
    "The dealer also scores the crib. First to 121 wins."
  ],
  setup: ["Two players: deal 6 cards each. Each discards 2 face down to form the crib, which belongs to the dealer.", "Non-dealer cuts the deck; dealer turns up the top card of the lower half as the starter. If it's a Jack, the dealer pegs 2 ('his heels')."],
  rules: [
    "Card values: Ace 1, number cards face value, J/Q/K 10.",
    "The play: non-dealer plays first, saying the running total. Players alternate, never letting the total pass 31.",
    "During the play score: total of 15 = 2; total of exactly 31 = 2; pair with the previous card = 2; three of a kind = 6; four = 12; run of 3+ (any order, consecutive cards) = 1 per card.",
    "If you can't play without passing 31, say 'Go'. Your opponent plays any more cards they can; the last player to play scores 1 (or 2 if they hit 31). The count resets to 0.",
    "The show: non-dealer counts first, then dealer, then the dealer counts the crib, each with the starter card as a fifth card.",
    "Show scoring: each combination making 15 = 2; each pair = 2; each run = 1 per card; 4-card flush in hand = 4 (5 with starter; crib flush must be 5); Jack in hand matching the starter's suit ('nobs') = 1.",
    "Points are moved on a pegboard, two pegs each, leapfrogging. Deal alternates."
  ],
  scoring: ["Game is 121 points (61 in short games).", "Win before your opponent passes 91 and you 'skunk' them (counts double in many clubs).", "The highest possible hand is 29: three 5s and the Jack of the starter's suit, with the fourth 5 turned up."],
  mistakes: ["Forgetting to count all combinations: 5-5-10-J alone holds several 15s.", "Laying a 5 first in the play — an easy 15 for your opponent."],
  variants: ["Three-player: 5 cards each, one to the crib plus one from the deck.", "Four-player partnership: 5 cards each, one each to the crib."],
  tips: { b: "Keep 5s and cards that make 15 together.", i: "As non-dealer, avoid throwing 5s or pairs into the opponent's crib.", e: "Learn 'pegging traps': lead a 4 or lower so the total can't reach 15 next." },
  history: "Invented by English poet Sir John Suckling in the early 1600s from the older game Noddy. It's the only game legally playable for money in English pubs without a licence, and a Navy tradition on submarines.",
  related: ["casino", "gin-rummy"]
},
{
  id: "whist", name: "Whist", alt: ["Short Whist", "English Whist"],
  countries: ["United Kingdom"], family: "trick-taking", deck: "Standard 52",
  min: 4, max: 4, best: [4], partners: true, diff: 2, mins: 30, age: "8+", hand: 13,
  goal: "With your partner, win more than six of the thirteen tricks in each deal.",
  quick: ["Partners sit opposite. Deal all 52 cards; the last card's suit is trumps.", "Left of dealer leads; everyone must follow suit if able.", "Highest card of the led suit wins, unless a trump is played.", "Each trick over six scores a point for your side."],
  setup: ["Four players in two partnerships, partners facing each other.", "Deal 13 cards each. Turn the dealer's last card face up; that suit is trumps for the deal."],
  rules: [
    "Player left of the dealer leads any card.",
    "Others must follow suit if they can. If you can't, you may play any card, including a trump.",
    "The highest trump wins the trick; if no trump is played, the highest card of the led suit wins. Ace is high.",
    "The trick winner leads to the next trick.",
    "After 13 tricks, the side with more tricks scores one point per trick above six."
  ],
  scoring: ["Each trick over six ('odd tricks') is 1 point. Game is 5 points (short whist).", "Honours (traditional): holding A, K, Q, J of trumps between partners scores 4; three of them scores 2."],
  mistakes: ["Revoking (failing to follow suit when you could) — a serious penalty.", "Trumping your partner's winning trick."],
  variants: ["Knockout Whist: shrinking hands, players knocked out.", "Solo Whist: individual bids for different contracts.", "Bridge developed from Whist."],
  tips: { b: "Second hand plays low, third hand plays high.", i: "Lead from your longest suit to set up winners.", e: "Count trumps; after 13 have fallen, your small cards win." },
  history: "Whist dominated British card rooms in the 18th and 19th centuries; Edmond Hoyle's 1742 treatise on it gave us the phrase 'according to Hoyle'.",
  related: ["bridge", "oh-hell", "spades", "knockout-whist"]
},
{
  id: "knockout-whist", name: "Knockout Whist", alt: ["Trumps", "Diminishing Whist"],
  countries: ["United Kingdom"], family: "trick-taking", deck: "Standard 52",
  min: 2, max: 7, best: [4, 5], diff: 1, mins: 15, age: "6+", hand: 7,
  goal: "Stay in the game: anyone who wins no tricks in a round is knocked out. Last player standing wins.",
  quick: ["Deal 7 cards each; turn the next card for trumps.", "Play tricks: follow suit if you can.", "Win no tricks and you're out.", "Each round deals one card fewer. The winner of most tricks picks trumps next round."],
  setup: ["Deal 7 cards each in the first round. Turn up the next card from the pack; its suit is trumps."],
  rules: [
    "Player to dealer's left leads. Follow suit if able; otherwise play anything.",
    "Highest trump wins, otherwise highest card of the led suit.",
    "After all cards are played, anyone with zero tricks is knocked out.",
    "Next round has one fewer card each (7, 6, 5 … 1). The player who won most tricks chooses trumps after looking at their hand.",
    "If someone wins every trick in a round, they win immediately."
  ],
  scoring: ["The last remaining player wins. The 1-card round decides the game if needed."],
  mistakes: ["Spending all your high cards early and losing every later trick."],
  variants: ["'Dog's life': a knocked-out player gets one more chance with a single card."],
  tips: { b: "Win at least one trick each round, that's all you need.", i: "When choosing trumps, pick your longest suit.", e: "Save a winning card for when you most need a trick." },
  history: "A classic British family and school game, perfect as an introduction to trick-taking.",
  related: ["whist", "oh-hell"]
},
{
  id: "bridge", name: "Contract Bridge", alt: ["Bridge"],
  countries: ["United Kingdom", "United States of America", "Netherlands", "Poland", "Italy"], family: "trick-taking", deck: "Standard 52",
  min: 4, max: 4, best: [4], partners: true, diff: 5, mins: 90, age: "10+", hand: 13,
  goal: "With your partner, bid to win a number of tricks (the contract) and then make it — or stop the opponents from making theirs.",
  quick: ["Partners sit opposite. Deal 13 cards each.", "Auction: bid a number of tricks over six and a trump suit (or No Trumps).", "The highest bid becomes the contract; declarer's partner (dummy) lays their hand face up.", "Play 13 tricks; score if the contract is made."],
  setup: ["Four players: North-South vs East-West. Deal all 52 cards, 13 each."],
  rules: [
    "Auction: starting with the dealer, each player bids, passes, doubles or redoubles. A bid like '3♥' means taking 9 tricks (6 + 3) with hearts as trumps.",
    "Suits rank low to high: ♣, ♦, ♥, ♠, No Trumps. Each bid must be higher in level or same level in a higher suit.",
    "Three consecutive passes end the auction. The last bid is the contract.",
    "Declarer: the first player in the winning side to name the contract's suit. Dummy is declarer's partner.",
    "The player to declarer's left leads; then dummy's hand goes face up and declarer plays both hands.",
    "Follow suit when you can; highest trump wins, otherwise highest of the suit led."
  ],
  scoring: [
    "Trick points per trick over six: ♣/♦ 20, ♥/♠ 30, No Trumps 40 for the first and 30 for later tricks.",
    "100+ trick points in contract = game. Bidding small slam (12 tricks) or grand slam (all 13) earns big bonuses.",
    "If you fail, opponents score penalties per trick short — more if you're doubled or 'vulnerable'.",
    "Duplicate bridge compares your score with others who played the same cards."
  ],
  mistakes: ["Bidding without a system; partners need to agree on what bids mean.", "Not counting the opponents' high cards (HCP: A=4, K=3, Q=2, J=1)."],
  variants: ["Chicago (four-deal) bridge", "Rubber bridge", "Duplicate tournament bridge", "Minibridge: a simplified teaching version."],
  tips: { b: "Learn high-card points; open the bidding with about 12+.", i: "Draw trumps early when you're declarer, unless dummy needs them for ruffing.", e: "Use 'signals' with partner: the size of cards you play can show what you hold." },
  history: "Harold Vanderbilt perfected contract bridge on a cruise in 1925, evolving it from auction bridge and whist. It's played by millions and recognised as a 'mind sport'.",
  related: ["whist", "spades", "500"]
},
{
  id: "oh-hell", name: "Oh Hell", alt: ["Up and Down the River", "Nomination Whist", "Blackout", "Contract Whist"],
  countries: ["United Kingdom", "United States of America"], family: "trick-taking", deck: "Standard 52",
  min: 3, max: 7, best: [4, 5], diff: 2, mins: 40, age: "8+", hand: 7,
  goal: "Predict exactly how many tricks you'll win each round — no more, no fewer.",
  quick: ["Deal a set number of cards (changing each round) and turn up a trump.", "Everyone bids how many tricks they'll take.", "The dealer bids last and may not make the bids add up to the number of tricks.", "Score only if you hit your bid exactly."],
  setup: ["Decide the sequence of hand sizes, e.g. 7, 6, 5 … 1 … 5, 6, 7.", "Deal the cards; turn the next card up for trumps (no trumps if the deck runs out)."],
  rules: [
    "Starting left of the dealer, everyone states a bid (0 or more tricks).",
    "The 'hook': the dealer may not bid a number that makes the total of bids equal the number of tricks, so someone must fail.",
    "Play tricks normally: follow suit if able; trumps beat other suits.",
    "Record tricks won against bids."
  ],
  scoring: ["Common: make your bid exactly = 10 + your bid. Miss = 0.", "Alternatives: 1 point per trick plus 10 bonus for exact bids."],
  mistakes: ["Forgetting that zero is a bid you must make by losing every trick."],
  variants: ["Blind rounds: bid before looking at your cards.", "No-trump rounds."],
  tips: { b: "Low bids are often safest.", i: "Track what others need; play to make them miss.", e: "As dealer, use the hook to force difficult situations." },
  history: "A 1930s game spread by the British forces; its family-friendly name in the US is 'Up and Down the River'.",
  related: ["whist", "callbreak", "spades"]
},
{
  id: "skat", name: "Skat", alt: [],
  countries: ["Germany"], family: "trick-taking", deck: "32-card (French or German suits)",
  min: 3, max: 4, best: [3], diff: 5, mins: 45, age: "12+", hand: 10,
  goal: "Win the auction and, as declarer, take at least 61 of the 120 card points against the other two players.",
  quick: ["Deal 10 cards each, 2 to the 'skat'.", "Bid by naming game values; the highest bidder is declarer.", "Declarer may take the skat, discard two, and chooses the game type.", "Play 10 tricks. Declarer needs 61+ card points."],
  setup: ["Use 32 cards (7 to Ace). Deal 3 each, 2 to the skat, 4 each, then 3 each. With four players, the dealer sits out."],
  rules: [
    "Card points: Ace 11, Ten 10, King 4, Queen 3, Jack 2, 9/8/7 0. Total 120.",
    "In suit games, the four Jacks are the highest trumps (♣J, ♠J, ♥J, ♦J), followed by the trump suit A, 10, K, Q, 9, 8, 7.",
    "Grand: only Jacks are trumps. Null: no trumps, declarer must lose every trick, and cards rank A K Q J 10 9 8 7.",
    "Bidding: players call numbers (18, 20, 22, 23, 24, 27, 30 …) which represent possible game values. Others accept or pass.",
    "The declarer may pick up the skat and discard two cards (points count for declarer), or play 'hand' without looking for a higher value.",
    "Follow suit if possible (Jacks belong to the trump suit). Otherwise play any card."
  ],
  scoring: [
    "Base values: ♦ 9, ♥ 10, ♠ 11, ♣ 12, Grand 24.",
    "Game value = base × multiplier. Multiplier = 'matadors' (consecutive top trumps held, or missing, from ♣J) + 1, plus extras for hand, schneider (90+ points), schwarz (all tricks).",
    "Null games have fixed values (23, 35, 46, 59).",
    "Win: add the game value. Lose: subtract double the value (official rules). Overbid = lose."
  ],
  mistakes: ["Bidding above the value your hand can actually reach.", "Forgetting Jacks belong to the trump suit."],
  variants: ["Ramsch: if everyone passes, everyone plays for themselves to take the fewest points.", "Bierlachs scoring."],
  tips: { b: "Learn the game value calculation before bidding.", i: "Count trumps — there are 11 in a suit game.", e: "Defenders should 'smear' Aces and Tens onto partner's tricks." },
  history: "Created in Altenburg, Thuringia, around 1810. It's Germany's national card game, with an official court of arbitration and a monument in Altenburg.",
  related: ["doppelkopf", "schnapsen", "thousand"]
},
{
  id: "doppelkopf", name: "Doppelkopf", alt: ["Doko"],
  countries: ["Germany"], family: "trick-taking", deck: "48 cards (two 9-Ace decks), often 40 without 9s",
  min: 4, max: 4, best: [4], partners: true, diff: 4, mins: 60, age: "12+", hand: 12,
  goal: "Your secret team (the two holders of the Queens of Clubs, or everyone else) must take at least 121 of 240 card points.",
  quick: ["Deal 12 cards each from a double 9–Ace deck.", "Holders of the two Queens of Clubs are team 'Re'; the others are 'Kontra'. Nobody says who is who.", "Many cards are trumps, led by the Ten of Hearts.", "Re needs 121 points to win."],
  setup: ["Shuffle two decks containing only 9, 10, J, Q, K, A (48 cards). Deal 12 each."],
  rules: [
    "Trumps, high to low: ♥10 (the 'Dulle'), Queens ♣♠♥♦, Jacks ♣♠♥♦, then ♦A, ♦10, ♦K, ♦9.",
    "Plain suits: ♣ and ♠ rank A, 10, K, 9; ♥ ranks A, K, 9 (its 10s are trumps).",
    "If two identical cards fall in one trick, the first played wins.",
    "Follow suit (trumps count as a suit) if possible.",
    "Teams are revealed through play, or by announcing 'Re'/'Kontra', which also raises the stakes.",
    "If one player holds both ♣Q, they may play a solo, or a silent 'marriage' rule applies."
  ],
  scoring: ["Card points: A 11, 10 10, K 4, Q 3, J 2, 9 0. Total 240.", "Winning team scores 1 game point, plus extras: under 90/60/30 or no tricks for the losers, catching a ♦A (Fox), winning the last trick with a ♣J (Charlie), and a trick worth 40+ (Doppelkopf)."],
  mistakes: ["Revealing your team accidentally.", "Forgetting that ♥10s outrank Queens."],
  variants: ["Solo games: Queen solo, Jack solo, suit solo, fleshless (no trumps)."],
  tips: { b: "Memorise the trump order first.", i: "Watch who plays high trumps early; it hints at teams.", e: "Announce 'Re' early with a strong hand to double the score." },
  history: "Developed in northern Germany from Schafkopf in the 19th century. The German Doppelkopf Association standardised the rules in 1982.",
  related: ["skat", "belote"]
},
{
  id: "schnapsen", name: "Schnapsen", alt: ["Sixty-Six", "Snapszer", "Sechsundsechzig"],
  countries: ["Austria", "Hungary", "Germany", "Czechia", "Slovakia"], family: "trick-taking", deck: "20 cards (A, 10, K, Q, J of each suit)",
  min: 2, max: 2, best: [2], diff: 3, mins: 20, age: "10+", hand: 5,
  goal: "Be first to collect 66 card points in tricks and marriages.",
  quick: ["Deal 5 cards each; turn one card for trumps under the stock.", "Win tricks to collect card points; draw after each trick.", "Declare King+Queen 'marriages' for 20 (40 in trumps).", "Reach 66 first and say 'enough' to win the hand."],
  setup: ["Use 20 cards. Deal 3 then 2 to each player. Turn the next card face up as trump and place the rest across it as the stock."],
  rules: [
    "Card points: Ace 11, Ten 10, King 4, Queen 3, Jack 2 (120 total).",
    "While the stock lasts, you don't have to follow suit. Highest trump or highest card of the led suit wins.",
    "After each trick, the winner draws first, then the loser.",
    "Marriage: when leading, show K and Q of the same suit and score 20 (40 for trumps); lead one of them.",
    "Holding the trump Jack, you may swap it for the face-up trump card (before leading).",
    "Close the stock (or when it runs out): from then on, you must follow suit and win the trick if you can.",
    "Claim when you believe you have 66 or more. If you're wrong, your opponent scores."
  ],
  scoring: ["Winner earns game points: 3 if the loser has no tricks, 2 if the loser has under 33, otherwise 1.", "First to 7 game points wins a 'Bummerl' (match)."],
  mistakes: ["Forgetting to claim; you must say when you reach 66.", "Closing too early without enough sure winners."],
  variants: ["Sixty-Six: German version with 24 cards (adding 9s).", "Hungarian Snapszer: German-suited cards."],
  tips: { b: "Hold onto marriages to declare them.", i: "Count points as you go: a running total is essential.", e: "Close the stock to stop your opponent drawing the trumps they need." },
  history: "Austria's most popular two-player game, played in every coffee house, descended from German Sixty-Six of the 1700s.",
  related: ["thousand", "skat", "tute"]
},
{
  id: "thousand", name: "Thousand", alt: ["Tysiąc", "Тысяча", "1000"],
  countries: ["Poland", "Russia", "Ukraine", "Belarus", "Lithuania", "Latvia"], family: "trick-taking", deck: "24 cards (9 to Ace)",
  min: 3, max: 4, best: [3], diff: 3, mins: 60, age: "10+", hand: 7,
  goal: "Reach 1000 points by winning bids and taking card points and marriages.",
  quick: ["Deal 7 cards each and 3 to the 'musik' (kitty).", "Bid from 100 upward; the winner takes the musik and gives one card to each opponent.", "Declare marriages (K+Q) to set trumps and score bonuses.", "Make your bid or lose it."],
  setup: ["Three players: deal 7 each, 3 face down to the musik."],
  rules: [
    "Card points: A 11, 10 10, K 4, Q 3, J 2, 9 0 = 120.",
    "Marriage values: ♥ 100, ♦ 80, ♣ 60, ♠ 40.",
    "Bidding starts at 100 and rises in 10s; you must hold a marriage to bid over 120.",
    "Declarer takes the musik, passes one card to each opponent, and may raise the bid.",
    "No trumps at the start. After winning a trick, you may lead a K or Q of a marriage you hold and declare it; that suit becomes trumps.",
    "Follow suit if able; if not, you must trump if able."
  ],
  scoring: ["Declarer scores the bid if they reach it, or loses it if not.", "Opponents score their points rounded to the nearest 10.", "Many rules stop you scoring beyond 880 except as declarer."],
  mistakes: ["Bidding high without a marriage to back it."],
  variants: ["Four players: dealer sits out but scores the musik's marriage.", "Russian variants differ on the 'barrel' near 880."],
  tips: { b: "Count points: a marriage plus a few aces makes a bid.", i: "Give opponents the cards least useful to them.", e: "Track when trumps change." },
  history: "A Russian development of Sixty-Six from the early 1900s, hugely popular in Poland and the former Soviet countries.",
  related: ["schnapsen", "skat"]
},
{
  id: "durak", name: "Durak", alt: ["Fool", "Дурак"],
  countries: ["Russia", "Ukraine", "Belarus", "Kazakhstan", "Georgia", "Armenia", "Israel"], family: "shedding", deck: "36 cards (6 to Ace)",
  min: 2, max: 6, best: [3, 4], diff: 2, mins: 15, age: "8+", hand: 6,
  goal: "Get rid of all your cards. The last player holding cards is the 'durak' — the fool.",
  quick: ["Deal 6 cards each; turn the next card for trumps.", "The attacker plays a card; the defender must beat it with a higher card of the same suit or a trump.", "Others may add cards of ranks already on the table.", "Fail to beat everything and you pick up the lot."],
  setup: ["Deal 6 cards each from a 36-card deck. Turn the next card face up as trump and place it under the rest of the stock."],
  rules: [
    "The player with the lowest trump attacks first, playing a card to the player on their left (the defender).",
    "The defender beats each attacking card with a higher card of its suit, or any trump (a higher trump if the attack is a trump).",
    "Other players may 'throw in' more attack cards that match any rank already on the table, up to 6 cards (or the defender's hand size).",
    "If the defender beats every card, they're all discarded and the defender becomes the next attacker.",
    "If not, the defender picks up all the cards on the table and loses their turn to attack.",
    "After each round, players refill to 6 cards from the stock, attacker first, defender last.",
    "Once the stock runs out, players who empty their hands leave the game safely."
  ],
  scoring: ["No points: the loser is the fool. In a series, the fool deals next and often faces jokes!"],
  mistakes: ["Wasting trumps on low attacks.", "Forgetting you can only add cards of ranks already on the table."],
  variants: ["Transfer (Perevodnoy) Durak: the defender may pass the attack on by playing a card of the same rank.", "Partnership Durak for 4 or 6."],
  tips: { b: "Attack with low non-trumps.", i: "Remember which trumps have gone.", e: "In the endgame, count every card left in opponents' hands." },
  history: "Russia's most popular card game, played since the 19th century. Losing it carries a gentle, much-loved social sting.",
  related: ["big-two", "cheat"]
},
{
  id: "belote", name: "Belote", alt: ["Belot", "Coinche (variant)"],
  countries: ["France", "Bulgaria", "Armenia", "Croatia", "Moldova", "Lebanon"], family: "trick-taking", deck: "32-card",
  min: 4, max: 4, best: [4], partners: true, diff: 3, mins: 45, age: "10+", hand: 8,
  goal: "As a partnership, win the most points in tricks; the side that chose trumps must score more than the other side.",
  quick: ["Deal 5 cards each and turn one card up.", "Players can accept the turned suit as trumps (or name another suit in round two).", "The taker receives the turned card; deal the rest.", "Play 8 tricks. The Jack and 9 of trumps are the highest cards."],
  setup: ["Partners sit opposite. Deal 3 then 2 cards to each. Turn the next card face up."],
  rules: [
    "Round one: each player may 'take' the turned card's suit as trumps. If all pass, round two: anyone may name a different suit.",
    "The taker gets the turned card plus 2 more; others get 3 more (8 each).",
    "Trump rank and points: J 20, 9 14, A 11, 10 10, K 4, Q 3, 8 0, 7 0.",
    "Other suits: A 11, 10 10, K 4, Q 3, J 2, 9/8/7 0.",
    "Follow suit if you can. If you can't, you must trump (unless your partner is winning), and you must beat any trump already played if possible.",
    "Holding K+Q of trumps: say 'Belote' and 'Rebelote' as you play them for 20 points.",
    "The last trick earns 10 extra ('dix de der')."
  ],
  scoring: ["Total 162 points per deal (152 + 10 last trick).", "If the taking side scores more than the defenders, both keep their points. If not, the defenders get all 162.", "Taking all 8 tricks ('capot') scores 252. Play to 501 or 1000."],
  mistakes: ["Not overtrumping when required.", "Taking with a weak hand; you need the Jack or 9 of trumps."],
  variants: ["Coinche: bid a target score with any suit, plus doubling.", "Bulgarian Belot: bids include no trumps and all trumps."],
  tips: { b: "Take when you hold the trump Jack plus support.", i: "Lead trumps to pull opponents' trumps out.", e: "Track the 9 and Jack; once they're gone, your Ace may rule." },
  history: "Belote emerged in France around 1920 and became the country's favourite card game; related games are popular across the Balkans, Caucasus and Middle East.",
  related: ["klaverjas", "jass", "twenty-nine"]
},
{
  id: "klaverjas", name: "Klaverjas", alt: ["Klaverjassen"],
  countries: ["Netherlands", "Belgium"], family: "trick-taking", deck: "32-card",
  min: 4, max: 4, best: [4], partners: true, diff: 3, mins: 60, age: "10+", hand: 8,
  goal: "Partnerships compete to collect card points and 'roem' (bonus melds); the team that chose trumps must score the most.",
  quick: ["Deal 8 cards each.", "Choose trumps (rules vary).", "Play 8 tricks; trump Jack and 9 are highest.", "Score card points plus roem; the 'playing' team must outscore the other."],
  setup: ["Four players in partnerships. Deal all 32 cards in packets of 3, 2, 3."],
  rules: [
    "Card ranks and points match Belote: trumps J 20, 9 14, A 11, 10 10, K 4, Q 3, 8, 7; others A, 10, K, Q, J, 9, 8, 7.",
    "Trumps are chosen by bidding, or forced by a turned card ('verplicht') depending on local rules.",
    "Amsterdam rules: if you can't follow suit and your partner is winning, you need not trump. Rotterdam rules: you must always trump and overtrump.",
    "Roem (bonuses inside a trick): 3 in sequence 20, 4 in sequence 50, K+Q of trumps 20, four of a kind (Jacks 200, others 100).",
    "The last trick is worth 10."
  ],
  scoring: ["162 card points per deal plus roem.", "If the playing team doesn't score more than the defenders, they go 'nat' and the defenders take everything.", "Winning all tricks ('pit') gives 100 bonus. A match is usually 16 deals."],
  mistakes: ["Forgetting to claim roem in a trick."],
  variants: ["Amsterdam vs Rotterdam rules", "Belgian versions with different trump selection."],
  tips: { b: "Learn the trump order J-9-A-10.", i: "Signal your strongest suit early.", e: "Avoid giving opponents roem by playing sequence cards into their trick." },
  history: "The Dutch national card game, widely played in cafés and clubs, descended from the same 'Jass' family as Belote.",
  related: ["belote", "jass"]
},
{
  id: "jass", name: "Schieber Jass", alt: ["Jass", "Schieber"],
  countries: ["Switzerland", "Liechtenstein", "Austria"], family: "trick-taking", deck: "36-card Swiss or French deck",
  min: 4, max: 4, best: [4], partners: true, diff: 3, mins: 60, age: "10+", hand: 9,
  goal: "Partnerships race to a target score (often 1000 or 2500) by taking card points and announcing melds.",
  quick: ["Deal 9 cards each.", "One player picks trumps — or 'pushes' (schiebt) the choice to their partner.", "Trump Jack (Puur) and 9 (Nell) are top cards.", "Score points from tricks and melds; first team to the target wins."],
  setup: ["Use a 36-card deck (6 to Ace). Deal 9 cards each to four players in two partnerships."],
  rules: [
    "The chooser may name a suit, 'Obenabe' (no trumps, Ace high) or 'Undenufe' (no trumps, 6 high), or say 'schieben' to let their partner choose.",
    "Trump order: Jack (20 points), 9 (14), A (11), 10 (10), K (4), Q (3), 8, 7, 6.",
    "Non-trumps: A 11, 10 10, K 4, Q 3, J 2, 9/8/7/6 0. Total 157 with 5 for the last trick.",
    "Follow suit if possible, but you may always trump instead. You don't have to follow with the trump Jack alone ('Puur is free').",
    "Weisen (melds) are announced at your first card: sequences of 3 (20), 4 (50), 5+ (100+), four of a kind (100, Jacks 200, 9s 150).",
    "K+Q of trumps ('Stöck') = 20."
  ],
  scoring: ["Obenabe and Undenufe often count triple, and spades double, depending on the house.", "Taking all 9 tricks ('Match') adds 100.", "Many clubs keep score on a slate in Z-shaped lines."],
  mistakes: ["Choosing trumps with a weak hand instead of pushing."],
  variants: ["Coiffeur, Differenzler, Bieter, Molotow and many more."],
  tips: { b: "If you lack a strong suit, push to your partner.", i: "Holding the Puur protects your 9 of trumps.", e: "Count trumps — there are 9 in each suit." },
  history: "The Swiss national card game, inscribed as part of Switzerland's intangible cultural heritage. Dutch soldiers likely brought it to Switzerland in the 18th century.",
  related: ["belote", "klaverjas"]
},
{
  id: "french-tarot", name: "French Tarot", alt: ["Jeu de Tarot", "Tarot"],
  countries: ["France"], family: "trick-taking", deck: "78-card Tarot deck",
  min: 3, max: 5, best: [4], diff: 4, mins: 45, age: "12+", hand: 18,
  goal: "The taker plays alone against the others to reach a points target that depends on how many 'oudlers' they hold.",
  quick: ["Deal 18 cards each (with 4 players) and 6 to the 'chien' (dog).", "Bid to become the taker; the taker may use the dog.", "Play 18 tricks; trumps (1–21) beat suits; the Excuse escapes.", "The taker needs 36 to 56 points depending on oudlers."],
  setup: ["A tarot deck: 4 suits of 14 (with a Knight between Jack and Queen), 21 numbered trumps and the Excuse.", "Four players: deal 18 each in threes, putting 6 cards one by one into the dog."],
  rules: [
    "Bids, low to high: Petite (Prise), Garde, Garde sans le Chien, Garde contre le Chien.",
    "In Petite and Garde, the taker shows the dog, adds it to their hand, and discards 6 (no Kings or trumps).",
    "Follow suit. If you can't, you must play a trump, and if trumps are led or played you must beat the highest trump if you can.",
    "The Excuse may be played at any time; it never wins the trick (except as the last card in a slam) and its owner keeps it, giving a 0.5-point card in exchange.",
    "Oudlers: the 1 (Petit), the 21 and the Excuse.",
    "Points needed: 0 oudlers 56, 1 oudler 51, 2 oudlers 41, 3 oudlers 36."
  ],
  scoring: [
    "Card values: oudlers and Kings 4.5, Queens 3.5, Knights 2.5, Jacks 1.5, others 0.5. Total 91.",
    "Contract value: 25 + difference from target, multiplied by 1 (Petite), 2 (Garde), 4 (sans), 6 (contre).",
    "Bonus 'Petit au bout' for winning the last trick with the 1 of trumps.",
    "The taker gains or loses the amount from each defender."
  ],
  mistakes: ["Losing the Petit (trump 1) to a higher trump.", "Discarding trumps or Kings to the dog (not allowed)."],
  variants: ["Five players: the taker calls a King, and its holder becomes a secret partner.", "Three players: 24 cards each."],
  tips: { b: "Bid when you hold at least two oudlers or many trumps.", i: "Defenders should save their Kings for tricks partners win.", e: "Hunt the Petit by leading high trumps." },
  history: "Tarot cards were invented in 15th-century Italy for card games, not fortune telling. French Tarot is the most popular modern descendant, with a national federation.",
  related: ["skat", "doppelkopf"]
},
{
  id: "scopa", name: "Scopa", alt: ["Scopone (4-player)"],
  countries: ["Italy"], family: "fishing", deck: "40-card Italian deck",
  min: 2, max: 4, best: [2, 4], partners: true, diff: 2, mins: 20, age: "7+", hand: 3,
  goal: "Capture cards from the table by matching values; sweep the table for a 'scopa' and collect the best cards to reach 11 points.",
  quick: ["Deal 3 cards each and 4 face up on the table.", "On your turn play one card: capture a table card of the same value, or several that add up to it.", "Clearing the table is a 'scopa' worth a point.", "Score for most cards, most coins, the 7 of coins and best 'primiera'."],
  setup: ["Use 40 cards: Ace to 7 plus Jack (8), Horse (9) and King (10) in coins, cups, swords and clubs.", "Deal 3 cards to each player and 4 face up to the table."],
  rules: [
    "Play one card face up. If its value equals a table card, capture both.",
    "If no single card matches but a group adds up to it, capture the group (a 7 can take 3+4).",
    "If both a single match and a sum are possible, you must take the single card.",
    "If you can't capture, the card stays on the table.",
    "Capturing every card on the table is a scopa: keep one card face up in your pile as a marker.",
    "When hands are empty, deal 3 more each (no new table cards). At the end, the last player to capture takes any remaining table cards (not a scopa)."
  ],
  scoring: ["1 point each: most cards, most coins (denari), the 7 of coins (settebello), best primiera (a set of best cards in each suit, 7s scoring highest), plus 1 per scopa.", "Play to 11 (or 21)."],
  mistakes: ["Leaving a total of 10 or less on the table for your opponent to sweep."],
  variants: ["Scopone: 4 players in partnerships with all cards dealt.", "Scopa d'Assi: an Ace sweeps the whole table."],
  tips: { b: "Grab the 7 of coins whenever possible.", i: "Count 7s — they win primiera.", e: "Remember which values have been played to set up safe discards." },
  history: "Played across Italy since at least the 18th century; its name means 'broom', for sweeping the table.",
  related: ["escoba", "casino", "basra", "chkobba"]
},
{
  id: "briscola", name: "Briscola", alt: ["Brisca (Spain)", "Bisca (Portugal)"],
  countries: ["Italy", "Spain", "Portugal", "Croatia", "Slovenia", "Venezuela", "Cuba"], family: "trick-taking", deck: "40-card Italian/Spanish deck",
  min: 2, max: 4, best: [2, 4], partners: true, diff: 1, mins: 15, age: "7+", hand: 3,
  goal: "Win tricks containing high-scoring cards to collect more than 60 of the 120 points.",
  quick: ["Deal 3 cards each; turn one card up for trumps.", "Play one card each; no need to follow suit.", "Highest trump wins, else highest of the led suit.", "Draw back up to 3 after each trick."],
  setup: ["Deal 3 cards each. Turn the next card face up as the trump (briscola) and lay the stock across it."],
  rules: [
    "Card order: Ace, 3, King, Horse, Jack, 7, 6, 5, 4, 2.",
    "Points: Ace 11, 3 10, King 4, Horse 3, Jack 2; others 0. Total 120.",
    "You may play any card; you don't need to follow suit.",
    "The trick goes to the highest trump, otherwise the highest card of the first suit played.",
    "Winner draws first, then the others. The last card drawn is the face-up trump.",
    "With partners, teammates may (by house rules) signal their best cards with small gestures."
  ],
  scoring: ["More than 60 points wins. 60-60 is a draw. Often played best of three or five."],
  mistakes: ["Throwing an Ace or 3 onto a trick you'll lose."],
  variants: ["Briscola Chiamata: 5 players, the high bidder calls a card to choose a secret partner."],
  tips: { b: "Play low 'blank' cards when you can't win.", i: "Save trumps to capture Aces and 3s.", e: "Count trumps and points; know when the stock's last trump card will come." },
  history: "Probably developed in Italy around the 18th century; versions are favourites in Spain, Portugal, Latin America and the Adriatic coast.",
  related: ["tute", "sueca", "scopa"]
},
{
  id: "tressette", name: "Tressette", alt: ["Tresette"],
  countries: ["Italy"], family: "trick-taking", deck: "40-card Italian deck",
  min: 2, max: 4, best: [4], partners: true, diff: 3, mins: 30, age: "10+", hand: 10,
  goal: "With your partner, take tricks containing Aces and court cards to be first to 21 (or 31) points.",
  quick: ["Deal 10 cards each to four players.", "No trumps: always follow suit if you can.", "The 3 is the highest card, then 2, then Ace.", "Score for Aces, court cards and the last trick."],
  setup: ["Use 40 Italian cards. Deal 10 to each of four players in partnerships."],
  rules: [
    "Rank (high to low): 3, 2, Ace, King, Horse, Jack, 7, 6, 5, 4.",
    "There are no trumps; follow suit if you can, otherwise discard anything.",
    "Highest card of the led suit wins.",
    "Players may make limited signals when leading: 'busso' (I knock = play your best of this suit), 'striscio' (I slide = I have more of this suit), 'volo' (I fly = last card of this suit)."
  ],
  scoring: ["Aces are worth 1 point; 3s, 2s, Kings, Horses and Jacks are 1/3 each; the last trick is 1. A deal totals 11 points (fractions rounded down).", "Napoletana bonus (some rules): holding A, 2, 3 of one suit."],
  mistakes: ["Leading an Ace into a suit where opponents hold the 3 or 2."],
  variants: ["Tressette a Perdere: avoid points instead of taking them."],
  tips: { b: "Count your 3s and 2s; they control suits.", i: "Use the knock and slide signals correctly.", e: "Track Aces to know when your 2 becomes boss." },
  history: "Documented in the 18th century and still a favourite of southern Italy.",
  related: ["briscola", "scopa"]
},
{
  id: "tute", name: "Tute", alt: [],
  countries: ["Spain", "Argentina", "Uruguay"], family: "trick-taking", deck: "40-card Spanish deck",
  min: 2, max: 4, best: [2, 4], partners: true, diff: 2, mins: 20, age: "8+", hand: 10,
  goal: "Collect card points and 'cantes' (King+Horse pairs), or claim instant victory with all four Kings or Horses — the 'tute'.",
  quick: ["Deal all cards (or 8/10 each depending on players); the last card dealt shows trumps.", "Follow suit and beat the trick if possible.", "Declare King+Horse pairs for 20 (40 in trumps).", "Most points wins."],
  setup: ["Use 40 Spanish cards. Deal evenly; the last card turned determines trumps."],
  rules: [
    "Card order and points: Ace 11, 3 10, King 4, Horse 3, Jack 2, then 7, 6, 5, 4, 2 (no points).",
    "You must follow suit and must try to beat the card currently winning. If you can't follow, you must trump if possible.",
    "After winning a trick, you may 'cantar': show King+Horse of a suit for 20 points, or 40 in trumps.",
    "'Tute': showing all four Kings or all four Horses wins the deal immediately.",
    "The last trick scores 10 extra ('diez de últimas')."
  ],
  scoring: ["Total 130 points per deal, plus cantes. Most points wins the deal."],
  mistakes: ["Not heading the trick when the rules require you to beat it."],
  variants: ["Tute Habanero (Cuba)", "Tute Cabrero (individual, losers eliminated)."],
  tips: { b: "Hold Kings and Horses to cantar.", i: "Win a trick to get the chance to declare.", e: "Count Aces and 3s, the main point cards." },
  history: "A Spanish classic derived from Italian and French games of the 19th century, especially popular in bars in Spain and Argentina.",
  related: ["briscola", "schnapsen", "mus"]
},
{
  id: "mus", name: "Mus", alt: [],
  countries: ["Spain"], family: "vying", deck: "40-card Spanish deck",
  min: 4, max: 4, best: [4], partners: true, diff: 4, mins: 60, age: "12+", hand: 4,
  goal: "Partnerships bet across four 'lances' (High, Low, Pairs and Game) and use secret signals to coordinate, aiming for 40 points.",
  quick: ["Deal 4 cards each.", "If everyone says 'mus', discard and redraw.", "Bet in four rounds: Grande (high cards), Chica (low cards), Pares (pairs), Juego (total 31+).", "Partners may signal with facial gestures."],
  setup: ["Commonly use 40 Spanish cards in which 3s count as Kings and 2s as Aces ('8 reyes'). Deal 4 cards each."],
  rules: [
    "Mus phase: if all four players say 'Mus', each discards and redraws. If anyone says 'No hay mus', play begins.",
    "Grande: the best high cards (Kings first). Chica: the best low cards (Aces first).",
    "Pares: hands with a pair (par), three of a kind (medias) or two pairs (duples).",
    "Juego: face cards count 10, others face value. 31 is best, then 32, then 40, 37 … 33. If nobody has 31+, play 'Punto' (closest to 30).",
    "In each lance, players may pass, bet ('envido', usually 2), raise, or go 'órdago' (all-in for the game).",
    "Partners may use traditional signs (biting the lip = 2 Kings, etc.) to tell each other their cards — opponents can watch!"
  ],
  scoring: ["Points (traditionally counted with stones called 'amarracos') are earned from bets and lance bonuses.", "A game is 40 points; a match is often best of 3 games."],
  mistakes: ["Revealing signals carelessly to opponents."],
  variants: ["Mus with 4 Kings (no 3s as Kings).", "Basque Mus with ritual phrases."],
  tips: { b: "Learn the signs before your first game.", i: "Bluffing is half the game.", e: "Read the opponents' signals and fake your own." },
  history: "Originating in the Basque Country in the 18th century, Mus is one of Spain's most loved games, with world championships and its own etiquette.",
  related: ["truco", "tute"]
},
{
  id: "escoba", name: "Escoba", alt: ["Escoba de 15"],
  countries: ["Spain", "Argentina", "Uruguay", "Chile"], family: "fishing", deck: "40-card Spanish deck",
  min: 2, max: 4, best: [2, 4], partners: true, diff: 2, mins: 20, age: "7+", hand: 3,
  goal: "Capture table cards that add up to 15 with one card from your hand; sweeping the table is an 'escoba'.",
  quick: ["Deal 3 cards each; 4 cards to the table.", "Play one card. If it plus table cards total 15, take them all.", "Clearing the table is an 'escoba' (1 point).", "Score points for cards, gold coins, 7s and the 7 of coins."],
  setup: ["Use 40 Spanish cards with values: Ace 1 … 7, Jack (Sota) 8, Horse 9, King 10.", "Deal 3 each and 4 face up to the table."],
  rules: [
    "Play one card. If you can combine it with one or more table cards to total exactly 15, capture them.",
    "If no capture is possible, the card stays on the table.",
    "Clearing the table counts as an escoba.",
    "When hands empty, deal 3 more each. At the end, the last player to capture takes the rest."
  ],
  scoring: ["1 each: escoba, most cards, most 'oros' (gold coins), 7 of oros (velo), most 7s (some award more for all four 7s).", "Game to 15 or 21."],
  mistakes: ["Leaving a table total of 5–14 that an opponent can sweep with one card."],
  variants: ["Escoba de 15 (Spain)", "Argentine scoring differences."],
  tips: { b: "Always check for a total of 15.", i: "Grab 7s and the 7 of oros.", e: "Track which values have been played to calculate safe discards." },
  history: "A Spanish cousin of Italian Scopa, also widespread in Argentina and Uruguay.",
  related: ["scopa", "casino", "chkobba"]
},
{
  id: "chinchon", name: "Chinchón", alt: [],
  countries: ["Spain", "Argentina", "Uruguay"], family: "rummy", deck: "40 or 48-card Spanish deck (+ optional jokers)",
  min: 2, max: 8, best: [3, 4], diff: 2, mins: 30, age: "8+", hand: 7,
  goal: "Form sets and runs, then 'close' the round with few points left; reach 100 and you're out. A seven-card run in one suit ('chinchón') wins the whole game.",
  quick: ["Deal 7 cards each; turn one card to start the discard pile.", "Draw one (stock or discard), then discard one.", "Close when your unmatched cards total 3 or less.", "Unmatched cards count against you; 100 points knocks you out."],
  setup: ["Deal 7 cards each. Turn the next card face up as the start of the discard pile."],
  rules: [
    "Sets: 3 or 4 cards of the same rank. Runs: 3+ consecutive cards of one suit.",
    "On your turn, draw from the stock or the discard pile, then discard.",
    "You may close by discarding face down if all but one of your cards are in combinations and the remaining card is worth 3 or less (house rules vary: 5).",
    "Others then lay down their combinations and may add cards to the closer's combinations.",
    "Unmatched card values: face cards (Sota 10, Caballo 11, Rey 12 in some rules; or 10 each) and number cards at face value."
  ],
  scoring: ["Closing with all 7 cards combined scores −10.", "A chinchón (7 in a row of one suit) wins the game immediately.", "Players who pass 100 are eliminated (some can buy back in)."],
  mistakes: ["Holding high unmatched cards when someone closes."],
  variants: ["With jokers as wild cards.", "Closing at 5 points."],
  tips: { b: "Discard high cards early.", i: "Watch what opponents take from the discard pile.", e: "Close quickly when opponents' hands look heavy." },
  history: "Named after the town of Chinchón near Madrid, famous for its anise liqueur, and popular across Spain and the River Plate.",
  related: ["gin-rummy", "rummy", "conquian"]
},
{
  id: "sueca", name: "Sueca", alt: [],
  countries: ["Portugal", "Brazil", "Angola", "Mozambique"], family: "trick-taking", deck: "40-card (no 8, 9, 10)",
  min: 4, max: 4, best: [4], partners: true, diff: 2, mins: 30, age: "8+", hand: 10,
  goal: "With your partner, take more than half of the 120 card points.",
  quick: ["Deal 10 cards each.", "The dealer's last card shows trumps.", "Follow suit if you can.", "Score 61+ points to win the deal."],
  setup: ["Remove 8s, 9s and 10s from a 52-card deck. Deal 10 each; the dealer's last card is turned face up for trumps and then taken into the dealer's hand."],
  rules: [
    "Rank and points: Ace 11, 7 10, King 4, Jack 3, Queen 2, then 6, 5, 4, 3, 2 (no points).",
    "Follow suit if able; otherwise play any card including a trump.",
    "Highest trump wins, else highest card of the led suit."
  ],
  scoring: ["61–90 points: 1 game. 91–119: 2 games. All 120: 4 games. 60–60: draw.", "First team to 4 games wins a 'bandeira'."],
  mistakes: ["Playing your 7 (worth 10) before the Ace of its suit has gone."],
  variants: ["Bisca: a Briscola-like two-player cousin."],
  tips: { b: "Keep your Aces safe.", i: "Lead trumps to clear the way for your 7s.", e: "Count all 120 points." },
  history: "Portugal's best-loved card game, played in cafés across the Lusophone world.",
  related: ["briscola", "tute"]
},
{
  id: "twenty-five", name: "Twenty-Five", alt: ["Spoil Five", "Forty-Five"],
  countries: ["Ireland"], family: "trick-taking", deck: "Standard 52",
  min: 2, max: 10, best: [4, 6], diff: 3, mins: 30, age: "10+", hand: 5,
  goal: "Win tricks worth 5 points each; first to 25 wins.",
  quick: ["Deal 5 cards each and turn up trumps.", "The 5 of trumps is the top card, then the Jack of trumps, then the Ace of Hearts.", "You may trump even if you could follow suit.", "Each trick won scores 5."],
  setup: ["Deal 5 cards each in packets of 2 and 3. Turn the next card up for trumps.", "A player holding the trump Ace may 'rob' the pack, swapping a card for the turned-up card."],
  rules: [
    "Top trumps: 5 of trumps, Jack of trumps, Ace of Hearts (always a trump), then Ace of trumps (if not hearts), King, Queen.",
    "The rest follows the old Irish rule: in red suits, high cards are higher ('highest in red'); in black suits, low numbers are higher ('lowest in black').",
    "When a non-trump is led, you must follow suit or trump; you may trump even if you could follow.",
    "When trumps are led, you must follow with a trump, except the top three trumps may 'renege' (be held back) if a lower trump was led.",
    "Highest trump wins; otherwise highest card of the led suit."
  ],
  scoring: ["Each trick is worth 5. First to 25 wins.", "Forty-Five: play to 45, often in partnerships."],
  mistakes: ["Following low/high rules wrongly for black cards."],
  variants: ["Forty-Five (Ireland, Nova Scotia)", "Auction Forty-Fives (Canada)."],
  tips: { b: "Learn the top three trumps first.", i: "Hold reneging trumps for when they're needed.", e: "Count trumps — there can be 13 or 14 with the Ace of Hearts." },
  history: "Ireland's national card game, descended from the 1500s game Maw, said to be a favourite of King James I.",
  related: ["whist", "500", "euchre"]
},
{
  id: "chicago-sweden", name: "Chicago", alt: ["Svensk Chicago"],
  countries: ["Sweden", "Finland"], family: "poker-trick hybrid", deck: "Standard 52",
  min: 2, max: 4, best: [3, 4], diff: 2, mins: 30, age: "10+", hand: 5,
  goal: "Score points for poker hands during exchanges, then win the last trick of each deal; first to 52 wins.",
  quick: ["Deal 5 cards each.", "Exchange cards up to three times; after the first two exchanges, the best poker hand scores points.", "Then play 5 tricks; only the last trick scores.", "First to 52 points wins."],
  setup: ["Deal 5 cards each from a 52-card deck."],
  rules: [
    "Exchange: each player discards any number of cards and draws replacements. After exchanges 1 and 2, compare poker hands; the best hand scores.",
    "Typical poker values: pair 1, two pairs 2, three of a kind 3, straight 4, flush 5, full house 6, four of a kind 7, straight flush 8, royal flush 52.",
    "After the third exchange, play 5 tricks with no trumps. Follow suit if able.",
    "The winner of the last trick scores 5 (10 if won with a 2).",
    "Before play, you may announce 'Chicago': you'll win all 5 tricks for 15, or lose 15 if you fail.",
    "After the final trick, the best poker hand also scores."
  ],
  scoring: ["First to 52 points wins.", "House rules vary widely — agree the table before you start."],
  mistakes: ["Keeping a great poker hand but no way to win the last trick."],
  variants: ["Many Swedish families have their own point tables."],
  tips: { b: "Balance poker hands with trick-taking power.", i: "Save a high card for the last trick.", e: "Call Chicago only with clear control of all suits." },
  history: "Despite the name, Chicago is a Swedish game, popular in student and family circles since the mid-20th century.",
  related: ["texas-holdem", "whist"]
},
{
  id: "snap", name: "Snap", alt: [],
  countries: ["United Kingdom", "Ireland", "Australia", "New Zealand"], family: "matching", deck: "Standard 52",
  min: 2, max: 6, best: [2, 3], diff: 1, mins: 10, age: "4+", hand: 26,
  goal: "Win all the cards by being first to shout 'Snap!' when two face-up cards match.",
  quick: ["Deal all the cards face down.", "Take turns flipping your top card onto your own face-up pile.", "When two top cards match in rank, shout 'Snap!'.", "The first to shout wins both piles."],
  setup: ["Deal the entire deck face down, one at a time, as evenly as possible."],
  rules: [
    "Players never look at their cards.",
    "In turn, flip the top card of your face-down stack onto your face-up pile in front of you.",
    "When the top cards of any two face-up piles share a rank, shout 'Snap!'.",
    "The first to shout takes both piles and adds them under their stack.",
    "A wrong 'Snap!' gives your face-up pile to the player you called on (house rule).",
    "If two shout together, the piles go to a 'snap pool' which is won by the next player to call 'Snap pool!' on a matching card."
  ],
  scoring: ["The player who wins all the cards wins. Or stop after a set time; the biggest pile wins."],
  mistakes: ["Flipping the card towards yourself — flip it away so everyone sees it at the same time."],
  variants: ["Slapjack: slap any Jack.", "Egyptian Ratscrew: the US slapping cousin."],
  tips: { b: "Watch every pile, not just yours.", i: "Count piles: you can predict likely snaps.", e: "Stay calm — false snaps cost you." },
  history: "A Victorian nursery game, often sold with custom illustrated packs.",
  related: ["egyptian-ratscrew", "war", "speed"]
},
{
  id: "cheat", name: "Cheat", alt: ["I Doubt It", "Bullshit (BS)", "Liar"],
  countries: ["United Kingdom", "United States of America", "Canada"], family: "shedding", deck: "Standard 52",
  min: 3, max: 10, best: [4, 5, 6], diff: 1, mins: 15, age: "7+", hand: 13,
  goal: "Be first to get rid of all your cards — by bluffing about what you're playing.",
  quick: ["Deal all cards.", "On your turn, play 1–4 cards face down and say what they are (they must be the next rank in order).", "Anyone may call 'Cheat!'", "If you lied, you pick up the pile; if you told the truth, the challenger does."],
  setup: ["Deal the whole deck evenly."],
  rules: [
    "The first player places Aces, the next 2s, the next 3s, and so on, wrapping after King.",
    "On your turn, put down 1 to 4 cards face down and announce them, e.g. 'two Sevens'.",
    "You must claim the required rank, but the cards may not really be that rank.",
    "Any player may challenge by calling 'Cheat!' before the next player plays.",
    "The cards are turned up. If any were false, the cheater takes the entire pile; if all were true, the challenger takes it.",
    "First player to empty their hand (surviving any challenge) wins."
  ],
  scoring: ["First out wins."],
  mistakes: ["Lying on your final card — everyone challenges the last play!"],
  variants: ["Allow claims of the same rank, one higher or one lower."],
  tips: { b: "Keep a straight face.", i: "Tell the truth when you can, so your lies are believed.", e: "Count cards: if you hold three Kings, anyone claiming three Kings is lying." },
  history: "Known in Britain since the 19th century, a classic family and party game around the world.",
  related: ["durak", "crazy-eights"]
},
{
  id: "sevens", name: "Sevens", alt: ["Fan Tan", "Domino", "Parliament", "Card Dominoes"],
  countries: ["United Kingdom", "Sweden", "Netherlands", "Germany", "Finland"], family: "shedding", deck: "Standard 52",
  min: 3, max: 8, best: [4, 5], diff: 1, mins: 15, age: "6+", hand: 13,
  goal: "Be first to play all your cards onto suit rows built outward from the 7s.",
  quick: ["Deal all cards.", "The holder of the 7♦ starts by playing it.", "Each turn, play a 7 or extend a row up or down by one card.", "If you can't play, pass (some rules make you pay a chip)."],
  setup: ["Deal out the whole deck."],
  rules: [
    "The player with the 7 of diamonds plays it to start (some play 7♥).",
    "On your turn, play one card: a new 7 (starting a new row), or the next card up or down in a row of that suit (6 or 8 of diamonds next to 7♦).",
    "Rows build outward from 7: up to King and down to Ace.",
    "If you can play, you must. If you can't, you pass.",
    "The first player to empty their hand wins."
  ],
  scoring: ["Often played for chips: each pass costs one chip into the pot, and the winner takes it plus one chip per card left in others' hands."],
  mistakes: ["Rushing to play cards that open the way for opponents."],
  variants: ["Fan Tan, Parliament and Card Dominoes are regional names."],
  tips: { b: "Play cards that open your own long suits.", i: "Hold back 6s and 8s that block suits you're not in.", e: "Count who is passing to know which cards they lack." },
  history: "Played in Europe since at least the 19th century and taught in many schools for practicing number order.",
  related: ["crazy-eights", "cheat"]
}
);
