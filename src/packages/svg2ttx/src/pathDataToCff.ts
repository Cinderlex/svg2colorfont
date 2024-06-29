import { SVGCommandTypes, type SVGCommand, type CommandA, SVGPathData } from '@s2cf/svg';
import {
    closePath,
    curveTo,
    horizontalLineTo,
    lineTo,
    moveTo,
    quadraticCurveTo,
    smoothCurveTo,
    smoothQuadraticCurveTo,
    verticalLineTo,
} from '@s2cf/svg-path2cff-charstring';
import { type CharStringOperator, type RrcurveTo } from '@s2cf/ttx';

/**
 * Currently assuming 960x960 svg with integer coordinates and specific subset of svg path commands
 */
export const pathDataToCff = (initialCommands: SVGCommand[]): CharStringOperator[] => {
    let context: Context = {
        x: 0,
        y: 0,
        previousCommand: { relative: false, type: SVGCommandTypes.MOVE_TO, x: 0, y: 0 },
        lastRrcurveTo: { type: 'rrcurveto', dx1: 0, dy1: 0, dx2: 0, dy2: 0, dx: 0, dy: 0 },
        previousContext: { x: 0, y: 0 },
        pathStart: { x: 0, y: 0 },
    };
    // FIXME: remove hardcoded 960
    const svgPathData = new SVGPathData(initialCommands).scale(1, -1).translate(0, 960).aToC();
    const commands = svgPathData.commands as Exclude<SVGCommand, CommandA>[];
    return commands.map(command => {
        const { x, y } = context;
        const [cffCommand, contextCoordinates] = convertCommand(command, context);
        const coordinates = { x: contextCoordinates.x ?? x, y: contextCoordinates.y ?? y };
        context = {
            ...context,
            ...contextCoordinates,
            previousCommand: command,
            lastRrcurveTo: cffCommand.type === 'rrcurveto' ? cffCommand : context.lastRrcurveTo,
            previousContext: { x, y },
            pathStart: command.type === SVGCommandTypes.MOVE_TO ? coordinates : context.pathStart,
        };
        return cffCommand;
    });
};

type Context = {
    x: number;
    y: number;
    previousCommand: SVGCommand;
    lastRrcurveTo: Omit<RrcurveTo, 'serialize'>;
    previousContext: { x: number; y: number };
    pathStart: { x: number; y: number };
};
type ConvertedCommand = [CharStringOperator, Partial<Context>];

const convertCommand = (command: Exclude<SVGCommand, CommandA>, context: Context): ConvertedCommand => {
    /**
     * FIXME: remove smooth functions and use NORMALIZE_ST transformation from svg-pathdata
     * https://github.com/nfroidure/svg-pathdata/blob/master/src/SVGPathDataTransformer.ts#L140
     *
     * FIXME: remove quadratic functions and use QT_TO_C transformation from svg-pathdata
     * https://github.com/nfroidure/svg-pathdata/blob/master/src/SVGPathDataTransformer.ts#L188
     */
    switch (command.type) {
        case SVGCommandTypes.MOVE_TO:
            return moveTo(command, context);
        case SVGCommandTypes.HORIZ_LINE_TO:
            return horizontalLineTo(command, context);
        case SVGCommandTypes.VERT_LINE_TO:
            return verticalLineTo(command, context);
        case SVGCommandTypes.LINE_TO:
            return lineTo(command, context);
        case SVGCommandTypes.CURVE_TO:
            return curveTo(command, context);
        case SVGCommandTypes.SMOOTH_CURVE_TO:
            return smoothCurveTo(command, context);
        case SVGCommandTypes.QUAD_TO:
            return quadraticCurveTo(command, context);
        case SVGCommandTypes.SMOOTH_QUAD_TO:
            return smoothQuadraticCurveTo(command, context);
        case SVGCommandTypes.CLOSE_PATH:
            return closePath(context);
        default:
            return command satisfies never;
    }
};
