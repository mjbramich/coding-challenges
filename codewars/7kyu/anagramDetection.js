/* Description
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

// My solution

// write the function isAnagram
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    return (
        s.toLowerCase().split('').sort().join('') ===
        t.toLowerCase().split('').sort().join('')
    );
};
