require("dotenv").config();

const Discord = require("discord.js");

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
