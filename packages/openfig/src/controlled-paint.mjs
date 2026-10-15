import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const engineDirectory = new URL('../vendor/canvas-wasm/dist/', import.meta.url);
const { createCanvas } = require(fileURLToPath(new URL('index.js', engineDirectory)));

export async function renderControlledSvg({ svg, width, height, probes = [] }) {
  if (typeof svg !== 'string' || !svg.trim()) throw new TypeError('SVG source is required');
  if (![width, height].every(value => Number.isFinite(value) && value > 0)) {
    throw new RangeError('Positive finite source dimensions are required');
  }
  const canvas = await createCanvas({
    backend: 'raster',
    width: Math.ceil(width),
    height: Math.ceil(height),
    useEmbeddedFonts: false,
    config: { skip_layout: true },
    locateFile: filename => fileURLToPath(new URL(filename, engineDirectory)),
  });
  try {
    // The public raster wrapper omits geometry access, which is needed to audit coordinate preservation.
    const scene = canvas._scene;
    if (!scene?.svgkit || typeof scene.getNodeIdPath !== 'function') {
      throw new Error('Installed raster engine does not expose the required scene inspection API');
    }
    const document = scene.svgkit.toDocument(svg);
    canvas.loadSceneGrida(document);
    const sceneIds = canvas.loadedSceneIds();
    if (sceneIds.length !== 1) throw new Error(`Expected one SVG scene, received ${sceneIds.length}`);
    canvas.switchScene(sceneIds[0]);
    const bounds = scene.getNodeAbsoluteBoundingBox('<scene>');
    if (!bounds) throw new Error('SVG scene has no measurable geometry');
    const ids = scene.getNodeIdsFromEnvelope(bounds);
    const nodes = ids.map(id => ({
      id,
      path: scene.getNodeIdPath(id),
      bounds: scene.getNodeAbsoluteBoundingBox(id),
    }));
    const roots = [...new Set(nodes.map(node => node.path?.[1]).filter(Boolean))];
    if (roots.length !== 1) throw new Error(`Expected one SVG root, received ${roots.length}`);
    const rootId = roots[0];
    const rootBounds = scene.getNodeAbsoluteBoundingBox(rootId);
    if (!rootBounds || rootBounds.x !== 0 || rootBounds.y !== 0 ||
        rootBounds.width !== width || rootBounds.height !== height) {
      throw new Error(`Imported SVG viewport differs from source: ${JSON.stringify(rootBounds)}`);
    }
    return {
      backend: canvas.backend,
      sceneIds,
      rootId,
      rootBounds,
      nodes,
      probes: probes.map(([x, y]) => ({ x, y, nodeIds: scene.getNodeIdsFromPoint(x, y) })),
      png: canvas.exportNodeAs(rootId, {
        format: 'PNG', constraints: { type: 'none', value: 1 },
      }).data,
      svg: canvas.exportNodeAs(rootId, { format: 'SVG' }).data,
      document,
    };
  } finally {
    canvas.dispose();
  }
}
