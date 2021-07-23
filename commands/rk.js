module.exports = {
	name: 'rk',
	description: 'Random Kanji',
	aliases: ['rk'],
	execute(message) {
		//RNG & Wordlist
		let rng = Math.floor(Math.random() * rk.length);
		let rk = [
			"jisatsu", 
			"hisasiburi", 
			"chikusyou",
			"kusyou",
			"simai",
			"kyoudai"
		];	
		//this switch is for the boys
		switch (rk[rng]) {
			//don't forget to add break;
			case "jisatsu":
				console.log(`Case: ${rk[rng]} found`)
				var kanji = "自殺";
				var kana = "じさつ";
				var romaji = "jisatsu";
				var eigo = "suicide";
				break;
			case "hisasiburi":
				console.log(`Case: ${rk[rng]} found`)
				var kanji = "久し振り";
				var kana = "ひさしぶり";
				var romaji = "hisashiburi";
				var eigo = "long time no see";
				break;
			case "chikusyou":
				console.log(`Case: ${rk[rng]} found`)
				var kanji = "畜生";
				var kana = "ちくしょう";
				var romaji = "chikushou";
				var eigo = "crap!";
				break;
			case "kusyou":
				console.log(`Case: ${rk[rng]} found`);
				var kanji = "苦笑";
				var kana = "くしょう";
				var romaji = "kushou";
				var eigo = "bitter smile";
				break;
			case "simai":
				console.log(`Case: ${rk[rng]} found`);
				var kanji = "姉妹";
				var kana = "しまい";
				var romaji = "shimai";
				var eigo = "sister";
				break;
			case "kyoudai":
				console.log(`Case: ${rk[rng]} found`);
				var kanji = "兄弟";
				var kana = "きょうだい";
				var romaji = "kyoudai";
				var eigo = "brother";
				break;
			default:
				console.log(`Case: ${rk[rng]} not found or missing break.`);
				message.channel.send(`Case: ${rk[rng]} not found or missing break.`);
		};
		//set embed blah blah
		let embed = {
			"title": `Info`,
			"color": 7021058,			
			"fields": [
				{
				"name": "漢字",
				"value": `${kanji}`
				},
			  	{
				"name": "仮名",
				"value": `||${kana}||`,
				"inline": true
				},
			  	{
				"name": "ローマ字",
				"value": `||${romaji}||`,
				"inline": true
			  	},
				{
				"name": "英語",
				"value": `||${eigo}||`
				}
			]
		};
		message.channel.send({embed}); 				//send embed
		console.log(`Embed: ${rk[rng]} sent!`) 		//log embed
	}
};
