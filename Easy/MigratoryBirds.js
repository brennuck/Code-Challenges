// You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.

function migratoryBirds(arr) {
	let counts = {};
	let compare = 0;
	let mostFreq;

	for (let i = 0; i < arr.length; i++) {
		let word = arr[i];

		if (counts[word] === undefined) {
			counts[word] = 1;
		} else {
			counts[word] = counts[word] + 1;
		}

		if (counts[word] > compare) {
			compare = counts[word];
			mostFreq = arr[i];
		}
	}

	return mostFreq;
}
