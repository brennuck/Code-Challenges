// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

function jumpingOnClouds(c) {
	var stepsArray = [];

	let i = 0;
	while (i < c.length - 1) {
		if (i + 2 < c.length && c[i + 2] === 0) {
			stepsArray.push(c[i + 2]);
			i += 2;
		} else {
			stepsArray.push(c[i + 1]);
			i += 1;
		}
	}
	return stepsArray.length;
}
