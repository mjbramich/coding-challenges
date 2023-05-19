/* Description

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

//My solution

function high(x) {
    // turn input string of words, to an array of words
    let words = x.toLowerCase().split(' ');
    //Create highestScoring word and highest score variables
    let highestScoring = '';
    let highestScore = 0;

    //loop through array of word
    for (let i = 0; i < words.length; i++) {
        // Declare variavle word, to hold current word in array
        const word = words[i];
        // calculates the score of each word, by splitting word into individual letters then converting each letter to its ASCII value, but since we want letters to be scored from 1. we take 96 away from the ascii value. Then we reduce the values of each letter , into a single score
        let wordScore = word
            .split('')
            .map((v) => v.charCodeAt(0) - 96)
            .reduce((acc, cur) => acc + cur, 0);
        // check to see if current word score is higher than the highestScore, if so current word is new highestScoring word.
        if (wordScore > highestScore) {
            highestScore = wordScore;
            highestScoring = word;
        }
    }
    return highestScoring;
}

