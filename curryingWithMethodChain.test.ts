import { identity, tap } from 'ramda';
import { sub2, sum2 } from './curryingWithLib';
import { log } from './log';

const Container = <T>(value: T) => {
  let _value = value;

  const container = {
    map: (func: (value: T) => T) => {
      _value = func(_value);
      return container;
    },
    invoke: (func: (value: T) => T) => func(_value),
  };

  return container;
};

test('3 + 1 + 2 = 6', () => {
  const sumOne = sum2(1);
  const sumTwo = sum2(2);
  const container = Container(3);
  const result = container
    .map(sumOne)
    .map(log('first phase:'))
    .map(sumTwo)
    .map(log('second phase'))
    .invoke(identity);

  expect(result).toBe(6);
});

test('6 - 1 - 2 = 3', () => {
  const subOne = sub2(1);
  const subTwo = sub2(2);
  const container = Container(6);
  const result = container
    .map(subOne)
    .map(tap((value) => console.log('first phase', value)))
    .map(subTwo)
    .map(tap((value) => console.log('second phase', value)))
    .invoke(identity);

  expect(result).toBe(3);
});
