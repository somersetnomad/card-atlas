// Patience / solitaire games. All rules text is original writing for Card Atlas.
window.GAMES = window.GAMES || [];
GAMES.push(
{
  id: "klondike", name: "Klondike", alt: ["Solitaire", "Patience", "Canfield (US misnomer)"],
  countries: ["Canada", "United States of America"], family: "patience", deck: "Standard 52",
  min: 1, max: 1, best: [1], diff: 2, mins: 10, age: "6+", hand: 0, play: "klondike",
  goal: "Move all 52 cards onto four suit piles, each built from Ace up to King.",
  quick: [
    "Lay out 7 columns: 1 card in the first, 2 in the second, up to 7. Only the top card of each is face up.",
    "Build columns downward in alternating colours (black 9 on red 10).",
    "Move Aces to the four foundation spots above and build each up by suit.",
    "Turn cards from the stock when stuck. Only a King may fill an empty column."
  ],
  setup: [
    "Shuffle one 52-card deck.",
    "Deal 7 columns left to right. Column 1 gets 1 card, column 7 gets 7. Turn the top card of each column face up.",
    "Place the remaining 24 cards face down as the stock. Leave room above for four foundation piles."
  ],
  rules: [
    "Any Ace that becomes available goes straight up to a foundation pile.",
    "Foundations build upward in one suit: A, 2, 3 … K of hearts on one pile, and so on.",
    "In the columns (the tableau), place a card on one that is one rank higher and the opposite colour.",
    "You may move a whole run of face-up cards together if the bottom card of the run fits its new spot.",
    "When a face-down card is uncovered, turn it face up.",
    "An empty column can only be filled by a King (or a run starting with a King).",
    "Turn cards from the stock onto a waste pile (1 at a time, or 3 at a time for a harder game). The top waste card is playable.",
    "When the stock runs out, flip the waste pile over to make a new stock and continue."
  ],
  scoring: [
    "You win by getting all 52 cards onto the foundations.",
    "Common computer scoring: 10 points per card to a foundation, 5 per card from waste to tableau, minus points for recycling the stock.",
    "Vegas style: pay 52 units to play, win 5 units per card on the foundations, and allow only one (or three) passes."
  ],
  mistakes: [
    "Moving a card to the foundation too early. Low cards are often needed in the columns to hold others.",
    "Emptying a column when you have no King ready to put in it."
  ],
  variants: [
    "Draw 1 vs Draw 3: draw-3 is the classic and much harder.",
    "Thoughtful Solitaire: all cards face up. Pure skill, nearly always winnable."
  ],
  tips: {
    b: "Always uncover face-down cards first, starting with the tallest columns.",
    i: "Don't automatically fill an empty column; wait for the King that unlocks the most.",
    e: "Plan your stock: in draw-3, count which cards you will see on the next pass before committing."
  },
  history: "Named after the 1890s Klondike Gold Rush in Canada's Yukon. It became the world's best-known solitaire when it shipped with Windows 3.0 in 1990, partly to teach people to use a mouse.",
  related: ["yukon", "freecell", "spider", "canfield"]
},
{
  id: "freecell", name: "FreeCell", alt: ["Free Cell"],
  countries: ["United States of America"], family: "patience", deck: "Standard 52",
  min: 1, max: 1, best: [1], diff: 3, mins: 10, age: "8+", hand: 0, play: "freecell",
  goal: "Move all cards to four suit foundations, Ace to King, using four 'free cells' as temporary parking.",
  quick: [
    "Deal all 52 cards face up into 8 columns.",
    "Four free cells can each hold one card.",
    "Build columns down in alternating colours, one card at a time.",
    "Build foundations up by suit from Ace."
  ],
  setup: [
    "Deal the whole deck face up into 8 columns: the first four get 7 cards, the last four get 6.",
    "Leave four empty free cells at top left and four foundation spots at top right."
  ],
  rules: [
    "Move only one card at a time (the top card of a column or a free-cell card).",
    "A card may go on a column whose top card is one rank higher and the opposite colour.",
    "Any card may go into an empty free cell or an empty column.",
    "Foundations build up by suit from Ace to King.",
    "Moving several cards at once is just a shortcut for single moves via free cells, so the size of a group you can shift depends on how many cells and columns are empty."
  ],
  scoring: ["You win when all cards are on the foundations. Almost every deal (all but a handful of the original 32,000) is solvable."],
  mistakes: ["Filling all four free cells early, which leaves you no room to manoeuvre.", "Burying Aces and 2s deeper while playing elsewhere."],
  variants: ["Baker's Game: build columns down by the same suit instead of alternating colour (harder).", "Fewer cells: play with 3, 2 or even 1 free cell for a challenge."],
  tips: {
    b: "Look for the Aces and 2s first, and plan to dig them out.",
    i: "An empty column is worth more than a free cell; it doubles the size of group you can move.",
    e: "Before each move, ask whether it reduces or increases the number of cells you'll need later."
  },
  history: "Paul Alfille programmed FreeCell in 1978 on the PLATO educational system. Microsoft's 1991 version made it a worldwide office pastime.",
  related: ["klondike", "forty-thieves", "baker-dozen"]
},
{
  id: "spider", name: "Spider", alt: ["Spider Solitaire"],
  countries: ["United Kingdom", "United States of America"], family: "patience", deck: "Two 52-card decks (104)",
  min: 1, max: 1, best: [1], diff: 4, mins: 20, age: "8+", hand: 0,
  goal: "Build eight complete runs of King down to Ace in one suit; each finished run is removed from the table.",
  quick: [
    "Deal 54 cards into 10 columns; only top cards face up.",
    "Build down by rank in any suit, but only same-suit runs can be moved together.",
    "When stuck, deal one new card onto every column from the stock.",
    "A complete K-to-A run in one suit is removed. Remove all eight to win."
  ],
  setup: [
    "Shuffle two decks together (104 cards).",
    "Deal 10 columns: the first four get 6 cards, the other six get 5. Turn the top card of each face up.",
    "The remaining 50 cards form the stock, which you'll deal in five rounds of 10."
  ],
  rules: [
    "Place any card on a card one rank higher, regardless of suit (a 6 of hearts on a 7 of clubs is legal).",
    "You may move a group of cards together only if they form a run of the same suit in descending order.",
    "Any card or valid run may go into an empty column.",
    "Turn face-down cards up as they're uncovered.",
    "Click the stock to deal one card face up onto each of the 10 columns. You may not deal while any column is empty.",
    "When a column holds a full King-to-Ace run of one suit, it is removed to the finished pile."
  ],
  scoring: ["Computer versions start at 500, subtract 1 per move and add 100 for each completed run."],
  mistakes: ["Mixing suits carelessly; mixed runs can't be moved as a unit.", "Dealing from the stock before using every available move."],
  variants: ["1 suit (all spades): beginner friendly.", "2 suits: medium.", "4 suits: very hard, the original game."],
  tips: {
    b: "Start with the 1-suit version until you're comfortable.",
    i: "Prioritise creating an empty column; it's the most powerful thing in the game.",
    e: "When building on mixed suits, prefer moves you can later 'un-mix' into same-suit runs."
  },
  history: "First described in 1949 and named for the eight legs of a spider (eight runs to complete). It was a favourite of Franklin D. Roosevelt and became a Windows staple in 1998.",
  related: ["klondike", "scorpion", "forty-thieves"]
},
{
  id: "pyramid", name: "Pyramid", alt: ["Solitaire 13"],
  countries: ["United States of America"], family: "patience", deck: "Standard 52",
  min: 1, max: 1, best: [1], diff: 2, mins: 5, age: "6+", hand: 0,
  goal: "Clear the pyramid by removing pairs of cards that add up to 13.",
  quick: [
    "Build a 7-row pyramid of 28 face-up cards.",
    "Remove any two uncovered cards totalling 13 (J=11, Q=12, K=13 removed alone).",
    "Flip cards from the stock to find more pairs.",
    "Clear the whole pyramid to win."
  ],
  setup: [
    "Deal 28 cards face up in a pyramid: 1 card on top, then rows of 2, 3 … 7, each row overlapping the one above.",
    "The remaining 24 cards are the stock."
  ],
  rules: [
    "A card is available only when no card overlaps it from the row below.",
    "Remove two available cards whose values add to 13: A+Q, 2+J, 3+10, 4+9, 5+8, 6+7.",
    "Kings are worth 13 and are removed on their own.",
    "Turn stock cards one at a time onto a waste pile; the top waste card can pair with a pyramid card or the next stock card.",
    "Standard rules allow only one pass through the stock (some allow three)."
  ],
  scoring: ["Win by clearing all 28 pyramid cards. Count the cards remaining as your score if you don't (lower is better)."],
  mistakes: ["Pairing a card from the pyramid's edge when another choice would uncover two new cards."],
  variants: ["Three passes through the stock for an easier game.", "Tri-Peaks uses a different three-peak layout and run-building instead of pairing."],
  tips: { b: "Learn the six 13-pairs by heart.", i: "Look at which removal frees the most cards.", e: "Track which values remain in the stock so you can decide when to wait." },
  history: "Pyramid appeared in solitaire books in the early 20th century and became a popular computer game in the 1990s.",
  related: ["tripeaks", "golf", "accordion"]
},
{
  id: "golf", name: "Golf", alt: ["Golf Patience"],
  countries: ["United Kingdom"], family: "patience", deck: "Standard 52",
  min: 1, max: 1, best: [1], diff: 1, mins: 5, age: "6+", hand: 0, play: "golf",
  goal: "Move every card from the seven columns onto a single waste pile, playing one rank up or down each time.",
  quick: [
    "Deal 7 columns of 5 face-up cards.",
    "Turn one stock card to start the waste pile.",
    "Move any column's top card to the waste if it is one rank higher or lower.",
    "When stuck, turn the next stock card. Clear all columns to win."
  ],
  setup: ["Deal 35 cards face up into 7 overlapping columns of 5.", "The other 17 cards are the stock. Turn the top one face up to start the waste pile."],
  rules: [
    "Only the exposed (bottom-most, fully visible) card of each column can be played.",
    "Play it onto the waste if it is exactly one rank above or below the waste's top card, any suit (a 7 on a 6 or 8).",
    "Aces and Kings do not connect: nothing goes on a King, and a King can't be played on a Queen in strict rules (many apps allow it).",
    "When no column card fits, turn the next stock card onto the waste.",
    "The game ends when the stock is empty and no moves remain."
  ],
  scoring: ["Like real golf, your score is the number of cards left in the columns (lower is better). Clearing everything scores minus the stock cards left.", "Play 9 or 18 'holes' (deals) and add up your scores."],
  mistakes: ["Taking the first available move instead of the one that leads to a longer chain."],
  variants: ["Wrap-around: Ace and King connect.", "Putt Putt: Kings can be played on Queens and Aces on Kings."],
  tips: { b: "Look for long up-and-down chains, like 6-7-8-7-6.", i: "Save cards that match ranks still to come from the stock.", e: "Count ranks: if all four 9s are gone, a 10 waiting for one is dead weight." },
  history: "A British patience named for its golf-style scoring, it's been printed in patience books for over a century.",
  related: ["tripeaks", "pyramid", "klondike"]
},
{
  id: "tripeaks", name: "Tri-Peaks", alt: ["TriPeaks", "Three Peaks"],
  countries: ["United States of America"], family: "patience", deck: "Standard 52",
  min: 1, max: 1, best: [1], diff: 1, mins: 5, age: "6+", hand: 0,
  goal: "Clear three overlapping card peaks by playing cards one rank above or below the waste card.",
  quick: [
    "Lay 28 cards as three peaks; the bottom row of 10 is face up.",
    "Turn one stock card face up as the waste.",
    "Play any uncovered peak card that is one rank above or below the waste card. Ace and King wrap.",
    "Turn a new stock card when stuck; clear all peaks to win."
  ],
  setup: ["Deal three pyramid shapes side by side (rows of 3, 6, 9 face down), then a bottom row of 10 face-up cards linking them.", "The other 23 cards form the stock; turn one up."],
  rules: [
    "A face-down peak card turns face up once both cards covering it are gone.",
    "Play uncovered cards onto the waste one rank up or down, any suit. King and Ace connect both ways.",
    "Chains of several cards in a row score extra in most apps.",
    "When no move is possible, turn the next stock card onto the waste."
  ],
  scoring: ["Win by clearing all three peaks. Apps award rising points for long chains and bonuses for each peak cleared."],
  mistakes: ["Playing an obvious card when a different one would open a face-down card."],
  variants: ["No wrap: Aces and Kings don't connect."],
  tips: { b: "Look for chains like 5-6-5-4.", i: "Prefer cards that uncover face-down cards.", e: "Keep track of how many of each rank you've seen." },
  history: "Invented by Robert Hogue in 1989 and popularised by the Microsoft Entertainment Pack.",
  related: ["golf", "pyramid"]
},
{
  id: "accordion", name: "Accordion", alt: ["Idle Year", "Tower of Babel"],
  countries: ["France", "United Kingdom"], family: "patience", deck: "Standard 52",
  min: 1, max: 1, best: [1], diff: 3, mins: 10, age: "8+", hand: 0,
  goal: "Squeeze a whole deck dealt in a line down into a single pile.",
  quick: [
    "Deal cards face up in a row from left to right.",
    "A card (with its pile) may move onto the pile directly left, or three places left, if suit or rank matches.",
    "Keep dealing and squeezing.",
    "Finish with one pile to win (very rare!)."
  ],
  setup: ["Shuffle. You'll deal cards one by one into a long row (wrapping into new rows if you run out of table)."],
  rules: [
    "Deal one card at a time to the right of the last.",
    "A pile may be moved on top of the pile immediately to its left, or the pile three places to its left, if the top cards share a suit or a rank.",
    "Moving a pile closes up the gap, which may create new matches.",
    "You decide which legal move to make when there's a choice; that's where the skill lies."
  ],
  scoring: ["Count the piles left at the end. One pile is a win; five or fewer is a good result."],
  mistakes: ["Always taking the first match. Look ahead at which move creates more future matches."],
  variants: ["Some players allow moves only one to the left for an easier game (it's actually harder to finish!)."],
  tips: { b: "Check both one-left and three-left every time you deal.", i: "Keep a mix of suits on pile tops to stay flexible.", e: "Delay merges that would leave an awkward card on top." },
  history: "One of the oldest patience games, printed in 19th-century collections. It's famously hard to win; estimates suggest around 1 deal in 100 with expert play.",
  related: ["golf", "pyramid"]
},
{
  id: "clock", name: "Clock Patience", alt: ["Clock", "Travellers", "Sundial"],
  countries: ["United Kingdom"], family: "patience", deck: "Standard 52",
  min: 1, max: 1, best: [1], diff: 1, mins: 5, age: "5+", hand: 0,
  goal: "Turn every card face up before the fourth King appears.",
  quick: [
    "Deal 13 face-down piles of 4: twelve in a clock circle, one in the middle.",
    "Turn the top card of the middle pile.",
    "Put it face up under the clock pile matching its rank, then turn that pile's top card.",
    "If all four Kings come up before the rest, you lose."
  ],
  setup: ["Deal the deck into 13 face-down piles of 4: positions 1 (Ace) to 12 (Queen) around a clock face, and Kings in the centre."],
  rules: [
    "Start by turning up the top card of the King (centre) pile.",
    "Slide it face up under the pile matching its rank (Ace at 1 o'clock … Jack at 11, Queen at 12, King in the centre).",
    "Turn up the top face-down card of that same pile and repeat.",
    "If you turn up the fourth King, the game ends."
  ],
  scoring: ["Win if every card is face up. No decisions are involved, so it's pure luck — about 1 in 13 games win."],
  mistakes: ["None really; it's a relaxing game of chance, ideal for children learning ranks."],
  variants: ["Some let you continue from any face-down pile after the fourth King for a 'second chance'."],
  tips: { b: "Great for teaching young children numbers and clock positions.", i: "Use it as a quick shuffle-check or a fortune-telling game as was done historically.", e: "Try predicting the win: it's equivalent to the last card of the deck being a King." },
  history: "A traditional British game also used for 'telling fortunes', where finishing meant a wish would come true.",
  related: ["golf", "accordion"]
},
{
  id: "la-belle-lucie", name: "La Belle Lucie", alt: ["Fan", "Alexander the Great", "Clover Leaf"],
  countries: ["France"], family: "patience", deck: "Standard 52",
  min: 1, max: 1, best: [1], diff: 3, mins: 10, age: "8+", hand: 0,
  goal: "Move all cards to four suit foundations from 17 small fans of three cards.",
  quick: [
    "Deal 17 fans of 3 face-up cards, plus 1 single card.",
    "Build down in the same suit on fans, one card at a time.",
    "Build foundations up from Ace by suit.",
    "You get two redeals when stuck."
  ],
  setup: ["Deal the deck face up into 17 fans of three overlapping cards, with the last card as an eighteenth fan of one."],
  rules: [
    "Only the top card of each fan can be moved.",
    "Move Aces to foundations as they appear; build each up by suit.",
    "A top card may go on another fan's top card if it's the same suit and one rank lower.",
    "Empty fans are never refilled.",
    "When stuck, gather all fan cards, shuffle, and redeal in threes. You get two redeals.",
    "Optional 'merci': after the last redeal, pull one buried card out of any fan once."
  ],
  scoring: ["Win if all 52 cards reach the foundations."],
  mistakes: ["Building a King over a low card of the same suit, permanently burying it."],
  variants: ["Trefoil: Aces start on the foundations.", "Shamrocks: no fan may grow above three cards."],
  tips: { b: "Spot Kings sitting on lower cards of their own suit; those fans may be blocked.", i: "Use the merci on the card that releases the longest chain.", e: "Order moves so that redeals scatter the blocked cards." },
  history: "'Beautiful Lucy' is a classic French patience described in 19th-century books, admired for its flower-like layout.",
  related: ["klondike", "freecell"]
},
{
  id: "forty-thieves", name: "Forty Thieves", alt: ["Napoleon at St Helena", "Big Forty"],
  countries: ["United Kingdom"], family: "patience", deck: "Two 52-card decks (104)",
  min: 1, max: 1, best: [1], diff: 5, mins: 20, age: "10+", hand: 0,
  goal: "Build eight foundations, Ace to King by suit, from 10 columns and a single pass of the stock.",
  quick: ["Deal 10 columns of 4 face-up cards.", "Build columns down in the same suit, one card at a time.", "Build foundations up by suit from Ace.", "Go through the stock just once."],
  setup: ["Shuffle two decks.", "Deal 40 cards face up into 10 columns of 4.", "The remaining 64 form the stock."],
  rules: [
    "Only top cards move, one at a time.",
    "A card may go on one of the same suit and one rank higher.",
    "Any card may fill an empty column.",
    "Aces go to the eight foundations, which build up by suit.",
    "Turn stock cards one at a time to the waste; the top waste card is playable. No redeal."
  ],
  scoring: ["Win if all 104 cards reach foundations. Expect to win perhaps 1 game in 10."],
  mistakes: ["Spending an empty column on a card that doesn't unlock anything."],
  variants: ["Lucas: Aces start on the foundations and the columns have 3 cards each.", "Alternating-colour building makes it easier."],
  tips: { b: "Empty columns are gold.", i: "Free deep low cards before the stock runs out.", e: "Count how many moves a group transfer needs with your empty columns." },
  history: "Also called 'Napoleon at St Helena', from the legend that Napoleon played it in exile, though there's no evidence for that.",
  related: ["spider", "freecell"]
},
{
  id: "yukon", name: "Yukon", alt: [],
  countries: ["Canada"], family: "patience", deck: "Standard 52",
  min: 1, max: 1, best: [1], diff: 3, mins: 10, age: "8+", hand: 0,
  goal: "Move all cards to suit foundations; unlike Klondike there is no stock, and you can move any face-up card with what lies on it.",
  quick: ["Deal like Klondike, then add 4 face-up cards to columns 2–7.", "Build down in alternating colours.", "Move any face-up card together with all cards on top of it, even if they're not in order.", "Kings fill empty columns."],
  setup: ["Deal 7 columns as in Klondike (1 to 7 cards, top face up).", "Deal the remaining 24 cards face up, 4 each onto columns 2 to 7."],
  rules: [
    "Foundations build up from Ace by suit.",
    "Place a card on one rank higher and opposite colour.",
    "You may move any face-up card along with everything above it, as long as that card fits its destination.",
    "Only Kings (with anything on them) may fill empty columns.",
    "There is no stock; everything is already on the table."
  ],
  scoring: ["Win when all cards reach foundations; roughly 1 in 3 deals are winnable."],
  mistakes: ["Forgetting the free-group move; it's what makes Yukon different."],
  variants: ["Russian Solitaire: same layout, but build down by the same suit instead (much harder)."],
  tips: { b: "Use group moves to dig out face-down cards.", i: "Uncover the tall columns first.", e: "Plan King placements early; empty columns are rare." },
  history: "A Klondike relative named after the same Canadian territory, popular in American patience books since the mid-20th century.",
  related: ["klondike", "scorpion"]
},
{
  id: "scorpion", name: "Scorpion", alt: [],
  countries: ["United Kingdom"], family: "patience", deck: "Standard 52",
  min: 1, max: 1, best: [1], diff: 4, mins: 15, age: "10+", hand: 0,
  goal: "Rebuild the deck into four columns, each a King-to-Ace run of one suit.",
  quick: ["Deal 7 columns of 7; some bottom cards are face down.", "Build down in the same suit.", "Move any face-up card with everything on top of it.", "Use the 3-card reserve once."],
  setup: ["Deal 7 columns of 7 cards. In the first four columns, the first three cards are face down; everything else is face up.", "Set aside the last 3 cards as a reserve."],
  rules: [
    "Move any face-up card, together with every card on top of it, onto a card of the same suit one rank higher.",
    "Only a King (with whatever lies on it) may fill an empty column.",
    "Turn up face-down cards when uncovered.",
    "Once, when you choose, deal the 3 reserve cards face up onto the first three columns.",
    "Win when each of four columns holds a complete King-to-Ace suit."
  ],
  scoring: ["Win or lose."],
  mistakes: ["Using the reserve too early before exploiting the board."],
  variants: ["Wasp: any card may fill an empty column (easier)."],
  tips: { b: "Free the face-down cards first.", i: "Watch for Kings buried below their own low cards.", e: "Map the dependencies: which suit runs block which?" },
  history: "A classic 20th-century British patience with a distinctive 'sting': cards buried under their own suit can make games unwinnable.",
  related: ["yukon", "spider"]
},
{
  id: "canfield", name: "Canfield", alt: ["Demon"],
  countries: ["United States of America", "United Kingdom"], family: "patience", deck: "Standard 52",
  min: 1, max: 1, best: [1], diff: 4, mins: 10, age: "10+", hand: 0,
  goal: "Build four foundations upward by suit from a starting rank chosen by the deal, wrapping King to Ace.",
  quick: ["Deal a 13-card reserve, one foundation card, and four tableau cards.", "Foundations start at the rank of the first foundation card and go up by suit.", "Tableau builds down in alternating colours.", "Turn the stock three at a time, as often as you like."],
  setup: ["Deal 13 cards face down as the reserve; turn its top card up.", "Turn the next card face up as the first foundation; its rank is the starting rank for all four foundations.", "Deal four cards face up in a row as the tableau. The rest is the stock."],
  rules: [
    "Foundations build up by suit from the base rank, wrapping (e.g. base 8: 8, 9 … K, A, 2 … 7).",
    "Tableau cards build down in alternating colour, also wrapping (Ace on 2, King on Ace).",
    "Whole tableau piles may move together.",
    "Empty tableau spots fill from the reserve automatically, or from the waste once the reserve is empty.",
    "Turn stock cards three at a time to the waste; redeal without limit."
  ],
  scoring: ["Historically: pay $52 for the deck, earn $5 per card on the foundations."],
  mistakes: ["Ignoring the reserve. Getting reserve cards out is the main task."],
  variants: ["Draw one card at a time for an easier game.", "Klondike is sometimes wrongly called Canfield in the USA."],
  tips: { b: "Focus on emptying the reserve.", i: "Use the tableau spots as holding cells.", e: "Count the stock cycle so you know which card comes next each pass." },
  history: "Named after Richard Canfield, a 1890s casino owner in Saratoga Springs, New York, who reportedly sold the deck to gamblers and paid out per card played.",
  related: ["klondike"]
},
{
  id: "calculation", name: "Calculation", alt: ["Broken Intervals"],
  countries: ["United Kingdom"], family: "patience", deck: "Standard 52",
  min: 1, max: 1, best: [1], diff: 4, mins: 15, age: "10+", hand: 0,
  goal: "Build four foundations counting in 1s, 2s, 3s and 4s, ignoring suits.",
  quick: ["Place any A, 2, 3 and 4 as foundation bases.", "Foundation 1 counts by 1s, foundation 2 by 2s, and so on.", "Turn cards one by one: play to a foundation or onto one of 4 waste piles.", "Only top waste cards can be played."],
  setup: ["Take out an Ace, a 2, a 3 and a 4 (any suits) and place them in a row as foundations.", "The rest of the deck is the stock."],
  rules: [
    "Foundation sequences (suits don't matter):",
    "Ace: A 2 3 4 5 6 7 8 9 10 J Q K",
    "2: 2 4 6 8 10 Q A 3 5 7 9 J K",
    "3: 3 6 9 Q 2 5 8 J A 4 7 10 K",
    "4: 4 8 Q 3 7 J 2 6 10 A 5 9 K",
    "Turn the stock one card at a time. Play it to a foundation if it's the next needed card, or put it on any of the four waste piles.",
    "Top cards of waste piles may be played to foundations but never moved between waste piles."
  ],
  scoring: ["Win when all four foundations reach King. Skilled players win most games."],
  mistakes: ["Mixing ranks randomly in waste piles. Organise them."],
  variants: ["Betsy Ross: similar, but the base cards are also counted differently."],
  tips: { b: "Keep one waste pile for Kings only.", i: "Stack waste piles in reverse order of when you'll need cards.", e: "Look ahead several ranks in each sequence before placing a card." },
  history: "An old British skill patience; mathematically minded players love it as it rewards planning more than luck.",
  related: ["klondike", "golf"]
}
);
