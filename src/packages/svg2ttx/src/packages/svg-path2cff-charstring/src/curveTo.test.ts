import { curveTo } from './curveTo.ts';
import { SVGCommandTypes } from '@s2cf/svg';
import { extractReturnData } from './utils.ts';

describe('curveTo', () => {
    it('Should correctly convert relative curve to', () => {
        const rrcurveto = curveTo(
            {
                x1: 5,
                y1: 25,
                x2: 25,
                y2: 5,
                x: 10,
                y: 20,
                relative: true,
                type: SVGCommandTypes.CURVE_TO,
            },
            { x: 100, y: 200 },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            {
                type: 'rrcurveto',
                dx1: 5,
                dy1: 25,
                dx2: 20,
                dy2: -20,
                dx: -15,
                dy: 15,
            },
            { x: 110, y: 220 },
        ]);
    });

    it('Should correctly convert absolute curve to', () => {
        const rrcurveto = curveTo(
            {
                x1: 5,
                y1: 25,
                x2: 25,
                y2: 5,
                x: 10,
                y: 20,
                relative: false,
                type: SVGCommandTypes.CURVE_TO,
            },
            { x: 100, y: 200 },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            {
                type: 'rrcurveto',
                dx1: -95,
                dy1: -175,
                dx2: 20,
                dy2: -20,
                dx: -15,
                dy: 15,
            },
            { x: 10, y: 20 },
        ]);
    });
});
