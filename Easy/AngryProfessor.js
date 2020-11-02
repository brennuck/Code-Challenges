// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, he decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time () to arrived late ().

// Given the arrival time of each student and a threshhold number of attendees, determine if the class is canceled.

function angryProfessor(k, a) {
	let count = 0;

	for (let i = 0; i < a.length; i++) {
		if (a[i] <= 0) {
			count += 1;
		}
	}

	if (count >= k) {
		return "NO";
	} else {
		return "YES";
	}
}
