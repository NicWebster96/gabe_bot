const { prefix } = require("../config.json");
const parseMsg = require("../utils/parseMsg");

module.exports = {
  name: "message",
  execute(message, client) {
    if (message.mentions.has(client.user)) {
      return message.reply("Use my prefix to execute commands: " + prefix);
    }

    // if the message doesn't start with the prefix or if the author is a bot, return
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    console.log(
      "Command received from " + message.author + ": " + message.content
    );
    const result = parseMsg(message);
    if (!result) return;

    const command = result[0];
    const suffix = result[1];
    if (!client.commands.has(command)) return message.channel.send("Bork!");

    try {
      client.commands.get(command).execute(message, suffix);
    } catch (error) {
      console.error(error);
      message
        .reply("there was an error trying to execute that command!")
        .then((msg) => msg.delete({ timeout: 5000 }));
    }
  }
};
