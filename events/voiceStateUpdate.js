const gabeBorkMP3 = "../gabeBork.mp3";

module.exports = {
  name: "voiceStateUpdate",
  execute(oldState, newState, client) {
    if (oldState.member.bot) return;

    console.log(`${oldState.member.nickname} entered ${newState.channel.name}`);

    newState.channel.join().then((connection) => {
      setTimeout(() => {
        connection.play(gabeBorkMP3, { volume: 0.7 });
      }, 500);
      setTimeout(() => {
        connection.disconnect();
      }, 2000);
    });
  },
};
