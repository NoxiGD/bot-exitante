const Discord = require('discord.js');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
 
module.exports = {
  data: new SlashCommandBuilder()
  .setName('8ball')
  .setDescription('Haz tu pregunta y la responderé.')
  .addStringOption(option =>
    option.setName('pregunta')
                .setDescription('Tu Pregunta.')
                .setRequired(true)
    ),
 
  execute ( interaction ) {
   const { options } = interaction;
   let rpts = ["esperando a que la gente diga que poner"]
   let pregunta = interaction.options.getString("pregunta");
 
const embed = new EmbedBuilder()
        .setTitle('8Ball')
        .addFields(    
            { name: "pregunta:", value: `${pregunta}`},
            { name: `respuesta:`, value: `${rpts[Math.floor(Math.random()*rpts.length)]}`}
        )
        .setColor("Blue")
 
        interaction.reply({embeds: [embed]})
 
        },
 
    };