const configs = require("./../../configs.json");
const Discord = require("discord.js");

// COMMAND.BOTINFO
module.exports.run = async(bot, message, args) => {

    message.delete().catch();
    let bot_info_embed = new Discord.RichEmbed()
    .setColor(`${configs.color_command}`)
    .setTitle(`**${configs.terminal}  COMMAND.BOTINFO**`)
    .setDescription(configs.title_underline)
    .addField("\u200b", "Hi, my name is ANTTON. I am hero to help you and make everything easier. My prefix is ``\u200b $ \u200b``. You can ask me anything.")
    .addBlankField()
    .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    console.log(`    ${configs.terminal}  &COMMAND.REPORT → $BOTINFO COMMAND USED`);
    return message.channel.send(bot_info_embed);
}


module.exports.help = {
    name: "botinfo"
}