import { SvgGeometry } from '@s2cf/svg';
import { ColorGlyphLayer, TtxGenerationProps } from '@s2cf/ttx';
import { pathDataToCff } from './pathDataToCff.ts';

/**
 * Currently assuming 960x960 svg with integer coordinates and specific subset of *relative* svg path commands
 */
export const svgToTtxGenOptions = (svgs: SvgGeometry[]): TtxGenerationProps => {
    const options: TtxGenerationProps = {
        subroutines: [],
        cffCharStrings: [],
        paletteColors: [],
        colorGlyphs: [],
    };
    const palette = new Map<string, number>();
    svgs.forEach((svg, i) => {
        const glyphName = `glyph${i}`;
        const colorGlyphLayers: ColorGlyphLayer[] = [];
        svg.path.forEach((path, j) => {
            const layerName = `layer${j}`;
            if (!palette.has(path.fill)) {
                palette.set(path.fill, palette.size);
            }
            const colorId = palette.get(path.fill)!;
            const pathData = path.d;
            const charString = pathDataToCff(pathData);
            const name = `${glyphName}.${layerName}`;
            options.cffCharStrings.push({ name, text: charString });
            colorGlyphLayers.push({ name, colorId });
        });
        options.cffCharStrings.push({ name: glyphName, text: 'endchar' });
        options.colorGlyphs.push({ name: glyphName, layers: colorGlyphLayers });
    });
    options.paletteColors = [...palette.entries()].map(([value, index]) => ({ index, value }));
    return options;
};
