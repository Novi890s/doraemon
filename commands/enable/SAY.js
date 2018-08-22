const configs = require("./../../configs.json");
const Discord = require("discord.js");

// COMMAND.SAY
module.exports.run = async(bot, message, args) => {

    message.delete().catch();
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    const say_message = args.join(" ");

    let say_embed = new Discord.RichEmbed()
    .setColor(`${configs.color_command}`)
    .setTitle(`**${configs.terminal}  COMMAND.SAY**`)
    .setDescription(configs.title_underline)
    .addField(`\u200b`, `**Author:** ${message.author}`)
    .addField(`\u200b`, `**Message:** ${say_message}`)
    .addBlankField()
    .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    message.channel.send(say_embed);
    console.log(`    ${configs.terminal}  &COMMAND.SAY → $SAY COMMAND USED`);
}


module.exports.help = {
    name: "say"
}