/* Description
Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 
Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

//My solution
var addBinary = function (a, b) {
    let carry = 0;
    let result = '';

    // make binary numbers same length
    if (a.length > b.length) {
        b = '0'.repeat(a.length - b.length) + b;
    } else {
        a = '0'.repeat(b.length - a.length) + a;
    }

    //
    for (let i = a.length - 1; i >= 0; i--) {
        sum = parseInt(a[i]) + parseInt(b[i]) + carry;

        if (sum > 1) {
            carry = 1;
        } else {
            carry = 0;
        }

        result = (sum % 2) + result;
    }

    return carry === 1 ? (result = carry + result) : result;
};