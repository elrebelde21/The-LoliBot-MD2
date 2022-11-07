import db from '../lib/database.js'

export async function all(m) {
    if (!m.message)
    if (isAdmin && chat.antispam && m.text.includes(grupo)) return m.reply('*𝑯𝒆𝒚!! 𝑬𝒍 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌 𝒆𝒔𝒕𝒂 𝒂𝒄𝒕𝒊𝒗𝒐, 𝒑𝒆𝒓𝒐 𝒒𝒖𝒆 𝒔𝒂𝒍𝒗𝒂𝒓𝒕𝒆 𝒄𝒂𝒓𝒈𝒐 𝒆𝒓𝒆𝒔 𝒂𝒅𝒎𝒊𝒏😎*')
if (chat.antispam && isGroupspam && !isAdmin) {
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                //db.data.users[m.sender].banned = true
                m.reply('⚠️ *「 ANTI-SPAM 」*\n\npara con spam la concha del tu hermana')
                await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}
