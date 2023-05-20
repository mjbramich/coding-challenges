/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let digits = x.toString().split('').reverse().join('')

    return x === Number(digits)
};

