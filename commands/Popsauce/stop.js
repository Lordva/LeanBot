module.exports.run = (client, message, args) => {

  var mod = require('../../main');
  const joinstart = client.channels.cache.find(channel => channel.name === 'join-start');
  var p = mod.Players.includes(message.author.id);
  var a = mod.Admin.includes(message.author.id);

  if(launch === true && !message.author.bot && p === true && a === true){
    mod.Players = ["hghgh", "hghgh"];
    mod.Admin = [];
    mod.Score = [0,0,0,0,0,0,0,0,0,0];
    launch = false;
    joinstart.send(message.author.toString() + " a arrêté la partie");
    console.log(mod.Players);
  }else{
    if(launch === true && !message.author.bot && p === false){
      joinstart.send(message.author.toString() + " Seul le joueur qui à lancé la partie peut l'arrêter'.");
    }
  }
  

};

module.exports.help = {
  name: "stop",
  description: "Arrête la partie en cours",
  args: false,
  admin: false,
  delete: false
};