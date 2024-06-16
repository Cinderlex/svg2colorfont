/**
 * Extracted from fp-ts - https://github.com/gcanti/fp-ts
 * Used types instead of interfaces for Left and Right types definition
 */

export type Left<E> = {
    readonly _tag: 'Left';
    readonly left: E;
};

export type Right<A> = {
    readonly _tag: 'Right';
    readonly right: A;
};

export type Either<E, A> = Left<E> | Right<A>;

export const left = <E = never, A = never>(e: E): Either<E, A> => ({ _tag: 'Left', left: e });

export const right = <E = never, A = never>(a: A): Either<E, A> => ({ _tag: 'Right', right: a });

export const isLeft = <E>(ma: Either<E, unknown>): ma is Left<E> => ma._tag === 'Left';

export const isRight = <A>(ma: Either<unknown, A>): ma is Right<A> => ma._tag === 'Right';
