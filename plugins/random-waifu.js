import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://api.waifu.pics/sfw/waifu')
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw 'Error!'
await delay(5000)
conn.sendButton(m.chat, `😻😻😻😻`, wm, json.url, [['𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 🆕', `/${command}`]], m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i
export default handler
const delay = time => new Promise(res => setTimeout(res, time))