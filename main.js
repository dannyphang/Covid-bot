const DiscordJS = require('discord.js');
const { Intents } = require('discord.js');
const dotenv = require('dotenv');
const WOKCommands = require('wokcommands');
const { prefix } = require('./util.js');
const path = require('path');
const keepAlive = require('./server.js');

// import DiscordJS, { Intents } from 'discord.js'
// import dotenv from 'dotenv'
// import WOKCommands from 'wokcommands'
// import path from 'path'
dotenv.config()

// await import(path)

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
})

keepAlive();

// client.on('ready', (msg) => {
//     console.log('The bot is online');

//     client.user.setPresence({ activities: [{ name: '>help' }], status: 'online' });

//     const __dirname = path.resolve();

//     new WOKCommands(client, {
//         commandsDir: path.join(__dirname, 'commands')
//     })
//         .setDefaultPrefix(prefix())
// })

client.on('message', msg => {
    msg.channel.send(msg.content)
})

client.login(process.env.TOKEN)