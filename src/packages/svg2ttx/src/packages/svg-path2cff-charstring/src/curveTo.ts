import type { CommandC } from '@s2cf/svg';
import { createRrcurveTo, RrcurveTo } from '@s2cf/ttx';

type CurveToContext = { x: number; y: number };

export const curveTo = (
    { relative, x1, y1, x2, y2, x, y }: CommandC,
    { x: x0, y: y0 }: CurveToContext,
): [RrcurveTo, CurveToContext] => {
    const [dx1, dy1, dx2, dy2, dx, dy, cx, cy] = relative
        ? [x1, y1, x2 - x1, y2 - y1, x - x2, y - y2, x0 + x, y0 + y]
        : [x1 - x0, y1 - y0, x2 - x1, y2 - y1, x - x2, y - y2, x, y];
    return [createRrcurveTo({ dx1, dy1, dx2, dy2, dx, dy }), { x: cx, y: cy }];
};
