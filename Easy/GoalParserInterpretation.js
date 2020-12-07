// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

var interpret = function (command) {
	command = command.split("");

	for (let i = 0; i < command.length; i++) {
		if (command[i] === "(" && command[i + 1] === ")") {
			command.splice(i, 2, "o");
		}

		if (command[i] === "(" || command[i] === ")") {
			command.splice(i, 1);
		}
	}

	return command.join("");
};
