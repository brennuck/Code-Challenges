// Given an array nums of integers, return how many of them contain an even number of digits.

var findNumbers = function (nums) {
	let count = 0;

	nums = nums.toString().split(",");

	for (let i = 0; i < nums.length; i++) {
		if (nums[i].length % 2 === 0) {
			count += 1;
		}
	}

	return count;
};
