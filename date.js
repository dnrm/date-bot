require('dotenv').config();
const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('message', message => {
    if (message.content == '!date') {
        message.reply(`${new Date()}`);
    }
});

Client.on('ready', () => {
    console.log(`Successfully logged in as ${Client.user.tag}`)
})

Client.login(process.env.TOKEN);