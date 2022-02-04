const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTM4NjU2MzI1NzM3NTMzNTIw.Yftd0w.H1iFJ1i309DOb_mHuvWgv4LW3C0"
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "hi"){
        message.reply("Hi!")
    }
})

client.login(process.env.TOKEN)