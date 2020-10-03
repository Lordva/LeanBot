module.exports.run = (client, message, args) => {

  var mod = require('../../main');
  const joinstart = client.channels.cache.find(channel => channel.name === 'join-start');
  var p = mod.Players.includes(message.author.id);
  var a = mod.Admin.includes(message.author.id);

  if(launch === false && !message.author.bot && p === true){
    mod.Players = ["hghgh", "hghgh"];
    mod.Admin = [];
    mod.Score = [0,0,0,0,0,0,0,0,0,0];
    
    joinstart.send(message.author.toString() + " a réinitialisé la liste des joueurs");
    console.log(mod.Players);
  }else{
    if(launch === false && !message.author.bot && p === false){
      joinstart.send(message.author.toString() + " vous devez être présent dans la partie pour pouvoir réinitialiser les joueurs.");
    }
  }
  

};

module.exports.help = {
  name: "reset",
  description: "Reset la liste des joueurs",
  args: false,
  admin: false,
  delete: false
};