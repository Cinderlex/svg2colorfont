/**
 * Simplified path constructing operators from https://adobe-type-tools.github.io/font-tech-notes/pdfs/5177.Type2.pdf #4.1
 */

type Serializable = { serialize: () => string };

type RmoveToArgs = { dx: number; dy: number };
export type RmoveTo = { type: 'rmoveto' } & RmoveToArgs & Serializable;
export const createRmoveTo = ({ dx, dy }: RmoveToArgs): RmoveTo => ({
    type: 'rmoveto',
    dx,
    dy,
    serialize: () => `${dx} ${dy} rmoveto`,
});

type RlineToArgs = { dx: number; dy: number };
export type RlineTo = { type: 'rlineto' } & RlineToArgs & Serializable;
export const createRlineTo = ({ dx, dy }: RlineToArgs): RlineTo => ({
    type: 'rlineto',
    dx,
    dy,
    serialize: () => `${dx} ${dy} rlineto`,
});

type HlineToArgs = { dx: number };
export type HlineTo = { type: 'hlineto' } & HlineToArgs & Serializable;
export const createHlineTo = ({ dx }: HlineToArgs): HlineTo => ({
    type: 'hlineto',
    dx,
    serialize: () => `${dx} hlineto`,
});

type VlineToArgs = { dy: number };
export type VlineTo = { type: 'vlineto' } & VlineToArgs & Serializable;
export const createVlineTo = ({ dy }: VlineToArgs): VlineTo => ({
    type: 'vlineto',
    dy,
    serialize: () => `${dy} vlineto`,
});

type RrcurveToArgs = {
    dx1: number;
    dy1: number;
    dx2: number;
    dy2: number;
    dx: number;
    dy: number;
};
export type RrcurveTo = { type: 'rrcurveto' } & RrcurveToArgs & Serializable;
export const createRrcurveTo = ({ dx1, dy1, dx2, dy2, dx, dy }: RrcurveToArgs): RrcurveTo => ({
    type: 'rrcurveto',
    dx1,
    dy1,
    dx2,
    dy2,
    dx,
    dy,
    serialize: () => `${dx1} ${dy1} ${dx2} ${dy2} ${dx} ${dy} rrcurveto`,
});

export type CharStringOperator = RmoveTo | RlineTo | HlineTo | VlineTo | RrcurveTo;
