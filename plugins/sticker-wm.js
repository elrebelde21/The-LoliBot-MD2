import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '[❗𝙄𝙣𝙛𝙤❗] 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒔 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂 𝒂𝒈𝒓𝒆𝒈𝒂𝒓 𝒖𝒏 𝒑𝒂𝒒𝒖𝒆𝒕𝒆 𝒚 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '[❗𝙄𝙣𝙛𝙤❗] 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒔 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂 𝒂𝒈𝒓𝒆𝒈𝒂𝒓 𝒖𝒏 𝒑𝒂𝒒𝒖𝒆𝒕𝒆 𝒚 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆'
let img = await m.quoted.download()
if (!img) throw '[❗𝙄𝙣𝙛𝙤❗] 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒔 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂 𝒂𝒈𝒓𝒆𝒈𝒂𝒓 𝒖𝒏 𝒑𝒂𝒒𝒖𝒆𝒕𝒆 𝒚 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*[❗𝙄𝙣𝙛𝙤❗]𝑳𝒐𝒔 𝒔𝒊𝒆𝒏𝒕𝒐, 𝒂𝒍𝒈𝒐 𝒇𝒂𝒍𝒍𝒐.. 𝑪𝒐𝒓𝒓𝒐𝒃𝒐𝒓𝒆 𝒒𝒖𝒆 𝒉𝒂𝒚𝒂 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒊𝒅𝒐 𝒂 𝒖𝒏 𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒔 𝒚 𝒉𝒂𝒚𝒂 𝒂𝒈𝒓𝒆𝒈𝒂𝒅𝒐 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝒑𝒂𝒒𝒖𝒆𝒕𝒆 𝒚 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝒖𝒔𝒖𝒂𝒓𝒊𝒐'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i
export default handler
