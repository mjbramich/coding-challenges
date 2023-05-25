var strStr = function(haystack, needle) {
    // take in two strings, which consists of lowercase characters

    // hello, hell => 0

    //examples
    // haystack = "sadbutsad", needle = "sad" => 0
    //haystack = "leetcode", needle = "leeto" => -1

    // if string have no length
    if(!haystack.length || !needle.length){
        return -1
    }

    let index = -1

    if(haystack.includes(needle)){
        index = haystack.indexOf(needle)
    }

    return index


};
