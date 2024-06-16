import { z } from 'zod';
import { type Either, type Json, left, right } from '@svg2colorfont/utils';

const LinearSize = z
    .string()
    .regex(/^\d+(\.\d+)?$/)
    .transform(value => parseFloat(value));

const PathSchema = z.object({
    '@_fill': z.string().regex(/^#[0-9a-f]{6}$/i),
    '@_d': z.string().min(1),
});

const SvgSchema = z.object({
    svg: z.object({
        '@_width': LinearSize,
        '@_height': LinearSize,
        'path': z.union([PathSchema, z.array(PathSchema)]).transform(value => (Array.isArray(value) ? value : [value])),
    }),
});

export type SvgSchemaInput = z.input<typeof SvgSchema>;
export type SvgSchemaOutput = z.output<typeof SvgSchema>;

export type SvgSchemaError = z.ZodError<SvgSchemaInput>;

export type SvgParsingError = {
    readonly type: 'SvgParsingError';
    readonly error: SvgSchemaError;
};

export const parseSvg = (data: Json): Either<SvgParsingError, SvgSchemaOutput> => {
    const parsed = SvgSchema.safeParse(data);
    return parsed.success ? right(parsed.data) : left({ type: 'SvgParsingError', error: parsed.error } as const);
};
