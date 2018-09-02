const configs = require("./../../configs.json");
const Discord = require("discord.js");


//  BAN
// Command: ban <@user> <reason> | Ban a user permanently from the server.

module.exports.run = async (bot, message, args) => {

    message.delete().catch();

    let user_to_ban_find_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.BAN**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Couldn't find user. Check the name, If the error persists contact with server Owner. **[<@&${configs.role_owner_id}>]**.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let user_to_ban_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.BAN**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `That person can't be baned.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let channel_logs_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.BAN**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Couldn't find logs channel. Please try it again, If the error persists contact with server Owner. **[<@&${configs.role_owner_id}>]**.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let user_permits_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.BAN**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `You don't have the necessary permissions to use this command.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let ban_reason_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.BAN**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `You must write a reason for the ban. \n"Command: $ban <@user> <reason>"`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let ban_user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!ban_user) return message.channel.send(user_to_ban_find_error_embed);
    let ban_reason = args.join(" ").slice(22);
    if (!ban_reason) return message.channel.send(ban_reason_error_embed);
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(user_permits_error_embed);
    if (ban_user.hasPermission("BAN_MEMBERS")) return message.channel.send(user_to_ban_error_embed);

    let dm_ban_info_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_alert}`)
        .setTitle(`**${configs.terminal}  COMMAND.BAN**`)
        .setDescription(configs.title_underline)
        .addField("Baned User →", `${ban_user} \n \u200b`, true)
        .addField("Baned By →", `${message.author} \n \u200b`, true)
        .addField("Baned At →", `${message.createdAt} \n \u200b`, true)
        .addField("Ban Reason →", `${ban_reason}`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let ban_info_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_alert}`)
        .setTitle(`**${configs.terminal}  COMMAND.BAN**`)
        .setDescription(configs.title_underline)
        .addField("Baned User →", `${ban_user} \n \u200b`, true)
        .addField("Baned By →", `${message.author} \n \u200b`, true)
        .addField("Baned At →", `${message.createdAt} \n \u200b`, true)
        .addField("Ban Reason →", `${ban_reason}`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let baned_successfully_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_alert}`)
        .setTitle(`**${configs.terminal}  COMMAND.BAN**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `User ${ban_user} has been baned by ${message.author}.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let channel_logs = message.guild.channels.get(`${configs.channel_logs_id}`);
    if (!channel_logs) return message.channel.send(channel_logs_error_embed);

    message.channel.send(baned_successfully_embed);
    channel_logs.send(ban_info_embed);

    function twosecs() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 2000);
        });
    }

    async function asyncCall() {
        ban_user.send(dm_ban_info_embed);
        await twosecs();
        message.guild.member(ban_user).ban(ban_info_embed);
    }

    asyncCall();


    console.log(`    ${configs.terminal}  &COMMAND.BAN → $BAN COMMAND USED`);
    return;
}


module.exports.help = {
    name: "ban"
}