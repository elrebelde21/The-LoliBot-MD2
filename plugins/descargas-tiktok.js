import fetch from 'node-fetch'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `𝙌𝙪𝙚 𝙗𝙪𝙨𝙘𝙖𝙧?🤔 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙫𝙞́𝙙𝙚𝙤\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} https://vm.tiktok.com/ZMNQvKJqL/?k=1*`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `𝙀𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚𝙡 𝙩𝙞𝙠𝙩𝙤𝙠 𝙚𝙨 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤, 𝙑𝙪𝙚𝙡𝙫𝙖 𝙖𝙡 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧`, fkontak,  m)  
try {
const { author: { nickname }, video, description } = await tiktokdl(args[0])
.catch(async _ => await tiktokdlv2(args[0]))
.catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) return conn.reply(m.chat, `𝙐𝙛𝙛, 𝙚𝙧𝙧𝙤𝙧 𝙖𝙡 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙩𝙞𝙠𝙩𝙤𝙠 𝙑𝙪𝙚𝙡𝙫𝙖 𝙖𝙡 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧`, fkontak,  m)
await conn.reply(m.chat, `⌛ _𝘾𝙖𝙧𝙜𝙖𝙙𝙤..._\n▰▰▰▱▱▱▱▱▱\n𝙀𝙨𝙥𝙚𝙧𝙚 𝙪𝙣𝙤𝙨 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 𝙚𝙡 𝙦𝙪𝙚 𝙢𝙖𝙣𝙙𝙤 𝙨𝙪𝙨 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 🔰`, fkontak,  m)    
conn.sendFile(m.chat, url, 'tiktok.mp4', `𝘼𝙦𝙪𝙞́ 𝙩𝙞𝙚𝙣𝙚 🔰\n${wm}`.trim(), m)
} catch {
await conn.reply(m.chat, `𝙐𝙛𝙛, 𝙚𝙧𝙧𝙤𝙧 𝙖𝙡 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙩𝙞𝙠𝙩𝙤𝙠 𝙑𝙪𝙚𝙡𝙫𝙖 𝙖𝙡 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧`, fkontak,  m)  
}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
handler.limit = 1
export default handler