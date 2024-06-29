import { closePath } from './closePath.ts';
import { extractReturnData } from './utils.ts';

describe('closePath', () => {
    it('Should close path correctly', () => {
        const rlineto = closePath({ x: 100, y: 50, pathStart: { x: 10, y: 200 } });
        expect(extractReturnData(rlineto)).toEqual([
            { type: 'rlineto', dx: -90, dy: 150 },
            { x: 10, y: 200 },
        ]);
    });
});
