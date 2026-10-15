VERIFIED for the sample and scope recorded in the numeric evidence below.

# Rendering fidelity record

The converter preserves design structure and renders an interactive SVG canvas, using a vector format supported by browsers. Matching the native Figma display also requires matching its layout, paint and raster behavior. This record separates corrections applied to the converter from experiments that failed that comparison.

## Retained measured result

The retained production snapshot measures **81.17% exact RGB (red, green and blue) pixels** and **99.33% with the pixelmatch image comparison library at color tolerance 0.1**, including antialiasing differences. The measurements cover 47 visible screen roots, 71,282,874 pixels, at device pixel ratio (DPR) 1 and matching native export dimensions. None of those screens matches every pixel exactly. These scores do not establish parity for hidden reflowed components, other files, other operating systems or other zoom levels.

The [public numeric snapshot](evidence/fidelity-summary.json) retains counts, per-screen results, RGB errors and structural similarity. Source designs, native PNGs, browser captures and the self-contained visual comparison remain local and are excluded from the public repository. This checkout can inspect the retained measurements but cannot reproduce their image comparisons without those inputs. Transparent references were composited over white in separate comparison copies.

| Stage | Exact RGB | Color tolerance |
| --- | ---: | ---: |
| Initial measured baseline | 72.861004% | 97.302236% |
| Geometry, paint, layout, masks and emoji corrections | 81.047025% | 99.067974% |
| Recorded render with local glyph baseline correction | 81.169269% | 99.330627% |

The first two rows refer to frozen earlier captures. The last row refers to the production stage recorded in the public numeric snapshot. Repeated browser captures have produced small RGB differences despite identical HTML. The paired text experiment therefore uses its own fresh before and after captures, rather than subtracting scores from different capture runs.

This snapshot predates the publication review changes to core extraction, sibling ordering and bundle validation. Fidelity after those changes remains UNKNOWN until the native comparison is repeated. The renderer hash identifies the measured implementation; it does not establish that all pipeline files are unchanged.

## Conversion flow to preserve

1. Check the archive or bare stream variant and decode the saved binary schema. Retain the original file hash and parser version in the extraction manifest.
2. Decode referenced command and glyph blobs from that same input. Generate geometry sidecars as part of conversion. A temporary sidecar from an earlier file is not a valid dependency.
3. Normalize nodes, then resolve flattened instances against source definitions and saved overrides. Preserve source IDs, source geometry, visibility and inherited variable modes.
4. Apply saved size and local transform overrides before layout. Reflow affected component instances when visibility changes. Keep derived paint geometry separate from node placement.
5. Resolve paint alpha once. Preserve source images. Generate separate derivatives for adjusted static image paints and retain original bytes for animated assets.
6. Render selectable SVG nodes, masks, effects and outlined glyphs. Source JSON retains fractional glyph positions. Outlined glyph baselines are rounded in local design coordinates when creating their SVG uses, before inherited transforms. Native emoji text follows its separate font metrics path.
7. Embed licensed fonts listed in the local manifest. Saved outlines preserve their available text shapes; missing font binaries still affect browser fallback text and copied CSS in another application.
8. Keep interaction tied to source node IDs. Selection, the layer tree, the Design inspector, CSS copying, pan, zoom and empty-canvas deselection remain part of the generated document.
9. Rebuild through both CLI and upload API. Compare full HTML bytes, input hash, font configuration and source hashes. Identical HTML establishes assembly repeatability, not pixel equality with Figma.
10. Capture visible source roots at native export size. Remove only outer canvas placement. Wait for fonts, decoded images and animation frames. Preserve frame overflow when it is part of the native export.
11. Compare decoded RGB values on the same declared backdrop. Do not resize, register or align candidate images to improve the score. Pool pixel counts for the area-weighted percentage and keep per-screen results.
12. Audit counts independently, review the actual app, then generate the standalone comparison and update this record.

The [process guide](PROCESS.md) covers setup, CLI, API and local tool usage. The [MCP inventory](FIGMA-MCP.md) distinguishes file-backed tools from features that require a hosted Figma account.

## Corrections applied

### Missing geometry and precision

The early reusable pipeline copied a renderer that depended on geometry extracted elsewhere. Successful conversion and identical HTML hashes did not reveal the omitted outlines. Command and glyph extraction now runs on the current input. Geometry decoding retains Float32 values at full serialized precision instead of rounding coordinates to six decimals.

A separate line-paint mistake replaced a deliberate `fill="none"` while resolving a stroke. Zero-width or zero-height line geometry also needs to survive eligibility checks. Paint reference lookup is separate from shape creation, so resolving a stroke does not overwrite the line's geometry or fill state.

Uniform rounded corners use native SVG rounded rectangles where the renderer creates a primitive. Unequal corners use circular arcs. The earlier quadratic corner approximation changed the silhouette. Cached source contours remain available for geometry that cannot be safely replaced.

### Instance overrides and layout

A flattened decoder can scale an entire source instance even when Figma saved authoritative local dimensions and placement for a descendant. Applying that scale again stretches parts such as the home indicator. Explicit derived size and node transform overrides now take precedence, and a local placement override without a size can retain the raw source size.

Paint geometry transforms and node transforms are distinct. Applying a saved placement in both places doubles the translation or scale. Nested override matching retains their separate roles. Exact leaf geometry is not transformed twice.

Hiding a nested icon changes layout in its parent button. Visibility changes restore the relevant raw descendant geometry and trigger layout for that instance scope. Explicit derived sizes remain fixed during available-space allocation. Rotated child alignment uses transformed bounds, which matters for the 180-degree chevron variants. A later style-only merge must not overwrite an earlier explicit size.

### Variables, masks and effects

Saved solid-paint opacity can already contain a bound color variable's alpha. Multiplying both again makes the paint too faint. A stable opacity factor prevents that multiplication from repeating when modes resolve again. This policy is shared between Python payload preparation and runtime JavaScript mode handling.

Outline, alpha and luminance masks require different operations. Outline masks use valid direct clip shapes. Alpha and luminance masks render their actual paint, inherited modes and overrides. Treating all three as geometry clips loses opacity and color behavior. A grouped path arrangement inside a clip also rendered empty in the browser control, so that invalid construction was removed.

Shadow spread precedes blur and offset. Native shadow controls also exposed the importance of the correct `color-interpolation-filters` SVG attribute and a hard source-alpha exclusion for outside shadows. Background blur uses a clipped backdrop surface. Foreground and glass fallbacks retain their separate behavior.

### Adjusted images and emoji

CSS brightness, contrast and saturation approximations did not match the saved image adjustments. Static image derivatives now follow the recovered gamma, Lab adjustment, exposure, luminance and saturation operations. Processing uses tiled float planes and leaves original image assets intact. Neutral settings need no derivative. Animated images keep their original frames and browser fallback treatment.

Near equality of an adjusted image at original resolution does not establish equality after scaling into a scene. Sampling, intermediate precision and final composition remain separate measurements.

Some saved emoji glyphs contain placeholder rectangles rather than color artwork. Rendering those paths produced boxes. Emoji code points and layout metadata are preserved and drawn as native color text. The local Apple face uses its own measured size adjustment; another platform's fallback does not receive that adjustment blindly. Ordinary outlined text is unaffected by that emoji path.

### Local glyph baseline rounding

The source retained a baseline of `24.503999710083008` for the 24px Vital Signs title, while the corresponding native SVG placed it at local baseline `25`. Other matched text used offsets in both directions. The retained trace matched 59 text nodes with nearest-integer baseline residual below `0.00004375px`; this was evidence for rounding, not a fitted frame translation.

The paired experiment kept glyph paths, x positions, scale, paints and raw data unchanged. Every measured screen improved in both exact pixels and color tolerance. Its exact gain was 88,198 pixels; tolerant mismatches fell by 187,222. The production change is a direct `Math.round(glyph.y)` at outlined SVG use creation. Color emoji and source geometry remain unchanged.

The trace covers the saved sample, including Neue Plak and SF Pro. Negative half-integer positions, combining mark behavior in other files and other native font raster paths remain UNKNOWN. The public snapshot retains the paired metrics under `experiments.glyphBaselineRounding`. Native trace files remain local.

## Experiments retained but rejected

| Experiment | Observation | Decision |
| --- | --- | --- |
| Combine outlined glyph paths | Some exact pixels improved, but tolerant mismatches and mean RGB error worsened. | Keep individual glyph rendering. |
| Replace outlines with available Inter text | Changed exact shapes and exposed missing bullets and UTF-16 indexing issues around emoji. | Keep saved glyph outlines. |
| Apply a global coverage power | The observed shader exponent did not improve the tested native title or home indicator alpha. | Do not add a coverage filter. |
| Replace the document renderer with the vendored canvas engine | CPU and actual WebGL surface controls had mixed results. Exporting PNG from a WebGL scene used the same export raster result as CPU in those controls. | Keep the current renderer. |
| Replace all eligible fill-only cached shapes with analytic primitives | Pooled exact pixels improved slightly, but four screens regressed in exact pixels and one in tolerance. | Do not integrate this broad substitution. |
| Change image sampling kernels | Scale-aware bilinear gave a small crop improvement. Cubic, Lanczos, mipmap, box integration and tested post-sampling filters did not establish a general improvement. | Keep the current production sampler. |
| Route pre-sampled textures back through SVG | Stable raw canvases did not guarantee stable final SVG screenshots. Some full-frame scores regressed. | Do not adopt the texture route. |
| Force a software browser backend | Three observations per backend were stable for the two measured screens, but native fidelity changed in different directions. | No application-wide backend switch. |

The experimental `image_sampling.py` and `src/controlled-paint.mjs` modules are retained research code. They are not imported by the production conversion flow. Their presence is not a claim that a replacement renderer shipped.

## Mistakes to avoid when repeating the work

- A screen screenshot preserves appearance but does not provide editable or selectable design components. Use the source scene graph for the interactive app.
- A converted file can be structurally complete and still have wrong paint. A successful build, a matching HTML hash and a visually plausible zoomed-out screen are separate checks.
- A color-tolerant score is not pixel perfection. Report exact RGB separately and retain the screen-level failures.
- Do not assign duplicate native frame names by whichever image happens to compare best. Resolve node identity and export naming independently.
- Do not compare an isolated child export with a whole-screen crop without checking export bounds and paint behavior. The native title's isolated ink export was 111 by 23, while its design node was 112 by 36.
- Do not assume native SVG and native PNG use identical raster paths. The camera's isolated and whole-screen SVG exports contained identical adjusted image bytes and the same sampling transform, yet their corresponding native PNG interiors differed. A freshly exported whole screen was byte-identical to the earlier reference, so replacing that reference would have hidden the discrepancy.
- Set viewport dimensions before detaching the editor body in capture code. A pending resize handler can otherwise inspect DOM nodes removed by the harness. Retain any failed run and its error evidence separately.
- An SVG matrix can use spaces; `DOMMatrix` expects CSS matrix syntax. Parse the recorded six values when converting between those representations.
- A canvas engine's identity camera can center world origin in the viewport. Calibrate its coordinates with a known rectangle before measuring clipping or coverage.
- Check browser tool file access roots before loading a script. A rejected loader invocation does not produce a valid capture.
- Use bounded searches on extracted metadata. A broad text search over self-contained HTML can print embedded image data instead of useful evidence.

## Inspect or repeat the measurements

The public snapshot records the source file hash, renderer hash and matching CLI/API output in `productionIdentity`. Its `stages.production` contains the frozen measurement. Its paired glyph experiment keeps separate before and after counts, because repeated captures can differ slightly even with identical HTML.

To inspect published percentages, divide each stage's `summary.strictRgb.exactPixels` by `summary.pixelCount` and multiply by 100. The tolerant result uses `summary.pixelmatch` with threshold 0.1 and `includeAA: true`. The snapshot also retains per-frame counts and independent Pillow audit summaries.

To measure a new design:

1. Save the original `.fig`, its SHA-256, renderer revision and font manifest.
2. Export each measured frame from Figma at scale 1, retaining source node identity and export bounds.
3. Convert the same input with Openfig, then capture each corresponding SVG root at DPR 1 after fonts and images are ready.
4. Preserve native export overflow and declared backdrop. Do not align or rescale captures to improve the result.
5. Compare exact decoded RGB and pixelmatch at the declared tolerance. Pool counts and retain individual frame results.
6. Independently recompute exact counts and RGB error sums, then inspect the largest discrepancies in the actual app.

Reproducing the historical sample's image comparison requires its locally retained source and PNGs. The public numeric snapshot supports arithmetic checks and review of the reported scope, rather than recapturing that private design.

## Evidence and limits

VERIFIED. The production stage records completion at `2026-10-15T04:20:11.559978+00:00`. Its HTML SHA-256 is `63fc8bc72931a0b1ca3c35a4e015e9abb805e75dd0b9e0b77fd9293101289147`. The [numeric evidence](evidence/fidelity-summary.json) preserves production, baseline and paired-experiment counts with hashes of their source records.

DRAFT. Native image sampling and paint coverage rules remain UNKNOWN. Literal 100% parity has not been reached. These experiments establish neither a browser rendering ceiling nor universal determinism. Missing fallback fonts, hidden preview reflow, arbitrary zoom, other input files and other platforms remain outside the measured scope. Hosted account tools were not validated by these local render checks.
