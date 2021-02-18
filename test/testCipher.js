const assert = require("chai").assert;

const { Cipher } = require("../src/cipher");
const { CIPHERWHEEL } = require("../src/constants");

describe("#Cipher", () => {
	describe("decryptLetter", () => {
		it("Should give null if cipher letter is not between A-Z", () => {
			const cipherKey = 1;
			const cipher = new Cipher(CIPHERWHEEL, cipherKey);
			const cipherLetter = "#";
			const actualValue = cipher.decryptLetter(cipherLetter);
			assert.isNull(actualValue);
		});
		it("Should give the same letter if cipher key is zero", () => {
			const cipherKey = 0;
			const cipher = new Cipher(CIPHERWHEEL, cipherKey);
			const cipherLetter = "A";
			const actualValue = cipher.decryptLetter(cipherLetter);
			const expectedValue = "A";
			assert.deepStrictEqual(actualValue, expectedValue);
		});
		it("Should give the letter which is in cipherKey value anticlockwise direction", () => {
			const cipherKey = 1;
			const cipher = new Cipher(CIPHERWHEEL, cipherKey);
			const cipherLetter = "A";
			const actualValue = cipher.decryptLetter(cipherLetter);
			const expectedValue = "Z";
			assert.deepStrictEqual(actualValue, expectedValue);
		});
		it("Should validate if cipherKey value is greater than cipherWheel cycle", () => {
			const cipherKey = CIPHERWHEEL.length + 1;
			const cipher = new Cipher(CIPHERWHEEL, cipherKey);
			const cipherLetter = "A";
			const actualValue = cipher.decryptLetter(cipherLetter);
			const expectedValue = "Z";
			assert.deepStrictEqual(actualValue, expectedValue);
		});
	});

	describe("decryptMessage", () => {
		it("Should validate the message with characters not in cipher wheel", () => {
			const cipherKey = 4;
			const cipher = new Cipher(CIPHERWHEEL, cipherKey);
			const message = "#123";
			const actualValue = cipher.decryptMessage(message);
			const expectedValue = "#123";
			assert.deepStrictEqual(actualValue, expectedValue);
		});
		it("Should validate the message with space", () => {
			const cipherKey = 1;
			const cipher = new Cipher(CIPHERWHEEL, cipherKey);
			const message = "BCD EFG";
			const actualValue = cipher.decryptMessage(message);
			const expectedValue = "ABC DEF";
			assert.deepStrictEqual(actualValue, expectedValue);
		});
		it("Should validate the message with letters in cipher wheel", () => {
			const cipherKey = 4;
			const cipher = new Cipher(CIPHERWHEEL, cipherKey);
			const message = "OWL";
			const actualValue = cipher.decryptMessage(message);
			const expectedValue = "KSH";
			assert.deepStrictEqual(actualValue, expectedValue);
		});
		it("Should validate the message combination with symbols, alphabets and space", () => {
			const cipherKey = 4;
			const cipher = new Cipher(CIPHERWHEEL, cipherKey);
			const message = "OWL$ OWL";
			const actualValue = cipher.decryptMessage(message);
			const expectedValue = "KSH$ KSH";
			assert.deepStrictEqual(actualValue, expectedValue);
		});
	});
});
