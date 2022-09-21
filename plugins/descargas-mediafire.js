import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒖𝒏 𝒆𝒏𝒍𝒂𝒄𝒆 𝒗𝒂́𝒍𝒊𝒅𝒐 𝒅𝒆 𝒎𝒆𝒅𝒊𝒂𝒇𝒊𝒓𝒆.`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
${eg}
┃ 𓃠 *${gt} ${vs}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💫 𝑵𝒐𝒎𝒃𝒓𝒆
┃ ${filename}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💪 𝑷𝒆𝒔𝒐
┃ ${filesizeH}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🚀 𝑻𝒊𝒑𝒐
┃ ${ext}`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫',
body: '𝑺𝒖𝒑𝒆𝒓 𝒃𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD`}}})
  
let info = `𝑴𝒂𝒚𝒐𝒓 𝒂 150 𝑴𝑮 𝒆𝒔 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒒𝒖𝒆 𝒏𝒐 𝒔𝒆 𝒆𝒏𝒗𝒊𝒆́`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)  
/* let vn = './media/descarga.mp3'
*/  
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) { 
m.reply(`${fg}𝑽𝒖𝒆𝒍𝒗𝒂 𝒂 𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓 𝒅𝒆𝒃𝒆 𝒅𝒆 𝒔𝒆𝒓 𝒖𝒏 𝒆𝒏𝒍𝒂𝒄𝒆 𝒗𝒂́𝒍𝒊𝒅𝒐 𝒅𝒆 𝒎𝒆𝒅𝒊𝒂𝒇𝒊𝒓𝒆`)
console.log(e)
/* conn.sendFile(m.chat, vn, 'descarga.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
*/
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.register = true
handler.limit = 3
handler.exp = 100
export default handler
