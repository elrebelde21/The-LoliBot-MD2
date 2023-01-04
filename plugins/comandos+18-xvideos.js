//Creditos https://github.com/BrunoSobrino

import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable modohorny para activar`
if (!args[0]) throw `${mg}𝙐𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙓𝙑𝙄𝘿𝙀𝙊𝙎\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://www.xvideos.com/video70389849/sexo_en_casa*`
try {
await delay(6000)
await conn.reply(m.chat, `➤ 𝙀𝙎𝙋𝙀𝙍𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘼 𝙌𝙐𝙀 𝙎𝙀 𝙀𝙉𝙑𝙄𝙀 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊`, m)
//let res = await fetch(API('https://zenzapis.xyz', '/downloader/xvideos', { apikey: 'B2CB95861FBF', url: args[0] }))
let res = await fetch(`https://zenzapis.xyz/downloader/xvideos?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
//if (json.result?.message) throw json.result.message
//let teks = `𝙏𝙄𝙏𝙐𝙇𝙊 | 𝙏𝙄𝙏𝙇𝙀 ➤ ${json.result.title}`
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
//conn.sendMessage(m.chat, { video: { url: json.result.files.high }, caption: teks }, { quoted: m })
} catch (e) {
m.reply(`${fg}𝙉𝙊 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙊, 𝙐𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙓𝙑𝙄𝘿𝙀𝙊𝙎, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍`)
console.log(e)
}}
handler.command = /^(xvideosdl|xvideos)$/i
handler.level = 5
handler.limit = 3
handler.register = true
export default handler
const delay = time => new Promise(res => setTimeout(res, time))