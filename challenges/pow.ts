/**
 * Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Assume y will always be a non-negative integer, but x may be any number.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * input = x, base value to be raised to the y(positive) exponent
 * output - the result of x^y
 *
 * take x, and multiply it by itself y times
 * Because 0 is neither positive nor negative, we don't have to factor in 0 as the y value
 *
 * if y is 1, then return result, but if not, then loop result multiplied by x y times
 * Extension: Use recursion.
 */

function pow(base: number, power: number): number {
  let result = base;
  if (power === 0) return 1;
  if (power === 1) return base;
  //the issue was that I put 0 instead of 1 here.
  for (let i = 1; i < power; i++) {
    // console.log('base ', base);
    // console.log('result ', result);
    result *= base;
    ``;
  }

  return result; // Placeholder return value for type safety - replace for your solution
}
// console.log(pow(5, 2));
// pow(3, 4);
// pow(2, 5);
// pow(2, 4);
/**
 * Extension: Use recursion.
 */

function powRecurse(base: number, power: number): number {
  let result = base;
  if (power === 0) return 1;
  if (power === 1) return base;

  return result * powRecurse(base, power - 1); // Placeholder return value for type safety - replace for your solution
}

export { pow, powRecurse };
