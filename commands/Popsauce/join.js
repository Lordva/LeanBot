module.exports.run = (client, message, args) => {

  { Players } require('../../main.js'); //récupération des la liste des joueurs.

  if(launch === true) {
    message.channel.send("Une partie à déjà démarré sans toi, dommage !"); //message envoyé si une partie est déjà en cours.
  };

  if(launch === false) {
    message.channel.send(message.author.toString() + " a rejoint la partie !"); //message envoyé quand un joueurs rejoint la partie.
    console.log(message.author.username);//affiche dans la consolle l'utilisateur ayant effectué la commande.
    Players.push(message.author.id); //ajoute le joueur à la liste des joueurs.
    console.log(Players);//renvoie la liste des joueurs après qu'un joueur ait rejoin la partie.
  };
};

module.exports.help = {
  name: "join",
  description: "Rejoin la partie de popsauce",
  args: false,
  admin: false,
  delete: false
};