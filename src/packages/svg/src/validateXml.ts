import { ValidationError, XMLValidator } from 'fast-xml-parser';
import { type Either, left, right } from '@svg2colorfont/utils';

export type XmlValidationError = {
    readonly type: 'XmlValidationError';
    readonly error: ValidationError['err'];
};

export const validateXml = (data: string): Either<XmlValidationError, true> => {
    const validated = XMLValidator.validate(data);
    return validated === true ? right(validated) : left({ type: 'XmlValidationError', error: validated.err } as const);
};
