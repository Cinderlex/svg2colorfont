import { generateTtx, TtxGenerationProps } from './generateTtx.ts';

describe('generateXml', () => {
    it('Should generate a xml', () => {
        const props: TtxGenerationProps = {
            subroutines: [
                {
                    text: '807 rmoveto -960 320 960 vlineto endchar',
                    index: 0,
                },
            ],
            cffCharStrings: [
                {
                    text: 'endchar',
                    name: 'uniE000',
                },
                {
                    text: '0 -107 callsubr',
                    name: 'uniE000.layer0',
                },
                {
                    text: '320 -107 callsubr',
                    name: 'uniE000.layer1',
                },
                {
                    text: '640 -107 callsubr',
                    name: 'uniE000.layer2',
                },
            ],
            paletteColors: [
                {
                    index: 0,
                    value: '#FF4B55',
                },
                {
                    index: 1,
                    value: '#464655',
                },
                {
                    index: 2,
                    value: '#73AF00',
                },
            ],
            colorGlyphs: [
                {
                    layers: [
                        {
                            colorId: 1,
                            name: 'uniE000.layer0',
                        },
                        {
                            colorId: 0,
                            name: 'uniE000.layer1',
                        },
                        {
                            colorId: 2,
                            name: 'uniE000.layer2',
                        },
                    ],
                    name: 'uniE000',
                },
            ],
        };

        const expectedXml =
            '<?xml version="1.0" encoding="UTF-8"?><ttFont sfntVersion="OTTO" ttLibVersion="4.47"><GlyphOrder><GlyphID id="0" name=".notdef"/><GlyphID id="1" name="uniE000"/><GlyphID id="2" name="uniE000.layer0"/><GlyphID id="3" name="uniE000.layer1"/><GlyphID id="4" name="uniE000.layer2"/></GlyphOrder><head><tableVersion value="1.0"/><fontRevision value="1.0"/><checkSumAdjustment value="0x60234725"/><magicNumber value="0x5f0f3cf5"/><flags value="00001000 00000011"/><unitsPerEm value="960"/><created value="Mon Jan  1 01:00:00 2024"/><modified value="Mon Jan  1 01:00:00 2024"/><xMin value="0"/><yMin value="-190"/><xMax value="960"/><yMax value="807"/><macStyle value="00000000 00000000"/><lowestRecPPEM value="7"/><fontDirectionHint value="2"/><indexToLocFormat value="0"/><glyphDataFormat value="0"/></head><hhea><tableVersion value="0x00010000"/><ascent value="960"/><descent value="-192"/><lineGap value="192"/><advanceWidthMax value="960"/><minLeftSideBearing value="0"/><minRightSideBearing value="0"/><xMaxExtent value="960"/><caretSlopeRise value="1"/><caretSlopeRun value="0"/><caretOffset value="0"/><reserved0 value="0"/><reserved1 value="0"/><reserved2 value="0"/><reserved3 value="0"/><metricDataFormat value="0"/><numberOfHMetrics value="3"/></hhea><maxp><tableVersion value="0x5000"/><numGlyphs value="5"/></maxp><OS_2><version value="4"/><xAvgCharWidth value="958"/><usWeightClass value="400"/><usWidthClass value="5"/><fsType value="00000000 00001000"/><ySubscriptXSize value="625"/><ySubscriptYSize value="575"/><ySubscriptXOffset value="0"/><ySubscriptYOffset value="70"/><ySuperscriptXSize value="625"/><ySuperscriptYSize value="575"/><ySuperscriptXOffset value="0"/><ySuperscriptYOffset value="335"/><yStrikeoutSize value="50"/><yStrikeoutPosition value="240"/><sFamilyClass value="0"/><panose><bFamilyType value="0"/><bSerifStyle value="0"/><bWeight value="0"/><bProportion value="0"/><bContrast value="0"/><bStrokeVariation value="0"/><bArmStyle value="0"/><bLetterForm value="0"/><bMidline value="0"/><bXHeight value="0"/></panose><ulUnicodeRange1 value="00000000 00000000 00000000 00000011"/><ulUnicodeRange2 value="00010000 00000000 00000000 00000000"/><ulUnicodeRange3 value="00000000 00000000 00000000 00000000"/><ulUnicodeRange4 value="00000000 00000000 00000000 00000000"/><achVendID value="UKWN"/><fsSelection value="00000000 11000000"/><usFirstCharIndex value="32"/><usLastCharIndex value="57595"/><sTypoAscender value="768"/><sTypoDescender value="-192"/><sTypoLineGap value="192"/><usWinAscent value="960"/><usWinDescent value="192"/><ulCodePageRange1 value="00000000 00000000 00000000 00000001"/><ulCodePageRange2 value="00000000 00000000 00000000 00000000"/><sxHeight value="480"/><sCapHeight value="672"/><usDefaultChar value="0"/><usBreakChar value="32"/><usMaxContext value="0"/></OS_2><name><namerecord nameID="1" platformID="1" platEncID="0" langID="0x0" unicode="True">FontTemplate</namerecord><namerecord nameID="2" platformID="1" platEncID="0" langID="0x0" unicode="True">Regular</namerecord><namerecord nameID="4" platformID="1" platEncID="0" langID="0x0" unicode="True">FontTemplate Regular</namerecord><namerecord nameID="5" platformID="1" platEncID="0" langID="0x0" unicode="True">Version 1.000</namerecord><namerecord nameID="6" platformID="1" platEncID="0" langID="0x0" unicode="True">FontTemplate-Regular</namerecord><namerecord nameID="1" platformID="3" platEncID="1" langID="0x409">FontTemplate</namerecord><namerecord nameID="2" platformID="3" platEncID="1" langID="0x409">Regular</namerecord><namerecord nameID="3" platformID="3" platEncID="1" langID="0x409">1.000;UKWN;FontTemplate-Regular</namerecord><namerecord nameID="4" platformID="3" platEncID="1" langID="0x409">FontTemplate Regular</namerecord><namerecord nameID="5" platformID="3" platEncID="1" langID="0x409">Version 1.000</namerecord><namerecord nameID="6" platformID="3" platEncID="1" langID="0x409">FontTemplate-Regular</namerecord><namerecord nameID="16" platformID="3" platEncID="1" langID="0x409">FontTemplate</namerecord><namerecord nameID="17" platformID="3" platEncID="1" langID="0x409">Regular</namerecord></name><cmap><tableVersion version="0"/><cmap_format_4 platformID="0" platEncID="3" language="0"><map code="0xe000" name="uniE000"/></cmap_format_4><cmap_format_4 platformID="3" platEncID="1" language="0"><map code="0xe000" name="uniE000"/></cmap_format_4></cmap><post><formatType value="3.0"/><italicAngle value="0.0"/><underlinePosition value="-95"/><underlineThickness value="50"/><isFixedPitch value="0"/><minMemType42 value="0"/><maxMemType42 value="0"/><minMemType1 value="0"/><maxMemType1 value="0"/></post><CFF><major value="1"/><minor value="0"/><CFFFont name="FontTemplate-Regular"><version value="001.000"/><Notice value="copyright missing"/><FullName value="FontTemplate Regular"/><Weight value="Regular"/><isFixedPitch value="0"/><ItalicAngle value="0"/><UnderlinePosition value="-120"/><UnderlineThickness value="50"/><PaintType value="0"/><CharstringType value="2"/><FontMatrix value="0.00104167 0 0 0.00104167 0 0"/><FontBBox value="0 -190 960 807"/><StrokeWidth value="0"/><Encoding name="StandardEncoding"/><Private><BlueValues value="-16 0 480 496 672 688 768 784"/><OtherBlues value="-208 -192"/><BlueScale value="0.037"/><BlueShift value="7"/><BlueFuzz value="0"/><ForceBold value="0"/><LanguageGroup value="0"/><ExpansionFactor value="0.06"/><initialRandomSeed value="0"/><defaultWidthX value="960"/><nominalWidthX value="587"/><Subrs><CharString index="0">807 rmoveto -960 320 960 vlineto endchar</CharString></Subrs></Private><CharStrings><CharString name=".notdef">endchar</CharString><CharString name="uniE000">endchar</CharString><CharString name="uniE000.layer0">0 -107 callsubr</CharString><CharString name="uniE000.layer1">320 -107 callsubr</CharString><CharString name="uniE000.layer2">640 -107 callsubr</CharString></CharStrings></CFFFont><GlobalSubrs/></CFF><COLR><version value="0"/><ColorGlyph name="uniE000"><layer colorID="1" name="uniE000.layer0"/><layer colorID="0" name="uniE000.layer1"/><layer colorID="2" name="uniE000.layer2"/></ColorGlyph></COLR><CPAL><version value="0"/><numPaletteEntries value="3"/><palette index="0"><color index="0" value="#FF4B55"/><color index="1" value="#464655"/><color index="2" value="#73AF00"/></palette></CPAL><hmtx><mtx name=".notdef" width="480" lsb="89"/><mtx name="uniE000" width="960" lsb="0"/><mtx name="uniE000.layer0" width="960" lsb="0"/><mtx name="uniE000.layer1" width="960" lsb="0"/><mtx name="uniE000.layer2" width="960" lsb="0"/></hmtx></ttFont>';

        const result = generateTtx(props);
        expect(result).toEqual(expectedXml);
    });
});
