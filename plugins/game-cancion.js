/* Created By https://github.com/unptoadrih15 */

import fetch from 'node-fetch'
let timeout = 60000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
let id = m.chat
if (id in conn.tebaklagu) {
conn.reply(m.chat, 'Todavía hay canciones sin respuesta en este chat.', conn.tebaklagu[id][0])
throw false
}
let res = await fetch(global.API('xteam', '/game/tebaklagu/', { id: '5LTV57azwaid7dXfz5fzJu' }, 'APIKEY'))
if (res.status !== 200) throw await res.text()
let result = await res.json()
let json = result.result
let caption = `
𝑨𝒅𝒊𝒗𝒊𝒏𝒂 𝒆𝒍 𝒕𝒊́𝒕𝒖𝒍𝒐 𝒅𝒆 𝒍𝒂 𝒄𝒂𝒏𝒄𝒊𝒐́𝒏
𝑻𝒊𝒆𝒎𝒑𝒐 ${(timeout / 1000).toFixed(2)} 𝑺𝒆𝒈𝒖𝒏𝒅𝒐𝒔
𝑬𝒔𝒄𝒓𝒊𝒃𝒆 *${usedPrefix}pista* 𝑷𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒖𝒏𝒂 𝒑𝒊𝒔𝒕𝒂
𝑷𝒓𝒆𝒎𝒊𝒐: ${poin} 𝑿𝑷
𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒆𝒔𝒕𝒆 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒄𝒐𝒏 𝒍𝒂𝒔 𝒓𝒆𝒔𝒑𝒖𝒆𝒔𝒕𝒂𝒔!`.trim()
conn.tebaklagu[id] = [
await m.reply(caption),
json, poin,
setTimeout(() => {
if (conn.tebaklagu[id]) conn.reply(m.chat, `Se acabó el tiempo!\nLa respuesta es ${json.judul}`, conn.tebaklagu[id][0])
delete conn.tebaklagu[id]
}, timeout)
]
await conn.sendFile(m.chat, json.preview, 'coba-lagi.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^cancion|canción$/i
export default handler
