export default function (year, month, day) {
	const date = new Date(year, month, day);

	if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
		return true;
	}

	return false;
}
