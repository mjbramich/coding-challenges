/* Description: 
Create a method that accepts a list and an item, 
and returns true if the item belongs to the list, otherwise false. 
*/

// My solution

// Trying to not use array methods (eg. includes, indexOf, etc.)

function include(arr, item) {
  if (arr.length < 1) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
}
