module.exports.run = (client, message, args) => {
  const mc = require('minecraft-server-util');
  {ip,map} require ('./mcips.js');

  mc.query(`${ip}`, { port: 10042 }) // port is optional
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
              "value": `[clique ici pour accéder à la map en ligne](${map})`
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