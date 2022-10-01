let handler = async (m, { conn, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] 𝙀𝙡 𝙤𝙬𝙣𝙚𝙧 𝙩𝙞𝙚𝙣𝙚 𝙖𝙥𝙖𝙜𝙖𝙙𝙤 𝙚𝙨𝙩𝙖 𝙤𝙥𝙘𝙞𝙤́𝙣 (𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝 / 𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝙀𝙡 𝙪𝙨𝙤 𝙙𝙚𝙡 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤*'
let kicktext = `*[❗] 𝑾𝒕𝒇 𝒂 𝒒𝒖𝒊𝒆𝒏 𝒒𝒖𝒊𝒆𝒓𝒆 𝒆𝒍𝒊𝒎𝒊𝒏𝒂, 🤔*\n *𝒆𝒕𝒊𝒒𝒖𝒆𝒕𝒂𝒔 𝒂𝒍 𝒑𝒆𝒓𝒔𝒐𝒏𝒂, 𝒐 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆*\n\n*—◉ 𝑬𝒋𝒆𝒎𝒑𝒍𝒐:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.command = /^(kick|echar|hechar|sacar)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
