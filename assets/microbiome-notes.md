# Microbial-community illustration

This module presents the user's stated interests in gut microorganisms, probiotic research and pathogenic mechanisms. It is an educational research illustration, not a microscopy image, an experiment, a species-identification tool, a measured microbiome or a health recommendation.

The scene contains generic rod-shaped and spherical bacterial forms. The translucent envelope, irregular nucleoid line and internal granules are schematic, not a species-specific ultrastructural reconstruction. Bacteria never contain a membrane-bound nucleus or eukaryotic organelles. Shapes, colors, sizes and positions do not classify a bacterium as probiotic or pathogenic. Moving points and connection paths are graphic devices, not physical bonds, measurements of abundance, or molecular trajectories.

The three controls now select three different visual compositions. Probiotic research shows generic strains linked by an abstract metabolic-signal flow to a host-signalling symbol; the orbital pearl is not a reconstructed host cell or receptor model. Pathogenic mechanisms show a polarised epithelial interface, with apical microvilli, junctions and basal host-cell nuclei, alongside nearby bacteria. The drawing illustrates a research interface, not demonstrated invasion or barrier failure. Community interactions show three generic clusters exchanging conceptual signals; neither cluster size nor any edge represents a measured ecological relationship. Probiotic effects depend on the particular strain and relevant context. Pathogenic or opportunistic behavior depends on microbial factors and host/environmental conditions. No claimed treatment effect or patient data are used.

References used to bound the presentation:

- NIH Office of Dietary Supplements, [Probiotics: Health Professional Fact Sheet](https://ods.od.nih.gov/factsheets/Probiotics-HealthProfessional/), especially Identification and Mechanisms of action. Supports strain-specific interpretation and the focus on microbial metabolism, host interactions and barrier mechanisms.
- OpenStax, [Unique Characteristics of Prokaryotic Cells](https://openstax.org/books/microbiology/pages/3-3-unique-characteristics-of-prokaryotic-cells). Supports generic bacterial morphology and the distinction between a nucleoid and a membrane-bound nucleus.
- [Mucolytic bacteria license pathobionts to acquire host-derived nutrients during dietary nutrient restriction](https://pmc.ncbi.nlm.nih.gov/articles/PMC10903618/). Primary research illustrating context-dependent pathobiont behavior and microbial metabolic interactions.
- [A host–microbiota interactome reveals extensive transkingdom connectivity](https://www.nature.com/articles/s41586-024-07162-0), Nature 628, 171–179 (2024). Primary research supporting host–microbiota interactions as a research topic.

All animation and controls run locally. No external model, analytics, health data or identification service is called.

## Interaction and motion

The three perspectives have independent geometry, layouts and particle paths: strain-to-signal flow, an epithelial interface, and an interconnected three-cluster community. A finite 1.1-second eased transition blends these full compositions with depth, scale and position changes. The three silhouettes remain clearly different when all motion is frozen. Rings remain visual framing devices. Bacterial identity colors do not switch between good/bad classifications.

The local tour starts automatically and advances every 3 seconds of active on-screen wall-clock time. A manual perspective selection begins its transition immediately and restarts the same 3-second interval. Dragging, keyboard rotation and reset also restart this interval; dragging itself suspends progression. The carousel and transition timing use real foreground elapsed time, independently of the capped motion delta, so slower rendering does not stretch the tour. Pause/resume is available beside the progress track. Global motion pause and reduced-motion preference stop autonomous motion and progression; direct selection renders its final state. The progress clock does not advance while off-screen or in a hidden tab. Motion uses the browser animation frame with damped camera rotation and gentle drift. Meshes and particle paths are created once; bacterial granules and microvilli use instancing.

All visible English uses Times New Roman. The canvas fallback has the same three compositions, finite transitions, pause behavior and keyboard camera controls as the WebGL illustration. Screen-reader labels update with the selected scene; automatic rotation does not trigger live announcements. `WX_MICROBIOME.info()` exposes the active scene, transition progress, weights, visibility and clock for verification. Scene changes dispatch `researchscenechange` with module, scene, index, count and automatic fields, and synchronize scene attributes on the research card.


## Version 10 controls

The module shares the research-view controls with the other three research illustrations: two-axis quaternion dragging, ordinary wheel zoom, two-finger pinch, zoom/reset buttons and keyboard arrows / plus / minus / Home. Zoom range is 0.65–2.0. Site palette changes recolor the artwork without assigning biological identities to colors. All controls remain local and functional in Canvas fallback.
