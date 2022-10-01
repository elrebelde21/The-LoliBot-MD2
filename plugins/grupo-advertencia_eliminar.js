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
if (!who) throw `${mg}𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂𝒔 𝒂𝒍 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒒𝒖𝒆 𝒔𝒆 𝒍𝒆 𝒗𝒂𝒏 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒓 𝒍𝒂 𝒂𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂 ⚠️\n\n𝒆𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command} @tag*`
user.warn -= 1
  
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `♻️ *@${who.split`@`[0]}*`} 𝑺𝒆 𝒍𝒆 𝒒𝒖𝒊𝒕𝒐 𝒍𝒂 𝒂𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂 𝒆𝒍 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐!!`, `*𝒂𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂:*\n⚠️ *Antes: ${user.warn + 1}/4*\n⚠️ *Ahora: ${user.warn}/4*\n\n${wm}`, img, [
[`😇 𝑮𝒓𝒂𝒄𝒊𝒂𝒔`, '.ok'],
['☘️ 𝑴𝒆𝒏𝒖', '/menu']], false, { mentions: [who] }) //[m.sender]
	
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
//handler.command = /^(delwarn|deladvertir|deladvertencia|delwarning|)$/i
handler.command = /^(del|delete|eliminar|\-)advertir|advertencia|warn(ing)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.register = true
export default handler
