import { SvgSchemaOutput } from '@s2cf/svg';
import { generateTtx } from '@s2cf/ttx';
import { svgToTtxGenOptions } from './svgToTtxGenOptions.ts';

export const svgSchemaToTtx = (svgs: SvgSchemaOutput[]) => generateTtx(svgToTtxGenOptions(svgs));
