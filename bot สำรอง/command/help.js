
module.exports ={
    name: 'help',
    description: "Embeds!",
    execute(message, args, Discord) {
        const Embed1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Help')
        .setDescription('คำสั่งทั้งหมด')
        .addFields(
            {name: 'Clear', value: ':clear(ลบได้ไม่เกิน100คำ)'},
            {name: 'Kick', value: ':kick(ตามด้วยชื่อ)'},
            {name: 'Ban', value: ':ban(ตามด้วยชื่อ)'},
            {name: 'Mute', value: ':mute(@ชื่อ)(ตามตัวเวลา(หน่วยเวลา))'},
            {name: 'Unmute', value: ':Unmute(@ชื่อ)'}
        )
        .setFooter('(คำสั่งตามนี้)');
        message.channel.send(Embed1);
    }
}