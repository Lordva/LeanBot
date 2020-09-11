module.exports.run = (client,args,message) => {
  const { RCON } = require('minecraft-server-util');
  const {ip,pass} = require ('./mcips.json');
  
  const rconExample = async () => {
    const rcon = new RCON(`${ip}`, { port: 40729, password: `${pass}` });

    args.content = args.content.slice(6);
    console.log(args.content);
  
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
  admin: true
};