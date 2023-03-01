const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('last')
    .setDescription('enviare la ultima foto añadida'),

    execute(interaction) {
        interaction.reply(`https://media.discordapp.net/attachments/1079901942303694918/1080477769693143080/unknown-17-1.png
⚠️ Atención: todas las capturas son falsas o sacadas de contexto, este bot no tiene el fin de burlarse ni manchar su imagen, es solo humor absurdo`)
    },
};