export function expressionsMatter(a: number, b: number, c: number): number {
  const results = [
    a + b + c,
    a * b * c,
    a + b * c,
    (a + b) * c,
    a * (b + c),
    a * b + c,
  ];
  return Math.max(...results);
}
