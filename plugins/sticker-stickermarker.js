import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['jail', 'gay', 'glass', 'wasted' ,'triggered', 'lolice', 'simpcard', 'horny']

let handler = async (m, { conn, usedPrefix, command, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
𝑫𝒆𝒃𝒆 𝒅𝒆 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒅𝒆 𝒍𝒂 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 𝒎𝒂𝒏𝒆𝒓𝒂
*${usedPrefix + command} efecto*

𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒖𝒏𝒂 𝒊𝒎𝒂𝒈𝒆𝒏
𝑬𝒋𝒆𝒎𝒑𝒍𝒐
*${usedPrefix + command} simpcard*

𝑬𝒇𝒆𝒄𝒕𝒐 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆
${effects.map(effect => `_» ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `𝑵𝒐 𝒔𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐́ 𝒍𝒂 𝒊𝒎𝒂𝒈𝒆𝒏 𝒓𝒆𝒄𝒖𝒆𝒓𝒅𝒆 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓 𝒂𝒍 𝒖𝒏𝒂 𝒊𝒎𝒂𝒈𝒆𝒏 `
if (!/image\/(jpe?g|png)/.test(mime)) throw `𝑬𝒍 𝒇𝒐𝒓𝒎𝒂𝒕𝒐 𝒅𝒆𝒃𝒆 𝒔𝒆𝒓 *jpg o jpeg* 𝒀 𝒂𝒍 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓 𝒂 𝒖𝒏𝒂 𝒊𝒎𝒂𝒈𝒆𝒏`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply(`𝑬𝒓𝒓𝒐𝒓, 𝒏𝒐 𝒔𝒆 𝒑𝒖𝒅𝒐 𝒉𝒂𝒄𝒆𝒓 𝒍𝒂 𝒄𝒐𝒏𝒗𝒆𝒓𝒔𝒊𝒐́𝒏, 𝒆𝒏 𝒔𝒖 𝒍𝒖𝒈𝒂𝒓 𝒆𝒏𝒗𝒊́𝒂 𝒖𝒏𝒂 𝒊𝒎𝒂𝒈𝒆𝒏`)
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickmaker (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickmaker|stickermaker|stickermarker|cs)$/i
export default handler
