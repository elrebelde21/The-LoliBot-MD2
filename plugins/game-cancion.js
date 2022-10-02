/* Created By https://github.com/unptoadrih15 */

import fetch from 'node-fetch'
let timeout = 60000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
let id = m.chat
if (id in conn.tebaklagu) {
conn.reply(m.chat, '𝑻𝒐𝒅𝒂𝒗𝒊́𝒂 𝒉𝒂𝒚 𝒄𝒂𝒏𝒄𝒊𝒐𝒏𝒆𝒔 𝒔𝒊𝒏 𝒓𝒆𝒔𝒑𝒖𝒆𝒔𝒕𝒂𝒔 𝒆𝒍 𝒆𝒔𝒕𝒆 𝒄𝒉𝒂𝒕.', conn.tebaklagu[id][0])
throw false
}
let res = await fetch(global.API('xteam', '/game/tebaklagu/', { id: '5LTV57azwaid7dXfz5fzJu' }, 'APIKEY'))
if (res.status !== 200) throw await res.text()
let result = await res.json()
let json = result.result
let caption = `
𝘼𝙙𝙞𝙫𝙞𝙣𝙖𝙧 𝙚𝙡 𝙩𝙞́𝙩𝙪𝙡𝙤 𝙙𝙚𝙡 𝙡𝙖 𝙘𝙖𝙣𝙘𝙞𝙤́𝙣
𝙏𝙞𝙚𝙢𝙥𝙤: ${(timeout / 1000).toFixed(2)} 𝙎𝙚𝙜𝙪𝙣𝙙𝙤𝙨
𝙀𝙨𝙘𝙧𝙞𝙗𝙞: *${usedPrefix}pista* 𝙥𝙖𝙧𝙖 𝙤𝙗𝙩𝙚𝙣𝙚𝙧 𝙪𝙣𝙖 𝙥𝙞𝙨𝙩𝙖
𝙋𝙧𝙚𝙢𝙞𝙤: ${poin} 𝙓𝙋
𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙚 𝙖  𝙚𝙨𝙩𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙘𝙤𝙣 𝙡𝙖 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖!`.trim()
conn.tebaklagu[id] = [
await m.reply(caption),
json, poin,
setTimeout(() => {
if (conn.tebaklagu[id]) conn.reply(m.chat, `𝑺𝒆 𝒂𝒄𝒂𝒃𝒐 𝒆𝒍 𝒕𝒊𝒆𝒎𝒑𝒐𝒔!\n𝑳𝒂 𝒓𝒆𝒔𝒑𝒖𝒆𝒔𝒕𝒂 𝒆𝒔 ${json.judul}`, conn.tebaklagu[id][0])
delete conn.tebaklagu[id]
}, timeout)
]
await conn.sendFile(m.chat, json.preview, 'coba-lagi.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^cancion|canción$/i
export default handler