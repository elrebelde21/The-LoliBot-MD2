import { join } from 'path' 
import { promises } from 'fs'

let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
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

let imgr = flaaa.getRandom()
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let user = global.db.data.users[m.sender]
    
if (user.health >= 100) return conn.sendButton(m.chat, `𝙏𝙐 𝙎𝘼𝙇𝙐𝘿 𝙀𝙎𝙏𝘼 𝙇𝙇𝙀𝙉𝘼 ❤️`, wm, imgr + `SALUD: ${user.health}`, [
[`🏕️ 𝘼𝙑𝙀𝙉𝙏𝙐𝙍𝘼𝙍`, `${usedPrefix}adventure`], [`𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖𝙧  🏕️`, `${usedPrefix}adventure`]], fkontak, m)
    
const heal = 40 + (user.cat * 4)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1
    
if (user.potion < count) return conn.sendButton(m.chat,`${htki} 𝙎𝙄𝙉 𝙋𝙊𝘾𝙄𝙊𝙉𝙀𝙎 ${htka}`, 
`𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼𝙎 ${count - user.potion} 𝙋𝙊𝘾𝙄𝙊𝙉 🥤 𝙋𝘼𝙍𝘼 𝘾𝙐𝙍𝘼𝙍𝙏𝙀

𝙎𝘼𝙇𝙐𝘿 : 𝙃𝙀𝘼𝙇𝙏𝙃 » ${user.health} ❤️
𝙋𝙊𝘾𝙄𝙊𝙉 : 𝙋𝙊𝙏𝙄𝙊𝙉 » ${user.potion} 🥤

𝘾𝙊𝙈𝙋𝙍𝘼 𝙋𝙊𝘾𝙄𝙊𝙉 𝙊 𝙋𝙄𝘿𝙀𝙇𝙀 𝘼 𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙌𝙐𝙀 𝙏𝙀 𝙏𝙍𝘼𝙉𝙎𝙁𝙄𝙀𝙍𝘼`.trim(), imgr + 'POCION BAJA:', [
[`𝘾𝙤𝙢𝙥𝙧𝙖𝙧 𝙋𝙤𝙘𝙞𝙤𝙣  🥤`, `${usedPrefix}buy potion ${count - user.potion}`],
[`𝙋𝙚𝙙𝙞𝙧 𝘼𝙮𝙪𝙙𝙖 ☘️`, `${usedPrefix}pedirayuda *Por Favor alguien ayudeme con ${count - user.potion} de POCION* 🥤 
*» AYUDA TRANSFIRIENDO:*
*${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], fkontak, m)
  
    user.potion -= count * 1 //1 potion = count (1) 
    user.health += heal * count
    
conn.sendButton(m.chat, `*━┈━《 ✅ 𝙎𝘼𝙇𝙐𝘿 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝘼 》━┈━*`, `𝙀𝙓𝙄𝙏𝙊𝙎𝘼𝙈𝙀𝙉𝙏𝙀 𝙐𝙎𝙊 ${count} 𝘿𝙀 𝙋𝙊𝘾𝙄𝙊𝙉 🥤 𝙋𝘼𝙍𝘼 𝙍𝙀𝘾𝙐𝙋𝙀𝙍𝘼𝙍 𝙎𝙐 𝙎𝘼𝙇𝙐𝘿', [
[`𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖𝙧  🏕️`, `${usedPrefix}adventure`]], fkontak, m)
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.level = 1
handler.limit = 1
handler.register = true
handler.command = /^(heal|curar)$/i

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
