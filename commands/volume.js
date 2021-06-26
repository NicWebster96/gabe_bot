module.exports = {
  name: "volume",
  usage: "<number>",
  description: "Change volume of Gabe's bork!",
  execute(message, args) {
    if (args.length != 1) {
      return message.channel.send(
        'Set my volume by providing a number 1-10\nExample: "gabe volume 5"'
      );
    }

    const requestedVolume = parseInt(args[0]);
    if (isNaN(requestedVolume)) {
      return message.reply("That doesn't seem to be a valid number");
    } else if (requestedVolume > 10 || requestedVolume < 1) {
      return message.channel.send(
        'Set my volume by providing a number 1-10\nExample: "gabe volume 5"'
      );
    }

    return message.channel.send(`Setting volume to ${requestedVolume}. Bork!`);
  }
};
