import { parseSvg, type SvgGeometry } from '@s2cf/svg';
import { parseXml, type XmlValidationError } from '@s2cf/xml';
import { type Either, isLeft, right } from '@s2cf/utils';
import { type SvgParsingError } from '@s2cf/svg/src/parseSvg.ts';
import { svgSchemaToTtx } from '@s2cf/svg2ttx';

export const convertSvgsToTtx = (svgs: string[]): Either<XmlValidationError | SvgParsingError, string> => {
    const schemaOutputs: SvgGeometry[] = [];
    for (const svg of svgs) {
        const parsedXml = parseXml(svg);
        if (isLeft(parsedXml)) {
            return parsedXml;
        }
        const parsedSvg = parseSvg(parsedXml.right);
        if (isLeft(parsedSvg)) {
            return parsedSvg;
        }
        schemaOutputs.push(parsedSvg.right);
    }
    return right(svgSchemaToTtx(schemaOutputs));
};
