const assert = require("chai").assert;

const { Universe } = require("../src/universe");

describe.only("#Universe", () => {
	describe("doesKingdomExists", () => {
		it("Should return false if kingdom not exists", () => {
			const universe = new Universe();
			assert.isFalse(universe.doesKingdomExists("LAND"));
		});
	});
});
