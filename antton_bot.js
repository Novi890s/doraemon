const configs = require("./configs.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
async = require("async");


// LOAD.COMMAND
fs.readdir("./commands/enable/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log(`    ${configs.terminal}  &ERROR → Couldn't find commands`);
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/enable/${f}`);
      console.log(`    ${configs.terminal}  &LOAD.COMMAND → ${f}`);
      bot.commands.set(props.help.name, props);
    });
    console.log("\u200b")
  });

// COMMANDS
bot.on("message", async message => {

    if(!message.content.startsWith(configs.prefix)) return;
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = configs.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
    
});


//EVENTS

    // EVENT.BOTREADY
    bot.on("ready", async () => {
        console.log(`    ${configs.terminal}  &EVENT.READY → ${configs.bot_name} IS NOW ONLINE`);
    });

    // EVENT.BOTSTATUS
    bot.on("ready", async () => {
        bot.user.setActivity("https://anns.es", { type: 'WATCHING' });
        console.log(`    ${configs.terminal}  &EVENT.STATUS → ${configs.bot_name} STATUS UPDATED`);
    });
    

bot.login(configs.token);

