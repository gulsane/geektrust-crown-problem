const assert = require("chai").assert;

const { Kingdom } = require("../src/kingdom");

describe("#Kingdom", () => {
	describe("validateMessage", () => {
		it("Should validate the message if it contains emblem letter", () => {
			const name = "LAND";
			const emblem = "OWL";
			const kingdom = new Kingdom(name, emblem);
			const message = "ROZO";
			assert.isTrue(kingdom.validateMessage(message));
		});
		it("Should invalidate the message if it not contains emblem letter", () => {
			const name = "LAND";
			const emblem = "OWL";
			const kingdom = new Kingdom(name, emblem);
			const message = "HML";
			assert.isFalse(kingdom.validateMessage(message));
		});
		it("Should validate the message with symbol", () => {
			const name = "LAND";
			const emblem = "OWL";
			const kingdom = new Kingdom(name, emblem);
			const message = "RO#Z$O";
			assert.isTrue(kingdom.validateMessage(message));
		});
		it("Should validate the message with space", () => {
			const name = "LAND";
			const emblem = "OWL";
			const kingdom = new Kingdom(name, emblem);
			const message = "ROZOL JS";
			assert.isTrue(kingdom.validateMessage(message));
		});
	});
});
