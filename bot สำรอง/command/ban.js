module.exports = {
    name: 'ban',
    description: "this command bans people",
    execute(message, args){
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("อย่าโง่");
        }const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.member(member);
            memberTarget.ban();
            message.channel.send("โดนเเบนไปดิไอ้โง่");
        }else{
            message.channel.send('you couldent ban that person');
        }
    }
}