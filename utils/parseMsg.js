const { prefix } = require("../config.json");

module.exports = (msg) => {
  const cmdTxt = msg.content.split(/\s/)[1];
  const suffix = msg.content.substring(prefix.length + cmdTxt.length + 2);
  // +2 for the space after white spaces
  return [cmdTxt, suffix];
};
