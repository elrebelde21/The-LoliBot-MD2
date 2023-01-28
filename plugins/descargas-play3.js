import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*𝙌𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤? 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙢𝙖𝙨 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙘𝙖𝙣𝙘𝙞𝙤𝙣*\n\n* 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:*\n*${usedPrefix + command} Quevedo fernet*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: '🎵 𝘼𝙪𝙙𝙞𝙤𝙙𝙤𝙘 🎵' }, type: 1 },
{ buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: '🎥 𝙑𝙞𝙙𝙚𝙤𝙙𝙤𝙘 🎥' }, type: 1 },
{ buttonId: `#playlistass2 ${text}`, buttonText: { displayText: '📋 𝙈𝘼𝙎 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 📋' }, type: 1 }, ] 
let texto1 = `*╭───≪~*╌◌ᰱ•••⃙❨͟͞P̸͟͞L̸͟A̸͟͞Y̸͟͞❩⃘•••ᰱ◌╌*~*
│║📌 *𝗧𝗶𝘁𝘂𝗹𝗼:* ${title}
│║📆 *𝗣𝘂𝗯𝗹𝗶𝗰𝗮𝗰𝗶𝗼𝗻:* ${publishedTime}
│║⌚ *𝘿𝙪𝙧𝙖𝙘𝙞𝙤𝙣:* ${durationH}
│║👀 *𝗩𝗶𝘀𝘁𝗮𝘀:* ${viewH}
│║📇 *𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣:* ${description}
│║🔗 *𝙇𝙞𝙣𝙠:* ${urll}
│║
│║        *████████████┃%100*
╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤`.trim()
let buttonMessage = { "document": { url: "https://wa.me/5219992095479" }, "fileName": '❏ 🌿 ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `*╭───≪~*╌◌ᰱ•••⃙❨͟͞P̸͟͞L̸͟A̸͟͞Y̸͟͞❩⃘•••ᰱ◌╌*~*
│║📌 *𝗧𝗶𝘁𝘂𝗹𝗼:* ${title}
│║📆 *𝗣𝘂𝗯𝗹𝗶𝗰𝗮𝗰𝗶𝗼𝗻:* ${published}
│║👀 *𝗩𝗶𝘀𝘁𝗮𝘀:* ${views}
│║🔗 *𝙇𝙞𝙣𝙠:* ${url}
│║
│║        *████████████┃%100*
╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤`
const buttons = [{buttonId: `#playlistass2 ${title}`, buttonText: {displayText: '📋 𝙈𝘼𝙎 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 📋'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙚𝙧𝙧𝙤, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙩𝙚𝙣𝙩𝙖 𝙙𝙚𝙡 𝙣𝙪𝙚𝙫𝙤*'}}}
handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|playdoc?$/i
handler.money = 80
handler.register = true
export default handler
