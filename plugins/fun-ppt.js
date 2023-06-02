let handler = async (m, { conn, text, command, usedPrefix, args }) => {
//let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
let pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
// 60000 = 1 minuto // 30000 = 30 segundos // 15000 = 15 segundos // 10000 = 10 segundos
let time = global.db.data.users[m.sender].wait + 40000
let textos = `𝙋𝙄𝙀𝘿𝙍𝘼, 𝙋𝘼𝙋𝙀𝙇, 𝙊 𝙏𝙄𝙅𝙀𝙍𝘼\n\n𝙥𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨:\n${usedPrefix + command} 𝙥𝙞𝙚𝙙𝙧𝙖\n${usedPrefix + command} 𝙥𝙖𝙥𝙚𝙡\n${usedPrefix + command} 𝙩𝙞𝙟𝙚𝙧𝙖\n\n𝙐𝙨𝙚 𝙚𝙣 𝙢𝙞𝙣𝙪𝙨𝙘𝙪𝙡𝙖𝙨\n\n${wm}`
if (new Date - global.db.data.users[m.sender].wait < 40000) return await conn.reply(m.chat, `*🕓 𝙀𝙎𝙋𝙀𝙍𝘼 ${Math.floor((time - new Date()) / 1000)} 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎 𝘼𝙉𝙏𝙀𝙎 𝘿𝙀 𝙋𝙊𝘿𝙀𝙍 𝙑𝙊𝙇𝙑𝙀𝙍 𝘼 𝙅𝙐𝙂𝘼𝙍*`, fkontak, m)
if (!args[0]) return await conn.sendMessage(m.chat, { image: { url: pp }, caption: textos, quoted: fkontak })
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
let textm = text.toLowerCase()  
if (textm == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`*🔰 Empate!*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Premio +500 XP*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*\n*❌ Premio -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*\n*❌ Premio -300 XP*`)
}
} else if (textm == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*\n*❌ Premio -300 XP*`)
}
} else if (textm == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*\n*❌ Premio -300 XP*`)
}
} else if (textm == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*\n*❌ Premio -300 XP*`)
}}
global.db.data.users[m.sender].wait = new Date * 1
}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}