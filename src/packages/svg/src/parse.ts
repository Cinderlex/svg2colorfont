import { validateXml, XmlValidationError } from './validateXml.ts';
import { type Either, isLeft } from '@svg2colorfont/utils';
import { parseXml } from './parseXml.ts';
import { parseSvg, type SvgParsingError, type SvgSchemaOutput } from './parseSvg.ts';

export const parse = (data: string): Either<XmlValidationError | SvgParsingError, SvgSchemaOutput> => {
    const validatedXml = validateXml(data);
    if (isLeft(validatedXml)) {
        return validatedXml;
    }
    const json = parseXml(data);
    return parseSvg(json);
};
