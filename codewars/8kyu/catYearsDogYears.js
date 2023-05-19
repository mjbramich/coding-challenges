/* Description
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

// My solution

const humanYearsCatYearsDogYears = (humanYears) => {
    if (humanYears === 0) {
        return [0, 0, 0];
    }

    if (humanYears === 1) {
        return [1, 15, 15];
    }

    let catYears = 15 + 9 + (humanYears - 2) * 4;
    let dogYears = 15 + 9 + (humanYears - 2) * 5;

    return [humanYears, catYears, dogYears];
};