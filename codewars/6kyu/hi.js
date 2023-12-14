function missingLetter(arr) {
	// array as a input
	// need to return the missing letter in the array

	let alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

	let startingLetter = arr[0];
	let startPosition = alphabet.indexOf(startingLetter);
	console.log(startPosition);
	let missingLetter = '';

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== alphabet[startPosition + i]) {
			 missingLetter = alphabet[i]
			 break;
		}
	}

	return arr[0] === arr[0].toLowerCase ? missingLetter.toLowerCase() : missingLetter.toUpperCase()
}

console.log(missingLetter(['a','b','c','d','f']));
