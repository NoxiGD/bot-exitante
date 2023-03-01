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
    "https://cdn.discordapp.com/attachments/1079901942303694918/1080177805184204830/61_sin_titulo_20230228141700.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080161486749565009/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080161119202717926/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080160669967589446/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080200717454807141/image.png", "https://cdn.discordapp.com/attachments/1069349177588453527/1080204814597759087/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080206128576737311/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080208333052575795/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080208524929413150/image.png",  "https://cdn.discordapp.com/attachments/1079901942303694918/1080209999374057502/image.png"]

        const ball = Math.round((Math.random() * choice.length))
            await interaction.reply (`${choice[ball]}
⚠️ Atención: todas las capturas son falsas o sacadas de contexto, este bot no tiene el fin de burlarse ni manchar su imagen, es solo humor absurdo`).catch(err =>{

            })
  },
}