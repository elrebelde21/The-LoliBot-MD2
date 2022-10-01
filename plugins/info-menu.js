import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let { money } = global.db.data.users[m.sender]
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
/*
const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀`,
rows: [
{title: "❇️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ❇️", description: null, rowId: `${usedPrefix}menu`},
{title: "✳️ 𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✳️", description: null, rowId: `${usedPrefix}allmenu`},
{title: "✅ 𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅", description: "𝙊𝘽𝙏𝙀𝙉 𝙈𝘼𝙎 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀 THE LOLIBOT-𝙈𝘿", rowId: `${usedPrefix}cuentasgatabot`},
{title: "🎁 𝘿𝙤𝙣𝙖𝙧 🎁", description: "𝙋𝙐𝙀𝘿𝙀𝙎 𝘼𝙋𝙊𝙔𝘼𝙍 𝘿𝙊𝙉𝘼𝙉𝘿𝙊", rowId: `${usedPrefix}menu`},
{title: "💖 𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 💖", description: "𝙐𝙉𝙀𝙏𝙀 𝘼 𝙇𝘼 𝘾𝙊𝙈𝙐𝙉𝙄𝘿𝘼𝘿 LOLIBOT", rowId: `${usedPrefix}gruposgb`},
{title: "🔰 𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤𝙨 🔰", description: "𝙂𝙍𝙐𝙋𝙊𝙎 𝙀𝙉 𝘿𝙊𝙉𝘿𝙀 The LOLIBOT-𝙈𝘿 𝙃𝘼 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝘿𝙊", rowId: `${usedPrefix}listagrupos`},
{title: "🔰 𝙀𝙨𝙩𝙖𝙙𝙤 🔰", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙀𝙎𝙏𝘼𝘿𝙊 𝙔 𝙈𝘼𝙎 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉", rowId: `${usedPrefix}estado`},   
{title: "⚜️ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙖 ⚜️", description: "𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙏𝘼𝙇𝙇𝘼𝘿𝘼", rowId: `${usedPrefix}infogata`},    
{title: "🪄 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 𝙙𝙚 𝙢𝙞 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 🪄", description: "𝙈𝙄 𝘾𝙍𝙀𝘼𝘿𝙊𝙍", rowId: `${usedPrefix}creadora`},      
{title: "🚀 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙋𝙞𝙣𝙜 🚀", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿", rowId: `${usedPrefix}ping`},    
]}, ] */
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menuvid1.mp4'  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let menu = `
╭━━〔 *${wm}* 〕━━⬣
┃💗 *¡𝙃𝙤𝙡𝙖!* ${username}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌟🌟🌟🌟🌟🌟🌟🌟🌟
┃➤ *𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖 ➺ ${exp}*
┃➤ *𝙉𝙞𝙫𝙚𝙡 ➺ ${level}*
┃➤ *𝙍𝙤𝙡 ➺* ${role}
┃➤ *𝙡𝙤𝙡𝙞𝙘𝙤𝙞𝙣𝙨 ➺ $ ${money}*
┃➤ *𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨 ➺ ${Object.keys(global.db.data.users).length}* 
┃➤ *𝘼𝙘𝙩𝙞𝙫𝙤𝙨 ➺ ${uptime}*
┃🌟🌟🌟🌟🌟🌟🌟🌟🌟
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 〔 𝙄𝙣𝙛𝙤𝙢𝙚𝙣𝙪 〕
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃❏ ➺ _${usedPrefix}cuentaslolibot
┃❏ ➺ _${usedPrefix}gruposgrupos
┃❏ ➺ _${usedPrefix}donar
┃❏ ➺ _${usedPrefix}listagrupos
┃❏ ➺ _${usedPrefix}grouplist_
┃❏ ➺ _${usedPrefix}estado
┃❏ ➺ _${usedPrefix}infobot_
┃❏ ➺ _${usedPrefix}creador | owner_
┃❏ ➺ _${usedPrefix}velocidad | ping_
┃❏ ➺ _Bot_ 
┃❏ ➺ _${usedPrefix}enable_
╰━━━━━━━━━━━━━━━━━━━⬣
  `.trim()
conn.sendHydrated(m.chat, menu, wm, pp, 'https://github.com/elrebelde21/The-LoliBot-MD', '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 💫', '.allmenu'],
['𝙈𝙚𝙣𝙪 𝙙𝙚𝙨𝙥𝙡𝙚𝙜𝙖𝙗𝙡𝙚 🌟', '/menulista'],
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ⚡', '#menu']
], m,)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(infomenu)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
