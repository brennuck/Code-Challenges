// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

function sevenBoom(arr) {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i].toString().split(""));
		if (arr[i].toString().split("").includes("7")) {
			count += 1;
		}
	}

	if (count > 0) {
		return "Boom!";
	} else {
		return "there is no 7 in the array";
	}
}
