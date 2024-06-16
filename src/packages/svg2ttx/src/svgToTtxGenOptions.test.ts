import { SvgSchemaOutput } from '@svg2colorfont/svg';
import { TtxGenerationProps } from '@svg2colorfont/ttx';
import { svgToTtxGenOptions } from './svgToTtxGenOptions.ts';

describe('svgToTtxGenOptions', () => {
    it('Should convert svg to ttx generation options', () => {
        const svgSchemas: SvgSchemaOutput[] = [
            {
                svg: {
                    '@_width': 960,
                    '@_height': 960,
                    'path': [
                        {
                            '@_fill': '#FFFF00',
                            '@_d': 'v960h480v-960',
                        },
                        {
                            '@_fill': '#0000FF',
                            '@_d': 'm480,0v960h480v-960',
                        },
                    ],
                },
            },
            {
                svg: {
                    '@_width': 960,
                    '@_height': 960,
                    'path': [
                        {
                            '@_fill': '#00FF00',
                            '@_d': 'm0,480v480h960v-480',
                        },
                        {
                            '@_fill': '#0000FF',
                            '@_d': 'v480h960v-480',
                        },
                    ],
                },
            },
        ];
        const resultOptions: TtxGenerationProps = {
            subroutines: [],
            cffCharStrings: [
                { name: 'glyph0.layer0', text: '0 0 rmoveto 960 vlineto 480 hlineto -960 vlineto endchar' },
                {
                    name: 'glyph0.layer1',
                    text: '0 0 rmoveto 480 0 rmoveto 960 vlineto 480 hlineto -960 vlineto endchar',
                },
                { name: 'glyph0', text: 'endchar' },
                {
                    name: 'glyph1.layer0',
                    text: '0 0 rmoveto 0 480 rmoveto 480 vlineto 960 hlineto -480 vlineto endchar',
                },
                { name: 'glyph1.layer1', text: '0 0 rmoveto 480 vlineto 960 hlineto -480 vlineto endchar' },
                { name: 'glyph1', text: 'endchar' },
            ],
            paletteColors: [
                { index: 0, value: '#FFFF00' },
                { index: 1, value: '#0000FF' },
                { index: 2, value: '#00FF00' },
            ],
            colorGlyphs: [
                {
                    name: 'glyph0',
                    layers: [
                        { name: 'glyph0.layer0', colorId: 0 },
                        { name: 'glyph0.layer1', colorId: 1 },
                    ],
                },
                {
                    name: 'glyph1',
                    layers: [
                        { name: 'glyph1.layer0', colorId: 2 },
                        { name: 'glyph1.layer1', colorId: 1 },
                    ],
                },
            ],
        };
        expect(JSON.stringify(svgToTtxGenOptions(svgSchemas))).toBe(JSON.stringify(resultOptions));
    });
});
