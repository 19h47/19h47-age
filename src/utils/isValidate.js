/**
 * Is validate
 *
 * @param  {number} year  The year.
 * @param  {number} month The month.
 * @param  {number} day   The day.
 * @return {boolean}
 */
export default function isValidate(year, month, day) {
	const date = new Date(year, month, day);

	if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
		return true;
	}

	return false;
}
