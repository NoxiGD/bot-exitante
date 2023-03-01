const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName("pablus2")
  .setDescription('mas fotos de pablus'),
      

  async execute ( interaction ) {

        const {client, guild} = interaction;

        const choice =  ["https://media.discordapp.net/attachments/1079901942303694918/1080476780797890641/IMG_20230106_195924.jpg", "https://media.discordapp.net/attachments/1079901942303694918/1080476781049561168/IMG_20230106_195839.jpg", "image.png"]

        const ball = Math.round((Math.random() * choice.length))
            await interaction.reply (`${choice[ball]}`).catch(err =>{

            })
  },
};