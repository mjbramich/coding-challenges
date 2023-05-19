function removeSmallest(numbers) {
  //return empty array if array is empty or only have one value
  if (numbers.length <= 1) {
    return [];
  }
  // find the minimum number in the array
  let min = Math.min(...numbers);
  let newArray = numbers.slice(0);
  let resultArray = [];
  let minCount = 0;

  newArray.forEach((value, index, array) => {
    if (value > min) {
      resultArray.push(value);
    } else if (array.indexOf(min) === index) {
      resultArray.splice(index, 1);
      minCount++;
    } else if (array.lastIndexOf(min) === index && minCount > 0) {
      resultArray.push(value);
    }
  });

  return resultArray;
}
