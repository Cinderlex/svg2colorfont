import { SvgSchemaOutput } from '@svg2colorfont/svg';
import { ColorGlyphLayer, TtxGenerationProps } from '@svg2colorfont/ttx';
import { pathDataToCff } from './pathDataToCff.ts';
import { pathToData } from './pathToData.ts';

/**
 * Currently assuming 960x960 svg with integer coordinates and specific subset of *relative* svg path commands
 */
export const svgToTtxGenOptions = (svgs: SvgSchemaOutput[]): TtxGenerationProps => {
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
        svg.svg.path.forEach((path, j) => {
            const layerName = `layer${j}`;
            if (!palette.has(path['@_fill'])) {
                palette.set(path['@_fill'], palette.size);
            }
            const colorId = palette.get(path['@_fill'])!;
            const pathData = pathToData(path['@_d']);
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
