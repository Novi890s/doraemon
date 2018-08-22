const configs = require("./../../configs.json");
const Discord = require("discord.js");

// COMMAND.CLEAR
module.exports.run = async(bot, message, args) => {

    message.delete().catch();
    let clear_embed = new Discord.RichEmbed()
    .setColor(`${configs.color_command}`)
    .setTitle(`**${configs.terminal}  COMMAND.CLEAR**`)
    .setDescription(configs.title_underline)
    .addField(`\u200b`, `${args[0]} messages deleted.`)
    .addBlankField()
    .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let clear_error_embed = new Discord.RichEmbed()
    .setColor(`${configs.color_error}`)
    .setTitle(`**${configs.terminal}  COMMAND.CLEAR**`)
    .setDescription(configs.title_underline)
    .addField(`\u200b`, `Please specify the number of messages to clear`)
    .addBlankField()
    .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let clear_permitions_error_embed = new Discord.RichEmbed()
    .setColor(`${configs.color_error}`)
    .setTitle(`**${configs.terminal}  COMMAND.CLEAR**`)
    .setDescription(configs.title_underline)
    .addField(`\u200b`, `${bot.user.username} don't have permissions to remove messages. Please contact with BOT MANAGER to solve it.`)
    .addBlankField()
    .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(clear_permitions_error_embed);
    if(!args[0]) return message.channel.send(clear_error_embed);
    message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(clear_embed).then(msg => msg.delete(8000));
    });

    console.log(`    ${configs.terminal}  &COMMAND.CLEAR → $CLEAR COMMAND USED`);
}


module.exports.help = {
    name: "clear"
}