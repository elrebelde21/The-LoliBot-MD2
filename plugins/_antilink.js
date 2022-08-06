let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
let vn = './media/antilink.mp3'
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('𝑯𝒆𝒚!! 𝑬𝒍 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌 𝒆𝒔𝒕𝒂 𝒂𝒄𝒕𝒊𝒗𝒐, 𝒑𝒆𝒓𝒐 𝒒𝒖𝒆 𝒔𝒂𝒍𝒗𝒂𝒓𝒕𝒆 𝒄𝒂𝒓𝒈𝒐 𝒆𝒓𝒆𝒔 𝒂𝒅𝒎𝒊𝒏😎!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊 」*\n*𝒄𝒉𝒆, ${await this.getName(m.sender)} 𝒆𝒔𝒐 𝒏𝒐 𝒔𝒆 𝒑𝒆𝒓𝒎𝒊𝒕𝒆 𝒓𝒂𝒕𝒂, 𝒓𝒐𝒎𝒑𝒊𝒔𝒕𝒆𝒔 𝒍𝒂𝒔 𝒓𝒆𝒈𝒍𝒂𝒔 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒔𝒆𝒓𝒂́𝒔 𝒆𝒙𝒕𝒆𝒓𝒎𝒊𝒏𝒂𝒅𝒐🤑....!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝑯𝒆𝒚 𝒒𝒖𝒆 𝒔𝒂𝒍𝒗𝒂𝒓𝒕𝒆 𝑮𝒊𝒍 𝒆𝒍 𝒃𝒐𝒕 𝒏𝒐 𝒆𝒔 𝒂𝒅𝒎𝒊𝒏 :)*'}`, author, ['𝘿𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠', '/disable antilink'], m)    
if (isBotAdmin) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!botadmin) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙰𝙳𝙾 𝙻𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙴 𝙲𝙾𝙽 𝙴𝙻 𝙿𝙰𝚁𝙰 𝚀𝚄𝙴 𝙻𝙾 𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙴*')
conn.sendFile(m.chat, vn, 'antilink.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
return !0
}
