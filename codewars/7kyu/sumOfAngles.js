/* Description
Find the total sum on internal angles(in degrees) in a n-sided simple polygon. N always greater than 2
*/

// My solution
function angle(n) {
    // can split the polygon into triangles
    return 180 * (n-2)
}