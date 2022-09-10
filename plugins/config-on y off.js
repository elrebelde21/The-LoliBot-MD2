let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => { 
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

const sections = [
{
title: `𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤́𝙣`,
rows: [
{title: "🎉 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙖", description: "𝑨𝒄𝒕𝒊𝒗𝒂/𝒅𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂 𝒍𝒂𝒔 𝒃𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒂", rowId: `${usedPrefix + command} welcome`},
{title: "🌐 𝙈𝙤𝙙𝙤 𝙥𝙪́𝙗𝙡𝙞𝙘𝙤", description: "𝑨𝒄𝒕𝒊𝒗𝒂/𝒅𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂 𝒆𝒍 𝒎𝒐𝒅𝒐 𝒑𝒖́𝒃𝒍𝒊𝒄𝒐", rowId: `${usedPrefix + command} public`},
{title: "🔞 𝙈𝙤𝙙𝙤 +18", description: "𝑨𝒄𝒕𝒊𝒗𝒂/𝒅𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂 𝑬𝒍 𝒎𝒐𝒅𝒐 𝒉𝒐𝒓𝒏𝒚 (+18)", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 𝘼𝙣𝙩𝙞𝙡𝙞𝙣𝙠", description: "𝑬𝒍𝒊𝒎𝒊𝒏𝒂 𝒂 𝒒𝒖𝒊𝒆𝒏 𝒎𝒂𝒏𝒅𝒂 𝒆𝒏𝒍𝒂𝒄𝒆 𝒅𝒆𝒍 𝒐𝒕𝒓𝒐 𝒈𝒓𝒖𝒑𝒐", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 𝘼𝙣𝙩𝙞𝙡𝙞𝙣𝙠2", description: "𝑬𝒍𝒊𝒎𝒊𝒏𝒂𝒓 𝒆𝒏𝒍𝒂𝒄𝒆 𝒒𝒖𝒆 𝒄𝒐𝒏𝒕𝒆𝒏𝒈𝒂 𝙝𝙩𝙩𝙥𝙨", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔔 𝘿𝙚𝙘𝙩𝙚𝙘𝙩", description: "𝑵𝒐𝒕𝒊𝒇𝒊𝒄𝒂𝒄𝒊𝒐𝒏𝒆𝒔 𝒆𝒍 𝒆𝒏 𝒈𝒓𝒖𝒑𝒐", rowId: `${usedPrefix + command} detect`},    
{title: "🆙 𝘼𝙪𝙩𝙤𝙡𝙚𝙫𝙚𝙡𝙪𝙥", description: "𝑷𝒂𝒓𝒂 𝒔𝒖𝒃𝒊𝒓 𝒅𝒆𝒍 𝒍𝒊𝒗𝒆𝒍 𝒂𝒖𝒕𝒐𝒎𝒂́𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆 𝒆𝒍 𝒆𝒏 𝒄𝒉𝒂𝒕", rowId: `${usedPrefix + command} autolevelup`},    
{title: "⛔ 𝙍𝙚𝙨𝙩𝙧𝙞𝙘𝙩", description: "𝑼𝒔𝒂𝒓 𝒑𝒂𝒓𝒂  𝒔𝒂𝒄𝒂𝒓 𝒚/𝒐 𝒂𝒏𝒂𝒅𝒊𝒓 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒂𝒍 𝒈𝒓𝒖𝒑𝒐", rowId: `${usedPrefix + command} restrict`},    
{title: "✅ 𝘼𝙪𝙩𝙤𝙧𝙚𝙖𝙙", description: "𝑯𝒂𝒄𝒆𝒓 𝒒𝒖𝒆 𝒃𝒐𝒕 𝒕𝒆𝒏𝒈𝒂 𝒍𝒐𝒔 𝒎𝒆𝒏𝒔𝒂𝒋𝒆𝒔 𝒄𝒐𝒎𝒐 𝒍𝒆𝒊́𝒅𝒐 𝒂𝒖𝒕𝒐𝒎𝒂́𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 𝘼𝙪𝙙𝙞𝙤𝙨", description: "𝑷𝒂𝒓𝒂 𝑨𝒄𝒕𝒊𝒗𝒂/𝒅𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂 𝑳𝒐𝒔 𝒂𝒖𝒅𝒊𝒐𝒔", rowId: `${usedPrefix + command} audios`},
{title: "🗑️ 𝘼𝙣𝙩𝙞𝙙𝙚𝙡𝙚𝙩𝙚", description: "𝑷𝒂𝒓𝒂 𝒎𝒐𝒔𝒕𝒓𝒂𝒓 𝒍𝒐𝒔 𝒎𝒆𝒏𝒔𝒂𝒋𝒆𝒔 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐𝒔", rowId: `${usedPrefix + command} antidelete`},
{title: "☢️ 𝘼𝙣𝙩𝙞𝙩𝙤𝙭𝙞𝙘", description: "𝑬𝒍𝒊𝒎𝒊𝒏𝒂𝒓 𝒂𝒍 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒒𝒖𝒆 𝒔𝒆𝒂 𝒗𝒖𝒍𝒈𝒂𝒓𝒆𝒔 𝒆𝒍 𝒈𝒓𝒖𝒑𝒐", rowId: `${usedPrefix + command} antitoxic`},    
{title: "🤑 𝘽𝙤𝙩𝙚𝙢𝙥𝙤𝙧𝙖𝙡 ", description: "𝑷𝒂𝒓𝒂 𝒑𝒆𝒓𝒎𝒊𝒕𝒆 𝒒𝒖𝒆 𝒃𝒐𝒕 𝒔𝒆 𝒖𝒏𝒂𝒓 𝒂𝒖𝒕𝒐𝒎𝒂́𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆 𝒂𝒍 𝒈𝒓𝒖𝒑𝒐", rowId: `${usedPrefix + command} temporal`},
{title: "👀 𝘼𝙣𝙩𝙞𝙫𝙞𝙚𝙣𝙬𝙤𝙣𝙘𝙚", description: "𝑯𝒂𝒄𝒆𝒓 𝒒𝒖𝒆 𝒏𝒐 𝒔𝒆 𝒐𝒄𝒖𝒍𝒕𝒆 𝒏𝒂𝒅𝒂 𝒆𝒍 𝒈𝒓𝒖𝒑𝒐", rowId: `${usedPrefix + command} antiver`},
{title: "🤡 𝙍𝙚𝙖𝙘𝙘𝙞𝙤́𝙣𝙚𝙨", description: "𝑯𝒂𝒄𝒆𝒓 𝒒𝒖𝒆 𝒆𝒍 𝒃𝒐𝒕 𝒓𝒆𝒂𝒄𝒄𝒊𝒐́𝒏𝒆 𝒂𝒍 𝒆𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆", rowId: `${usedPrefix + command} reaction`},
{title: "🪄 𝘼𝙪𝙩𝙤𝙨𝙩𝙞𝙘𝙠𝙚𝙨", description: "𝑯𝒂𝒄𝒆𝒓 𝒒𝒖𝒆 𝒕𝒐𝒅𝒂𝒔 𝒍𝒂𝒔 𝒊𝒎𝒂𝒈𝒆𝒏,𝒗𝒊́𝒅𝒆𝒐,𝒈𝒊𝒇, 𝒔𝒆 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒓𝒂́ 𝒆𝒍 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒂𝒖𝒕𝒐𝒎𝒂́𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆", rowId: `${usedPrefix + command} autosticker`},
{title: "🚫 𝘼𝙣𝙩𝙞𝙘𝙖𝙡𝙡", description: "𝑩𝒍𝒐𝒒𝒖𝒆𝒂 𝒂𝒍 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒒𝒖𝒆 𝒍𝒍𝒂𝒎𝒆 𝒐 𝒉𝒂𝒈𝒂 𝒗𝒊𝒅𝒆𝒐 𝒍𝒍𝒂𝒎𝒂𝒅𝒂 𝒂𝒍 𝒃𝒐𝒕", rowId: `${usedPrefix + command} anticall`},
{title: "🎠 𝙎𝙩𝙞𝙘𝙠𝙚𝙧𝙨", description: "𝑷𝒂𝒓𝒂 𝑨𝒄𝒕𝒊𝒗𝒂/𝒅𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂 𝑳𝒐𝒔 𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒔", rowId: `${usedPrefix + command} stickers`},
{title: "⚜️ 𝙋𝙘𝙤𝙣𝙡𝙮", description: "𝑯𝒂𝒄𝒆𝒓 𝒒𝒖𝒆 𝒃𝒐𝒕 𝒔𝒐𝒍𝒐 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒆𝒍 𝒄𝒉𝒂𝒕 𝒑𝒓𝒊𝒗𝒂𝒅𝒐", rowId: `${usedPrefix + command} pconly`},
{title: "🕸️ | 𝘼𝙣𝙩𝙞𝙩𝙧𝙖𝙗𝙖", description: "𝑨𝒄𝒕𝒊𝒗𝒂/𝒅𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂 𝑬𝒍 𝒂𝒏𝒕𝒊𝒕𝒓𝒂𝒃𝒂", rowId: `${usedPrefix + command} antitraba`},
{title: "💬 | 𝘼𝙣𝙩𝙞𝙥𝙧𝙞𝙫𝙖𝙙𝙤", description: "𝑬𝒍 𝒃𝒐𝒕 𝒃𝒍𝒐𝒒𝒖𝒆𝒂 𝒂𝒍 𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒒𝒖𝒆 𝒍𝒆 𝒉𝒂𝒃𝒍𝒆 𝒆𝒍 𝒑𝒓𝒊𝒗𝒂𝒅𝒐 𝒂𝒖𝒕𝒐𝒎𝒂́𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆", rowId: `${usedPrefix + command} antiprivado`},
{title: "⚜️ 𝙂𝙘𝙤𝙣𝙡𝙮", description: "𝑯𝒂𝒄𝒆𝒓 𝒒𝒖𝒆 𝒃𝒐𝒕 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒔𝒐𝒍𝒐 𝒆𝒍 𝒄𝒉𝒂𝒕 𝒈𝒓𝒖𝒑𝒐𝒔", rowId: `${usedPrefix + command} gconly`},
]}, ]
let name = await conn.getName(m.sender)

const listMessage = {
text: '',
footer: `╭━━━[ *𝘼𝙟𝙪𝙨𝙩𝙚𝙨* ]━━━⬣
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌟 *¡𝑯𝒐𝒍𝒂* ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╰━━━━━━━❰ *${vs}* ❱━━━━━━⬣
╭━━━━━━━━━━━━━⬣
┃ *𝑷𝒓𝒆𝒔𝒊𝒐𝒏𝒆́ 𝒆𝒔𝒕𝒆 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒐 𝒖𝒔𝒆*
┃ *𝑳𝒐𝒔 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒅𝒆 𝒆𝒔𝒕𝒆 𝒎𝒆𝒏𝒔𝒂𝒋𝒆*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚙️ _${usedPrefix}on *:* off *bienvenida | welcome*_
┃⚙️ _${usedPrefix}on *:* off *publico | public*_
┃⚙️ _${usedPrefix}on *:* off *modocaliente | modohorny*_
┃⚙️ _${usedPrefix}on *:* off *antienlace | antilink*_
┃⚙️ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
┃⚙️ _${usedPrefix}on *:* off *avisos | detect*_
┃⚙️ _${usedPrefix}on *:* off *autonivel | autolevelup*_
┃⚙️ _${usedPrefix}on *:* off *restringir | restrict*_
┃⚙️ _${usedPrefix}on *:* off *soloprivados | pconly*_
┃⚙️ _${usedPrefix}on *:* off *sologrupos | gconly*_
┃⚙️ _${usedPrefix}on *:* off *autovisto | autoread*_
┃⚙️ _${usedPrefix}on *:* off *reaccion | reaction*_
┃⚙️ _${usedPrefix}on *:* off *antiver | antiviewonce*_
┃⚙️ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
┃⚙️ _${usedPrefix}on *:* off *antillamar | anticall*_
┃⚙️ _${usedPrefix}on *:* off *antieliminar | antidelete*_
┃⚙️ _${usedPrefix}on *:* off *stickers*_
┃⚙️ _${usedPrefix}on *:* off *temporal*_
┃⚙️ _${usedPrefix}on *:* off *autosticker*_
┃⚙️ _${usedPrefix}on *:* off *audios*_
┃⚙️ _${usedPrefix}on *:* off *antitraba*
┃⚙️ _${usedPrefix}on *:* off *antiprivado*
╰━━━━━━━━━━━━━⬣
${wm}`,
title: null,
buttonText: "𝘾𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙧",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
    
case 'detect':
case 'avisos':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
    
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
		
case 'antidelete': 
case 'antieliminar':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
    
case 'public':
case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
    
case 'antilink':
case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
    
case 'antilink2':
case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
    
case 'modohorny':
case 'modocaliente':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
    
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
		
//case 'temporal':
//if (m.isGroup) {
//if (!(isAdmin || isOwner)) {
//global.dfail('admin', m, conn)
//throw false
//}}
//chat.temporal = isEnable          
//break
    
case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break
    
case 'autolevelup':
case 'autonivel':
isUser = true
user.autolevelup = isEnable
break
    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
    
case 'reaction':
case 'reaccion':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
case 'antitoxic':
case 'antitoxicos':
case 'antimalos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break
    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
    
case 'antiver':
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
    
case 'restrict':
case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
    
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
    
case 'autoread':
case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
    
case 'anticall':
case 'antillamar':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
    
case 'pconly':
case 'privateonly':
case 'soloprivados':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
    
case 'gconly':
case 'grouponly':
case 'sologrupos':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
 
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
   
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break

case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)   
throw false
}
conn.sendButton(m.chat, `🗂️ 𝙊𝙥𝙘𝙞𝙤́𝙣: ${type} 
🎚️ 𝙀𝙨𝙩𝙖𝙙𝙤: ${isEnable ? '𝘼𝙘𝙩𝙞𝙫𝙖𝙙𝙤' : '𝘿𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤'}
📣 𝙋𝙖𝙧𝙖: ${isAll ? '𝙀𝙨𝙩𝙚 𝙗𝙤𝙩' : isUser ? '' : '𝙀𝙨𝙩𝙚 𝙘𝙝𝙖𝙩'}`, author, null, [[`${isEnable ? '✖️ 𝘿𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 ✖️' : '✔️ 𝘼𝙘𝙩𝙞𝙫𝙖 ✔️'}`, `${isEnable ? `#disable ${type}` : `#enable ${type}`}`], ['👾 𝙈𝙚𝙣𝙪 𝙥𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 👾', '#menu']], m)}
//await conn.sendButton(m.chat, null, ajuste, null, [['🌟 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 | 𝙄𝙉𝙁𝙊 𝙈𝙀𝙉𝙐 🌟', `/infomenu`], ['⚙️ 𝘾𝙀𝙉𝙏𝙍𝙊 𝘿𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉 ⚙️', `/on`]], fkontak, m)
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
