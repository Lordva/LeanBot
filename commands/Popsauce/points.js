module.exports.run = (client, message, args) => {
  var mod = require('../../lists');//importe les variables relatives au jeu depuis le fichier main.js.
  mod.points = args;
  const joinstart = client.channels.cache.find(channel => channel.name === 'join-start');//l'id du salon salon nomé join-start es stocké dans la variable joinstart.
  joinstart.send("Nombre de points nécéssaires définit à "+args+" points.");
}

module.exports.help = {
  name:"points",
  description: "affiche toutes les commandes",
  args: true,
  admin: false,
  delete: false
};