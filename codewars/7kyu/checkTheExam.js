/* Description

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

*/

//My solution

// function checkExam(array1, array2) { 
//     let score = 0
    
//     array1.forEach((v,i,a) => {
//       if(a[i] === array2[i]){
//         score+= 4
//       }else if(array2[i] == ''){
//         score += 0
//       }else if(a[i] !== array2[i]){
//         score -= 1
//       }
//     })
    
//     if(score < 0){
//       return 0
//     }
    
//     return score
    
//   }

function checkExam(array1,array2){

  let result = array2.reduce((acc, cur, i) => {
    if(cur === array1[i]) return acc+= 4
    else if(cur === '') return acc
    else return acc -= 1
  },0)

 return result > 0 ? result : 0 
}