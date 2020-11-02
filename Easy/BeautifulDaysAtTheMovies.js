// Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number , its reverse is . Their difference is . The number  reversed is , and their difference is .

// She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

// Given a range of numbered days,  and a number , determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where  is evenly divisible by . If a day's value is a beautiful number, it is a beautiful day. Print the number of beautiful days in the range.

function beautifulDays(i, j, k) {
	let beautifulCount = 0;
	let dateRange = [];
	let reversedNum = 0;

	for (let a = i; a < j; a++) {
		if (i != j) {
			a + 1;
			dateRange.push(a);
		}
	}

	dateRange.push(j);

	for (let b = 0; b < dateRange.length; b++) {
		reversedNum =
			parseFloat(dateRange[b].toString().split("").reverse().join("")) *
			Math.sign(dateRange[b]);
		if ((dateRange[b] - reversedNum) % k === 0) {
			beautifulCount += 1;
		}
	}

	return beautifulCount;
}
