const toxicRegex = /g0re|g0r3|g.o.r.e|sap0|sap4|malparido|malparida|malparidos|malparidas|m4lp4rid0|m4lp4rido|m4lparido|malp4rido|m4lparid0|malp4rid0|chocha|chup4la|chup4l4|chupalo|chup4lo|chup4l0|chupal0|chupon|chupameesta|sabandija|hijodelagranputa|hijodeputa|hijadeputa|hijadelagranputa|kbron|kbrona|cajetuda|laconchadedios|putita|putito|put1t4|putit4|putit0|put1to|put1ta|pr0stitut4s|pr0stitutas|pr05titutas|pr0stitut45|prostitut45|prostituta5|pr0stitut45|fanax|f4nax|drogas|droga|dr0g4|nepe|p3ne|p3n3|pen3|p.e.n.e|pvt0|puto|pvto|put0|hijodelagransetentamilparesdeputa|Chingadamadre|coño|c0ño|coñ0|c0ñ0|afeminado|drog4|cocaína|marihuana|chocho|chocha|cagon|pedorro|agrandado|agrandada|pedorra|sape|nmms|mamar|chigadamadre|hijueputa|chupa|kaka|caca|bobo|boba|loco|loca|chupapolla|estupido|estupida|estupidos|polla|pollas|idiota|maricon|chucha|verga|vrga|naco|zorra|zorro|zorras|zorros|pito|huevon|huevona|huevones|rctmre|mrd|ctm|csm|cp|cepe|sepe|sepesito|cepecito|cepesito|hldv|ptm|baboso|babosa|babosos|babosas|feo|fea|feos|feas|webo|webos|mamawebos|chupame|bolas|qliao|imbecil|embeciles|kbrones|cabron|capullo|carajo|gore|gorre|gorreo|sapo|sapa|mierda|cerdo|cerda|puerco|puerca|perra|perro|joden|jodemos|dumb|fuck|shit|bullshit|cunt|cum|semen|bitch|motherfucker|foker|fucking/i

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
if (!(user.warn >= 4)) await conn.sendButton(m.chat,`${user.warn == 1 ? `𝑵𝒐𝒐!!! *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, 𝑫𝒆𝒄𝒊𝒓 𝒆𝒔𝒕𝒂́ 𝒑𝒂𝒍𝒂𝒃𝒓𝒂 *(${isToxic})* 𝑬𝒔𝒕𝒂́ 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒂 𝒏𝒐 𝒔𝒆𝒂𝒔 𝒕𝒐́𝒙𝒊𝒄𝒐(𝘼)🤬!!`, `*𝑨𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂*\n⚠️ *${user.warn}/4*\n\n${wm}`, img, [
[`😭 𝑳𝒐 𝒔𝒊𝒆𝒏𝒕𝒐`, '.ok'],
['☢️ 𝑫𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂 𝒂𝒏𝒕𝒊𝒕𝒐𝒙𝒊𝒄', '.disable antitoxic'],
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
