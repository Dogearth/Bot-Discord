module.exports = {
    name: 'kick',
    description: "this command kicks people",
    execute(message, args){
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("อย่าโง่");
        }const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.member(member);
            memberTarget.kick();
            message.channel.send("โดนเตะไปดิไอ้โง่");
        }else{
            message.channel.send('you couldent kick that person');
        }
    }
}