import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `🤔𝙦𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤? 🤔\n𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚/𝙩𝙞𝙩𝙪𝙡𝙤 𝙙𝙚 𝙘𝙖𝙣𝙘𝙞𝙤𝙣\n\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤:\n#play lgante - bar`
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, timestamp, durationH, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play') {
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
*${title}*
*⇄ㅤ     ◁   ㅤ  ❚❚ㅤ     ▷ㅤ     ↻*

*📆 Publicado:* ${published}
*👉🏻Aguarde un momento en lo que envío su audio/video*
`.trim(), m)
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: m})
}

if (command == 'play2') {
let jsonn = await ytLink.json()
let vid = await jsonn.result.video
conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
*${title}*
*⇄ㅤ     ◁   ㅤ  ❚❚ㅤ     ▷ㅤ     ↻*

*📆 Publicado:* ${published}
*👉🏻Aguarde un momento en lo que envío su audio/video*
`.trim(), m)
conn.sendMessage(m.chat, { video: { url: vid }, fileName: '${title}.mp4', mimetype: 'video/mp4', caption: `🔰 𝘼𝙦𝙪𝙞 𝙚𝙨𝙩𝙖 𝙩𝙪 𝙫𝙞𝙙𝙚𝙤 \n🔥 𝙏𝙞𝙩𝙪𝙡𝙤: ${title}`}, {quoted: m})
}
} catch (e) {
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = ['play', 'play2']
export default handler
