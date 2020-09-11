module.exports.run = (client, message, args) => {
  message.channel.send("Pong !");
};

module.exports.help = {
  name:"ping",
  description: "Répond Pong !",
  args: false,
  admin: false
};