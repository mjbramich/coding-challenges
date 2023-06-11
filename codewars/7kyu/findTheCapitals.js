/* Description
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
*/ 

// My solution

function capital(word) {
    let list = [];

    for (let i = 0; i < word.length; i++) {
        const l = word[i];

        if (l.toUpperCase() === l) {
            list.push(i);
        }
    }
    return list;
}