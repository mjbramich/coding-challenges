export function minUmbrellas(weather: string[]) {
  const raining = ["rainy", "thunderstorms"];

  let home = 0;
  let work = 0;
  let count = 0;

  // Iterate through the weather array; mornings are at even indices, afternoons at odd.
  for (let i = 0; i < weather.length; i++) {
    if (i % 2 === 0) {
      if (raining.includes(weather[i])) {
        if (home === 0) {
          count++;
          home++;
        }
        home--;
        work++;
      }
    } else {
      if (raining.includes(weather[i])) {
        if (work === 0) {
          count++;
          work++;
        }
        work--;
        home++;
      }
    }
  }

  return count;
}
