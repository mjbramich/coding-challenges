/* Description:
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
*/

// My solution
export function alphanumeric(string: string): boolean {
  if (string.length < 1) {
    return false;
  }

  const alphaNumeric = new Set(
    ...["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"]
  );

  for (const char of string) {
    if (!alphaNumeric.has(char)) {
      return false;
    }
  }

  return true;
}
