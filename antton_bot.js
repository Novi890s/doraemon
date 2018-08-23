const configs = require("./configs.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


// LOAD.COMMAND
fs.readdir("./commands/enable/", (err, files) => {

    console.log(`\u200b`);
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log(`    ${configs.terminal}  &ERROR → Couldn't find commands`);
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/enable/${f}`);
        console.log(`    ${configs.terminal}  &LOAD.COMMAND → ${f}`);
        bot.commands.set(props.help.name, props);
    });
});

// EVENT.BOTREADY
bot.on("ready", async () => {

    console.log(`\u200b`);
    console.log(`    ${configs.terminal}  &START → ${configs.bot_name} IS NOW ONLINE`);
    bot.user.setActivity("https://anns.es", { type: 'WATCHING' });
    console.log(`    ${configs.terminal}  &UPDATE.STATUS → ${configs.bot_name} STATUS UPDATED`);
    console.log(`\u200b`);
    });


// COMMAND
bot.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = bot.commands.get(cmd.slice((configs.prefix).length));
    if(commandfile) commandfile.run(bot,message,args);

});


bot.login(configs.token);

// CoolDown
// const cmdCooldown = new Set();
// const cmdSeconds = 5;
