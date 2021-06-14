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

    if (!oldState.channel || oldState.channel !== newState.channel) {
      newState.channel
        .join()
        .then((connection) => {
          console.log(`Playing ${pathToGabeBorkMP3}`);
          const dispatcher = connection.play(pathToGabeBorkMP3);
          dispatcher.on("speaking", (speaking) => {
            if (!speaking) connection.disconnect();
          });
        })
        .catch((err) => console.log(err));
    }
  },
};
