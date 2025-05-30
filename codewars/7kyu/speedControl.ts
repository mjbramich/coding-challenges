/* Description:
In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
The sections are:

0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
We can calculate John's average hourly speed on every section and we get:

[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

Example:
With the above data your function gps(s, x) should return 74
*/

// My Solution:
export const gps = (s: number, x: number[]): number => {
  // Car didn't move
  if (x.length <= 1) {
    return 0;
  }

  const distances: number[] = [];

  for (let i = x.length - 1; i >= 1; i--) {
    const distance = x[i] - x[i - 1];
    distances.push(distance);
  }

  const averageSpeeds = distances.map((distance) => (3600 * distance) / s);
  return Math.floor(Math.max(...averageSpeeds));
};
