// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
	let totalApples = 0;
	let totalOranges = 0;

	for (let i = 0; i <= apples.length; i++) {
		if (a + apples[i] >= s && a + apples[i] <= t) {
			totalApples += 1;
		}
	}

	for (let i = 0; i <= oranges.length; i++) {
		if (b + oranges[i] >= s && b + oranges[i] <= t) {
			totalOranges += 1;
		}
	}

	console.log(totalApples);
	console.log(totalOranges);
}
