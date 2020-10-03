const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

  var mod = require('../../main');
  const joinstart = client.channels.cache.find(channel => channel.name === 'join-start');
  const popsauce = client.channels.cache.find(channel => channel.name === 'popsauce');
  var p = mod.Players.includes(message.author.id);
  var a = mod.Admin.includes(message.author.id);

  if(launch === true && !message.author.bot && a === true && p === true){
    image = Math.floor(Math.random() * Math.floor(mod.images.length));
    console.log([mod.rep[image]]);
    const pic = new Discord.MessageEmbed()
    .setDescription("```" + String([mod.rep[image]]) + "```")
    .setColor(3366179)
    .setImage(String([mod.images[image]]))
    .setAuthor("D'où viens cette image", null, null)
    popsauce.send(pic);
  }else{
    if(launch === true && !message.author.bot && a === false){
      popsauce.send("Seul le joueur qui à lancé la partie peut skip !");
    }
  }
};

module.exports.help = {
  name: "skip",
  description: "Skip l'image actuelle",
  args: false,
  admin: false,
  delete: false
};