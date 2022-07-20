import { curry } from 'ramda';

export const sum2 = curry((value1: number, value2: number) => value2 + value1);
export const sub2 = curry((value1: number, value2: number) => value2 - value1);
