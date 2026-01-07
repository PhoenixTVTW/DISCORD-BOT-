require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const fetch = require('node-fetch');
const config = {
  discordToken: process.env.DISCORD_BOT_TOKEN,
  geminiApiKey: process.env.GOOGLE_GEMINI_API_KEY,
};

// Gemini API call function
async function askGemini(question) {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + config.geminiApiKey, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: question }] }]
    })
  });
  const data = await response.json();
  console.log(data); // Debug output
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't get an answer.";
}

// Create a new Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for messages
client.on('messageCreate', async message => {
  if (message.author.bot) return;

  // Bot mit "stop" beenden (nur für dich als Owner empfohlen!)
  if (message.content === 'stop') {
    await message.reply('Bot wird gestoppt...');
    process.exit(0);
  }

  // Example: Respond to "!hello"
  if (message.content === '!hello') {
    message.reply('Hello! 👋');
    return;
  }



  // Beispiel: Wenn jemand "!upload" schreibt, wird eine Datei gesendet
  if (message.content === '!upload') {
    await message.reply({
      content: 'Hier ist deine Datei:"E:\Programmieren\Bummmssss\Dc Google"',
      files: ['test.txt'] // Pfad zur Datei
    });
  }

  // Call Gemini API and reply with its response
  try {
    const reply = await askGemini(message.content);
    message.reply(reply);
  } catch (error) {
    message.reply("Sorry, there was an error talking to Gemini.");
    console.error(error);
  }
});


client.login(config.discordToken);