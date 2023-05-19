/* Description
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/



//My solution
function digitalRoot(n) {
    // input = non negative integer

    // Have to sum all the digits together until there is a single digit. eg. 1234 => 1 + 2 + 3 + 4 = 10 => 1+0 = 1

    //get array of digits
    let digits = n
        .toString()
        .split('')
        .map((v) => Number(v));

    // reduce digits into a single figure
    let sumDigitalRoot = digits.reduce((acc, cur) => acc + cur, 0);

    // single digit? return it, or call digitalRoot function again
    return sumDigitalRoot <= 9 ? sumDigitalRoot : digitalRoot(sumDigitalRoot);
}