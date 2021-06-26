const Config = require("../config.json");

// Bot can be called with either the prefix or mentioning the bot directly.
module.exports = (msg, client) => {
  const cmdStr = msg.content.split(/\s/)[0].substring(Config.prefix.length);
  const suffix = msg.content.substring(
    cmdStr.length + Config.prefix.length + 1
  ); // +1 for the space
  if (msg.mentions.has(client.user)) {
    try {
      cmdTxt = msg.content.split(/\s/)[1];
      suffix = msg.content.substring(
        bot.user.mention().length +
          cmdTxt.length +
          Config.commandPrefix.length +
          1
      ); // +1 for the space
    } catch (e) {
      //no command provided
      return null;
    }
  }

  return [cmdTxt, suffix];
};
