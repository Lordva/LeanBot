const Discord = require('discord.js');
const { PREFIX } = require('../../config.js');
const { cmd } = require('../../commands/Minecraft/mcrcon.js');
image = 0;


module.exports = (client, message) => {

  { Players } require('../../main.js');
  { Admin } require('../../main.js');

  var p = Players.includes(message.author.id);
  var a = Admin.includes(message.author.id);
  var images = ['https://media.discordapp.net/attachments/706571623741784095/755244246562504834/oot.png','https://media.discordapp.net/attachments/706571623741784095/755244712624914442/super-meat-boy-two-column-01-ps4-eu-29sep15.png','https://cdn.discordapp.com/attachments/706571623741784095/759970386049499186/zJho2zyv_400x400.png'];
  var rep = ['ocarina of time','super meat boy','overwatch'];
  const popsauce = client.channels.cache.find(channel => channel.name === 'popsauce');
  const joinstart = client.channels.cache.find(channel => channel.name === 'join-start');

  if(message.content.toLowerCase() === "$skip" && launch === true && !message.author.bot && message.content.startsWith(PREFIX) && a === true){
    image = Math.floor(Math.random() * Math.floor(images.length));
    console.log([rep[image]]);
      const pic = new Discord.MessageEmbed()
      .setDescription("```" + String([rep[image]]) + "```")
      .setColor(3366179)
      .setImage(String([images[image]]))
      .setAuthor("D'où viens cette image", null, null)
      popsauce.send(pic);
  }

  if(message.content.toLowerCase() === "$skip" && launch === true && !message.author.bot && message.content.startsWith(PREFIX) && a === false){
    popsauce.send("Seul celui qui a lancé la partie peut skip.");
  }

  if(message.content.toLowerCase() === "$reset" && launch === false && !message.author.bot && message.content.startsWith(PREFIX) && p === true){
    Players = ["gbg", "hghgh"];
    joinstart.send(message.author.toString() + " a réinitialisé la liste des joueurs");
    console.log(Players);
  }

  if(launch === true && init === true){
    init = false;
    image = Math.floor(Math.random() * Math.floor(images.length));
    console.log([rep[image]]);
    const pic = new Discord.MessageEmbed()
    .setDescription("```" + String([rep[image]]) + "```")
    .setColor(3366179)
    .setImage(String([images[image]]))
    .setAuthor("D'où viens cette image", null, null)
    popsauce.send(pic);
  }

  if(message.content.toLowerCase() === String([rep[image]]) && launch === true && !message.author.bot && !message.content.startsWith(PREFIX) && p === true){
    popsauce.send("Bonne réponse");
    popsauce.send("index du joueur " + Players.indexOf(message.author.id));
    Score[Players.indexOf(message.author.id)] = Score[Players.indexOf(message.author.id)] + 1
    popsauce.send("score du joueur " + Score[Players.indexOf(message.author.id)])
      image = Math.floor(Math.random() * Math.floor(images.length));
    console.log([rep[image]]);
      const pic = new Discord.MessageEmbed()
      .setDescription("```" + String([rep[image]]) + "```")
      .setColor(3366179)
      .setImage(String([images[image]]))
      .setAuthor("D'où viens cette image", null, null)
      popsauce.send(pic);
  }else{
    if(message.content.toLowerCase() !== String([rep[image]]) && launch === true && !message.author.bot && !message.content.startsWith(PREFIX) && p === true){
      popsauce.send("Mauvaise réponse");
      console.log([rep[image]]);
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