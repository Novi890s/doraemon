const configs = require("./../../configs.json");
const Discord = require("discord.js");

// COMMAND.REPORT
module.exports.run = async(bot, message, args) => {

    message.delete().catch();
    let report_user_error_embed = new Discord.RichEmbed()
    .setColor(`${configs.color_error}`)
    .setTitle(`**${configs.terminal}  COMMAND.REPORT**`)
    .setDescription(configs.title_underline)
    .addField(`\u200b`, `Couldn't find report user. Please try it again, If the error persists contact an ${configs.rol_admin}.`)
    .addBlankField()
    .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let reported_user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!reported_user) return message.channel.send(report_user_error_embed);
    let report_reason = args.join(" ").slice(22);

    let report_sent_embed = new Discord.RichEmbed()
    .setColor(`${configs.color_alert}`)
    .setTitle(`**${configs.terminal}  COMMAND.REPORT**`)
    .setDescription(configs.title_underline)
    .addField(`\u200b`, `Reported Sent Successful. \nADMINS and MODS have been notified of your report.`)
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

    let reports_channel_error_embed = new Discord.RichEmbed()
    .setColor(`${configs.color_error}`)
    .setTitle(`**${configs.terminal}  COMMAND.REPORT**`)
    .setDescription(configs.title_underline)
    .addField(`\u200b`, `Couldn't find reports channel. Please try it again, If the error persists contact an ${configs.rol_admin}.`)
    .addBlankField()
    .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let report_channel = message.guild.channels.get(`${configs.channel_reports}`);
    if(!report_channel) return message.channel.send(reports_channel_error_embed);

    message.delete().catch(O_o=>{});
    message.channel.send(report_sent_embed);
    report_channel.send(report_info_embed);
    console.log(`    ${configs.terminal}  &COMMAND.REPORT → $REPORT COMMAND USED`);
}


module.exports.help = {
    name: "report"
}