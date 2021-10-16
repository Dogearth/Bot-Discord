const discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();
module.exports = {
  name: "nekos",
  description: "Get some wallpapers",
  execute ( message, args, Discord) {
    if(!message.channel.nsfw) {
      return message.reply("ไม่ใช่ช่องNsfw")
      
    }async function work() {
      let owo = await neko.sfw.pussy();
      console.log(owo);
    }
     
    work();
  }
}