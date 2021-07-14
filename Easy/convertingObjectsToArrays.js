// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

function toArray(obj) {
	let arrayConvert = [];

	for (const i in obj) {
		arrayConvert.push([i, obj[i]]);
	}

	return arrayConvert;
}
