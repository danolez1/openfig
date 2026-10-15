import * as figrest from "@figma/rest-api-spec";
import { ExportSetting } from "@figma/rest-api-spec";

//#region ../grida-canvas-color/dist/index.d.ts
//#region color-parse.d.ts
/**
 * @fileoverview
 * @see https://github.com/colorjs/color-parse/blob/master/index.js
 * @license MIT
 */
type Space = "rgb" | "hsl" | "hwb" | "cmyk" | "lab" | "lch" | "oklab" | "oklch" | string;
interface ParseResult {
  space: Space | undefined;
  values: number[];
  alpha: number;
} //#endregion
//#region color-name.d.ts
/**
 * @fileoverview
 *
 * @see https://github.com/colorjs/color-name/blob/master/index.js
 * @license MIT
 */
type RGBVec3 = [number, number, number];
declare const _default: Readonly<{
  readonly aliceblue: RGBVec3;
  readonly antiquewhite: RGBVec3;
  readonly aqua: RGBVec3;
  readonly aquamarine: RGBVec3;
  readonly azure: RGBVec3;
  readonly beige: RGBVec3;
  readonly bisque: RGBVec3;
  readonly black: RGBVec3;
  readonly blanchedalmond: RGBVec3;
  readonly blue: RGBVec3;
  readonly blueviolet: RGBVec3;
  readonly brown: RGBVec3;
  readonly burlywood: RGBVec3;
  readonly cadetblue: RGBVec3;
  readonly chartreuse: RGBVec3;
  readonly chocolate: RGBVec3;
  readonly coral: RGBVec3;
  readonly cornflowerblue: RGBVec3;
  readonly cornsilk: RGBVec3;
  readonly crimson: RGBVec3;
  readonly cyan: RGBVec3;
  readonly darkblue: RGBVec3;
  readonly darkcyan: RGBVec3;
  readonly darkgoldenrod: RGBVec3;
  readonly darkgray: RGBVec3;
  readonly darkgreen: RGBVec3;
  readonly darkgrey: RGBVec3;
  readonly darkkhaki: RGBVec3;
  readonly darkmagenta: RGBVec3;
  readonly darkolivegreen: RGBVec3;
  readonly darkorange: RGBVec3;
  readonly darkorchid: RGBVec3;
  readonly darkred: RGBVec3;
  readonly darksalmon: RGBVec3;
  readonly darkseagreen: RGBVec3;
  readonly darkslateblue: RGBVec3;
  readonly darkslategray: RGBVec3;
  readonly darkslategrey: RGBVec3;
  readonly darkturquoise: RGBVec3;
  readonly darkviolet: RGBVec3;
  readonly deeppink: RGBVec3;
  readonly deepskyblue: RGBVec3;
  readonly dimgray: RGBVec3;
  readonly dimgrey: RGBVec3;
  readonly dodgerblue: RGBVec3;
  readonly firebrick: RGBVec3;
  readonly floralwhite: RGBVec3;
  readonly forestgreen: RGBVec3;
  readonly fuchsia: RGBVec3;
  readonly gainsboro: RGBVec3;
  readonly ghostwhite: RGBVec3;
  readonly gold: RGBVec3;
  readonly goldenrod: RGBVec3;
  readonly gray: RGBVec3;
  readonly green: RGBVec3;
  readonly greenyellow: RGBVec3;
  readonly grey: RGBVec3;
  readonly honeydew: RGBVec3;
  readonly hotpink: RGBVec3;
  readonly indianred: RGBVec3;
  readonly indigo: RGBVec3;
  readonly ivory: RGBVec3;
  readonly khaki: RGBVec3;
  readonly lavender: RGBVec3;
  readonly lavenderblush: RGBVec3;
  readonly lawngreen: RGBVec3;
  readonly lemonchiffon: RGBVec3;
  readonly lightblue: RGBVec3;
  readonly lightcoral: RGBVec3;
  readonly lightcyan: RGBVec3;
  readonly lightgoldenrodyellow: RGBVec3;
  readonly lightgray: RGBVec3;
  readonly lightgreen: RGBVec3;
  readonly lightgrey: RGBVec3;
  readonly lightpink: RGBVec3;
  readonly lightsalmon: RGBVec3;
  readonly lightseagreen: RGBVec3;
  readonly lightskyblue: RGBVec3;
  readonly lightslategray: RGBVec3;
  readonly lightslategrey: RGBVec3;
  readonly lightsteelblue: RGBVec3;
  readonly lightyellow: RGBVec3;
  readonly lime: RGBVec3;
  readonly limegreen: RGBVec3;
  readonly linen: RGBVec3;
  readonly magenta: RGBVec3;
  readonly maroon: RGBVec3;
  readonly mediumaquamarine: RGBVec3;
  readonly mediumblue: RGBVec3;
  readonly mediumorchid: RGBVec3;
  readonly mediumpurple: RGBVec3;
  readonly mediumseagreen: RGBVec3;
  readonly mediumslateblue: RGBVec3;
  readonly mediumspringgreen: RGBVec3;
  readonly mediumturquoise: RGBVec3;
  readonly mediumvioletred: RGBVec3;
  readonly midnightblue: RGBVec3;
  readonly mintcream: RGBVec3;
  readonly mistyrose: RGBVec3;
  readonly moccasin: RGBVec3;
  readonly navajowhite: RGBVec3;
  readonly navy: RGBVec3;
  readonly oldlace: RGBVec3;
  readonly olive: RGBVec3;
  readonly olivedrab: RGBVec3;
  readonly orange: RGBVec3;
  readonly orangered: RGBVec3;
  readonly orchid: RGBVec3;
  readonly palegoldenrod: RGBVec3;
  readonly palegreen: RGBVec3;
  readonly paleturquoise: RGBVec3;
  readonly palevioletred: RGBVec3;
  readonly papayawhip: RGBVec3;
  readonly peachpuff: RGBVec3;
  readonly peru: RGBVec3;
  readonly pink: RGBVec3;
  readonly plum: RGBVec3;
  readonly powderblue: RGBVec3;
  readonly purple: RGBVec3;
  readonly rebeccapurple: RGBVec3;
  readonly red: RGBVec3;
  readonly rosybrown: RGBVec3;
  readonly royalblue: RGBVec3;
  readonly saddlebrown: RGBVec3;
  readonly salmon: RGBVec3;
  readonly sandybrown: RGBVec3;
  readonly seagreen: RGBVec3;
  readonly seashell: RGBVec3;
  readonly sienna: RGBVec3;
  readonly silver: RGBVec3;
  readonly skyblue: RGBVec3;
  readonly slateblue: RGBVec3;
  readonly slategray: RGBVec3;
  readonly slategrey: RGBVec3;
  readonly snow: RGBVec3;
  readonly springgreen: RGBVec3;
  readonly steelblue: RGBVec3;
  readonly tan: RGBVec3;
  readonly teal: RGBVec3;
  readonly thistle: RGBVec3;
  readonly tomato: RGBVec3;
  readonly turquoise: RGBVec3;
  readonly violet: RGBVec3;
  readonly wheat: RGBVec3;
  readonly white: RGBVec3;
  readonly whitesmoke: RGBVec3;
  readonly yellow: RGBVec3;
  readonly yellowgreen: RGBVec3;
}>; //#endregion
//#region lib.d.ts
declare namespace color {
  function parse(cstr: string | number): ParseResult;
  const names: typeof _default;
  /**
   * Resolves a CSS `<color>` string (or `0xRRGGBB` number) to its canonical
   * sRGB form as a branded {@link colorformats.RGB888A32F} — without a DOM
   * or canvas. Sits on top of {@link parse}; parse behavior is the source
   * of truth for what each *accepted* syntax means.
   *
   * **Resolvable** (returns a value):
   * - named colors (`"red"`, `"REBECCAPURPLE"`) and `"transparent"`
   *   (resolves to `{ r: 0, g: 0, b: 0, a: 0 }` per CSS)
   * - 3/4/6/8-digit hex (`"#f00"`, `"#ff000080"`)
   * - `rgb()` / `rgba()` (number or percentage channels, comma or slash syntax)
   * - `hsl()` / `hsla()` — converted per CSS Color 4 §7
   * - `hwb()` — converted per CSS Color 4 §8
   * - numbers, read as `0xRRGGBB`
   *
   * **Not resolvable** (returns `null`, never a guess):
   * - `currentColor` and other context-dependent keywords
   * - `lab()` / `lch()` / `oklab()` / `oklch()` / `color()` — gamut mapping
   *   is out of scope
   * - `cmyk` / `gray` / other non-CSS spaces {@link parse} understands
   * - malformed or unparseable input
   *
   * **Strict input gate.** The null-never-guess contract is enforced by
   * `resolve` itself, up front; the underlying {@link parse} stays
   * permissive (it coerces, truncates and guesses, as vendored). A string
   * must take one of these *forms* (after trimming, case-insensitive):
   * - a named color present in {@link names} (own keys only — prototype
   *   keys like `"constructor"` are not colors), or `"transparent"`
   * - `#` + exactly 3/4/6/8 hex digits — `"#zzz"`, `"###"`, `"#12345"`,
   *   `"#1234567"` are all `null`
   * - `rgb()` / `rgba()` / `hsl()` / `hsla()` / `hwb()` with the `(`
   *   directly after the function name (no whitespace, per CSS) and a
   *   properly closed `)` — `"rgb(255,0,0"` is `null`
   *
   * Bare channel lists (`"1 2 3"`, `"255, 0, 0"`) are not CSS colors and
   * resolve to `null`.
   *
   * **Separator discipline.** Inside an accepted function form, the
   * argument body must follow a single separator style — legacy
   * all-comma (`N, N, N[, A]`) or modern all-space (`N N N [/ A]`) —
   * never a mix: `"rgb(25 5, 0, 0)"` is `null` (the permissive parser
   * would smuggle the 4th token into alpha). Alpha in the modern form
   * requires the slash (`"rgb(255 0 0 0.5)"` is `null`); slash alpha in
   * the legacy form is likewise rejected (`"rgb(255, 0, 0 / 0.5)"`).
   * `hwb()` takes the modern form only — it postdates the comma syntax
   * and `"hwb(0, 0%, 0%)"` is invalid in every browser.
   *
   * **Channel tokens.** Every channel token must be a CSS `<number>`
   * (optional sign, digits required after a decimal dot, scientific
   * notation with *required* exponent digits — `"rgb(1e 0 0)"` is
   * `null`) with an optional `%` suffix. Stray units reject in every
   * position — channel (`"rgb(1px 0 0)"`, `"rgb(1px, 0, 0)"`) and
   * alpha (`"rgb(255 0 0 / 1px)"`) alike — exactly as browsers reject
   * the declaration; the permissive parser would `parseFloat` the unit
   * away. `none` is a valid *missing* channel in any position, alpha
   * included, but in the modern syntax only (CSS Color 4):
   * `"rgb(none 0 0)"` resolves (missing reads as 0, as in browsers),
   * `"rgb(none, 0, 0)"` is `null`.
   *
   * **Numeric hue.** The hue channel of `hsl()` / `hsla()` / `hwb()`
   * keeps its own token rule in place of the generic one: a CSS
   * number, optionally with one of the angle units the vendored
   * parser actually converts — `deg`, `grad`, `rad`, `turn` — or
   * `none` (modern form only). Named hues (`"hsl(red 100% 50%)"`)
   * are rejected: `<named-hue>` comes from a long-dropped css-color
   * draft, no browser accepts it, and the parser's table values are
   * not CSS hue degrees. Percentage hue (`"hsl(50% 100% 50%)"`) is
   * rejected — the parser would misread it as a 0-100 hue. A bare
   * trailing dot is not a CSS number (`"hsl(120. 50% 50%)"` is
   * `null`).
   *
   * Channel arity is enforced by the discipline patterns themselves
   * (`"rgb(1, 2)"`, `"rgb(1, 2, 3, 4, 5)"` are `null`). Token
   * *interpretation* within the validated shape still defers to
   * {@link parse}: cross-token grammar is not enforced, so legacy
   * bodies mixing `<number>` and `<percentage>` (`"rgb(50%, 0, 0)"`)
   * or unitless hsl saturation/lightness (read as percent) resolve
   * permissively rather than `null`.
   *
   * A number must be an integer in `[0x000000, 0xFFFFFF]` — negative,
   * fractional, `NaN`, non-finite, or `> 0xFFFFFF` values are `null`
   * (never truncated or wrapped).
   *
   * Edge semantics (matching browser behavior):
   * - input is trimmed and case-insensitive
   * - hue wraps mod 360 (negative hues allowed)
   * - saturation / lightness / whiteness / blackness clamp to [0, 100]
   * - rgb channels clamp to [0, 255] and round to integers
   * - alpha clamps to [0, 1]
   * - never throws; invalid input resolves to `null`
   *
   * @param cstr - CSS color string, or a number read as `0xRRGGBB`.
   * @returns The resolved color, or `null` when resolution requires a
   * rendering context or the space is out of scope.
   *
   * @example
   * ```typescript
   * resolve("hsl(217 91% 60%)"); // { r: 60, g: 131, b: 246, a: 1 }
   * resolve("rgba(255, 0, 0, 0.5)"); // { r: 255, g: 0, b: 0, a: 0.5 }
   * resolve("transparent"); // { r: 0, g: 0, b: 0, a: 0 }
   * resolve("currentColor"); // null
   * resolve("oklch(0.7 0.1 200)"); // null
   * ```
   */
  function resolve(cstr: string | number): colorformats.RGB888A32F | null;
  /**
   * Resolves a CSS `<color>` string (or `0xRRGGBB` number) to a lowercase
   * hex string. Sugar over {@link resolve} — same resolvable set, same
   * sentinel.
   *
   * Alpha is quantized to 8 bits, and the 6-vs-8-digit decision is made on
   * the *quantized* byte so the canonical form is unique per quantized
   * color: `#rrggbb` whenever the alpha byte is `0xff`, `#rrggbbaa`
   * otherwise. (`resolveHEX("rgba(255, 0, 0, 0.999)")` is `"#ff0000"` —
   * never `"#ff0000ff"`, which would be a second spelling of the same
   * quantized color.)
   *
   * @param cstr - CSS color string, or a number read as `0xRRGGBB`.
   * @returns `"#rrggbb"` | `"#rrggbbaa"`, or `null` when not resolvable.
   *
   * @example
   * ```typescript
   * resolveHEX("hsl(217 91% 60%)"); // "#3c83f6"
   * resolveHEX("red"); // "#ff0000"
   * resolveHEX("rgba(255, 0, 0, 0.5)"); // "#ff000080"
   * resolveHEX("rgba(255, 0, 0, 0.999)"); // "#ff0000" (alpha byte rounds to 0xff)
   * resolveHEX("definitely-not-a-color"); // null
   * ```
   */
  function resolveHEX(cstr: string | number): string | null;
  namespace colorformats {
    export type ColorComponentFormat = "u8" | "f32";
    export type RGB_UNKNOWN = {
      r: number;
      g: number;
      b: number;
    };
    /**
     * the RGBA structure itself. the rgb value may differ as it could both represent 0-1 or 0-255 by the context.
     */
    export type RGBA_UNKNOWN = {
      r: number;
      g: number;
      b: number;
      a: number;
    };
    const RGBA32F_BRAND: unique symbol;
    const RGBA8888_BRAND: unique symbol;
    const RGB888A32F_BRAND: unique symbol;
    export type RGBA32F = {
      /**
       * 0.0-1.0
       */
      r: number;
      /**
       * 0.0-1.0
       */
      g: number;
      /**
       * 0.0-1.0
       */
      b: number;
      /**
       * 0.0-1.0
       */
      a: number;
    } & {
      [RGBA32F_BRAND]: true;
    };
    export type RGBA8888 = {
      /**
       * 0-255
       */
      r: number;
      /**
       * 0-255
       */
      g: number;
      /**
       * 0-255
       */
      b: number;
      /**
       * 0-255
       */
      a: number;
    } & {
      [RGBA8888_BRAND]: true;
    };
    export type RGB888A32F = {
      /**
       * 0-255
       */
      r: number;
      /**
       * 0-255
       */
      g: number;
      /**
       * 0-255
       */
      b: number;
      /**
       * 0.0-1.0
       */
      a: number;
    } & {
      [RGB888A32F_BRAND]: true;
    };
    export function newRGBA32F(r: number, g: number, b: number, a: number): RGBA32F;
    export function newRGBA8888(r: number, g: number, b: number, a: number): RGBA8888;
    export function newRGB888A32F(r: number, g: number, b: number, a: number): RGB888A32F;
    export function intoCSSRGB(color: RGB_UNKNOWN, unit: ColorComponentFormat): string;
    /**
     * @param color - The input color to convert.
     * @param format - The input format to convert from.
     * @returns The output color as a tuple of [r, g, b] or [r, g, b, a]. (always in u8 range)
     */
    export function intoU8Chunk(color: RGB_UNKNOWN | RGBA_UNKNOWN, format: ColorComponentFormat): [number, number, number] | [number, number, number, number];
    export function fromHEXIntoU8Chunk(hex: string): [number, number, number] | [number, number, number, number];
    export namespace RGBA32F {
      const TRANSPARENT: RGBA32F;
      const BLACK: RGBA32F;
      const WHITE: RGBA32F;
      const GRAY: RGBA32F;
      /**
       * #F5F5F5
       */
      const WHITESMOKE: RGBA32F;
      function intoHEX(color: RGBA32F): string;
      /**
       * Converts a HEX color string to an RGB888A32F object.
       *
       * Supports both short (`#RGB`) and long (`#RRGGBB`) HEX formats.
       *
       * @param hex - The HEX color string to convert. Must start with `#` and be 3 or 6 characters long after the `#`.
       * @returns An object containing `r`, `g`, `b`, and `a` properties.
       *
       * @throws {Error} If the input HEX string is invalid.
       *
       * @example
       * ```typescript
       * fromHEX("#F80"); // { r: 255, g: 136, b: 0, a: 1 }
       * fromHEX("#FF8800"); // { r: 255, g: 136, b: 0, a: 1 }
       * ```
       */
      function fromHEX(hex: string): RGBA32F;
      function intoCSSRGBA(color: RGBA32F): string;
      function intoRGBA8888(color: RGBA32F): RGBA8888;
      function intoRGB888F32A(color: RGBA32F): RGB888A32F;
      function multiplyA32(color: RGBA32F, alpha?: number): RGBA32F;
    }
    export namespace RGBA8888 {
      const BLACK: RGBA8888;
      const WHITE: RGBA8888;
      function intoHEX(color: RGBA8888): string;
      function intoRGB888F32A(color: RGBA8888): RGB888A32F;
    }
    export namespace RGB888A32F {
      const TRANSPARENT: RGB888A32F;
      const BLACK: RGB888A32F;
      const WHITE: RGB888A32F;
      const GRAY: RGB888A32F;
      function intoHEX(color: RGB888A32F): string;
      /**
       * Converts a HEX color string to an RGB888A32F object.
       *
       * Supports both short (`#RGB`) and long (`#RRGGBB`) HEX formats.
       *
       * @param hex - The HEX color string to convert. Must start with `#` and be 3 or 6 characters long after the `#`.
       * @returns An object containing `r`, `g`, `b`, and `a` properties.
       *
       * @throws {Error} If the input HEX string is invalid.
       *
       * @example
       * ```typescript
       * fromHEX("#F80"); // { r: 255, g: 136, b: 0, a: 1 }
       * fromHEX("#FF8800"); // { r: 255, g: 136, b: 0, a: 1 }
       * ```
       */
      function fromHEX(hex: string): RGB888A32F;
      function intoCSSRGBA(color: RGB888A32F): string;
      function intoRGBA8888(color: RGB888A32F): RGBA8888;
      function intoRGBA32F(color: RGB888A32F): RGBA32F;
      function multiplyA32(color: RGB888A32F, alpha?: number): RGB888A32F;
    }
    export {};
  }
}
//#endregion
//#region ../grida-canvas-cg/dist/index.d.ts
//#region lib.d.ts
/**
 * Core Graphics
 */
declare namespace cg {
  type Vector2 = [number, number];
  /**
   * A 2D Affine Transformation Matrix.
   *
   * This matrix is used to perform linear transformations (e.g., scaling, rotation, shearing)
   * and translations in a two-dimensional coordinate space. It is a compact representation
   * of a transformation that maps points, lines, or shapes from one space to another while
   * preserving straight lines and parallelism.
   *
   * ### Matrix Structure:
   * The affine transform matrix is a 2x3 matrix, represented as:
   *
   * ```
   * [
   *   [a, b, tx],
   *   [c, d, ty]
   * ]
   * ```
   *
   * ### Components:
   * - **a, d**: Scaling factors along the x-axis and y-axis, respectively.
   *   - `a`: Horizontal scale (x-axis stretch/shrink factor).
   *   - `d`: Vertical scale (y-axis stretch/shrink factor).
   * - **b, c**: Shearing (skewing) factors.
   *   - `b`: Horizontal skewing (how much the y-axis tilts along the x-axis).
   *   - `c`: Vertical skewing (how much the x-axis tilts along the y-axis).
   * - **tx, ty**: Translation offsets.
   *   - `tx`: Horizontal translation (movement along the x-axis).
   *   - `ty`: Vertical translation (movement along the y-axis).
   *
   * ### Transformations:
   * Affine transforms combine multiple transformations into a single operation. Examples include:
   * - **Translation**: Moving a shape by tx and ty.
   * - **Scaling**: Resizing along x and y axes.
   * - **Rotation**: Rotating around the origin by combining scaling and skewing.
   * - **Shearing**: Slanting a shape along one or both axes.
   *
   * ### Applying the Transformation:
   * To transform a 2D point `[x, y]`, append a constant `1` to form `[x, y, 1]`,
   * then multiply by the matrix:
   *
   * ```
   * [x', y', 1] = [
   *   [a, b, tx],
   *   [c, d, ty]
   * ] * [x, y, 1]
   *
   * Result:
   * x' = a * x + b * y + tx
   * y' = c * x + d * y + ty
   * ```
   *
   * The transformed point `[x', y']` represents the new coordinates.
   *
   * ### Notes:
   * - This matrix supports 2D transformations only.
   * - It assumes homogeneous coordinates for points (i.e., the constant `1` in `[x, y, 1]`).
   * - For transformations in 3D space, a 4x4 matrix must be used instead.
   */
  type AffineTransform = [[number, number, number], [number, number, number]];
  /**
   * the RGBA structure itself. the rgb value may differ as it could both represent 0-1 or 0-255 by the context.
   */
  type RGBA_UNKNOWN = {
    r: number;
    g: number;
    b: number;
    a: number;
  };
  /**
   * Standard f32 RGBA (Normalized RGBA)
   * Used in computer graphics pipelines, shading, and rendering.
   */
  type RGBA32F = color.colorformats.RGBA32F;
  /**
   * 8-bit Integer RGB, f32 alpha (CSS' rgba format)
   */
  type RGB888A32F = color.colorformats.RGB888A32F;
  type LayerMaskType = "geometry" | ImageMaskType;
  type ImageMaskType = "alpha" | "luminance";
  /**
   * only applicable to layers, not paints.
   * if this is used for non supported, it will fallback to "normal".
   */
  type LayerBlendMode = "pass-through" | BlendMode;
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode
   */
  type BlendMode = "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity";
  /**
   * Defines a single path
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path
   */
  type Path = {
    /**
     * This attribute defines the shape of the path.
     */
    d: string;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule
     */
    fill_rule: FillRule;
  };
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule
   * @see https://www.figma.com/plugin-docs/api/properties/VectorPath-windingrule/
   */
  type FillRule = "nonzero" | "evenodd";
  /**
   * @see https://skia.org/docs/dev/present/pathops/
   * @see https://www.figma.com/plugin-docs/api/BooleanOperationNode/
   */
  type BooleanOperation = "difference" | "intersection" | "union" | "xor";
  /**
   *
   * Supported fit modes
   *
   * Only `contain` and `cover`, `none` are supported in the current version.
   *
   * - `none` may have unexpected results by the environment
   *
   * @see https://api.flutter.dev/flutter/painting/BoxFit.html
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
   */
  type BoxFit = "contain" | "cover" | "fill" | "none";
  /**
   * Supported stoke cap modes
   *
   * - `butt`
   * - `round`
   * - `square`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
   * @see https://api.flutter.dev/flutter/dart-ui/StrokeCap.html
   */
  type StrokeCap = "butt" | "round" | "square";
  /**
   * Built-in marker presets placed at stroke endpoints or vector vertices.
   *
   * Unlike {@link StrokeCap} (which maps to native backend caps like Skia PaintCap),
   * StrokeMarkerPreset represents explicit marker geometry drawn on top of the
   * stroke path. When a preset is present at an endpoint, the renderer
   * uses Butt cap at that endpoint and draws the marker geometry instead.
   *
   * @see docs/wg/feat-2d/curve-decoration.md
   */
  type StrokeMarkerPreset = "none" | "right_triangle_open" | "equilateral_triangle" | "circle" | "square" | "diamond" | "vertical_bar";
  /**
   * Supported stroke join modes
   *
   * - `miter`
   * - `round`
   * - `bevel`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin
   * @see https://api.flutter.dev/flutter/dart-ui/StrokeJoin.html
   */
  type StrokeJoin = "miter" | "round" | "bevel";
  /**
   * @see https://www.figma.com/plugin-docs/api/properties/nodes-strokealign/
   * @see https://api.flutter.dev/flutter/painting/BorderSide/strokeAlign.html
   */
  type StrokeAlign = "center" | "inside" | "outside";
  /**
   *
   * Supported text decoration modes
   *
   * Only `underline` and `none` are supported in the current version.
   *
   * @see https://api.flutter.dev/flutter/dart-ui/TextDecoration-class.html
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
   */
  type TextDecorationLine = "none" | "underline" | "overline" | "line-through";
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style
   */
  type TextDecorationStyle = "solid" | "double" | "dotted" | "dashed" | "wavy";
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color
   */
  type TextDecorationColor = "currentcolor" | cg.RGBA32F;
  type TextDecorationColorValue = cg.RGBA32F;
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip-ink
   */
  type TextDecorationSkipInk = "auto" | "none";
  type TextDecorationSkipInkFlag = boolean;
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness
   *
   * auto or thickness in percentage
   */
  type TextDecorationThicknessPercentage = "auto" | number;
  /**
   * Text transform modes
   *
   * - `none`
   * - `uppercase`
   * - `lowercase`
   * - `capitalize`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
   */
  type TextTransform = "none" | "uppercase" | "lowercase" | "capitalize";
  /**
   * Supported text align modes
   *
   * Does not support `start` and `end` as they are not supported in the current version.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
   * @see https://api.flutter.dev/flutter/dart-ui/TextAlign.html
   */
  type TextAlign = "left" | "right" | "center" | "justify";
  /**
   * Vertical text align modes
   *
   * - [Env:css] in css, uses `align-content`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   * @see https://konvajs.org/api/Konva.Text.html#verticalAlign
   */
  type TextAlignVertical = "top" | "center" | "bottom";
  /**
   * A styled text run within an attributed string.
   *
   * Offsets (`start`, `end`) are **JS character indices** (UTF-16 code units)
   * into the parent text string.  The FBS codec converts these to/from the
   * UTF-8 byte offsets that the Rust side expects.
   */
  interface StyledTextRun {
    /** Inclusive start character index. */
    start: number;
    /** Exclusive end character index. */
    end: number;
    /** Per-run fill paints override. When absent, node-level fills are used. */
    fill_paints?: cg.Paint[];
    /** Per-run stroke paints override. */
    stroke_paints?: cg.Paint[];
    /** Per-run stroke width override. */
    stroke_width?: number;
    /** Per-run stroke alignment override. */
    stroke_align?: cg.StrokeAlign;
  }
  /**
   * Open type feature tags
   *
   * @see https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist
   * @see https://learn.microsoft.com/en-us/typography/opentype/spec/featuretags
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide
   */
  type OpenTypeFeature = "aalt" | "abrv" | "abvm" | "abvs" | "afrc" | "akhn" | "blwf" | "blwm" | "blws" | "c2pc" | "calt" | "case" | "ccmp" | "cfar" | "cjct" | "clig" | "cpct" | "cpsp" | "cswh" | "curs" | "cv01" | "cv02" | "cv03" | "cv04" | "cv05" | "cv06" | "cv07" | "cv08" | "cv09" | "cv10" | "cv11" | "cv12" | "cv13" | "cv14" | "cv15" | "cv16" | "cv17" | "cv18" | "cv19" | "cv20" | "cv21" | "cv22" | "cv23" | "cv24" | "cv25" | "cv26" | "cv27" | "cv28" | "cv29" | "cv30" | "cv31" | "cv32" | "cv33" | "cv34" | "cv35" | "cv36" | "cv37" | "cv38" | "cv39" | "cv40" | "cv41" | "cv42" | "cv43" | "cv44" | "cv45" | "cv46" | "cv47" | "cv48" | "cv49" | "cv50" | "cv51" | "cv52" | "cv53" | "cv54" | "cv55" | "cv56" | "cv57" | "cv58" | "cv59" | "cv60" | "cv61" | "cv62" | "cv63" | "cv64" | "cv65" | "cv66" | "cv67" | "cv68" | "cv69" | "cv70" | "cv71" | "cv72" | "cv73" | "cv74" | "cv75" | "cv76" | "cv77" | "cv78" | "cv79" | "cv80" | "cv81" | "cv82" | "cv83" | "cv84" | "cv85" | "cv86" | "cv87" | "cv88" | "cv89" | "cv90" | "cv91" | "cv92" | "cv93" | "cv94" | "cv95" | "cv96" | "cv97" | "cv98" | "cv99" | "dist" | "dlig" | "dnom" | "dtls" | "expt" | "falt" | "fin2" | "fin3" | "fina" | "flac" | "fwid" | "half" | "haln" | "halt" | "hist" | "hkna" | "hlig" | "hngl" | "hojo" | "hwid" | "init" | "isol" | "ital" | "jp04" | "jp78" | "jp83" | "jp90" | "just" | "kern" | "lfbd" | "liga" | "ljmo" | "locl" | "ltra" | "ltrm" | "mark" | "med2" | "medi" | "mgrk" | "mkmk" | "nalt" | "nlck" | "nukt" | "numr" | "opbd" | "ordn" | "ornm" | "palt" | "pcap" | "pkna" | "pref" | "pres" | "pstf" | "psts" | "pwid" | "qwid" | "rand" | "rclt" | "rkrf" | "rlig" | "rphf" | "rtbd" | "rtla" | "rtlm" | "ruby" | "rvrn" | "salt" | "sinf" | "size" | "smpl" | "ss01" | "ss02" | "ss03" | "ss04" | "ss05" | "ss06" | "ss07" | "ss08" | "ss09" | "ss10" | "ss11" | "ss12" | "ss13" | "ss14" | "ss15" | "ss16" | "ss17" | "ss18" | "ss19" | "ss20" | "ssty" | "stch" | "swsh" | "titl" | "tjmo" | "tnam" | "trad" | "twid" | "unic" | "valt" | "vatu" | "vert" | "vhal" | "vjmo" | "vkna" | "vkrn" | "vpal" | "vrt2" | "vrtr" | "zero";
  /**
   * Supported font weights in numeric values
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
   * @see https://api.flutter.dev/flutter/dart-ui/FontWeight-class.html
   * @see https://learn.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass
   */
  type NFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  /**
   * css font-style values
   */
  type CSSFontStyle = "normal" | "italic" | "oblique";
  /**
   * Optical sizing modes
   *
   * - `"auto"` links optical size to `fontSize`
   * - `"none"` disables optical sizing
   * - `number` sets a fixed optical size value
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-optical-sizing
   */
  type OpticalSizing = "auto" | "none" | number;
  /**
   * Font kerning modes
   *
   * - `"normal"` enables kerning
   * - `"none"` disables kerning
   *
   * @remark we don't support `auto`. use `normal` instead.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning
   * @default `auto`
   */
  type FontKerning = "normal" | "none";
  /**
   * Font kerning flag
   *
   * @see {@link FontKerning}
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning
   * @default `true`
   */
  type FontKerningFlag = boolean;
  /**
   * @see https://api.flutter.dev/flutter/painting/Axis.html
   */
  type Axis = "horizontal" | "vertical";
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   * @see https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis
   * @see https://api.flutter.dev/flutter/rendering/MainAxisAlignment.html
   */
  type MainAxisAlignment = "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch";
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   * @see https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis
   * @see https://api.flutter.dev/flutter/rendering/CrossAxisAlignment.html
   */
  type CrossAxisAlignment = "start" | "end" | "center" | "stretch";
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
   * @see https://api.flutter.dev/flutter/services/SystemMouseCursors-class.html
   */
  type SystemMouseCursor = "alias" | "all-scroll" | "auto" | "cell" | "col-resize" | "context-menu" | "copy" | "crosshair" | "default" | "e-resize" | "ew-resize" | "grab" | "grabbing" | "help" | "move" | "n-resize" | "ne-resize" | "nesw-resize" | "no-drop" | "none" | "not-allowed" | "ns-resize" | "nw-resize" | "nwse-resize" | "pointer" | "progress" | "row-resize" | "s-resize" | "se-resize" | "sw-resize" | "text" | "vertical-text" | "w-resize" | "wait" | "zoom-in" | "zoom-out";
  /**
   * A line segment in 2D space defined by two points.
   *
   * This type provides a generic structure for representing a line segment.
   * The coordinate system and scale of the values depend on the usage context:
   * - May represent **normalized coordinates** (e.g., 0.0 to 1.0 or -1.0 to 1.0)
   * - May represent **relative coordinates** within a parent container
   * - May represent **absolute pixel values**
   *
   * Always refer to the specific API documentation to understand which coordinate
   * system is being used.
   */
  type Line2D = {
    /**
     * X coordinate of the line's start point
     */
    x1: number;
    /**
     * Y coordinate of the line's start point
     */
    y1: number;
    /**
     * X coordinate of the line's end point
     */
    x2: number;
    /**
     * Y coordinate of the line's end point
     */
    y2: number;
  };
  /**
   * A point within a rectangle using a normalized coordinate system.
   *
   * `Alignment(0.0, 0.0)` represents the center of the rectangle. The distance from -1.0 to +1.0
   * is the distance from one side of the rectangle to the other side of the rectangle. Therefore,
   * 2.0 units horizontally (or vertically) is equivalent to the width (or height) of the rectangle.
   *
   * ### Coordinate System:
   * - `Alignment(-1.0, -1.0)` represents the top left of the rectangle.
   * - `Alignment(1.0, 1.0)` represents the bottom right of the rectangle.
   * - `Alignment(0.0, 0.0)` represents the center of the rectangle.
   *
   * ### Examples:
   * - `Alignment(0.0, 3.0)` represents a point that is horizontally centered with respect to
   *   the rectangle and vertically below the bottom of the rectangle by the height of the rectangle.
   * - `Alignment(0.0, -0.5)` represents a point that is horizontally centered with respect to
   *   the rectangle and vertically half way between the top edge and the center.
   *
   * ### Mapping to Pixel Coordinates:
   * `Alignment(x, y)` in a rectangle with height `h` and width `w` describes the point
   * `(x * w/2 + w/2, y * h/2 + h/2)` in the coordinate system of the rectangle.
   *
   * @see https://api.flutter.dev/flutter/painting/Alignment-class.html
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/percentage
   */
  type Alignment = {
    /**
     * Horizontal alignment value.
     * - `-1.0` = left edge
     * - `0.0` = horizontal center
     * - `1.0` = right edge
     */
    x: number;
    /**
     * Vertical alignment value.
     * - `-1.0` = top edge
     * - `0.0` = vertical center
     * - `1.0` = bottom edge
     */
    y: number;
  };
  type Paint = SolidPaint | LinearGradientPaint | RadialGradientPaint | SweepGradientPaint | DiamondGradientPaint | ImagePaint;
  namespace paints {
    const transparent: Paint;
    const black: Paint;
    const white: Paint;
  }
  type AnyPaint = Omit<Partial<SolidPaint> & Partial<LinearGradientPaint> & Partial<RadialGradientPaint> & Partial<SweepGradientPaint> & Partial<DiamondGradientPaint> & Partial<ImagePaint>, "type"> & {
    type: Paint["type"];
  };
  type SolidPaint = {
    type: "solid";
    color: cg.RGBA32F;
    blend_mode?: cg.BlendMode;
    active: boolean;
  };
  type GradientPaint = LinearGradientPaint | RadialGradientPaint | SweepGradientPaint | DiamondGradientPaint;
  function isSolidPaint(paint?: cg.Paint): paint is cg.SolidPaint;
  function isImagePaint(paint?: cg.Paint): paint is cg.ImagePaint;
  function isGradientPaint(paint?: cg.Paint): paint is cg.GradientPaint;
  type LinearGradientPaint = {
    type: "linear_gradient";
    /**
     * Gradient start point in UV [0,1] space.
     * @default [0, 0.5] (center-left)
     */
    xy1?: [number, number];
    /**
     * Gradient end point in UV [0,1] space.
     * @default [1, 0.5] (center-right)
     */
    xy2?: [number, number];
    transform: AffineTransform;
    stops: Array<GradientStop>;
    /**
     * @default "normal" {@link cg.def.BLENDMODE}
     */
    blend_mode: cg.BlendMode;
    /**
     * @default 1
     */
    opacity: number;
    active: boolean;
  };
  type RadialGradientPaint = {
    type: "radial_gradient";
    transform: AffineTransform;
    stops: Array<GradientStop>;
    /**
     * @default "normal" {@link cg.def.BLENDMODE}
     */
    blend_mode: cg.BlendMode;
    /**
     * @default 1
     */
    opacity: number;
    active: boolean;
  };
  type SweepGradientPaint = {
    type: "sweep_gradient";
    transform: AffineTransform;
    stops: Array<GradientStop>;
    /**
     * @default "normal" {@link cg.def.BLENDMODE}
     */
    blend_mode: cg.BlendMode;
    /**
     * @default 1
     */
    opacity: number;
    active: boolean;
  };
  type DiamondGradientPaint = {
    type: "diamond_gradient";
    transform: AffineTransform;
    stops: Array<GradientStop>;
    /**
     * @default "normal" {@link cg.def.BLENDMODE}
     */
    blend_mode: cg.BlendMode;
    /**
     * @default 1
     */
    opacity: number;
    active: boolean;
  };
  type ImagePaint = {
    type: "image";
    src: string;
    /**
     * box fit or custom transform
     */
    fit: "contain" | "cover" | "fill" | "none" | "transform" | "tile";
    /**
     * transform will only take effect if fit is "transform"
     *
     * @default identity
     */
    transform?: AffineTransform;
    /**
     * Number of clockwise quarter turns to apply to the decoded image before layout math.
     * The value is normalized modulo 4 (`0` = 0°, `1` = 90° CW, `2` = 180°, `3` = 270° CW).
     * This discrete rotation keeps pixels on the integer grid without resampling.
     *
     * @default 0
     */
    quarter_turns?: number;
    /**
     * when mode is "tile", scale the image to the given value.
     *
     * @default 1
     */
    scale?: number;
    filters: ImageFilters;
    /**
     * @default "normal" {@link cg.def.BLENDMODE}
     */
    blend_mode: cg.BlendMode;
    /**
     * @default 1
     */
    opacity: number;
    active: boolean;
  };
  interface ImageFilters {
    /**
     * Exposure adjustment (-1.0 to 1.0, default: 0.0)
     * Controls the overall brightness of the image.
     * - -1.0 = very dark
     * - 0.0 = original (no change)
     * - 1.0 = very bright
     */
    exposure: number;
    /**
     * Contrast adjustment (-0.3 to 0.3, default: 0.0)
     * Controls the difference between light and dark areas.
     * - -0.3 = low contrast (UI cap)
     * - 0.0 = original contrast
     * - 0.3 = high contrast (UI cap)
     */
    contrast: number;
    /**
     * Saturation adjustment (-1.0 to 1.0, default: 0.0)
     * Controls the intensity of colors.
     * - -1.0 = grayscale (no color)
     * - 0.0 = original saturation
     * - 1.0 = highly oversaturated
     */
    saturation: number;
    /**
     * Temperature adjustment (-1.0 to 1.0, default: 0.0)
     * Controls the warm/cool color balance.
     * - -1.0 = very cool (blue tint)
     * - 0.0 = neutral (no change)
     * - 1.0 = very warm (orange tint)
     */
    temperature: number;
    /**
     * Tint adjustment (-1.0 to 1.0, default: 0.0)
     * Controls the green/magenta color balance.
     * - -1.0 = strong magenta tint
     * - 0.0 = neutral (no change)
     * - 1.0 = strong green tint
     */
    tint: number;
    /**
     * Highlights adjustment (-1.0 to 1.0, default: 0.0)
     * Controls the brightness of highlight areas.
     * - -1.0 = darken highlights
     * - 0.0 = no change
     * - 1.0 = brighten highlights
     */
    highlights: number;
    /**
     * Shadows adjustment (-1.0 to 1.0, default: 0.0)
     * Controls the brightness of shadow areas.
     * - -1.0 = darken shadows
     * - 0.0 = no change
     * - 1.0 = brighten shadows
     */
    shadows: number;
  }
  type GradientStop = {
    /**
     * 0-1
     * 0 - start (0%)
     * 1 - end (100%)
     */
    offset: number;
    color: cg.RGBA32F;
  };
  /**
   * Box shadow definition compatible with both CSS and advanced blur configurations.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
   * @see https://api.flutter.dev/flutter/painting/BoxShadow-class.html
   */
  type BoxShadow = {
    /**
     * The color of the shadow.
     * Defaults to the current color if not provided.
     */
    color: RGBA32F;
    /**
     * The horizontal and vertical offset of the shadow.
     * Example: `[x: number, y: number]` or for no shadow offset.
     *
     * @default [0, 0]
     */
    offset: Vector2;
    /**
     * The blur radius of the shadow.
     * - Specifies the amount of blur applied to the shadow.
     * - Must be >= 0.
     *
     * @default 0
     */
    blur: number;
    /**
     * The spread radius of the shadow.
     * - Positive values expand the shadow.
     * - Negative values shrink the shadow.
     * - Defaults to 0.
     *
     * @default 0
     */
    spread: number;
  };
  /**
   *
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow
   */
  interface IFeShadow {
    /**
     * offset-x
     */
    dx: number;
    /**
     * offset-y
     */
    dy: number;
    /**
     * blur radius
     *
     * a.k.a. stdDeviation in SVG <feDropShadow>
     */
    blur: number;
    spread: number;
    color: RGBA32F;
    /**
     * Whether this effect is active
     * @default true
     */
    active?: boolean;
  }
  interface IFeGaussianBlur {
    /**
     * blur radius
     *
     * a.k.a. stdDeviation in SVG <feGaussianBlur>
     */
    radius: number;
  }
  type FeGaussianBlur = IFeGaussianBlur & {
    type: "blur";
  };
  /**
   * Progressive blur effect that interpolates blur radius along a line.
   *
   * Extends {@link Line2D} using **normalized coordinates** (-1.0 to 1.0).
   * The blur gradually transitions from `radius` at the start point to `radius2` at the end point.
   *
   * ### Coordinate System:
   * - `x1`, `y1`: Start point in normalized coordinates
   * - `x2`, `y2`: End point in normalized coordinates
   * - The coordinate system follows the same convention as {@link Alignment}:
   *   - `-1.0` to `1.0` spans the full width/height
   *   - `(0.0, 0.0)` is the center
   */
  interface IFeProgressiveBlur extends Line2D {
    /**
     * Blur radius at the start point (x1, y1) in pixels
     */
    radius: number;
    /**
     * Blur radius at the end point (x2, y2) in pixels
     */
    radius2: number;
  }
  type FeProgressiveBlur = IFeProgressiveBlur & {
    type: "progressive-blur";
  };
  type FilterEffect = FeShadow | FeLayerBlur | FeBackdropBlur | FeLiquidGlass | FeNoise;
  type FeShadow = IFeShadow & {
    type: "shadow";
    inset?: boolean;
  };
  type FeBlur = FeGaussianBlur | FeProgressiveBlur;
  type FeLayerBlur = {
    type: "filter-blur";
    blur: FeBlur;
    /**
     * Whether this effect is active
     * @default true
     */
    active?: boolean;
  };
  type FeBackdropBlur = {
    type: "backdrop-filter-blur";
    blur: FeBlur;
    /**
     * Whether this effect is active
     * @default true
     */
    active?: boolean;
  };
  /**
   * Liquid Glass Effect
   *
   * A visual effect that creates a realistic glass appearance with light refraction,
   * highlights, and chromatic aberration.
   */
  type FeLiquidGlass = {
    type: "glass";
    /**
     * The intensity of specular highlights.
     * Must be between 0 and 1. Higher values create brighter highlights.
     *
     * Adjust the angle and intensity of the light illuminating your glass containers
     * to change where the highlight appears on the container's edge.
     *
     * @default 0.9
     */
    light_intensity: number;
    /**
     * The angle of the specular light in degrees.
     * Controls the direction of highlights on the glass surface.
     *
     * @default 45.0
     */
    light_angle: number;
    /**
     * Refraction strength [0.0-1.0]
     * 0.0 = no refraction, 0.5 = typical glass, 1.0 = maximum refraction
     * Internally mapped to IOR range [1.0-2.0]
     *
     * Control the way light bends along the edge of your glass container.
     * The higher the refraction value, the more your glass containers will
     * distort the elements around them.
     *
     * @default 0.8
     */
    refraction: number;
    /**
     * Glass thickness/depth for 3D surface effect in pixels [1.0+]
     * Controls the curvature height of the glass surface
     * Higher values create more pronounced lens curvature and stronger refraction
     * Typical values: 20-100 pixels
     *
     * @default 20.0
     */
    depth: number;
    /**
     * Chromatic aberration strength [0.0-1.0]
     * Controls color separation at edges (rainbow effect)
     * Higher values create more rainbow-like distortion at edges.
     *
     * @default 0.5
     */
    dispersion: number;
    /**
     * Blur radius for frosted glass effect [0.0+] in pixels
     * Applied via Skia's native blur before refraction shader
     *
     * @default 4.0
     */
    radius: number;
    /**
     * Whether this effect is active
     * @default true
     */
    active?: boolean;
  };
  /**
   * Procedural Noise Effect
   *
   * Generates Perlin noise patterns with configurable grain size, density, and coloring.
   * Supports three coloring modes: single-color (mono), dual-color (duo), and multi-color (multi).
   *
   * Uses fractal Perlin noise for natural-looking texture with configurable detail through octaves.
   *
   * @example
   * ```typescript
   * // Black film grain overlay
   * const grain: FeNoise = {
   *   type: "noise",
   *   mode: "mono",
   *   noise_size: 0.3,
   *   density: 0.8,
   *   num_octaves: 6,
   *   seed: 42,
   *   color: { r: 0, g: 0, b: 0, a: 0.15 }
   * };
   *
   * // Red noise pattern on white background
   * const duo: FeNoise = {
   *   type: "noise",
   *   mode: "duo",
   *   noise_size: 2.0,
   *   density: 0.5,
   *   num_octaves: 3,
   *   seed: 8539,
   *   color1: { r: 255, g: 0, b: 0, a: 1 },
   *   color2: { r: 255, g: 255, b: 255, a: 0.25 }
   * };
   *
   * // Colorful noise with full opacity
   * const multi: FeNoise = {
   *   type: "noise",
   *   mode: "multi",
   *   noise_size: 1.5,
   *   density: 0.7,
   *   num_octaves: 4,
   *   seed: 1234,
   *   opacity: 1.0
   * };
   * ```
   */
  type FeNoise = {
    type: "noise";
    /**
     * Noise coloring mode
     * - `"mono"`: Single-color noise pattern
     * - `"duo"`: Dual-color with background and pattern colors
     * - `"multi"`: Multi-color noise (uses noise RGB directly)
     */
    mode: "mono" | "duo" | "multi";
    /**
     * Controls noise grain size (smaller = finer grains)
     * Range: 0.001+
     * Typical values: 0.3 for fine grain, 2.0 for coarse grain
     * UI limit: 100
     *
     * @default 0.5
     */
    noise_size: number;
    /**
     * Controls pattern visibility (0 = sparse, 1 = dense)
     * Range: 0.0 - 1.0
     *
     * @default 0.5
     */
    density: number;
    /**
     * Number of fractal octaves for detail level
     * Range: 1+
     * More octaves = finer detail but more computation
     * UI limit: 8
     *
     * @default 3
     */
    num_octaves?: number;
    /**
     * Random seed for reproducibility
     * Different seeds produce different noise patterns
     *
     * @default 0
     */
    seed?: number;
    /**
     * Blend mode for compositing noise with fill
     *
     * @default "normal" {@link cg.def.BLENDMODE}
     */
    blend_mode?: cg.BlendMode;
    /**
     * Color of noise pixels (mono mode only)
     * Includes alpha for opacity control
     */
    color?: RGBA32F;
    /**
     * Pattern color (duo mode only)
     * Applied where noise is visible
     */
    color1?: RGBA32F;
    /**
     * Background color (duo mode only)
     * Base layer behind the noise pattern
     */
    color2?: RGBA32F;
    /**
     * Overall opacity (multi mode only)
     * Range: 0.0 - 1.0
     *
     * @default 1.0
     */
    opacity?: number;
    /**
     * Whether this effect is active
     * @default true
     */
    active?: boolean;
  };
  /**
   *
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow
   */
  type SVGFeDropShadow = {
    type: "drop_shadow";
    /**
     * offset-x
     */
    dx: number;
    /**
     * offset-y
     */
    dy: number;
    /**
     * blur radius
     *
     * a.k.a. stdDeviation in SVG <feDropShadow>
     */
    blur: number;
  };
  type SVGFeGaussianBlur = {
    type: "blur";
    /**
     * blur radius
     *
     * a.k.a. stdDeviation in SVG <feGaussianBlur>
     */
    radius: number;
  };
  /**
   *
   * [top-left | top-right | bottom-right | bottom-left]
   */
  type CornerRadius4 = [number, number, number, number];
  /**
   * all | <[top-left | top-right | bottom-right | bottom-left]>
   */
  type CornerRadius = number | CornerRadius4;
  function cornerRadius4Identical(value: CornerRadius4): boolean;
  type VariableWidthStop = {
    /**
     * u(t)
     * 0-1
     * 0 - start (0%)
     * 1 - end (100%)
     */
    u: number;
    /**
     * r px
     */
    r: number;
  };
  type VariableWidthProfile = {
    stops: VariableWidthStop[];
  };
  /**
   * strict, solid default values.
   * not all types have default values.
   *
   * only struct, widely aknowledged, de-facto standard defaults will be set.
   *
   * this is aligned in grida crate's default values.
   */
  namespace def {
    const LAYER_BLENDMODE: cg.LayerBlendMode;
    const BLENDMODE: cg.BlendMode;
    const IMAGE_FILTERS: cg.ImageFilters;
    const ALIGNMENT: {
      CENTER: {
        x: number;
        y: number;
      };
      TOP_LEFT: {
        x: number;
        y: number;
      };
      TOP_CENTER: {
        x: number;
        y: number;
      };
      TOP_RIGHT: {
        x: number;
        y: number;
      };
      CENTER_LEFT: {
        x: number;
        y: number;
      };
      CENTER_RIGHT: {
        x: number;
        y: number;
      };
      BOTTOM_LEFT: {
        x: number;
        y: number;
      };
      BOTTOM_CENTER: {
        x: number;
        y: number;
      };
      BOTTOM_RIGHT: {
        x: number;
        y: number;
      };
    };
  }
}
//#endregion
//#region ../grida-tokens/dist/tokens-x6EP2Gjm.d.ts
//#region src/tokens.d.ts
declare namespace tokens {
  export type Token = Primitive | TValueExpression | JSONRef | Literal | ShorthandBooleanBinaryExpression | ShorthandBinaryExpression | BooleanValueExpression | Identifier | PropertyAccessExpression | StringLiteral | TemplateSpan | TemplateExpression | StringValueExpression;
  /**
   * Represents a primitive value.
   * Can be a string, number, or boolean.
   */
  export type Primitive = string | number | boolean;
  /**
   * Represents a literal value, which can be any primitive type.
   */
  type Literal = Primitive;
  export type TValueExpression = JSONRef | StringValueExpression | BooleanValueExpression | NumericValueExpression;
  /**
   * Represents a reference to a JSON field.
   * Depending on usage, the reference can be a name (key) or id.
   * - When stored in the database, it should be an id.
   * - When used in the JSON, it should be a key.
   */
  export type JSONRef<PREFIX extends string = string> = {
    $ref: `#/${PREFIX}${string}`;
  };
  /**
   * Represents the shorthand syntax supported operators for a expression.
   */
  export type BinaryOperator = NumericBinaryOperator | BooleanBinaryOperator | CoalescingOperator;
  export const BINARY_OPERATORS: readonly ["==", "!=", ">", "<", ">=", "<=", "&&", "||", "+", "-", "*", "/", "%", "??"];
  export const BOOLEAN_BINARY_OPERATORS: readonly ["==", "!=", ">", "<", ">=", "<=", "&&", "||"];
  export type BooleanBinaryOperator = "==" | "!=" | ">" | "<" | ">=" | "<=" | "&&" | "||";
  export type NumericBinaryOperator = "+" | "-" | "*" | "/" | "%";
  export type CoalescingOperator = "??";
  export type ShorthandBinaryExpressionLHS = TValueExpression;
  export type ShorthandBinaryExpressionRHS = TValueExpression;
  export type ShorthandBinaryExpression<LHS extends ShorthandBinaryExpressionLHS = ShorthandBinaryExpressionLHS, RHS extends ShorthandBinaryExpressionRHS = ShorthandBinaryExpressionRHS> = [LHS, BinaryOperator, RHS];
  /**
   * Represents the left-hand side of a condition.
   * Can be either a field reference or a literal value.
   */
  type ShorthandBooleanBinaryExpressionLHS = JSONRef | Literal;
  /**
   * Represents the right-hand side of a condition.
   * Can be either a field reference or a literal value.
   */
  type ShorthandBooleanBinaryExpressionRHS = JSONRef | Literal;
  /**
   * Represents a condition expression, which is a tuple consisting of:
   * - A left-hand side (ConditionLHS)
   * - An operator (ConditionOperator)
   * - A right-hand side (ConditionRHS)
   */
  export type ShorthandBooleanBinaryExpression<LHS extends ShorthandBooleanBinaryExpressionLHS = ShorthandBooleanBinaryExpressionLHS, RHS extends ShorthandBooleanBinaryExpressionRHS = ShorthandBooleanBinaryExpressionRHS> = [LHS, BooleanBinaryOperator, RHS];
  /**
   * Represents a boolean value descriptor.
   * Can be either a simple boolean or a condition expression.
   */
  export type BooleanValueExpression = boolean | ShorthandBooleanBinaryExpression;
  /**
   * Represents an identifier (variable) in a template.
   */
  export type Identifier = {
    kind: "Identifier";
    name: string;
  };
  /**
   * Represents a shorthand for accessing properties.
   * This encapsulates the concept of a property path more effectively.
   */
  export type PropertyAccessExpression = {
    kind: "PropertyAccessExpression";
    expression: Array<string>;
  };
  /**
   * Represents a string literal.
   */
  export type StringLiteral = {
    kind: "StringLiteral";
    text: string;
  };
  /**
   * Represents a span in a template, which can be a string literal, an identifier, or a property path literal.
   */
  export type TemplateSpan = StringLiteral | Identifier | PropertyAccessExpression;
  /**
   * Represents a template expression consisting of template spans.
   */
  export type TemplateExpression = {
    kind: "TemplateExpression";
    templateSpans: TemplateSpan[];
  };
  /**
   * Represents a string value expression, which can be any of the defined types.
   */
  export type StringValueExpression = string | StringLiteral | PropertyAccessExpression | Identifier | TemplateExpression | ShorthandBooleanBinaryExpression;
  export type NumericLiteral = {
    kind: "NumericLiteral";
    value: number;
  };
  export type NumericValueExpression = number | NumericLiteral | PropertyAccessExpression | ShorthandBinaryExpression<number, number> | Identifier;
  export namespace is {
    /**
     * Recursively checks if a value is tokenized (an expression).
     *
     * A value is considered tokenized if it matches one of the `Token` types defined in `tokens.Token`.
     *
     * @template T - The type of the value being checked.
     * @param value - The value to check.
     * @returns `true` if the value is a tokenized expression, otherwise `false`.
     *
     * @example
     * const value: tokens.Token = { kind: "Identifier", name: "myVariable" };
     * console.log(tokens.is.tokenized(value)); // Output: true
     *
     * const plainValue = 42;
     * console.log(tokens.is.tokenized(plainValue)); // Output: false
     */
    function tokenized<T = unknown>(value: T): boolean;
    function primitive(value?: unknown, checknull?: boolean): value is Primitive;
    function jsonRef(exp?: tokens.Token | unknown): exp is tokens.JSONRef;
    function propertyAccessExpression(value?: tokens.Token | unknown): value is tokens.PropertyAccessExpression;
    function templateExpression(value?: tokens.StringValueExpression | unknown): value is tokens.TemplateExpression;
    /**
     * can't be trusted 100%. use this in the safe context.
     */
    function inferredShorthandBinaryExpression(exp: tokens.Token | unknown): exp is tokens.ShorthandBooleanBinaryExpression | tokens.ShorthandBinaryExpression;
  }
  export {};
} //#endregion
//#endregion
//#region ../grida-tokens/dist/utils.d.ts
//#region src/utils.d.ts
/**
 * Utility type to create a new type from `T` where:
 * - Properties specified in the keys `K` retain their original types from `T`.
 * - All other properties are replaced with the `tokens.Token` type.
 *
 * This is useful for scenarios where certain properties in an object should remain fixed,
 * while others can be dynamic or "tokenizable."
 *
 * @template T - The base object type.
 * @template K - The keys in `T` that should retain their original types.
 *
 * @example
 * // Example 1: Basic Usage
 * type Original = {
 *   type: "static";
 *   value: number;
 *   description: string;
 * };
 *
 * type Tokenized = TokenizableExcept<Original, "type">;
 * // Resulting type:
 * // {
 * //   type: "static";        // Retained original type
 * //   value: tokens.Token;   // Tokenized
 * //   description: tokens.Token; // Tokenized
 * // }
 *
 * @example
 * // Example 2: Union Types
 * type UnionType =
 *   | { kind: "a"; data: string }
 *   | { kind: "b"; data: number };
 *
 * type TokenizedUnion = TokenizableExcept<UnionType, "kind">;
 * // Resulting type:
 * // {
 * //   kind: "a"; // Retained
 * //   data: tokens.Token; // Tokenized
 * // } | {
 * //   kind: "b"; // Retained
 * //   data: tokens.Token; // Tokenized
 * // }
 *
 * @note
 * This utility only operates at the top level. It does not recursively tokenize nested properties.
 */
type TokenizableExcept<T extends object, K extends keyof T> = { [P in keyof T]: P extends K ? T[P] : tokens.Token }; //#endregion
//#endregion
//#region ../grida-cmath/dist/index.d.ts
//#region index.d.ts
/**
 * cmath, a 2D canvas math module.
 */
declare namespace cmath {
  const PI: number;
  const abs: (x: number) => number;
  const sqrt: (x: number) => number;
  const cos: (x: number) => number;
  const sin: (x: number) => number;
  const asin: (x: number) => number;
  const tan: (x: number) => number;
  /**
   * Computes the greatest common divisor (GCD) of two integers.
   *
   * - Inputs are treated as integers and reduced via `Math.abs`.
   * - If one input is `0`, this returns `abs(other)` (and returns `1` for `(0, 0)`).
   * - Throws `TypeError` if either input is not finite.
   *
   * @example
   * ```ts
   * cmath.gcd(12, 8); // 4
   * cmath.gcd(-12, 8); // 4
   * ```
   */
  function gcd(a: number, b: number): number;
  /**
   * Computes a normalized integer aspect ratio pair from `(width, height)`.
   *
   * This is useful for stable aspect ratios, e.g. `(1920, 1080)` → `[16, 9]`.
   *
   * @param width - Width-like quantity (must be finite and > 0).
   * @param height - Height-like quantity (must be finite and > 0).
   * @param max_denominator - Upper bound for the returned denominator (default: 1000).
   */
  function aspectRatio(width: number, height: number, max_denominator?: number): [number, number] | undefined;
  /**
   * Approximation constant used to convert a circular arc into a cubic Bézier
   * curve. Commonly known as KAPPA, defined as `4 * (sqrt(2) - 1) / 3`.
   *
   * When bending a right angle corner to approximate a quarter circle, the
   * tangents will have a magnitude of `KAPPA * radius` where the radius is
   * half of the chosen reference segment's length.
   */
  const KAPPA: number;
  /**
   * Represents a single axis in 2D space.
   *
   * Also known as horizontal (x-axis) or vertical (y-axis) direction.
   */
  type Axis = "x" | "y";
  const counterAxis: (axis: Axis) => "x" | "y";
  /**
   * Represents a single numerical value, often referred to as a scalar in mathematics and computer science.
   *
   * Scalars are used to denote quantities without direction, such as magnitude, intensity, or single-dimensional values.
   * They are fundamental in computations involving vectors, matrices, and transformations.
   *
   * @typedef Scalar
   *
   * @example
   * // A scalar value representing magnitude
   * const magnitude: cmath.Scalar = 5;
   *
   * @remarks
   * Scalars are essential for defining operations on higher-dimensional objects, such as scaling vectors or matrices.
   * They are typically implemented as `number` in most programming contexts.
   */
  type Scalar = number;
  /**
   * A 2-dimensional vector. (commonly used for positions, sizes, segment, etc.)
   */
  type Vector2 = [number, number];
  /**
   * Represents a 1D range (line segment). where a <= b
   *
   * - [a] start
   * - [b] end
   * - [length] b - a
   * - [center] (a + b / 2) or (a + length / 2) = mean of a and b
   */
  type Range = [number, number];
  /**
   * A 4-dimensional vector. (commonly used for areas, colors, etc.)
   */
  type Vector4 = [number, number, number, number];
  /**
   * Represents a 2D affine transformation matrix.
   *
   * A 2D affine transform is used to perform linear transformations (e.g., scaling, rotation, skewing)
   * and translations (shifting position) in 2D space. The matrix is represented as a 2x3 matrix:
   *
   * ```
   * [ a, b, tx ]
   * [ c, d, ty ]
   * ```
   *
   * Where:
   * - `a` and `d` are scaling factors along the x and y axes, respectively.
   * - `b` and `c` are the skewing (shearing) factors.
   * - `tx` and `ty` are translation (movement) along the x and y axes, respectively.
   *
   * ### Mathematical Formulation
   * When applied to a vector `[x, y]`, the transform produces a new vector `[x', y']` as follows:
   *
   * ```
   * x' = a * x + b * y + tx
   * y' = c * x + d * y + ty
   * ```
   *
   * ### Example Transformations
   * - **Translation**:
   *   ```
   *   [ 1, 0, tx ]
   *   [ 0, 1, ty ]
   *   ```
   *   Moves a point by `tx` along the x-axis and `ty` along the y-axis.
   *
   * - **Scaling**:
   *   ```
   *   [ sx, 0, 0 ]
   *   [ 0, sy, 0 ]
   *   ```
   *   Scales a point by `sx` along the x-axis and `sy` along the y-axis.
   *
   * - **Rotation (θ degrees)**:
   *   ```
   *   [ cos(θ), -sin(θ), 0 ]
   *   [ sin(θ),  cos(θ), 0 ]
   *   ```
   *   Rotates a point counterclockwise by `θ` degrees about the origin.
   *
   * - **Skewing**:
   *   ```
   *   [ 1, tan(α), 0 ]
   *   [ tan(β), 1, 0 ]
   *   ```
   *   Skews a point horizontally by angle `α` and vertically by angle `β`.
   *
   * ### Common Use Cases
   * - Transforming shapes or points in 2D graphics.
   * - Applying geometric transformations in computer graphics or simulations.
   * - Modeling affine transformations in coordinate systems.
   *
   * @example
   * // Rotate a vector [1, 0] by 90 degrees and translate by [2, 3]
   * const transform: Transform = [
   *   [0, -1, 2], // Rotation and translation
   *   [1,  0, 3],
   * ];
   * ```
   */
  type Transform = [[number, number, number], [number, number, number]];
  /**
   * A Rectangle specifies an area that is enclosed by it's top-left point (x, y), its width, and its height.
   *
   * width and height are non-negative values.
   */
  type Rectangle = {
    x: number;
    y: number;
    /**
     * The width of the rectangle. Must be non-negative.
     */
    width: number;
    /**
     * The height of the rectangle. Must be non-negative.
     */
    height: number;
  };
  type RectangleSide = "top" | "right" | "bottom" | "left";
  type RectangleDimension = "width" | "height";
  type CardinalDirection = "n" | "e" | "s" | "w" | "ne" | "se" | "sw" | "nw";
  type IntercardinalDirection = "ne" | "se" | "sw" | "nw";
  type Alignment9 = "bottom-center" | "bottom-left" | "bottom-right" | "center" | "center-left" | "center-right" | "top-center" | "top-left" | "top-right";
  /**
   * Quantizes a value to the nearest multiple of a specified step.
   *
   * This function maps a continuous value to a discrete set of steps,
   * making it useful for rounding, grid alignment, or discretization in
   * mathematical and graphical computations.
   *
   * @param value - The value to quantize.
   * @param step - The step size for quantization. Must be a positive number.
   * @returns The quantized value, snapped to the nearest multiple of the step.
   *
   * @example
   * // Quantize to the nearest multiple of 10
   * cmath.quantize(15, 10); // Returns 20
   *
   * // Quantize to a decimal step size
   * cmath.quantize(0.1123, 0.1); // Returns 0.1
   *
   * // Quantize to a finer step
   * cmath.quantize(7.35, 0.25); // Returns 7.25
   */
  function quantize(value: Scalar, step: number): Scalar;
  function clamp(value: Scalar, min: Scalar, max: Scalar): Scalar;
  /**
   * Clamps a value between 0 and 1.
   *
   * @param t - The value to clamp.
   * @returns The clamped value.
   */
  function clamp01(t: number): number;
  /**
   * Clamps a value between 0 and 255.
   *
   * @param value - The value to clamp.
   * @returns The clamped value.
   */
  function clamp255(value: number): number;
  /**
   * Finds the nearest value to a given number from a list of target numbers.
   *
   * This function calculates the absolute difference between the given value and each target,
   * and returns the target with the smallest difference.
   *
   * @param value - The reference number to which the nearest target is determined.
   * @param points - A list of numbers to compare against the reference number.
   * @returns The number from the list of targets that is closest to the given value.
   *          If the list is empty, `Infinity` is returned.
   *
   * @example
   * const nearestValue = nearest(10, 3, 7, 15, 20);
   * console.log(nearestValue); // Outputs: 7
   *
   * const nearestValueEmpty = nearest(10);
   * console.log(nearestValueEmpty); // Outputs: Infinity
   *
   * @remarks
   * If multiple targets have the same absolute difference to the given value, the first
   * one encountered in the list will be returned.
   */
  function nearest(value: Scalar, ...points: Scalar[]): Scalar;
  /**
   * Converts an angle from radians to degrees.
   *
   * @param rad - The angle in radians.
   * @returns The angle in degrees.
   *
   * @example
   * const angleInDegrees = rad2deg(Math.PI / 2); // Returns 90
   */
  function rad2deg(rad: number): number;
  /**
   * Converts an angle to its principal angle within the range [-180, 180).
   *
   * A principal angle is the equivalent angle that falls within a standard range.
   * This function ensures the input angle is normalized to the range [-180, 180),
   * where negative values represent clockwise rotation and positive values represent counterclockwise rotation.
   *
   * @param angle - The input angle in degrees, which can be any value (positive, negative, or greater than 360).
   * @returns The equivalent principal angle within the range [-180, 180).
   *
   * @example
   * // Normalize angles greater than 180 degrees
   * const angle1 = toPrincipalAngle(270); // Returns -90
   *
   * @example
   * // Normalize angles less than -180 degrees
   * const angle2 = toPrincipalAngle(-450); // Returns -90
   *
   * @example
   * // Handle angles within the range [-180, 180)
   * const angle3 = toPrincipalAngle(45); // Returns 45
   *
   * @example
   * // Normalize angles greater than 360 degrees
   * const angle4 = toPrincipalAngle(540); // Returns 180
   *
   * @remarks
   * - Uses modular arithmetic to ensure the angle is wrapped to the desired range.
   * - This is commonly used in applications like computer graphics, navigation, and physics to standardize angle measurements.
   */
  function principalAngle(angle: number): number;
  /**
   * Determines whether an angle (in degrees) is closer to the x-axis (horizontal)
   * or the y-axis (vertical).
   *
   * - "x" if the angle is closer to 0° or 180°
   * - "y" if the angle is closer to 90° or 270°
   *
   * @param angle - The angle in degrees (can be any real number).
   * @returns `"x"` if closer to horizontal, `"y"` if closer to vertical.
   *
   * @example
   * closestAxis(10);   // "x"
   * closestAxis(85);   // "y"
   * closestAxis(179);  // "x"
   * closestAxis(270);  // "y"
   */
  function angleToAxis(angle: number): Axis;
  /**
   * Move an array item to a different position. Returns a new array with the item moved to the new position.
   */
  function arrayMove<T>(array: T[], from: number, to: number): T[];
  /**
   * Checks if all elements in an array are equal, with optional tolerance.
   *
   * @param arr - The array of numbers to check.
   * @param tolerance - The allowable difference for values to be considered equal. Defaults to 0 (strict equality).
   * @returns `true` if all elements in the array are equal within the given tolerance, otherwise `false`.
   *
   * @example
   * isUniform([1, 1, 1]); // true
   * isUniform([1.001, 1.002, 1.0009], 0.01); // true
   * isUniform([1, 2, 3]); // false
   */
  function isUniform(arr: number[], tolerance?: number): boolean;
  /**
   * Finds the mode (most frequent value) in an array of numbers.
   *
   * The mode is the value that appears most often in the array. If the array is empty, `undefined` is returned.
   *
   * @param arr - An array of numbers to find the mode from.
   * @returns The most frequent number in the array, or `undefined` if the array is empty.
   *
   * @example
   * // Single mode
   * const result1 = mode([1, 2, 2, 3]);
   * console.log(result1); // 2
   *
   * @example
   * // Multiple modes (returns the first encountered)
   * const result2 = mode([1, 2, 2, 3, 3]);
   * console.log(result2); // 2 or 3
   *
   * @example
   * // Empty array
   * const result3 = mode([]);
   * console.log(result3); // undefined
   *
   * @remarks
   * - The function uses a frequency map to count occurrences and identifies the most frequent value.
   * - In the case of ties (multiple numbers with the same highest frequency), the first number encountered is returned.
   */
  function mode(arr: number[]): number | undefined;
  /**
   * Calculates the mean (average) of an array of numbers.
   *
   * The mean is computed by summing all elements in the array and dividing by the number of elements.
   *
   * @param values - An array of numbers for which the mean is to be calculated.
   * @returns The mean (average) of the provided numbers.
   *
   * @throws {Error} If the input array is empty.
   *
   * @example
   * ```typescript
   * const data = [5, 10, 15, 20];
   * const avg = cmath.stats.mean(data);
   * console.log(avg); // Outputs: 12.5
   * ```
   */
  function mean(...values: cmath.Scalar[]): cmath.Scalar;
  /**
   * Generates all combinations of size `k` from the given array.
   *
   * @param arr - The input array.
   * @param k - The size of each combination.
   * @returns An array of combinations (each combination is an array).
   *
   * @see https://en.wikipedia.org/wiki/Combination
   */
  function combinations<T>(arr: T[], k: number): T[][];
  /**
   * Generates all permutations of size `k` from the given array.
   *
   * @param arr - The input array.
   * @param k - The size of each permutation.
   * @returns An array of permutations (each permutation is an array).
   *
   * @see https://en.wikipedia.org/wiki/Permutation
   */
  function permutations<T>(arr: T[], k: number): T[][];
  /**
   * Generates the power set or subsets of a given array.
   *
   * If `k` is not specified, the function returns the full power set, which includes all subsets
   * of all possible sizes (from 0 to `n`, where `n` is the length of the input array).
   * If `k` is specified, the function returns only the subsets of size `k`.
   *
   * @param arr - The input array for which the subsets are to be generated.
   * @param k - (Optional) The size of subsets to generate. If -1, all subsets are generated.
   * @returns An array of arrays representing the subsets of the input array.
   *          - If `k` is omitted, returns the full power set.
   *          - If `k` is specified, returns only the subsets of size `k`.
   *
   * @example
   * ```typescript
   * // Generate the full power set
   * const powerSet = cmath.powerset([1, 2, 3]);
   * console.log(powerSet);
   * // Output:
   * // [
   * //   [],
   * //   [1], [2], [3],
   * //   [1, 2], [1, 3], [2, 3],
   * //   [1, 2, 3]
   * // ]
   * ```
   *
   * @example
   * ```typescript
   * // Generate all subsets of size 2
   * const subsetsOfSize2 = cmath.powerset([1, 2, 3], 2);
   * console.log(subsetsOfSize2);
   * // Output:
   * // [ [1, 2], [1, 3], [2, 3] ]
   * ```
   *
   * @remarks
   * - If `k` is negative or greater than the length of the array, an empty array is returned.
   * - Includes the empty set ([]), which is part of the standard mathematical definition of a powerset.
   * - The number of subsets returned when `k` is specified is \( \binom{n}{k} \), where \( n \) is the length of the input array.
   * - This function utilizes the `cmath.combinations` function internally to generate subsets of specific sizes.
   *
   * @see https://en.wikipedia.org/wiki/Power_set
   */
  function powerset<T>(arr: T[], k?: number): T[][];
  namespace delta {
    /**
     * Projects a scalar delta along the given axis through a 2D affine transform.
     *
     * @param offset - The delta along the 'x' or 'y' axis.
     * @param axis - The axis ('x' or 'y') of the delta.
     * @param transform - The 2×3 affine transform matrix.
     * @returns The transformed scalar offset in surface space.
     */
    function transform(offset: number, axis: cmath.Axis, transform: cmath.Transform): number;
  }
  /**
   * Rational / fraction helpers.
   */
  namespace rational {
    /**
     * Approximates a real number with a reduced fraction using continued fractions.
     *
     * @param x - Real value to approximate.
     * @param max_denominator - Upper bound for the returned denominator (default: 1000).
     * @param epsilon - Convergence threshold (default: 1e-12).
     * @returns `[numerator, denominator]` (denominator > 0), or `undefined` if input is invalid.
     */
    function approximateFraction(x: number, max_denominator?: number, epsilon?: number): [number, number] | undefined;
  }
  /**
   * Vector2 computations.
   */
  namespace vector2 {
    /**
     * The zero vector `[0, 0]`.
     */
    const zero: Vector2;
    /**
     * Constructs a 2D vector where one of the components (`a` or `b`) is assigned to the main axis (`x` or `y`).
     *
     * This function allows flexible assignment of scalar values to specific axes in 2D space
     * based on the specified main axis.
     *
     * @param a - The scalar value to assign to the main axis.
     * @param b - The scalar value to assign to the counter axis.
     * @param mainAxis - The primary axis (`"x"` or `"y"`) to which `a` should be assigned.
     *
     * @returns A 2D vector `[a, b]` if `mainAxis` is `"x"`, or `[b, a]` if `mainAxis` is `"y"`.
     *
     * @example
     * ```typescript
     * // Assign 5 to the x-axis and 10 to the y-axis
     * const vector1 = cmath.vector2.withMainAxis(5, 10, "x");
     * console.log(vector1); // [5, 10]
     *
     * // Assign 5 to the y-axis and 10 to the x-axis
     * const vector2 = cmath.vector2.withMainAxis(5, 10, "y");
     * console.log(vector2); // [10, 5]
     * ```
     *
     * @remarks
     * This is particularly useful in scenarios where the primary axis needs to be specified dynamically,
     * such as when configuring flexible layouts or computations in 2D space.
     */
    function axisOriented(a: Scalar, b: Scalar, mainAxis: Axis): Vector2;
    function isZero(vector: Vector2): boolean;
    function add(...vectors: Vector2[]): Vector2;
    function sub(...vectors: Vector2[]): Vector2;
    function quantize(vector: Vector2, step: number | Vector2): Vector2;
    function multiply(...vectors: Vector2[]): Vector2;
    /**
     * Inverts a 2D vector by negating both its components.
     *
     * @param vector - The vector to invert, in the format `[x, y]`.
     * @returns A new vector `[−x, −y]` with both components inverted.
     *
     * @example
     * const v: cmath.Vector2 = [3, -4];
     * const inverted = cmath.vector2.invert(v);
     * console.log(inverted); // [-3, 4]
     */
    function invert(vector: Vector2): Vector2;
    /**
     * Calculates the angle in degrees of a 2D point relative to an origin.
     *
     * This function computes the angle formed by the vector from the origin to the point
     * relative to the positive x-axis, measured counterclockwise.
     *
     * @param pointA - The origin point [x0, y0].
     * @param pointB - The target point [x, y].
     * @returns The angle in degrees, normalized to [0, 360).
     *
     * @example
     * const origin: cmath.Vector2 = [0, 0];
     * const point: cmath.Vector2 = [1, 1];
     * const angle = cmath.vector2.angle(origin, point);
     * console.log(angle); // 45
     */
    function angle(pointA: Vector2, pointB: Vector2): number;
    /**
     * Rotates a 2D vector by a specified angle.
     *
     * This function applies a rotation transformation to a given vector `[x, y]`,
     * rotating it counterclockwise around the origin by the specified angle in degrees.
     *
     * @param vector - The 2D vector to rotate, represented as `[x, y]`.
     * @param angle - The rotation angle in degrees. Positive values indicate counterclockwise rotation.
     * @returns A new vector `[rotatedX, rotatedY]` representing the rotated vector.
     *
     * @example
     * // Rotate the vector [1, 0] by 90 degrees
     * const vector: cmath.Vector2 = [1, 0];
     * const rotated = cmath.vector2.rotate(vector, 90);
     * console.log(rotated); // Outputs: [0, 1]
     *
     * @example
     * // Rotate the vector [1, 1] by -45 degrees
     * const vector: cmath.Vector2 = [1, 1];
     * const rotated = cmath.vector2.rotate(vector, -45);
     * console.log(rotated); // Outputs: [~1.414, 0]
     *
     * @remarks
     * - The angle is converted from degrees to radians internally, as trigonometric functions in JavaScript operate in radians.
     * - The rotation is performed around the origin `(0, 0)`.
     * - If the angle is `0`, the input vector is returned unchanged.
     */
    function rotate(vector: Vector2, angle: number): Vector2;
    /**
     * Performs linear interpolation between two 2D vectors.
     *
     * This function calculates a point that lies on the straight line between two given vectors,
     * at a specified interpolation factor. When t = 0, the result is equal to vector a.
     * When t = 1, the result is equal to vector b.
     *
     * @param a - The starting vector [x, y].
     * @param b - The ending vector [x, y].
     * @param t - The interpolation factor, typically in the range [0, 1].
     * @returns A new vector representing the interpolated point.
     *
     * @example
     * const start: cmath.Vector2 = [0, 0];
     * const end: cmath.Vector2 = [10, 20];
     * const mid = cmath.vector2.lerp(start, end, 0.5);
     * console.log(mid); // [5, 10]
     *
     * @example
     * // Interpolate at 25% from start to end
     * const quarter = cmath.vector2.lerp([0, 0], [100, 50], 0.25);
     * console.log(quarter); // [25, 12.5]
     */
    function lerp(a: Vector2, b: Vector2, t: number): Vector2;
    /**
     * Checks if two 1D segments intersect or overlap.
     *
     * @param segmentA - The first segment [startA, endA].
     * @param segmentB - The second segment [startB, endB].
     * @returns `true` if the segments intersect or overlap, otherwise `false`.
     */
    const intersects: (segmentA: Vector2, segmentB: Vector2) => boolean;
    /**
     * Calculates the intersection of two 1D segments.
     *
     * @param segmentA - The first segment as [startA, endA].
     * @param segmentB - The second segment as [startB, endB].
     * @returns A `Vector2` representing the intersection segment, or `null` if the segments do not intersect.
     *
     * @example
     * // Overlapping segments
     * const intersection = cmath.vector2.intersection([1, 5], [3, 7]);
     * console.log(intersection); // [3, 5]
     *
     * // Non-overlapping segments
     * const noIntersection = cmath.vector2.intersection([1, 5], [6, 8]);
     * console.log(noIntersection); // null
     */
    function intersection(segmentA: cmath.Vector2, segmentB: cmath.Vector2): cmath.Vector2 | null;
    function min(...vectors: Vector2[]): Vector2;
    function max(...vectors: Vector2[]): Vector2;
    /**
     * Clamps each component of a 2D vector within the corresponding min and max bounds.
     *
     * @param vector - The input vector [x, y].
     * @param min - The minimum allowed values [minX, minY].
     * @param max - The maximum allowed values [maxX, maxY].
     * @returns A new vector [clampedX, clampedY] where each component is between the corresponding min and max.
     *
     * @example
     * ```ts
     * // [5, 15] clamped between [0, 10] and [10, 20] remains [5, 15]
     * console.log(clamp([5, 15], [0, 10], [10, 20])); // [5, 15]
     *
     * // [15, 5] clamped between [0, 10] and [10, 20] becomes [10, 10]
     * console.log(clamp([15, 5], [0, 10], [10, 20])); // [10, 10]
     * ```
     */
    function clamp(vector: Vector2, min: Vector2, max: Vector2): Vector2;
    /**
     * Calculates the Euclidean distance between two 2D vectors.
     *
     * The Euclidean distance is the straight-line distance between two points in a 2D space.
     * It is computed using the formula:
     * \[
     * d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
     * \]
     *
     * @param a - The first 2D vector `[x1, y1]`.
     * @param b - The second 2D vector `[x2, y2]`.
     * @returns The Euclidean distance as a number.
     *
     * @example
     * // Distance between two points
     * const a: cmath.Vector2 = [3, 4];
     * const b: cmath.Vector2 = [6, 8];
     * const dist = cmath.vector2.distance(a, b);
     * console.log(dist); // Outputs: 5
     *
     * @remarks
     * - Uses `Math.hypot` for precision and efficiency.
     * - The distance is always a non-negative scalar value.
     */
    function distance(a: Vector2, b: Vector2): number;
    /**
     * Applies a 2D transformation matrix to a vector.
     *
     * This function takes a 2D vector `[x, y]` and applies an affine transformation
     * using the provided transformation matrix. The transformation includes
     * scaling, rotation, and translation.
     *
     * The transformation matrix is in the format:
     * ```
     * [[a, b, tx],
     *  [c, d, ty]]
     * ```
     * where:
     * - `a` and `d` represent scaling along the x-axis and y-axis, respectively.
     * - `b` and `c` represent rotation.
     * - `tx` and `ty` represent translation along the x-axis and y-axis.
     *
     * @param vector - The input 2D vector `[x, y]` to transform.
     * @param transform - The 2D transformation matrix.
     * @returns The transformed vector `[x', y']` after applying the transformation.
     *
     * @example
     * // Rotate a vector [1, 0] by 90 degrees and translate by [2, 3]
     * const vector: cmath.Vector2 = [1, 0];
     * const transform: cmath.Transform = [
     *   [0, -1, 2],
     *   [1, 0, 3],
     * ];
     * const result = cmath.vector2.transform(vector, transform);
     * console.log(result); // [2, 4]
     *
     * @example
     * // Apply scaling transformation
     * const vector: cmath.Vector2 = [2, 3];
     * const transform: cmath.Transform = [
     *   [2, 0, 0],
     *   [0, 3, 0],
     * ];
     * const result = cmath.vector2.transform(vector, transform);
     * console.log(result); // [4, 9]
     *
     * @remarks
     * - This function is useful in computer graphics, physics simulations, and other
     *   mathematical computations where 2D transformations are required.
     * - The transformation matrix must be well-formed; otherwise, the behavior is undefined.
     */
    function transform(vector: Vector2, transform: cmath.Transform): Vector2;
    function identical(a: Vector2, b: Vector2): boolean;
    /**
     * Computes the dot product of two vectors.
     *
     * The dot product is a scalar value that represents the magnitude of the projection
     * of one vector onto another, multiplied by the magnitude of the target vector.
     * It's fundamental for many vector operations including projection, angle calculation,
     * and determining orthogonality.
     *
     * @param a - The first vector.
     * @param b - The second vector.
     * @returns The dot product of vectors `a` and `b`.
     *
     * @example
     * ```typescript
     * const a: cmath.Vector2 = [3, 4];
     * const b: cmath.Vector2 = [1, 2];
     * const result = cmath.vector2.dot(a, b);
     * console.log(result); // 11 (3*1 + 4*2)
     * ```
     *
     * @example
     * ```typescript
     * // Check if vectors are perpendicular (dot product = 0)
     * const a: cmath.Vector2 = [1, 0];
     * const b: cmath.Vector2 = [0, 1];
     * const isPerpendicular = cmath.vector2.dot(a, b) === 0;
     * console.log(isPerpendicular); // true
     * ```
     *
     * @remarks
     * - The mathematical formula is: `a · b = a₁b₁ + a₂b₂`
     * - Dot product of 0 indicates perpendicular vectors
     * - Positive dot product indicates acute angle between vectors
     * - Negative dot product indicates obtuse angle between vectors
     */
    function dot(a: Vector2, b: Vector2): number;
    /**
     * Computes the cross product of two vectors.
     *
     * The cross product in 2D returns a scalar value representing the signed area
     * of the parallelogram formed by the two vectors. It's useful for determining
     * orientation, calculating areas, and checking if vectors are parallel.
     *
     * @param a - The first vector.
     * @param b - The second vector.
     * @returns The cross product of vectors `a` and `b`.
     *
     * @example
     * ```typescript
     * const a: cmath.Vector2 = [3, 4];
     * const b: cmath.Vector2 = [1, 2];
     * const result = cmath.vector2.cross(a, b);
     * console.log(result); // 2 (3*2 - 4*1)
     * ```
     *
     * @example
     * ```typescript
     * // Check if vectors are parallel (cross product = 0)
     * const a: cmath.Vector2 = [2, 4];
     * const b: cmath.Vector2 = [1, 2]; // parallel to a
     * const isParallel = cmath.vector2.cross(a, b) === 0;
     * console.log(isParallel); // true
     * ```
     *
     * @remarks
     * - The mathematical formula is: `a × b = a₁b₂ - a₂b₁`
     * - Cross product of 0 indicates parallel vectors
     * - Positive cross product indicates counter-clockwise rotation from a to b
     * - Negative cross product indicates clockwise rotation from a to b
     * - The magnitude equals the area of the parallelogram formed by the vectors
     */
    function cross(a: Vector2, b: Vector2): number;
    /**
     * Projects one vector onto another vector.
     *
     * This function computes the orthogonal projection of `vector` onto `axis`.
     * The result is a vector that lies on the line defined by `axis` and represents
     * the closest point on that line to the original `vector`.
     *
     * @param vector - The vector to project.
     * @param axis - The target vector/axis to project onto.
     * @returns The projection of `vector` onto `axis`.
     *
     * @example
     * ```typescript
     * const vector: cmath.Vector2 = [3, 4];
     * const axis: cmath.Vector2 = [1, 0];
     * const projection = cmath.vector2.project(vector, axis);
     * console.log(projection); // [3, 0] - projected onto x-axis
     * ```
     *
     * @example
     * ```typescript
     * const vector: cmath.Vector2 = [2, 3];
     * const axis: cmath.Vector2 = [1, 1];
     * const projection = cmath.vector2.project(vector, axis);
     * console.log(projection); // [2.5, 2.5] - projected onto diagonal
     * ```
     *
     * @remarks
     * - If `axis` is the zero vector, returns `[0, 0]`.
     * - The mathematical formula is: `proj_axis(vector) = (vector · axis / |axis|²) × axis`
     * - This is a fundamental operation in linear algebra for vector decomposition.
     */
    function project(vector: Vector2, axis: Vector2): Vector2;
  }
  namespace vector4 {
    function identical(a: Vector4, b: Vector4): boolean;
  }
  namespace compass {
    /**
     * Cardinal direction vector
     *
     * - `n -> [0, -1]`
     * - `e -> [1, 0]`
     * - `s -> [0, 1]`
     * - `w -> [-1, 0]`
     * - ... and so on
     */
    const cardinal_direction_vector: {
      readonly nw: cmath.Vector2;
      readonly ne: cmath.Vector2;
      readonly sw: cmath.Vector2;
      readonly se: cmath.Vector2;
      readonly n: cmath.Vector2;
      readonly e: cmath.Vector2;
      readonly s: cmath.Vector2;
      readonly w: cmath.Vector2;
    };
    /**
     * Inverts a cardinal direction to its opposite.
     *
     * This function takes a cardinal direction (e.g., "n", "e", "nw") and returns
     * its opposite direction (e.g., "n" becomes "s", "ne" becomes "sw").
     *
     * @param direction - The cardinal direction to invert. Must be one of the following:
     *   - `"n"`: North
     *   - `"e"`: East
     *   - `"s"`: South
     *   - `"w"`: West
     *   - `"ne"`: North-East
     *   - `"se"`: South-East
     *   - `"sw"`: South-West
     *   - `"nw"`: North-West
     * @returns The inverted cardinal direction, as follows:
     *   - `"n"` -> `"s"`
     *   - `"e"` -> `"w"`
     *   - `"s"` -> `"n"`
     *   - `"w"` -> `"e"`
     *   - `"ne"` -> `"sw"`
     *   - `"se"` -> `"nw"`
     *   - `"sw"` -> `"ne"`
     *   - `"nw"` -> `"se"`
     *
     * @example
     * const inverted = cmath.invertCardinalDirection("n");
     * console.log(inverted); // "s"
     *
     * const invertedDiagonal = cmath.invertCardinalDirection("ne");
     * console.log(invertedDiagonal); // "sw"
     *
     * @remarks
     * - This function is useful for geometric computations or UI layouts where
     *   directional relationships need to be reversed.
     */
    function invertDirection(direction: CardinalDirection): CardinalDirection;
    /**
     * Converts a 9-point alignment to a cardinal direction.
     *
     * @param alignment - The 9-point alignment to convert.
     * @returns The corresponding cardinal direction, or "center" if the alignment is "center".
     */
    function fromAlignment9(alignment: Alignment9): CardinalDirection | "center";
    /**
     * Converts a strictly orthogonal cardinal direction (n, e, s, w) to the corresponding
     * rectangle side (top, right, bottom, left).
     *
     * Diagonal directions (ne, nw, se, sw) return `undefined`.
     *
     * @param direction - The cardinal direction to convert, one of:
     *   - `"n"` (north)
     *   - `"e"` (east)
     *   - `"s"` (south)
     *   - `"w"` (west)
     *   - or a diagonal (e.g. `"ne"`) which yields `undefined`.
     *
     * @returns The corresponding `RectangleSide` ("top", "right", "bottom", "left")
     *          if the direction is orthogonal, otherwise `undefined`.
     *
     * @example
     * ```
     * const side1 = toRectangleSide("n");
     * // side1 === "top"
     *
     * const side2 = toRectangleSide("ne");
     * // side2 === undefined
     * ```
     *
     * @remarks
     * This is often used for translating a directional label (`"n"`, `"s"`, etc.)
     * to an actual rectangle edge in UI layouts or alignment logic.
     */
    function toRectangleSide(direction: CardinalDirection): RectangleSide | undefined;
    /**
     * The 8 cardinal/diagonal directions of a resize handle.
     *
     * Structurally identical to {@link CardinalDirection} — this alias is
     * the single source of truth for the resize-handle direction union that
     * `@grida/hud` and `@grida/svg-editor` previously each re-declared. Named
     * for the resize-handle context at the call sites.
     */
    type ResizeDirection = CardinalDirection;
    /**
     * Decompose a cardinal direction into its N/S/E/W membership.
     *
     * A diagonal belongs to two components (`"ne"` → north + east); an
     * orthogonal direction to one. This is the shared primitive behind
     * resize-handle math — the HUD's preview rect and svg-editor's
     * direction mask both build on it instead of re-deriving the four
     * boolean ORs.
     *
     * Derived from {@link cardinal_direction_vector} so the direction set
     * has a single source of truth: the unit vector's sign *is* the axis
     * membership (`x > 0` → east, `y < 0` → north).
     *
     * @example
     * cmath.compass.cardinalComponents("ne");
     * // { north: true, south: false, east: true, west: false }
     */
    function cardinalComponents(dir: CardinalDirection): {
      north: boolean;
      south: boolean;
      east: boolean;
      west: boolean;
    };
  }
  namespace rect {
    /**
     * get size of the rectangle in the given axis
     *
     * - `x` -> `width`
     * - `y` -> `height`
     *
     * @param rect
     * @param axis
     * @returns size of the rectangle in the given axis
     */
    function getAxisDimension(rect: Rectangle, axis: Axis): number;
    function getOppositeSide(side: RectangleSide): RectangleSide;
    /**
     * Quantizes the position and size of a rectangle by snapping its coordinates and dimensions
     * to the nearest multiples of the given step.
     *
     * @remarks
     * This function may lose precision and distort the rectangle's original geometry
     * because it applies quantization to each property individually.
     *
     * @param rect - The rectangle to quantize.
     * @param step - A single step value or a 2D vector ([xStep, yStep]).
     * @returns A new rectangle with quantized `x`, `y`, `width`, and `height`.
     */
    function quantize(rect: Rectangle, step: Scalar | Vector2): Rectangle;
    /**
     * Translates a rectangle by a given vector.
     *
     * This function adjusts the position of a rectangle (`x` and `y`) by adding a translation vector.
     * The dimensions (`width` and `height`) remain unchanged.
     *
     * @param rect - The rectangle to be translated, defined by its position (`x`, `y`) and dimensions (`width`, `height`).
     * @param t - The translation vector `[tx, ty]`, where `tx` is the horizontal translation and `ty` is the vertical translation.
     * @returns A new rectangle with updated `x` and `y` values, and the same `width` and `height` as the original.
     *
     * @example
     * // Translate a rectangle by a positive vector
     * const rect = { x: 10, y: 20, width: 30, height: 40 };
     * const translation = [5, 10];
     * const result = cmath.rect.translate(rect, translation);
     * console.log(result); // { x: 15, y: 30, width: 30, height: 40 }
     *
     * @example
     * // Translate a rectangle by a negative vector
     * const rect = { x: 10, y: 20, width: 30, height: 40 };
     * const translation = [-5, -10];
     * const result = cmath.rect.translate(rect, translation);
     * console.log(result); // { x: 5, y: 10, width: 30, height: 40 }
     *
     * @example
     * // Translate a rectangle by a zero vector (no movement)
     * const rect = { x: 10, y: 20, width: 30, height: 40 };
     * const translation = [0, 0];
     * const result = cmath.rect.translate(rect, translation);
     * console.log(result); // { x: 10, y: 20, width: 30, height: 40 }
     *
     * @remarks
     * - The translation vector affects only the `x` and `y` properties of the rectangle.
     * - The rectangle's dimensions (`width` and `height`) are preserved.
     */
    function translate(rect: Rectangle, t: Vector2): Rectangle;
    /**
     * Applies a 2D scaling transformation to a rectangle relative to a given origin.
     *
     * This function modifies the rectangle's position and dimensions by applying
     * scaling factors along the x-axis and y-axis. Negative scaling factors
     * result in a reflection across the respective axis.
     *
     * @param rect - The rectangle to be transformed, defined by its position (x, y) and dimensions (width, height).
     * @param origin - The point ([originX, originY]) relative to which the scaling is applied.
     * @param scale - The scaling factors ([scaleX, scaleY]) for the x-axis and y-axis.
     * @returns A new rectangle transformed by the specified scaling operation.
     *
     * @remarks
     * - Scaling is performed as an affine transformation: `newX = originX + (x - originX) * scaleX` and similarly for `y`.
     * - The width and height are directly scaled by `scaleX` and `scaleY`, respectively.
     * - Negative scale factors reflect the rectangle across the corresponding axis.
     *
     * @example
     * // Uniform scaling
     * const rect = { x: 10, y: 20, width: 30, height: 40 };
     * const origin = [0, 0];
     * const scale = [2, 2];
     * cmath.rect.scale(rect, origin, scale); // { x: 20, y: 40, width: 60, height: 80 }
     *
     * @example
     * // Non-uniform scaling
     * const rect = { x: 10, y: 20, width: 30, height: 40 };
     * const origin = [0, 0];
     * const scale = [2, 1.5];
     * cmath.rect.scale(rect, origin, scale); // { x: 20, y: 30, width: 60, height: 60 }
     *
     * @example
     * // Reflection using negative scaling
     * const rect = { x: 10, y: 20, width: 30, height: 40 };
     * const origin = [0, 0];
     * const scale = [-1, -1];
     * cmath.rect.scale(rect, origin, scale); // { x: -10, y: -20, width: -30, height: -40 }
     */
    function scale(rect: cmath.Rectangle, origin: cmath.Vector2, scale: cmath.Vector2): cmath.Rectangle;
    /**
     * Normalizes a rectangle to ensure positive width and height.
     *
     * This function adjusts the rectangle's `x` and `y` coordinates
     * to ensure that the rectangle is defined with non-negative `width` and `height`.
     * If the original rectangle has negative width or height, the function modifies
     * the rectangle's position (`x` and `y`) and dimensions to maintain equivalence.
     *
     * @param rect - The input rectangle, which may have negative width or height.
     * @returns A new rectangle with positive `width` and `height`,
     *          and adjusted `x` and `y` coordinates.
     *
     * @example
     * // Rectangle with negative width
     * const rect = { x: 10, y: 20, width: -30, height: 40 };
     * const normalized = cmath.rect.positive(rect);
     * console.log(normalized);
     * // { x: -20, y: 20, width: 30, height: 40 }
     *
     * @example
     * // Rectangle with negative height
     * const rect = { x: 10, y: 20, width: 30, height: -40 };
     * const normalized = cmath.rect.positive(rect);
     * console.log(normalized);
     * // { x: 10, y: -20, width: 30, height: 40 }
     *
     * @example
     * // Rectangle with both negative width and height
     * const rect = { x: 10, y: 20, width: -30, height: -40 };
     * const normalized = cmath.rect.positive(rect);
     * console.log(normalized);
     * // { x: -20, y: -20, width: 30, height: 40 }
     *
     * @remarks
     * - This function is useful for ensuring that rectangles are represented
     *   with positive dimensions, especially in computations where negative
     *   dimensions can cause unexpected results.
     * - The `x` and `y` coordinates are adjusted to maintain the rectangle's
     *   equivalent area.
     */
    function positive(rect: Rectangle): Rectangle;
    function aspectratio(rect: cmath.Rectangle): cmath.Scalar;
    /**
     * Computes the scale factors required to transform rectangle `a` to rectangle `b`.
     *
     * The position of the rectangles is not considered.
     *
     * @param a - The original rectangle.
     * @param b - The target rectangle.
     * @returns The scale factors [scaleX, scaleY].
     *
     * @example
     * const a = { x: 10, y: 20, width: 100, height: 100 };
     * const b = { x: 10, y: 20, width: 200, height: 300 };
     * const scale = getScaleFactors(a, b); // [2, 3]
     */
    function getScaleFactors(a: cmath.Rectangle, b: cmath.Rectangle): cmath.Vector2;
    /**
     * Computes the 2D transform matrix that maps rectangle `a` onto rectangle `b`.
     *
     * Essentially, we want a transform `T` such that:
     * `point_in_b = T * point_in_a`
     *
     * The result is an affine transform (2×3 matrix) that:
     * 1. Translates `a` to the origin,
     * 2. Scales it by the ratio of widths and heights of `b` / `a`,
     * 3. Translates it to the position of `b`.
     *
     * @param a - The source rectangle.
     * @param b - The target rectangle.
     *
     * @returns A 2D transform matrix in the format:
     *   ```
     *   [
     *     [scaleX, 0, translateX],
     *     [0, scaleY, translateY],
     *   ]
     *   ```
     *
     * @example
     * ```ts
     * const a = { x: 0, y: 0, width: 100, height: 50 };
     * const b = { x: 200, y: 300, width: 400, height: 200 };
     *
     * const t = cmath.rect.getRelativeTransform(a, b);
     * const result = cmath.rect.transform(a, t);
     *
     * // Now `result` should be identical to `b`.
     * console.log(result);
     * // => { x: 200, y: 300, width: 400, height: 200 }
     * ```
     */
    function getRelativeTransform(a: cmath.Rectangle, b: cmath.Rectangle): cmath.Transform;
    /**
     * Applies a general 2D affine transform (including translate, scale, rotate, and skew)
     * to each corner of a rectangle, then returns the bounding box of the transformed corners.
     *
     * @param rect - The source rectangle `{ x, y, width, height }`.
     * @param transform - The 2D transform matrix:
     *   ```
     *   [
     *     [a, b, tx],
     *     [c, d, ty],
     *   ]
     *   ```
     * @returns A new rectangle representing the bounding box of the transformed corners.
     *
     * @example
     * const rect: cmath.Rectangle = { x: 10, y: 20, width: 30, height: 40 };
     * // Affine transform matrix with skew
     * const t: cmath.Transform = [
     *   [1, 0.2, 100],
     *   [0.3, 1, 50],
     * ];
     * const result = cmath.rect.transform(rect, t);
     * console.log(result);
     * // Example => { x: 110, y: 73, width: 42, height: 53 }
     */
    function transform(rect: cmath.Rectangle, transform: cmath.Transform): cmath.Rectangle;
    /**
     * Returns the 4 corners of a rectangle in TL → TR → BR → BL order.
     *
     * Winding is clockwise in screen-space (y-down). The order matches the
     * inline literal used by `rect.transform` above; callers needing to
     * transform corners through an affine matrix should reuse this helper
     * with `cmath.vector2.transform` to keep the corner order canonical.
     *
     * @example
     * cmath.rect.toCorners({ x: 0, y: 0, width: 10, height: 5 });
     * // [[0, 0], [10, 0], [10, 5], [0, 5]]
     */
    function toCorners(r: Rectangle): [cmath.Vector2, cmath.Vector2, cmath.Vector2, cmath.Vector2];
    /**
     * Rotates a rectangle and computes the bounding box of the rotated rectangle.
     *
     * @param rect - The rectangle to rotate.
     * @param rotate - The rotation angle in degrees (similar to CSS rotate).
     * @returns A new rectangle representing the axis-aligned bounding box of the rotated rectangle.
     *
     * @example
     * const rect = { x: 10, y: 10, width: 50, height: 30 };
     * const rotated = cmath.rect.rotate(rect, 45);
     * console.log(rotated); // { x: 3.03, y: -7.32, width: 70.71, height: 56.57 }
     */
    function rotate(rect: Rectangle, rotate: number): Rectangle;
    /**
     * Creates a rectangle that fully bounds the given points.
     *
     * This function computes the minimum bounding rectangle that encloses all the input points.
     * At least 1 point is required.
     *
     * @param points - An array of points (at least 1) to calculate the bounding rectangle.
     * @returns A rectangle with `x`, `y`, `width`, and `height`.
     *
     * @example
     * const rect = cmath.rect.fromPoints([[10, 20], [30, 40], [15, 25]]);
     * console.log(rect); // { x: 10, y: 20, width: 20, height: 20 }
     *
     * const pointRect = cmath.rect.fromPoints([[10, 20]]);
     * console.log(pointRect); // { x: 10, y: 20, width: 0, height: 0 }
     */
    function fromPoints(points: cmath.Vector2[]): cmath.Rectangle;
    /**
     * Computes the minimum bounding rectangle that encloses all the input points.
     * This is a safe version of `fromPoints` that returns a zero rectangle instead of throwing
     * when the input array is empty.
     *
     * This function computes the minimum bounding rectangle that encloses all the input points.
     * If no points are provided, returns a zero rectangle at origin (0, 0).
     *
     * @param points - An array of points to calculate the bounding rectangle from.
     * @returns A rectangle with `x`, `y`, `width`, and `height`. Returns zero rectangle if no points.
     *
     * @example
     * const rect = cmath.rect.fromPointsOrZero([[10, 20], [30, 40], [15, 25]]);
     * console.log(rect); // { x: 10, y: 20, width: 20, height: 20 }
     *
     * const emptyRect = cmath.rect.fromPointsOrZero([]);
     * console.log(emptyRect); // { x: 0, y: 0, width: 0, height: 0 }
     *
     * const pointRect = cmath.rect.fromPointsOrZero([[10, 20]]);
     * console.log(pointRect); // { x: 10, y: 20, width: 0, height: 0 }
     */
    function fromPointsOrZero(points: cmath.Vector2[]): cmath.Rectangle;
    type Rectangle9Points = {
      topLeft: Vector2;
      topRight: Vector2;
      bottomRight: Vector2;
      bottomLeft: Vector2;
      topCenter: Vector2;
      rightCenter: Vector2;
      bottomCenter: Vector2;
      leftCenter: Vector2;
      center: Vector2;
    };
    /**
     * Returns an object containing 9 control points of a rectangle: 4 corners, 4 midpoints, and the center.
     *
     * @param rect - The rectangle to compute points from.
     * @returns An object with properties for each control point.
     *
     * @example
     * const rect = { x: 10, y: 20, width: 30, height: 40 };
     * const points = cmath.rect.to9Points(rect);
     * console.log(points);
     * // Outputs:
     * // {
     * //   topLeft: [10, 20],
     * //   topRight: [40, 20],
     * //   bottomRight: [40, 60],
     * //   bottomLeft: [10, 60],
     * //   topCenter: [25, 20],
     * //   rightCenter: [40, 40],
     * //   bottomCenter: [25, 60],
     * //   leftCenter: [10, 40],
     * //   center: [25, 40],
     * // }
     */
    function to9Points(rect: Rectangle): Rectangle9Points;
    /**
     * A chunk array of 9 control points of a rectangle, with the exact order:
     *
     * `[topLeft, topRight, bottomRight, bottomLeft, topCenter, rightCenter, bottomCenter, leftCenter, center]`
     */
    type TRectangle9PointsChunk<T> = [T, T, T, T, T, T, T, T, T];
    function to9PointsChunk(r: cmath.Rectangle): TRectangle9PointsChunk<cmath.Vector2>;
    function getCardinalPoint(rect: cmath.Rectangle, point: CardinalDirection): Vector2;
    /**
     * Calculates the center point of a rectangle.
     *
     * The center point is defined as the midpoint of the rectangle's width and height.
     *
     * @param rect - The rectangle to calculate the center for, defined by its position (`x`, `y`) and dimensions (`width`, `height`).
     * @returns A `Vector2` representing the center point `[centerX, centerY]`.
     *
     * @example
     * const rect = { x: 10, y: 20, width: 30, height: 40 };
     * const center = cmath.rect.getCenter(rect);
     * console.log(center); // [25, 40]
     *
     * @example
     * // Handles rectangles with zero width or height
     * const rect = { x: 10, y: 20, width: 0, height: 40 };
     * const center = cmath.rect.getCenter(rect);
     * console.log(center); // [10, 40]
     */
    function getCenter(rect: cmath.Rectangle): cmath.Vector2;
    /**
     * Checks if rectangle `a` fully contains rectangle `b`.
     *
     * A rectangle `target` is considered contained within rectangle `container` if:
     * - The top-left corner of `target` lies within `container`.
     * - The bottom-right corner of `target` lies within `container`.
     *
     * @param a - The containing rectangle.
     * @param b - The rectangle to test for containment.
     * @returns `true` if rectangle `target` is fully contained within rectangle `container`, otherwise `false`.
     *
     * @example
     * const container = { x: 10, y: 10, width: 100, height: 100 };
     * const target = { x: 20, y: 20, width: 30, height: 30 };
     * cmath.rect.contains(container, target); // Returns true.
     */
    function contains(a: Rectangle, b: Rectangle): boolean;
    /**
     * Checks if a rectangle contains a point.
     *
     * @param point - The point to check, as a `[x, y]` tuple.
     * @param rect - The rectangle in `{ x, y, width, height }` format.
     * @returns `true` if the point is inside the rectangle, otherwise `false`.
     *
     * @example
     * const point = [15, 25];
     * const rect = { x: 10, y: 20, width: 30, height: 40 };
     * const isInside = cmath.rect.containsPoint(point, rect);
     * console.log(isInside); // true
     */
    function containsPoint(rect: cmath.Rectangle, point: cmath.Vector2): boolean;
    /**
     * Returns the signed offset from the given point to the nearest edge of the rectangle.
     * Negative values indicate the point is left or above the rectangle's boundary.
     *
     * @param rect - The rectangle defined by { x, y, width, height }.
     * @param point - The point as a tuple [x, y].
     * @returns A tuple [dx, dy] representing the signed offset.
     *
     * @example
     * ```ts
     * const rect = { x: 10, y: 10, width: 100, height: 50 };
     * console.log(offset(rect, [5, 30]));   // Output: [-5, 0]
     * console.log(offset(rect, [50, 30]));  // Output: [0, 0]
     * console.log(offset(rect, [120, 70])); // Output: [10, 10]
     * ```
     */
    function offset(rect: {
      x: number;
      y: number;
      width: number;
      height: number;
    }, point: [number, number]): [number, number];
    /**
     * Checks if rectangle `a` intersects with rectangle `b`.
     *
     * Two rectangles are considered intersecting if they overlap, either partially or fully. Edges and corners touching
     * are also considered as an intersection.
     *
     * @param a - The first rectangle.
     * @param b - The second rectangle.
     * @returns `true` if rectangle `a` intersects with rectangle `b`, otherwise `false`.
     *
     * @example
     * const a = { x: 50, y: 50, width: 30, height: 30 };
     * const b = { x: 60, y: 60, width: 40, height: 40 };
     * cmath.rect.intersects(a, b); // Returns true.
     *
     * const c = { x: 0, y: 0, width: 20, height: 20 };
     * cmath.rect.intersects(a, c); // Returns false.
     */
    function intersects(a: Rectangle, b: Rectangle): boolean;
    /**
     * Calculates the intersection of two rectangles in the { x, y, width, height } format.
     *
     * @param a - The first rectangle.
     * @param b - The second rectangle.
     * @returns A new rectangle representing the intersection of the two rectangles.
     *          If the rectangles do not intersect, returns `null`.
     *
     * @example
     * const a = { x: 10, y: 10, width: 30, height: 30 };
     * const b = { x: 20, y: 20, width: 30, height: 30 };
     * const result = intersection(a, b);
     * console.log(result); // { x: 20, y: 20, width: 20, height: 20 }
     */
    function intersection(a: cmath.Rectangle, b: cmath.Rectangle): cmath.Rectangle | null;
    /**
     * Calculates the overlapping projection of an array of rectangles along the **counter-axis** of the specified projection axis.
     *
     * The projection axis determines which axis to analyze for overlap:
     * - `"x"`: Projects along the `y` axis (compares vertical ranges).
     * - `"y"`: Projects along the `x` axis (compares horizontal ranges).
     *
     * This function determines if all rectangles have overlapping projections along the **counter-axis** of the specified projection axis. It returns the intersecting range as a `Vector2` or `null` if no intersection exists.
     *
     * @param rectangles - An array of rectangles to project.
     * @param projectionAxis - The axis to calculate projections on ("x" for comparing vertical ranges, "y" for comparing horizontal ranges).
     * @returns {Range} representing the overlapping range of projections along the counter-axis, or `null` if the rectangles do not overlap.
     *
     *
     * ### Visual Explanation
     *
     * This illustrates the projection: projectionAxis = "y" (compare x ranges)
     * ```
     * | 0  1  2  3  4  5  6  7  8  9  10
     * |       +--------------+         |
     * |       |      A       |         |
     * |       |              |         |
     * |       +--------------+         |
     * |            [2 — 7]             |
     * |                                |
     * |                +--------+      |
     * |                |    B   |      |
     * |                |        |      |
     * |                +--------+      |
     * |                  [5 — 8]       |
     * |                                |
     * |                   +--------+   |
     * |                   |   C    |   |
     * |                   |        |   |
     * |                   +--------+   |
     * |                    [6 — 9]     |
     * |                                |
     * |                   +--+         |
     * |                  [6 — 7]       |
     * |               (Overlapping)    |
     * ```
     *
     * @example
     * ```typescript
     * const rectangles = [
     *   { x: 10, y: 20, width: 30, height: 40 },
     *   { x: 20, y: 25, width: 40, height: 35 },
     *   { x: 25, y: 15, width: 30, height: 50 },
     * ];
     * const projection = cmath.rect.axisAlignedProjection(rectangles, "x");
     * console.log(projection); // Outputs: [25, 40] (overlapping vertical range)
     * ```
     *
     * @remarks
     * - The function reduces the projections of all rectangles along the counter-axis into a single overlapping range.
     * - Returns `null` if no overlap exists between the projections.
     * - The rectangles are treated as axis-aligned (non-rotated).
     */
    function axisProjectionIntersection(rectangles: cmath.Rectangle[], projectionAxis: Axis): Range | null;
    /**
     * Checks if two rectangles are identical.
     *
     * Two rectangles are considered identical if their positions (`x`, `y`) and dimensions (`width`, `height`)
     * are exactly the same.
     *
     * @param rectA - The first rectangle to compare.
     * @param rectB - The second rectangle to compare.
     * @returns `true` if the rectangles are identical, otherwise `false`.
     *
     * @example
     * const rect1 = { x: 10, y: 20, width: 30, height: 40 };
     * const rect2 = { x: 10, y: 20, width: 30, height: 40 };
     * const isIdentical = cmath.rect.identical(rect1, rect2);
     * console.log(isIdentical); // true
     *
     * @example
     * const rect1 = { x: 10, y: 20, width: 30, height: 40 };
     * const rect2 = { x: 10, y: 25, width: 30, height: 40 };
     * const isIdentical = cmath.rect.identical(rect1, rect2);
     * console.log(isIdentical); // false
     *
     * @remarks
     * - The function performs a strict equality check on the `x`, `y`, `width`, and `height` properties.
     */
    function isIdentical(rectA: cmath.Rectangle, rectB: cmath.Rectangle): boolean;
    /**
     * Checks if all rectangles in the given array are uniform (identical in position and dimensions).
     *
     * Two rectangles are considered uniform if their `x`, `y`, `width`, and `height`
     * properties are exactly the same.
     *
     * @param rects - An array of rectangles to check.
     * @returns `true` if all rectangles are uniform, or if the array contains zero or one rectangle. Otherwise, `false`.
     *
     * @example
     * const rect1 = { x: 10, y: 20, width: 30, height: 40 };
     * const rect2 = { x: 10, y: 20, width: 30, height: 40 };
     * const rect3 = { x: 15, y: 25, width: 35, height: 45 };
     *
     * isUniform(rect1, rect2); // true
     * isUniform(rect1, rect2, rect3); // false
     * isUniform(); // true (empty input is considered uniform)
     */
    function isUniform(...rects: cmath.Rectangle[]): boolean;
    /**
     * Computes the bounding rectangle that fully encloses an array of rectangles.
     *
     * @param rectangles - An array of rectangles to compute the bounding box for.
     * @returns A new rectangle that bounds all the input rectangles.
     *
     * @example
     * const rectangles = [
     *   { x: 10, y: 10, width: 30, height: 40 },
     *   { x: 50, y: 20, width: 20, height: 30 },
     * ];
     * const rect = cmath.rect.union(rectangles);
     * console.log(rect); // { x: 10, y: 10, width: 60, height: 50 }
     */
    function union(rectangles: Rectangle[]): Rectangle;
    /**
     * Applies padding to a rectangle, expanding it while preserving its center.
     *
     * The padding can be specified as a uniform number (applied to all sides) or as an object with optional
     * properties: `top`, `right`, `bottom`, and `left`. The resulting rectangle has its center unchanged,
     * with its width increased by the sum of the left and right paddings, and its height increased by the sum
     * of the top and bottom paddings.
     *
     * @param rect - The original rectangle.
     * @param padding - A uniform padding number or an object specifying padding for each side.
     * @returns A new rectangle with the padding applied and the same center as the original.
     *
     * @example
     * // Uniform padding of 10 on all sides:
     * const rect = { x: 50, y: 50, width: 100, height: 80 };
     * const padded = cmath.rect.pad(rect, 10);
     * // Result: { x: 40, y: 40, width: 120, height: 100 }
     *
     * @example
     * // Different padding for each side:
     * const rect = { x: 50, y: 50, width: 100, height: 80 };
     * const padded = cmath.rect.pad(rect, { top: 5, right: 15, bottom: 10, left: 20 });
     * // The center of `padded` is the same as the center of `rect`.
     */
    function pad(rect: Rectangle, padding: number | {
      top?: number;
      right?: number;
      bottom?: number;
      left?: number;
    }): Rectangle;
    /**
     * Insets (shrinks) a rectangle by the given margin(s) while preserving its center.
     *
     * The margin can be specified as a uniform number (applied to all sides) or as an object with optional
     * properties: `top`, `right`, `bottom`, and `left`. The resulting rectangle's width and height are clamped
     * to be non-negative.
     *
     * @param rect - The original rectangle.
     * @param margin - A uniform margin number or an object specifying margins for each side.
     * @returns A new rectangle with the margin applied inward and the same center as the original.
     *
     * @example
     * // Uniform inset of 10 on all sides:
     * const rect = { x: 50, y: 50, width: 100, height: 80 };
     * const insetRect = cmath.rect.inset(rect, 10);
     * // New dimensions: width = 100 - 20 = 80, height = 80 - 20 = 60, center remains at (100, 90)
     * // Result: { x: 100 - 40, y: 90 - 30, width: 80, height: 60 } → { x: 60, y: 60, width: 80, height: 60 }
     *
     * @example
     * // Non-uniform inset:
     * const rect = { x: 50, y: 50, width: 100, height: 80 };
     * const insetRect = cmath.rect.inset(rect, { top: 5, right: 15, bottom: 10, left: 20 });
     * // New width = 100 - (20+15) = 65, new height = 80 - (5+10) = 65,
     * // Center remains at (100, 90), so new x = 100 - 65/2 = 67.5, new y = 90 - 65/2 = 57.5
     * // Result: { x: 67.5, y: 57.5, width: 65, height: 65 }
     */
    function inset(rect: Rectangle, margin: number | {
      top?: number;
      right?: number;
      bottom?: number;
      left?: number;
    }): Rectangle;
    /**
     * Aligns an array of rectangles along a specified axis and alignment type.
     *
     * @param rectangles - An array of rectangles to align.
     * @param alignment - The alignment type of each axis (horizontal and vertical).
     * @returns A new array of rectangles with updated positions.
     */
    function align(rectangles: cmath.Rectangle[], alignment: {
      horizontal?: "none" | "min" | "max" | "center";
      vertical?: "none" | "min" | "max" | "center";
    }): cmath.Rectangle[];
    /**
     * Aligns rectangle `a` relative to rectangle `b` along a specified axis.
     *
     * @param a the rectangle to align
     * @param b the rectangle to align to
     * @param alignment - The alignment type of each axis (horizontal and vertical).
     */
    function alignA(a: Rectangle, b: Rectangle, alignment: {
      horizontal?: "none" | "min" | "max" | "center";
      vertical?: "none" | "min" | "max" | "center";
    }): Rectangle;
    /**
     * Calculates the gaps (spaces) between adjacent rectangles along a specified axis.
     *
     * @param rectangles - An array of rectangles to calculate the gaps for.
     * @param axis - The axis to calculate the gaps along ("x" or "y").
     * @returns An array of numbers representing the gaps between adjacent rectangles, excluding the last rectangle.
     *
     * @example
     * const rectangles = [
     *   { x: 10, y: 20, width: 30, height: 40 },
     *   { x: 50, y: 20, width: 30, height: 40 },
     *   { x: 90, y: 20, width: 30, height: 40 },
     * ];
     * const gaps = getDistribution(rectangles, "x");
     * console.log(gaps); // [10, 10]
     */
    function getGaps(rectangles: cmath.Rectangle[], axis: Axis): number[];
    /**
     * Calculates the uniform gap between adjacent rectangles along a specified axis.
     *
     * @param rectangles - An array of rectangles to calculate the uniform gap for.
     * @param axis - The axis to calculate the gap along ("x" or "y").
     * @param tolerance - The maximum allowed deviation from a uniform gap.
     *
     * @returns `[unfiorm, gaps]` A tuple containing the uniform gap (if found, most present or biggest) and an array of gaps between adjacent rectangles.
     *
     */
    function getUniformGap(rectangles: cmath.Rectangle[], axis: Axis, tolerance?: number): [unfiorm: number | undefined, gaps: number[]];
    /**
     * Distributes rectangles evenly along a specified axis within the bounding box of the rectangles,
     * while respecting the original input/output index order.
     *
     * The rectangles are repositioned to maintain equal spacing between their edges, calculated relative
     * to their sorted positions along the specified axis (`x` or `y`). However, the output preserves
     * the input order of rectangles, ensuring that the final output array corresponds 1:1 to the input.
     *
     * @param rectangles - An array of rectangles to distribute.
     * @param axis - The axis to distribute along ("x" or "y").
     * @returns A new array of rectangles with updated positions, respecting the original input/output order.
     *
     * ### Behaviour
     * - **Input Order Respected**: The output array maintains the same indexing as the input array,
     *   even though the internal logic calculates new positions based on the sorted positions of rectangles.
     * - **Even Spacing**: Rectangles are repositioned to have equal gaps between their edges, distributed
     *   within the bounding box of the original rectangles.
     * - **No Shape Modification**: The width, height, and other properties of each rectangle remain unchanged.
     *
     * @example
     * const rectangles = [
     *   { x: 90, y: 20, width: 30, height: 40 },
     *   { x: 10, y: 20, width: 30, height: 40 },
     *   { x: 50, y: 20, width: 30, height: 40 },
     * ];
     *
     * const distributed = cmath.rect.distributeEvenly(rectangles, "x");
     * console.log(distributed);
     * // Output:
     * // [
     * //   { x: 10, y: 20, width: 30, height: 40 }, // Moved to correct position for first
     * //   { x: 50, y: 20, width: 30, height: 40 }, // Moved to correct position for second
     * //   { x: 90, y: 20, width: 30, height: 40 }, // Moved to correct position for third
     * // ]
     *
     * @remarks
     * - The function ensures rectangles are repositioned evenly but retains their original order in the output array.
     * - The repositioning logic calculates gaps based on the sorted positions of rectangles along the specified axis.
     * - If fewer than 2 rectangles are provided, the input is returned unchanged.
     */
    function distributeEvenly(rectangles: cmath.Rectangle[], axis: Axis): cmath.Rectangle[];
    /**
     * Boolean operations on rectangles for vector graphics calculations.
     *
     * This module provides functions to perform basic boolean operations on rectangles,
     * tailored for vector graphics use cases where precise layout and bounding calculations
     * are required.
     *
     * - **intersect: A ∩ B**
     *   Computes the intersecting region of A and B, returning a single rectangle (or null if there is no overlap).
     *
     * - **subtract: A - B**
     *   Subtracts B from A, returning an array of rectangles that represent the area of A excluding the overlapping region with B.
     *
     * - **exclude: A ⊖ B**
     *   Computes the symmetric difference, defined as (A ∪ B) minus (A ∩ B), returning an array of rectangles that represent the non-overlapping portions of A and B.
     */
    namespace boolean {
      /**
       * Subtracts rectangle `b` from rectangle `a`, returning the remaining disjoint subregions.
       *
       * In the context of vector graphics calculations, this function computes the boolean
       * difference \(A - B\) by removing the overlapping area of `b` (if any) from `a`. The operation
       * returns an array of rectangles representing the parts of `a` that are not covered by `b`.
       * Only the portion of `b` that overlaps with `a` is subtracted; the resulting regions will always be
       * confined within `a`.
       *
       * @param a - The rectangle from which to subtract.
       * @param b - The rectangle to subtract.
       * @returns An array of rectangles representing the area of `a` after subtracting the overlap with `b`.
       *
       * @example
       * ```typescript
       * const a: Rectangle = { x: 10, y: 10, width: 30, height: 30 };
       * const b: Rectangle = { x: 20, y: 20, width: 10, height: 10 };
       * const result = cmath.rect.boolean.subtract(a, b);
       * // result:
       * // [
       * //   { x: 10, y: 10, width: 30, height: 10 }, // top region of A above B
       * //   { x: 10, y: 30, width: 30, height: 10 }, // bottom region of A below B
       * //   { x: 10, y: 20, width: 10, height: 10 }, // left region of A left of B
       * //   { x: 30, y: 20, width: 10, height: 10 }  // right region of A right of B
       * // ]
       * ```
       */
      function subtract(a: Rectangle, b: Rectangle): Rectangle[];
    }
  }
  /**
   * Alignment utilities for mathematical and graphical computations.
   *
   * @example
   * - Align scalar values to a grid
   * - Align 2D vectors to the nearest target positions
   */
  namespace align {
    /**
     * Aligns a scalar value to the nearest value in an array of scalars if it is within a specified threshold.
     *
     * This function is useful for aligning scalar values (e.g., positions, sizes, or grid alignment) to a discrete set of
     * target values while ensuring the alignment occurs only within a defined threshold.
     *
     * @param point - The scalar value to align.
     * @param targets - An array of existing scalar values to align to.
     * @param threshold - The maximum allowed distance for alignment. Must be non-negative.
     *
     * @returns A tuple `[value, distance, indices]` where:
     * - `value`: is the nearest scalar (if within threshold) or the original `point` (if not).
     * - `distance`: is the signed distance `point - value` to that nearest scalar. (or `Infinity` if not aligned).
     * - `indices` are all target indices whose distance matches the minimum distance exactly.
     *
     * @throws If `threshold` is negative or if `targets` is empty.
     *
     * @example
     * ```ts
     * // Suppose we have targets [10, 20, 20, 40], and point=22 with threshold=5.
     * // The minimal distance is 2 (to '20'), and note there are two '20's.
     * // So the function returns value=20, distance=2 (signed=22 - 20), indices=[1,2].
     *
     * const [value, dist, indices] = cmath.align.scalar(22, [10, 20, 20, 40], 5);
     * console.log(value);   // 20
     * console.log(dist);    // 2
     * console.log(indices); // [1, 2]
     * ```
     */
    function scalar(point: Scalar, targets: Scalar[], threshold: number): [value: Scalar, distance: number, indicies: number[]];
    /**
     * Aligns a 2D vector to the nearest vector(s) from an array of target vectors if it is within a specified threshold.
     *
     * This function is useful for aligning 2D points (e.g., grid or object alignment),
     * ensuring that alignment only occurs if the distance to the target is within a given threshold.
     *
     * @param point - The 2D vector `[x, y]` to align.
     * @param targets - An array of 2D vectors to which the point might align.
     * @param threshold - The maximum allowed Euclidean distance for alignment. Must be non-negative.
     * @returns A tuple `[value, distance, indices]` where:
     *   - `value`: The nearest target vector if within threshold, otherwise the original `point`.
     *   - `distance`: The Euclidean distance `dist(point, value)` if alignment occurs; otherwise `Infinity`.
     *   - `indices`: **All** target indices whose distance from `point` is exactly equal to the minimum distance (ties).
     *
     * @throws If `threshold` is negative or if `targets` is empty.
     *
     * @example
     * // Suppose we have multiple points at the same nearest distance:
     * //   targets = [[0, 0], [5, 5], [5, 5], [10, 10]]
     * //   point = [6, 6], threshold = 3
     * // The minimal distance (~1.414) is to both [5, 5] entries (indices 1 and 2).
     * //
     * // The function returns:
     * //   value   = [5, 5]
     * //   distance = ~1.41421356237
     * //   indices  = [1, 2]
     *
     * const [snappedVec, dist, tiedIndices] = cmath.align.vector2([6, 6], [[0,0],[5,5],[5,5],[10,10]], 3);
     * console.log(snappedVec);   // [5, 5]
     * console.log(dist);         // ~1.41421356237
     * console.log(tiedIndices);  // [1, 2]
     */
    function vector2(point: cmath.Vector2, targets: cmath.Vector2[], threshold: number): [value: cmath.Vector2, distance: number, indices: number[]];
  }
  namespace segment {
    /**
     * Returns the orientation of the ordered triplet (a, b, c).
     * Positive for counter-clockwise, negative for clockwise, and zero for collinear.
     */
    function orientation(a: Vector2, b: Vector2, c: Vector2): number;
    /**
     * Checks if point `c` lies on segment `ab`.
     */
    function onSegment(a: Vector2, c: Vector2, b: Vector2): boolean;
    /**
     * Tests whether two line segments intersect.
     */
    function intersects(p1: Vector2, p2: Vector2, q1: Vector2, q2: Vector2): boolean;
    /**
     * Tests whether a line segment intersects with an axis-aligned rectangle.
     */
    function intersectsRect(p0: Vector2, p1: Vector2, rect: Rectangle): boolean;
    /**
     * Project point `p` onto segment `[a, b]`. Returns the clamped
     * parameter `t ∈ [0, 1]` (0 at `a`, 1 at `b`) and the resulting
     * position on the segment — the perpendicular foot when it falls
     * inside `[a, b]`, otherwise the nearer endpoint.
     *
     * Degenerate segment (`a == b`) returns `{ t: 0, position: a }`;
     * the `t` is conventional (there's no parameter to recover) but the
     * `position` is honest.
     *
     * Companion to {@link point_distance}; the two share the same
     * clamped-foot algorithm — `point_distance` returns only the
     * Euclidean distance, this one returns the foot and `t`.
     */
    function project_point(a: Vector2, b: Vector2, p: Vector2): {
      t: number;
      position: Vector2;
    };
    /**
     * Shortest distance from point `p` to segment `ab`. The closest point
     * on the segment is the perpendicular foot when it falls inside `[a, b]`,
     * otherwise the nearer endpoint. For a degenerate segment (a == b) this
     * is the point-to-point distance.
     */
    function point_distance(p: Vector2, a: Vector2, b: Vector2): number;
  }
  /**
   * Polyline primitives — open or closed chains of points. Distinct from
   * `polygon` (which is closed-by-definition and concerned with interior
   * containment); these functions measure proximity to the chain itself.
   */
  namespace polyline {
    /**
     * Shortest distance from `p` to the polyline `pts`. Each adjacent pair
     * `pts[i], pts[i+1]` contributes a segment; when `closed` is true the
     * last→first edge is included.
     *
     * For empty `pts` returns `Infinity`. For a single point returns the
     * point-to-point distance. Note: for a closed ring, this is the
     * distance to the *edges*, not to the interior — a point inside the
     * ring returns the distance to the nearest edge, not 0. Use
     * `polygon.pointInPolygon` for interior tests.
     */
    function point_distance(p: Vector2, pts: ReadonlyArray<Vector2>, closed: boolean): number;
  }
  namespace bezier {
    /**
     * Represents a cubic Bézier curve segment.
     *
     * A cubic Bézier curve is defined by a start point, an end point, and two control points.
     * These control points determine the curvature of the segment.
     *
     * The parametric equation for a cubic Bézier curve is:
     * \[
     * B(t) = (1-t)^3 P_0 + 3(1-t)^2 t P_1 + 3(1-t) t^2 P_2 + t^3 P_3 \quad \text{where } t \in [0, 1]
     * \]
     *
     * Where:
     * - \( P_0 \): Start point of the curve.
     * - \( P_1 \): First control point.
     * - \( P_2 \): Second control point.
     * - \( P_3 \): End point of the curve.
     *
     * @property x1 - The x-coordinate of the first control point (absolute).
     * @property y1 - The y-coordinate of the first control point (absolute).
     * @property x2 - The x-coordinate of the second control point (absolute).
     * @property y2 - The y-coordinate of the second control point (absolute).
     * @property x - The x-coordinate of the end point (absolute).
     * @property y - The y-coordinate of the end point (absolute).
     *
     * @example
     * ```typescript
     * const bezier: CubicBezier = {
     *   x1: 20, // First control point
     *   y1: 40,
     *   x2: 60, // Second control point
     *   y2: 80,
     *   x: 100, // End point
     *   y: 120,
     * };
     * ```
     *
     * @remarks
     * - Cubic Bézier curves are commonly used in vector graphics, animation, and UI design to create smooth transitions and shapes.
     * - This structure assumes absolute positioning for all points.
     */
    type CubicBezier = {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      x: number;
      y: number;
    };
    /**
     * @property a - Position of the starting vertex.
     * @property b - Position of the ending vertex.
     * @property ta - Tangent at the starting vertex (relative to the vertex).
     * @property tb - Tangent at the ending vertex (relative to the vertex).
     */
    type CubicBezierWithTangents = {
      a: Vector2;
      b: Vector2;
      ta: Vector2;
      tb: Vector2;
    };
    /**
     * Arc Length Lookup Table (ArcLUT) for efficient arc length parameterization of cubic Bézier curves.
     *
     * An ArcLUT pre-computes and stores the relationship between curve parameter `t` and arc length `s`
     * to enable fast conversion between normalized arc length parameter `u` and curve parameter `t`.
     * This is essential for operations requiring uniform motion along the curve, such as animation
     * and path following.
     *
     * The lookup table contains:
     * - `t`: Array of curve parameters sampled at regular intervals ∈ [0, 1]
     * - `s`: Corresponding cumulative arc lengths from the start of the curve
     * - `total`: The total arc length of the curve
     *
     * Mathematical relationship:
     * - `t[i]` represents the i-th sample point on the curve (0 ≤ i ≤ sampleCount)
     * - `s[i]` represents the arc length from curve start to point `t[i]`
     * - `s[0] = 0` and `s[sampleCount] = total`
     * - For any `u` ∈ [0, 1], the corresponding `t` can be found by interpolating between
     *   the nearest samples where `s[i] / total ≈ u`
     *
     * @property t - Array of curve parameters `t` ∈ [0, 1] sampled at regular intervals
     * @property s - Array of cumulative arc lengths corresponding to each `t` value
     * @property total - Total arc length of the curve
     *
     * @remarks
     * - The lookup table enables O(log n) conversion from arc length to curve parameter
     * - Precision depends on the number of samples used to create the LUT
     * - For curves with high curvature, more samples may be needed for accuracy
     * - The LUT can be cached and reused for multiple operations on the same curve
     * - Float32Array is used for memory efficiency and performance
     */
    type ArcLUT = {
      t: Float32Array;
      s: Float32Array;
      total: number;
    };
    /**
     * Projects a point onto a cubic Bézier segment and returns its normalized parametric position.
     *
     * This function performs a closest-point projection from a canvas-space point `p`
     * onto the Bézier curve defined by endpoints `a`, `b` and control tangents `ta`, `tb`.
     * The output is a parametric scalar `t \in [0, 1]` such that the evaluated curve
     * point `B(t)` is as close as possible to `p` in Euclidean distance.
     *
     * The algorithm works in two phases:
     *
     * 1. **Coarse sampling** – the curve is sampled at several uniformly spaced
     *    parameters to obtain a good initial guess.
     * 2. **Newton–Raphson refinement** – starting from the best sample, the method
     *    iteratively minimizes the squared distance function
     *    `f(t) = |B(t) - p|^2`. The derivative `f'(t)` and second derivative
     *    `f''(t)` are evaluated analytically, yielding quadratic and linear terms
     *    respectively. The iteration continues for a small fixed number of steps
     *    while clamping `t` to `[0,1]` after each update.
     *
     * Degenerate segments where both tangents are zero are handled as simple
     * linear projections onto the line segment `ab`.
     *
     * This operation is known as:
     * - "parametric projection"
     * - "inverse Bézier evaluation"
     * - "closest-point projection on a Bézier curve"
     *
     * It is commonly used in interactive vector editing to determine:
     * - Where a user clicked or dragged on the curve
     * - How to distribute deformation across curve tangents
     * - Where to insert or split the curve
     *
     * The resulting `t` does not correspond to arc length, but to Bézier parameter space.
     * For accurate geometric interpretation, `B(t)` can be evaluated and used in
     * follow-up logic.
     *
     * @param a - Start point of the segment.
     * @param b - End point of the segment.
     * @param ta - Tangent vector at start (relative to `a`).
     * @param tb - Tangent vector at end (relative to `b`).
     * @param p - The canvas-space point to project onto the curve.
     * @returns The normalized parametric scalar `t \in [0, 1]` along the Bézier segment.
     */
    function project(a: Vector2, b: Vector2, ta: Vector2, tb: Vector2, p: Vector2): number;
    /**
     * Evaluates a cubic Bézier curve at a given parametric position `t` ∈ [0,1].
     *
     * The curve is defined by four absolute control points:
     * - `P0`: Start point
     * - `P1`: First control point
     * - `P2`: Second control point
     * - `P3`: End point
     *
     * Uses the Bernstein polynomial form of the cubic Bézier equation:
     * ```
     * B(t) = (1−t)³ * P0
     *      + 3(1−t)² t * P1
     *      + 3(1−t) t² * P2
     *      + t³ * P3
     * ```
     *
     * @param P0 - Start point of the curve.
     * @param P1 - First control point.
     * @param P2 - Second control point.
     * @param P3 - End point of the curve.
     * @param t  - Parametric value in the range [0, 1] where 0 is `P0` and 1 is `P3`.
     * @returns A 2D vector `[x, y]` representing the point on the cubic Bézier at parameter `t`.
     *
     * @example
     * ```ts
     * const p0: Vector2 = [0, 0];
     * const p1: Vector2 = [50, 100];
     * const p2: Vector2 = [150, 100];
     * const p3: Vector2 = [200, 0];
     *
     * // Get the midpoint of the curve
     * const midpoint = evalC(p0, p1, p2, p3, 0.5);
     * console.log(midpoint); // → e.g., [100, 75]
     * ```
     */
    function evalC(P0: Vector2, P1: Vector2, P2: Vector2, P3: Vector2, t: number): Vector2;
    /**
     * Computes the first derivative (tangent vector) of a cubic Bézier curve
     * at a given parametric position `t` ∈ [0, 1].
     *
     * The cubic Bézier is defined by four absolute control points:
     * - `P0`: Start point
     * - `P1`: First control point
     * - `P2`: Second control point
     * - `P3`: End point
     *
     * Uses the standard derivative of the cubic Bézier equation:
     * ```
     * B'(t) = 3(1−t)² (P1 − P0)
     *       + 6(1−t)t (P2 − P1)
     *       + 3t² (P3 − P2)
     * ```
     *
     * @param P0 - Start point of the cubic Bézier curve.
     * @param P1 - First control point of the curve.
     * @param P2 - Second control point of the curve.
     * @param P3 - End point of the curve.
     * @param t  - Parametric value in the range [0, 1] where 0 is `P0` and 1 is `P3`.
     * @returns A 2D vector `[dx, dy]` representing the tangent vector at parameter `t`.
     *
     * @example
     * ```ts
     * const p0: Vector2 = [0, 0];
     * const p1: Vector2 = [50, 100];
     * const p2: Vector2 = [150, 100];
     * const p3: Vector2 = [200, 0];
     *
     * // Tangent at the midpoint (t = 0.5)
     * const tangent = derivC(p0, p1, p2, p3, 0.5);
     * console.log(tangent); // → e.g., [150, 0]
     * ```
     */
    function derivC(P0: Vector2, P1: Vector2, P2: Vector2, P3: Vector2, t: number): Vector2;
    /**
     * Evaluates a cubic Bézier curve at a given parametric position.
     *
     * The curve is defined by two endpoints and their tangent vectors.
     * The parametric equation for a cubic Bézier curve is:
     * \[
     * B(t) = (1-t)^3 P_0 + 3(1-t)^2 t P_1 + 3(1-t) t^2 P_2 + t^3 P_3 \quad \text{where } t \in [0, 1]
     * \]
     *
     * Where:
     * - \( P_0 \): Start point (a)
     * - \( P_1 \): First control point (a + ta)
     * - \( P_2 \): Second control point (b + tb)
     * - \( P_3 \): End point (b)
     *
     * @param a - Start point of the curve \([x, y]\)
     * @param b - End point of the curve \([x, y]\)
     * @param ta - Tangent vector at start point (relative to a) \([x, y]\)
     * @param tb - Tangent vector at end point (relative to b) \([x, y]\)
     * @param t - Parametric position along the curve (0 ≤ t ≤ 1)
     * @returns The point on the curve at parametric position t \([x, y]\)
     *
     * @example
     * ```typescript
     * // Evaluate a straight line segment
     * const start: cmath.Vector2 = [0, 0];
     * const end: cmath.Vector2 = [100, 100];
     * const startTangent: cmath.Vector2 = [0, 0];
     * const endTangent: cmath.Vector2 = [0, 0];
     * const point = cmath.bezier.evaluate(start, end, startTangent, endTangent, 0.5);
     * console.log(point); // [50, 50]
     * ```
     *
     * @example
     * ```typescript
     * // Evaluate a curved segment
     * const start: cmath.Vector2 = [0, 0];
     * const end: cmath.Vector2 = [100, 0];
     * const startTangent: cmath.Vector2 = [50, 50];
     * const endTangent: cmath.Vector2 = [-50, 50];
     * const point = cmath.bezier.evaluate(start, end, startTangent, endTangent, 0.5);
     * // Returns a point above the line due to upward tangents
     * ```
     *
     * @remarks
     * - The function clamps the parameter t to the range [0, 1] for robustness.
     * - For t = 0, the function returns the start point a.
     * - For t = 1, the function returns the end point b.
     * - The function is mathematically equivalent to the standard cubic Bézier formula.
     * - Performance is O(1) with constant memory usage.
     * - Input validation ensures the function handles edge cases gracefully.
     */
    function evaluate(a: Vector2, b: Vector2, ta: Vector2, tb: Vector2, t: number): Vector2;
    /**
     * Calculates the exact bounding box of a single cubic Bézier segment by finding all extrema.
     * @param a - The start vertex \([x, y]\).
     * @param ta - The start tangent (relative to `a`).
     * @param b - The end vertex \([x, y]\).
     * @param tb - The end tangent (relative to `b`).
     * @returns The bounding box \(\{ x, y, width, height \}\) that encloses the entire cubic.
     */
    function getBBox(segment: CubicBezierWithTangents): Rectangle;
    /**
     * Tests whether a single cubic Bézier curve segment intersects with a given axis-aligned rectangle.
     *
     * A Bézier segment is defined by two endpoints `a`, `b`, and their corresponding control points `ta`, `tb`.
     * The rectangle is defined by its top-left `(x, y)` and dimensions `(width, height)`.
     *
     * This function performs fast hierarchical rejection and adaptive subdivision to avoid unnecessary computation.
     *
     * @param a - Start point of the Bézier curve.
     * @param b - End point of the Bézier curve.
     * @param ta - Tangent control point relative to `a`.
     * @param tb - Tangent control point relative to `b`.
     * @param rect - Target rectangle to test intersection against.
     * @param tolerance - Optional tolerance threshold for curve flatness (default: `0.5`).
     * @returns `true` if the curve intersects the rectangle, otherwise `false`.
     */
    function intersectsRect(a: Vector2, b: Vector2, ta: Vector2, tb: Vector2, rect: Rectangle, tolerance?: number): boolean;
    /**
     * Checks whether a single cubic Bézier curve segment is fully contained
     * within an axis-aligned rectangle.
     *
     * The segment is defined by start and end points `a`, `b` and their
     * respective tangents `ta`, `tb`. The function computes the exact bounding
     * box of the curve and verifies that it lies entirely inside the provided
     * rectangle.
     *
     * @param a - Start point of the Bézier curve.
     * @param b - End point of the Bézier curve.
     * @param ta - Tangent control point relative to `a`.
     * @param tb - Tangent control point relative to `b`.
     * @param rect - Rectangle to test containment against.
     * @returns `true` if the entire curve is contained within `rect`, otherwise `false`.
     */
    function containedByRect(a: Vector2, b: Vector2, ta: Vector2, tb: Vector2, rect: Rectangle): boolean;
    /**
     * Converts an SVG elliptical arc to one or more cubic Bézier curve segments.
     *
     * The `a2c` function transforms the parameters of an SVG elliptical arc into a series of cubic Bézier curves,
     * which are widely used in vector graphics for their smoothness and compatibility with various rendering engines.
     *
     * This implementation is inspired by Snap.svg's `a2c` function and adheres to the SVG specification's
     * [Arc Implementation Notes](https://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes).
     *
     * **Note:** The function does not include the start point (`x1`, `y1`) in its output. It is assumed that the
     * start point is managed externally. The returned array consists of control points and end points for cubic Bézier curves.
     *
     * @param x1 - The x-coordinate of the starting point of the arc.
     * @param y1 - The y-coordinate of the starting point of the arc.
     * @param rx - The x-axis radius of the ellipse. Must be a non-negative number.
     * @param ry - The y-axis radius of the ellipse. Must be a non-negative number.
     * @param angle - The rotation angle of the ellipse in degrees, indicating how the ellipse is rotated relative to the x-axis.
     * @param large_arc_flag - A flag indicating whether the arc spans greater than 180 degrees (`1`) or not (`0`).
     * @param sweep_flag - A flag indicating the direction of the arc sweep. `1` for clockwise, `0` for counterclockwise.
     * @param x2 - The x-coordinate of the ending point of the arc.
     * @param y2 - The y-coordinate of the ending point of the arc.
     * @param recursive - (Optional) Internal parameter used for recursive splitting of the arc into smaller segments.
     *                    This parameter should not be provided by external callers.
     *
     * @returns An array of numbers representing one or more cubic Bézier curve segments.
     * Each cubic Bézier segment is represented by six consecutive numbers in the format:
     * `[c1x, c1y, c2x, c2y, x, y]`, where:
     * - `c1x, c1y` are the coordinates of the first control point.
     * - `c2x, c2y` are the coordinates of the second control point.
     * - `x, y` are the coordinates of the end point of the curve.
     *
     * If the arc spans more than 120 degrees, the function splits it into multiple cubic Bézier segments to maintain accuracy.
     *
     * @example
     * // Convert a simple arc to a single cubic Bézier curve
     * const bezierSegments = a2c(0, 0, 50, 50, 0, 0, 1, 50, 50);
     * console.log(bezierSegments);
     * // Output: [27.614237491539665, 0, 50, 22.385762508460335, 50, 50]
     *
     * @example
     * // Convert a large arc (270 degrees) into multiple cubic Bézier curves
     * const bezierSegments = a2c(0, 0, 100, 100, 0, 1, 1, 100, 0);
     * console.log(bezierSegments);
     * // Output: [c1x, c1y, c2x, c2y, x, y, ...]
     *
     * @example
     * // Handle a rotated ellipse arc
     * const bezierSegments = a2c(0, 0, 50, 100, 45, 0, 1, 50, 100);
     * console.log(bezierSegments);
     * // Output: [rotated_c1x, rotated_c1y, rotated_c2x, rotated_c2y, rotated_x, rotated_y]
     *
     * @throws {Error} If either `rx` or `ry` is negative.
     * @throws {Error} If non-numeric values are provided as inputs.
     *
     * @remarks
     * - The function assumes that the input radii (`rx`, `ry`) are non-negative. Negative radii will cause the function to throw an error.
     * - The rotation angle (`angle`) is measured in degrees and is converted internally to radians for calculations.
     * - If the input arc spans more than 120 degrees, the function recursively splits it into smaller segments to ensure that each cubic Bézier curve accurately represents the arc.
     * - The function handles cases where the arc needs to be adjusted based on the large arc and sweep flags, adhering to the SVG specification.
     * - The `recursive` parameter is intended for internal use only and should not be supplied by external callers.
     *
     * @see [SVG 1.1 Implementation Notes - Elliptical Arcs](https://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes)
     * @see [Snap.svg's a2c Function](https://github.com/adobe-webplatform/Snap.svg/blob/master/src/path.js#L752)
     */
    function a2c(x1: number, y1: number, rx: number, ry: number, angle: number, large_arc_flag: 0 | 1, sweep_flag: 0 | 1, x2: number, y2: number, recursive?: [number, number, number, number]): number[];
    /**
     * Solves for tangent values that make a cubic Bézier curve pass through a specific point
     * at a given parametric position.
     *
     * This function solves the constrained optimization problem:
     * - Minimize the change from original tangents
     * - Subject to the constraint that the curve passes through the target point at the specified parametric position
     *
     * The solution uses Lagrange multipliers to find tangent values that satisfy:
     * B(t) = targetPoint, where B(t) is the cubic Bézier curve evaluated at parametric position t.
     *
     * @param a - Start point of the curve
     * @param b - End point of the curve
     * @param ta - Original tangent at start point (relative to a)
     * @param tb - Original tangent at end point (relative to b)
     * @param t - Parametric position (0-1) where the curve should pass through the target point
     * @param targetPoint - The point that the curve should pass through at parametric position t
     * @returns New tangent values [ta, tb] that make the curve pass through the target point
     */
    function solveTangentsForPoint(a: Vector2, b: Vector2, ta: Vector2, tb: Vector2, t: number, targetPoint: Vector2): [Vector2, Vector2];
    /**
     * Cubic Bézier tangent (derivative) at parametric t ∈ [0,1].
     *
     * Points are given as:
     *  P0 = a
     *  P1 = a + ta
     *  P2 = b + tb
     *  P3 = b
     *
     * Uses the standard cubic Bézier derivative formula:
     * B'(t) = 3(1-t)²(P1-P0) + 6(1-t)t(P2-P1) + 3t²(P3-P2)
     *
     * Where:
     * - P1-P0 = ta
     * - P2-P1 = (b+tb) - (a+ta) = b-a+tb-ta
     * - P3-P2 = b - (b+tb) = -tb
     *
     * @param a - Start point
     * @param b - End point
     * @param ta - Tangent at start point
     * @param tb - Tangent at end point
     * @param t - Parametric position ∈ [0,1]
     * @returns Tangent vector [dx, dy]
     */
    function tangentAt(a: Vector2, b: Vector2, ta: Vector2, tb: Vector2, t: number): Vector2;
    /**
     * Subdivides a cubic Bézier curve at a given parametric position using de Casteljau's algorithm.
     *
     * This function splits a cubic Bézier curve into two sub-curves at parameter t.
     * The algorithm uses de Casteljau's method, which is numerically stable and geometrically intuitive.
     *
     * The result contains:
     * - `l`: The left sub-curve (segment over [0, t])
     * - `r`: The right sub-curve (segment over [t, 1])
     * - `s`: The split point B(t) on the original curve
     * - `t`: The clamped parameter value actually used
     *
     * @param c - The cubic Bézier curve to subdivide
     * @param t - The parametric position where to split (0 ≤ t ≤ 1)
     * @returns Object containing the two sub-curves, split point, and used parameter
     *
     * @example
     * ```typescript
     * const curve: cmath.bezier.CubicBezierWithTangents = {
     *   a: [0, 0],
     *   b: [100, 0],
     *   ta: [50, 50],
     *   tb: [-50, 50]
     * };
     *
     * const result = cmath.bezier.subdivide(curve, 0.5);
     * // result.l is the curve from t=0 to t=0.5
     * // result.r is the curve from t=0.5 to t=1
     * // result.s is the point at t=0.5 on the original curve
     * ```
     *
     * @remarks
     * - The parameter t is clamped to [0, 1] for robustness
     * - For t = 0, the left curve is degenerate (zero length) and the right curve equals the original
     * - For t = 1, the right curve is degenerate (zero length) and the left curve equals the original
     * - The split point s is always a point on the original curve
     * - Both sub-curves maintain the same geometric properties as the original curve
     */
    function subdivide(c: CubicBezierWithTangents, t: number): {
      l: CubicBezierWithTangents;
      r: CubicBezierWithTangents;
      s: Vector2;
      t: number;
    };
    /**
     * Refines an approximate intersection between two cubic Bézier curves using Newton's method.
     *
     * This function implements Newton's method to find the precise intersection point between
     * two cubic Bézier curves given an initial approximation. The method solves the system
     * of equations F(t,u) = A(t) - B(u) = 0 using iterative refinement.
     *
     * **Mathematical Background:**
     *
     * The Newton iteration solves the linear system:
     * ```
     * J * [dt, du]^T = -F
     * ```
     * Where:
     * - F(t,u) = A(t) - B(u) is the residual vector
     * - J = [∂A/∂t, -∂B/∂u] is the Jacobian matrix
     * - [dt, du]^T is the parameter update
     *
     * The solution is computed using Cramer's rule:
     * ```
     * dt = (-Fₓ * (-∂B/∂u)ᵧ - (-Fᵧ) * (-∂B/∂u)ₓ) / det(J)
     * du = (∂A/∂t)ₓ * (-Fᵧ) - (∂A/∂t)ᵧ * (-Fₓ) / det(J)
     * ```
     *
     * **Convergence Properties:**
     * - Quadratic convergence when the initial guess is sufficiently close
     * - Typically converges in 2-4 iterations for well-conditioned problems
     * - Automatic termination if the Jacobian becomes singular (det < 1e-18)
     * - Parameters are clamped to [0,1] to ensure validity
     *
     * @param A0 - Start point of the first cubic Bézier curve
     * @param A1 - First control point of the first curve
     * @param A2 - Second control point of the first curve
     * @param A3 - End point of the first curve
     * @param B0 - Start point of the second cubic Bézier curve
     * @param B1 - First control point of the second curve
     * @param B2 - Second control point of the second curve
     * @param B3 - End point of the second curve
     * @param t0 - Initial parameter guess for the first curve (∈ [0,1])
     * @param u0 - Initial parameter guess for the second curve (∈ [0,1])
     * @param iters - Maximum number of Newton iterations (typically 3-10)
     *
     * @returns An object containing:
     * - `t`: Refined parameter for the first curve (∈ [0,1])
     * - `u`: Refined parameter for the second curve (∈ [0,1])
     * - `p`: Intersection point in ℝ² (A(t) ≈ B(u))
     *
     * @example
     * ```ts
     * // Two curves that intersect near their midpoints
     * const A0: Vector2 = [0, 0];
     * const A1: Vector2 = [1, 0];
     * const A2: Vector2 = [1, 1];
     * const A3: Vector2 = [2, 1];
     *
     * const B0: Vector2 = [0, 1];
     * const B1: Vector2 = [1, 1];
     * const B2: Vector2 = [1, 0];
     * const B3: Vector2 = [2, 0];
     *
     * // Initial guess at midpoints
     * const result = newtonRefine(A0, A1, A2, A3, B0, B1, B2, B3, 0.5, 0.5, 5);
     * console.log(result);
     * // → { t: 0.5, u: 0.5, p: [1, 0.5] }
     *
     * // Verify the intersection
     * const pointA = bezier.evalC(A0, A1, A2, A3, result.t);
     * const pointB = bezier.evalC(B0, B1, B2, B3, result.u);
     * const distance = Math.sqrt((pointA[0] - pointB[0])**2 + (pointA[1] - pointB[1])**2);
     * console.log('Intersection accuracy:', distance); // → ~1e-15
     * ```
     *
     * @see {@link bezier.evalC} - For evaluating Bézier curves
     * @see {@link bezier.derivC} - For computing curve derivatives
     * @see {@link cmath.clamp01} - For parameter clamping
     */
    function newtonRefine(A0: Vector2, A1: Vector2, A2: Vector2, A3: Vector2, B0: Vector2, B1: Vector2, B2: Vector2, B3: Vector2, t0: number, u0: number, iters: number): {
      t: number;
      u: number;
      p: Vector2;
    };
    namespace intersection {
      /**
       * test/resolve the intersection of a single curve
       */
      namespace single {
        /**
         * Fast boolean test for cubic Bézier self-intersection existence.
         *
         * **Use Case**: When you only need to know if a curve self-intersects, without
         * needing the exact intersection details. This is significantly faster than
         * `intersection()` for boolean queries.
         *
         * **Algorithm**: Uses a simplified discriminant check that avoids the full
         * parameter computation and curve evaluation. Based on the mathematical property
         * that a cubic Bézier curve self-intersects if and only if its control polygon
         * has a specific geometric configuration.
         *
         * **Performance**: O(1) constant time, optimized for boolean queries.
         * Approximately 3x faster than `intersection()` for existence checks.
         *
         * **Key Optimizations**:
         * - **No Square Root**: Avoids `Math.sqrt()` computation
         * - **No Curve Evaluation**: Skips Bézier curve point calculation
         * - **Parameter Bounds Check**: Uses sum and product of roots instead of solving
         * - **Scale-Aware Tolerance**: Adaptive numerical tolerance based on curve scale
         * - **Conservative Bounds**: Robust parameter validation with geometric conditions
         *
         * **Trade-offs**:
         * - ✅ **Ultra Fast**: Only essential discriminant calculations
         * - ✅ **Memory Efficient**: No temporary arrays or complex calculations
         * - ✅ **Numerically Stable**: Robust handling of edge cases
         * - ❌ **No Details**: Returns only boolean, no intersection parameters
         * - ❌ **No Point**: Does not compute the actual intersection point
         *
         * **Mathematical Foundation**:
         *
         * For a cubic Bézier curve with control points P0, P1, P2, P3, the self-intersection
         * condition is determined by the discriminant delta = 4D0*D2 - D1^2 where:
         * - D0 = (P2 - P1) × (P3 - P2)
         * - D1 = (P1 - P0) × (P3 - P2)
         * - D2 = (P1 - P0) × (P2 - P1)
         *
         * The curve self-intersects if and only if:
         * 1. Q = D0 - D1 + D2 ≠ 0 (non-degenerate case)
         * 2. delta > 0 (real distinct roots exist)
         * 3. Both roots are in (0,1) (intersection within curve domain)
         *
         * **Parameter Conditions**: For roots u, v in (0,1):
         * - s = u + v ∈ (0, 2)
         * - p = u * v ∈ (0, 1)
         * - 1 - s + p > 0 (geometric constraint)
         *
         * @param C - The cubic Bézier curve to check for self-intersection
         * @param eps - Base numerical tolerance for floating-point comparisons (default: 1e-12).
         *              The actual tolerance is scale-aware and adapts to curve size.
         * @returns `true` if the curve has a self-intersection, `false` otherwise
         *
         * @example
         * ```ts
         * // Fast existence check for UI feedback
         * const curve: cmath.bezier.CubicBezierWithTangents = {
         *   a: [0, 0], b: [100, 0],
         *   ta: [100, 100], tb: [-100, 100]
         * };
         *
         * if (cmath.bezier.intersection.single.is_intersecting(curve)) {
         *   console.log("Warning: Curve has self-intersection");
         *   // Show visual indicator without computing exact intersection
         * }
         * ```
         *
         * @example
         * ```ts
         * // Performance-critical batch processing
         * const curves: cmath.bezier.CubicBezierWithTangents[] = [ *many curves* ];
         * const selfIntersecting = curves.filter(c => cmath.bezier.intersection.single.is_intersecting(c));
         * console.log(`${selfIntersecting.length} curves have self-intersections`);
         * ```
         *
         * @see bezier.intersection - For exact intersection computation
         * @see bezier.intersection.intersections - For intersections between different curves
         *
         * @remarks
         * This function is designed for performance-critical boolean queries where
         * exact intersection details are not needed. For precise intersection data,
         * use `intersection()` instead. The two functions are independent and
         * optimized for their respective use cases:
         *
         * - **`is_intersecting()`**: Fast boolean check for UI feedback, validation, filtering
         * - **`intersection()`**: Precise computation for geometric operations, splitting
         *
         * Choose based on your specific needs: speed vs. precision.
         */
        function is_intersecting(C: CubicBezierWithTangents, eps?: number): boolean;
        /**
         * Detects self-intersections of a cubic Bézier curve using adaptive subdivision
         * and pairwise intersection testing.
         *
         * **Mathematical Background:**
         *
         * A cubic Bézier curve B(t) with control points P₀, P₁, P₂, P₃ is defined as:
         * ```
         * B(t) = (1-t)³P₀ + 3(1-t)²tP₁ + 3(1-t)t²P₂ + t³P₃,  t ∈ [0,1]
         * ```
         *
         * A self-intersection occurs when B(t₁) = B(t₂) for distinct parameters t₁ ≠ t₂.
         * This creates a system of two equations in two unknowns:
         * ```
         * Bₓ(t₁) = Bₓ(t₂)  and  Bᵧ(t₁) = Bᵧ(t₂)
         * ```
         *
         * **Algorithm Overview:**
         *
         * Uses a closed-form solution based on the cubic Bézier self-intersection equation:
         *
         * 1. **Compute Differences**: Calculate Δ₀ = P₁ - P₀, Δ₁ = P₂ - P₁, Δ₂ = P₃ - P₂
         * 2. **Cross Products**: Compute D₀ = Δ₁ × Δ₂, D₁ = Δ₀ × Δ₂, D₂ = Δ₀ × Δ₁
         * 3. **Discriminant**: Check if Δ = 4D₀D₂ - D₁² > 0 (existence condition)
         * 4. **Root Finding**: Solve quadratic equation for intersection parameters
         * 5. **Validation**: Ensure parameters are in [0,1] and distinct
         *
         * **Mathematical Properties:**
         *
         * - **Existence**: A cubic Bézier curve can have at most 1 self-intersection
         * - **Parameter Ordering**: Results are returned with t₁ < t₂ for consistency
         * - **Transverse Nature**: Self-intersections are always transverse (not tangent)
         * - **Closed Form**: Direct solution without iterative subdivision
         *
         * **Complexity Analysis:**
         *
         * - **Time Complexity**: O(1) constant time for the closed-form solution
         * - **Space Complexity**: O(1) constant space
         * - **Numerical Stability**: Robust closed-form solution
         *
         * @param C - The cubic Bézier curve to analyze for self-intersections
         * @returns Either a single self-intersection point or null if no self-intersection exists:
         * - `t1`, `t2`: Parameter values where the curve intersects itself (t₁ < t₂)
         * - `point`: The intersection point in ℝ²
         *
         * @example
         * ```ts
         * // Figure-8 curve with self-intersection
         * const curve: cmath.bezier.CubicBezierWithTangents = {
         *   a: [0, 0],      // P₀
         *   b: [100, 0],    // P₃
         *   ta: [100, 100], // P₁ - P₀ (creates upward loop)
         *   tb: [-100, 100] // P₃ - P₂ (creates downward loop)
         * };
         *
         * const selfIntersection = cmath.bezier.intersection.single.intersection(curve);
         * console.log(selfIntersection);
         * // → {
         * //     t1: 0.25, t2: 0.75,
         * //     point: [50, 50]
         * //   }
         *
         * // Verify the intersection
         * const point1 = cmath.bezier.evaluate(curve.a, curve.b, curve.ta, curve.tb, 0.25);
         * const point2 = cmath.bezier.evaluate(curve.a, curve.b, curve.ta, curve.tb, 0.75);
         * const distance = Math.hypot(point1[0] - point2[0], point1[1] - point2[1]);
         * console.log('Self-intersection accuracy:', distance); // → ~1e-12
         * ```
         *
         * @example
         * ```ts
         * // Simple curve with no self-intersections
         * const simpleCurve: cmath.bezier.CubicBezierWithTangents = {
         *   a: [0, 0],
         *   b: [100, 0],
         *   ta: [0, 0],
         *   tb: [0, 0]
         * };
         *
         * const intersection = cmath.bezier.intersection.single.intersection(simpleCurve);
         * console.log(intersection); // → null
         * ```
         *
         * **Mathematical Notes:**
         *
         * - **Cusp Detection**: The algorithm can detect cusps (where B'(t) = 0) but these
         *   are not considered self-intersections
         * - **Numerical Precision**: Uses adaptive tolerances based on curve scale
         * - **Edge Cases**: Handles degenerate curves (zero-length, coincident control points)
         * - **Robustness**: Tolerant to floating-point arithmetic errors
         *
         * **Performance Considerations:**
         *
         * - **Constant Time**: O(1) performance regardless of curve complexity
         * - **No Iteration**: Direct mathematical solution without loops or recursion
         * - **Memory Efficient**: Only a few temporary variables needed
         * - **Scale-Aware**: Adaptive tolerance prevents numerical issues with large/small curves
         * - **Conservative**: Robust handling of degenerate cases and edge conditions
         *
         * @see bezier.intersection.intersections - For intersections between different curves
         * @see bezier.subdivide - For curve subdivision algorithm
         *
         * @remarks
         * This function is essential for planarization algorithms, as self-intersecting
         * curves must be split at their self-intersection points to create planar networks.
         * The closed-form solution provides both accuracy and performance for geometric
         * consistency in vector graphics operations.
         */
        function intersection(C: CubicBezierWithTangents): {
          t1: number;
          t2: number;
          point: Vector2;
        } | null;
      }
      /** Local type of an intersection useful for planarization/boolean ops. */
      enum IntersectionKind {
        /** Intersection lies at an endpoint (t≈0|1 or u≈0|1). */
        Endpoint = "endpoint",
        /** Curves touch without crossing (A'(t) ∥ B'(u)). */
        Tangent = "tangent",
        /** Proper crossing (transverse). */
        Transverse = "transverse"
      }
      type BezierIntersectionPoint = Readonly<{
        /** Parameter on curve A (∈[0,1]). */a_t: number; /** Parameter on curve B (∈[0,1]). */
        b_t: number; /** Intersection point in ℝ² (A(a_t) ≈ B(b_t)). */
        p: Vector2; /** Local classification for downstream topology decisions. */
        kind: IntersectionKind; /** Optional residual ‖A(a_t)-B(b_t)‖ (post-refine). */
        residual?: number;
      }>;
      type BezierIntersectionOverlap = Readonly<{
        /** Param interval on A (sorted, closed). */a_range: [number, number]; /** Param interval on B (sorted, closed). */
        b_range: [number, number];
      }>;
      type BezierIntersectionResult = Readonly<{
        /** Discrete intersection points. */points: ReadonlyArray<BezierIntersectionPoint>; /** Continuous coincidences (rare; minimal detection). */
        overlaps: ReadonlyArray<BezierIntersectionOverlap>; /** Optional stats for debugging/tuning. */
        stats?: Readonly<{
          eps: number;
          paramEps: number;
          maxDepth: number;
          refine: boolean;
          candidates: number;
          emitted: number;
        }>;
      }>;
      type IntersectionOptions = {
        /** Spatial tolerance (canvas units) used for bbox/flatness/termination. Default: 1e-3. */eps?: number; /** Param-space tolerance for dedup/endpoint snap. Default: 1e-3. */
        paramEps?: number; /** Maximum subdivision depth. Default: 32. */
        maxDepth?: number; /** Apply Newton refinement for subpixel accuracy. Default: true. */
        refine?: boolean;
      };
      /**
       * Compute cubic–cubic Bézier intersections (A with B) using
       * conservative bbox subdivision (de Casteljau) with optional Newton refinement.
       *
       * - Input curves are in `(a,b,ta,tb)` form used by your engine:
       *   - P0 = a
       *   - P1 = a + ta
       *   - P2 = b + tb
       *   - P3 = b
       * - Returns param pairs `(a_t, b_t)` and the point `p = A(a_t) ≈ B(b_t)`.
       * - Classifies each hit as `Endpoint`, `Tangent`, or `Transverse` (cheap; uses derivatives).
       * - Performs param-space dedup and endpoint snapping.
       * - Detects simple overlaps (near-coincident boxes + near-parallel) as param intervals.
       *
       * @remarks
       * Robustness tips:
       * - Tune `eps` to your canvas scale (e.g., 1e-3..1e-2).
       * - `refine` improves accuracy; keep small iteration count for perf.
       * - For planarization, use the returned params to split curves; for tangent hits you may choose to skip splitting.
       *
       * @see https://rosettacode.org/wiki/B%C3%A9zier_curves/Intersections
       */
      function intersections(A: CubicBezierWithTangents, B: CubicBezierWithTangents, opts?: IntersectionOptions): BezierIntersectionResult;
    }
    /**
     * Piecewise Bézier curve operations for chains of cubic Bézier segments.
     *
     * The `piecewise` namespace provides optimized mathematical operations for working with
     * sequences of connected cubic Bézier curves (piecewise curves). These operations treat
     * the entire chain as a single mathematical entity while providing efficient algorithms
     * for common operations like arc length parameterization, point evaluation, and projection.
     *
     * A piecewise curve is defined as an ordered sequence of cubic Bézier segments where
     * each segment's end point connects to the next segment's start point, forming a
     * continuous curve. The global parameter `u` ∈ [0, 1] represents the normalized position
     * along the entire curve chain, while local parameters `t` ∈ [0, 1] represent positions
     * within individual segments.
     *
     * Key concepts:
     * - **Global parameter `u`**: Normalized position along the entire curve chain (0 = start, 1 = end)
     * - **Local parameter `t`**: Parameter within a specific segment (0 = segment start, 1 = segment end)
     * - **Segment index**: Zero-based index identifying which segment contains a given global parameter
     * - **Arc length parameterization**: Uniform motion along the curve chain regardless of segment curvature
     *
     * Common use cases:
     * - Path following with uniform speed
     * - Animation along complex multi-segment curves
     * - Interactive curve editing and manipulation
     * - Geometric operations on complex shapes
     *
     * @example
     * ```typescript
     * // Define a piecewise curve with multiple segments
     * const segments: cmath.bezier.CubicBezierWithTangents[] = [
     *   { a: [0, 0], b: [100, 0], ta: [50, 50], tb: [-50, 50] },
     *   { a: [100, 0], b: [200, 100], ta: [50, 50], tb: [50, -50] },
     *   { a: [200, 100], b: [300, 100], ta: [50, -50], tb: [-50, -50] }
     * ];
     *
     * // Evaluate point at 60% along the entire curve chain
     * const point = cmath.bezier.piecewise.evaluate(segments, 0.6);
     *
     * // Get the segment index and local parameter for a global position
     * const { segmentIndex, localT } = cmath.bezier.piecewise.resolveGlobalU(segments, 0.6);
     *
     * // Project a point onto the entire curve chain
     * const globalU = cmath.bezier.piecewise.project(segments, [150, 50]);
     * ```
     *
     * @remarks
     * - All operations assume segments are properly connected (end point of segment i = start point of segment i+1)
     * - Global parameter `u` is automatically clamped to [0, 1] for robustness
     * - Arc length parameterization provides uniform motion along the curve chain
     * - Operations are optimized for chains with many segments
     * - Caching mechanisms are used internally for performance-critical operations
     */
    namespace piecewise {
      /**
       * Compact representation of a piecewise Bézier curve network.
       *
       * The `Network` type provides a memory-efficient structure for representing chains of
       * connected cubic Bézier segments. It separates vertex positions from segment connectivity
       * and tangent information, allowing for efficient storage and manipulation of complex
       * curve networks.
       *
       * Structure:
       * - `vertices`: Array of unique vertex positions in 2D space
       * - `segments`: Array of segment definitions, each referencing vertices by index
       *
       * Each segment is defined by:
       * - `a`: Index of the start vertex in the `vertices` array
       * - `b`: Index of the end vertex in the `vertices` array
       * - `ta`: Tangent vector at the start vertex (relative to vertex position)
       * - `tb`: Tangent vector at the end vertex (relative to vertex position)
       *
       * This structure enables:
       * - Memory efficiency through vertex sharing
       * - Fast vertex position updates (change once, affects all connected segments)
       * - Efficient serialization and network transmission
       * - Support for complex topologies (branches, loops, etc.)
       *
       * @property vertices - Array of unique vertex positions in 2D space
       * @property segments - Array of segment definitions referencing vertices by index
       *
       * @example
       * ```typescript
       * // Define a simple curve with 3 segments forming a path
       * const network: cmath.bezier.piecewise.Network = {
       *   vertices: [
       *     [0, 0],    // vertex 0
       *     [100, 0],  // vertex 1
       *     [200, 100], // vertex 2
       *     [300, 100]  // vertex 3
       *   ],
       *   segments: [
       *     { a: 0, b: 1, ta: [50, 50], tb: [-50, 50] },   // segment 0: vertex 0 → 1
       *     { a: 1, b: 2, ta: [50, 50], tb: [50, -50] },   // segment 1: vertex 1 → 2
       *     { a: 2, b: 3, ta: [50, -50], tb: [-50, -50] }  // segment 2: vertex 2 → 3
       *   ]
       * };
       *
       * // Evaluate point at 60% along the entire network
       * const point = cmath.bezier.piecewise.evaluate(network, 0.6);
       * ```
       *
       * @example
       * ```typescript
       * // Network with branching structure
       * const branchedNetwork: cmath.bezier.piecewise.Network = {
       *   vertices: [
       *     [0, 0],     // root vertex
       *     [100, 0],   // branch point
       *     [200, 50],  // left branch end
       *     [200, -50]  // right branch end
       *   ],
       *   segments: [
       *     { a: 0, b: 1, ta: [50, 0], tb: [-50, 0] },     // main path
       *     { a: 1, b: 2, ta: [50, 50], tb: [-50, 50] },   // left branch
       *     { a: 1, b: 3, ta: [50, -50], tb: [-50, -50] }  // right branch
       *   ]
       * };
       * ```
       *
       * @remarks
       * - **No validation**: This structure does not ensure data validity or connectivity
       * - **Index bounds**: Segment indices must be valid within the vertices array
       * - **Vertex sharing**: Multiple segments can reference the same vertex
       * - **Memory efficiency**: Vertex positions are stored once and shared
       * - **Topology flexibility**: Supports complex networks with branches and loops
       * - **Performance**: Optimized for operations on large networks
       * - **Serialization**: Compact representation suitable for storage/transmission
       */
      type Network = {
        vertices: Vector2[];
        segments: {
          a: number;
          b: number;
          ta: Vector2;
          tb: Vector2;
        }[];
      };
      /**
       * Resolves a global parameter `t` to the corresponding segment index and local parameter `t`.
       *
       * This function maps a global parameter `t` ∈ [0, 1] representing position along the entire
       * network to the specific segment that contains that position and the local parameter `t`
       * within that segment.
       *
       * The mapping is based on uniform distribution across segments, where each segment
       * contributes equally to the global parameter space regardless of its actual length.
       * This is different from arc length parameterization where segments contribute based on their actual arc length.
       *
       * @param network - The piecewise Bézier network
       * @param t - Global parameter in range [0, 1] representing position along the entire network
       * @returns Object containing the segment index and local parameter `t` ∈ [0, 1]
       *
       * @example
       * ```typescript
       * const network: cmath.bezier.piecewise.Network = {
       *   vertices: [[0, 0], [100, 0], [200, 100]],
       *   segments: [
       *     { a: 0, b: 1, ta: [50, 50], tb: [-50, 50] },
       *     { a: 1, b: 2, ta: [50, 50], tb: [-50, 50] }
       *   ]
       * };
       *
       * const result = cmath.bezier.piecewise.resolveGlobalT(network, 0.6);
       * // result = { segmentIndex: 1, localT: 0.2 }
       * // This means 60% along the network is 20% into the second segment
       * ```
       */
      function resolveGlobalT(network: Network, t: number): {
        segmentIndex: number;
        localT: number;
      };
      /**
       * Evaluates a point on the piecewise Bézier network at global parameter `t`.
       *
       * This function computes the point on the network at the specified global parameter `t` ∈ [0, 1].
       * It internally resolves the global parameter to the appropriate segment and local parameter,
       * then evaluates that segment using the standard cubic Bézier formula.
       *
       * The global parameter `t` represents uniform distribution across segments, where each segment
       * contributes equally to the parameter space. This is different from arc length-based evaluation
       * where segments contribute based on their actual arc length.
       *
       * @param network - The piecewise Bézier network
       * @param t - Global parameter in range [0, 1] representing position along the entire network
       * @returns The point on the network at parameter `t` [x, y]
       *
       * @example
       * ```typescript
       * const network: cmath.bezier.piecewise.Network = {
       *   vertices: [[0, 0], [100, 0], [200, 100]],
       *   segments: [
       *     { a: 0, b: 1, ta: [50, 50], tb: [-50, 50] },
       *     { a: 1, b: 2, ta: [50, 50], tb: [-50, 50] }
       *   ]
       * };
       *
       * const point = cmath.bezier.piecewise.evaluate(network, 0.5);
       * console.log(point); // [x, y] coordinates at 50% along the network
       * ```
       *
       * @remarks
       * - Performance is O(1) after resolving the segment
       * - Global parameter `t` is automatically clamped to [0, 1]
       * - Reuses the single-segment `evaluate` function for consistency
       * - Handles edge cases like empty networks gracefully
       */
      function evaluate(network: Network, t: number): Vector2;
      /**
       * Projects a point onto the piecewise Bézier network and returns the global parameter `t`.
       *
       * This function finds the closest point on the network to the given input point and returns
       * the global parameter `t` that corresponds to that location. It performs projection on each
       * segment and selects the result with the minimum distance.
       *
       * The algorithm:
       * 1. Projects the point onto each segment using the single-segment `project` function
       * 2. Evaluates the projected point on each segment
       * 3. Computes distances to find the closest segment
       * 4. Converts the local parameter to global parameter `t`
       *
       * @param network - The piecewise Bézier network
       * @param point - The point to project onto the network [x, y]
       * @returns Global parameter `t` ∈ [0, 1] representing the closest point on the network
       *
       * @example
       * ```typescript
       * const network: cmath.bezier.piecewise.Network = {
       *   vertices: [[0, 0], [100, 0], [200, 100]],
       *   segments: [
       *     { a: 0, b: 1, ta: [50, 50], tb: [-50, 50] },
       *     { a: 1, b: 2, ta: [50, 50], tb: [-50, 50] }
       *   ]
       * };
       *
       * const t = cmath.bezier.piecewise.project(network, [150, 50]);
       * console.log(t); // Global parameter of the closest point on the network
       * ```
       *
       * @remarks
       * - Performance is O(n) where n is the number of segments
       * - Reuses the single-segment `project` function for consistency
       * - Returns the global parameter that minimizes distance across all segments
       * - Handles edge cases like empty networks gracefully
       */
      function project(network: Network, point: Vector2): number;
    }
  }
  namespace transform {
    const identity: Transform;
    /**
     * Multiplies two 2×3 affine transforms: `C = A · B`.
     *
     * **Order (column-vector convention):**
     * - `C = A · B` means **apply `B` first, then `A`**.
     * - This matches CSS/SVG/Canvas2D/Skia semantics.
     */
    function multiply(A: Transform, B: Transform): Transform;
    /**
     * Applies a **scaling** to an existing 2D transform **about an absolute (world-space) origin**.
     *
     * Internally builds `T(origin) · S(scaleX, scaleY) · T(−origin)` and **pre-multiplies** it:
     * `M' = T(origin) · S · T(−origin) · M`.
     *
     * @param M - The original 2D transform to update.
     * @param scale - Uniform scale (number) or non-uniform scale `[scaleX, scaleY]`.
     * @param origin - World-space pivot `[ox, oy]` about which the scaling is performed.
     * @returns A new transform with scaling applied about `origin`.
     *
     * @example
     * // World-space scaling about (50, 50), applied to a translated object
     * const M: Transform = [
     *   [1, 0, 10], // a, c, tx
     *   [0, 1, 20], // b, d, ty
     * ];
     * const scaled = scale(M, 2, [50, 50]);
     * console.log(scaled);
     * // =>
     * // [
     * //   [2, 0, -30],
     * //   [0, 2, -10],
     * // ]
     *
     * @remarks
     * - **Coordinate space:** `origin` is **absolute/world** coordinates. If you need
     *   **local/object** pivot (e.g., intrinsic image center), you should post-multiply:
     *   `M' = M · T(o) · S · T(−o)`.
     * - **Order:** Pre-multiplication means the scale happens **in world space** on the
     *   already-placed object.
     */
    function scale(M: Transform, scale: number | Vector2, origin: Vector2): Transform;
    /**
     * Applies a **rotation** to an existing 2D transform **about an absolute (world-space) origin**.
     *
     * Internally builds `T(origin) · R(θ) · T(−origin)` in closed form and **pre-multiplies** it:
     * `M' = T(origin) · R · T(−origin) · M`.
     *
     * @param M - The original 2D transform to update.
     * @param deg - Rotation in degrees (positive = counter-clockwise).
     * @param origin - World-space pivot `[ox, oy]` about which the rotation is performed.
     * @returns A new transform with rotation applied about `origin`.
     *
     * @example
     * // Rotate 90° about (200, 100) in world space
     * const M: Transform = [
     *   [1, 0, 200],
     *   [0, 1, 100],
     * ];
     * const R = rotate(M, 90, [200, 100]);
     * console.log(R);
     * // One valid result is:
     * // [
     * //   [ 0, -1, 300 ],
     * //   [ 1,  0, -100 ],
     * // ]
     *
     * @remarks
     * - **Coordinate space:** `origin` is **absolute/world** coordinates. For a **local/object**
     *   pivot, use post-multiplication: `M' = M · T(o) · R · T(−o)`.
     * - The closed-form embeds the pivot into `tx, ty`; no extra “origin” is stored in the matrix.
     */
    function rotate(M: Transform, deg: number, origin: Vector2): Transform;
    /**
     * Applies a translation to a 2D transform matrix.
     *
     * @param transform - The original 2D transform matrix.
     * @param delta - The translation vector `[deltaX, deltaY]` to apply.
     * @returns A new transform matrix with the translation applied.
     *
     * @example
     * const transform: cmath.Transform = [
     *   [1, 0, 10], // ScaleX, ShearY, TranslateX
     *   [0, 1, 20], // ShearX, ScaleY, TranslateY
     * ];
     * const delta: cmath.Vector2 = [5, -10];
     * const translated = cmath.transform.translate(transform, delta);
     * console.log(translated);
     * // Output:
     * // [
     * //   [1, 0, 15], // TranslateX becomes 10 + 5 = 15
     * //   [0, 1, 10], // TranslateY becomes 20 - 10 = 10
     * // ]
     */
    function translate(transform: Transform, delta: cmath.Vector2): Transform;
    /**
     * Computes the inverse of a 2D affine transform matrix.
     *
     * The inverse transform will undo the original transform, such that:
     * `invert(T) * T * point = point`
     *
     * @param transform - The 2D transform matrix to invert:
     *   ```
     *   [
     *     [a, b, tx],
     *     [c, d, ty]
     *   ]
     *   ```
     * @returns The inverse transform matrix, or throws an error if the transform is not invertible.
     *
     * @example
     * const transform: cmath.Transform = [
     *   [2, 0, 10], // Scale by 2 and translate by 10
     *   [0, 2, 20], // Scale by 2 and translate by 20
     * ];
     * const inverse = cmath.transform.invert(transform);
     * // inverse = [
     * //   [0.5, 0, -5], // Scale by 0.5 and translate by -5
     * //   [0, 0.5, -10], // Scale by 0.5 and translate by -10
     * // ]
     *
     * @remarks
     * - The transform must be invertible (determinant must be non-zero).
     * - For a transform matrix [[a,b,tx],[c,d,ty]], the determinant is (a*d - b*c).
     * - If the determinant is zero, the transform is not invertible and an error is thrown.
     */
    function invert(transform: Transform): Transform;
    /**
     * Extracts the scaling factors from a 2D transformation matrix.
     *
     * @param transform - The transformation matrix to extract the scale from.
     * @returns A `Vector2` containing the scaling factors `[scaleX, scaleY]`.
     *
     * @example
     * const transform: cmath.Transform = [
     *   [2, 0, 10], // ScaleX, ShearY, TranslateX
     *   [0, 3, 20], // ShearX, ScaleY, TranslateY
     * ];
     * const scale = cmath.transform.getScale(transform);
     * console.log(scale); // Output: [2, 3]
     */
    function getScale(transform: cmath.Transform): cmath.Vector2;
    /**
     * Extracts the translation components (translateX, translateY) from a 2D transformation matrix.
     *
     * @param transform - The transformation matrix to extract the translation from.
     * @returns A `Vector2` containing the translation `[translateX, translateY]`.
     *
     * @example
     * const transform: cmath.Transform = [
     *   [1, 0, 10], // ScaleX, ShearY, TranslateX
     *   [0, 1, 20], // ShearX, ScaleY, TranslateY
     * ];
     * const translate = cmath.transform.getTranslate(transform);
     * console.log(translate); // Output: [10, 20]
     */
    function getTranslate(transform: cmath.Transform): cmath.Vector2;
    /**
     * Extracts the approximate rotation angle (in degrees) from a 2×3 affine transform matrix.
     *
     * @param transform - The 2D transform matrix:
     *   [
     *     [a, b, tx],
     *     [c, d, ty]
     *   ]
     * @returns The rotation angle in degrees, derived via `atan2(c, a)`.
     *
     * @remarks
     * - This assumes the matrix is primarily rotation (plus optional uniform scaling).
     *   If there's skew or non-uniform scaling, the computed angle might be off.
     * - The returned angle is in the range (-180, 180].
     */
    function angle(transform: Transform): number;
  }
  /**
   * Algorithms and utilities for rectangle packing, bin packing, and layout optimization.
   *
   * Provides core implementations for various rectangle packing algorithms useful for graphical canvas
   * applications, UI layout management, and efficient spatial utilization scenarios.
   *
   * ### Common Use Cases:
   * - Arranging graphical elements dynamically on a canvas.
   * - Sprite sheet generation.
   * - UI element placement and responsive layout systems.
   * - Spatial optimization tasks such as texture atlas management.
   *
   * @remarks
   * These algorithms are optimized for performance and clarity, suitable for real-time graphical
   * applications where efficiency is critical.
   *
   */
  namespace packing {
    /**
     * Calculates the next viable placement for a rectangular agent within a bounded domain.
     *
     * Given a rectangular domain V, an agent of dimensions (w, h), and a set of occupied regions A,
     * this function computes a candidate placement R ⊆ V such that R ∩ a = ∅ for every a ∈ A.
     *
     * @param view - The domain rectangle V defined by (x, y, width, height).
     * @param agent - An object with dimensions {width: number, height: number} for the agent.
     * @param anchors - An array of rectangles representing occupied regions A (which may extend beyond V).
     * @returns A rectangle R = (x, y, w, h) representing the placement of the agent, or null if none exists.
     *
     * @remarks
     * This function implements a foundational variation of the MaxRects algorithm:
     * 1. Initialize F = {V}.
     * 2. For each a ∈ A, replace each r ∈ F with r \ a.
     * 3. Select a candidate r ∈ F such that r.width ≥ w and r.height ≥ h, using a lexicographical minimality criterion.
     */
    function fit(view: Rectangle, agent: {
      width: number;
      height: number;
    }, anchors: Rectangle[]): Rectangle | null;
    namespace ext {
      /**
       * TODO: can be optimized
       * Attempts to find a valid placement for the agent by "walking" outward from the view,
       * expanding the search towards the right and down directions. This function is used when
       * a fit within the initial view cannot be found.
       *
       * The algorithm iteratively expands the search region (starting at the view's top-left corner)
       * and tests candidate placements on a grid. The first candidate that does not overlap any anchor
       * is returned. The search is performed only in the positive (right and down) directions.
       *
       * @param view - The original view rectangle.
       * @param agent - The dimensions of the agent rectangle (width and height).
       * @param anchors - An array of rectangles representing occupied regions.
       * @returns A rectangle representing the placement of the agent that does not overlap any anchor.
       *
       * @example
       * ```typescript
       * const view = { x: 0, y: 0, width: 100, height: 100 };
       * const agent = { width: 50, height: 50 };
       * const anchors = [{ x: 0, y: 0, width: 100, height: 100 }];
       * // Since no fit is found within view, walk_to_fit searches outward.
       * const placement = cmath.packing.walk_to_fit(view, agent, anchors);
       * // placement might be something like { x: 100, y: 0, width: 50, height: 50 }.
       * ```
       */
      function walk_to_fit(view: Rectangle, agent: {
        width: number;
        height: number;
      }, anchors: Rectangle[]): Rectangle;
    }
  }
  /**
   * @namespace miter
   * Geometric utilities for computing the relationship between join angle
   * and corner extension ratio (1 / sin(θ/2)).
   *
   * Used to determine how sharply two stroke segments can meet before
   * transitioning from a pointed to a beveled corner.
   *
   * Provides pure math functions for stroke join geometry — not tied to
   * any rendering engine or UI concept.
   */
  namespace miter {
    /**
     * Returns the geometric corner extension ratio (1 / sin(θ/2))
     * for a given interior angle.
     *
     * @param angleDeg - The interior join angle in degrees (e.g., 30)
     * @returns Ratio of corner extension (e.g., 3.86 for 30°)
     */
    function ratio(angleDeg: number): number;
    /**
     * Returns the interior angle (in degrees) for a given corner extension ratio.
     * This is the inverse of `ratio()`.
     *
     * @param ratio - The corner extension ratio (e.g., 4)
     * @returns The equivalent join angle in degrees (e.g., 28.96°)
     */
    function angle(ratio: number): number;
  }
  /**
   * Rasterization utilities for drawing lines between points (e.g., "connect the dots")
   * in integer pixel coordinates, returning the set of covered pixels.
   */
  namespace raster {
    /**
     * Returns the fractional part of a number.
     *
     * @param x - The input number.
     * @returns The fractional part of x.
     *
     * @example
     * ```ts
     * const frac = fract(3.14); // 0.14
     * ```
     */
    function fract(x: number): number;
    /**
     * Computes a pseudo-random noise value for the given 2D coordinates.
     *
     * This function generates white noise based on the input coordinates by using a simple hash
     * based on the sine function and a set of pre-determined constants. The constants
     * `12.9898`, `78.233`, and `43758.5453` are used as "magic numbers" that have been empirically
     * chosen to produce a good spread of values. They ensure that small differences in input coordinates
     * yield significant changes in the output, a technique commonly seen in GLSL noise implementations.
     *
     * The calculation performed is:
     *   noise(x, y) = fract(sin(x * 12.9898 + y * 78.233) * 43758.5453)
     * where `fract` returns the fractional part of a number.
     *
     * @param x - The x-coordinate.
     * @param y - The y-coordinate.
     * @returns A pseudo-random noise value in the range [0, 1].
     *
     * @example
     * ```ts
     * const value = cmath.raster.noise(12.34, 56.78);
     * console.log(value); // e.g., 0.8453
     * ```
     *
     * @remarks
     * While this method is fast and useful for generating grain or noise patterns in graphics applications,
     * it is not suitable for high-quality noise generation.
     */
    function noise(x: number, y: number): number;
    /**
     * A Bitmap represents a raw grid of pixels.
     *
     * This is a foundational model for 2D raster-based graphics.
     * It contains the width, height, and a flat array of pixel data (RGBA).
     *
     * @example
     * const bmp: Bitmap = {
     *   width: 256,
     *   height: 256,
     *   data: new Uint8ClampedArray(256 * 256 * 4),
     * };
     */
    type Bitmap = {
      width: number;
      height: number;
      data: Uint8ClampedArray;
    };
    /**
     * Tiles a source bitmap over a specified target area.
     *
     * This function creates a new bitmap by repeating (tiling) the source bitmap
     * to cover the target dimensions. The source image is repeated both horizontally
     * and vertically using modulo arithmetic.
     *
     * @param source - The source bitmap to tile.
     * @param width - The desired width of the output bitmap.
     * @param height - The desired height of the output bitmap.
     * @returns A new Bitmap object with the given target dimensions, filled by tiling the source.
     *
     * @example
     * const sourceBitmap: Bitmap = { width: 100, height: 100, data: sourceData };
     * const tiledBitmap = cmath.raster.tile(sourceBitmap, 300, 200);
     * // tiledBitmap now has width 300 and height 200, with the 100x100 source repeated.
     */
    function tile(source: Bitmap, width: number, height: number): Bitmap;
    /**
     * Scales a Bitmap by separate factors along the x and y axes.
     *
     * This function creates a new Bitmap that is a scaled version of the source Bitmap.
     * The scaling factors are applied independently to the width and height.
     *
     * When scaling up (i.e. when either factor > 1), each destination pixel is mapped
     * back to a source pixel using a nearest-neighbor approach (via Math.floor). This
     * means that multiple destination pixels may be filled with the same source pixel's
     * value, resulting in a blocky, pixelated appearance. No interpolation or smoothing
     * is performed by this algorithm.
     *
     * @param bitmap - The source Bitmap to scale.
     * @param factor - The scaling factors as a 2D vector [factorX, factorY]. Both values must be positive.
     * @returns A new Bitmap with its dimensions scaled by the specified factors.
     *
     * @example
     * ```ts
     * const originalBitmap: Bitmap = { width: 100, height: 100, data: originalData };
     * const scaledBitmap = cmath.raster.scale(originalBitmap, [2, 1.5]);
     * // scaledBitmap.width ≈ 200, scaledBitmap.height ≈ 150.
     * ```
     *
     * @remarks
     * When scaling up, each destination pixel is computed by mapping its coordinate back to
     * the source image using nearest-neighbor sampling (via Math.floor). This approach replicates
     * source pixels over multiple destination pixels, which can result in a blocky or pixelated
     * appearance when the image is enlarged.
     */
    function scale(bitmap: Bitmap, factor: [number, number]): Bitmap;
    /**
     * Resizes a bitmap to the specified dimensions using nearest-neighbor scaling.
     * Internally, this computes scaling factors and delegates to {@link scale}.
     *
     * @param bitmap - The source bitmap to resize.
     * @param dst - The destination dimensions as [width, height].
     * @returns A new bitmap with the resized dimensions.
     *
     * @example
     * ```ts
     * const resized = cmath.raster.resize(originalBitmap, [200, 150]);
     * ```
     */
    function resize(bitmap: Bitmap, dst: cmath.Vector2): Bitmap;
    /**
     * Pads a Bitmap to the specified dimensions without scaling the source.
     * The source image is centered on a new canvas filled with a background color.
     *
     * @param bitmap - The source Bitmap.
     * @param dst - The destination dimensions as [width, height].
     * @param bg - The background color as an RGBA array. Default is transparent [0, 0, 0, 0].
     * @returns A new Bitmap with the source image centered on a padded canvas.
     *
     * @example
     * ```ts
     * const padded = cmath.raster.pad(originalBitmap, [300, 300], [255, 255, 255, 255]);
     * ```
     */
    function pad(bitmap: Bitmap, dst: cmath.Vector2, bg?: cmath.Vector4): Bitmap;
    /**
     * Computes a Gaussian weight based on a normalized distance.
     *
     * This function calculates a weight using a Gaussian function:
     *
     *   f(x) = exp(-x² / (2σ²))
     *
     * In this implementation, we reformulate it using a parameter `k` (where k = 1/(2σ²)).
     * The `hardness` parameter, ranging from 0 to 1, interpolates between two preset k values,
     * controlling the steepness of the falloff:
     *
     * - When hardness is 0, a higher k (e.g., 10) is used, resulting in a very steep decay.
     * - When hardness is 1, a lower k (e.g., 2) is used, producing a gentler decay.
     *
     * This mathematical function is useful for simulating gradual transitions.
     * For example, in a digital painting application, you might use this function to compute
     * the per-pixel opacity of a painting stroke—pixels near the center of the stroke receive a
     * higher weight, while those further away fade out rapidly.
     *
     * @param normDist - The normalized distance from the center (typically in the range [0, 1]).
     * @param hardness - A value between 0 and 1 that adjusts the steepness of the falloff.
     *                   A value of 0 produces a rapid decay (concentrating the effect near the center),
     *                   whereas 1 produces a gentler decay.
     * @returns The computed weight.
     *
     * @example
     * // In a digital painting tool, calculate the opacity weight for a pixel:
     * const normDist = 0.5; // e.g., pixel is halfway from the stroke's center to its edge.
     * const hardness = 0.0; // soft setting: steep decay
     * const opacityWeight = gaussian(normDist, hardness);
     *
     * // Use `opacityWeight` to modulate the alpha channel when blending the stroke.
     */
    function gaussian(normDist: number, hardness: number): number;
    /**
     * Generalized smoothstep function.
     *
     * This function is analogous to GLSL's built-in smoothstep (and its variant "smootherstep"),
     * but allows you to specify the order (N) for a customizable falloff curve.
     *
     * @param N - The order of the smoothStep (e.g., N=2 corresponds to the common "smootherstep").
     * @param x - A value in the range [0, 1].
     * @returns The smoothed value.
     */
    function smoothstep(N: number, x: number): number;
    /**
     * Computes the binomial coefficient using a generalized formulation of Pascal's Triangle.
     *
     * This function calculates the value of the binomial coefficient (often read as "a choose b") without
     * explicitly using factorials. It supports cases where `a` may be negative by using a generalized
     * formulation derived from Pascal's Triangle.
     *
     * @param a - The upper parameter in the binomial coefficient expression; can be negative.
     * @param b - The lower parameter (a non-negative integer) representing the number of selections.
     * @returns The computed binomial coefficient.
     *
     * @remarks
     * The calculation performed is equivalent to:
     * \[
     * \binom{a}{b} = \frac{a \cdot (a-1) \cdot \ldots \cdot (a-b+1)}{b!}
     * \]
     * This iterative approach avoids direct factorial computation, which allows for handling negative values for `a`.
     */
    function pascaltriangle(a: number, b: number): number;
    /**
     * Returns all integer pixel coordinates (x, y) along a straight line
     * between (x0, y0) and (x1, y1) using Bresenham's algorithm.
     *
     * @param a - start point in integer pixel coordinates (x, y).
     * @param b - end point in integer pixel coordinates (x, y).
     * @returns An array of {@link cmath.Vector2} objects for each pixel along the line.
     *
     * @example
     * ```ts
     * const linePixels = cmath.raster.bresenhamLine([10, 10], [15, 20]);
     * // linePixels => [
     * //   [10, 10],
     * //   [10, 11],
     * //   [10, 12],
     * //   ...
     * // ]
     * ```
     */
    function bresenham(a: cmath.Vector2, b: cmath.Vector2): Array<Vector2>;
    /**
     * Computes all integer pixel coordinates within a circle centered at `center` with radius `radius`.
     * Optionally, clips the points to the bounding box specified by `clipRect`.
     *
     * @param center - The center of the circle `[cx, cy]`.
     * @param radius - The radius of the circle in pixels.
     * @param clipRect - An optional `{ x, y, width, height }` rectangle for clipping.
     *                   If omitted, no clipping is applied.
     * @returns A list of `[x, y]` pixel coordinates inside the circle.
     *
     * @example
     * // Circle fill with no clipping
     * const pixels = circle([50, 50], 10);
     *
     * @example
     * // Circle fill, clipped to a rectangle at (40,40) of size 100x100
     * const clippedPixels = circle([50, 50], 10, { x: 40, y: 40, width: 100, height: 100 });
     */
    function circle(center: cmath.Vector2, radius: number, clipRect?: cmath.Rectangle): Array<cmath.Vector2>;
    function ellipse(center: cmath.Vector2, radius: cmath.Vector2): cmath.Vector2[];
    /**
     * Generates an array of integer pixel coordinates within a given rectangle.
     *
     * This function returns all pixel coordinates contained within the specified rectangle.
     * The rectangle is defined by its top-left corner (`x`, `y`) and its dimensions (`width`, `height`).
     *
     * @param rect - A rectangle defined by `{ x, y, width, height }`.
     * @returns An array of `[x, y]` tuples, where each tuple represents an integer pixel coordinate inside the rectangle.
     *
     * @example
     * ```ts
     * const rect = { x: 40, y: 35, width: 20, height: 30 };
     * const points = cmath.raster.rectangle(rect);
     * // points will contain coordinates for pixels within the rectangle spanning:
     * // x from 40 to 60 and y from 35 to 65.
     * ```
     */
    function rectangle(rect: cmath.Rectangle): cmath.Vector2[];
    /**
     * Performs a flood fill on a bitmap starting from the given coordinate.
     *
     * The algorithm fills contiguous pixels that match the target color (the color at the starting point)
     * with the provided fillColor using an iterative stack-based approach.
     *
     * **Note:** This function modifies the input bitmap's data directly.
     *
     * @param bitmap - The bitmap to fill.
     * @param pos - The x y coordinate to start filling.
     * @param fill - The color to fill with, as [r, g, b, a].
     *
     * @remarks
     * The function first checks whether the starting pixel's color is already identical to the fillColor.
     * If they match, it returns immediately without performing any fill operations.
     */
    function floodfill(bitmap: Bitmap, pos: cmath.Vector2, fill: Vector4): void;
  }
  namespace range {
    /**
     * Calculates the mean (average center) of multiple numerical ranges.
     *
     * @param ranges - A variable number of ranges, each represented as a `[start, end]` tuple.
     * @returns The mean center as a single number.
     *
     * @example
     * ```typescript
     * const meanCenter = cmath.range.mean([0, 10], [20, 30], [40, 50]);
     * console.log(meanCenter); // Output: 25
     * ```
     */
    function mean(...ranges: Range[]): number;
    function fromRectangle(rect: Rectangle, axis: cmath.Axis): Range;
    function length(range: Range): number;
    /**
     * returns 3 point chunk, [start, mid, end]
     * @param range
     * @returns
     */
    function to3PointsChunk(range: Range): [number, number, number];
    /**
     * Groups ranges by their uniform gaps.
     *
     * This function identifies subsets of ranges where the gaps between consecutive ranges
     * are consistent within a specified tolerance. Gaps are calculated as the distance
     * between the end of one range and the start of the next. Overlapping ranges are ignored.
     *
     * @param ranges - An array of numerical ranges, each represented as a `[start, end]` tuple.
     * @param tolerance - The allowable deviation for gaps to be considered uniform. Defaults to `0`.
     * @returns An array of grouped ranges with uniform gaps. Each group contains:
     *   - `loop`: The indices of the ranges in the group.
     *   - `min`: The minimum start value among the grouped ranges.
     *   - `max`: The maximum end value among the grouped ranges.
     *   - `gap`: The uniform gap between consecutive ranges (always non-negative). 0 when only one range is present.
     *
     * @example
     * ```typescript
     * const ranges: cmath.Range[] = [
     *   [0, 10],
     *   [15, 25],
     *   [30, 40],
     * ];
     * const result = cmath.range.groupRangesByUniformGap(ranges);
     * console.log(result);
     * // Output:
     * // [
     * //   { loop: [0], min: 0, max: 10, gap: 0 },
     * //   { loop: [1], min: 15, max: 25, gap: 0 },
     * //   { loop: [2], min: 30, max: 40, gap: 0 },
     * //   { loop: [0, 1], min: 0, max: 25, gap: 5 },
     * //   { loop: [0, 2], min: 0, max: 40, gap: 20 },
     * //   { loop: [1, 2], min: 15, max: 40, gap: 5 },
     * //   { loop: [0, 1, 2], min: 0, max: 40, gap: 5 },
     * // ]
     * ```
     *
     * @remarks
     * - The function uses the power set approach, which has exponential time complexity. It's recommended to use it with a reasonable number of ranges.
     * - Overlapping ranges are allowed as long as the gaps between their end and start points are consistent.
     * - The `tolerance` parameter allows for slight variations in gaps, which is useful in scenarios with floating-point precision issues.
     */
    function groupRangesByUniformGap(ranges: Range[], k?: number, tolerance?: number): {
      loop: number[];
      min: number;
      max: number;
      gap: number;
    }[];
  }
  namespace ext {
    namespace snap {
      /**
       * A Vector2 that can take null values for each axis.
       *
       * This is for representing snap points that is infinity (or ignore) in counter axis.
       *
       * E.g. for 2D snapping, but where each axis are snapped independently.
       */
      type AxisAlignedPoint = [number, number] | [number, null] | [null, number];
      type Snap1DResult = {
        /**
         * the distance (delta) needs to be applied to the agents to snap within the threshold.
         *
         * `Infinity` if no snap.
         *
         * @example
         *
         * const translated = agents.map((p) => p + distance);
         */
        distance: Scalar;
        /**
         * the indices of the agents that satisfied the snap.
         */
        hit_agent_indices: Scalar[];
        /**
         * the indices of the anchors that the agents snapped to.
         */
        hit_anchor_indices: Scalar[];
      };
      /**
       * Snaps an array of scalar points to the nearest target points within a specified threshold.
       *
       * @param agents - An array of scalar points to snap.
       * @param anchors - An array of existing scalar points to snap to.
       * @param threshold - The maximum allowed distance for snapping.
       * @param tolerance - The tolerance for delta matching.
       * @returns {Snap1DResult} The result of the snapping operation.
       */
      function snap1D(agents: Scalar[], anchors: Scalar[], threshold: Scalar, tolerance?: number): Snap1DResult;
      type Snap2DAxisonfig = {
        /**
         * false: no snap, otherwise threshold value.
         */
        x: false | number;
        /**
         * false: no snap, otherwise threshold value.
         */
        y: false | number;
      };
      type Sanp2DAxisAlignedResult = {
        x: cmath.ext.snap.Snap1DResult | null;
        y: cmath.ext.snap.Snap1DResult | null;
      };
      /**
       * Snaps an array of points to the nearest target point along each axis independently.
       * The snapping delta is computed for each axis separately and applied to all points.
       *
       * @param agents - An array of 2D points (Vector2) to snap.
       * @param anchors - An array of existing 2D points to snap to.
       * @param threshold - The maximum allowed single-axis distance for snapping.
       * @returns The snapped points and the delta applied:
       *          - `value`: The translated points.
       *          - `distance`: The delta vector applied to align the points.
       */
      function snap2DAxisAligned(agents: cmath.Vector2[], anchors: cmath.ext.snap.AxisAlignedPoint[], config: Snap2DAxisonfig, tolerance?: number): Sanp2DAxisAlignedResult;
      /**
       * Namespace for spacing-related snapping and range calculations.
       *
       * This module provides utilities for working with 1D ranges, calculating spaces between them,
       * and projecting new ranges based on existing ones.
       *
       * **Definitions & Design**
       * - loops
       *    - are aligned ranges with identical gaps (2 or more ranges). but for simplicity, we do this by combinations of ranges (exactly 2 ranges)
       * - each loop has a projected snap extension, `next` (`a`) and `center` (virtually a, b, and center, where b being mirror of a)
       *    - a projected loop data will contain multiple delta (space)
       *      - one is from 'this' loop, others from other loops' space, but within the same direction.
       *    - the delta can be interpreted as ...
       *      - a = loop[-1] + delta (the a point is last loop item (biggest) plus delta.
       *      - b = loop[0] - delta (b is mirrored a)
       *      - center = mean(loop[0].a, loop[-1].b)
       * - the hit test of the range will take direction 1 or -1 (mirrored)
       *    - the `a` testing is used for testing hit between `a` and input's `a`
       *    - the mirrored testing is used for testing hit between `b` (mirrored a) and input's `b`
       * - how to tell why it's snapped
       *    - when input's a, b or c is hit, it will contain to which loop it's hit. and the space (except c).
       *    - since the space can be originated from other loops, and multiple loops can have identical spaces, we can return all loops that contains that delta as original space, plus the hit one's loop
       *
       *
       * ```
       *                            1          2
       * range       |           [-----]    [-----]             |
       * space       |                 |----|                   |
       * projections |      |----|     |----|     |----|        |
       * targets     |      |             |            |        |
       * align       |     (b)           (c)          (a)       |
       * ```
       *
       * In above example, the new segment (range) `ab` have virtually 4 possible snap points to be evenly spaced.
       * - (a) point the `a` of the new segment can snap to.
       * - (b) point the `b` of the new segment can snap to.
       * - (c) point the `center` of the new segment can snap to. (if the ab is smaller than the space)
       *  - the sub-virtual `cb`, `ca` point will be calculated as new segment is determined.
       *  - (cb) `c - length / 2` point the `b` of the new segment can snap to. (if smaller than the space)
       *  - (ca) `c + length / 2` point the `a` of the new segment can snap to. (if smaller than the space)
       *
       * Additionally, in more than 2 segment cases, the space between certain combination can also be registered as a or b point.
       * For example,
       *
       * ```
       *                         1          2                   3
       * range       |        [-----]    [-----]             [-----]        |
       * space       |              |----|     |-------------|              |
       *             |               (1_2)          (2_3)                   |
       * projections |   |----|     |----|     |----|              |----|   |
       * reason      |   (1_2)      (1_2)      (1_2)               ^(1_2)   | // the ^(1_2) is applied to 3rd
       * ```
       *
       * This way, we can provide additional ux-friendly snapping points for the user.
       */
      namespace spacing {
        type ProjectionPoint = {
          /**
           * position
           */
          p: number;
          /**
           * origin position
           */
          o: number;
          /**
           * forwared loop (gap) index (including self)
           *
           * -1 if not forwarded
           */
          fwd: number;
        };
        type DistributionGeometry1D = {
          /**
           * the ranges to calculate the space from
           */
          ranges: cmath.Range[];
          /**
           * combinations of ranges (overlapping ignored)
           * @example
           * ```
           * ranges = [[0, 10], [20, 30], [40, 50]];
           * loops = [[0, 1], [0, 2], [1, 2]];
           * ```
           */
          loops: number[][];
          /**
           * index-aligned gaps of each loops
           *
           * @example
           *
           * ```
           * // gaps[0] is the gap between loops[0][0] and loops[0][1]
           * ranges = [[0, 10], [20, 30], [40, 50]];
           * loops = [[0, 1], [0, 2], [1, 2]];
           * gaps = [10, 30, 10];
           * ```
           */
          gaps: number[];
          /**
           * index-aligned projections of `a` points and the gap value applied to this point
           *
           * this is not conidered as a "range" since [0] and [1] is not ensured to be in the same direction. ([1] can be smaller than [0])
           *
           * from [1] anchor, the delta is applied, resulting in the [0] point.
           */
          a: ProjectionPoint[][];
          /**
           * index-aligned projections of `b` points
           *
           * this is not conidered as a "range" since [0] and [1] is not ensured to be in the same direction. ([1] can be smaller than [0])
           *
           * from [1] anchor, the delta is applied, resulting in the [0] point.
           */
          b: ProjectionPoint[][];
        };
        /**
         * calculates the space between two ranges, returns a set of projections of the next range for each combination.
         *
         * @param ranges the ranges to calculate the space from
         * @param agentLength optional agent input. the size of this agent will be used for plotting center-originated points. (if the agent fits into the gap)
         *
         * @remarks
         * - ignores the combination if overlaps (to ensure positive space)
         */
        function plotDistributionGeometry(ranges: cmath.Range[], agentLength?: Scalar): DistributionGeometry1D;
      }
    }
    namespace movement {
      /**
       * indicates a movement within 2D space.
       *
       * each can be null, when null, it treated as 0 or ignored depending on the context.
       *
       * this is to indicate the context of the movement vector, where 0 means no movement, but null means to ignore that axis.
       */
      type Movement = [number | null, number | null];
      /**
       * normalizes the movement vector. null is treated as 0.
       * @returns a signed {@link Vector2}
       */
      function normalize(m: Movement): Vector2;
      /**
       * returns a new movement vector with single axis locked by dominance.
       *
       * the other axis will be null.
       *
       * @param m
       * @returns
       */
      function axisLockedByDominance(m: Movement): Movement;
    }
    namespace viewport {
      /**
       * Opinionated transform-to-fit for a single canvas zoom.
       * Supports uniform or per-side margin, using the smaller scale to fully fit.
       *
       * @param viewport - The viewport rectangle: { x, y, width, height }
       * @param target - The bounding box of the contents: { x, y, width, height }
       * @param margin - Margin can be a single number (uniform) or [top, right, bottom, left].
       * @returns A 2D transform matrix [[scale, 0, tx], [0, scale, ty]] that fits `target` into `viewport`.
       *
       * @example
       * const viewport = { x: 0, y: 0, width: 800, height: 600 };
       * const target = { x: 100, y: 50, width: 400, height: 400 };
       * const t = transformToFit(viewport, target, [50, 20, 50, 20]);
       * // => e.g. [
       * //    [0.75, 0, 60],
       * //    [0, 0.75, 40],
       * // ]
       */
      function transformToFit(viewport: cmath.Rectangle, target: cmath.Rectangle, margin?: number | [number, number, number, number]): cmath.Transform;
    }
  }
  namespace ui {
    /**
     * `['x', 100]` will draw a y-axis line at x=100
     */
    type Rule = [axis: "x" | "y", offset: number];
    type Point = {
      label?: string;
      x: number;
      y: number;
    };
    type Line = {
      label?: string;
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    };
    function transformPoint(point: cmath.ui.Point, transform: cmath.Transform): cmath.ui.Point;
    function transformLine(line: cmath.ui.Line, transform: cmath.Transform): cmath.ui.Line;
    /**
     * Continuous parameterized 1D curve — a continuous map from
     * `t ∈ [0, 1]` to `R²`. Two kinds today:
     *
     * - `segment` — straight line between two points.
     * - `arc` — circular arc parameterized by `from` → `to` angles in
     *   radians.
     *
     * Each carries one scalar parameter `t ∈ [0, 1]` — 0 at the
     * curve's start, 1 at its end. Position recovery: {@link
     * evaluateCurve}; inverse projection: {@link projectPointOnCurve}.
     *
     * For DISCRETE constraint sets — a finite set of valid positions
     * with no interpolation between them, technically NOT a curve —
     * see {@link PointSet}.
     */
    type Curve = {
      kind: "segment";
      a: cmath.Vector2;
      b: cmath.Vector2;
    } | {
      kind: "arc";
      center: cmath.Vector2;
      radius: number; /** Start angle in radians (CCW from +x). `t = 0` lands here. */
      from: number;
      /** End angle in radians. `t = 1` lands here. Sweep is linear
       *  in `(to - from)`; for a well-formed arc supply `to >= from`
       *  so the parameterization runs counter-clockwise. A negative
       *  sweep returns the start position from
       *  {@link projectPointOnCurve} (degenerate). */
      to: number;
    };
    /**
     * Finite, ORDERED set of points — the discrete sibling of
     * {@link Curve}. NOT a curve: a point set has no continuous
     * parameterization, no tangent, no length in the geometric sense.
     *
     * Conceptually `t ∈ [0, 1]` maps to a point by index:
     * `points[round(t · (n − 1))]`. The semantic is "index", not
     * "fraction along the curve". Projection snaps to the nearest
     * point by Euclidean distance.
     */
    type PointSet = {
      kind: "points";
      points: readonly cmath.Vector2[];
    };
    /**
     * Evaluate a curve at `t ∈ [0, 1]`. Out-of-range `t` is clamped —
     * `t = 1.5` returns the curve's endpoint, not an extrapolation.
     *
     * - segment: linear interpolation between `a` and `b`.
     * - arc: angle is `from + t · (to - from)`, position on the circle
     *   of radius `radius` around `center`.
     *
     * Pure. Pair with {@link projectPointOnCurve} for the inverse.
     */
    function evaluateCurve(curve: cmath.ui.Curve, t: number): cmath.Vector2;
    /**
     * Evaluate a point set at `t ∈ [0, 1]` — round to the nearest
     * index and return that point. `t` is clamped before rounding.
     * Empty set returns `[0, 0]` (degenerate convention).
     */
    function evaluatePointSet(set: cmath.ui.PointSet, t: number): cmath.Vector2;
    /**
     * Project a doc-space point onto a curve. Returns the closest
     * parametric position `t ∈ [0, 1]` and the corresponding `position`
     * on the curve. A point past either endpoint clamps to that
     * endpoint — no extrapolation.
     *
     * - segment: delegates to {@link cmath.segment.project_point}
     *   (perpendicular foot clamped to `[a, b]`).
     * - arc: angle of `point` relative to `center`, normalized into
     *   `[from, from + 2π)`, then clamped to `[from, to]` so points
     *   outside the arc's sweep clamp to the nearer endpoint.
     *
     * Degenerate curves (zero-length segment, zero-radius arc,
     * non-positive arc sweep) return `{ t: 0, position: <curve start> }`.
     */
    function projectPointOnCurve(curve: cmath.ui.Curve, point: cmath.Vector2): {
      t: number;
      position: cmath.Vector2;
    };
    /**
     * Project a point onto a {@link PointSet} — find the nearest
     * point by Euclidean distance. Returns the snapped position and a
     * normalized index `t = i / (n − 1)`, matching the `t ∈ [0, 1]`
     * convention of {@link evaluatePointSet}.
     *
     * Linear scan; n is assumed small (no spatial index).
     */
    function projectPointOnSet(set: cmath.ui.PointSet, point: cmath.Vector2): {
      t: number;
      position: cmath.Vector2;
    };
    /**
     * Returns one of `rect`'s two diagonals, selected by `direction`.
     *
     * For corner directions the diagonal runs from the *opposite* corner
     * to the named corner (the named corner is the line's `(x2, y2)`):
     *
     * - `"ne"` → BL → TR
     * - `"se"` → TL → BR
     * - `"nw"` → BR → TL
     * - `"sw"` → TR → BL
     *
     * Edge directions canonicalize to the diagonal of an adjacent corner-pair:
     *
     * - `"n"` → BL → TR (the `"ne"` diagonal)
     * - `"s"` → TL → BR (the `"se"` diagonal)
     * - `"e"` → TL → BR (the `"se"` diagonal)
     * - `"w"` → TR → BL (the `"sw"` diagonal)
     *
     * Axis-aligned. For a rotated rect, apply the rect's transform to the
     * returned line.
     *
     * @param rect - the rectangle
     * @param direction - which corner / edge selects the diagonal
     * @returns the diagonal as a `ui.Line` (no label)
     */
    function diagonalForDirection(rect: cmath.Rectangle, direction: cmath.CardinalDirection): cmath.ui.Line;
    /**
     * Ensures that (x1, y1) <= (x2, y2) in a canonical way.
     *
     * - If `line.x1 > line.x2`, swaps the endpoints.
     * - If `line.x1 === line.x2` but `y1 > y2`, swaps the endpoints.
     *
     * This is often useful so that two line segments describing the
     * "same" geometric positions will have identical (x1, y1, x2, y2).
     *
     * @param line - The line to be normalized, e.g. `{ x1, y1, x2, y2, label? }`.
     * @returns A new `Line` object with possibly swapped endpoints, ensuring
     *          `(x1 < x2)` or `(x1 === x2 && y1 <= y2)`.
     */
    function normalizeLine<T extends {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      label?: string;
    }>(line: T): T;
    /**
     * Formats a number to the specified precision only when needed.
     *
     * If the number, after rounding, is an integer (i.e. no meaningful fractional part remains),
     * the function returns the integer as a string without trailing zeros. Otherwise, it formats the
     * number to the provided decimal precision using `toFixed()`.
     *
     * @param num - The number to format.
     * @param precision - The number of decimal places to round to.
     * @returns The formatted number as a string. For example:
     * - `formatNumber(1, 1)` returns `"1"`.
     * - `formatNumber(1.2222, 1)` returns `"1.2"`.
     * - `formatNumber(9.0001, 2)` returns `"9"`.
     *
     * @example
     * // Returns "1" because 9.0001 rounds to 9 with 2 decimal precision and no fractional part remains.
     * formatNumber(9.0001, 2);
     *
     * @example
     * // Returns "9.12" because the rounded value has a non-zero fractional part.
     * formatNumber(9.1234, 2);
     */
    function formatNumber(num: number, precision: number): string;
    namespace gradient {
      /**
       * Control points defining a gradient in normalized space.
       *
       * The points `A`, `B`, and `C` correspond to the gradient handle
       * positions and are defined in a unit square where the top-left is (0,0)
       * and the bottom-right is (1,1).
       */
      interface ControlPoints {
        A: cmath.Vector2;
        B: cmath.Vector2;
        C: cmath.Vector2;
      }
      /**
       * Supported gradient paint types.
       */
      type GradientType = "linear_gradient" | "radial_gradient" | "sweep_gradient" | "diamond_gradient";
      /**
       * Returns the canonical control points for a gradient type.
       *
       * These points define the identity transform for the gradient.
       */
      function baseControlPoints(type: GradientType): ControlPoints;
      /**
       * Computes an affine transform matrix that maps the canonical control
       * points of a gradient to the provided control points.
       */
      function transformFromControlPoints(points: ControlPoints, type: GradientType): cmath.Transform;
      /**
       * Produces a relative 2D transform matrix for a linear gradient at `deg` degrees
       * in a normalized 1x1 space (Figma-like behavior).
       */
      function computeRelativeLinearGradientTransform(deg: number): Transform;
    }
  }
  /**
   * Parametric handle — a scalar `value` constrained to a 1D track
   * (a {@link cmath.ui.Curve} or {@link cmath.ui.PointSet}), and the
   * collection / grouping primitives that compose them.
   *
   * Conventions:
   *
   * - Strictly 1D `value` on a 1D track. Multi-axis affordances
   *   (Bezier tangents, gradient stops) are a different shape.
   * - Coincidence groups are opt-in via {@link ParametricHandleGroup}.
   *   No built-in collapsing.
   * - Discretization (stepped values) is `domain.step`, not a separate
   *   primitive.
   */
  namespace parametric {
    /**
     * A scalar `value` constrained to a 1D `track`, optionally bounded
     * and quantized by `domain`, optionally floored away from `t = 0`
     * by `inset`.
     *
     * The mapping is `value → t ∈ [0, 1]` via `domain`, and `t →
     * position` via {@link cmath.ui.evaluateCurve} (continuous tracks)
     * or {@link cmath.ui.evaluatePointSet} (discrete tracks). The
     * inverse direction projects an external point back to `t`, then
     * back to `value`, so the stored scalar stays in its own units
     * (radii, angles, counts, …) without the track's parameterization
     * leaking out.
     */
    interface ParametricHandle {
      /** Stable identifier within the set this handle belongs to. */
      id: string;
      /** The 1D track the handle rides — a continuous curve OR a
       *  discrete point set. */
      track: cmath.ui.Curve | cmath.ui.PointSet;
      /** Current scalar value. Mapped to `t ∈ [0, 1]` via `domain`. */
      value: number;
      /** Optional value bounds + quantization. Defaults: `min = 0`,
       *  `max = 1`. `step` quantizes the emitted value (`step: 1`
       *  snaps to integers, etc.). */
      domain?: {
        min?: number;
        max?: number;
        step?: number;
      };
      /** Optional minimum distance from `t = 0` along the track, in
       *  the track's own units (the same units as `track.a` / `track.b`
       *  for a segment, `track.radius` for an arc). When `value` would
       *  place the handle inside this neighborhood of `t = 0`, the
       *  rendered position is floored to the inset. Consumers
       *  expressing the floor in another unit system (e.g. screen-px)
       *  convert to track-units before populating this field. Omit to
       *  disable. */
      inset?: number;
    }
    /**
     * Optional grouping declaration. When two or more handles in the
     * same group coincide in track-space (the segments / arcs collapse
     * to one point), a consumer may treat them as one hit target and
     * disambiguate the intended handle by `policy`.
     *
     * `direction-resolved` — pick the handle whose track tangent at
     * the coincident position is most aligned with the disambiguating
     * direction.
     */
    interface ParametricHandleGroup {
      ids: readonly string[];
      policy: "direction-resolved";
    }
    /**
     * A set of parametric handles, optional groupings, and an
     * optional `transform`. When `transform` is set, handle tracks are
     * expressed in local coordinates; consumers apply the transform to
     * obtain positions in the outer frame.
     */
    interface ParametricHandleSet {
      handles: readonly ParametricHandle[];
      groups?: readonly ParametricHandleGroup[];
      transform?: cmath.Transform;
    }
  }
  namespace polygon {
    type Polygon = Vector2[];
    /**
     * Determines whether a point lies inside a polygon using the ray-casting algorithm.
     *
     * Points on the boundary are considered inside.
     */
    function pointInPolygon(point: Vector2, polygon: Polygon): boolean;
  }
}
//#endregion
//#region ../grida-canvas-vn/dist/index.d.ts
//#region vn.d.ts
type Vector2$1 = cmath.Vector2;
declare namespace vn {
  /**
   * Represents a loop as an array of segment indices.
   */
  type Loop = number[];
  /**
   * Represents a vertex in the vector network.
   *
   * For basic vertices, this is a simple `[x, y]` tuple (Vector2).
   * For vertices with decoration overrides, use {@link VectorNetworkVertexWithOverrides}.
   */
  type VectorNetworkVertex = Vector2$1;
  /**
   * Represents a point on a specific segment of the vector network.
   *
   * This type provides a minimal representation of a location on a curve segment,
   * using parametric coordinates that can be evaluated to get the actual position
   * on the Bézier curve.
   *
   * @example
   * ```ts
   * const pointOnSegment: PointOnSegment = {
   *   segment: 0,  // Index of the segment in the vector network
   *   t: 0.5       // Parametric value: 0 = start, 1 = end, 0.5 = middle
   * };
   *
   * // Evaluate to get the actual position
   * const position = cmath.bezier.evaluate(
   *   vertices[segments[0].a],
   *   vertices[segments[0].b],
   *   segments[0].ta,
   *   segments[0].tb,
   *   pointOnSegment.t
   * );
   * ```
   *
   * @see {@link cmath.bezier.evaluate} - For evaluating the point to get its position
   * @see {@link cmath.bezier.project} - For projecting a point onto a segment
   */
  type PointOnSegment = {
    /**
     * Index of the segment in the vector network's segments array.
     *
     * This references a specific segment within the vector network,
     * allowing the point to be located on a particular curve.
     *
     * @example
     * ```ts
     * const segment = vectorNetwork.segments[pointOnSegment.segment];
     * ```
     */
    segment: number;
    /**
     * Parametric value along the segment, ranging from 0 to 1.
     *
     * - `0` represents the start of the segment (vertex `a`)
     * - `1` represents the end of the segment (vertex `b`)
     * - `0.5` represents the middle of the segment
     * - Values outside [0, 1] are valid but represent points beyond the segment
     *
     * This value is used with Bézier curve evaluation functions to determine
     * the exact position on the curve.
     *
     * @example
     * ```ts
     * // Get the position at 25% along the segment
     * const position = cmath.bezier.evaluate(
     *   vertices[segment.a],
     *   vertices[segment.b],
     *   segment.ta,
     *   segment.tb,
     *   0.25
     * );
     * ```
     */
    t: number;
  };
  /**
   * Represents a point on a segment with its evaluated position.
   *
   * This type extends `PointOnSegment` to include the computed position
   * on the curve, eliminating the need to re-evaluate the curve when
   * the point is needed for measurements or display.
   *
   * @example
   * ```ts
   * const evaluatedPoint: EvaluatedPointOnSegment = {
   *   segment: 0,  // Index of the segment
   *   t: 0.5,      // Parametric value (middle of segment)
   *   point: [10, 20]  // Evaluated position in local coordinates
   * };
   * ```
   */
  type EvaluatedPointOnSegment = PointOnSegment & {
    /**
     * Resolved point on the curve in local coordinates (relative to vector network origin).
     *
     * This is the actual position on the curve at the parametric value `t`.
     * Storing this eliminates the need to re-evaluate the curve when the point
     * is needed for measurements or display.
     *
     * @example
     * ```ts
     * // Use the pre-computed position directly
     * const position = evaluatedPoint.point;
     * ```
     */
    point: Vector2$1;
  };
  type AbsoluteTangentControlOnSegment = {
    segment: number;
    control: "ta" | "tb";
    point: Vector2$1;
  };
  /**
   * Represents a segment in the vector network, connecting two vertices.
   *
   * @property a - Index of the starting vertex.
   * @property b - Index of the ending vertex.
   * @property ta - Tangent at the starting vertex (relative to the vertex).
   * @property tb - Tangent at the ending vertex (relative to the vertex).
   */
  type VectorNetworkSegment = {
    a: number;
    b: number;
    ta: Vector2$1;
    tb: Vector2$1;
  };
  /**
   * Represents the vector network, consisting of vertices and segments.
   *
   * @example
   * ```ts
   * const example: VectorNetwork = {
   *   vertices: [
   *     { x: 10, y: 10 }, // Index 0: Starting point
   *     { x: 50, y: 10 }  // Index 1: End point
   *   ],
   *   segments: [
   *     {
   *       a: 0, // Start at vertices[0] (10, 10)
   *       b: 1, // End at vertices[1] (50, 10)
   *       ta: { x: 10, y: 10 }, // Tangent relative to start (absolute: 20, 20)
   *       tb: { x: -10, y: 10 } // Tangent relative to end (absolute: 40, 20)
   *     }
   *   ]
   * };
   * ```
   * This example corresponds to the SVG path:
   * `M 10 10 C 20 20, 40 20, 50 10`
   *
   * ----
   *
   * ## Guidelines for Manipulating a Vector Network
   *
   * A vector network represents a graph-like structure of vertices and segments.
   * Proper manipulation ensures correct rendering and functionality.
   *
   * ## Requirements
   *
   * 1. **Order of Vertices and Segments**:
   *    - **Sequential Paths**: The order of vertices and segments must be respected for rendering strokes or paths.
   *      - Example: Open or closed paths where the visual flow depends on the sequence.
   *    - **Graph-Like Structures**: Order does not matter if the network is used as a graph with arbitrary connections.
   *
   * 2. **Region Construction**:
   *    - Loops in regions (`VectorRegion.loops`) must maintain a consistent order.
   *    - Ensure correct winding rules (clockwise or counterclockwise) for proper fill rendering.
   *
   * 3. **Adding/Removing Vertices or Segments**:
   *    - After adding or removing elements, normalize the data:
   *      - Update any dependent structures, such as `VectorRegion.loops`.
   *      - Ensure indices in segments (`a`, `b`) remain valid.
   *
   * 4. **Consistency in Indices**:
   *    - Segments (`a`, `b`) must reference valid indices in the `vertices` array.
   *    - Avoid leaving unused or orphaned vertices.
   *
   * 5. **Control Points (Tangents)**:
   *    - Ensure that control points (`ta`, `tb`) are relative to their respective vertices.
   *    - Invalid or mismatched control points can lead to incorrect Bézier curve rendering.
   *
   * 6. **Validation After Manipulation**:
   *    - Check for disconnected segments or invalid references to vertices.
   *    - Ensure all closed regions are properly defined, with no overlapping or missing paths.
   *
   * 7. **Rendering Context**:
   *    - Understand the context of the vector network:
   *      - Sequential paths (order matters).
   *      - Arbitrary connections (order may not matter).
   *
   * ## Best Practices
   *
   * - Always maintain a consistent order for paths or regions.
   * - Normalize the vector network data after edits to avoid rendering issues.
   * - Use explicit indexing (`a`, `b`) to define segment connections instead of relying on order alone.
   * - Validate data integrity before rendering or exporting to formats like SVG.
   */
  interface VectorNetwork {
    vertices: VectorNetworkVertex[];
    segments: VectorNetworkSegment[];
  }
  /**
   * Result of flattening a shape node to a vector network.
   *
   * When `corner_radius` is present, the vector network contains straight
   * segments and corner radius should be applied as a rendering effect
   * (e.g. polygon, star).
   *
   * When `corner_radius` is absent, corner geometry is already baked into
   * the vector network as Bézier curves (e.g. rectangle, ellipse).
   */
  interface FlattenResult extends VectorNetwork {
    corner_radius?: number;
  }
  /**
   * tangent mirroring mode
   *
   * **description based on moving ta (applies the same vice versa for tb)**
   * - `none` - no mirroring
   *   - moving ta will not affect tb at all.
   * - `angle` - mirror the angle of the tangent, but keep the length
   *   - moving ta will affect tb, but only the **exact (inverted)** angle will be mirrored.
   * - `all` - mirror the angle and length of the tangent
   *   - moving ta will affect tb, and mirror the **exact (inverted)** value of ta, not by the delta of angle/length.
   * - `auto` - automatically decide whether to mirror based on the current
   *   relationship of the tangents. If they are already mirrored, behaves like
   *   `all`, if only the angle is mirrored behaves like `angle`, otherwise acts as `none`.
   */
  type StrictTangentMirroringMode = "none" | "angle" | "all";
  type TangentMirroringMode = StrictTangentMirroringMode | "auto";
  /**
   * Configuration options for segment splitting operations.
   */
  interface SplitSegmentConfig {
    /**
     * Whether to preserve zero tangents when possible.
     *
     * When `true`, if the original segment has zero tangents, the split segments
     * will also have zero tangents, avoiding the introduction of unnecessary
     * tangent controls that might confuse users.
     *
     * When `false`, the mathematically accurate de Casteljau's algorithm is used,
     * which may introduce non-zero tangents even for originally straight segments.
     *
     * @defaultValue true
     */
    preserveZero?: boolean;
  }
  /**
   * infer the mirroring mode from two tangents
   *
   * @param ta tangent a
   * @param tb tangent b
   *
   * @remarks
   * When either tangent is the zero vector, there is no meaningful direction
   * or length to mirror, so this returns `"none"`.
   */
  function inferMirroringMode(ta: Vector2$1, tb: Vector2$1): StrictTangentMirroringMode;
  interface OptimizationConfig {
    /**
     * Maximum distance between two vertices for them to be considered identical.
     *
     * @defaultValue 0
     */
    vertex_tolerance: number;
    /**
     * Remove vertices that are not referenced by any segment.
     *
     * @defaultValue true
     */
    remove_unused_verticies: boolean;
  }
  /**
   * Open chain of `n` vertices joined by `n - 1` zero-tangent segments.
   *
   * Constructor used by `<polyline points="…">` and `<line x1 y1 x2 y2>` —
   * a line is a degenerate polyline with `n = 2`. Vertices are kept in
   * input order; coordinates are not deduped, so callers wanting unique
   * vertices should clean inputs first.
   */
  function fromPolyline(points: ReadonlyArray<Vector2$1>): VectorNetwork;
  /**
   * Closed chain of `n` vertices joined by `n` zero-tangent segments — the
   * `n`-th segment closes the loop (`last → 0`).
   *
   * Constructor used by `<polygon points="…">`. The closing segment is a
   * regular `VectorNetworkSegment`; callers that need to round-trip back to
   * `points="…"` (where the close is implicit, not enumerated) tag it
   * outside this layer (see `path-edit/model.ts` `SegmentMeta.is_close_segment`).
   */
  function fromPolygon(points: ReadonlyArray<Vector2$1>): VectorNetwork;
  /**
   * @deprecated Use {@link fromPolyline}. Kept as an alias for existing
   * call sites; remove once they migrate.
   */
  function polyline(points: Vector2$1[]): VectorNetwork;
  /**
   * @deprecated Use {@link fromPolygon}. Kept as an alias for existing
   * call sites; remove once they migrate.
   */
  function polygon(points: Vector2$1[]): VectorNetwork;
  class VectorNetworkEditor {
    /**
     * Optimizes a {@link VectorNetwork} by removing duplicate vertices and
     * segments, optionally removing unused vertices.
     *
     * Also known as *simplify* or *deduplicate*, this method normalizes the
     * network by merging vertices that share the same coordinates and by
     * collapsing segments with identical endpoints and tangents. The input
     * network is not mutated; a new, optimized network is returned instead.
     *
     * ## Deduplication Criteria
     *
     * - **Vertices**: Two vertices are considered duplicates if they have identical coordinates.
     * - **Segments**: Two segments are considered duplicates if they have:
     *   - Identical endpoint indices (after vertex deduplication and index remapping)
     *   - Identical tangent control points (`ta` and `tb` values)
     *
     * Segment orientation is preserved - a segment `a -> b` is considered different from `b -> a`.
     * The deduplication process first remaps segment indices to account for merged vertices, then
     * removes segments with identical geometry.
     *
     * @param net - The network to optimize.
     * @param config - Optimization options.
     * @returns A new {@link VectorNetwork} without duplicate or unused
     *          vertices and segments.
     */
    static optimize(net: VectorNetwork, config?: OptimizationConfig): VectorNetwork;
    /**
     * Creates a new {@link VectorNetwork} by combining two networks into one.
     *
     * The resulting network is optimized via {@link VectorNetworkEditor.optimize}
     * so that duplicate vertices or segments are removed. Segment orientation
     * is respected, meaning that a segment `a -> b` is considered different
     * from `b -> a`.
     *
     * @param a The base network.
     * @param b The network to merge into {@code a}.
     * @returns A new network containing the union of {@code a} and {@code b}.
     */
    static union(a: VectorNetwork, b: VectorNetwork, config?: OptimizationConfig | null): VectorNetwork;
    /**
     * Translates every vertex in a {@link VectorNetwork} by the given delta.
     *
     * The returned network is a new object with all vertex positions shifted by
     * the provided offset. Segments and their tangents are preserved.
     *
     * @param net - The network to translate.
     * @param delta - The `[dx, dy]` offset applied to each vertex.
     * @returns A new {@link VectorNetwork} with translated vertices.
     */
    static translate(net: VectorNetwork, delta: Vector2$1): VectorNetwork;
    /**
     * Converts a non-planar vector network into a planar network by detecting and resolving
     * segment intersections.
     *
     * **Planarization** is the process of transforming a vector network that contains
     * crossing segments into one where all segments only intersect at their endpoints
     * (vertices). This is essential for proper rendering, boolean operations, and
     * fill rule calculations.
     *
     * ## What is Planarization?
     *
     * A **planar network** is one where:
     * - All segments lie in a single 2D plane
     * - Segments only intersect at shared vertices
     * - No segments cross in the middle (transverse intersections)
     *
     * A **non-planar network** may have:
     * - Segments that cross each other at non-vertex points
     * - Ambiguous fill regions due to overlapping segments
     * - Inconsistent rendering behavior
     *
     * ## How Planarization Works
     *
     * 1. **Self-Intersection Detection**: Finds self-intersections within individual segments
     *    using the {@link cmath.bezier.intersection.single.intersection} algorithm
     * 2. **Cross-Intersection Detection**: Finds all pairwise intersections between segments
     *    using the {@link cmath.bezier.intersection.intersections} algorithm
     * 3. **Segment Splitting**: At each intersection point, splits the crossing segments
     *    into multiple sub-segments
     * 4. **Vertex Creation**: Creates new vertices at intersection points
     * 5. **Topology Update**: Updates segment connectivity to maintain the network structure
     *
     * ## Intersection Types Handled
     *
     * - **Self-Intersections**: A single curve intersects itself (figure-8 curves, loops)
     * - **Transverse**: Segments cross at a single point (most common)
     * - **Tangent**: Segments touch without crossing (may be preserved or split)
     * - **Endpoint**: Segments meet at a shared vertex (no action needed)
     * - **Overlap**: Segments share a common portion (creates multiple intersection points)
     *
     * ## Use Cases
     *
     * - **Boolean Operations**: Union, intersection, difference operations require planar networks
     * - **Fill Rendering**: Ensures consistent fill behavior with even-odd or non-zero rules
     * - **Path Simplification**: Removes redundant crossings for cleaner geometry
     * - **SVG Export**: Many SVG renderers expect planar paths
     *
     * ## Performance Considerations
     *
     * - Time complexity: O(n²) where n is the number of segments
     * - Uses spatial indexing for efficiency when possible
     * - Intersection detection is the most computationally expensive step
     * - Consider using {@link VectorNetworkEditor.optimize} after planarization
     *
     * ## Example
     *
     * ```ts
     * // Create a network with crossing segments
     * const network = new VectorNetworkEditor([
     *   [0, 0], [100, 100],  // diagonal segment
     *   [0, 100], [100, 0]   // crossing diagonal
     * ]);
     *
     * // Before planarization: segments cross in the middle
     * console.log(network.segments.length); // 2 segments
     *
     * // After planarization: segments split at intersection
     * network.planarize();
     * console.log(network.segments.length); // 4 segments (split at crossing)
     * ```
     *
     * ## Related Methods
     *
     * - {@link VectorNetworkEditor.optimize} - Removes duplicates after planarization
     * - {@link VectorNetworkEditor.union} - Boolean operations on planar networks
     * - {@link cmath.bezier.intersection.intersections} - Core intersection detection algorithm
     *
     * @remarks
     * This method modifies the vector network in-place. If you need to preserve
     * the original network, create a copy before calling this method.
     *
     * The planarization process may significantly increase the number of vertices
     * and segments, especially for networks with many crossings. Consider the
     * memory and performance implications for large networks.
     *
     * @param net - The vector network to planarize
     * @param config - Configuration options for segment splitting operations
     * @returns A new planarized {@link VectorNetwork}
     *
     * @see {@link cmath.bezier.intersection.single.intersection} - For self-intersection detection
     * @see {@link cmath.bezier.intersection.intersections} - For cross-intersection detection
     * @see {@link VectorNetworkEditor.optimize} - For post-planarization cleanup
     */
    static planarize(net: VectorNetwork, config?: SplitSegmentConfig): VectorNetwork;
    private _vertices;
    private _segments;
    constructor(value?: VectorNetwork);
    get vertices(): VectorNetworkVertex[];
    get segments(): VectorNetworkSegment[];
    get value(): VectorNetwork;
    findVertex(p: Vector2$1): number | null;
    /**
     * Optimizes the current network in-place by removing duplicate vertices and
     * segments.
     *
     * This is the instance counterpart to
     * {@link VectorNetworkEditor.optimize | VectorNetworkEditor.optimize()} and
     * is sometimes referred to as *simplify* or *deduplicate*.
     *
     * @param config - Optimization options.
     * @returns The optimized {@link VectorNetwork}.
     */
    optimize(config?: OptimizationConfig): VectorNetwork;
    /**
     * Converts the current vector network into a planar network by detecting and resolving
     * segment intersections in-place.
     *
     * This is the instance counterpart to
     * {@link VectorNetworkEditor.planarize | VectorNetworkEditor.planarize()}.
     * Unlike the static method, this modifies the current network instance directly.
     *
     * **Planarization** transforms a network with crossing segments into one where
     * all segments only intersect at their endpoints (vertices). This is essential
     * for proper rendering, boolean operations, and fill rule calculations.
     *
     * ## What Happens During Planarization
     *
     * 1. **Self-Intersection Detection**: Finds self-intersections within individual segments
     *    using the {@link cmath.bezier.intersection.single.intersection} algorithm
     * 2. **Cross-Intersection Detection**: Finds all pairwise intersections between segments
     *    using the {@link cmath.bezier.intersections} algorithm
     * 3. **Segment Splitting**: At each intersection point, splits the crossing segments
     *    into multiple sub-segments
     * 4. **Vertex Creation**: Creates new vertices at intersection points
     * 5. **Topology Update**: Updates segment connectivity to maintain the network structure
     * 6. **Optimization**: Automatically optimizes the result to remove duplicates
     *
     * ## Example
     *
     * ```ts
     * const editor = new VectorNetworkEditor(network);
     *
     * // Before: network has crossing segments and self-intersecting curves
     * console.log(editor.segments.length); // 2 segments
     *
     * // After: segments split at intersections (including self-intersections)
     * editor.planarize();
     * console.log(editor.segments.length); // 4+ segments (split at crossings)
     * ```
     *
     * @param config - Configuration options for segment splitting operations
     * @returns The planarized {@link VectorNetwork} (same as the modified instance)
     *
     * @remarks
     * This method modifies the current network instance in-place. If you need to
     * preserve the original network, create a copy before calling this method.
     *
     * The planarization process may significantly increase the number of vertices
     * and segments, especially for networks with many crossings or self-intersections.
     * Consider the memory and performance implications for large networks.
     *
     * @see {@link VectorNetworkEditor.planarize} - Static version that returns a new network
     * @see {@link cmath.bezier.intersection.single.intersection} - For self-intersection detection
     * @see {@link cmath.bezier.intersections} - For cross-intersection detection
     */
    planarize(config?: SplitSegmentConfig): VectorNetwork;
    /**
     * Creates a packed {@link VectorNetwork} containing only the specified
     * vertices and segments from the current network.
     *
     * The copied network is normalized through
     * {@link VectorNetworkEditor.optimize}, ensuring that vertex indices are
     * re-packed starting from zero and that duplicate vertices or segments are
     * removed. Vertices referenced by the copied segments are automatically
     * included. Vertices explicitly provided in the selection are preserved
     * even if they are not part of any segment unless
     * `config.remove_unused_verticies` is set to `true`.
     *
     * @param selection - Indices of elements to copy.
     * @param selection.vertices - Vertex indices to include. These vertices are
     *   always copied and are kept even if no segment references them.
     * @param selection.segments - Segment indices to include. The endpoint
     *   vertices for these segments are automatically added to the selection.
     * @param config - Optimization options applied to the resulting network.
     *   Defaults to keeping unused vertices.
     * @returns A new, packed {@link VectorNetwork} containing the selected
     *   subset of this editor's network.
     */
    copy(selection: {
      vertices?: number[];
      segments?: number[];
    }, config?: OptimizationConfig): VectorNetwork;
    /**
     * finds the segment that contains the given vertex index
     * @param v
     * @returns
     */
    findSegments(v: number, point?: "a" | "b" | "any"): number[];
    /**
     * Returns the vertices that are directly connected to the specified
     * vertex via segments.
     *
     * A vertex is considered a neighbour when it shares a segment with the
     * input vertex. The result does not include the input vertex itself and
     * duplicates are removed.
     *
     * @param vertexIndex - index of the vertex to query
     * @returns array of neighbouring vertex indices
     */
    getNeighboringVerticies(vertexIndex: number): number[];
    /**
     * Returns the length of the segment at the given index.
     */
    segmentLength(segmentIndex: number): number;
    /**
     * Determines whether the specified segments form a closed (valid) loop.
     *
     * The segments must be provided in order such that each segment's
     * ending vertex (`b`) matches the starting vertex (`a`) of the next
     * segment. A loop is considered closed when all segments connect in
     * sequence and the final segment links back to the first.
     *
     * @param segmentIndices - indices of segments to check
     * @returns `true` if the segments form a closed loop, otherwise `false`
     */
    isLoopClosed(loop: Loop): boolean;
    /**
     * Enumerates all bounded, minimal, non-overlapping loops (faces) in a planar {@link VectorNetwork}.
     *
     * ## Overview
     * This function takes a vector network (vertices + segments), treats it as a
     * planar straight-line graph, and returns an array of loops. Each loop is an
     * array of segment indices that form a closed, counter-clockwise cycle
     * representing a bounded face in the network.
     *
     * The unbounded (outer) face is detected and excluded from the results.
     * The algorithm respects Euler's characteristic for planar graphs:
     *
     * ```
     * loops.length = E - V + C
     * ```
     *
     * where:
     * - `E` = number of segments
     * - `V` = number of vertices
     * - `C` = number of connected components in the graph
     *
     * ## Algorithm
     * 1. Builds **half-edges** (two directed edges per segment) with twin pointers.
     * 2. Groups outgoing half-edges per vertex and sorts them in **clockwise** order
     *    using the geometric ray angle `atan2(P[v] - P[u])`. This avoids reliance on
     *    curve tangents, so it works for straight-line segments and zero tangents.
     * 3. Uses the **left-hand rule**: from a half-edge, go to its twin, then to the
     *    previous half-edge in the CW rotation around that vertex — this walks the
     *    boundary of the face to the left of the original half-edge.
     * 4. Marks visited half-edges so each bounded face is traversed exactly once.
     * 5. Computes the signed area of each face to:
     *    - Ensure counter-clockwise orientation for bounded faces.
     *    - Identify and remove the outer face (largest absolute area).
     *
     * ## Notes
     * - Assumes the input is already **planarized**: all intersections occur at vertices,
     *   and segment endpoints reference valid vertex indices.
     * - Degree-1 vertices (bridges or dangling edges) do not contribute to bounded faces.
     * - Works for multiple connected components.
     * - Robust for parallel or collinear edges — tie-broken by edge length and index.
     *
     * ## Complexity
     * - Time: `O(E log d_max)` from sorting edges at each vertex (`d_max` = max degree).
     * - Space: `O(E)` for half-edge structures and auxiliary arrays.
     *
     * @returns An array of loops, where each loop is an array of segment indices forming a bounded face in CCW order.
     *
     * @example
     * ```ts
     * const loops = getLoops.call({ value: vectorNetwork });
     * // loops might be:
     * // [
     * //   [0, 1, 2], // triangle
     * //   [3, 4, 5, 6] // rectangle
     * // ]
     * ```
     */
    getLoops(): Loop[];
    getLoopPathData(loop: Loop): string;
    /**
     * checks whether the vertex is connected to exactly two segments
     */
    isExactCorner(vertex: number): boolean;
    /**
     * Sets tangents for a corner by assigning the given tangent to one
     * connected segment and its mirrored counterpart to the other. When `t`
     * is `0`, all tangents at the corner are cleared.
     */
    setCornerTangents(vertex: number, t: Vector2$1 | 0): void;
    /**
     * Bends a sharp corner into a smooth one by assigning mirrored tangents.
     *
     * The tangent length is derived from the length of the reference segment
     * and the {@link cmath.KAPPA} constant so that bending four equal-length sides
     * yields a perfect circle.
     *
     * @param vertex index of the vertex to bend
     * @param ref optional reference control (`"ta"` or `"tb"`) used only to
     *            determine which connected segment provides the length used for
     *            both tangents. The angle of the tangents is computed from the
     *            geometry of the two connected segments and is unaffected by
     *            the reference.
     */
    bendCorner(vertex: number, ref?: "ta" | "tb"): void;
    /**
     * Bends a straight segment so that the resulting cubic Bézier curve passes
     * through the given target point while maintaining the relative offset of
     * the cursor from the segment's start.
     *
     * The offset point `ca` represents where the bending gesture started and is
     * used to derive the parametric location along the segment. The point `cb`
     * is the current cursor position that the curve should pass through. Both
     * coordinates are in the vector network's local space.
     *
     * The function handles coordinate space transformations to ensure consistency
     * when the vector network is repositioned by the editor.
     *
     * If the cursor lies on the original straight line (i.e. `cb` equals the
     * linear interpolation of the segment at the computed offset), the tangents
     * are cleared and the segment remains straight.
     *
     * @param segment index of the segment to bend
     * @param ca parametric position (0-1) where the bend gesture started
     * @param cb vector network local space point the segment should pass through
     * @param frozen frozen segment state containing original coordinates and tangents
     */
    bendSegment(segment: number, ca: number, cb: Vector2$1, frozen: {
      a: Vector2$1;
      b: Vector2$1;
      ta: Vector2$1;
      tb: Vector2$1;
    }): void;
    /**
     * adds a vertex to the network (optionally connecting it to the selected vertex)
     * @param p the position of the new vertex
     * @param origin the index of the vertex to connect the new vertex to
     * @param ta if origin is provided, and the new segment is to be created, this is the `ta` value of the new segment. - use {@link getNextMirroredTangent} to get the mirrored value of the previous segment's tb
     * @param tb if origin is provided, and the new segment is to be created, this is the `tb` value of the new segment.
     * @returns the index of the added vertex
     */
    addVertex(p: Vector2$1, origin?: number | null, ta?: Vector2$1, tb?: Vector2$1): number;
    /**
     * virtually, if the `origin` were to be connected to another vertex, it returns the new segment's ta value, based on previous segment's tb value, inverted
     * @param origin
     */
    getNextMirroredTangent(origin: number): Vector2$1;
    /**
     * deletes the vertex at the given index.
     * associated segments are also deleted and re-assigned.
     * @param i
     *
     * @example
     * ```
     * => vertices: [ A, B, C, D ]
     * => segments: [ AB, BC, CD ]
     * => deleteVertex(B)
     * => vertices: [ A, C, D ]
     * => segments: [ AC, CD ]
     * ```
     */
    deleteVertex(i: number): void;
    /**
     * Removes the vertex at the given index if no segments reference it.
     *
     * If the vertex has any dependent segments, the network is left unchanged
     * and `false` is returned. When the vertex is removed, all segment indices
     * greater than the removed index are decremented to reflect the new
     * positions of vertices.
     *
     * @param i - Index of the vertex to remove
     * @returns `true` if the vertex was removed, `false` otherwise
     */
    removeUnusedVertex(i: number): boolean;
    moveVertex(i: number, p: Vector2$1): void;
    translateVertex(i: number, delta: Vector2$1): void;
    translateSegment(i: number, delta: Vector2$1): void;
    translate(delta: Vector2$1): void;
    scale(factor: Vector2$1): void;
    addSegment(a: number, b: number, ta?: Vector2$1, tb?: Vector2$1): void;
    /**
     * Deletes the segment at the given index.
     *
     * @param segmentIndex - Index of the segment to delete
     *
     * @example
     * ```
     * => vertices: [ A, B, C, D ]
     * => segments: [ AB, BC, CD ]
     * => deleteSegment(1) // delete BC
     * => vertices: [ A, B, C, D ]
     * => segments: [ AB, CD ]
     * ```
     */
    deleteSegment(segmentIndex: number): void;
    deleteTangent(segmentIndex: number, control: "ta" | "tb"): void;
    /**
     * Splits a segment at a given parametric position and inserts a new vertex.
     *
     * This function works with both straight and curved segments. When splitting,
     * it maintains visual continuity by calculating appropriate tangent values
     * for the new segments that preserve the original curve shape.
     *
     * The splitting process uses Bézier curve subdivision to ensure the composite
     * curve is mathematically identical to the original:
     * 1. Evaluates the curve at the given parametric position to get the split point
     * 2. Uses Bézier subdivision to calculate the correct tangent values for both segments
     * 3. Creates two new segments that maintain the original curve shape exactly
     * 4. Inserts a new vertex at the split point
     *
     * When `preserveZero` is enabled in the config (default: true), segments with zero tangents
     * will maintain zero tangents after splitting, avoiding the introduction of
     * unnecessary tangent controls that might confuse users. This is particularly
     * useful for straight line segments where the mathematical accuracy of de
     * Casteljau's algorithm would introduce non-zero tangents.
     *
     * @param p parametric position on the segment (0 ≤ t ≤ 1)
     * @param config optional configuration for the split operation
     * @returns index of the newly inserted vertex
     */
    splitSegment(p: PointOnSegment, config?: SplitSegmentConfig): number;
    /**
     *
     * @param segment the index of the segment to update
     * @param control the control point to update (ta or tb)
     * @param value the new tangent value
     * @param mirroring the tangent mirroring mode
     *
     */
    updateTangent(segmentIndex: number, control: "ta" | "tb", value: Vector2$1, mirroring?: TangentMirroringMode): void;
    getBBox(): cmath.Rectangle;
    /**
     * Use with Pencil tool
     *
     * extends the polyline by adding a new vertex at the end
     * - assumes the the verteces are in order
     * @param p
     */
    extendPolyline(p: Vector2$1): void;
    /**
     * Use with Line tool
     * extends the line by moving the last vertex to the new position
     * - assumes the the verteces are in order
     * - assumes there are exactly 1 or 2 vertices
     * @param p
     */
    extendLine(p: Vector2$1): void;
    /**
     * Returns the vertex index associated with a segment's tangent control.
     *
     * @param segmentIndex the index of the segment
     * @param control which tangent control of the segment ("ta" or "tb")
     * @returns the index of the vertex owning the specified control
     */
    getTangentVertex(segmentIndex: number, control: "ta" | "tb"): number;
    /**
     * Returns absolute positions of vertices.
     * @param offset translate offset
     * @param indices optional subset of vertex indices
     */
    getVerticesAbsolute(offset?: Vector2$1, indices?: number[]): Vector2$1[];
    /**
     * Returns absolute positions of tangent control points.
     * @param offset translate offset
     */
    getControlPointsAbsolute(offset?: Vector2$1, targets?: [number, "ta" | "tb"][]): AbsoluteTangentControlOnSegment[];
  }
  /**
   * Returns an approximate bounding box for the entire vector network
   * by collecting vertices and their tangent (control) points.
   */
  function getBBoxApprox(vn: VectorNetwork): cmath.Rectangle;
  /**
   * Exact bounding box of a vector network by summing each segment's cubic bounding box.
   **/
  function getBBox(vn: vn.VectorNetwork): any;
  /**
   * Converts a vector network to SVG path data.
   *
   * @param vn - Vector network to convert.
   * @returns The SVG path data string representing the vector network.
   */
  function toSVGPathData(vn: vn.VectorNetwork): any;
  function fromSVGPathData(d: string): vn.VectorNetwork;
  function fromRect(shape: cmath.Rectangle): vn.VectorNetwork;
  /**
   * @param shape ellipse shape defined with reactable (xywh)
   * @returns vector network with 4 cubic bezier curves
   */
  function fromEllipse(shape: cmath.Rectangle): vn.VectorNetwork;
  function fromRegularPolygon(shape: cmath.Rectangle & {
    points: number;
  }): vn.VectorNetwork;
  function fromRegularStarPolygon(shape: cmath.Rectangle & {
    points: number;
    innerRadius: number;
  }): vn.VectorNetwork;
}
//#endregion
//#region ../grida-tree/src/lib.d.ts
declare namespace tree {
  type Key = string;
  type RmResult = Key[];
  /**
   * flat tree ops
   *
   * flat tree represents the structure, that each nodes are flattened via kye, yet each node has a pointer to its children.
   *
   * ```ts
   * flat_tree = {
   *   "root": {
   *     "children": ["a", "b"]
   *   },
   *   "a": {
   *     "children": ["c"]
   *   }
   * }
   * ```
   */
  namespace flat_with_children {
    /**
     * Move one or more nodes under a target node (mutates the input map in-place).
     * @param nodes – Record mapping node IDs to objects that each have a children array.
     * @param sources – Single node ID or array of node IDs to move.
     * @param target – Target parent node ID to move into.
     * @param index – Desired insertion index in the target's children array; -1 (default) appends at end.
     * @param key – The key name for the children array property (defaults to "children").
     * @returns The same `nodes` map, now mutated.
     * @mutates nodes – the input map's children arrays are modified directly.
     *
     * @example
     * ```ts
     * const nodes: Record<string, { children: string[] }> = {
     *   a: { children: ["b","c"] },
     *   b: { children: [] },
     *   c: { children: [] }
     * };
     *
     * mv(nodes, "c", "b", 0);
     * // now nodes.b.children === ["c"]
     *
     * // Custom key example:
     * const customNodes: Record<string, { items: string[] }> = {
     *   a: { items: ["b","c"] },
     *   b: { items: [] },
     *   c: { items: [] }
     * };
     * mv(customNodes, "c", "b", 0, "items");
     * ```
     *
     * @remark
     * - This function is not recursive. It only moves direct children of the target node.
     * - This function does not check for cycles.
     */
    function mv<K extends string = "children", T extends Record<K, string[]> = Record<K, string[]>>(nodes: Record<string, T>, sources: string | string[], target: string, index?: number, key?: K): Record<string, T>;
    /**
     * Recursively remove a node and its subtree, delegating actual removal to `unlink`,
     * and return a list of all IDs that were removed.
     *
     * @typeParam K – The key name for the children array property.
     * @typeParam T – Node shape with optional children array at key K.
     * @param nodes – Record mapping node IDs to node objects.
     * @param id – ID of the root node to remove.
     * @param key – The key name for the children array property (defaults to "children").
     * @returns Array of removed IDs, in removal order (children first, then the node itself).
     * @mutates nodes – the input map's children arrays are modified directly.
     * @throws {Error} If `id` does not exist in `nodes`.
     * @example
     * ```ts
     * const nodes = {
     *   a: { children: ['b'] },
     *   b: { children: [] }
     * };
     * rm(nodes, 'a');
     * // now nodes is {}
     *
     * // Custom key example:
     * const customNodes = {
     *   a: { items: ['b'] },
     *   b: { items: [] }
     * };
     * rm(customNodes, 'a', 'items');
     * ```
     */
    function rm<K extends string = "children", T extends Partial<Record<K, string[]>> = Partial<Record<K, string[]>>>(nodes: Record<string, T>, id: string, key?: K): string[];
    /**
     * Remove a node from the flat tree and unlink it from any parent's children array.
     *
     * @typeParam K – The key name for the children array property.
     * @typeParam T – Node shape with a children array at key K.
     * @param nodes – Record mapping node IDs to node objects.
     * @param id – ID of the node to remove.
     * @param key – The key name for the children array property (defaults to "children").
     * @returns void
     * @mutates nodes – the input map's children arrays are modified directly.
     * @throws {Error} If `id` does not exist in `nodes`.
     * @example
     * ```ts
     * const nodes = {
     *   parent: { children: ['child'] },
     *   child:   { children: [] }
     * };
     * unlink(nodes, 'child');
     * // now nodes.parent.children === []
     *
     * // Custom key example:
     * const customNodes = {
     *   parent: { items: ['child'] },
     *   child:  { items: [] }
     * };
     * unlink(customNodes, 'child', 'items');
     * ```
     */
    function unlink<K extends string = "children", T extends Partial<Record<K, string[]>> = Partial<Record<K, string[]>>>(nodes: Record<string, T>, id: string, key?: K): void;
  }
  namespace lut {
    /**
     * Tree lookup table interface for efficient hierarchical queries on flat tree structures.
     *
     * This interface is designed for **in-memory, runtime-only** use and should not be used for persisting data.
     * It exists to provide efficient access to the parent and child relationships within a tree structure without
     * modifying the core node structure directly.
     *
     * ## Why We Use This Interface
     * This interface allows for a structured, performant way to manage tree hierarchy relationships without introducing
     * a `parent_id` property on each node. By using an in-memory lookup table, we avoid potential issues with nullable
     * `parent_id` fields, which could lead to unpredictable coding experiences. Additionally, maintaining these
     * relationships within a dedicated lookup table promotes separation of concerns, keeping core node definitions
     * stable and interface-compatible.
     *
     * ## Functionality
     * - **Get Parent Node by Child ID**: Efficiently map a node's ID to its parent node ID with O(1) lookup.
     * - **Get Child Nodes by Parent ID**: Access a list of child node IDs for any given parent node with O(1) lookup.
     * - **Traverse Ancestors**: Walk up the tree from any node to its root.
     * - **Query Depth**: Calculate how deep a node is in the hierarchy.
     * - **Find Siblings**: Locate nodes that share the same parent.
     *
     * ## Management Notes
     * - This interface should be populated and managed only during runtime.
     * - It is recommended to initialize the lookup table during tree loading or initial rendering using {@link TreeLUT.from_flat_with_children}.
     * - If the tree hierarchy is updated (e.g., nodes are added, removed, or moved), this lookup table should be
     *   refreshed to reflect the current relationships.
     * - For optimal performance, the lookup table should be created once and reused for multiple queries.
     *
     * @see {@link TreeLUT} for methods to query and traverse the tree efficiently.
     * @see {@link TreeLUT.from_flat_with_children} for creating a lookup table from a flat tree structure.
     */
    interface ITreeLUT {
      /**
       * Array of all node IDs in the tree, facilitating traversal and lookup.
       */
      readonly lu_keys: Array<Key>;
      /**
       * Maps each node ID to its respective parent node ID, facilitating upward traversal.
       * Root nodes have a parent value of `null`.
       */
      readonly lu_parent: Record<Key, Key | null>;
      /**
       * Maps each node ID to an array of its child node IDs, enabling efficient downward traversal.
       *
       * Note: This does NOT guarantee the order of children. For ordered traversal, refer to the
       * original node's `children` array in your tree structure.
       */
      readonly lu_children: Record<Key, Array<Key>>;
    }
    /**
     * Tree lookup table for efficient hierarchical queries on flat tree structures.
     * Provides methods for traversing and querying tree relationships.
     *
     * @example
     * ```ts
     * const lut: ITreeLUT = {
     *   lu_keys: ["root", "a", "b", "c"],
     *   lu_parent: { root: null, a: "root", b: "root", c: "a" },
     *   lu_children: { root: ["a", "b"], a: ["c"], b: [], c: [] }
     * };
     * const tree = new TreeLUT(lut);
     * console.log(tree.depthOf("c")); // 2
     * console.log(tree.parentOf("c")); // "a"
     * ```
     */
    class TreeLUT {
      readonly lut: ITreeLUT;
      constructor(lut: ITreeLUT);
      /**
       * Creates a TreeLUT from a flat tree structure.
       * Builds the lookup table by analyzing parent-child relationships from the nodes' children arrays.
       *
       * @typeParam K - The key name for the children array property
       * @typeParam T - Node shape with a children array at key K
       * @param nodes - Record mapping node IDs to node objects
       * @param key - The key name for the children array property (defaults to "children")
       * @returns A new TreeLUT instance with computed lookup tables
       *
       * @example
       * ```ts
       * const nodes = {
       *   root: { children: ["a", "b"] },
       *   a: { children: ["c"] },
       *   b: { children: [] },
       *   c: { children: [] }
       * };
       * const tree = TreeLUT.from(nodes);
       * console.log(tree.depthOf("c")); // 2
       *
       * // Custom key example:
       * const customNodes = {
       *   root: { items: ["a", "b"] },
       *   a: { items: ["c"] },
       *   b: { items: [] },
       *   c: { items: [] }
       * };
       * const customTree = TreeLUT.from(customNodes, "items");
       * console.log(customTree.depthOf("c")); // 2
       * ```
       */
      static from_flat_with_children<K extends string = "children", T extends Partial<Record<K, string[]>> = Partial<Record<K, string[]>>>(nodes: Record<string, T>, key?: K): TreeLUT;
      /**
       * Creates a snapshot of the current lookup table state.
       *
       * @returns A deep copy of the lookup table
       * @example
       * ```ts
       * const tree = new TreeLUT(lut);
       * const snapshot = tree.snapshot();
       * // snapshot is independent of tree.lut
       * ```
       */
      snapshot(): ITreeLUT;
      /**
       * Gets the depth (level) of a node in the tree.
       * The root node has depth 0, its children have depth 1, etc.
       *
       * @param id - The node ID to query
       * @returns The depth of the node (number of ancestors)
       * @example
       * ```ts
       * // Tree: root -> a -> c
       * tree.depthOf("root"); // 0
       * tree.depthOf("a");    // 1
       * tree.depthOf("c");    // 2
       * ```
       */
      depthOf(id: string): number;
      /**
       * Gets all ancestor node IDs for a given node, in root-first order.
       * Uses a generator for memory-efficient traversal.
       *
       * @param id - The node ID to query
       * @returns Generator yielding ancestor IDs from root to immediate parent
       * @example
       * ```ts
       * // Tree: root -> a -> b -> c
       * [...tree.ancestorsOf("c")]; // ["root", "a", "b"]
       * [...tree.ancestorsOf("a")]; // ["root"]
       * [...tree.ancestorsOf("root")]; // []
       * ```
       */
      ancestorsOf(id: string): Generator<string>;
      /**
       * Gets the immediate parent node ID of a given node.
       *
       * @param id - The node ID to query
       * @returns The parent node ID, or null if the node is a root node
       * @example
       * ```ts
       * tree.parentOf("child");  // "parent"
       * tree.parentOf("root");   // null
       * ```
       */
      parentOf(id: string): string | null;
      /**
       * Gets the topmost ancestor (root) of a given node.
       * If the node itself is a root, returns the node ID.
       *
       * @param id - The node ID to query
       * @returns The root ancestor node ID, or null if node doesn't exist
       * @example
       * ```ts
       * // Tree: root -> a -> b -> c
       * tree.topmostOf("c");    // "root"
       * tree.topmostOf("root"); // "root"
       * tree.topmostOf("invalid"); // null
       * ```
       */
      topmostOf(id: string): string | null;
      /**
       * Gets all sibling node IDs of a given node.
       * Siblings are nodes that share the same parent, excluding the node itself.
       *
       * @param id - The node ID to query
       * @returns Array of sibling node IDs
       * @example
       * ```ts
       * // Tree: parent -> [a, b, c]
       * tree.siblingsOf("b"); // ["a", "c"]
       * tree.siblingsOf("a"); // ["b", "c"]
       * ```
       */
      siblingsOf(id: string): string[];
      /**
       * Gets all child node IDs of a given node.
       *
       * @param id - The node ID to query
       * @returns Array of child node IDs (empty array if no children)
       * @example
       * ```ts
       * // Tree: parent -> [a, b]
       * tree.childrenOf("parent"); // ["a", "b"]
       * tree.childrenOf("a");      // []
       * ```
       */
      childrenOf(id: string): string[];
      /**
       * Checks if a node is an ancestor of another node.
       * A node is an ancestor if it appears in the parent chain.
       *
       * @param ancestor - The potential ancestor node ID
       * @param id - The node ID to check
       * @returns True if ancestor is in the parent chain of id
       * @example
       * ```ts
       * // Tree: root -> a -> b -> c
       * tree.isAncestorOf("root", "c"); // true
       * tree.isAncestorOf("a", "c");    // true
       * tree.isAncestorOf("c", "a");    // false
       * tree.isAncestorOf("b", "b");    // false (node is not its own ancestor)
       * ```
       */
      isAncestorOf(ancestor: string, id: string): boolean;
    }
  }
  /**
   * Graph distance calculations for tree hierarchies.
   *
   * The `distance` namespace provides pure, mathematical functions for calculating
   * graph distance (shortest path) between nodes in a tree. These functions are
   * designed to be reusable, testable, and independent of any specific tree
   * implementation.
   *
   * ## Core Concepts
   *
   * **Graph Distance**: The shortest path between two nodes in a tree, measured as
   * the number of edges that must be traversed. For example:
   * - Parent to child: distance 1
   * - Siblings: distance 2 (through their common parent)
   * - Same node: distance 0
   *
   * **Lowest Common Ancestor (LCA)**: The deepest node that is an ancestor of both
   * nodes. Used to calculate graph distance efficiently.
   *
   * ## Design Principles
   *
   * - **Pure & Mathematical**: All functions are pure, deterministic, and side-effect free
   * - **Minimal Interface**: Works with `tree.lut.ITreeLUT` interface (no custom types needed)
   * - **Performance**: Efficient algorithms with minimal allocations
   * - **Composable**: Functions can be combined for complex selection logic
   *
   * @example
   * ```ts
   * import { tree } from "@grida/tree";
   *
   * const lut: tree.lut.ITreeLUT = {
   *   lu_keys: ["root", "a", "b", "a1", "a2"],
   *   lu_parent: { root: null, a: "root", b: "root", a1: "a", a2: "a" },
   *   lu_children: { root: ["a", "b"], a: ["a1", "a2"], b: [], a1: [], a2: [] }
   * };
   *
   * // Calculate distance between siblings
   * const dist = tree.distance.getGraphDistance(lut, "a1", "a2");
   * console.log(dist); // 2
   *
   * // Find nearest node by graph distance
   * const nearest = tree.distance.findNearestByGraphDistance(
   *   lut,
   *   ["a1", "a2", "b"],
   *   ["a"]
   * );
   * console.log(nearest); // "a1" or "a2" (children, distance 1)
   * ```
   */
  namespace distance {
    /**
     * Options for finding the nearest node by graph distance.
     */
    interface IFindNearestOptions {
      /**
       * If true, prefer children of selected nodes when distances are equal.
       * Useful for "nested first" selection behavior (e.g., double-click to go deeper).
       */
      preferChildren?: boolean;
      /**
       * Weights to use for graph distance calculation.
       * Providing this enables weighted distance mode.
       * If not provided, standard unweighted graph distance is used.
       */
      weights?: GraphWeights;
      /**
       * Optional filter function to exclude candidates.
       * Return false to exclude a candidate from consideration.
       */
      filter?: (candidate: Key, lut: lut.ITreeLUT) => boolean;
    }
    /**
     * Find the Lowest Common Ancestor (LCA) of two nodes in a tree.
     *
     * @param lut - The tree lookup table
     * @param nodeA - First node ID
     * @param nodeB - Second node ID
     * @returns The LCA node ID, or null if nodes are not in the same tree
     *
     * @example
     * ```ts
     * // Tree: root -> a -> a1, root -> b
     * const lca = tree.distance.getLowestCommonAncestor(lut, "a1", "b");
     * console.log(lca); // "root"
     * ```
     */
    function getLowestCommonAncestor(lut: lut.ITreeLUT, nodeA: Key, nodeB: Key): Key | null;
    /**
     * Calculate the graph distance (shortest path) between two nodes in a tree.
     *
     * Algorithm: distance = depth(A) + depth(B) - 2 * depth(LCA)
     *
     * @param lut - The tree lookup table
     * @param nodeA - First node ID
     * @param nodeB - Second node ID
     * @returns The graph distance between nodes, or Infinity if nodes are not in the same tree
     *
     * @example
     * ```ts
     * // Tree: root -> a -> a1
     * const dist1 = tree.distance.getGraphDistance(lut, "root", "a"); // 1
     * const dist2 = tree.distance.getGraphDistance(lut, "a", "a1");   // 1
     * const dist3 = tree.distance.getGraphDistance(lut, "root", "a1"); // 2
     * ```
     */
    function getGraphDistance(lut: lut.ITreeLUT, nodeA: Key, nodeB: Key): number;
    interface GraphWeights {
      /**
       * Weight for the edge between two siblings.
       * If provided, siblings are considered to have a direct connection with this weight.
       * If undefined, siblings are connected via their parent (weight = parentChild * 2).
       *
       * @recommendation Use a fractional value (e.g., 0.9) to make siblings implicitly "closer"
       * than parent/child nodes (distance 1.0) without needing tie-breakers.
       */
      sibling?: number;
      /**
       * Weight for the edge between a parent and its child.
       * Defaults to 1.
       */
      parentChild?: number;
    }
    /**
     * Calculate weighted graph distance between two nodes.
     *
     * Allows customizing the weights of graph edges (parent-child, siblings)
     * to adjust distance calculations for specific use cases (e.g., measurement).
     *
     * Algorithm:
     * - If nodes are siblings and sibling weight is provided: return sibling weight
     * - Otherwise: use standard graph distance * parentChild weight
     *
     * @param lut - The tree lookup table
     * @param nodeA - First node ID
     * @param nodeB - Second node ID
     * @param weights - Configuration for edge weights
     * @returns The weighted distance
     *
     * @example
     * ```ts
     * // Tree: root -> a -> [a1, a2]
     * // With sibling weight 1 (measurement mode):
     * const w = { sibling: 1 };
     * const d1 = tree.distance.getWeightedGraphDistance(lut, "a1", "a2", w); // 1
     * const d2 = tree.distance.getWeightedGraphDistance(lut, "a", "a1", w);   // 1
     * ```
     */
    function getWeightedGraphDistance(lut: lut.ITreeLUT, nodeA: Key, nodeB: Key, weights?: GraphWeights): number;
    /**
     * Find the nearest node by graph distance from the current selection.
     *
     * Given candidate nodes and current selection, finds the candidate with minimum
     * graph distance. For multiple selections, uses the minimum distance from any
     * selected node.
     *
     * @param lut - The tree lookup table
     * @param candidates - Array of candidate node IDs to choose from
     * @param selection - Array of currently selected node IDs
     * @param options - Optional configuration for selection behavior
     * @returns The nearest candidate node ID, or null if no valid candidate found
     *
     * @example
     * ```ts
     * // Tree: root -> a -> [a1, a2], root -> b
     * // Selection: ["a"]
     * // Candidates: ["a1", "a2", "b"]
     * const nearest = tree.distance.findNearestByGraphDistance(
     *   lut,
     *   ["a1", "a2", "b"],
     *   ["a"],
     *   { preferChildren: true }
     * );
     * // Returns "a1" or "a2" (children, distance 1) instead of "b" (sibling, distance 2)
     * ```
     */
    function findNearestByGraphDistance(lut: lut.ITreeLUT, candidates: Key[], selection: Key[], options?: IFindNearestOptions): Key | null;
  }
  /**
   * Graph-based tree structure with explicit node and link separation.
   *
   * The `graph` namespace provides a data structure and system for managing tree hierarchies
   * where **nodes** (the actual data) and **links** (the relationships between nodes) are
   * stored and managed separately. This design provides a clean, efficient way to work with
   * large tree structures without the complexity of nested objects or the fragility of
   * parent-pointer approaches.
   *
   * ## Core Design Principles
   *
   * ### 1. Explicit Separation of Data and Structure
   * Unlike traditional tree implementations, `graph` keeps data and relationships separate:
   * - **Nodes**: A flat record of your actual data `Record<string, T>`
   * - **Links**: A separate record of parent-child relationships `Record<string, string[] | undefined>`
   *
   * This separation provides several benefits:
   * - No need to re-wrap or re-map data when structure changes
   * - Data remains immutable while structure can be modified
   * - Easy to maintain different views of the same data
   * - Clear separation of concerns
   *
   * ### 2. Single Source of Truth
   * The graph serves as your **main source of truth** for hierarchical data. Instead of:
   * - Maintaining duplicate structures (e.g., flat + nested)
   * - Re-computing relationships on every operation
   * - Storing derived or redundant parent/child references
   *
   * You work directly with the graph, which keeps everything synchronized and consistent.
   *
   * ### 3. Safe, Predictable Operations
   * All tree manipulation methods maintain graph integrity:
   * - Moving nodes updates all relevant links automatically
   * - Removing nodes cleans up orphaned references
   * - Operations are atomic and don't leave the graph in an invalid state
   *
   * ## When to Use This
   *
   * Use `tree.graph` when you need:
   * - A robust, manipulable tree structure as your primary data model
   * - Frequent structural changes (add, move, remove, reorder)
   * - To work with large trees (thousands of nodes)
   * - A single source of truth for hierarchical data
   * - Type-safe operations on your domain objects
   *
   * For read-only querying, consider {@link lut.TreeLUT} which provides efficient lookups.
   * For simple operations on existing structures, see {@link flat_with_children}.
   *
   * ## Example
   *
   * ```ts
   * import { tree } from "@grida/tree";
   *
   * interface PageNode {
   *   id: string;
   *   name: string;
   *   type: "frame" | "text" | "image";
   * }
   *
   * // Create a graph with explicit nodes and links
   * const graph = new tree.graph.Graph<PageNode>({
   *   nodes: {
   *     "page": { id: "page", name: "Page 1", type: "frame" },
   *     "header": { id: "header", name: "Header", type: "frame" },
   *     "title": { id: "title", name: "Title", type: "text" },
   *   },
   *   links: {
   *     "page": ["header"],      // page contains header
   *     "header": ["title"],     // header contains title
   *     "title": undefined,      // title has no children
   *   }
   * });
   *
   * // Move title from header to page
   * graph.mv("title", "page");
   *
   * // Get current state
   * const state = graph.snapshot();
   * console.log(state.links["page"]); // ["header", "title"]
   * console.log(state.links["header"]); // []
   * ```
   *
   * @see {@link IGraph} for the graph data structure interface
   * @see {@link Graph} for graph manipulation methods
   */
  namespace graph {
    /**
     * Graph data structure interface with explicit node and link separation.
     *
     * This interface represents a tree structure where:
     * - `nodes` contains the actual data objects
     * - `links` contains the parent-child relationships
     *
     * The separation allows for efficient tree operations without modifying node data,
     * and enables the same node data to be used in multiple graph structures if needed.
     *
     * @typeParam T - The type of data stored in each node
     *
     * @example
     * ```ts
     * interface MyData {
     *   name: string;
     *   value: number;
     * }
     *
     * const graph: IGraph<MyData> = {
     *   nodes: {
     *     "root": { name: "Root", value: 0 },
     *     "child": { name: "Child", value: 1 },
     *   },
     *   links: {
     *     "root": ["child"],    // root has one child
     *     "child": undefined,   // child has no children
     *   }
     * };
     * ```
     *
     * @remarks
     * - Node keys in `nodes` and `links` must be synchronized
     * - A link value of `undefined` or empty array `[]` means no children
     * - Links are stored as arrays to preserve child order
     * - The graph does not enforce referential integrity automatically;
     *   use the {@link Graph} class for safe operations
     */
    interface IGraph<T> {
      /**
       * The actual data nodes, keyed by node ID.
       * Contains your domain objects without any tree-specific properties.
       */
      nodes: Record<string, T>;
      /**
       * The hierarchical relationships between nodes.
       * Each key maps to an array of child node IDs, or undefined if no children.
       * The order of children in the array represents their visual/logical order.
       */
      links: Record<string, string[] | undefined>;
    }
    /**
     * Graph Policy Interface - Universal constraints for tree structure validation.
     *
     * `IGraphPolicy` provides a flexible, extensible system for defining structural rules
     * and constraints on tree operations. Policies are independent of node data shape (`T`)
     * and operate purely on structural relationships, making them composable and reusable
     * across different tree types.
     *
     * ## Design Philosophy
     *
     * **Separation of Concerns:**
     * - Policies define WHAT is allowed (constraints)
     * - Graph methods define HOW to execute (operations)
     * - Node data defines content (domain objects)
     *
     * **Flexibility:**
     * - All methods are optional (defaults to permissive behavior)
     * - Policies can be node-specific (different rules for different node types)
     * - Composable and extensible without modifying core graph code
     *
     * **Performance:**
     * - Policies are queried only when needed (before mutations)
     * - Simple checks (O(1)) per operation
     * - No overhead when using default policy
     *
     * ## When to Use Policies
     *
     * Use policies to enforce:
     * - **Type constraints**: "Text nodes cannot have children"
     * - **Capacity limits**: "Containers can have max 100 children"
     * - **Relationship rules**: "Images cannot contain frames"
     * - **Hierarchy rules**: "Root nodes cannot be children"
     * - **Business logic**: "Locked nodes cannot be moved"
     *
     * ## Integration with Graph Operations
     *
     * When integrated, policies will be checked before mutations:
     * - `mv()` - Check `can_be_child`, `can_be_parent`, `can_link`, `max_out_degree`
     * - `order()` - No policy checks (internal reordering)
     * - `rm()` / `unlink()` - No policy checks (removal always allowed)
     *
     * Failed policy checks will throw descriptive errors instead of performing invalid operations.
     *
     * @typeParam T - The type of node data (your domain objects)
     *
     * @example
     * ```ts
     * // Example 1: Design tool with scene/frame/text/image hierarchy
     * interface DesignNode {
     *   type: "scene" | "frame" | "text" | "image" | "group";
     * }
     *
     * const designPolicy: IGraphPolicy<DesignNode> = {
     *   // Leaf nodes (text, image) cannot have children
     *   max_out_degree: (node) => {
     *     if (node.type === "text" || node.type === "image") return 0;
     *     return Infinity; // Containers (scene, frame, group) have unlimited children
     *   },
     *
     *   // Only container types can be parents
     *   can_be_parent: (node) => {
     *     return ["scene", "frame", "group"].includes(node.type);
     *   },
     *
     *   // Scenes are top-level only (cannot be nested)
     *   can_be_child: (node) => node.type !== "scene",
     *
     *   // Prevent self-parenting and group nesting
     *   can_link: (parent, parent_id, child, child_id) => {
     *     if (parent_id === child_id) return false; // No self-parenting
     *     if (parent.type === "group" && child.type === "group") return false;
     *     return true;
     *   }
     * };
     *
     * // Use with graph:
     * const graph = new Graph(graphData, designPolicy);
     * graph.mv("scene", "frame"); // ❌ Throws: Scenes cannot be children
     * graph.mv("frame", "text"); // ❌ Throws: Text cannot be a parent
     * ```
     *
     * @example
     * ```ts
     * // Example 2: Capacity limits
     * interface ListNode {
     *   type: "list" | "item";
     *   maxItems?: number;
     * }
     *
     * const listPolicy: IGraphPolicy<ListNode> = {
     *   max_out_degree: (node) => {
     *     if (node.type === "list") {
     *       return node.maxItems ?? 10; // Default max 10 items
     *     }
     *     return 0; // Items cannot have children
     *   }
     * };
     * ```
     *
     * @example
     * ```ts
     * // Example 3: Root node constraints
     * interface DocumentNode {
     *   id: string;
     *   isRoot?: boolean;
     * }
     *
     * const rootPolicy: IGraphPolicy<DocumentNode> = {
     *   // Root nodes cannot become children
     *   can_be_child: (node) => !node.isRoot,
     *
     *   // All nodes can be parents (even roots)
     *   can_be_parent: () => true
     * };
     * ```
     *
     * @remarks
     * **All methods are optional** - If not provided, defaults to permissive behavior:
     * - `max_out_degree` → `Infinity` (unlimited children)
     * - `can_link` → `true` (all links allowed)
     * - `can_be_parent` → `true` (any node can be parent)
     * - `can_be_child` → `true` (any node can be child)
     *
     * **Performance Considerations:**
     * - Keep policy checks simple and fast (O(1) preferred)
     * - Avoid expensive operations (database queries, deep traversals)
     * - Cache computed values when possible
     *
     * **Error Handling:**
     * - Policy violations will throw descriptive errors
     * - Graph remains unchanged when policy check fails
     * - No partial updates (atomic operations)
     *
     * @see {@link DEFAULT_POLICY_INFINITE} for the default permissive policy
     * @see {@link Graph} for graph operations (integration coming soon)
     */
    interface IGraphPolicy<T> {
      /**
       * Maximum number of children a node can have.
       *
       * This constraint is checked before adding children to a node. Use this to enforce:
       * - **Leaf nodes**: Return `0` for nodes that cannot have children
       * - **Capacity limits**: Return a number for maximum children allowed
       * - **Containers**: Return `Infinity` for unlimited children (default)
       *
       * @param node - The node data that would become the parent
       * @param id - The node's ID in the graph
       * @returns Maximum children allowed, or `Infinity` for unlimited
       *
       * @example
       * ```ts
       * // Basic: Leaf vs container nodes
       * max_out_degree: (node) => {
       *   if (node.type === "leaf") return 0;
       *   if (node.type === "container") return Infinity;
       *   return 10; // Default max
       * }
       * ```
       *
       * @example
       * ```ts
       * // Dynamic limits based on node properties
       * max_out_degree: (node) => {
       *   if (node.isLeaf) return 0;
       *   return node.maxChildren ?? Infinity;
       * }
       * ```
       *
       * @example
       * ```ts
       * // Type-specific constraints
       * max_out_degree: (node) => {
       *   switch (node.type) {
       *     case "text":
       *     case "image":
       *       return 0; // Cannot have children
       *     case "list":
       *       return 100; // Max 100 items
       *     case "frame":
       *       return Infinity; // Unlimited
       *     default:
       *       return Infinity;
       *   }
       * }
       * ```
       *
       * @remarks
       * - Checked before `mv()` when adding a child
       * - **Not checked** when node already has max children (use `can_link` for that)
       * - Return `0` to create leaf nodes (no children allowed)
       * - Return `Infinity` for containers (unlimited children)
       * - Default (when not provided): `Infinity`
       */
      max_out_degree?(node: T, id: Key): number | typeof Infinity;
      /**
       * Whether a specific parent-child link is allowed.
       *
       * This is the most granular constraint, checked before creating any parent-child
       * relationship. Use this for:
       * - **Type compatibility**: "Images cannot contain frames"
       * - **Relationship rules**: "Locked parents cannot accept children"
       * - **Capacity enforcement**: Check current child count vs limit
       * - **Business logic**: Custom domain-specific rules
       *
       * @param parent - The parent node data
       * @param parent_id - The parent node's ID
       * @param child - The child node data
       * @param child_id - The child node's ID
       * @returns `true` if the link is allowed, `false` otherwise
       *
       * @example
       * ```ts
       * // Basic type compatibility
       * can_link: (parent, parent_id, child, child_id) => {
       *   // Text nodes cannot contain anything
       *   if (parent.type === "text") return false;
       *   // Images can only contain text
       *   if (parent.type === "image") return child.type === "text";
       *   return true;
       * }
       * ```
       *
       * @example
       * ```ts
       * // Enforce capacity limits with current child count
       * can_link: (parent, parent_id, child, child_id) => {
       *   // Assuming you have access to the graph's links
       *   const currentChildren = graph.links[parent_id]?.length ?? 0;
       *   const maxChildren = parent.maxChildren ?? Infinity;
       *   return currentChildren < maxChildren;
       * }
       * ```
       *
       * @example
       * ```ts
       * // Prevent cycles (if you have ancestry info)
       * can_link: (parent, parent_id, child, child_id) => {
       *   // Prevent self-parenting
       *   if (parent_id === child_id) return false;
       *   // Prevent adding ancestor as child (requires lut or cache)
       *   // if (isAncestor(child_id, parent_id)) return false;
       *   return true;
       * }
       * ```
       *
       * @example
       * ```ts
       * // Type-based relationship constraints
       * can_link: (parent, parent_id, child, child_id) => {
       *   // Scenes can only contain frames and groups (not text/image directly)
       *   if (parent.type === "scene") {
       *     return child.type === "frame" || child.type === "group";
       *   }
       *   // Groups cannot contain other groups (flat organization)
       *   if (parent.type === "group" && child.type === "group") {
       *     return false;
       *   }
       *   // All other combinations allowed
       *   return true;
       * }
       * ```
       *
       * @remarks
       * - **Most specific check** - called after `can_be_parent`, `can_be_child`, `max_out_degree`
       * - Checked before every `mv()` operation
       * - Receives both parent and child data for maximum flexibility
       * - Use for complex business logic and relationship rules
       * - Default (when not provided): `true` (all links allowed)
       *
       * @see {@link can_be_parent} for parent-only constraints
       * @see {@link can_be_child} for child-only constraints
       * @see {@link max_out_degree} for simple capacity limits
       */
      can_link?(parent: T, parent_id: Key, child: T, child_id: Key): boolean;
      /**
       * Whether a node can be a parent (have children).
       *
       * This is a node-level constraint checked before allowing a node to accept children.
       * Use this for:
       * - **Type constraints**: "Text nodes cannot be parents"
       * - **State constraints**: "Disabled nodes cannot have children"
       * - **Role constraints**: "Leaf nodes cannot become containers"
       *
       * @param node - The node data that would become a parent
       * @param id - The node's ID in the graph
       * @returns `true` if the node can be a parent, `false` otherwise
       *
       * @example
       * ```ts
       * // Type-based parent constraints
       * can_be_parent: (node) => {
       *   // Only container types can be parents
       *   return ["frame", "group", "container"].includes(node.type);
       * }
       * ```
       *
       * @example
       * ```ts
       * // Container vs content type constraints
       * can_be_parent: (node) => {
       *   // Containers can have children
       *   if (node.type === "container" || node.type === "folder") return true;
       *   // Content types cannot have children
       *   if (node.type === "content" || node.type === "asset") return false;
       *   return true;
       * }
       * ```
       *
       * @example
       * ```ts
       * // Role-based constraints
       * can_be_parent: (node) => {
       *   // Only certain roles can have children
       *   return node.role === "container" || node.role === "folder";
       * }
       * ```
       *
       * @remarks
       * - Checked before `mv()` when node would receive a child
       * - More efficient than `can_link` for simple "can/cannot be parent" checks
       * - Use when constraint depends only on the parent node
       * - Use `can_link` if you need to check parent-child compatibility
       * - Default (when not provided): `true` (any node can be parent)
       *
       * @see {@link can_be_child} for child constraints
       * @see {@link can_link} for relationship-specific constraints
       * @see {@link max_out_degree} for capacity constraints
       */
      can_be_parent?(node: T, id: Key): boolean;
      /**
       * Whether a node can be a child (have a parent).
       *
       * This is a node-level constraint checked before allowing a node to be moved.
       * Use this for:
       * - **Type constraints**: "Root nodes cannot be children"
       * - **State constraints**: "Locked nodes cannot be moved"
       * - **Role constraints**: "Top-level containers must stay at root"
       *
       * @param node - The node data that would become a child
       * @param id - The node's ID in the graph
       * @returns `true` if the node can be a child, `false` otherwise
       *
       * @example
       * ```ts
       * // Root node constraints
       * can_be_child: (node) => {
       *   // Root nodes cannot be children
       *   return !node.isRoot;
       * }
       * ```
       *
       * @example
       * ```ts
       * // Type-based movement constraints
       * can_be_child: (node) => {
       *   // Root-level types cannot be nested (like pages, artboards, scenes)
       *   if (node.type === "page" || node.type === "artboard") return false;
       *   // Master components stay at top level
       *   if (node.type === "master") return false;
       *   return true;
       * }
       * ```
       *
       * @example
       * ```ts
       * // Category-based constraints
       * can_be_child: (node) => {
       *   // System nodes cannot be moved
       *   if (node.category === "system") return false;
       *   // Only user-created content can be repositioned
       *   return node.category === "user" || node.category === "template";
       * }
       * ```
       *
       * @example
       * ```ts
       * // Type-based constraints
       * can_be_child: (node) => {
       *   // Pages and artboards must stay at root level
       *   return node.type !== "page" && node.type !== "artboard";
       * }
       * ```
       *
       * @remarks
       * - Checked before `mv()` when moving a node
       * - More efficient than `can_link` for simple "can/cannot be moved" checks
       * - Use when constraint depends only on the child node
       * - Use `can_link` if you need to check parent-child compatibility
       * - Default (when not provided): `true` (any node can be child)
       *
       * @see {@link can_be_parent} for parent constraints
       * @see {@link can_link} for relationship-specific constraints
       */
      can_be_child?(node: T, id: Key): boolean;
    }
    /**
     * Default permissive policy that allows all operations.
     *
     * This policy imposes **no constraints** on tree structure, allowing:
     * - Any node to be a parent (unlimited children)
     * - Any node to be a child (freely movable)
     * - Any parent-child relationship
     * - Unlimited tree depth and breadth
     *
     * ## When to Use
     *
     * Use the default policy when:
     * - You don't need structural constraints
     * - Building a general-purpose tree without type-specific rules
     * - Prototyping before adding constraints
     * - Maximum flexibility is required
     *
     * ## Performance
     *
     * The default policy has **zero overhead**:
     * - All checks return immediately (O(1))
     * - No function calls in hot paths (can be inlined)
     * - Equivalent to having no policy at all
     *
     * @example
     * ```ts
     * // Explicit use of default policy
     * const graph = new Graph(graphData, DEFAULT_POLICY_INFINITE);
     *
     * // Equivalent to not providing a policy (when supported):
     * const graph = new Graph(graphData);
     * ```
     *
     * @example
     * ```ts
     * // Extend the default policy for partial constraints
     * const myPolicy: IGraphPolicy<MyNode> = {
     *   ...DEFAULT_POLICY_INFINITE,
     *   // Only override what you need
     *   max_out_degree: (node) => node.type === "leaf" ? 0 : Infinity,
     * };
     * ```
     *
     * @remarks
     * - **Type-safe**: Works with any node type via `any`
     * - **Composable**: Can be spread and overridden
     * - **Zero cost**: No runtime overhead when used
     * - **Default behavior**: Matches graph behavior before policies
     *
     * @see {@link IGraphPolicy} for creating custom policies
     */
    const DEFAULT_POLICY_INFINITE: IGraphPolicy<unknown>;
    /**
     * Graph manipulation class providing safe tree operations with optional policy constraints.
     *
     * This class wraps an {@link IGraph} and provides methods to safely manipulate
     * the tree structure while maintaining data integrity. All structural changes
     * (move, remove, reorder) are handled through this class to ensure the graph
     * remains in a consistent state.
     *
     * @typeParam T - The type of data stored in each node
     *
     * @example
     * ```ts
     * interface DocumentNode {
     *   id: string;
     *   type: string;
     *   name: string;
     * }
     *
     * const graph = new Graph<DocumentNode>({
     *   nodes: {
     *     "doc": { id: "doc", type: "document", name: "My Doc" },
     *     "section1": { id: "section1", type: "section", name: "Section 1" },
     *     "section2": { id: "section2", type: "section", name: "Section 2" },
     *   },
     *   links: {
     *     "doc": ["section1", "section2"],
     *     "section1": undefined,
     *     "section2": undefined,
     *   }
     * });
     *
     * // Reorder sections
     * graph.order("section2", "front");
     *
     * // Move section1 inside section2
     * graph.mv("section1", "section2", 0);
     *
     * // Remove section2 and its subtree (including section1)
     * const removed = graph.rm("section2");
     * console.log(removed); // ["section1", "section2"]
     * ```
     *
     * @example
     * ```ts
     * // Using with policy constraints
     * interface DesignNode {
     *   type: "scene" | "frame" | "text" | "image";
     * }
     *
     * const policy: IGraphPolicy<DesignNode> = {
     *   max_out_degree: (node) => {
     *     if (node.type === "text" || node.type === "image") return 0;
     *     return Infinity;
     *   },
     *   can_be_child: (node) => node.type !== "scene",
     * };
     *
     * const graph = new Graph<DesignNode>(graphData, policy);
     * graph.mv("frame", "text"); // ❌ Throws: text cannot have children
     * graph.mv("scene", "frame"); // ❌ Throws: scene cannot be a child
     * ```
     *
     * @remarks
     * **Mutability Pattern:**
     * - This class **modifies the constructor data directly** (in-place mutation)
     * - All methods mutate the graph reference passed to the constructor
     * - This design works seamlessly with immutability libraries like Immer:
     *   you can pass a draft to the constructor and mutations will apply to that draft
     * - Use {@link snapshot} to get a copy of the current state when needed
     *
     * **Policy Constraints:**
     * - Optional {@link IGraphPolicy} can be provided to enforce structural rules
     * - Policies are checked before mutations (atomic operations)
     * - Failed policy checks throw descriptive errors
     * - Use {@link DEFAULT_POLICY_INFINITE} for no constraints (default)
     *
     * **Validation:**
     * - The graph validates node existence; invalid operations will throw
     * - Error messages follow file-system conventions for familiarity
     * - Policy violations provide specific error messages
     *
     * @example
     * ```ts
     * // Using with Immer (or similar immutability patterns)
     * import { produce } from "immer";
     *
     * const state = {
     *   graph: {
     *     nodes: { root: {...}, child: {...} },
     *     links: { root: ["child"], child: undefined }
     *   }
     * };
     *
     * const nextState = produce(state, draft => {
     *   // Pass draft.graph to constructor - mutations apply to draft
     *   const graph = new Graph(draft.graph);
     *   graph.rm("child");
     *   // draft.graph is now modified, producing new immutable state
     * });
     * ```
     */
    class Graph<T> {
      private readonly graph;
      private readonly policy;
      private _generation;
      private _cachedLUT;
      private _cachedLUTGeneration;
      constructor(graph: IGraph<T>, policy?: IGraphPolicy<T>);
      /**
       * Generation counter that increments on every effective mutation.
       *
       * This counter is used to track changes to the graph structure. It increments
       * whenever an operation modifies the graph (nodes or links), enabling efficient
       * cache invalidation for derived data structures like LUT.
       *
       * @returns Current generation number (starts at 0)
       *
       * @example
       * ```ts
       * const graph = new Graph(data);
       * const gen1 = graph.generation; // 0
       *
       * graph.mv("a", "b");
       * const gen2 = graph.generation; // 1 (or higher)
       *
       * graph.rm("c");
       * const gen3 = graph.generation; // 2+ (or higher)
       * ```
       *
       * @remarks
       * - Starts at 0 on construction
       * - Increments on: mv(), rm(), unlink(), order(), import()
       * - Does not increment on failed operations or no-ops
       * - May increment multiple times per operation (e.g., recursive rm())
       * - Used internally for LUT caching
       */
      get generation(): number;
      /**
       * Get or compute the lookup table (LUT) for efficient hierarchy queries.
       *
       * This getter provides a {@link lut.ITreeLUT} structure for O(1) parent/child
       * lookups. The LUT is computed once and cached until the graph structure changes
       * (tracked via generation counter).
       *
       * @returns Lookup table with lu_keys, lu_parent, and lu_children
       *
       * @example
       * ```ts
       * const graph = new Graph(data);
       * const lut = graph.lut;
       *
       * // Use with TreeLUT for advanced queries
       * const tree = new TreeLUT(lut);
       * console.log(tree.depthOf("node-id"));
       * console.log(tree.ancestorsOf("node-id"));
       * ```
       *
       * @remarks
       * **Caching:**
       * - First access computes LUT from current graph state
       * - Subsequent accesses return cached LUT (O(1))
       * - Cache invalidates when generation changes (any mutation)
       * - Recomputes automatically on next access after mutation
       *
       * **Performance:**
       * - Computation: O(n + e) where n = nodes, e = edges
       * - Cached access: O(1)
       * - Memory: O(n + e) for cached LUT
       *
       * **Use Cases:**
       * - Frequent parent lookups (O(1) vs O(n))
       * - Depth calculations
       * - Ancestor/descendant checks
       * - Sibling queries
       *
       * @see {@link lut.TreeLUT} for query methods
       * @see {@link generation} for cache invalidation tracking
       */
      get lut(): lut.ITreeLUT;
      /**
       * Ensures a node has a children array in links, initializing if needed.
       *
       * @param id - The node ID to ensure children for
       * @returns The children array for the node (guaranteed to be defined)
       * @internal
       */
      private enschildren;
      /**
       * Creates a snapshot of the current graph state.
       *
       * This method returns a copy of the graph structure, useful for:
       * - Implementing undo/redo functionality
       * - Creating checkpoints before operations
       * - Comparing graph states
       * - Exporting graph data
       *
       * @returns A new IGraph object with copied nodes and links
       *
       * @example
       * ```ts
       * const graph = new Graph({ nodes: {...}, links: {...} });
       * const before = graph.snapshot();
       *
       * graph.mv("child", "newParent");
       *
       * const after = graph.snapshot();
       * // before and after are independent objects
       * ```
       *
       * @remarks
       * - The `nodes` record is shallow-copied (node objects are not cloned)
       * - The `links` record and all child arrays are deep-copied for independence
       * - If you need deep copies of node data, clone the nodes separately
       */
      snapshot(): IGraph<T>;
      /**
       * Recursively remove a node and its entire subtree from the graph.
       *
       * This method removes the specified node along with all of its descendants,
       * cleaning up all associated links. The removal is recursive, so if the node
       * has children, those children and their children are also removed.
       *
       * @param key - The node ID to remove
       * @returns Array of removed node IDs in removal order (children first, then parent)
       * @throws {Error} If the node does not exist
       * @mutates Modifies the graph in-place by removing nodes and updating links
       *
       * @example
       * ```ts
       * // Tree: root -> [a -> [b, c], d]
       * const removed = graph.rm("a");
       * console.log(removed); // ["b", "c", "a"]
       * // Now the tree is: root -> [d]
       * ```
       *
       * @remarks
       * - Children are removed before parents (depth-first)
       * - All links referencing the removed nodes are cleaned up
       * - For removing a single node without its children, use {@link unlink}
       * - The return value can be used to implement undo functionality
       *
       * @see {@link unlink} for removing a node without its children
       */
      rm(key: Key): RmResult;
      /**
       * Unlink (delete) a single node from the graph without removing its children.
       *
       * This method removes only the specified node from the graph. If the node has children,
       * those children become orphaned (detached from the tree). This is useful when you want
       * to remove a node but preserve its subtree for re-attachment elsewhere.
       *
       * @param key - The node ID to unlink
       * @throws {Error} If the node does not exist
       * @mutates Modifies the graph in-place by removing the node and updating parent links
       *
       * @example
       * ```ts
       * // Tree: root -> a -> b
       * graph.unlink("a");
       * // Now: root (b exists but is orphaned)
       *
       * // b can be re-attached
       * graph.mv("b", "root");
       * // Now: root -> b
       * ```
       *
       * @remarks
       * - Only the specified node is removed; children are not affected
       * - Children of the removed node become orphaned and may need re-attachment
       * - For removing a node and its entire subtree, use {@link rm}
       * - The node's entry is removed from both `nodes` and `links`
       *
       * @see {@link rm} for recursive removal including children
       * @see {@link mv} for re-attaching orphaned nodes
       */
      unlink(key: Key): void;
      /**
       * Move one or more nodes to a new parent at a specific position.
       *
       * This method relocates nodes within the tree, updating all relevant links automatically.
       * Nodes are detached from their current parent (if any) and attached to the target parent
       * at the specified index.
       *
       * @param sources - Single node ID or array of node IDs to move
       * @param target - Target parent node ID to move into
       * @param index - Insertion index in target's children array. -1 (default) appends at end.
       * @throws {Error} If any source node or target node does not exist
       * @mutates Modifies the graph in-place by updating links
       *
       * @example
       * ```ts
       * // Tree: root -> [a, b], b -> [c]
       * graph.mv("c", "root", 0);
       * // Now: root -> [c, a, b], b -> []
       *
       * // Move multiple nodes
       * graph.mv(["a", "b"], "c");
       * // Now: root -> [], c -> [a, b]
       *
       * // Insert at specific position
       * graph.mv("a", "root", 1);
       * // Now: root -> [c, a], b -> []
       * ```
       *
       * @remarks
       * - Nodes are automatically detached from their current parent
       * - If moving multiple nodes, they maintain their relative order
       * - Index is clamped to valid range (0 to children.length)
       * - Moving a node to its current parent changes its position among siblings
       * - Cycle detection is NOT implemented; avoid moving ancestors into descendants
       *
       * **Behavioral Note:**
       * Unlike {@link flat_with_children.mv} which throws an error when the target lacks
       * a children array, this method **auto-initializes** missing or undefined link entries.
       * This is intentional: `graph.IGraph` explicitly allows `undefined` in its type signature
       * (`links: Record<string, string[] | undefined>`), making this behavior consistent
       * with the graph's design philosophy of handling sparse structures gracefully.
       *
       * @see {@link order} for reordering within the same parent
       */
      mv(sources: Key | Key[], target: Key, index?: number): void;
      /**
       * Import an external sub-graph into the current graph, attaching specified roots to a parent.
       *
       * This method merges an external graph structure into the current one, handling both
       * data (nodes) and structure (links) atomically. It's designed for scenarios like:
       * - Inserting sub-documents (copy/paste, templates, components)
       * - Merging separate graph structures
       * - Batch insertion of hierarchical data
       *
       * The operation is **atomic**: either all validations pass and the entire subgraph
       * is imported, or an error is thrown and the graph remains unchanged.
       *
       * @param subgraph - External graph to import (contains nodes and links)
       * @param roots - Node IDs from subgraph to attach as children of parent
       * @param parent - Parent node ID in the current graph to attach roots to
       * @param index - Insertion index in parent's children array (default: -1 = append)
       * @throws {Error} If any node ID from subgraph conflicts with existing nodes
       * @throws {Error} If parent node doesn't exist in current graph
       * @throws {Error} If any root ID doesn't exist in subgraph
       * @throws {Error} If policy constraints are violated
       * @mutates Modifies the graph in-place by adding nodes/links and attaching roots
       *
       * @example
       * ```ts
       * // Import a component sub-graph
       * const mainGraph = new tree.graph.Graph({
       *   nodes: { page: { name: "Page" } },
       *   links: { page: [] }
       * });
       *
       * const component = {
       *   nodes: {
       *     header: { name: "Header" },
       *     logo: { name: "Logo" },
       *     title: { name: "Title" }
       *   },
       *   links: {
       *     header: ["logo", "title"],
       *     logo: undefined,
       *     title: undefined
       *   }
       * };
       *
       * // Import component into page at index 0
       * mainGraph.import(component, ["header"], "page", 0);
       * // Now: page -> [header], header -> [logo, title]
       * ```
       *
       * @example
       * ```ts
       * // Import multiple root nodes (like paste operation)
       * const clipboard = {
       *   nodes: {
       *     box1: { type: "frame" },
       *     box2: { type: "frame" },
       *     text1: { type: "text" }
       *   },
       *   links: {
       *     box1: undefined,
       *     box2: undefined,
       *     text1: undefined
       *   }
       * };
       *
       * graph.import(clipboard, ["box1", "box2", "text1"], "container");
       * // Now: container -> [...existing, box1, box2, text1]
       * ```
       *
       * @remarks
       * **ID Conflict Handling:**
       * - All node IDs in subgraph must be unique vs. existing nodes
       * - Conflicts are detected before any mutations occur
       * - Consider using a key remapping strategy if conflicts are expected
       *
       * **Orphan Nodes:**
       * - All nodes in subgraph are added, even if not reachable from roots
       * - Orphaned nodes remain unlinked (not attached to any parent)
       * - Useful for preserving entire document structure
       *
       * **Link Preservation:**
       * - All internal links within subgraph are preserved exactly
       * - Only roots get new parent links (to the specified parent)
       * - Order is preserved via the index parameter
       *
       * **Policy Integration:**
       * - Root attachment goes through mv(), so all policy checks apply
       * - If any root violates policy, entire import fails (atomic)
       *
       * @see {@link mv} for moving existing nodes (used internally for root attachment)
       */
      import(subgraph: IGraph<T>, roots: Key[], parent: Key, index?: number): void;
      /**
       * Reorder a node within its current parent's children array.
       *
       * This method changes the position of a node among its siblings without changing
       * its parent. Useful for z-index type operations or list reordering.
       *
       * @param key - The node ID to reorder
       * @param order - Ordering directive:
       *   - `"front"` - Move to the end (highest z-index)
       *   - `"back"` - Move to the start (lowest z-index)
       *   - `"forward"` - Move one position toward the end
       *   - `"backward"` - Move one position toward the start
       *   - `number` - Move to specific index
       * @throws {Error} If the node does not exist
       * @mutates Modifies the graph in-place by reordering links
       *
       * @example
       * ```ts
       * // Tree: parent -> [a, b, c, d]
       * graph.order("b", "front");
       * // Now: parent -> [a, c, d, b]
       *
       * graph.order("d", "back");
       * // Now: parent -> [d, a, c, b]
       *
       * graph.order("c", "forward");
       * // Now: parent -> [d, a, b, c]
       *
       * graph.order("b", 0);
       * // Now: parent -> [b, d, a, c]
       * ```
       *
       * @remarks
       * - Only affects the node's position among siblings
       * - Does not change the node's parent
       * - Numeric indices are clamped to valid range
       * - "forward" and "backward" are relative to current position
       * - Has no effect if the node has no parent (orphan node)
       *
       * @see {@link mv} for moving nodes to a different parent
       */
      order(key: Key, order: "back" | "front" | "backward" | "forward" | number): void;
    }
    /**
     * Remap all keys in a graph, producing a new graph with fresh keys.
     *
     * This is essential when importing external documents (SVG, clipboard,
     * drag-drop) where the source graph may contain keys that conflict
     * with the current document.
     *
     * The function:
     * 1. Builds a mapping from old keys to new keys via the `keygen` callback
     * 2. Rewrites `nodes`, `links`, and `roots` using the mapping
     * 3. Returns the remapped graph and the key mapping (old → new)
     *
     * @param subgraph - The graph to remap (nodes + links)
     * @param roots - The root keys of the subgraph
     * @param keygen - Function that generates a fresh key for each old key
     * @returns `{ graph, roots, keyMap }` with all keys replaced
     *
     * @example
     * ```ts
     * const { graph, roots, keyMap } = tree.graph.remapKeys(
     *   imported,
     *   imported.scene.children_refs,
     *   (oldKey) => idgen.next()
     * );
     * ```
     */
    function remapKeys<T>(subgraph: IGraph<T>, roots: tree.Key[], keygen: (oldKey: tree.Key) => tree.Key): {
      graph: IGraph<T>;
      roots: tree.Key[];
      keyMap: Record<tree.Key, tree.Key>;
    };
  }
}
//#endregion
//#region ../../node_modules/.pnpm/csstype@3.1.0/node_modules/csstype/index.d.ts
interface StandardLonghandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * The **`accent-color`** CSS property sets the accent color for user-interface controls generated by some elements.
   *
   * **Syntax**: `auto | <color>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **93** | **92**  | **15.4** | **93** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/accent-color
   */
  accentColor?: Property.AccentColor | undefined;
  /**
   * The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
   *
   * **Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **28**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  alignContent?: Property.AlignContent | undefined;
  /**
   * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   * **Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **52**  | **20**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  alignItems?: Property.AlignItems | undefined;
  /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
   *
   * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **36**  | **20**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  |      IE      |
   * | :----: | :-----: | :------: | :----: | :----------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _-x-_ |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  alignSelf?: Property.AlignSelf | undefined;
  /**
   * The **`align-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis.
   *
   * **Syntax**: `[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-tracks
   */
  alignTracks?: Property.AlignTracks | undefined;
  /**
   * The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  animationDelay?: Property.AnimationDelay<TTime> | undefined;
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
   *
   * **Syntax**: `<single-animation-direction>#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  animationDirection?: Property.AnimationDirection | undefined;
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  animationDuration?: Property.AnimationDuration<TTime> | undefined;
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * **Syntax**: `<single-animation-fill-mode>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  animationFillMode?: Property.AnimationFillMode | undefined;
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.
   *
   * **Syntax**: `<single-animation-iteration-count>#`
   *
   * **Initial value**: `1`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  animationIterationCount?: Property.AnimationIterationCount | undefined;
  /**
   * The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.
   *
   * **Syntax**: `[ none | <keyframes-name> ]#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  animationName?: Property.AnimationName | undefined;
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * **Syntax**: `<single-animation-play-state>#`
   *
   * **Initial value**: `running`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  animationPlayState?: Property.AnimationPlayState | undefined;
  /**
   * The **`animation-timeline`** CSS property specifies the names of one or more `@scroll-timeline` at-rules describing the scroll animations to apply to the element.
   *
   * **Syntax**: `<single-animation-timeline>#`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timeline
   */
  animationTimeline?: Property.AnimationTimeline | undefined;
  /**
   * The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  animationTimingFunction?: Property.AnimationTimingFunction | undefined;
  /**
   * The **`appearance`** CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.
   *
   * **Syntax**: `none | auto | textfield | menulist-button | <compat-auto>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |   Edge   | IE  |
   * | :-----: | :-----: | :------: | :------: | :-: |
   * | **84**  | **80**  | **15.4** |  **84**  | No  |
   * | 1 _-x-_ | 1 _-x-_ | 3 _-x-_  | 12 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: Property.Appearance | undefined;
  /**
   * The **`aspect-ratio`** CSS property sets a **preferred aspect ratio** for the box, which will be used in the calculation of auto sizes and some other layout functions.
   *
   * **Syntax**: `auto | <ratio>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **88** | **89**  | **15** | **88** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/aspect-ratio
   */
  aspectRatio?: Property.AspectRatio | undefined;
  /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   * **Syntax**: `none | <filter-function-list>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  | IE  |
   * | :----: | :-----: | :---------: | :----: | :-: |
   * | **76** |   n/a   | **9** _-x-_ | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  backdropFilter?: Property.BackdropFilter | undefined;
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   * **Syntax**: `visible | hidden`
   *
   * **Initial value**: `visible`
   *
   * |  Chrome  | Firefox  |  Safari   |  Edge  |   IE   |
   * | :------: | :------: | :-------: | :----: | :----: |
   * |  **36**  |  **16**  | **15.4**  | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ | 5.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  backfaceVisibility?: Property.BackfaceVisibility | undefined;
  /**
   * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
   *
   * **Syntax**: `<attachment>#`
   *
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  backgroundAttachment?: Property.BackgroundAttachment | undefined;
  /**
   * The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.
   *
   * **Syntax**: `<blend-mode>#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **35** | **30**  | **8**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  backgroundBlendMode?: Property.BackgroundBlendMode | undefined;
  /**
   * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
   *
   * **Syntax**: `<box>#`
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **4**  | **14**  | **12** | **9** |
   * |        |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  backgroundClip?: Property.BackgroundClip | undefined;
  /**
   * The **`background-color`** CSS property sets the background color of an element.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  backgroundColor?: Property.BackgroundColor | undefined;
  /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   *
   * **Syntax**: `<bg-image>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  backgroundImage?: Property.BackgroundImage | undefined;
  /**
   * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
   *
   * **Syntax**: `<box>#`
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  backgroundOrigin?: Property.BackgroundOrigin | undefined;
  /**
   * The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`
   *
   * **Initial value**: `0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **49**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  backgroundPositionX?: Property.BackgroundPositionX<TLength> | undefined;
  /**
   * The **`background-position-y`** CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`
   *
   * **Initial value**: `0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **49**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  backgroundPositionY?: Property.BackgroundPositionY<TLength> | undefined;
  /**
   * The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
   *
   * **Syntax**: `<repeat-style>#`
   *
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  backgroundRepeat?: Property.BackgroundRepeat | undefined;
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **3**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  backgroundSize?: Property.BackgroundSize<TLength> | undefined;
  /**
   * **Syntax**: `clip | ellipsis | <string>`
   *
   * **Initial value**: `clip`
   */
  blockOverflow?: Property.BlockOverflow | undefined;
  /**
   * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Syntax**: `<'width'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  blockSize?: Property.BlockSize<TLength> | undefined;
  /**
   * The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>{1,2}`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-color
   */
  borderBlockColor?: Property.BorderBlockColor | undefined;
  /**
   * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  borderBlockEndColor?: Property.BorderBlockEndColor | undefined;
  /**
   * The **`border-block-end-style`** CSS property defines the style of the logical block-end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  borderBlockEndStyle?: Property.BorderBlockEndStyle | undefined;
  /**
   * The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  borderBlockEndWidth?: Property.BorderBlockEndWidth<TLength> | undefined;
  /**
   * The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  borderBlockStartColor?: Property.BorderBlockStartColor | undefined;
  /**
   * The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  borderBlockStartStyle?: Property.BorderBlockStartStyle | undefined;
  /**
   * The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  borderBlockStartWidth?: Property.BorderBlockStartWidth<TLength> | undefined;
  /**
   * The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-style
   */
  borderBlockStyle?: Property.BorderBlockStyle | undefined;
  /**
   * The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-width
   */
  borderBlockWidth?: Property.BorderBlockWidth<TLength> | undefined;
  /**
   * The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  borderBottomColor?: Property.BorderBottomColor | undefined;
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  borderBottomLeftRadius?: Property.BorderBottomLeftRadius<TLength> | undefined;
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  borderBottomRightRadius?: Property.BorderBottomRightRadius<TLength> | undefined;
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   *
   * **Syntax**: `<line-style>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle?: Property.BorderBottomStyle | undefined;
  /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of an element.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  borderBottomWidth?: Property.BorderBottomWidth<TLength> | undefined;
  /**
   * The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.
   *
   * **Syntax**: `collapse | separate`
   *
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  borderCollapse?: Property.BorderCollapse | undefined;
  /**
   * The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **89** | **66**  | **15** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   */
  borderEndEndRadius?: Property.BorderEndEndRadius<TLength> | undefined;
  /**
   * The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **89** | **66**  | **15** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   */
  borderEndStartRadius?: Property.BorderEndStartRadius<TLength> | undefined;
  /**
   * The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.
   *
   * **Syntax**: `[ <length> | <number> ]{1,4}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  borderImageOutset?: Property.BorderImageOutset<TLength> | undefined;
  /**
   * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
   *
   * **Syntax**: `[ stretch | repeat | round | space ]{1,2}`
   *
   * **Initial value**: `stretch`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  borderImageRepeat?: Property.BorderImageRepeat | undefined;
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.
   *
   * **Syntax**: `<number-percentage>{1,4} && fill?`
   *
   * **Initial value**: `100%`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  borderImageSlice?: Property.BorderImageSlice | undefined;
  /**
   * The **`border-image-source`** CSS property sets the source image used to create an element's border image.
   *
   * **Syntax**: `none | <image>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  borderImageSource?: Property.BorderImageSource | undefined;
  /**
   * The **`border-image-width`** CSS property sets the width of an element's border image.
   *
   * **Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  borderImageWidth?: Property.BorderImageWidth<TLength> | undefined;
  /**
   * The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>{1,2}`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-color
   */
  borderInlineColor?: Property.BorderInlineColor | undefined;
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |           Firefox           |  Safari  |  Edge  | IE  |
   * | :----: | :-------------------------: | :------: | :----: | :-: |
   * | **69** |           **41**            | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-end-color)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  borderInlineEndColor?: Property.BorderInlineEndColor | undefined;
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome |           Firefox           |  Safari  |  Edge  | IE  |
   * | :----: | :-------------------------: | :------: | :----: | :-: |
   * | **69** |           **41**            | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-end-style)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  borderInlineEndStyle?: Property.BorderInlineEndStyle | undefined;
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome |           Firefox           |  Safari  |  Edge  | IE  |
   * | :----: | :-------------------------: | :------: | :----: | :-: |
   * | **69** |           **41**            | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-end-width)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  borderInlineEndWidth?: Property.BorderInlineEndWidth<TLength> | undefined;
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |            Firefox            |  Safari  |  Edge  | IE  |
   * | :----: | :---------------------------: | :------: | :----: | :-: |
   * | **69** |            **41**             | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-start-color)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  borderInlineStartColor?: Property.BorderInlineStartColor | undefined;
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome |            Firefox            |  Safari  |  Edge  | IE  |
   * | :----: | :---------------------------: | :------: | :----: | :-: |
   * | **69** |            **41**             | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-start-style)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  borderInlineStartStyle?: Property.BorderInlineStartStyle | undefined;
  /**
   * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  borderInlineStartWidth?: Property.BorderInlineStartWidth<TLength> | undefined;
  /**
   * The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-style
   */
  borderInlineStyle?: Property.BorderInlineStyle | undefined;
  /**
   * The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-width
   */
  borderInlineWidth?: Property.BorderInlineWidth<TLength> | undefined;
  /**
   * The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  borderLeftColor?: Property.BorderLeftColor | undefined;
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   *
   * **Syntax**: `<line-style>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  borderLeftStyle?: Property.BorderLeftStyle | undefined;
  /**
   * The **`border-left-width`** CSS property sets the width of the left border of an element.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  borderLeftWidth?: Property.BorderLeftWidth<TLength> | undefined;
  /**
   * The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  borderRightColor?: Property.BorderRightColor | undefined;
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   *
   * **Syntax**: `<line-style>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  borderRightStyle?: Property.BorderRightStyle | undefined;
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of an element.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  borderRightWidth?: Property.BorderRightWidth<TLength> | undefined;
  /**
   * The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
   *
   * **Syntax**: `<length> <length>?`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  borderSpacing?: Property.BorderSpacing<TLength> | undefined;
  /**
   * The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **89** | **66**  | **15** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   */
  borderStartEndRadius?: Property.BorderStartEndRadius<TLength> | undefined;
  /**
   * The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **89** | **66**  | **15** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   */
  borderStartStartRadius?: Property.BorderStartStartRadius<TLength> | undefined;
  /**
   * The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  borderTopColor?: Property.BorderTopColor | undefined;
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  borderTopLeftRadius?: Property.BorderTopLeftRadius<TLength> | undefined;
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  borderTopRightRadius?: Property.BorderTopRightRadius<TLength> | undefined;
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   *
   * **Syntax**: `<line-style>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  borderTopStyle?: Property.BorderTopStyle | undefined;
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of an element.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  borderTopWidth?: Property.BorderTopWidth<TLength> | undefined;
  /**
   * The **`bottom`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: Property.Bottom<TLength> | undefined;
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Syntax**: `slice | clone`
   *
   * **Initial value**: `slice`
   *
   * |    Chrome    | Firefox |   Safari    |     Edge     | IE  |
   * | :----------: | :-----: | :---------: | :----------: | :-: |
   * | **22** _-x-_ | **32**  | **7** _-x-_ | **79** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  boxDecorationBreak?: Property.BoxDecorationBreak | undefined;
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
   *
   * **Syntax**: `none | <shadow>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  |  **4**  | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  boxShadow?: Property.BoxShadow | undefined;
  /**
   * The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.
   *
   * **Syntax**: `content-box | border-box`
   *
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  boxSizing?: Property.BoxSizing | undefined;
  /**
   * The **`break-after`** CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
   *
   * **Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  |   No   | **12** | **10** |
   *
   * ---
   *
   * _Supported in Paged Media_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  breakAfter?: Property.BreakAfter | undefined;
  /**
   * The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
   *
   * **Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  |   No   | **12** | **10** |
   *
   * ---
   *
   * _Supported in Paged Media_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  breakBefore?: Property.BreakBefore | undefined;
  /**
   * The **`break-inside`** CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
   *
   * **Syntax**: `auto | avoid | avoid-page | avoid-column | avoid-region`
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * ---
   *
   * _Supported in Paged Media_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  breakInside?: Property.BreakInside | undefined;
  /**
   * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
   *
   * **Syntax**: `top | bottom | block-start | block-end | inline-start | inline-end`
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  captionSide?: Property.CaptionSide | undefined;
  /**
   * The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   *
   * **Syntax**: `auto | <color>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **53**  | **11.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  caretColor?: Property.CaretColor | undefined;
  /**
   * The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.
   *
   * **Syntax**: `none | left | right | both | inline-start | inline-end`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: Property.Clear | undefined;
  /**
   * The **`clip-path`** CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
   *
   * **Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **55**  | **3.5** | **9.1** | **12** | **10** |
   * | 23 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  clipPath?: Property.ClipPath | undefined;
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `<currentcolor>` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `canvastext`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: Property.Color | undefined;
  /**
   * The **`print-color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   * **Syntax**: `economy | exact`
   *
   * **Initial value**: `economy`
   *
   * |    Chrome    |       Firefox       |  Safari  |     Edge     | IE  |
   * | :----------: | :-----------------: | :------: | :----------: | :-: |
   * | **17** _-x-_ |       **97**        | **15.4** | **79** _-x-_ | No  |
   * |              | 48 _(color-adjust)_ | 6 _-x-_  |              |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/print-color-adjust
   */
  colorAdjust?: Property.PrintColorAdjust | undefined;
  /**
   * The **`color-scheme`** CSS property allows an element to indicate which color schemes it can comfortably be rendered in.
   *
   * **Syntax**: `normal | [ light | dark | <custom-ident> ]+ && only?`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **81** | **96**  | **13** | **81** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color-scheme
   */
  colorScheme?: Property.ColorScheme | undefined;
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * **Syntax**: `<integer> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  columnCount?: Property.ColumnCount | undefined;
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * **Syntax**: `auto | balance | balance-all`
   *
   * **Initial value**: `balance`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **50** | **52**  |  **9**  | **12** | **10** |
   * |        |         | 8 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  columnFill?: Property.ColumnFill | undefined;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Syntax**: `normal | <length-percentage>`
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **84** | **63**  | **14.1** | **84** | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |         Chrome         |        Firefox         |          Safari          |  Edge  | IE  |
   * | :--------------------: | :--------------------: | :----------------------: | :----: | :-: |
   * |         **66**         |         **61**         |          **12**          | **16** | No  |
   * | 57 _(grid-column-gap)_ | 52 _(grid-column-gap)_ | 10.1 _(grid-column-gap)_ |        |     |
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  | **10**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  columnGap?: Property.ColumnGap<TLength> | undefined;
  /**
   * The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  columnRuleColor?: Property.ColumnRuleColor | undefined;
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   *
   * **Syntax**: `<'border-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  columnRuleStyle?: Property.ColumnRuleStyle | undefined;
  /**
   * The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.
   *
   * **Syntax**: `<'border-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  columnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   * **Syntax**: `none | all`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **50**  | **71**  |   **9**   | **12** | **10** |
   * | 6 _-x-_ |         | 5.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  columnSpan?: Property.ColumnSpan | undefined;
  /**
   * The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
   *
   * **Syntax**: `<length> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **50**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  columnWidth?: Property.ColumnWidth<TLength> | undefined;
  /**
   * The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.
   *
   * **Syntax**: `none | strict | content | [ size || layout || style || paint ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **52** | **69**  | **15.4** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/contain
   */
  contain?: Property.Contain | undefined;
  /**
   * The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are **anonymous replaced elements**.
   *
   * **Syntax**: `normal | none | [ <content-replacement> | <content-list> ] [/ [ <string> | <counter> ]+ ]?`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: Property.Content | undefined;
  /**
   * The **`content-visibility`** CSS property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. Basically it enables the user agent to skip an element's rendering work (including layout and painting) until it is needed — which makes the initial page load much faster.
   *
   * **Syntax**: `visible | auto | hidden`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **85** |   No    |   No   | **85** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content-visibility
   */
  contentVisibility?: Property.ContentVisibility | undefined;
  /**
   * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
   *
   * **Syntax**: `[ <counter-name> <integer>? ]+ | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **3**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  counterIncrement?: Property.CounterIncrement | undefined;
  /**
   * The **`counter-reset`** CSS property resets a CSS counter to a given value. This property will create a new counter or reversed counter with the given name on the specified element.
   *
   * **Syntax**: `[ <counter-name> <integer>? | <reversed-counter-name> <integer>? ]+ | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **3**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  counterReset?: Property.CounterReset | undefined;
  /**
   * The **`counter-set`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.
   *
   * **Syntax**: `[ <counter-name> <integer>? ]+ | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **85** | **68**  |   No   | **85** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-set
   */
  counterSet?: Property.CounterSet | undefined;
  /**
   * The **`cursor`** CSS property sets the mouse cursor, if any, to show when the mouse pointer is over an element.
   *
   * **Syntax**: `[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: Property.Cursor | undefined;
  /**
   * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
   *
   * **Syntax**: `ltr | rtl`
   *
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **2**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: Property.Direction | undefined;
  /**
   * The **`display`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
   *
   * **Syntax**: `[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>`
   *
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: Property.Display | undefined;
  /**
   * The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.
   *
   * **Syntax**: `show | hide`
   *
   * **Initial value**: `show`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  emptyCells?: Property.EmptyCells | undefined;
  /**
   * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   * **Syntax**: `none | <filter-function-list>`
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  | IE  |
   * | :------: | :-----: | :-----: | :----: | :-: |
   * |  **53**  | **35**  | **9.1** | **12** | No  |
   * | 18 _-x-_ |         | 6 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: Property.Filter | undefined;
  /**
   * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
   *
   * **Syntax**: `content | <'width'>`
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **22**  |  **9**  | **12** | **11** |
   * | 22 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  flexBasis?: Property.FlexBasis<TLength> | undefined;
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Syntax**: `row | row-reverse | column | column-reverse`
   *
   * **Initial value**: `row`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |    IE    |
   * | :------: | :------: | :-----: | :----: | :------: |
   * |  **29**  |  **81**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ | 49 _-x-_ | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  flexDirection?: Property.FlexDirection | undefined;
  /**
   * The **`flex-grow`** CSS property sets the flex grow factor of a flex item's main size.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |            IE            |
   * | :------: | :-----: | :-----: | :----: | :----------------------: |
   * |  **29**  | **20**  |  **9**  | **12** |          **11**          |
   * | 22 _-x-_ |         | 7 _-x-_ |        | 10 _(-ms-flex-positive)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  flexGrow?: Property.FlexGrow | undefined;
  /**
   * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `1`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **10** |
   * | 22 _-x-_ |         | 8 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  flexShrink?: Property.FlexShrink | undefined;
  /**
   * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * **Syntax**: `nowrap | wrap | wrap-reverse`
   *
   * **Initial value**: `nowrap`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **28**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  flexWrap?: Property.FlexWrap | undefined;
  /**
   * The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
   *
   * **Syntax**: `left | right | none | inline-start | inline-end`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: Property.Float | undefined;
  /**
   * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   * **Syntax**: `[ <family-name> | <generic-family> ]#`
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  fontFamily?: Property.FontFamily | undefined;
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   * **Syntax**: `normal | <feature-tag-value>#`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **48**  |  **34**  | **9.1** | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |         |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  fontFeatureSettings?: Property.FontFeatureSettings | undefined;
  /**
   * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
   *
   * **Syntax**: `auto | normal | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **33** | **32**  |  **9**  | **79** | No  |
   * |        |         | 6 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  fontKerning?: Property.FontKerning | undefined;
  /**
   * The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.
   *
   * **Syntax**: `normal | <string>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  |   No   |  No  | No  |
   * |        | 4 _-x-_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  fontLanguageOverride?: Property.FontLanguageOverride | undefined;
  /**
   * The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **79** | **62**  | **11** | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing
   */
  fontOpticalSizing?: Property.FontOpticalSizing | undefined;
  /**
   * The **`font-size`** CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative `<length>` units, such as `em`, `ex`, and so forth.
   *
   * **Syntax**: `<absolute-size> | <relative-size> | <length-percentage>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  fontSize?: Property.FontSize<TLength> | undefined;
  /**
   * The **`font-size-adjust`** CSS property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).
   *
   * **Syntax**: `none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number> ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   |  **1**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  fontSizeAdjust?: Property.FontSizeAdjust | undefined;
  /**
   * The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.
   *
   * **Syntax**: `auto | never | always | <absolute-size> | <length>`
   *
   * **Initial value**: `auto`
   *
   * |              Chrome              |              Firefox               |              Safari              |               Edge                | IE  |
   * | :------------------------------: | :--------------------------------: | :------------------------------: | :-------------------------------: | :-: |
   * | **5** _(-webkit-font-smoothing)_ | **25** _(-moz-osx-font-smoothing)_ | **4** _(-webkit-font-smoothing)_ | **79** _(-webkit-font-smoothing)_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-smooth
   */
  fontSmooth?: Property.FontSmooth<TLength> | undefined;
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   *
   * **Syntax**: `<font-stretch-absolute>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **60** |  **9**  | **11** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  fontStretch?: Property.FontStretch | undefined;
  /**
   * The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
   *
   * **Syntax**: `normal | italic | oblique <angle>?`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  fontStyle?: Property.FontStyle | undefined;
  /**
   * The **`font-synthesis`** CSS property controls which missing typefaces, bold, italic, or small-caps, may be synthesized by the browser.
   *
   * **Syntax**: `none | [ weight || style || small-caps ]`
   *
   * **Initial value**: `weight style`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **97** | **34**  | **9**  | **97** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  fontSynthesis?: Property.FontSynthesis | undefined;
  /**
   * The **`font-variant`** CSS shorthand property allows you to set all the font variants for a font.
   *
   * **Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  fontVariant?: Property.FontVariant | undefined;
  /**
   * The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.
   *
   * **Syntax**: `normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * |   No   | **34**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates
   */
  fontVariantAlternates?: Property.FontVariantAlternates | undefined;
  /**
   * The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.
   *
   * **Syntax**: `normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **52** | **34**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  fontVariantCaps?: Property.FontVariantCaps | undefined;
  /**
   * The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.
   *
   * **Syntax**: `normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **63** | **34**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  fontVariantEastAsian?: Property.FontVariantEastAsian | undefined;
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   * **Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  | IE  |
   * | :------: | :-----: | :-----: | :----: | :-: |
   * |  **34**  | **34**  | **9.1** | **79** | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  fontVariantLigatures?: Property.FontVariantLigatures | undefined;
  /**
   * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   *
   * **Syntax**: `normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **52** | **34**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  fontVariantNumeric?: Property.FontVariantNumeric | undefined;
  /**
   * The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.
   *
   * **Syntax**: `normal | sub | super`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * |   No   | **34**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  fontVariantPosition?: Property.FontVariantPosition | undefined;
  /**
   * The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.
   *
   * **Syntax**: `normal | [ <string> <number> ]#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **62** | **62**  | **11** | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  fontVariationSettings?: Property.FontVariationSettings | undefined;
  /**
   * The **`font-weight`** CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` that is currently set.
   *
   * **Syntax**: `<font-weight-absolute> | bolder | lighter`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  fontWeight?: Property.FontWeight | undefined;
  /**
   * The **`forced-color-adjust`** CSS property allows authors to opt certain elements out of forced colors mode. This then restores the control of those values to CSS.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |              Edge               |                 IE                  |
   * | :----: | :-----: | :----: | :-----------------------------: | :---------------------------------: |
   * | **89** |   No    |   No   |             **79**              | **10** _(-ms-high-contrast-adjust)_ |
   * |        |         |        | 12 _(-ms-high-contrast-adjust)_ |                                     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust
   */
  forcedColorAdjust?: Property.ForcedColorAdjust | undefined;
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.
   *
   * **Syntax**: `<track-size>+`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |             IE              |
   * | :----: | :-----: | :------: | :----: | :-------------------------: |
   * | **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  gridAutoColumns?: Property.GridAutoColumns<TLength> | undefined;
  /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   *
   * **Syntax**: `[ row | column ] || dense`
   *
   * **Initial value**: `row`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  gridAutoFlow?: Property.GridAutoFlow | undefined;
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.
   *
   * **Syntax**: `<track-size>+`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |            IE            |
   * | :----: | :-----: | :------: | :----: | :----------------------: |
   * | **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  gridAutoRows?: Property.GridAutoRows<TLength> | undefined;
  /**
   * The **`grid-column-end`** CSS property specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
   *
   * **Syntax**: `<grid-line>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  gridColumnEnd?: Property.GridColumnEnd | undefined;
  /**
   * The **`grid-column-start`** CSS property specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
   *
   * **Syntax**: `<grid-line>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  gridColumnStart?: Property.GridColumnStart | undefined;
  /**
   * The **`grid-row-end`** CSS property specifies a grid item's end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
   *
   * **Syntax**: `<grid-line>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  gridRowEnd?: Property.GridRowEnd | undefined;
  /**
   * The **`grid-row-start`** CSS property specifies a grid item's start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   *
   * **Syntax**: `<grid-line>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  gridRowStart?: Property.GridRowStart | undefined;
  /**
   * The **`grid-template-areas`** CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.
   *
   * **Syntax**: `none | <string>+`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  gridTemplateAreas?: Property.GridTemplateAreas | undefined;
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   *
   * **Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |             IE              |
   * | :----: | :-----: | :------: | :----: | :-------------------------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  gridTemplateColumns?: Property.GridTemplateColumns<TLength> | undefined;
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   *
   * **Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |            IE            |
   * | :----: | :-----: | :------: | :----: | :----------------------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  gridTemplateRows?: Property.GridTemplateRows<TLength> | undefined;
  /**
   * The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.
   *
   * **Syntax**: `none | [ first || [ force-end | allow-end ] || last ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    | **10** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation
   */
  hangingPunctuation?: Property.HangingPunctuation | undefined;
  /**
   * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: Property.Height<TLength> | undefined;
  /**
   * The **`hyphenate-character`** CSS property sets the character (or string) used at the end of a line before a hyphenation break.
   *
   * **Syntax**: `auto | <string>`
   *
   * **Initial value**: `auto`
   *
   * |   Chrome    | Firefox |    Safari     |     Edge     | IE  |
   * | :---------: | :-----: | :-----------: | :----------: | :-: |
   * | **6** _-x-_ | **98**  | **5.1** _-x-_ | **79** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphenate-character
   */
  hyphenateCharacter?: Property.HyphenateCharacter | undefined;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Syntax**: `none | manual | auto`
   *
   * **Initial value**: `manual`
   *
   * |  Chrome  | Firefox |    Safari     |  Edge  |      IE      |
   * | :------: | :-----: | :-----------: | :----: | :----------: |
   * |  **55**  | **43**  | **5.1** _-x-_ | **79** | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |        |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: Property.Hyphens | undefined;
  /**
   * The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image.
   *
   * **Syntax**: `from-image | <angle> | [ <angle>? flip ]`
   *
   * **Initial value**: `from-image`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **81** | **26**  | **13.1** | **81** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  imageOrientation?: Property.ImageOrientation | undefined;
  /**
   * The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.
   *
   * **Syntax**: `auto | crisp-edges | pixelated`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **13** | **3.6** | **6**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  imageRendering?: Property.ImageRendering | undefined;
  /**
   * **Syntax**: `[ from-image || <resolution> ] && snap?`
   *
   * **Initial value**: `1dppx`
   */
  imageResolution?: Property.ImageResolution | undefined;
  /**
   * The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.
   *
   * **Syntax**: `normal | [ <number> <integer>? ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox |   Safari    | Edge | IE  |
   * | :----: | :-----: | :---------: | :--: | :-: |
   * |   No   |   No    | **9** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  initialLetter?: Property.InitialLetter | undefined;
  /**
   * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Syntax**: `<'width'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  inlineSize?: Property.InlineSize<TLength> | undefined;
  /**
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   */
  inputSecurity?: Property.InputSecurity | undefined;
  /**
   * The **`inset`** CSS property is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties. It has the same multi-value syntax of the `margin` shorthand.
   *
   * **Syntax**: `<'top'>{1,4}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset
   */
  inset?: Property.Inset<TLength> | undefined;
  /**
   * The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block
   */
  insetBlock?: Property.InsetBlock<TLength> | undefined;
  /**
   * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-end
   */
  insetBlockEnd?: Property.InsetBlockEnd<TLength> | undefined;
  /**
   * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-start
   */
  insetBlockStart?: Property.InsetBlockStart<TLength> | undefined;
  /**
   * The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline
   */
  insetInline?: Property.InsetInline<TLength> | undefined;
  /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
   */
  insetInlineEnd?: Property.InsetInlineEnd<TLength> | undefined;
  /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
   */
  insetInlineStart?: Property.InsetInlineStart<TLength> | undefined;
  /**
   * The **`isolation`** CSS property determines whether an element must create a new stacking context.
   *
   * **Syntax**: `auto | isolate`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **41** | **36**  | **8**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: Property.Isolation | undefined;
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * **Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **52**  | **20**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  justifyContent?: Property.JustifyContent | undefined;
  /**
   * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   *
   * **Syntax**: `normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]`
   *
   * **Initial value**: `legacy`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **52** | **20**  | **9**  | **12** | **11** |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **45**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  justifyItems?: Property.JustifyItems | undefined;
  /**
   * The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.
   *
   * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **45**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  |      IE      |
   * | :----: | :-----: | :------: | :----: | :----------: |
   * | **57** | **45**  | **10.1** | **16** | **10** _-x-_ |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  justifySelf?: Property.JustifySelf | undefined;
  /**
   * The **`justify-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their inline axis.
   *
   * **Syntax**: `[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-tracks
   */
  justifyTracks?: Property.JustifyTracks | undefined;
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: Property.Left<TLength> | undefined;
  /**
   * The **`letter-spacing`** CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.
   *
   * **Syntax**: `normal | <length>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  letterSpacing?: Property.LetterSpacing<TLength> | undefined;
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * **Syntax**: `auto | loose | normal | strict | anywhere`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE    |
   * | :-----: | :-----: | :-----: | :----: | :-----: |
   * | **58**  | **69**  | **11**  | **14** | **5.5** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |         |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  lineBreak?: Property.LineBreak | undefined;
  /**
   * The **`line-height`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * **Syntax**: `normal | <number> | <length> | <percentage>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  lineHeight?: Property.LineHeight<TLength> | undefined;
  /**
   * The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   |   No    |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height-step
   */
  lineHeightStep?: Property.LineHeightStep<TLength> | undefined;
  /**
   * The **`list-style-image`** CSS property sets an image to be used as the list item marker.
   *
   * **Syntax**: `<image> | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  listStyleImage?: Property.ListStyleImage | undefined;
  /**
   * The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.
   *
   * **Syntax**: `inside | outside`
   *
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  listStylePosition?: Property.ListStylePosition | undefined;
  /**
   * The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
   *
   * **Syntax**: `<counter-style> | <string> | none`
   *
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  listStyleType?: Property.ListStyleType | undefined;
  /**
   * The **`margin-block`** CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block
   */
  marginBlock?: Property.MarginBlock<TLength> | undefined;
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **41**  | **12.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  marginBlockEnd?: Property.MarginBlockEnd<TLength> | undefined;
  /**
   * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **41**  | **12.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  marginBlockStart?: Property.MarginBlockStart<TLength> | undefined;
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  marginBottom?: Property.MarginBottom<TLength> | undefined;
  /**
   * The **`margin-inline`** CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline
   */
  marginInline?: Property.MarginInline<TLength> | undefined;
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * |          Chrome          |        Firefox        |          Safari          |           Edge            | IE  |
   * | :----------------------: | :-------------------: | :----------------------: | :-----------------------: | :-: |
   * |          **87**          |        **41**         |         **12.1**         |          **87**           | No  |
   * | 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ | 79 _(-webkit-margin-end)_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  marginInlineEnd?: Property.MarginInlineEnd<TLength> | undefined;
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * |           Chrome           |         Firefox         |           Safari           |            Edge             | IE  |
   * | :------------------------: | :---------------------: | :------------------------: | :-------------------------: | :-: |
   * |           **87**           |         **41**          |          **12.1**          |           **87**            | No  |
   * | 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ | 79 _(-webkit-margin-start)_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  marginInlineStart?: Property.MarginInlineStart<TLength> | undefined;
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  marginLeft?: Property.MarginLeft<TLength> | undefined;
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  marginRight?: Property.MarginRight<TLength> | undefined;
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  marginTop?: Property.MarginTop<TLength> | undefined;
  /**
   * The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.
   *
   * **Syntax**: `luminance | alpha`
   *
   * **Initial value**: `alpha`
   */
  maskBorderMode?: Property.MaskBorderMode | undefined;
  /**
   * The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.
   *
   * **Syntax**: `[ <length> | <number> ]{1,4}`
   *
   * **Initial value**: `0`
   *
   * |                 Chrome                  | Firefox |                  Safari                   |                   Edge                   | IE  |
   * | :-------------------------------------: | :-----: | :---------------------------------------: | :--------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-outset)_ |   No    | **3.1** _(-webkit-mask-box-image-outset)_ | **79** _(-webkit-mask-box-image-outset)_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-outset
   */
  maskBorderOutset?: Property.MaskBorderOutset<TLength> | undefined;
  /**
   * The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.
   *
   * **Syntax**: `[ stretch | repeat | round | space ]{1,2}`
   *
   * **Initial value**: `stretch`
   *
   * |                 Chrome                  | Firefox |                  Safari                   |                   Edge                   | IE  |
   * | :-------------------------------------: | :-----: | :---------------------------------------: | :--------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-repeat)_ |   No    | **3.1** _(-webkit-mask-box-image-repeat)_ | **79** _(-webkit-mask-box-image-repeat)_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat
   */
  maskBorderRepeat?: Property.MaskBorderRepeat | undefined;
  /**
   * The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.
   *
   * **Syntax**: `<number-percentage>{1,4} fill?`
   *
   * **Initial value**: `0`
   *
   * |                 Chrome                 | Firefox |                  Safari                  |                  Edge                   | IE  |
   * | :------------------------------------: | :-----: | :--------------------------------------: | :-------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-slice)_ |   No    | **3.1** _(-webkit-mask-box-image-slice)_ | **79** _(-webkit-mask-box-image-slice)_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-slice
   */
  maskBorderSlice?: Property.MaskBorderSlice | undefined;
  /**
   * The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.
   *
   * **Syntax**: `none | <image>`
   *
   * **Initial value**: `none`
   *
   * |                 Chrome                  | Firefox |                  Safari                   |                   Edge                   | IE  |
   * | :-------------------------------------: | :-----: | :---------------------------------------: | :--------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-source)_ |   No    | **3.1** _(-webkit-mask-box-image-source)_ | **79** _(-webkit-mask-box-image-source)_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-source
   */
  maskBorderSource?: Property.MaskBorderSource | undefined;
  /**
   * The **`mask-border-width`** CSS property sets the width of an element's mask border.
   *
   * **Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`
   *
   * **Initial value**: `auto`
   *
   * |                 Chrome                 | Firefox |                  Safari                  |                  Edge                   | IE  |
   * | :------------------------------------: | :-----: | :--------------------------------------: | :-------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-width)_ |   No    | **3.1** _(-webkit-mask-box-image-width)_ | **79** _(-webkit-mask-box-image-width)_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-width
   */
  maskBorderWidth?: Property.MaskBorderWidth<TLength> | undefined;
  /**
   * The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.
   *
   * **Syntax**: `[ <geometry-box> | no-clip ]#`
   *
   * **Initial value**: `border-box`
   *
   * |   Chrome    | Firefox |  Safari  |     Edge     | IE  |
   * | :---------: | :-----: | :------: | :----------: | :-: |
   * | **1** _-x-_ | **53**  | **15.4** | **79** _-x-_ | No  |
   * |             |         | 4 _-x-_  |              |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  maskClip?: Property.MaskClip | undefined;
  /**
   * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
   *
   * **Syntax**: `<compositing-operator>#`
   *
   * **Initial value**: `add`
   *
   * | Chrome | Firefox |  Safari  | Edge  | IE  |
   * | :----: | :-----: | :------: | :---: | :-: |
   * |   No   | **53**  | **15.4** | 18-79 | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  maskComposite?: Property.MaskComposite | undefined;
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element. By default this means the alpha channel of the mask image will be multiplied with the alpha channel of the element. This can be controlled with the `mask-mode` property.
   *
   * **Syntax**: `<mask-reference>#`
   *
   * **Initial value**: `none`
   *
   * |   Chrome    | Firefox |  Safari  | Edge  | IE  |
   * | :---------: | :-----: | :------: | :---: | :-: |
   * | **1** _-x-_ | **53**  | **15.4** | 16-79 | No  |
   * |             |         | 4 _-x-_  |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  maskImage?: Property.MaskImage | undefined;
  /**
   * The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.
   *
   * **Syntax**: `<masking-mode>#`
   *
   * **Initial value**: `match-source`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   | **53**  | **15.4** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  maskMode?: Property.MaskMode | undefined;
  /**
   * The **`mask-origin`** CSS property sets the origin of a mask.
   *
   * **Syntax**: `<geometry-box>#`
   *
   * **Initial value**: `border-box`
   *
   * |   Chrome    | Firefox |  Safari  |     Edge     | IE  |
   * | :---------: | :-----: | :------: | :----------: | :-: |
   * | **1** _-x-_ | **53**  | **15.4** | **79** _-x-_ | No  |
   * |             |         | 4 _-x-_  |              |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  maskOrigin?: Property.MaskOrigin | undefined;
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
   *
   * **Syntax**: `<position>#`
   *
   * **Initial value**: `center`
   *
   * |   Chrome    | Firefox |  Safari   | Edge  | IE  |
   * | :---------: | :-----: | :-------: | :---: | :-: |
   * | **1** _-x-_ | **53**  | **15.4**  | 18-79 | No  |
   * |             |         | 3.1 _-x-_ |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  maskPosition?: Property.MaskPosition<TLength> | undefined;
  /**
   * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Syntax**: `<repeat-style>#`
   *
   * **Initial value**: `no-repeat`
   *
   * |   Chrome    | Firefox |  Safari   | Edge  | IE  |
   * | :---------: | :-----: | :-------: | :---: | :-: |
   * | **1** _-x-_ | **53**  | **15.4**  | 18-79 | No  |
   * |             |         | 3.1 _-x-_ |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  maskRepeat?: Property.MaskRepeat | undefined;
  /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto`
   *
   * |   Chrome    | Firefox |  Safari  | Edge  | IE  |
   * | :---------: | :-----: | :------: | :---: | :-: |
   * | **4** _-x-_ | **53**  | **15.4** | 18-79 | No  |
   * |             |         | 4 _-x-_  |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  maskSize?: Property.MaskSize<TLength> | undefined;
  /**
   * The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
   *
   * **Syntax**: `luminance | alpha`
   *
   * **Initial value**: `luminance`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **24** | **35**  | **7**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  maskType?: Property.MaskType | undefined;
  /**
   * The `math-style` property indicates whether MathML equations should render with normal or compact height.
   *
   * **Syntax**: `normal | compact`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |  n/a   |   n/a   | **14.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/math-style
   */
  mathStyle?: Property.MathStyle | undefined;
  /**
   * The **`max-block-size`** CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.
   *
   * **Syntax**: `<'max-width'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-block-size
   */
  maxBlockSize?: Property.MaxBlockSize<TLength> | undefined;
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   *
   * **Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **18** |  **1**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  maxHeight?: Property.MaxHeight<TLength> | undefined;
  /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.
   *
   * **Syntax**: `<'max-width'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari   |  Edge  | IE  |
   * | :----: | :-----: | :--------: | :----: | :-: |
   * | **57** | **41**  |  **12.1**  | **79** | No  |
   * |        |         | 10.1 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  maxInlineSize?: Property.MaxInlineSize<TLength> | undefined;
  /**
   * **Syntax**: `none | <integer>`
   *
   * **Initial value**: `none`
   */
  maxLines?: Property.MaxLines | undefined;
  /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
   *
   * **Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  maxWidth?: Property.MaxWidth<TLength> | undefined;
  /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Syntax**: `<'min-width'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  minBlockSize?: Property.MinBlockSize<TLength> | undefined;
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **3**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  minHeight?: Property.MinHeight<TLength> | undefined;
  /**
   * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Syntax**: `<'min-width'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  minInlineSize?: Property.MinInlineSize<TLength> | undefined;
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  minWidth?: Property.MinWidth<TLength> | undefined;
  /**
   * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
   *
   * **Syntax**: `<blend-mode> | plus-lighter`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **41** | **32**  | **8**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  mixBlendMode?: Property.MixBlendMode | undefined;
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **55**         | **72**  |   No   | **79** | No  |
   * | 46 _(motion-distance)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  motionDistance?: Property.OffsetDistance<TLength> | undefined;
  /**
   * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
   *
   * **Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari |  Edge  | IE  |
   * | :----------------: | :-----: | :----: | :----: | :-: |
   * |       **55**       | **72**  |   No   | **79** | No  |
   * | 46 _(motion-path)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  motionPath?: Property.OffsetPath | undefined;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   * **Syntax**: `[ auto | reverse ] || <angle>`
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **56**         | **72**  |   No   | **79** | No  |
   * | 46 _(motion-rotation)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  motionRotation?: Property.OffsetRotate | undefined;
  /**
   * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   * **Syntax**: `fill | contain | cover | none | scale-down`
   *
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **32** | **36**  | **10** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  objectFit?: Property.ObjectFit | undefined;
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **32** | **36**  | **10** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  objectPosition?: Property.ObjectPosition<TLength> | undefined;
  /**
   * **Syntax**: `auto | <position>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **72**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-anchor
   */
  offsetAnchor?: Property.OffsetAnchor<TLength> | undefined;
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **55**         | **72**  |   No   | **79** | No  |
   * | 46 _(motion-distance)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  offsetDistance?: Property.OffsetDistance<TLength> | undefined;
  /**
   * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
   *
   * **Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari |  Edge  | IE  |
   * | :----------------: | :-----: | :----: | :----: | :-: |
   * |       **55**       | **72**  |   No   | **79** | No  |
   * | 46 _(motion-path)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  offsetPath?: Property.OffsetPath | undefined;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   * **Syntax**: `[ auto | reverse ] || <angle>`
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **56**         | **72**  |   No   | **79** | No  |
   * | 46 _(motion-rotation)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotate?: Property.OffsetRotate | undefined;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   * **Syntax**: `[ auto | reverse ] || <angle>`
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **56**         | **72**  |   No   | **79** | No  |
   * | 46 _(motion-rotation)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotation?: Property.OffsetRotate | undefined;
  /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   * **Syntax**: `<alpha-value>`
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: Property.Opacity | undefined;
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: Property.Order | undefined;
  /**
   * The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **25** |   No    | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: Property.Orphans | undefined;
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * **Syntax**: `<color> | invert`
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  outlineColor?: Property.OutlineColor | undefined;
  /**
   * The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **1**  | **1.5** | **1.2** | **15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  outlineOffset?: Property.OutlineOffset<TLength> | undefined;
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Syntax**: `auto | <'border-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  outlineStyle?: Property.OutlineStyle | undefined;
  /**
   * The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  outlineWidth?: Property.OutlineWidth<TLength> | undefined;
  /**
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **56** | **66**  |   No   | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-anchor
   */
  overflowAnchor?: Property.OverflowAnchor | undefined;
  /**
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **69**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-block
   */
  overflowBlock?: Property.OverflowBlock | undefined;
  /**
   * The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.
   *
   * **Syntax**: `padding-box | content-box`
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **29**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Mozilla/Gecko/Chrome/CSS/overflow-clip-box
   */
  overflowClipBox?: Property.OverflowClipBox | undefined;
  /**
   * **Syntax**: `<visual-box> || <length [0,∞]>`
   *
   * **Initial value**: `0px`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **90** |   No    |   No   | **90** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin
   */
  overflowClipMargin?: Property.OverflowClipMargin<TLength> | undefined;
  /**
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **69**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-inline
   */
  overflowInline?: Property.OverflowInline | undefined;
  /**
   * The **`overflow-wrap`** CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   * **Syntax**: `normal | break-word | anywhere`
   *
   * **Initial value**: `normal`
   *
   * |     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |
   * | :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |
   * |     **23**      |      **49**       |      **7**      |      **18**      | **5.5** _(word-wrap)_ |
   * | 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  overflowWrap?: Property.OverflowWrap | undefined;
  /**
   * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  overflowX?: Property.OverflowX | undefined;
  /**
   * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  overflowY?: Property.OverflowY | undefined;
  /**
   * The **`overscroll-behavior-block`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **77** | **73**  |   No   | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block
   */
  overscrollBehaviorBlock?: Property.OverscrollBehaviorBlock | undefined;
  /**
   * The **`overscroll-behavior-inline`** CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **77** | **73**  |   No   | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline
   */
  overscrollBehaviorInline?: Property.OverscrollBehaviorInline | undefined;
  /**
   * The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  |   No   | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  overscrollBehaviorX?: Property.OverscrollBehaviorX | undefined;
  /**
   * The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  |   No   | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  overscrollBehaviorY?: Property.OverscrollBehaviorY | undefined;
  /**
   * The **`padding-block`** CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block
   */
  paddingBlock?: Property.PaddingBlock<TLength> | undefined;
  /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **41**  | **12.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  paddingBlockEnd?: Property.PaddingBlockEnd<TLength> | undefined;
  /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **41**  | **12.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  paddingBlockStart?: Property.PaddingBlockStart<TLength> | undefined;
  /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  paddingBottom?: Property.PaddingBottom<TLength> | undefined;
  /**
   * The **`padding-inline`** CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline
   */
  paddingInline?: Property.PaddingInline<TLength> | undefined;
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * |          Chrome           |        Firefox         |          Safari           |            Edge            | IE  |
   * | :-----------------------: | :--------------------: | :-----------------------: | :------------------------: | :-: |
   * |          **87**           |         **41**         |         **12.1**          |           **87**           | No  |
   * | 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ | 79 _(-webkit-padding-end)_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  paddingInlineEnd?: Property.PaddingInlineEnd<TLength> | undefined;
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * |           Chrome            |         Firefox          |           Safari            |             Edge             | IE  |
   * | :-------------------------: | :----------------------: | :-------------------------: | :--------------------------: | :-: |
   * |           **87**            |          **41**          |          **12.1**           |            **87**            | No  |
   * | 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ | 79 _(-webkit-padding-start)_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  paddingInlineStart?: Property.PaddingInlineStart<TLength> | undefined;
  /**
   * The **`padding-left`** CSS property sets the width of the padding area to the left of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  paddingLeft?: Property.PaddingLeft<TLength> | undefined;
  /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  paddingRight?: Property.PaddingRight<TLength> | undefined;
  /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  paddingTop?: Property.PaddingTop<TLength> | undefined;
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   *
   * **Syntax**: `auto | always | avoid | left | right | recto | verso`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  pageBreakAfter?: Property.PageBreakAfter | undefined;
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   *
   * **Syntax**: `auto | always | avoid | left | right | recto | verso`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  pageBreakBefore?: Property.PageBreakBefore | undefined;
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   *
   * **Syntax**: `auto | avoid`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  pageBreakInside?: Property.PageBreakInside | undefined;
  /**
   * The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.
   *
   * **Syntax**: `normal | [ fill || stroke || markers ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **35** | **60**  | **8**  | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  paintOrder?: Property.PaintOrder | undefined;
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.
   *
   * **Syntax**: `none | <length>`
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **36**  |  **16**  |  **9**  | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: Property.Perspective<TLength> | undefined;
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **36**  |  **16**  |  **9**  | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  perspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
  /**
   * The **`place-content`** CSS shorthand property allows you to align content along both the block and inline directions at once (i.e. the `align-content` and `justify-content` properties) in a relevant layout system such as Grid or Flexbox.
   *
   * **Syntax**: `<'align-content'> <'justify-content'>?`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **59** | **45**  | **9**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  placeContent?: Property.PlaceContent | undefined;
  /**
   * The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.
   *
   * **Syntax**: `auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **1**  | **1.5** | **4**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  pointerEvents?: Property.PointerEvents | undefined;
  /**
   * The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   * **Syntax**: `static | relative | absolute | sticky | fixed`
   *
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: Property.Position | undefined;
  /**
   * The **`print-color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   * **Syntax**: `economy | exact`
   *
   * **Initial value**: `economy`
   *
   * |    Chrome    |       Firefox       |  Safari  |     Edge     | IE  |
   * | :----------: | :-----------------: | :------: | :----------: | :-: |
   * | **17** _-x-_ |       **97**        | **15.4** | **79** _-x-_ | No  |
   * |              | 48 _(color-adjust)_ | 6 _-x-_  |              |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/print-color-adjust
   */
  printColorAdjust?: Property.PrintColorAdjust | undefined;
  /**
   * The **`quotes`** CSS property sets how the browser should render quotation marks that are added using the `open-quotes` or `close-quotes` values of the CSS `content` property.
   *
   * **Syntax**: `none | auto | [ <string> <string> ]+`
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: Property.Quotes | undefined;
  /**
   * The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.
   *
   * **Syntax**: `none | both | horizontal | vertical | block | inline`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **4**  | **3**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: Property.Resize | undefined;
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: Property.Right<TLength> | undefined;
  /**
   * The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.
   *
   * **Syntax**: `none | <angle> | [ x | y | z | <number>{3} ] && <angle>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   | **72**  | **14.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: Property.Rotate | undefined;
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
   *
   * **Syntax**: `normal | <length-percentage>`
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **84** | **63**  | **14.1** | **84** | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |       Chrome        |       Firefox       |        Safari         |  Edge  | IE  |
   * | :-----------------: | :-----------------: | :-------------------: | :----: | :-: |
   * |       **66**        |       **61**        |        **12**         | **16** | No  |
   * | 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ | 10.1 _(grid-row-gap)_ |        |     |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  rowGap?: Property.RowGap<TLength> | undefined;
  /**
   * The **`ruby-align`** CSS property defines the distribution of the different ruby elements over the base.
   *
   * **Syntax**: `start | center | space-between | space-around`
   *
   * **Initial value**: `space-around`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **38**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  rubyAlign?: Property.RubyAlign | undefined;
  /**
   * **Syntax**: `separate | collapse | auto`
   *
   * **Initial value**: `separate`
   */
  rubyMerge?: Property.RubyMerge | undefined;
  /**
   * The **`ruby-position`** CSS property defines the position of a ruby element relatives to its base element. It can be positioned over the element (`over`), under it (`under`), or between the characters on their right side (`inter-character`).
   *
   * **Syntax**: `[ alternate || [ over | under ] ] | inter-character`
   *
   * **Initial value**: `alternate`
   *
   * | Chrome  | Firefox |   Safari    | Edge  | IE  |
   * | :-----: | :-----: | :---------: | :---: | :-: |
   * | **84**  | **38**  | **7** _-x-_ | 12-79 | No  |
   * | 1 _-x-_ |         |             |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  rubyPosition?: Property.RubyPosition | undefined;
  /**
   * The **`scale`** CSS property allows you to specify scale transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Syntax**: `none | <number>{1,3}`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   | **72**  | **14.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: Property.Scale | undefined;
  /**
   * The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
   *
   * **Syntax**: `auto | smooth`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **61** | **36**  | **15.4** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  scrollBehavior?: Property.ScrollBehavior | undefined;
  /**
   * The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.
   *
   * **Syntax**: `<length>{1,4}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |          Safari           |  Edge  | IE  |
   * | :----: | :-----: | :-----------------------: | :----: | :-: |
   * | **69** | **90**  |         **14.1**          | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin
   */
  scrollMargin?: Property.ScrollMargin<TLength> | undefined;
  /**
   * The `scroll-margin-block` shorthand property sets the scroll margins of an element in the block dimension.
   *
   * **Syntax**: `<length>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block
   */
  scrollMarginBlock?: Property.ScrollMarginBlock<TLength> | undefined;
  /**
   * The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end
   */
  scrollMarginBlockEnd?: Property.ScrollMarginBlockEnd<TLength> | undefined;
  /**
   * The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start
   */
  scrollMarginBlockStart?: Property.ScrollMarginBlockStart<TLength> | undefined;
  /**
   * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |              Safari              |  Edge  | IE  |
   * | :----: | :-----: | :------------------------------: | :----: | :-: |
   * | **69** | **68**  |             **14.1**             | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-bottom)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
   */
  scrollMarginBottom?: Property.ScrollMarginBottom<TLength> | undefined;
  /**
   * The `scroll-margin-inline` shorthand property sets the scroll margins of an element in the inline dimension.
   *
   * **Syntax**: `<length>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline
   */
  scrollMarginInline?: Property.ScrollMarginInline<TLength> | undefined;
  /**
   * The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end
   */
  scrollMarginInlineEnd?: Property.ScrollMarginInlineEnd<TLength> | undefined;
  /**
   * The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start
   */
  scrollMarginInlineStart?: Property.ScrollMarginInlineStart<TLength> | undefined;
  /**
   * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari             |  Edge  | IE  |
   * | :----: | :-----: | :----------------------------: | :----: | :-: |
   * | **69** | **68**  |            **14.1**            | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-left)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
   */
  scrollMarginLeft?: Property.ScrollMarginLeft<TLength> | undefined;
  /**
   * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari              |  Edge  | IE  |
   * | :----: | :-----: | :-----------------------------: | :----: | :-: |
   * | **69** | **68**  |            **14.1**             | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-right)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
   */
  scrollMarginRight?: Property.ScrollMarginRight<TLength> | undefined;
  /**
   * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |            Safari             |  Edge  | IE  |
   * | :----: | :-----: | :---------------------------: | :----: | :-: |
   * | **69** | **68**  |           **14.1**            | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-top)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
   */
  scrollMarginTop?: Property.ScrollMarginTop<TLength> | undefined;
  /**
   * The **`scroll-padding`** shorthand property sets scroll padding on all sides of an element at once, much like the `padding` property does for padding on an element.
   *
   * **Syntax**: `[ auto | <length-percentage> ]{1,4}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding
   */
  scrollPadding?: Property.ScrollPadding<TLength> | undefined;
  /**
   * The `scroll-padding-block` shorthand property sets the scroll padding of an element in the block dimension.
   *
   * **Syntax**: `[ auto | <length-percentage> ]{1,2}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block
   */
  scrollPaddingBlock?: Property.ScrollPaddingBlock<TLength> | undefined;
  /**
   * The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end
   */
  scrollPaddingBlockEnd?: Property.ScrollPaddingBlockEnd<TLength> | undefined;
  /**
   * The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start
   */
  scrollPaddingBlockStart?: Property.ScrollPaddingBlockStart<TLength> | undefined;
  /**
   * The `scroll-padding-bottom` property defines offsets for the bottom of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom
   */
  scrollPaddingBottom?: Property.ScrollPaddingBottom<TLength> | undefined;
  /**
   * The `scroll-padding-inline` shorthand property sets the scroll padding of an element in the inline dimension.
   *
   * **Syntax**: `[ auto | <length-percentage> ]{1,2}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline
   */
  scrollPaddingInline?: Property.ScrollPaddingInline<TLength> | undefined;
  /**
   * The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end
   */
  scrollPaddingInlineEnd?: Property.ScrollPaddingInlineEnd<TLength> | undefined;
  /**
   * The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start
   */
  scrollPaddingInlineStart?: Property.ScrollPaddingInlineStart<TLength> | undefined;
  /**
   * The `scroll-padding-left` property defines offsets for the left of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left
   */
  scrollPaddingLeft?: Property.ScrollPaddingLeft<TLength> | undefined;
  /**
   * The `scroll-padding-right` property defines offsets for the right of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right
   */
  scrollPaddingRight?: Property.ScrollPaddingRight<TLength> | undefined;
  /**
   * The **`scroll-padding-top`** property defines offsets for the top of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top
   */
  scrollPaddingTop?: Property.ScrollPaddingTop<TLength> | undefined;
  /**
   * The `scroll-snap-align` property specifies the box's snap position as an alignment of its snap area (as the alignment subject) within its snap container's snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
   *
   * **Syntax**: `[ none | start | end | center ]{1,2}`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **11** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align
   */
  scrollSnapAlign?: Property.ScrollSnapAlign | undefined;
  /**
   * The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.
   *
   * **Syntax**: `<length>{1,4}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |          Safari           |  Edge  | IE  |
   * | :----: | :-----: | :-----------------------: | :----: | :-: |
   * | **69** |  68-90  |         **14.1**          | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin
   */
  scrollSnapMargin?: Property.ScrollMargin<TLength> | undefined;
  /**
   * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |              Safari              |  Edge  | IE  |
   * | :----: | :-----: | :------------------------------: | :----: | :-: |
   * | **69** | **68**  |             **14.1**             | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-bottom)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
   */
  scrollSnapMarginBottom?: Property.ScrollMarginBottom<TLength> | undefined;
  /**
   * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari             |  Edge  | IE  |
   * | :----: | :-----: | :----------------------------: | :----: | :-: |
   * | **69** | **68**  |            **14.1**            | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-left)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
   */
  scrollSnapMarginLeft?: Property.ScrollMarginLeft<TLength> | undefined;
  /**
   * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari              |  Edge  | IE  |
   * | :----: | :-----: | :-----------------------------: | :----: | :-: |
   * | **69** | **68**  |            **14.1**             | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-right)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
   */
  scrollSnapMarginRight?: Property.ScrollMarginRight<TLength> | undefined;
  /**
   * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |            Safari             |  Edge  | IE  |
   * | :----: | :-----: | :---------------------------: | :----: | :-: |
   * | **69** | **68**  |           **14.1**            | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-top)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
   */
  scrollSnapMarginTop?: Property.ScrollMarginTop<TLength> | undefined;
  /**
   * The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.
   *
   * **Syntax**: `normal | always`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **75** |   No    | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop
   */
  scrollSnapStop?: Property.ScrollSnapStop | undefined;
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |      IE      |
   * | :----: | :-----: | :-----: | :----: | :----------: |
   * | **69** |  39-68  | **11**  | **79** | **10** _-x-_ |
   * |        |         | 9 _-x-_ |        |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  scrollSnapType?: Property.ScrollSnapType | undefined;
  /**
   * The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.
   *
   * **Syntax**: `auto | <color>{2}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **64**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-color
   */
  scrollbarColor?: Property.ScrollbarColor | undefined;
  /**
   * The **`scrollbar-gutter`** CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.
   *
   * **Syntax**: `auto | stable && both-edges?`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **94** | **97**  |   No   | **94** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter
   */
  scrollbarGutter?: Property.ScrollbarGutter | undefined;
  /**
   * The **`scrollbar-width`** property allows the author to set the maximum thickness of an element's scrollbars when they are shown.
   *
   * **Syntax**: `auto | thin | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **64**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-width
   */
  scrollbarWidth?: Property.ScrollbarWidth | undefined;
  /**
   * The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
   *
   * **Syntax**: `<alpha-value>`
   *
   * **Initial value**: `0.0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **37** | **62**  | **10.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  shapeImageThreshold?: Property.ShapeImageThreshold | undefined;
  /**
   * The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **37** | **62**  | **10.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  shapeMargin?: Property.ShapeMargin<TLength> | undefined;
  /**
   * The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
   *
   * **Syntax**: `none | [ <shape-box> || <basic-shape> ] | <image>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **37** | **62**  | **10.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  shapeOutside?: Property.ShapeOutside | undefined;
  /**
   * The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).
   *
   * **Syntax**: `<integer> | <length>`
   *
   * **Initial value**: `8`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **21** | **91**  | **7**  | **79** | No  |
   * |        | 4 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  tabSize?: Property.TabSize<TLength> | undefined;
  /**
   * The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.
   *
   * **Syntax**: `auto | fixed`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **14** |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  tableLayout?: Property.TableLayout | undefined;
  /**
   * The **`text-align`** CSS property sets the horizontal alignment of the content inside a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.
   *
   * **Syntax**: `start | end | left | right | center | justify | match-parent`
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  textAlign?: Property.TextAlign | undefined;
  /**
   * The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
   *
   * **Syntax**: `auto | start | end | left | right | center | justify`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **47** | **49**  |   No   | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  textAlignLast?: Property.TextAlignLast | undefined;
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Syntax**: `none | all | [ digits <integer>? ]`
   *
   * **Initial value**: `none`
   *
   * |           Chrome           | Firefox |              Safari              | Edge  |                   IE                   |
   * | :------------------------: | :-----: | :------------------------------: | :---: | :------------------------------------: |
   * |           **48**           | **48**  | **5.1** _(-webkit-text-combine)_ | 15-79 | **11** _(-ms-text-combine-horizontal)_ |
   * | 9 _(-webkit-text-combine)_ |         |                                  |       |                                        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  textCombineUpright?: Property.TextCombineUpright | undefined;
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **36**  | **12.1** | **79** | No  |
   * |        |         | 8 _-x-_  |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  textDecorationColor?: Property.TextDecorationColor | undefined;
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
   *
   * **Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **36**  | **12.1** | **79** | No  |
   * |        |         | 8 _-x-_  |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  textDecorationLine?: Property.TextDecorationLine | undefined;
  /**
   * The **`text-decoration-skip`** CSS property sets what parts of an element's content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   * **Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`
   *
   * **Initial value**: `objects`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | 57-64  |   No    | **12.1** |  No  | No  |
   * |        |         | 7 _-x-_  |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  textDecorationSkip?: Property.TextDecorationSkip | undefined;
  /**
   * The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
   *
   * **Syntax**: `auto | all | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **64** | **70**  | **15.4** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  textDecorationSkipInk?: Property.TextDecorationSkipInk | undefined;
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   *
   * **Syntax**: `solid | double | dotted | dashed | wavy`
   *
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **36**  | **12.1** | **79** | No  |
   * |        |         | 8 _-x-_  |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  textDecorationStyle?: Property.TextDecorationStyle | undefined;
  /**
   * The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
   *
   * **Syntax**: `auto | from-font | <length> | <percentage> `
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **89** | **70**  | **12.1** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness
   */
  textDecorationThickness?: Property.TextDecorationThickness<TLength> | undefined;
  /**
   * The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
   *
   * **Syntax**: `auto | from-font | <length> | <percentage> `
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge  | IE  |
   * | :----: | :-----: | :------: | :---: | :-: |
   * | 87-89  | **70**  | **12.1** | 87-89 | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness
   */
  textDecorationWidth?: Property.TextDecorationThickness<TLength> | undefined;
  /**
   * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * |  Chrome  | Firefox | Safari |   Edge   | IE  |
   * | :------: | :-----: | :----: | :------: | :-: |
   * |  **99**  | **46**  | **7**  |  **99**  | No  |
   * | 25 _-x-_ |         |        | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  textEmphasisColor?: Property.TextEmphasisColor | undefined;
  /**
   * The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
   *
   * **Syntax**: `[ over | under ] && [ right | left ]`
   *
   * **Initial value**: `over right`
   *
   * |  Chrome  | Firefox | Safari |   Edge   | IE  |
   * | :------: | :-----: | :----: | :------: | :-: |
   * |  **99**  | **46**  | **7**  |  **99**  | No  |
   * | 25 _-x-_ |         |        | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  textEmphasisPosition?: Property.TextEmphasisPosition | undefined;
  /**
   * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   * **Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari |   Edge   | IE  |
   * | :------: | :-----: | :----: | :------: | :-: |
   * |  **99**  | **46**  | **7**  |  **99**  | No  |
   * | 25 _-x-_ |         |        | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  textEmphasisStyle?: Property.TextEmphasisStyle | undefined;
  /**
   * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.
   *
   * **Syntax**: `<length-percentage> && hanging? && each-line?`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  textIndent?: Property.TextIndent<TLength> | undefined;
  /**
   * The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.
   *
   * **Syntax**: `auto | inter-character | inter-word | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * |  n/a   | **55**  |   No   | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  textJustify?: Property.TextJustify | undefined;
  /**
   * The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   * **Syntax**: `mixed | upright | sideways`
   *
   * **Initial value**: `mixed`
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  | IE  |
   * | :------: | :-----: | :-------: | :----: | :-: |
   * |  **48**  | **41**  |  **14**   | **79** | No  |
   * | 11 _-x-_ |         | 5.1 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  textOrientation?: Property.TextOrientation | undefined;
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
   *
   * **Syntax**: `[ clip | ellipsis | <string> ]{1,2}`
   *
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **7**  | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  textOverflow?: Property.TextOverflow | undefined;
  /**
   * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.
   *
   * **Syntax**: `auto | optimizeSpeed | optimizeLegibility | geometricPrecision`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **4**  |  **1**  | **5**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  textRendering?: Property.TextRendering | undefined;
  /**
   * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   *
   * **Syntax**: `none | <shadow-t>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  textShadow?: Property.TextShadow | undefined;
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Syntax**: `none | auto | <percentage>`
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **54** |   No    |   No   | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  textSizeAdjust?: Property.TextSizeAdjust | undefined;
  /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
   *
   * **Syntax**: `none | capitalize | uppercase | lowercase | full-width | full-size-kana`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  textTransform?: Property.TextTransform | undefined;
  /**
   * The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.
   *
   * **Syntax**: `auto | <length> | <percentage> `
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **70**  | **12.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-offset
   */
  textUnderlineOffset?: Property.TextUnderlineOffset<TLength> | undefined;
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   *
   * **Syntax**: `auto | from-font | [ under || [ left | right ] ]`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :------: | :----: | :---: |
   * | **33** | **74**  | **12.1** | **12** | **6** |
   * |        |         | 9 _-x-_  |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  textUnderlinePosition?: Property.TextUnderlinePosition | undefined;
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: Property.Top<TLength> | undefined;
  /**
   * The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
   *
   * **Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |    IE    |
   * | :----: | :-----: | :----: | :----: | :------: |
   * | **36** | **52**  | **13** | **12** |  **11**  |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  touchAction?: Property.TouchAction | undefined;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE    |
   * | :-----: | :-----: | :-------: | :----: | :-----: |
   * | **36**  | **16**  |   **9**   | **12** | **10**  |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: Property.Transform | undefined;
  /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
   *
   * **Syntax**: `content-box | border-box | fill-box | stroke-box | view-box`
   *
   * **Initial value**: `view-box`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **64** | **55**  | **11** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  transformBox?: Property.TransformBox | undefined;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE    |
   * | :-----: | :-------: | :-----: | :----: | :-----: |
   * | **36**  |  **16**   |  **9**  | **12** | **10**  |
   * | 1 _-x-_ | 3.5 _-x-_ | 2 _-x-_ |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  transformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   * **Syntax**: `flat | preserve-3d`
   *
   * **Initial value**: `flat`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  | IE  |
   * | :------: | :------: | :-----: | :----: | :-: |
   * |  **36**  |  **16**  |  **9**  | **12** | No  |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  transformStyle?: Property.TransformStyle | undefined;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **26**  | **16**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  transitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  transitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  transitionProperty?: Property.TransitionProperty | undefined;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  transitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Syntax**: `none | <length-percentage> [ <length-percentage> <length>? ]?`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   | **72**  | **14.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: Property.Translate<TLength> | undefined;
  /**
   * The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.
   *
   * **Syntax**: `normal | embed | isolate | bidi-override | isolate-override | plaintext`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  unicodeBidi?: Property.UnicodeBidi | undefined;
  /**
   * The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.
   *
   * **Syntax**: `auto | text | none | contain | all`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |   Safari    |   Edge   |      IE      |
   * | :-----: | :-----: | :---------: | :------: | :----------: |
   * | **54**  | **69**  | **3** _-x-_ |  **79**  | **10** _-x-_ |
   * | 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  userSelect?: Property.UserSelect | undefined;
  /**
   * The **`vertical-align`** CSS property sets vertical alignment of an inline, inline-block or table-cell box.
   *
   * **Syntax**: `baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`
   *
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  verticalAlign?: Property.VerticalAlign<TLength> | undefined;
  /**
   * The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.
   *
   * **Syntax**: `visible | hidden | collapse`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: Property.Visibility | undefined;
  /**
   * The **`white-space`** CSS property sets how white space inside an element is handled.
   *
   * **Syntax**: `normal | pre | nowrap | pre-wrap | pre-line | break-spaces`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  whiteSpace?: Property.WhiteSpace | undefined;
  /**
   * The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **25** |   No    | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: Property.Widows | undefined;
  /**
   * The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.
   *
   * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: Property.Width<TLength> | undefined;
  /**
   * The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.
   *
   * **Syntax**: `auto | <animateable-feature>#`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **36** | **36**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  willChange?: Property.WillChange | undefined;
  /**
   * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
   *
   * **Syntax**: `normal | break-all | keep-all | break-word`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **15**  | **3**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  wordBreak?: Property.WordBreak | undefined;
  /**
   * The **`word-spacing`** CSS property sets the length of space between words and between tags.
   *
   * **Syntax**: `normal | <length>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  wordSpacing?: Property.WordSpacing<TLength> | undefined;
  /**
   * The **`overflow-wrap`** CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   * **Syntax**: `normal | break-word`
   *
   * **Initial value**: `normal`
   */
  wordWrap?: Property.WordWrap | undefined;
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).
   *
   * **Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`
   *
   * **Initial value**: `horizontal-tb`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |  IE   |
   * | :-----: | :-----: | :-------: | :----: | :---: |
   * | **48**  | **41**  | **10.1**  | **12** | **9** |
   * | 8 _-x-_ |         | 5.1 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  writingMode?: Property.WritingMode | undefined;
  /**
   * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * **Syntax**: `auto | <integer>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  zIndex?: Property.ZIndex | undefined;
  /**
   * The non-standard **_`zoom`_** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.
   *
   * **Syntax**: `normal | reset | <number> | <percentage>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **1**  |   No    | **3.1** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/zoom
   */
  zoom?: Property.Zoom | undefined;
}
interface StandardShorthandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * The **`all`** shorthand CSS property resets all of an element's properties except `unicode-bidi`, `direction`, and CSS Custom Properties. It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.
   *
   * **Syntax**: `initial | inherit | unset | revert | revert-layer`
   *
   * **Initial value**: There is no practical initial value for it.
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **37** | **27**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/all
   */
  all?: Property.All | undefined;
  /**
   * The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * **Syntax**: `<single-animation>#`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: Property.Animation<TTime> | undefined;
  /**
   * The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
   *
   * **Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: Property.Background<TLength> | undefined;
  /**
   * The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Syntax**: `<bg-position>#`
   *
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  backgroundPosition?: Property.BackgroundPosition<TLength> | undefined;
  /**
   * The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: Property.Border<TLength> | undefined;
  /**
   * The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block
   */
  borderBlock?: Property.BorderBlock<TLength> | undefined;
  /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  borderBlockEnd?: Property.BorderBlockEnd<TLength> | undefined;
  /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  borderBlockStart?: Property.BorderBlockStart<TLength> | undefined;
  /**
   * The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  borderBottom?: Property.BorderBottom<TLength> | undefined;
  /**
   * The **`border-color`** shorthand CSS property sets the color of an element's border.
   *
   * **Syntax**: `<color>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  borderColor?: Property.BorderColor | undefined;
  /**
   * The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.
   *
   * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **16**  |  **15**   |  **6**  | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  borderImage?: Property.BorderImage | undefined;
  /**
   * The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline
   */
  borderInline?: Property.BorderInline<TLength> | undefined;
  /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  borderInlineEnd?: Property.BorderInlineEnd<TLength> | undefined;
  /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  borderInlineStart?: Property.BorderInlineStart<TLength> | undefined;
  /**
   * The **`border-left`** shorthand CSS property sets all the properties of an element's left border.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  borderLeft?: Property.BorderLeft<TLength> | undefined;
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * **Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  borderRadius?: Property.BorderRadius<TLength> | undefined;
  /**
   * The **`border-right`** shorthand CSS property sets all the properties of an element's right border.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  borderRight?: Property.BorderRight<TLength> | undefined;
  /**
   * The **`border-style`** shorthand CSS property sets the line style for all four sides of an element's border.
   *
   * **Syntax**: `<line-style>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  borderStyle?: Property.BorderStyle | undefined;
  /**
   * The **`border-top`** shorthand CSS property sets all the properties of an element's top border.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  borderTop?: Property.BorderTop<TLength> | undefined;
  /**
   * The **`border-width`** shorthand CSS property sets the width of an element's border.
   *
   * **Syntax**: `<line-width>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  borderWidth?: Property.BorderWidth<TLength> | undefined;
  /**
   * The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.
   *
   * **Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  columnRule?: Property.ColumnRule<TLength> | undefined;
  /**
   * The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.
   *
   * **Syntax**: `<'column-width'> || <'column-count'>`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **50** | **52**  |  **9**  | **12** | **10** |
   * |        |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: Property.Columns<TLength> | undefined;
  /**
   * The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.
   *
   * **Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: Property.Flex<TLength> | undefined;
  /**
   * The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.
   *
   * **Syntax**: `<'flex-direction'> || <'flex-wrap'>`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **28**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  flexFlow?: Property.FlexFlow | undefined;
  /**
   * The **`font`** CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.
   *
   * **Syntax**: `[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: Property.Font | undefined;
  /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * **Syntax**: `<'row-gap'> <'column-gap'>?`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **84** | **63**  | **14.1** | **84** | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |     Chrome      |     Firefox     |      Safari       |  Edge  | IE  |
   * | :-------------: | :-------------: | :---------------: | :----: | :-: |
   * |     **66**      |     **61**      |      **12**       | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ | 10.1 _(grid-gap)_ |        |     |
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **66** | **61**  |   No   | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  gap?: Property.Gap<TLength> | undefined;
  /**
   * The **`grid`** CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.
   *
   * **Syntax**: `<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: Property.Grid | undefined;
  /**
   * The **`grid-area`** CSS shorthand property specifies a grid item's size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   *
   * **Syntax**: `<grid-line> [ / <grid-line> ]{0,3}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  gridArea?: Property.GridArea | undefined;
  /**
   * The **`grid-column`** CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * **Syntax**: `<grid-line> [ / <grid-line> ]?`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  gridColumn?: Property.GridColumn | undefined;
  /**
   * The **`grid-row`** CSS shorthand property specifies a grid item's size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * **Syntax**: `<grid-line> [ / <grid-line> ]?`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  gridRow?: Property.GridRow | undefined;
  /**
   * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
   *
   * **Syntax**: `none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  gridTemplate?: Property.GridTemplate | undefined;
  /**
   * **Syntax**: `none | <integer>`
   *
   * **Initial value**: `none`
   */
  lineClamp?: Property.LineClamp | undefined;
  /**
   * The **`list-style`** CSS shorthand property allows you to set all the list style properties at once.
   *
   * **Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  listStyle?: Property.ListStyle | undefined;
  /**
   * The **`margin`** CSS shorthand property sets the margin area on all four sides of an element.
   *
   * **Syntax**: `[ <length> | <percentage> | auto ]{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: Property.Margin<TLength> | undefined;
  /**
   * The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.
   *
   * **Syntax**: `<mask-layer>#`
   *
   * | Chrome | Firefox | Safari  | Edge  | IE  |
   * | :----: | :-----: | :-----: | :---: | :-: |
   * | **1**  |  **2**  | **3.1** | 12-79 | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: Property.Mask<TLength> | undefined;
  /**
   * The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.
   *
   * **Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`
   *
   * |              Chrome              | Firefox |               Safari               |               Edge                | IE  |
   * | :------------------------------: | :-----: | :--------------------------------: | :-------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image)_ |   No    | **3.1** _(-webkit-mask-box-image)_ | **79** _(-webkit-mask-box-image)_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-border
   */
  maskBorder?: Property.MaskBorder | undefined;
  /**
   * The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.
   *
   * **Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`
   *
   * |    Chrome     | Firefox | Safari |  Edge  | IE  |
   * | :-----------: | :-----: | :----: | :----: | :-: |
   * |    **55**     | **72**  |   No   | **79** | No  |
   * | 46 _(motion)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: Property.Offset<TLength> | undefined;
  /**
   * The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.
   *
   * **Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`
   *
   * |    Chrome     | Firefox | Safari |  Edge  | IE  |
   * | :-----------: | :-----: | :----: | :----: | :-: |
   * |    **55**     | **72**  |   No   | **79** | No  |
   * | 46 _(motion)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: Property.Offset<TLength> | undefined;
  /**
   * The **`outline`** CSS shorthand property set all the outline properties in a single declaration.
   *
   * **Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: Property.Outline<TLength> | undefined;
  /**
   * The **`overflow`** CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.
   *
   * **Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow?: Property.Overflow | undefined;
  /**
   * The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.
   *
   * **Syntax**: `[ contain | none | auto ]{1,2}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  |   No   | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  overscrollBehavior?: Property.OverscrollBehavior | undefined;
  /**
   * The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once.
   *
   * **Syntax**: `[ <length> | <percentage> ]{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: Property.Padding<TLength> | undefined;
  /**
   * The CSS **`place-items`** shorthand property allows you to align items along both the block and inline directions at once (i.e. the `align-items` and `justify-items` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.
   *
   * **Syntax**: `<'align-items'> <'justify-items'>?`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **59** | **45**  | **11** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-items
   */
  placeItems?: Property.PlaceItems | undefined;
  /**
   * The **`place-self`** CSS shorthand property allows you to align an individual item in both the block and inline directions at once (i.e. the `align-self` and `justify-self` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not present, the first value is also used for it.
   *
   * **Syntax**: `<'align-self'> <'justify-self'>?`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **59** | **45**  | **11** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-self
   */
  placeSelf?: Property.PlaceSelf | undefined;
  /**
   * The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.
   *
   * **Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  textDecoration?: Property.TextDecoration<TLength> | undefined;
  /**
   * The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.
   *
   * **Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`
   *
   * |  Chrome  | Firefox | Safari |   Edge   | IE  |
   * | :------: | :-----: | :----: | :------: | :-: |
   * |  **99**  | **46**  | **7**  |  **99**  | No  |
   * | 25 _-x-_ |         |        | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  textEmphasis?: Property.TextEmphasis | undefined;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * **Syntax**: `<single-transition>#`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition?: Property.Transition<TTime> | undefined;
}
interface StandardProperties<TLength = (string & {}) | 0, TTime = string & {}> extends StandardLonghandProperties<TLength, TTime>, StandardShorthandProperties<TLength, TTime> {}
interface VendorLonghandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  MozAnimationDelay?: Property.AnimationDelay<TTime> | undefined;
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
   *
   * **Syntax**: `<single-animation-direction>#`
   *
   * **Initial value**: `normal`
   */
  MozAnimationDirection?: Property.AnimationDirection | undefined;
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  MozAnimationDuration?: Property.AnimationDuration<TTime> | undefined;
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * **Syntax**: `<single-animation-fill-mode>#`
   *
   * **Initial value**: `none`
   */
  MozAnimationFillMode?: Property.AnimationFillMode | undefined;
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.
   *
   * **Syntax**: `<single-animation-iteration-count>#`
   *
   * **Initial value**: `1`
   */
  MozAnimationIterationCount?: Property.AnimationIterationCount | undefined;
  /**
   * The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.
   *
   * **Syntax**: `[ none | <keyframes-name> ]#`
   *
   * **Initial value**: `none`
   */
  MozAnimationName?: Property.AnimationName | undefined;
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * **Syntax**: `<single-animation-play-state>#`
   *
   * **Initial value**: `running`
   */
  MozAnimationPlayState?: Property.AnimationPlayState | undefined;
  /**
   * The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   */
  MozAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
  /**
   * The **`appearance`** CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.
   *
   * **Syntax**: `none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized`
   *
   * **Initial value**: `none` (but this value is overridden in the user agent CSS)
   */
  MozAppearance?: Property.MozAppearance | undefined;
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   * **Syntax**: `visible | hidden`
   *
   * **Initial value**: `visible`
   */
  MozBackfaceVisibility?: Property.BackfaceVisibility | undefined;
  /**
   * In Mozilla applications like Firefox, the **`-moz-border-bottom-colors`** CSS property sets a list of colors for the bottom border.
   *
   * **Syntax**: `<color>+ | none`
   *
   * **Initial value**: `none`
   */
  MozBorderBottomColors?: Property.MozBorderBottomColors | undefined;
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   */
  MozBorderEndColor?: Property.BorderInlineEndColor | undefined;
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   */
  MozBorderEndStyle?: Property.BorderInlineEndStyle | undefined;
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   */
  MozBorderEndWidth?: Property.BorderInlineEndWidth<TLength> | undefined;
  /**
   * In Mozilla applications like Firefox, the **`-moz-border-left-colors`** CSS property sets a list of colors for the left border.
   *
   * **Syntax**: `<color>+ | none`
   *
   * **Initial value**: `none`
   */
  MozBorderLeftColors?: Property.MozBorderLeftColors | undefined;
  /**
   * In Mozilla applications like Firefox, the **`-moz-border-right-colors`** CSS property sets a list of colors for the right border.
   *
   * **Syntax**: `<color>+ | none`
   *
   * **Initial value**: `none`
   */
  MozBorderRightColors?: Property.MozBorderRightColors | undefined;
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   */
  MozBorderStartColor?: Property.BorderInlineStartColor | undefined;
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   */
  MozBorderStartStyle?: Property.BorderInlineStartStyle | undefined;
  /**
   * In Mozilla applications like Firefox, the **`-moz-border-top-colors`** CSS property sets a list of colors for the top border.
   *
   * **Syntax**: `<color>+ | none`
   *
   * **Initial value**: `none`
   */
  MozBorderTopColors?: Property.MozBorderTopColors | undefined;
  /**
   * The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.
   *
   * **Syntax**: `content-box | border-box`
   *
   * **Initial value**: `content-box`
   */
  MozBoxSizing?: Property.BoxSizing | undefined;
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * **Syntax**: `<integer> | auto`
   *
   * **Initial value**: `auto`
   */
  MozColumnCount?: Property.ColumnCount | undefined;
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * **Syntax**: `auto | balance | balance-all`
   *
   * **Initial value**: `balance`
   */
  MozColumnFill?: Property.ColumnFill | undefined;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Syntax**: `normal | <length-percentage>`
   *
   * **Initial value**: `normal`
   */
  MozColumnGap?: Property.ColumnGap<TLength> | undefined;
  /**
   * The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  MozColumnRuleColor?: Property.ColumnRuleColor | undefined;
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   *
   * **Syntax**: `<'border-style'>`
   *
   * **Initial value**: `none`
   */
  MozColumnRuleStyle?: Property.ColumnRuleStyle | undefined;
  /**
   * The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.
   *
   * **Syntax**: `<'border-width'>`
   *
   * **Initial value**: `medium`
   */
  MozColumnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
  /**
   * The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
   *
   * **Syntax**: `<length> | auto`
   *
   * **Initial value**: `auto`
   */
  MozColumnWidth?: Property.ColumnWidth<TLength> | undefined;
  /**
   * The **`-moz-context-properties`** property can be used within privileged contexts in Firefox to share the values of specified properties of the element with a child SVG image.
   *
   * **Syntax**: `none | [ fill | fill-opacity | stroke | stroke-opacity ]#`
   *
   * **Initial value**: `none`
   */
  MozContextProperties?: Property.MozContextProperties | undefined;
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   * **Syntax**: `normal | <feature-tag-value>#`
   *
   * **Initial value**: `normal`
   */
  MozFontFeatureSettings?: Property.FontFeatureSettings | undefined;
  /**
   * The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.
   *
   * **Syntax**: `normal | <string>`
   *
   * **Initial value**: `normal`
   */
  MozFontLanguageOverride?: Property.FontLanguageOverride | undefined;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Syntax**: `none | manual | auto`
   *
   * **Initial value**: `manual`
   */
  MozHyphens?: Property.Hyphens | undefined;
  /**
   * For certain XUL elements and pseudo-elements that use an image from the `list-style-image` property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.
   *
   * **Syntax**: `<shape> | auto`
   *
   * **Initial value**: `auto`
   */
  MozImageRegion?: Property.MozImageRegion | undefined;
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   */
  MozMarginEnd?: Property.MarginInlineEnd<TLength> | undefined;
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   */
  MozMarginStart?: Property.MarginInlineStart<TLength> | undefined;
  /**
   * The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.
   *
   * **Syntax**: `inline | block | horizontal | vertical`
   *
   * **Initial value**: `inline`
   */
  MozOrient?: Property.MozOrient | undefined;
  /**
   * The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.
   *
   * **Syntax**: `auto | never | always | <absolute-size> | <length>`
   *
   * **Initial value**: `auto`
   */
  MozOsxFontSmoothing?: Property.FontSmooth<TLength> | undefined;
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   */
  MozPaddingEnd?: Property.PaddingInlineEnd<TLength> | undefined;
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   */
  MozPaddingStart?: Property.PaddingInlineStart<TLength> | undefined;
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.
   *
   * **Syntax**: `none | <length>`
   *
   * **Initial value**: `none`
   */
  MozPerspective?: Property.Perspective<TLength> | undefined;
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   */
  MozPerspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
  /**
   * **`-moz-stack-sizing`** is an extended CSS property. Normally, a `<xul:stack>` will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.
   *
   * **Syntax**: `ignore | stretch-to-fit`
   *
   * **Initial value**: `stretch-to-fit`
   */
  MozStackSizing?: Property.MozStackSizing | undefined;
  /**
   * The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).
   *
   * **Syntax**: `<integer> | <length>`
   *
   * **Initial value**: `8`
   */
  MozTabSize?: Property.TabSize<TLength> | undefined;
  /**
   * The **`-moz-text-blink`** non-standard Mozilla CSS extension specifies the blink mode.
   *
   * **Syntax**: `none | blink`
   *
   * **Initial value**: `none`
   */
  MozTextBlink?: Property.MozTextBlink | undefined;
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Syntax**: `none | auto | <percentage>`
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   */
  MozTextSizeAdjust?: Property.TextSizeAdjust | undefined;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   */
  MozTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   * **Syntax**: `flat | preserve-3d`
   *
   * **Initial value**: `flat`
   */
  MozTransformStyle?: Property.TransformStyle | undefined;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  MozTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  MozTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   */
  MozTransitionProperty?: Property.TransitionProperty | undefined;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   */
  MozTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.
   *
   * **Syntax**: `ignore | normal | select-after | select-before | select-menu | select-same | select-all | none`
   *
   * **Initial value**: `none`
   */
  MozUserFocus?: Property.MozUserFocus | undefined;
  /**
   * The **`user-modify`** property has no effect in Firefox. It was originally planned to determine whether or not the content of an element can be edited by a user.
   *
   * **Syntax**: `read-only | read-write | write-only`
   *
   * **Initial value**: `read-only`
   */
  MozUserModify?: Property.MozUserModify | undefined;
  /**
   * The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.
   *
   * **Syntax**: `auto | text | none | contain | all`
   *
   * **Initial value**: `auto`
   */
  MozUserSelect?: Property.UserSelect | undefined;
  /**
   * The **`-moz-window-dragging`** CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.
   *
   * **Syntax**: `drag | no-drag`
   *
   * **Initial value**: `drag`
   */
  MozWindowDragging?: Property.MozWindowDragging | undefined;
  /**
   * The **`-moz-window-shadow`** CSS property specifies whether a window will have a shadow. It only works on Mac OS X.
   *
   * **Syntax**: `default | menu | tooltip | sheet | none`
   *
   * **Initial value**: `default`
   */
  MozWindowShadow?: Property.MozWindowShadow | undefined;
  /**
   * The **`-ms-accelerator`** CSS property is a Microsoft extension that sets or retrieves a string indicating whether the object represents a keyboard shortcut.
   *
   * **Syntax**: `false | true`
   *
   * **Initial value**: `false`
   */
  msAccelerator?: Property.MsAccelerator | undefined;
  /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
   *
   * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`
   *
   * **Initial value**: `auto`
   */
  msAlignSelf?: Property.AlignSelf | undefined;
  /**
   * The **`-ms-block-progression`** CSS property is a Microsoft extension that specifies the block progression and layout orientation.
   *
   * **Syntax**: `tb | rl | bt | lr`
   *
   * **Initial value**: `tb`
   */
  msBlockProgression?: Property.MsBlockProgression | undefined;
  /**
   * The **`-ms-content-zoom-chaining`** CSS property is a Microsoft extension specifying the zoom behavior that occurs when a user hits the zoom limit during page manipulation.
   *
   * **Syntax**: `none | chained`
   *
   * **Initial value**: `none`
   */
  msContentZoomChaining?: Property.MsContentZoomChaining | undefined;
  /**
   * The **`-ms-content-zoom-limit-max`** CSS property is a Microsoft extension that specifies the selected elements' maximum zoom factor.
   *
   * **Syntax**: `<percentage>`
   *
   * **Initial value**: `400%`
   */
  msContentZoomLimitMax?: Property.MsContentZoomLimitMax | undefined;
  /**
   * The **`-ms-content-zoom-limit-min`** CSS property is a Microsoft extension that specifies the minimum zoom factor.
   *
   * **Syntax**: `<percentage>`
   *
   * **Initial value**: `100%`
   */
  msContentZoomLimitMin?: Property.MsContentZoomLimitMin | undefined;
  /**
   * The **`-ms-content-zoom-snap-points`** CSS property is a Microsoft extension that specifies where zoom snap-points are located.
   *
   * **Syntax**: `snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )`
   *
   * **Initial value**: `snapInterval(0%, 100%)`
   */
  msContentZoomSnapPoints?: Property.MsContentZoomSnapPoints | undefined;
  /**
   * The **`-ms-content-zoom-snap-type`** CSS property is a Microsoft extension that specifies how zooming is affected by defined snap-points.
   *
   * **Syntax**: `none | proximity | mandatory`
   *
   * **Initial value**: `none`
   */
  msContentZoomSnapType?: Property.MsContentZoomSnapType | undefined;
  /**
   * The **`-ms-content-zooming`** CSS property is a Microsoft extension that specifies whether zooming is enabled.
   *
   * **Syntax**: `none | zoom`
   *
   * **Initial value**: zoom for the top level element, none for all other elements
   */
  msContentZooming?: Property.MsContentZooming | undefined;
  /**
   * The `-ms-filter` CSS property is a Microsoft extension that sets or retrieves the filter or collection of filters applied to an object.
   *
   * **Syntax**: `<string>`
   *
   * **Initial value**: "" (the empty string)
   */
  msFilter?: Property.MsFilter | undefined;
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Syntax**: `row | row-reverse | column | column-reverse`
   *
   * **Initial value**: `row`
   */
  msFlexDirection?: Property.FlexDirection | undefined;
  /**
   * The **`flex-grow`** CSS property sets the flex grow factor of a flex item's main size.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   */
  msFlexPositive?: Property.FlexGrow | undefined;
  /**
   * The **`-ms-flow-from`** CSS property is a Microsoft extension that gets or sets a value identifying a region container in the document that accepts the content flow from the data source.
   *
   * **Syntax**: `[ none | <custom-ident> ]#`
   *
   * **Initial value**: `none`
   */
  msFlowFrom?: Property.MsFlowFrom | undefined;
  /**
   * The **`-ms-flow-into`** CSS property is a Microsoft extension that gets or sets a value identifying an iframe container in the document that serves as the region's data source.
   *
   * **Syntax**: `[ none | <custom-ident> ]#`
   *
   * **Initial value**: `none`
   */
  msFlowInto?: Property.MsFlowInto | undefined;
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   *
   * **Syntax**: `none | <track-list> | <auto-track-list>`
   *
   * **Initial value**: `none`
   */
  msGridColumns?: Property.MsGridColumns<TLength> | undefined;
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   *
   * **Syntax**: `none | <track-list> | <auto-track-list>`
   *
   * **Initial value**: `none`
   */
  msGridRows?: Property.MsGridRows<TLength> | undefined;
  /**
   * The **`-ms-high-contrast-adjust`** CSS property is a Microsoft extension that gets or sets a value indicating whether to override any CSS properties that would have been set in high contrast mode.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   */
  msHighContrastAdjust?: Property.MsHighContrastAdjust | undefined;
  /**
   * The **`-ms-hyphenate-limit-chars`** CSS property is a Microsoft extension that specifies one to three values indicating the minimum number of characters in a hyphenated word. If the word does not meet the required minimum number of characters in the word, before the hyphen, or after the hyphen, then the word is not hyphenated.
   *
   * **Syntax**: `auto | <integer>{1,3}`
   *
   * **Initial value**: `auto`
   */
  msHyphenateLimitChars?: Property.MsHyphenateLimitChars | undefined;
  /**
   * The **`-ms-hyphenate-limit-lines`** CSS property is a Microsoft extension specifying the maximum number of consecutive lines in an element that may be ended with a hyphenated word.
   *
   * **Syntax**: `no-limit | <integer>`
   *
   * **Initial value**: `no-limit`
   */
  msHyphenateLimitLines?: Property.MsHyphenateLimitLines | undefined;
  /**
   * The `**-ms-hyphenate-limit-zone**` CSS property is a Microsoft extension specifying the width of the hyphenation zone.
   *
   * **Syntax**: `<percentage> | <length>`
   *
   * **Initial value**: `0`
   */
  msHyphenateLimitZone?: Property.MsHyphenateLimitZone<TLength> | undefined;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Syntax**: `none | manual | auto`
   *
   * **Initial value**: `manual`
   */
  msHyphens?: Property.Hyphens | undefined;
  /**
   * The **`-ms-ime-align`** CSS property is a Microsoft extension aligning the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active. The extension is implemented in Microsoft Edge and Internet Explorer 11.
   *
   * **Syntax**: `auto | after`
   *
   * **Initial value**: `auto`
   */
  msImeAlign?: Property.MsImeAlign | undefined;
  /**
   * The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.
   *
   * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`
   *
   * **Initial value**: `auto`
   */
  msJustifySelf?: Property.JustifySelf | undefined;
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * **Syntax**: `auto | loose | normal | strict | anywhere`
   *
   * **Initial value**: `auto`
   */
  msLineBreak?: Property.LineBreak | undefined;
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `0`
   */
  msOrder?: Property.Order | undefined;
  /**
   * The **`-ms-overflow-style`** CSS property is a Microsoft extension controlling the behavior of scrollbars when the content of an element overflows.
   *
   * **Syntax**: `auto | none | scrollbar | -ms-autohiding-scrollbar`
   *
   * **Initial value**: `auto`
   */
  msOverflowStyle?: Property.MsOverflowStyle | undefined;
  /**
   * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `visible`
   */
  msOverflowX?: Property.OverflowX | undefined;
  /**
   * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `visible`
   */
  msOverflowY?: Property.OverflowY | undefined;
  /**
   * The `**-ms-scroll-chaining**` CSS property is a Microsoft extension that specifies the scrolling behavior that occurs when a user hits the scroll limit during a manipulation.
   *
   * **Syntax**: `chained | none`
   *
   * **Initial value**: `chained`
   */
  msScrollChaining?: Property.MsScrollChaining | undefined;
  /**
   * The `**-ms-scroll-limit-x-max**` CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollLeft` property.
   *
   * **Syntax**: `auto | <length>`
   *
   * **Initial value**: `auto`
   */
  msScrollLimitXMax?: Property.MsScrollLimitXMax<TLength> | undefined;
  /**
   * The **`-ms-scroll-limit-x-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollLeft` property.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   */
  msScrollLimitXMin?: Property.MsScrollLimitXMin<TLength> | undefined;
  /**
   * The **`-ms-scroll-limit-y-max`** CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollTop` property.
   *
   * **Syntax**: `auto | <length>`
   *
   * **Initial value**: `auto`
   */
  msScrollLimitYMax?: Property.MsScrollLimitYMax<TLength> | undefined;
  /**
   * The **`-ms-scroll-limit-y-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollTop` property.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   */
  msScrollLimitYMin?: Property.MsScrollLimitYMin<TLength> | undefined;
  /**
   * The **`-ms-scroll-rails`** CSS property is a Microsoft extension that specifies whether scrolling locks to the primary axis of motion.
   *
   * **Syntax**: `none | railed`
   *
   * **Initial value**: `railed`
   */
  msScrollRails?: Property.MsScrollRails | undefined;
  /**
   * The **`-ms-scroll-snap-points-x`** CSS property is a Microsoft extension that specifies where snap-points will be located along the x-axis.
   *
   * **Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`
   *
   * **Initial value**: `snapInterval(0px, 100%)`
   */
  msScrollSnapPointsX?: Property.MsScrollSnapPointsX | undefined;
  /**
   * The **`-ms-scroll-snap-points-y`** CSS property is a Microsoft extension that specifies where snap-points will be located along the y-axis.
   *
   * **Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`
   *
   * **Initial value**: `snapInterval(0px, 100%)`
   */
  msScrollSnapPointsY?: Property.MsScrollSnapPointsY | undefined;
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Syntax**: `none | proximity | mandatory`
   *
   * **Initial value**: `none`
   */
  msScrollSnapType?: Property.MsScrollSnapType | undefined;
  /**
   * The **`-ms-scroll-translation`** CSS property is a Microsoft extension that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.
   *
   * **Syntax**: `none | vertical-to-horizontal`
   *
   * **Initial value**: `none`
   */
  msScrollTranslation?: Property.MsScrollTranslation | undefined;
  /**
   * The **`-ms-scrollbar-3dlight-color`** CSS property is a Microsoft extension specifying the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: depends on user agent
   */
  msScrollbar3dlightColor?: Property.MsScrollbar3dlightColor | undefined;
  /**
   * The **`-ms-scrollbar-arrow-color`** CSS property is a Microsoft extension that specifies the color of the arrow elements of a scroll arrow.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ButtonText`
   */
  msScrollbarArrowColor?: Property.MsScrollbarArrowColor | undefined;
  /**
   * The `**-ms-scrollbar-base-color**` CSS property is a Microsoft extension that specifies the base color of the main elements of a scroll bar.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: depends on user agent
   */
  msScrollbarBaseColor?: Property.MsScrollbarBaseColor | undefined;
  /**
   * The **`-ms-scrollbar-darkshadow-color`** CSS property is a Microsoft extension that specifies the color of a scroll bar's gutter.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ThreeDDarkShadow`
   */
  msScrollbarDarkshadowColor?: Property.MsScrollbarDarkshadowColor | undefined;
  /**
   * The `**-ms-scrollbar-face-color**` CSS property is a Microsoft extension that specifies the color of the scroll box and scroll arrows of a scroll bar.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ThreeDFace`
   */
  msScrollbarFaceColor?: Property.MsScrollbarFaceColor | undefined;
  /**
   * The `**-ms-scrollbar-highlight-color**` CSS property is a Microsoft extension that specifies the color of the slider tray, the top and left edges of the scroll box, and the scroll arrows of a scroll bar.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ThreeDHighlight`
   */
  msScrollbarHighlightColor?: Property.MsScrollbarHighlightColor | undefined;
  /**
   * The **`-ms-scrollbar-shadow-color`** CSS property is a Microsoft extension that specifies the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ThreeDDarkShadow`
   */
  msScrollbarShadowColor?: Property.MsScrollbarShadowColor | undefined;
  /**
   * The **`-ms-text-autospace`** CSS property is a Microsoft extension that specifies the autospacing and narrow space width adjustment of text.
   *
   * **Syntax**: `none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space`
   *
   * **Initial value**: `none`
   */
  msTextAutospace?: Property.MsTextAutospace | undefined;
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Syntax**: `none | all | [ digits <integer>? ]`
   *
   * **Initial value**: `none`
   */
  msTextCombineHorizontal?: Property.TextCombineUpright | undefined;
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
   *
   * **Syntax**: `[ clip | ellipsis | <string> ]{1,2}`
   *
   * **Initial value**: `clip`
   */
  msTextOverflow?: Property.TextOverflow | undefined;
  /**
   * The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
   *
   * **Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`
   *
   * **Initial value**: `auto`
   */
  msTouchAction?: Property.TouchAction | undefined;
  /**
   * The **`-ms-touch-select`** CSS property is a Microsoft extension that toggles the gripper visual elements that enable touch text selection.
   *
   * **Syntax**: `grippers | none`
   *
   * **Initial value**: `grippers`
   */
  msTouchSelect?: Property.MsTouchSelect | undefined;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   */
  msTransform?: Property.Transform | undefined;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   */
  msTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  msTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  msTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   */
  msTransitionProperty?: Property.TransitionProperty | undefined;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   */
  msTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Syntax**: `none | element | text`
   *
   * **Initial value**: `text`
   */
  msUserSelect?: Property.MsUserSelect | undefined;
  /**
   * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
   *
   * **Syntax**: `normal | break-all | keep-all | break-word`
   *
   * **Initial value**: `normal`
   */
  msWordBreak?: Property.WordBreak | undefined;
  /**
   * The **`-ms-wrap-flow`** CSS property is a Microsoft extension that specifies how exclusions impact inline content within block-level elements.
   *
   * **Syntax**: `auto | both | start | end | maximum | clear`
   *
   * **Initial value**: `auto`
   */
  msWrapFlow?: Property.MsWrapFlow | undefined;
  /**
   * The **`-ms-wrap-margin`** CSS property is a Microsoft extension that specifies a margin that offsets the inner wrap shape from other shapes.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   */
  msWrapMargin?: Property.MsWrapMargin<TLength> | undefined;
  /**
   * The **`-ms-wrap-through`** CSS property is a Microsoft extension that specifies how content should wrap around an exclusion element.
   *
   * **Syntax**: `wrap | none`
   *
   * **Initial value**: `wrap`
   */
  msWrapThrough?: Property.MsWrapThrough | undefined;
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).
   *
   * **Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`
   *
   * **Initial value**: `horizontal-tb`
   */
  msWritingMode?: Property.WritingMode | undefined;
  /**
   * The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
   *
   * **Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`
   *
   * **Initial value**: `normal`
   */
  WebkitAlignContent?: Property.AlignContent | undefined;
  /**
   * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   * **Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`
   *
   * **Initial value**: `normal`
   */
  WebkitAlignItems?: Property.AlignItems | undefined;
  /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
   *
   * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`
   *
   * **Initial value**: `auto`
   */
  WebkitAlignSelf?: Property.AlignSelf | undefined;
  /**
   * The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  WebkitAnimationDelay?: Property.AnimationDelay<TTime> | undefined;
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
   *
   * **Syntax**: `<single-animation-direction>#`
   *
   * **Initial value**: `normal`
   */
  WebkitAnimationDirection?: Property.AnimationDirection | undefined;
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  WebkitAnimationDuration?: Property.AnimationDuration<TTime> | undefined;
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * **Syntax**: `<single-animation-fill-mode>#`
   *
   * **Initial value**: `none`
   */
  WebkitAnimationFillMode?: Property.AnimationFillMode | undefined;
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.
   *
   * **Syntax**: `<single-animation-iteration-count>#`
   *
   * **Initial value**: `1`
   */
  WebkitAnimationIterationCount?: Property.AnimationIterationCount | undefined;
  /**
   * The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.
   *
   * **Syntax**: `[ none | <keyframes-name> ]#`
   *
   * **Initial value**: `none`
   */
  WebkitAnimationName?: Property.AnimationName | undefined;
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * **Syntax**: `<single-animation-play-state>#`
   *
   * **Initial value**: `running`
   */
  WebkitAnimationPlayState?: Property.AnimationPlayState | undefined;
  /**
   * The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   */
  WebkitAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
  /**
   * The **`appearance`** CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.
   *
   * **Syntax**: `none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button`
   *
   * **Initial value**: `none` (but this value is overridden in the user agent CSS)
   */
  WebkitAppearance?: Property.WebkitAppearance | undefined;
  /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   * **Syntax**: `none | <filter-function-list>`
   *
   * **Initial value**: `none`
   */
  WebkitBackdropFilter?: Property.BackdropFilter | undefined;
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   * **Syntax**: `visible | hidden`
   *
   * **Initial value**: `visible`
   */
  WebkitBackfaceVisibility?: Property.BackfaceVisibility | undefined;
  /**
   * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
   *
   * **Syntax**: `<box>#`
   *
   * **Initial value**: `border-box`
   */
  WebkitBackgroundClip?: Property.BackgroundClip | undefined;
  /**
   * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
   *
   * **Syntax**: `<box>#`
   *
   * **Initial value**: `padding-box`
   */
  WebkitBackgroundOrigin?: Property.BackgroundOrigin | undefined;
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   */
  WebkitBackgroundSize?: Property.BackgroundSize<TLength> | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitBorderBeforeColor?: Property.WebkitBorderBeforeColor | undefined;
  /**
   * **Syntax**: `<'border-style'>`
   *
   * **Initial value**: `none`
   */
  WebkitBorderBeforeStyle?: Property.WebkitBorderBeforeStyle | undefined;
  /**
   * **Syntax**: `<'border-width'>`
   *
   * **Initial value**: `medium`
   */
  WebkitBorderBeforeWidth?: Property.WebkitBorderBeforeWidth<TLength> | undefined;
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   */
  WebkitBorderBottomLeftRadius?: Property.BorderBottomLeftRadius<TLength> | undefined;
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   */
  WebkitBorderBottomRightRadius?: Property.BorderBottomRightRadius<TLength> | undefined;
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.
   *
   * **Syntax**: `<number-percentage>{1,4} && fill?`
   *
   * **Initial value**: `100%`
   */
  WebkitBorderImageSlice?: Property.BorderImageSlice | undefined;
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   */
  WebkitBorderTopLeftRadius?: Property.BorderTopLeftRadius<TLength> | undefined;
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   */
  WebkitBorderTopRightRadius?: Property.BorderTopRightRadius<TLength> | undefined;
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Syntax**: `slice | clone`
   *
   * **Initial value**: `slice`
   */
  WebkitBoxDecorationBreak?: Property.BoxDecorationBreak | undefined;
  /**
   * The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.
   *
   * **Syntax**: `[ above | below | right | left ]? <length>? <image>?`
   *
   * **Initial value**: `none`
   */
  WebkitBoxReflect?: Property.WebkitBoxReflect<TLength> | undefined;
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
   *
   * **Syntax**: `none | <shadow>#`
   *
   * **Initial value**: `none`
   */
  WebkitBoxShadow?: Property.BoxShadow | undefined;
  /**
   * The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.
   *
   * **Syntax**: `content-box | border-box`
   *
   * **Initial value**: `content-box`
   */
  WebkitBoxSizing?: Property.BoxSizing | undefined;
  /**
   * The **`clip-path`** CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
   *
   * **Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`
   *
   * **Initial value**: `none`
   */
  WebkitClipPath?: Property.ClipPath | undefined;
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * **Syntax**: `<integer> | auto`
   *
   * **Initial value**: `auto`
   */
  WebkitColumnCount?: Property.ColumnCount | undefined;
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * **Syntax**: `auto | balance | balance-all`
   *
   * **Initial value**: `balance`
   */
  WebkitColumnFill?: Property.ColumnFill | undefined;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Syntax**: `normal | <length-percentage>`
   *
   * **Initial value**: `normal`
   */
  WebkitColumnGap?: Property.ColumnGap<TLength> | undefined;
  /**
   * The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitColumnRuleColor?: Property.ColumnRuleColor | undefined;
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   *
   * **Syntax**: `<'border-style'>`
   *
   * **Initial value**: `none`
   */
  WebkitColumnRuleStyle?: Property.ColumnRuleStyle | undefined;
  /**
   * The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.
   *
   * **Syntax**: `<'border-width'>`
   *
   * **Initial value**: `medium`
   */
  WebkitColumnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   * **Syntax**: `none | all`
   *
   * **Initial value**: `none`
   */
  WebkitColumnSpan?: Property.ColumnSpan | undefined;
  /**
   * The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
   *
   * **Syntax**: `<length> | auto`
   *
   * **Initial value**: `auto`
   */
  WebkitColumnWidth?: Property.ColumnWidth<TLength> | undefined;
  /**
   * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   * **Syntax**: `none | <filter-function-list>`
   *
   * **Initial value**: `none`
   */
  WebkitFilter?: Property.Filter | undefined;
  /**
   * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
   *
   * **Syntax**: `content | <'width'>`
   *
   * **Initial value**: `auto`
   */
  WebkitFlexBasis?: Property.FlexBasis<TLength> | undefined;
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Syntax**: `row | row-reverse | column | column-reverse`
   *
   * **Initial value**: `row`
   */
  WebkitFlexDirection?: Property.FlexDirection | undefined;
  /**
   * The **`flex-grow`** CSS property sets the flex grow factor of a flex item's main size.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   */
  WebkitFlexGrow?: Property.FlexGrow | undefined;
  /**
   * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `1`
   */
  WebkitFlexShrink?: Property.FlexShrink | undefined;
  /**
   * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * **Syntax**: `nowrap | wrap | wrap-reverse`
   *
   * **Initial value**: `nowrap`
   */
  WebkitFlexWrap?: Property.FlexWrap | undefined;
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   * **Syntax**: `normal | <feature-tag-value>#`
   *
   * **Initial value**: `normal`
   */
  WebkitFontFeatureSettings?: Property.FontFeatureSettings | undefined;
  /**
   * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
   *
   * **Syntax**: `auto | normal | none`
   *
   * **Initial value**: `auto`
   */
  WebkitFontKerning?: Property.FontKerning | undefined;
  /**
   * The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.
   *
   * **Syntax**: `auto | never | always | <absolute-size> | <length>`
   *
   * **Initial value**: `auto`
   */
  WebkitFontSmoothing?: Property.FontSmooth<TLength> | undefined;
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   * **Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`
   *
   * **Initial value**: `normal`
   */
  WebkitFontVariantLigatures?: Property.FontVariantLigatures | undefined;
  /**
   * The **`hyphenate-character`** CSS property sets the character (or string) used at the end of a line before a hyphenation break.
   *
   * **Syntax**: `auto | <string>`
   *
   * **Initial value**: `auto`
   */
  WebkitHyphenateCharacter?: Property.HyphenateCharacter | undefined;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Syntax**: `none | manual | auto`
   *
   * **Initial value**: `manual`
   */
  WebkitHyphens?: Property.Hyphens | undefined;
  /**
   * The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.
   *
   * **Syntax**: `normal | [ <number> <integer>? ]`
   *
   * **Initial value**: `normal`
   */
  WebkitInitialLetter?: Property.InitialLetter | undefined;
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * **Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`
   *
   * **Initial value**: `normal`
   */
  WebkitJustifyContent?: Property.JustifyContent | undefined;
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * **Syntax**: `auto | loose | normal | strict | anywhere`
   *
   * **Initial value**: `auto`
   */
  WebkitLineBreak?: Property.LineBreak | undefined;
  /**
   * The **`-webkit-line-clamp`** CSS property allows limiting of the contents of a block container to the specified number of lines.
   *
   * **Syntax**: `none | <integer>`
   *
   * **Initial value**: `none`
   */
  WebkitLineClamp?: Property.WebkitLineClamp | undefined;
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   */
  WebkitMarginEnd?: Property.MarginInlineEnd<TLength> | undefined;
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   */
  WebkitMarginStart?: Property.MarginInlineStart<TLength> | undefined;
  /**
   * If a `-webkit-mask-image` is specified, `-webkit-mask-attachment` determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.
   *
   * **Syntax**: `<attachment>#`
   *
   * **Initial value**: `scroll`
   */
  WebkitMaskAttachment?: Property.WebkitMaskAttachment | undefined;
  /**
   * The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.
   *
   * **Syntax**: `[ <length> | <number> ]{1,4}`
   *
   * **Initial value**: `0`
   */
  WebkitMaskBoxImageOutset?: Property.MaskBorderOutset<TLength> | undefined;
  /**
   * The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.
   *
   * **Syntax**: `[ stretch | repeat | round | space ]{1,2}`
   *
   * **Initial value**: `stretch`
   */
  WebkitMaskBoxImageRepeat?: Property.MaskBorderRepeat | undefined;
  /**
   * The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.
   *
   * **Syntax**: `<number-percentage>{1,4} fill?`
   *
   * **Initial value**: `0`
   */
  WebkitMaskBoxImageSlice?: Property.MaskBorderSlice | undefined;
  /**
   * The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.
   *
   * **Syntax**: `none | <image>`
   *
   * **Initial value**: `none`
   */
  WebkitMaskBoxImageSource?: Property.MaskBorderSource | undefined;
  /**
   * The **`mask-border-width`** CSS property sets the width of an element's mask border.
   *
   * **Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`
   *
   * **Initial value**: `auto`
   */
  WebkitMaskBoxImageWidth?: Property.MaskBorderWidth<TLength> | undefined;
  /**
   * The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.
   *
   * **Syntax**: `[ <box> | border | padding | content | text ]#`
   *
   * **Initial value**: `border`
   */
  WebkitMaskClip?: Property.WebkitMaskClip | undefined;
  /**
   * The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.
   *
   * **Syntax**: `<composite-style>#`
   *
   * **Initial value**: `source-over`
   */
  WebkitMaskComposite?: Property.WebkitMaskComposite | undefined;
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element. By default this means the alpha channel of the mask image will be multiplied with the alpha channel of the element. This can be controlled with the `mask-mode` property.
   *
   * **Syntax**: `<mask-reference>#`
   *
   * **Initial value**: `none`
   */
  WebkitMaskImage?: Property.WebkitMaskImage | undefined;
  /**
   * The **`mask-origin`** CSS property sets the origin of a mask.
   *
   * **Syntax**: `[ <box> | border | padding | content ]#`
   *
   * **Initial value**: `padding`
   */
  WebkitMaskOrigin?: Property.WebkitMaskOrigin | undefined;
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
   *
   * **Syntax**: `<position>#`
   *
   * **Initial value**: `0% 0%`
   */
  WebkitMaskPosition?: Property.WebkitMaskPosition<TLength> | undefined;
  /**
   * The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right ]#`
   *
   * **Initial value**: `0%`
   */
  WebkitMaskPositionX?: Property.WebkitMaskPositionX<TLength> | undefined;
  /**
   * The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.
   *
   * **Syntax**: `[ <length-percentage> | top | center | bottom ]#`
   *
   * **Initial value**: `0%`
   */
  WebkitMaskPositionY?: Property.WebkitMaskPositionY<TLength> | undefined;
  /**
   * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Syntax**: `<repeat-style>#`
   *
   * **Initial value**: `repeat`
   */
  WebkitMaskRepeat?: Property.WebkitMaskRepeat | undefined;
  /**
   * The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.
   *
   * **Syntax**: `repeat | no-repeat | space | round`
   *
   * **Initial value**: `repeat`
   */
  WebkitMaskRepeatX?: Property.WebkitMaskRepeatX | undefined;
  /**
   * The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.
   *
   * **Syntax**: `repeat | no-repeat | space | round`
   *
   * **Initial value**: `repeat`
   */
  WebkitMaskRepeatY?: Property.WebkitMaskRepeatY | undefined;
  /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   */
  WebkitMaskSize?: Property.WebkitMaskSize<TLength> | undefined;
  /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.
   *
   * **Syntax**: `<'max-width'>`
   *
   * **Initial value**: `none`
   */
  WebkitMaxInlineSize?: Property.MaxInlineSize<TLength> | undefined;
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `0`
   */
  WebkitOrder?: Property.Order | undefined;
  /**
   * The `-webkit-overflow-scrolling` CSS property controls whether or not touch devices use momentum-based scrolling for a given element.
   *
   * **Syntax**: `auto | touch`
   *
   * **Initial value**: `auto`
   */
  WebkitOverflowScrolling?: Property.WebkitOverflowScrolling | undefined;
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   */
  WebkitPaddingEnd?: Property.PaddingInlineEnd<TLength> | undefined;
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   */
  WebkitPaddingStart?: Property.PaddingInlineStart<TLength> | undefined;
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.
   *
   * **Syntax**: `none | <length>`
   *
   * **Initial value**: `none`
   */
  WebkitPerspective?: Property.Perspective<TLength> | undefined;
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   */
  WebkitPerspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
  /**
   * The **`print-color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   * **Syntax**: `economy | exact`
   *
   * **Initial value**: `economy`
   */
  WebkitPrintColorAdjust?: Property.PrintColorAdjust | undefined;
  /**
   * The **`ruby-position`** CSS property defines the position of a ruby element relatives to its base element. It can be positioned over the element (`over`), under it (`under`), or between the characters on their right side (`inter-character`).
   *
   * **Syntax**: `[ alternate || [ over | under ] ] | inter-character`
   *
   * **Initial value**: `alternate`
   */
  WebkitRubyPosition?: Property.RubyPosition | undefined;
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`
   *
   * **Initial value**: `none`
   */
  WebkitScrollSnapType?: Property.ScrollSnapType | undefined;
  /**
   * The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   */
  WebkitShapeMargin?: Property.ShapeMargin<TLength> | undefined;
  /**
   * **`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `black`
   */
  WebkitTapHighlightColor?: Property.WebkitTapHighlightColor | undefined;
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Syntax**: `none | all | [ digits <integer>? ]`
   *
   * **Initial value**: `none`
   */
  WebkitTextCombine?: Property.TextCombineUpright | undefined;
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextDecorationColor?: Property.TextDecorationColor | undefined;
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
   *
   * **Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`
   *
   * **Initial value**: `none`
   */
  WebkitTextDecorationLine?: Property.TextDecorationLine | undefined;
  /**
   * The **`text-decoration-skip`** CSS property sets what parts of an element's content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   * **Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`
   *
   * **Initial value**: `objects`
   */
  WebkitTextDecorationSkip?: Property.TextDecorationSkip | undefined;
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   *
   * **Syntax**: `solid | double | dotted | dashed | wavy`
   *
   * **Initial value**: `solid`
   */
  WebkitTextDecorationStyle?: Property.TextDecorationStyle | undefined;
  /**
   * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextEmphasisColor?: Property.TextEmphasisColor | undefined;
  /**
   * The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
   *
   * **Syntax**: `[ over | under ] && [ right | left ]`
   *
   * **Initial value**: `over right`
   */
  WebkitTextEmphasisPosition?: Property.TextEmphasisPosition | undefined;
  /**
   * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   * **Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`
   *
   * **Initial value**: `none`
   */
  WebkitTextEmphasisStyle?: Property.TextEmphasisStyle | undefined;
  /**
   * The **`-webkit-text-fill-color`** CSS property specifies the fill color of characters of text. If this property is not set, the value of the `color` property is used.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextFillColor?: Property.WebkitTextFillColor | undefined;
  /**
   * The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   * **Syntax**: `mixed | upright | sideways`
   *
   * **Initial value**: `mixed`
   */
  WebkitTextOrientation?: Property.TextOrientation | undefined;
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Syntax**: `none | auto | <percentage>`
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   */
  WebkitTextSizeAdjust?: Property.TextSizeAdjust | undefined;
  /**
   * The **`-webkit-text-stroke-color`** CSS property specifies the stroke color of characters of text. If this property is not set, the value of the `color` property is used.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextStrokeColor?: Property.WebkitTextStrokeColor | undefined;
  /**
   * The **`-webkit-text-stroke-width`** CSS property specifies the width of the stroke for text.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   */
  WebkitTextStrokeWidth?: Property.WebkitTextStrokeWidth<TLength> | undefined;
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   *
   * **Syntax**: `auto | from-font | [ under || [ left | right ] ]`
   *
   * **Initial value**: `auto`
   */
  WebkitTextUnderlinePosition?: Property.TextUnderlinePosition | undefined;
  /**
   * The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.
   *
   * **Syntax**: `default | none`
   *
   * **Initial value**: `default`
   */
  WebkitTouchCallout?: Property.WebkitTouchCallout | undefined;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   */
  WebkitTransform?: Property.Transform | undefined;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   */
  WebkitTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   * **Syntax**: `flat | preserve-3d`
   *
   * **Initial value**: `flat`
   */
  WebkitTransformStyle?: Property.TransformStyle | undefined;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  WebkitTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  WebkitTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   */
  WebkitTransitionProperty?: Property.TransitionProperty | undefined;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   */
  WebkitTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * **Syntax**: `read-only | read-write | read-write-plaintext-only`
   *
   * **Initial value**: `read-only`
   */
  WebkitUserModify?: Property.WebkitUserModify | undefined;
  /**
   * The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.
   *
   * **Syntax**: `auto | text | none | contain | all`
   *
   * **Initial value**: `auto`
   */
  WebkitUserSelect?: Property.UserSelect | undefined;
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).
   *
   * **Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`
   *
   * **Initial value**: `horizontal-tb`
   */
  WebkitWritingMode?: Property.WritingMode | undefined;
}
interface VendorShorthandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * **Syntax**: `<single-animation>#`
   */
  MozAnimation?: Property.Animation<TTime> | undefined;
  /**
   * The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.
   *
   * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
   */
  MozBorderImage?: Property.BorderImage | undefined;
  /**
   * The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.
   *
   * **Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`
   */
  MozColumnRule?: Property.ColumnRule<TLength> | undefined;
  /**
   * The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.
   *
   * **Syntax**: `<'column-width'> || <'column-count'>`
   */
  MozColumns?: Property.Columns<TLength> | undefined;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * **Syntax**: `<single-transition>#`
   */
  MozTransition?: Property.Transition<TTime> | undefined;
  /**
   * The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.
   *
   * **Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`
   */
  msContentZoomLimit?: Property.MsContentZoomLimit | undefined;
  /**
   * The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.
   *
   * **Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`
   */
  msContentZoomSnap?: Property.MsContentZoomSnap | undefined;
  /**
   * The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.
   *
   * **Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
   */
  msFlex?: Property.Flex<TLength> | undefined;
  /**
   * The **\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.
   *
   * **Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`
   */
  msScrollLimit?: Property.MsScrollLimit | undefined;
  /**
   * The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.
   *
   * **Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`
   */
  msScrollSnapX?: Property.MsScrollSnapX | undefined;
  /**
   * The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.
   *
   * **Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`
   */
  msScrollSnapY?: Property.MsScrollSnapY | undefined;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * **Syntax**: `<single-transition>#`
   */
  msTransition?: Property.Transition<TTime> | undefined;
  /**
   * The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * **Syntax**: `<single-animation>#`
   */
  WebkitAnimation?: Property.Animation<TTime> | undefined;
  /**
   * The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-width'> || <'border-style'> || <color>`
   */
  WebkitBorderBefore?: Property.WebkitBorderBefore<TLength> | undefined;
  /**
   * The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.
   *
   * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
   */
  WebkitBorderImage?: Property.BorderImage | undefined;
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * **Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`
   */
  WebkitBorderRadius?: Property.BorderRadius<TLength> | undefined;
  /**
   * The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.
   *
   * **Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`
   */
  WebkitColumnRule?: Property.ColumnRule<TLength> | undefined;
  /**
   * The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.
   *
   * **Syntax**: `<'column-width'> || <'column-count'>`
   */
  WebkitColumns?: Property.Columns<TLength> | undefined;
  /**
   * The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.
   *
   * **Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
   */
  WebkitFlex?: Property.Flex<TLength> | undefined;
  /**
   * The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.
   *
   * **Syntax**: `<'flex-direction'> || <'flex-wrap'>`
   */
  WebkitFlexFlow?: Property.FlexFlow | undefined;
  /**
   * The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.
   *
   * **Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`
   */
  WebkitMask?: Property.WebkitMask<TLength> | undefined;
  /**
   * The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.
   *
   * **Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`
   */
  WebkitMaskBoxImage?: Property.MaskBorder | undefined;
  /**
   * The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.
   *
   * **Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`
   */
  WebkitTextEmphasis?: Property.TextEmphasis | undefined;
  /**
   * The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.
   *
   * **Syntax**: `<length> || <color>`
   */
  WebkitTextStroke?: Property.WebkitTextStroke<TLength> | undefined;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * **Syntax**: `<single-transition>#`
   */
  WebkitTransition?: Property.Transition<TTime> | undefined;
}
interface VendorProperties<TLength = (string & {}) | 0, TTime = string & {}> extends VendorLonghandProperties<TLength, TTime>, VendorShorthandProperties<TLength, TTime> {}
interface ObsoleteProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * In combination with `elevation`, the **`azimuth`** CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.
   *
   * **Syntax**: `<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards`
   *
   * **Initial value**: `center`
   *
   * @deprecated
   */
  azimuth?: Property.Azimuth | undefined;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | baseline | stretch`
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  boxAlign?: Property.BoxAlign | undefined;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Syntax**: `normal | reverse | inherit`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  boxDirection?: Property.BoxDirection | undefined;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  boxFlex?: Property.BoxFlex | undefined;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  boxFlexGroup?: Property.BoxFlexGroup | undefined;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Syntax**: `single | multiple`
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  boxLines?: Property.BoxLines | undefined;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  boxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`
   *
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  boxOrient?: Property.BoxOrient | undefined;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | justify`
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  boxPack?: Property.BoxPack | undefined;
  /**
   * The **`clip`** CSS property defines a visible portion of an element. The `clip` property applies only to absolutely positioned elements — that is, elements with `position:absolute` or `position:fixed`.
   *
   * **Syntax**: `<shape> | auto`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  clip?: Property.Clip | undefined;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  gridColumnGap?: Property.GridColumnGap<TLength> | undefined;
  /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * **Syntax**: `<'grid-row-gap'> <'grid-column-gap'>?`
   *
   * @deprecated
   */
  gridGap?: Property.GridGap<TLength> | undefined;
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  gridRowGap?: Property.GridRowGap<TLength> | undefined;
  /**
   * The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.
   *
   * **Syntax**: `auto | normal | active | inactive | disabled`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  imeMode?: Property.ImeMode | undefined;
  /**
   * The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetBlock?: Property.InsetBlock<TLength> | undefined;
  /**
   * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetBlockEnd?: Property.InsetBlockEnd<TLength> | undefined;
  /**
   * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetBlockStart?: Property.InsetBlockStart<TLength> | undefined;
  /**
   * The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetInline?: Property.InsetInline<TLength> | undefined;
  /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetInlineEnd?: Property.InsetInlineEnd<TLength> | undefined;
  /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetInlineStart?: Property.InsetInlineStart<TLength> | undefined;
  /**
   * The **`scroll-snap-coordinate`** CSS property defines the x and y coordinate positions within an element that will align with its nearest ancestor scroll container's `scroll-snap-destination` for each respective axis.
   *
   * **Syntax**: `none | <position>#`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapCoordinate?: Property.ScrollSnapCoordinate<TLength> | undefined;
  /**
   * The **`scroll-snap-destination`** CSS property defines the position in x and y coordinates within the scroll container's visual viewport which element snap points align with.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `0px 0px`
   *
   * @deprecated
   */
  scrollSnapDestination?: Property.ScrollSnapDestination<TLength> | undefined;
  /**
   * The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.
   *
   * **Syntax**: `none | repeat( <length-percentage> )`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapPointsX?: Property.ScrollSnapPointsX | undefined;
  /**
   * The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.
   *
   * **Syntax**: `none | repeat( <length-percentage> )`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapPointsY?: Property.ScrollSnapPointsY | undefined;
  /**
   * The **`scroll-snap-type-x`** CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.
   *
   * **Syntax**: `none | mandatory | proximity`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapTypeX?: Property.ScrollSnapTypeX | undefined;
  /**
   * The **`scroll-snap-type-y`** CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.
   *
   * **Syntax**: `none | mandatory | proximity`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapTypeY?: Property.ScrollSnapTypeY | undefined;
  /**
   * The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `Scrollbar`
   *
   * @deprecated
   */
  scrollbarTrackColor?: Property.MsScrollbarTrackColor | undefined;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | baseline | stretch`
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  KhtmlBoxAlign?: Property.BoxAlign | undefined;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Syntax**: `normal | reverse | inherit`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  KhtmlBoxDirection?: Property.BoxDirection | undefined;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  KhtmlBoxFlex?: Property.BoxFlex | undefined;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  KhtmlBoxFlexGroup?: Property.BoxFlexGroup | undefined;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Syntax**: `single | multiple`
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  KhtmlBoxLines?: Property.BoxLines | undefined;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  KhtmlBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`
   *
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  KhtmlBoxOrient?: Property.BoxOrient | undefined;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | justify`
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  KhtmlBoxPack?: Property.BoxPack | undefined;
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * **Syntax**: `auto | loose | normal | strict | anywhere`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  KhtmlLineBreak?: Property.LineBreak | undefined;
  /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   * **Syntax**: `<alpha-value>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  KhtmlOpacity?: Property.Opacity | undefined;
  /**
   * The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.
   *
   * **Syntax**: `auto | text | none | contain | all`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  KhtmlUserSelect?: Property.UserSelect | undefined;
  /**
   * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
   *
   * **Syntax**: `<box>#`
   *
   * **Initial value**: `border-box`
   *
   * @deprecated
   */
  MozBackgroundClip?: Property.BackgroundClip | undefined;
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Syntax**: `slice | clone`
   *
   * **Initial value**: `slice`
   *
   * @deprecated
   */
  MozBackgroundInlinePolicy?: Property.BoxDecorationBreak | undefined;
  /**
   * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
   *
   * **Syntax**: `<box>#`
   *
   * **Initial value**: `padding-box`
   *
   * @deprecated
   */
  MozBackgroundOrigin?: Property.BackgroundOrigin | undefined;
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   *
   * @deprecated
   */
  MozBackgroundSize?: Property.BackgroundSize<TLength> | undefined;
  /**
   * The **`-moz-binding`** CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.
   *
   * **Syntax**: `<url> | none`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozBinding?: Property.MozBinding | undefined;
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * **Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`
   *
   * @deprecated
   */
  MozBorderRadius?: Property.BorderRadius<TLength> | undefined;
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusBottomleft?: Property.BorderBottomLeftRadius<TLength> | undefined;
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusBottomright?: Property.BorderBottomRightRadius<TLength> | undefined;
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusTopleft?: Property.BorderTopLeftRadius<TLength> | undefined;
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * **Syntax**: `<length-percentage>{1,2}`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusTopright?: Property.BorderTopRightRadius<TLength> | undefined;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | baseline | stretch`
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  MozBoxAlign?: Property.BoxAlign | undefined;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Syntax**: `normal | reverse | inherit`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  MozBoxDirection?: Property.BoxDirection | undefined;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBoxFlex?: Property.BoxFlex | undefined;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  MozBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`
   *
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  MozBoxOrient?: Property.BoxOrient | undefined;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | justify`
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  MozBoxPack?: Property.BoxPack | undefined;
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
   *
   * **Syntax**: `none | <shadow>#`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozBoxShadow?: Property.BoxShadow | undefined;
  /**
   * The non-standard **`-moz-float-edge`** CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.
   *
   * **Syntax**: `border-box | content-box | margin-box | padding-box`
   *
   * **Initial value**: `content-box`
   *
   * @deprecated
   */
  MozFloatEdge?: Property.MozFloatEdge | undefined;
  /**
   * The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.
   *
   * **Syntax**: `0 | 1`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozForceBrokenImageIcon?: Property.MozForceBrokenImageIcon | undefined;
  /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   * **Syntax**: `<alpha-value>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  MozOpacity?: Property.Opacity | undefined;
  /**
   * The **`outline`** CSS shorthand property set all the outline properties in a single declaration.
   *
   * **Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`
   *
   * @deprecated
   */
  MozOutline?: Property.Outline<TLength> | undefined;
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * **Syntax**: `<color> | invert`
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * @deprecated
   */
  MozOutlineColor?: Property.OutlineColor | undefined;
  /**
   * In Mozilla applications like Firefox, the **`-moz-outline-radius`** CSS shorthand property can be used to give an element's `outline` rounded corners.
   *
   * **Syntax**: `<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?`
   *
   * @deprecated
   */
  MozOutlineRadius?: Property.MozOutlineRadius<TLength> | undefined;
  /**
   * In Mozilla applications, the **`-moz-outline-radius-bottomleft`** CSS property can be used to round the bottom-left corner of an element's `outline`.
   *
   * **Syntax**: `<outline-radius>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozOutlineRadiusBottomleft?: Property.MozOutlineRadiusBottomleft<TLength> | undefined;
  /**
   * In Mozilla applications, the **`-moz-outline-radius-bottomright`** CSS property can be used to round the bottom-right corner of an element's `outline`.
   *
   * **Syntax**: `<outline-radius>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozOutlineRadiusBottomright?: Property.MozOutlineRadiusBottomright<TLength> | undefined;
  /**
   * In Mozilla applications, the **`-moz-outline-radius-topleft`** CSS property can be used to round the top-left corner of an element's `outline`.
   *
   * **Syntax**: `<outline-radius>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozOutlineRadiusTopleft?: Property.MozOutlineRadiusTopleft<TLength> | undefined;
  /**
   * In Mozilla applications, the **`-moz-outline-radius-topright`** CSS property can be used to round the top-right corner of an element's `outline`.
   *
   * **Syntax**: `<outline-radius>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozOutlineRadiusTopright?: Property.MozOutlineRadiusTopright<TLength> | undefined;
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Syntax**: `auto | <'border-style'>`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozOutlineStyle?: Property.OutlineStyle | undefined;
  /**
   * The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * @deprecated
   */
  MozOutlineWidth?: Property.OutlineWidth<TLength> | undefined;
  /**
   * The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
   *
   * **Syntax**: `auto | start | end | left | right | center | justify`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  MozTextAlignLast?: Property.TextAlignLast | undefined;
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * @deprecated
   */
  MozTextDecorationColor?: Property.TextDecorationColor | undefined;
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
   *
   * **Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozTextDecorationLine?: Property.TextDecorationLine | undefined;
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   *
   * **Syntax**: `solid | double | dotted | dashed | wavy`
   *
   * **Initial value**: `solid`
   *
   * @deprecated
   */
  MozTextDecorationStyle?: Property.TextDecorationStyle | undefined;
  /**
   * In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.
   *
   * **Syntax**: `auto | none | enabled | disabled`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  MozUserInput?: Property.MozUserInput | undefined;
  /**
   * The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.
   *
   * **Syntax**: `auto | normal | active | inactive | disabled`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  msImeMode?: Property.ImeMode | undefined;
  /**
   * The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `Scrollbar`
   *
   * @deprecated
   */
  msScrollbarTrackColor?: Property.MsScrollbarTrackColor | undefined;
  /**
   * The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * **Syntax**: `<single-animation>#`
   *
   * @deprecated
   */
  OAnimation?: Property.Animation<TTime> | undefined;
  /**
   * The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OAnimationDelay?: Property.AnimationDelay<TTime> | undefined;
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
   *
   * **Syntax**: `<single-animation-direction>#`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  OAnimationDirection?: Property.AnimationDirection | undefined;
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OAnimationDuration?: Property.AnimationDuration<TTime> | undefined;
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * **Syntax**: `<single-animation-fill-mode>#`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OAnimationFillMode?: Property.AnimationFillMode | undefined;
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.
   *
   * **Syntax**: `<single-animation-iteration-count>#`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  OAnimationIterationCount?: Property.AnimationIterationCount | undefined;
  /**
   * The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.
   *
   * **Syntax**: `[ none | <keyframes-name> ]#`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OAnimationName?: Property.AnimationName | undefined;
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * **Syntax**: `<single-animation-play-state>#`
   *
   * **Initial value**: `running`
   *
   * @deprecated
   */
  OAnimationPlayState?: Property.AnimationPlayState | undefined;
  /**
   * The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  OAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   *
   * @deprecated
   */
  OBackgroundSize?: Property.BackgroundSize<TLength> | undefined;
  /**
   * The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.
   *
   * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
   *
   * @deprecated
   */
  OBorderImage?: Property.BorderImage | undefined;
  /**
   * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   * **Syntax**: `fill | contain | cover | none | scale-down`
   *
   * **Initial value**: `fill`
   *
   * @deprecated
   */
  OObjectFit?: Property.ObjectFit | undefined;
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   *
   * @deprecated
   */
  OObjectPosition?: Property.ObjectPosition<TLength> | undefined;
  /**
   * The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).
   *
   * **Syntax**: `<integer> | <length>`
   *
   * **Initial value**: `8`
   *
   * @deprecated
   */
  OTabSize?: Property.TabSize<TLength> | undefined;
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
   *
   * **Syntax**: `[ clip | ellipsis | <string> ]{1,2}`
   *
   * **Initial value**: `clip`
   *
   * @deprecated
   */
  OTextOverflow?: Property.TextOverflow | undefined;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OTransform?: Property.Transform | undefined;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   *
   * @deprecated
   */
  OTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * **Syntax**: `<single-transition>#`
   *
   * @deprecated
   */
  OTransition?: Property.Transition<TTime> | undefined;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   *
   * @deprecated
   */
  OTransitionProperty?: Property.TransitionProperty | undefined;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  OTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | baseline | stretch`
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  WebkitBoxAlign?: Property.BoxAlign | undefined;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Syntax**: `normal | reverse | inherit`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  WebkitBoxDirection?: Property.BoxDirection | undefined;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  WebkitBoxFlex?: Property.BoxFlex | undefined;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  WebkitBoxFlexGroup?: Property.BoxFlexGroup | undefined;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Syntax**: `single | multiple`
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  WebkitBoxLines?: Property.BoxLines | undefined;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  WebkitBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`
   *
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  WebkitBoxOrient?: Property.BoxOrient | undefined;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | justify`
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  WebkitBoxPack?: Property.BoxPack | undefined;
  /**
   * The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.
   *
   * **Syntax**: `none | repeat( <length-percentage> )`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  WebkitScrollSnapPointsX?: Property.ScrollSnapPointsX | undefined;
  /**
   * The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.
   *
   * **Syntax**: `none | repeat( <length-percentage> )`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  WebkitScrollSnapPointsY?: Property.ScrollSnapPointsY | undefined;
}
interface SvgProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  alignmentBaseline?: Property.AlignmentBaseline | undefined;
  baselineShift?: Property.BaselineShift<TLength> | undefined;
  clip?: Property.Clip | undefined;
  clipPath?: Property.ClipPath | undefined;
  clipRule?: Property.ClipRule | undefined;
  color?: Property.Color | undefined;
  colorInterpolation?: Property.ColorInterpolation | undefined;
  colorRendering?: Property.ColorRendering | undefined;
  cursor?: Property.Cursor | undefined;
  direction?: Property.Direction | undefined;
  display?: Property.Display | undefined;
  dominantBaseline?: Property.DominantBaseline | undefined;
  fill?: Property.Fill | undefined;
  fillOpacity?: Property.FillOpacity | undefined;
  fillRule?: Property.FillRule | undefined;
  filter?: Property.Filter | undefined;
  floodColor?: Property.FloodColor | undefined;
  floodOpacity?: Property.FloodOpacity | undefined;
  font?: Property.Font | undefined;
  fontFamily?: Property.FontFamily | undefined;
  fontSize?: Property.FontSize<TLength> | undefined;
  fontSizeAdjust?: Property.FontSizeAdjust | undefined;
  fontStretch?: Property.FontStretch | undefined;
  fontStyle?: Property.FontStyle | undefined;
  fontVariant?: Property.FontVariant | undefined;
  fontWeight?: Property.FontWeight | undefined;
  glyphOrientationVertical?: Property.GlyphOrientationVertical | undefined;
  imageRendering?: Property.ImageRendering | undefined;
  letterSpacing?: Property.LetterSpacing<TLength> | undefined;
  lightingColor?: Property.LightingColor | undefined;
  lineHeight?: Property.LineHeight<TLength> | undefined;
  marker?: Property.Marker | undefined;
  markerEnd?: Property.MarkerEnd | undefined;
  markerMid?: Property.MarkerMid | undefined;
  markerStart?: Property.MarkerStart | undefined;
  mask?: Property.Mask<TLength> | undefined;
  opacity?: Property.Opacity | undefined;
  overflow?: Property.Overflow | undefined;
  paintOrder?: Property.PaintOrder | undefined;
  pointerEvents?: Property.PointerEvents | undefined;
  shapeRendering?: Property.ShapeRendering | undefined;
  stopColor?: Property.StopColor | undefined;
  stopOpacity?: Property.StopOpacity | undefined;
  stroke?: Property.Stroke | undefined;
  strokeDasharray?: Property.StrokeDasharray<TLength> | undefined;
  strokeDashoffset?: Property.StrokeDashoffset<TLength> | undefined;
  strokeLinecap?: Property.StrokeLinecap | undefined;
  strokeLinejoin?: Property.StrokeLinejoin | undefined;
  strokeMiterlimit?: Property.StrokeMiterlimit | undefined;
  strokeOpacity?: Property.StrokeOpacity | undefined;
  strokeWidth?: Property.StrokeWidth<TLength> | undefined;
  textAnchor?: Property.TextAnchor | undefined;
  textDecoration?: Property.TextDecoration<TLength> | undefined;
  textRendering?: Property.TextRendering | undefined;
  unicodeBidi?: Property.UnicodeBidi | undefined;
  vectorEffect?: Property.VectorEffect | undefined;
  visibility?: Property.Visibility | undefined;
  whiteSpace?: Property.WhiteSpace | undefined;
  wordSpacing?: Property.WordSpacing<TLength> | undefined;
  writingMode?: Property.WritingMode | undefined;
}
interface Properties<TLength = (string & {}) | 0, TTime = string & {}> extends StandardProperties<TLength, TTime>, VendorProperties<TLength, TTime>, ObsoleteProperties<TLength, TTime>, SvgProperties<TLength, TTime> {}
type Globals = "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
declare namespace Property {
  export type AccentColor = Globals | DataType.Color | "auto";
  export type AlignContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});
  export type AlignItems = Globals | DataType.SelfPosition | "baseline" | "normal" | "stretch" | (string & {});
  export type AlignSelf = Globals | DataType.SelfPosition | "auto" | "baseline" | "normal" | "stretch" | (string & {});
  export type AlignTracks = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});
  export type All = Globals;
  export type Animation<TTime = string & {}> = Globals | DataType.SingleAnimation<TTime> | (string & {});
  export type AnimationDelay<TTime = string & {}> = Globals | TTime | (string & {});
  export type AnimationDirection = Globals | DataType.SingleAnimationDirection | (string & {});
  export type AnimationDuration<TTime = string & {}> = Globals | TTime | (string & {});
  export type AnimationFillMode = Globals | DataType.SingleAnimationFillMode | (string & {});
  export type AnimationIterationCount = Globals | "infinite" | (string & {}) | (number & {});
  export type AnimationName = Globals | "none" | (string & {});
  export type AnimationPlayState = Globals | "paused" | "running" | (string & {});
  export type AnimationTimeline = Globals | DataType.SingleAnimationTimeline | (string & {});
  export type AnimationTimingFunction = Globals | DataType.EasingFunction | (string & {});
  export type Appearance = Globals | DataType.CompatAuto | "auto" | "menulist-button" | "none" | "textfield";
  export type AspectRatio = Globals | "auto" | (string & {});
  export type Azimuth = Globals | "behind" | "center" | "center-left" | "center-right" | "far-left" | "far-right" | "left" | "left-side" | "leftwards" | "right" | "right-side" | "rightwards" | (string & {});
  export type BackdropFilter = Globals | "none" | (string & {});
  export type BackfaceVisibility = Globals | "hidden" | "visible";
  export type Background<TLength = (string & {}) | 0> = Globals | DataType.FinalBgLayer<TLength> | (string & {});
  export type BackgroundAttachment = Globals | DataType.Attachment | (string & {});
  export type BackgroundBlendMode = Globals | DataType.BlendMode | (string & {});
  export type BackgroundClip = Globals | DataType.Box | (string & {});
  export type BackgroundColor = Globals | DataType.Color;
  export type BackgroundImage = Globals | "none" | (string & {});
  export type BackgroundOrigin = Globals | DataType.Box | (string & {});
  export type BackgroundPosition<TLength = (string & {}) | 0> = Globals | DataType.BgPosition<TLength> | (string & {});
  export type BackgroundPositionX<TLength = (string & {}) | 0> = Globals | TLength | "center" | "left" | "right" | "x-end" | "x-start" | (string & {});
  export type BackgroundPositionY<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "top" | "y-end" | "y-start" | (string & {});
  export type BackgroundRepeat = Globals | DataType.RepeatStyle | (string & {});
  export type BackgroundSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});
  export type BlockOverflow = Globals | "clip" | "ellipsis" | (string & {});
  export type BlockSize<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fill-available" | "auto" | "fit-content" | "max-content" | "min-content" | (string & {});
  export type Border<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderBlock<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderBlockColor = Globals | DataType.Color | (string & {});
  export type BorderBlockEnd<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderBlockEndColor = Globals | DataType.Color;
  export type BorderBlockEndStyle = Globals | DataType.LineStyle;
  export type BorderBlockEndWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderBlockStart<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderBlockStartColor = Globals | DataType.Color;
  export type BorderBlockStartStyle = Globals | DataType.LineStyle;
  export type BorderBlockStartWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderBlockStyle = Globals | DataType.LineStyle;
  export type BorderBlockWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderBottom<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderBottomColor = Globals | DataType.Color;
  export type BorderBottomLeftRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderBottomRightRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderBottomStyle = Globals | DataType.LineStyle;
  export type BorderBottomWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderCollapse = Globals | "collapse" | "separate";
  export type BorderColor = Globals | DataType.Color | (string & {});
  export type BorderEndEndRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderEndStartRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderImage = Globals | "none" | "repeat" | "round" | "space" | "stretch" | (string & {}) | (number & {});
  export type BorderImageOutset<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});
  export type BorderImageRepeat = Globals | "repeat" | "round" | "space" | "stretch" | (string & {});
  export type BorderImageSlice = Globals | (string & {}) | (number & {});
  export type BorderImageSource = Globals | "none" | (string & {});
  export type BorderImageWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});
  export type BorderInline<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderInlineColor = Globals | DataType.Color | (string & {});
  export type BorderInlineEnd<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderInlineEndColor = Globals | DataType.Color;
  export type BorderInlineEndStyle = Globals | DataType.LineStyle;
  export type BorderInlineEndWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderInlineStart<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderInlineStartColor = Globals | DataType.Color;
  export type BorderInlineStartStyle = Globals | DataType.LineStyle;
  export type BorderInlineStartWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderInlineStyle = Globals | DataType.LineStyle;
  export type BorderInlineWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderLeft<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderLeftColor = Globals | DataType.Color;
  export type BorderLeftStyle = Globals | DataType.LineStyle;
  export type BorderLeftWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderRight<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderRightColor = Globals | DataType.Color;
  export type BorderRightStyle = Globals | DataType.LineStyle;
  export type BorderRightWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderSpacing<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderStartEndRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderStartStartRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderStyle = Globals | DataType.LineStyle | (string & {});
  export type BorderTop<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type BorderTopColor = Globals | DataType.Color;
  export type BorderTopLeftRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderTopRightRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type BorderTopStyle = Globals | DataType.LineStyle;
  export type BorderTopWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type BorderWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});
  export type Bottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type BoxAlign = Globals | "baseline" | "center" | "end" | "start" | "stretch";
  export type BoxDecorationBreak = Globals | "clone" | "slice";
  export type BoxDirection = Globals | "inherit" | "normal" | "reverse";
  export type BoxFlex = Globals | (number & {}) | (string & {});
  export type BoxFlexGroup = Globals | (number & {}) | (string & {});
  export type BoxLines = Globals | "multiple" | "single";
  export type BoxOrdinalGroup = Globals | (number & {}) | (string & {});
  export type BoxOrient = Globals | "block-axis" | "horizontal" | "inherit" | "inline-axis" | "vertical";
  export type BoxPack = Globals | "center" | "end" | "justify" | "start";
  export type BoxShadow = Globals | "none" | (string & {});
  export type BoxSizing = Globals | "border-box" | "content-box";
  export type BreakAfter = Globals | "all" | "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";
  export type BreakBefore = Globals | "all" | "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";
  export type BreakInside = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";
  export type CaptionSide = Globals | "block-end" | "block-start" | "bottom" | "inline-end" | "inline-start" | "top";
  export type CaretColor = Globals | DataType.Color | "auto";
  export type Clear = Globals | "both" | "inline-end" | "inline-start" | "left" | "none" | "right";
  export type Clip = Globals | "auto" | (string & {});
  export type ClipPath = Globals | DataType.GeometryBox | "none" | (string & {});
  export type Color = Globals | DataType.Color;
  export type PrintColorAdjust = Globals | "economy" | "exact";
  export type ColorScheme = Globals | "dark" | "light" | "normal" | (string & {});
  export type ColumnCount = Globals | "auto" | (number & {}) | (string & {});
  export type ColumnFill = Globals | "auto" | "balance" | "balance-all";
  export type ColumnGap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});
  export type ColumnRule<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type ColumnRuleColor = Globals | DataType.Color;
  export type ColumnRuleStyle = Globals | DataType.LineStyle | (string & {});
  export type ColumnRuleWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});
  export type ColumnSpan = Globals | "all" | "none";
  export type ColumnWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto";
  export type Columns<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});
  export type Contain = Globals | "content" | "layout" | "none" | "paint" | "size" | "strict" | "style" | (string & {});
  export type Content = Globals | DataType.ContentList | "none" | "normal" | (string & {});
  export type ContentVisibility = Globals | "auto" | "hidden" | "visible";
  export type CounterIncrement = Globals | "none" | (string & {});
  export type CounterReset = Globals | "none" | (string & {});
  export type CounterSet = Globals | "none" | (string & {});
  export type Cursor = Globals | "-moz-grab" | "-webkit-grab" | "alias" | "all-scroll" | "auto" | "cell" | "col-resize" | "context-menu" | "copy" | "crosshair" | "default" | "e-resize" | "ew-resize" | "grab" | "grabbing" | "help" | "move" | "n-resize" | "ne-resize" | "nesw-resize" | "no-drop" | "none" | "not-allowed" | "ns-resize" | "nw-resize" | "nwse-resize" | "pointer" | "progress" | "row-resize" | "s-resize" | "se-resize" | "sw-resize" | "text" | "vertical-text" | "w-resize" | "wait" | "zoom-in" | "zoom-out" | (string & {});
  export type Direction = Globals | "ltr" | "rtl";
  export type Display = Globals | DataType.DisplayOutside | DataType.DisplayInside | DataType.DisplayInternal | DataType.DisplayLegacy | "contents" | "list-item" | "none" | (string & {});
  export type EmptyCells = Globals | "hide" | "show";
  export type Filter = Globals | "none" | (string & {});
  export type Flex<TLength = (string & {}) | 0> = Globals | TLength | "auto" | "content" | "fit-content" | "max-content" | "min-content" | "none" | (string & {}) | (number & {});
  export type FlexBasis<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-auto" | "auto" | "content" | "fit-content" | "max-content" | "min-content" | (string & {});
  export type FlexDirection = Globals | "column" | "column-reverse" | "row" | "row-reverse";
  export type FlexFlow = Globals | "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | (string & {});
  export type FlexGrow = Globals | (number & {}) | (string & {});
  export type FlexShrink = Globals | (number & {}) | (string & {});
  export type FlexWrap = Globals | "nowrap" | "wrap" | "wrap-reverse";
  export type Float = Globals | "inline-end" | "inline-start" | "left" | "none" | "right";
  export type Font = Globals | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | (string & {});
  export type FontFamily = Globals | DataType.GenericFamily | (string & {});
  export type FontFeatureSettings = Globals | "normal" | (string & {});
  export type FontKerning = Globals | "auto" | "none" | "normal";
  export type FontLanguageOverride = Globals | "normal" | (string & {});
  export type FontOpticalSizing = Globals | "auto" | "none";
  export type FontSize<TLength = (string & {}) | 0> = Globals | DataType.AbsoluteSize | TLength | "larger" | "smaller" | (string & {});
  export type FontSizeAdjust = Globals | "from-font" | "none" | (string & {}) | (number & {});
  export type FontSmooth<TLength = (string & {}) | 0> = Globals | DataType.AbsoluteSize | TLength | "always" | "auto" | "never";
  export type FontStretch = Globals | DataType.FontStretchAbsolute;
  export type FontStyle = Globals | "italic" | "normal" | "oblique" | (string & {});
  export type FontSynthesis = Globals | "none" | "small-caps" | "style" | "weight" | (string & {});
  export type FontVariant = Globals | DataType.EastAsianVariantValues | "all-petite-caps" | "all-small-caps" | "common-ligatures" | "contextual" | "diagonal-fractions" | "discretionary-ligatures" | "full-width" | "historical-forms" | "historical-ligatures" | "lining-nums" | "no-common-ligatures" | "no-contextual" | "no-discretionary-ligatures" | "no-historical-ligatures" | "none" | "normal" | "oldstyle-nums" | "ordinal" | "petite-caps" | "proportional-nums" | "proportional-width" | "ruby" | "slashed-zero" | "small-caps" | "stacked-fractions" | "tabular-nums" | "titling-caps" | "unicase" | (string & {});
  export type FontVariantAlternates = Globals | "historical-forms" | "normal" | (string & {});
  export type FontVariantCaps = Globals | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";
  export type FontVariantEastAsian = Globals | DataType.EastAsianVariantValues | "full-width" | "normal" | "proportional-width" | "ruby" | (string & {});
  export type FontVariantLigatures = Globals | "common-ligatures" | "contextual" | "discretionary-ligatures" | "historical-ligatures" | "no-common-ligatures" | "no-contextual" | "no-discretionary-ligatures" | "no-historical-ligatures" | "none" | "normal" | (string & {});
  export type FontVariantNumeric = Globals | "diagonal-fractions" | "lining-nums" | "normal" | "oldstyle-nums" | "ordinal" | "proportional-nums" | "slashed-zero" | "stacked-fractions" | "tabular-nums" | (string & {});
  export type FontVariantPosition = Globals | "normal" | "sub" | "super";
  export type FontVariationSettings = Globals | "normal" | (string & {});
  export type FontWeight = Globals | DataType.FontWeightAbsolute | "bolder" | "lighter";
  export type ForcedColorAdjust = Globals | "auto" | "none";
  export type Gap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});
  export type Grid = Globals | "none" | (string & {});
  export type GridArea = Globals | DataType.GridLine | (string & {});
  export type GridAutoColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | (string & {});
  export type GridAutoFlow = Globals | "column" | "dense" | "row" | (string & {});
  export type GridAutoRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | (string & {});
  export type GridColumn = Globals | DataType.GridLine | (string & {});
  export type GridColumnEnd = Globals | DataType.GridLine;
  export type GridColumnGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type GridColumnStart = Globals | DataType.GridLine;
  export type GridGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type GridRow = Globals | DataType.GridLine | (string & {});
  export type GridRowEnd = Globals | DataType.GridLine;
  export type GridRowGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type GridRowStart = Globals | DataType.GridLine;
  export type GridTemplate = Globals | "none" | (string & {});
  export type GridTemplateAreas = Globals | "none" | (string & {});
  export type GridTemplateColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | "subgrid" | (string & {});
  export type GridTemplateRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | "subgrid" | (string & {});
  export type HangingPunctuation = Globals | "allow-end" | "first" | "force-end" | "last" | "none" | (string & {});
  export type Height<TLength = (string & {}) | 0> = Globals | TLength | "-moz-max-content" | "-moz-min-content" | "-webkit-fit-content" | "auto" | "fit-content" | "max-content" | "min-content" | (string & {});
  export type HyphenateCharacter = Globals | "auto" | (string & {});
  export type Hyphens = Globals | "auto" | "manual" | "none";
  export type ImageOrientation = Globals | "flip" | "from-image" | (string & {});
  export type ImageRendering = Globals | "-moz-crisp-edges" | "-webkit-optimize-contrast" | "auto" | "crisp-edges" | "pixelated";
  export type ImageResolution = Globals | "from-image" | (string & {});
  export type ImeMode = Globals | "active" | "auto" | "disabled" | "inactive" | "normal";
  export type InitialLetter = Globals | "normal" | (string & {}) | (number & {});
  export type InlineSize<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fill-available" | "auto" | "fit-content" | "max-content" | "min-content" | (string & {});
  export type InputSecurity = Globals | "auto" | "none";
  export type Inset<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type InsetBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type InsetBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type InsetBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type InsetInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type InsetInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type InsetInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type Isolation = Globals | "auto" | "isolate";
  export type JustifyContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "left" | "normal" | "right" | (string & {});
  export type JustifyItems = Globals | DataType.SelfPosition | "baseline" | "left" | "legacy" | "normal" | "right" | "stretch" | (string & {});
  export type JustifySelf = Globals | DataType.SelfPosition | "auto" | "baseline" | "left" | "normal" | "right" | "stretch" | (string & {});
  export type JustifyTracks = Globals | DataType.ContentDistribution | DataType.ContentPosition | "left" | "normal" | "right" | (string & {});
  export type Left<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type LetterSpacing<TLength = (string & {}) | 0> = Globals | TLength | "normal";
  export type LineBreak = Globals | "anywhere" | "auto" | "loose" | "normal" | "strict";
  export type LineClamp = Globals | "none" | (number & {}) | (string & {});
  export type LineHeight<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {}) | (number & {});
  export type LineHeightStep<TLength = (string & {}) | 0> = Globals | TLength;
  export type ListStyle = Globals | "inside" | "none" | "outside" | (string & {});
  export type ListStyleImage = Globals | "none" | (string & {});
  export type ListStylePosition = Globals | "inside" | "outside";
  export type ListStyleType = Globals | "none" | (string & {});
  export type Margin<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginBottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginLeft<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginRight<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type MarginTop<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type Mask<TLength = (string & {}) | 0> = Globals | DataType.MaskLayer<TLength> | (string & {});
  export type MaskBorder = Globals | "alpha" | "luminance" | "none" | "repeat" | "round" | "space" | "stretch" | (string & {}) | (number & {});
  export type MaskBorderMode = Globals | "alpha" | "luminance";
  export type MaskBorderOutset<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});
  export type MaskBorderRepeat = Globals | "repeat" | "round" | "space" | "stretch" | (string & {});
  export type MaskBorderSlice = Globals | (string & {}) | (number & {});
  export type MaskBorderSource = Globals | "none" | (string & {});
  export type MaskBorderWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});
  export type MaskClip = Globals | DataType.GeometryBox | "no-clip" | (string & {});
  export type MaskComposite = Globals | DataType.CompositingOperator | (string & {});
  export type MaskImage = Globals | "none" | (string & {});
  export type MaskMode = Globals | DataType.MaskingMode | (string & {});
  export type MaskOrigin = Globals | DataType.GeometryBox | (string & {});
  export type MaskPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | (string & {});
  export type MaskRepeat = Globals | DataType.RepeatStyle | (string & {});
  export type MaskSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});
  export type MaskType = Globals | "alpha" | "luminance";
  export type MathStyle = Globals | "compact" | "normal";
  export type MaxBlockSize<TLength = (string & {}) | 0> = Globals | TLength | "-moz-max-content" | "-moz-min-content" | "-webkit-fill-available" | "fit-content" | "max-content" | "min-content" | "none" | (string & {});
  export type MaxHeight<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fit-content" | "-webkit-max-content" | "-webkit-min-content" | "fit-content" | "intrinsic" | "max-content" | "min-content" | "none" | (string & {});
  export type MaxInlineSize<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fill-available" | "fit-content" | "max-content" | "min-content" | "none" | (string & {});
  export type MaxLines = Globals | "none" | (number & {}) | (string & {});
  export type MaxWidth<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fit-content" | "-webkit-max-content" | "-webkit-min-content" | "fit-content" | "intrinsic" | "max-content" | "min-content" | "none" | (string & {});
  export type MinBlockSize<TLength = (string & {}) | 0> = Globals | TLength | "-moz-max-content" | "-moz-min-content" | "-webkit-fill-available" | "auto" | "fit-content" | "max-content" | "min-content" | (string & {});
  export type MinHeight<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fit-content" | "-webkit-max-content" | "-webkit-min-content" | "auto" | "fit-content" | "intrinsic" | "max-content" | "min-content" | (string & {});
  export type MinInlineSize<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fill-available" | "auto" | "fit-content" | "max-content" | "min-content" | (string & {});
  export type MinWidth<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fill-available" | "-webkit-fit-content" | "-webkit-max-content" | "-webkit-min-content" | "auto" | "fit-content" | "intrinsic" | "max-content" | "min-content" | "min-intrinsic" | (string & {});
  export type MixBlendMode = Globals | DataType.BlendMode | "plus-lighter";
  export type Offset<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | DataType.GeometryBox | "auto" | "none" | (string & {});
  export type OffsetDistance<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type OffsetPath = Globals | DataType.GeometryBox | "none" | (string & {});
  export type OffsetRotate = Globals | "auto" | "reverse" | (string & {});
  export type ObjectFit = Globals | "contain" | "cover" | "fill" | "none" | "scale-down";
  export type ObjectPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;
  export type OffsetAnchor<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "auto";
  export type Opacity = Globals | (string & {}) | (number & {});
  export type Order = Globals | (number & {}) | (string & {});
  export type Orphans = Globals | (number & {}) | (string & {});
  export type Outline<TLength = (string & {}) | 0> = Globals | DataType.Color | DataType.LineStyle | DataType.LineWidth<TLength> | "auto" | "invert" | (string & {});
  export type OutlineColor = Globals | DataType.Color | "invert";
  export type OutlineOffset<TLength = (string & {}) | 0> = Globals | TLength;
  export type OutlineStyle = Globals | DataType.LineStyle | "auto" | (string & {});
  export type OutlineWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
  export type Overflow = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible" | (string & {});
  export type OverflowAnchor = Globals | "auto" | "none";
  export type OverflowBlock = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";
  export type OverflowClipBox = Globals | "content-box" | "padding-box";
  export type OverflowClipMargin<TLength = (string & {}) | 0> = Globals | DataType.VisualBox | TLength | (string & {});
  export type OverflowInline = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";
  export type OverflowWrap = Globals | "anywhere" | "break-word" | "normal";
  export type OverflowX = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible";
  export type OverflowY = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible";
  export type OverscrollBehavior = Globals | "auto" | "contain" | "none" | (string & {});
  export type OverscrollBehaviorBlock = Globals | "auto" | "contain" | "none";
  export type OverscrollBehaviorInline = Globals | "auto" | "contain" | "none";
  export type OverscrollBehaviorX = Globals | "auto" | "contain" | "none";
  export type OverscrollBehaviorY = Globals | "auto" | "contain" | "none";
  export type Padding<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingBlock<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingBlockStart<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingBottom<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingInline<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingInlineStart<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingLeft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingRight<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PaddingTop<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type PageBreakAfter = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";
  export type PageBreakBefore = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";
  export type PageBreakInside = Globals | "auto" | "avoid";
  export type PaintOrder = Globals | "fill" | "markers" | "normal" | "stroke" | (string & {});
  export type Perspective<TLength = (string & {}) | 0> = Globals | TLength | "none";
  export type PerspectiveOrigin<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;
  export type PlaceContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});
  export type PlaceItems = Globals | DataType.SelfPosition | "baseline" | "normal" | "stretch" | (string & {});
  export type PlaceSelf = Globals | DataType.SelfPosition | "auto" | "baseline" | "normal" | "stretch" | (string & {});
  export type PointerEvents = Globals | "all" | "auto" | "fill" | "inherit" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke";
  export type Position = Globals | "-webkit-sticky" | "absolute" | "fixed" | "relative" | "static" | "sticky";
  export type Quotes = Globals | "auto" | "none" | (string & {});
  export type Resize = Globals | "block" | "both" | "horizontal" | "inline" | "none" | "vertical";
  export type Right<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type Rotate = Globals | "none" | (string & {});
  export type RowGap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});
  export type RubyAlign = Globals | "center" | "space-around" | "space-between" | "start";
  export type RubyMerge = Globals | "auto" | "collapse" | "separate";
  export type RubyPosition = Globals | "alternate" | "inter-character" | "over" | "under" | (string & {});
  export type Scale = Globals | "none" | (string & {}) | (number & {});
  export type ScrollBehavior = Globals | "auto" | "smooth";
  export type ScrollMargin<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type ScrollMarginBlock<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type ScrollMarginBlockEnd<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollMarginBlockStart<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollMarginBottom<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollMarginInline<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type ScrollMarginInlineEnd<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollMarginInlineStart<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollMarginLeft<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollMarginRight<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollMarginTop<TLength = (string & {}) | 0> = Globals | TLength;
  export type ScrollPadding<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingBottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingLeft<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingRight<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollPaddingTop<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type ScrollSnapAlign = Globals | "center" | "end" | "none" | "start" | (string & {});
  export type ScrollSnapCoordinate<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "none" | (string & {});
  export type ScrollSnapDestination<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;
  export type ScrollSnapPointsX = Globals | "none" | (string & {});
  export type ScrollSnapPointsY = Globals | "none" | (string & {});
  export type ScrollSnapStop = Globals | "always" | "normal";
  export type ScrollSnapType = Globals | "block" | "both" | "inline" | "none" | "x" | "y" | (string & {});
  export type ScrollSnapTypeX = Globals | "mandatory" | "none" | "proximity";
  export type ScrollSnapTypeY = Globals | "mandatory" | "none" | "proximity";
  export type ScrollbarColor = Globals | "auto" | (string & {});
  export type ScrollbarGutter = Globals | "auto" | "stable" | (string & {});
  export type MsScrollbarTrackColor = Globals | DataType.Color;
  export type ScrollbarWidth = Globals | "auto" | "none" | "thin";
  export type ShapeImageThreshold = Globals | (string & {}) | (number & {});
  export type ShapeMargin<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type ShapeOutside = Globals | DataType.Box | "margin-box" | "none" | (string & {});
  export type TabSize<TLength = (string & {}) | 0> = Globals | TLength | (number & {}) | (string & {});
  export type TableLayout = Globals | "auto" | "fixed";
  export type TextAlign = Globals | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start";
  export type TextAlignLast = Globals | "auto" | "center" | "end" | "justify" | "left" | "right" | "start";
  export type TextCombineUpright = Globals | "all" | "none" | (string & {});
  export type TextDecoration<TLength = (string & {}) | 0> = Globals | DataType.Color | TLength | "auto" | "blink" | "dashed" | "dotted" | "double" | "from-font" | "grammar-error" | "line-through" | "none" | "overline" | "solid" | "spelling-error" | "underline" | "wavy" | (string & {});
  export type TextDecorationColor = Globals | DataType.Color;
  export type TextDecorationLine = Globals | "blink" | "grammar-error" | "line-through" | "none" | "overline" | "spelling-error" | "underline" | (string & {});
  export type TextDecorationSkip = Globals | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | (string & {});
  export type TextDecorationSkipInk = Globals | "all" | "auto" | "none";
  export type TextDecorationStyle = Globals | "dashed" | "dotted" | "double" | "solid" | "wavy";
  export type TextDecorationThickness<TLength = (string & {}) | 0> = Globals | TLength | "auto" | "from-font" | (string & {});
  export type TextEmphasis = Globals | DataType.Color | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | (string & {});
  export type TextEmphasisColor = Globals | DataType.Color;
  export type TextEmphasisPosition = Globals | (string & {});
  export type TextEmphasisStyle = Globals | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | (string & {});
  export type TextIndent<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type TextJustify = Globals | "auto" | "inter-character" | "inter-word" | "none";
  export type TextOrientation = Globals | "mixed" | "sideways" | "upright";
  export type TextOverflow = Globals | "clip" | "ellipsis" | (string & {});
  export type TextRendering = Globals | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";
  export type TextShadow = Globals | "none" | (string & {});
  export type TextSizeAdjust = Globals | "auto" | "none" | (string & {});
  export type TextTransform = Globals | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "none" | "uppercase";
  export type TextUnderlineOffset<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type TextUnderlinePosition = Globals | "auto" | "from-font" | "left" | "right" | "under" | (string & {});
  export type Top<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
  export type TouchAction = Globals | "-ms-manipulation" | "-ms-none" | "-ms-pinch-zoom" | "auto" | "manipulation" | "none" | "pan-down" | "pan-left" | "pan-right" | "pan-up" | "pan-x" | "pan-y" | "pinch-zoom" | (string & {});
  export type Transform = Globals | "none" | (string & {});
  export type TransformBox = Globals | "border-box" | "content-box" | "fill-box" | "stroke-box" | "view-box";
  export type TransformOrigin<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});
  export type TransformStyle = Globals | "flat" | "preserve-3d";
  export type Transition<TTime = string & {}> = Globals | DataType.SingleTransition<TTime> | (string & {});
  export type TransitionDelay<TTime = string & {}> = Globals | TTime | (string & {});
  export type TransitionDuration<TTime = string & {}> = Globals | TTime | (string & {});
  export type TransitionProperty = Globals | "all" | "none" | (string & {});
  export type TransitionTimingFunction = Globals | DataType.EasingFunction | (string & {});
  export type Translate<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});
  export type UnicodeBidi = Globals | "-moz-isolate" | "-moz-isolate-override" | "-moz-plaintext" | "-webkit-isolate" | "-webkit-isolate-override" | "-webkit-plaintext" | "bidi-override" | "embed" | "isolate" | "isolate-override" | "normal" | "plaintext";
  export type UserSelect = Globals | "-moz-none" | "all" | "auto" | "contain" | "element" | "none" | "text";
  export type VerticalAlign<TLength = (string & {}) | 0> = Globals | TLength | "baseline" | "bottom" | "middle" | "sub" | "super" | "text-bottom" | "text-top" | "top" | (string & {});
  export type Visibility = Globals | "collapse" | "hidden" | "visible";
  export type WhiteSpace = Globals | "-moz-pre-wrap" | "break-spaces" | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";
  export type Widows = Globals | (number & {}) | (string & {});
  export type Width<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fit-content" | "-webkit-max-content" | "auto" | "fit-content" | "intrinsic" | "max-content" | "min-content" | "min-intrinsic" | (string & {});
  export type WillChange = Globals | DataType.AnimateableFeature | "auto" | (string & {});
  export type WordBreak = Globals | "break-all" | "break-word" | "keep-all" | "normal";
  export type WordSpacing<TLength = (string & {}) | 0> = Globals | TLength | "normal";
  export type WordWrap = Globals | "break-word" | "normal";
  export type WritingMode = Globals | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl";
  export type ZIndex = Globals | "auto" | (number & {}) | (string & {});
  export type Zoom = Globals | "normal" | "reset" | (string & {}) | (number & {});
  export type MozAppearance = Globals | "-moz-mac-unified-toolbar" | "-moz-win-borderless-glass" | "-moz-win-browsertabbar-toolbox" | "-moz-win-communications-toolbox" | "-moz-win-communicationstext" | "-moz-win-exclude-glass" | "-moz-win-glass" | "-moz-win-media-toolbox" | "-moz-win-mediatext" | "-moz-window-button-box" | "-moz-window-button-box-maximized" | "-moz-window-button-close" | "-moz-window-button-maximize" | "-moz-window-button-minimize" | "-moz-window-button-restore" | "-moz-window-frame-bottom" | "-moz-window-frame-left" | "-moz-window-frame-right" | "-moz-window-titlebar" | "-moz-window-titlebar-maximized" | "button" | "button-arrow-down" | "button-arrow-next" | "button-arrow-previous" | "button-arrow-up" | "button-bevel" | "button-focus" | "caret" | "checkbox" | "checkbox-container" | "checkbox-label" | "checkmenuitem" | "dualbutton" | "groupbox" | "listbox" | "listitem" | "menuarrow" | "menubar" | "menucheckbox" | "menuimage" | "menuitem" | "menuitemtext" | "menulist" | "menulist-button" | "menulist-text" | "menulist-textfield" | "menupopup" | "menuradio" | "menuseparator" | "meterbar" | "meterchunk" | "none" | "progressbar" | "progressbar-vertical" | "progresschunk" | "progresschunk-vertical" | "radio" | "radio-container" | "radio-label" | "radiomenuitem" | "range" | "range-thumb" | "resizer" | "resizerpanel" | "scale-horizontal" | "scale-vertical" | "scalethumb-horizontal" | "scalethumb-vertical" | "scalethumbend" | "scalethumbstart" | "scalethumbtick" | "scrollbarbutton-down" | "scrollbarbutton-left" | "scrollbarbutton-right" | "scrollbarbutton-up" | "scrollbarthumb-horizontal" | "scrollbarthumb-vertical" | "scrollbartrack-horizontal" | "scrollbartrack-vertical" | "searchfield" | "separator" | "sheet" | "spinner" | "spinner-downbutton" | "spinner-textfield" | "spinner-upbutton" | "splitter" | "statusbar" | "statusbarpanel" | "tab" | "tab-scroll-arrow-back" | "tab-scroll-arrow-forward" | "tabpanel" | "tabpanels" | "textfield" | "textfield-multiline" | "toolbar" | "toolbarbutton" | "toolbarbutton-dropdown" | "toolbargripper" | "toolbox" | "tooltip" | "treeheader" | "treeheadercell" | "treeheadersortarrow" | "treeitem" | "treeline" | "treetwisty" | "treetwistyopen" | "treeview";
  export type MozBinding = Globals | "none" | (string & {});
  export type MozBorderBottomColors = Globals | DataType.Color | "none" | (string & {});
  export type MozBorderLeftColors = Globals | DataType.Color | "none" | (string & {});
  export type MozBorderRightColors = Globals | DataType.Color | "none" | (string & {});
  export type MozBorderTopColors = Globals | DataType.Color | "none" | (string & {});
  export type MozContextProperties = Globals | "fill" | "fill-opacity" | "none" | "stroke" | "stroke-opacity" | (string & {});
  export type MozFloatEdge = Globals | "border-box" | "content-box" | "margin-box" | "padding-box";
  export type MozForceBrokenImageIcon = Globals | 0 | (string & {}) | 1;
  export type MozImageRegion = Globals | "auto" | (string & {});
  export type MozOrient = Globals | "block" | "horizontal" | "inline" | "vertical";
  export type MozOutlineRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type MozOutlineRadiusBottomleft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type MozOutlineRadiusBottomright<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type MozOutlineRadiusTopleft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type MozOutlineRadiusTopright<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type MozStackSizing = Globals | "ignore" | "stretch-to-fit";
  export type MozTextBlink = Globals | "blink" | "none";
  export type MozUserFocus = Globals | "ignore" | "none" | "normal" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same";
  export type MozUserInput = Globals | "auto" | "disabled" | "enabled" | "none";
  export type MozUserModify = Globals | "read-only" | "read-write" | "write-only";
  export type MozWindowDragging = Globals | "drag" | "no-drag";
  export type MozWindowShadow = Globals | "default" | "menu" | "none" | "sheet" | "tooltip";
  export type MsAccelerator = Globals | "false" | "true";
  export type MsBlockProgression = Globals | "bt" | "lr" | "rl" | "tb";
  export type MsContentZoomChaining = Globals | "chained" | "none";
  export type MsContentZoomLimit = Globals | (string & {});
  export type MsContentZoomLimitMax = Globals | (string & {});
  export type MsContentZoomLimitMin = Globals | (string & {});
  export type MsContentZoomSnap = Globals | "mandatory" | "none" | "proximity" | (string & {});
  export type MsContentZoomSnapPoints = Globals | (string & {});
  export type MsContentZoomSnapType = Globals | "mandatory" | "none" | "proximity";
  export type MsContentZooming = Globals | "none" | "zoom";
  export type MsFilter = Globals | (string & {});
  export type MsFlowFrom = Globals | "none" | (string & {});
  export type MsFlowInto = Globals | "none" | (string & {});
  export type MsGridColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | (string & {});
  export type MsGridRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | (string & {});
  export type MsHighContrastAdjust = Globals | "auto" | "none";
  export type MsHyphenateLimitChars = Globals | "auto" | (string & {}) | (number & {});
  export type MsHyphenateLimitLines = Globals | "no-limit" | (number & {}) | (string & {});
  export type MsHyphenateLimitZone<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type MsImeAlign = Globals | "after" | "auto";
  export type MsOverflowStyle = Globals | "-ms-autohiding-scrollbar" | "auto" | "none" | "scrollbar";
  export type MsScrollChaining = Globals | "chained" | "none";
  export type MsScrollLimit = Globals | (string & {});
  export type MsScrollLimitXMax<TLength = (string & {}) | 0> = Globals | TLength | "auto";
  export type MsScrollLimitXMin<TLength = (string & {}) | 0> = Globals | TLength;
  export type MsScrollLimitYMax<TLength = (string & {}) | 0> = Globals | TLength | "auto";
  export type MsScrollLimitYMin<TLength = (string & {}) | 0> = Globals | TLength;
  export type MsScrollRails = Globals | "none" | "railed";
  export type MsScrollSnapPointsX = Globals | (string & {});
  export type MsScrollSnapPointsY = Globals | (string & {});
  export type MsScrollSnapType = Globals | "mandatory" | "none" | "proximity";
  export type MsScrollSnapX = Globals | (string & {});
  export type MsScrollSnapY = Globals | (string & {});
  export type MsScrollTranslation = Globals | "none" | "vertical-to-horizontal";
  export type MsScrollbar3dlightColor = Globals | DataType.Color;
  export type MsScrollbarArrowColor = Globals | DataType.Color;
  export type MsScrollbarBaseColor = Globals | DataType.Color;
  export type MsScrollbarDarkshadowColor = Globals | DataType.Color;
  export type MsScrollbarFaceColor = Globals | DataType.Color;
  export type MsScrollbarHighlightColor = Globals | DataType.Color;
  export type MsScrollbarShadowColor = Globals | DataType.Color;
  export type MsTextAutospace = Globals | "ideograph-alpha" | "ideograph-numeric" | "ideograph-parenthesis" | "ideograph-space" | "none";
  export type MsTouchSelect = Globals | "grippers" | "none";
  export type MsUserSelect = Globals | "element" | "none" | "text";
  export type MsWrapFlow = Globals | "auto" | "both" | "clear" | "end" | "maximum" | "start";
  export type MsWrapMargin<TLength = (string & {}) | 0> = Globals | TLength;
  export type MsWrapThrough = Globals | "none" | "wrap";
  export type WebkitAppearance = Globals | "-apple-pay-button" | "button" | "button-bevel" | "caret" | "checkbox" | "default-button" | "inner-spin-button" | "listbox" | "listitem" | "media-controls-background" | "media-controls-fullscreen-background" | "media-current-time-display" | "media-enter-fullscreen-button" | "media-exit-fullscreen-button" | "media-fullscreen-button" | "media-mute-button" | "media-overlay-play-button" | "media-play-button" | "media-seek-back-button" | "media-seek-forward-button" | "media-slider" | "media-sliderthumb" | "media-time-remaining-display" | "media-toggle-closed-captions-button" | "media-volume-slider" | "media-volume-slider-container" | "media-volume-sliderthumb" | "menulist" | "menulist-button" | "menulist-text" | "menulist-textfield" | "meter" | "none" | "progress-bar" | "progress-bar-value" | "push-button" | "radio" | "searchfield" | "searchfield-cancel-button" | "searchfield-decoration" | "searchfield-results-button" | "searchfield-results-decoration" | "slider-horizontal" | "slider-vertical" | "sliderthumb-horizontal" | "sliderthumb-vertical" | "square-button" | "textarea" | "textfield";
  export type WebkitBorderBefore<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
  export type WebkitBorderBeforeColor = Globals | DataType.Color;
  export type WebkitBorderBeforeStyle = Globals | DataType.LineStyle | (string & {});
  export type WebkitBorderBeforeWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});
  export type WebkitBoxReflect<TLength = (string & {}) | 0> = Globals | TLength | "above" | "below" | "left" | "right" | (string & {});
  export type WebkitLineClamp = Globals | "none" | (number & {}) | (string & {});
  export type WebkitMask<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | DataType.RepeatStyle | DataType.Box | "border" | "content" | "none" | "padding" | "text" | (string & {});
  export type WebkitMaskAttachment = Globals | DataType.Attachment | (string & {});
  export type WebkitMaskClip = Globals | DataType.Box | "border" | "content" | "padding" | "text" | (string & {});
  export type WebkitMaskComposite = Globals | DataType.CompositeStyle | (string & {});
  export type WebkitMaskImage = Globals | "none" | (string & {});
  export type WebkitMaskOrigin = Globals | DataType.Box | "border" | "content" | "padding" | (string & {});
  export type WebkitMaskPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | (string & {});
  export type WebkitMaskPositionX<TLength = (string & {}) | 0> = Globals | TLength | "center" | "left" | "right" | (string & {});
  export type WebkitMaskPositionY<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "top" | (string & {});
  export type WebkitMaskRepeat = Globals | DataType.RepeatStyle | (string & {});
  export type WebkitMaskRepeatX = Globals | "no-repeat" | "repeat" | "round" | "space";
  export type WebkitMaskRepeatY = Globals | "no-repeat" | "repeat" | "round" | "space";
  export type WebkitMaskSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});
  export type WebkitOverflowScrolling = Globals | "auto" | "touch";
  export type WebkitTapHighlightColor = Globals | DataType.Color;
  export type WebkitTextFillColor = Globals | DataType.Color;
  export type WebkitTextStroke<TLength = (string & {}) | 0> = Globals | DataType.Color | TLength | (string & {});
  export type WebkitTextStrokeColor = Globals | DataType.Color;
  export type WebkitTextStrokeWidth<TLength = (string & {}) | 0> = Globals | TLength;
  export type WebkitTouchCallout = Globals | "default" | "none";
  export type WebkitUserModify = Globals | "read-only" | "read-write" | "read-write-plaintext-only";
  export type AlignmentBaseline = Globals | "after-edge" | "alphabetic" | "auto" | "baseline" | "before-edge" | "central" | "hanging" | "ideographic" | "mathematical" | "middle" | "text-after-edge" | "text-before-edge";
  export type BaselineShift<TLength = (string & {}) | 0> = Globals | TLength | "baseline" | "sub" | "super" | (string & {});
  export type ClipRule = Globals | "evenodd" | "nonzero";
  export type ColorInterpolation = Globals | "auto" | "linearRGB" | "sRGB";
  export type ColorRendering = Globals | "auto" | "optimizeQuality" | "optimizeSpeed";
  export type DominantBaseline = Globals | "alphabetic" | "auto" | "central" | "hanging" | "ideographic" | "mathematical" | "middle" | "no-change" | "reset-size" | "text-after-edge" | "text-before-edge" | "use-script";
  export type Fill = Globals | DataType.Paint;
  export type FillOpacity = Globals | (number & {}) | (string & {});
  export type FillRule = Globals | "evenodd" | "nonzero";
  export type FloodColor = Globals | DataType.Color | "currentColor";
  export type FloodOpacity = Globals | (number & {}) | (string & {});
  export type GlyphOrientationVertical = Globals | "auto" | (string & {}) | (number & {});
  export type LightingColor = Globals | DataType.Color | "currentColor";
  export type Marker = Globals | "none" | (string & {});
  export type MarkerEnd = Globals | "none" | (string & {});
  export type MarkerMid = Globals | "none" | (string & {});
  export type MarkerStart = Globals | "none" | (string & {});
  export type ShapeRendering = Globals | "auto" | "crispEdges" | "geometricPrecision" | "optimizeSpeed";
  export type StopColor = Globals | DataType.Color | "currentColor";
  export type StopOpacity = Globals | (number & {}) | (string & {});
  export type Stroke = Globals | DataType.Paint;
  export type StrokeDasharray<TLength = (string & {}) | 0> = Globals | DataType.Dasharray<TLength> | "none";
  export type StrokeDashoffset<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type StrokeLinecap = Globals | "butt" | "round" | "square";
  export type StrokeLinejoin = Globals | "bevel" | "miter" | "round";
  export type StrokeMiterlimit = Globals | (number & {}) | (string & {});
  export type StrokeOpacity = Globals | (number & {}) | (string & {});
  export type StrokeWidth<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
  export type TextAnchor = Globals | "end" | "middle" | "start";
  export type VectorEffect = Globals | "non-scaling-stroke" | "none";
}
/**
 * **Attention!** Data types receives its name from the spec. E.g. `<color>` becomes `DataType.Color` and
 * `<content-distribution>` becomes `DataType.ContentDistribution`. It happens quite frequent that these data types
 * are split into several data types or/and name changes as the spec develops. So there's a risk that a minor/patch
 * update from `csstype` can break your typing if you're using the `DataType` namespace.
 */
declare namespace DataType {
  type AbsoluteSize = "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small" | "xxx-large";
  type AnimateableFeature = "contents" | "scroll-position" | (string & {});
  type Attachment = "fixed" | "local" | "scroll";
  type BgPosition<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});
  type BgSize<TLength> = TLength | "auto" | "contain" | "cover" | (string & {});
  type BlendMode = "color" | "color-burn" | "color-dodge" | "darken" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "luminosity" | "multiply" | "normal" | "overlay" | "saturation" | "screen" | "soft-light";
  type Box = "border-box" | "content-box" | "padding-box";
  type Color = NamedColor | DeprecatedSystemColor | "currentcolor" | (string & {});
  type CompatAuto = "button" | "checkbox" | "listbox" | "menulist" | "meter" | "progress-bar" | "push-button" | "radio" | "searchfield" | "slider-horizontal" | "square-button" | "textarea";
  type CompositeStyle = "clear" | "copy" | "destination-atop" | "destination-in" | "destination-out" | "destination-over" | "source-atop" | "source-in" | "source-out" | "source-over" | "xor";
  type CompositingOperator = "add" | "exclude" | "intersect" | "subtract";
  type ContentDistribution = "space-around" | "space-between" | "space-evenly" | "stretch";
  type ContentList = Quote | "contents" | (string & {});
  type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start";
  type CubicBezierTimingFunction = "ease" | "ease-in" | "ease-in-out" | "ease-out" | (string & {});
  type Dasharray<TLength> = TLength | (string & {}) | (number & {});
  type DeprecatedSystemColor = "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText";
  type DisplayInside = "-ms-flexbox" | "-ms-grid" | "-webkit-flex" | "flex" | "flow" | "flow-root" | "grid" | "ruby" | "table";
  type DisplayInternal = "ruby-base" | "ruby-base-container" | "ruby-text" | "ruby-text-container" | "table-caption" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group";
  type DisplayLegacy = "-ms-inline-flexbox" | "-ms-inline-grid" | "-webkit-inline-flex" | "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table";
  type DisplayOutside = "block" | "inline" | "run-in";
  type EasingFunction = CubicBezierTimingFunction | StepTimingFunction | "linear";
  type EastAsianVariantValues = "jis04" | "jis78" | "jis83" | "jis90" | "simplified" | "traditional";
  type FinalBgLayer<TLength> = Color | BgPosition<TLength> | RepeatStyle | Attachment | Box | "none" | (string & {});
  type FontStretchAbsolute = "condensed" | "expanded" | "extra-condensed" | "extra-expanded" | "normal" | "semi-condensed" | "semi-expanded" | "ultra-condensed" | "ultra-expanded" | (string & {});
  type FontWeightAbsolute = "bold" | "normal" | (number & {}) | (string & {});
  type GenericFamily = "cursive" | "fantasy" | "monospace" | "sans-serif" | "serif";
  type GeometryBox = Box | "fill-box" | "margin-box" | "stroke-box" | "view-box";
  type GridLine = "auto" | (string & {}) | (number & {});
  type LineStyle = "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid";
  type LineWidth<TLength> = TLength | "medium" | "thick" | "thin";
  type MaskLayer<TLength> = Position<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | "no-clip" | "none" | (string & {});
  type MaskingMode = "alpha" | "luminance" | "match-source";
  type NamedColor = "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen";
  type PageSize = "A3" | "A4" | "A5" | "B4" | "B5" | "JIS-B4" | "JIS-B5" | "ledger" | "legal" | "letter";
  type Paint = Color | "child" | "context-fill" | "context-stroke" | "none" | (string & {});
  type Position<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});
  type Quote = "close-quote" | "no-close-quote" | "no-open-quote" | "open-quote";
  type RepeatStyle = "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | (string & {});
  type SelfPosition = "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start";
  type SingleAnimation<TTime> = EasingFunction | SingleAnimationDirection | SingleAnimationFillMode | TTime | "infinite" | "none" | "paused" | "running" | (string & {}) | (number & {});
  type SingleAnimationDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";
  type SingleAnimationFillMode = "backwards" | "both" | "forwards" | "none";
  type SingleAnimationTimeline = "auto" | "none" | (string & {});
  type SingleTransition<TTime> = EasingFunction | TTime | "all" | "none" | (string & {});
  type StepTimingFunction = "step-end" | "step-start" | (string & {});
  type TrackBreadth<TLength> = TLength | "auto" | "max-content" | "min-content" | (string & {});
  type ViewportLength<TLength> = TLength | "auto" | (string & {});
  type VisualBox = "border-box" | "content-box" | "padding-box";
}
//#endregion
//#region ../grida-canvas-schema/grida.d.ts
/**
 * CSSProperties definition from `@types/react`
 */
interface CSSProperties extends Properties<string | number> {}
declare namespace grida {
  const mixed: unique symbol;
  namespace id {
    type NodeIdentifier = string;
    interface INodeIdGenerator<T extends string | number> {
      next(): T;
    }
    namespace noop {
      const generator: INodeIdGenerator<string>;
    }
    /**
     * Grida node identifier utilities.
     *
     * The identifier is a 32-bit unsigned integer composed of two fields:
     * - 8 bits: actor identifier (1-255 for online actors, 0 reserved for offline)
     * - 24 bits: per-actor node counter (0-16,777,215)
     *
     * While the packed representation is numeric, most of the JavaScript/TypeScript
     * code continues to work with string identifiers. The helpers in this namespace
     * provide safe packing, unpacking, formatting and generation utilities so that
     * the rest of the system can transition to the CRDT-friendly layout without
     * relying on random UUIDs.
     *
     * @see https://grida.co/docs/wg/feat-crdt/id
     */
    namespace u32 {
      namespace k {
        const ACTOR_ID_BITS = 8;
        const NODE_COUNTER_BITS = 24;
        /**
         * 255
         */
        const ACTOR_ID_MAX: number;
        /**
         * 16,777,215
         */
        const NODE_COUNTER_MAX: number;
        /**
         * 16,777,216
         */
        const NODE_COUNTER_MODULO: number;
        /**
         * 4,294,967,295
         */
        const PACKED_MAX: number;
        /**
         * e.g. "255-16777215" or "1-42"
         */
        const NODE_ID_SEPARATOR: "-";
        /**
         * 0 is reserved for offline-local (or non collaborative) work
         */
        const OFFLINE_ACTOR_ID: ActorId;
      }
      type ActorId = number;
      type NodeCounter = number;
      type PackedNodeId = number;
      interface NodeIdComponents {
        actor: ActorId;
        counter: NodeCounter;
      }
      type NodeIdGeneratorState = NodeIdComponents;
      /**
       * Packs the actor and node counter into a 32-bit unsigned integer.
       */
      function pack(actor: ActorId, counter: NodeCounter): PackedNodeId;
      /**
       * Unpacks a packed node identifier into its actor and counter components.
       */
      function unpack(packed: PackedNodeId): NodeIdComponents;
      /**
       * Creates the canonical string representation of a node identifier.
       */
      function format(actor: ActorId, counter: NodeCounter): NodeIdentifier;
      /**
       * Formats the provided components as a node identifier string.
       */
      function fromComponents(components: NodeIdComponents): NodeIdentifier;
      /**
       * Converts a packed node identifier into the canonical string representation.
       */
      function fromPacked(packed: PackedNodeId): NodeIdentifier;
      /**
       * Parses a node identifier expressed either as a string (e.g. "1:42") or as a
       * packed numeric value.
       */
      function parse(input: NodeIdentifier | PackedNodeId): NodeIdComponents;
      /**
       * Converts a node identifier (string or packed) into its numeric packed form.
       */
      function toPacked(input: NodeIdentifier | PackedNodeId): PackedNodeId;
      /**
       * Returns true when the provided value is a valid packed node identifier.
       */
      function isPackedNodeId(value: unknown): value is PackedNodeId;
      /**
       * Stateful node identifier generator.
       */
      class NodeIdGenerator {
        private _actor;
        private _counter;
        constructor(initial?: Partial<NodeIdGeneratorState>);
        get actor(): ActorId;
        get counter(): NodeCounter;
        /**
         * Sets the active actor identifier for subsequent allocations.
         */
        setActor(actor: ActorId): void;
        /**
         * Sets the next node counter value.
         */
        setCounter(counter: NodeCounter): void;
        /**
         * Returns true when the generator has exhausted the counter range.
         */
        get exhausted(): boolean;
        /**
         * Returns the next node identifier string and advances the counter.
         */
        next(): NodeIdentifier;
        /**
         * Returns the next packed node identifier and advances the counter.
         */
        nextPacked(): PackedNodeId;
        /**
         * Returns the next identifier components without allocating.
         */
        peek(): NodeIdComponents;
        /**
         * Serialises the generator state so it can be restored later.
         */
        snapshot(): NodeIdGeneratorState;
        /**
         * Restores the generator state from a snapshot.
         */
        restore(state: NodeIdGeneratorState): void;
        private ensureCapacity;
        private advance;
      }
    }
  }
  namespace program {
    namespace schema {
      /**
       * Transforms a JSON schema `IProperties` into a strongly-typed object where scalar types are properly mapped,
       * arrays are mapped to their corresponding array types, and other types (e.g., objects) are cast as `Record<string, unknown>`.
       *
       * @template T - The schema `IProperties` to transform into a type-safe object type.
       */
      export type TInferredPropTypes<T extends {
        [key: string]: PropertyDefinition;
      }> = { [K in keyof T]: T[K] extends TypeScalarPropertyDefinition ? T[K]["type"] extends "string" ? string : T[K]["type"] extends "number" ? number : T[K]["type"] extends "boolean" ? boolean : never : T[K] extends TypeArrayPropertyDefinition<any[]> ? Array<any> : T[K] extends TypeObjectPropertyDefinition<any> ? {
        [key: string]: any;
      } : T[K] extends TypeWellKnownObjectPropertyDefinition ? T[K]["type"] extends keyof objects.ObjectTypeMap ? objects.ObjectTypeMap[T[K]["type"]] : unknown : unknown };
      export type Value = tokens.NumericValueExpression | tokens.StringValueExpression | tokens.StringValueExpression[] | {
        [key: string]: Value;
      };
      export type Properties = {
        [name: string]: schema.PropertyDefinition;
      };
      export type Props = {
        [name: string]: Value;
      };
      export type PropertyDefinitionType = PropertyDefinition["type"];
      export type PropertyDefinition = TypeScalarPropertyDefinition | TypeArrayPropertyDefinition<any[]> | TypeObjectPropertyDefinition<any> | TypeWellKnownObjectPropertyDefinition;
      interface TypeScalarPropertyDefinition {
        type: "string" | "number" | "boolean";
        title?: string;
        description?: string;
        default?: tokens.StringValueExpression | tokens.NumericValueExpression | tokens.BooleanValueExpression;
        required?: boolean;
      }
      interface TypeArrayPropertyDefinition<T extends Array<Value>> {
        type: "array";
        title?: string;
        description?: string;
        items: PropertyDefinition;
        default?: T;
        required?: boolean;
      }
      interface TypeObjectPropertyDefinition<T extends Record<string, Value>> {
        type: "object";
        title?: string;
        description?: string;
        properties: Record<string, PropertyDefinition>;
        default?: T;
        required?: boolean;
      }
      interface TypeWellKnownObjectPropertyDefinition {
        type: objects.ObjectType;
        title?: string;
        description?: string;
        default?: objects.Object;
        required?: boolean;
      }
      export {};
    }
    /**
     * common object types
     */
    namespace objects {
      type ObjectType = Object["type"];
      type ObjectTypeMap = {
        richtext: Richtext;
        video: VideoSource;
        audio: AudioSource;
        image: ImageSource;
        youtube: YoutubeVideoSource;
        vimeo: VimeoVideoSource;
        facebook: FacebookVideoSource;
        rgba: RGBA32F;
      };
      type Object = Richtext | RGBA32F | Source | VideoPlayerSource;
      type Richtext = {
        type: "richtext";
        html: string;
      };
      type RGBA32F = {
        type: "rgbaf";
        r: number;
        g: number;
        b: number;
        a: number;
      };
      type Source = ImageSource | VideoSource | AudioSource;
      type VideoSource = {
        type: "video";
        src: string;
      };
      type AudioSource = {
        type: "audio";
        src: string;
      };
      type ImageSource = {
        type: "image";
        src: string;
      };
      type VideoPlayerSource = YoutubeVideoSource | VimeoVideoSource | FacebookVideoSource;
      type YoutubeVideoSource = {
        type: "youtube";
        url: string;
      };
      type VimeoVideoSource = {
        type: "vimeo";
        url: string;
      };
      type FacebookVideoSource = {
        type: "facebook";
        url: string;
      };
    }
  }
}
declare namespace grida.program.document {
  export const SCHEMA_VERSION = "0.91.0-beta+20260311";
  /**
   * Schema version compatibility check.
   *
   * ## Versioning policy
   *
   * We follow semver-ish `MAJOR.MINOR.PATCH-prerelease+build`.
   *
   * **While MAJOR is 0** (current), MINOR is the breaking-change boundary:
   * - 0.90.x → 0.91.x is a **breaking** change (e.g. FlatBuffers field-ID renumbering).
   * - 0.91.0 → 0.91.1 is a **compatible** (evolution) change.
   *
   * **Once MAJOR ≥ 1**, MAJOR becomes the breaking-change boundary (standard semver).
   *
   * @returns `true` if the file version is compatible with the current reader.
   */
  export function isSchemaCompatible(fileVersion: string): boolean;
  /**
   * JSON-serializable value type
   * Represents all valid JSON values (no functions, undefined, etc.)
   */
  export type JSONValue = string | number | boolean | null | {
    [key: string]: JSONValue | undefined;
  } | JSONValue[];
  /**
   * Simple Node Selector
   *
   * - "*" - all nodes
   * - "~" - siblings of current selection
   *    - does not include the current selection
   *    - if multiple selection, this is only valid if all selected nodes are siblings
   * - ">" - children of current selection
   * - "~+" - next sibling of current selection
   * - "~-" - previous sibling of current selection
   * - "selection" - current selection
   * - [] - specific nodes
   *
   * @example
   * - Select all nodes: "*"
   * - Select siblings of current selection: "~"
   * - Select self and siblings: ["selection", "~"]
   * - Select children of current selection: ">"
   */
  export type Selector = "*" | "~" | "~+" | "~-" | ">" | ".." | "selection" | nodes.NodeID[];
  export namespace k {
    /**
     * Key for the data attribute that stores the node ID in the HTML document.
     *
     * @see {@link INodeHtmlDocumentQueryDataAttributes}
     */
    const HTML_ELEMET_DATA_ATTRIBUTE_GRIDA_NODE_ID_KEY = "data-grida-node-id";
    /**
     * Key for the data attribute that stores the node {@link nodes.Node.locked} in the HTML document.
     *
     * @see {@link INodeHtmlDocumentQueryDataAttributes}
     */
    const HTML_ELEMET_DATA_ATTRIBUTE_GRIDA_NODE_LOCKED_KEY = "data-grida-node-locked";
  }
  /**
   * general purpose cascading document properties for envs, styles, constants, etc.
   */
  export interface IDocumentProperties {
    /**
     * document level properties / variables
     */
    properties: schema.Properties;
  }
  /**
   * Export configuration for a node
   */
  export type NodeExportSettings = NodeExportSettings_Image | NodeExportSettings_PDF | NodeExportSettings_SVG;
  export type NodeExportSettingsConstraints = {
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
  export interface NodeExportSettings_Image {
    readonly format: "PNG" | "JPEG" | "WEBP" | "BMP";
    readonly suffix?: string;
    readonly constraints?: NodeExportSettingsConstraints;
    /**
     * 0-100, for JPEG and WEBP formats
     */
    readonly quality?: number;
  }
  export interface NodeExportSettings_PDF {
    readonly format: "PDF";
    readonly suffix?: string;
  }
  export interface NodeExportSettings_SVG {
    readonly format: "SVG";
    readonly suffix?: string;
  }
  /**
   * Per-node metadata storage
   * Keyed by node_id, then namespace
   *
   * Currently only supports well-known namespaces.
   * Add new namespaces here as features are added.
   */
  export interface INodeMetadata {
    metadata?: Record<nodes.NodeID, {
      /**
       * Export settings for a node
       * Array of export configurations (supports multiple configs per node)
       */
      export_settings?: NodeExportSettings[];
      /**
       * User-injected custom data
       * JSON-serializable key-value object
       */
      userdata?: Record<string, unknown> | null;
    }>;
  }
  /**
   * contains all original template definition under this defined document in k:v pair
   */
  export interface IDocumentTemplatesRepository {
    /**
     * user registered templates
     */
    templates?: Record<string, template.TemplateDocumentDefinition>;
  }
  export interface IOverridesRepository {
    /**
     * instance's exposed child node overrides
     */
    overrides: Record<nodes.NodeID, nodes.NodeChange>;
  }
  /**
   * contains all nodes under this defined document in k:v pair
   *
   * @see {@link IDocumentDefinition}
   */
  export interface INodesGraph {
    nodes: Record<nodes.NodeID, nodes.Node>;
    links: Record<nodes.NodeID, nodes.NodeID[] | undefined>;
  }
  export type ImageType = "image/png" | "image/jpeg" | "image/webp" | "image/gif";
  /**
   * reference to an registered image
   */
  export type ImageRef = {
    type: ImageType;
    url: string;
    width: number;
    height: number;
    bytes: number;
  };
  /**
   * contains all images (ref) under this defined document in k:v pair
   *
   * @see {@link IDocumentDefinition}
   */
  export interface IImagesRepository {
    images: Record<string, ImageRef>;
  }
  /**
   * contains all bitmaps (data) under this defined document in k:v pair
   *
   * @see {@link IDocumentDefinition}
   */
  export interface IBitmapsRepository {
    bitmaps: Record<string, cmath.raster.Bitmap & {
      version: number;
    }>;
  }
  /**
   * background color of the scene
   */
  export interface ISceneBackground {
    /**
     * This property may not be handled, or fallback to white #FFFFFF depending on the rendering context.
     */
    background_color?: color.colorformats.RGBA32F | null | undefined | "";
  }
  export interface Guide2D {
    readonly axis: cmath.Axis;
    offset: number;
  }
  export interface I2DGuides {
    guides: Array<Guide2D>;
  }
  export type EdgePointPosition2D = {
    type: "position";
    x: number;
    y: number;
  };
  export type EdgePointNodeAnchor = {
    type: "anchor";
    target: nodes.NodeID;
  };
  export type EdgePoint = EdgePointPosition2D | EdgePointNodeAnchor;
  export interface Edge2D {
    id: string;
    readonly type: "edge";
    a: EdgePoint;
    b: EdgePoint;
  }
  export interface IEdges {
    edges: Array<Edge2D>;
  }
  /**
   * Represents a normalized document structure where all nodes are stored in a flat map
   * with a single `root_id` as the entry point for traversal.
   *
   * @remarks
   * This structure is designed to improve efficiency and scalability by avoiding deep nesting.
   * Instead of storing child nodes within each parent node (deeply nested children), we store
   * all nodes in a flat `Record<string, Node>` and reference child nodes by their IDs. This
   * setup allows for constant-time access to nodes, simplifies updates, and enhances compatibility
   * with React's rendering model.
   *
   * ## Benefits of a Flat Structure over Nested Children:
   * 1. **Performance and Efficiency**:
   *    - **Constant-Time Lookup**: Storing nodes in a flat map (`nodes: Record<string, Node>`) allows
   *      for quick lookups by ID with `O(1)` access time, regardless of the document's complexity or depth.
   *    - **Simplified Updates**: With each node accessible directly by ID, modifications do not require
   *      traversing deeply nested structures, reducing the computational cost of updates.
   *
   * 2. **Compatibility with React**:
   *    - **Minimized Re-renders**: In React, deeply nested structures can trigger unnecessary re-renders
   *      across the component tree. A flat structure allows React components to request only the specific
   *      node data they need, which reduces re-renders and optimizes the virtual DOM diffing process.
   *    - **Memoization-Friendly**: By accessing nodes through IDs rather than deeply nested props,
   *      components can be memoized effectively, re-rendering only when the specific node data they depend on changes.
   *
   * 3. **Scalability and Flexibility**:
   *    - This normalized structure is easier to scale, allowing for flexible hierarchical changes (e.g., moving
   *      nodes, reordering) without requiring deep restructuring.
   *    - Maintaining a `root_id` as the document's starting point simplifies traversal, ensuring that
   *      complex documents can still be navigated in a straightforward manner.
   *
   * ## Querying Nodes Efficiently
   * - Developers should access nodes through the `nodes` map using their unique IDs, starting from `root_id`.
   * - Traversal operations (e.g., rendering the document tree) can begin from `root_id` and recursively fetch child nodes by referencing `children` arrays in each `Node`.
   * - If frequent queries are necessary (e.g., repeated lookups in deeply nested areas), consider memoizing the result of these queries or using selector functions.
   *
   * ## Using in React Efficiently
   * - **React Context**: To avoid prop drilling, consider placing the `nodes` map in a React Context, allowing deeply nested components to access nodes by ID without passing them as props.
   * - **Memoized Selectors**: Use `useMemo` or selector functions (e.g., with libraries like Reselect) to derive specific subtrees or frequently accessed nodes, avoiding redundant calculations on each render.
   * - **Component Memoization**: Use `React.memo` or `useMemo` on components accessing nodes by ID to limit re-renders. This way, only components with changing dependencies re-render.
   *
   * @example
   * ```typescript
   * // Basic structure example:
   * const document: NormalizedNodeDocument = {
   *   root_id: "1",
   *   nodes: {
   *     "1": { id: "1", type: "container", children: ["2", "3"] },
   *     "2": { id: "2", type: "text", children: [] },
   *     "3": { id: "3", type: "image", children: [] },
   *   }
   * };
   *
   * // Example query: Render a node and its children
   * function NodeComponent({ id }: { id: string }) {
   *   const node = document.nodes[id];
   *   return (
   *     <div>
   *       <p>{node.type}</p>
   *       {node.children.map((childId) => (
   *         <NodeComponent key={childId} id={childId} />
   *       ))}
   *     </div>
   *   );
   * }
   * ```
   */
  export interface IDocumentDefinition extends IImagesRepository, IBitmapsRepository, document.INodesGraph, IDocumentProperties {}
  /**
   * [Grida Document Model]
   *
   * Grida document contains all nodes, properties, and embedded data required to render a complete document.
   *
   * **Note on scenes**: Scenes are stored as SceneNode in `nodes`, and referenced by ID in `scenes_ref`.
   * The `nodes` collection is the single source of truth for all node-like data including scenes.
   */
  export interface Document extends IDocumentDefinition, INodeMetadata {
    /**
     * Array of scene node IDs. Scene nodes themselves are stored in `nodes` as SceneNode.
     * Use `scenes_ref.map(id => nodes[id] as SceneNode)` to access scene data.
     */
    scenes_ref: string[];
    /**
     * The currently active/entry scene ID.
     */
    entry_scene_id?: string;
  }
  /**
   * [Packed Scene Document] A.K.A single scene document
   *
   * this is a portable document model with primary scene, used for in-memory operations. like import, copy-paste, drag-drop, etc.
   */
  export interface IPackedSceneDocument extends IDocumentDefinition {
    scene: Scene;
  }
  /**
   * The [Scene] node. (a.k.a Page) this is defined directly without the repository. hence, its id is not required to be globally unique across the nodes.
   *
   * @deprecated This interface is being migrated to {@link nodes.SceneNode} which is stored in the nodes repository.
   * The Scene interface is kept for backward compatibility during the migration period.
   * New code should use SceneNode stored in document.nodes instead of document.scenes.
   *
   * TODO: safely remove this
   */
  export interface Scene extends document.ISceneBackground, document.I2DGuides, document.IEdges {
    type: "scene";
    /**
     * the scene identifier - the id is only required to be unique across the current document scenes.
     * (it is not required to be globally unique within the nodes)
     */
    readonly id: string;
    /**
     * the user-friendly name of the scene
     */
    name: string;
    /**
     * the children of the scene. each children must be registreed in the node repository under the document where this scene is defined.
     */
    children_refs: nodes.NodeID[];
    constraints: {
      children: "single" | "multiple";
    };
    position?: string;
  }
  /**
   * Minimal Scene Definition for API usage (and for older versions)
   *
   * will follow the default values of {@link Scene} for missing properties.
   */
  export type SceneInit = Partial<Scene> & Pick<Scene, "id">;
  /**
   * initializes a minimal scene definition
   * @param init minimal scene definition
   * @returns a compatible scene definition
   */
  export function init_scene(init: SceneInit): grida.program.document.Scene;
  export namespace internal {
    /**
     * @internal
     * Nodes repository runtime hierarchy context for efficient hierarchical queries on flat document structures.
     *
     * This interface is designed for **in-memory, runtime-only** use and should not be used for persisting data.
     * It exists to provide efficient access to the parent and child relationships within the document tree without
     * modifying the core node structure directly.
     *
     * ## Why We Use This Interface
     * This interface allows for a structured, performant way to manage node hierarchy relationships without introducing
     * a `parent_id` property on each `Node`. By using an in-memory context, we avoid potential issues with nullable
     * `parent_id` fields, which could lead to unpredictable coding experiences. Additionally, maintaining these
     * relationships within a dedicated context layer promotes separation of concerns, keeping core node definitions
     * stable and interface-compatible.
     *
     * ## Functionality
     * - **Get Parent Node by Child ID**: Efficiently map a node's ID to its parent node ID with O(1) lookup.
     * - **Get Child Nodes by Parent ID**: Access a list of child node IDs for any given parent node with O(1) lookup.
     * - **Traverse Ancestors**: Walk up the tree from any node to its root.
     * - **Query Depth**: Calculate how deep a node is in the hierarchy.
     * - **Find Siblings**: Locate nodes that share the same parent.
     *
     * ## Management Notes
     * - This interface should be populated and managed only during runtime.
     * - It is recommended to initialize the lookup table during document tree loading or initial rendering.
     * - If the node hierarchy is updated (e.g., nodes are added, removed, or moved), this context should be refreshed
     *   to reflect the current relationships.
     * - For optimal performance, the context should be created once and reused for multiple queries.
     *
     */
    type INodesRepositoryRuntimeHierarchyContext = tree.lut.ITreeLUT;
  }
  export interface INodeHtmlDocumentQueryDataAttributes {
    id: nodes.Node["id"];
    [k.HTML_ELEMET_DATA_ATTRIBUTE_GRIDA_NODE_ID_KEY]: nodes.Node["id"];
    [k.HTML_ELEMET_DATA_ATTRIBUTE_GRIDA_NODE_LOCKED_KEY]: nodes.Node["locked"];
    ["data-grida-node-type"]: nodes.Node["type"];
  }
  /**
   * wraps node data with document query-able extra data.
   * this is essential when using html backend.
   *
   * grida canvas overlay will use these attributes to determine if the raycasted element is a valid node.
   */
  type INodeWithHtmlDocumentQueryDataAttributes<N extends nodes.Node> = INodeHtmlDocumentQueryDataAttributes & N;
  export type IGlobalRenderingContext = {
    context: IBitmapsRepository;
  };
  /**
   * final props that matches the react rendering signature
   */
  export type IComputedNodeReactRenderProps<N extends nodes.Node> = IGlobalRenderingContext & INodeWithHtmlDocumentQueryDataAttributes<N> & {
    style: CSSProperties;
  };
  /**
   * Definition:
   *
   * A Template is unser-written ReactComponent for complex and custom logics and styles, sub components, while allowing user to modify the exposed details by building the template with mixture of {@link nodes.Node} and JSX.
   *
   * - A template is a user-written ReactComponent
   * - A template can have properties like component node, but the props are managed by the grida engine.
   * - User may also have its own props that are independent from the engine, but needs to be passed via non-shared custom context.
   * - A template can have its own children, either can be a normal JSX or a {@link nodes.Node}
   * - {@link nodes.Node} children under a template are exposed and can be modified by the editor
   * - A template can be used as document root.
   * - A template cannot be nested under another template.
   */
  export namespace template {
    interface IUserDefinedTemplateNodeReactComponentRenderProps<P> extends nodes.i.IBaseNode, nodes.i.ISceneNode, nodes.i.ICSSStylable, nodes.i.IExpandable {
      props: P;
    }
    interface TemplateDocumentDefinition<P extends schema.Properties = schema.Properties> extends INodesGraph {
      /**
       * @deprecated - rename to template_id
       */
      name: string;
      version: string;
      type: "template";
      properties: P;
      default: Record<string, schema.Value>;
    }
  }
  export {};
}
/**
 * Supported CSS properties and types
 */
declare namespace grida.program.css {
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/length
   */
  type Length = number | {
    type: "length";
    /**
     * only supports the following units:
     * - px
     * - vw
     * - vh
     * - dvw
     * - dvh
     * - em
     * - rem
     */
    unit: "px" | "vw" | "vh" | "dvw" | "dvh" | "em" | "rem";
    value: number;
  };
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/percentage
   */
  type Percentage = {
    type: "percentage";
    value: number;
  };
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/length-percentage
   */
  type LengthPercentage = Length | Percentage;
  /**
   * Partially supported CSS border model.
   * - each border can have different width
   * - color is shared
   * - only `solid` `dashed` border is supported
   */
  type Border = {
    border_style: "none" | "solid" | "dashed";
    border_color: cg.RGBA32F;
    /**
     * @example
     * ```css
     * border-width: <length>
     * border-width: top | right | bottom | left
     * ```
     *
     */
    border_width: number | {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
  };
  /**
   * CSS properties that is supported via the standard editor
   *
   * (when using html backend, other css properties can also be dynamically applied, but not guaranteed)
   *
   * Note: some prorperties must not be set directly, e.g. `opacity` as it is a valid property for both html backend and canvas backend, we handle this in a higher level.
   * When set explicitly, it will override the default behaviour, causing unexpected results.
   *
   * Common properties to avoid setting directly:
   * - `opacity`
   * - `z-index`
   * - `cursor`
   * - `position`
   * - `width`
   * - `height`
   * - `top`
   * - `left`
   * - `pointer-events`
   * - `border-radius`
   * - `fill`
   * - `objectFit`
   *
   *
   * @deprecated Note: Do not modify this directly - it will progressively be replaced by a more robust and universal CSS property type system.
   * If you wish to add a complex styled node, try using {@link template.TemplateDocumentDefinition}
   */
  type ExplicitlySupportedCSSProperties = Partial<Pick<CSSProperties, "aspectRatio" | "overflow">>;
}
declare namespace grida.program.nodes {
  export type NodeID = id.NodeIdentifier;
  export type NodeType = Node["type"];
  export type Node = SceneNode | LayerNode;
  export type LayerNode = BooleanPathOperationNode | GroupNode | TrayNode | TextSpanNode | AttributedTextNode | ImageNode | VideoNode | ContainerNode | MarkdownNode | HTMLIFrameNode | HTMLRichTextNode | BitmapNode | VectorNode | PathNode | LineNode | RectangleNode | EllipseNode | RegularPolygonNode | RegularStarPolygonNode | ComponentNode | InstanceNode | TemplateInstanceNode;
  export type ComputedNode = ComputedTextSpanNode | ComputedBitmapNode | ComputedImageNode | ComputedVideoNode | ComputedContainerNode | ComputedMarkdownNode | ComputedHTMLIFrameNode | ComputedHTMLRichTextNode | ComputedVectorNode | ComputedPathNode | ComputedLineNode | ComputedRectangleNode | ComputedEllipseNode | ComputedComponentNode | ComputedInstanceNode | ComputedTemplateInstanceNode;
  /**
   * Unknown node utility type - use within the correct context
   */
  export type UnknownComputedNode = Omit<Partial<ComputedTextSpanNode> & Partial<ComputedImageNode> & Partial<ComputedBitmapNode> & Partial<ComputedVideoNode> & Partial<ComputedContainerNode> & Partial<ComputedMarkdownNode> & Partial<ComputedHTMLIFrameNode> & Partial<ComputedHTMLRichTextNode> & Partial<ComputedVectorNode> & Partial<ComputedPathNode> & Partial<ComputedLineNode> & Partial<ComputedRectangleNode> & Partial<ComputedEllipseNode> & Partial<ComputedComponentNode> & Partial<ComputedInstanceNode> & Partial<ComputedTemplateInstanceNode>, "type"> & {
    readonly type: NodeType;
  } & i.IBaseNode & i.ISceneNode;
  /**
   * Unknown node utility type - use within the correct context
   */
  export type UnknownNode = Omit<Partial<BooleanPathOperationNode> & Partial<GroupNode> & Partial<TrayNode> & Partial<TextSpanNode> & Partial<AttributedTextNode> & Partial<BitmapNode> & Partial<ImageNode> & Partial<VideoNode> & Partial<ContainerNode> & Partial<MarkdownNode> & Partial<HTMLIFrameNode> & Partial<HTMLRichTextNode> & Partial<VectorNode> & Partial<PathNode> & Partial<LineNode> & Partial<RectangleNode> & Partial<EllipseNode> & Partial<RegularPolygonNode> & Partial<RegularStarPolygonNode> & Partial<ComponentNode> & Partial<InstanceNode> & Partial<TemplateInstanceNode>, "type"> & {
    readonly type: NodeType;
  } & i.IBaseNode & i.ISceneNode;
  export type UnknownNodeProperties<T = unknown> = Record<keyof UnknownNode, T>;
  export type UnknownNodePropertiesKey = keyof UnknownNodeProperties;
  export type BooleanPathOperationNodePrototype = __TPrototypeNode<Omit<Partial<BooleanPathOperationNode>, __base_scene_node_properties | "children"> & __IPrototypeNodeChildren>;
  export type GroupNodePrototype = __TPrototypeNode<Omit<Partial<GroupNode>, __base_scene_node_properties | "children"> & __IPrototypeNodeChildren>;
  export type TrayNodePrototype = __TPrototypeNode<Omit<Partial<TrayNode>, __base_scene_node_properties | "children"> & __IPrototypeNodeChildren>;
  export type TextNodePrototype = __TPrototypeNode<Omit<Partial<TextSpanNode>, __base_scene_node_properties>>;
  export type ImageNodePrototype = __TPrototypeNode<Omit<Partial<ImageNode>, __base_scene_node_properties>>;
  export type VideoNodePrototype = __TPrototypeNode<Omit<Partial<VideoNode>, __base_scene_node_properties>>;
  export type ContainerNodePrototype = __TPrototypeNode<Omit<Partial<ContainerNode>, __base_scene_node_properties | "children"> & __IPrototypeNodeChildren>;
  export type PathNodePrototype = __TPrototypeNode<Omit<Partial<PathNode>, __base_scene_node_properties>>;
  export type VectorNodePrototype = __TPrototypeNode<Omit<Partial<VectorNode>, __base_scene_node_properties>>;
  export type LineNodePrototype = __TPrototypeNode<Omit<Partial<LineNode>, __base_scene_node_properties>>;
  export type RectangleNodePrototype = __TPrototypeNode<Omit<Partial<RectangleNode>, __base_scene_node_properties>>;
  export type EllipseNodePrototype = __TPrototypeNode<Omit<Partial<EllipseNode>, __base_scene_node_properties>>;
  export type PolygonNodePrototype = __TPrototypeNode<Omit<Partial<RegularPolygonNode>, __base_scene_node_properties>>;
  export type StarNodePrototype = __TPrototypeNode<Omit<Partial<RegularStarPolygonNode>, __base_scene_node_properties>>;
  /**
   * A virtual, before-instantiation node that only stores the prototype of a node.
   *
   * Main difference between an actual node or node data is, a prototype is only required to have a partial node data, and it has its own hierarchy of children.
   */
  export type NodePrototype = BooleanPathOperationNodePrototype | GroupNodePrototype | TrayNodePrototype | TextNodePrototype | ImageNodePrototype | VideoNodePrototype | ContainerNodePrototype | __TPrototypeNode<Omit<Partial<MarkdownNode>, __base_scene_node_properties>> | __TPrototypeNode<Omit<Partial<HTMLIFrameNode>, __base_scene_node_properties>> | __TPrototypeNode<Omit<Partial<HTMLRichTextNode>, __base_scene_node_properties>> | __TPrototypeNode<Omit<Partial<BitmapNode>, __base_scene_node_properties>> | PathNodePrototype | VectorNodePrototype | LineNodePrototype | RectangleNodePrototype | EllipseNodePrototype | PolygonNodePrototype | StarNodePrototype | __TPrototypeNode<Omit<Partial<ComponentNode>, __base_scene_node_properties | "children"> & __IPrototypeNodeChildren> | __TPrototypeNode<Omit<Partial<InstanceNode>, __base_scene_node_properties | "children"> & __IPrototypeNodeChildren> | __TPrototypeNode<Omit<Partial<TemplateInstanceNode>, __base_scene_node_properties>>;
  /**
   * @internal Prototype node can't have an id, and can optionally have BaseNode and SceneNode properties.
   * Other properties are required.
   */
  type __TPrototypeNode<T> = Partial<Omit<i.IBaseNode, "id">> & Partial<i.ISceneNode> & {
    /**
     * force the id for instanciation (optional)
     */
    readonly _$id?: string;
  } & T;
  type __base_scene_node_properties = "id" | "name" | "active" | "locked";
  type __IPrototypeNodeChildren = {
    children: NodePrototype[];
  };
  /**
   * Type guard to check if a prototype has children.
   * Provides type safety for prototype-to-document conversion.
   */
  export function hasChildren(prototype: Partial<NodePrototype>): prototype is Partial<NodePrototype> & __IPrototypeNodeChildren;
  export function hasLayoutWidth(node: Node): node is Node & {
    layout_target_width: UnknownNode["layout_target_width"];
  };
  export function hasLayoutHeight(node: Node): node is Node & {
    layout_target_height: UnknownNode["layout_target_height"];
  };
  /**
   * Type for containing instance's node changes data relative to master node
   */
  export type NodeChange = Partial<nodes.Node> | undefined;
  export namespace i {
    interface IBaseNode {
      readonly id: NodeID;
      name: string;
    }
    interface ISceneNode {
      /**
       * whether this node is active within the editor context
       *
       * when active is false, its content will not be included in the runtime tree
       *
       * its exact behaviour varies by the environment
       *
       * @default true
       * @example when false, display:none or not included in the tree
       */
      active: boolean;
      /**
       * whether this node is locked
       *
       * when the node is locked, on editor environment, the node cannot be selected or edited via viewport
       *
       * on production environment, this property is ignored
       *
       * @default false
       * @example when true, pointer-events:none
       * @internal
       */
      locked: boolean;
      /**
       * whether this node is removable (if not remove action will trigger active=false)
       *
       * currently, this will only be prevented when the node is a root-level node, and the delete is directly triggered to it.
       *
       * @default false
       */
      removable?: boolean;
    }
    namespace props {
      /**
       * text value
       *
       * - expression - {@link tokens.StringValueExpression} - computed or literal
       *   - literal - e.g. `"A text value"`
       *   - property access - {@link tokens.PropertyAccessExpression} - computed, , e.g. `userdata.title`
       *   - identifier - {@link tokens.Identifier} - computed, e.g. `title`
       *   - others - all {@link tokens.StringValueExpression} types
       *
       * when used under a component / instance / template, the `props.` expression is reserved and refers to adjacent parent's props.
       * - by the standard implementation, the `props.[x]` is recommended to be referenced only once in a single node.
       * - by the standard implementation, within the visual editor context, when user attempts to updates the literal value (where it is a `props.[x]` and `props.[x] is literal`), it should actually update the `props.[x]` value, not this `text` literal value.
       */
      type PropsTextValue = tokens.StringValueExpression;
      type SolidPaintToken = TokenizableExcept<cg.SolidPaint, "type">;
      type PropsPaintValue = cg.Paint | SolidPaintToken;
    }
    interface IBlend {
      /**
       * opacity of the node.
       *
       * Env:
       * - on html backend, this value is passed the the style `opacity` property
       * - on canvas backend, this value is passed to the `opacity` property of the node
       *
       * @default 1
       */
      opacity: number;
      /**
       * layer blend mode
       *
       * @default "pass-through"
       */
      blend_mode?: cg.LayerBlendMode;
    }
    interface ILayerMaskType {
      /**
       * @default undefined
       */
      mask?: cg.LayerMaskType | null | undefined;
    }
    interface IZIndex {
      /**
       * z-index of the node.
       *
       *
       * Env:
       * - on html backend, this value is passed the the style `z-index` property
       * - on canvas backend, this value is used to determine the depth / z buffer
       *
       * Terms - Also knwon as:
       * - Sorting Order
       * - Depth
       * - Z Buffer
       * - Order in Layer
       *
       * @default 0
       * @type {number} integer
       */
      z_index?: number;
    }
    /**
     * specifies node's x rotation in degrees
     */
    interface IRotation {
      /**
       * rotation in degrees
       *
       * @default 0
       */
      rotation: number;
    }
    /**
     * Node that can be expanded in hierarchy
     */
    interface IExpandable {
      expanded: boolean;
    }
    /**
     * Node that can be exported
     *
     * @deprecated - not ready - do not use in production
     */
    interface IExportable {}
    /**
     * Corner radius
     */
    interface ICornerRadius {
      corner_radius?: number;
    }
    /**
     * Rectangle Corner
     */
    interface IRectangularCornerRadius {
      rectangular_corner_radius_top_left?: number;
      rectangular_corner_radius_top_right?: number;
      rectangular_corner_radius_bottom_left?: number;
      rectangular_corner_radius_bottom_right?: number;
      corner_smoothing?: number;
    }
    /**
     * padding - flat properties (no shorthand)
     *
     * All properties default to 0 when not specified.
     */
    interface IPadding {
      /**
       * Padding on the top edge.
       * @default 0
       */
      layout_padding_top: number;
      /**
       * Padding on the right edge.
       * @default 0
       */
      layout_padding_right: number;
      /**
       * Padding on the bottom edge.
       * @default 0
       */
      layout_padding_bottom: number;
      /**
       * Padding on the left edge.
       * @default 0
       */
      layout_padding_left: number;
    }
    /**
     *
     * Defines the layout behavior of the container.
     * - `flex`: Enables Flexbox-like behavior.
     * - `flow`: Equivalent to "block" in CSS, where elements are arranged in normal document flow.
     * @see https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container
     * @see https://api.flutter.dev/flutter/widgets/Flex-class.html
     */
    interface IFlexContainer {
      /**
       * the flex container only takes effect when layout is set to `flex`
       */
      layout_mode: "flex" | "flow";
      /**
       *
       * the flex model direction - takes effect when layout is set to `flex`
       *
       * @default "horizontal"
       */
      layout_direction: cg.Axis;
      /**
       *
       * the flex model wrap behavior - takes effect when layout is set to `flex`
       *
       * @default "nowrap"
       */
      layout_wrap?: "wrap" | "nowrap";
      /**
       *
       * the flex model main axis alignment - takes effect when layout is set to `flex`
       *
       * @default "start"
       */
      layout_main_axis_alignment: cg.MainAxisAlignment;
      /**
       *
       * the flex model cross axis alignment - takes effect when layout is set to `flex`
       *
       * @default "start"
       */
      layout_cross_axis_alignment: cg.CrossAxisAlignment;
      /**
       * the gap between the children in main axis - takes effect when layout is set to `flex`
       *
       * commonly refered as `row-gap` (in row direction) or `column-gap` (in column direction)
       *
       * @default 0
       */
      layout_main_axis_gap: number;
      /**
       * the gap between the children in cross axis - takes effect when layout is set to `flex`
       *
       * commonly refered as `column-gap` (in row direction) or `row-gap` (in column direction)
       *
       * @default 0
       */
      layout_cross_axis_gap: number;
    }
    /**
     * Node wih Box Fit `fit`, a.k.a. `object-fit`
     */
    interface IBoxFit {
      fit: cg.BoxFit;
    }
    /**
     * Node that can be filled with color - such as rectangle, ellipse, etc.
     */
    interface IFill<T> {
      fill?: T | undefined;
      /**
       * Multiple paint fills. When defined, the first entry should mirror the
       * single {@link fill} value for backwards compatibility with DOM
       * backends that only support a single fill.
       */
      fill_paints?: T[] | undefined;
    }
    interface IEffects {
      fe_blur?: cg.FeLayerBlur;
      fe_backdrop_blur?: cg.FeBackdropBlur;
      fe_shadows?: cg.FeShadow[];
      fe_liquid_glass?: cg.FeLiquidGlass;
      fe_noises?: cg.FeNoise[];
    }
    interface IEllipseArcData {
      /**
       * angle of the sweep in degree
       * @default 360
       *
       * @example
       * - 0 - no circle
       * - 180 - half circle
       * - 360 - full circle
       */
      angle: number;
      /**
       * start angle in degree
       * @default 0
       */
      angle_offset: number;
      /**
       * inner radius in 0~1
       * @default 0
       */
      inner_radius: number;
    }
    /**
     * Node that supports stroke with color - such as rectangle, ellipse, etc.
     */
    interface IStroke {
      stroke?: cg.Paint;
      /**
       * Multiple stroke paints. Similar to {@link IFill.fill_paints}, the first
       * stroke is mirrored via {@link stroke} for single-stroke backends.
       */
      stroke_paints?: cg.Paint[];
      /**
       * stroke width - 0 or greater
       */
      stroke_width: number;
      /**
       * variable width stroke width profile
       */
      stroke_width_profile?: cg.VariableWidthProfile;
      /**
       * stroke alignment - takes effect when stroke is set
       */
      stroke_align?: cg.StrokeAlign;
      /**
       * stroke dash pattern - array of dash and gap lengths
       *
       * The pattern defines alternating lengths of dashes and gaps.
       * - Even indices (0, 2, 4, ...): dash lengths
       * - Odd indices (1, 3, 5, ...): gap lengths
       *
       * @example [5, 5] - 5px dash, 5px gap
       * @example [10, 5, 2, 5] - 10px dash, 5px gap, 2px dot, 5px gap
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
       */
      stroke_dash_array?: number[];
      /**
       * @default "butt"
       */
      stroke_cap: cg.StrokeCap;
      /**
       * @default "miter"
       */
      stroke_join: cg.StrokeJoin;
      /**
       * stroke miter limit - 0 or greater
       * @default 4
       */
      stroke_miter_limit?: number;
    }
    /**
     * Rectangular node (rectangle, image, video, container) specific stroke width properties
     */
    interface IRectangularStrokeWidth {
      /**
       * sets or overrides the top stroke width
       */
      rectangular_stroke_width_top?: number;
      /**
       * sets or overrides the right stroke width
       */
      rectangular_stroke_width_right?: number;
      /**
       * sets or overrides the bottom stroke width
       */
      rectangular_stroke_width_bottom?: number;
      /**
       * sets or overrides the left stroke width
       */
      rectangular_stroke_width_left?: number;
    }
    /**
     * - [Env:HTML] for html text, `-webkit-text-stroke` will be used
     */
    interface ITextStroke {
      stroke?: cg.Paint;
      stroke_paints?: cg.Paint[];
      /**
       * stroke width - 0 or greater
       */
      stroke_width?: number;
      /**
       * stroke alignment - takes effect when stroke is set
       */
      stroke_align?: cg.StrokeAlign;
    }
    interface ICSSBorder {
      border?: css.Border | undefined;
    }
    interface IStylable<S extends Record<string, unknown>> {
      style: S;
    }
    interface ILayoutTargetAspectRatio {
      /**
       * Preferred layout aspect ratio.
       *
       * Represents a proportional relationship between width and height
       * expressed as a normalized integer ratio pair (e.g. `[16, 9]`, `[4, 3]`, `[1, 1]`).
       *
       * This property does not define geometry by itself. Instead, it provides
       * a sizing preference that layout engines may consult when resolving
       * under-specified dimensions (e.g. when either width or height is `auto`)
       * or when proportional sizing is explicitly required by the layout model.
       *
       * When both width and height are definitively specified, this value
       * has no effect and must not override explicit dimensions.
       *
       * This property may be ignored by layout engines that do not support
       * aspect-ratio-aware sizing.
       */
      layout_target_aspect_ratio?: [number, number];
    }
    /**
     * @deprecated
     */
    interface ICSSStylable extends IStylable<css.ExplicitlySupportedCSSProperties>, IBlend, ILayerMaskType, IRotation, IZIndex, IPositioning, ICSSDimension, ILayoutTargetAspectRatio, IFill<props.PropsPaintValue>, ICSSBorder {
      /**
       * TODO: rename to css
       * @deprecated
       */
      style: css.ExplicitlySupportedCSSProperties;
    }
    /**
     * @deprecated
     */
    interface IComputedCSSStylable extends __ReplaceSubset<ICSSStylable, IFill<props.PropsPaintValue>, {
      fill: cg.Paint;
    }> {}
    interface IMouseCursor {
      cursor?: cg.SystemMouseCursor;
    }
    interface IHrefable {
      href?: string;
      target?: "_self" | "_blank" | undefined;
    }
    interface ICSSDimension {
      layout_target_width: css.LengthPercentage | "auto";
      layout_target_height: css.LengthPercentage | "auto";
    }
    /**
     * Relative DOM Positioning model
     *
     * by default, use position: relative, layout_inset_left: 0, layout_inset_top: 0 - to avoid unexpected layout issues
     */
    interface IPositioning {
      layout_positioning: "absolute" | "relative";
      layout_inset_left?: number | undefined;
      layout_inset_top?: number | undefined;
      layout_inset_right?: number | undefined;
      layout_inset_bottom?: number | undefined;
    }
    /**
     * Font Style
     *
     * this is a abstract font-related style container, where this subset of text style attrutes are hightly likely change within this scope, as font family or font (postscript) / instance change.
     */
    interface IFontStyle {
      font_family?: string;
      font_size: number;
      /**
       * font weight
       *
       * when set for VF font, the variation `wght` will also be set. - this always overrides the `wght` if different.
       *
       * @default 400
       */
      font_weight: cg.NFontWeight | number;
      /**
       * font width
       *
       * font width is high level exposure for `wdth` variable axis.
       * this is effectively no-op if the font does not support `wdth` feature.
       *
       * @default undefined
       *
       */
      font_width?: number;
      /**
       * font optical sizing
       *
       * when set for VF font, the variation `opsz` will also be set. - this always overrides the `opsz` if different.
       *
       * @default "auto"
       */
      font_optical_sizing?: cg.OpticalSizing;
      /**
       * Font kerning mode
       *
       * this controls the font feature `kern` this serves as high-level `kern` switch.
       * this is effectively no-op if the font does not support `kern` feature.
       *
       * @default `normal`
       */
      font_kerning: cg.FontKerningFlag;
      /**
       * OpenType features
       * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings
       */
      font_features?: Partial<Record<cg.OpenTypeFeature, boolean>>;
      /**
       * custom font variations
       * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variation-settings
       */
      font_variations?: Record<string, number>;
      /**
       * if the font face is italic (or italic style is requested)
       * this depends on how editor reloves the font.
       *
       * best practice is to set this true, only the font is italic. (defined by OS/2 fsSelection)
       * in a variable font scenario, this can be set true, even if fsSelection is not set to italic.
       *
       * if the used fvar.instance is semantically italic, this can be set true.
       */
      font_style_italic?: boolean;
      /**
       * [font post script name]
       * the post script name is a unique identifier for a font face scoped by the family.
       * this value is parsed from the ttf file itself.
       *
       * @note some fonts, like Inter, do not have a postscript name for instances.
       */
      font_postscript_name?: string | null;
    }
    /**
     * Text Style
     *
     * a set of properties that can be either applied to a text or textspan
     */
    interface ITextStyle extends IFontStyle {
      text_decoration_line: cg.TextDecorationLine;
      text_decoration_style?: cg.TextDecorationStyle | null;
      text_decoration_color?: cg.TextDecorationColorValue | null;
      text_decoration_skip_ink?: cg.TextDecorationSkipInkFlag | null;
      text_decoration_thickness?: cg.TextDecorationThicknessPercentage | null;
      text_transform?: cg.TextTransform;
      /**
       * letter-spacing in em (percentage) value
       *
       * @example 1 = 100% / 1em
       * @default 0
       */
      letter_spacing?: number;
      /**
       * word-spacing in em (percentage) value
       *
       * @example 1 = 100% / 1em
       * @default 0
       */
      word_spacing?: number;
      /**
       * line-height in percentage value only. 0% ~
       * @example undefined = "normal"
       * @example 1 = 100% / 1em
       * @min 0
       */
      line_height?: number;
    }
    /**
     * Text Node Style
     *
     * a set of properties that can be applied to a text node, but not to a textspan
     */
    interface ITextNodeStyle extends ITextStyle, IFill<props.PropsPaintValue> {
      /**
       * @default "left"
       */
      text_align: cg.TextAlign;
      /**
       * @default "top"
       */
      text_align_vertical: cg.TextAlignVertical;
    }
    interface IComputedTextNodeStyle extends __ReplaceSubset<ITextNodeStyle, IFill<props.PropsPaintValue>, {
      fill: cg.Paint;
    }> {}
    interface ITextValue {
      text: props.PropsTextValue | null;
      /**
       * set max length of the text value
       * - Note: max length is ignored when set programmatically
       * - Note: this is a experimental feature and its behaviour is not strictly defined
       * @see https://json-schema.org/understanding-json-schema/reference/string#length
       *
       * @deprecated - not standard
       */
      max_length?: number;
    }
    interface IComputedTextValue {
      text: string | null;
    }
    interface ISourceValue {
      /**
       * **[video / image]**
       * required - when falsy, the image will not be rendered
       * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/src
       *
       * ---
       *
       * **[iframe]**
       * The URL of the page to embed.
       *
       * Note: as we don't support `srcdoc` attribute, the content should be a url to a valid html page.
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#src
       */
      src?: tokens.StringValueExpression;
    }
    interface IHTMLRichTextValue {
      html: props.PropsTextValue | null;
    }
    interface IProperties {
      properties: Record<string, schema.PropertyDefinition>;
    }
    interface IProps {
      /**
       * props data
       *
       * expression that will be passed to this instance
       *
       * it should match the signature with defined properties
       */
      props: Record<string, schema.Value>;
    }
    interface ILayerTrait extends IBlend, ILayerMaskType, IEffects {
      z_index?: number;
    }
    interface IBasicShapeTrait extends i.ICornerRadius, i.IFill<cg.Paint>, i.IStroke {}
    interface IRectangularShapeTrait extends IRectangularCornerRadius, IRectangularStrokeWidth {}
    interface ILayoutTrait extends ILayoutTargetAspectRatio, IPositioning {
      rotation: number;
      layout_target_width: css.LengthPercentage | "auto";
      layout_target_height: css.LengthPercentage | "auto";
    }
    interface ILayoutChildTrait extends ILayoutTrait {}
    interface ILayoutContainerTrait extends ILayoutTrait, Partial<i.IPadding>, IFlexContainer {}
    interface IHotspotTrait extends IHrefable, IMouseCursor {}
  }
  type __ReplaceSubset<T, TSubset extends Partial<T>, TNew> = Omit<T, keyof TSubset> & TNew;
  /**
   * Scene Node
   *
   * [SceneNode] represents a top-level scene (formerly known as Page).
   * Scenes are always root-level nodes and cannot be nested under other nodes.
   * They can contain multiple children based on their constraints.
   */
  export interface SceneNode extends i.IBaseNode, i.ISceneNode, document.ISceneBackground, document.I2DGuides, document.IEdges {
    readonly type: "scene";
    constraints: {
      children: "single" | "multiple";
    };
    position?: string;
  }
  /**
   * Group Node
   *
   * A group has no intrinsic width or height — its bounds are derived from
   * its children. The only geometric truth a group carries is an affine
   * transform (position + rotation/skew/flip as a 2×3 matrix).
   *
   * ## Transform representation
   *
   * When `transform` is present it is the authoritative 2×3 affine matrix
   * `[[a, c, tx], [b, d, ty]]` and takes precedence over the decomposed
   * `layout_inset_left/top` + `rotation` inherited from {@link i.IPositioning}.
   *
   * When `transform` is absent (e.g. groups created by the editor's "wrap"
   * action), the Rust side falls back to reconstructing the matrix from the
   * decomposed fields via `from_box_center(x, y, 0, 0, rotation)`.
   *
   * [GroupNode] is not supported in the html/svg backend.
   */
  export interface GroupNode extends i.IBaseNode, i.ISceneNode, i.IBlend, i.IPositioning {
    type: "group";
    /**
     * Raw 2×3 affine transform matrix `[[a, c, tx], [b, d, ty]]`.
     *
     * When present, this is the sole source of truth for the group's
     * position, rotation, flip, and skew. The `layout_inset_*` and
     * `rotation` fields are ignored.
     *
     * The matrix layout matches Grida's convention:
     *   `[[cos φ, -sin φ, tx], [sin φ, cos φ, ty]]` for a pure rotation.
     */
    transform?: [[number, number, number], [number, number, number]];
  }
  /**
   * Tray Node — canvas-level organizational primitive (Figma SECTION).
   *
   * Has explicit dimensions, fills, strokes, corner radius.
   * No effects, no layout, no clipping.
   * Children are freely placed and treated as root-level containers.
   */
  export interface TrayNode extends i.IBaseNode, i.ISceneNode, i.IBlend, i.IPositioning, i.ICSSDimension, i.ICornerRadius, i.IRectangularShapeTrait, i.IStroke, i.IFill<cg.Paint> {
    type: "tray";
    rotation: number;
  }
  /**
   * Boolean Path Operation Node
   *
   * [BooleanPathOperationNode] is not supported in the html/svg backend.
   */
  export interface BooleanPathOperationNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutChildTrait, i.IFill<cg.Paint>, i.IStroke, i.ICornerRadius {
    type: "boolean";
    op: cg.BooleanOperation;
  }
  export interface TextSpanNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutChildTrait, i.IHotspotTrait, i.ITextNodeStyle, i.ITextValue, i.ITextStroke {
    readonly type: "tspan";
    /**
     * tspan cannot have max lines. this will be removed in the future.
     * current interpretation: tspan was previously text node, we keep max lines for legacy reasons.
     * when cleaned, tspan shall not be a root text node.
     */
    max_lines?: number | null;
  }
  export interface ComputedTextSpanNode extends __ReplaceSubset<TextSpanNode, i.ITextValue & i.ITextStyle, i.IComputedTextValue & i.IComputedTextNodeStyle> {
    readonly type: "tspan";
    max_lines?: number | null;
  }
  /**
   * A styled text run with per-run text style.
   *
   * Extends the core `cg.StyledTextRun` (offsets + paint overrides)
   * with a full `ITextStyle` for per-run font/decoration properties.
   */
  export interface StyledTextRun extends cg.StyledTextRun {
    /** Per-run text style (font, size, weight, decoration, etc.). */
    style: i.ITextStyle;
  }
  /**
   * [AttributedTextNode]
   *
   * Rich text node with per-run styling (mixed fonts, sizes, colors, decorations
   * within a single text block).
   *
   * Mirrors the Rust `AttributedString` + node wrapper and FBS `AttributedTextNode`.
   */
  export interface AttributedTextNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutChildTrait, i.IHotspotTrait, i.ITextStroke {
    readonly type: "text";
    /** The full backing text content. */
    text: string | null;
    /** Default / fallback text style for unstyled segments and measurement. */
    default_style: i.ITextStyle;
    /** Ordered, contiguous, non-overlapping runs covering the full text. */
    styled_runs: StyledTextRun[];
    /** Node-level fill paints (used as fallback when runs omit fills). */
    fill_paints?: cg.Paint[];
    /** @default "left" */
    text_align: cg.TextAlign;
    /** @default "top" */
    text_align_vertical: cg.TextAlignVertical;
    max_lines?: number | null;
    ellipsis?: string | null;
  }
  export interface ImageNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutChildTrait, i.IHotspotTrait, i.IBoxFit, i.ICornerRadius, i.IRectangularShapeTrait, i.ISourceValue {
    readonly type: "image";
    alt?: string;
  }
  export interface ComputedImageNode extends __ReplaceSubset<ImageNode, i.ISourceValue, {
    src: string;
  }> {
    readonly type: "image";
  }
  /**
   * [Markdown]
   *
   * A render-only node that stores GitHub Flavored Markdown (GFM) source text
   * and renders it directly on the canvas via a Skia-backed markdown painter.
   *
   * Unlike {@link TextSpanNode} or {@link AttributedTextNode}, the markdown
   * source is not broken into an editable tree of spans — the node is treated
   * as a single opaque block of rendered content.
   */
  export interface MarkdownNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutChildTrait, i.ICornerRadius, i.IRectangularShapeTrait, i.IFill<cg.Paint> {
    readonly type: "markdown";
    /** GFM markdown source text. */
    markdown: string;
  }
  export interface ComputedMarkdownNode extends __ReplaceSubset<MarkdownNode, {}, {}> {
    readonly type: "markdown";
  }
  /**
   * [HTMLRichText]
   *
   * Note:
   * - Limited to HTML environment
   * - {@link TextSpanNode} also supports rich styling, but only limited to text spans.
   *
   * RichText can hold any html-like text content, including text spans, links, images, etc.
   */
  export interface HTMLRichTextNode extends i.IBaseNode, i.ISceneNode, i.IBlend, i.ICSSStylable, i.IHrefable, i.IMouseCursor, i.IHTMLRichTextValue {
    readonly type: "richtext";
  }
  export interface ComputedHTMLRichTextNode extends __ReplaceSubset<HTMLRichTextNode, i.IHTMLRichTextValue, {
    html: string;
  }> {
    readonly type: "richtext";
  }
  export interface VideoNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutChildTrait, i.IHotspotTrait, i.IBoxFit, i.ICornerRadius, i.IRectangularShapeTrait, i.ISourceValue {
    readonly type: "video";
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#poster
     */
    poster?: tokens.StringValueExpression;
    loop: boolean;
    muted: boolean;
    autoplay: boolean;
  }
  export interface ComputedVideoNode extends __ReplaceSubset<VideoNode, i.ISourceValue, {
    src: string;
  }> {
    readonly type: "video";
  }
  export interface ContainerNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutContainerTrait, i.IHotspotTrait, i.ICornerRadius, i.IRectangularShapeTrait, i.IStroke, i.IFill<cg.Paint> {
    readonly type: "container";
    clips_content: boolean;
  }
  export interface ComputedContainerNode extends __ReplaceSubset<ContainerNode, {}, {}> {
    readonly type: "container";
  }
  /**
   * <iframe> Node.
   *
   * The use and rendering of iframe node is limited by the environment.
   */
  export interface HTMLIFrameNode extends i.IBaseNode, i.ISceneNode, i.ICSSStylable, i.ICornerRadius, i.IRectangularShapeTrait, i.ISourceValue {
    readonly type: "iframe";
  }
  export interface ComputedHTMLIFrameNode extends __ReplaceSubset<HTMLIFrameNode, i.ISourceValue, {
    src: string;
  }> {
    readonly type: "iframe";
  }
  /**
   * [Bitmap Node]
   *
   * Bitmap node is a node that can have a bitmap data as a grid.
   *
   * This is used non-performance intensive graphics, e.g. for 255x255 pixel art.
   *
   * For loading png, jpg, etc. images, use {@link ImageNode} instead.
   *
   * The bitmap data can by found in {@link document.IBitmapsRepository} images[this.id].data
   */
  export interface BitmapNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutChildTrait, i.IFill<cg.Paint> {
    readonly type: "bitmap";
    readonly imageRef: string;
  }
  export type ComputedBitmapNode = BitmapNode;
  export interface RegularPolygonNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutChildTrait, i.IBasicShapeTrait, i.IHotspotTrait {
    readonly type: "polygon";
    point_count: number;
  }
  export interface RegularStarPolygonNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutChildTrait, i.IBasicShapeTrait, i.IHotspotTrait {
    readonly type: "star";
    point_count: number;
    inner_radius: number;
  }
  export interface VectorNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutChildTrait, i.IBasicShapeTrait, i.IHotspotTrait {
    readonly type: "vector";
    /**
     * @deprecated
     * @default "nonzero"
     */
    fill_rule?: cg.FillRule;
    vector_network: vn.VectorNetwork;
    /**
     * Marker shape at the start vertex (vertex[0]) of the vector network.
     * @default "none"
     */
    marker_start_shape?: cg.StrokeMarkerPreset;
    /**
     * Marker shape at the end vertex (last vertex) of the vector network.
     * @default "none"
     */
    marker_end_shape?: cg.StrokeMarkerPreset;
  }
  export interface ComputedVectorNode extends __ReplaceSubset<VectorNode, i.IFill<cg.Paint>, i.IFill<cg.Paint>> {
    readonly type: "vector";
  }
  /**
   * Path Node
   *
   * SVG path compatible node that stores raw SVG path data. Use for render-only
   * pipelines where editing is not needed. Avoids vector network conversion.
   *
   * - [Env:WASM] Renders via Path::from_svg and Skia path
   * - [Env:HTML/SVG] Not yet supported in DOM renderer
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path}
   */
  export interface PathNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutChildTrait, i.IBasicShapeTrait, i.IHotspotTrait {
    readonly type: "path";
    data: string;
    fill_rule?: cg.FillRule;
  }
  export interface ComputedPathNode extends __ReplaceSubset<PathNode, i.IFill<cg.Paint>, i.IFill<cg.Paint>> {
    readonly type: "path";
  }
  /**
   * Line Node
   *
   * Note: this does not represent a polyline or a path, it only represents a straight line with two points.
   *
   * - [Env:HTML/SVG] on svg rendering, this will be rendered as `<line>` with `x1`, `y1`, `x2`, `y2` attributes.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line}
   * @see {@link https://api.skia.org/classSkSVGLine.html}
   * @see {@link https://www.figma.com/plugin-docs/api/LineNode/}
   * @see {@link https://konvajs.org/api/Konva.Line.html}
   *
   */
  export interface LineNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.IHotspotTrait, i.ILayoutChildTrait, i.IStroke {
    readonly type: "line";
    /**
     * Marker shape at the start endpoint of the line.
     * @default "none"
     */
    marker_start_shape?: cg.StrokeMarkerPreset;
    /**
     * Marker shape at the end endpoint of the line.
     * @default "none"
     */
    marker_end_shape?: cg.StrokeMarkerPreset;
  }
  export interface ComputedLineNode extends LineNode {
    readonly type: "line";
  }
  /**
   * Rect Node
   *
   * - [Env:HTML/SVG] on svg rendering, this will be rendered as `<rect>` with `x`, `y`, `width`, `height` attributes with unified corner radius.
   * - [Env:HTML/SVG] on svg rendering, this will be rendered as `<path>` with `d` attribute with individual rounded corner path.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path}
   * @see {@link https://api.skia.org/classSkRRect.html}
   * @see {@link https://www.figma.com/plugin-docs/api/RectangleNode/}
   *
   */
  export interface RectangleNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutChildTrait, i.IBasicShapeTrait, i.IRectangularShapeTrait, i.IHotspotTrait {
    readonly type: "rectangle";
  }
  /**
   * {@link RectangleNode} with computed properties
   */
  export interface ComputedRectangleNode extends __ReplaceSubset<RectangleNode, i.IFill<cg.Paint>, i.IFill<cg.Paint>> {
    readonly type: "rectangle";
  }
  /**
   * Ellipse Node
   *
   * - For Drawing Arc, use ArcNode
   * - [Env:SVG] on svg rendering, this will be rendered as `<ellipse>` with `cx`, `cy`, `rx`, `ry` attributes calculated from the `width`, `height` and `x`, `y` properties.
   */
  export interface EllipseNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutChildTrait, i.IHotspotTrait, i.IBasicShapeTrait, i.IEllipseArcData {
    type: "ellipse";
  }
  /**
   * {@link EllipseNode} with computed properties
   */
  export interface ComputedEllipseNode extends __ReplaceSubset<EllipseNode, i.IFill<cg.Paint>, i.IFill<cg.Paint>> {
    readonly type: "ellipse";
  }
  export interface ComponentNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutContainerTrait, i.IHotspotTrait, i.ICornerRadius, i.IRectangularShapeTrait, Partial<i.IPadding>, i.IFlexContainer, i.IProperties {
    readonly type: "component";
  }
  export type ComputedComponentNode = ComponentNode;
  export interface InstanceNode extends i.IBaseNode, i.ISceneNode, i.ILayerTrait, i.ILayoutContainerTrait, i.IHotspotTrait, i.IProperties, i.IProps {
    readonly type: "instance";
    /**
     * ID of component that this instance came from, refers to components table
     */
    component_id: NodeID;
  }
  export type ComputedInstanceNode = InstanceNode;
  /**
   * [Template Instance Node] Template node is a static, hand crafted template that does not have a intrinsic tree, only a root properties [data] and [overrides] to each customizable node
   *
   * Limitations ATM:
   * - Template Node cannot be used as a child node.
   * - There can be only one, root template node in a document.
   *
   * This is useful when you have a complex structure with custom loggics and state management, use this node and expose only customizable nodes and properties.
   */
  export interface TemplateInstanceNode extends i.IBaseNode, i.ISceneNode, i.IHotspotTrait, i.IPositioning, i.ICSSDimension, i.IProperties, i.IProps, document.IOverridesRepository {
    readonly type: "template_instance";
    /**
     * ID of template definition that this instance came from, refers to user defined templates table
     */
    template_id: string;
  }
  export type ComputedTemplateInstanceNode = TemplateInstanceNode;
  export namespace factory {
    /**
     * calling this does not actually contribute to the rendering by itself, it creates a {@link TemplateInstanceNode} data.
     */
    export function createTemplateInstanceNodeDataFromTemplateDefinition(id: string, def: document.template.TemplateDocumentDefinition, seed?: Partial<Omit<TemplateInstanceNode, "id">>): TemplateInstanceNode;
    export namespace factory_default_traits {
      const DEFAULT_RECTANGULAR_CORNER_RADIUS: grida.program.nodes.i.IRectangularCornerRadius;
    }
    /**
     * Creates a Node data from prototype input, while ignoring the prototype's children.
     *
     * It still follows the node structure and returns with empty array `{ children: [] }` if the node requires children property.
     *
     * calling this does not actually contribute to the rendering by itself, it creates a {@link Node} data.
     *
     * @param prototype partial node prototype to start with
     * @param nid nid generator
     * @returns
     */
    export function createNodeDataFromPrototypeWithoutChildren(prototype: Partial<NodePrototype>, id: NodeID): Node;
    type FactoryNodeIdGenerator<D> = (data: D, depth: number) => NodeID;
    /**
     * Creates a sub document {@link document.IPackedSceneDocument} from a prototype input.
     *
     * When injecting this to the master document, simply merge this to the master document, and add the root as a children of certain node.
     */
    export function create_packed_scene_document_from_prototype<D extends Partial<NodePrototype>>(prototype: D, nid: FactoryNodeIdGenerator<D | Partial<NodePrototype>>): document.IPackedSceneDocument;
    export function packed_scene_document_to_full_document(packed: document.IPackedSceneDocument): document.Document;
    /**
     * @param snapshot entire or partial document snapshot - this must include the target and its children, otherwise it will throw.
     * @param id target node id
     */
    export function createPrototypeFromSnapshot(snapshot: document.IDocumentDefinition, id: nodes.NodeID): nodes.NodePrototype;
    export function createContainerNode(id: string, partial?: Partial<ContainerNode>): ContainerNode;
    export {};
  }
  export {};
}
//#endregion
//#region ../grida-canvas-io-figma/fig-kiwi/schema.d.ts
/**
 * This file is generated from a .fig file using the fig2kiwi.ts extraction tool.
 *
 * DO NOT EDIT THIS FILE MANUALLY.
 *
 * To regenerate this file:
 *
 * 1. Obtain a recent .fig file (use fixtures/test-fig/L0/blank.fig or any other .fig file)
 *
 * 2. Run the extraction script:
 *    cd .ref/figma
 *    deno run --allow-read --allow-write --allow-net fig2kiwi.ts ../../fixtures/test-fig/L0/blank.fig fig
 *
 * 3. This will generate two files:
 *    - .ref/figma/fig.kiwi (human-readable schema)
 *    - .ref/figma/fig.kiwi.d.ts (TypeScript definitions)
 *
 * 4. Copy the TypeScript definitions to this file:
 *    cp .ref/figma/fig.kiwi.d.ts packages/grida-canvas-io-figma/fig-kiwi/schema.ts
 *
 * 5. Update the schema text at the bottom by copying from .ref/figma/fig.kiwi
 *
 * For more information about the Kiwi schema and extraction process, see:
 * - .ref/figma/README.md
 * - https://grida.co/docs/wg/feat-fig/glossary/fig.kiwi.md
 *
 * Last updated: 2025-12-04
 * Schema version: 101
 */
type MessageType = "JOIN_START" | "NODE_CHANGES" | "USER_CHANGES" | "JOIN_END" | "SIGNAL" | "STYLE" | "STYLE_SET" | "JOIN_START_SKIP_RELOAD" | "NOTIFY_SHOULD_UPGRADE" | "UPGRADE_DONE" | "UPGRADE_REFRESH" | "SCENE_GRAPH_QUERY" | "SCENE_GRAPH_REPLY" | "DIFF" | "CLIENT_BROADCAST" | "JOIN_START_JOURNALED" | "STREAM_START" | "STREAM_END" | "INTERACTIVE_SLIDE_CHANGE" | "RECONNECT_SCENE_GRAPH_QUERY" | "RECONNECT_SCENE_GRAPH_REPLY" | "JOIN_END_INCREMENTAL_RECONNECT" | "NODE_STATUS_CHANGE" | "CLIENT_RENDERED";
type Axis$1 = "X" | "Y";
type Access = "READ_ONLY" | "READ_WRITE";
type NodePhase = "CREATED" | "REMOVED";
type WindingRule = "NONZERO" | "ODD";
type NodeType$1 = "NONE" | "DOCUMENT" | "CANVAS" | "GROUP" | "FRAME" | "BOOLEAN_OPERATION" | "VECTOR" | "STAR" | "LINE" | "ELLIPSE" | "RECTANGLE" | "REGULAR_POLYGON" | "ROUNDED_RECTANGLE" | "TEXT" | "SLICE" | "SYMBOL" | "INSTANCE" | "STICKY" | "SHAPE_WITH_TEXT" | "CONNECTOR" | "CODE_BLOCK" | "WIDGET" | "STAMP" | "MEDIA" | "HIGHLIGHT" | "SECTION" | "SECTION_OVERLAY" | "WASHI_TAPE" | "VARIABLE" | "TABLE" | "TABLE_CELL" | "VARIABLE_SET" | "SLIDE" | "ASSISTED_LAYOUT" | "INTERACTIVE_SLIDE_ELEMENT" | "VARIABLE_OVERRIDE" | "MODULE" | "SLIDE_GRID" | "SLIDE_ROW" | "RESPONSIVE_SET" | "CODE_COMPONENT" | "TEXT_PATH" | "CODE_INSTANCE" | "CODE_LIBRARY" | "CODE_FILE" | "CODE_LAYER" | "BRUSH" | "MANAGED_STRING" | "TRANSFORM" | "CMS_RICH_TEXT" | "REPEATER" | "JSX" | "EMBEDDED_PROTOTYPE" | "REACT_FIBER" | "RESPONSIVE_NODE_SET" | "WEBPAGE" | "KEYFRAME" | "KEYFRAME_TRACK" | "ANIMATION_PRESET_INSTANCE";
type ShapeWithTextType = "SQUARE" | "ELLIPSE" | "DIAMOND" | "TRIANGLE_UP" | "TRIANGLE_DOWN" | "ROUNDED_RECTANGLE" | "PARALLELOGRAM_RIGHT" | "PARALLELOGRAM_LEFT" | "ENG_DATABASE" | "ENG_QUEUE" | "ENG_FILE" | "ENG_FOLDER" | "TRAPEZOID" | "PREDEFINED_PROCESS" | "SHIELD" | "DOCUMENT_SINGLE" | "DOCUMENT_MULTIPLE" | "MANUAL_INPUT" | "HEXAGON" | "CHEVRON" | "PENTAGON" | "OCTAGON" | "STAR" | "PLUS" | "ARROW_LEFT" | "ARROW_RIGHT" | "SUMMING_JUNCTION" | "OR" | "SPEECH_BUBBLE" | "INTERNAL_STORAGE";
type BlendMode$1 = "PASS_THROUGH" | "NORMAL" | "DARKEN" | "MULTIPLY" | "LINEAR_BURN" | "COLOR_BURN" | "LIGHTEN" | "SCREEN" | "LINEAR_DODGE" | "COLOR_DODGE" | "OVERLAY" | "SOFT_LIGHT" | "HARD_LIGHT" | "DIFFERENCE" | "EXCLUSION" | "HUE" | "SATURATION" | "COLOR" | "LUMINOSITY";
type PaintType = "SOLID" | "GRADIENT_LINEAR" | "GRADIENT_RADIAL" | "GRADIENT_ANGULAR" | "GRADIENT_DIAMOND" | "IMAGE" | "EMOJI" | "VIDEO" | "PATTERN" | "NOISE";
type ImageScaleMode = "STRETCH" | "FIT" | "FILL" | "TILE";
type EffectType = "INNER_SHADOW" | "DROP_SHADOW" | "FOREGROUND_BLUR" | "BACKGROUND_BLUR" | "REPEAT" | "SYMMETRY" | "GRAIN" | "NOISE" | "GLASS";
type TextCase = "ORIGINAL" | "UPPER" | "LOWER" | "TITLE" | "SMALL_CAPS" | "SMALL_CAPS_FORCED";
type TextDecoration = "NONE" | "UNDERLINE" | "STRIKETHROUGH";
type TextDecorationStyle = "SOLID" | "DOTTED" | "WAVY";
type LeadingTrim = "NONE" | "CAP_HEIGHT";
type NumberUnits = "RAW" | "PIXELS" | "PERCENT";
type ConstraintType = "MIN" | "CENTER" | "MAX" | "STRETCH" | "SCALE" | "FIXED_MIN" | "FIXED_MAX";
type StrokeAlign = "CENTER" | "INSIDE" | "OUTSIDE";
type StrokeCap = "NONE" | "ROUND" | "SQUARE" | "ARROW_LINES" | "ARROW_EQUILATERAL" | "DIAMOND_FILLED" | "TRIANGLE_FILLED" | "HIGHLIGHT" | "WASHI_TAPE_1" | "WASHI_TAPE_2" | "WASHI_TAPE_3" | "WASHI_TAPE_4" | "WASHI_TAPE_5" | "WASHI_TAPE_6" | "CIRCLE_FILLED";
type StrokeJoin = "MITER" | "BEVEL" | "ROUND";
type BooleanOperation = "UNION" | "INTERSECT" | "SUBTRACT" | "XOR";
type TextAlignHorizontal = "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED";
type TextAlignVertical = "TOP" | "CENTER" | "BOTTOM";
type MouseCursor = "DEFAULT" | "CROSSHAIR" | "EYEDROPPER" | "HAND" | "PAINT_BUCKET" | "PEN" | "PENCIL" | "MARKER" | "ERASER" | "HIGHLIGHTER" | "LASSO";
type VectorMirror = "NONE" | "ANGLE" | "ANGLE_AND_LENGTH";
type ImageType$1 = "PNG" | "JPEG" | "SVG" | "PDF" | "MP4";
type ExportConstraintType = "CONTENT_SCALE" | "CONTENT_WIDTH" | "CONTENT_HEIGHT";
type LayoutGridType = "MIN" | "CENTER" | "STRETCH" | "MAX";
type LayoutGridPattern = "STRIPES" | "GRID";
type TextAutoResize = "NONE" | "WIDTH_AND_HEIGHT" | "HEIGHT";
type TextTruncation = "DISABLED" | "ENDING";
type StyleSetType = "PERSONAL" | "TEAM" | "CUSTOM" | "FREQUENCY" | "TEMPORARY";
type StyleSetContentType = "SOLID" | "GRADIENT" | "IMAGE";
type StackMode = "NONE" | "HORIZONTAL" | "VERTICAL" | "GRID";
type StackAlign = "MIN" | "CENTER" | "MAX" | "BASELINE";
type StackCounterAlign = "MIN" | "CENTER" | "MAX" | "STRETCH" | "AUTO" | "BASELINE";
type StackJustify = "MIN" | "CENTER" | "MAX" | "SPACE_EVENLY" | "SPACE_BETWEEN";
type GridChildAlign = "AUTO" | "MIN" | "CENTER" | "MAX";
type StackSize = "FIXED" | "RESIZE_TO_FIT" | "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE";
type StackPositioning = "AUTO" | "ABSOLUTE";
type StackWrap = "NO_WRAP" | "WRAP";
type StackCounterAlignContent = "AUTO" | "SPACE_BETWEEN";
type ConnectionType = "NONE" | "INTERNAL_NODE" | "URL" | "BACK" | "CLOSE" | "SET_VARIABLE" | "UPDATE_MEDIA_RUNTIME" | "CONDITIONAL" | "SET_VARIABLE_MODE" | "OBJECT_ANIMATION";
type InteractionType = "ON_CLICK" | "AFTER_TIMEOUT" | "MOUSE_IN" | "MOUSE_OUT" | "ON_HOVER" | "MOUSE_DOWN" | "MOUSE_UP" | "ON_PRESS" | "NONE" | "DRAG" | "ON_KEY_DOWN" | "ON_VOICE" | "ON_MEDIA_HIT" | "ON_MEDIA_END" | "MOUSE_ENTER" | "MOUSE_LEAVE";
type TransitionType = "INSTANT_TRANSITION" | "DISSOLVE" | "FADE" | "SLIDE_FROM_LEFT" | "SLIDE_FROM_RIGHT" | "SLIDE_FROM_TOP" | "SLIDE_FROM_BOTTOM" | "PUSH_FROM_LEFT" | "PUSH_FROM_RIGHT" | "PUSH_FROM_TOP" | "PUSH_FROM_BOTTOM" | "MOVE_FROM_LEFT" | "MOVE_FROM_RIGHT" | "MOVE_FROM_TOP" | "MOVE_FROM_BOTTOM" | "SLIDE_OUT_TO_LEFT" | "SLIDE_OUT_TO_RIGHT" | "SLIDE_OUT_TO_TOP" | "SLIDE_OUT_TO_BOTTOM" | "MOVE_OUT_TO_LEFT" | "MOVE_OUT_TO_RIGHT" | "MOVE_OUT_TO_TOP" | "MOVE_OUT_TO_BOTTOM" | "MAGIC_MOVE" | "SMART_ANIMATE" | "SCROLL_ANIMATE";
type EasingType = "IN_CUBIC" | "OUT_CUBIC" | "INOUT_CUBIC" | "LINEAR" | "IN_BACK_CUBIC" | "OUT_BACK_CUBIC" | "INOUT_BACK_CUBIC" | "CUSTOM_CUBIC" | "SPRING" | "GENTLE_SPRING" | "CUSTOM_SPRING" | "SPRING_PRESET_ONE" | "SPRING_PRESET_TWO" | "SPRING_PRESET_THREE";
type ScrollDirection = "NONE" | "HORIZONTAL" | "VERTICAL" | "BOTH";
type ScrollContractedState = "EXPANDED" | "CONTRACTED";
type FontVariantNumericFigure = "NORMAL" | "LINING" | "OLDSTYLE";
type FontVariantNumericSpacing = "NORMAL" | "PROPORTIONAL" | "TABULAR";
type FontVariantNumericFraction = "NORMAL" | "DIAGONAL" | "STACKED";
type FontVariantCaps = "NORMAL" | "SMALL" | "ALL_SMALL" | "PETITE" | "ALL_PETITE" | "UNICASE" | "TITLING";
type FontVariantPosition = "NORMAL" | "SUB" | "SUPER";
type FontStyle$1 = "NORMAL" | "ITALIC";
type SemanticWeight = "NORMAL" | "BOLD";
type SemanticItalic = "NORMAL" | "ITALIC";
type CodeSnapshotState = "INITIAL" | "SNAPSHOTTING" | "OK" | "SNAPSHOT_ERROR" | "LLM_IN_PROGRESS";
type CodeObjectType = "WEB_LAYER" | "WEB_INTERACTION" | "NATIVE_LAYER" | "ANIMATION_PRESET";
type LockMode = "NONE" | "ALL" | "BACKGROUND_ONLY";
type OpenTypeFeature = "PCAP" | "C2PC" | "CASE" | "CPSP" | "TITL" | "UNIC" | "ZERO" | "SINF" | "ORDN" | "AFRC" | "DNOM" | "NUMR" | "LIGA" | "CLIG" | "DLIG" | "HLIG" | "RLIG" | "AALT" | "CALT" | "RCLT" | "SALT" | "RVRN" | "VERT" | "SWSH" | "CSWH" | "NALT" | "CCMP" | "STCH" | "HIST" | "SIZE" | "ORNM" | "ITAL" | "RAND" | "DTLS" | "FLAC" | "MGRK" | "SSTY" | "KERN" | "FWID" | "HWID" | "HALT" | "TWID" | "QWID" | "PWID" | "JUST" | "LFBD" | "OPBD" | "RTBD" | "PALT" | "PKNA" | "LTRA" | "LTRM" | "RTLA" | "RTLM" | "ABRV" | "ABVM" | "ABVS" | "VALT" | "VHAL" | "BLWF" | "BLWM" | "BLWS" | "AKHN" | "CJCT" | "CFAR" | "CPCT" | "CURS" | "DIST" | "EXPT" | "FALT" | "FINA" | "FIN2" | "FIN3" | "HALF" | "HALN" | "HKNA" | "HNGL" | "HOJO" | "INIT" | "ISOL" | "JP78" | "JP83" | "JP90" | "JP04" | "LJMO" | "LOCL" | "MARK" | "MEDI" | "MED2" | "MKMK" | "NLCK" | "NUKT" | "PREF" | "PRES" | "VPAL" | "PSTF" | "PSTS" | "RKRF" | "RPHF" | "RUBY" | "SMPL" | "TJMO" | "TNAM" | "TRAD" | "VATU" | "VJMO" | "VKNA" | "VKRN" | "VRTR" | "VRT2" | "SS01" | "SS02" | "SS03" | "SS04" | "SS05" | "SS06" | "SS07" | "SS08" | "SS09" | "SS10" | "SS11" | "SS12" | "SS13" | "SS14" | "SS15" | "SS16" | "SS17" | "SS18" | "SS19" | "SS20" | "CV01" | "CV02" | "CV03" | "CV04" | "CV05" | "CV06" | "CV07" | "CV08" | "CV09" | "CV10" | "CV11" | "CV12" | "CV13" | "CV14" | "CV15" | "CV16" | "CV17" | "CV18" | "CV19" | "CV20" | "CV21" | "CV22" | "CV23" | "CV24" | "CV25" | "CV26" | "CV27" | "CV28" | "CV29" | "CV30" | "CV31" | "CV32" | "CV33" | "CV34" | "CV35" | "CV36" | "CV37" | "CV38" | "CV39" | "CV40" | "CV41" | "CV42" | "CV43" | "CV44" | "CV45" | "CV46" | "CV47" | "CV48" | "CV49" | "CV50" | "CV51" | "CV52" | "CV53" | "CV54" | "CV55" | "CV56" | "CV57" | "CV58" | "CV59" | "CV60" | "CV61" | "CV62" | "CV63" | "CV64" | "CV65" | "CV66" | "CV67" | "CV68" | "CV69" | "CV70" | "CV71" | "CV72" | "CV73" | "CV74" | "CV75" | "CV76" | "CV77" | "CV78" | "CV79" | "CV80" | "CV81" | "CV82" | "CV83" | "CV84" | "CV85" | "CV86" | "CV87" | "CV88" | "CV89" | "CV90" | "CV91" | "CV92" | "CV93" | "CV94" | "CV95" | "CV96" | "CV97" | "CV98" | "CV99";
type NoiseType = "MULTITONE" | "MONOTONE" | "DUOTONE";
type PatternTileType = "RECTANGULAR" | "HORIZONTAL_HEXAGONAL" | "VERTICAL_HEXAGONAL";
type PatternAlignment = "START" | "CENTER" | "END";
type CollaborativeTextOpType = "INSERT" | "DELETE";
type FlappType = "POLL" | "EMBED" | "FACEPILE" | "ALIGNMENT" | "YOUTUBE";
type BlurOpType = "NORMAL" | "PROGRESSIVE";
type RepeatType = "LINEAR" | "RADIAL";
type UnitType = "PIXELS" | "RELATIVE";
type RepeatOrder = "FORWARD" | "REVERSE";
type EffectAxis = "X" | "Y" | "X_AND_Y";
type TransformModifierType = "REPEAT" | "SYMMETRY" | "SKEW";
type PrototypeDeviceType = "NONE" | "PRESET" | "CUSTOM" | "PRESENTATION";
type DeviceRotation = "NONE" | "CCW_90";
type OverlayPositionType = "CENTER" | "TOP_LEFT" | "TOP_CENTER" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_CENTER" | "BOTTOM_RIGHT" | "MANUAL";
type OverlayBackgroundInteraction = "NONE" | "CLOSE_ON_CLICK_OUTSIDE";
type OverlayBackgroundType = "NONE" | "SOLID_COLOR";
type NavigationType = "NAVIGATE" | "OVERLAY" | "SWAP" | "SWAP_STATE" | "SCROLL_TO";
type ExportColorProfile = "DOCUMENT" | "SRGB" | "DISPLAY_P3_V4" | "CMYK";
type ExportSVGIDMode = "IF_NEEDED" | "ALWAYS";
type StyleType = "NONE" | "FILL" | "STROKE" | "TEXT" | "EFFECT" | "EXPORT" | "GRID";
type BrushOrientation = "FORWARD" | "REVERSE";
type BrushType = "STRETCH" | "SCATTER";
type ScrollBehavior = "SCROLLS" | "FIXED_WHEN_CHILD_OF_SCROLLING_FRAME" | "STICKY_SCROLLS";
type ConnectorMagnet = "NONE" | "AUTO" | "TOP" | "LEFT" | "BOTTOM" | "RIGHT" | "CENTER" | "AUTO_HORIZONTAL" | "EDGE" | "ABSOLUTE";
type ConnectorTextSection = "MIDDLE_TO_START" | "MIDDLE_TO_END";
type ConnectorOffAxisOffset = "NONE" | "ABOVE" | "BELOW";
type ConnectorLineStyle = "ELBOWED" | "STRAIGHT" | "CURVED";
type ConnectorType = "MANUAL" | "DIAGRAM";
type AnnotationPropertyType = "FILL" | "STROKE" | "WIDTH" | "HEIGHT" | "MIN_WIDTH" | "MIN_HEIGHT" | "MAX_WIDTH" | "MAX_HEIGHT" | "STROKE_WIDTH" | "CORNER_RADIUS" | "EFFECT" | "TEXT_STYLE" | "TEXT_ALIGN_HORIZONTAL" | "FONT_FAMILY" | "FONT_SIZE" | "FONT_WEIGHT" | "LINE_HEIGHT" | "LETTER_SPACING" | "STACK_SPACING" | "STACK_PADDING" | "STACK_MODE" | "STACK_ALIGNMENT" | "OPACITY" | "COMPONENT" | "FONT_STYLE" | "GRID_ROW_GAP" | "GRID_COLUMN_GAP" | "GRID_ROW_COUNT" | "GRID_COLUMN_COUNT" | "GRID_ROW_ANCHOR_INDEX" | "GRID_COLUMN_ANCHOR_INDEX" | "GRID_ROW_SPAN" | "GRID_COLUMN_SPAN";
type AnnotationCategoryPreset = "NONE" | "ACCESSIBILITY" | "BEHAVIOR" | "CONTENT" | "DEVELOPMENT" | "INTERACTION";
type AnnotationCategoryColor = "YELLOW" | "ORANGE" | "RED" | "PINK" | "VIOLET" | "BLUE" | "TEAL" | "GREEN";
type AnnotationMeasurementNodeSide = "TOP" | "BOTTOM" | "LEFT" | "RIGHT";
type EditorType = "DESIGN" | "WHITEBOARD" | "SLIDES" | "DEV_HANDOFF" | "SITES" | "COOPER" | "ILLUSTRATION" | "FIGMAKE";
type MaskType = "ALPHA" | "OUTLINE" | "LUMINANCE";
type ModuleType = "NONE" | "SINGLE_NODE" | "MULTI_NODE";
type SectionStatus = "NONE" | "BUILD" | "COMPLETED";
type BuzzApprovalNodeStatus = "NONE" | "IN_REVIEW" | "APPROVED" | "CHANGES_REQUESTED";
type CookieBannerComponentType = "BANNER" | "MODAL";
type TriggerComponentType = "BANNER" | "TAG";
type CookieXAlignment = "LEFT" | "CENTER" | "RIGHT";
type CookieYAlignment = "TOP" | "CENTER" | "BOTTOM";
type ResponsiveScalingMode = "REFLOW" | "SCALE";
type CMSFilterCriteriaMatchType = "MATCH_ALL" | "MATCH_ANY";
type CMSSelectorFilterOperator = "EQUALS";
type CMSFieldOrderBy = "ASCENDING" | "DESCENDING";
type CMSConsumptionField = "MISSING" | "TEXT_DATA";
type CMSRichTextStyleClass = "HEADING1" | "HEADING2" | "HEADING3" | "HEADING4" | "HEADING5" | "HEADING6" | "PARAGRAPH" | "LINK" | "BLOCKQUOTE";
type ManagedStringContentSchema = "V0";
type ManagedStringNodeType = "TEXT" | "CONCATENATE" | "PLURAL" | "PLACEHOLDER";
type ManagedStringPluralType = "ZERO" | "ONE" | "TWO" | "FEW" | "MANY" | "OTHER";
type ManagedStringFormatType = "TEXT" | "DATE" | "TIME" | "NUMBER";
type MediaAction = "PLAY" | "PAUSE" | "TOGGLE_PLAY_PAUSE" | "MUTE" | "UNMUTE" | "TOGGLE_MUTE_UNMUTE" | "SKIP_FORWARD" | "SKIP_BACKWARD" | "SKIP_TO" | "SET_PLAYBACK_RATE";
type VariableField = "MISSING" | "CORNER_RADIUS" | "PARAGRAPH_SPACING" | "PARAGRAPH_INDENT" | "STROKE_WEIGHT" | "STACK_SPACING" | "STACK_PADDING_LEFT" | "STACK_PADDING_TOP" | "STACK_PADDING_RIGHT" | "STACK_PADDING_BOTTOM" | "VISIBLE" | "TEXT_DATA" | "WIDTH" | "HEIGHT" | "RECTANGLE_TOP_LEFT_CORNER_RADIUS" | "RECTANGLE_TOP_RIGHT_CORNER_RADIUS" | "RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS" | "RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS" | "BORDER_TOP_WEIGHT" | "BORDER_BOTTOM_WEIGHT" | "BORDER_LEFT_WEIGHT" | "BORDER_RIGHT_WEIGHT" | "VARIANT_PROPERTIES" | "STACK_COUNTER_SPACING" | "MIN_WIDTH" | "MAX_WIDTH" | "MIN_HEIGHT" | "MAX_HEIGHT" | "FONT_FAMILY" | "FONT_STYLE" | "FONT_VARIATIONS" | "OPACITY" | "FONT_SIZE" | "LETTER_SPACING" | "LINE_HEIGHT" | "OVERRIDDEN_SYMBOL_ID" | "HYPERLINK" | "CMS_SERIALIZED_RICH_TEXT_DATA" | "SLOT_CONTENT_ID" | "GRID_ROW_GAP" | "GRID_COLUMN_GAP" | "X_POSITION" | "Y_POSITION" | "ROTATION";
type GridTrackSizingType = "FLEX" | "FIXED" | "HUG";
type AgendaItemType = "NODE" | "BLOCK";
type DiagramLayoutRuleType = "NONE" | "TREE";
type DiagramLayoutPaused = "NO" | "YES";
type ComponentPropNodeField = "VISIBLE" | "TEXT_DATA" | "OVERRIDDEN_SYMBOL_ID" | "INHERIT_FILL_STYLE_ID" | "SLOT_CONTENT_ID";
type ComponentPropType = "BOOL" | "TEXT" | "COLOR" | "INSTANCE_SWAP" | "VARIANT" | "NUMBER" | "IMAGE" | "SLOT";
type ParameterConfigControl = "DEFAULT" | "SLIDER" | "INPUT" | "SELECT";
type InstanceSwapPreferredValueType = "COMPONENT" | "STATE_GROUP";
type WidgetEvent = "MOUSE_DOWN" | "CLICK" | "TEXT_EDIT_END" | "ATTACHED_STICKABLES_CHANGED" | "STUCK_STATUS_CHANGED";
type WidgetInputBehavior = "WRAP" | "TRUNCATE" | "MULTILINE";
type WidgetPropertyMenuItemType = "ACTION" | "SEPARATOR" | "COLOR" | "DROPDOWN" | "COLOR_SELECTOR" | "TOGGLE" | "LINK";
type WidgetInputTextNodeType = "WIDGET_CONTROLLED" | "RICH_TEXT";
type CodeBlockLanguage = "TYPESCRIPT" | "CPP" | "RUBY" | "CSS" | "JAVASCRIPT" | "HTML" | "JSON" | "GRAPHQL" | "PYTHON" | "GO" | "SQL" | "SWIFT" | "KOTLIN" | "RUST" | "BASH" | "PLAINTEXT";
type CodeBlockTheme = "FIGJAM_DARK" | "DRACULA" | "DUOTONE_SEA" | "DUOTONE_SPACE" | "DUOTONE_EARTH" | "DUOTONE_FOREST" | "DUOTONE_LIGHT";
type InternalEnumForTest = "OLD";
type BulletType = "ORDERED" | "UNORDERED" | "INDENT" | "NO_LIST";
type LineType = "PLAIN" | "ORDERED_LIST" | "UNORDERED_LIST" | "BLOCKQUOTE" | "HEADER";
type SourceDirectionality = "AUTO" | "LTR" | "RTL";
type Directionality = "LTR" | "RTL";
type DirectionalityIntent = "IMPLICIT" | "EXPLICIT";
type AnimationPhase = "IN" | "OUT";
type AnimationType = "NONE" | "FADE" | "SLIDE_FROM_LEFT" | "SLIDE_FROM_RIGHT" | "SLIDE_FROM_TOP" | "SLIDE_FROM_BOTTOM";
type TriggerDevice = "KEYBOARD" | "UNKNOWN_CONTROLLER" | "XBOX_ONE" | "PS4" | "SWITCH_PRO";
type MentionSource = "DEFAULT" | "COPY_DUPLICATE";
type TransitionDirection = "FORWARD" | "REVERSE";
type PlaybackChangePhase = "INITIATED" | "ABORTED" | "COMMITTED";
type Heartbeat = "FOREGROUND" | "BACKGROUND";
type SitesViewState = "FILE" | "CODE" | "DAKOTA" | "SETTINGS" | "INSERT";
type DesignFullPageViewState = "NONE" | "DESIGN_SYSTEM" | "VARIABLES";
type SceneGraphQueryBehavior = "DEFAULT" | "CONTAINING_PAGE" | "PLUGIN";
type PasteAssetType = "UNKNOWN" | "VARIABLE";
type RichMediaType = "ANIMATED_IMAGE" | "VIDEO";
type VariableDataType = "BOOLEAN" | "FLOAT" | "STRING" | "ALIAS" | "COLOR" | "EXPRESSION" | "MAP" | "SYMBOL_ID" | "FONT_STYLE" | "TEXT_DATA" | "INVALID" | "NODE_FIELD_ALIAS" | "CMS_ALIAS" | "PROP_REF" | "IMAGE" | "MANAGED_STRING_ALIAS" | "LINK" | "JS_RUNTIME_ALIAS" | "SLOT_CONTENT_ID" | "DATE" | "KEYFRAME_TRACK_ID" | "KEYFRAME_TRACK_PARAMETER_DATA";
type VariableResolvedDataType = "BOOLEAN" | "FLOAT" | "STRING" | "COLOR" | "MAP" | "SYMBOL_ID" | "FONT_STYLE" | "TEXT_DATA" | "IMAGE" | "LINK" | "JS_RUNTIME_ALIAS" | "SLOT_CONTENT_ID" | "KEYFRAME_TRACK_ID" | "KEYFRAME_TRACK_PARAMETER_DATA";
type ExpressionFunction = "ADDITION" | "SUBTRACTION" | "RESOLVE_VARIANT" | "MULTIPLY" | "DIVIDE" | "EQUALS" | "NOT_EQUAL" | "LESS_THAN" | "LESS_THAN_OR_EQUAL" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL" | "AND" | "OR" | "NOT" | "STRINGIFY" | "TERNARY" | "VAR_MODE_LOOKUP" | "NEGATE" | "IS_TRUTHY" | "KEYFRAME";
type NodeFieldAliasType = "MISSING" | "COMPONENT_PROP_ASSIGNMENTS";
type VariableScope = "ALL_SCOPES" | "TEXT_CONTENT" | "CORNER_RADIUS" | "WIDTH_HEIGHT" | "GAP" | "ALL_FILLS" | "FRAME_FILL" | "SHAPE_FILL" | "TEXT_FILL" | "STROKE" | "STROKE_FLOAT" | "EFFECT_FLOAT" | "EFFECT_COLOR" | "OPACITY" | "FONT_STYLE" | "FONT_FAMILY" | "FONT_SIZE" | "LINE_HEIGHT" | "LETTER_SPACING" | "PARAGRAPH_SPACING" | "PARAGRAPH_INDENT" | "FONT_VARIATIONS" | "TRANSFORM";
type KeyframeValueType = "FLOAT" | "INVALID";
type KeyframeTrackParameterType = "INVALID" | "MANUAL" | "ANIMATION_PRESET";
type CodeSyntaxPlatform = "WEB" | "ANDROID" | "iOS";
type HTMLTag = "AUTO" | "ARTICLE" | "SECTION" | "NAV" | "ASIDE" | "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "HGROUP" | "HEADER" | "FOOTER" | "ADDRESS" | "P" | "HR" | "PRE" | "BLOCKQUOTE" | "OL" | "UL" | "MENU" | "LI" | "DL" | "DT" | "DD" | "FIGURE" | "FIGCAPTION" | "MAIN" | "DIV" | "A" | "EM" | "STRONG" | "SMALL" | "S" | "CITE" | "Q" | "DFN" | "ABBR" | "RUBY" | "RT" | "RP" | "DATA" | "TIME" | "CODE" | "VAR" | "SAMP" | "KBD" | "SUB" | "SUP" | "I" | "B" | "U" | "MARK" | "BDI" | "BDO" | "SPAN" | "BR" | "WBR" | "PICTURE" | "SOURCE" | "IMG" | "FORM" | "LABEL" | "INPUT" | "BUTTON" | "SELECT" | "DATALIST" | "OPTGROUP" | "OPTION" | "TEXTAREA" | "OUTPUT" | "PROGRESS" | "METER" | "FIELDSET" | "LEGEND" | "VIDEO";
type ARIARole = "AUTO" | "NONE" | "APPLICATION" | "BANNER" | "COMPLEMENTARY" | "CONTENTINFO" | "FORM" | "MAIN" | "NAVIGATION" | "REGION" | "SEARCH" | "SEPARATOR" | "ARTICLE" | "COLUMNHEADER" | "DEFINITION" | "DIRECTORY" | "DOCUMENT" | "GROUP" | "HEADING" | "IMG" | "LIST" | "LISTITEM" | "MATH" | "NOTE" | "PRESENTATION" | "ROW" | "ROWGROUP" | "ROWHEADER" | "TABLE" | "TOOLBAR" | "BUTTON" | "CHECKBOX" | "GRIDCELL" | "LINK" | "MENUITEM" | "MENUITEMCHECKBOX" | "MENUITEMRADIO" | "OPTION" | "PROGRESSBAR" | "RADIO" | "SCROLLBAR" | "SLIDER" | "SPINBUTTON" | "TAB" | "TABPANEL" | "TEXTBOX" | "TREEITEM" | "COMBOBOX" | "GRID" | "LISTBOX" | "MENU" | "MENUBAR" | "RADIOGROUP" | "TABLIST" | "TREE" | "TREEGRID" | "TOOLTIP" | "ALERT" | "LOG" | "MARQUEE" | "STATUS" | "TIMER" | "ALERTDIALOG" | "DIALOG" | "SEARCHBOX" | "SWITCH" | "BLOCKQUOTE" | "CAPTION" | "CELL" | "DELETION" | "EMPHASIS" | "FEED" | "FIGURE" | "GENERIC" | "INSERTION" | "METER" | "PARAGRAPH" | "STRONG" | "SUBSCRIPT" | "SUPERSCRIPT" | "TERM" | "TIME" | "IMAGE" | "HEADING_1" | "HEADING_2" | "HEADING_3" | "HEADING_4" | "HEADING_5" | "HEADING_6" | "HEADER" | "FOOTER" | "SIDEBAR" | "SECTION" | "MAINCONTENT" | "TABLE_CELL" | "WIDGET";
type ColorProfile = "SRGB" | "DISPLAY_P3";
type DocumentColorProfile = "LEGACY" | "SRGB" | "DISPLAY_P3";
type ChildReadingDirection = "NONE" | "LEFT_TO_RIGHT" | "RIGHT_TO_LEFT";
type ARIAAttributeDataType = "BOOLEAN" | "STRING" | "FLOAT" | "INT" | "STRING_LIST";
type EditScopeType = "INVALID" | "TEST_SETUP" | "USER" | "PLUGIN" | "SYSTEM" | "REST_API" | "ONBOARDING" | "AUTOSAVE" | "AI";
type SectionPresetState = "INSERTED" | "USER_EDITED";
type EmojiImageSet = "APPLE" | "NOTO";
type SelectionRegionFocusType = "NONE" | "PRIMARY" | "SECONDARY";
type FirstDraftKitType = "LOCAL" | "LIBRARY" | "NONE";
type FirstDraftKitElementType = "NONE" | "BUILDING_BLOCK" | "GROUPED_COMPONENT";
type PlatformShapeProperty = "FILL" | "STROKE" | "TEXT" | "STROKE_COLOR";
type PlatformShapeBehaviorType = "SHAPE" | "CONTAINER" | "ADVANCED_CONTAINER";
type AppearBehaviorTrigger = "PAGE_LOAD" | "THIS_LAYER_IN_VIEW" | "OTHER_LAYER_IN_VIEW" | "SCROLL_DIRECTION";
type RelativeDirection = "UP" | "DOWN" | "LEFT" | "RIGHT";
type ScrollTransformBehaviorTrigger = "PAGE_HEIGHT" | "THIS_LAYER_IN_VIEW" | "OTHER_LAYER_IN_VIEW";
type LinkBehaviorType = "URL" | "PAGE";
type SlideNumber = "NONE" | "SLIDE" | "SECTION" | "SUBSECTION" | "TOTAL_WITHIN_DECK" | "TOTAL_WITHIN_SECTION";
type NodeChatMessageType = "USER_MESSAGE" | "ASSISTANT_MESSAGE" | "TOOL_MESSAGE" | "SYSTEM_MESSAGE";
type AIChatContentPartType = "INVALID" | "TEXT" | "SELECTED_NODE_IDS";
type AIChatMessageRole = "USER" | "ASSISTANT" | "TOOL" | "SYSTEM";
type CooperTemplateType = "CUSTOM" | "TWITTER_POST" | "LINKEDIN_POST" | "INSTA_POST_SQUARE" | "INSTA_POST_PORTRAIT" | "INSTA_STORY" | "INSTA_AD" | "FACEBOOK_POST" | "FACEBOOK_COVER_PHOTO" | "FACEBOOK_EVENT_COVER" | "FACEBOOK_AD_PORTRAIT" | "FACEBOOK_AD_SQUARE" | "PINTEREST_AD_PIN" | "TWITTER_BANNER" | "LINKEDIN_POST_SQUARE" | "LINKEDIN_POST_PORTRAIT" | "LINKEDIN_POST_LANDSCAPE" | "LINKEDIN_PROFILE_BANNER" | "LINKEDIN_ARTICLE_BANNER" | "LINKEDIN_AD_LANDSCAPE" | "LINKEDIN_AD_SQUARE" | "LINKEDIN_AD_VERTICAL" | "YOUTUBE_THUMBNAIL" | "YOUTUBE_BANNER" | "YOUTUBE_AD" | "TWITCH_BANNER" | "GOOGLE_LEADERBOARD_AD" | "GOOGLE_LARGE_AD" | "GOOGLE_MED_AD" | "GOOGLE_MOBILE_BANNER_AD" | "GOOGLE_SKYSCRAPER_AD" | "CARD_HORIZONTAL" | "CARD_VERTICAL" | "PRINT_US_LETTER" | "POSTER" | "BANNER_STANDARD" | "BANNER_WIDE" | "BANNER_ULTRAWIDE" | "NAME_TAG_PORTRAIT" | "NAME_TAG_LANDSCAPE" | "INSTA_REEL_COVER" | "ZOOM_BACKGROUND" | "TIKTOK_POST";
type InterpolationType = "HOLD" | "BEZIER";
type KeyframeOperation = "SET" | "SCALE" | "OFFSET";
type TimelinePositionType = "ABSOLUTE" | "RELATIVE";
type PlaybackStyle = "ONCE" | "LOOP" | "BOOMERANG";
interface GUID {
  sessionID: number;
  localID: number;
}
interface Color$1 {
  r: number;
  g: number;
  b: number;
  a: number;
}
interface Vector {
  x: number;
  y: number;
}
interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}
interface ColorStop {
  color: Color$1;
  position: number;
}
interface ColorStopVar {
  color?: Color$1;
  colorVar?: VariableData;
  position?: number;
}
interface Matrix {
  m00: number;
  m01: number;
  m02: number;
  m10: number;
  m11: number;
  m12: number;
}
interface ParentIndex {
  guid: GUID;
  position: string;
}
interface Number {
  value: number;
  units: NumberUnits;
}
interface FontName {
  family: string;
  style: string;
  postscript: string;
}
interface ExportConstraint {
  type: ExportConstraintType;
  value: number;
}
interface GUIDMapping {
  from: GUID;
  to: GUID;
}
interface Blob {
  bytes: Uint8Array;
}
interface Image {
  hash?: Uint8Array;
  name?: string;
  dataBlob?: number;
}
interface Video {
  hash?: Uint8Array;
  s3Url?: string;
}
interface PasteSource {
  srcFile?: string;
  srcNode?: GUID;
}
interface FilterColorAdjust {
  tint: number;
  shadows: number;
  highlights: number;
  detail: number;
  exposure: number;
  vignette: number;
  temperature: number;
  vibrance: number;
}
interface PaintFilterMessage {
  tint?: number;
  shadows?: number;
  highlights?: number;
  detail?: number;
  exposure?: number;
  vignette?: number;
  temperature?: number;
  vibrance?: number;
  contrast?: number;
  brightness?: number;
}
interface Paint$1 {
  type?: PaintType;
  color?: Color$1;
  opacity?: number;
  visible?: boolean;
  blendMode?: BlendMode$1;
  stops?: ColorStop[];
  transform?: Matrix;
  image?: Image;
  imageThumbnail?: Image;
  animatedImage?: Image;
  animationFrame?: number;
  imageScaleMode?: ImageScaleMode;
  imageShouldColorManage?: boolean;
  rotation?: number;
  scale?: number;
  filterColorAdjust?: FilterColorAdjust;
  paintFilter?: PaintFilterMessage;
  emojiCodePoints?: number[];
  video?: Video;
  originalImageWidth?: number;
  originalImageHeight?: number;
  colorVar?: VariableData;
  imageVar?: VariableData;
  stopsVar?: ColorStopVar[];
  thumbHashBase64?: string;
  thumbHash?: Uint8Array;
  sourceNodeId?: GUID;
  spacing?: number;
  patternSpacing?: Vector;
  patternTileType?: PatternTileType;
  verticalAlignment?: PatternAlignment;
  horizontalAlignment?: PatternAlignment;
  id?: GUID;
  altText?: string;
  noiseType?: NoiseType;
  density?: number;
  noiseSize?: Vector;
}
interface FontMetaData {
  key?: FontName;
  fontLineHeight?: number;
  fontDigest?: Uint8Array;
  fontStyle?: FontStyle$1;
  fontWeight?: number;
}
interface FontVariation {
  axisTag?: number;
  axisName?: string;
  value?: number;
}
interface TextData {
  characters?: string;
  characterStyleIDs?: number[];
  styleOverrideTable?: NodeChange[];
  lines?: TextLineData[];
  layoutVersion?: number;
  fallbackFonts?: FontName[];
  minContentHeight?: number;
  layoutSize?: Vector;
  baselines?: Baseline[];
  glyphs?: Glyph[];
  decorations?: Decoration[];
  blockquotes?: Blockquote[];
  fontMetaData?: FontMetaData[];
  hyperlinkBoxes?: HyperlinkBox[];
  truncationStartIndex?: number;
  truncatedHeight?: number;
  logicalIndexToCharacterOffsetMap?: number[];
  mentionBoxes?: MentionBox[];
  derivedLines?: DerivedTextLineData[];
}
interface DerivedTextData {
  layoutSize?: Vector;
  baselines?: Baseline[];
  glyphs?: Glyph[];
  decorations?: Decoration[];
  blockquotes?: Blockquote[];
  fontMetaData?: FontMetaData[];
  hyperlinkBoxes?: HyperlinkBox[];
  truncationStartIndex?: number;
  truncatedHeight?: number;
  logicalIndexToCharacterOffsetMap?: number[];
  mentionBoxes?: MentionBox[];
  derivedLines?: DerivedTextLineData[];
}
interface HyperlinkBox {
  bounds?: Rect;
  url?: string;
  guid?: GUID;
  cmsTarget?: CMSItemPageTarget;
  openInNewTab?: boolean;
  hyperlinkID?: number;
}
interface MentionBox {
  bounds?: Rect;
  startIndex?: number;
  endIndex?: number;
  isValid?: boolean;
  mentionKey?: number;
}
interface Baseline {
  position?: Vector;
  width?: number;
  lineY?: number;
  lineHeight?: number;
  lineAscent?: number;
  ignoreLeadingTrim?: number;
  firstCharacter?: number;
  endCharacter?: number;
}
interface Glyph {
  commandsBlob?: number;
  position?: Vector;
  styleID?: number;
  fontSize?: number;
  firstCharacter?: number;
  advance?: number;
  emojiCodePoints?: number[];
  emojiImageSet?: EmojiImageSet;
  rotation?: number;
}
interface Decoration {
  rects?: Rect[];
  styleID?: number;
}
interface Blockquote {
  verticalBar?: Rect;
  quoteMarkBounds?: Rect;
  styleID?: number;
}
interface VectorData {
  vectorNetworkBlob?: number;
  normalizedSize?: Vector;
  styleOverrideTable?: NodeChange[];
}
interface TextPathStart {
  tValue?: number;
  forward?: boolean;
}
interface GUIDPath {
  guids?: GUID[];
}
interface SymbolData {
  symbolID?: GUID;
  symbolOverrides?: NodeChange[];
  uniformScaleFactor?: number;
}
interface GUIDPathMapping {
  id?: GUID;
  path?: GUIDPath;
}
interface DerivedBreakpointData {
  overrides?: NodeChange[];
}
interface NodeGenerationData {
  overrides?: NodeChange[];
  useFineGrainedSyncing?: boolean;
  diffOnlyRemovals?: NodeChange[];
}
interface DerivedImmutableFrameData {
  overrides?: NodeChange[];
  version?: number;
}
interface JsxData {
  overrides?: NodeChange[];
}
interface DerivedJsxData {
  overrides?: NodeChange[];
}
interface AssetIdMap {
  entries?: AssetIdEntry[];
}
interface AssetIdEntry {
  assetKey?: string;
  assetId?: AssetId;
}
interface AssetRef {
  key?: string;
  version?: string;
}
interface AssetId {
  guid?: GUID;
  assetRef?: AssetRef;
  stateGroupId?: StateGroupId;
  styleId?: StyleId;
  symbolId?: SymbolId;
  variableId?: VariableID;
  variableSetId?: VariableSetID;
}
interface StateGroupId {
  guid?: GUID;
  assetRef?: AssetRef;
}
interface StyleId {
  guid?: GUID;
  assetRef?: AssetRef;
}
interface SymbolId {
  guid?: GUID;
  assetRef?: AssetRef;
}
interface VariableID {
  guid?: GUID;
  assetRef?: AssetRef;
}
interface VariableOverrideId {
  guid?: GUID;
  assetRef?: AssetRef;
}
interface VariableSetID {
  guid?: GUID;
  assetRef?: AssetRef;
}
interface ThemeID {
  guid?: GUID;
  assetRef?: AssetRef;
}
interface CodeLibraryId {
  guid?: GUID;
  assetRef?: AssetRef;
}
interface CodeFileId {
  guid?: GUID;
  assetRef?: AssetRef;
}
interface CodeComponentId {
  guid?: GUID;
  assetRef?: AssetRef;
}
interface CanvasNodeId {
  guid?: GUID;
  symbolId?: SymbolId;
  stateGroupId?: StateGroupId;
}
interface IndexRange {
  startIndex: number;
  endIndexExclusive: number;
}
interface CollaborativeTextOpID {
  sessionID: number;
  counterID: number;
}
interface CollaborativeTextStrippedOpRunWithIDs {
  firstId?: CollaborativeTextOpID;
  runLength?: number;
  parentIds?: CollaborativeTextOpID[];
  rebasedOnOpIds?: CollaborativeTextOpID[];
}
interface CollaborativeTextStrippedOpRunWithLoc {
  type?: CollaborativeTextOpType;
  range?: IndexRange;
  rangeShouldBeIteratedInReverse?: boolean;
  contentBytesInBuffer?: IndexRange;
  rebasedRange?: IndexRange;
}
interface CollaborativeTextOpRun {
  id?: CollaborativeTextOpID;
  parentIds?: CollaborativeTextOpID[];
  type?: CollaborativeTextOpType;
  range?: IndexRange;
  rangeShouldBeIteratedInReverse?: boolean;
  content?: string;
  rebasedOnOpIds?: CollaborativeTextOpID[];
  rebasedRange?: IndexRange;
}
interface CollaborativePlainText {
  historyOpsWithIds?: CollaborativeTextStrippedOpRunWithIDs[];
  historyOpsWithLoc?: CollaborativeTextStrippedOpRunWithLoc[];
  historyStringContentBuffer?: Uint8Array;
  changesToAppend?: CollaborativeTextOpRun[];
}
interface CollaborativeTextSelection {
  node?: GUID;
  field?: number;
  selectedRange?: IndexRange;
  caretAtFront?: boolean;
  textVersion?: CollaborativeTextOpID[];
}
interface ResponsiveTextStyleVariant {
  minWidth?: number;
  fields?: NodeChange;
  variableFontSize?: VariableData;
  variableLineHeight?: VariableData;
  variableLetterSpacing?: VariableData;
  variableParagraphSpacing?: VariableData;
  name?: string;
}
interface SlideThemeProps {
  themeVersion?: string;
  variableSetId?: VariableSetID;
  textStyleIds?: StyleId[];
  isTextColorManuallySelected?: boolean;
  isBorderColorManuallySelected?: boolean;
  subscribedThemeRef?: AssetRef;
  schemaVersion?: number;
  isGeneratedFromDesign?: boolean;
}
interface SlideThemeMap {
  entries?: SlideThemeMapEntry[];
}
interface SlideThemeMapEntry {
  themeId?: ThemeID;
  themeProps?: SlideThemeProps;
}
interface SharedSymbolReference {
  fileKey?: string;
  symbolID?: GUID;
  versionHash?: string;
  guidPathMappings?: GUIDPathMapping[];
  bytes?: Uint8Array;
  libraryGUIDToSubscribingGUID?: GUIDMapping[];
  componentKey?: string;
  unflatteningMappings?: GUIDPathMapping[];
  isUnflattened?: boolean;
}
interface SharedComponentMasterData {
  componentKey?: string;
  publishingGUIDPathToTeamLibraryGUID?: GUIDPathMapping[];
  isUnflattened?: boolean;
}
interface InstanceOverrideStash {
  overridePathOfSwappedInstance?: GUIDPath;
  componentKey?: string;
  overrides?: NodeChange[];
}
interface InstanceOverrideStashV2 {
  overridePathOfSwappedInstance?: GUIDPath;
  localSymbolID?: GUID;
  overrides?: NodeChange[];
}
interface ImportedCodeFileEntry {
  codeFileId?: CodeFileId;
}
interface ImportedCodeFiles {
  entries?: ImportedCodeFileEntry[];
}
interface Effect {
  type?: EffectType;
  offset?: Vector;
  radius?: number;
  visible?: boolean;
  blendMode?: BlendMode$1;
  spread?: number;
  showShadowBehindNode?: boolean;
  radiusVar?: VariableData;
  colorVar?: VariableData;
  spreadVar?: VariableData;
  xVar?: VariableData;
  yVar?: VariableData;
  count?: number;
  repeatType?: RepeatType;
  axis?: EffectAxis;
  unitType?: UnitType;
  order?: RepeatOrder;
  blurOpType?: BlurOpType;
  startOffset?: Vector;
  endOffset?: Vector;
  startRadius?: number;
  color?: Color$1;
  secondaryColor?: Color$1;
  noiseSize?: Vector;
  seed?: number;
  clipToShape?: boolean;
  density?: number;
  noiseType?: NoiseType;
  opacity?: number;
  refractionRadius?: number;
  specularAngle?: number;
  specularIntensity?: number;
  bevelSize?: number;
  chromaticAberration?: number;
  reflectionDistance?: number;
  refractionIntensity?: number;
}
interface TransformModifier {
  type?: TransformModifierType;
  offset?: Vector;
  visible?: boolean;
  count?: number;
  repeatType?: RepeatType;
  axis?: EffectAxis;
  unitType?: UnitType;
  order?: RepeatOrder;
  skewX?: number;
  skewY?: number;
}
interface TransitionInfo {
  type?: TransitionType;
  duration?: number;
}
interface PrototypeDevice {
  type?: PrototypeDeviceType;
  size?: Vector;
  presetIdentifier?: string;
  rotation?: DeviceRotation;
}
interface OverlayBackgroundAppearance {
  backgroundType?: OverlayBackgroundType;
  backgroundColor?: Color$1;
}
interface ExportSettings {
  suffix?: string;
  imageType?: ImageType$1;
  constraint?: ExportConstraint;
  svgDataName?: boolean;
  svgIDMode?: ExportSVGIDMode;
  svgOutlineText?: boolean;
  contentsOnly?: boolean;
  svgForceStrokeMasks?: boolean;
  useAbsoluteBounds?: boolean;
  colorProfile?: ExportColorProfile;
  quality?: number;
  useBicubicSampler?: boolean;
}
interface LayoutGrid {
  type?: LayoutGridType;
  axis?: Axis$1;
  visible?: boolean;
  numSections?: number;
  offset?: number;
  sectionSize?: number;
  gutterSize?: number;
  color?: Color$1;
  pattern?: LayoutGridPattern;
  numSectionsVar?: VariableData;
  offsetVar?: VariableData;
  sectionSizeVar?: VariableData;
  gutterSizeVar?: VariableData;
}
interface Guide {
  axis?: Axis$1;
  offset?: number;
  guid?: GUID;
}
interface Path {
  windingRule?: WindingRule;
  commandsBlob?: number;
  styleID?: number;
}
interface DynamicStrokeSettings {
  frequency?: number;
  wiggle?: number;
  smoothen?: number;
}
interface ScatterStrokeSettings {
  gap?: number;
  wiggle?: number;
  angularJitter?: number;
  rotation?: number;
  sizeJitter?: number;
}
interface StretchStrokeSettings {
  orientation?: BrushOrientation;
}
interface VariableWidthPoint {
  position?: number;
  ascent?: number;
  descent?: number;
  segmentId?: number;
}
interface SharedStyleReference {
  styleKey?: string;
  versionHash?: string;
}
interface SharedStyleMasterData {
  styleKey?: string;
  sortPosition?: string;
  fileKey?: string;
}
interface ArcData {
  startingAngle?: number;
  endingAngle?: number;
  innerRadius?: number;
}
interface SymbolLink {
  uri?: string;
  displayName?: string;
  displayText?: string;
}
interface PluginData {
  pluginID?: string;
  value?: string;
  key?: string;
}
interface PluginRelaunchData {
  pluginID?: string;
  message?: string;
  command?: string;
  isDeleted?: boolean;
}
interface MultiplayerFieldVersion {
  counter?: number;
  sessionID?: number;
}
interface ConnectorEndpoint {
  endpointNodeID?: GUID;
  position?: Vector;
  magnet?: ConnectorMagnet;
  relativePosition?: Vector;
}
interface ConnectorControlPoint {
  position?: Vector;
  axis?: Vector;
}
interface ConnectorTextMidpoint {
  section?: ConnectorTextSection;
  offset?: number;
  offAxisOffset?: ConnectorOffAxisOffset;
}
interface AnnotationProperty {
  type?: AnnotationPropertyType;
}
interface AnnotationCategoryCustom {
  color?: AnnotationCategoryColor;
  customColor?: Color$1;
  label?: string;
}
interface AnnotationCategory {
  id?: GUID;
  preset?: AnnotationCategoryPreset;
  custom?: AnnotationCategoryCustom;
}
interface AnnotationCategories {
  version?: number;
  items?: AnnotationCategory[];
}
interface Annotation {
  label?: string;
  properties?: AnnotationProperty[];
  labelV2?: string;
  categoryId?: GUID;
}
interface AnnotationMeasurement {
  id?: GUID;
  fromNode?: GUID;
  toNode?: GUID;
  fromNodeSide?: AnnotationMeasurementNodeSide;
  toSameSide?: boolean;
  innerOffsetRelative?: number;
  outerOffsetFixed?: number;
  toNodeStablePath?: GUIDPath;
  freeText?: string;
}
interface LibraryMoveInfo {
  oldKey?: string;
  pasteFileKey?: string;
}
interface LibraryMoveHistoryItem {
  sourceNodeId?: GUID;
  sourceComponentKey?: string;
}
interface DeveloperRelatedLink {
  nodeId?: string;
  fileKey?: string;
  linkName?: string;
  linkUrl?: string;
}
interface WidgetPointer {
  nodeId?: GUID;
}
interface EditInfo {
  timestampIso8601?: string;
  userId?: string;
  lastEditedAt?: number;
  createdAt?: number;
}
interface SectionStatusInfo {
  status?: SectionStatus;
  lastUpdateUnixTimestamp?: number;
  description?: string;
  userId?: string;
  prevStatus?: SectionStatus;
}
interface BuzzApprovalRequestInfo {
  requestId?: string;
  requesterUserId?: string;
  requestedAt?: number;
  reviewerUserIds?: string[];
  title?: string;
  note?: string;
  assetsInRequest?: GUID[];
}
interface BuzzApprovalRequests {
  requests?: BuzzApprovalRequestInfo[];
}
interface BuzzApprovalNodeStatusInfo {
  currentStatus?: BuzzApprovalNodeStatus;
  wasPreviouslyApproved?: boolean;
  approvalRevokedAtHistory?: number[];
}
interface NodeChange {
  guid?: GUID;
  guidTag?: number;
  phase?: NodePhase;
  phaseTag?: number;
  parentIndex?: ParentIndex;
  parentIndexTag?: number;
  type?: NodeType$1;
  typeTag?: number;
  name?: string;
  nameTag?: number;
  isPublishable?: boolean;
  description?: string;
  libraryMoveInfo?: LibraryMoveInfo;
  libraryMoveHistory?: LibraryMoveHistoryItem[];
  key?: string;
  fileAssetIds?: AssetIdMap;
  styleID?: number;
  styleIDTag?: number;
  isFillStyle?: boolean;
  isStrokeStyle?: boolean;
  isOverrideOverTextStyle?: boolean;
  styleType?: StyleType;
  styleDescription?: string;
  version?: string;
  userFacingVersion?: string;
  sortPosition?: string;
  ojansSuperSecretNodeField?: SharedStyleMasterData;
  sevMoonlitLilyData?: SharedStyleMasterData;
  isSoftDeletedStyle?: boolean;
  isNonUpdateable?: boolean;
  sharedStyleMasterData?: SharedStyleMasterData;
  sharedStyleReference?: SharedStyleReference;
  inheritFillStyleID?: GUID;
  inheritStrokeStyleID?: GUID;
  inheritTextStyleID?: GUID;
  inheritExportStyleID?: GUID;
  inheritEffectStyleID?: GUID;
  inheritGridStyleID?: GUID;
  inheritFillStyleIDForStroke?: GUID;
  styleIdForFill?: StyleId;
  styleIdForStrokeFill?: StyleId;
  styleIdForText?: StyleId;
  styleIdForEffect?: StyleId;
  styleIdForGrid?: StyleId;
  backgroundPaints?: Paint$1[];
  inheritFillStyleIDForBackground?: GUID;
  isStateGroup?: boolean;
  stateGroupPropertyValueOrders?: StateGroupPropertyValueOrder[];
  sharedSymbolReference?: SharedSymbolReference;
  isSymbolPublishable?: boolean;
  sharedSymbolMappings?: GUIDPathMapping[];
  sharedSymbolVersion?: string;
  sharedComponentMasterData?: SharedComponentMasterData;
  symbolDescription?: string;
  unflatteningMappings?: GUIDPathMapping[];
  forceUnflatteningMappings?: GUIDPathMapping[];
  publishFile?: string;
  sourceLibraryKey?: string;
  publishID?: GUID;
  componentKey?: string;
  isC2?: boolean;
  publishedVersion?: string;
  originComponentKey?: string;
  componentPropDefs?: ComponentPropDef[];
  componentPropRefs?: ComponentPropRef[];
  variantPropSpecs?: VariantPropSpec[];
  symbolData?: SymbolData;
  symbolDataTag?: number;
  derivedSymbolData?: NodeChange[];
  nestedInstanceResizeEnabled?: boolean;
  overriddenSymbolID?: GUID;
  componentPropAssignments?: ComponentPropAssignment[];
  propsAreBubbled?: boolean;
  overrideStash?: InstanceOverrideStash[];
  overrideStashV2?: InstanceOverrideStashV2[];
  guidPath?: GUIDPath;
  guidPathTag?: number;
  overrideLevel?: number;
  moduleType?: ModuleType;
  isSlot?: boolean;
  isSlotContent?: boolean;
  fontSize?: number;
  fontSizeTag?: number;
  paragraphIndent?: number;
  paragraphIndentTag?: number;
  paragraphSpacing?: number;
  paragraphSpacingTag?: number;
  textAlignHorizontal?: TextAlignHorizontal;
  textAlignHorizontalTag?: number;
  textAlignVertical?: TextAlignVertical;
  textAlignVerticalTag?: number;
  textCase?: TextCase;
  textCaseTag?: number;
  textDecoration?: TextDecoration;
  textDecorationTag?: number;
  lineHeight?: Number;
  lineHeightTag?: number;
  fontName?: FontName;
  fontNameTag?: number;
  textData?: TextData;
  textDataTag?: number;
  derivedTextData?: DerivedTextData;
  fontVariantCommonLigatures?: boolean;
  fontVariantContextualLigatures?: boolean;
  fontVariantDiscretionaryLigatures?: boolean;
  fontVariantHistoricalLigatures?: boolean;
  fontVariantOrdinal?: boolean;
  fontVariantSlashedZero?: boolean;
  fontVariantNumericFigure?: FontVariantNumericFigure;
  fontVariantNumericSpacing?: FontVariantNumericSpacing;
  fontVariantNumericFraction?: FontVariantNumericFraction;
  fontVariantCaps?: FontVariantCaps;
  fontVariantPosition?: FontVariantPosition;
  letterSpacing?: Number;
  fontVersion?: string;
  leadingTrim?: LeadingTrim;
  hangingPunctuation?: boolean;
  hangingList?: boolean;
  maxLines?: number;
  responsiveTextStyleVariants?: ResponsiveTextStyleVariant[];
  sectionStatus?: SectionStatus;
  sectionStatusInfo?: SectionStatusInfo;
  textUserLayoutVersion?: number;
  textExplicitLayoutVersion?: number;
  toggledOnOTFeatures?: OpenTypeFeature[];
  toggledOffOTFeatures?: OpenTypeFeature[];
  hyperlink?: Hyperlink;
  mention?: Mention;
  fontVariations?: FontVariation[];
  textBidiVersion?: number;
  textTruncation?: TextTruncation;
  hasHadRTLText?: boolean;
  emojiImageSet?: EmojiImageSet;
  slideThumbnailHash?: string;
  visible?: boolean;
  visibleTag?: number;
  locked?: boolean;
  lockedTag?: number;
  lockMode?: LockMode;
  opacity?: number;
  opacityTag?: number;
  blendMode?: BlendMode$1;
  blendModeTag?: number;
  size?: Vector;
  sizeTag?: number;
  transform?: Matrix;
  transformTag?: number;
  dashPattern?: number[];
  dashPatternTag?: number;
  mask?: boolean;
  maskTag?: number;
  rotationOrigin?: Vector;
  maskIsOutline?: boolean;
  maskIsOutlineTag?: number;
  maskType?: MaskType;
  backgroundOpacity?: number;
  backgroundOpacityTag?: number;
  cornerRadius?: number;
  cornerRadiusTag?: number;
  strokeWeight?: number;
  strokeWeightTag?: number;
  strokeAlign?: StrokeAlign;
  strokeAlignTag?: number;
  strokeCap?: StrokeCap;
  strokeCapTag?: number;
  strokeCapSize?: Number;
  strokeJoin?: StrokeJoin;
  strokeJoinTag?: number;
  fillPaints?: Paint$1[];
  fillPaintsTag?: number;
  strokePaints?: Paint$1[];
  strokePaintsTag?: number;
  effects?: Effect[];
  effectsTag?: number;
  backgroundColor?: Color$1;
  backgroundColorTag?: number;
  fillGeometry?: Path[];
  fillGeometryTag?: number;
  strokeGeometry?: Path[];
  strokeGeometryTag?: number;
  textDecorationFillPaints?: Paint$1[];
  textDecorationSkipInk?: boolean;
  textUnderlineOffset?: Number;
  textDecorationThickness?: Number;
  textDecorationStyle?: TextDecorationStyle;
  transformModifiers?: TransformModifier[];
  rectangleTopLeftCornerRadius?: number;
  rectangleTopRightCornerRadius?: number;
  rectangleBottomLeftCornerRadius?: number;
  rectangleBottomRightCornerRadius?: number;
  rectangleCornerRadiiIndependent?: boolean;
  rectangleCornerToolIndependent?: boolean;
  proportionsConstrained?: boolean;
  targetAspectRatio?: OptionalVector;
  useAbsoluteBounds?: boolean;
  borderTopHidden?: boolean;
  borderBottomHidden?: boolean;
  borderLeftHidden?: boolean;
  borderRightHidden?: boolean;
  bordersTakeSpace?: boolean;
  borderTopWeight?: number;
  borderBottomWeight?: number;
  borderLeftWeight?: number;
  borderRightWeight?: number;
  borderStrokeWeightsIndependent?: boolean;
  horizontalConstraint?: ConstraintType;
  horizontalConstraintTag?: number;
  stackMode?: StackMode;
  stackModeTag?: number;
  stackSpacing?: number;
  stackSpacingTag?: number;
  stackPadding?: number;
  stackPaddingTag?: number;
  stackCounterAlign?: StackCounterAlign;
  stackJustify?: StackJustify;
  stackAlign?: StackAlign;
  stackHorizontalPadding?: number;
  stackVerticalPadding?: number;
  stackWidth?: StackSize;
  stackHeight?: StackSize;
  stackPrimarySizing?: StackSize;
  stackPrimaryAlignItems?: StackJustify;
  stackCounterAlignItems?: StackAlign;
  stackChildPrimaryGrow?: number;
  stackPaddingRight?: number;
  stackPaddingBottom?: number;
  stackChildAlignSelf?: StackCounterAlign;
  stackPositioning?: StackPositioning;
  stackReverseZIndex?: boolean;
  stackWrap?: StackWrap;
  stackCounterSpacing?: number;
  minSize?: OptionalVector;
  maxSize?: OptionalVector;
  stackCounterAlignContent?: StackCounterAlignContent;
  sortedMovingChildIndices?: number[];
  gridRows?: GUIDPositionMap;
  gridColumns?: GUIDPositionMap;
  gridRowGap?: number;
  gridColumnGap?: number;
  gridRowAnchor?: GUID;
  gridColumnAnchor?: GUID;
  gridRowSpan?: number;
  gridColumnSpan?: number;
  gridColumnsSizing?: GUIDGridTrackSizeMap;
  gridRowsSizing?: GUIDGridTrackSizeMap;
  gridChildVerticalAlign?: GridChildAlign;
  gridChildHorizontalAlign?: GridChildAlign;
  isSnakeGameBoard?: boolean;
  transitionNodeID?: GUID;
  prototypeStartNodeID?: GUID;
  prototypeBackgroundColor?: Color$1;
  transitionInfo?: TransitionInfo;
  transitionType?: TransitionType;
  transitionDuration?: number;
  easingType?: EasingType;
  transitionPreserveScroll?: boolean;
  connectionType?: ConnectionType;
  connectionURL?: string;
  prototypeDevice?: PrototypeDevice;
  interactionType?: InteractionType;
  transitionTimeout?: number;
  interactionMaintained?: boolean;
  interactionDuration?: number;
  destinationIsOverlay?: boolean;
  transitionShouldSmartAnimate?: boolean;
  prototypeInteractions?: PrototypeInteraction[];
  objectAnimations?: PrototypeInteraction[];
  prototypeStartingPoint?: PrototypeStartingPoint;
  pluginData?: PluginData[];
  pluginRelaunchData?: PluginRelaunchData[];
  connectorStart?: ConnectorEndpoint;
  connectorEnd?: ConnectorEndpoint;
  connectorLineStyle?: ConnectorLineStyle;
  connectorStartCap?: StrokeCap;
  connectorEndCap?: StrokeCap;
  connectorControlPoints?: ConnectorControlPoint[];
  connectorBezierControlPoints?: ConnectorControlPoint[];
  connectorTextMidpoint?: ConnectorTextMidpoint;
  connectorType?: ConnectorType;
  annotations?: Annotation[];
  measurements?: AnnotationMeasurement[];
  annotationCategories?: AnnotationCategories;
  shapeWithTextType?: ShapeWithTextType;
  shapeUserHeight?: number;
  isStrokePaintDerived?: boolean;
  derivedImmutableFrameData?: DerivedImmutableFrameData;
  derivedImmutableFrameDataVersion?: MultiplayerFieldVersion;
  nodeGenerationData?: NodeGenerationData;
  jsxData?: JsxData;
  derivedJsxData?: DerivedJsxData;
  stableKey?: string;
  codeBlockLanguage?: CodeBlockLanguage;
  codeBlockTheme?: CodeBlockTheme;
  linkPreviewData?: LinkPreviewData;
  shapeTruncates?: boolean;
  sectionContentsHidden?: boolean;
  videoPlayback?: VideoPlayback;
  stampData?: StampData;
  sectionPresetInfo?: SectionPresetInfo;
  platformShapeDefinition?: PlatformShapeDefinition;
  widgetSyncedState?: MultiplayerMap;
  widgetSyncCursor?: number;
  widgetDerivedSubtreeCursor?: WidgetDerivedSubtreeCursor;
  widgetCachedAncestor?: WidgetPointer;
  widgetInputBehavior?: WidgetInputBehavior;
  widgetTooltip?: string;
  widgetHoverStyle?: WidgetHoverStyle;
  isWidgetStickable?: boolean;
  shouldHideCursorsOnWidgetHover?: boolean;
  widgetMetadata?: WidgetMetadata;
  widgetEvents?: WidgetEvent[];
  widgetPropertyMenuItems?: WidgetPropertyMenuItem[];
  widgetInputTextNodeType?: WidgetInputTextNodeType;
  jsxProps?: MultiplayerMap;
  tableRowPositions?: TableRowColumnPositionMap;
  tableColumnPositions?: TableRowColumnPositionMap;
  tableRowHeights?: TableRowColumnSizeMap;
  tableColumnWidths?: TableRowColumnSizeMap;
  interactiveSlideConfigData?: MultiplayerMap;
  interactiveSlideParticipantData?: MultiplayerMap;
  flappType?: FlappType;
  isEmbeddedPrototype?: boolean;
  slideSpeakerNotes?: string;
  isSkippedSlide?: boolean;
  themeID?: ThemeID;
  slideThemeData?: SlideThemeData;
  slideThemeMap?: SlideThemeMap;
  slideTemplateFileKey?: string;
  slideNumber?: SlideNumber;
  slideNumberSeparator?: string;
  diagramParentId?: GUID;
  layoutRoot?: GUID;
  layoutPosition?: string;
  diagramLayoutRuleType?: DiagramLayoutRuleType;
  diagramParentIndex?: DiagramParentIndex;
  diagramLayoutPaused?: DiagramLayoutPaused;
  isPageDivider?: boolean;
  internalEnumForTest?: InternalEnumForTest;
  internalDataForTest?: InternalDataForTest;
  autoRename?: boolean;
  autoRenameTag?: number;
  backgroundEnabled?: boolean;
  backgroundEnabledTag?: number;
  exportContentsOnly?: boolean;
  exportContentsOnlyTag?: number;
  miterLimit?: number;
  miterLimitTag?: number;
  textTracking?: number;
  textTrackingTag?: number;
  verticalConstraint?: ConstraintType;
  verticalConstraintTag?: number;
  exportSettings?: ExportSettings[];
  exportSettingsTag?: number;
  textAutoResize?: TextAutoResize;
  textAutoResizeTag?: number;
  layoutGrids?: LayoutGrid[];
  layoutGridsTag?: number;
  frameMaskDisabled?: boolean;
  frameMaskDisabledTag?: number;
  resizeToFit?: boolean;
  resizeToFitTag?: number;
  booleanOperation?: BooleanOperation;
  booleanOperationTag?: number;
  handleMirroring?: VectorMirror;
  handleMirroringTag?: number;
  count?: number;
  countTag?: number;
  starInnerScale?: number;
  starInnerScaleTag?: number;
  arcData?: ArcData;
  vectorData?: VectorData;
  vectorDataTag?: number;
  vectorOperationVersion?: number;
  textPathStart?: TextPathStart;
  exportBackgroundDisabled?: boolean;
  guides?: Guide[];
  internalOnly?: boolean;
  scrollDirection?: ScrollDirection;
  cornerSmoothing?: number;
  scrollOffset?: Vector;
  exportTextAsSVGText?: boolean;
  scrollContractedState?: ScrollContractedState;
  contractedSize?: Vector;
  fixedChildrenDivider?: string;
  scrollBehavior?: ScrollBehavior;
  derivedSymbolDataLayoutVersion?: number;
  navigationType?: NavigationType;
  overlayPositionType?: OverlayPositionType;
  overlayRelativePosition?: Vector;
  overlayBackgroundInteraction?: OverlayBackgroundInteraction;
  overlayBackgroundAppearance?: OverlayBackgroundAppearance;
  overrideKey?: GUID;
  containerSupportsFillStrokeAndCorners?: boolean;
  stackCounterSizing?: StackSize;
  containersSupportFillStrokeAndCorners?: boolean;
  keyTrigger?: KeyTrigger;
  voiceEventPhrase?: string;
  ancestorPathBeforeDeletion?: GUID[];
  symbolLinks?: SymbolLink[];
  textListData?: TextListData;
  detachOpticalSizeFromFontSize?: boolean;
  listSpacing?: number;
  embedData?: EmbedData;
  richMediaData?: RichMediaData;
  renderedSyncedState?: MultiplayerMap;
  simplifyInstancePanels?: boolean;
  accessibleHTMLTag?: HTMLTag;
  ariaRole?: ARIARole;
  ariaAttributes?: ARIAAttributesMap;
  accessibleLabel?: string;
  isDecorativeImage?: boolean;
  variableData?: VariableData;
  variableConsumptionMap?: VariableDataMap;
  variableModeBySetMap?: VariableModeBySetMap;
  variableSetModes?: VariableSetMode[];
  variableSetID?: VariableSetID;
  variableResolvedType?: VariableResolvedDataType;
  variableDataValues?: VariableDataValues;
  variableTokenName?: string;
  variableScopes?: VariableScope[];
  parameterConsumptionMap?: VariableDataMap;
  codeSyntax?: CodeSyntaxMap;
  pasteSource?: PasteSource;
  pageType?: EditorType;
  strokeBrushGuid?: GUID;
  strokeSeed?: bigint;
  variableWidthPoints?: VariableWidthPoint[];
  dynamicStrokeSettings?: DynamicStrokeSettings;
  scatterStrokeSettings?: ScatterStrokeSettings;
  stretchStrokeSettings?: StretchStrokeSettings;
  scatterBrushTransforms?: Matrix[];
  brushType?: BrushType;
  backingVariableSetId?: VariableSetID;
  overriddenVariableId?: VariableID;
  backingVariableId?: VariableIdOrVariableOverrideId;
  isCollectionExtendable?: boolean;
  rootVariableKey?: string;
  inheritedVariableIds?: InheritedVariablesData;
  handoffStatusMap?: HandoffStatusMap;
  agendaPositionMap?: AgendaPositionMap;
  agendaMetadataMap?: AgendaMetadataMap;
  migrationStatus?: MigrationStatus;
  isSoftDeleted?: boolean;
  editInfo?: EditInfo;
  colorProfile?: ColorProfile;
  detachedSymbolId?: SymbolId;
  childReadingDirection?: ChildReadingDirection;
  readingIndex?: string;
  documentColorProfile?: DocumentColorProfile;
  developerRelatedLinks?: DeveloperRelatedLink[];
  slideActiveThemeLibKey?: string;
  editScopeInfo?: EditScopeInfo;
  semanticWeight?: SemanticWeight;
  semanticItalic?: SemanticItalic;
  areSlidesManuallyIndented?: boolean;
  isResponsiveSet?: boolean;
  derivedBreakpointData?: DerivedBreakpointData;
  defaultResponsiveSetId?: GUID;
  isPrimaryBreakpoint?: boolean;
  primaryResponsiveNodeId?: GUID;
  multiEditGlueId?: GUID;
  breakpointMinWidth?: number;
  isBreakpointInFocus?: boolean;
  responsiveSetSettings?: ResponsiveSetSettings;
  behaviors?: NodeBehaviors;
  sourceCode?: string;
  collaborativeSourceCode?: CollaborativePlainText;
  belongsToCodeLibraryId?: CodeLibraryId;
  importedCodeFiles?: ImportedCodeFiles;
  codeFileCanvasNodeId?: CanvasNodeId;
  isEntrypointCodeFile?: boolean;
  componentOrStateGroupKey?: string;
  componentOrStateGroupVersion?: number;
  sourceCodeLibraryKey?: string;
  sourceCodeLibraryKeys?: string[];
  usedMakeLibraries?: UsedMakeLibrary[];
  makeLibraryComponentId?: string;
  shouldHidePreviewForMakeKitCreation?: boolean;
  codeExamples?: CodeExample[];
  exportedFromCodeFileId?: CodeFileId;
  codeExportName?: string;
  backingCodeComponentId?: CodeComponentId;
  isMainCodeComponent?: boolean;
  codeSnapshotState?: CodeSnapshotState;
  chatMessages?: NodeChatMessage[];
  chatCompressionState?: NodeChatCompressionState;
  aiChatThread?: AIChatThread;
  codeChatMessagesKey?: string;
  codeSnapshot?: CodeSnapshot;
  codeSnapshotInvalidatedAt?: number;
  isCodeBehavior?: boolean;
  autoForkCode?: boolean;
  hasBeenManuallyRenamed?: boolean;
  codeCreatedFromDesign?: boolean;
  codeCreatedFromDesignNodeId?: CanvasNodeId;
  imageImports?: ImageImportMap;
  codeObjectType?: CodeObjectType;
  codeFilePath?: string;
  codeBehaviorData?: CodeBehaviorData;
  codeLibraryFormat?: number;
  isCodePreviewPlayingOnCanvas?: boolean;
  cmsSelector?: CMSSelector;
  cmsConsumptionMap?: CMSConsumptionMap;
  cmsRichTextStyleMap?: CMSRichTextStyleMap;
  aiEditedNodeChangeFieldNumbers?: number[];
  aiEditScopeLabel?: string;
  firstDraftData?: FirstDraftData;
  firstDraftKitElementData?: FirstDraftKitElementData;
  cooperRevertData?: CooperRevertData;
  cooperTemplateData?: CooperTemplateData;
  buzzApprovalRequests?: BuzzApprovalRequests;
  buzzApprovalNodeStatusInfo?: BuzzApprovalNodeStatusInfo;
  hubFileAttribution?: HubFileAttribution;
  managedStringData?: ManagedStringData;
  thumbnailInfo?: ThumbnailInfo;
  aiCanvasPrompt?: AiCanvasPrompt;
  backingNodeId?: CanvasNodeId;
  motionTransform?: TRSSTransform2D;
  interpolationType?: InterpolationType;
  timelinePosition?: bigint;
  keyframeValue?: KeyframeValueData;
  bezierHandles?: BezierHandles;
  keyframeOperation?: KeyframeOperation;
  timelinePositionType?: TimelinePositionType;
  clipId?: GUID;
  timelineDuration?: bigint;
  timelineOffset?: bigint;
  playbackStyle?: PlaybackStyle;
  animationPresets?: AnimationPresets;
  transitionOverrides?: TransitionOverrideData;
}
interface CodeSnapshot {
  state?: CodeSnapshotState;
  invalidatedAt?: number;
  paints?: Paint$1[];
  offset?: Vector;
  layoutSize?: Vector;
  canvasSize?: Vector;
  devicePixelRatio?: number;
}
interface CodeBehaviorData {
  name?: string;
  icon?: string;
  nodeTypes?: string[];
  category?: string;
  apiVersion?: number;
}
interface CodeExample {
  exampleName?: string;
  codeExportName?: string;
}
interface UsedMakeLibrary {
  makeLibraryId?: string;
}
interface CookieBannerText {
  bannerHeader?: string;
  bannerDisclaimerExplicit?: string;
  bannerDisclaimerImplicit?: string;
  policyLabel?: string;
  acceptText?: string;
  acknowledgeText?: string;
  manageText?: string;
  rejectText?: string;
  necessaryText?: string;
  necessaryDescription?: string;
  analyticsText?: string;
  analyticsDescription?: string;
  preferencesText?: string;
  preferencesDescription?: string;
  marketingText?: string;
  marketingDescription?: string;
  saveLabel?: string;
  triggerLabel?: string;
}
interface CookieBannerSettings {
  enabled?: boolean;
  componentType?: CookieBannerComponentType;
  xAlignment?: CookieXAlignment;
  yAlignment?: CookieYAlignment;
  triggerXAlignment?: CookieXAlignment;
  triggerYAlignment?: CookieYAlignment;
  triggerComponentType?: TriggerComponentType;
  policyUrl?: string;
  text?: CookieBannerText;
  policyLink?: GUID;
  locale?: string;
}
interface ResponsiveSetSettings {
  title?: string;
  description?: string;
  scalingMode?: ResponsiveScalingMode;
  scalingMinFontSize?: number;
  scalingMaxFontSize?: number;
  scalingMinLayoutWidth?: number;
  scalingMaxLayoutWidth?: number;
  lang?: string;
  faviconHash?: string;
  socialImageHash?: string;
  googleAnalyticsID?: string;
  blockSearchIndexing?: boolean;
  customCodeHeadStart?: string;
  customCodeHeadEnd?: string;
  customCodeBodyStart?: string;
  customCodeBodyEnd?: string;
  faviconID?: GUID;
  socialImageID?: GUID;
  addBypassLinks?: boolean;
  ignoreReducedMotion?: boolean;
  cookieBanner?: CookieBannerSettings;
}
interface CMSSelector {
  cmsCollectionId?: string;
  filterCriteria?: CMSFilterCritera;
  sorts?: CMSSelectorSort[];
  limit?: number;
}
interface CMSFilterCritera {
  matchType?: CMSFilterCriteriaMatchType;
  filters?: CMSSelectorFilter[];
}
interface CMSSelectorFilter {
  cmsFieldId?: string;
  op?: CMSSelectorFilterOperator;
  comparisonValue?: string;
}
interface CMSSelectorSort {
  cmsFieldId?: string;
  orderBy?: CMSFieldOrderBy;
}
interface CMSConsumptionMap {
  entries?: CMSConsumptionMapEntry[];
}
interface CMSConsumptionMapEntry {
  consumptionField?: CMSConsumptionField;
  cmsFieldId?: string;
}
interface CMSRichTextStyleMap {
  entries?: CMSRichTextStyleEntry[];
}
interface CMSRichTextStyleEntry {
  styleClass?: CMSRichTextStyleClass;
  textDescriptor?: CMSRichTextDescriptor;
}
interface CMSRichTextDescriptor {
  textStyleId?: StyleId;
  fontNameVariants?: FontName[];
}
interface InheritedVariablesData {
  variableIds?: InheritedVariableEntry[];
}
interface InheritedVariableEntry {
  variableId?: VariableID;
}
interface HubFileAttribution {
  hubFileId?: string;
  hubFileName?: string;
}
interface ManagedStringData {
  key?: string;
  context?: string;
  locale?: string;
  content?: ManagedStringNode;
  contentSchema?: ManagedStringContentSchema;
}
interface ManagedStringNode {
  type?: ManagedStringNodeType;
  textNodeData?: ManagedStringTextNodeData;
  concatenateNodeData?: ManagedStringConcatenateAstNodeData;
  pluralNodeData?: ManagedStringPluralAstNodeData;
  placeholderNodeData?: ManagedStringPlaceholderAstNodeData;
}
interface ManagedStringTextNodeData {
  value?: string;
}
interface ManagedStringConcatenateAstNodeData {
  values?: ManagedStringNode[];
}
interface ManagedStringPluralAstNodeData {
  identifier?: string;
  conditions?: ManagedStringPluralTypeMapEntry[];
}
interface ManagedStringPluralTypeMapEntry {
  key?: ManagedStringPluralType;
  value?: ManagedStringNode;
}
interface ManagedStringPlaceholderAstNodeData {
  identifier?: string;
  formatType?: ManagedStringFormatType;
  formatPattern?: string;
}
interface CooperRevertData {
  originalValues?: NodeChange;
}
interface VideoPlayback {
  autoplay?: boolean;
  mediaLoop?: boolean;
  muted?: boolean;
  showControls?: boolean;
  startTimeMs?: number;
  endTimeMs?: number;
}
interface WidgetHoverStyle {
  fillPaints?: Paint$1[];
  strokePaints?: Paint$1[];
  opacity?: number;
  areFillPaintsSet?: boolean;
  areStrokePaintsSet?: boolean;
  isOpacitySet?: boolean;
}
interface WidgetDerivedSubtreeCursor {
  sessionID?: number;
  counter?: number;
}
interface MultiplayerMap {
  entries?: MultiplayerMapEntry[];
}
interface MultiplayerMapEntry {
  key?: string;
  value?: string;
}
interface VariableDataMap {
  entries?: VariableDataMapEntry[];
}
interface VariableDataMapEntry {
  nodeField?: number;
  variableData?: VariableData;
  variableField?: VariableField;
}
interface VariableModeBySetMap {
  entries?: VariableModeBySetMapEntry[];
}
interface VariableModeBySetMapEntry {
  variableSetID?: VariableSetID;
  variableModeID?: GUID;
  variableSetExtensionID?: VariableSetID;
}
interface CodeSyntaxMap {
  entries?: CodeSyntaxMapEntry[];
}
interface CodeSyntaxMapEntry {
  platform?: CodeSyntaxPlatform;
  value?: string;
}
interface TableRowColumnPositionMap {
  entries?: TableRowColumnPositionMapEntry[];
}
interface TableRowColumnPositionMapEntry {
  id?: GUID;
  position?: string;
}
interface GUIDPositionMap {
  entries?: GUIDPositionMapEntry[];
}
interface GUIDPositionMapEntry {
  id?: GUID;
  position?: string;
}
interface GUIDGridTrackSizeMap {
  entries?: GUIDGridTrackSizeMapEntry[];
}
interface GUIDGridTrackSizeMapEntry {
  id?: GUID;
  trackSize?: GridTrackSize;
}
interface ObjectAnimationList {
  entries?: ObjectAnimationListItem[];
}
interface ObjectAnimationListItem {
  targetNodeId?: GUID;
  animation?: PrototypeAction;
}
interface GridTrackSize {
  minSizing?: GridTrackSizingFunction;
  maxSizing?: GridTrackSizingFunction;
}
interface GridTrackSizingFunction {
  type?: GridTrackSizingType;
  value?: number;
}
interface TableRowColumnSizeMap {
  entries?: TableRowColumnSizeMapEntry[];
}
interface TableRowColumnSizeMapEntry {
  id?: GUID;
  size?: number;
}
interface AgendaPositionMap {
  entries?: AgendaPositionMapEntry[];
}
interface AgendaPositionMapEntry {
  id?: GUID;
  position?: string;
}
interface AgendaMetadataMap {
  entries?: AgendaMetadataMapEntry[];
}
interface AgendaMetadataMapEntry {
  id?: GUID;
  data?: AgendaMetadata;
}
interface AgendaMetadata {
  name?: string;
  type?: AgendaItemType;
  targetNodeID?: GUID;
  timerInfo?: AgendaTimerInfo;
  voteInfo?: AgendaVoteInfo;
  musicInfo?: AgendaMusicInfo;
}
interface AgendaTimerInfo {
  timerLength?: number;
}
interface AgendaVoteInfo {
  voteCount?: number;
}
interface AgendaMusicInfo {
  songID?: string;
  startTimeMs?: number;
}
interface DiagramParentIndex {
  guid: GUID;
  position: string;
}
interface ComponentPropRef {
  nodeField?: number;
  defID?: GUID;
  zombieFallbackName?: string;
  componentPropNodeField?: ComponentPropNodeField;
  isDeleted?: boolean;
}
interface ComponentPropAssignment {
  defID?: GUID;
  value?: ComponentPropValue;
  varValue?: VariableData;
  legacyDerivedTextData?: DerivedTextData;
}
interface ComponentPropDef {
  id?: GUID;
  name?: string;
  initialValue?: ComponentPropValue;
  sortPosition?: string;
  parentPropDefId?: GUID;
  type?: ComponentPropType;
  isDeleted?: boolean;
  preferredValues?: ComponentPropPreferredValues;
  varValue?: VariableData;
  parameterConfig?: ParameterConfig;
  description?: string;
}
interface ComponentPropValue {
  boolValue?: boolean;
  textValue?: TextData;
  guidValue?: GUID;
  floatValue?: number;
}
interface ComponentPropPreferredValues {
  stringValues?: string[];
  instanceSwapValues?: InstanceSwapPreferredValue[];
}
interface ParameterConfig {
  numberPropConfig?: NumberPropConfig;
  control?: ParameterConfigControl;
  sliderConfig?: SliderConfig;
  label?: VariableData;
  inputConfig?: InputConfig;
  selectConfig?: SelectConfig;
}
interface InputConfig {
  unit?: VariableData;
  min?: VariableData;
  max?: VariableData;
}
interface SliderConfig {
  min?: VariableData;
  max?: VariableData;
  step?: VariableData;
}
interface SelectOption {
  value?: VariableData;
  label?: string;
}
interface SelectConfig {
  options?: SelectOption[];
}
interface NumberPropConfig {
  control?: ParameterConfigControl;
  min?: VariableData;
  max?: VariableData;
  step?: VariableData;
}
interface InstanceSwapPreferredValue {
  type?: InstanceSwapPreferredValueType;
  key?: string;
}
interface WidgetMetadata {
  pluginID?: string;
  pluginVersionID?: string;
  widgetName?: string;
  isResizable?: boolean;
  isRotatable?: boolean;
}
interface WidgetPropertyMenuSelectorOption {
  option?: string;
  tooltip?: string;
}
interface WidgetPropertyMenuItem {
  propertyName?: string;
  tooltip?: string;
  itemType?: WidgetPropertyMenuItemType;
  icon?: string;
  options?: WidgetPropertyMenuSelectorOption[];
  selectedOption?: string;
  isToggled?: boolean;
  href?: string;
  allowCustomColor?: boolean;
}
interface InternalDataForTest {
  testFieldA?: number;
}
interface StateGroupPropertyValueOrder {
  property?: string;
  values?: string[];
}
interface VariantPropSpec {
  propDefId?: GUID;
  value?: string;
}
interface TextListData {
  listID?: number;
  bulletType?: BulletType;
  indentationLevel?: number;
  lineNumber?: number;
}
interface TextLineData {
  lineType?: LineType;
  styleId?: number;
  indentationLevel?: number;
  sourceDirectionality?: SourceDirectionality;
  directionality?: Directionality;
  directionalityIntent?: DirectionalityIntent;
  downgradeStyleId?: number;
  consistencyStyleId?: number;
  listStartOffset?: number;
  isFirstLineOfList?: boolean;
}
interface DerivedTextLineData {
  directionality?: Directionality;
}
interface PrototypeInteraction {
  id?: GUID;
  event?: PrototypeEvent;
  actions?: PrototypeAction[];
  isDeleted?: boolean;
  stateManagementVersion?: number;
}
interface PrototypeEvent {
  interactionType?: InteractionType;
  interactionMaintained?: boolean;
  interactionDuration?: number;
  keyTrigger?: KeyTrigger;
  voiceEventPhrase?: string;
  transitionTimeout?: number;
  mediaHitTime?: number;
}
interface PrototypeVariableTarget {
  id?: VariableID;
  nodeFieldAlias?: NodeFieldAlias;
}
interface ConditionalActions {
  actions?: PrototypeAction[];
  condition?: VariableData;
}
interface PrototypeAction {
  transitionNodeID?: GUID;
  transitionType?: TransitionType;
  transitionDuration?: number;
  easingType?: EasingType;
  transitionTimeout?: number;
  transitionShouldSmartAnimate?: boolean;
  connectionType?: ConnectionType;
  overlayRelativePosition?: Vector;
  navigationType?: NavigationType;
  transitionPreserveScroll?: boolean;
  easingFunction?: number[];
  extraScrollOffset?: Vector;
  transitionResetScrollPosition?: boolean;
  transitionResetInteractiveComponents?: boolean;
  connectionURL?: string;
  openUrlInNewTab?: boolean;
  linkParam?: VariableData;
  cmsTarget?: CMSItemPageTarget;
  targetVariableID?: GUID;
  targetVariableValue?: VariableAnyValue;
  targetVariable?: PrototypeVariableTarget;
  targetVariableData?: VariableData;
  mediaAction?: MediaAction;
  transitionResetVideoPosition?: boolean;
  mediaSkipToTime?: number;
  mediaSkipByAmount?: number;
  mediaPlaybackRate?: number;
  conditions?: VariableData[];
  conditionalActions?: ConditionalActions[];
  targetVariableSetID?: VariableSetID;
  targetVariableModeID?: GUID;
  targetVariableSetKey?: string;
  variableSetTargetExtensionId?: VariableSetID;
  animationType?: AnimationType;
  animationTargetId?: GUID;
  animationPhase?: AnimationPhase;
  animationState?: AnimationState;
  simpleLink?: boolean;
}
interface AnimationState {
  opacity?: number;
  transform?: Matrix;
}
interface PrototypeStartingPoint {
  name?: string;
  description?: string;
  position?: string;
}
interface KeyTrigger {
  keyCodes?: number[];
  triggerDevice?: TriggerDevice;
}
interface Hyperlink {
  url?: string;
  guid?: GUID;
  cmsTarget?: CMSItemPageTarget;
  openInNewTab?: boolean;
}
interface CMSItemPageTarget {
  nodeId?: GUID;
  cmsItemId?: string;
  fieldSchemaId?: string;
}
interface Mention {
  id?: GUID;
  mentionedUserId?: string;
  mentionedByUserId?: string;
  fileKey?: string;
  source?: MentionSource;
  mentionedUserIdInt?: bigint;
  mentionedByUserIdInt?: bigint;
}
interface EmbedData {
  url?: string;
  srcUrl?: string;
  title?: string;
  thumbnailUrl?: string;
  width?: number;
  height?: number;
  embedType?: string;
  thumbnailImageHash?: string;
  faviconImageHash?: string;
  provider?: string;
  originalText?: string;
  description?: string;
  embedVersionId?: string;
}
interface StampData {
  userId?: string;
  votingSessionId?: string;
  stampedByUserId?: string;
}
interface LinkPreviewData {
  url?: string;
  title?: string;
  provider?: string;
  description?: string;
  thumbnailImageHash?: string;
  faviconImageHash?: string;
  thumbnailImageWidth?: number;
  thumbnailImageHeight?: number;
}
interface Viewport$1 {
  canvasSpaceBounds?: Rect;
  pixelPreview?: boolean;
  pixelDensity?: number;
  canvasGuid?: GUID;
}
interface Mouse {
  cursor?: MouseCursor;
  canvasSpaceLocation?: Vector;
  canvasSpaceSelectionBox?: Rect;
  canvasGuid?: GUID;
  cursorHiddenReason?: number;
}
interface Click {
  id: number;
  point: Vector;
}
interface ScrollPosition {
  node: GUID;
  scrollOffset: Vector;
}
interface TriggeredOverlay {
  overlayGuid: GUID;
  hotspotGuid: GUID;
  swapGuid: GUID;
}
interface TriggeredOverlayData {
  overlayGuid?: GUID;
  hotspotGuid?: GUID;
  swapGuid?: GUID;
  prototypeInteractionGuid?: GUID;
  hotspotBlueprintId?: GUIDPath;
}
interface TriggeredSetVariableActionData {
  nodeForFindingTopmostScreenId?: GUID;
  targetVariableId?: string;
  targetVariableData?: string;
  resolvedVariableModes?: string;
}
interface TriggeredSetVariableModeActionData {
  nodeForFindingTopmostScreenId?: GUID;
  targetVariableSetKey?: string;
  targetVariableModeId?: string;
  targetVariableSetId?: VariableSetID;
}
interface VideoStateChangeData {
  targetNodeId?: GUID;
  isPlaying?: boolean;
  isPlayingSound?: boolean;
  currentTimes?: number[];
  actionTakenTimestamp?: number;
}
interface EmbeddedPrototypeData {
  nodeId?: GUID;
  sessionId?: number;
}
interface PresentedState {
  baseScreenID?: GUID;
  overlays?: TriggeredOverlayData[];
}
interface TopLevelPlaybackChange {
  oldState?: PresentedState;
  newState?: PresentedState;
  hotspotBlueprintID?: GUIDPath;
  interactionID?: GUID;
  isHotspotInNewPresentedState?: boolean;
  direction?: TransitionDirection;
  instanceStablePath?: GUIDPath;
}
interface InstanceStateChange {
  stateID?: GUID;
  interactionID?: GUID;
  hotspotStablePath?: GUIDPath;
  instanceStablePath?: GUIDPath;
  phase?: PlaybackChangePhase;
}
interface TextCursor {
  selectionBox?: Rect;
  canvasGuid?: GUID;
  textNodeGuid?: GUID;
}
interface TextSelection {
  selectionBoxes?: Rect[];
  canvasGuid?: GUID;
  textNodeGuid?: GUID;
  textSelectionRange?: Vector;
  textNodeOrContainingIfGuid?: GUID;
  tableCellRowId?: GUID;
  tableCellColId?: GUID;
}
interface PlaybackChangeKeyframe {
  phase?: PlaybackChangePhase;
  progress?: number;
  timestamp?: number;
}
interface StateMapping {
  stablePath?: GUIDPath;
  lastTopLevelChange?: TopLevelPlaybackChange;
  lastTopLevelChangeStatus?: PlaybackChangeKeyframe;
  timestamp?: number;
}
interface ScrollMapping {
  blueprintID?: GUIDPath;
  overlayIndex?: number;
  scrollOffset?: Vector;
}
interface PlaybackUpdate {
  lastTopLevelChange?: TopLevelPlaybackChange;
  lastTopLevelChangeStatus?: PlaybackChangeKeyframe;
  scrollMappings?: ScrollMapping[];
  timestamp?: number;
  pointerLocation?: Vector;
  isTopLevelFrameChange?: boolean;
  stateMappings?: StateMapping[];
}
interface ChatMessage {
  text?: string;
  previousText?: string;
}
interface VoiceMetadata {
  connectedCallId?: string;
}
interface AprilFunCursor {
  id?: string;
  trailEnabled?: boolean;
}
interface AprilFunFigPal {
  customization?: string;
  name?: string;
}
interface UserChange {
  sessionID?: number;
  stableSessionID?: string;
  connected?: boolean;
  name?: string;
  color?: Color$1;
  imageURL?: string;
  viewport?: Viewport$1;
  mouse?: Mouse;
  selection?: GUID[];
  observing?: number[];
  deviceName?: string;
  recentClicks?: Click[];
  scrollPositions?: ScrollPosition[];
  triggeredOverlays?: TriggeredOverlay[];
  userID?: string;
  lastTriggeredHotspot?: GUID;
  lastTriggeredPrototypeInteractionID?: GUID;
  lastTriggeredObjectAnimationIndex?: number;
  triggeredOverlaysData?: TriggeredOverlayData[];
  playbackUpdates?: PlaybackUpdate[];
  chatMessage?: ChatMessage;
  voiceMetadata?: VoiceMetadata;
  canWrite?: boolean;
  highFiveStatus?: boolean;
  instanceStateChanges?: InstanceStateChange[];
  textCursor?: TextCursor;
  textSelection?: TextSelection;
  connectedAtTimeS?: number;
  focusOnTextCursor?: boolean;
  heartbeat?: Heartbeat;
  triggeredSetVariableActionData?: TriggeredSetVariableActionData[];
  videoStateChangeData?: VideoStateChangeData[];
  clientID?: string;
  focusedSlideId?: GUID;
  triggeredSetVariableModeActionData?: TriggeredSetVariableModeActionData[];
  aprilFunCursor?: AprilFunCursor;
  embeddedPrototypeData?: EmbeddedPrototypeData[];
  activeSlidesEmbeddablePrototype?: GUID;
  activeEmbeddedPrototypes?: GUID[];
  activeCodeComponentId?: GUID;
  aprilFunFigPal?: AprilFunFigPal;
  collaborativeTextSelection?: CollaborativeTextSelection;
  sitesViewState?: SitesViewState;
  nodeChatExchanges?: NodeChatExchange[];
  designFullPageViewState?: DesignFullPageViewState;
}
interface InteractiveSlideElementChange {
  userID?: string;
  anonymousUserID?: string;
  nodeID?: GUID;
  responseData?: string;
}
interface NodeStatusChange {
  nodeIds?: GUID[];
  statusInfo?: SectionStatusInfo;
}
interface SceneGraphQuery {
  startingNode?: GUID;
  depth?: number;
  behavior?: SceneGraphQueryBehavior;
}
interface NodeChangesMetadata {
  blobsFieldOffset?: number;
}
interface CursorReaction {
  imageUrl?: string;
}
interface TimerInfo {
  isPaused?: boolean;
  timeRemainingMs?: number;
  totalTimeMs?: number;
  timerID?: number;
  setBy?: string;
  songID?: number;
  lastReceivedSongTimestampMs?: number;
  songUUID?: string;
}
interface MusicInfo {
  isPaused?: boolean;
  messageID?: number;
  songID?: string;
  lastReceivedSongTimestampMs?: number;
  isStopped?: boolean;
}
interface PresenterNomination {
  sessionID?: number;
  isCancelled?: boolean;
}
interface PresenterInfo {
  sessionID?: number;
  nomination?: PresenterNomination;
  isReconnected?: boolean;
}
interface ClientBroadcast {
  sessionID?: number;
  cursorReaction?: CursorReaction;
  timer?: TimerInfo;
  presenter?: PresenterInfo;
  prototypePresenter?: PresenterInfo;
  music?: MusicInfo;
}
interface Message {
  type?: MessageType;
  sessionID?: number;
  stableSessionID?: string;
  ackID?: number;
  isRetransmission?: boolean;
  nodeChanges?: NodeChange[];
  userChanges?: UserChange[];
  interactiveSlideElementChange?: InteractiveSlideElementChange;
  nodeStatusChange?: NodeStatusChange;
  blobs?: Blob[];
  blobBaseIndex?: number;
  signalName?: string;
  access?: Access;
  styleSetName?: string;
  styleSetType?: StyleSetType;
  styleSetContentType?: StyleSetContentType;
  pasteID?: number;
  pasteOffset?: Vector;
  pasteFileKey?: string;
  signalPayload?: string;
  sceneGraphQueries?: SceneGraphQuery[];
  nodeChangesMetadata?: NodeChangesMetadata;
  fileVersion?: number;
  pasteIsPartiallyOutsideEnclosingFrame?: boolean;
  pastePageId?: GUID;
  isCut?: boolean;
  localUndoStack?: Message[];
  localRedoStack?: Message[];
  broadcasts?: ClientBroadcast[];
  reconnectSequenceNumber?: number;
  pasteBranchSourceFileKey?: string;
  pasteEditorType?: EditorType;
  postSyncActions?: string;
  publishedAssetGuids?: GUID[];
  dirtyFromInitialLoad?: boolean;
  clipboardSelectionRegions?: ClipboardSelectionRegion[];
  encodedOffsetsIndex?: EncodedOffsetsIndex;
  hasRepeatingContent?: boolean;
  sentTimestamp?: bigint;
  annotationCategories?: AnnotationCategory[];
  clientRenderedMetadata?: ClientRenderedMetadata;
  pasteAssetType?: PasteAssetType;
  objectAnimations?: ObjectAnimationList;
}
interface EncodedOffsetsIndex {
  nodeChangesFieldOffset?: number;
  nodeChangesFieldLength?: number;
  blobsFieldOffset?: number;
  nodeChangeOffsets?: GUIDAndEncodedOffset[];
}
interface GUIDAndEncodedOffset {
  guid: GUID;
  offset: number;
}
interface RichMediaData {
  mediaHash?: string;
  richMediaType?: RichMediaType;
}
interface VariableAnyValue {
  boolValue?: boolean;
  textValue?: string;
  floatValue?: number;
  alias?: VariableID;
  colorValue?: Color$1;
  expressionValue?: Expression;
  mapValue?: VariableMap;
  symbolIdValue?: SymbolId;
  fontStyleValue?: VariableFontStyle;
  textDataValue?: TextData;
  nodeFieldAliasValue?: NodeFieldAlias;
  cmsAliasValue?: CMSAlias;
  propRefValue?: PropRefValue;
  imageValue?: ImageParameterValue;
  managedStringAliasValue?: ManagedStringAlias;
  linkValue?: Hyperlink;
  jsRuntimeAliasValue?: JsRuntimeAlias;
  slotContentIdValue?: SlotContentId;
  keyframeTrackIdValue?: KeyframeTrackId;
  keyframeTrackParameterValue?: KeyframeTrackParameterValue;
}
interface Expression {
  expressionFunction?: ExpressionFunction;
  expressionArguments?: VariableData[];
}
interface VariableMapValue {
  key?: string;
  value?: VariableData;
  guidKey?: GUID;
}
interface VariableMap {
  values?: VariableMapValue[];
}
interface VariableFontStyle {
  asString?: VariableData;
  asFloat?: VariableData;
  asVariations?: VariableData;
}
interface ImageParameterValue {
  image?: Image;
  imageThumbnail?: Image;
  animatedImage?: Image;
  altText?: string;
  originalImageHeight?: number;
  originalImageWidth?: number;
  animationFrame?: number;
}
interface ThumbnailInfo {
  nodeID?: GUID;
  thumbnailVersion?: string;
}
interface AiCanvasPrompt {
  userPrompt?: string;
  authorId?: string;
  parentNodeIds?: GUID[];
}
interface NodeFieldAlias {
  stablePathToNode?: GUIDPath;
  nodeField?: NodeFieldAliasType;
  indexOrKey?: string;
}
interface CMSAlias {
  collectionId?: string;
  itemId?: string;
  fieldId?: string;
  type?: VariableDataType;
}
interface JsRuntimeAlias {
  lookupKey?: string;
}
interface PropRefValue {
  defId?: GUID;
}
interface ManagedStringId {
  guid?: GUID;
  assetRef?: AssetRef;
}
interface ManagedStringPlaceholderMapEntry {
  key?: string;
  value?: string;
}
interface SlotContentId {
  guid?: GUID;
}
interface ManagedStringAlias {
  managedStringId?: ManagedStringId;
  placeholderValues?: ManagedStringPlaceholderMapEntry[];
}
interface KeyframeTrackId {
  guid?: GUID;
  assetRef?: AssetRef;
}
interface AnimationPresetId {
  guid?: GUID;
  assetRef?: AssetRef;
}
interface TRSSTransform2D {
  translation?: Vector;
  rotation?: number;
  scale?: Vector;
  shearX?: number;
}
interface VariableData {
  value?: VariableAnyValue;
  dataType?: VariableDataType;
  resolvedDataType?: VariableResolvedDataType;
}
interface VariableSetMode {
  id?: GUID;
  name?: string;
  sortPosition?: string;
  parentVariableSetId?: VariableSetID;
  parentModeId?: GUID;
}
interface VariableDataValues {
  entries?: VariableDataValuesEntry[];
}
interface VariableDataValuesEntry {
  modeID?: GUID;
  variableData?: VariableData;
}
interface KeyframeAnyValue {
  floatValue?: number;
}
interface KeyframeValueData {
  value?: KeyframeAnyValue;
  valueType?: KeyframeValueType;
}
interface ManualKeyframeTrackParameter {
  keyframeTrackId?: KeyframeTrackId;
}
interface AnimationPresetKeyframeTrackParameter {
  animationPresetId?: AnimationPresetId;
  keyframeTrackId?: KeyframeTrackId;
}
interface KeyframeTrackAnyParameter {
  manual?: ManualKeyframeTrackParameter;
  animationPreset?: AnimationPresetKeyframeTrackParameter;
}
interface KeyframeTrackParameter {
  value?: KeyframeTrackAnyParameter;
  type?: KeyframeTrackParameterType;
}
interface KeyframeTrackParameterValue {
  parameters?: KeyframeTrackParameter[];
}
interface AnimationPresets {
  presets?: AnimationPresetData[];
}
interface AnimationPresetData {
  animationPresetId?: AnimationPresetId;
}
interface SpringParams {
  stiffness?: number;
  damping?: number;
  mass?: number;
}
interface TransitionEasingAnyValue {
  springEasing?: SpringParams;
  bezierEasing?: BezierHandles;
}
interface EasingData {
  easingType?: EasingType;
  easingValue?: TransitionEasingAnyValue;
}
interface TransitionOverride {
  id?: GUID;
  duration?: number;
  durationVar?: VariableData;
  delay?: number;
  delayVar?: VariableData;
  easing?: EasingData;
  easingVar?: VariableData;
}
interface TransitionOverrideData {
  all?: TransitionOverride[];
}
interface OptionalVector {
  value?: Vector;
}
interface MigrationStatus {
  dsdCleanup?: boolean;
}
interface ARIAAttributeAnyValue {
  boolValue?: boolean;
  stringValue?: string;
  floatValue?: number;
  intValue?: number;
  stringArrayValue?: string[];
}
interface ARIAAttributeData {
  type?: ARIAAttributeDataType;
  value?: ARIAAttributeAnyValue;
}
interface ARIAAttributesMap {
  entries?: ARIAAttributesMapEntry[];
}
interface ARIAAttributesMapEntry {
  attribute?: string;
  value?: ARIAAttributeData;
}
interface HandoffStatusMapEntry {
  guid?: GUID;
  handoffStatus?: SectionStatusInfo;
}
interface HandoffStatusMap {
  entries?: HandoffStatusMapEntry[];
}
interface EditScopeInfo {
  editScopeStacks?: EditScopeStack[];
  snapshots?: EditScopeSnapshot[];
}
interface EditScopeSnapshot {
  frames?: EditScopeStack[];
  nodeChangeFieldNumbers?: number[];
}
interface EditScopeStack {
  stack?: EditScope[];
}
interface EditScope {
  type?: EditScopeType;
  label?: string;
  editorType?: EditorType;
}
interface SectionPresetInfo {
  shelfId?: bigint;
  templateId?: bigint;
  templateName?: string;
  state?: SectionPresetState;
}
interface ClipboardSelectionRegion {
  parent?: GUID;
  nodes?: GUID[];
  enclosingFrameOffset?: Vector;
  pasteIsPartiallyOutsideEnclosingFrame?: boolean;
  focusType?: SelectionRegionFocusType;
}
interface FirstDraftKit {
  key?: string;
  type?: FirstDraftKitType;
}
interface FirstDraftData {
  generationId?: string;
  kit?: FirstDraftKit;
}
interface FirstDraftKitElementData {
  type?: FirstDraftKitElementType;
}
interface PlatformShapePropertyMapEntry {
  property?: PlatformShapeProperty;
  nodePaths?: GUIDPath[];
}
interface PlatformShapeDefinition {
  propertyMapEntries?: PlatformShapePropertyMapEntry[];
  behaviorType?: PlatformShapeBehaviorType;
  thumbnailNode?: GUIDPath;
}
interface NodeBehaviors {
  link?: LinkBehavior;
  appear?: AppearBehavior;
  hover?: HoverBehavior;
  press?: PressBehavior;
  focus?: FocusBehavior;
  scrollParallax?: ScrollParallaxBehavior;
  scrollTransform?: ScrollTransformBehavior;
  cursor?: CursorBehavior;
  marquee?: MarqueeBehavior;
  code?: CodeBehavior[];
}
interface BehaviorTransition {
  easingType?: EasingType;
  easingFunction?: number[];
  transitionDuration?: number;
  delay?: number;
  transitionDurationVar?: VariableData;
  delayVar?: VariableData;
}
interface AppearBehavior {
  trigger?: AppearBehaviorTrigger;
  direction?: RelativeDirection;
  otherLayer?: GUID;
  enterTransition?: BehaviorTransition;
  enterState?: NodeChange;
  exitTransition?: BehaviorTransition;
  exitState?: NodeChange;
  playsOnce?: boolean;
  playsOnceVar?: VariableData;
}
interface HoverBehavior {
  transition?: BehaviorTransition;
  state?: NodeChange;
}
interface PressBehavior {
  transition?: BehaviorTransition;
  state?: NodeChange;
}
interface FocusBehavior {
  transition?: BehaviorTransition;
  state?: NodeChange;
}
interface ScrollParallaxBehavior {
  axis?: ScrollDirection;
  speed?: number;
  relativeToPage?: boolean;
  speedVar?: VariableData;
}
interface ScrollTransformBehavior {
  trigger?: ScrollTransformBehaviorTrigger;
  otherLayer?: GUID;
  transition?: BehaviorTransition;
  fromState?: NodeChange;
  toState?: NodeChange;
  playsOnce?: boolean;
  playsOnceVar?: boolean;
  playsOnceVar2?: VariableData;
}
interface CursorBehavior {
  hotspotX?: number;
  hotspotY?: number;
  cursorGuid?: GUID;
}
interface MarqueeBehavior {
  direction?: RelativeDirection;
  speed?: number;
  shouldLoopInfinitely?: boolean;
  speedVar?: VariableData;
  shouldLoopInfinitelyVar?: VariableData;
  pauseOnHover?: VariableData;
}
interface CodeBehavior {
  codeComponentId?: CodeComponentId;
  componentPropAssignments?: ComponentPropAssignment[];
}
interface ClientRenderedMetadata {
  loadID?: string;
  trackingSessionId?: string;
  trackingSessionSequenceId?: number;
  reconnectID?: string;
}
interface LinkBehavior {
  type?: LinkBehaviorType;
  url?: string;
  page?: GUID;
  openInNewWindow?: boolean;
}
interface VariableIdOrVariableOverrideId {
  variableId?: VariableID;
  variableOverrideId?: VariableOverrideId;
}
interface SlideThemeData {
  themeID?: ThemeID;
  version?: string;
}
interface NodeChatMessage {
  id?: GUID;
  type?: NodeChatMessageType;
  userId?: string;
  textContent?: string;
  sentAt?: number;
  toolCalls?: NodeChatToolCall[];
  toolResults?: NodeChatToolResult[];
  sentAt64?: bigint;
}
interface NodeChatToolCall {
  toolCallId?: string;
  toolName?: string;
  argsJson?: string;
}
interface NodeChatToolResult {
  toolCallId?: string;
  toolName?: string;
  resultJson?: string;
}
interface NodeChatExchange {
  node?: GUID;
  messages?: NodeChatMessage[];
  isTyping?: boolean;
  fileUpdates?: FileUpdate[];
}
interface NodeChatCompressionState {
  startIndex?: number;
  summary?: string;
}
interface FileUpdate {
  name?: string;
  contents?: string;
}
interface AIChatContentPart {
  type?: AIChatContentPartType;
  value?: AIChatContentPartAnyValue;
}
interface AIChatContentPartAnyValue {
  textValue?: string;
  selectedNodeIds?: string[];
}
interface AIChatMessage {
  createdAtMs?: number;
  role?: AIChatMessageRole;
  content?: AIChatContentPart[];
  clientId?: string;
  createdAtMs64?: bigint;
}
interface AIChatThread {
  messages?: AIChatMessage[];
}
interface CooperTemplateData {
  type?: CooperTemplateType;
}
interface ImageImportMap {
  imports?: ImageImport[];
}
interface ImageImport {
  name?: string;
  image?: Image;
}
interface BezierHandles {
  p1x?: number;
  p1y?: number;
  p2x?: number;
  p2y?: number;
}
//#endregion
//#region ../grida-canvas-io-figma/lib.d.ts
declare namespace iofigma {
  /**
   * custom structs for bridging difference between rest api spec, kiwi spec and plugin sdk spec.
   */
  namespace __ir {
    /**
     * ## HasLayoutTraitIR (extended layout trait)
     *
     * Figma’s REST API spec (`@figma/rest-api-spec`) defines `HasLayoutTrait` and includes
     * `preserveRatio?: boolean`, but it **does not** carry the richer aspect-ratio payload that
     * exists in other Figma sources (notably the Plugin SDK and the `.fig` Kiwi schema).
     *
     * - **REST API**: `preserveRatio?: boolean` (flag only; no target ratio vector)
     * - **Kiwi (.fig / clipboard)**: `proportionsConstrained?: boolean` and `targetAspectRatio?: OptionalVector`
     * - **Plugin SDK**: `targetAspectRatio?: Vector` (but `constrainProportions` is deprecated)
     *
     * We keep the REST surface area as the baseline, and extend it with `targetAspectRatio`
     * so downstream conversion can use a single aligned shape:
     *
     * - Use **`preserveRatio`** (REST field) as the normalized “locked” flag.
     * - Use **`targetAspectRatio`** (IR-only) as the normalized ratio vector when available.
     */
    type HasLayoutTraitIR = figrest.HasLayoutTrait & {
      /**
       * Normalized target aspect ratio vector (w, h) when the source provides it.
       *
       * NOTE: This is **not** part of the REST API spec as of `@figma/rest-api-spec@0.35.0`.
       */
      targetAspectRatio?: figrest.Vector;
    };
    /**
     * Vector network shape returned by the Figma REST API as an **undocumented, volatile** field
     * on VECTOR nodes when the file is requested with `geometry=paths`.
     *
     * Alongside the well-known `fillGeometry` and `strokeGeometry` (SVG path strings), the API
     * may also include a `vectorNetwork` object with vertices, segments, and regions. This type
     * describes that object. It is not part of the official `@figma/rest-api-spec` and may change
     * or be removed at any time without notice.
     *
     * Use this type only when volatile APIs are enabled (see `disable_volatile_apis`); normalize
     * it to `__ir.VectorNetwork` before using in the import pipeline.
     *
     * @remarks
     * - First observed present in REST responses on **2026-02-17**. The type name is dated so that
     *   future changes to the API can be tracked with a new type if the shape diverges.
     * - As an undocumented volatile API, the response may have minor inconsistencies (e.g.
     *   `windingRule` may be `"EVENODD"` | `"NONZERO"` | `"nonzero"` | `"odd"`). Normalizers should handle all casings.
     *
     * @deprecated Volatile, versioned shape; the type name includes the snapshot date (2026-02-17)
     * so that future API changes can introduce a new type (e.g. 20260301) without breaking callers.
     * Search for "volatile" to locate related code (e.g. disable_volatile_apis) for removal.
     */
    type VectorNetwork_restapi_volatile20260217 = {
      vertices: Array<{
        position: {
          x: number;
          y: number;
        };
        meta?: 0 | unknown;
      }>;
      segments: Array<{
        start: number;
        startTangent: {
          x: number;
          y: number;
        };
        end: number;
        endTangent: {
          x: number;
          y: number;
        };
        meta?: 0 | unknown;
      }>;
      regions: Array<{
        loops: number[][]; /** Volatile API may return inconsistent casing: EVENODD | NONZERO | nonzero | odd */
        windingRule: "EVENODD" | "NONZERO" | "nonzero" | "odd";
        meta?: 0 | unknown;
      }>;
    };
    /**
     * Vector network structure (vertices, segments, regions)
     * Matches the output of parseVectorNetworkBlob from blob-parser
     */
    type VectorNetwork = {
      vertices: Array<{
        styleID: number;
        x: number;
        y: number;
      }>;
      segments: Array<{
        styleID: number;
        start: {
          vertex: number;
          dx: number;
          dy: number;
        };
        end: {
          vertex: number;
          dx: number;
          dy: number;
        };
      }>;
      regions: Array<{
        styleID: number;
        windingRule: "NONZERO" | "ODD";
        loops: Array<{
          segments: number[];
        }>;
      }>;
    };
    /**
     * REST API VECTOR when using geometry=paths. Volatile API may also return vectorNetwork.
     * Use this type when passing REST response nodes that may include the undocumented vectorNetwork field.
     */
    type VectorNodeRestInput = figrest.VectorNode & {
      vectorNetwork?: VectorNetwork_restapi_volatile20260217;
    };
    /**
     * - rest-api-spec - Not supported
     * - kiwi-spec - Supported
     * - plugin-sdk-spec - Supported
     */
    type VectorNodeWithVectorNetworkDataPresent = figrest.CornerRadiusShapeTraits & figrest.AnnotationsTrait & {
      type: "X_VECTOR";
      vectorNetwork: VectorNetwork;
    };
    /**
     * - rest-api-spec - Not supported
     * - kiwi-spec - Supported
     * - plugin-sdk-spec - Supported
     */
    type RegularPolygonNodeWithPointsDataPresent = figrest.CornerRadiusShapeTraits & figrest.AnnotationsTrait & {
      type: "X_REGULAR_POLYGON";
      pointCount: number;
    };
    /**
     * - rest-api-spec - Not supported
     * - kiwi-spec - Supported
     * - plugin-sdk-spec - Supported
     */
    type StarNodeWithPointsDataPresent = figrest.CornerRadiusShapeTraits & figrest.AnnotationsTrait & {
      type: "X_STAR";
      pointCount: number;
      innerRadius: number;
    };
    /**
     * Slide node from Figma Deck (.fig with fig-deck prelude).
     *
     * - rest-api-spec - Not supported (Figma REST API has no Deck/Slides types)
     * - kiwi-spec - SLIDE, INTERACTIVE_SLIDE_ELEMENT
     *
     * Structurally equivalent to a FrameNode (children, fills, clips, layout).
     * INTERACTIVE_SLIDE_ELEMENT is also mapped here since it behaves as a
     * frame-like interactive element within a slide.
     */
    type SlideNodeIR = Omit<figrest.FrameNode, "type"> & {
      type: "X_SLIDE";
      slideMetadata?: {
        speakerNotes?: string;
        isSkipped?: boolean;
        slideNumber?: string;
      };
    };
    /**
     * Slide grid container from Figma Deck.
     *
     * - rest-api-spec - Not supported
     * - kiwi-spec - SLIDE_GRID
     */
    type SlideGridNodeIR = Omit<figrest.FrameNode, "type"> & {
      type: "X_SLIDE_GRID";
    };
    /**
     * Slide row container from Figma Deck.
     *
     * - rest-api-spec - Not supported
     * - kiwi-spec - SLIDE_ROW
     */
    type SlideRowNodeIR = Omit<figrest.FrameNode, "type"> & {
      type: "X_SLIDE_ROW";
    };
    /**
     * Extended noise effect that carries Kiwi-only fields (e.g. `seed`)
     * alongside the standard REST API `NoiseEffect` shape.
     *
     * Kiwi "GRAIN" and "NOISE" are both normalized to `type: "NOISE"` to
     * match the REST spec union (`figrest.Effect`).
     */
    type KiwiNoiseEffect = figrest.NoiseEffect & {
      /** Random seed for reproducible noise; not in the REST spec. */seed?: number;
    };
  }
  namespace restful {
    namespace map {
      const strokeCapMap: Record<NonNullable<figrest.LineNode["strokeCap"]>, cg.StrokeCap | undefined>;
      const strokeJoinMap: Record<NonNullable<figrest.LineNode["strokeJoin"]>, cg.StrokeJoin>;
      const strokeAlignMap: Record<NonNullable<figrest.LineNode["strokeAlign"]>, cg.StrokeAlign | undefined>;
      const textAlignMap: Record<NonNullable<figrest.TypeStyle["textAlignHorizontal"]>, cg.TextAlign | undefined>;
      const textAlignVerticalMap: Record<NonNullable<figrest.TypeStyle["textAlignVertical"]>, cg.TextAlignVertical>;
      const textDecorationMap: Record<NonNullable<figrest.TypeStyle["textDecoration"]>, cg.TextDecorationLine | undefined>;
      const windingRuleMap: Record<figrest.Path["windingRule"], cg.FillRule>;
      /**
       * Figma REST `maskType` → Grida `LayerMaskType`.
       *
       * Figma "VECTOR" = outline/geometry mask; "ALPHA"/"LUMINANCE" map 1:1.
       */
      const maskTypeMap: Record<NonNullable<figrest.HasMaskTrait["maskType"]>, cg.LayerMaskType>;
      const blendModeMap: Record<figrest.BlendMode, cg.BlendMode>;
      const layerBlendModeMap: Record<figrest.BlendMode, cg.LayerBlendMode>;
      /**
       * Normalizes REST API volatile vector network shape to __ir.VectorNetwork.
       * Returns null if the payload is missing, not an array, or has invalid indices.
       */
      function normalizeRestVectorNetworkToIR(rest: __ir.VectorNetwork_restapi_volatile20260217): __ir.VectorNetwork | null;
    }
    namespace factory {
      /**
       * Result of converting Figma REST document to Grida format.
       *
       * - **document**: The packed scene document for insert.
       * - **imageRefsUsed**: Figma image refs that appear in the document and need registration.
       *   Caller should only download/register refs in this set to avoid bloat.
       */
      export interface FigmaImportResult {
        document: grida.program.document.IPackedSceneDocument;
        imageRefsUsed: string[];
      }
      /**
       * Context for the REST document factory.
       *
       * @property node_id_generator - Optional ID generator for Grida node IDs.
       * @property gradient_id_generator - ID generator for gradient definitions.
       * @property resolve_image_src - Resolves a Figma image ref to a runtime src (e.g. res://images/&lt;ref&gt;).
       *   Caller owns resource availability; io-figma does not fetch or validate.
       *   @param imageRef - Figma image reference (hash string from API or Kiwi).
       *   @returns Runtime src string, or null to use placeholder.
       */
      export type FactoryContext = {
        node_id_generator?: () => string;
        gradient_id_generator: () => string;
        /**
         * Resolves a Figma image ref to a runtime src (e.g. res://images/&lt;ref&gt;).
         * Caller owns resource availability; io-figma does not fetch or validate.
         *
         * @param imageRef - Figma image reference (hash string from API or Kiwi).
         * @returns Runtime src string, or null to use placeholder.
         */
        resolve_image_src?: (imageRef: string) => string | null;
        /**
         * When true, use Figma node IDs as Grida node IDs instead of generating new ones.
         * Required for export-by-nodeId from .fig files.
         */
        preserve_figma_ids?: boolean;
        /**
         * When true, disable volatile/undocumented APIs (e.g. REST vectorNetwork on VECTOR nodes).
         * Default false: volatile APIs are enabled; vectorNetwork is used when present.
         * Set to true to always use fillGeometry/strokeGeometry (GroupNode + children) for VECTORs.
         */
        disable_volatile_apis?: boolean;
        /**
         * When true, convert fillGeometry/strokeGeometry to Path nodes (raw SVG path data)
         * instead of Vector nodes (vector network). Use for render-only pipelines (e.g. refig)
         * to avoid vn.fromSVGPathData conversions. Path nodes are not editable in the editor.
         * @default false
         */
        prefer_path_for_geometry?: boolean;
        /**
         * When true, image paints whose ref cannot be resolved via `resolve_image_src`
         * are replaced with a built-in checker pattern placeholder.
         * When false, unresolved refs are kept as `res://images/<ref>` so the lazy
         * image loading system can request them at render time.
         * @default true
         */
        placeholder_for_missing_images?: boolean;
        /**
         * When true, TEXT nodes always use concrete width/height from
         * absoluteBoundingBox, ignoring Figma's `textAutoResize` ("auto"
         * sizing). This produces fixed-size text frames whose dimensions
         * match Figma's rendered output exactly.
         *
         * Use this when the consumer skips layout computation (e.g.
         * `skip_layout` mode) and needs pre-resolved text dimensions.
         *
         * When false (default), TEXT nodes respect `textAutoResize`:
         * "WIDTH_AND_HEIGHT" sets both to auto, "HEIGHT" sets height to
         * auto. These require layout-time text measurement to resolve.
         *
         * **Caveat:** The fixed dimensions come from Figma's own renderer
         * and font metrics. If the rendering environment uses different
         * fonts or a different text shaper, the actual text extent may
         * not match the baked-in size — text may overflow or leave extra
         * whitespace. Only use this flag when font fidelity cannot be
         * guaranteed or when layout computation is explicitly skipped.
         *
         * @default false
         */
        prefer_fixed_text_sizing?: boolean;
        /**
         * When true, map Figma auto-layout frames to Grida flex containers so
         * the layout engine reflows children at render time. A HUG frame then
         * grows/shrinks to fit its content (e.g. swapping in longer text grows
         * the frame), matching Figma's auto-layout — the key feature for
         * templated/dynamic rendering.
         *
         * Specifically, for frames whose `layoutMode` is HORIZONTAL/VERTICAL:
         * - `layout_mode: "flex"` with direction/alignment/wrap/gap/padding
         *   mapped from Figma.
         * - In-flow children (`layoutPositioning !== "ABSOLUTE"`) become
         *   `layout_positioning: "relative"` so Taffy flows them.
         * - HUG axes (`layoutSizingHorizontal/Vertical === "HUG"`) become
         *   `"auto"` so the axis sizes to content.
         *
         * Requires layout computation at render time (the renderer default).
         * Do NOT combine with `skip_layout` — that path trusts baked positions
         * and would ignore the flex layout.
         *
         * **Limitations (approximated):** `FILL` sizing keeps the baked size
         * (no per-child `flex-grow` in the schema yet) and per-child cross-axis
         * stretch / `BASELINE` alignment fall back to `start`.
         *
         * When false (default), every node is emitted absolutely positioned
         * from its baked bounding box — a faithful, non-reflowing snapshot.
         * @default false
         */
        prefer_auto_layout?: boolean;
        /**
         * When true, disable faux-list rendering for TEXT nodes.
         *
         * By default (`false`), Figma list metadata (`lineTypes`,
         * `lineIndentations`) is converted into inline bullet/number
         * prefixes and whitespace indentation baked into the text string.
         * This is a **lossy, one-shot approximation** — the faux
         * formatting is only correct at import time. Subsequent text
         * edits (reflow, line insertion/deletion, copy-paste) will NOT
         * update the synthetic bullets or numbering because there is no
         * underlying list model to drive them.
         *
         * Set to `true` to skip this transform entirely and preserve the
         * raw text as Figma stores it (without visible bullets/numbers).
         *
         * TODO: Remove this flag once Grida has native list support.
         *
         * @default false
         */
        disable_faux_list?: boolean;
        /**
         * Shared nodes dictionary. When set, `factory.document()` inserts
         * converted nodes here instead of allocating a local `nodes` object.
         */
        _shared_nodes?: Record<string, grida.program.nodes.Node>;
        /**
         * Shared links (parent→children) dictionary.
         */
        _shared_links?: Record<string, string[]>;
        /**
         * Shared mutable set for collecting image refs used across all roots.
         */
        _shared_image_refs_used?: Set<string>;
        /**
         * Shared Figma-ID → Grida-ID map. Avoids per-root Map allocations
         * when converting many root nodes.
         */
        _shared_figma_id_map?: Map<string, string>;
      };
      type InputNode = (figrest.SubcanvasNode & Partial<__ir.HasLayoutTraitIR>) | __ir.VectorNodeRestInput | __ir.VectorNodeWithVectorNetworkDataPresent | __ir.StarNodeWithPointsDataPresent | __ir.RegularPolygonNodeWithPointsDataPresent | __ir.SlideNodeIR | __ir.SlideGridNodeIR | __ir.SlideRowNodeIR;
      export function document(node: InputNode, images: {
        [key: string]: string;
      }, context: FactoryContext): FigmaImportResult;
      /**
       * Context for {@link slidesDocument} — the Figma Deck (`.deck`) import path.
       *
       * Intentionally a narrow subset of {@link FactoryContext}; keeps the
       * slides entry point decoupled from design-import internals.
       */
      export type SlidesFactoryContext = Pick<FactoryContext, "node_id_generator" | "gradient_id_generator" | "resolve_image_src" | "preserve_figma_ids" | "placeholder_for_missing_images" | "prefer_fixed_text_sizing">;
      /**
       * Convert a Figma Deck IR tree into a Grida Slides document.
       *
       * This is a **separate entry point** from {@link document}:
       *
       * 1. Walks the IR tree to collect `X_SLIDE` nodes (skipping
       *    `X_SLIDE_GRID` / `X_SLIDE_ROW` wrappers).
       * 2. For each slide, constructs a `TrayNode` from its properties.
       * 3. Converts each slide's children via {@link document} (the
       *    standard design-import pipeline, untouched).
       * 4. Assembles a single scene whose root children are trays.
       *
       * @param rootNode - The page's root IR node (typically an X_SLIDE_GRID)
       * @param images   - Image reference map (forwarded to `document()`)
       * @param context  - Slides factory context
       */
      export function slidesDocument(rootNode: InputNode, images: {
        [key: string]: string;
      }, context: SlidesFactoryContext): FigmaImportResult;
      export {};
    }
  }
  /**
   * Namespace for converting Kiwi format (from .fig files and clipboard) to Figma REST API types
   */
  namespace kiwi {
    /**
     * Convert Kiwi GUID to string ID
     * Format: `sessionID:localID`
     */
    function guid(kiwi: {
      sessionID: number;
      localID: number;
    }): string;
    namespace map {
      /**
       * Kiwi `MaskType` → Figma REST `maskType`.
       * Kiwi uses "OUTLINE" where REST uses "VECTOR".
       */
      const kiwiMaskTypeToRestMap: Record<MaskType, NonNullable<figrest.HasMaskTrait["maskType"]>>;
      /**
       * Convert Kiwi figrest.BlendMode to Figma REST API BlendMode
       * Defaults to "PASS_THROUGH"
       */
      function blendMode(kiwi: BlendMode$1 | undefined): figrest.BlendMode;
      /**
       * Convert Kiwi StrokeAlign to Figma REST API StrokeAlign
       */
      function strokeAlign(kiwi: StrokeAlign): "INSIDE" | "OUTSIDE" | "CENTER";
      /**
       * Convert Kiwi StrokeCap to Figma REST API StrokeCap
       */
      function strokeCap(kiwi: StrokeCap): figrest.LineNode["strokeCap"];
      /**
       * Convert Kiwi StrokeJoin to Figma REST API StrokeJoin
       */
      function strokeJoin(kiwi: StrokeJoin): "MITER" | "BEVEL" | "ROUND";
    }
    namespace factory {
      /**
       * Convert Kiwi figrest.Paint to Figma REST API Paint
       */
      function paint(kiwi: Paint$1): figrest.Paint | undefined;
      /**
       * Convert array of Kiwi Paints to Figma REST API Paints
       */
      function paints(kiwiPaints?: Paint$1[]): figrest.Paint[];
      /**
       * Main converter: NodeChange → SubcanvasNode or IR node
       *
       * Converts a Kiwi NodeChange to Figma REST API SubcanvasNode or intermediate representation (IR) node.
       * This enables the conversion pipeline: Kiwi → Figma IR → Grida
       *
       * @param nodeChange Kiwi NodeChange from .fig file or clipboard
       * @param message Message containing blobs array (required for vector network parsing)
       * @returns Figma REST API compatible node, IR node, or undefined if unsupported/invalid
       */
      function node(nodeChange: NodeChange, message: Message): figrest.SubcanvasNode | __ir.VectorNodeWithVectorNetworkDataPresent | __ir.StarNodeWithPointsDataPresent | __ir.RegularPolygonNodeWithPointsDataPresent | __ir.SlideNodeIR | __ir.SlideGridNodeIR | __ir.SlideRowNodeIR | undefined;
    }
    type BuildTreeOptions = {
      /**
       * Fallback behavior for environments that do not support a real component/instance system.
       *
       * When enabled, `INSTANCE` nodes are turned into normal container trees by inlining/cloning
       * the referenced `SYMBOL` subtree (resolved via `INSTANCE.symbolData.symbolID -> SYMBOL.guid`).
       *
       * This is primarily needed for clipboard payloads where the `SYMBOL` definition lives under
       * an internal-only canvas (`CANVAS.internalOnly === true`).
       */
      flattenInstances?: boolean;
    };
    /**
     * Union of all node types returned by the Kiwi factory.
     *
     * Every member carries at least `id` (from `IsLayerTrait`) and a
     * discriminant `type` string. Frame-like nodes additionally carry
     * `children`.
     */
    type AnyFigmaNode = NonNullable<ReturnType<typeof iofigma.kiwi.factory.node>> & {
      id: string;
    };
    /**
     * Build a clipboard-friendly root node list (Kiwi NodeChanges → REST nodes with hierarchy).
     *
     * - Builds hierarchy using `parentIndex.guid` and sorts by `parentIndex.position`.
     * - When `options.flattenInstances === true`, `INSTANCE` nodes inline/clone referenced `SYMBOL` subtrees.
     */
    function buildClipboardRootNodes(params: {
      nodeChanges: NodeChange[];
      message: Message;
      options?: BuildTreeOptions;
    }): AnyFigmaNode[];
    /**
     * Namespace for .fig file import functionality
     */
    interface FigFileDocument {
      pages: FigPage[];
      metadata: {
        version: number;
      };
      /** ZIP contents from the .fig archive (for extractImages etc.). */
      zip_files?: {
        [key: string]: Uint8Array;
      };
    }
    interface FigPage {
      name: string;
      canvas: NodeChange;
      rootNodes: AnyFigmaNode[];
      /**
       * Sort key from parentIndex.position (fractional index string)
       * Use this to sort pages to preserve original Figma order.
       * Compare by codepoint: pageA.sortkey < pageB.sortkey ? -1 : pageA.sortkey > pageB.sortkey ? 1 : 0
       * Examples: "!", "Qd&", "QeU", "Qf"
       */
      sortkey: string;
    }
    /**
     * Parse and extract pages from a .fig file
     * @param fileData - The .fig file as Uint8Array
     * @returns Document with pages ready for import
     *
     * Default behaviour: `flattenInstances: true`. Without this, `INSTANCE`
     * nodes in the returned tree have no children (Kiwi parents them under
     * the `SYMBOL` definition via parentIndex, not under the instance itself),
     * so every instance renders as an empty frame. The clipboard entry point
     * already defaults to `flattenInstances: true`; `.fig` rendering needs
     * the same default. Callers that want the un-flattened shape can opt out
     * explicitly with `{ flattenInstances: false }`.
     */
    function parseFile(fileData: Uint8Array, options?: BuildTreeOptions): FigFileDocument;
    /**
     * Parse and extract pages from a .fig file stream.
     * Supports .fig (ZIP) archives larger than 2GB by streaming instead of loading into memory.
     * @param stream - Async iterable of Uint8Array chunks (e.g. Node Readable, fetch body)
     * @returns Document with pages ready for import
     *
     * Default behaviour: same as {@link parseFile} — `flattenInstances: true`.
     */
    function parseFileFromStream(stream: AsyncIterable<Uint8Array>, options?: BuildTreeOptions): Promise<FigFileDocument>;
    /**
     * Extract images from .fig ZIP archive.
     * @param zipFiles - Raw ZIP contents from FigFileDocument.zip_files or ParsedFigmaArchive.zip_files
     * @returns Map of hash (hex string) to image bytes
     */
    function extractImages(zipFiles: {
      [key: string]: Uint8Array;
    } | undefined): Map<string, Uint8Array>;
    /**
     * Convert page to single packed document (bulk insert to avoid reducer nesting).
     * Returns {@link restful.factory.FigmaImportResult} with merged document and imageRefsUsed.
     */
    function convertPageToScene(page: FigPage, context: iofigma.restful.factory.FactoryContext): iofigma.restful.factory.FigmaImportResult;
    /**
     * Convert a `.deck` page into a Grida Slides scene.
     *
     * Like {@link convertPageToScene}, but uses `slidesDocument()` so that
     * `X_SLIDE` nodes become trays and `X_SLIDE_GRID` / `X_SLIDE_ROW`
     * wrappers are skipped (children promoted).
     */
    function convertPageToSlidesScene(page: FigPage, context: iofigma.restful.factory.SlidesFactoryContext): iofigma.restful.factory.FigmaImportResult;
    /**
     * @deprecated Use iofigma.kiwi.parseFile() instead
     * Legacy class-based API for backward compatibility
     */
    class FigImporter {
      static parseFile(fileData: Uint8Array, options?: BuildTreeOptions): FigFileDocument;
      static convertPageToScene(page: FigPage, context: iofigma.restful.factory.FactoryContext): iofigma.restful.factory.FigmaImportResult;
    }
  }
}
//#endregion
//#region lib.d.ts
type RefigRenderFormat = "png" | "jpeg" | "webp" | "pdf" | "svg";
interface RefigRendererOptions {
  /**
   * When enabled, the renderer loads the embedded default fonts.
   * @default true
   */
  useEmbeddedFonts?: boolean;
  /**
   * When true (default), the renderer ensures Figma default fonts (Inter, Noto Sans KR/JP/SC, etc.)
   * are loaded from CDN and registered with the canvas before any scene is loaded.
   * Reduces tofu for mixed-script and CJK text. Set to false to skip (e.g. to avoid network or use only embedded fonts).
   * Custom fonts remain the user's responsibility.
   * @default true
   */
  loadFigmaDefaultFonts?: boolean;
  /**
   * Map of Figma image ref (hash) to image bytes.
   * Used for REST API and .fig input so IMAGE fills render correctly.
   * Ref must match document references (e.g. 40-char hex for .fig, Figma image fill hash for REST).
   */
  images?: Record<string, Uint8Array>;
  /**
   * Custom fonts keyed by family name. Use the family name returned by
   * `listFontFamilies()` (e.g. from Figma's `style.font_family`). Pass one or
   * more font files per family; the canvas resolves the correct face per
   * text style. Skip Figma defaults (Inter, Noto Sans KR/JP/SC, etc.) —
   * those are loaded by `loadFigmaDefaultFonts`.
   */
  fonts?: Record<string, Uint8Array | Uint8Array[]>;
  /**
   * When true, map Figma auto-layout frames to flex containers and let the
   * renderer reflow them, instead of rendering the baked snapshot geometry.
   * A HUG auto-layout frame then grows/shrinks to fit its content — so
   * substituting longer/shorter text reflows correctly (templated rendering).
   *
   * Only affects REST API / `.fig` documents with auto-layout frames. When
   * false (default), the render is a faithful snapshot of Figma's baked
   * bounds. See `prefer_auto_layout` in `@grida/io-figma` for the precise
   * mapping and limitations (FILL sizing and per-child cross-axis stretch are
   * approximated).
   * @default false
   */
  reflowAutoLayout?: boolean;
}
interface RefigRenderOptions {
  format: RefigRenderFormat;
  width?: number;
  height?: number;
  scale?: number;
}
interface RefigRenderResult {
  data: Uint8Array;
  format: RefigRenderFormat;
  mimeType: string;
  nodeId: string;
  width: number;
  height: number;
}
type FigmaJsonDocument = Record<string, unknown>;
type FigFileDocument$1 = ReturnType<typeof iofigma.kiwi.parseFile>;
declare class FigmaDocument {
  readonly sourceType: "fig-file" | "rest-api-json";
  /**
   * For "fig-file" this is the raw bytes (Uint8Array) or a pre-parsed FigFileDocument
   * (e.g. from parseFileFromStream for large ZIP files).
   * For "rest-api-json" this is the parsed REST API document JSON.
   */
  readonly payload: Uint8Array | FigmaJsonDocument | FigFileDocument$1;
  /** Cached parsed FigFile (.fig only). */
  private _figFile?;
  /**
   * Cache of ResolvedScene per rootNodeId. REST with images is not cached.
   * Bounded to avoid unbounded memory growth in --export-all flows.
   */
  private _sceneCache;
  /** Max cached scenes; evicts LRU when exceeded. */
  private static readonly _MAX_SCENE_CACHE;
  /**
   * @param input Raw `.fig` bytes (Uint8Array), a pre-parsed FigFileDocument
   *              (e.g. from parseFileFromStream for large files), or REST JSON.
   *
   * For file-path convenience in Node, use `FigmaDocument.fromFile()` from
   * the `@grida/refig` entrypoint.
   */
  constructor(input: Uint8Array | FigmaJsonDocument | FigFileDocument$1);
  /**
   * Resolve document to Grida IR (scene JSON + images to register).
   * On-demand, cached when deterministic (no images for REST).
   * Cache is bounded (LRU eviction) to avoid OOM in --export-all flows.
   * @internal
   */
  _resolve(rootNodeId?: string, images?: Record<string, Uint8Array>, preferAutoLayout?: boolean): ResolvedScene;
  private _sceneCacheGet;
  private _sceneCacheSet;
  /** @internal */
  private _restToScene;
  /** @internal */
  private _figToScene;
  /**
   * Returns the list of font family names used in this document.
   *
   * The result is family names only — no weights, PostScript names, or other metadata.
   * That is intentional: in practice, you can load all TTF/OTF files for each family
   * (variable or static) and pass them to the renderer; it will resolve the correct face
   * per text style. We prioritize simple usage and accurate font selection over
   * performance or resource-optimized patterns.
   *
   * When rootNodeId is omitted, traverses all pages so fonts from every page are included.
   *
   * @param rootNodeId — Optional. When provided, scope to that node's subtree. Omit for the full document (all pages).
   * @returns Unique font family names (e.g. `["Inter", "Caveat", "Roboto"]`).
   */
  listFontFamilies(rootNodeId?: string): string[];
  private _collectFontFamiliesFromDocument;
}
declare function resolveMimeType(format: RefigRenderFormat): string;
type RestNode = Record<string, unknown> & {
  id?: string;
  children?: RestNode[];
};
/** One export to perform: a node and one of its Figma export settings. */
interface ExportItem {
  nodeId: string;
  node: RestNode;
  setting: ExportSetting;
}
/**
 * Walk the REST document and collect every (node, exportSetting) for nodes that have exportSettings.
 * Follows Figma HasExportSettingsTrait; one ExportItem per setting per node.
 */
declare function collectExportsFromDocument(json: FigmaJsonDocument): ExportItem[];
/**
 * Map a Figma ExportSetting and node bounds to RefigRenderOptions.
 * Constraint SCALE → scale; WIDTH/HEIGHT → width/height from constraint value and node aspect ratio.
 */
declare function exportSettingToRenderOptions(node: RestNode, setting: ExportSetting): RefigRenderOptions;
/**
 * Resolved scene: Grida IR ready for canvas load.
 * @internal
 */
interface ResolvedScene {
  document: grida.program.document.Document;
  images: Record<string, Uint8Array>;
  imageRefsUsed?: string[];
}
/**
 * Build a REST-like document structure from .fig bytes for export collection.
 * Wraps page.rootNodes in document/children so collectExportsFromDocument can walk it.
 */
declare class FigmaRenderer {
  readonly document: FigmaDocument;
  readonly options: RefigRendererOptions;
  private _canvas;
  private _sceneLoaded;
  /** When set, scene is built with this node as root (REST only). Cleared when nodeId changes. */
  private _requestedNodeId;
  constructor(document: FigmaDocument | FigmaJsonDocument, options?: RefigRendererOptions);
  private ensureCanvas;
  private loadScene;
  render(nodeId: string, renderOptions: RefigRenderOptions): Promise<RefigRenderResult>;
  /**
   * Release the underlying WASM canvas.
   * After calling this the renderer must not be used again.
   */
  dispose(): void;
}
//#endregion
export { RefigRenderOptions as a, collectExportsFromDocument as c, RefigRenderFormat as i, exportSettingToRenderOptions as l, FigmaDocument as n, RefigRenderResult as o, FigmaRenderer as r, RefigRendererOptions as s, ExportItem as t, resolveMimeType as u };