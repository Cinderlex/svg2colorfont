import { validateXml, type XmlValidationError } from './validateXml.ts';
import { type Either, isLeft, type Json, right } from '@s2cf/utils';
import { parseXml } from './parseXml.ts';

export const parse = (data: string): Either<XmlValidationError, Json> => {
    const validatedXml = validateXml(data);
    if (isLeft(validatedXml)) {
        return validatedXml;
    }
    return right(parseXml(data));
};
