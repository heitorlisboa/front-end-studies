class CpfValidator {
	constructor(cpf) {
		this.valid = this._validate(cpf);

		if (this.valid) {
			this.cpf = this._onlyNumbers(cpf);
		}
	}

	_validate(doc) {
		if (!this._validateInput(doc)) {
			return false;
		}

		doc = this._onlyNumbers(doc);

		if (this._checkRepeatedNumbers(doc)) {
			return false;
		}

		return (
			this._generateFirstDigit(doc) === doc[doc.length - 1] &&
			this._generateSecondDigit(doc) === doc[doc.length - 2]
		);
	}

	_validateInput(doc) {
		// 999.999.999-99
		const cpfPattern = /[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}/;
		const match = doc.match(cpfPattern);

		return match;
	}

	_onlyNumbers(doc) {
		let result = "";

		for (let char of doc) {
			if (this._isNumeric(char)) {
				result += char;
			}
		}

		return result;
	}

	_isNumeric(str) {
		return !isNaN(str) && str !== "";
	}

	_checkRepeatedNumbers(str) {
		const digitsList = [];

		for (let char of str) {
			if (!this._isIn(char, digitsList)) {
				digitsList.push(char);
			}
		}

		if (digitsList.length === 1) {
			return true;
		}

		return false;
	}

	_isIn(givenElement, list) {
		list.forEach((listElement) => {
			if (listElement === givenElement) {
				return true;
			}

			return false;
		});
	}

	_generateFirstDigit(doc) {
		let sum = 0;

		for (let i = 10; i > 1; i--) {
			sum += parseInt(doc[10 - i]) * i;
		}

		let rest = (sum * 10) % 11;

		if (rest === 10) {
			rest = 0;
		}

		return rest.toString();
	}

	_generateSecondDigit(doc) {
		let sum = 0;

		for (let i = 11; i > 1; i--) {
			sum += parseInt(doc[11 - i]) * i;
		}

		let rest = (sum * 10) % 11;

		if (rest === 10) {
			rest = 0;
		}

		return rest.toString();
	}
}

export { CpfValidator };
