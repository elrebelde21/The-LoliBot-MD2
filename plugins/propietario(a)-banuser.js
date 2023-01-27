let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒆 𝒂 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒑𝒂𝒓𝒂 𝒃𝒂𝒏𝒆𝒂𝒓\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('*𝑬𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒇𝒖𝒆 𝒃𝒂𝒏𝒆𝒂𝒅𝒐(𝒂) 🙀\n𝑵𝒐 𝒑𝒐𝒅𝒓𝒂 𝒖𝒔𝒂𝒓 𝒂 ${lb}')    }
handler.command = /^banuser$/i
handler.rowner = true
export default handler