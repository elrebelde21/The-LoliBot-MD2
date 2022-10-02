import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*𝙌𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤🤔 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙖𝙪𝙙𝙞𝙤*'
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
await conn.reply(m.chat, '*[❗] 𝑬𝒓𝒓𝒐𝒓, 𝑵𝒐 𝒇𝒖𝒆 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒓 𝒆𝒍 𝒂𝒖𝒅𝒊𝒐*', m)}
}
handler.command = /^getaud|yt(a|mp3)$/i
export default handler