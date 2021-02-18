const { Kingdom } = require("./kingdom");

class Universe {
	constructor() {
		this.kingdoms = [];
	}

	doesKingdomExists(name) {
		return this.kingdoms.some((kingdom) => kingdom.kingdomName === name);
	}

	get kingdomCount() {
		return this.kingdoms.length;
	}

	addKingdoms(kingdoms = []) {
		for (const kingdom of kingdoms) {
			const { name, emblem } = kingdom;
			if (!this.doesKingdomExists(name)) {
				this.kingdoms.push(new Kingdom(name, emblem));
			}
		}
	}
	getKingdom(kingdomName) {
		return this.kingdoms.find((kingdom) => kingdom.kingdomName === kingdomName);
	}

	sendMessage(kingdomName, message) {
		const kingdom = this.getKingdom(kingdomName);
		if (!kingdom) {
			return;
		}
		return kingdom.validateMessage(message);
	}
}

module.exports = { Universe };
