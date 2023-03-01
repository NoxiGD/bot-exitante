const {
    Client,
    GatewayIntentBits,
    Partials,
    Collection,
    ActivityType,
  } = require("discord.js");
  const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
  const { User, Message, GuildMember, ThreadMember } = Partials;
  
  const client = new Client({
    intents: 3276799,
    partials: [User, Message, GuildMember, ThreadMember],
  });


  let status = [
    {
      name: 'Dash History',
      type: ActivityType.Watching
    }
  ]
  
  const { loadEvents } = require("./Handlers/eventHandler");
  const { loadButtons } = require("./Handlers/buttonHandler");
  const prefix = `*`;

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // TICKET SYSTEM
client.on("interactionCreate", async (interaction) => {
  if(interaction.isButton()) {
    if(interaction.customId === "close") {

      
      const embed = new EmbedBuilder()
        .setTitle("Ticket")
        .setDescription(`ticket will closse in 5s`)
        .setColor("Aqua")

      
      return interaction.reply({ embeds: [embed] })

      
        && setTimeout(() => {
      interaction.channel.delete(`${interaction.channels}`)
        }, 5000)

    }
  }
})


  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  const messageArray = message.content.split(" ");
  const argument = messageArray.slice(1);
  const cmd = messageArray[0];

  client.user.setActivity({
    name: 'Dash History'
    });
  });

  client.snipes = new Map()
  client.on('messageDelete', function(message, channel) {
    client.snipes.set(message.channel.id, {
      content: message.content,
      author: message.author,
      image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
  })
  client.config = require("./config.json");
  client.events = new Collection();
  client.commands = new Collection();
  client.buttons = new Collection();
  loadEvents(client);
  loadButtons(client);
  
  loadEvents(client);
  
  client.login(client.config.token);