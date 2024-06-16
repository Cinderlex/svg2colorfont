import { XMLBuilder } from 'fast-xml-parser';

export type TtxGenerationProps = {
    subroutines: SubroutineCharString[];
    cffCharStrings: CffCharString[];
    paletteColors: PaletteColor[];
    colorGlyphs: ColorGlyph[];
};

export const generateTtx = (json: TtxGenerationProps) => {
    const builder = new XMLBuilder({ ignoreAttributes: false, suppressEmptyNode: true });
    return builder.build(generateTemplate(json));
};

type SubroutineCharString = {
    text: string;
    index: number;
};

type CffCharString = {
    text: string;
    name: string;
};

type PaletteColor = {
    index: number;
    value: string;
};

type ColorGlyphLayer = {
    colorId: number;
    name: string;
};

type ColorGlyph = {
    layers: ColorGlyphLayer[];
    name: string;
};

const generateTemplate = ({ subroutines, cffCharStrings, paletteColors, colorGlyphs }: TtxGenerationProps) => ({
    '?xml': { '@_version': '1.0', '@_encoding': 'UTF-8' },
    'ttFont': {
        'GlyphOrder': {
            GlyphID: [
                { '@_id': '0', '@_name': '.notdef' },
                ...cffCharStrings.map(({ name }, index) => ({ '@_id': `${index + 1}`, '@_name': name })),
            ],
        },
        'head': {
            tableVersion: { '@_value': '1.0' },
            fontRevision: { '@_value': '1.0' },
            checkSumAdjustment: { '@_value': '0x60234725' },
            magicNumber: { '@_value': '0x5f0f3cf5' },
            flags: { '@_value': '00001000 00000011' },
            unitsPerEm: { '@_value': '960' },
            created: { '@_value': 'Mon Jan  1 01:00:00 2024' },
            modified: { '@_value': 'Mon Jan  1 01:00:00 2024' },
            xMin: { '@_value': '0' },
            yMin: { '@_value': '-190' },
            xMax: { '@_value': '960' },
            yMax: { '@_value': '807' },
            macStyle: { '@_value': '00000000 00000000' },
            lowestRecPPEM: { '@_value': '7' },
            fontDirectionHint: { '@_value': '2' },
            indexToLocFormat: { '@_value': '0' },
            glyphDataFormat: { '@_value': '0' },
        },
        'hhea': {
            tableVersion: { '@_value': '0x00010000' },
            ascent: { '@_value': '960' },
            descent: { '@_value': '-192' },
            lineGap: { '@_value': '192' },
            advanceWidthMax: { '@_value': '960' },
            minLeftSideBearing: { '@_value': '0' },
            minRightSideBearing: { '@_value': '0' },
            xMaxExtent: { '@_value': '960' },
            caretSlopeRise: { '@_value': '1' },
            caretSlopeRun: { '@_value': '0' },
            caretOffset: { '@_value': '0' },
            reserved0: { '@_value': '0' },
            reserved1: { '@_value': '0' },
            reserved2: { '@_value': '0' },
            reserved3: { '@_value': '0' },
            metricDataFormat: { '@_value': '0' },
            numberOfHMetrics: { '@_value': '3' },
        },
        'maxp': { tableVersion: { '@_value': '0x5000' }, numGlyphs: { '@_value': `${1 + cffCharStrings.length}` } },
        'OS_2': {
            version: { '@_value': '4' },
            xAvgCharWidth: { '@_value': '958' },
            usWeightClass: { '@_value': '400' },
            usWidthClass: { '@_value': '5' },
            fsType: { '@_value': '00000000 00001000' },
            ySubscriptXSize: { '@_value': '625' },
            ySubscriptYSize: { '@_value': '575' },
            ySubscriptXOffset: { '@_value': '0' },
            ySubscriptYOffset: { '@_value': '70' },
            ySuperscriptXSize: { '@_value': '625' },
            ySuperscriptYSize: { '@_value': '575' },
            ySuperscriptXOffset: { '@_value': '0' },
            ySuperscriptYOffset: { '@_value': '335' },
            yStrikeoutSize: { '@_value': '50' },
            yStrikeoutPosition: { '@_value': '240' },
            sFamilyClass: { '@_value': '0' },
            panose: {
                bFamilyType: { '@_value': '0' },
                bSerifStyle: { '@_value': '0' },
                bWeight: { '@_value': '0' },
                bProportion: { '@_value': '0' },
                bContrast: { '@_value': '0' },
                bStrokeVariation: { '@_value': '0' },
                bArmStyle: { '@_value': '0' },
                bLetterForm: { '@_value': '0' },
                bMidline: { '@_value': '0' },
                bXHeight: { '@_value': '0' },
            },
            ulUnicodeRange1: { '@_value': '00000000 00000000 00000000 00000011' },
            ulUnicodeRange2: { '@_value': '00010000 00000000 00000000 00000000' },
            ulUnicodeRange3: { '@_value': '00000000 00000000 00000000 00000000' },
            ulUnicodeRange4: { '@_value': '00000000 00000000 00000000 00000000' },
            achVendID: { '@_value': 'UKWN' },
            fsSelection: { '@_value': '00000000 11000000' },
            usFirstCharIndex: { '@_value': '32' },
            usLastCharIndex: { '@_value': '57595' },
            sTypoAscender: { '@_value': '768' },
            sTypoDescender: { '@_value': '-192' },
            sTypoLineGap: { '@_value': '192' },
            usWinAscent: { '@_value': '960' },
            usWinDescent: { '@_value': '192' },
            ulCodePageRange1: { '@_value': '00000000 00000000 00000000 00000001' },
            ulCodePageRange2: { '@_value': '00000000 00000000 00000000 00000000' },
            sxHeight: { '@_value': '480' },
            sCapHeight: { '@_value': '672' },
            usDefaultChar: { '@_value': '0' },
            usBreakChar: { '@_value': '32' },
            usMaxContext: { '@_value': '0' },
        },
        'name': {
            namerecord: [
                {
                    '#text': 'FontTemplate',
                    '@_nameID': '1',
                    '@_platformID': '1',
                    '@_platEncID': '0',
                    '@_langID': '0x0',
                    '@_unicode': 'True',
                },
                {
                    '#text': 'Regular',
                    '@_nameID': '2',
                    '@_platformID': '1',
                    '@_platEncID': '0',
                    '@_langID': '0x0',
                    '@_unicode': 'True',
                },
                {
                    '#text': 'FontTemplate Regular',
                    '@_nameID': '4',
                    '@_platformID': '1',
                    '@_platEncID': '0',
                    '@_langID': '0x0',
                    '@_unicode': 'True',
                },
                {
                    '#text': 'Version 1.000',
                    '@_nameID': '5',
                    '@_platformID': '1',
                    '@_platEncID': '0',
                    '@_langID': '0x0',
                    '@_unicode': 'True',
                },
                {
                    '#text': 'FontTemplate-Regular',
                    '@_nameID': '6',
                    '@_platformID': '1',
                    '@_platEncID': '0',
                    '@_langID': '0x0',
                    '@_unicode': 'True',
                },
                {
                    '#text': 'FontTemplate',
                    '@_nameID': '1',
                    '@_platformID': '3',
                    '@_platEncID': '1',
                    '@_langID': '0x409',
                },
                {
                    '#text': 'Regular',
                    '@_nameID': '2',
                    '@_platformID': '3',
                    '@_platEncID': '1',
                    '@_langID': '0x409',
                },
                {
                    '#text': '1.000;UKWN;FontTemplate-Regular',
                    '@_nameID': '3',
                    '@_platformID': '3',
                    '@_platEncID': '1',
                    '@_langID': '0x409',
                },
                {
                    '#text': 'FontTemplate Regular',
                    '@_nameID': '4',
                    '@_platformID': '3',
                    '@_platEncID': '1',
                    '@_langID': '0x409',
                },
                {
                    '#text': 'Version 1.000',
                    '@_nameID': '5',
                    '@_platformID': '3',
                    '@_platEncID': '1',
                    '@_langID': '0x409',
                },
                {
                    '#text': 'FontTemplate-Regular',
                    '@_nameID': '6',
                    '@_platformID': '3',
                    '@_platEncID': '1',
                    '@_langID': '0x409',
                },
                {
                    '#text': 'FontTemplate',
                    '@_nameID': '16',
                    '@_platformID': '3',
                    '@_platEncID': '1',
                    '@_langID': '0x409',
                },
                { '#text': 'Regular', '@_nameID': '17', '@_platformID': '3', '@_platEncID': '1', '@_langID': '0x409' },
            ],
        },
        'cmap': {
            tableVersion: { '@_version': '0' },
            cmap_format_4: colorGlyphs.flatMap(({ name }, index) => {
                const map = {
                    '@_code': `0x${(parseInt('0xe000') + index).toString(16)}`,
                    '@_name': name,
                };
                return [
                    {
                        map,
                        '@_platformID': '0',
                        '@_platEncID': '3',
                        '@_language': '0',
                    },
                    {
                        map,
                        '@_platformID': '3',
                        '@_platEncID': '1',
                        '@_language': '0',
                    },
                ];
            }),
        },
        'post': {
            formatType: { '@_value': '3.0' },
            italicAngle: { '@_value': '0.0' },
            underlinePosition: { '@_value': '-95' },
            underlineThickness: { '@_value': '50' },
            isFixedPitch: { '@_value': '0' },
            minMemType42: { '@_value': '0' },
            maxMemType42: { '@_value': '0' },
            minMemType1: { '@_value': '0' },
            maxMemType1: { '@_value': '0' },
        },
        'CFF': {
            major: { '@_value': '1' },
            minor: { '@_value': '0' },
            CFFFont: {
                'version': { '@_value': '001.000' },
                'Notice': { '@_value': 'copyright missing' },
                'FullName': { '@_value': 'FontTemplate Regular' },
                'Weight': { '@_value': 'Regular' },
                'isFixedPitch': { '@_value': '0' },
                'ItalicAngle': { '@_value': '0' },
                'UnderlinePosition': { '@_value': '-120' },
                'UnderlineThickness': { '@_value': '50' },
                'PaintType': { '@_value': '0' },
                'CharstringType': { '@_value': '2' },
                'FontMatrix': { '@_value': '0.00104167 0 0 0.00104167 0 0' },
                'FontBBox': { '@_value': '0 -190 960 807' },
                'StrokeWidth': { '@_value': '0' },
                'Encoding': { '@_name': 'StandardEncoding' },
                'Private': {
                    BlueValues: { '@_value': '-16 0 480 496 672 688 768 784' },
                    OtherBlues: { '@_value': '-208 -192' },
                    BlueScale: { '@_value': '0.037' },
                    BlueShift: { '@_value': '7' },
                    BlueFuzz: { '@_value': '0' },
                    ForceBold: { '@_value': '0' },
                    LanguageGroup: { '@_value': '0' },
                    ExpansionFactor: { '@_value': '0.06' },
                    initialRandomSeed: { '@_value': '0' },
                    defaultWidthX: { '@_value': '960' },
                    nominalWidthX: { '@_value': '587' },
                    Subrs: {
                        CharString: subroutines.map(({ text, index }) => ({ '#text': text, '@_index': `${index}` })),
                    },
                },
                'CharStrings': {
                    CharString: [
                        { '#text': 'endchar', '@_name': '.notdef' },
                        ...cffCharStrings.map(({ text, name }) => ({ '#text': text, '@_name': name })),
                    ],
                },
                '@_name': 'FontTemplate-Regular',
            },
            GlobalSubrs: '',
        },
        'COLR': {
            version: { '@_value': '0' },
            ColorGlyph: colorGlyphs.map(({ layers, name }) => ({
                'layer': layers.map(({ colorId, name }) => ({ '@_colorID': `${colorId}`, '@_name': name })),
                '@_name': name,
            })),
        },
        'CPAL': {
            version: { '@_value': '0' },
            numPaletteEntries: { '@_value': `${paletteColors.length}` },
            palette: {
                'color': paletteColors.map(({ index, value }) => ({ '@_index': `${index}`, '@_value': value })),
                '@_index': '0',
            },
        },
        'hmtx': {
            mtx: [
                { '@_name': '.notdef', '@_width': '480', '@_lsb': '89' },
                ...cffCharStrings.map(({ name }) => ({
                    '@_name': name,
                    '@_width': '960',
                    '@_lsb': '0',
                })),
            ],
        },
        '@_sfntVersion': 'OTTO',
        '@_ttLibVersion': '4.47',
    },
});
