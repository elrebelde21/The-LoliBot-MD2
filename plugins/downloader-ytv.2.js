let limit = 80
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) throw '*𝙌𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤🤔 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙢𝙖́𝙨 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚/𝙡𝙞𝙣𝙠 𝙙𝙚𝙡 𝙔𝙤𝙪𝙏𝙪𝙗𝙚*'
conn.reply(m.chat, `*_⏳𝙎𝙚 𝙚𝙨𝙩𝙖́ 𝙥𝙧𝙤𝙘𝙚𝙨𝙖𝙣𝙙𝙤 𝙨𝙪 𝙑𝙞𝙙𝙚𝙤...⏳_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝑫𝒋 𝑩𝒐𝒕',
body: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
let video, source, res, link, lastError, isLimit
for (let i in _video) {
try {
video = _video[i]
isLimit = limitedSize < video.fileSize
if (isLimit) continue
link = await video.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
video = source = link = null
lastError = e
}}
conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'video/mp4', fileName: title + `.mp4`}, {quoted: m})
}
handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i
handler.limit = 1
export default handler
