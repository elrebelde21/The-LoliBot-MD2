import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `[❗] ɪɴɢʀᴇsᴇ ᴜɴᴀ ᴘᴇᴛɪᴄɪᴏɴ ᴏ ᴜɴᴀ ᴏʀᴅᴇɴ  ᴘᴀʀᴀ ᴜsᴀʀ ʟᴀ ғᴜɴᴄɪᴏɴ ᴅᴇʟ ᴄʜᴀᴛɢᴘᴛ\n\n❏ ᴇᴊᴇᴍᴘʟᴏ ᴅᴇ ᴘᴇᴛɪᴄɪᴏɴᴇ ʏ ᴏʀᴅᴇɴᴇs\n ${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix\n${usedPrefix + command} Codigo en JS para un juego de cartas`
try {
await conn.sendPresenceUpdate('composing', m.chat)
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[❗] ᴇʀʀᴏʀ, ᴠᴜᴇʟᴠᴀ ᴀʟ ɪɴᴛᴇɴᴛᴀʀʟᴏ*`
}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler

 

