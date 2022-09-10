let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
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

if (m.isGroup) {
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)}
  
let id = m.chat
conn.vote = conn.vote ? conn.vote : {}
if (!(id in conn.vote)) {
return await conn.sendButton(m.chat, `${fg}𝙉𝙊 𝙎𝙀 𝙃𝘼 𝘾𝙍𝙀𝘼𝘿𝙊 𝙑𝙊𝙏𝘼𝘾𝙄𝙊𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`, `*Si quieres crear una nueva votación usa el comando ${usedPrefix}crearvoto*`, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], fkontak, m)}
  
delete conn.vote[id]
await conn.sendButton(m.chat, `${eg}𝙇𝘼 𝙑𝙊𝙏𝘼𝘾𝙄𝙊𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊 𝙃𝘼 𝙎𝙄𝘿𝙊 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝘼`, `*Si quieres hacer una nueva votación usa el comando ${usedPrefix}crearvoto*`, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], fkontak, m)}

handler.help = ['hapusvote']
handler.tags = ['vote']
handler.command = /^(del|delete|hapus|-)voto$/i
handler.group = true
handler.botAdmin = true
handler.register = true
handler.admin = true

export default handler
