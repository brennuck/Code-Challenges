// Implement the ensure function so that it throws an error if called without arguments or the argument is undefined. Otherwise it should return the given value.

function ensure(value) {
	if (value === undefined) {
		throw new Error("error");
	}
	return value;
}

try {
	console.log(ensure());
} catch (err) {
	console.log(err);
}
