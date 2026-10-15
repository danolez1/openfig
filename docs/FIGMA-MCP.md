VERIFIED against the local tool registrations and official catalog linked below.

# Figma MCP tools and local access

Openfig exposes saved design bundles through MCP, a tool interface that compatible clients can call. The same local tools are available over stdio and through the app's HTTP port. Figma's official MCP service supplies separate account and live-file capabilities.

## Openfig's local tools

| Tool | Local action |
| --- | --- |
| `list_frames` | List extracted frames and canvases. |
| `list_frame_summaries` | Read frame summaries in pages. |
| `search_nodes` | Search node names and text. |
| `get_node_context` | Resolve a node ID or Figma URL to its extracted node. |
| `get_frame_bundle` | Read a node subtree with text, vectors, assets, tokens, and attached references. |
| `get_vector_svg` | Build an SVG from an extracted vector group. |
| `get_style_tokens` | Read extracted color, typography, effect, font, and variable data. |
| `get_asset` | Find a locally extracted image by hash. |
| `inspect_node` | Read a bounded node summary. |
| `review_visual_match` | Compare a candidate PNG with an attached reference PNG. |

These tools inspect the saved bundle. Live Figma selections, account libraries, hosted workflows, and Figma file writes use the official server described below. Openfig's local server registers tools; Figma Make resources and the official design-system prompt belong to the hosted connection.

## Use MCP through the app port

Start the app from the repository root:

```sh
bun dev
```

Upload a `.fig` file, open Tools, and select MCP. The app shows the document's endpoint and lets you initialize the connection, list tool schemas, and call tools. `POST /api/documents` also returns this endpoint as `mcpUrl`. It has the form `/mcp/:id`, where `:id` binds the connection to that uploaded document. Tool arguments do not need a bundle path or document ID.

The endpoint uses stateless Streamable HTTP. Clients send `Content-Type: application/json` and `Accept: application/json, text/event-stream`. Initialize MCP, then send the negotiated `mcp-protocol-version` with subsequent requests. Openfig does not issue an MCP session header. The document ID stays usable while that Openfig server is running; restarting the server requires a new upload.

For a manual request, set `openfig_mcp_url` to the endpoint shown in Tools, then initialize:

```sh
curl --fail-with-body "$openfig_mcp_url" \
  --header 'content-type: application/json' \
  --header 'accept: application/json, text/event-stream' \
  --data '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"local-client","version":"1.0.0"}}}'
```

A client using an MCP SDK handles initialization and the following protocol requests. Use `tools/list` to discover the current argument schemas.

`review_visual_match` needs an attached reference PNG and a candidate. The app's reference action attaches the PNG; its compare action saves a candidate and returns `candidatePath`. HTTP MCP confines that path to the uploaded document's bundle. The original stdio tool can still read a caller-supplied local candidate path.

## Use stdio from the CLI

Extract a bundle, then start its MCP server:

```sh
pnpm build
pnpm run openfig -- extract ./design.fig --output ./.openfig/design
pnpm run openfig -- mcp --root ./.openfig/design
```

The stdio process uses the same tool registrations as HTTP. It reads its bundle from disk, so the extracted files remain available independently of an upload session. Reference PNGs can be attached through the CLI before starting the server.

## Official Figma catalog

Figma groups its catalog into read tools, write tools, Weave tools, and one MCP prompt. “Remote only” below follows the flag in Figma's published tool table. A blank flag means the table does not mark that tool remote-only; it does not make the tool part of Openfig's offline parser. The Openfig converter does not implement or proxy these official tools.

### Read tools

| Tool | Purpose | Remote only |
| --- | --- | --- |
| `download_assets` | Export selected nodes and retrieve original source images. | Yes |
| `get_code_connect_map` | Read mappings from selected Figma instances to code components. | |
| `get_code_connect_suggestions` | Suggest mappings between Figma and code components. | |
| `get_context_for_code_connect` | Read component metadata for Code Connect templates. | Yes |
| `get_design_context` | Read design context for a layer or selection. | |
| `get_figjam` | Read a FigJam diagram as XML context. | |
| `get_generative_plugin` | Read a generative plugin's source manifest. | Yes |
| `get_libraries` | List subscribed and available design libraries. | Yes |
| `get_metadata` | Read a sparse XML outline of a selection. | |
| `get_motion_context` | Read keyframe animation data and generated code snippets. | |
| `get_screenshot` | Capture a selected node as an image. | |
| `get_shader` | Read a shader fill or effect's source manifest. | |
| `get_variable_defs` | Read variables and styles used by a selection. | |
| `list_file_shaders` | List shaders referenced by a specific file. | Yes |
| `list_generative_plugins` | List generative plugins in the authenticated account. | Yes |
| `list_shaders` | List shader effects and fills in the user's library. | |
| `search_design_system` | Search connected libraries for components, variables, and styles. | Yes |
| `whoami` | Read the authenticated user's identity and plans. | Yes |

### Write tools

| Tool | Purpose | Remote only |
| --- | --- | --- |
| `add_code_connect_map` | Add a mapping from a Figma node to a code component. | |
| `create_generative_plugin` | Create a plugin scaffold in the authenticated account. | Yes |
| `create_new_file` | Create a blank Design, FigJam, or Slides file. | Yes |
| `create_shader` | Create a shader fill or effect scaffold. | Yes |
| `generate_diagram` | Create a FigJam diagram from Mermaid or a description. | Yes |
| `generate_figma_design` | Send live interface content into Figma Design. | Yes |
| `generate_image` | Generate a downloadable raster image. | Yes |
| `send_code_connect_mappings` | Confirm suggested Code Connect mappings. | |
| `update_generative_plugin` | Replace plugin source files or metadata. | Yes |
| `update_shader` | Replace a shader's source. | Yes |
| `upload_assets` | Upload image assets into a Figma file. | Yes |
| `use_figma` | Create, inspect, edit, or delete Figma content. | Yes |

### Weave tools

| Tool | Purpose |
| --- | --- |
| `weave_list_tools` | List published Weave workflows available to the account. |
| `weave_get_tool_inputs` | Read a workflow's inputs and outputs. |
| `weave_upload_asset` | Upload an asset to a hosted URL for a workflow. |
| `weave_run_tool` | Start a workflow run. |
| `weave_get_tool_run_output` | Read status and output for workflow runs. |
| `weave_cancel_tool_run` | Cancel one or more in-progress runs. |

Figma's tool index lists Weave separately and does not mark those six rows remote-only. Figma's tool guide says runs use Weave credits and require a paid standalone Weave account. Check the connected client's catalog for availability.

### MCP prompt

| Prompt | Purpose |
| --- | --- |
| `create_design_system_rules` | Draft a rules file that helps an agent produce code aligned with a design system and codebase. |

Figma notes that MCP clients differ in prompt support. Its Make integration also uses MCP resources, which only clients that support resources can fetch.

### Figma MCP resources

Figma Make resources are discovered from a Make project link. The client receives that project's available file list and can fetch selected files. The guide does not give a fixed resource-name list. MCP resources can also fetch source files listed by `get_shader` and `get_generative_plugin`. Resources are separate from the tool and prompt tables above. See [Figma's Make resource guide](https://developers.figma.com/docs/figma-mcp-server/bringing-make-context-to-your-agent/) and [tool descriptions](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/).

## Registering the official server with local Codex

This repository includes a project-scoped server entry in `.codex/config.toml`:

```toml
[mcp_servers.figma]
url = "https://mcp.figma.com/mcp"
```

Codex loads project configuration only for trusted projects. After project trust and Figma OAuth, Codex can connect to Figma's hosted endpoint. Openfig does not run or mirror that service locally. See [Codex project configuration](https://developers.openai.com/codex/config-basic) and [Figma remote MCP setup](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/).

To register the server in Codex CLI configuration for use across projects, run:

```sh
pnpm run openfig -- connect-figma
```

The command registers `https://mcp.figma.com/mcp` in Codex CLI configuration as `figma-openfig` by default. Choose another name with `--name`. It runs `codex mcp add <name> --url https://mcp.figma.com/mcp` without a shell (`packages/openfig/src/cli.mjs`). Figma lists Codex CLI as a supported client. Authenticate in Codex after registration.

The CLI command adds a second server entry for cross-project use. If the project-scoped entry already loads, use the command only when a global entry is also wanted. Authenticate with Figma after registration before using live account tools.

## Other official access options

Configure the official server as a separate MCP connection in a supported client for live account access.

- **Figma Desktop server:** Enable MCP in Figma Desktop while in Dev Mode. Figma documents its local endpoint as `http://127.0.0.1:3845/mcp`. It requires the desktop app and supports selection-based context. Figma recommends the remote server for the broadest feature set.
- **Figma remote server:** Figma documents `https://mcp.figma.com/mcp` and OAuth sign-in. Figma limits connections to supported clients. Codex CLI is listed in the current setup guide.

## Official references

- [Tools and prompts](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/)
- [Figma Desktop MCP setup](https://developers.figma.com/docs/figma-mcp-server/local-server-installation/)
- [Figma remote MCP setup](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/)
- [Make resources through MCP](https://developers.figma.com/docs/figma-mcp-server/bringing-make-context-to-your-agent/)

## Reference: verification

VERIFIED. Both local transports use `createBundleMcpServer` in `packages/mcp-server/src/server.ts:12-56`. The stdio entry is `packages/mcp-server/src/main.ts`; the HTTP endpoint is `packages/openfig/src/server.mjs:48-57`. Argument schemas are defined in `packages/mcp-server/src/tool-schemas.ts`. HTTP candidate confinement is implemented in `server.ts:44-51`.

VERIFIED. Read-only calls against the current uploaded document returned HTTP 200 for MCP initialization, `tools/list`, and `inspect_node`. The registered names are defined in the server factory and tool schemas linked above. Historical local endpoint checks do not establish authenticated hosted access.

VERIFIED. The official index was retrieved on `2026-10-15` and lists 18 read tools, 12 write tools, six Weave tools, and one prompt. The tables above retain those names and the published remote-only flags. See the [official index](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/); its catalog may change.

DRAFT. Live Figma OAuth, account-specific tool exposure, and Make resource support in the connected Codex client remain UNKNOWN. Available hosted tools depend on that authenticated connection. No authenticated account operation was performed for this documentation update.
