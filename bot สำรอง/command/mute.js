const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "this command bans people",
    execute(message, args){
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("อย่าโง่");
          }
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === '👤『𝙈𝙚𝙢𝙗𝙚𝙧𝙨』👤');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');

            let memberTarget = message.guild.members.cache.get(target.id);
            
            if(!args[1]){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> มึงโดนmuteเเล้วไอ้โง่:mute: `);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> มึงโดนmuteเเล้วไอ้โง่:mute: ${ms(ms(args[1]))} `);

            setTimeout(function() {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        }else{
            message.channel.send('Cant find that member!');
        }
    }
}    