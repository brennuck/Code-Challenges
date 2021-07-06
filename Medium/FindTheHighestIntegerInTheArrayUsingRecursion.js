// Create a function that finds the highest integer in the array using recursion.

function findHighest(arr) {
	let highest = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > highest) {
			highest = arr[i];
		}
	}

	return highest;
}
