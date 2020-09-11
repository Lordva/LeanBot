module.exports.run = (client, message, args) => {

  { Players } require('../../main.js');

  if(launch === true) {
    message.channel.send("Une partie à déjà en cours !"); // Say message if someone try to join a game already launched
  };

  if(launch === false) {
    console.log(Players);
    if(Players.length >= 3){
      message.channel.send('La partie va démarrer avec ' + Players.length + ' joueurs.');
    }else {
      message.channel.send("Pas assez de joueurs pour démarrer la partie");
    }
  };
};

module.exports.help = {
  name: "start",
  description: "Lance une partie de popsauce",
  args: false,
};