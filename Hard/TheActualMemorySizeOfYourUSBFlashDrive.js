// Create a function that takes the memory size (ms is a string type) as an argument and returns the actual memory size.

function actualMemorySize(ms) {
	let storage = ms.slice(-2);
	let num = ms.slice(0, -2);
	let percentToGet = 7;
	let divider = (percentToGet / 100) * num;

	if (storage === "MB") {
		return Math.round(num - divider) + "MB";
	} else {
		num = num * 1000;
		divider = (percentToGet / 100) * num;

		num = num - divider;

		if (num <= 1000) {
			return num + "MB";
		} else {
			return num / 1000 + "GB";
		}
	}
}
