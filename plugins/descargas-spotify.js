import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗𝙄𝙣𝙛𝙤❗] 𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝒂𝒍𝒈𝒖𝒏𝒂 𝒄𝒂𝒏𝒄𝒊𝒐́𝒏 𝒂 𝒃𝒖𝒔𝒄𝒂𝒓`
try {
let res = await fetch(global.API('zeks', '/api/spotify', { q: text }, 'apikey'))
if (!res.ok) throw await res.text()
let json = await res.json()
if(!json.data[0]) throw json
let { title, artists, album, thumb, url, preview_mp3 } = json.data[0]
let spotifyi = `❒═════❬ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 ❭═════╾❒
┬
├‣✨ *𝑻𝒊́𝒕𝒖𝒍𝒐:* ${title}
┴
┬
├‣🗣️ *𝑨𝒓𝒕𝒊𝒔𝒕𝒂𝒔:* ${artists}
┴
┬
├‣🎆 *𝑨𝒍𝒃𝒖𝒎:* ${album}
┴
┬
├‣🌐 *𝑼𝑹𝑳*: ${url}
┴
┬
├‣💚 *𝑼𝑹𝑳 𝒅𝒊𝒓𝒆𝒄𝒕𝒐:* ${preview_mp3}\n┴\n\n*_- 𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚖𝚞𝚜𝚒𝚌𝚊 𝚍𝚎 𝚙𝚛𝚎𝚟𝚒𝚜𝚞𝚊𝚕𝚒𝚣𝚊𝚌𝚒𝚘𝚗_*\n\n${wm}`

conn.sendFile(m.chat, thumb, '', spotifyi, m)
conn.sendFile(m.chat, preview_mp3, 'spotify.mp3', spotifyi, m)
} catch (e) {
throw '*[❗𝙄𝙣𝙛𝙤❗] 𝑬𝒓𝒓𝒐𝒓, 𝒏𝒐 𝒔𝒆 𝒍𝒐𝒈𝒓𝒐́ 𝒃𝒖𝒔𝒄𝒂𝒓 𝒍𝒂 𝒄𝒂𝒏𝒄𝒊𝒐́𝒏 𝒐 𝒍𝒂 𝒑𝒂́𝒈𝒊𝒏𝒂 𝒅𝒆 𝒂𝒚𝒖𝒅𝒂 𝒃𝒖𝒔𝒄𝒂𝒓 𝒍𝒂 𝒄𝒂𝒏𝒄𝒊𝒐́𝒏 𝒆𝒔𝒕𝒂́ 𝒄𝒂𝒊́𝒅𝒂, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒗𝒖𝒆𝒍𝒗𝒂 𝒂 𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒍𝒐 𝒎𝒂́𝒔 𝒕𝒂𝒓𝒅𝒆'
}}
handler.command = /^(spotify|music)$/i
handler.help = ['spotify']
handler.tags = ['general']
export default handler
