
export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('estado') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
if (bot.antipv && !isOwner && !isROwner) {
await m.reply(`*𝙃𝙤𝙡𝙖 @${m.sender.split`@`[0]}*, No usar Los gomando al privado, solo para hacerte un .serbot | /jadibot\n no user comanxo al privado\n para usar el bot entra al grupo oficial del bot https://chat.whatsapp.com/Ei87TDT7fsI3Q3p5MnM9sW`, false, { mentions: [m.sender] })
await this.updateBannedStatus(m.chat, 'Banned')}
return !1
}
