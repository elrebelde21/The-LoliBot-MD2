const toxicRegex = /pinga|joto|sape|nmms|calladito|calladita|mames|mamar|chigadamadre|hijueputa|chupa|kaka|caca|bobo|boba|loco|loca|chupapolla|estupido|estupida|estupidos|polla|pollas|idiota|maricon|chucha|verga|vrga|naco|zorra|zorro|zorras|zorros|pito|huevon|huevona|huevones|rctmre|mrd|ctm|csm|cp|hldv|ptm|baboso|babosa|babosos|babosas|webo|webos|mamawebos|calla|callese|cállate|callate|chupame|bolas|qliao|imbecil|embeciles|kbrones|cabron|capullo|carajo|gore|gorre|gorreo|sapo|sapa|mierda|cerdo|cerda|puerco|puerca|perra|perro|dumb|fuck|shit|bullshit|cunt|cum|semen|bitch|motherfucker|foker|fucking/i

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner }) {
 
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup)
return !1
  let user = global.db.data.users[m.sender]
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let img = 'https://telegra.ph/file/635b82df8d7abb4792eab.jpg'
 const isToxic = toxicRegex.exec(m.text)
    
if (isToxic && chat.antitoxic && !isOwner && !isAdmin) {
user.warn += 1
if (!(user.warn >= 4)) await conn.sendButton(m.chat,`${user.warn == 1 ? `𝑵𝒐𝒐!!! *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, 𝑫𝒆𝒄𝒊𝒓 𝒆𝒔𝒕𝒂́ 𝒑𝒂𝒍𝒂𝒃𝒓𝒂 *(${isToxic})* 𝑬𝒔𝒕𝒂́ 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒂 𝒏𝒐 𝒔𝒆𝒂𝒔 𝒕𝒐́𝒙𝒊𝒄𝒐(𝘼)\n\n🤬!!`, `*𝑨𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂*\n⚠️ *${user.warn}/4*\n\n${wm}`, img, [
[`😭 𝑳𝒐 𝒔𝒊𝒆𝒏𝒕𝒐`, '.ok'],
['☢️ 𝑫𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂 𝒂𝒏𝒕𝒊𝒕𝒐𝒙𝒊𝒄', '.off antitoxic'],
['☘️ 𝑴𝒆𝒏𝒖', '/menu']], false, { mentions: [m.sender] })}

if (user.warn >= 4) {
user.warn = 0
await m.reply(`𝑻𝒆 𝒍𝒐 𝒂𝒅𝒗𝒆𝒓𝒕𝒊́ 𝒗𝒂𝒓𝒊𝒂𝒔 𝒗𝒆𝒄𝒆𝒔!!\n*@${m.sender.split`@`[0]}* 𝑺𝒖𝒑𝒆𝒓𝒂𝒔𝒕𝒆 𝒍𝒂𝒔 *4* 𝑨𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂 𝒂𝒉𝒐𝒓𝒂 𝒔𝒆𝒓𝒂́ 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐(𝘼) 😐`, false, { mentions: [m.sender] })
user.banned = true
await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}
