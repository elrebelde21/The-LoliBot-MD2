let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}  
if (!db.data.chats[m.chat].antitoxic && m.isGroup) return conn.reply(m.chat, `𝙇𝙖 𝙛𝙪𝙣𝙘𝙞𝙤́𝙣 *#on antitoxicos* 𝙚𝙨𝙩𝙖́ 𝘿𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙗𝙖, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙚𝙨𝙩𝙖 𝙖𝙘𝙩𝙞𝙫𝙖 𝙙𝙞𝙘𝙝𝙖 𝙛𝙪𝙣𝙘𝙞𝙤́𝙣, 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙛𝙪𝙣𝙘𝙞𝙤𝙣𝙚 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤`, fkontak, m) 
let who
let img = 'https://telegra.ph/file/635b82df8d7abb4792eab.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂𝒔 𝒂𝒍 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒒𝒖𝒆 𝒗𝒂𝒏 𝒓𝒆𝒄𝒊𝒃𝒊𝒓 𝒖𝒏𝒂 𝒂𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂 ⚠️\n\n𝒆𝒋𝒆𝒎𝒑𝒍𝒐 \n*${usedPrefix + command} @tag*`
user.warn += 1
  
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} 𝑹𝒆𝒄𝒊𝒃𝒊𝒐́ 𝒖𝒏𝒂 𝒂𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂 𝒆𝒏 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐!!\n\n`, `*𝒂𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂:*\n⚠️ *${user.warn}/4*\n\n${wm}`, img, [
[`😭 𝑳𝒐 𝒔𝒊𝒆𝒏𝒕𝒐`, '.ok'],
['☘️ 𝑴𝒆𝒏𝒖', '/menu']], false, { mentions: [who] }) //[m.sender]
	
if (user.warn >= 4) {
user.warn = 0
await m.reply(`𝙏𝙚 𝙡𝙤𝙨 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙 𝙫𝙖𝙧𝙞𝙖𝙨 𝙫𝙚𝙘𝙚𝙨!!\n*@${who.split`@`[0]}* 𝙨𝙪𝙥𝙚𝙧𝙖𝙧𝙩𝙚 𝙡𝙖𝙨 *4* 𝙖𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖\n 𝙖𝙝𝙤𝙧𝙖 𝙨𝙚𝙧𝙖́ 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤(𝘼) 😐`, false, { mentions: [who] })
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') //@${m.sender.split`@`[0]}
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(advertir|advertencia|warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.register = true
export default handler
