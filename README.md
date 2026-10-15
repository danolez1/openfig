VERIFIED against the source and measurement references below.

# Openfig

Openfig opens a saved Figma Design `.fig` file as an interactive canvas and exports it as one self-contained HTML file. Select screens or layers, inspect design values, and copy CSS, the styling rules used by web pages, from the Design panel.

One `bun dev` command starts the app, design inspection, command-line interface (CLI) operations, and local Model Context Protocol (MCP) tools on port 8787. MCP lets compatible coding assistants inspect the document through structured tool calls. Conversion reads local files without Figma sign-in. Live Figma account tools use a separate hosted connection; see [the MCP guide](docs/FIGMA-MCP.md).

![Openfig canvas with a selected layer, source geometry and CSS inspector](docs/images/openfig-canvas.png)

The screenshot shows an original demonstration board rendered in the app. You can generate the same board locally. The benchmark design and the optional user-supplied font collection stay local.

## What you can do

- Open a local Figma save without signing into Figma.
- Navigate pages and screens, search layers, select components, and inspect source geometry, paints and typography.
- Pan across the canvas, zoom around the pointer, and focus a screen or selection.
- Copy a layer's CSS and download a standalone interactive HTML file.
- Extract a structured bundle containing nodes, tokens, assets, variables and geometry.
- Use document inspection and conversion through the CLI, an HTTP application programming interface (API), or local MCP tools.

## Start the app

Requirements:

- Node.js 22 or newer
- pnpm 11.6.0
- Python 3 with Pillow 12.3.0
- Bun for the `bun dev` launcher

Install dependencies once, then start from the repository root:

```sh
python3 -m venv .venv
. .venv/bin/activate
python -m pip install -r requirements.txt
pnpm install --frozen-lockfile
bun dev
```

The launcher builds the required packages before starting the server. Open `http://127.0.0.1:8787`, then choose or drop a `.fig` file. After upload, the canvas fills the app beneath its header. Canvas, Inspect, Design tokens, Assets, Tools, and File information remain available from the header. Download either the standalone HTML or the extracted bundle ZIP.

Use another port or font directory when needed:

```sh
bun dev --port 8788 --fonts ./fonts
```

To run the server without rebuilding each time:

```sh
pnpm build
pnpm run openfig -- serve
```

<details>
<summary>Upload screen</summary>

![Openfig file upload screen](docs/images/openfig-upload.png)

</details>

## Try an original demo

After installing dependencies, generate a new demo file:

```sh
node scripts/create-demo.mjs --output .openfig/demo.fig
```

Open it in the app, or convert it with the CLI. The generator creates a small bare `fig-kiwi` document with a workspace screen, a component board and a mobile screen. It refuses to replace an existing file. Screenshots use an optional local Inter installation; a fresh checkout uses system fallback fonts unless you supply a font manifest.

## Convert or extract from the CLI

```sh
pnpm run openfig -- convert ./design.fig --output ./design.html
pnpm run openfig -- extract ./design.fig --output ./.openfig/design
```

Conversion refuses to replace an existing output unless `--force` is supplied. Add `--fonts <directory>` to use a different font collection. The result reports the parser version, canvas variant, node count, source SHA-256, and HTML byte count.

The extracted bundle contains normalized nodes, images, vectors, style tokens, font requirements, variables, and saved glyph and command paths. It can be inspected through the CLI or used by the offline MCP server.

## Headless HTTP conversion

`POST /api/convert` accepts the raw `.fig` bytes and returns HTML directly:

```sh
curl --fail-with-body \
  --header 'content-type: application/fig' \
  --header 'x-filename: design.fig' \
  --data-binary @./design.fig \
  http://127.0.0.1:8787/api/convert \
  --output ./design.html
```

For inspection and tool calls, create a document session instead:

```sh
curl --fail-with-body \
  --header 'content-type: application/fig' \
  --header 'x-filename: design.fig' \
  --data-binary @./design.fig \
  http://127.0.0.1:8787/api/documents \
  --output ./document.json
```

The HTTP 201 response includes `id`, `name`, `summary`, `previewUrl`, `downloadUrl`, `bundleUrl`, `metadataUrl`, and `mcpUrl`. The app uses this same endpoint.

## Inspect a document through the same port

In these routes, `:id` is the document ID returned by upload.

| Method | Route | Result |
| --- | --- | --- |
| GET | `/healthz` | Server health |
| GET | `/api/tools` | Routes, action fields, and local MCP tool names |
| GET | `/api/documents` | Documents in this running server |
| GET | `/api/documents/:id/metadata` | Source manifest and document URLs |
| GET | `/api/documents/:id/nodes` | Frame list, name/text search, or bounded node inspection |
| GET | `/api/documents/:id/context?reference=...` | Subtree context with tokens, assets, vectors, and references |
| GET | `/api/documents/:id/tokens` | Colors, typography, effects, fonts, and variables |
| GET | `/api/documents/:id/assets` | Extracted image list and download URLs |
| GET | `/api/documents/:id/assets/:hash` | Original extracted image bytes |
| GET | `/api/documents/:id/preview` | Interactive HTML preview |
| GET | `/api/documents/:id/download` | Standalone HTML download |
| GET | `/api/documents/:id/bundle` | Extracted bundle ZIP |
| GET | `/api/documents/:id/files/:relativePath` | A file inside the extracted bundle |
| POST | `/api/documents/:id/actions` | Structured CLI operation |
| DELETE | `/api/documents/:id` | Remove this temporary document session |
| POST | `/mcp/:id` | Local MCP over Streamable HTTP |

Node search accepts `query`, `type`, and `limit`. Supplying `reference` instead selects bounded inspection, with optional `depth` and `maxChildren`. A node reference can be a node ID or Figma node URL.

Actions accept JSON with an `operation` field. Available operations are `resolve`, `inspect`, `inspect-node`, `search`, `pack`, `render`, `doctor`, `font-check`, `reference`, and `compare`. `GET /api/tools` supplies each operation's fields, and the app's Tools view provides a form for them. `font-check` uses the server's configured font directory. `render` exports vector groups as SVG.

`reference` and `compare` take a node `reference` and PNG `imageBase64`. Attach a reference before comparing a candidate. Comparison accepts `threshold` and `maxMismatchRatio`, then returns pixel metrics and candidate/diff URLs. Its `candidatePath` can be passed to the MCP `review_visual_match` tool.

## Sessions and resource use

Uploaded document IDs belong to the running server. Reloading the page keeps them available; stopping the server loses the session list and removes its temporary files during graceful shutdown. Download the HTML or bundle ZIP to keep the result. Direct `/api/convert` requests clean up their temporary bundle after returning HTML.

The server binds to `127.0.0.1` by default. It has no user authentication or configured conversion concurrency limit. Raw uploads default to a 1 GiB cap, configurable with `OPENFIG_MAX_UPLOAD_BYTES`. JSON action bodies are capped at 100 MiB; MCP request bodies at 2 MiB. Parsing retains source buffers or expanded archive entries in memory, and active document bundles occupy temporary disk space until removed or the server stops.

## Canvas roots and fonts

Visible pages prefer frame-like roots at least 280 pixels wide and 260 pixels high. Set `OPENFIG_MIN_SCREEN_WIDTH` and `OPENFIG_MIN_SCREEN_HEIGHT` to change those thresholds. If none qualify, the canvas uses all visible candidates. Candidate layers remain in the layer tree; a candidate omitted from the canvas cannot be focused there. Hidden pages retain visible candidates, and overlapping component boards use preview positions that preserve the original source matrices.

Saved glyph outlines preserve available source text shapes without requiring those font binaries. Text without usable glyph geometry uses native browser text, where missing fonts can change shape and wrapping. Exported CSS also needs the specified fonts in its destination.

Openfig embeds image assets and fonts listed in the selected font directory's `manifest.json`. The default collection is `packages/openfig/fonts/local/`, excluded from Git. Add licensed `.ttf`, `.otf`, `.woff`, or `.woff2` files and list their family, file, style, and weight. See [manifest.example.json](packages/openfig/fonts/manifest.example.json).

## Local and hosted MCP

The Tools view connects to the uploaded document's `mcpUrl` on the same port. The local tools inspect saved bundles and compare attached reference images. A CLI client can use stdio instead:

```sh
pnpm run openfig -- mcp --root ./.openfig/design
```

Figma account libraries, live selections, hosted workflows, and file writes require Figma's official service and authentication. The repository includes a project-scoped hosted entry in `.codex/config.toml`; `pnpm run openfig -- connect-figma` can register a hosted entry across Codex projects. [The MCP guide](docs/FIGMA-MCP.md) explains both transports and lists the official catalog.

## Supported input

The parser accepts a ZIP containing `canvas.fig` with the `fig-kiwi` variant, or a bare `fig-kiwi` stream. Other variants and formats such as `.jam` and `.deck` are unsupported. Bare streams have no separate image entries or thumbnail; missing raster references produce an `IMAGE_ASSETS_UNAVAILABLE` bundle warning.

ZIP limits are 10,000 entries, 256 MiB per uncompressed entry, and 1 GiB total uncompressed data. Bare streams are capped at 1 GiB. The HTTP upload cap is separate from these parser limits.

## Repository layout

One app starts from the repository root. Its workspace packages share the same extraction and inspection flow.

| Path | Responsibility |
| --- | --- |
| `packages/core` | Binary decoding, normalized bundles, tokens, vectors and visual comparison |
| `packages/cli` | The retained `figctx` extraction and inspection CLI |
| `packages/mcp-server` | Local document tools over MCP |
| `packages/openfig` | Conversion pipeline, SVG viewer, HTTP API and web app |
| `scripts/dev.mjs` | Build and launch through `bun dev` |
| `scripts/create-demo.mjs` | Original, reproducible demonstration input |

[The process record](docs/PROCESS.md) documents the conversion flow, mistakes, rendering corrections, current sample evidence, and fidelity limits. [Third-party notices](THIRD-PARTY-NOTICES.md) records bundled licenses.

## Rendering fidelity

The retained measured rendering snapshot reaches **81.17% exact RGB (red, green and blue) pixels** and **99.33% with color tolerance**. Those are different measurements. Literal pixel perfection has not been reached.

The snapshot predates the publication review changes to core extraction and sibling ordering; a new pixel score after those changes remains UNKNOWN. The benchmark covers 47 visible screens from one saved design, at device pixel ratio (DPR) 1 and matching native export dimensions. It excludes the hidden component preview, other files and arbitrary zoom. The [fidelity record](docs/FIDELITY.md) explains the method, improvements and rejected experiments. The [public numeric evidence](docs/evidence/fidelity-summary.json) retains per-screen measurements without redistributing the design or its images.

## Attribution and licenses

The local parser, extraction CLI and MCP code derive from `figctx`; their MIT notices are retained. The renderer uses the vendored Grida reader and canvas runtime under their respective MIT and Apache-2.0 licenses. [Third-party notices](THIRD-PARTY-NOTICES.md) lists the license files. This repository does not include a separate license grant for Openfig-specific code.

## Reference: verification and limits

VERIFIED. Startup and shared-port behavior are defined in [the launcher](scripts/dev.mjs), [server routes](packages/openfig/src/server.mjs), and [action catalog](packages/openfig/src/api.mjs). The [shared pipeline](packages/openfig/src/pipeline.mjs) handles CLI and API conversion. Screenshots show the original board authored by [the demo generator](scripts/create-demo.mjs). [Publication checks](docs/evidence/publication-checks.json) record a fresh no-font-manifest CLI/API conversion and local document/MCP requests after the core corrections.

VERIFIED. The [measurement snapshot](docs/evidence/fidelity-summary.json) records pooled counts, per-screen results, source record hashes and the production HTML identity. Its `methods` field defines exact RGB, pixelmatch tolerance, backdrop and aggregation. Benchmark design files, private comparison images, the optional user font collection and generated research outputs are excluded from Git and retained locally.

DRAFT. Fidelity for arbitrary designs and platforms remains UNKNOWN. Live Figma OAuth, account-specific tools and hosted resources were not verified by the local conversion checks. Conversion and zoom latency breakdowns remain UNKNOWN. The inherited package test commands reference Vitest without a declared dependency; this checkout does not establish a maintained automated regression suite.
