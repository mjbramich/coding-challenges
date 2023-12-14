function singleNumber(nums: number[]): number {
	// now need to do it using a hashmap
	let map = new Map<number, number>();

	for (let num of nums) {
		if (map.has(num)) {
            //
			map.set(num, map.get(num)! + 1);
		} else {
			map.set(num, 1);
		}
	}

	for (let key in map) {
		if (map[key] === 1) {
			return +key;
		}
	}
}

function singleNumber(nums: number[]): number {
    // now need to do it using a hashmap
    let map = new Map<number, number>();

    for (let num of nums) {
        // if no num(undefined) we default value to 0
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [key, value] of map.entries()) {
        if (value === 1) {
            return key;
        }
    }

    // Handle the case where no unique number is found
    return -1; // Or any other appropriate value
}