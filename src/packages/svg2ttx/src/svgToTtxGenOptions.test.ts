import { SVGCommandTypes, type SvgGeometry } from '@s2cf/svg';
import { type TtxGenerationProps } from '@s2cf/ttx';
import { svgToTtxGenOptions } from './svgToTtxGenOptions.ts';

describe('svgToTtxGenOptions', () => {
    it.skip('Should convert svg to ttx generation options', () => {
        const svgSchemas: SvgGeometry[] = [
            {
                width: 960,
                height: 960,
                path: [
                    {
                        fill: '#FFFF00',
                        d: [
                            {
                                relative: true,
                                type: SVGCommandTypes.MOVE_TO,
                                x: 0,
                                y: 0,
                            },
                            {
                                relative: true,
                                type: SVGCommandTypes.VERT_LINE_TO,
                                y: 960,
                            },
                            {
                                relative: true,
                                type: SVGCommandTypes.HORIZ_LINE_TO,
                                x: 480,
                            },
                            {
                                relative: true,
                                type: SVGCommandTypes.VERT_LINE_TO,
                                y: -960,
                            },
                        ],
                    },
                    {
                        fill: '#0000FF',
                        d: [
                            {
                                relative: true,
                                type: SVGCommandTypes.MOVE_TO,
                                x: 480,
                                y: 0,
                            },
                            {
                                relative: true,
                                type: SVGCommandTypes.VERT_LINE_TO,
                                y: 960,
                            },
                            {
                                relative: true,
                                type: SVGCommandTypes.HORIZ_LINE_TO,
                                x: 480,
                            },
                            {
                                relative: true,
                                type: SVGCommandTypes.VERT_LINE_TO,
                                y: -960,
                            },
                        ],
                    },
                ],
            },
            {
                width: 960,
                height: 960,
                path: [
                    {
                        fill: '#00FF00',
                        d: [
                            {
                                relative: true,
                                type: SVGCommandTypes.MOVE_TO,
                                x: 0,
                                y: 480,
                            },
                            {
                                relative: true,
                                type: SVGCommandTypes.VERT_LINE_TO,
                                y: 480,
                            },
                            {
                                relative: true,
                                type: SVGCommandTypes.HORIZ_LINE_TO,
                                x: 960,
                            },
                            {
                                relative: true,
                                type: SVGCommandTypes.VERT_LINE_TO,
                                y: -480,
                            },
                        ],
                    },
                    {
                        fill: '#0000FF',
                        d: [
                            {
                                relative: true,
                                type: SVGCommandTypes.MOVE_TO,
                                x: 0,
                                y: 0,
                            },
                            {
                                relative: true,
                                type: SVGCommandTypes.VERT_LINE_TO,
                                y: 480,
                            },
                            {
                                relative: true,
                                type: SVGCommandTypes.HORIZ_LINE_TO,
                                x: 960,
                            },
                            {
                                relative: true,
                                type: SVGCommandTypes.VERT_LINE_TO,
                                y: -480,
                            },
                        ],
                    },
                ],
            },
        ];
        const resultOptions: TtxGenerationProps = {
            subroutines: [],
            cffCharStrings: [
                { name: 'glyph0.layer0', text: '0 0 rmoveto 960 vlineto 480 hlineto -960 vlineto endchar' },
                {
                    name: 'glyph0.layer1',
                    text: '480 0 rmoveto 960 vlineto 480 hlineto -960 vlineto endchar',
                },
                { name: 'glyph0', text: 'endchar' },
                {
                    name: 'glyph1.layer0',
                    text: '0 480 rmoveto 480 vlineto 960 hlineto -480 vlineto endchar',
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
