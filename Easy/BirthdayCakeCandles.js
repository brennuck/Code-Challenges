// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest

function birthdayCakeCandles(candles) {
	let count = 0;

	let max = candles.reduce((a, b) => {
		return Math.max(a, b);
	});

	for (let i = 0; i < candles.length; i++) {
		if (candles[i] == max) {
			count += 1;
		} else {
			count += 0;
		}
	}

	return count;
}
