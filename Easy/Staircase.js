// Print a staircase of size  using # symbols and spaces.

function staircase(n) {
	for (let i = 0; i < n; i++) {
		let spaces = new Array(n - i).join(" ");
		let hashes = new Array(2 + i).join("#");
		console.log(spaces + hashes);
	}
}
