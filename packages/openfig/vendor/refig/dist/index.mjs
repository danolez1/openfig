import { i as exportSettingToRenderOptions, n as FigmaRenderer, o as resolveMimeType, r as collectExportsFromDocument, t as FigmaDocument } from "./lib-66MnzYX9.mjs";
import { readFileSync } from "node:fs";
//#region index.ts
/**
* @grida/refig — Node.js entrypoint
*
* Re-exports the full core API and adds Node-specific helpers (file I/O).
*/
/**
* Read a `.fig` binary or a Figma REST API JSON file from disk and return a
* `FigmaDocument`.
*
* @param filePath Path to a `.fig` file or a `.json` file.
*/
FigmaDocument.fromFile = function fromFile(filePath) {
	const normalized = filePath.trim();
	if (!normalized) throw new Error("FigmaDocument.fromFile: path must be non-empty");
	if (normalized.toLowerCase().endsWith(".json")) {
		const text = readFileSync(normalized, "utf-8");
		return new FigmaDocument(JSON.parse(text));
	}
	return new FigmaDocument(new Uint8Array(readFileSync(normalized)));
};
var grida_canvas_sdk_render_figma_default = FigmaRenderer;
//#endregion
export { FigmaDocument, FigmaRenderer, collectExportsFromDocument, grida_canvas_sdk_render_figma_default as default, exportSettingToRenderOptions, resolveMimeType };
