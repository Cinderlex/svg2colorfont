import { type SVGCommand } from '@s2cf/svg';
import { pathDataToCff } from './pathDataToCff.ts';

describe('pathDataToCff', () => {
    it.skip('Should convert svg path data to css charstring', () => {
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        expect(result.map(({ serialize, ...rest }) => rest)).toEqual([
            { type: 'rmoveto', dx: 100, dy: 100 },
            { type: 'hlineto', dx: 500 },
            { type: 'vlineto', dy: 500 },
            { type: 'rlineto', dx: -500, dy: 0 },
        ]);
    });
});
