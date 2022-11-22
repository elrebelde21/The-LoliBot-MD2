//Creditos https://github.com/BrunoSobrino

import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable modohorny para activar`
if (!args[0]) throw `𝙌𝙪𝙚 𝙗𝙪𝙨𝙘𝙖? 𝙐𝙨𝙚𝙧 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙭𝙣𝙭𝙭\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/sexo_en_casa*`
try {
await conn.reply(m.chat, `⏳️ 𝙀𝙨𝙥𝙚𝙧𝙚 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧  𝙖 𝙦𝙪𝙚́ 𝙨𝙚 𝙚𝙣𝙫𝙞́𝙚 𝙚𝙡 𝙫𝙞́𝙙𝙚𝙤, 𝙣𝙤 𝙨𝙚𝙖 𝙖𝙥𝙪𝙧𝙖𝙙𝙤, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙦𝙪𝙚 𝙚𝙨𝙩𝙤𝙮 𝙡𝙚𝙣𝙩𝙤🐢`, m)
//let res = await fetch(API('https://zenzapis.xyz', '/downloader/xvideos', { apikey: 'B2CB95861FBF', url: args[0] }))
let res = await fetch(`https://zenzapis.xyz/downloader/xnxx?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
if (json.result?.message) throw json.result.message
let teks = `𝙏𝙞́𝙩𝙪𝙡𝙤  ➤ ${json.result.title}`
conn.sendMessage(m.chat, { video: { url: json.result.files.high }, caption: teks }, { quoted: m })
} catch (e) {
m.reply(`𝙐𝙛𝙛, 𝙨𝙚 𝙘𝙖𝙮𝙤́ 𝙚𝙡 𝙨𝙚𝙧𝙫𝙞𝙙𝙤 😼, 𝙑𝙪𝙚𝙡𝙫𝙖 𝙖𝙡 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧 𝙢𝙖́𝙨 𝙩𝙖𝙧𝙙𝙚`)
console.log(e)
}}
handler.command = /^(xnxx|videoxnxx|xnxxvideo|xnxxdl)$/i
handler.level = 5
handler.money = 600
handler.register = true
export default handler
