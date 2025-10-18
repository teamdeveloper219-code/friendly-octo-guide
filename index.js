const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`✅ Bot aktif: ${client.user.tag}`);
});

client.on("messageCreate", (msg) => {
  if (msg.content === "!ping") {
    const Latency = Date.now() - msg.createdTimestamp;
    msg.reply(`🏓 Pong! Latency: ${Latency}ms`);
  }
});

client.login(process.env.DISCORD_TOKEN);
