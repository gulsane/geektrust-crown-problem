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
		let decryptedMessage = this.cipher.decryptMessage(encryptedMessage);
		decryptedMessage = decryptedMessage.split("");
		const isValid = this.emblem.split("").every((letter) => {
			let index = decryptedMessage.indexOf(letter);
			if (index !== -1) {
				decryptedMessage.splice(index, 1);
				return true;
			}
		});
		return isValid;
	}
}

module.exports = { Kingdom };
