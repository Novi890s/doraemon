const configs = require("./../../configs.json");
const Discord = require("discord.js");


// COMMAND.REMOVEROLE
// Command: removerole <@user> <@> | Add role to user.

module.exports.run = async (bot, message, args) => {

    message.delete().catch();

    // CODE

    console.log(`    ${configs.terminal}  &COMMAND.REMOVEROLE → $REMOVEROLE COMMAND USED`);

    return;
}


module.exports.help = {
    name: "removerole"
}