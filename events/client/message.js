const Discord = require('discord.js');
const { PREFIX } = require('../../config.js');
const { cmd } = require('../../commands/Minecraft/mcrcon.js');
image = 0;

module.exports = (client, message) => {
  var mod = require('../../main');
  var p = mod.Players.includes(message.author.id);
  const popsauce = client.channels.cache.find(channel => channel.name === 'popsauce');
  const joinstart = client.channels.cache.find(channel => channel.name === 'join-start');

  if(message.content.toLowerCase() === String([mod.rep[image]]) && launch === true && !message.author.bot && !message.content.startsWith(PREFIX) && p === true){
    popsauce.send("Bonne réponse");
    mod.Score[mod.Players.indexOf(message.author.id)] = mod.Score[mod.Players.indexOf(message.author.id)] + 1
    popsauce.send("Votre score est de " + mod.Score[mod.Players.indexOf(message.author.id)])

    if(mod.Score[mod.Players.indexOf(message.author.id)] >= 10){
      popsauce.send("<@"+ message.author.id + ">"+" à gagné la partie.");
      mod.Players = ["hghgh", "hghgh"];
      mod.Admin = [];
      mod.Score = [0,0,0,0,0,0,0,0,0,0];
      launch = false;
      return;
    }

      image = Math.floor(Math.random() * Math.floor(mod.images.length));
    console.log([mod.rep[image]]);
      const pic = new Discord.MessageEmbed()
      .setDescription("```" + String([mod.rep[image]]) + "```")
      .setColor(3366179)
      .setImage(String([mod.images[image]]))
      .setAuthor("D'où viens cette image", null, null)
      popsauce.send(pic);
  }else{
    if(message.content.toLowerCase() !== String([mod.rep[image]]) && launch === true && !message.author.bot && !message.content.startsWith(PREFIX) && p === true){
      popsauce.send("Mauvaise réponse");
      console.log([mod.rep[image]]);
    }
  }
  
  if (!message.content.startsWith(PREFIX) || message.author.bot) return; //Empeche un bot d'effectuer une commande.
  const args = message.content.slice(PREFIX.length).split(/ +/g); // Retire le prefix des arguments de la commande.
  const commandName = args.shift().toLowerCase(); //transforme la commande entrée par l'utilisateur en minuscule.

  if(!client.commands.has(commandName)) return; //effectue la commande entrée par l'utilisateur.
  const command = client.commands.get(commandName);

  if(command.help.args && !args.length){ //ajout d'un paramètre afin de renvoyer une erreur si des arguments son requis pour une commande.
    return message.channel.send("Des arguments sont requis !")
  }

  if(command.help.admin && !message.member.hasPermission('BAN_MEMBERS')){ //ajout d'un paramètre afin de renvoyer une erreur si l'utilisateur n'a pas les permissions nécessaires à l'execution de la commande (Admin).
    return message.channel.send("Tu n'a pas les permissions nécessaires !");
  }

  if(command.help.delete){ //ajout d'un paramètre definisant si la commande de l'utilisateur doit ou non être supprimée du chat.
     message.delete();
  };

  command.run(client, message, args);//execute le code de la commande appelée .

}