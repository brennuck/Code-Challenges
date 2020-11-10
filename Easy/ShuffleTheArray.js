// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

var shuffle = function (nums, n) {
	const half = Math.ceil(nums.length / 2);
	let left = nums.splice(0, half);
	let right = nums.splice(-half);
	let shuffled = [];

	for (let i = 0; i < nums.length; i++) {
		if (left.length == right.length) {
			shuffled.push([left[0]]);
			left.splice(0, 1);
		} else {
			shuffled.push([right[0]]);
			right.splice(0, 1);
		}
	}

	return shuffled;
};
