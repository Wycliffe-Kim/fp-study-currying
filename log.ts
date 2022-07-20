import { curry } from 'ramda';

export const log = curry(<T>(title: string, value: T) => {
  console.log(title, value);
  return value;
});
