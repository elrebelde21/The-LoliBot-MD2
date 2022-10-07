// Gracias a https://github.com/BrunoSobrino

import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let scircle = global.API('dzx', '/api/canvas/circle', { url }) 
let stiker = await sticker(null, scircle, global.packname, global.author)
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
m.reply(`${fg}𝑹𝒆𝒄𝒖𝒆𝒓𝒅𝒆 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 *${usedPrefix + command}* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒊𝒆𝒏𝒅𝒐 𝒂 𝒖𝒏𝒂 𝒊𝒎𝒂𝒈𝒆𝒏 𝒑𝒂𝒓𝒂 𝒉𝒂𝒄𝒆𝒓 𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒔 𝒄𝒊𝒓𝒄𝒖𝒍𝒂𝒓`)
}}
handler.command = /^scircle|circle|círculo|circulo|scírculo|scirculo|sircle|redondo|circular$/i
export default handler
/* `https://api.dhamzxploit.my.id/api/canvas/circle?url=${url}` */
