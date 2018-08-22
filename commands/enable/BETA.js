const configs = require("./../../configs.json");
const Discord = require("discord.js");

//  BETA
module.exports.run = async(bot, message, args) => {

    message.delete().catch();
    let beta_embed = new Discord.RichEmbed()
    .setColor(`${configs.color_command}`)
    .setTitle(`**${configs.terminal}  COMMAND.BETA**`)
    .setDescription(configs.title_underline)
    .addField("Hola Mundo")
    // .addField(`\u200b`, `Testing BETA Command. Maybe this command don't do anything :V`)
    .addBlankField()
    .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);
    
    message.channel.send(beta_embed);
    console.log(`    ${configs.terminal}  &COMMAND.BETA → $BETA COMMAND USED`);
}


module.exports.help = {
    name: "beta"
}