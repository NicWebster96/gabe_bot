require("dotenv").config();

const Discord = require("discord.js");
const { prefix } = require("./config.json");

// create a new Discord client
const client = new Discord.Client();

// retrieve bot token from .env file
const TOKEN = process.env.TOKEN;

// login to Discord with your app's token
client.login(TOKEN);

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  // if the message either doesn't start with the prefix or the author is a bot, exit early
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "volume") {
    if (args.length != 2) {
      return message.channel.send(
        'Set my volume by providing a number 1-10\nExample: "gabe volume 5"'
      );
    }

    const requestedVolume = parseInt(args[1]);
    if (isNaN(requestedVolume)) {
      return message.reply("That doesn't seem to be a valid number");
    } else if (requestedVolume > 10 || requestedVolume < 1) {
      return message.channel.send(
        'Set my volume by providing a number 1-10\nExample: "gabe volume 5"'
      );
    }

    return message.channel.send(`Setting volume to ${requestedVolume}`);
  } else if (command === "info") {
    return message.channel.send(`Set my volume with the \"volume\" command`);
  }
});
