import { validateXml } from './validateXml.ts';
import { isLeft, isRight } from '@svg2colorfont/utils';

describe('validateXml', () => {
    it('Should succeed on a valid xml', () => {
        const validXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path fill="#464655" d="M5.25 0A5.25 5.25 0 0 0 0 5.25v13.5C0 21.65 2.35 24 5.25 24H8V0z"/>
    <path fill="#FF4B55" d="M16 0H8v24h8z"/>
    <path fill="#73AF00" d="M24 18.75V5.25C24 2.35 21.65 0 18.75 0H16v24h2.75c2.9 0 5.25-2.35 5.25-5.25"/>
</svg>
`;
        expect(isRight(validateXml(validXml))).toBe(true);
    });

    it('Should fail on an invalid xml', () => {
        const validXml = `
svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path fill="#464655" d="M5.25 0A5.25 5.25 0 0 0 0 5.25v13.5C0 21.65 2.35 24 5.25 24H8V0z"/>
    <path fill="#FF4B55" d="M16 0H8v24h8z"/>
    <path fill="#73AF00" d="M24 18.75V5.25C24 2.35 21.65 0 18.75 0H16v24h2.75c2.9 0 5.25-2.35 5.25-5.25"/>
</svg>
`;
        expect(isLeft(validateXml(validXml))).toBe(true);
    });
});
