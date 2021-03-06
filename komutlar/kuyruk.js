const { MessageEmbed } = require('discord.js')
module.exports = {
  kod: "kuyruk",
  execute (client, message, args){
    const { channel } = message.member.voice;
    if (!channel) {
      //ArdaDemr Youtube kanalında paylaşılmış altyapı
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**Kuyrukta şarkı bulamadım.**");
    } //ArdaDemr Youtube kanalında paylaşılmış altyapı

    const embed = new MessageEmbed()
      .addField(`${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
    message.channel.send
  }
};