const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName("newpenegdps")
  .setDescription('enviare memes sobre newpenegdps'),
      

  async execute ( interaction ) {

        const {client, guild} = interaction;

        const choice =  ["https://cdn.discordapp.com/attachments/1079901942303694918/1080509995675820102/IMG_20221114_164948.jpg"]

        const ball = Math.round((Math.random() * choice.length))
            await interaction.reply (`${choice[ball]}`).catch(err =>{

            })
  },
};