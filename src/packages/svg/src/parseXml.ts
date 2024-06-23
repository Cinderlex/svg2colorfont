import { type Json } from '@s2cf/utils';
import { XMLParser } from 'fast-xml-parser';

export const parseXml = (data: string): Json => {
    const parser = new XMLParser({ ignoreAttributes: false });
    return parser.parse(data);
};
