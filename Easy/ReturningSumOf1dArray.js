// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

var runningSum = function (nums) {
	let newNums = [];
	let numsSum = 0;

	nums.forEach((num, i) => {
		if (nums[i] !== null) {
			numsSum += nums[i];
			newNums.push(numsSum);
		}
	});
	return newNums;
};

var runningSum = function (nums) {
	let newNums = [];
	let temp = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== null) {
			temp += nums[i];
			newNums.push(temp);
		}
	}

	return newNums;
};
