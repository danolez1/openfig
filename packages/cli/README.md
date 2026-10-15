VERIFIED against this package's manifest and source.

# Extraction and inspection CLI

This package retains the `figctx` command used by Openfig to decode local Figma saves, build structured design bundles and inspect their contents. Openfig adds its full canvas and HTTP app through the repository entry point. Use the [root README](../../README.md) to install and start the complete application.

Requires Node.js 22 or newer, as declared in [package.json](package.json).

After building the workspace from its root:

```sh
node packages/cli/dist/main.js --help
node packages/cli/dist/main.js extract ./design.fig --out ./.openfig/design
node packages/cli/dist/mcp.js --root ./.openfig/design
```

The retained parser, CLI and MCP code originated in `figctx`. Its [MIT notice](LICENSE) and package attribution are preserved. The complete app's [MCP guide](../../docs/FIGMA-MCP.md) covers local and hosted connections.
