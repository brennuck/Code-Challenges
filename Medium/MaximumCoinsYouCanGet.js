// There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:

// In each step, you will choose any 3 piles of coins (not necessarily consecutive).
// Of your choice, Alice will pick the pile with the maximum number of coins.
// You will pick the next pile with maximum number of coins.
// Your friend Bob will pick the last pile.
// Repeat until there are no more piles of coins.
// Given an array of integers piles where piles[i] is the number of coins in the ith pile.

// Return the maximum number of coins which you can have.

var maxCoins = function (piles) {
	piles = piles.sort(function (a, b) {
		return b - a;
	});
	// base case if there are only 3 that means 1 pair so return the middle one
	if (piles.length === 3) {
		return piles[1];
	}
	// bob's entries as he doesn't get to pick so, he will always get the worst pick in each pair
	const howMuchToRemove = Math.floor(piles.length / 3);
	// removing bob's entries
	piles = piles.slice(0, piles.length - howMuchToRemove);
	let sum = 0;
	// from remaining array the 2nd maximum will be our's so adding all of those up
	for (let i = 0; i < piles.length; i++) {
		if (i % 2 !== 0) {
			sum = sum + piles[i];
		}
	}
	return sum;
};
