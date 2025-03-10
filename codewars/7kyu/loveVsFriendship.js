/* Description:
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.
*/

// My solution:
function wordsToMarks(string) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"].reduce((acc, l, i) => {
    acc[l] = i + 1;
    return acc;
  }, {});

  return string.split("").reduce((acc, cur) => acc + alphabet[cur], 0);
}
