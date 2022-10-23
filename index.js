const {Client, GatewayIntentBits, Partials} = require("discord.js")
const print = require("javashorten")
const client = new Client({ 
    intents: [ //intents go here
        GatewayIntentBits.Guilds 
    ],
    partials: [ //partials go here
        Partials.Message, 
        Partials.GuildMember, 
        Partials.User
    ]
});

client.on("ready", () => {
    print("The bot is up and ready")
});


client.login("TOKEN-GOES-HERE") // Do not share your token with anyone on the internet, they can use it to do dangourous things.