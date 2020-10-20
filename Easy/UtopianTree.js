// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

function utopianTree(n) {
	let spring = true;
	let height = 1;

	for (let i = 0; i < n; i++) {
		if (spring == true) {
			height *= 2;
			spring = false;
		} else {
			height += 1;
			spring = true;
		}
	}

	return height;
}
