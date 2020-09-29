// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

function breakingRecords(scores) {
	let firstMax = [];
	let firstMin = [];
	let maxCounter = 0;
	let minCounter = 0;

	firstMax.push(scores[0]);
	firstMin.push(scores[0]);

	scores = scores.slice(1);
	scores = [...new Set(scores)];

	for (let i = 0; i < scores.length; i++) {
		if (scores[i] > firstMax) {
			maxCounter += 1;
			firstMax = scores[i];
		}

		if (scores[i] < firstMin) {
			minCounter += 1;
			firstMin = scores[i];
		}
	}
	return [maxCounter, minCounter];
}
