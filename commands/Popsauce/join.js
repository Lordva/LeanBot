module.exports.run = (client, message, args) => {

  { Players } require('../../main.js'); //Récupération des la liste des joueurs

  if(launch === true) {
    message.channel.send("Une partie à déjà démarré sans toi, dommage !"); // Message envoyé si une partie est déjà en cours
  };

  if(launch === false) {
    message.channel.send(message.author.toString() + " a rejoint la partie !"); // Message envoyé quand un joueurs rejoint la partie
    console.log(message.author.username);
    Players.push(message.author.id); //Ajoute le joueur à la liste des joueurs
    console.log(Players);
  };
};

module.exports.help = {
  name: "join",
  description: "Rejoin la partie de popsauce",
  args: false,
};