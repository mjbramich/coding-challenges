/* Description: 
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'
*/

// My solution:
export function removeDuplicateWords(s: string): string {
  const arr = s.split(" ");
  const noDuplicates = new Set(arr);

  return Array.from(noDuplicates).join(" ");
}
