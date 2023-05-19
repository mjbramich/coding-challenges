/* Description
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

// My solution

function noBoringZeros(n) {
    let number = n.toString().split('');

    number.forEach((v, i, a) => {
        if (v == 0 && i === number.length - 1) {
            number.pop();
        }
    });

    if (number[number.length - 1] == 0) {
        return noBoringZeros(number.join(''));
    }

    return Number(number.join(''));
}