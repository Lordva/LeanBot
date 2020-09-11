module.exports.run = (client, message, args) => {
  const mc = require('minecraft-server-util');

  mc.query('play.nefers.fr', { port: 10042 }) // port is optional
    .then((response) => {
        console.log(response);
        const embed = {
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
              "value": "[clique ici pour accéder à la map en ligne](http://map.nefers.fr:40012/)"
            },
            {
              "name": "Joueurs en ligne",
              "value": response.onlinePlayers
            }
          ]
        };
        message.channel.send({embed : embed})
    })

};

module.exports.help = {
  name:"mc",
  description: "Donne les info du serveur minecraft.",
  args: false,
};