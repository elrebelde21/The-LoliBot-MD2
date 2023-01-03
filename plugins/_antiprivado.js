export async function before(m, { isAdmin, isBotAdmin, isOwner, isROwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (m.isGroup)
       return !1
    if (!m.message)
       return !0<
   if (m.text.includes('PIEDRA') || m.text.includes('hola')   || m.text.includes('estado') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0
       return !0
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    
    if (bot.antiPrivate && !isOwner && !isROwner) {
       await m.reply(`𝙃𝙤𝙡𝙖 *@${m.sender.split`@`[0]}*, 𝙀𝙨𝙩𝙖́ 𝙥𝙧𝙤𝙝𝙞𝙗𝙞𝙙𝙤 𝙝𝙖𝙗𝙡𝙖𝙧 𝙖𝙡 𝙥𝙧𝙞𝙫𝙖𝙙𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙨𝙚𝙧𝙖́𝙨 𝙗𝙡𝙤𝙦𝙪𝙚𝙖𝙙𝙤.\n 𝙃𝙖𝙗𝙡𝙖𝙧 𝙘𝙤𝙣 𝙢𝙞 𝙤𝙬𝙣𝙚𝙧 𝙨𝙞 𝙦𝙪𝙞𝙚𝙧𝙚 𝙦𝙪𝙚 𝙙𝙚𝙨𝙗𝙡𝙤𝙦𝙪𝙚𝙚. wa.me/5492266466080`, false, { mentions: [m.sender] })
       await this.updateBlockStatus(m.chat, 'block')
    }
    return !1
}
