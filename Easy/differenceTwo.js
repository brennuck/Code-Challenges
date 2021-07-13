// Create a function that takes an array of integers and returns all pairs of integers that have a difference of two. The resulting array should be sorted in ascending order of values.

function differenceTwo(n) {
	let duos = [];

	n = n.sort();

	for (let i = 0; i < n.length; i++) {
		for (let j = i; j < n.length; j++) {
			if (n[i] + 2 === n[j]) {
				duos.push([n[i], n[j]]);
			}
		}
	}

	return duos;
}
