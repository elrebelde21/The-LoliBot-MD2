// creditos a https://github.com/FG98F
import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝑫𝒆𝒃𝒆 𝒅𝒆 𝒆𝒕𝒊𝒒𝒖𝒆𝒕𝒂𝒔 𝒂𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒍𝒂 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅 𝒅𝒆 𝒅𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔`
if (isNaN(txt)) throw `${mg}𝑺𝒊𝒏 𝒔𝒊́𝒎𝒃𝒐𝒍𝒐𝒔, 𝒔𝒐𝒍𝒐 𝒊𝒏𝒈𝒓𝒆𝒔𝒆 𝒏𝒖́𝒎𝒆𝒓𝒐𝒔`
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw `${mg}𝑬𝒍 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒎𝒊́𝒏𝒊𝒎𝒐 𝒑𝒂𝒓𝒂 𝒅𝒊𝒂𝒎𝒂𝒏𝒕𝒆 𝒆𝒔  *1*`
let users = global.db.data.users
users[who].limit += dmt
//m.reply(`≡ *💎 𝙰𝙽̃𝙰𝙳𝙸𝙳𝙾*
//┌──────────────
//▢ *𝚃𝚘𝚝𝚊𝚕:* ${dmt}
//└──────────────`)
conn.sendHydrated(m.chat, `╭[ 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆 💎 ]⬣\n┃\n┃ღ 𝑷𝒂𝒓𝒂:\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ 𝒔𝒆 𝒍𝒆 𝒂𝒏̃𝒂𝒅𝒊𝒐́\n┃ღ *${dmt} Diamante(s)* 💎\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 💗', '.rpgmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m)
}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['añadirdiamantes', 'dardiamantes', 'dardiamante'] 
handler.rowner = true
export default handler
