// Complete the divisibleSumPairs function in the editor below. It should return the integer count of pairs meeting the criteria.

// divisibleSumPairs has the following parameter(s):

// n: the integer length of array ar
// ar: an array of integers
// k: the integer to divide the pair sum by

function divisibleSumPairs(n, k, ar) {
	let count = 0;

	for (let i = 0; i < ar.length; i++) {
		for (let j = i + 1; j < ar.length; j++) {
			if ((ar[i] + ar[j]) % k === 0) {
				count += 1;
			}
		}
	}

	return count;
}
