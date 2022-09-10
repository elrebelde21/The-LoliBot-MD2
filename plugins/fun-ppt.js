let handler = async (m, { conn, text, command, usedPrefix, args }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
if (!args[0]) throw conn.sendHydrated(m.chat, '𝙋𝙞𝙚𝙙𝙧𝙖, 𝙥𝙖𝙥𝙚𝙡, 𝙤 𝙩𝙞𝙟𝙚𝙧𝙖𝙨\n𝙋𝙪𝙚𝙙𝙚 𝙪𝙨𝙖𝙧 𝙡𝙤𝙨 𝙗𝙤𝙩𝙤𝙣𝙚𝙨 𝙥𝙖𝙧𝙖 𝙟𝙪𝙜𝙖𝙧 𝙤 𝙩𝙖𝙢𝙗𝙞𝙚́𝙣 𝙥𝙪𝙚𝙙𝙚 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n.ppt 𝙥𝙞𝙚𝙙𝙧𝙖\n.ppt 𝙥𝙖𝙥𝙚𝙡\n.ppt 𝙩𝙞𝙟𝙚𝙧𝙖\n\n𝙐𝙨𝙚 𝙚𝙣 𝙢𝙞𝙣𝙪𝙨𝙘𝙪𝙡𝙖𝙨', wm, pp, null, null, null, null, [
['𝙋𝙞𝙚𝙙𝙧𝙖 🥌', `${usedPrefix + command} piedra`],
['𝙥𝙖𝙥𝙚𝙡 📄', `${usedPrefix + command} papel`],
['𝙩𝙞𝙟𝙚𝙧𝙖 ✂️', `${usedPrefix + command} tijera`]
], m)
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`🔰 𝙀𝙈𝙋𝘼𝙏𝙀! 🤝\n\n👉🏻 𝑻𝒖: ${text}\n👉🏻 𝑬𝒍 𝒃𝒐𝒕: ${astro}\n🎁 𝑷𝒓𝒆𝒎𝒊𝒐 +500 𝑿𝑷`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉\n\n👉🏻 𝑻𝒖: ${text}\n👉🏻 𝑬𝒍 𝒃𝒐𝒕: ${astro}\n🎁 𝑷𝒓𝒆𝒎𝒊𝒐 +1000 𝑿𝑷`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡\n\n👉🏻 𝑻𝒖: ${text}\n👉🏻 𝑬𝒍 𝒃𝒐𝒕: ${astro}\n❌ 𝑷𝒓𝒆𝒎𝒊𝒐 -300 𝑿𝑷`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉\n\n👉🏻 𝑻𝒖: ${text}\n👉🏻 𝑬𝒍 𝒃𝒐𝒕: ${astro}\n🎁 𝑷𝒓𝒆𝒎𝒊𝒐 +1000 𝑿𝑷`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡\n\n👉🏻 𝑻𝒖: ${text}\n👉🏻 𝑬𝒍 𝒃𝒐𝒕: ${astro}\n❌ 𝑷𝒓𝒆𝒎𝒊𝒐 -300 𝑿𝑷`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉\n\n👉🏻 𝑻𝒖: ${text}\n👉🏻 𝑬𝒍 𝒃𝒐𝒕: ${astro}\n🎁 𝑷𝒓𝒆𝒎𝒊𝒐 +1000 𝑿𝑷`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡\n\n👉🏻 𝑻𝒖: ${text}\n👉🏻 𝑬𝒍 𝒃𝒐𝒕: ${astro}\n❌ 𝑷𝒓𝒆𝒎𝒊𝒐 -300 𝑿𝑷`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉\n\n👉🏻 𝑻𝒖: ${text}\n👉🏻 𝑬𝒍 𝒃𝒐𝒕: ${astro}\n🎁 𝑷𝒓𝒆𝒎𝒊𝒐 +1000 𝑿𝑷`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡\n\n👉🏻 𝑻𝒖: ${text}\n👉🏻 𝑬𝒍 𝒃𝒐𝒕: ${astro}\n❌ 𝑷𝒓𝒆𝒎𝒊𝒐 -300 𝑿𝑷`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉\n\n👉🏻 𝑻𝒖: ${text}\n👉🏻 𝑬𝒍 𝒃𝒐𝒕: ${astro}\n🎁 𝑷𝒓𝒆𝒎𝒊𝒐 +1000 𝑿𝑷`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡\n\n👉🏻 𝑻𝒖: ${text}\n👉🏻 𝑬𝒍 𝒃𝒐𝒕: ${astro}\n❌ 𝑷𝒓𝒆𝒎𝒊𝒐 -300 𝑿𝑷`)
}
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler