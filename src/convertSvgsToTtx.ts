import { parseSvg, SvgSchemaOutput, XmlValidationError } from '@s2cf/svg';
import { Either, isLeft, right } from '@s2cf/utils';
import { SvgParsingError } from '@s2cf/svg/src/parseSvg.ts';
import { svgSchemaToTtx } from '@s2cf/svg2ttx';

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
