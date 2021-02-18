const { Kingdom } = require("./kingdom");

class Universe {
	constructor() {
		this.kingdoms = [];
	}

	doesKingdomExists(name) {
		return this.kingdoms.some((kingdom) => kingdom.kingdomName === name);
	}
}

module.exports = { Universe };
