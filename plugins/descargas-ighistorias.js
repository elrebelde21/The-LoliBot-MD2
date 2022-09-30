/* CREDITOS A https://github.com/FG98F */
import axios from 'axios'
import hx from 'hxz-api' 

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
if (!text) throw `𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙡𝙖𝙨 𝙝𝙞𝙨𝙩𝙤𝙧𝙞𝙖𝙨\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} gatadios*`

hx.igstory(text).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {            
conn.sendFile(m.chat, i.url, 'igstory.mp4', wm, m)
} else {     
conn.sendFile(m.chat, i.url, '', '', m)
}}});
  
let info = `💖 *𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙧𝙩𝙚 𝙨𝙤𝙗𝙧𝙚 𝙡𝙖𝙨 𝙣𝙤𝙫𝙚𝙙𝙖𝙙𝙚𝙨 𝙮 𝙧𝙚𝙘𝙪𝙚𝙧𝙙𝙖 𝙩𝙚𝙣𝙚𝙧 𝙡𝙖 𝙪́𝙡𝙩𝙞𝙢𝙖 𝙫𝙚𝙧𝙨𝙞𝙤.*
  `.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)  
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria', 'ighistorias' ]
handler.limit = 3
handler.exp = 87
export default handler
