module.exports.run = (client, message, args) => {
  { Players } require('../../main.js');
  const popsauce = client.channels.cache.find(channel => channel.name === 'popsauce');
  const joinstart = client.channels.cache.find(channel => channel.name === 'join-start');

  if(launch === true) {
    joinstart.send("Une partie à déjà en cours !"); //envoie une erreur si la partie est déjà en cours.
  };

  if(launch === false) {//si la partie n'est pas en cours.
    console.log(Players);//affiche dans la consolle tout les joueurs.
    if(Players.length >= 3){//si il y a 3 joueurs ou plus.
      joinstart.send('La partie va démarrer avec ' + Players.length + ' joueurs.\nVeuillez vous rendre dans ' +"<#" + popsauce + ">");//envoie un message annoncant le début de la partie avec le nombre de joueurs y participant.
      launch = true;
    }else {//si il y a moins de 3 joueurs.
      joinstart.send("Pas assez de joueurs pour démarrer la partie");//affiche un message d'erreur.
    }
  };
};

module.exports.help = {
  name: "start",
  description: "Lance une partie de popsauce",
  args: false,
  admin: false,
  delete: true
};