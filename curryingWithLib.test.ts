import { sub2, sum2 } from './curryingWithLib';

test('3 + 3 = 6', () => {
  const sumOne = sum2(1);
  const sumTwo = sum2(2);
  const sumThree = (value: number) => sumTwo(sumOne(value));
  expect(sumThree(3)).toBe(6);
});

test('6 - 3 = 3', () => {
  const subOne = sub2(1);
  const subTwo = sub2(2);
  const subThree = (value: number) => subTwo(subOne(value));
  expect(subThree(6)).toBe(3);
});
