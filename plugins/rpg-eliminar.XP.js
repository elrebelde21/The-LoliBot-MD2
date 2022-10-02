import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝑫𝒆𝒃𝒆 𝒅𝒆 𝒆𝒕𝒊𝒒𝒖𝒆𝒕𝒂𝒔 𝒂𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒍𝒂 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅 𝒅𝒆𝒍 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔`
if (isNaN(txt)) throw `${mg}𝑺𝒊𝒏 𝒔𝒊́𝒎𝒃𝒐𝒍𝒐𝒔, 𝒔𝒐𝒍𝒐 𝒊𝒏𝒈𝒓𝒆𝒔𝒆 𝒆𝒍 𝒏𝒖́𝒎𝒆𝒓𝒐`
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp -= pjk
if (exp < 1) throw `${mg}𝑬𝒍 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒎𝒊́𝒏𝒊𝒎𝒐 𝒅𝒆𝒍 𝑬𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒊𝒂 (𝒆𝒙𝒑) 𝒆𝒔 *1*`
let users = global.db.data.users
users[who].exp -= xp

conn.sendHydrated(m.chat, `╭━[ 𝑬𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒊𝒂 ⚡]━⬣\n┃\n┃ღ *𝑷𝒂𝒓𝒂:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *𝑺𝒆 𝒆𝒍𝒊𝒎𝒊𝒏𝒐*\n┃ღ *${xp} EXP* ⚡\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫', null, null, [
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 💗', '.rpgmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m)
}
handler.help = ['addxp <@user>']
handler.tags = ['xp']
handler.command = ['eliminarxp', 'eliminarexp', 'eliminarexperiencia', 'quitarexperiencia', 'quitarxp', 'quitarexp', 'delexperiencia', 'delxp', 'quitarexp'] 
handler.group = true
handler.botAdmin = true
handler.rowner = true
export default handler
