import { moveTo } from './moveTo.ts';
import { SVGCommandTypes } from '@s2cf/svg';
import { extractReturnData } from './utils.ts';

describe('moveTo', () => {
    it('Should correctly convert relative move to', () => {
        const rmoveto = moveTo(
            { x: 10, y: 20, relative: true, type: SVGCommandTypes.MOVE_TO },
            {
                x: 100,
                y: 200,
            },
        );
        expect(extractReturnData(rmoveto)).toEqual([
            { type: 'rmoveto', dx: 10, dy: 20 },
            { x: 110, y: 220 },
        ]);
    });

    it('Should correctly convert absolute move to', () => {
        const rmoveto = moveTo(
            { x: 10, y: 300, relative: false, type: SVGCommandTypes.MOVE_TO },
            {
                x: 100,
                y: 200,
            },
        );
        expect(extractReturnData(rmoveto)).toEqual([
            { type: 'rmoveto', dx: -90, dy: 100 },
            { x: 10, y: 300 },
        ]);
    });
});
