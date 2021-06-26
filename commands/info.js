module.exports = {
  name: "info",
  description: "Show Gabe's commands",
  execute(message, args) {
    return message.channel.send(`Set my volume with the \"volume\" command`);
  }
};
