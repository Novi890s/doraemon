const configs = require("./../../configs.json");
const Discord = require("discord.js");


// COMMAND.BOTINFO
// Command: botinfo | Shows BOT info.

module.exports.run = async (bot, message, args) => {

    message.delete().catch();

    let bot_info_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_command}`)
        .setTitle(`**${configs.terminal}  COMMAND.BOTINFO**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Hi, my name is ${configs.name}. I am hero to help you and make everything easier. My prefix is \u200b "**${configs.prefix}**" \u200b. You can ask me anything.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    message.channel.send(bot_info_embed)

    console.log(`    ${configs.terminal}  &COMMAND.BOTINFO → $BOTINFO COMMAND USED`);
}


module.exports.help = {
    name: "botinfo"
}
