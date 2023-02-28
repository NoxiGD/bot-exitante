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
    "https://cdn.discordapp.com/attachments/1079901942303694918/1080177805184204830/61_sin_titulo_20230228141700.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080161486749565009/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080161119202717926/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080160669967589446/image.png", "https://cdn.discordapp.com/attachments/1079901942303694918/1080200717454807141/image.png"]
    
        const ball = Math.round((Math.random() * choice.length))
            await interaction.reply (`${choice[ball]}`).catch(err =>{

            })
  },
}