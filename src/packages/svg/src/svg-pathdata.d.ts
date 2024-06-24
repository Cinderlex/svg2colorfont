/* eslint-disable @typescript-eslint/no-explicit-any */

// FIXME: use types from 'svg-pathdata' package
declare module 'svg-pathdata' {
    export declare abstract class TransformableSVG {
        round(x?: number): this;

        toAbs(): this;

        toRel(): this;

        normalizeHVZ(a?: boolean, b?: boolean, c?: boolean): this;

        normalizeST(): this;

        qtToC(): this;

        aToC(): this;

        sanitize(eps?: number): this;

        translate(x: number, y?: number): this;

        scale(x: number, y?: number): this;

        rotate(a: number, x?: number, y?: number): this;

        matrix(a: number, b: number, c: number, d: number, e: number, f: number): this;

        skewX(a: number): this;

        skewY(a: number): this;

        xSymmetry(xOffset?: number): this;

        ySymmetry(yOffset?: number): this;

        annotateArcs(): this;

        abstract transform(transformFunction: TransformFunction): this;
    }

    export declare class SVGPathData extends TransformableSVG {
        commands: SVGCommand[];

        constructor(content: string | SVGCommand[]);

        encode(): string;

        getBounds(): TransformFunction & {
            minX: number;
            maxX: number;
            minY: number;
            maxY: number;
        };

        transform(transformFunction: (input: SVGCommand) => SVGCommand | SVGCommand[]): this;

        static encode(commands: SVGCommand[]): string;

        static parse(path: string): SVGCommand[];

        static readonly CLOSE_PATH: 1;
        static readonly MOVE_TO: 2;
        static readonly HORIZ_LINE_TO: 4;
        static readonly VERT_LINE_TO: 8;
        static readonly LINE_TO: 16;
        static readonly CURVE_TO: 32;
        static readonly SMOOTH_CURVE_TO: 64;
        static readonly QUAD_TO: 128;
        static readonly SMOOTH_QUAD_TO: 256;
        static readonly ARC: 512;
        static readonly LINE_COMMANDS: number;
        static readonly DRAWING_COMMANDS: number;
    }

    export declare const COMMAND_ARG_COUNTS: {
        2: number;
        16: number;
        4: number;
        8: number;
        1: number;
        128: number;
        256: number;
        32: number;
        64: number;
        512: number;
    };

    export declare function encodeSVGPath(commands: SVGCommand | SVGCommand[]): string;

    export declare class SVGPathDataParser extends TransformableSVG {
        private curNumber;
        private curCommandType;
        private curCommandRelative;
        private canParseCommandOrComma;
        private curNumberHasExp;
        private curNumberHasExpDigits;
        private curNumberHasDecimal;
        private curArgs;

        constructor();

        finish(commands?: SVGCommand[]): SVGCommand[];

        parse(str: string, commands?: SVGCommand[]): SVGCommand[];

        /**
         * Return a wrapper around this parser which applies the transformation on parsed commands.
         */
        transform(transform: TransformFunction): this;
    }

    export declare namespace SVGPathDataTransformer {
        function ROUND(roundVal?: number): (command: any) => any;

        function TO_ABS(): (command: any) => any;

        function TO_REL(): (command: any) => any;

        function NORMALIZE_HVZ(normalizeZ?: boolean, normalizeH?: boolean, normalizeV?: boolean): (command: any) => any;

        function NORMALIZE_ST(): (command: any) => any;

        function QT_TO_C(): (command: any) => any;

        function INFO(
            f: (
                command: any,
                prevXAbs: number,
                prevYAbs: number,
                pathStartXAbs: number,
                pathStartYAbs: number,
            ) => any | any[],
        ): (command: any) => any;

        function SANITIZE(EPS?: number): (command: any) => any;

        function MATRIX(a: number, b: number, c: number, d: number, e: number, f: number): (command: any) => any;

        function ROTATE(a: number, x?: number, y?: number): (command: any) => any;

        function TRANSLATE(dX: number, dY?: number): (command: any) => any;

        function SCALE(dX: number, dY?: number): (command: any) => any;

        function SKEW_X(a: number): (command: any) => any;

        function SKEW_Y(a: number): (command: any) => any;

        function X_AXIS_SYMMETRY(xOffset?: number): (command: any) => any;

        function Y_AXIS_SYMMETRY(yOffset?: number): (command: any) => any;

        function A_TO_C(): (command: any) => any;

        function ANNOTATE_ARCS(): (command: any) => any;

        function CLONE(): (c: SVGCommand) => SVGCommand;

        function CALCULATE_BOUNDS(): TransformFunction & {
            minX: number;
            maxX: number;
            minY: number;
            maxY: number;
        };
    }
    export declare type CommandM = {
        relative: boolean;
        type: typeof SVGPathData.MOVE_TO;
        x: number;
        y: number;
    };
    export declare type CommandL = {
        relative: boolean;
        type: typeof SVGPathData.LINE_TO;
        x: number;
        y: number;
    };
    export declare type CommandH = {
        relative: boolean;
        type: typeof SVGPathData.HORIZ_LINE_TO;
        x: number;
    };
    export declare type CommandV = {
        relative: boolean;
        type: typeof SVGPathData.VERT_LINE_TO;
        y: number;
    };
    export declare type CommandZ = {
        type: typeof SVGPathData.CLOSE_PATH;
    };
    export declare type CommandQ = {
        relative: boolean;
        type: typeof SVGPathData.QUAD_TO;
        x1: number;
        y1: number;
        x: number;
        y: number;
    };
    export declare type CommandT = {
        relative: boolean;
        type: typeof SVGPathData.SMOOTH_QUAD_TO;
        x: number;
        y: number;
    };
    export declare type CommandC = {
        relative: boolean;
        type: typeof SVGPathData.CURVE_TO;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        x: number;
        y: number;
    };
    export declare type CommandS = {
        relative: boolean;
        type: typeof SVGPathData.SMOOTH_CURVE_TO;
        x2: number;
        y2: number;
        x: number;
        y: number;
    };
    export declare type CommandA = {
        relative: boolean;
        type: typeof SVGPathData.ARC;
        rX: number;
        rY: number;
        xRot: number;
        sweepFlag: 0 | 1;
        lArcFlag: 0 | 1;
        x: number;
        y: number;
        cX?: number;
        cY?: number;
        phi1?: number;
        phi2?: number;
    };
    export declare type SVGCommand =
        | CommandM
        | CommandL
        | CommandH
        | CommandV
        | CommandZ
        | CommandQ
        | CommandT
        | CommandC
        | CommandS
        | CommandA;
    export declare type TransformFunction = (input: SVGCommand) => SVGCommand | SVGCommand[];
}
