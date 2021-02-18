const assert = require("chai").assert;

const { Cipher } = require("../src/cipher");
const { CIPHERWHEEL } = require("../src/constants");

describe("#Cipher", () => {
	const cipher = new Cipher(CIPHERWHEEL);

	describe("decryptLetter", () => {
		it("Should give null if cipher letter is not between A-Z", () => {
			const cipherLetter = "#";
			const cipherKey = 1;
			const actualValue = cipher.decryptLetter(cipherLetter, cipherKey);
			assert.isNull(actualValue);
		});
		it("Should give the same letter if cipher key is zero", () => {
			const cipherLetter = "A";
			const cipherKey = 0;
			const actualValue = cipher.decryptLetter(cipherLetter, cipherKey);
			const expectedValue = "A";
			assert.deepStrictEqual(actualValue, expectedValue);
		});
		it("Should give the letter which is in cipherKey value anticlockwise direction", () => {
			const cipherLetter = "A";
			const cipherKey = 1;
			const actualValue = cipher.decryptLetter(cipherLetter, cipherKey);
			const expectedValue = "Z";
			assert.deepStrictEqual(actualValue, expectedValue);
		});
		it("Should validate if cipherKey value is greater than cipherWheel cycle", () => {
			const cipherLetter = "A";
			const cipherKey = CIPHERWHEEL.length + 1;
			const actualValue = cipher.decryptLetter(cipherLetter, cipherKey);
			const expectedValue = "Z";
			assert.deepStrictEqual(actualValue, expectedValue);
		});
	});

	describe("decryptMessage", () => {
		it("Should validate the message with characters not in cipher wheel", () => {
			const message = "#123";
			const cipherKey = 4;
			const actualValue = cipher.decryptMessage(message, cipherKey);
			const expectedValue = "#123";
			assert.deepStrictEqual(actualValue, expectedValue);
		});
		it("Should validate the message with space", () => {
			const message = "BCD EFG";
			const cipherKey = 1;
			const actualValue = cipher.decryptMessage(message, cipherKey);
			const expectedValue = "ABC DEF";
			assert.deepStrictEqual(actualValue, expectedValue);
		});
		it("Should validate the message with letters in cipher wheel", () => {
			const message = "OWL";
			const cipherKey = 4;
			const actualValue = cipher.decryptMessage(message, cipherKey);
			const expectedValue = "KSH";
			assert.deepStrictEqual(actualValue, expectedValue);
		});
		it("Should validate the message combination with symbols, alphabets and space", () => {
			const message = "OWL$ OWL";
			const cipherKey = 4;
			const actualValue = cipher.decryptMessage(message, cipherKey);
			const expectedValue = "KSH$ KSH";
			assert.deepStrictEqual(actualValue, expectedValue);
		});
	});
});
