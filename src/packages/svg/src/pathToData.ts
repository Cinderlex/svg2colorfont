import { SVGCommand, SVGPathData } from 'svg-pathdata';

// Path string is assumed to be correct
export const pathToData = (data: string): SVGCommand[] => {
    const { commands } = new SVGPathData(data);
    return commands;
};
