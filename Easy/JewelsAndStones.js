// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

var numJewelsInStones = function (J, S) {
	let count = 0;

	J = J.split("");
	S = S.split("");

	for (let i = 0; i < S.length; i++) {
		for (let z = 0; z < J.length; z++) {
			if (J[z] == S[i]) {
				count += 1;
			}
		}
	}
	return count;
};
