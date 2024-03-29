const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json'); 
const fs = require('fs');
//-----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------command---------------------------------------------------------------//
client.channels.fetch
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./command').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./command/${file}`);
    client.commands.set(command.name, command);
}
client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(message, args, Discord);
    } catch (error) {
        console.error(error);
        message.reply('There was an issue executing that command!');
    }
});
//-----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------BotReady!---------------------------------------------------------------//

client.on('ready', () => {
    console.log('BotReady!');
   });
   
client.login(config.token)
//-----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------BotReady!---------------------------------------------------------------//
