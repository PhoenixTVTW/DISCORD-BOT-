const { Client, Intents } = require('discord.js');
const { getGeminiResponse } = require('./gemini');
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith('!gemini')) {
        const query = message.content.slice(8).trim();
        if (!query) {
            return message.reply('Please provide a query for Gemini.');
        }

        try {
            const response = await getGeminiResponse(query);
            message.channel.send(response);
        } catch (error) {
            console.error(error);
            message.channel.send('There was an error processing your request.');
        }
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);