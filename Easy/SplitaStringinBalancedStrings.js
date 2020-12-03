// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

var balancedStringSplit = function (s) {
	let count = 0;
	let balanced = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "L") {
			balanced++;
		} else if (s[i] === "R") {
			balanced--;
		}

		if (balanced === 0) {
			count += 1;
		}
	}

	return count;
};
