let limit = 80
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) throw '*𝙌𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤🤔 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙢𝙖́𝙨 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚/𝙡𝙞𝙣𝙠 𝙙𝙚𝙡 𝙔𝙤𝙪𝙏𝙪𝙗𝙚*'
await conn.reply(m.chat, `*_⏳𝙎𝙚 𝙚𝙨𝙩𝙖́ 𝙥𝙧𝙤𝙘𝙚𝙨𝙖𝙣𝙙𝙤 𝙨𝙪 𝙖𝙪𝙙𝙞𝙤...⏳_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝑫𝒋 𝑩𝒐𝒕',
body: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫',
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
let audio, source, res, link, lastError, isLimit
for (let i in _audio) {
try {
audio = _audio[i]
isLimit = limitedSize < audio.fileSize
if (isLimit) continue
link = await audio.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
audio = link = source = null
lastError = e
}}
await conn.sendMessage(m.chat, { document: { url: link}, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: m})
}
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i
handler.limit = 1
export default handler
