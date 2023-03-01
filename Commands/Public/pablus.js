const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName("pablus")
  .setDescription('fotos de pabluskino'),
      

  async execute ( interaction ) {

        const {client, guild} = interaction;

        const choice =  ["https://media.discordapp.net/attachments/1079901942303694918/1080174657363263538/unknown-23.png",
        "https://cdn.discordapp.com/attachments/1079901942303694918/1080174621199958096/unknown-25.png",
      "https://cdn.discordapp.com/attachments/1079901942303694918/1080174575792439326/unknown-32.png",
    "https://cdn.discordapp.com/attachments/1079901942303694918/1080177805184204830/61_sin_titulo_20230228141700.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080161486749565009/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080161119202717926/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080160669967589446/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080200717454807141/image.png", "https://cdn.discordapp.com/attachments/1069349177588453527/1080204814597759087/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080206128576737311/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080208333052575795/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080208524929413150/image.png",  "https://cdn.discordapp.com/attachments/1079901942303694918/1080209999374057502/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080448213095563345/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080449646092103690/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080452430690533457/image.png", "https://media.discordapp.net/attachments/1079901942303694918/1080477750294499450/paplus.png", "https://media.discordapp.net/attachments/1079901942303694918/1080477750567112734/unknown-16-1.png", "https://media.discordapp.net/attachments/1079901942303694918/1080477751112384522/Screenshot_20221003-181854_Fotos-1.png?width=913&height=701", "https://media.discordapp.net/attachments/1079901942303694918/1080477751355641877/unknown-36-1.png", "https://media.discordapp.net/attachments/1079901942303694918/1080477751611510824/unknown-24-1.png", "https://media.discordapp.net/attachments/1079901942303694918/1080477751812833451/unknown-21-1.png", "https://media.discordapp.net/attachments/1079901942303694918/1080477752278405211/unknown-26-1.png", "https://media.discordapp.net/attachments/1079901942303694918/1080477752454549514/unknown-12-1.png", "https://media.discordapp.net/attachments/1079901942303694918/1080477768913002597/unknown-15-1.png", "https://media.discordapp.net/attachments/1079901942303694918/1080477769139507280/unknown-22-1.png", "https://media.discordapp.net/attachments/1079901942303694918/1080477769361801298/unknown-27-1.png", "https://media.discordapp.net/attachments/1079901942303694918/1080477769693143080/unknown-17-1.png"]

        const ball = Math.round((Math.random() * choice.length))
            await interaction.reply (`${choice[ball]}
⚠️ Atención: todas las capturas son falsas o sacadas de contexto, este bot no tiene el fin de burlarse ni manchar su imagen, es solo humor absurdo`).catch(err =>{

            })
  },
}