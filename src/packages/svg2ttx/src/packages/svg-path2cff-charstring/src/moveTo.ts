import type { CommandM } from '@s2cf/svg';
import { createRmoveTo, RmoveTo } from '@s2cf/ttx';

type MoveToContext = { x: number; y: number };

export const moveTo = ({ relative, x, y }: CommandM, { x: x0, y: y0 }: MoveToContext): [RmoveTo, MoveToContext] => {
    const [dx, dy, x1, y1] = relative ? [x, y, x0 + x, y0 + y] : [x - x0, y - y0, x, y];
    return [createRmoveTo({ dx, dy }), { x: x1, y: y1 }];
};
