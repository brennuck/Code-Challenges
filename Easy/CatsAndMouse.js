// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

function catAndMouse(x, y, z) {
	let a = Math.abs(x - z);
	let b = Math.abs(y - z);

	if (a < b) {
		return "Cat A";
	} else if (b < a) {
		return "Cat B";
	} else {
		return "Mouse C";
	}
}
