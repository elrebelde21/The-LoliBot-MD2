let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*[❗𝙄𝙣𝙛𝙤❗] 𝑬𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 ${conn.getName(m.sender)} 𝑬𝒔𝒕𝒂𝒓𝒂́ 𝒊𝒏𝒂𝒄𝒕𝒊𝒗𝒐 (𝑨𝑭𝑲), 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒏𝒐 𝒍𝒐 𝒆𝒕𝒊𝒒𝒖𝒆𝒕𝒆𝒔\n\n*—◉ 𝑴𝒐𝒕𝒊𝒗𝒐 𝒅𝒆 𝒍𝒂 𝒊𝒏𝒂𝒄𝒕𝒊𝒗𝒊𝒅𝒂𝒅 ${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler
