// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

function firstNotRepeatingCharacter(s) {
	newArr = s.split("");
	s = s.split("");

	let duplicates = s.filter((item, index) => s.indexOf(item) != index);
	s = duplicates;

	newArr = newArr.filter((val) => !s.includes(val));
	s = newArr;

	if (newArr.length == 0) {
		return "_";
	} else {
		return s[0];
	}
	return "_";
}
