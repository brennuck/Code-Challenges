// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's grade according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

function gradingStudents(grades) {
	let roundedGrades = [];

	for (let i = 0; i < grades.length; i++) {
		if (grades[i] <= 40) {
			if (grades[i] + 1 === 40) {
				roundedGrades.push(grades[i] + 1);
			} else if (grades[i] + 2 === 40) {
				roundedGrades.push(grades[i] + 2);
			} else {
				roundedGrades.push(grades[i]);
			}
		} else {
			if ((grades[i] + 1) % 5 === 0) {
				roundedGrades.push(grades[i] + 1);
			} else if ((grades[i] + 2) % 5 === 0) {
				roundedGrades.push(grades[i] + 2);
			} else {
				roundedGrades.push(grades[i]);
			}
		}
	}
	return roundedGrades;
}
