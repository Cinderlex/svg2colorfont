import type { CommandL } from '@s2cf/svg';
import { createRlineTo, RlineTo } from '@s2cf/ttx';

type LineToContext = { x: number; y: number };

export const lineTo = ({ relative, x, y }: CommandL, { x: x0, y: y0 }: LineToContext): [RlineTo, LineToContext] => {
    const [dx, dy, x1, y1] = relative ? [x, y, x0 + x, y0 + y] : [x - x0, y - y0, x, y];
    return [createRlineTo({ dx, dy }), { x: x1, y: y1 }];
};
