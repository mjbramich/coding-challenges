/* Description:
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
Note: your solution must not modify the input array.
*/

// My Solution.
const hasTriples = (scores: number[]) => {
  const count = scores.reduce((acc: { [key: string]: number }, cur: number) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});

  let result: number[] = [];

  for (const [key, val] of Object.entries(count)) {
    const num = Number(key);

    // Handle triples (3 of a kind)
    if (val >= 3) {
      // Add triple score
      if (num === 1) {
        result.push(1000);
      } else {
        result.push(num * 100);
      }

      // Handle remaining dice after taking out the triple
      const remaining = val - 3;

      // Score remaining 1's
      if (num === 1 && remaining > 0) {
        result.push(remaining * 100);
      }

      // Score remaining 5's
      if (num === 5 && remaining > 0) {
        result.push(remaining * 50);
      }
    } else {
      // Score 1's
      if (num === 1) {
        result.push(val * 100);
      }
      // Score 5's
      else if (num === 5) {
        result.push(val * 50);
      }
    }
  }

  return result;
};

export function score(dice: number[]): number {
  const scores = hasTriples(dice);
  return scores.reduce((total, s) => total + s, 0);
}
