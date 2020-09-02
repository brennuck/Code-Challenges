// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

function alternatingSums(a) {
	let team1 = [];
	let team2 = [];
	let sums = [];

	if (a.length == 1) {
		team1 = a[0];
		team2 = 0;
		sums.push(team1, team2);
		return sums;
	} else {
		team1 = a.filter((element, index) => {
			return index % 2 == 0;
		});

		team2 = a.filter((element, index) => {
			return index % 2 == 1;
		});

		team1 = team1.reduce((a, b) => {
			return a + b;
		});

		team2 = team2.reduce((a, b) => {
			return a + b;
		});

		sums.push(team1, team2);
	}
	return sums;
}
