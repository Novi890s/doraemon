const configs = require("./../../configs.json");
const Discord = require("discord.js");


// COMMAND.BETA
// Command: beta | Test BETA command.

module.exports.run = async (bot, message, args) => {

    message.delete().catch();

    message.channel.send("BETA COMMAND USED");

    console.log(`    »  &COMMAND.BETA → $BETA COMMAND USED`);

    return;
}


module.exports.help = {
    name: "beta"
}