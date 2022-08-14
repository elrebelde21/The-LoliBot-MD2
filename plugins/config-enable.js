let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => { 
const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉`,
rows: [
{title: "🎉 𝙒𝙀𝙇𝘾𝙊𝙈𝙀", description: "𝘾𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙙𝙚 𝙡𝙖 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙖 𝙥𝙖𝙧𝙖 𝙚𝙡 𝙂𝙧𝙪𝙥𝙤", rowId: `${usedPrefix + command} welcome`},
{title: "🌐 𝙈𝙊𝘿𝙊 𝙋𝙐𝘽𝙇𝙄𝘾𝙊", description: "𝙐𝙨𝙖𝙧 𝙚𝙡 𝘽𝙤𝙩 𝙚𝙣 𝙈𝙤𝙙𝙤 𝙋𝙪𝙗𝙡𝙞𝙘𝙤 𝙤 𝙋𝙧𝙞𝙫𝙖𝙙𝙤", rowId: `${usedPrefix + command} public`},
{title: "🔞 𝙈𝙊𝘿𝙊 𝙃𝙊𝙍𝙉𝙔 +18", description: "𝙈𝙤𝙨𝙩𝙧𝙖𝙧 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 +18", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆", description: "𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤𝙨 𝙙𝙚 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 2", description: "𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙦𝙪𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙜𝙖 𝙝𝙩𝙩𝙥𝙨", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔔  𝘿𝙀𝘾𝙏𝙀𝘾𝙏", description: "𝙉𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤𝙣𝙚𝙨 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤", rowId: `${usedPrefix + command} detect`},    
{title: "🆙 𝘼𝙐𝙏𝙊𝙇𝙀𝙑𝙀𝙇𝙐𝙋", description: "𝙎𝙪𝙗𝙚 𝙙𝙚 𝙣𝙞𝙫𝙚𝙡 𝘼𝙪𝙩𝙤𝙢á𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚 𝙚𝙣 𝘾𝙝𝙖𝙩𝙨", rowId: `${usedPrefix + command} autolevelup`},    
{title: "⛔ 𝙍𝙀𝙎𝙏𝙍𝙄𝘾𝙏", description: "𝙐𝙨𝙖𝙧 𝙡𝙖𝙨 𝙛𝙪𝙣𝙘𝙞𝙤𝙣𝙚𝙨 𝙥𝙖𝙧𝙖 𝙨𝙖𝙘𝙖𝙧 𝙮/𝙤 𝙖ñ𝙖𝙙𝙞𝙧 𝙚𝙣 𝙚𝙡 𝙂𝙧𝙪𝙥𝙤", rowId: `${usedPrefix + command} restrict`},    
{title: "✅ 𝘼𝙐𝙏𝙊𝙍𝙀𝘼𝘿", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙚𝙡 𝘽𝙤𝙩 𝙩𝙚𝙣𝙜𝙖 𝙡𝙤𝙨 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙘𝙤𝙢𝙤 𝙇𝙚í𝙙𝙤", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 𝘼𝙐𝘿𝙄𝙊𝙎", description: "𝙐𝙨𝙖𝙧 𝙡𝙤𝙨 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙙𝙚 𝘼𝙪𝙙𝙞𝙤𝙨\n𝙐𝙨𝙚 𝘼𝙪𝙙𝙞𝙤 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨", rowId: `${usedPrefix + command} audios`},
{title: "🐈 𝘽𝙊𝙏 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇 ", description: "𝙋𝙖𝙧𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙧 𝙤 𝙣𝙤 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙨𝙚 𝙪𝙣𝙖 𝙩𝙚𝙢𝙥𝙤𝙧𝙖𝙡𝙢𝙚𝙣𝙩𝙚 𝙚𝙣 𝙂𝙧𝙪𝙥𝙤𝙨", rowId: `${usedPrefix + command} temporal`},
{title: "👀 antiviewonce", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙣𝙖𝙙𝙖 𝙨𝙚 𝙤𝙘𝙪𝙡𝙩𝙚 𝙚𝙣 𝙂𝙧𝙪𝙥𝙤𝙨", rowId: `${usedPrefix + command} antiver`},
{title: "🪄 𝘼𝙐𝙏𝙊𝙎𝙏𝙄𝘾𝙆𝙀𝙍", description: "𝙏𝙤𝙙𝙖 𝙞𝙢𝙖𝙜𝙚𝙣, 𝙫𝙞𝙙𝙚𝙤, 𝙂𝙞𝙛, 𝙚𝙣𝙡𝙖𝙘𝙚 𝙟𝙥𝙜 𝙎𝙚 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧𝙖 𝙚𝙣 𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘼𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚", rowId: `${usedPrefix + command} autosticker`},
{title: "🎠 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙨𝙚 𝙚𝙣𝙫𝙞𝙚 𝙨𝙩𝙞𝙘𝙠𝙚𝙧𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩", rowId: `${usedPrefix + command} stickers`},
{title: "⚜️ 𝙋𝘾𝙊𝙉𝙇𝙔", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙚𝙡 𝘽𝙤𝙩 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙨𝙤𝙡𝙤 𝙚𝙣 𝘾𝙝𝙖𝙩𝙨 𝙋𝙧𝙞𝙫𝙖𝙙𝙤𝙨", rowId: `${usedPrefix + command} pconly`},
{title: "⚜️ 𝙂𝘾𝙊𝙉𝙇𝙔", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙚𝙡 𝘽𝙤𝙩 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙨𝙤𝙡𝙤 𝙚𝙣 𝘾𝙝𝙖𝙩𝙨 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤𝙨", rowId: `${usedPrefix + command} gconly`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: '*~ CENTRO DE CONFIGURACIÓN*',
footer: `╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝐇𝐎𝐋𝐀, ${name}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┣❧ *𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝚄𝙽𝙰 𝙳𝙴 𝙻𝙰𝚂 𝙾𝙲𝙿𝙸𝙾𝙽𝙴𝚂 𝚀𝚄𝙴 𝚂𝙰𝙻𝙴𝙽 𝙴𝙽 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙻𝙸𝚂𝚃𝙰 𝙾 𝙳𝙰 𝙲𝙻𝙸𝙲𝙺 𝙴𝙽 𝙰𝙻𝙶𝚄𝙽 𝙱𝙾𝚃𝙾𝙽 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ℹ️ _${usedPrefix}enable *welcome*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *welcome*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *temporal*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *temporal*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *temporal*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *temporal*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiviewonce*=
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiviewonce*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autosticker*_
┗━━━━━━━━━━━━━┛
${wm}`, 
title: null,
buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
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
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'modohorny':
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
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'antiver':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
case 'restrict':
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
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
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
conn.sendButton(m.chat, `🗂️ 𝐎𝐏𝐂𝐈𝐎𝐍: ${type} 
🎚️ 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'}
📣 𝐏𝐀𝐑𝐀: ${isAll ? '𝙴𝚂𝚃𝙴 𝙱𝙾𝚃' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'}`, author, null, [[`${isEnable ? '✖️ 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 ✖️' : '✔️ 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 ✔️'}`, `${isEnable ? `#disable ${type}` : `#enable ${type}`}`], ['👾 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 👾', '#menu']], m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
