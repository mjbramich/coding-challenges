function XO(str) {
  //turn string into lowercase and into array
  let toArray = str.toLowerCase().split('');
  // get count for x and o's

  let counted = toArray
    .filter((value) => value === 'x' || value === 'o')
    .reduce((acc, value) => {
      if (acc[value]) {
        acc[value] += 1;
      } else {
        acc[value] = 1;
      }
      return acc;
    }, {});

  return counted.x === counted.o ? true : false;
}
