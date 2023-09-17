/* Description
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:
Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23

Constraints:

1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109
*/

// My solution
var minEatingSpeed = function (piles, h) {
	// pointers
	let [left, right] = [1, Math.max(...piles)];
	let res = Math.max(...piles);

	while (left <= right) {
		let k = Math.floor((left + right) / 2);
		let hours = 0;

		for (let p of piles) {
			hours += Math.ceil(p / k);
		}

		if (hours <= h) {
			res = Math.min(res, k);
			right = k - 1;
		} else {
			left = k + 1;
		}
	}

	return res;
};

// Brute force
// var minEatingSpeed = function (piles, h) {
// 	const maxPile = Math.max(...piles);

// 	for (let k = 1; k <= maxPile; k++) {
// 		let hours = 0;

// 		for (let pile of piles) {
// 			hours += Math.ceil(pile / k);
// 		}

// 		if (hours <= h) {
// 			// since we start iterating from 1 hr (which would be least)
// 			return k; // Return the minimum eating speed as soon as it's found.
// 		}
// 	}

// 	return maxPile; // If no speed is found in the loop, return the maximum pile size.
// };
