/* Description
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// My solution
export class Challenge {
  static solution(number: number) {
    // need to find all the multiples of 3 an 5 from the number passed in
    // return sum of all the multples

    let total: number = 0;

    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        total += i;
        continue;
      }
    }
  }
}
