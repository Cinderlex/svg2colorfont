import { type CommandT, type SVGCommand, SVGCommandTypes } from '@s2cf/svg';
import { createRrcurveTo, RrcurveTo } from '@s2cf/ttx';

type SmoothQuadraticCurveToContext = {
    x: number;
    y: number;
    previousCommand: SVGCommand;
    lastRrcurveTo: Omit<RrcurveTo, 'serialize'>;
    previousContext: { x: number; y: number };
};

type SmoothQuadraticCurveToContextCoordinates = { x: number; y: number };

export const smoothQuadraticCurveTo = (
    { relative, x, y }: CommandT,
    {
        x: x0,
        y: y0,
        previousCommand,
        lastRrcurveTo,
        previousContext: { x: x00, y: y00 },
    }: SmoothQuadraticCurveToContext,
): [RrcurveTo, SmoothQuadraticCurveToContextCoordinates] => {
    const getFirstBezierPoint = (): [number, number] => {
        // TODO: check if cubic curve control point can serve the same purpose while preceding quadratic curve
        if (previousCommand.type === SVGCommandTypes.QUAD_TO) {
            const [x01Absolute, y01Absolute] = previousCommand.relative
                ? [x00 + previousCommand.x1, y00 + previousCommand.y1]
                : [previousCommand.x1, previousCommand.y1];
            return [x0 - x01Absolute, y0 - y01Absolute];
        }
        if (previousCommand.type === SVGCommandTypes.SMOOTH_QUAD_TO) {
            const x01Absolute = x00 + lastRrcurveTo.dx1;
            const y01Absolute = y00 + lastRrcurveTo.dy1;
            return [x0 - x01Absolute, y0 - y01Absolute];
        }
        return [0, 0];
    };
    const [dx1, dy1] = getFirstBezierPoint();
    const [dx2, dy2, dx, dy, cx, cy] = relative
        ? [0, 0, x - dx1, y - dy1, x0 + x, y0 + y]
        : [0, 0, x - dx1 - x0, y - dy1 - y0, x, y];
    return [createRrcurveTo({ dx1, dy1, dx2, dy2, dx, dy }), { x: cx, y: cy }];
};
