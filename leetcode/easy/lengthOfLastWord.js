var lengthOfLastWord = function(s) {
    // split string into array of words
    let arrayOfWords = s.split(' ')

    for(let i = 0; i < arrayOfWords.length;i++){
        // 
        if(arrayOfWords[i] == ''){
            arrayOfWords.splice(i,1)
            i--
        }
    }
    // select last word in array and grab its length
    return arrayOfWords[arrayOfWords.length - 1].length

};
