const Discord = require('discord.js'); // appel des ressources requises.
const { TOKEN, PREFIX } = require('./config');
const { readdirSync } = require('fs');
const { cmd } = require('./commands/Minecraft/mcrcon.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

launch = false; // création de la variable qui définit si le jeu est en cours.

Players = []; // variable des joueurs.

const loadCommands = (dir = "./commands/") => { //récupération des commandes se situant dans d'autres fichiers.js.
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for(const file of commands){
      const getFileName = require(`${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
      console.log(`Commande chargée: ${getFileName.help.name}`);
    };
  });
};

loadCommands(); //chargement des commandes récupéres.

client.on('message', message => { //détéction des commandes demandés par un utilisateur.
 
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
});

client.on('ready', () => { 
  const status = client.channels.cache.find(channel => channel.name === 'status'); // le bot recherche un salon nommé 'status'.
  // status.send('Bot Connecté'); // annonce quand le Bot est en ligne dans le salon 'status'.
});

client.login(TOKEN); //connextion au bot via le fichier "Config.js" contenant le token du bot sous cette forme "exports.TOKEN = "TOKEN";".