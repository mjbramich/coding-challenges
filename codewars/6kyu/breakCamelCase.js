/*Description:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result += " ";
    }
    result += string[i];
  }
  return result;
}

// Solution revisited:

function solution(string) {
  let res = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      res += ` ${string[i]}`;
      i++;
    }
    res += string[i];
  }

  return res;
}
