module.exports.run = (client,args,message) => {
  const { RCON } = require('minecraft-server-util');
  const {ip,pass} = require ('./mcips.json');
  const cmdmc = client.channels.cache.find(channel => channel.name === 'mc-log');

  const cmd = {
    "color": 3366179,
    "fields": [
      {
        "name": "Commande executée sur le serveur minecraft :",
        "value": "```" + args.content + "```"
      }
    ]
  };
  
  const rconExample = async (message) => {

    const rcon = new RCON(`${ip}`, { port: 40729, password: `${pass}` });

    args.content = args.content.slice(6);
    console.log(args.content);
    cmdmc.send({embed : cmd})
  
    await rcon.connect();
  
    await rcon.run(args.content); 
  
    return rcon.close(); 
  };

  rconExample();
};

module.exports.help = {
  name:"rcon",
  description: "Envoie une commande au serveur.",
  args: true,
  admin: true,
  delete: true
};