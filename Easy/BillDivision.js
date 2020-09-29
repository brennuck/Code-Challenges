// Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

function bonAppetit(bill, k, b) {
	bill.splice(k, 1);

	let billTotal =
		bill.reduce((a, b) => {
			return a + b;
		}) / 2;

	if (b - billTotal == 0) {
		console.log("Bon Appetit");
	} else {
		console.log(b - billTotal);
	}
}
