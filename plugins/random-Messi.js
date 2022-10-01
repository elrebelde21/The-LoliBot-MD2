import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/messi")
let json = res.data
let url = json.url
conn.sendButton(m.chat, "*Messi 🇦🇷*", wm, url, [['🆕𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 🆕', `${usedPrefix + command}`]], m)}
handler.help = ['messi']
handler.tags = ['internet']
handler.command = /^(messi)$/i
export default handler
