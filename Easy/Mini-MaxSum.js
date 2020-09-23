// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
	arr = arr.sort();
	let max = [...arr];
	let min = [...arr];

	max.shift();
	max = max.reduce((a, b) => {
		return a + b;
	});

	min.pop();
	min = min.reduce((a, b) => {
		return a + b;
	});

	console.log(min, max);
}
