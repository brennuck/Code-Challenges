function viralAdvertising(n) {
	let shared = 5;
	let liked = 2;
	let cumulative = 2;

	for (let i = 0; i < n - 1; i++) {
		if (shared >= 0) {
			shared = liked * 3;
			liked = Math.floor(shared / 2);
			cumulative += liked;
		}
	}

	return cumulative;
}
