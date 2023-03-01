const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('test'),

    execute(interaction) {
        const embed = new EmbedBuilder()
        .setTitle('pablus')
        .setDescription('test')
        .setImage('https://cdn.discordapp.com/attachments/1079901942303694918/1080209999374057502/image.png')
        .setFooter(' ⚠️ Atención: todas las capturas son falsas o sacadas de contexto, este bot no tiene el fin de burlarse ni manchar su imagen, es solo humor absurdo')

        interaction.reply({ embeds: [embed]})
    },
};