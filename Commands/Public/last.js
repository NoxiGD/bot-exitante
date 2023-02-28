const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('last')
    .setDescription('enviare la ultima foto añadida'),

    execute(interaction) {
        interaction.reply('https://cdn.discordapp.com/attachments/1079901942303694918/1080208333052575795/image.png', 'https://cdn.discordapp.com/attachments/1079901942303694918/1080208524929413150/image.png')
    }
}