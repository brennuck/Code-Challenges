// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

const numberOfSteps = (num) => {
	let steps = 0;

	const helper = (number) => {
		if (number === 0) {
			return steps;
		}

		steps++;

		if (number % 2 === 0) {
			helper(number / 2);
		} else {
			helper(number - 1);
		}
	};

	helper(num);

	return steps;
};
