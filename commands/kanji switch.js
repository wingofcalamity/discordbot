module.exports = {
	name: 'kanji',
	description: 'Kanji',
	aliases: ['k'],
	execute(message, args) {
		//return if user is retarded		
		if (!args.length) {
			return message.channel.send('Please provide an argument.')
		};
		//this switch is for the boys
		switch (args[0]) {
			case "help":
				message.channel.send(`英語(えいご): English translation\n音読み(おんよみ): On'yomi\n> 呉音(ごおん): Go'on\n> 漢音(かんおん): Kan'on\n> 唐音(とおん): To'on\n訓読み(くんよみ): Kun'yomi\n部首(ぶしゅ): Radical + X Strokes\n画数(かくすう): Strokes`);
				break;
			case "一":
				var eigo = "one, first";
				var kun = "ひと、ひと(つ)";
				var goon = "イチ";
				var kanon = "イツ";
				var busyu = "一部+0";
				var kakusuu = "１";
				break;
			case "二":
				var eigo = "two, second";
				break;
			case "三":
				message.channel.send('英語(えいご):\n音読み(おんよみ):\n> 呉音(ごおん): \n> 漢音(かんおん): \n訓読み(くんよみ): み、み(つ)、みっ(つ)\n部首(ぶしゅ): 一部+2\n画数(かくすう): ３画');
				var eigo = "three, third";
				var kun = "";
				var goon = "サン";
				var kanon = "サン";
				var busyu = "";
				var kakusuu = "";
				//i literally cba to write all of this rn but you can see the basic syntax in here
				break;
			case "四":
				message.channel.send('英語(えいご):four, fourth\n音読み(おんよみ):\n> 呉音(ごおん): シ\n> 漢音(かんおん): シ\n訓読み(くんよみ): よ、よ(つ)、よっ(つ)、よん\n部首(ぶしゅ): 囗部+2\n画数(かくすう): ５画');
				break;
			case "五":
				message.channel.send('英語(えいご):five, fifth\n音読み(おんよみ):\n> 呉音(ごおん): ゴ\n> 漢音(かんおん): ゴ\n訓読み(くんよみ): いつ、いつ(つ)\n部首(ぶしゅ): 二部+2\n画数(かくすう): ４画');
				break;
			case "六":
				message.channel.send('英語(えいご):six, sixth\n音読み(おんよみ):\n> 呉音(ごおん): ロク\n> 漢音(かんおん): リク\n唐音: リュウ\n訓読み(くんよみ): む、む(つ)、むい、むっ(つ)\n部首(ぶしゅ): 八部+2\n画数(かくすう): ４画');
				break;
			case "七":
				message.channel.send('英語(えいご):seven, seventh\n音読み(おんよみ):\n> 呉音(ごおん): シチ\n> 漢音(かんおん): シツ\n訓読み(くんよみ): なな、ななつ\n部首(ぶしゅ): 一部+1\n画数(かくすう): ２画');
				break;
			case "八":
				message.channel.send('英語(えいご):eight, eighth\n音読み(おんよみ):\n> 呉音(ごおん): ')	
		};
		let embed = {

			"title": `Info`,
			"color": 7021058,
			
			"fields": [
			  {
				"name": "英語(えいご)",
				"value": `${eigo}`
			  },
			  {
				"name": "訓読み(くんよみ)",
				"value": `${kun}`
			  },
			  {
				"name": "呉音(ごおん)",
				"value": `${goon}`,
				"inline": true
			  },
			  {
				"name": "漢音(かんおん)",
				"value": `${kanon}`,
				"inline": true
			  },
			  {
				"name": "部首(ぶしゅ)",
				"value": `${busyu}`
			  },
			  {
				"name": "画数(かくすう)",
				"value": `${kakusuu}画`,
				"inline": true
			  }
			]
		  };
		message.channel.send({embed});
		console.log('Embed sent!')
	}
};
