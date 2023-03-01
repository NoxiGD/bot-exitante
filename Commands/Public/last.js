const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('last')
    .setDescription('enviare la ultima foto añadida'),

    execute(interaction) {
        interaction.reply(`https://cdn.discordapp.com/attachments/1079901942303694918/1080449646092103690/image.png
        ⚠️ Atención: todas las capturas son falsas o sacadas de contexto, este bot no tiene el fin de burlarse ni manchar su imagen, es solo humor absurdo`)
    },
};