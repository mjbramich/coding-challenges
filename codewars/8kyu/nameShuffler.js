/* Description
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

// My solution
function nameShuffler(str){
    let space = str.indexOf(" ");
    return str.slice(space + 1) + " " + str.slice(0, space);
  }

  