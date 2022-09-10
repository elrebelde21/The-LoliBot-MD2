let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂𝒔 𝒂𝒍𝒈𝒖𝒏 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒑𝒂𝒓𝒂 𝒅𝒆𝒔𝒃𝒂𝒏𝒆𝒂\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg}𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂𝒔 𝒂𝒍𝒈𝒖𝒏 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒑𝒂𝒓𝒂 𝒅𝒆𝒔𝒃𝒂𝒏𝒆𝒂\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `${eg}𝑬𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒇𝒖𝒆 𝒅𝒆𝒔𝒃𝒂𝒏𝒆𝒂𝒅𝒐(𝒂)🤩\n𝑷𝒐𝒃𝒓𝒂 𝒖𝒔𝒂 𝒂 ${gt}`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.group = true
handler.admin = true 
export default handler
