/* Description 

Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to accound for different data types.

*/

//My solution

function findShort(s){
    let shortArr = s.split(' ')
    let shortest = shortArr[0]

    shortArr.forEach(word => {
        if(word.length < shortest.length){
            shortest = word
        }
    })
    return shortest.length
}