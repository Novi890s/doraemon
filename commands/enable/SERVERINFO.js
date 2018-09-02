const configs = require("./../../configs.json");
const Discord = require("discord.js");


// COMMAND.SERVERINFO
// Command: serverinfo | Shows server info embed.

module.exports.run = async (bot, message, args) => {

    message.delete().catch();

    let sicon = message.guild.iconURL;
    let server_info_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_command}`)
        .setTitle(`**${configs.terminal}  COMMAND.SERVERINFO**`)
        .setDescription(configs.title_underline)
        .setThumbnail(sicon)
        .addField("Server Name →", message.guild.name)
        .addField("Created On →", message.guild.createdAt)
        .addField("You Joined →", message.member.joinedAt)
        .addField("Total Members →", message.guild.memberCount)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    message.channel.send(server_info_embed);
}

module.exports.help = {
  name:"serverinfo"
}