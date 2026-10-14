# Card Atlas

An interactive world encyclopedia of card games. Spin a 3D globe, pick how many players you have, and discover games from every country, with clear rules, animated examples and a built-in record keeper.

## Features

- **Animated globe**: countries glow by how many games they have; tap one to see its games. Heat map, "spread arcs" showing how games travelled, continent zoom, and a roulette-style **Surprise me**.
- **Player-count filter**: Solo, 2, 3, 4, 5–6 or 7+. The globe, lists and search all update instantly; ★ marks the best player count.
- **Game pages**: one-sentence goal, "Play in 60 seconds", an animated deal for your chosen number of players, step-by-step rules with tap-to-explain glossary terms, an animated example turn, scoring, common mistakes, variants, beginner/intermediate/expert strategy, history and related games. Printable rule sheets.
- **Play**: fully playable Klondike (draw 1 or 3), FreeCell and Golf with drag-and-drop, tap-to-move, undo, hints, auto-finish and win animations.
- **Record keeper**: score sheets for real table games (auto totals, low-score-wins games, target scores, winner celebration), history, stats, group leaderboards with head-to-head, badges, CSV export and JSON backup/restore.
- **Passport**: learning or recording a game stamps every country it comes from.
- Light/dark themes, synthesised sound effects (mutable), keyboard support, reduced-motion support, mobile layout.

All data is stored in the browser (localStorage); no account or server is needed.

## Running it

It's a static site. Open `index.html` through any web server, for example:

```
python3 -m http.server
```

## Hosting on GitHub Pages

Settings → Pages → Build and deployment → Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)**. The site appears at `https://<user>.github.io/card-atlas/`.

## Adding games

Games live in `js/data/*.js`. Each entry follows the same structure (id, name, countries, family, deck, min/max/best players, difficulty, quick start, setup, rules, scoring, mistakes, variants, tips, history, related). Country names must match the map's names (see `js/core.js`). Add an entry and it appears on the globe, in search, in Browse and in the passport automatically.

The atlas currently holds 86 games from 91 countries, written as original plain-language rules. It's designed to grow toward thousands.

## Credits

Globe: [globe.gl](https://github.com/vasturiano/globe.gl). Country shapes: [world-atlas](https://github.com/topojson/world-atlas) (Natural Earth). Fonts: Fraunces and DM Sans via Google Fonts.
