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
   let rpts = ["sí pablus ama el pene", "hiper gay", "demonsio???", "pablus wtf?", "EEEEE", "mr just a gay??????????????", "no c", "peneskino te refieres no?", "mira que te doy ban eh", "clara-mente", "perdon que te sal-pique pero no", "O", "OOOO"]
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