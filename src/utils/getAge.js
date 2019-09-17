/**
 * Get age
 *
 * @param  {number} year
 * @param  {number} month
 * @param  {number} day
 * @see https://stackoverflow.com/a/7091639/5091221
 * @return int age
 */
export default function (year, month, day) {
	const today = new Date();
	const birthDate = new Date(year, month, day);
	let age = today.getFullYear() - birthDate.getFullYear();
	const m = today.getMonth() - birthDate.getMonth();

	if (0 > m || (0 === m && today.getDate() < birthDate.getDate())) {
		age -= 1;
	}

	return age;
}
