import { a as RefigRenderOptions, c as collectExportsFromDocument, i as RefigRenderFormat, l as exportSettingToRenderOptions, n as FigmaDocument$1, o as RefigRenderResult, r as FigmaRenderer, s as RefigRendererOptions, t as ExportItem, u as resolveMimeType } from "./lib-CWegxqPa.mjs";

//#region index.d.ts
declare module "./lib" {
  namespace FigmaDocument {
    function fromFile(filePath: string): FigmaDocument;
  }
}
//#endregion
export { type ExportItem, FigmaDocument$1 as FigmaDocument, FigmaRenderer, FigmaRenderer as default, type RefigRenderFormat, type RefigRenderOptions, type RefigRenderResult, type RefigRendererOptions, collectExportsFromDocument, exportSettingToRenderOptions, resolveMimeType };