/* Description:
 We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

*/

// My solution - no idea why they included the y in the vowels
export function vowelIndices(word: string): number[] {
  const vowels = [..."aeiouy"];

  const vowelIndexes = word
    .toLowerCase()
    .split("")
    .map((c, i) => (vowels.includes(c) ? i + 1 : null))
    .filter((c): c is number => !!c);

  return vowelIndexes;
}
