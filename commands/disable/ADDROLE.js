const configs = require("./../../configs.json");
const Discord = require("discord.js");


// COMMAND.ADDROLE
// Command: addrole <@user> <role_name> | Add role to user.

module.exports.run = async (bot, message, args) => {

    message.delete().catch();

    let user_find_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.ADDROLE**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Couldn't find user. Check the name, If the error persists contact with server Owner. **[<@&${configs.role_owner_id}>]**.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let user_permits_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.ADDROLE**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `You don't have the necessary permissions to use this command.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let addrole_bad_command_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.ADDROLE**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Please specify the role to add. \n**Command: ${configs.prefix}addrole <@user> <role_name>**`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let find_role_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.ADDROLE**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Please specify the role to add. \n**Command: ${configs.prefix}addrole <@user> <role_name>**`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);

    let user_have_role_error_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.ADDROLE**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `They already have that role.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);


    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply(user_permits_error_embed);
    let user_to_addrole = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!user_to_addrole) return message.reply(user_find_error_embed);
    let role = args.join(" ").slice(22);
    if(!role) return message.reply(addrole_bad_command_error_embed);
    let get_role = message.guild.roles.find(`name`, role);
    if(!get_role) return message.reply(find_role_error_embed);

    if(user_to_addrole.roles.has(get_role.id)) return message.reply(user_have_role_error_embed);
    await(user_to_addrole.addRole(get_role.id));

    let role_added_embed = new Discord.RichEmbed()
        .setColor(`${configs.color_error}`)
        .setTitle(`**${configs.terminal}  COMMAND.ADDROLE**`)
        .setDescription(configs.title_underline)
        .addField(`\u200b`, `Congrats to <@${user_to_addrole.id}>, they have been given the role <@&${get_role.id}>.`)
        .addBlankField()
        .setFooter(`${configs.bot_name}`, `${configs.bot_logo}`);
 
        message.channel.send(role_added_embed)


    console.log(`    ${configs.terminal}  &COMMAND.ADDROLE → $ADDROLE COMMAND USED`);

    return;
}


module.exports.help = {
    name: "addrole"
}