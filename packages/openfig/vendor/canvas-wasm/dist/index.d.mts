import createGridaCanvas from "./grida-canvas-wasm";

//#region lib/modules/fonts-bindings.d.ts
declare namespace fonts {
  export namespace types {
    // ====================================================================================================
    // #region: Core Type Definitions
    // ====================================================================================================
    /** Axis value pair for variable font recipes */
    export interface AxisValue {
      tag: string;
      value: number;
    }
    /** Family-level axis information (no default values as they vary per face) */
    export interface FontFamilyAxis {
      tag: string;
      name: string;
      min: number;
      max: number;
    }
    /** Face-specific axis information (includes default values) */
    export interface FontAxis {
      tag: string;
      name: string;
      min: number;
      def: number;
      max: number;
    }
    /** Variable font recipe */
    export interface VfRecipe {
      axis_values: Array<AxisValue>;
    }
    /** Italic recipe for UI consumption */
    export interface ItalicRecipe {
      name: string;
      description: string;
      is_italic: boolean;
      face_id: string;
      vf_recipe?: VfRecipe;
    }
    /** Italic capability analysis for UI consumption */
    export interface ItalicCapability {
      has_italic: boolean;
      has_upright: boolean;
      strategy: string;
      recipes: Array<ItalicRecipe>;
      scenario: string;
    }
    /** Variable font instance information */
    export interface FontInstance {
      name: string;
      postscript_name: string | null;
      coordinates: Record<string, number>;
    }
    /** Font feature information for UI consumption */
    export interface FontFeature {
      tag: string;
      name: string;
      tooltip: string | null;
      sample_text: string | null;
      glyphs: string[];
      script: string;
      language: string;
      source_table: string;
    }
    /** Face-level information for UI consumption */
    export interface FontFaceInfo {
      face_id: string;
      family_name: string;
      subfamily_name: string;
      postscript_name: string;
      weight_class: number;
      width_class: number;
      is_variable: boolean;
      is_strict_italic: boolean;
      axes?: Record<string, FontAxis>;
      instances?: Array<FontInstance>;
      features: Array<FontFeature>;
    }
    /** Font style instance for UI consumption */
    export interface FontStyle {
      face_id: string;
      face_post_script_name: string;
      name: string;
      postscript_name: string | null;
      italic: boolean;
      weight: number;
    }
    /** Complete family-level analysis result for UI consumption */
    export interface FontFamilyAnalysisResult {
      family_name: string;
      axes: Array<FontFamilyAxis>;
      italic_capability: ItalicCapability;
      faces: Array<FontFaceInfo>;
      styles: Array<FontStyle>;
    }
    export type FontFamilyAnalysisResponse = {
      success: true;
      data: FontFamilyAnalysisResult;
    } | FontError;
    /** Face record for single font parsing */
    export interface FaceRecord {
      face_id: string;
      ps_name: string;
      family_name: string;
      subfamily_name: string;
      is_variable: boolean;
      os2_italic_bit: boolean;
      weight_class: number;
      width_class: number;
      user_font_style_italic: boolean | null;
      axes_count: number;
    }
    /** Error response for failed operations */
    export interface FontError {
      success: false;
      error: {
        message: string;
      };
    }
  } // ====================================================================================================
  // #region: WASM Function Declarations
  // ====================================================================================================
  export interface FontsModule {
    // ====================================================================================================
    // #region: Core Font Analysis APIs
    // ====================================================================================================
    /**
     * Analyzes a font family and returns comprehensive family information as JSON.
     * This is the main API for working with multiple font files under the same family.
     *
     * @param family_name - Family name (can be null for auto-detection)
     * @param font_count - Number of font faces
     * @param face_ids - Array of face IDs (null-terminated strings)
     * @param font_data_ptrs - Array of pointers to font data
     * @param font_data_sizes - Array of font data sizes
     * @param user_italic_flags - Array of user italic declarations (-1 = null, 0 = false, 1 = true)
     * @returns JSON string containing {@link FontFamilyAnalysisResponse}
     */
    _grida_fonts_analyze_family(family_name: number | null, font_count: number, face_ids: number, font_data_ptrs: number, font_data_sizes: number, user_italic_flags: number | null): number;
    /**
     * Parses a single font file and extracts basic metadata.
     * This is exposed for fast, single font analysis.
     *
     * @param font_data_ptr - Pointer to font data
     * @param font_data_size - Size of font data
     * @param face_id - Unique identifier for this font face
     * @param user_font_style_italic - User-declared italic style (can be null for auto-detection)
     * @returns JSON string containing FaceRecord
     */
    _grida_fonts_parse_font(font_data_ptr: number, font_data_size: number, face_id: number, user_font_style_italic: number | null): number; // ====================================================================================================
    // #region: Utility Functions
    // ====================================================================================================
    /**
     * Frees memory allocated by WASM functions.
     *
     * @param ptr - Pointer to memory allocated by a WASM function
     */
    _grida_fonts_free(ptr: number): void;
  }
}
//#endregion
//#region lib/modules/markdown-bindings.d.ts
declare namespace markdown {
  export type MarkdownToHtmlResponse = CAPIMethodResult<{
    /** Converted HTML string */html: string;
  }>; // ====================================================================================================
  // #region: WASM Function Declarations
  // ====================================================================================================
  export interface MarkdownModule {
    // ====================================================================================================
    // #region: High-Level Markdown APIs
    // ====================================================================================================
    /**
     * Converts markdown text to HTML.
     * Parses markdown content and converts it to HTML using the pulldown-cmark library.
     *
     * @param markdown - Pointer to input markdown string (null-terminated C string)
     * @returns Pointer to JSON string containing {@link MarkdownToHtmlResponse}
     */
    _grida_markdown_to_html(markdown: CPtr): CPtr;
  }
}
//#endregion
//#region lib/modules/svg-bindings.d.ts
declare namespace svg {
  export type SVGOptimizeResponse = CAPIMethodResult<{
    /** Optimized SVG string with CSS styles resolved and inlined */svg_optimized: string;
  }>;
  export interface SVGModule {
    /**
     * Optimizes and resolves an SVG, producing a flat, self-contained SVG output.
     * Resolves CSS styles from `<style>` tags and inlines them as element attributes.
     *
     * @param svg - Pointer to input SVG string (null-terminated C string)
     * @returns Pointer to JSON string containing SVGOptimizeResponse
     */
    _grida_svg_optimize(svg: CPtr): CPtr;
    /**
     * Parse SVG and return `.grida` FlatBuffers bytes.
     *
     * Returns a pointer to a length-prefixed buffer (u32 LE length + FBS
     * bytes), or null on error.
     *
     * @param svg - Pointer to input SVG string (null-terminated C string)
     * @returns Pointer to length-prefixed FBS buffer, or 0 (null) on error
     */
    _grida_svg_to_document(svg: CPtr): CPtr;
  }
}
//#endregion
//#region lib/bin/grida-canvas-wasm.d.ts
declare function createGridaCanvas$1(moduleArg?: {
  locateFile?: (path: string, scriptDirectory: string) => string;
}): Promise<createGridaCanvas$1.GridaCanvasWasmBindings>;
declare namespace createGridaCanvas$1 {
  interface GridaCanvasWasmBindings extends emscripten.emscripten_EXPORTED_RUNTIME_METHODS, canvas.CanvasModule, fonts.FontsModule, markdown.MarkdownModule, svg.SVGModule {}
}
//#endregion
//#region lib/modules/fonts.d.ts
declare class FontsAPI {
  private module;
  constructor(module: createGridaCanvas$1.GridaCanvasWasmBindings);
  /**
   * Allocates memory for a string and returns pointer and length.
   * @param txt - String to allocate
   * @returns [pointer, length] tuple
   */
  private _alloc_string;
  /**
   * Frees memory allocated for a string.
   * @param ptr - Pointer to free
   * @param len - Length of allocated memory
   */
  private _free_string;
  /**
   * Allocates memory for binary data and returns pointer.
   * @param data - Binary data to allocate
   * @returns [pointer, length] tuple
   */
  private _alloc_data;
  /**
   * Converts a WASM-allocated string to JavaScript string and frees the WASM memory.
   * @param ptr - Pointer to WASM string
   * @returns JavaScript string
   */
  private _string_from_wasm;
  /**
   * Analyzes a font family with JavaScript-friendly interface.
   * This is the main API for working with multiple font files under the same family.
   *
   * @param fontFaces - Array of font face objects
   * @param familyName - Family name (optional)
   * @returns Promise resolving to FontAnalysisResult or FontError
   */
  analyzeFamily(fontFaces: Array<{
    faceId: string;
    data: ArrayBuffer | Uint8Array;
    userFontStyleItalic?: boolean;
  }>, familyName?: string): Promise<fonts.types.FontFamilyAnalysisResponse>;
  /**
   * Parses a single font file with JavaScript-friendly interface.
   * This is exposed for fast, single font analysis.
   *
   * @param fontData - Font data as ArrayBuffer or Uint8Array
   * @param faceId - Unique identifier for this font face
   * @param userFontStyleItalic - User-declared italic style (optional)
   * @returns Promise resolving to FaceRecord
   */
  parseFont(fontData: ArrayBuffer | Uint8Array, faceId: string, userFontStyleItalic?: boolean): Promise<fonts.types.FaceRecord>;
}
//#endregion
//#region lib/modules/markdown.d.ts
declare class MarkdownAPI {
  private module;
  constructor(module: createGridaCanvas$1.GridaCanvasWasmBindings);
  /**
   * Allocates memory for a string and returns pointer and length.
   * @param txt - String to allocate
   * @returns [pointer, length] tuple
   */
  private _alloc_string;
  /**
   * Frees memory allocated for a string.
   * @param ptr - Pointer to free
   * @param len - Length of allocated memory
   */
  private _free_string;
  /**
   * Converts a WASM-allocated string to JavaScript string and frees the WASM memory.
   * @param ptr - Pointer to WASM string
   * @returns JavaScript string
   */
  private _string_from_wasm;
  /**
   * Converts markdown text to HTML with JavaScript-friendly interface.
   * Parses markdown content and converts it to HTML using the pulldown-cmark library.
   *
   * @param markdown - Input markdown string
   * @returns MarkdownToHtmlResponse containing the converted HTML or error information
   */
  toHtml(markdown: string): markdown.MarkdownToHtmlResponse;
}
//#endregion
//#region lib/modules/svg.d.ts
declare class SVGAPI {
  private module;
  constructor(module: createGridaCanvas$1.GridaCanvasWasmBindings);
  /**
   * Allocates memory for a string and returns pointer and length.
   * @param txt - String to allocate
   * @returns [pointer, length] tuple
   */
  private _alloc_string;
  /**
   * Frees memory allocated for a string.
   * @param ptr - Pointer to free
   * @param len - Length of allocated memory
   */
  private _free_string;
  /**
   * Converts a WASM-allocated string to JavaScript string and frees the WASM memory.
   * @param ptr - Pointer to WASM string
   * @returns JavaScript string
   */
  private _string_from_wasm;
  /**
   * Optimizes and resolves an SVG with JavaScript-friendly interface.
   * Resolves CSS styles from `<style>` tags and inlines them as element attributes.
   *
   * @param svg - Input SVG string
   * @returns Promise resolving to SvgOptimizeResponse
   */
  optimize(svg: string): svg.SVGOptimizeResponse;
  /**
   * Parse SVG and return `.grida` FlatBuffers bytes.
   *
   * This replaces the two-step pipeline (pack → JS convert) with a
   * single Rust call that produces the FBS binary directly.
   *
   * @returns Uint8Array of FBS bytes, or null on error
   */
  toDocument(svg: string): Uint8Array | null;
}
//#endregion
//#region lib/modules/canvas.d.ts
interface SurfaceResponse {
  needsRedraw: boolean;
  cursorChanged: boolean;
  selectionChanged: boolean;
  hoverChanged: boolean;
}
type SurfaceCursorIcon = "default" | "pointer" | "grab" | "grabbing" | "crosshair" | "move";
interface SurfaceOverlayConfig {
  dpr?: number;
  text_baseline_decoration?: boolean;
  show_size_meter?: boolean;
  show_frame_titles?: boolean;
}
/** Encode modifier keys as a bitmask for the WASM C-ABI. */
declare function encodeModifiers(event: {
  shiftKey: boolean;
  altKey: boolean;
  ctrlKey?: boolean;
  metaKey?: boolean;
}): number;
/** Map DOM MouseEvent.button to WASM pointer button id. */
declare function encodeButton(button: number): number;
interface CreateImageResourceResult {
  hash: string;
  url: string;
  width: number;
  height: number;
  type: string;
}
interface AddImageWithIdResult {
  width: number;
  height: number;
  type: string;
}
declare class Scene {
  private appptr;
  private module;
  readonly fontskit: FontsAPI;
  readonly markdownkit: MarkdownAPI;
  readonly svgkit: SVGAPI;
  constructor(module: createGridaCanvas$1.GridaCanvasWasmBindings, ptr: number);
  private _assertAlive;
  /**
   * Release the underlying WASM application instance.
   *
   * After calling this, the `Scene` instance must not be used again.
   */
  dispose(): void;
  /**
   * Allocates memory for a string and returns pointer and length.
   * @param txt - String to allocate
   * @returns [pointer, length] tuple
   */
  _alloc_string(txt: string): [number, number];
  /**
   * Frees memory allocated for a string.
   * @param ptr - Pointer to free
   * @param len - Length of allocated memory
   */
  _free_string(ptr: number, len: number): void;
  /**
   * Load a scene from `.grida` FlatBuffers binary bytes.
   * Zero-copy on the Rust side — much more memory-efficient than JSON for large documents.
   * @param data - The FlatBuffers binary data.
   */
  loadSceneGrida(data: Uint8Array): void;
  /**
   * Switch to a previously loaded scene by its string ID.
   * Only works after `loadSceneGrida` has decoded a multi-scene document.
   * @param sceneId - The string ID of the scene to switch to.
   */
  switchScene(sceneId: string): void;
  /**
   * Return the IDs of all scenes decoded by the last `loadSceneGrida` call.
   */
  loadedSceneIds(): string[];
  /**
   * Returns image refs that were needed during the last render but not found.
   * Only returns refs not yet reported in a previous call.
   * Returns an empty array if no new missing images.
   */
  drainMissingImages(): string[];
  /**
   * Resolve a missing image by providing its raw bytes for a given resource ID.
   * The image is decoded, stored, and a redraw is queued.
   * @param rid - Resource ID (e.g. "res://images/abc123")
   * @param bytes - Raw image bytes (PNG, JPEG, WebP, etc.)
   */
  resolveImage(rid: string, bytes: Uint8Array): void;
  /**
   * Replace a single node's data in the active scene, keyed by the id
   * encoded in `bytes`.
   *
   * `bytes` must be a single-node `GridaFile` buffer (see
   * `io.GRID.encodeNode`). The node id must already exist in the active
   * scene; parent links and children are untouched.
   *
   * Returns `false` if the buffer is malformed or the id is unknown. How
   * to recover is up to the caller.
   */
  replaceNode(bytes: Uint8Array): boolean;
  /**
   * Remove a node and all its descendants from the active scene, keyed by
   * user id. Returns `false` if the id is unknown.
   */
  deleteNode(id: string): boolean;
  /**
   * Atomically replace a parent's entire children list.
   *
   * This is the single structural-mutation primitive. It covers every
   * structural edit the host can express in terms of "parent P now has
   * these children, in this order":
   *
   * - **Reorder**: same set, different order.
   * - **Reparent**: emit two calls — one for the old parent (child
   *   removed), one for the new parent (child inserted at the target
   *   index).
   * - **Insert new node**: first `replaceNode(bytes)` to deliver the
   *   node data, then `syncLinks(parent, [...existing, new_id])` to
   *   link it into the tree.
   * - **Remove from tree**: `syncLinks(parent, [...without_id])`, then
   *   `deleteNode(id)` to dispose.
   *
   * The call is atomic: the scene graph's cycle / duplicate / unknown-id
   * checks run before any mutation, and the graph is unchanged on
   * failure. On success, the renderer invalidates just the affected
   * subtrees (the parent, any nodes that entered, and any nodes' old
   * parents) — not a full re-encode.
   *
   * Returns `false` if the parent id is unknown, any child id is
   * unknown, or the edit would create a cycle. Node ids must not
   * contain the `\n` character (used as the wire delimiter).
   */
  syncLinks(parentId: string, childrenIds: readonly string[]): boolean;
  /**
   * Register a font with the renderer.
   *
   * The wasm module cannot fetch font files directly from the network, so the
   * host environment must fetch the font bytes and pass them here.
   *
   * Multiple calls with the same `family` and different font files are
   * supported (e.g. Regular, Bold, Italic per family).
   *
   * @param family - Font family name for lookup (overrides the font file's built-in name).
   * @param data - Raw font file bytes (e.g. TTF/OTF).
   */
  addFont(family: string, data: Uint8Array): void;
  addImage(data: Uint8Array): CreateImageResourceResult | false;
  addImageWithId(data: Uint8Array, rid: string): AddImageWithIdResult | false;
  getImageBytes(ref: string): Uint8Array | null;
  getImageSize(ref: string): {
    width: number;
    height: number;
  } | null;
  hasMissingFonts(): boolean;
  listMissingFonts(): types.FontKey[];
  listAvailableFonts(): types.FontKey[];
  setFallbackFonts(fonts: string[]): void;
  getFallbackFonts(): string[];
  /**
   * Tick the application clock.
   * bind this to requestAnimationFrame loop or similar
   * @param time - The time in milliseconds. use performance.now()
   * @default - performance.now()
   */
  tick(time?: number): void;
  /**
   * Resize the surface.
   * @param width - The width of the surface.
   * @param height - The height of the surface.
   */
  resize(width: number, height: number): void;
  redraw(): void;
  setMainCameraTransform(transform: types.Transform2D): void;
  getNodeIdFromPoint(x: number, y: number): string | null;
  getNodeIdsFromPoint(x: number, y: number): string[];
  getNodeIdsFromEnvelope(envelope: types.Rect): string[];
  /**
   * Get the absolute bounding box of a node or the active scene.
   *
   * @param target - A node ID, or `"<scene>"` to get the union bounds of the
   *   active scene's root children (computed in a single WASM call).
   */
  getNodeAbsoluteBoundingBox(target: (string & {}) | "<scene>"): types.Rect | null;
  /**
   * Return the structural node ID ancestry path from the scene root to the
   * target node, inclusive.
   *
   * The returned array contains user-facing string IDs ordered as
   * `[root, ..., parent, id]`.
   *
   * Returns `null` if the node does not exist in the scene.
   */
  getNodeIdPath(id: string): string[] | null;
  /**
   * Convert a node into a vector network representation.
   * Supports primitive shapes and text nodes.
   *
   * Returns a flatten result containing the vector network and an optional
   * corner radius. When `corner_radius` is present, it means the vector
   * network has straight segments and corner radius should be applied as
   * a rendering effect. When absent, curves are baked into the geometry.
   */
  toVectorNetwork(id: string): types.FlattenResult | null;
  exportNodeAs(id: string, format: types.ExportAs): {
    data: Uint8Array;
  };
  /**
   * Export multiple nodes as a single multi-page PDF document.
   *
   * Each node ID in `options.node_ids` becomes one page in the output PDF.
   * Returns the raw PDF bytes.
   */
  exportPdfDocument(options: types.ExportPdfDocumentOptions): {
    data: Uint8Array;
  };
  execCommand(command: "ZoomIn" | "ZoomOut"): void;
  execCommandPan(tx: number, ty: number): void;
  execCommandZoomDelta(tz: number): void;
  pointermove(x: number, y: number): void;
  /**
   * Dispatch a pointer-move through the surface event system.
   * Handles hover state, cursor icon, and marquee drag.
   */
  surfacePointerMove(x: number, y: number): SurfaceResponse;
  /**
   * Dispatch a pointer-down through the surface event system.
   * Handles node selection, shift-toggle, and marquee start.
   * @param button - DOM MouseEvent.button (0=primary, 1=middle, 2=secondary)
   * @param modifiers - Bitmask from `encodeModifiers(event)`
   */
  surfacePointerDown(x: number, y: number, button: number, modifiers: number): SurfaceResponse;
  /**
   * Dispatch a pointer-up through the surface event system.
   * Ends marquee gesture.
   * @param button - DOM MouseEvent.button (0=primary, 1=middle, 2=secondary)
   * @param modifiers - Bitmask from `encodeModifiers(event)`
   */
  surfacePointerUp(x: number, y: number, button: number, modifiers: number): SurfaceResponse;
  /**
   * Get the current surface cursor icon.
   */
  getSurfaceCursor(): SurfaceCursorIcon;
  /**
   * Get the currently hovered node ID, or null.
   */
  getSurfaceHoveredNode(): string | null;
  /**
   * Get the currently selected node IDs.
   */
  getSurfaceSelectedNodes(): string[];
  /**
   * Restore selection state (e.g. from undo/redo history).
   */
  setSurfaceSelection(ids: string[]): void;
  /**
   * Collect and group active paints across a set of nodes.
   *
   * Returns groups of identical paints with the node IDs that share each paint.
   * Uses hash-based grouping (O(n)) instead of pairwise deep equality.
   *
   * Paint objects are converted from Rust's externally-tagged enum format to
   * the JS `cg.Paint` format (internally tagged with `type` field, RGBA32F colors).
   *
   * @param ids - Node IDs to query.
   * @param target - "fill" or "stroke"
   * @param options.recursive - Include descendant subtrees (default: true).
   * @param options.limit - Max distinct paint groups to return (0 = unlimited).
   */
  queryPaintGroups(ids: string[], target?: "fill" | "stroke", options?: {
    recursive?: boolean;
    limit?: number;
  }): Array<{
    paint: Record<string, unknown>;
    node_ids: string[];
  }>;
  /**
   * Configure surface overlay rendering (size meter, frame titles, etc.).
   */
  setSurfaceOverlayConfig(config: SurfaceOverlayConfig): void;
  /**
   * Select all nodes in the current scene.
   */
  selectAll(): void;
  /**
   * Deselect all nodes.
   */
  deselectAll(): void;
  /**
   * Navigate selection to direct children of the current selection (Enter).
   */
  selectChildren(): void;
  /**
   * Navigate selection to parent of the current selection (Shift+Enter).
   */
  selectParent(): void;
  /**
   * Navigate selection to next sibling, wrapping around (Tab).
   */
  selectNextSibling(): void;
  /**
   * Navigate selection to previous sibling, wrapping around (Shift+Tab).
   */
  selectPreviousSibling(): void;
  /**
   * Zoom the viewport to fit all content (Shift+1).
   */
  zoomToFit(): void;
  /**
   * Zoom the viewport to fit the current selection (Shift+2).
   */
  zoomToSelection(): void;
  /**
   * Reset viewport zoom to 100% (Shift+0).
   */
  zoomTo100(): void;
  highlightStrokes(opts?: {
    nodes?: string[];
    style?: {
      strokeWidth?: number;
      stroke?: string;
    };
  }): void;
  runtime_renderer_set_layer_compositing(enable: boolean): void;
  runtime_renderer_set_pixel_preview_scale(scale: number): void;
  runtime_renderer_set_pixel_preview_stable(stable: boolean): void;
  runtime_renderer_set_render_policy_flags(flags: number): void;
  /**
   * Skip layout computation during scene loading.
   *
   * When enabled, `load_scene` derives layout from schema positions/sizes
   * instead of running the Taffy flexbox engine. Set **before** loading a scene.
   *
   * Use this for documents with only absolute positioning (e.g. imported
   * Figma files without auto-layout) to eliminate the layout phase, which
   * is the dominant cost in `load_scene` for large documents.
   */
  runtime_renderer_set_skip_layout(skip: boolean): void;
  /**
   * Bit flags for `runtime_renderer_set_isolation_mode`.
   *
   * - `OVERFLOW_DIM` (0x1): treat the isolation root's bounds as a
   *   viewport — subtree content that overflows is drawn at reduced
   *   opacity (`overflowOpacity`).
   */
  static readonly ISOLATION_MODE_OVERFLOW_DIM: number;
  /**
   * Set or clear isolation mode.
   *
   * When `nodeId` is a string, only that node and its descendants are
   * drawn and hit-tested. Pass `null` to clear isolation.
   * Isolation is viewport-only — it does not mutate the document.
   *
   * @param nodeId  Node to isolate, or `null` to clear.
   * @param flags   Bitmask of `Scene.ISOLATION_MODE_*` constants. Default `0`.
   * @param overflowOpacity  Opacity for overflow-dimmed content (0–1).
   *                         Only used when `ISOLATION_MODE_OVERFLOW_DIM` is set.
   *                         Default `0.15`.
   */
  runtime_renderer_set_isolation_mode(nodeId: string | null, flags?: number, overflowOpacity?: number): void;
  /**
   * Stage decoration preset constants for
   * `runtime_renderer_set_isolation_stage_preset`.
   *
   * Maps to the Tailwind CSS `box-shadow` scale.
   */
  static readonly ISOLATION_STAGE_PRESET_NONE = 0;
  static readonly ISOLATION_STAGE_PRESET_SHADOW_2XS = 1;
  static readonly ISOLATION_STAGE_PRESET_SHADOW_XS = 2;
  static readonly ISOLATION_STAGE_PRESET_SHADOW_SM = 3;
  static readonly ISOLATION_STAGE_PRESET_SHADOW_MD = 4;
  static readonly ISOLATION_STAGE_PRESET_SHADOW_LG = 5;
  static readonly ISOLATION_STAGE_PRESET_SHADOW_XL = 6;
  static readonly ISOLATION_STAGE_PRESET_SHADOW_2XL = 7;
  /**
   * Set the isolation mode stage decoration preset.
   *
   * | value | preset      |
   * |-------|-------------|
   * |   0   | None        |
   * |   1   | shadow-2xs  |
   * |   2   | shadow-xs   |
   * |   3   | shadow-sm   |
   * |   4   | shadow-md   |
   * |   5   | shadow-lg   |
   * |   6   | shadow-xl   |
   * |   7   | shadow-2xl  |
   *
   * Only takes effect when isolation mode is active.
   */
  runtime_renderer_set_isolation_stage_preset(preset: number): void;
  runtime_renderer_set_outline_mode(enable: boolean): void;
  setDebug(debug: boolean): void;
  toggleDebug(): void;
  setVerbose(verbose: boolean): void;
  /**
   * Set the visibility of the tiles.
   * @param show - The visibility of the tiles.
   */
  devtools_rendering_set_show_tiles(show: boolean): void;
  /**
   * Set the visibility of the FPS meter.
   * @param show - The visibility of the FPS meter.
   */
  devtools_rendering_set_show_fps_meter(show: boolean): void;
  /**
   * Set the visibility of the stats.
   * @param show - The visibility of the stats.
   */
  devtools_rendering_set_show_stats(show: boolean): void;
  /**
   * Set the visibility of the hit testing.
   * @param show - The visibility of the hit testing.
   */
  devtools_rendering_set_show_hit_testing(show: boolean): void;
  /**
   * Set the visibility of the ruler.
   * @param show - The visibility of the ruler.
   */
  devtools_rendering_set_show_ruler(show: boolean): void;
  /**
   * Enter text editing mode for a node.
   *
   * The engine reads all text properties (font, size, width, alignment)
   * directly from the scene node, so only the node ID is needed.
   */
  textEditEnter(nodeId: string): boolean;
  /**
   * Exit text editing mode.
   * @param commit - If true, returns the final text. If false, cancels.
   * @returns The committed text, or null if cancelled / no session.
   */
  textEditExit(commit: boolean): string | null;
  /** Check if a text editing session is active. */
  textEditIsActive(): boolean;
  /**
   * Returns the current text of the active editing session, or null if
   * no session is active.
   */
  textEditGetText(): string | null;
  /**
   * Undo within the text editing session.
   *
   * The session owns all undo during editing. Document-level undo is not
   * involved until the session exits.
   */
  textEditUndo(): boolean;
  /**
   * Redo within the text editing session.
   */
  textEditRedo(): boolean;
  /**
   * Dispatch an editing command.
   * @param cmd - The command object (JSON-serializable WasmEditCommand).
   */
  textEditCommand(cmd: TextEditCommand): void;
  /** Pointer down in layout-local coordinates. */
  textEditPointerDown(x: number, y: number, shift: boolean, clickCount: number): void;
  /** Pointer move in layout-local coordinates (during drag). */
  textEditPointerMove(x: number, y: number): void;
  /** Pointer up. */
  textEditPointerUp(): void;
  /** Set IME preedit string. */
  textEditImeSetPreedit(text: string): void;
  /** Commit IME composition. */
  textEditImeCommit(text: string): void;
  /** Cancel IME composition. */
  textEditImeCancel(): void;
  /** Get selected text as plain text. */
  textEditGetSelectedText(): string | null;
  /** Get selected text as HTML. */
  textEditGetSelectedHtml(): string | null;
  /** Paste plain text. */
  textEditPasteText(text: string): void;
  /** Paste HTML with formatting. */
  textEditPasteHtml(html: string): void;
  /**
   * Get the caret rectangle in layout-local coordinates.
   * @returns {x, y, w, h} or null if no active session.
   */
  textEditGetCaretRect(): {
    x: number;
    y: number;
    w: number;
    h: number;
  } | null;
  /**
   * Get selection rectangles in layout-local coordinates.
   * @returns Array of {x, y, w, h} or null if no selection.
   */
  textEditGetSelectionRects(): Array<{
    x: number;
    y: number;
    w: number;
    h: number;
  }> | null;
  textEditToggleBold(): void;
  textEditToggleItalic(): void;
  textEditToggleUnderline(): void;
  textEditToggleStrikethrough(): void;
  textEditSetFontSize(size: number): void;
  textEditSetFontFamily(family: string): void;
  textEditSetColor(r: number, g: number, b: number, a: number): void;
  /**
   * Tick the blink timer. Returns true if cursor visibility changed.
   */
  textEditTick(): boolean;
}
type TextEditCommand = {
  type: "Insert";
  text: string;
} | {
  type: "Backspace";
} | {
  type: "BackspaceWord";
} | {
  type: "BackspaceLine";
} | {
  type: "Delete";
} | {
  type: "DeleteWord";
} | {
  type: "DeleteLine";
} | {
  type: "DeleteByCut";
} | {
  type: "MoveLeft";
  extend: boolean;
} | {
  type: "MoveRight";
  extend: boolean;
} | {
  type: "MoveUp";
  extend: boolean;
} | {
  type: "MoveDown";
  extend: boolean;
} | {
  type: "MoveHome";
  extend: boolean;
} | {
  type: "MoveEnd";
  extend: boolean;
} | {
  type: "MoveDocStart";
  extend: boolean;
} | {
  type: "MoveDocEnd";
  extend: boolean;
} | {
  type: "MovePageUp";
  extend: boolean;
} | {
  type: "MovePageDown";
  extend: boolean;
} | {
  type: "MoveWordLeft";
  extend: boolean;
} | {
  type: "MoveWordRight";
  extend: boolean;
} | {
  type: "SelectAll";
} | {
  type: "Undo";
} | {
  type: "Redo";
};
//#endregion
//#region lib/index.d.ts
declare const version: string;
interface GridaCanvasModuleInitOptions {
  /**
   * This callback will be invoked when the loader needs to fetch a file (e.g.
   * the blob of WASM code). The correct url prefix should be applied.
   * @param file - the name of the file that is about to be loaded.
   *
   * @example
   * ```ts
   * locateFile: (file) => `https://unpkg.com/@grida/canvas-wasm@$latest/bin/${file}`,
   * locateFile: (file) => `custom-binary-path/${file}`,
   * ```
   */
  locateFile(file: string, version: string): string;
}
declare namespace types {
  type Vector2 = [number, number];
  type Transform2D = [[number, number, number], [number, number, number]];
  type Rect = {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  type ExportConstraints = {
    /**
     * - none: as-is, no resizing, scaling
     * - scale: scale with factor
     * - scale-to-fit-width: scale to fit width (with same aspect ratio)
     * - scale-to-fit-height: scale to fit height (with same aspect ratio)
     */
    type: "none" | "scale" | "scale-to-fit-width" | "scale-to-fit-height";
    /**
     * - scale: scale factor
     * - scale-to-fit-width: width in pixels
     * - scale-to-fit-height: height in pixels
     */
    value: number;
  };
  type ExportAs = ExportAsImage | ExportAsPDF | ExportAsSVG;
  type ExportAsPDF = {
    format: "PDF";
  };
  type ExportAsSVG = {
    format: "SVG";
  };
  /**
   * Options for exporting multiple nodes as a single multi-page PDF document.
   *
   * Each node ID becomes one page in the output PDF, rendered in order.
   */
  type ExportPdfDocumentOptions = {
    /** Node IDs to export, one per page, in order. */node_ids: string[];
    /**
     * Uniform page size in points. When `null` or `undefined`, each page
     * is sized to the source node's render bounds.
     */
    page_size?: {
      width: number;
      height: number;
    } | null;
  };
  type ExportAsPNG = {
    format: "PNG";
    constraints: ExportConstraints;
  };
  type ExportAsJPEG = {
    format: "JPEG";
    constraints: ExportConstraints;
    /**
     * Quality setting for JPEG compression (0-100). Higher values mean better quality but larger file size.
     * @default 100
     */
    quality?: number;
  };
  type ExportAsWEBP = {
    format: "WEBP";
    constraints: ExportConstraints;
    /**
     * Quality setting for WEBP compression (0-100). Higher values mean better quality but larger file size.
     * Quality 100 is lossless. Lower values use lossy compression.
     * @default 75
     */
    quality?: number;
  };
  type ExportAsBMP = {
    format: "BMP";
    constraints: ExportConstraints;
  };
  type ExportAsImage = ExportAsPNG | ExportAsJPEG | ExportAsWEBP | ExportAsBMP;
  type FontKey = {
    family: string;
  };
  type VectorNetworkVertex = Vector2;
  type VectorNetworkSegment = {
    a: number;
    b: number;
    ta: Vector2;
    tb: Vector2;
  };
  interface VectorNetwork {
    vertices: VectorNetworkVertex[];
    segments: VectorNetworkSegment[];
  }
  /**
   * Result of flattening a shape node to a vector network.
   *
   * When `corner_radius` is present, the vector network contains straight
   * segments and corner radius should be applied as a rendering effect.
   * When absent, corner geometry is baked into the vector network as curves.
   */
  interface FlattenResult extends VectorNetwork {
    corner_radius?: number;
  }
}
declare function init(opts?: GridaCanvasModuleInitOptions): Promise<ApplicationFactory>;
/**
 * Renderer configuration flags.
 *
 * Matches the Rust `RuntimeRendererConfig` fields that are exposed via
 * the C ABI `config_flags` bitfield. Pass at init time; individual
 * fields remain mutable via `Scene.runtime_renderer_set_*()` setters.
 */
interface RendererConfig {
  /**
   * Skip the Taffy flexbox layout engine during scene loading.
   * Derives layout from schema positions/sizes instead.
   * @default false
   */
  skip_layout?: boolean;
}
interface CreateSurfaceOptions {
  /**
   * when true, embedded fonts will be registered and used for text rendering.
   * @default true
   */
  use_embedded_fonts?: boolean;
  /**
   * Initial renderer configuration applied at construction.
   * Fields can still be changed at runtime via `Scene.runtime_renderer_set_*()`.
   */
  config?: RendererConfig;
}
declare class ApplicationFactory {
  readonly module: createGridaCanvas.GridaCanvasWasmBindings;
  constructor(module: createGridaCanvas.GridaCanvasWasmBindings);
  createWebGLCanvasSurface(canvas: HTMLCanvasElement, options?: CreateSurfaceOptions): Scene;
  createWebGLCanvasSurfaceById(htmlcanvasid: string): Scene;
}
type CreateCanvasOptions = {
  backend?: "webgl";
  canvas: HTMLCanvasElement;
  locateFile?: GridaCanvasModuleInitOptions["locateFile"];
  useEmbeddedFonts?: boolean; /** Initial renderer configuration. */
  config?: RendererConfig;
} | {
  backend: "raster";
  width: number;
  height: number;
  locateFile?: GridaCanvasModuleInitOptions["locateFile"];
  useEmbeddedFonts?: boolean; /** Initial renderer configuration. */
  config?: RendererConfig;
};
declare class Canvas {
  private readonly _backend;
  private readonly _scene;
  private constructor();
  get backend(): "webgl" | "raster";
  loadSceneGrida(data: Uint8Array): void;
  /**
   * Activate a scene previously decoded by `loadSceneGrida`.
   * Required before `exportNodeAs` or other rendering ops when the document
   * contains multiple scenes or when no default is implicitly activated.
   */
  switchScene(sceneId: string): void;
  /**
   * Return the IDs of all scenes decoded by the last `loadSceneGrida` call.
   */
  loadedSceneIds(): string[];
  /**
   * Register a font with the renderer. Multiple calls with the same family
   * and different font files are supported (e.g. Regular, Bold, Italic per family).
   */
  addFont(family: string, bytes: Uint8Array): void;
  /**
   * Set the default fallback font families. Order matters for script fallback (e.g. CJK).
   */
  setFallbackFonts(fonts: string[]): void;
  /**
   * Get the current default fallback font families.
   */
  getFallbackFonts(): string[];
  /**
   * Register image bytes with content-addressed RID (e.g. mem://&lt;hash&gt;).
   * Use when you do not need a stable logical identifier.
   */
  addImage(data: Uint8Array): CreateImageResourceResult | false;
  /**
   * Register image bytes with an explicit logical RID (e.g. res://images/logo.png).
   * Use when you need stable, document-mapped identifiers.
   */
  addImageWithId(data: Uint8Array, rid: string): AddImageWithIdResult | false;
  exportNodeAs(id: string, format: types.ExportAs): {
    data: Uint8Array;
  };
  /**
   * Release the underlying WASM application instance.
   *
   * After calling this, the `Canvas` (and its internal `Scene`) must not be used again.
   */
  dispose(): void;
  /**
   * Access the underlying WebGL `Scene` when `backend === "webgl"`.
   * Returns `null` for raster canvases.
   */
  asWebGL(): Scene | null;
  /** @internal */
  static _fromWebGL(scene: Scene): Canvas;
  /** @internal */
  static _fromRaster(scene: Scene): Canvas;
}
/**
 * Create a canvas instance backed by either:
 * - **WebGL**: interactive rendering in the browser
 * - **Raster**: headless CPU rendering (useful for Node export pipelines)
 */
declare function createCanvas(opts: CreateCanvasOptions): Promise<Canvas>;
//#endregion
export { type AddImageWithIdResult, type ApplicationFactory, Canvas, CreateCanvasOptions, type CreateImageResourceResult, GridaCanvasModuleInitOptions, type Scene, type SurfaceCursorIcon, type SurfaceOverlayConfig, type SurfaceResponse, type TextEditCommand, createCanvas, init as default, encodeButton, encodeModifiers, types, version };