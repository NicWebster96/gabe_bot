const pathToGabeBorkMP3 = require("path").join(
  __dirname,
  "../sounds/gabeBork.mp3"
);
const { botID, volumeFileName } = require("../config.json");
const fs = require("fs");

module.exports = {
  name: "voiceStateUpdate",
  execute(oldState, newState, client) {
    if (oldState.member.id === botID || !newState.channel) return;

    try {
      const borkVolume = fs.readFileSync(volumeFileName, "utf8");
      if (!oldState.channel || oldState.channel !== newState.channel) {
        newState.channel
          .join()
          .then((connection) => {
            console.log(`Playing ${pathToGabeBorkMP3} at volume ${borkVolume}`);
            const dispatcher = connection.play(pathToGabeBorkMP3, {
              volume: borkVolume
            });
            dispatcher.on("speaking", (speaking) => {
              if (!speaking) connection.disconnect();
            });
          })
          .catch((err) => console.log(err));
      }
    } catch (err) {
      console.error(err);
    }
  }
};
