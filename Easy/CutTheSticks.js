// You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

function cutTheSticks(arr) {
	let output = [];
	while (arr.length != 0) {
		let minVal = Math.min(...arr);
		output.push(arr.length);
		for (let i = 0; i < arr.length; i++) {
			let sub = arr[i] - minVal;

			if (sub === 0) {
				arr.splice(i, 1);
				i -= 1;
			} else {
				arr[i] = sub;
			}
		}
	}
	return output;
}
