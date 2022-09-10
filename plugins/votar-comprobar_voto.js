let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
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

let id = m.chat
conn.vote = conn.vote ? conn.vote : {}
        
if (!(id in conn.vote)) {
return await conn.sendButton(m.chat, `${fg}𝙉𝙊 𝙎𝙀 𝙃𝘼 𝘾𝙍𝙀𝘼𝘿𝙊 𝙑𝙊𝙏𝘼𝘾𝙄𝙊𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`, `*Si quieres crear una nueva votación usa el comando ${usedPrefix}crearvoto*\n${wm}`, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣 ☘️', '/menu']], fkontak, m)}

let [reason, upvote, devote] = conn.vote[id]
let caption = `*${htjava} 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙑𝙊𝙏𝙊𝙎 ${htjava}*

*USUARIO(A)*
🐈 @${conn.getName(m.sender)}

*MOTIVO ➫* ${reason}

*${htjava} 𝙑𝙊𝙏𝙊𝙎 𝘼 𝙁𝘼𝙑𝙊𝙍 ${htjava}*
*Total: ${upvote.length}*

${dmenut}
${upvote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}

*${htjava} 𝙑𝙊𝙏𝙊𝙎 𝙀𝙉 𝘾𝙊𝙉𝙏𝙍𝘼 ${htjava}*
*Total: ${devote.length}*

${dmenut}
${devote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}`.trim()

await conn.sendButton(m.chat, caption, wm, null, [
['✅ 𝙑𝙊𝙏𝘼𝙍 𝘼 𝙁𝘼𝙑𝙊𝙍 ', `${usedPrefix}upvote`],
['❌ 𝙑𝙊𝙏𝘼𝙍 𝙀𝙉 𝘾𝙊𝙉𝙏𝙍𝘼 ', `${usedPrefix}devote`],
['🧾 𝙁𝙄𝙉𝘼𝙇𝙄𝙕𝘼𝙍 𝙑𝙊𝙏𝘼𝘾𝙄𝙊𝙉 ', `${usedPrefix}delvoto`]], m, { mentions: conn.parseMention(caption) })}

handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote|vervotos|vervoto|vervotaciones|votaciones|votacion|vervotacion$/i
handler.group = true
handler.register = true
handler.botAdmin = true

export default handler
