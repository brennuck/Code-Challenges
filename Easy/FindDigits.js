// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

function findDigits(n) {
	let count = 0;
	let splitN = n.toString().split("");

	for (let i = 0; i < splitN.length; i++) {
		if (n % splitN[i] === 0) {
			count += 1;
		}
	}

	return count;
}
