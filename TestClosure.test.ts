import { TestClosure } from './TestClosure';

test('1 + 1 = 2', () => {
  const closure = TestClosure(1);
  expect(closure.sum(1)).toBe(2);
});

test('2 + 32 = 34', () => {
  const closure = TestClosure(2);
  expect(closure.sum(32)).toBe(34);
});

test('2 - 1 = 1', () => {
  const closure = TestClosure(2);
  expect(closure.sub(1)).toBe(1);
});

test('34102 - 19888 = 14214', () => {
  const closure = TestClosure(34102);
  expect(closure.sub(19888)).toBe(14214);
});
