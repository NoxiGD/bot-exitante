const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { EmbedBuilder } = require(`discord.js`);


module.exports = {
    data: new SlashCommandBuilder()
    .setName("snipe")
    .setDescription(`Snipes the last deleted message from the current channel`),
    async execute (interaction, client) {

        const msg = client.snipes.get(interaction.channel.id);
        if (!msg) return await interaction.reply({ content: "I cant find any deleted messages", ephemeral: true});

        const ID = msg.author.id;
        const member = interaction.guild.members.cache.get(ID)
        const URL = member.displayAvatarURL();

        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setTitle(`Sniped message - ${member.user.tag}`)
        .setDescription(`${msg.content}`)
        .setTimestamp()
        .setFooter({ text: `Member ID: ${ID}`, iconURL: `${URL}`})

        if (msg.image) embed.setImage(msg.image)
        await interaction.reply({ embeds: [embed] })

    }
}