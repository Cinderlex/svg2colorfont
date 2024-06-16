import { CommandH, CommandL, CommandM, CommandV, SVGCommand, SVGPathData } from 'svg-pathdata';

/**
 * Currently assuming 960x960 svg with integer coordinates and specific subset of *relative* svg path commands
 */
export const pathDataToCff = (commands: SVGCommand[]) => {
    /**
     * FIXME: don't add rmoveto when the sequence already starts with the valid first stack-clearing operator
     * (hstem, hstemhm, vstem, vstemhm, cntrmask, hintmask, hmoveto, vmoveto, rmoveto, endchar)
     * https://adobe-type-tools.github.io/font-tech-notes/pdfs/5177.Type2.pdf | 4.1 | Note 4
     */
    return `0 0 rmoveto ${commands
        .map(command => {
            switch (command.type) {
                case SVGPathData.MOVE_TO:
                    return convertMoveTo(command);
                case SVGPathData.HORIZ_LINE_TO:
                    return convertHorizontalLineTo(command);
                case SVGPathData.VERT_LINE_TO:
                    return convertVerticalLineTo(command);
                case SVGPathData.LINE_TO:
                    return convertLineTo(command);
                default:
                    throw new Error(`Unsupported command: ${command.type}`);
            }
        })
        .join(' ')} endchar`;
};

const convertMoveTo = ({ x, y }: CommandM) => `${x} ${y} rmoveto`;
const convertHorizontalLineTo = ({ x }: CommandH) => `${x} hlineto`;
const convertVerticalLineTo = ({ y }: CommandV) => `${y} vlineto`;
const convertLineTo = ({ x, y }: CommandL) => `${x} ${y} rlineto`;
