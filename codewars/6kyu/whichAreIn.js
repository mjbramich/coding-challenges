/* Description

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
*/

// My solution
function inArray(array1,array2){
    // need to return a sorted array, where the array1 substring are in array2
    let r = []
    for(let i = 0; i < array2.length; i++){
      const string = array2[i]
      
      for(let j = 0; j < array1.length; j++){
        const sub = array1[j]
        if(string.includes(sub) && !r.includes(sub)){
        r.push(sub)
        }  
      }
    }
    return r.sort()
  }