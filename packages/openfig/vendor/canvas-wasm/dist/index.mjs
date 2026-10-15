import createGridaCanvas from "./grida-canvas-wasm";
//#region package.json
var version$1 = "0.91.0-canary.22";
//#endregion
//#region lib/modules/fonts.ts
var FontsAPI = class {
	constructor(module) {
		this.module = module;
	}
	/**
	* Allocates memory for a string and returns pointer and length.
	* @param txt - String to allocate
	* @returns [pointer, length] tuple
	*/
	_alloc_string(txt) {
		const len = this.module.lengthBytesUTF8(txt) + 1;
		const ptr = this.module._allocate(len);
		this.module.stringToUTF8(txt, ptr, len);
		return [ptr, len];
	}
	/**
	* Frees memory allocated for a string.
	* @param ptr - Pointer to free
	* @param len - Length of allocated memory
	*/
	_free_string(ptr, len) {
		this.module._deallocate(ptr, len);
	}
	/**
	* Allocates memory for binary data and returns pointer.
	* @param data - Binary data to allocate
	* @returns [pointer, length] tuple
	*/
	_alloc_data(data) {
		const uint8Data = data instanceof ArrayBuffer ? new Uint8Array(data) : data;
		const len = uint8Data.length;
		const ptr = this.module._allocate(len);
		this.module.HEAPU8.set(uint8Data, ptr);
		return [ptr, len];
	}
	/**
	* Converts a WASM-allocated string to JavaScript string and frees the WASM memory.
	* @param ptr - Pointer to WASM string
	* @returns JavaScript string
	*/
	_string_from_wasm(ptr) {
		const str = this.module.UTF8ToString(ptr);
		const len = this.module.lengthBytesUTF8(str) + 1;
		this._free_string(ptr, len);
		return str;
	}
	/**
	* Analyzes a font family with JavaScript-friendly interface.
	* This is the main API for working with multiple font files under the same family.
	*
	* @param fontFaces - Array of font face objects
	* @param familyName - Family name (optional)
	* @returns Promise resolving to FontAnalysisResult or FontError
	*/
	async analyzeFamily(fontFaces, familyName) {
		try {
			const fontCount = fontFaces.length;
			const familyNamePtr = familyName ? this._alloc_string(familyName)[0] : 0;
			const faceIdsPtr = this.module._allocate(fontCount * 4);
			const fontDataPtrsPtr = this.module._allocate(fontCount * 4);
			const fontDataSizesPtr = this.module._allocate(fontCount * 4);
			const userItalicFlagsPtr = this.module._allocate(fontCount * 4);
			const faceIdPtrs = [];
			const fontDataPtrs = [];
			const fontDataSizes = [];
			const userItalicFlags = [];
			for (let i = 0; i < fontCount; i++) {
				const face = fontFaces[i];
				const [faceIdPtr, _faceIdLen] = this._alloc_string(face.faceId);
				faceIdPtrs.push(faceIdPtr);
				const [fontDataPtr, fontDataSize] = this._alloc_data(face.data);
				fontDataPtrs.push(fontDataPtr);
				fontDataSizes.push(fontDataSize);
				const italicFlag = face.userFontStyleItalic === void 0 ? -1 : face.userFontStyleItalic ? 1 : 0;
				userItalicFlags.push(italicFlag);
			}
			for (let i = 0; i < fontCount; i++) {
				this.module.HEAPU32[faceIdsPtr / 4 + i] = faceIdPtrs[i];
				this.module.HEAPU32[fontDataPtrsPtr / 4 + i] = fontDataPtrs[i];
				this.module.HEAPU32[fontDataSizesPtr / 4 + i] = fontDataSizes[i];
				this.module.HEAP32[userItalicFlagsPtr / 4 + i] = userItalicFlags[i];
			}
			const resultPtr = this.module._grida_fonts_analyze_family(familyNamePtr, fontCount, faceIdsPtr, fontDataPtrsPtr, fontDataSizesPtr, userItalicFlagsPtr);
			const resultJson = this._string_from_wasm(resultPtr);
			const result = JSON.parse(resultJson);
			if (familyNamePtr !== 0) this._free_string(familyNamePtr, this.module.lengthBytesUTF8(familyName || "") + 1);
			this.module._deallocate(faceIdsPtr, fontCount * 4);
			this.module._deallocate(fontDataPtrsPtr, fontCount * 4);
			this.module._deallocate(fontDataSizesPtr, fontCount * 4);
			this.module._deallocate(userItalicFlagsPtr, fontCount * 4);
			for (let i = 0; i < fontCount; i++) {
				this._free_string(faceIdPtrs[i], this.module.lengthBytesUTF8(fontFaces[i].faceId) + 1);
				this.module._deallocate(fontDataPtrs[i], fontDataSizes[i]);
			}
			return result;
		} catch (error) {
			return {
				success: false,
				error: { message: error instanceof Error ? error.message : String(error) }
			};
		}
	}
	/**
	* Parses a single font file with JavaScript-friendly interface.
	* This is exposed for fast, single font analysis.
	*
	* @param fontData - Font data as ArrayBuffer or Uint8Array
	* @param faceId - Unique identifier for this font face
	* @param userFontStyleItalic - User-declared italic style (optional)
	* @returns Promise resolving to FaceRecord
	*/
	async parseFont(fontData, faceId, userFontStyleItalic) {
		try {
			const [fontDataPtr, fontDataSize] = this._alloc_data(fontData);
			const [faceIdPtr, faceIdLen] = this._alloc_string(faceId);
			const userItalicPtr = userFontStyleItalic !== void 0 ? this._alloc_string(userFontStyleItalic.toString())[0] : 0;
			const resultPtr = this.module._grida_fonts_parse_font(fontDataPtr, fontDataSize, faceIdPtr, userItalicPtr);
			const resultJson = this._string_from_wasm(resultPtr);
			const result = JSON.parse(resultJson);
			this.module._deallocate(fontDataPtr, fontDataSize);
			this._free_string(faceIdPtr, faceIdLen);
			if (userItalicPtr !== 0) this._free_string(userItalicPtr, 6);
			return result;
		} catch (error) {
			throw new Error(error instanceof Error ? error.message : String(error));
		}
	}
};
//#endregion
//#region lib/modules/markdown.ts
var MarkdownAPI = class {
	constructor(module) {
		this.module = module;
	}
	/**
	* Allocates memory for a string and returns pointer and length.
	* @param txt - String to allocate
	* @returns [pointer, length] tuple
	*/
	_alloc_string(txt) {
		const len = this.module.lengthBytesUTF8(txt) + 1;
		const ptr = this.module._allocate(len);
		this.module.stringToUTF8(txt, ptr, len);
		return [ptr, len];
	}
	/**
	* Frees memory allocated for a string.
	* @param ptr - Pointer to free
	* @param len - Length of allocated memory
	*/
	_free_string(ptr, len) {
		this.module._deallocate(ptr, len);
	}
	/**
	* Converts a WASM-allocated string to JavaScript string and frees the WASM memory.
	* @param ptr - Pointer to WASM string
	* @returns JavaScript string
	*/
	_string_from_wasm(ptr) {
		const str = this.module.UTF8ToString(ptr);
		const len = this.module.lengthBytesUTF8(str) + 1;
		this._free_string(ptr, len);
		return str;
	}
	/**
	* Converts markdown text to HTML with JavaScript-friendly interface.
	* Parses markdown content and converts it to HTML using the pulldown-cmark library.
	*
	* @param markdown - Input markdown string
	* @returns MarkdownToHtmlResponse containing the converted HTML or error information
	*/
	toHtml(markdown) {
		let markdownPtr = null;
		let markdownLen = null;
		try {
			[markdownPtr, markdownLen] = this._alloc_string(markdown);
			const resultPtr = this.module._grida_markdown_to_html(markdownPtr);
			const resultJson = this._string_from_wasm(resultPtr);
			return JSON.parse(resultJson);
		} catch (error) {
			return {
				success: false,
				error: { message: error instanceof Error ? error.message : String(error) }
			};
		} finally {
			if (markdownPtr !== null && markdownLen !== null) this._free_string(markdownPtr, markdownLen);
		}
	}
};
//#endregion
//#region lib/modules/svg.ts
var SVGAPI = class {
	constructor(module) {
		this.module = module;
	}
	/**
	* Allocates memory for a string and returns pointer and length.
	* @param txt - String to allocate
	* @returns [pointer, length] tuple
	*/
	_alloc_string(txt) {
		const len = this.module.lengthBytesUTF8(txt) + 1;
		const ptr = this.module._allocate(len);
		this.module.stringToUTF8(txt, ptr, len);
		return [ptr, len];
	}
	/**
	* Frees memory allocated for a string.
	* @param ptr - Pointer to free
	* @param len - Length of allocated memory
	*/
	_free_string(ptr, len) {
		this.module._deallocate(ptr, len);
	}
	/**
	* Converts a WASM-allocated string to JavaScript string and frees the WASM memory.
	* @param ptr - Pointer to WASM string
	* @returns JavaScript string
	*/
	_string_from_wasm(ptr) {
		const str = this.module.UTF8ToString(ptr);
		const len = this.module.lengthBytesUTF8(str) + 1;
		this._free_string(ptr, len);
		return str;
	}
	/**
	* Optimizes and resolves an SVG with JavaScript-friendly interface.
	* Resolves CSS styles from `<style>` tags and inlines them as element attributes.
	*
	* @param svg - Input SVG string
	* @returns Promise resolving to SvgOptimizeResponse
	*/
	optimize(svg) {
		let svgPtr = null;
		let svgLen = null;
		try {
			[svgPtr, svgLen] = this._alloc_string(svg);
			const resultPtr = this.module._grida_svg_optimize(svgPtr);
			const resultJson = this._string_from_wasm(resultPtr);
			return JSON.parse(resultJson);
		} catch (error) {
			return {
				success: false,
				error: { message: error instanceof Error ? error.message : String(error) }
			};
		} finally {
			if (svgPtr !== null && svgLen !== null) this._free_string(svgPtr, svgLen);
		}
	}
	/**
	* Parse SVG and return `.grida` FlatBuffers bytes.
	*
	* This replaces the two-step pipeline (pack → JS convert) with a
	* single Rust call that produces the FBS binary directly.
	*
	* @returns Uint8Array of FBS bytes, or null on error
	*/
	toDocument(svg) {
		let svgPtr = null;
		let svgLen = null;
		let resultPtr = 0;
		let resultLen = 0;
		try {
			[svgPtr, svgLen] = this._alloc_string(svg);
			resultPtr = this.module._grida_svg_to_document(svgPtr);
			if (resultPtr === 0) return null;
			const heap = this.module.HEAPU8;
			resultLen = heap[resultPtr] | heap[resultPtr + 1] << 8 | heap[resultPtr + 2] << 16 | heap[resultPtr + 3] << 24;
			const bytes = new Uint8Array(resultLen);
			bytes.set(heap.subarray(resultPtr + 4, resultPtr + 4 + resultLen));
			return bytes;
		} catch {
			return null;
		} finally {
			if (resultPtr !== 0) this.module._deallocate(resultPtr, 4 + resultLen);
			if (svgPtr !== null && svgLen !== null) this._free_string(svgPtr, svgLen);
		}
	}
};
//#endregion
//#region lib/modules/memory.ts
let memory;
(function(_memory) {
	function rect_from_vec4(vec4) {
		return {
			x: vec4[0],
			y: vec4[1],
			width: vec4[2],
			height: vec4[3]
		};
	}
	_memory.rect_from_vec4 = rect_from_vec4;
})(memory || (memory = {}));
//#endregion
//#region lib/modules/ffi.ts
let ffi;
(function(_ffi) {
	const UTF8_DECODER = new TextDecoder("utf-8");
	function allocString(module, s) {
		const len = module.lengthBytesUTF8(s) + 1;
		const ptr = module._allocate(len);
		module.stringToUTF8(s, ptr, len);
		return [ptr, len];
	}
	_ffi.allocString = allocString;
	function free(module, ptr, len) {
		module._deallocate(ptr, len);
	}
	_ffi.free = free;
	function allocBytes(module, bytes) {
		const len = bytes.length;
		const ptr = module._allocate(len);
		module.HEAPU8.set(bytes, ptr);
		return [ptr, len];
	}
	_ffi.allocBytes = allocBytes;
	function readLenPrefixedBytes(module, outptr) {
		const dataLength = new DataView(module.HEAPU8.buffer, module.HEAPU8.byteOffset, module.HEAPU8.byteLength).getUint32(outptr, true);
		const data = module.HEAPU8.slice(outptr + 4, outptr + 4 + dataLength);
		module._deallocate(outptr, 4 + dataLength);
		return data;
	}
	_ffi.readLenPrefixedBytes = readLenPrefixedBytes;
	function readLenPrefixedString(module, outptr) {
		const bytes = readLenPrefixedBytes(module, outptr);
		return UTF8_DECODER.decode(bytes);
	}
	_ffi.readLenPrefixedString = readLenPrefixedString;
})(ffi || (ffi = {}));
//#endregion
//#region lib/modules/canvas.ts
const ApplicationCommandID = {
	ZoomIn: 1,
	ZoomOut: 2,
	ZoomDelta: 3,
	Pan: 4,
	SelectAll: 5,
	DeselectAll: 6,
	SelectChildren: 7,
	SelectParent: 8,
	SelectNextSibling: 9,
	SelectPreviousSibling: 10,
	ZoomToFit: 13,
	ZoomToSelection: 14,
	ZoomTo100: 15
};
const RESPONSE_NEEDS_REDRAW = 1;
const RESPONSE_CURSOR_CHANGED = 2;
const RESPONSE_SELECTION_CHANGED = 4;
const RESPONSE_HOVER_CHANGED = 8;
const CURSOR_MAP = {
	0: "default",
	1: "pointer",
	2: "grab",
	3: "grabbing",
	4: "crosshair",
	5: "move"
};
/** Encode modifier keys as a bitmask for the WASM C-ABI. */
function encodeModifiers(event) {
	const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);
	return (event.shiftKey ? 1 : 0) | (event.altKey ? 2 : 0) | ((isMac ? event.metaKey : event.ctrlKey) ? 4 : 0);
}
/** Map DOM MouseEvent.button to WASM pointer button id. */
function encodeButton(button) {
	if (button === 2) return 1;
	if (button === 1) return 2;
	return 0;
}
function unpackResponse(bits) {
	return {
		needsRedraw: (bits & RESPONSE_NEEDS_REDRAW) !== 0,
		cursorChanged: (bits & RESPONSE_CURSOR_CHANGED) !== 0,
		selectionChanged: (bits & RESPONSE_SELECTION_CHANGED) !== 0,
		hoverChanged: (bits & RESPONSE_HOVER_CHANGED) !== 0
	};
}
var Scene = class {
	constructor(module, ptr) {
		this.module = module;
		this.appptr = ptr;
		this.fontskit = new FontsAPI(module);
		this.markdownkit = new MarkdownAPI(module);
		this.svgkit = new SVGAPI(module);
	}
	_assertAlive() {
		if (this.appptr === 0) throw new Error("Scene is disposed");
	}
	/**
	* Release the underlying WASM application instance.
	*
	* After calling this, the `Scene` instance must not be used again.
	*/
	dispose() {
		if (this.appptr === 0) return;
		this.module._destroy(this.appptr);
		this.appptr = 0;
	}
	/**
	* Allocates memory for a string and returns pointer and length.
	* @param txt - String to allocate
	* @returns [pointer, length] tuple
	*/
	_alloc_string(txt) {
		this._assertAlive();
		return ffi.allocString(this.module, txt);
	}
	/**
	* Frees memory allocated for a string.
	* @param ptr - Pointer to free
	* @param len - Length of allocated memory
	*/
	_free_string(ptr, len) {
		this._assertAlive();
		ffi.free(this.module, ptr, len);
	}
	/**
	* Load a scene from `.grida` FlatBuffers binary bytes.
	* Zero-copy on the Rust side — much more memory-efficient than JSON for large documents.
	* @param data - The FlatBuffers binary data.
	*/
	loadSceneGrida(data) {
		this._assertAlive();
		const [ptr, len] = ffi.allocBytes(this.module, data);
		this.module._load_scene_grida(this.appptr, ptr, len);
		ffi.free(this.module, ptr, len);
	}
	/**
	* Switch to a previously loaded scene by its string ID.
	* Only works after `loadSceneGrida` has decoded a multi-scene document.
	* @param sceneId - The string ID of the scene to switch to.
	*/
	switchScene(sceneId) {
		this._assertAlive();
		const [ptr, len] = this._alloc_string(sceneId);
		this.module._switch_scene(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
	}
	/**
	* Return the IDs of all scenes decoded by the last `loadSceneGrida` call.
	*/
	loadedSceneIds() {
		this._assertAlive();
		const outptr = this.module._loaded_scene_ids(this.appptr);
		if (outptr === 0) return [];
		const str = ffi.readLenPrefixedString(this.module, outptr);
		return JSON.parse(str);
	}
	/**
	* Returns image refs that were needed during the last render but not found.
	* Only returns refs not yet reported in a previous call.
	* Returns an empty array if no new missing images.
	*/
	drainMissingImages() {
		this._assertAlive();
		const outptr = this.module._drain_missing_images(this.appptr);
		if (outptr === 0) return [];
		const str = ffi.readLenPrefixedString(this.module, outptr);
		return JSON.parse(str);
	}
	/**
	* Resolve a missing image by providing its raw bytes for a given resource ID.
	* The image is decoded, stored, and a redraw is queued.
	* @param rid - Resource ID (e.g. "res://images/abc123")
	* @param bytes - Raw image bytes (PNG, JPEG, WebP, etc.)
	*/
	resolveImage(rid, bytes) {
		this._assertAlive();
		const [ridPtr, ridLen] = this._alloc_string(rid);
		const [bytesPtr, bytesLen] = ffi.allocBytes(this.module, bytes);
		this.module._resolve_image(this.appptr, ridPtr, ridLen - 1, bytesPtr, bytesLen);
		this._free_string(ridPtr, ridLen);
		ffi.free(this.module, bytesPtr, bytesLen);
	}
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
	replaceNode(bytes) {
		this._assertAlive();
		const [ptr, len] = ffi.allocBytes(this.module, bytes);
		const ok = this.module._replace_node_grida(this.appptr, ptr, len);
		ffi.free(this.module, ptr, len);
		return ok;
	}
	/**
	* Remove a node and all its descendants from the active scene, keyed by
	* user id. Returns `false` if the id is unknown.
	*/
	deleteNode(id) {
		this._assertAlive();
		const [ptr, len] = this._alloc_string(id);
		const ok = this.module._delete_node(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
		return ok;
	}
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
	syncLinks(parentId, childrenIds) {
		this._assertAlive();
		const [pPtr, pLen] = this._alloc_string(parentId);
		const childrenBlob = childrenIds.join("\n");
		const [cPtr, cLen] = childrenBlob.length === 0 ? [0, 0] : this._alloc_string(childrenBlob);
		const ok = this.module._sync_links(this.appptr, pPtr, pLen - 1, cPtr, cLen === 0 ? 0 : cLen - 1);
		this._free_string(pPtr, pLen);
		if (cLen !== 0) this._free_string(cPtr, cLen);
		return ok;
	}
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
	addFont(family, data) {
		this._assertAlive();
		const [fptr, flen] = this._alloc_string(family);
		const [ptr, len] = ffi.allocBytes(this.module, data);
		this.module._add_font(this.appptr, fptr, flen - 1, ptr, len);
		this._free_string(fptr, flen);
		ffi.free(this.module, ptr, len);
	}
	addImage(data) {
		this._assertAlive();
		const [ptr, len] = ffi.allocBytes(this.module, data);
		const out = this.module._add_image(this.appptr, ptr, len);
		ffi.free(this.module, ptr, len);
		if (out === 0) return false;
		const txt = ffi.readLenPrefixedString(this.module, out);
		try {
			return JSON.parse(txt);
		} catch {
			return false;
		}
	}
	addImageWithId(data, rid) {
		this._assertAlive();
		const [dataPtr, dataLen] = ffi.allocBytes(this.module, data);
		const [ridPtr, ridLen] = this._alloc_string(rid);
		const out = this.module._add_image_with_rid(this.appptr, dataPtr, dataLen, ridPtr, ridLen - 1);
		ffi.free(this.module, dataPtr, dataLen);
		this._free_string(ridPtr, ridLen);
		if (out === 0) return false;
		const txt = ffi.readLenPrefixedString(this.module, out);
		try {
			return JSON.parse(txt);
		} catch {
			return false;
		}
	}
	getImageBytes(ref) {
		this._assertAlive();
		const [ptr, len] = this._alloc_string(ref);
		const outptr = this.module._get_image_bytes(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
		if (outptr === 0) return null;
		return ffi.readLenPrefixedBytes(this.module, outptr);
	}
	getImageSize(ref) {
		this._assertAlive();
		const [ptr, len] = this._alloc_string(ref);
		const outptr = this.module._get_image_size(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
		if (outptr === 0) return null;
		const view = this.module.HEAPU32.slice(outptr >> 2, (outptr >> 2) + 2);
		this.module._deallocate(outptr, 8);
		return {
			width: view[0],
			height: view[1]
		};
	}
	hasMissingFonts() {
		this._assertAlive();
		return this.module._has_missing_fonts(this.appptr);
	}
	listMissingFonts() {
		this._assertAlive();
		const ptr = this.module._list_missing_fonts(this.appptr);
		if (ptr === 0) return [];
		const str = ffi.readLenPrefixedString(this.module, ptr);
		return JSON.parse(str);
	}
	listAvailableFonts() {
		this._assertAlive();
		const ptr = this.module._list_available_fonts(this.appptr);
		if (ptr === 0) return [];
		const str = ffi.readLenPrefixedString(this.module, ptr);
		return JSON.parse(str);
	}
	setFallbackFonts(fonts) {
		this._assertAlive();
		const json = JSON.stringify(fonts);
		const [ptr, len] = this._alloc_string(json);
		this.module._set_default_fallback_fonts(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
	}
	getFallbackFonts() {
		this._assertAlive();
		const ptr = this.module._get_default_fallback_fonts(this.appptr);
		if (ptr === 0) return [];
		const str = ffi.readLenPrefixedString(this.module, ptr);
		return JSON.parse(str);
	}
	/**
	* Tick the application clock.
	* bind this to requestAnimationFrame loop or similar
	* @param time - The time in milliseconds. use performance.now()
	* @default - performance.now()
	*/
	tick(time) {
		this._assertAlive();
		this.module._tick(this.appptr, time ?? performance.now());
	}
	/**
	* Resize the surface.
	* @param width - The width of the surface.
	* @param height - The height of the surface.
	*/
	resize(width, height) {
		this._assertAlive();
		this.module._resize_surface(this.appptr, width, height);
	}
	redraw() {
		this._assertAlive();
		this.module._redraw(this.appptr);
	}
	setMainCameraTransform(transform) {
		this._assertAlive();
		this.module._set_main_camera_transform(this.appptr, transform[0][0], transform[0][1], transform[0][2], transform[1][0], transform[1][1], transform[1][2]);
	}
	getNodeIdFromPoint(x, y) {
		this._assertAlive();
		const ptr = this.module._get_node_id_from_point(this.appptr, x, y);
		if (ptr === 0) return null;
		return ffi.readLenPrefixedString(this.module, ptr);
	}
	getNodeIdsFromPoint(x, y) {
		this._assertAlive();
		const ptr = this.module._get_node_ids_from_point(this.appptr, x, y);
		if (ptr === 0) return [];
		const str = ffi.readLenPrefixedString(this.module, ptr);
		return JSON.parse(str);
	}
	getNodeIdsFromEnvelope(envelope) {
		this._assertAlive();
		const ptr = this.module._get_node_ids_from_envelope(this.appptr, envelope.x, envelope.y, envelope.width, envelope.height);
		if (ptr === 0) return [];
		const str = ffi.readLenPrefixedString(this.module, ptr);
		return JSON.parse(str);
	}
	/**
	* Get the absolute bounding box of a node or the active scene.
	*
	* @param target - A node ID, or `"<scene>"` to get the union bounds of the
	*   active scene's root children (computed in a single WASM call).
	*/
	getNodeAbsoluteBoundingBox(target) {
		const id = target;
		this._assertAlive();
		const [ptr, len] = this._alloc_string(id);
		const outptr = this.module._get_node_absolute_bounding_box(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
		if (outptr === 0) return null;
		const rect = this.module.HEAPF32.slice(outptr >> 2, (outptr >> 2) + 4);
		this.module._deallocate(outptr, 16);
		return memory.rect_from_vec4(rect);
	}
	/**
	* Return the structural node ID ancestry path from the scene root to the
	* target node, inclusive.
	*
	* The returned array contains user-facing string IDs ordered as
	* `[root, ..., parent, id]`.
	*
	* Returns `null` if the node does not exist in the scene.
	*/
	getNodeIdPath(id) {
		this._assertAlive();
		const [ptr, len] = this._alloc_string(id);
		const outptr = this.module._get_node_id_path(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
		if (outptr === 0) return null;
		const str = ffi.readLenPrefixedString(this.module, outptr);
		return JSON.parse(str);
	}
	/**
	* Convert a node into a vector network representation.
	* Supports primitive shapes and text nodes.
	*
	* Returns a flatten result containing the vector network and an optional
	* corner radius. When `corner_radius` is present, it means the vector
	* network has straight segments and corner radius should be applied as
	* a rendering effect. When absent, curves are baked into the geometry.
	*/
	toVectorNetwork(id) {
		this._assertAlive();
		const [ptr, len] = this._alloc_string(id);
		const outptr = this.module._to_vector_network(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
		if (outptr === 0) return null;
		const str = ffi.readLenPrefixedString(this.module, outptr);
		return JSON.parse(str);
	}
	exportNodeAs(id, format) {
		this._assertAlive();
		const [id_ptr, id_len] = this._alloc_string(id);
		const [fmt_ptr, fmt_len] = this._alloc_string(JSON.stringify(format));
		const outptr = this.module._export_node_as(this.appptr, id_ptr, id_len - 1, fmt_ptr, fmt_len - 1);
		this._free_string(id_ptr, id_len);
		this._free_string(fmt_ptr, fmt_len);
		if (outptr === 0) throw new Error(`Failed to export node as ${format.format}`);
		return { data: ffi.readLenPrefixedBytes(this.module, outptr) };
	}
	/**
	* Export multiple nodes as a single multi-page PDF document.
	*
	* Each node ID in `options.node_ids` becomes one page in the output PDF.
	* Returns the raw PDF bytes.
	*/
	exportPdfDocument(options) {
		this._assertAlive();
		const [json_ptr, json_len] = this._alloc_string(JSON.stringify(options));
		const outptr = this.module._export_pdf_document(this.appptr, json_ptr, json_len - 1);
		this._free_string(json_ptr, json_len);
		if (outptr === 0) throw new Error("Failed to export PDF document");
		return { data: ffi.readLenPrefixedBytes(this.module, outptr) };
	}
	execCommand(command) {
		this._assertAlive();
		this.module._command(this.appptr, ApplicationCommandID[command], 0, 0);
	}
	execCommandPan(tx, ty) {
		this._assertAlive();
		this.module._command(this.appptr, ApplicationCommandID.Pan, tx, ty);
	}
	execCommandZoomDelta(tz) {
		this._assertAlive();
		this.module._command(this.appptr, ApplicationCommandID.ZoomDelta, tz, 0);
	}
	pointermove(x, y) {
		this._assertAlive();
		this.module._pointer_move(this.appptr, x, y);
	}
	/**
	* Dispatch a pointer-move through the surface event system.
	* Handles hover state, cursor icon, and marquee drag.
	*/
	surfacePointerMove(x, y) {
		this._assertAlive();
		return unpackResponse(this.module._surface_pointer_move(this.appptr, x, y));
	}
	/**
	* Dispatch a pointer-down through the surface event system.
	* Handles node selection, shift-toggle, and marquee start.
	* @param button - DOM MouseEvent.button (0=primary, 1=middle, 2=secondary)
	* @param modifiers - Bitmask from `encodeModifiers(event)`
	*/
	surfacePointerDown(x, y, button, modifiers) {
		this._assertAlive();
		return unpackResponse(this.module._surface_pointer_down(this.appptr, x, y, encodeButton(button), modifiers));
	}
	/**
	* Dispatch a pointer-up through the surface event system.
	* Ends marquee gesture.
	* @param button - DOM MouseEvent.button (0=primary, 1=middle, 2=secondary)
	* @param modifiers - Bitmask from `encodeModifiers(event)`
	*/
	surfacePointerUp(x, y, button, modifiers) {
		this._assertAlive();
		return unpackResponse(this.module._surface_pointer_up(this.appptr, x, y, encodeButton(button), modifiers));
	}
	/**
	* Get the current surface cursor icon.
	*/
	getSurfaceCursor() {
		this._assertAlive();
		return CURSOR_MAP[this.module._surface_get_cursor(this.appptr)] ?? "default";
	}
	/**
	* Get the currently hovered node ID, or null.
	*/
	getSurfaceHoveredNode() {
		this._assertAlive();
		const ptr = this.module._surface_get_hovered_node(this.appptr);
		if (ptr === 0) return null;
		const str = ffi.readLenPrefixedString(this.module, ptr);
		return JSON.parse(str);
	}
	/**
	* Get the currently selected node IDs.
	*/
	getSurfaceSelectedNodes() {
		this._assertAlive();
		const ptr = this.module._surface_get_selected_nodes(this.appptr);
		if (ptr === 0) return [];
		const str = ffi.readLenPrefixedString(this.module, ptr);
		return JSON.parse(str);
	}
	/**
	* Restore selection state (e.g. from undo/redo history).
	*/
	setSurfaceSelection(ids) {
		this._assertAlive();
		const json = JSON.stringify(ids);
		const [ptr, len] = this._alloc_string(json);
		this.module._surface_set_selection(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
	}
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
	queryPaintGroups(ids, target = "fill", options) {
		this._assertAlive();
		const recursive = options?.recursive ?? true;
		const limit = options?.limit ?? 0;
		const targetCode = target === "stroke" ? 1 : 0;
		const idsJson = JSON.stringify(ids);
		const [idsPtr, idsLen] = this._alloc_string(idsJson);
		const ptr = this.module._query_paint_groups(this.appptr, idsPtr, idsLen - 1, targetCode, recursive, limit);
		this._free_string(idsPtr, idsLen);
		if (ptr === 0) return [];
		const str = ffi.readLenPrefixedString(this.module, ptr);
		return JSON.parse(str).map((g) => ({
			paint: convertRustPaintToJS(g.paint),
			node_ids: g.node_ids
		}));
	}
	/**
	* Configure surface overlay rendering (size meter, frame titles, etc.).
	*/
	setSurfaceOverlayConfig(config) {
		this._assertAlive();
		const json = JSON.stringify(config);
		const [ptr, len] = this._alloc_string(json);
		this.module._set_surface_overlay_config(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
	}
	/**
	* Select all nodes in the current scene.
	*/
	selectAll() {
		this._assertAlive();
		this.module._command(this.appptr, ApplicationCommandID.SelectAll, 0, 0);
	}
	/**
	* Deselect all nodes.
	*/
	deselectAll() {
		this._assertAlive();
		this.module._command(this.appptr, ApplicationCommandID.DeselectAll, 0, 0);
	}
	/**
	* Navigate selection to direct children of the current selection (Enter).
	*/
	selectChildren() {
		this._assertAlive();
		this.module._command(this.appptr, ApplicationCommandID.SelectChildren, 0, 0);
	}
	/**
	* Navigate selection to parent of the current selection (Shift+Enter).
	*/
	selectParent() {
		this._assertAlive();
		this.module._command(this.appptr, ApplicationCommandID.SelectParent, 0, 0);
	}
	/**
	* Navigate selection to next sibling, wrapping around (Tab).
	*/
	selectNextSibling() {
		this._assertAlive();
		this.module._command(this.appptr, ApplicationCommandID.SelectNextSibling, 0, 0);
	}
	/**
	* Navigate selection to previous sibling, wrapping around (Shift+Tab).
	*/
	selectPreviousSibling() {
		this._assertAlive();
		this.module._command(this.appptr, ApplicationCommandID.SelectPreviousSibling, 0, 0);
	}
	/**
	* Zoom the viewport to fit all content (Shift+1).
	*/
	zoomToFit() {
		this._assertAlive();
		this.module._command(this.appptr, ApplicationCommandID.ZoomToFit, 0, 0);
	}
	/**
	* Zoom the viewport to fit the current selection (Shift+2).
	*/
	zoomToSelection() {
		this._assertAlive();
		this.module._command(this.appptr, ApplicationCommandID.ZoomToSelection, 0, 0);
	}
	/**
	* Reset viewport zoom to 100% (Shift+0).
	*/
	zoomTo100() {
		this._assertAlive();
		this.module._command(this.appptr, ApplicationCommandID.ZoomTo100, 0, 0);
	}
	highlightStrokes(opts) {
		this._assertAlive();
		const json = JSON.stringify({
			nodes: opts?.nodes ?? [],
			style: opts?.style
		});
		const [ptr, len] = this._alloc_string(json);
		this.module._highlight_strokes(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
	}
	runtime_renderer_set_layer_compositing(enable) {
		this._assertAlive();
		this.module._runtime_renderer_set_layer_compositing(this.appptr, enable);
	}
	runtime_renderer_set_pixel_preview_scale(scale) {
		this._assertAlive();
		this.module._runtime_renderer_set_pixel_preview_scale(this.appptr, scale);
	}
	runtime_renderer_set_pixel_preview_stable(stable) {
		this._assertAlive();
		this.module._runtime_renderer_set_pixel_preview_stable(this.appptr, stable);
	}
	runtime_renderer_set_render_policy_flags(flags) {
		this._assertAlive();
		this.module._runtime_renderer_set_render_policy_flags(this.appptr, flags);
	}
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
	runtime_renderer_set_skip_layout(skip) {
		this._assertAlive();
		this.module._runtime_renderer_set_skip_layout(this.appptr, skip);
	}
	static {
		this.ISOLATION_MODE_OVERFLOW_DIM = 1;
	}
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
	runtime_renderer_set_isolation_mode(nodeId, flags = 0, overflowOpacity = .15) {
		this._assertAlive();
		if (nodeId === null) {
			this.module._runtime_renderer_set_isolation_mode(this.appptr, 0, 0, 0, 0);
			return;
		}
		const [ptr, len] = this._alloc_string(nodeId);
		this.module._runtime_renderer_set_isolation_mode(this.appptr, ptr, len - 1, flags, overflowOpacity);
		this._free_string(ptr, len);
	}
	static {
		this.ISOLATION_STAGE_PRESET_NONE = 0;
	}
	static {
		this.ISOLATION_STAGE_PRESET_SHADOW_2XS = 1;
	}
	static {
		this.ISOLATION_STAGE_PRESET_SHADOW_XS = 2;
	}
	static {
		this.ISOLATION_STAGE_PRESET_SHADOW_SM = 3;
	}
	static {
		this.ISOLATION_STAGE_PRESET_SHADOW_MD = 4;
	}
	static {
		this.ISOLATION_STAGE_PRESET_SHADOW_LG = 5;
	}
	static {
		this.ISOLATION_STAGE_PRESET_SHADOW_XL = 6;
	}
	static {
		this.ISOLATION_STAGE_PRESET_SHADOW_2XL = 7;
	}
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
	runtime_renderer_set_isolation_stage_preset(preset) {
		this._assertAlive();
		this.module._runtime_renderer_set_isolation_stage_preset(this.appptr, preset);
	}
	runtime_renderer_set_outline_mode(enable) {
		this._assertAlive();
		this.module._runtime_renderer_set_outline_mode(this.appptr, enable);
	}
	setDebug(debug) {
		this._assertAlive();
		this.module._set_debug(this.appptr, debug);
	}
	toggleDebug() {
		this._assertAlive();
		this.module._toggle_debug(this.appptr);
	}
	setVerbose(verbose) {
		this._assertAlive();
		this.module._set_verbose(this.appptr, verbose);
	}
	/**
	* Set the visibility of the tiles.
	* @param show - The visibility of the tiles.
	*/
	devtools_rendering_set_show_tiles(show) {
		this._assertAlive();
		this.module._devtools_rendering_set_show_tiles(this.appptr, show);
	}
	/**
	* Set the visibility of the FPS meter.
	* @param show - The visibility of the FPS meter.
	*/
	devtools_rendering_set_show_fps_meter(show) {
		this._assertAlive();
		this.module._devtools_rendering_set_show_fps_meter(this.appptr, show);
	}
	/**
	* Set the visibility of the stats.
	* @param show - The visibility of the stats.
	*/
	devtools_rendering_set_show_stats(show) {
		this._assertAlive();
		this.module._devtools_rendering_set_show_stats(this.appptr, show);
	}
	/**
	* Set the visibility of the hit testing.
	* @param show - The visibility of the hit testing.
	*/
	devtools_rendering_set_show_hit_testing(show) {
		this._assertAlive();
		this.module._devtools_rendering_set_show_hit_testing(this.appptr, show);
	}
	/**
	* Set the visibility of the ruler.
	* @param show - The visibility of the ruler.
	*/
	devtools_rendering_set_show_ruler(show) {
		this._assertAlive();
		this.module._devtools_rendering_set_show_ruler(this.appptr, show);
	}
	/**
	* Enter text editing mode for a node.
	*
	* The engine reads all text properties (font, size, width, alignment)
	* directly from the scene node, so only the node ID is needed.
	*/
	textEditEnter(nodeId) {
		this._assertAlive();
		const [ptr, len] = this._alloc_string(nodeId);
		const result = this.module._text_edit_enter(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
		return !!result;
	}
	/**
	* Exit text editing mode.
	* @param commit - If true, returns the final text. If false, cancels.
	* @returns The committed text, or null if cancelled / no session.
	*/
	textEditExit(commit) {
		this._assertAlive();
		const outptr = this.module._text_edit_exit(this.appptr, commit);
		if (!outptr) return null;
		return ffi.readLenPrefixedString(this.module, outptr);
	}
	/** Check if a text editing session is active. */
	textEditIsActive() {
		this._assertAlive();
		return !!this.module._text_edit_is_active(this.appptr);
	}
	/**
	* Returns the current text of the active editing session, or null if
	* no session is active.
	*/
	textEditGetText() {
		this._assertAlive();
		const outptr = this.module._text_edit_get_text(this.appptr);
		if (!outptr) return null;
		return ffi.readLenPrefixedString(this.module, outptr);
	}
	/**
	* Undo within the text editing session.
	*
	* The session owns all undo during editing. Document-level undo is not
	* involved until the session exits.
	*/
	textEditUndo() {
		this._assertAlive();
		return !!this.module._text_edit_undo(this.appptr);
	}
	/**
	* Redo within the text editing session.
	*/
	textEditRedo() {
		this._assertAlive();
		return !!this.module._text_edit_redo(this.appptr);
	}
	/**
	* Dispatch an editing command.
	* @param cmd - The command object (JSON-serializable WasmEditCommand).
	*/
	textEditCommand(cmd) {
		this._assertAlive();
		const json = JSON.stringify(cmd);
		const [ptr, len] = this._alloc_string(json);
		this.module._text_edit_command(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
	}
	/** Pointer down in layout-local coordinates. */
	textEditPointerDown(x, y, shift, clickCount) {
		this._assertAlive();
		this.module._text_edit_pointer_down(this.appptr, x, y, shift, clickCount);
	}
	/** Pointer move in layout-local coordinates (during drag). */
	textEditPointerMove(x, y) {
		this._assertAlive();
		this.module._text_edit_pointer_move(this.appptr, x, y);
	}
	/** Pointer up. */
	textEditPointerUp() {
		this._assertAlive();
		this.module._text_edit_pointer_up(this.appptr);
	}
	/** Set IME preedit string. */
	textEditImeSetPreedit(text) {
		this._assertAlive();
		const [ptr, len] = this._alloc_string(text);
		this.module._text_edit_ime_set_preedit(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
	}
	/** Commit IME composition. */
	textEditImeCommit(text) {
		this._assertAlive();
		const [ptr, len] = this._alloc_string(text);
		this.module._text_edit_ime_commit(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
	}
	/** Cancel IME composition. */
	textEditImeCancel() {
		this._assertAlive();
		this.module._text_edit_ime_cancel(this.appptr);
	}
	/** Get selected text as plain text. */
	textEditGetSelectedText() {
		this._assertAlive();
		const outptr = this.module._text_edit_get_selected_text(this.appptr);
		if (!outptr) return null;
		return ffi.readLenPrefixedString(this.module, outptr);
	}
	/** Get selected text as HTML. */
	textEditGetSelectedHtml() {
		this._assertAlive();
		const outptr = this.module._text_edit_get_selected_html(this.appptr);
		if (!outptr) return null;
		return ffi.readLenPrefixedString(this.module, outptr);
	}
	/** Paste plain text. */
	textEditPasteText(text) {
		this._assertAlive();
		const [ptr, len] = this._alloc_string(text);
		this.module._text_edit_paste_text(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
	}
	/** Paste HTML with formatting. */
	textEditPasteHtml(html) {
		this._assertAlive();
		const [ptr, len] = this._alloc_string(html);
		this.module._text_edit_paste_html(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
	}
	/**
	* Get the caret rectangle in layout-local coordinates.
	* @returns {x, y, w, h} or null if no active session.
	*/
	textEditGetCaretRect() {
		this._assertAlive();
		const outptr = this.module._text_edit_get_caret_rect(this.appptr);
		if (!outptr) return null;
		const bytes = ffi.readLenPrefixedBytes(this.module, outptr);
		if (bytes.length < 16) return null;
		const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
		return {
			x: view.getFloat32(0, true),
			y: view.getFloat32(4, true),
			w: view.getFloat32(8, true),
			h: view.getFloat32(12, true)
		};
	}
	/**
	* Get selection rectangles in layout-local coordinates.
	* @returns Array of {x, y, w, h} or null if no selection.
	*/
	textEditGetSelectionRects() {
		this._assertAlive();
		const outptr = this.module._text_edit_get_selection_rects(this.appptr);
		if (!outptr) return null;
		const json = ffi.readLenPrefixedString(this.module, outptr);
		try {
			return JSON.parse(json);
		} catch {
			return null;
		}
	}
	textEditToggleBold() {
		this._assertAlive();
		this.module._text_edit_toggle_bold(this.appptr);
	}
	textEditToggleItalic() {
		this._assertAlive();
		this.module._text_edit_toggle_italic(this.appptr);
	}
	textEditToggleUnderline() {
		this._assertAlive();
		this.module._text_edit_toggle_underline(this.appptr);
	}
	textEditToggleStrikethrough() {
		this._assertAlive();
		this.module._text_edit_toggle_strikethrough(this.appptr);
	}
	textEditSetFontSize(size) {
		this._assertAlive();
		this.module._text_edit_set_font_size(this.appptr, size);
	}
	textEditSetFontFamily(family) {
		this._assertAlive();
		const [ptr, len] = this._alloc_string(family);
		this.module._text_edit_set_font_family(this.appptr, ptr, len - 1);
		this._free_string(ptr, len);
	}
	textEditSetColor(r, g, b, a) {
		this._assertAlive();
		this.module._text_edit_set_color(this.appptr, r, g, b, a);
	}
	/**
	* Tick the blink timer. Returns true if cursor visibility changed.
	*/
	textEditTick() {
		this._assertAlive();
		return !!this.module._text_edit_tick(this.appptr);
	}
};
/** Map from Rust enum variant name to JS `type` string. */
const PAINT_TYPE_MAP = {
	Solid: "solid",
	LinearGradient: "linear_gradient",
	RadialGradient: "radial_gradient",
	SweepGradient: "sweep_gradient",
	DiamondGradient: "diamond_gradient",
	Image: "image"
};
/**
* Convert a CGColor from Rust u8 array `[r, g, b, a]` to JS RGBA32F object.
*/
function convertColor(c) {
	return {
		r: c[0] / 255,
		g: c[1] / 255,
		b: c[2] / 255,
		a: c[3] / 255
	};
}
/**
* Convert a GradientStop from Rust format to JS format.
*/
function convertStop(stop) {
	return {
		offset: stop.offset,
		color: convertColor(stop.color)
	};
}
/**
* Convert a Paint from Rust's externally-tagged serde format to the JS
* cg.Paint format (internally tagged with `type`, RGBA32F colors).
*
* Rust: `{ "Solid": { active: true, color: [255, 0, 0, 255], blend_mode: "normal" } }`
* JS:   `{ type: "solid", active: true, color: { r: 1, g: 0, b: 0, a: 1 }, blend_mode: "normal" }`
*/
function convertRustPaintToJS(paint) {
	const variant = Object.keys(paint)[0];
	const data = paint[variant];
	const result = {
		type: PAINT_TYPE_MAP[variant] ?? variant.toLowerCase(),
		...data
	};
	if (data.color && Array.isArray(data.color)) result.color = convertColor(data.color);
	if (data.stops && Array.isArray(data.stops)) result.stops = data.stops.map(convertStop);
	return result;
}
//#endregion
//#region lib/index.ts
const version = version$1;
async function init(opts) {
	return new ApplicationFactory(await createGridaCanvas({ locateFile: opts?.locateFile ? (file, __scriptDirectory) => opts?.locateFile(file, version) : void 0 }));
}
/** Encode a `RendererConfig` into the C ABI `config_flags` bitfield. */
function encodeConfigFlags(config) {
	let flags = 0;
	if (config?.skip_layout) flags |= 1;
	return flags;
}
var ApplicationFactory = class {
	constructor(module) {
		this.module = module;
	}
	createWebGLCanvasSurface(canvas, options = { use_embedded_fonts: true }) {
		const context = canvas.getContext("webgl2", {
			antialias: true,
			depth: true,
			stencil: true,
			alpha: true
		});
		if (!context) throw new Error("Failed to get WebGL2 context");
		const handle = this.module.GL.registerContext(context, { majorVersion: 2 });
		this.module.GL.makeContextCurrent(handle);
		const ptr = this.module._init(canvas.width, canvas.height, options.use_embedded_fonts ?? true, encodeConfigFlags(options.config));
		const _ = new Scene(this.module, ptr);
		_.resize(canvas.width, canvas.height);
		return _;
	}
	createWebGLCanvasSurfaceById(htmlcanvasid) {
		const canvas = document.getElementById(htmlcanvasid);
		if (!(canvas instanceof HTMLCanvasElement)) throw new Error(`Element with id ${htmlcanvasid} is not a <canvas>`);
		return this.createWebGLCanvasSurface(canvas);
	}
};
/**
* Internal numeric backend ids for the WASM ABI (`_init_with_backend`).
*
* Keep in sync with Rust (`crates/grida-canvas-wasm/src/wasm_application.rs`).
*/
const BACKEND_ID = {
	WebGL: 0,
	Raster: 1
};
var Canvas = class Canvas {
	constructor(backend, scene) {
		this._backend = backend;
		this._scene = scene;
	}
	get backend() {
		return this._backend;
	}
	loadSceneGrida(data) {
		this._scene.loadSceneGrida(data);
	}
	/**
	* Activate a scene previously decoded by `loadSceneGrida`.
	* Required before `exportNodeAs` or other rendering ops when the document
	* contains multiple scenes or when no default is implicitly activated.
	*/
	switchScene(sceneId) {
		this._scene.switchScene(sceneId);
	}
	/**
	* Return the IDs of all scenes decoded by the last `loadSceneGrida` call.
	*/
	loadedSceneIds() {
		return this._scene.loadedSceneIds();
	}
	/**
	* Register a font with the renderer. Multiple calls with the same family
	* and different font files are supported (e.g. Regular, Bold, Italic per family).
	*/
	addFont(family, bytes) {
		this._scene.addFont(family, bytes);
	}
	/**
	* Set the default fallback font families. Order matters for script fallback (e.g. CJK).
	*/
	setFallbackFonts(fonts) {
		this._scene.setFallbackFonts(fonts);
	}
	/**
	* Get the current default fallback font families.
	*/
	getFallbackFonts() {
		return this._scene.getFallbackFonts();
	}
	/**
	* Register image bytes with content-addressed RID (e.g. mem://&lt;hash&gt;).
	* Use when you do not need a stable logical identifier.
	*/
	addImage(data) {
		return this._scene.addImage(data);
	}
	/**
	* Register image bytes with an explicit logical RID (e.g. res://images/logo.png).
	* Use when you need stable, document-mapped identifiers.
	*/
	addImageWithId(data, rid) {
		return this._scene.addImageWithId(data, rid);
	}
	exportNodeAs(id, format) {
		return this._scene.exportNodeAs(id, format);
	}
	/**
	* Release the underlying WASM application instance.
	*
	* After calling this, the `Canvas` (and its internal `Scene`) must not be used again.
	*/
	dispose() {
		this._scene.dispose();
	}
	/**
	* Access the underlying WebGL `Scene` when `backend === "webgl"`.
	* Returns `null` for raster canvases.
	*/
	asWebGL() {
		return this._backend === "webgl" ? this._scene : null;
	}
	/** @internal */
	static _fromWebGL(scene) {
		return new Canvas("webgl", scene);
	}
	/** @internal */
	static _fromRaster(scene) {
		return new Canvas("raster", scene);
	}
};
/**
* Create a canvas instance backed by either:
* - **WebGL**: interactive rendering in the browser
* - **Raster**: headless CPU rendering (useful for Node export pipelines)
*/
async function createCanvas(opts) {
	const module = await createGridaCanvas({ locateFile: opts.locateFile ? (file, __scriptDirectory) => opts.locateFile(file, version) : void 0 });
	const useEmbeddedFonts = opts.useEmbeddedFonts ?? true;
	const configFlags = encodeConfigFlags(opts.config);
	if (opts.backend === "raster") {
		const appptr = module._init_with_backend(BACKEND_ID.Raster, opts.width, opts.height, useEmbeddedFonts, configFlags);
		return Canvas._fromRaster(new Scene(module, appptr));
	}
	const context = opts.canvas.getContext("webgl2", {
		antialias: true,
		depth: true,
		stencil: true,
		alpha: true
	});
	if (!context) throw new Error("Failed to get WebGL2 context");
	const handle = module.GL.registerContext(context, { majorVersion: 2 });
	module.GL.makeContextCurrent(handle);
	const scene = new Scene(module, module._init_with_backend(BACKEND_ID.WebGL, opts.canvas.width, opts.canvas.height, useEmbeddedFonts, configFlags));
	scene.resize(opts.canvas.width, opts.canvas.height);
	return Canvas._fromWebGL(scene);
}
//#endregion
export { Canvas, createCanvas, init as default, encodeButton, encodeModifiers, version };
