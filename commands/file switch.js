module.exports = {
	name: 'fileswitch',
    description: 'Random.',
    aliases: ['fsw'],
	execute(message, args) {
        let fs = require("fs");                
        //return if user is retarded		
        if (!args.length) {
        return message.channel.send('Please provide an argument.')
        };
        //this switch is also for the boys
        switch (args[0]) {
            //start of switch
            case "random":
                fs.readdir("./files", (err, files) => { 
                    let rndfile = files[Math.floor(Math.random() * files.length)]; 
                    message.channel.send(
                        {files: [`./files/${rndfile}`]}
                    )
                })
                break;
            case "dude":
                message.channel.send({files:[`./files/dude.png`]})
                break;
            case "lfg":
                message.channel.send({files:[`./files/lfg.png`]})
                break;
            case "sip":
                message.channel.send({files:[`./files/sip.png`]})
                break;
            //end of switch
        }
    }
}