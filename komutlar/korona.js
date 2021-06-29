const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
  kod: ["korona", "corona", "covid-19", "covid", "covid19"],
async execute(client, message, args){

fetch(`https://covid19.mathdro.id/api/countries/tr`)
.then(response => response.json())
.then(data => {
    let confirmed = data.confirmed.value.toLocaleString()
    let recovered = data.recovered.value.toLocaleString()
    let deaths = data.deaths.value.toLocaleString()
    let kod = "`"
const ardademr = new Discord.MessageEmbed()
.setTitle(`Türkiye - COVID-19 Toplam İstatistik`)
.addField('Vaka Sayısı',`${kod}${confirmed}${kod}`)
.addField('İyileşen Kişi Sayısı',`${kod}${recovered}${kod}`)
.addField('Vefat Sayısı',`${kod}${deaths}${kod}`)
.setFooter(`Bilgiler Her Gün Yenilenmektedir`)
.setColor('RANDOM')

     message.reply(ardademr)
        })
    }
    }