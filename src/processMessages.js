const { Universe } = require("./universe");
const kingdoms = require("../kingdoms.json");

const giveRulingKingdoms = function (allies, alliesRequired) {
	if (allies.length > alliesRequired) {
		return allies;
	}
	return ["NONE"];
};

const sendMessages = function (kingdomName, message) {
	let response;
	if (this.allies && !this.allies.includes(kingdomName)) {
		response = this.universe.sendMessage(kingdomName, message.join(" "));
		if (response) {
			this.allies.push(kingdomName);
		}
	}
};

const processMessages = function (sender, messages = []) {
	const allies = [sender];
	const universe = new Universe();
	universe.addKingdoms(kingdoms);
	const sendMessage = sendMessages.bind({ allies, universe });
	for (const message of messages) {
		const [kingdomName, ...secretMessage] = message.split(" ");
		sendMessage(kingdomName, secretMessage);
	}

	return giveRulingKingdoms([...allies], 3);
};

module.exports = { processMessages, giveRulingKingdoms, sendMessages };
