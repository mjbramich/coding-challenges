/* Description
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

//My solution

function longest(s1, s2) {
    // two strings as inputs
    // return a new string that is sorted a - z containing only distinc letter. 
    //first string from input
    let a = s1
    //second string from input
    let b = s2
    //create new string to hold distinct letters
    let c = ''
    // create a new string that will contain the letters we have iterated over
    let contains = ''
    
    for(let i = 0; i < a.length; i++){
      if(!contains.includes(a[i])){
        c += a[i]
      }
      contains += a[i]
    }
    
    for(let j = 0; j < b.length; j++){
      if(!contains.includes(b[j])){
        c += b[j]
      }
      contains += b[j]
  }
    
    let sorted = c.split('').sort()
    return sorted.join('')
    
  }