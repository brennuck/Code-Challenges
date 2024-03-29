// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

var kidsWithCandies = function (candies, extraCandies) {
	let checker = [];
	let max = Math.max.apply(Math, candies);

	for (let i = 0; i < candies.length; i++) {
		if (candies[i] + extraCandies >= max) {
			checker.push(true);
		} else {
			checker.push(false);
		}
	}
	return checker;
};
