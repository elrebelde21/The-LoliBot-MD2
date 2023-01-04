import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*𝙌𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤🤔 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙢𝙖́𝙨 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚/𝙡𝙞𝙣𝙠 𝙙𝙚𝙡 𝙔𝙤𝙪𝙏𝙪𝙗𝙚*'
await m.reply(`*_⏳𝙎𝙚 𝙚𝙨𝙩𝙖́ 𝙥𝙧𝙤𝙘𝙚𝙨𝙖𝙣𝙙𝙤 𝙨𝙪 𝙖𝙪𝙙𝙞𝙤...⏳_*`)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
let cap = `*╭┄〔 *${wm}* 〕┄⊱-\n┆📥 ʏᴏᴜᴛᴜʙᴇ ᴅʟ 📥*\n┆——————«•»——————\n┆❏ *ᴛɪᴛᴜʟᴏ:* ${ttl}\n┆❏ *ᴘᴇsᴏ:* ${size}\n╰─────────────────`.trim()
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)   
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let cap2 = `**╭┄〔 *${wm}* 〕┄⊱-\n┆📥 ʏᴏᴜᴛᴜʙᴇ ᴅʟ 📥*\n┆——————«•»——————\n┆❏ *ᴛɪᴛᴜʟᴏ:*  ${n}\n┆❏ *ᴘᴇsᴏ:* ${n3}\n╰─────────────────—`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m})
} catch {
await conn.reply(m.chat, '*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾*', m)}
}}
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i
handler.limit = 4
export default handler
