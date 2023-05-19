/* Description 

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/


// MY solution

function solution(str){
  let reverseString = str
    .split('')
    .reverse()
    .join('')
  return reverseString
  
}