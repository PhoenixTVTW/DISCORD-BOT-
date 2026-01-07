// This file manages configuration settings for the bot, including loading environment variables and exporting the necessary configuration for the bot and API.

require('dotenv').config();

const config = {
    discordToken: process.env.DISCORD_BOT_TOKEN,
    geminiApiKey: process.env.GEMINI_API_KEY,
};

module.exports = config;