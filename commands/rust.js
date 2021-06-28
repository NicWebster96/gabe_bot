const axios = require("axios");
const { users, servers } = require("../utils/battleMetricsIDs.json");
const baseURL = "https://api.battlemetrics.com";

// This command is for the Steam game Rust. BattleMetrics is a site that aggregates player and
// server data and makes it available through their public API. No API Key needed. Add your
// buddies Discord IDs and BattleMetrics IDs to battleMetricsIDs.json, along with the ID of the
// server you play on and this command will retrieve both server and player info.

module.exports = {
  name: "rust",
  description: "Display player count of server and player's hours!",
  execute(msg, args) {
    if (servers.length === 0 || users.length === 0) {
      console.log(
        "Rust command is not ready for use. Please add user/server info in battleMetricsIDs.json"
      );
      return msg.reply(
        "That command has not been configured by the admin yet!"
      );
    }

    axios
      .get(`${baseURL}/servers/${servers[0].bmID}`)
      .then((res) => {
        const { players, status } = res.data.data.attributes;
        const rustMapUrl = res.data.data.attributes.details.rust_maps.url;

        msg.channel
          .send(
            `${servers[0].name} is currently ${status} with ${players} players!\n
            <${rustMapUrl}>`
          )
          .then((response1) => {
            response1.delete({ timeout: 60000 });
            msg.delete({ timeout: 60000 });
          });
      })
      .catch((err) => {
        console.log(err);
      });

    const found = users.find((user) => user.discordID === msg.member.id);
    if (found.bmID) {
      axios
        .get(`${baseURL}/players/${found.bmID}`, {
          params: {
            include: "server",
            "filter[servers]": servers[0].bmID
          }
        })
        .then((res) => {
          const playerName = res.data.data.attributes.name;
          const playerTime = res.data.included[0].meta.timePlayed;
          const hoursPlayed = Math.floor(playerTime / (60 * 60));

          msg.channel
            .send(
              `${playerName}, you have ${hoursPlayed} hours on ${servers[0].name}.`
            )
            .then((response2) => {
              response2.delete({ timeout: 60000 });
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
