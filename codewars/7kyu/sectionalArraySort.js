/* Description: 
In this kata you are given an array to sort but you're expected to start sorting from a specific position of the array (in ascending order) and optionally you're given the number of items to sort.

Inputs:
An array to sort
The starting index for sorting
(Optional) The number of items to sort
If the number of items to sort is not provided or is zero, sort the array from the starting position to the end.

Examples:
array: [1, 2, 5, 7, 4, 6, 3, 9, 8]
start: 2
length: not specified
expected result: [1, 2, 3, 4, 5, 6, 7, 8, 9]

array: [9, 7, 4, 2, 5, 3, 1, 8, 6]
start: 2
length: 5
expected result: [9, 7, 1, 2, 3, 4, 5, 8, 6]
*/

// My solution:
function sectSort(array, startIndex, sortItemsLength) {
  const sortedArr = [];
  const start = array.slice(0, startIndex);
  sortedArr.push(...start);

  // Case when sortItemsLength is provided
  if (sortItemsLength) {
    const itemsToSortEndIndex = startIndex + sortItemsLength;

    // Sort only the specified section
    const itemsToSort = array
      .slice(startIndex, itemsToSortEndIndex)
      .sort((a, b) => a - b);
    sortedArr.push(...itemsToSort);
    sortedArr.push(...array.slice(itemsToSortEndIndex));
  }
  // Case when sortItemsLength is not provided - sort to the end
  else {
    const sortedSection = array.filter((num, i) => i >= startIndex);
    sortedArr.push(...sortedSection.sort((a, b) => a - b));
  }

  return sortedArr;
}

// Cleaner version
function sectSort(array, startIndex, sortItemsLength) {
  const sortedSection = array
    .slice(
      startIndex,
      sortItemsLength ? startIndex + sortItemsLength : array.length
    )
    .sort((a, b) => a - b);
  return [
    ...array.slice(0, startIndex),
    ...sortedSection,
    ...array.slice(startIndex + sortedSection.length),
  ];
}
