/*Description
Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO'] 

 should return: "Total land perimeter: 24".
*/



// My solution
function landPerimeter(arr) {
    let totalPerimeter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'X') {
                let tempPerimeter = 4;
                if (arr[i - 1] && arr[i - 1][j] === 'X') tempPerimeter--; // top of box
                if (arr[i + 1] && arr[i + 1][j] === 'X') tempPerimeter--; //bottom of box
                if (arr[i][j - 1] === 'X') tempPerimeter--; // left of box
                if (arr[i][j + 1] === 'X') tempPerimeter--; //right of box
                totalPerimeter += tempPerimeter;
            }
        }
    }
    return `Total land perimeter: ${totalPerimeter}`;
}