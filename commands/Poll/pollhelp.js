const Discord = require('discord.js');
const { PREFIX } = require('../../configs/config');

exports.run = async (client, message) => {

    const how = new Discord.RichEmbed()     
    .setColor('#007f47')
    .setTitle('📊 Comment faire un sondage :')
    // Aide sondages
    .setDescription(`•**Oui / Non / Pas d'avis**
    ${PREFIX}poll "Aimez-vous la glace à la vanille ?"  *(avec guillements)*

    •**Question à choix multiples (1-20)**
    ${PREFIX}poll "Quelle est votre couleur préférée ?" "Bleu" "Rouge" "Jaune"`)
    //.setDescription(`**Oui / Non / Pas d'avis** \n ${PREFIX}poll tp à la couche 256 quand on tombe dans l'End ?`)
    .setFooter('')

message.channel.send(how);
}

module.exports.help = {
    name:"pollhelp",
    description: "gére la page d'aide de la commande $poll",
    args: true,
    admin: false,
    delete: true
  };
