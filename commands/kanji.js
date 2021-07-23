module.exports = {
	name: 'kanji2',
	description: 'Infos about the Kanji',
	aliases: ['k2'],
	execute(message, args) {
		//return if user is retarded
		if (!args.length) {
			return message.channel.send('Please provide an argument.')
		//actual shit
		} 
		else if (args[0] === '一') {
			let embed = {

				"title": `Info`,
				"color": 7021058,
				
				"fields": [
				  {
					"name": "英語(えいご)",
					"value": `one, first ${args}`
				  },
				  {
					"name": "訓読み(くんよみ)",
					"value": "ひと、ひと(つ)"
				  },
				  {
					"name": "呉音(ごおん)",
					"value": "イチ",
					"inline": true
				  },
				  {
					"name": "漢音(かんおん)",
					"value": "イツ",
					"inline": true
				  },
				  {
					"name": "部首(ぶしゅ)",
					"value": "一部+0"
				  },
				  {
					"name": "画数(かくすう)",
					"value": "１画",
					"inline": true
				  }
				]
			  };
			message.channel.send({embed});
		// really starting to doubt the legitimacy of a state	
		}
		else if (args[0] === '二') {
			message.channel.send
		}
		;

	}
}