const Discord = require('discord.js'); // appel des ressources requises.
const { TOKEN } = require('./config');
const { readdirSync } = require('fs');


const client = new Discord.Client();
client.commands = new Discord.Collection();

launch = false; // création de la variable qui définit si le jeu est en cours.

module.exports = {
  Players : ["gbg", "hghgh"], // liste des joueurs.
  Admin : [], //joueur qui a lancé la partie.
  Score : [0,0,0,0,0,0,0,0,0,0],//scores des joueurs.
  rep : ['ocarina of time','super meat boy','overwatch'],//liste de réponses associés aux images.
  repalias : ['oot','super meat boy','overwatch'],//aliases pour les réponses
  imgname : ['oot','super_meat_boy','ow'] //nom des images stockés dans les fichiers locaux du bot.
}

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

const loadEvents = (dir = "./events/") => { //récupération des events se situant dans d'autres fichiers.js.
  readdirSync(dir).forEach(dirs => {
    const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for(const event of events){
      const evt = require(`${dir}/${dirs}/${event}`);
      const evtName = event.split(".")[0];
      client.on(evtName, evt.bind(null, client));
      console.log(`Evenement chargée: ${evtName}`);
    };
  });
};

loadCommands(); //chargement des commandes récupéres.
loadEvents(); //chargement des evenements récupéres.

client.login(TOKEN); //connextion au bot via le fichier "Config.js" contenant le token du bot sous cette forme "exports.TOKEN = "TOKEN";".