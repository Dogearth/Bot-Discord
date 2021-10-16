const akaneko = require('akaneko');
const { MessageEmbed } = require('discord.js')
const discord = require("discord.js");
module.exports ={
    name:'neko',
    description: 'hentai!',
    async execute(message, args, Discord) {
        if(!message.channel.nsfw) {
            return message.reply("This channel dosen't support nsfw content");
  }else{
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor("RANDOM")
    akanekoSan.setImage(akaneko.nsfw.hentai());
    return message.channel.send(akanekoSan);
      
    }
    
}
}
