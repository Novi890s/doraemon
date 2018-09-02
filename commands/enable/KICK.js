const configs = require("./../../configs.json");
const Discord = require("discord.js");


//  KICK
// Command: kick <@user> <reason> | Kick a user from the server.

module.exports.run = async (bot, message, args) => {

    message.delete().catch();

    let user_to_kick_find_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.KICK**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Couldn't find user. Check the name, If the error persists contact with server Owner. **[<@&${configs.role_owner_id}>]**.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let user_to_kick_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.KICK**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `That person can't be kicked.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let kick_reason_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.KICK**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `You must write a reason for the kick. \n"Command: $kick <@user> <reason>"`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let channel_logs_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.KICK**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Couldn't find logs channel. Please try it again, If the error persists contact with server Owner. **[<@&${configs.role_owner_id}>]**.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let user_permits_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.KICK**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `You don't have the necessary permissions to use this command.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);


    let kick_user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kick_user) return message.channel.send(user_to_kick_find_error_embed);
    let kick_reason = args.join(" ").slice(22);
    if (!kick_reason) return message.channel.send(kick_reason_error_embed);

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(user_permits_error_embed);
    if (kick_user.hasPermission("KICK_MEMBERS")) return message.channel.send(user_to_kick_error_embed);

    let dm_kick_info_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_alert}`)
        .setTitle(`**${configs.terminal}  COMMAND.KICK**`)
        .setDescription(configs.title_underline)
        .addField("Kicked User →", `${kick_user} \n \u200b`, true)
        .addField("Kicked By →", `${message.author} \n \u200b`, true)
        .addField("Kicked At →", `${message.createdAt} \n \u200b`, true)
        .addField("Kick Reason →", `${kick_reason}`)
        .addField(`You can re-enter the server.`, "But be more careful with what you say or do.")
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let kick_info_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_alert}`)
        .setTitle(`**${configs.terminal}  COMMAND.KICK**`)
        .setDescription(configs.title_underline)
        .addField("Kicked User →", `${kick_user} \n \u200b`, true)
        .addField("Kicked By →", `${message.author} \n \u200b`, true)
        .addField("Kicked At →", `${message.createdAt} \n \u200b`, true)
        .addField("Kick Reason →", `${kick_reason}`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let kicked_successfully_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_alert}`)
        .setTitle(`**${configs.terminal}  COMMAND.KICK**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `User ${kick_user} has been Kicked by ${message.author}.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let channel_logs = message.guild.channels.get(`${configs.channel_logs}`);
    if (!channel_logs) return message.channel.send(channel_logs_error_embed);

    message.channel.send(kicked_successfully_embed);
    channel_logs.send(kick_info_embed);


    function twosecs() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 2000);
        });
    }

    async function asyncCall() {
        kick_user.send(dm_kick_info_embed);
        await twosecs();
        message.guild.member(kick_user).kick(kick_info_embed);
    }

    asyncCall();

    console.log(`    ${configs.terminal}  &COMMAND.KICK → $KICK COMMAND USED`);
    return;
}


module.exports.help = {
    name: "kick"
}