function howManyGames(p, d, m, s) {
	let purchased = 1;

	s = s - p;
	p = p - d;

	if (p > s) {
		return 0;
	}

	for (let i = 0; i < 10000; i++) {
		if (s >= m && p > m) {
			s -= p;
			p -= d;
			purchased += 1;
		} else if (s >= m && p <= m) {
			s -= m;
			purchased += 1;
		}
	}
	return purchased;
}
