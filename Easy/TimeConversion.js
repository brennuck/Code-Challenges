// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
	let timezone = s[s.length - 2];
	let hour = s.substring(0, 2);
	s = s.substring(0, s.length - 2);

	if (timezone == "P") {
		if (hour == "12") {
			hour = hour;
		} else {
			hour = parseInt(hour);
			hour = hour + 12;
			hour = String(hour);
			s = s.substring(2);
			s = hour + s;
			return s;
		}
	} else {
		if (hour == "12") {
			hour = "00";
			s = s.substring(2);
			s = hour + s;
			return s;
		}
	}
	return s;
}
