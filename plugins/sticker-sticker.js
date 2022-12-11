import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {

let stiker = false
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return m.reply(`𝙃𝙚𝙮 𝙩𝙖𝙣 𝙡𝙖𝙧𝙜𝙤 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤,  𝙚𝙡 𝙫𝙞𝙙𝙚𝙤 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙙𝙪𝙙𝙖𝙨 𝙢𝙖́𝙨 𝙙𝙚𝙡 *7* 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨`)
let img = await q.download?.()

if (!img) throw `𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒖𝒏𝒂 𝒊𝒎𝒂𝒈𝒆𝒏, 𝒗𝒊𝒅𝒆𝒐, 𝒈𝒊𝒇 𝒐 𝒆𝒏𝒍𝒂𝒄𝒆 𝒅𝒆 𝒕𝒊𝒑𝒐 *.jpg* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒂𝒍𝒊𝒛𝒂𝒓 𝒆𝒍 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒖𝒔𝒆 *${usedPrefix + command}*`

let out
try {
stiker = await sticker(img, false, global.packname, global.author)
} catch (e) {
console.error(e)
} finally {
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)
}}
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)

else return m.reply(`𝙁𝙤𝙧𝙢𝙖 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖,  𝙚𝙡 𝙡𝙞𝙣𝙠 𝙤 𝙪𝙧𝙡 𝙙𝙚𝙗𝙚 𝙙𝙚𝙡 𝙩𝙚́𝙧𝙢𝙞𝙣𝙖 𝙚𝙣 *.jpg*\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command}* https://i.imgur.com/8fK4h6F.jpg`)
  
}
} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)

else throw `pfff, dónde está 🤔 las imagen/vídeo responda o etiqueta una imagen/video`

}}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
handler.exp = 200

export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
