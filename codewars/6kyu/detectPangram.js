/* Description

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

//My solution

function isPangram(string) {
    let alphaArr = Array.from('abcdefghijklmnopqrstuvwxyz');

    let strLower = string.toLowerCase();

    let newStr = '';

    for (let i = 0; i < strLower.length; i++) {
        if (alphaArr.includes(strLower[i])) {
            newStr += strLower[i];
        }
    }
    let strSet = new Set(newStr);

    return strSet.size == alphaArr.length ? true : false;
}