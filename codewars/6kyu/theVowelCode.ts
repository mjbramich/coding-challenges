const vowelMap = (char: string): string => {
  const map: { [key: string]: string } = {
    a: `1`,
    e: `2`,
    i: `3`,
    o: `4`,
    u: `5`,
  };

  return map[char];
};

const numberMap = (char: string): string => {
  const map: { [key: string]: string } = {
    1: `a`,
    2: `e`,
    3: `i`,
    4: `o`,
    5: `u`,
  };

  return map[char];
};

// turn vowels into numbers
export function encode(string: string): string {
  const vowels = ["a", "e", "i", "o", "u"];
  let encodedString = "";

  for (let c of string) {
    if (vowels.includes(c)) {
      const vowel = vowelMap(c);
      encodedString += vowel;
    } else {
      encodedString += c;
    }
  }

  return encodedString;
}

// turn numbers back into vowels
export function decode(string: string): string {
  const numbers = ["1", "2", "3", "4", "5"];
  let decodedString = "";

  for (let c of string) {
    if (numbers.includes(c)) {
      const vowel = numberMap(c);
      decodedString += vowel;
    } else {
      decodedString += c;
    }
  }
  return decodedString;
}
