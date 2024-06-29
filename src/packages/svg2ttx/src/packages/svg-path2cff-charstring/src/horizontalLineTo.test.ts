import { horizontalLineTo } from './horizontalLineTo.ts';
import { SVGCommandTypes } from '@s2cf/svg';
import { extractReturnData } from './utils.ts';

describe('horizontalLineTo', () => {
    it('Should correctly convert relative horizontal line to', () => {
        const hlineto = horizontalLineTo(
            {
                x: 10,
                relative: true,
                type: SVGCommandTypes.HORIZ_LINE_TO,
            },
            { x: 100 },
        );
        expect(extractReturnData(hlineto)).toEqual([{ type: 'hlineto', dx: 10 }, { x: 110 }]);
    });

    it('Should correctly convert absolute horizontal line to', () => {
        const hlineto = horizontalLineTo(
            {
                x: 10,
                relative: false,
                type: SVGCommandTypes.HORIZ_LINE_TO,
            },
            { x: 100 },
        );
        expect(extractReturnData(hlineto)).toEqual([{ type: 'hlineto', dx: -90 }, { x: 10 }]);
    });
});
