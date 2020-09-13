module.exports.run = (client,args,message) => { //définir les ressources requises.
  const { RCON } = require('minecraft-server-util');
  const {ip,pass} = require ('./mcips.json');
  const cmdmc = client.channels.cache.find(channel => channel.name === 'mc-log'); //recherche un salon discord s'appellant 'mc-log'.

  const cmd = { //définit l'embed content les informations à renvoyer.
    "color": 3366179,
    "fields": [
      {
        "name": "Commande executée sur le serveur minecraft :",
        "value": "```" + args.content + "```"
      }
    ]
  };
  
  const rconExample = async (message) => { //execute la commande demandée.

    const rcon = new RCON(`${ip}`, { port: 40729, password: `${pass}` }); //se connecte au RCON du serveur minecraft.

    args.content = args.content.slice(6);//retire le nombre de carractères correspondant au préfix et l'espace avant la commande.
    console.log(args.content);//affiche les arguments qui vont êtres envoyés au serveur dans la consolle.
    cmdmc.send({embed : cmd})//envoie dans le salon discord mc-log la commande executée sur le serveur.
  
    await rcon.connect();//établis une connection au RCON.
  
    await rcon.run(args.content); //envoie la commande demandée.
  
    return rcon.close(); //se déconnecte du RCON.
  };

  rconExample();//execute la fonction ci-dessus.
};

module.exports.help = {
  name:"rcon",
  description: "Envoie une commande au serveur.",
  args: true,
  admin: true,
  delete: true
};