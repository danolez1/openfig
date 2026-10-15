VERIFIED against the license files linked below.

# Third-party notices

Openfig retains the following third-party code and its license texts.

| Component | License | License text |
| --- | --- | --- |
| `figctx` parser, CLI and local MCP server | MIT | [Original notice](FIGCTX-LICENSE), [core](packages/core/LICENSE), [CLI](packages/cli/LICENSE), [MCP](packages/mcp-server/LICENSE) |
| `@grida/refig` | MIT | [Reader license](packages/openfig/vendor/refig/LICENSE) |
| `@grida/canvas-wasm` | Apache-2.0 | [Canvas runtime license](packages/openfig/vendor/canvas-wasm/LICENSE) |
| Geist and Geist Mono compiled into the canvas runtime | SIL Open Font License 1.1 | [Original font notice](packages/openfig/vendor/canvas-wasm/GEIST-OFL.txt) |

The vendored runtime contains Geist and Geist Mono font data. Their original copyright and license notice are retained beside the runtime. [Embedded font provenance](docs/evidence/embedded-runtime-fonts.json) records byte hashes and upstream sources. These runtime fonts are separate from the optional fonts embedded into exported HTML through a user manifest.

The optional user font directory is excluded from Git. This exclusion does not apply to data compiled into the vendored canvas runtime. Fonts supplied separately remain subject to their own licenses, including restrictions on embedding and redistribution. The example manifest names Inter and Mukta as optional families; it does not distribute those fonts.

This notice does not grant a separate license for Openfig-specific code. Dependency packages retain their own license terms.
