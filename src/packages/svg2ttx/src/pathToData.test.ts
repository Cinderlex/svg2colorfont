import { pathToData } from './pathToData.ts';

describe('pathToData', () => {
    it('Should parse svg path data correctly', () => {
        const commands = pathToData('M10,10H60V60L10,60Z');
        expect(commands.length).toBe(5);
    });
});
