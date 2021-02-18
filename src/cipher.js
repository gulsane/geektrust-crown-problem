class Cipher {
	constructor(cipherWheel) {
		this.wheel = cipherWheel;
		this.wheelCycle = cipherWheel.length;
	}

	decryptLetter(cipherLetter, cipherKey) {
		const firstPosition = 0;
		const cipherLetterPosition = this.wheel.indexOf(cipherLetter);

		if (cipherLetterPosition < firstPosition) return null;

		let letterIndex = cipherLetterPosition - (cipherKey % this.wheelCycle);

		if (letterIndex < firstPosition) {
			letterIndex += this.wheel.length;
		}
		return this.wheel[letterIndex];
	}

	decryptMessage(message, cipherKey) {
		let decryptedMessage = "";
		message.split("").forEach((cipherLetter) => {
			let letter = this.decryptLetter(cipherLetter, cipherKey);
			if (!letter) {
				letter = cipherLetter;
			}
			decryptedMessage = decryptedMessage.concat(letter);
		});
		return decryptedMessage;
	}
}

module.exports = { Cipher };
