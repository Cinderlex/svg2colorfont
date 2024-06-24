import { type Either, isLeft, type Json, right } from '@s2cf/utils';
import { parseSvg, type SvgParsingError } from './parseSvg.ts';
import { type SVGCommand } from 'svg-pathdata';
import { pathToData } from './pathToData.ts';

export type Color = string;

export type PathGeometry = {
    fill: Color;
    d: SVGCommand[];
};

export type SvgGeometry = {
    width: number;
    height: number;
    path: PathGeometry[];
};

export const parse = (parsedXml: Json): Either<SvgParsingError, SvgGeometry> => {
    const parsedSvg = parseSvg(parsedXml);
    if (isLeft(parsedSvg)) {
        return parsedSvg;
    }
    const { '@_width': width, '@_height': height, path } = parsedSvg.right;
    const geometry: SvgGeometry = {
        width,
        height,
        path: path.map(({ '@_fill': fill, '@_d': d }) => ({ fill, d: pathToData(d) })),
    };
    return right(geometry);
};
