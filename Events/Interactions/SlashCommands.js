const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (!command)
        return interaction.reply({
          content: "this command its outdated",
          ephermal: true,
        });
      
      if (command.developer && interaction.user.id !== `1074847874657030194`)
        return interaction.reply({
          content: "command aviable only for developer",
          ephermal: true,
        });

      command.execute(interaction, client);
    } else if (interaction.isButton()) {

      const buttonId = interaction.customId.split("_");
      const button = client.buttons.get(buttonId[0]);
      if (!button) return;
      button.execute(interaction, client, buttonId.slice(1))

    } else {
      return;
    }
  },
};