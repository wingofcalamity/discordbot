
module.exports = {
	name: 'role',
	description: 'description here',
	// alias if needed aliases: ['icon', 'pfp'],
	execute(message) {
        let user = client.user // get the user object
        let guild = client.guilds.cache.get('Guild ID') // get the guild object
        let member = guild.member(user) // convert the User object to a GuildMember!
        member.roles.add(['869955922347315230']);
	},
}