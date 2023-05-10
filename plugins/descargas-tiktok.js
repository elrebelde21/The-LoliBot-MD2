import fetch from 'node-fetch'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `*Que tiktok buscar?🤔*\n*Ingrese un enlace de tiktok para descarga el video*\n*Ejemplo:*\n*${usedPrefix + command} https://vm.tiktok.com/ZMNQvKJqL/?k=1*`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `*EL ENLACE DEL TIKTOK ES INCORRECTO*`, fkontak,  m)  
try {
await conn.reply(m.chat, `⌛ _𝘾𝙖𝙧𝙜𝙖𝙙𝙤..._\n▰▰▰▱▱▱▱▱▱\n𝙀𝙨𝙥𝙚𝙧𝙚 𝙪𝙣𝙤𝙨 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 𝙚𝙡 𝙦𝙪𝙚 𝙢𝙖𝙣𝙙𝙤 𝙨𝙪𝙨 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 🔰`, fkontak,  m)  
const { author: { nickname }, video, description } = await tiktokdl(args[0])
.catch(async _ => await tiktokdlv2(args[0]))
.catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) return conn.reply(m.chat, `*Uff, error al intentar descargar el video vuelva al intentar de nuevo*`, fkontak,  m)
conn.sendFile(m.chat, url, 'tiktok.mp4', `*Aqui tiene 🔰*`.trim(), m)
} catch {
}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
handler.limit = 1
export default handler