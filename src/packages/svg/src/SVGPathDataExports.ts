export type {
    SVGCommand,
    CommandM,
    CommandL,
    CommandH,
    CommandV,
    CommandZ,
    CommandQ,
    CommandT,
    CommandC,
    CommandS,
    CommandA,
} from 'svg-pathdata';

export const SVGCommandTypes = {
    CLOSE_PATH: 1,
    MOVE_TO: 2,
    HORIZ_LINE_TO: 4,
    VERT_LINE_TO: 8,
    LINE_TO: 16,
    CURVE_TO: 32,
    SMOOTH_CURVE_TO: 64,
    QUAD_TO: 128,
    SMOOTH_QUAD_TO: 256,
    ARC: 512,
} as const;
