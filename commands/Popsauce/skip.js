const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

  var mod = require('../../lists');//importe les variables relatives au jeu depuis le fichier main.js.
  const popsauce = client.channels.cache.find(channel => channel.name === 'popsauce');//l'id du salon salon nomé join-start es stocké dans la variable popsauce.
  var p = mod.Players.includes(message.author.id);//la variable p vaut l'index où sont stockés les joueurs.
  var a = mod.Admin.includes(message.author.id);//la variable a vaut l'index où est stocké le joueur qui à lancé la partie.

  if(launch === true && !message.author.bot && a === true && p === true){//si le partie est lancée que l'auteur du message n'est pas un bot et qu'il est le joueur qui a lancé la partie.
  popsauce.send("La réponse était " +[mod.rep[image]]);
    image = Math.floor(Math.random() * Math.floor(mod.imgname.length));//on choisi une image au hasard.
    console.log([mod.rep[image]]);
    //on affiche l'image choisie dans un embed.
    const img = new Discord.MessageAttachment('images/'+mod.imgname[image]+'.png');
    const pic = new Discord.MessageEmbed()
    .setDescription("```" + String([mod.rep[image]]) + "```")
    .setColor(3366179)
    .attachFiles(img)
    .setImage('attachment://'+mod.imgname[image]+'.png')
    .setAuthor("D'où viens cette image", null, null)
    popsauce.send(pic);
  }else{
    if(launch === true && !message.author.bot && a === false){//si la partie est lancée que l'auteur du message n'est pas un bot mais que le joueur n'est pas celui qui a lancé la partie.
      popsauce.send("Seul le joueur qui à lancé la partie peut skip !");//on envoie un message d'erreur.
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