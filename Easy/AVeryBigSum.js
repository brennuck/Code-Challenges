// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

function aVeryBigSum(ar) {
	ar = ar.reduce((a, b) => {
		return a + b;
	});
	return ar;
}
