let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`𝙀𝙨𝙩𝙚 𝙘𝙝𝙖𝙩 𝙛𝙪𝙚 𝙗𝙖𝙣𝙚𝙖𝙙𝙤 🤑\n𝙣𝙤 𝙚𝙨𝙩𝙖𝙧𝙚 𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚 𝙝𝙖𝙨𝙩𝙖 𝙦𝙪𝙚 𝙨𝙚𝙖 𝙙𝙚𝙨𝙗𝙖𝙣𝙚𝙖𝙙𝙤`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat|ban2|banchat1$/i
handler.botAdmin = true
handler.admin = true 
export default handler
