const configs = require("./../../configs.json");
const Discord = require("discord.js");


// COMMAND.CLEAN
// Command: clean | Delete all messages.

module.exports.run = async (bot, message, args) => {

    message.delete().catch();

    let clean_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_command}`)
        .setTitle(`**${configs.terminal}  COMMAND.CLEAN**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Max messages deleted. If there are still messages, execute the command several times.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let clean_permitions_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.CLEAN**`)
        .setDescription(configs.title_underline)
        .addField(`\n \u200b`, `You don't have permissions to remove messages.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(clean_permitions_error_embed);
    message.channel.bulkDelete(99).then(() => {
        message.channel.send(clean_embed).then(msg => msg.delete(8000));
    });

    console.log(`    ${configs.terminal}  &COMMAND.CLEAN → $CLEAN COMMAND USED`);
}


module.exports.help = {
    name: "clean"
}