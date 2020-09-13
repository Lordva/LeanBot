module.exports.run = (client, message) => {
  const mc = require('minecraft-server-util');
  const {ip,map} = require ('./mcips.json');

    mc.ping(`${ip}`, { port: 10042 })
    .then((response) => {
      console.log(response);
      const infos = {
        "title": "Serveur minecraft",
        "description": "```\nVoici les informations du serveur minecraft```",
        "color": 10115092,
        "fields": [
          {
            "name": "IP",
            "value": response.host
          },
          {
            "name": "Map",
            "value": `[clique ici pour accéder à la map en ligne](${map})`
          },
          {
            "name": "Joueurs en ligne",
            "value": response.onlinePlayers + " / " + response.maxPlayers
          },
          {
            "name": "Version",
            "value": response.version
          }
        ]
      };
      message.channel.send({embed : infos})
    })
};

module.exports.help = {
  name:"mc",
  description: "Donne les info du serveur minecraft.",
  args: false,
  admin: false,
  delete: false
};