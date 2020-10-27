// An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

// The player with the highest score is ranked number  on the leaderboard.
// Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.

function climbingLeaderboard(scores, alice) {
	let aliceRankings = [];

	for (let i = 0; i < alice.length; i++) {
		scores.push(alice[i]);
		scores = [...new Set(scores)];
		scores.sort((a, b) => b - a);
		aliceRankings.push(scores.indexOf(alice[i]) + 1);
	}

	return aliceRankings;
}
