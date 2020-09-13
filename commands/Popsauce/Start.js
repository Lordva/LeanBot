module.exports.run = (client, message, args) => {

  { Players } require('../../main.js');

  if(launch === true) {
    message.channel.send("Une partie à déjà en cours !"); //envoie une erreur si la partie est déjà en cours.
  };

  if(launch === false) {//si la partie n'est pas en cours.
    console.log(Players);//affiche dans la consolle tout les joueurs.
    if(Players.length >= 3){//si il y a 3 joueurs ou plus.
      message.channel.send('La partie va démarrer avec ' + Players.length + ' joueurs.');//envoie un message annoncant le début de la partie avec le nombre de joueurs y participant.
    }else {//si il y a moins de 3 joueurs.
      message.channel.send("Pas assez de joueurs pour démarrer la partie");//affiche un message d'erreur.
    }
  };
};

module.exports.help = {
  name: "start",
  description: "Lance une partie de popsauce",
  args: false,
  admin: false,
  delete: false
};