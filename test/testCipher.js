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
});
