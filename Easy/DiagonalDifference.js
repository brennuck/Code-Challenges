// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
	let diag1 = 0;
	let diag2 = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (i === j) {
				// i === j (0,0 , 1,1 , 2,2) (diagnal)
				diag1 += arr[i][j]; // add all the values up into diag1
			}

			if (i + j === arr.length - 1) {
				diag2 += arr[i][j];
			}
		}
	}
	return Math.abs(diag1 - diag2);
}
