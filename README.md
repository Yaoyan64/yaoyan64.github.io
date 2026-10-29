# Wang Xin — Data & Discovery

Version 16.2 · 29 October 2026. A bilingual academic portfolio with five visual themes, interactive research scenes, a celestial atlas and a display-only academic profile.

A URL without a language parameter always opens in English, including a directly opened local index.html file. Old saved Chinese preferences no longer override this default. An explicit `?lang=zh` link opens Chinese, and the language buttons continue to work. Initial HTML is also English before scripts run. The academic profile and its entry page use the same rule.

The English homepage name uses locally bundled Great Vibes as signature-style display lettering, sized to its own layout column. All other English text and the academic profile retain Times New Roman. See assets/name-signature-notes.md for the font source and SIL OFL license.

## Local use and publishing

Open index.html directly, or run `npm run dev`. Visual assets and fonts are local. No model API, database or installation is required to view the site. When online, citation counts are refreshed from Crossref; offline visitors see the bundled snapshot.

For GitHub Pages, upload the complete contents of this directory to the root of `yaoyan64.github.io`, including .github and scripts. Select **Settings → Pages → Source → GitHub Actions**. The supplied workflow builds and deploys on main-branch pushes, manual runs and a daily 07:23 UTC schedule. It refreshes Crossref citation data before deployment and retains available earlier data on retrieval failures. This local copy has not been published.

`node build.mjs --outdir <path>` produces the static deployment directory. The site also supports a project subpath.

## V16 animated research landscape

The research map is now an open composition of four illustrated research scenes around a gently rotating data-ribbon sculpture. Native SVG provides translucent cell membranes, drifting microbial forms, neural pulses and layered data plates. A lightweight Canvas renderer adds fine flowing strands, travelling particles and subtle pointer-responsive rotation. There is no outer card frame or three-column grid.

The selected question, method or paper is explained beside the illustration, with related methods and a connected-paper shelf below. Hover previews remain visible while the pointer moves into the explanation. Selecting a paper retains its neighbouring papers and brings its explanation into view on smaller screens; the action still opens the actual publication details. Topic and method actions keep the visible, clearable publication filter.

The four questions, five method groups and twelve papers are unchanged. Phone and tablet layouts reflow the scene and reading area. All five palettes, bilingual copy, Times New Roman, and academic italics remain supported. The renderer pauses offscreen, during the opening sequence, while the celestial atlas is open, on hidden tabs and under reduced-motion/global-pause settings. See assets/research-map-notes.md for the editorial scope.

## Earlier interaction updates

Gallery previews now keep category highlights, markers and descriptions in sync. The Coordinates switch controls the grid and coordinate readouts together. A separate Trails layer illustrates long exposures around the celestial poles without moving catalog positions. Citation refresh is explicit and recoverable: automatic checks use a six-hour freshness window, failed checks may retry after five minutes, and a manual refresh button reports the result. Public Crossref requests are sent sequentially.

## Experience

- Five persistent, light-background themes: Jade, Coral & Gold; Blue & White Porcelain; Vermilion & Ink; Copper & Parchment; and Violet & Glacier. They affect page surfaces, ornaments and animated illustrations.
- The first page paint is gated by a small synchronous boot script. Seven English-only covers drift into a Dipper-inspired composition, pause with subtle floating motion, then disperse as the homepage fades in. There is no group rotation. Rounded paper edges, fine star lines and restrained pigment particles support the 16-second sequence. Portrait and landscape layouts use different arrangements. Reduced-motion preferences and resource failures bypass it gracefully; a playback watchdog prevents a stuck overlay. A footer control replays it. Nature, Cell, Science, NEJM, BMJ, The Lancet and JAMA are design references for original studies, not publication claims.
- The seven-artwork gallery explains the visual metaphors and their connections to the supplied research record. It changes works roughly every 11 seconds while visible, but holds while the pointer, keyboard focus or detail-reading interaction is active. Dots remain hidden until image hover or a corresponding explanation is selected. Automatic changes never scroll the whole page.
- The five navigation links follow the actual page order: About, Research, Academic Journey, Publications, and Gallery. Their active states use the real header offset; Academic Journey now precedes Publications.
- The About section uses a painted likeness based on the supplied portrait. The CV retains the original personal photo.
- A compact Beyond Research section reflects interests expressed during the design conversation: traditional ornament, mythology and starlight, and interactive creative work. Visitors can change the pattern, reconnect an abstract network or open the real atlas. The texts do not invent personal experiences.
- The celestial atlas uses 6,285 HYG catalog stars, all 28 mansion asterisms, 20 familiar constellations and five additional patterns, with 378 star-to-star line segments derived from Stellarium. Search, object selection, member navigation, camera fly-to, zoom and date controls have visible effects. Astronomy Engine computes geocentric positions for Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, the Sun and the Moon. Earth is the observing reference, not a plotted planet. No device location is requested: this is a celestial-sphere atlas, not a live view of the local horizon.
- The object directory retracts to the left on every screen size. Highlights, Solar System, Patterns and Mansions provide clear entry points; searches span all categories, show the result count and can be cleared. Selecting an object retracts the directory so the sky remains available. Focus colours are scoped to the atlas rather than inherited from the page theme.
- The CV remains a hidden easter egg after three consecutive actual Venus activations. There is no visible instruction, progress counter or wrong-answer message. This is an interaction, not authentication or protection for static content.
- Hero objects and all four research scenes support dragging, ordinary wheel zoom, touch dragging/pinching, and keyboard controls. Research phases cycle approximately every three seconds.
- Publication constellations respond to filtering; education artwork uses continuous motion with reduced redraw overhead.
- Chinese titles and body text use separate typographic levels. Latin body text specifies Times New Roman; the English homepage display name is the Great Vibes exception; journal names and verified gene symbols are italic. Protein and pathway names remain upright. Original publication titles and authors are preserved.

Reduced-motion preferences, global pause, hidden tabs and offscreen canvases are respected. Phone, tablet portrait/landscape and desktop layouts adapt to CSS viewport size, including 2K/4K. Chromium and WebKit simulations cover small-screen layout and interaction. They are not physical iPhone/iPad tests.

## Research representation

Education is recorded as undergraduate studies (2019–2024), the master's phase (2024–2026) and the doctoral phase (2026–present) of an integrated master's–PhD track at Harbin Medical University. No completed doctoral qualification is implied.

The artistic covers connect to genetic susceptibility, microbiome/immune/metabolic relationships, causal inference, neurogenetics, computational platforms and the exploration of AI-assisted research. They are conceptual art and not experimental measurements or literal molecular models. The papers listed were not published in the seven cover-reference journals.

Citation badges explicitly name Crossref, link to their data explanation and hide unknown or zero counts. Every paper retains a Google Scholar search link; Google Scholar counts are not scraped. See assets/citation-notes.md.

## Assets

Three.js and Astronomy Engine are vendored under MIT. Chinese font subsets and the Great Vibes display font retain SIL OFL license files. Derived stellar data retains CC BY-SA attribution in assets/star-catalog-license.md. The supplied handwritten WX mark is preserved in a local mask. WebP encodings retain the artwork dimensions and composition. Unused PNG originals are archived outside the deployable folder, reducing the complete site from about 32 MiB to about 7.8 MiB. The archive is not a runtime dependency.

See assets/research-map-notes.md, assets/artwork-notes.md, assets/artwork-prompts-v11.json, assets/star-map-notes.md, assets/molecular-model-notes.md and assets/microbiome-notes.md for scope and sources. There are no analytics, PDF-download or print controls.

