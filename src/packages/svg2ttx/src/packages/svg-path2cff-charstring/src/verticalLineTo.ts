import type { CommandV } from '@s2cf/svg';
import { createVlineTo, VlineTo } from '@s2cf/ttx';

type VerticalLineToContext = { y: number };

export const verticalLineTo = (
    { relative, y }: CommandV,
    { y: y0 }: VerticalLineToContext,
): [VlineTo, VerticalLineToContext] => {
    const [dy, y1] = relative ? [y, y0 + y] : [y - y0, y];
    return [createVlineTo({ dy }), { y: y1 }];
};
