VERIFIED against the source references and numeric evidence below.

# From a local Figma file to an inspectable canvas

Openfig grew out of a specific frustration: the converted file opened, but the screens still looked wrong. The first result used images. The next result exposed layers but changed styles, mishandled icons, and piled library components on top of one another. Repeating the conversion produced the same mistakes.

This guide records the conversion flow and the corrections that mattered. It also explains how to inspect a new file without depending on the temporary files used during development. The supplied design now has selectable layers, a Design inspector with CSS, embedded assets, component property resolution, and inherited color modes. The sample has been compared visually with the Figma desktop app and measured against native PNG exports for its 47 visible screen roots. The retained measured production snapshot reaches 81.17% exact RGB match and 99.33% with color tolerance. The original baseline and its scope are retained below. [The fidelity record](FIDELITY.md) documents the later corrections, failed experiments, current comparison and remaining gaps.

## Run the application

Install the locked dependencies and build the workspace from the repository root:

```sh
pnpm install --frozen-lockfile
pnpm build
```

For development, start the app with:

```sh
bun dev
```

That command builds the workspace and starts the local application. The upload page, document APIs, and local MCP endpoints share the same server. The default address uses loopback port 8787. To start an already built checkout directly:

```sh
pnpm run openfig -- serve --host 127.0.0.1 --port 8787
```

Drop a `.fig` file onto the page or choose it through Open file. After upload, the workspace fills the window and retains the Openfig icon, name, document identity, navigation, and download actions. Canvas, Inspect, Design tokens, Assets, Tools, and File information use the same uploaded document. Download HTML saves the standalone viewer; Download bundle saves the extracted data and assets needed for further inspection.

The package directories divide implementation responsibilities. They are built together and served through one application. Keep existing source packages when changing this flow.

### Convert a file without the page

```sh
pnpm run openfig -- convert design.fig --output design.html
```

The destination must be new. Add `--force` when intentionally replacing an existing generated HTML file. Input and output must differ. The command prints the source hash, parser version, normalized node count, output size, and font directory.

To retain the extracted data for inspection:

```sh
pnpm run openfig -- extract design.fig --output design-bundle
```

Conversion uses temporary extraction data unless the server requests a retained document bundle. Extraction writes a persistent bundle to the chosen destination. Neither operation needs Figma authentication to read the local file.

### Use the headless API

The server accepts the `.fig` bytes as the request body. Supply the filename through `X-Filename`; encode that header value when it contains characters that need URL encoding.

```sh
curl --fail-with-body \
  -H 'Content-Type: application/octet-stream' \
  -H 'X-Filename: design.fig' \
  --data-binary @design.fig \
  http://127.0.0.1:8787/api/documents
```

This creates a document and returns its identifier and preview, HTML download, bundle download, and MCP URLs. Use the returned identifier for subsequent document requests. The tool catalog is available through `GET /api/tools`.

For a conversion whose response is the HTML itself:

```sh
curl --fail-with-body \
  -H 'Content-Type: application/octet-stream' \
  -H 'X-Filename: design.fig' \
  --data-binary @design.fig \
  http://127.0.0.1:8787/api/convert \
  --output design.html
```

That request releases its temporary bundle after streaming the response. An uploaded document remains available in the running server until deleted or cleaned up during normal shutdown. Save a bundle or HTML file when it needs to survive that session.

## What the conversion actually reads

A `.fig` file can contain a ZIP archive or a bare `fig-kiwi` stream. The ZIP used for the supplied sample contains the binary canvas, metadata, a thumbnail, and image assets. The thumbnail is only a preview asset; it does not contain the selectable document structure.

The canvas stores binary document records and referenced binary blobs. Openfig decodes the file's embedded schema, reads those records, and keeps both raw data and a normalized representation. Normalization gives later tools consistent node identifiers, parent and child relationships, typography, paints, transforms, tokens, and asset references.

Keep the input unchanged during conversion. The archive reader loads ZIP entries and then reads the source path again to calculate its hash. For a bare stream, it hashes the bytes it parsed. A bare stream also lacks the ZIP's separately packaged raster images and thumbnail; the extraction manifest reports unavailable image assets when referenced images cannot be supplied.

### The generated intermediate files

| File or directory | Purpose |
| --- | --- |
| `manifest.json` | Identifies the input hash, parser version, variant, node count, and extraction warnings. |
| `document.raw.json` | Retains decoded document records used for overrides, component properties, variable bindings, and source relationships. Binary blob contents need a separate decoding step. |
| `document.agent.json` | Provides a normalized document tree for inspection, search, context export, and the renderer. |
| `flattened-nodes.json` | Records resolved instance descendants, effective transforms, sizes, paints, text, and geometry from the Grida Figma reader. |
| `command-paths.json` | Contains decoded fill and stroke command paths, keyed by source blob identifier. |
| `glyph-paths.json` | Contains the saved outline paths used by individual text glyphs. |
| `assets/images/` | Contains extracted raster images. |
| `assets/vectors/` | Contains referenced vector networks and their SVG representations. |
| `tokens/` | Contains color, typography, effect, font, and variable information. |
| `references/` and `comparisons/` | Hold reference PNGs and comparison results added through the inspection tools. |

The raw and flattened documents answer different questions. The flattened tree resolves instance descendants and geometry. The raw records retain relationships that flattening can omit, including property assignments, derived-only overrides, and variable modes inherited from an enclosing section. The renderer combines them.

## The processing sequence

### 1. Validate the request and create its working directory

The CLI validates file extension, source type, destination, and overwrite intent. The server applies an upload byte limit and saves the incoming body to a temporary file before conversion. It forwards the uploaded basename to the renderer so the viewer identifies the original design.

Archive parsing also limits entry count, individual uncompressed entry size, and total uncompressed size. These checks belong to file processing; a successful HTTP upload alone does not establish that the archive can be decoded.

### 2. Extract the normalized bundle

The core extractor reads the binary document, builds the normalized hierarchy, exports image and vector assets, and writes tokens and a manifest. Preserve the raw document alongside the normalized one. Several later corrections depended on source fields that had not been carried into the first rendered model.

### 3. Decode command and glyph blobs from this input

The geometry extractor walks the input's node records for `commandsBlob` references, including references inside derived instance data. It reads the referenced bytes with the file's blob base index and decodes the path commands. Supported command records describe close, move, line, quadratic, and cubic operations, with little-endian floating-point coordinates.

This produces both geometry sidecars from the current file. A malformed referenced path reports its blob identifier. Empty glyph paths remain valid entries for characters such as spaces.

Never borrow sidecars from another design or rely on a previous temporary extraction. Blob identifiers belong to the input document. The reusable path now performs this decoding during both extraction and conversion.

### 4. Resolve instance descendants

The Grida reader resolves the document and writes the flattened tree. Each entry retains its source identifier, instance path, parent, children, override key, geometry, and effective style fields.

This stage does not finish the renderer's work. In the supplied file, it retained the placeholder text `Button` even though the raw instance assigned `Add Reading`. It also retained cached source colors where an enclosing section selected a different color mode.

### 5. Apply source properties and derived overrides

Component properties connect an instance's values to fields on nodes inside its source component. Openfig resolves text, visibility, and symbol assignments through those property references and their parent definitions. It combines explicit overrides with paths that appear only in derived data.

Saved text layout supplies glyph outlines, baselines, and effective size. Changed text and icon visibility can alter an auto layout container, so the affected container recalculates child positions using its spacing, padding, alignment, and sizing data. Nested override matching includes intervening instance keys so separate uses of the same component do not receive one another's overrides.

A swapped icon uses the selected source symbol. Runtime source rendering resolves actual override keys and forwards nested overrides to the selected symbol. Source geometry remains available when a component is drawn as an instance elsewhere in the document.

### 6. Resolve inherited color modes

A paint can bind to a variable whose value changes with a collection's selected mode. Openfig preserves that binding, follows aliases, and finds the applicable mode through the node's ancestors. The ancestor search includes raw relationships omitted from the flattened tree.

The resolved color is stored with its binding and mode context. When the browser renders a source component inside an instance, it resolves that component's paints again in the instance's context. This keeps a source component's default appearance while allowing an instance to use a dark or light mode selected elsewhere.

### 7. Choose page roots and prepare hidden libraries

Visible pages prefer frame-like candidates that meet the configured minimum screen dimensions. Layer roots are retained separately so the inspector can search smaller components. If no screen candidates meet the minimums, the renderer falls back to visible candidates.

The supplied Internal Only Canvas is hidden in the source. The user explicitly chose to reflow that preview. Openfig detects overlapping roots, assigns preview positions, and also checks overlapping variants inside component sets. Expanded children enlarge their containing preview frames, clipping regions, labels, focus bounds, and selection outlines.

Preview changes use `previewMatrix` and `previewSize`. Source `matrix` and `size` remain available to the Design inspector. Instance source rendering ignores the library preview layout. This distinction prevents a spaced library board from distorting the same component when used inside a real screen.

### 8. Build the standalone viewer

The renderer writes one HTML document containing SVG nodes, a shared node model, embedded raster data, glyph paths, variable definitions, styles, and interaction code. Screens are assembled from their individual SVG layers. The browser's DOM provides node hit targets for selection and inspection.

The output includes page navigation, the screen list, the layer tree, selection outlines, and the Design panel. The panel reports geometry, paints, typography, node details, and copyable CSS. That CSS describes the selected design layer; it is not a responsive application implementation generated from the entire design.

Fonts listed in the selected font manifest are embedded in the HTML. Text with saved Figma glyph outlines can use those shapes directly. Text that falls back to browser text rendering still depends on available fonts and browser text behavior.

### 9. Return the result through the chosen interface

The CLI writes the HTML to its destination. The conversion endpoint streams it and releases its temporary data. The document endpoint retains a bundle and exposes inspection, assets, context export, reference attachment, image comparison, and MCP through that document's identifier.

The API and CLI call the same conversion pipeline. A shared result can still contain a rendering mistake, so visual review remains part of the workflow.

## The mistakes that changed the implementation

### Whole-page images hid the work needed for inspection

I first produced page images. They gave an overview, but clicking a button inside an image could not identify its component, inspect its properties, or reveal its CSS. The replacement builds an SVG scene from document nodes and connects selection, the layer tree, and the inspector to the same identifiers.

The useful requirement was more specific than “show the pages”: preserve the component structure that makes the design inspectable.

### Successful builds concealed a missing geometry stage

The first reusable Openfig pipeline omitted command and glyph extraction. The earlier sample-specific generator had consumed geometry sidecars from a temporary directory. Copying the renderer without automating how those sidecars were created left the reusable conversion incomplete.

The renderer tolerated missing sidecars by substituting empty dictionaries. Its glyph conversion then dropped every glyph whose path was unavailable, and derived fill or stroke geometry disappeared from the model. An inspected pre-correction CLI output contains zero glyph paths and zero text nodes with glyph outlines.

Builds completed and repeated conversions produced identical hashes. The missing outlines survived those checks. The correction was to decode the current input's referenced blobs as a required pipeline stage before rendering, then inspect the resulting sidecars and payload.

### Cached source text was mistaken for the instance's text

The Vitals screen exposed this clearly. Instance `4:3724` uses the large button component. Its source label is `Button`, but the instance assigns `Add Reading`, selects the plus icon, and disables the right icon through component properties.

The old override reader only iterated explicit symbol overrides. The instance's saved eleven-glyph text layout appeared on a derived-only path, so that layout was skipped too. The rendered result showed the placeholder label and an unwanted arrow.

The correction resolves the property references and includes derived-only paths. In the current payload, the label has `Add Reading`, eleven glyphs, an 89 by 11 local text box, and position `(48, 16.5)`. The left slot selects the plus symbol and the right slot is hidden. The affected button recalculates its layout from the resolved label and visible icons.

### Inherited color modes were lost

The logo's source wordmark has a dark cached fill. The Vitals screen sits inside a section that selects Dark mode for the Tokens collection. Its text color variable resolves to white in that mode.

Reading only the source fill or the flattened screen tree missed that section's mode selection. The corrected renderer follows the raw ancestor chain, resolves the variable alias, and carries mode context into browser source-component rendering. The current logo instance resolves white while the source component keeps its default dark fill.

### Vector geometry was treated too much like a single filled shape

The icon problems appeared in stages: unwanted backgrounds, then white shapes or missing parts. Vector networks, filled regions, and expanded stroke outlines need their own paint handling. A bounding rectangle used for masking also needs different treatment from a visible icon background.

The renderer now keeps fill and stroke geometry, per-path paint overrides, masks, and nested symbol context. Follow-up review found a separate zero-axis error: an expanded vertical or horizontal stroke can have a source width or height of zero. Treating that axis as a zero scale collapsed its outline. Both geometry filtering and browser path scaling now preserve the degenerate axis, including paths that touch the node boundary.

Nested override targets are resolved through actual source keys. The earlier runtime helpers treated descendant identifier strings as node objects, which prevented intended overrides from reaching their targets.

### Reflowing the page did not fix a component set inside it

The first internal-canvas correction separated top-level roots. The Chevron set still contained overlapping variants inside its own frame. Moving that frame left the variants stacked together.

The correction descends into hidden component sets, spaces their visible variants, and expands containing preview frames. The source Chevron frame remains 532 by 292; its preview expands to 532 by 544. Review inspected its 56 visible variants and reported no overlapping variant bounds. Its source dash pattern remains `10 5`.

The inspector continues to show source dimensions. Preview spacing is an inspection layout chosen for the hidden library page, so future changes must keep the original dimensions and transforms available.

### Interaction behavior needed its own review

The first canvas did not clear selection consistently when clicking outside a node, and zoom felt slow. Clicking empty canvas and pressing Escape now clear selection. Wheel input pans; Ctrl or Command plus wheel zooms around the pointer. Space plus drag and middle-button drag pan the workspace. Page fit and selection focus use the same camera state.

Zoom and fit transitions use animation frames. Pointer dragging and ordinary wheel panning update directly. Panning has no canvas-edge clamp. The initial load focuses the first screen without selecting it, avoiding a page-wide overview that made the sample screens too small to inspect.

No per-operation timing trace was retained for the earlier slow-zoom complaint. Its latency breakdown and the numerical improvement remain unknown.

### The Style panel also needed correction

The inspector previously emitted a border-like shorthand for vector strokes. Review changed vector output to native stroke width, stroke color, and dash properties, while ordinary framed shapes retain border styling. Numeric letter-spacing overrides now carry their units through resolution.

The generated canvas originally included extra descriptive captions and pan or zoom hints. The user requested their removal. The current renderer removes their markup, related styles, and JavaScript writes. The filename and application identity remain visible.

### Packaging and API details affected repeatability

The CLI now removes a leading argument separator so the documented `pnpm run openfig -- <command>` form reaches the intended command. Required Node type declarations are present for the MCP server package. API failures are classified through explicit parser codes and request conditions, with unexpected failures kept as server errors.

The app's MCP endpoint uses the same server factory as the stdio entry point. HTTP screenshot candidates are confined to the uploaded bundle. File-stream promises are awaited by the request handler, ZIP emitter errors reach the response stream, and reference attachments use serialized index updates with unique temporary names. Normal serve shutdown closes the server so retained document cleanup can run.

## Review a new file without repeating the same mistakes

Start by recording the input size and hash. Keep the file stable while processing it, and retain the extraction bundle when diagnosing a discrepancy.

Inspect the manifest and intermediate data before changing visual styles. Confirm that command and glyph sidecars were created for this input. Trace a wrong element through its source identifier, flattened identifier, component property references, derived override path, and resolved paint context. A node name alone is often ambiguous because the same component can be used in several places.

Then compare the same frame in the Figma app and the generated viewer. Check a whole screen first, then focus a text label, an icon instance, a component with changed properties, and an element that uses inherited color variables. For a hidden library, inspect both root spacing and the variants inside a component set. Check selection outlines and clipping after expanding preview bounds.

Use attached reference PNGs and the comparison tools when a quantitative image comparison is needed. Match dimensions and capture conditions before interpreting a difference score. A visual browser review can reveal a wrong label, missing stroke, or wrong color; it does not supply a measured pixel-parity percentage.

Finally, repeat the conversion through the interface that will be used, including the upload page when that is the user's entry point. Compare output bytes when checking repeatability, and record the visual findings separately. Finalize process documentation after review findings are resolved.

### Where to investigate a discrepancy

| Symptom | Evidence to inspect first | Correction boundary |
| --- | --- | --- |
| Text shape or wrapping changes broadly | Glyph sidecar, saved glyph layout, baselines, and font manifest | Restore source geometry before substituting fonts or adjusting CSS. |
| A button keeps its placeholder label or extra icon | Instance assignments, source property references, derived-only text paths, and affected auto layout | Resolve instance values and visibility before positioning children. |
| A reused component has the wrong color | Paint variable binding, alias chain, and modes on raw ancestors | Resolve the applicable mode in the instance context. |
| An icon is filled, blank, or missing a straight stroke | Fill versus stroke paths, nested target keys, zero-size axes, and boundary filtering | Preserve the path's geometry and paint role. |
| A hidden library looks jammed | Root bounds and component-set child bounds | Reflow the authorized preview layout and expand its containing bounds. |
| A selection outline or clip cuts off reflowed content | Preview bounds versus source bounds | Use expanded preview geometry for interaction and clipping. |
| Two outputs have different hashes | Input hash, font configuration, renderer version, and record ordering | Check deterministic assembly before diagnosing visual changes. |
| Two outputs have the same hash but still look wrong | Native Figma reference and per-node rendered data | Continue fidelity investigation. Hash equality does not locate a visual defect. |
| Upload or tool requests fail | Response body, explicit parser code, and the actual throwing source | Correct the failing stage without guessing from broad words in an error message. |

## Figma MCP and local processing

MCP is the tool protocol used by coding agents to request design information. Openfig exposes extracted local document tools through the running app and through its stdio command. The local conversion can supply saved-file information without a Figma login.

Figma's hosted tools can use live account and document services that a saved file does not contain. Openfig keeps a hybrid connection for those capabilities. Use the [MCP inventory](FIGMA-MCP.md) for the local tool mapping, hosted tool catalog, setup, and authentication boundaries. A local archive cannot establish current account permissions or live collaboration state.

## Publication review corrections

Vector blob identifiers are offsets into the file's blob range. The core extractor now applies `blobBaseIndex` when associating vector bytes with node references. Treating each array index as the identifier silently loses references when the base is nonzero. Invalid base ranges report `CORRUPT_KIWI_CHUNK`.

Sibling order follows saved `parentIndex.position` strings. Input record order alone can change layer order and stacking. Normalization sorts positioned siblings lexically, keeps equal positions stable, and leaves unpositioned entries in their original slots. Numeric parent-index inputs retain their existing relationship handling.

Bundle validation requires object-shaped JSON roots, array-shaped asset indexes and valid present optional reference indexes. Valid JSON syntax alone does not establish a valid bundle. Missing optional indexes remain allowed.

A loopback-bound HTTP server also checks that the request Host names a loopback address or localhost. Comparing Origin with an unchecked Host did not establish that. An explicitly configured external bind retains external-host access; authentication is not provided by this app.

## Reference and verification record

VERIFIED. The [public numeric snapshot](evidence/fidelity-summary.json) retains measurements from one source design across the initial baseline, geometry and paint corrections, and current local glyph-baseline correction. Its `productionIdentity` preserves source and renderer hashes, parser version, output size and CLI/API byte identity. The [fidelity record](FIDELITY.md) explains the measurements and limits.

The retained pixel benchmark predates publication changes to core extraction and sibling order. A fresh post-review pixel score remains UNKNOWN. The full research captures and generated comparison HTML stay local. They include the source design and embedded assets, so they are excluded from the public repository. The original [demo generator](../scripts/create-demo.mjs) supplies a shareable input for exercising conversion and the app; it is not the private fidelity benchmark.

### Implementation references

| Area | Source |
| --- | --- |
| Archive limits and file variants | [Archive reader](../packages/core/src/archive/read-archive.ts) |
| Blob offsets and normalized sibling order | [Extraction](../packages/core/src/extract.ts), [normalization](../packages/core/src/normalize/document.ts) |
| Bundle validation | [Doctor implementation](../packages/core/src/discovery.ts) |
| Shared conversion flow | [Pipeline](../packages/openfig/src/pipeline.mjs) |
| Command and glyph extraction | [Geometry decoder](../packages/openfig/src/extract-geometry.mjs) |
| Instance overrides, reflow, masks, glyphs and inspector | [Renderer](../packages/openfig/renderer.py) |
| Image adjustment and variable alpha | [Image filters](../packages/openfig/image_filters.py), [variable colors](../packages/openfig/variable_colors.py) |
| Uploads, Host validation and document routes | [HTTP server](../packages/openfig/src/server.mjs) |
| Local MCP transports | [Server factory](../packages/mcp-server/src/server.ts) |
| Development entry point | [Launcher](../scripts/dev.mjs) |

DRAFT. Whole-file parity, hidden reflowed component fidelity, other platforms and arbitrary zoom remain UNKNOWN. Fallback text depends on fonts where saved outlines are unavailable. Historical zoom latency has no retained per-operation trace, so its breakdown remains UNKNOWN. The inherited Vitest commands do not establish maintained regression coverage; the dependency is not declared in this workspace.
