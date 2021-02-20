const { readFileSync } = require("fs");
const { processMessages } = require("./src/processMessages");

const main = function (testFilePath) {
	const content = readFileSync(testFilePath, { encoding: "utf-8" }).trimEnd();
	const messages = content.split("\n");
	const sender = "SPACE";
	const result = processMessages(sender, messages);
	console.log(result.join(" "));
};

main(process.argv[2]);
