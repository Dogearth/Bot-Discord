module.exports = {
    name: 'unmute',
    description: "this command bans people",
    execute(message, args){
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("อย่าโง่");
        }const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === '👤『𝙈𝙚𝙢𝙗𝙚𝙧𝙨』👤');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');

            let memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> unmuteเเม่งละสมเพช:mute: `);
        }else{
            message.channel.send('Cant find that member!');
        }
    }
}    