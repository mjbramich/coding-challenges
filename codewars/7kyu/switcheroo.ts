/* Description:
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:
'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

// My solution:
export function switcheroo(x: string): string {
  let switchedString = "";

  for (let i = 0; i < x.length; i++) {
    const char = x[i].toLowerCase();

    switch (char) {
      case "a":
        switchedString += "b";
        continue;
      case "b":
        switchedString += "a";
        continue;
      default:
        switchedString += "c";
    }
  }

  return switchedString;
}
