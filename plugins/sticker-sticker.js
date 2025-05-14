import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let user = global.db.data.users[m.sender]
let stiker = false
let stick = args.join(" ").split("|");
let f = user.packname || global.packname
let g = (user.packname && user.author ? user.author : (user.packname && !user.author ? '' : global.author))
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 18) return m.reply(await tr('⚠️ ¿Dónde has visto un sticker de 15 segundos, pendejo? Haz el video más corto, con un máximo de 12 segundos.'))
let img = await q.download?.()
if (!img) return m.reply(`*${await tr("Y la imagen?")} 🤔 ${await tr("Responde a una imagen para hacer el sticker. Usa:")}* ${usedPrefix + command}`) 
let out
try {
stiker = await sticker(img, false, f, g)
} catch (e) {
console.error(e)
} finally {
//conn.reply(m.chat, `Calma crack estoy haciendo tu sticker 👏\n\n> *Recuerda los video son de 7 segundos*`, m)
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, f, g)
}}} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], f, g)
else return m.reply('URL invalido')
}} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: ``, mediaType: 2, sourceUrl: [nna, nn, md, yt].getRandom(), thumbnail: imagen4}}}, { quoted: m })
else return m.reply(`*${await tr("Y la imagen?")} 🤔 ${await tr("Responde a una imagen para hacer el sticker. Usa:")}* ${usedPrefix + command}`) 
}}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = ['s', 'sticker'] 
handler.register = true
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
