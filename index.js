const Discord = require('discord.js'), // By Mirror
    utilisateur = new Discord.Client(), // By Mirror
    axios = require('axios').default, // By Mirror
    chalk = require('chalk'), // By Mirror
    { token, id } = require('./config.json') // By Mirror
// By Mirror
    console.log('[By Mirror]') // By Mirror
// By Mirror
utilisateur.login(token) // By Mirror
// By Mirror
utilisateur.on('ready', () => { // By Mirror
    console.log("[Notif] Connecté") // By Mirror
}) // By Mirror
// By Mirror
utilisateur.on('message', message => { // By Mirror
    if (message.content.includes('discord.gift') || message.content.includes('discordapp.com/gifts/')) { // By Mirror
        var guild = message.guild // By Mirror
        var guild_groupe = "" // By Mirror
            if (guild_groupe == guild) { // By Mirror
                guild_groupe = message.guild.name // By Mirror
            } else if (guild_groupe !== guild) { // By Mirror // By Mirror
                guild_groupe = "Groupe / DM" // By Mirror
            } // By Mirror
        var nitroreg = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/ // By Mirror
        var nitrolink = nitroreg.exec(message.content); // By Mirror
        const nitrocode = nitrolink[0].split('/')[1]; // By Mirror
    console.log(`${chalk.blue('[Notif]')} > Qui voit-là-je ? [${guild_groupe}] | ${message.author.tag} (${nitrolink[0]})`); // By Mirror
        axios({ method: 'POST', url: `https://discordapp.com/api/v6/entitlements/gift-codes/${nitrocode}/redeem`, headers: { 'Authorization': token }}) // By Mirror
        .then(() => console.log(`${chalk.bluebright('[Notif]')} > T'as chopé un truc ici ! [${guild_groupe}] | [${message.author.tag}]`)) // By Mirror
        .catch(e => console.log(`${chalk.red('[Notif]')} > Pff.., c'était un fake..`)) // By Mirror
    } // By Mirror
}) // By Mirror
