import { type SVGCommand } from '@s2cf/svg';
import { pathDataToCff } from './pathDataToCff.ts';

describe('pathDataToCff', () => {
    it('Should convert svg path data to css charstring', () => {
        const svgPathDataDecoded: SVGCommand[] = [
            { type: 2, relative: true, x: 100, y: 100 },
            {
                type: 4,
                relative: true,
                x: 500,
            },
            { type: 8, relative: true, y: 500 },
            { type: 16, relative: true, x: -500, y: 0 },
        ];
        const result = pathDataToCff(svgPathDataDecoded);
        expect(result).toBe('100 100 rmoveto 500 hlineto 500 vlineto -500 0 rlineto endchar');
    });
});
