//const shit and shizzles
const Discord = require('discord.js'),
	  fs = require('fs'),
	  {prefix, token} = require('./config.json'),
      client = new Discord.Client(),
	  commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')),
	  cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};
//login block
client.on('ready', () => { 															
    console.log('Ready!');	
	client.user.setPresence({activity:{name: 'Definitely not in development right now.'}, status: 'idle'})
});
//message log
client.on('message', message => {
	let time = message.createdAt,
		hour = (time.getHours()<10?'0':'') + time.getHours(),
		minute = (time.getMinutes()<10?'0':'') + time.getMinutes(),
		second = (time.getSeconds()<10?'0':'') + time.getSeconds();
	if (message.author.bot) return; 													
	//console.log('----------------------------------------------------');

	console.log(`${message.author.tag} (${hour}:${minute}:${second}): ${message.content}`)
	//console.log(`Time: ${message.createdAt} `)
	//console.log(`Channel: #${message.channel.name}/${message.channel.id}`)
	//console.log(`Contains: ${message.content}`);
});
//reaction log
client.on('messageReactionAdd', (reaction, user) => { 								
	console.log('----------------------------------------------------');
	console.log(`Reaction Emoji ID ${reaction.emoji.id}`);
	console.log(`Reaction Emoji Name ${reaction.emoji.name}`);
});
//dude
client.on('message', message => {
	if (message.author.bot) return;
	if (message.content.toLowerCase() == "dude") {
		fs.readdir("./files", (err, files) => {
			message.channel.send({files:[`./files/dude.png`]})
		});
	}		
});
//the magic happens here
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;
		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
	}
// im not sure why it does what it does but it works and im not touching it
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1;
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
//you SUCK
	try {
		command.execute(message, args);
	} 
	catch (error) {
		console.error(error);
		message.reply('error wii u wii u');
	}
});
client.login(token);