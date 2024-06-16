import { parseSvg } from './parseSvg.ts';
import { isLeft, isRight } from '@svg2colorfont/utils';

describe('parseSvg', () => {
    it('Should parse a valid svg', () => {
        const validSvg = {
            svg: {
                '@_width': '24',
                '@_height': '24',
                'path': [
                    {
                        '@_fill': '#464655',
                        '@_d': 'M5.25 0A5.25 5.25 0 0 0 0 5.25v13.5C0 21.65 2.35 24 5.25 24H8V0z',
                    },
                    {
                        '@_fill': '#FF4B55',
                        '@_d': 'M16 0H8v24h8z',
                    },
                    {
                        '@_fill': '#73AF00',
                        '@_d': 'M24 18.75V5.25C24 2.35 21.65 0 18.75 0H16v24h2.75c2.9 0 5.25-2.35 5.25-5.25',
                    },
                ],
            },
        };
        expect(isRight(parseSvg(validSvg))).toBe(true);
    });

    it('Should fail on an invalid svg', () => {
        const invalidSvg = {
            svg: {
                '@_width': '24',
                '@_height': '24',
                'path': [
                    {
                        '@_fill': '#464655',
                        '@_d': 'M5.25 0A5.25 5.25 0 0 0 0 5.25v13.5C0 21.65 2.35 24 5.25 24H8V0z',
                    },
                    {
                        '@_fill': '#FF4B55',
                    },
                    {
                        '@_fill': '#73AF00',
                        '@_d': 'M24 18.75V5.25C24 2.35 21.65 0 18.75 0H16v24h2.75c2.9 0 5.25-2.35 5.25-5.25',
                    },
                ],
            },
        };
        expect(isLeft(parseSvg(invalidSvg))).toBe(true);
    });
});
