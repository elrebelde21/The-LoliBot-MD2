import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!m.quoted) throw `${mg}𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘾𝙊𝙉 𝙐𝙉𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝙔 𝙉𝙊𝙈𝘽𝙍𝙀\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Texto1|Texto2*`
let stiker = false 
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw `${mg}𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘾𝙊𝙉 𝙐𝙉𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝙔 𝙉𝙊𝙈𝘽𝙍𝙀\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Texto1|Texto2*`
let img = await m.quoted.download()
if (!img) throw `${mg}𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘾𝙊𝙉 𝙐𝙉𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝙔 𝙉𝙊𝙈𝘽𝙍𝙀\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Texto1|Texto2*`
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw `${fg}𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝙀 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝘼𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘾𝙊𝙉 𝙐𝙉𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝙔 𝙉𝙊𝙈𝘽𝙍𝙀\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Texto1|Texto2*`
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm|crearwm$/i
handler.level = 4
export default handler
