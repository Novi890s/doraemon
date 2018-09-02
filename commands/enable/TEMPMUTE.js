const configs = require("./../../configs.json");
const Discord = require("discord.js");
const ms = require("ms");


//  TEMPMUTE
// Command: tempmute <@user> <time> | Mute a user a certain time.

module.exports.run = async (bot, message, args) => {

    message.delete().catch();

    let user_to_mute_find_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.TEMPMUTE**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Couldn't find user. Check the name, If the error persists contact with server Owner. **[<@&${configs.role_owner_id}>]**.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let user_to_mute_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.TEMPMUTE**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `That person can't be muted.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let user_to_mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user_to_mute) return message.reply(user_to_mute_find_error_embed);
    if (user_to_mute.hasPermission("MUTE_MEMBERS")) return message.reply(user_to_mute_error_embed);
    let role_muted = message.guild.roles.get(`${configs.role_muted_id}`);

    let mute_time_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.TEMPMUTE**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `You don't set time to mute. \nCommand: "$tempmute <@user> <time>" (s, m, h, d)`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let mute_time = args[1];
    if (!mute_time) return message.reply(mute_time_error_embed);

    let mute_info_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_alert}`)
        .setTitle(`**${configs.terminal}  COMMAND.TEMPMUTE**`)
        .setDescription(configs.title_underline)
        .addField("Muted User →", `${user_to_mute} \n \u200b`, true)
        .addField("Muted By →", `${message.author} \n \u200b`, true)
        .addField("Muted At →", `${message.createdAt} \n \u200b`, true)
        .addField("Muted Time →", `${mute_time} \n \u200b`, true)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let channel_logs_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.TEMPMUTE**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Couldn't find logs channel. Please try it again, If the error persists contact with server Owner. **[<@&${configs.role_owner_id}>]**.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let channel_logs = message.guild.channels.get(`${configs.channel_logs_id}`);
    if (!channel_logs) return message.channel.send(channel_logs_error_embed);

    let muted_successfully_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_alert}`)
        .setTitle(`**${configs.terminal}  COMMAND.TEMPMUTE**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `User ${user_to_mute} has been mutted ${mute_time} by ${message.author}.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let unmuted_user_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_alert}`)
        .setTitle(`**${configs.terminal}  COMMAND.TEMPMUTE**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `User ${user_to_mute} is now UNMUTED.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    await (user_to_mute.addRole(role_muted));
    channel_logs.send(mute_info_embed);
    message.channel.send(muted_successfully_embed);

    setTimeout(function () {
        user_to_mute.removeRole(role_muted);
        message.channel.send(unmuted_user_embed);
    }, ms(mute_time));


    console.log(`    ${configs.terminal}  &COMMAND.TEMPMUTE → $TEMPMUTE COMMAND USED`);

}

module.exports.help = {
    name: "tempmute"
}