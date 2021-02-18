const { Kingdom } = require("./kingdom");

class Universe {
	constructor() {
		this.kingdoms = [];
	}

	doesKingdomExists(name) {
		return this.kingdoms.some((kingdom) => kingdom.kingdomName === name);
	}

	addKingdom({ name, emblem }) {
		this.kingdoms.push(new Kingdom(name, emblem));
	}

	getKingdom(kingdomName) {
		return this.kingdoms.find((kingdom) => kingdom.kingdomName === kingdomName);
	}
}

module.exports = { Universe };
