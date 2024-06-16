import { type Json } from '@svg2colorfont/utils';
import { XMLParser } from 'fast-xml-parser';

export const parseXml = (data: string): Json => {
    const parser = new XMLParser({ ignoreAttributes: false });
    return parser.parse(data);
};
