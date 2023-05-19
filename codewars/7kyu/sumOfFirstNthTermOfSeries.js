/* Description 

Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

// My solution

function SeriesSum(n){
    let sum = 0
    for(let i = 1; i <= n; i++){
      sum += 1/(3 * i - 2)
    }
    return sum.toFixed(2)
  }

// Here, i is the index of the term (starts from 1) and it is used to calculate the numerator of the fraction in the series.

// The denominator (3i-2) is calculated by multiplying the index of the term with 3 and then subtracting 2 from the result.

// So for example, when i = 1, the first term in the series is 1/(31-2) = 1/1 = 1.
// When i = 2, the second term in the series is 1/(32-2) = 1/4.
// When i = 3, the third term in the series is 1/(3*3-2) = 1/7.
// and so on..

// By using this formula, you can calculate the ith term of the series and can find the sum of the series.