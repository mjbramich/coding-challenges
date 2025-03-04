/* Description: (should be named pascalCase)
Write a method (or function, depending on the language) that converts a string to camelCase, 
that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
*/

// My Solution
export function camelCase(str: string): string {
  if (!str) {
    return "";
  }

  const words = str.split(" ").filter((word) => word.length > 0);

  const camelCase = words.map((word) => {
    const capital = word[0].toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return `${capital}${restOfWord}`;
  });

  return camelCase.join("");
}
