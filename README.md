# 1000 Dot-to-Dot — Scroll to Draw & Tap to Connect

An interactive web demo for the *1000 Dot-to-Dot* drawings, in two modes:

- **Scroll to draw** (`index.html`) — as you scroll down the page, a single continuous line inks itself in across a field of 1,000 numbered dots, lighting each dot as it's connected, until the full portrait is revealed.
- **Tap to connect** (`play.html`) — an actual playable dot-to-dot: tap the dots in numeric order, pinch or scroll-wheel to zoom, drag to pan. A pulsing ring marks the next dot, an idle "Show me" button flies you to it, and your progress is saved so you can come back later.

Both are self-contained HTML files: no build step, no dependencies, no server required.

## View it locally

Just open `index.html` (scroll mode) or `play.html` (play mode) in any modern web browser — double-click it, or drag it into a browser window. Each page links to the other.

## Multiple artworks

Both pages show the built-in drawing by default, and accept `?art=<id>` in the URL to show a different one (e.g. `index.html?art=marilyn`). Extra artworks live as small `art/<id>.js` files next to the HTML.

To add an artwork:

1. Open `tools/convert.html` in a browser.
2. Drop in the artwork's SVG (a single continuous path) — or paste the raw path data.
3. Give it an id and title, click **Convert**, check the preview, and download the generated file into the `art/` folder.
4. Open `index.html?art=<id>` or `play.html?art=<id>`.

If an artwork can't be loaded, the pages quietly fall back to the built-in drawing.

## Put it online (free) with GitHub Pages

Once this repo is on GitHub:

1. Go to the repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set the branch to **`main`** and the folder to **`/ (root)`**, then **Save**.
4. After a minute, your demo will be live at:
   `https://<your-username>.github.io/<repository-name>/`

Because the demo is named `index.html`, it loads automatically at that URL.

### Embedding it in another site

Host it as its own page (as above), then drop it into any page with an iframe:

```html
<iframe src="https://<your-username>.github.io/<repository-name>/"
        style="width:100%; height:100vh; border:0;"></iframe>
```

## Files

| File | Purpose |
|------|---------|
| `index.html` | The scroll-to-draw demo, self-contained (the drawing path is embedded inside it). |
| `play.html` | The tap-to-connect game, also self-contained. |
| `tools/convert.html` | Browser tool that turns an artwork SVG into an `art/<id>.js` file. |
| `art/<id>.js` | Optional extra artworks (`art/test-spiral.js` is a small synthetic test drawing). |
| `constants.ts` | The original source artwork — the single continuous SVG path the demo is built from. |

## Tweaking the demo

All the knobs live near the top of the `<script>` and `<style>` blocks in `index.html`:

- **Scroll length / drawing speed** — `#track { height: 700vh }` in the CSS (taller = slower, more deliberate).
- **Finish buffer** — `FINISH_AT = 0.96` in the script (the drawing completes by 96% of the scroll, leaving a comfortable finished zone at the bottom).
- **Colors** — the `--ink`, `--dot`, `--accent`, and `--bg` CSS variables.
- **Smoothness** — the `0.16` easing factor in the `render()` function.

## Credit & copyright

Artwork © Thomas Pavitte, author of the *1000 Dot-to-Dot* book series. All rights reserved. The drawing in this demo is provided for this interactive demo only and is not licensed for reuse.
