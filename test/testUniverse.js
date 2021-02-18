const assert = require("chai").assert;

const { Universe } = require("../src/universe");
const { Kingdom } = require("../src/kingdom");

describe("#Universe", () => {
	describe("doesKingdomExists", () => {
		const universe = new Universe();
		const kingdom = { name: "zooland", emblem: "animal" };
		universe.addKingdoms([kingdom]);

		it("Should return false if kingdom not exists", () => {
			assert.isFalse(universe.doesKingdomExists("wrong name"));
		});

		it("Should return true if kingdom exists", () => {
			assert.isTrue(universe.doesKingdomExists(kingdom.name));
		});
	});

	describe("addKingdoms", () => {
		it("Should add the kingdom to the list of universe", () => {
			const universe = new Universe();
			const kingdom = { name: "LAND", emblem: "OWL" };
			universe.addKingdoms([kingdom]);
			assert.isTrue(universe.doesKingdomExists(kingdom.name));
			assert.strictEqual(universe.kingdomCount, 1);
		});
		it("Should not add the kingdom if it is already exists", () => {
			const universe = new Universe();
			const kingdom = { name: "LAND", emblem: "OWL" };
			universe.addKingdoms([kingdom]);
			universe.addKingdoms([kingdom]);
			assert.isTrue(universe.doesKingdomExists(kingdom.name));
			assert.strictEqual(universe.kingdomCount, 1);
		});
	});

	describe("getKingdom", () => {
		const universe = new Universe();
		const kingdom = { name: "zooland", emblem: "animal" };
		universe.addKingdoms([kingdom]);

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

	describe("sendMessage", () => {
		const universe = new Universe();
		const kingdom = { name: "LAND", emblem: "OWL" };
		universe.addKingdoms([kingdom]);

		it("Should return undefined if kingdom name is wrong", () => {
			const actualResponse = universe.sendMessage("wrongKIngdom", "HELLO");
			assert.isUndefined(actualResponse);
		});

		it("Should return true when kingdom and message are correct", () => {
			const actualResponse = universe.sendMessage(kingdom.name, "ROZO");
			assert.isTrue(actualResponse);
		});

		it("Should return false when message is incorrect", () => {
			const actualResponse = universe.sendMessage(kingdom.name, "AOAO");
			assert.isFalse(actualResponse);
		});
	});
});
