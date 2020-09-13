const Discord = require('discord.js'); // Appel des ressources requises
const { TOKEN, PREFIX } = require('./config');
const { readdirSync } = require('fs');
const { cmd } = require('./commands/Minecraft/mcrcon.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

launch = false; // création de la variable qui définit si le jeu est en cours

Players = []; // variable des joueurs

const loadCommands = (dir = "./commands/") => { //Récupération des commandes se situant dans d'autres fichiers.js
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for(const file of commands){
      const getFileName = require(`${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
      console.log(`Commande chargée: ${getFileName.help.name}`);
    };
  });
};

loadCommands(); //Chargement des commandes récupéres

client.on('message', message => { //détéction des commandes demandés par un utilisateur 
 
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  const args = message.content.slice(PREFIX.length).split(/ +/g);
  const commandName = args.shift().toLowerCase();

  if(!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName);

  if(command.help.args && !args.length){
    return message.channel.send("Des arguments sont requis !")
  }

  if(command.help.admin && !message.member.hasPermission('BAN_MEMBERS')){
    return message.channel.send("Tu n'a pas les permissions nécessaires !");
  }

  if(command.help.delete){
     message.delete();
  };

  command.run(client, message, args);
});

client.on('ready', () => { 
  const status = client.channels.cache.find(channel => channel.name === 'status'); // Bot searching for a channel named 'status'
  // status.send('Bot Connecté'); // Annonce quand le Bot est en ligne
});

client.login(TOKEN);