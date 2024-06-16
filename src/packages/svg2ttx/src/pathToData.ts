import { SVGPathData } from 'svg-pathdata';

export const pathToData = (data: string) => {
    const { commands } = new SVGPathData(data);
    return commands;
};
