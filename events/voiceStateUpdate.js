const pathToGabeBorkMP3 = require("path").join(
  __dirname,
  "../sounds/gabeBork.mp3"
);
const { botID } = require("../config.json");

module.exports = {
  name: "voiceStateUpdate",
  execute(oldState, newState, client) {
    if (oldState.member.id === botID || !newState.channel) return;

    console.log(`${oldState.member.nickname} entered ${newState.channel.name}`);

    newState.channel
      .join()
      .then((connection) => {
        const dispatcher = connection.play(pathToGabeBorkMP3, { volume: 0.7 });
        dispatcher.on("speaking", (speaking) => {
          if (!speaking) {
            connection.disconnect();
          }
        });
      })
      .catch((err) => console.log(err));
  },
};
