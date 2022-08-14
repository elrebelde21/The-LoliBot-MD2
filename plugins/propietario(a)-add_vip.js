let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `${mg}𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒆 𝒂 𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒒𝒖𝒆 𝒗𝒂 𝒔𝒆𝒓 𝒖𝒔𝒖𝒂𝒓𝒊𝒐(𝒂) 𝒗𝒊𝒑 💎\n\𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command}*`
if (global.prems.includes(who.split`@`[0])) throw `${iig}𝑬𝒍/𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒚𝒂 𝒆𝒔 𝒗𝒊𝒑✨`
global.prems.push(`${who.split`@`[0]}`)
conn.reply(m.chat, `${eg}@${who.split`@`[0]} 𝑨𝒉𝒐𝒓𝒂 𝒆𝒔 𝒖𝒔𝒖𝒂𝒓𝒊𝒐/𝒂 𝒗𝒊𝒑. 𝑵𝒐 𝒗𝒂 𝒕𝒆𝒏𝒆𝒓 𝒍𝒊́𝒎𝒊𝒕𝒆𝒔 𝒄𝒐𝒏 ${gt} 😼`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.rowner = true
export default handler
