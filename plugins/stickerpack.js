/* Created by https://github.com/BrunoSobrino */
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*Ejemplo de uso ${usedPrefix + command} https://getstickerpack.com/stickers/flork-memes-4-1*`
let url = text
let res = await fetch(`https://api.zacros.my.id/downloader/stickerpack?link=${url}`)
let json = await res.json()
for (let data of (json.result || json)) {
const stikers = await sticker(false, data, global.packname, global.author)
conn.sendFile(m.chat, stikers, 'sticker.webp', '', m, { asSticker: true })
//await delay(1500)
}}
handler.command = /^stickerly|stickerpack$/i
export default handler
//const delay = time => new Promise(res => setTimeout(res, time))