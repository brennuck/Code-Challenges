// Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === true) {
			count += 1;
		}
	}

	return count;
}
