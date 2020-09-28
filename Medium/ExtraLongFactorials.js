

function extraLongFactorials(n) {
	let all = [];
	let sum = 1;

	for (let i = 0; i < n; i++) {
		all.push(i + 1);
	}

	all.sort((a, b) => b - a);

	for (let j = 0; j < all.length; j++) {
		sum = sum * all[j];
	}

	console.log(sum);
}
