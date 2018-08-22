const configs = require("./../../configs.json");
const Discord = require("discord.js");

// COMMAND.HIDESAY
module.exports.run = async(bot, message, args) => {

    message.delete().catch();
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    const hide_say_message = args.join(" ");

    let hide_say_embed = new Discord.RichEmbed()
    .setColor(`${configs.color_command}`)
    .setTitle(`**${configs.terminal}  COMMAND.HIDESAY**`)
    .setDescription(configs.title_underline)
    .addField(`\u200b`, `**Message:** ${hide_say_message}`)
    .addBlankField()
    .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    message.channel.send(hide_say_embed);
    console.log(`    ${configs.terminal}  &COMMAND.HIDESAY → $HIDESAY COMMAND USED`);
}


module.exports.help = {
    name: "hidesay"
}