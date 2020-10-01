// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

function countingValleys(steps, path) {
	let count = 0;
	let valleysCount = 0;

	path = path.split("");

	for (let i = 0; i < path.length; i++) {
		if (path[i] === "D") {
			count += -1;
		} else if (path[i] === "U") {
			count += 1;
		}

		if (count == 0 && path[i] == "U") {
			valleysCount += 1;
		}
	}
	return valleysCount;
}
