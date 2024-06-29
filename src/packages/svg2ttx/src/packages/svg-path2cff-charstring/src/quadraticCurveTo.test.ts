import { quadraticCurveTo } from './quadraticCurveTo.ts';
import { SVGCommandTypes } from '@s2cf/svg';
import { extractReturnData } from './utils.ts';

describe('quadraticCurveTo', () => {
    it('Should correctly convert relative curve to', () => {
        const rrcurveto = quadraticCurveTo(
            {
                x1: 5,
                y1: 25,
                x: 10,
                y: 20,
                relative: true,
                type: SVGCommandTypes.QUAD_TO,
            },
            { x: 100, y: 200 },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            {
                type: 'rrcurveto',
                dx1: 5,
                dy1: 25,
                dx2: 0,
                dy2: 0,
                dx: 5,
                dy: -5,
            },
            { x: 110, y: 220 },
        ]);
    });

    it('Should correctly convert absolute curve to', () => {
        const rrcurveto = quadraticCurveTo(
            {
                x1: 5,
                y1: 25,
                x: 10,
                y: 20,
                relative: false,
                type: SVGCommandTypes.QUAD_TO,
            },
            { x: 100, y: 200 },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: -95, dy1: -175, dx2: 0, dy2: 0, dx: 5, dy: -5 },
            { x: 10, y: 20 },
        ]);
    });
});
