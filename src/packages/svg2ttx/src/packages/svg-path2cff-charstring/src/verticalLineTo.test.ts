import { verticalLineTo } from './verticalLineTo.ts';
import { SVGCommandTypes } from '@s2cf/svg';
import { extractReturnData } from './utils.ts';

describe('lineTo', () => {
    it('Should correctly convert relative vertical line to', () => {
        const vlineto = verticalLineTo(
            {
                y: 20,
                relative: true,
                type: SVGCommandTypes.VERT_LINE_TO,
            },
            { y: 200 },
        );
        expect(extractReturnData(vlineto)).toEqual([{ type: 'vlineto', dy: 20 }, { y: 220 }]);
    });

    it('Should correctly convert absolute vertical line to', () => {
        const vlineto = verticalLineTo(
            {
                y: 300,
                relative: false,
                type: SVGCommandTypes.VERT_LINE_TO,
            },
            { y: 200 },
        );
        expect(extractReturnData(vlineto)).toEqual([{ type: 'vlineto', dy: 100 }, { y: 300 }]);
    });
});
