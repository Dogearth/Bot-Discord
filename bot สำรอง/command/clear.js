module.exports = {
    name:'clear',
    description:"Clear messages!",
    async execute(message,args){
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("อย่าโง่");   
    } if(!args[0]){
        return message.reply("ใส่จำนวนสิลบได้เเค่100ข้อความ");
    }
    if(isNaN(args[0]))return message.reply("จะลบกี่ข้อความ!");
    if(args[0] > 1000) return message.reply("You cannot delete more than 100 messages!");
    if( args[0] < 1) return message.reply("You must delete at least one message!");
    await message.channel.messages.fetch({limit: args[0]}).then(messages => {
        message.channel.bulkDelete(messages);
    })
}
}