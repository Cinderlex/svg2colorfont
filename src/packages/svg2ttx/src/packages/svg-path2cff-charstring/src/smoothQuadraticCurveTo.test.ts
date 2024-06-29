import { smoothQuadraticCurveTo } from './smoothQuadraticCurveTo.ts';
import { SVGCommandTypes } from '@s2cf/svg';
import { extractReturnData } from './utils.ts';

describe('smoothQuadraticCurveTo', () => {
    it('Should correctly convert relative smooth quadratic curve to with non-curve previous command', () => {
        const rrcurveto = smoothQuadraticCurveTo(
            {
                x: 10,
                y: 20,
                relative: true,
                type: SVGCommandTypes.SMOOTH_QUAD_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: { type: SVGCommandTypes.MOVE_TO, relative: true, x: 100, y: 200 },
                lastRrcurveTo: { type: 'rrcurveto', dx1: 10, dy1: 20, dx2: 60, dy2: 80, dx: 30, dy: 45 },
                previousContext: { x: 0, y: 0 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 0, dy1: 0, dx2: 0, dy2: 0, dx: 10, dy: 20 },
            { x: 110, y: 220 },
        ]);
    });

    it('Should correctly convert absolute smooth quadratic curve to with non-curve previous command', () => {
        const rrcurveto = smoothQuadraticCurveTo(
            {
                x: 10,
                y: 20,
                relative: false,
                type: SVGCommandTypes.SMOOTH_QUAD_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: { type: SVGCommandTypes.MOVE_TO, relative: true, x: 100, y: 200 },
                lastRrcurveTo: { type: 'rrcurveto', dx1: 10, dy1: 20, dx2: 60, dy2: 80, dx: 30, dy: 45 },
                previousContext: { x: 0, y: 0 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 0, dy1: 0, dx2: 0, dy2: 0, dx: -90, dy: -180 },
            { x: 10, y: 20 },
        ]);
    });

    it('Should correctly convert relative smooth quadratic curve to with relative quadratic curve previous command', () => {
        const rrcurveto = smoothQuadraticCurveTo(
            {
                x: 10,
                y: 20,
                relative: true,
                type: SVGCommandTypes.SMOOTH_QUAD_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: {
                    type: SVGCommandTypes.QUAD_TO,
                    relative: true,
                    x1: 20,
                    y1: 30,
                    x: 90,
                    y: 190,
                },
                lastRrcurveTo: { type: 'rrcurveto', dx1: 20, dy1: 30, dx2: 0, dy2: 0, dx: 70, dy: 160 },
                previousContext: { x: 10, y: 10 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 70, dy1: 160, dx2: 0, dy2: 0, dx: -60, dy: -140 },
            { x: 110, y: 220 },
        ]);
    });

    it('Should correctly convert absolute smooth quadratic curve to with relative quadratic curve previous command', () => {
        const rrcurveto = smoothQuadraticCurveTo(
            {
                x: 10,
                y: 20,
                relative: false,
                type: SVGCommandTypes.SMOOTH_QUAD_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: {
                    type: SVGCommandTypes.QUAD_TO,
                    relative: true,
                    x1: 20,
                    y1: 30,
                    x: 90,
                    y: 190,
                },
                lastRrcurveTo: { type: 'rrcurveto', dx1: 20, dy1: 30, dx2: 0, dy2: 0, dx: 70, dy: 160 },
                previousContext: { x: 10, y: 10 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 70, dy1: 160, dx2: 0, dy2: 0, dx: -160, dy: -340 },
            { x: 10, y: 20 },
        ]);
    });

    it('Should correctly convert relative smooth quadratic curve to with absolute quadratic curve previous command', () => {
        const rrcurveto = smoothQuadraticCurveTo(
            {
                x: 10,
                y: 20,
                relative: true,
                type: SVGCommandTypes.SMOOTH_QUAD_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: {
                    type: SVGCommandTypes.QUAD_TO,
                    relative: false,
                    x1: 30,
                    y1: 40,
                    x: 100,
                    y: 200,
                },
                lastRrcurveTo: { type: 'rrcurveto', dx1: 20, dy1: 30, dx2: 0, dy2: 0, dx: 70, dy: 160 },
                previousContext: { x: 10, y: 10 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 70, dy1: 160, dx2: 0, dy2: 0, dx: -60, dy: -140 },
            { x: 110, y: 220 },
        ]);
    });

    it('Should correctly convert absolute smooth quadratic curve to with absolute quadratic curve previous command', () => {
        const rrcurveto = smoothQuadraticCurveTo(
            {
                x: 10,
                y: 20,
                relative: false,
                type: SVGCommandTypes.SMOOTH_QUAD_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: {
                    type: SVGCommandTypes.QUAD_TO,
                    relative: false,
                    x1: 30,
                    y1: 40,
                    x: 100,
                    y: 200,
                },
                lastRrcurveTo: { type: 'rrcurveto', dx1: 20, dy1: 30, dx2: 0, dy2: 0, dx: 70, dy: 160 },
                previousContext: { x: 10, y: 10 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 70, dy1: 160, dx2: 0, dy2: 0, dx: -160, dy: -340 },
            { x: 10, y: 20 },
        ]);
    });

    it('Should correctly convert relative smooth quadratic curve to with relative smooth quadratic curve previous command', () => {
        const rrcurveto = smoothQuadraticCurveTo(
            {
                x: 10,
                y: 20,
                relative: true,
                type: SVGCommandTypes.SMOOTH_QUAD_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: {
                    type: SVGCommandTypes.SMOOTH_QUAD_TO,
                    relative: true,
                    x: 90,
                    y: 190,
                },
                lastRrcurveTo: { type: 'rrcurveto', dx1: 20, dy1: 30, dx2: 0, dy2: 0, dx: 70, dy: 160 },
                previousContext: { x: 10, y: 10 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 70, dy1: 160, dx2: 0, dy2: 0, dx: -60, dy: -140 },
            { x: 110, y: 220 },
        ]);
    });

    it('Should correctly convert absolute smooth quadratic curve to with relative smooth quadratic curve previous command', () => {
        const rrcurveto = smoothQuadraticCurveTo(
            {
                x: 10,
                y: 20,
                relative: false,
                type: SVGCommandTypes.SMOOTH_QUAD_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: {
                    type: SVGCommandTypes.SMOOTH_QUAD_TO,
                    relative: true,
                    x: 90,
                    y: 190,
                },
                lastRrcurveTo: { type: 'rrcurveto', dx1: 20, dy1: 30, dx2: 0, dy2: 0, dx: 70, dy: 160 },
                previousContext: { x: 10, y: 10 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 70, dy1: 160, dx2: 0, dy2: 0, dx: -160, dy: -340 },
            { x: 10, y: 20 },
        ]);
    });

    it('Should correctly convert relative smooth quadratic curve to with absolute smooth quadratic curve previous command', () => {
        const rrcurveto = smoothQuadraticCurveTo(
            {
                x: 10,
                y: 20,
                relative: true,
                type: SVGCommandTypes.SMOOTH_QUAD_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: {
                    type: SVGCommandTypes.SMOOTH_QUAD_TO,
                    relative: false,
                    x: 100,
                    y: 200,
                },
                lastRrcurveTo: { type: 'rrcurveto', dx1: 20, dy1: 30, dx2: 0, dy2: 0, dx: 70, dy: 160 },
                previousContext: { x: 10, y: 10 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 70, dy1: 160, dx2: 0, dy2: 0, dx: -60, dy: -140 },
            { x: 110, y: 220 },
        ]);
    });

    it('Should correctly convert absolute smooth quadratic curve to with absolute smooth quadratic curve previous command', () => {
        const rrcurveto = smoothQuadraticCurveTo(
            {
                x: 10,
                y: 20,
                relative: false,
                type: SVGCommandTypes.SMOOTH_QUAD_TO,
            },
            {
                x: 100,
                y: 200,
                previousCommand: {
                    type: SVGCommandTypes.SMOOTH_QUAD_TO,
                    relative: false,
                    x: 100,
                    y: 200,
                },
                lastRrcurveTo: { type: 'rrcurveto', dx1: 20, dy1: 30, dx2: 0, dy2: 0, dx: 70, dy: 160 },
                previousContext: { x: 10, y: 10 },
            },
        );
        expect(extractReturnData(rrcurveto)).toEqual([
            { type: 'rrcurveto', dx1: 70, dy1: 160, dx2: 0, dy2: 0, dx: -160, dy: -340 },
            { x: 10, y: 20 },
        ]);
    });
});
