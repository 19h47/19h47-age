import isValidate from './utils/isValidate';
import getAge from './utils/getAge';

class Age {
	constructor(element) {
		this.$container = element;
	}

	init() {
		if (null === this.$container) return false;

		this.$day = this.$container.querySelector('.js-day');
		this.$month = this.$container.querySelector('.js-month');
		this.$year = this.$container.querySelector('.js-year');

		this.day = 1;
		this.month = 0;
		this.year = new Date().getFullYear();

		this.date = new Date(this.year, this.month, this.day);

		this.initEvents();

		return true;
	}

	initEvents() {
		this.$day.addEventListener('change', (event) => {
			const { target } = event;
			// 1-31
			this.day = parseInt(target.options[target.selectedIndex].value, 10);
			this.validate();
		});

		this.$month.addEventListener('change', (event) => {
			const { target } = event;

			// 0-11
			this.month = parseInt(target.options[target.selectedIndex].value - 1, 10);
			this.validate();
		});

		this.$year.addEventListener('change', (event) => {
			const { target } = event;

			this.year = parseInt(target.options[target.selectedIndex].value, 10);
			this.validate();
		});
	}

	validate() {
		const age = getAge(this.year, this.month, this.day);

		if (!isValidate(this.year, this.month, this.day)) {
			// console.log({ year: this.year, month: this.month, day: this.day });
			return false;
		}

		const event = new CustomEvent('Age.change', { detail: { age } });

		return this.$container.dispatchEvent(event);
	}
}

export default Age;
