let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒆 𝒂 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒑𝒂𝒓𝒂 𝒃𝒂𝒏𝒆𝒂𝒓\𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒆 𝒂 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒑𝒂𝒓𝒂 𝒃𝒂𝒏𝒆𝒂𝒓\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `𝑬𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒇𝒖𝒆 𝒃𝒂𝒏𝒆𝒂𝒅𝒐(𝒂) 🙀\n𝑵𝒐 𝒑𝒐𝒅𝒓𝒂 𝒖𝒔𝒂𝒓 𝒂 ${gt}`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.group = true
handler.admin = true 
export default handler 
