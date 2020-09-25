// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
	let zeroCount = 0;
	let negCount = 0;
	let posCount = 0;
	let values = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			zeroCount += 1;
		} else if (arr[i] < 0) {
			negCount += 1;
		} else {
			posCount += 1;
		}
	}

	values.push(
		zeroCount / arr.length,
		negCount / arr.length,
		posCount / arr.length
	);
	values.sort(function (a, b) {
		return a + b;
	});

	values.forEach((value) => {
		console.log(value.toFixed(6));
	});
}
