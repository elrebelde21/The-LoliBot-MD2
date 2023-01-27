import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch('https://api.lolhuman.xyz/api/random/ppcouple?apikey=9b817532fadff8fc7cb86862')
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
await delay(5000)
conn.sendButton(m.chat, '𝑪𝒉𝒊𝒄𝒂 ✨', wm, json.result.female, [['𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 🆕', `/${command}`]], m)
conn.sendButton(m.chat, '𝑪𝒉𝒊𝒄𝒐 ✨', wm, json.result.male, [['𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 🆕', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple|compartirperfil|compartirfoto)$/i
handler.money = 40
export default handler
const delay = time => new Promise(res => setTimeout(res, time))