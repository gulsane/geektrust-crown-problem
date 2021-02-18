const { Cipher } = require("./cipher");
const { CIPHERWHEEL } = require("./constants");

class Kingdom {
	constructor(name, emblem) {
		this.name = name;
		this.emblem = emblem.toUpperCase();
		this.cipher = new Cipher(CIPHERWHEEL, emblem.length);
	}

	get kingdomName() {
		return this.name;
	}

	validateMessage(encryptedMessage) {
		const decryptedMessage = this.cipher.decryptMessage(encryptedMessage);
		const isValid = this.emblem.split("").every((letter) => {
			const temp = decryptedMessage.split("");
			let index = temp.indexOf(letter);
			if (index !== -1) {
				temp.splice(index, 1);
				return true;
			}
		});
		return isValid;
	}
}

module.exports = { Kingdom };
