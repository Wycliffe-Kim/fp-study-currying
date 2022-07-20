export const TestClosure = (value: number) => {
  return {
    sum: (toSum: number) => value + toSum,
    sub: (toSub: number) => value - toSub,
  };
};
