import { SvgSchemaOutput } from '@svg2colorfont/svg';
import { generateTtx } from '@svg2colorfont/ttx';
import { svgToTtxGenOptions } from './svgToTtxGenOptions.ts';

export const svgSchemaToTtx = (svgs: SvgSchemaOutput[]) => generateTtx(svgToTtxGenOptions(svgs));
