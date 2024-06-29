import { type CommandS, type SVGCommand, SVGCommandTypes } from '@s2cf/svg';
import { createRrcurveTo, RrcurveTo } from '@s2cf/ttx';

type SmoothCurveToContext = {
    x: number;
    y: number;
    previousCommand: SVGCommand;
    previousContext: { x: number; y: number };
};

type SmoothCurveToContextCoordinates = { x: number; y: number };

export const smoothCurveTo = (
    { relative, x2, y2, x, y }: CommandS,
    { x: x0, y: y0, previousCommand, previousContext: { x: x00, y: y00 } }: SmoothCurveToContext,
): [RrcurveTo, SmoothCurveToContextCoordinates] => {
    const getFirstBezierPoint = (): [number, number] => {
        // TODO: check if quadratic curve control point can serve the same purpose while preceding cubic curve
        if (
            previousCommand.type !== SVGCommandTypes.CURVE_TO &&
            previousCommand.type !== SVGCommandTypes.SMOOTH_CURVE_TO
        ) {
            return [0, 0];
        }
        const [x02Absolute, y02Absolute] = previousCommand.relative
            ? [x00 + previousCommand.x2, y00 + previousCommand.y2]
            : [previousCommand.x2, previousCommand.y2];
        return [x0 - x02Absolute, y0 - y02Absolute];
    };
    const [dx1, dy1] = getFirstBezierPoint();
    const [dx2, dy2, dx, dy, cx, cy] = relative
        ? [x2 - dx1, y2 - dy1, x - x2, y - y2, x0 + x, y0 + y]
        : [x2 - dx1 - x0, y2 - dy1 - y0, x - x2, y - y2, x, y];
    return [createRrcurveTo({ dx1, dy1, dx2, dy2, dx, dy }), { x: cx, y: cy }];
};
