import { CharStringOperator } from '@s2cf/ttx';

export const extractReturnData = <T extends CharStringOperator, C>(returnValue: [T, C]): [Omit<T, 'serialize'>, C] => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [{ serialize, ...data }, context] = returnValue;
    return [data, context];
};
