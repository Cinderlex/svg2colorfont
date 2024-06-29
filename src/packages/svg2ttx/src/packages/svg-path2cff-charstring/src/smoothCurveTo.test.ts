import { smoothCurveTo } from './smoothCurveTo.ts';
import { SVGCommandTypes } from '@s2cf/svg';
import { extractReturnData } from './utils.ts';

describe('smoothCurveTo', () => {
    it('Should correctly convert relative smooth curve to with non-curve previous command', () => {
        const rrcurveto = smoothCurveTo(
            {
                x2: 25,
                y2: 5,
                x: 10,
                y: 20,
                relative: true,
                type: SVGCommandTypes.SMOOTH_CURVE_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: { type: SVGCommandTypes.MOVE_TO, relative: true, x: 100, y: 200 },
                previousContext: { x: 0, y: 0 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 0, dy1: 0, dx2: 25, dy2: 5, dx: -15, dy: 15 },
            { x: 110, y: 220 },
        ]);
    });

    it('Should correctly convert absolute smooth curve to with non-curve previous command', () => {
        const rrcurveto = smoothCurveTo(
            {
                x2: 25,
                y2: 5,
                x: 10,
                y: 20,
                relative: false,
                type: SVGCommandTypes.SMOOTH_CURVE_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: { type: SVGCommandTypes.MOVE_TO, relative: true, x: 100, y: 200 },
                previousContext: { x: 0, y: 0 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 0, dy1: 0, dx2: -75, dy2: -195, dx: -15, dy: 15 },
            { x: 10, y: 20 },
        ]);
    });

    it('Should correctly convert relative smooth curve to with relative curve previous command', () => {
        const rrcurveto = smoothCurveTo(
            {
                x2: 25,
                y2: 5,
                x: 10,
                y: 20,
                relative: true,
                type: SVGCommandTypes.SMOOTH_CURVE_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: {
                    type: SVGCommandTypes.CURVE_TO,
                    relative: true,
                    x1: 20,
                    y1: 30,
                    x2: 80,
                    y2: 10,
                    x: 90,
                    y: 190,
                },
                previousContext: { x: 10, y: 10 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 10, dy1: 180, dx2: 15, dy2: -175, dx: -15, dy: 15 },
            { x: 110, y: 220 },
        ]);
    });

    it('Should correctly convert absolute smooth curve to with relative curve previous command', () => {
        const rrcurveto = smoothCurveTo(
            {
                x2: 25,
                y2: 5,
                x: 10,
                y: 20,
                relative: false,
                type: SVGCommandTypes.SMOOTH_CURVE_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: {
                    type: SVGCommandTypes.CURVE_TO,
                    relative: true,
                    x1: 20,
                    y1: 30,
                    x2: 80,
                    y2: 10,
                    x: 90,
                    y: 190,
                },
                previousContext: { x: 10, y: 10 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 10, dy1: 180, dx2: -85, dy2: -375, dx: -15, dy: 15 },
            { x: 10, y: 20 },
        ]);
    });

    it('Should correctly convert relative smooth curve to with absolute curve previous command', () => {
        const rrcurveto = smoothCurveTo(
            {
                x2: 25,
                y2: 5,
                x: 10,
                y: 20,
                relative: true,
                type: SVGCommandTypes.SMOOTH_CURVE_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: {
                    type: SVGCommandTypes.CURVE_TO,
                    relative: false,
                    x1: 30,
                    y1: 40,
                    x2: 90,
                    y2: 20,
                    x: 100,
                    y: 200,
                },
                previousContext: { x: 10, y: 10 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 10, dy1: 180, dx2: 15, dy2: -175, dx: -15, dy: 15 },
            { x: 110, y: 220 },
        ]);
    });

    it('Should correctly convert absolute smooth curve to with absolute curve previous command', () => {
        const rrcurveto = smoothCurveTo(
            {
                x2: 25,
                y2: 5,
                x: 10,
                y: 20,
                relative: false,
                type: SVGCommandTypes.SMOOTH_CURVE_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: {
                    type: SVGCommandTypes.CURVE_TO,
                    relative: false,
                    x1: 30,
                    y1: 40,
                    x2: 90,
                    y2: 20,
                    x: 100,
                    y: 200,
                },
                previousContext: { x: 10, y: 10 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 10, dy1: 180, dx2: -85, dy2: -375, dx: -15, dy: 15 },
            { x: 10, y: 20 },
        ]);
    });
});
