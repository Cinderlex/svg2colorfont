import { parseXml, type XmlValidationError } from '@s2cf/xml';
import { type Either, isLeft } from '@s2cf/utils';
import { parseSvg, type SvgParsingError, type SvgSchemaOutput } from './parseSvg.ts';

export const parse = (data: string): Either<XmlValidationError | SvgParsingError, SvgSchemaOutput> => {
    const xml = parseXml(data);
    return isLeft(xml) ? xml : parseSvg(xml.right);
};
