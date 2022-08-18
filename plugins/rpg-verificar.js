import { createHash } from 'crypto'
let handler = async function (m, { text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝒀𝒂 𝒆𝒔𝒕𝒂́ 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐/𝒂!!\n\n𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒂𝒏𝒖𝒍𝒂𝒓 𝒔𝒖 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒐 𝒖𝒔𝒆 𝒆𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 ${usedPrefix}unreg <numero de serie>*\n\n𝑺𝒊 𝒏𝒐 𝒓𝒆𝒄𝒖𝒆𝒓𝒅𝒂𝒔 𝒔𝒖 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆 𝒔𝒆𝒓𝒊𝒆 𝒖𝒔𝒆 𝒆𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 ${usedPrefix}myns*`
let name = conn.getName(m.sender)
let age = Math.floor(Math.random() * 41)
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 𝙑𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙧 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *𝑵𝑶𝑴𝑩𝑹𝑬:* ${name}
┃ *𝑬𝑫𝑨𝑫:* ${age} años
┃  *𝑩𝑶𝑵𝑶* 
┃ *$350 XP*
┃ *$200 𝑳𝑶𝑳𝑰𝑪𝑶𝑰𝑵𝑺*
┃ *$2 𝑫𝑰𝑨𝑴𝑨𝑵𝑻𝑬*
┃ *𝙉𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚 𝙨𝙚𝙧𝙞𝙚:* 
┃ ${sn}
┗┅ ━━━━━━━━━━━━ ┅ ━`
let author = global.author
conn.sendButton(m.chat, caption, `¡𝒕𝒖 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆 𝒔𝒆𝒓𝒊𝒆 𝒕𝒆 𝒔𝒆𝒓𝒗𝒊𝒓𝒂́ 𝒆𝒏 𝒄𝒂𝒔𝒐 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒂 𝒃𝒐𝒓𝒓𝒂𝒓 𝒔𝒖 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒐!\n${author}`, [['¡¡𝑨𝒉𝒐𝒓𝒂 𝒆𝒔𝒕𝒐𝒚 𝒗𝒆𝒓𝒊𝒇𝒊𝒄𝒂𝒅𝒐/𝒂 ✅!!', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|reg|registrar)$/i
export default handler
