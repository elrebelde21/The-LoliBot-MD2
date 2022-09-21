let handler = m => m
handler.all = async function (m) {
this.spam = this.spam ? this.spam : {}
if (!(m.sender in this.spam)) {
let spaming = {
jid: await m.sender, 
spam: 0,
lastspam: 0
}
this.spam[spaming.jid] = spaming
} else try {
this.spam[m.sender].spam += 1
if (new Date - this.spam[m.sender].lastspam > 4000) {
if (this.spam[m.sender].spam > 6) {
this.spam[m.sender].spam = 0
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
this.spam[m.sender].lastspam = new Date * 1
//global.DATABASE._data.users[m.sender].Banneduser = true
m.reply('No hagas Spam, anda hacer spam a la concha de tu hermana 🤨!!')
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await this.updateBlockStatus(m.chat, 'block')
} else {
this.spam[m.sender].spam = 0
this.spam[m.sender].lastspam = new Date * 1
}
}
} catch (e) {
console.log(e)
}
}
export default handler
