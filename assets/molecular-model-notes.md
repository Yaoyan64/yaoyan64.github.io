# Visualization notes · version 10

## Version 10: shared controls and live palettes

All four research illustrations now use independent quaternion view controls, ordinary wheel zoom, one-finger dragging and two-finger pinch. Zoom ranges from 0.65 to 2.0; buttons and keyboard arrows / plus / minus / Home provide alternatives. Automatic scene switching is suspended during dragging and resumes after a 3-second interval. Geometry stays prebuilt; manual orientation wraps the existing animated scene. These controls also work with Canvas fallback.

Five site palettes recolor material colors, vertex colors, instance colors and corresponding fallback strokes from stable original colors. The data landscape adopts the same primary/accent/secondary colors; its geometry, sampling, wave equations, speeds and alpha values are unchanged.

## Direct manipulation and timing

Version 9 gives the helix, AI layers, bacterial cluster and data knot independent manual orientations. A drag is assigned to the form under its starting point; empty-space dragging rotates the whole constellation. Both horizontal and vertical movement contribute to a quaternion rotation, without the previous small pitch limit. Pointer capture keeps the drag continuous when it crosses the canvas edge. Reset clears all manual orientations and restores zoom. Arrow keys act on the selected form; Escape selects the whole scene.

Ordinary wheel input over the artwork zooms directly, with no modifier key required. Wheel delta modes are normalized; outside the artwork, the page scrolls normally. The touch surface supports rotation in both directions and two-finger pinch. The surrounding oval focus outline has been removed; keyboard focus is indicated at the nearby BIO × AI title. A narrow alpha fade softens the visual canvas boundary.

The three research carousels, microbiome tour and marginal poem now advance approximately every 3 seconds. Manual selection restarts the same interval. They stop for global pause, reduced motion, offscreen content and hidden documents. Carousel timing uses real active elapsed time rather than the capped per-frame animation delta.

## Hero: a shared BIO × AI constellation

Version 8 retains the lightwoven helix as one part of a larger composition. Three independent forms remain visible around it: layered AI attention/vector artwork, a cluster of stylized rod-shaped and coccoid bacteria, and a folded data knot. Different motion rates and sparse travelling packets connect the composition. Their arrangement contracts on narrow screens while the central helix becomes smaller.

The AI matrices and token-like tiles are conceptual artwork, not model outputs or measured attention. The bacterial cluster has smooth membranes, dispersed small inclusions and no membrane-bound nucleus. A small surface appendage is an illustrative bacterial feature, not a species identification. Colors do not identify beneficial or pathogenic species. The knot illustrates data flow rather than a measured protein or other molecular structure.

`hero-universe.js` owns geometry and its Canvas fallback; it creates no independent renderer, animation loop or network request. The existing page loop supplies time, viewport state and pause/reduced-motion state. Clicking a form selects it and reveals a brief bilingual response. Keyboard keys 1/2/3 select AI/microbes/data; Escape selects the whole scene; Enter/Space triggers light. Selection creates a still highlight in paused/reduced mode. Rotation, zoom and reset retain their existing controls.

`WX_SCENES.info()` reports `heroVersion: 10`, `heroStyle: biomed-ai-universe`, `heroTopic`, `heroSelectionCount`, projected `heroTargets`, `heroOrientations` and `heroInteraction` for interaction verification. The canvas exposes `data-hero-elements` and `data-selected-topic`. Research geometry and the data-landscape algorithm retain their previous code; research transitions use real active elapsed time.

## Hero: idealized lightwoven helix

The hero is a **mathematically generated decorative double helix**. It does not trace measured PDB coordinates and must not be presented as a specific molecule, molecular surface or molecular-dynamics simulation.

Version 7 uses two closed lenticular ribbons with 384 longitudinal segments and 32 segments around their rounded cross-section. Welded seam normals, tapered round tips and a gentle crown keep the silhouette continuous during close inspection. Vertex colors blend jade, lake blue, pearl, iris and a restrained rose accent along the ribbons. A locally generated studio environment, polished selvedges and three fine surface filaments produce layered reflections. The geometry remains fixed while the complete sculpture rotates.

A short travelling light accent is shaded directly into each ribbon, with four small edge packets and limited tails. A soft wave crosses the ribbons automatically every 7.4 seconds, or from the clicked location on a ribbon. Two thin spatial orbit paths and 20 instanced motes support the composition. They represent decorative flow, not energy transfer measured in a molecule.

Regular translucent connectors retain complementary A–T / C–G letter pairs as an optional visual motif. They are not atom-level base shapes, hydrogen-bond counts, experimental measurements or the 1BNA deposited sequence. The separate DNA pairing activity continues to teach complementary bases and antiparallel direction explicitly.

Interaction: damped rotation; zoom 0.75–1.65; direct wheel zoom over the artwork, keyboard +/- and two-finger pinch; reset returns to zoom 1. Wheel scrolling outside the artwork is unaffected. A click, tap, Enter or Space triggers the light wave; a drag or pinch does not. In global pause or reduced-motion mode, a requested pulse becomes a stationary local highlight. Automatic motion stops, and existing zoom and rotation controls remain available. Offscreen and hidden scenes retain the common rendering guards.

`WX_SCENES.setZoom(value)` sets the clamped zoom target. `getZoom()` reads it; `zoomchange` publishes `{ zoom }`. `reset()` restores all manual orientations, accumulated rotation, zoom and the whole-scene selection. `pulseHero()` requests a central pulse. `info()` keeps the compatible `silk-helix` / `idealized` representation alongside the version-10 composition fields and pulse count/source/origin/age. The hero canvas publishes matching version/material information plus `data-pulse-count`, `data-pulse-source`, `data-pulse-progress`, and `data-pulse-state`.

Canvas fallback renders the same closed ribbon composition using local perspective, depth ordering, smooth color changes, moving highlights and fine orbit paths. It works even when Three.js is unavailable and retains click/keyboard pulses, rotation, zoom and two-finger pinch.

The older `1BNA.pdb` / `molecule-data.js` files remain in the source archive for provenance of earlier versions. They no longer control the hero geometry.

## Research scene changes

Each stage now owns a different prebuilt composition. The selected stage changes the visible objects and layout, not just highlights on a fixed picture. Two compositions crossfade with a short spatial entrance over 0.95 seconds. Old captions leave before the new caption appears so their text does not overlap. In explicit pause or reduced-motion mode, selecting a phase shows its final composition immediately.

The page controller owns cycling. `scenes.js` has no competing phase timer. Existing APIs remain available: `setLLMStep`, `setTokenFocus`, `setCausalFocus`, `setOmicsLayer`.

For verification, each research canvas publishes `data-scene`, `data-rendered-scene`, `data-visible-scenes`, `data-scene-version="6"`, and `data-transition-progress` from 0 to 1. `WX_SCENES.info().researchScenes` exposes the target phase, previous phase, transition progress and visible weights for each WebGL composition. A stopped animation can therefore be compared across phases without confounding motion over time.

## LLM / Transformer illustration

The three distinct views are:

- **Tokens:** floating input fragments connect to separate embedding-vector bars along an elliptical orbit.
- **Attention:** a new arrangement of three overlapping attention panels receives the token connections; masked future positions remain muted in a decoder-style triangular mask. Selected input fragments emphasize their attention row.
- **Generation:** output tokens appear sequentially above two curved satin ribbons, with a following cursor and traveling light particles.

The conceptual reference is the Transformer architecture in *Attention Is All You Need*: https://arxiv.org/abs/1706.03762. The panels illustrate the idea of multiple heads; they are not measured attention maps, and neither the heads nor embedding bars depict a trained model's actual values. Input/output fragments are predefined illustrative sequences. This site does not run language-model inference or tokenize input text with a specific model's tokenizer.

## Causal inference

The selected phase now changes the main motif:

- **Instrument:** a schematic DNA segment with three highlighted genetic loci.
- **Exposure:** layered smooth distribution curves and incoming evidence paths.
- **Outcome:** schematic effect intervals beside an outcome network.

A small persistent diagram shows instrument → exposure → outcome, with confounder paths toward exposure and outcome. The effect intervals are illustrative artwork, not estimated effects or uncertainty from a study. Selecting a phase does not perform causal inference or demonstrate that an instrument satisfies validity assumptions.

## Omics

Four different compositions present levels of evidence:

- **Integration:** three circular data planes connected by rising light paths.
- **Genome:** a stylized sequence helix with complementary-looking connectors and separate base-letter tiles.
- **Transcriptome:** several RNA-inspired strands of different lengths leaving a common transcription motif.
- **Proteome:** a continuous rounded ribbon with two orderly helical segments and a broad connecting turn.

The RNA motif does not model a specific cellular compartment or transcription complex. The protein ribbon is generated art rather than an experimental structure, folding prediction or simulation. Neither view is intended to give atomistic or sequence-specific information. The separate DNA pairing activity retains explicit biological pairing rules.

## Data landscape and rendering

The flowing data landscape algorithm is **unchanged from version 4**. It is generated art, not a measurement of a person's biomedical data.

Rendering targets 60 animation frames per second where the browser/device can sustain it. Offscreen scenes stop rendering after their initial frame; hidden tabs pause. Paused stage changes show their final composition immediately; a short settling window still serves direct hero rotation and zoom controls. Reduced-motion settings, explicit pause and Canvas fallback remain supported. Canvas fallback has the same ten distinct research compositions, controlled by the same APIs, including when Three.js is unavailable. All canvas-rendered Latin text uses Times New Roman, with a Chinese fallback for Chinese glyphs.

Three.js 0.160.1 is bundled locally under its MIT license (`vendor/THREE-LICENSE.txt`). No remote model, image, font or library is fetched by these scenes.
