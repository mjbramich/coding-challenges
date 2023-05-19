function pigIt(str) {
    // input is a string
    // need to move the first letter of each word to the end of the word, then add 'ay' to each word, leave punctuatuion as is
    // turn str into an array of words
    let words = str.split(' ');
    let changed = words
        .map((v, i, a) => {
            //split word into array of characters
            let word = v.split('');
            //remove starting letter and store in variable
            let startingLetter = word.shift();
            word.push(startingLetter);
            //checking for punctuation
            if (!word.includes('!') && !word.includes('?')) {
                word.push('ay');
            }
            return word.join('');
        })
        .join(' ');
    return changed;
}
