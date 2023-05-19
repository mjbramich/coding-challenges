/* Description

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

//My solution
function fakeBin(x){
    let string = '';
    for  (let i = 0; i < x.length; i++) {
      if (x[i] >= 5) {
        string += '1'
      }
      else 
        string += '0'
    }
    return string;
  }
  