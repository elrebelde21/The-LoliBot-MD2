import { createHash } from 'crypto'
let handler = async function (m, { text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `${iig}𝒀𝒂 𝒆𝒔𝒕𝒂́ 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐/𝒂!!\n𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒂𝒏𝒖𝒍𝒂𝒓 𝒔𝒖 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒐 𝒖𝒔𝒆 𝒆𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐\n*${usedPrefix}unreg numero de serie*\n\n𝑺𝒊 𝒏𝒐 𝒓𝒆𝒄𝒖𝒆𝒓𝒅𝒂𝒔 𝒔𝒖 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆 𝒔𝒆𝒓𝒊𝒆 𝒖𝒔𝒆 𝒆𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐\n*${usedPrefix}myns*`
let name = conn.getName(m.sender)
//let age = Math.floor(Math.random() * 40)
let age = `${pickRandom(['10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}`
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
global.db.data.users[m.sender].money += 200
global.db.data.users[m.sender].limit += 2
global.db.data.users[m.sender].exp += 350
let caption = `╭━━━[ *𝙑𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙧* ]━━━━⬣
┃ *𝑵𝑶𝑴𝑩𝑹𝑬* 
┃ ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *𝑬𝑫𝑨𝑫* 
┃ *${age} años*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *𝑩𝑶𝑵𝑶* 
┃ *$350 XP*
┃ *$200 𝑳𝑶𝑳𝑰𝑪𝑶𝑰𝑵𝑺*
┃ *$2 𝑫𝑰𝑨𝑴𝑨𝑵𝑻𝑬*
╰━━━━━━━━━━━━━━━━━━⬣`
//let author = global.author
await conn.sendButton(m.chat, caption, `𝒕𝒖 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆 𝒔𝒆𝒓𝒊𝒆 𝒕𝒆 𝒔𝒆𝒓𝒗𝒊𝒓𝒂́ 𝒆𝒏 𝒄𝒂𝒔𝒐 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒂 𝒃𝒐𝒓𝒓𝒂𝒓 𝒔𝒖 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒐\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n${usedPrefix}unreg numero de serie\n${wm}`, [['𝑨𝒉𝒐𝒓𝒂 𝒆𝒔𝒕𝒐𝒚 𝒗𝒆𝒓𝒊𝒇𝒊𝒄𝒂𝒅𝒐/𝒂!! ✅', '/profile']], m)
await m.reply(`${sn}`) 

}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|registrar|verificado|verificada)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
