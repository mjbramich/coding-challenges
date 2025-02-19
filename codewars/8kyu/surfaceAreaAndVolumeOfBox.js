/* Description:
Write a function that returns the total surface area and volume of a box as an array: [area, volume]


*/

// My solution:
function getSize(width, height, depth) {
  const totalSurfaceArea =
    2 * (width * height + width * depth + height * depth);
  const volume = width * height * depth;
  return [totalSurfaceArea, volume];
}
