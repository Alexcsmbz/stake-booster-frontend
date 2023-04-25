export const unitParser = {
  from: (input: number, decimal: number) =>
    String(input / Math.pow(10, decimal)),
  to: (input: number, decimal: number) => input * Math.pow(10, decimal),
};
