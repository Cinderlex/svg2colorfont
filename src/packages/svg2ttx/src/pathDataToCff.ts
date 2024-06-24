import { SVGCommandTypes, CommandH, CommandL, CommandM, CommandV, SVGCommand } from '@s2cf/svg';

/**
 * Currently assuming 960x960 svg with integer coordinates and specific subset of *relative* svg path commands
 */
export const pathDataToCff = (commands: SVGCommand[]) => {
    return `${commands
        .map(command => {
            switch (command.type) {
                case SVGCommandTypes.MOVE_TO:
                    return convertMoveTo(command);
                case SVGCommandTypes.HORIZ_LINE_TO:
                    return convertHorizontalLineTo(command);
                case SVGCommandTypes.VERT_LINE_TO:
                    return convertVerticalLineTo(command);
                case SVGCommandTypes.LINE_TO:
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
