// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

var subtractProductAndSum = function (n) {
	let add = [];
	let mult = [];

	n = ("" + n).split("");

	n.map((each) => {
		add.push(Number(each));
		mult.push(Number(each));
	});

	add = add.reduce((a, b) => {
		return a + b;
	});

	mult = mult.reduce((a, b) => {
		return a * b;
	});

	return (mult -= add);
};
