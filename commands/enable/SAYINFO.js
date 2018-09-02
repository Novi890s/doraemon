const configs = require("./../../configs.json");
const Discord = require("discord.js");


// COMMAND.SAYINFO
// Command: sayinfo | Say text in embed mode for information messages.

module.exports.run = async (bot, message, args) => {

    message.delete().catch();

    let user_permits_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.SAYINFO**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `You don't have the necessary permissions to use this command.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    const say_info_message = args.join(" ");
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(user_permits_error_embed);

    let say_info_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_command}`)
        .setTitle(`**${configs.terminal}  INFO**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `${say_info_message}`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    message.channel.send(say_info_embed);

    console.log(`    ${configs.terminal}  &COMMAND.SAYINFO → $SAYINFO COMMAND USED`);
}


module.exports.help = {
    name: "sayinfo"
}