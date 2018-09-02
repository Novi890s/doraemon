const configs = require("./../../configs.json");
const Discord = require("discord.js");


// COMMAND.REPORT
// Command: report <@user> <rason> | Send a report about a user.

module.exports.run = async (bot, message, args) => {

    message.delete().catch();

    let user_to_report_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.REPORT**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Couldn't find reported user. Check the name, If the error persists contact with server Owner. **[<@&${configs.role_owner_id}>]**.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let report_bad_command_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.REPORT**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `You need to give a reason for the report. \n**Command: ${configs.prefix}report <@user> <reason>**`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let reported_user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!reported_user) return message.channel.send(user_to_report_error_embed);
    let report_reason = args.join(" ").slice(22);
    if (!report_reason) return message.channel.send(report_bad_command_error_embed);

    let report_sent_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_alert}`)
        .setTitle(`**${configs.terminal}  COMMAND.REPORT**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Reported Sent Successful. \n<@&${configs.role_staff_id}> have been notified of your report.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let report_info_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_alert}`)
        .setTitle(`**${configs.terminal}  COMMAND.REPORT**`)
        .setDescription(configs.title_underline)
        .addField("Report Information.", "Remembers investigate the case before sentencing the accused.\n \u200b")
        .addField("Reported User →", `${reported_user} \n \u200b`, true)
        .addField("Reported By →", `${message.author} \n \u200b`, true)
        .addField("Report Channel →", `${message.channel} \n \u200b`, true)
        .addField("Report Time →", `${message.createdAt} \n \u200b`, true)
        .addField("Report Reason →", `${report_reason}`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let logs_channel_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.REPORT**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Couldn't find logs channel. Please try it again, If the error persists contact with server Owner. **[<@&${configs.role_owner_id}>]**.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let channel_logs = message.guild.channels.get(`${configs.channel_logs_id}`);
    if (!channel_logs) return message.channel.send(logs_channel_error_embed);

    message.channel.send(report_sent_embed);
    channel_logs.send(report_info_embed);

    console.log(`    ${configs.terminal}  &COMMAND.REPORT → $REPORT COMMAND USED`);
}


module.exports.help = {
    name: "report"
}