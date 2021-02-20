const assert = require("chai").assert;

const {
	giveRulingKingdoms,
	processMessages,
} = require("../src/processMessages");

describe("giveRulingKingdoms", () => {
	it("Should return the allies if allies are more than requried allies", () => {
		const allies = ["A", "B", "C"];
		assert.deepStrictEqual(giveRulingKingdoms(allies, 2), allies);
	});
	it("Should return the ['NONE']if allies are more than requried allies", () => {
		const allies = ["A", "B", "C"];
		assert.deepStrictEqual(giveRulingKingdoms(allies, 3), ["NONE"]);
	});
});

describe("processMessages", () => {
	it("Should return [NONE] when there is no messages send", () => {
		const sender = "Someone";
		const actual = processMessages(sender);
		const expected = ["NONE"];
		assert.deepStrictEqual(actual, expected);
	});
	it("Should return [NONE] when kingdoms name is wrong", () => {
		const sender = "Someone";
		const message = [
			"ZOOLAND KLAHDSKLF",
			"WRONGkINGDOM KLAJSLKDFJ",
			"AGAINWRONG LKAJFLK",
		];
		const actual = processMessages(sender, message);
		const expected = ["NONE"];
		assert.deepStrictEqual(actual, expected);
	});
	it("Should return [NONE] when correct message is less than three", () => {
		const sender = "Someone";
		const message = [
			"LAND PANDAUFSI",
			"ICE MAMMOTH THVAO",
			"FIRE DRAGON JXGMUT",
			"AIR ZORRO",
		];
		const actual = processMessages(sender, message);
		const expected = ["NONE"];
		assert.deepStrictEqual(actual, expected);
	});
	it("Should return allies list when correct message is more or equal to three", () => {
		const sender = "Someone";
		const message = [
			"LAND PANDAUFSIF",
			"ICE MAMMOTH THVAO",
			"FIRE DRAGON JXGMUT",
			"AIR ZORRO",
		];
		const actual = processMessages(sender, message);
		const expected = [sender, "LAND", "FIRE", "AIR"];
		assert.deepStrictEqual(actual, expected);
	});
});
