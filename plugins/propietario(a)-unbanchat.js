let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('*Este chat no está registrado en la base de datos!*')
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('*Este chat no está baneado!!*')
  chat.isBanned = false
  m.reply(`𝙀𝙨𝙩𝙚 𝙘𝙝𝙖𝙩 𝙛𝙪𝙚 𝙙𝙚𝙨𝙗𝙖𝙣𝙚𝙖𝙙𝙤 🥳\n𝙖𝙝𝙤𝙧𝙖 𝙚𝙨𝙩𝙤𝙮 𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚...`)
}
handler.command = /^unbanchat$/i
handler.botAdmin = true
handler.admin = true

export default handler
