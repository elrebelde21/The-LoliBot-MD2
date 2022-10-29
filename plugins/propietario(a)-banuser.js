let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒆 𝒂 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒑𝒂𝒓𝒂 𝒃𝒂𝒏𝒆𝒂𝒓\𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg}𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒆 𝒂 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒑𝒂𝒓𝒂 𝒃𝒂𝒏𝒆𝒂𝒓\𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `${eg}𝑬𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒇𝒖𝒆 𝒃𝒂𝒏𝒆𝒂𝒅𝒐(𝒂) 🙀\n𝑵𝒐 𝒑𝒐𝒅𝒓𝒂 𝒖𝒔𝒂𝒓 𝒂 ${gt}`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.group = true
/*let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true

m.reply(`${eg}𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏 𝙁𝙐𝙀 𝘽𝘼𝙉𝙀𝘼𝘿𝙊 🤑\n𝙉𝙊 𝙀𝙎𝙏𝘼𝙍𝙀 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀 𝙃𝘼𝙎𝙏𝘼 𝙌𝙐𝙀 𝙎𝙀𝘼 𝘿𝙀𝙎𝘽𝘼𝙉𝙀𝘼𝘿𝘼.`)
}
handler.help = ['banchat1']
handler.tags = ['owner']
handler.command = /^ban1|banear1|banchat1$/i
handler.exp = 500
handler.botAdmin = true
handler.admin = true 

export default handler*/

//PARA GRUPOS

let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('*𝑬𝒔𝒕𝒆 𝒄𝒉𝒂𝒕 𝒏𝒐 𝒆𝒔𝒕𝒂 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐 𝒆𝒏 𝒍𝒂 𝒃𝒂𝒔𝒆 𝒅𝒆 𝒅𝒂𝒕𝒐𝒔!*')
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('*𝑬𝒔𝒕𝒆 𝒄𝒉𝒂𝒕 𝒏𝒐 𝒆𝒔𝒕𝒂 𝒃𝒂𝒏𝒆𝒂𝒅𝒐!!*')
  chat.isBanned = false
  m.reply(`${eg}𝑬𝒔𝒕𝒆 𝒄𝒉𝒂𝒕 𝒇𝒖𝒆 𝒅𝒆𝒔𝒃𝒂𝒏𝒆𝒂𝒅𝒐🥳\n𝑨𝒉𝒐𝒓𝒂 𝒆𝒔𝒕𝒐𝒚 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆..`)
}
handler.command = /^unbanchat$/i
handler.botAdmin = true
handler.admin = true

export default handler
