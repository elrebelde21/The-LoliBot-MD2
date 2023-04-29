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
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*𝑯𝒆𝒚!! 𝑬𝒍 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌 𝒆𝒔𝒕𝒂 𝒂𝒄𝒕𝒊𝒗𝒐, 𝒑𝒆𝒓𝒐 𝒒𝒖𝒆 𝒔𝒂𝒍𝒗𝒂𝒓𝒕𝒆 𝒄𝒂𝒓𝒈𝒐 𝒆𝒓𝒆𝒔 𝒂𝒅𝒎𝒊𝒏😎!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await m.reply(`*「 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆𝙎 」*\n\n*Hasta la vista baby 👋, ${await this.getName(m.sender)} rompiste las reglas del grupo serás eliminado....!!*`)   
if (!isBotAdmin) return m.reply('*Te salvarte gil, no soy admin no te puedo eliminar*')  
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} else if (!bot.restrict) return m.reply('*𝙀𝙡 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙩𝙞𝙚𝙣𝙚 𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤 𝙚𝙡 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤𝙣 (𝙚𝙣𝙖𝙗𝙡𝙚 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙩) 𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙚 𝙘𝙤𝙣 𝙚𝙡 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙡𝙤𝙨 𝙝𝙖𝙗𝙞𝙡𝙞𝙩𝙚*')
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": wm, "body": ` `, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://github.com/elrebelde21/The-LoliBot-MD`, "showAdAttribution": true}}, ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })
}
return !0
}
