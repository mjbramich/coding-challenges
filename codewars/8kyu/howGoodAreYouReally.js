/* Description 
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

*/

// My solution

function betterThanAverage(classPoints, yourPoints) {
    let total = classPoints.reduce((acc,cur) => acc + cur, 0 )
    
    let average = total / classPoints.length 
    
    if(yourPoints >= average){
      return true
    }else{
      return false
    }
  }