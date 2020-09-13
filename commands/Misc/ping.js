module.exports.run = (client, message, args) => {
  message.channel.send("Pong !");//envoie "Pong !" dans le salon où la commande a été effectuée.
};

module.exports.help = {
  name:"ping",
  description: "Répond Pong !",
  args: false,
  admin: false,
  delete: true
};