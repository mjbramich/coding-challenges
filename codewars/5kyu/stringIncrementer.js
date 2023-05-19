/* Description
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

// My solution

function incrementString(str) {
    let num = '';
    let i = str.length - 1;

    while (i >= 0 && !isNaN(parseInt(str[i]))) {
        num = str[i] + num;
        i--;
    }

    if (num === '') {
        return str + '1';
    }

    num = (parseInt(num) + 1).toString();

    let numZeros = Math.max(0, str.length - i - num.length - 1);

    return str.slice(0, i + 1) + '0'.repeat(numZeros) + num;
}
  