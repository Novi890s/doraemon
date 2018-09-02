const configs = require("./../../configs.json");
const Discord = require("discord.js");


// COMMAND.WISH
// Command: wish <your_wish> | To make a wish.

module.exports.run = async (bot, message, args) => {

    message.delete().catch();

    const wish = args.join(" ");

    let wish_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_command}`)
        .setTitle(`**${configs.terminal}  COMMAND.WISH**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, wish)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let wish_sent_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_alert}`)
        .setTitle(`**${configs.terminal}  COMMAND.WISH**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Wish Sent Successful. \n<@&${configs.role_staff_id}> have been notified of your wish.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let logs_channel_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.WISH**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Couldn't find logs channel. Please try it again, If the error persists contact with server Owner. **[<@&${configs.role_owner_id}>]**.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let channel_logs = message.guild.channels.get(`${configs.channel_logs_id}`);
    if (!channel_logs) return message.channel.send(logs_channel_error_embed);

    message.channel.send(wish_sent_embed)
    channel_logs.send(wish_embed)

    console.log(`    ${configs.terminal}  &COMMAND.WISH → $WISH COMMAND USED`);
}


module.exports.help = {
    name: "wish"
}