import type { CommandH } from '@s2cf/svg';
import { createHlineTo, HlineTo } from '@s2cf/ttx';

type HorizontalLineToContext = { x: number };

export const horizontalLineTo = (
    { relative, x }: CommandH,
    { x: x0 }: HorizontalLineToContext,
): [HlineTo, HorizontalLineToContext] => {
    const [dx, x1] = relative ? [x, x0 + x] : [x - x0, x];
    return [createHlineTo({ dx }), { x: x1 }];
};
