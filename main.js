const Discord = require('discord.js'); // appel des ressources requises.
const { TOKEN } = require('./config');
const { readdirSync } = require('fs');


const client = new Discord.Client();
client.commands = new Discord.Collection();

launch = false; // création de la variable qui définit si le jeu est en cours.

module.exports = {
  Players : ["",""], // liste des joueurs.
  Admin : [], //joueur qui a lancé la partie.
  Score : [0,0,0,0,0,0,0,0,0,0],//scores des joueurs.
  rep : ['seven deadly sins','91days','ajin','akame ga kill','amd','among us','anastasia','android','angelbeats','angular','another','apple','assassination classroom','assassins pride', "assassin's creed origins","atlantide l'empire perdu",'arrete-moi si tu peux','audacity','baki','banana fish','beat saber','black mirror','boku no pico','boneworks','brave','breaking bad','b the begining','btooom','bungou stray dogs','civilization iv','cluster truck','code geass','counter strike global offensive','cuphead','cyberpunk','darksouls','dead cells','dead man wonderland','deathnote','demon slayer','demon slayer','discord','dr stone','edge of tomorrow','elfen lied','epic games','erased','euphoria','evengelion','fireforce','fl studio','full metal alchemist','frostpunk','gambling school','game of thrones','the god of highschool','god of war','gog','google','google chrome','gravity falls','gundam','haikyuu','halflife','hardcore henri','harry potter',"hellblade Senua's sacrifice",'inception','ironman 2','javascript','john wick','jojo','jumanji','just cause 3','kaguya sama','kingsman','konosuba','kyoukai no kanata','law breakers','le loup de walstreet','league of legends','love death and robots','made in abyss','men in black','my hero academia','minecraft','mirai nikki','mob psycho 100','mortel','mr robot','narcos','nier automata','nodejs','no game no life','no guns life',"no man's sky",'nvidia','old boy','one piece','one piece','oneshoot','ocarina of time','one punch time','overlord','owerwatch','owari no seraph','payday 2','persona 5','photoshop','portal 2','the promised neverland','pulpfiction','python','rainbow six','ratatouille','razer','react','ready player one','red dead redemption 2','re zero','rick et morty','samurai champloo','sword art online','sekiro','seul sur mars','sex education',"l'attaque des titans",'solo leveling','spiderman','the stanley parable','star cityzen','steam','steins gate','super hot','super mario galaxy 2','super meat boy','switch','teamspeak','the boys','the mask','the witcher','tokyoghoul','toy story','trigun','undertale','unrealengine','visual studio code','yakuza','your lie in april','yourname'],//liste de réponses associés aux images.


  repalias : ['7 deadly sins','91 days','ajin','akame ga kill','amd','among us','anastasia','android','angelbeats','angular','another','apple','assassination classroom','assassins pride', "assassin's creed origins","atlantide l'empire perdu",'arrete-moi si tu peux','audacity','baki','banana fish','beat saber','black mirror','boku no pico','boneworks','brave','breaking bad','b the begining','btooom','bungou stray dogs','civilization iv','cluster truck','code geass','counter strike global offensive','cuphead','cyberpunk','darksouls','dead cells','dead man wonderland','deathnote','demon slayer','demon slayer','discord','dr stone','edge of tomorrow','elfen lied','epic games','erased','euphoria','evengelion','fireforce','fl studio','full metal alchemist','frostpunk','gambling school','game of thrones','the god of highschool','god of war','gog','google','google chrome','gravity falls','gundam','haikyuu','halflife','hardcore henri','harry potter',"hellblade Senua's sacrifice",'inception','ironman 2','javascript','john wick','jojo','jumanji','just cause 3','kaguya sama','kingsman','konosuba','kyoukai no kanata','law breakers','le loup de walstreet','league of legends','love death and robots','made in abyss','men in black','my hero academia','minecraft','mirai nikki','mob psycho 100','mortel','mr robot','narcos','nier automata','nodejs','no game no life','no guns life',"no man's sky",'nvidia','old boy','one piece','one piece','oneshoot','ocarina of time','one punch time','overlord','owerwatch','owari no seraph','payday 2','persona 5','photoshop','portal 2','the promised neverland','pulpfiction','python','rainbow six','ratatouille','razer','react','ready player one','red dead redemption 2','re zero','rick et morty','samurai champloo','sword art online','sekiro','seul sur mars','sex education',"l'attaque des titans",'solo leveling','spiderman','the stanley parable','star cityzen','steam','steins gate','super hot','super mario galaxy 2','super meat boy','switch','teamspeak','the boys','the mask','the witcher','tokyoghoul','toy story','trigun','undertale','unrealengine','visual studio code','yakuza','your lie in april','yourname'],//aliases pour les réponses


  repalias2:['seven deadly sins','91days','ajin','akame ga kill','amd','among us','anastasia','android','angelbeats','angular','another','apple','assassination classroom','assassins pride', "assassin's creed origins","atlantide l'empire perdu",'arrete-moi si tu peux','audacity','baki','banana fish','beat saber','black mirror','boku no pico','boneworks','brave','breaking bad','b the begining','btooom','bungou stray dogs','civilization iv','cluster truck','code geass','counter strike global offensive','cuphead','cyberpunk','darksouls','dead cells','dead man wonderland','deathnote','demon slayer','demon slayer','discord','dr stone','edge of tomorrow','elfen lied','epic games','erased','euphoria','evengelion','fireforce','fl studio','full metal alchemist','frostpunk','gambling school','game of thrones','the god of highschool','god of war','gog','google','google chrome','gravity falls','gundam','haikyuu','halflife','hardcore henri','harry potter',"hellblade Senua's sacrifice",'inception','ironman 2','javascript','john wick','jojo','jumanji','just cause 3','kaguya sama','kingsman','konosuba','kyoukai no kanata','law breakers','le loup de walstreet','league of legends','love death and robots','made in abyss','men in black','my hero academia','minecraft','mirai nikki','mob psycho 100','mortel','mr robot','narcos','nier automata','nodejs','no game no life','no guns life',"no man's sky",'nvidia','old boy','one piece','one piece','oneshoot','ocarina of time','one punch time','overlord','owerwatch','owari no seraph','payday 2','persona 5','photoshop','portal 2','the promised neverland','pulpfiction','python','rainbow six','ratatouille','razer','react','ready player one','red dead redemption 2','re zero','rick et morty','samurai champloo','sword art online','sekiro','seul sur mars','sex education',"l'attaque des titans",'solo leveling','spiderman','the stanley parable','star cityzen','steam','steins gate','super hot','super mario galaxy 2','super meat boy','switch','teamspeak','the boys','the mask','the witcher','tokyoghoul','toy story','trigun','undertale','unrealengine','visual studio code','yakuza','your lie in april','yourname'],//aliases pour les réponses


  imgname : ['7deadlysince', '91days', 'ajin', 'akame_ga_kill', 'amd', 'among_us', 'anastasia', 'android', 'angelbeats', 'angular', 'another', 'apple', 'assassinationclassroom', 'assassins_pride', 'Assassin_s_Creed_Origins', 'atlantidelempireperdu', 'arretemoisitupeux', 'audacity', 'baki', 'banana_fish', 'beatsaber', 'blackmirror', 'bokunopico', 'boneworks', 'brave', 'breakingbad', 'bthebegining', 'btooom', 'bungoustraydogs', 'civ6', 'cluster_truck', 'codegeass', 'csgo', 'cuphead', 'cyberpunk', 'darksouls3', 'deadcells', 'deadmanwonderland', 'deathnote', 'demonslayer', 'demonslayer2', 'discord', 'drstone', 'edgeoftomorrow', 'elfenlied', 'epicgames', 'erased', 'euphoria', 'evengelion', 'fireforce', 'flstudio', 'fma', 'frostpunk', 'gamblingschool', 'gameofthrones', 'godofhighschool', 'godofwar', 'gog', 'google', 'googlechrome', 'gravityfalls', 'gundam', 'Haikyuu', 'halflife', 'hardcorehenri', 'harrypotter', "hellblade senua's sacrifice", 'inception', 'ironman2', 'javascript', 'johnwick', 'jojo', 'jumanji', 'just_cause_3', 'kaguya_sama', 'kingsman', 'konosuba', 'kyoukai_no_kanata', 'law_breakers', 'leloupdewalstreet', 'lol', 'lovedeathandrobots', 'madeinabyss', 'meninblack', 'mha', 'minecraft', 'mirainikki', 'mob_psycho_100', 'mortel', 'mrrobot', 'narcos', 'nier_automata', 'nodejs', 'nogamenolife', 'nogunslife', 'nomanssky', 'nvidia', 'oldboy', 'onepiece', 'onepiece2', 'oneshoot', 'oot', 'opm', 'overlord1', 'ow', 'owarinoseraph', 'payday2', 'persona_5', 'photoshop', 'portal2', 'promisedneverland', 'pulpfiction', 'python', 'rainbowsix', 'ratatouille', 'razer', 'react', 'readyplayerone', 'reddead2', 'rezero', 'rick_et_morty', 'samuraichamploo', 'sao', 'sekiro', 'seulsurmars', 'sexeducation', 'snk', 'sololeveling', 'spiderman', 'stanleyparable', 'starcityzen', 'steam', 'steinsgate', 'superhot', 'supermariogalaxy2', 'super_meat_boy', 'switch', 'teamspeak', 'theboys', 'themask', 'the_witcher', 'tokyoghoul', 'toystory', 'trigun', 'undertale', 'unrealengine', 'visualstudiocode', 'yakuza', 'yourlieinapril', 'yourname'] //nom des images stockés dans les fichiers locaux du bot.
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