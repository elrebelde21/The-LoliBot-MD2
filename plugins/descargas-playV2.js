import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `🤔𝙦𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤?🤔 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚/𝙩𝙞𝙩𝙪𝙡𝙤 𝙙𝙚 𝙘𝙖𝙣𝙘𝙞𝙤𝙣\n\n*—◉ 𝙀𝙟𝙚𝙢𝙥𝙡𝙤:\n#play.1 lgante - bar*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play.1') {
conn.reply(m.chat, `_⏳𝙋𝙧𝙤𝙘𝙚𝙨𝙖𝙣𝙙𝙤.... 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣𝙤𝙨 𝙢𝙞𝙣𝙪𝙩𝙤𝙨 𝙚𝙡 𝙦𝙪𝙚 𝙢𝙖𝙣𝙙𝙤 𝙨𝙪𝙨 𝙖𝙪𝙙𝙞𝙤...⏳_`, m)  
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `_⏳𝙋𝙧𝙤𝙘𝙚𝙨𝙖𝙣𝙙𝙤.... 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣𝙤𝙨 𝙢𝙞𝙣𝙪𝙩𝙤𝙨 𝙚𝙡 𝙦𝙪𝙚 𝙢𝙖𝙣𝙙𝙤 𝙨𝙪𝙨 𝙑𝙞𝙙𝙚𝙤...⏳_`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫_`, m)}
} catch (e) {
m.reply('*[❗𝙄𝙣𝙛𝙤❗] 𝑬𝒓𝒓𝒐𝒓, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒗𝒖𝒆𝒍𝒗𝒂 𝒂 𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒍𝒐*')
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
