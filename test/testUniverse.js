const assert = require("chai").assert;

const { Universe } = require("../src/universe");

describe("#Universe", () => {
	describe("doesKingdomExists", () => {
		const universe = new Universe();
		const kingdom = { name: "zooland", emblem: "animal" };
		universe.addKingdom(kingdom);

		it("Should return false if kingdom not exists", () => {
			assert.isFalse(universe.doesKingdomExists("wrong name"));
		});

		it("Should return true if kingdom exists", () => {
			assert.isTrue(universe.doesKingdomExists(kingdom.name));
		});
	});

	describe("addKingdom", () => {
		it("Should add the kingdom to the list of universe", () => {
			const universe = new Universe();
			const kingdom = { name: "LAND", emblem: "OWL" };
			universe.addKingdom(kingdom);
			assert.isTrue(universe.doesKingdomExists(kingdom.name));
		});
	});
});
