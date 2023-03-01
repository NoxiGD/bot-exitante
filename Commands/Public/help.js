const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('te enseñare que puedes hacer conmigo'),

    execute(interaction) {
        const embed = new EmbedBuilder()
        .setTitle('Pablus Bot')
        .setDescription('hola! soy pablus bot y mi especialidad es enviar capturas graciosas de pabluskino puedes usar **/last** para ver la ultima captura que fue añadida o bien usar **/pablus** para ver una captura de pablus randomizada disfruta!')
        .setFooter('⚠️ Atención: todas las capturas son falsas o sacadas de contexto, este bot no tiene el fin de burlarse ni manchar su imagen, es solo humor absurdo')
        .setColor('Blurple')

        interaction.reply({ embeds: [embed]})
    },
};