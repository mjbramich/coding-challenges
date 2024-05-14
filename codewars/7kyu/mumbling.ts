function mumbling(str: string) {
  // Input is a string.
  // Based on the strings position (Index) need repeat the character by its index but start with capital
  // return a string with a seprator '-' between each different character

  return str
    .toLowerCase()
    .split("")
    .map((c, i) => {
      const cap = c.toUpperCase();
      c = cap + c.repeat(i);
      return c;
    })
    .join("-");
}

console.log(mumbling("abcd"));
