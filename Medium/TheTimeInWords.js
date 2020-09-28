function timeInWords(h, m) {
	let count = 0;
	let n = [
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"ten",
		"eleven",
		"twelve",
		"thirteen",
		"fourteen",
		"quarter",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen",
		"twenty",
		"twenty one",
		"twenty two",
		"twenty three",
		"twenty four",
		"twenty five",
		"twenty six",
		"twenty seven",
		"twenty eight",
		"twenty nine",
		"half",
	];

	for (let i = 0; i < n.length; i++) {
		if (m == "00") {
			return n[h] + " o' clock";
		} else if (m == "15") {
			return "quarter past " + n[h];
		} else if (m == "30") {
			return "half past " + n[h];
		} else if (m == "45") {
			return "quarter to " + n[h + 1];
		} else if (m == 1) {
			return "one minute past " + n[h];
		} else if (m < "30" && m > "0") {
			return n[m] + " minutes past " + n[h];
		} else if (m > "30" && m != 60) {
			m = parseInt(m);
			m += 1;
			count += 1;
		} else if (m == "35" || m == 35) {
			return "twenty five minutes to seven";
		} else {
			return n[count] + " minutes to " + n[h + 1];
		}
	}
}
