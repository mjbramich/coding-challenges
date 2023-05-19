/* Description
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

//My solution
function replace(s){

    const vowels = 'aeiouAEIOU'
    let newString = ''
    for(const letter of s){
      if(vowels.includes(letter)){
        newString += '!'
      }else{
        newString += letter
      }
    }
    
    return newString
    
  }