let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`,
rows: [
{title: "✨ | 𝙒𝙚𝙡𝙘𝙤𝙢𝙚", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝙴𝙽 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} welcome`},
{title: "🌎 | 𝙈𝙤𝙙𝙤 𝙥𝙪́𝙗𝙡𝙞𝙘𝙤", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚅𝚄𝙴𝙻𝚅𝙴 𝙳𝙴 𝚄𝚂𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 𝚈/𝙾 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix + command} public`},
{title: "🥵 | 𝙈𝙤𝙙𝙤 +18", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 | 𝘼𝙣𝙩𝙞𝙡𝙞𝙣𝙠", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 | 𝘼𝙣𝙩𝙞𝙡𝙞𝙣𝙠 𝟸", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝚀𝚄𝙴 𝙸𝙽𝙸𝙲𝙸𝙰𝙽 𝙴𝙽 𝙷𝚃𝚃𝙿𝚂", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔎 | 𝘿𝙚𝙘𝙩𝙚𝙘𝙩", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴 𝙽𝚄𝙴𝚅𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 𝙴𝙽 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} detect`},      
{title: "❗ | 𝙍𝙚𝙨𝙩𝙧𝙞𝙘𝙩", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙰𝙲𝙰𝚁 𝙶𝙴𝙽𝚃𝙴 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂", rowId: `${usedPrefix + command} restrict`},    
{title: "☑️ | 𝘼𝙪𝙩𝙤𝙧𝙚𝙖𝙙", description: "𝙼𝙰𝚁𝙲𝙰 𝙰𝚄𝚃𝙾𝙼𝙰𝚃𝙸𝙲𝙰𝙼𝙴𝙽𝚃𝙴 𝙻𝙰𝚂 𝙲𝙾𝙽𝚅𝙴𝚁𝚂𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙲𝙾𝙼𝙾 𝙻𝙴𝙸𝙳𝙾", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | 𝘼𝙪𝙙𝙞𝙤𝙨", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂 𝚂𝙸𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾", rowId: `${usedPrefix + command} audios`},
{title: "👾 | 𝘼𝙪𝙩𝙤𝙨𝙩𝙞𝙘𝙠𝙚𝙨", description: "𝚃𝙾𝙳𝙰𝚂 𝙻𝙰𝚂 𝙸𝙼𝙰𝙶𝙴𝙽𝙴𝚂, 𝚅𝙸𝙳𝙴𝙾𝚂 𝙾 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙴𝙽𝚅𝙸𝙰𝙳𝙾𝚂 𝚂𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝙽 𝙴𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁", rowId: `${usedPrefix + command} autosticker`},
{title: "💬 | 𝙋𝙘𝙤𝙣𝙡𝙮", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | 𝙂𝙘𝙤𝙣𝙡𝙮", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} gconly`},
{title: "❌ | 𝘼𝙣𝙩𝙞𝙫𝙞𝙚𝙣𝙬𝙤𝙣𝙘𝙚", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝚅𝙴𝚁 𝚄𝙽𝙰 𝚂𝙾𝙻𝙰 𝚅𝙴𝚉", rowId: `${usedPrefix + command} antiviewonce`},
{title: "📵 | 𝘼𝙣𝙩𝙞𝙘𝙖𝙡𝙡", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙻𝙻𝙰𝙼𝙰𝙳𝙰", rowId: `${usedPrefix + command} anticall`},
{title: "💬 | 𝘼𝙣𝙩𝙞𝙥𝙧𝙞𝙫𝙖𝙙𝙤", description: "𝙴𝙻 𝙱𝙾𝚃 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝚁𝙰 𝙰 𝙻𝙾𝚂 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚀𝚄𝙴 𝙻𝙴 𝙷𝙰𝙱𝙻𝙴𝙽 𝙰𝙻 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix + command} antiprivado`},
{title: "🆙 𝘼𝙪𝙩𝙤𝙡𝙚𝙫𝙚𝙡𝙪𝙥", description: "𝙿𝚊𝚛𝚊 𝚜𝚞𝚋𝚒𝚛 𝚍𝚎𝚕 𝚗𝚒𝚟𝚎𝚕 𝚊𝚞𝚝𝚘𝚖𝚊́𝚝𝚒𝚌𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚕 𝚎𝚗 𝚌𝚑𝚊𝚝", rowId: `${usedPrefix + command} autolevelup`}, 
{title: "🤑 𝘽𝙤𝙩𝙚𝙢𝙥𝙤𝙧𝙖𝙡 ", description: "𝙿𝚊𝚛𝚊 𝚙𝚎𝚛𝚖𝚒𝚝𝚎 𝚚𝚞𝚎 𝚋𝚘𝚝 𝚜𝚎 𝚞𝚗𝚊𝚛 𝚊𝚞𝚝𝚘𝚖𝚊́𝚝𝚒𝚌𝚊𝚖𝚎𝚗𝚝𝚎 𝚊𝚕 𝚐𝚛𝚞𝚙𝚘", rowId: `${usedPrefix + command} temporal`},
{title: "🤡 𝙍𝙚𝙖𝙘𝙘𝙞𝙤́𝙣𝙚𝙨", description: "𝙷𝚊𝚌𝚎𝚛 𝚚𝚞𝚎 𝚎𝚕 𝚋𝚘𝚝 𝚛𝚎𝚊𝚌𝚌𝚒𝚘́𝚗𝚎 𝚊𝚕 𝚎𝚕 𝚖𝚎𝚗𝚜𝚊𝚓𝚎", rowId: `${usedPrefix + command} reaction`},
{title: "🎠 𝙎𝙩𝙞𝙘𝙠𝙚𝙧𝙨", description: "𝙿𝚊𝚛𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚛/𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚛 𝚕𝚘𝚜 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜", rowId: `${usedPrefix + command} stickers`},
{title: "🤬 | 𝘼𝙣𝙩𝙞𝙩𝙤𝙭𝙞𝙘", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙼𝙰𝙻𝙰 𝙿𝙰𝙻𝙰𝙱𝚁𝙰", rowId: `${usedPrefix + command} antitoxic`},
{title: "🕸️ | 𝘼𝙣𝙩𝙞𝙩𝙧𝙖𝙗𝙖", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝚃𝚁𝙰𝙱𝙰𝚂", rowId: `${usedPrefix + command} antitraba`},
{title: "🤑 | 𝘾𝙝𝙖𝙩𝙗𝙤𝙩", description: "𝙿𝚊𝚛𝚊 𝚙𝚘𝚍𝚎𝚛 𝚑𝚊𝚋𝚕𝚊 𝚌𝚘𝚗𝚖𝚒𝚐𝚘", rowId: `${usedPrefix + command} simi`},
{title: "👎🏻 | 𝘼𝙣𝙩𝙞𝙛𝙖𝙠𝙚𝙨", description: "𝙰𝙻 𝙴𝙽𝚅𝙸𝙰𝚁 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝚄𝙽 𝙽𝚄𝙼𝙴𝚁𝙾 𝙰𝚁𝙰𝙱𝙴, 𝙴𝙻 𝙱𝙾𝚃 𝙻𝙾 𝚂𝙰𝙲𝙰", rowId: `${usedPrefix + command} antifake`},  
]}, ]
//let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `╭━━━[ *𝘼𝙅𝙐𝙎𝙏𝙀𝙎* ]━━━⬣
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌟 *¡Hola!* selecciona aqui para activa o desactivar esta opciones!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╰━━━━━━━━━━━━━⬣
┏━━━━━━━━━━━━━┓
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
┣ ඬ⃟ℹ️ _${usedPrefix}enable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiviewonce*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiviewonce*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *anticall*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *anticall*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiprivado*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiprivado*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antitoxic*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antitoxic*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antitraba*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antitraba*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autolevelup*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autolevelup*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *reaccion*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *reaccion*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *stickers*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *stickers*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *temporal*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *temporal*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *simi*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *simi*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antifakes*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antifakes*_
┗━━━━━━━━━━━━━┛`,
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
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
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
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
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
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break
case 'antitrabas':
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'simi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
case 'antifake':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable  
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
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i
export default handler
