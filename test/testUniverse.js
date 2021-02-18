const assert = require("chai").assert;

const { Universe } = require("../src/universe");
const { Kingdom } = require("../src/kingdom");

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

	describe("getKingdom", () => {
		const universe = new Universe();
		const kingdom = { name: "zooland", emblem: "animal" };
		universe.addKingdom(kingdom);

		it("Should return the class kingdom if it is present in universe", () => {
			const actualKingdom = universe.getKingdom(kingdom.name);
			const expectedKingdom = new Kingdom(kingdom.name, kingdom.emblem);
			assert.deepStrictEqual(actualKingdom, expectedKingdom);
		});

		it("Should return the undefined if kingdom not present in universe", () => {
			const actualKingdom = universe.getKingdom("wrong kingdom name");
			assert.isUndefined(actualKingdom);
		});
	});
});
