import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*[❗𝙄𝙉𝙁𝙊❗] 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙚 𝙖𝙡 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙖 𝙖𝙜𝙧𝙚𝙜𝙖𝙧 𝙪𝙣 𝙥𝙖𝙦𝙪𝙚𝙩𝙚 𝙮 𝙪 𝙣𝙤𝙢𝙗𝙧𝙚*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '[❗𝙄𝙉𝙁𝙊❗] 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙚 𝙖𝙡 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙖 𝙖𝙜𝙧𝙚𝙜𝙖𝙧 𝙪𝙣 𝙥𝙖𝙦𝙪𝙚𝙩𝙚 𝙮 𝙪 𝙣𝙤𝙢𝙗𝙧𝙚'
let img = await m.quoted.download()
if (!img) throw '[❗𝙄𝙉𝙁𝙊❗] 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙚 𝙖𝙡 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙖 𝙖𝙜𝙧𝙚𝙜𝙖𝙧 𝙪𝙣 𝙥𝙖𝙦𝙪𝙚𝙩𝙚 𝙮 𝙪 𝙣𝙤𝙢𝙗𝙧𝙚'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
else throw '❗𝙀𝙧𝙧𝙤𝙧, 𝙖𝙡𝙜𝙤 𝙨𝙖𝙡𝙞𝙤 𝙢𝙖𝙡, 𝙫𝙪𝙚𝙡𝙫𝙖 𝙖𝙡 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧 𝙙𝙚𝙡 𝙣𝙪𝙚𝙫𝙤'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^robar|wm$/i
export default handler
