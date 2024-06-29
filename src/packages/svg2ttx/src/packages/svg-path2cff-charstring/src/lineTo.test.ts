import { lineTo } from './lineTo.ts';
import { SVGCommandTypes } from '@s2cf/svg';
import { extractReturnData } from './utils.ts';

describe('lineTo', () => {
    it('Should correctly convert relative line to', () => {
        const rlineto = lineTo(
            { x: 10, y: 20, relative: true, type: SVGCommandTypes.LINE_TO },
            {
                x: 100,
                y: 200,
            },
        );
        expect(extractReturnData(rlineto)).toEqual([
            { type: 'rlineto', dx: 10, dy: 20 },
            { x: 110, y: 220 },
        ]);
    });

    it('Should correctly convert absolute line to', () => {
        const rlineto = lineTo(
            { x: 10, y: 300, relative: false, type: SVGCommandTypes.LINE_TO },
            {
                x: 100,
                y: 200,
            },
        );
        expect(extractReturnData(rlineto)).toEqual([
            { type: 'rlineto', dx: -90, dy: 100 },
            { x: 10, y: 300 },
        ]);
    });
});
