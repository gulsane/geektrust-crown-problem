class Cipher {
	constructor(cipherWheel, cipherKey) {
		this.wheel = cipherWheel;
		this.cipherKey = cipherKey;
		this.wheelCycle = cipherWheel.length;
	}

	decryptLetter(cipherLetter) {
		const firstPosition = 0;
		const cipherLetterPosition = this.wheel.indexOf(cipherLetter);

		if (cipherLetterPosition < firstPosition) return null;

		let letterIndex = cipherLetterPosition - (this.cipherKey % this.wheelCycle);

		if (letterIndex < firstPosition) {
			letterIndex += this.wheel.length;
		}
		return this.wheel[letterIndex];
	}

	decryptMessage(message) {
		let decryptedMessage = "";
		message.split("").forEach((cipherLetter) => {
			let letter = this.decryptLetter(cipherLetter, this.cipherKey);
			if (!letter) {
				letter = cipherLetter;
			}
			decryptedMessage = decryptedMessage.concat(letter);
		});
		return decryptedMessage;
	}
}

module.exports = { Cipher };
