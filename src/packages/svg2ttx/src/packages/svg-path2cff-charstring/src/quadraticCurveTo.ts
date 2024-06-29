import type { CommandQ } from '@s2cf/svg';
import { createRrcurveTo, RrcurveTo } from '@s2cf/ttx';

type QuadraticCurveToContext = { x: number; y: number };

export const quadraticCurveTo = (
    { relative, x1, y1, x, y }: CommandQ,
    { x: x0, y: y0 }: QuadraticCurveToContext,
): [RrcurveTo, QuadraticCurveToContext] => {
    const [dx1, dy1, dx2, dy2, dx, dy, cx, cy] = relative
        ? [x1, y1, 0, 0, x - x1, y - y1, x0 + x, y0 + y]
        : [x1 - x0, y1 - y0, 0, 0, x - x1, y - y1, x, y];
    return [createRrcurveTo({ dx1, dy1, dx2, dy2, dx, dy }), { x: cx, y: cy }];
};
