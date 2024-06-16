import { parseSvg, SvgSchemaOutput, XmlValidationError } from '@svg2colorfont/svg';
import { Either, isLeft, right } from '@svg2colorfont/utils';
import { SvgParsingError } from '@svg2colorfont/svg/src/parseSvg.ts';
import { svgSchemaToTtx } from '@svg2colorfont/svg2ttx';

export const convertSvgsToTtx = (svgs: string[]): Either<XmlValidationError | SvgParsingError, string> => {
    const schemaOutputs: SvgSchemaOutput[] = [];
    for (const svg of svgs) {
        const parsed = parseSvg(svg);
        if (isLeft(parsed)) {
            return parsed;
        }
        schemaOutputs.push(parsed.right);
    }
    return right(svgSchemaToTtx(schemaOutputs));
};
