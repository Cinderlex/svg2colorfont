import { createRlineTo, RlineTo } from '@s2cf/ttx';

type ClosePathContext = { x: number; y: number; pathStart: { x: number; y: number } };
type ClosePathCoordinates = { x: number; y: number };

export const closePath = ({ x: x0, y: y0, pathStart: { x, y } }: ClosePathContext): [RlineTo, ClosePathCoordinates] => {
    return [createRlineTo({ dx: x - x0, dy: y - y0 }), { x, y }];
};
