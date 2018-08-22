const configs = require("./../../configs.json");
const Discord = require("discord.js");

// COMMAND.CLEAN
module.exports.run = async(bot, message, args) => {

    message.delete().catch();
    let clean_embed = new Discord.RichEmbed()
    .setColor(`${configs.color_command}`)
    .setTitle(`**${configs.terminal}  COMMAND.CLEAN**`)
    .setDescription(configs.title_underline)
    .addField(`\u200b`, `All messages deleted.`)
    .addBlankField()
    .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let clean_permitions_error_embed = new Discord.RichEmbed()
    .setColor(`${configs.color_error}`)
    .setTitle(`**${configs.terminal}  COMMAND.CLEAN**`)
    .setDescription(configs.title_underline)
    .addField(`\n \u200b`, `${configs.bot_name}} don't have permissions to remove messages. Please contact with BOT MANAGER to solve it.`)
    .addBlankField()
    .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(clean_permitions_error_embed);
    message.channel.bulkDelete(100).then(() => {
    message.channel.send(clean_embed).then(msg => msg.delete(8000));
    });

    console.log(`    ${configs.terminal}  &COMMAND.CLEAN → $CLEAN COMMAND USED`);
}


module.exports.help = {
    name: "clean"
}