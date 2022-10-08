let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
let vn = './media/antilink.mp3'
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*𝑯𝒆𝒚!! 𝑬𝒍 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌 𝒆𝒔𝒕𝒂 𝒂𝒄𝒕𝒊𝒗𝒐, 𝒑𝒆𝒓𝒐 𝒒𝒖𝒆 𝒔𝒂𝒍𝒗𝒂𝒓𝒕𝒆 𝒄𝒂𝒓𝒈𝒐 𝒆𝒓𝒆𝒔 𝒂𝒅𝒎𝒊𝒏😎*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊 」*\n*𝘾𝙝𝙚, ${await this.getName(m.sender)} 𝙀𝙨𝙤 𝙣𝙤 𝙨𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚 𝙧𝙖𝙩𝙖, 𝙧𝙤𝙢𝙥𝙞𝙨𝙩𝙚 𝙡𝙖 𝙧𝙚𝙜𝙡𝙖𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙨𝙚𝙧𝙖́ 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 🤑....!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝑯𝒆𝒚 𝒒𝒖𝒆 𝒔𝒂𝒍𝒗𝒂𝒓𝒕𝒆 𝑮𝒊𝒍 𝒆𝒍 𝒃𝒐𝒕 𝒏𝒐 𝒆𝒔 𝒂𝒅𝒎𝒊𝒏 :v*'}`, author, ['𝘿𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠', '/disable antilink'], m)    
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗𝙄𝙣𝙛𝙤❗] 𝙀𝙡 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙩𝙞𝙚𝙣𝙚 𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤 𝙚𝙡 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤́𝙣 (𝙚𝙣𝙖𝙗𝙡𝙚 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙩) 𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙚 𝙘𝙤𝙣 𝙚𝙡 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙡𝙤𝙨 𝙝𝙖𝙗𝙞𝙡𝙞𝙩𝙚*')
conn.sendFile(m.chat, vn, 'antilink.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
return !0
}