import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = '.media/menus/Menu2.jpg'
wm = global.wm
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `𝙇𝙞𝙨𝙩𝙖 𝙙𝙚𝙨𝙥𝙡𝙚𝙜𝙖𝙗𝙡𝙚`,
rows: [
      {title: "🔰 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 🔰", description: null, rowId: `${usedPrefix}creadora`},
      {title: "♨️ 𝙄𝙣𝙨𝙩𝙖𝙡𝙖𝙧 𝙗𝙤𝙩 ♨️", description: null, rowId: `${usedPrefix}instalarbot`},
      {title: "🚀 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 🚀", description: null, rowId: `${usedPrefix}ping`},
      {title: "🌀 𝙈𝙚𝙣𝙪 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 🌀", description: null, rowId: `${usedPrefix}allmenu`},
      {title: "🌟 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤́𝙣 🌟", description: null, rowId: `${usedPrefix}infomenu`},
      {title: "🏅 𝙐𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 🏅", description: null, rowId: `${usedPrefix}listprem`},
      {title: "🎡 𝙅𝙪𝙚𝙜𝙤𝙨 𝙙𝙞𝙣𝙖́𝙢𝙞𝙘𝙤𝙨 🎡", description: null, rowId: `${usedPrefix}juegosmenu`},
      {title: "🔊 𝙈𝙚𝙣𝙪 𝙙𝙚 𝙖𝙪𝙙𝙞𝙤𝙨 🔊", description: null, rowId: `${usedPrefix}audios`},
      {title: "🧰 𝙈𝙚𝙣𝙪 𝙢𝙤𝙙𝙞𝙛𝙞𝙘𝙖𝙧 𝙙𝙚 𝙖𝙪𝙙𝙞𝙤 🧰", description: null, rowId: `${usedPrefix}audioefectomenu`},
      {title: "🔰 𝙈𝙚𝙣𝙪 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤 🔰", description: null, rowId: `${usedPrefix}grupomenu`},
      {title: "⚙️ 𝘾𝙚𝙣𝙩𝙧𝙤 𝙙𝙚 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤́𝙣 ⚙️", description: null, rowId: `${usedPrefix}enable`}, 
      {title: "🎈 𝙈𝙚𝙣𝙪 𝙨𝙩𝙞𝙘𝙠𝙚𝙧𝙨 𝙮 𝙛𝙞𝙡𝙩𝙧𝙤 🎈", description: null, rowId: `${usedPrefix}stickermenu`},
      {title: "🛰️ 𝙈𝙚𝙣𝙪 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙙𝙤 🛰️", description: null, rowId: `${usedPrefix}convertidormenu`},
      {title: "✨ 𝙈𝙚𝙣𝙪 𝙚𝙛𝙚𝙘𝙩𝙤 𝙮 𝙡𝙤𝙜𝙤𝙨 ✨", description: null, rowId: `${usedPrefix}makermenu`}, 
      {title: "📲 𝙈𝙚𝙣𝙪 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖 📲", description: null, rowId: `${usedPrefix}descargasmenu`},
      {title: "🔍 𝙈𝙚𝙣𝙪 𝙙𝙚 𝙗𝙪́𝙨𝙦𝙪𝙚𝙙𝙖 🔍", description: null, rowId: `${usedPrefix}buscarmenu`},
      {title: "⛩️ 𝙍𝙖𝙣𝙙𝙤𝙬 𝙖𝙣𝙞𝙢𝙚 ⛩️", description: null, rowId: `${usedPrefix}randommenu`},
      {title: "🔞 𝙈𝙚𝙣𝙪 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 +18 🔞", description: null, rowId: `${usedPrefix}hornymenu`},
      {title: "💎 𝙈𝙚𝙣𝙪 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤) 💎", description: null, rowId: `${usedPrefix}ownermenu`},
      {title: "📄 𝙏𝙚́𝙧𝙢𝙞𝙣𝙤𝙨 𝙮 𝙘𝙤𝙣𝙙𝙞𝙘𝙞𝙤𝙣𝙚𝙨 📄", description: null, rowId: `términos`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `*╭─────────────────────❊*
┃ *𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➤ *𝙃𝙤𝙡𝙖 𝙘𝙤́𝙢𝙤 𝙚𝙨𝙩𝙖́ ✨ ${name}!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➤ *𝑪𝒓𝒆𝒂𝒅𝒐𝒓 𝒅𝒆𝒍 𝒃𝒐𝒕: 𝒆𝒍 𝒓𝒆𝒃𝒆𝒍𝒅𝒆* 
┃➤ *𝑵𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆𝒍 𝒄𝒓𝒆𝒂𝒅𝒐𝒓:* *wa.me/5492266466080 (No Bot)*
┃➤ *𝑵𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆𝒍 𝒃𝒐𝒕 𝒐𝒇𝒊𝒄𝒊𝒂𝒍:* *wa.me/972529277518*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➤ *𝑻𝒊𝒆𝒎𝒑𝒐 𝒂𝒄𝒕𝒊𝒗𝒐*
┃➺ ${uptime}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➤ *𝑻𝒊𝒆𝒎𝒑𝒐 𝒂𝒄𝒕𝒖𝒂𝒍:* 
┃➺ ${time}  
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➤ *𝑽𝒆𝒓𝒔𝒊𝒐𝒏 𝒅𝒆𝒍 𝒕𝒉𝒆 𝒍𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫*
┃➺ ${vs}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➤ *𝑼𝒔𝒖𝒂𝒓𝒊𝒐(s)*
┃➺ ${Object.keys(global.db.data.users).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➤ *𝑴𝒐𝒅𝒐*
┃➺ ${global.opts['self'] ? '𝒑𝒓𝒊𝒗𝒂𝒅𝒐' : '𝒑𝒖́𝒃𝒍𝒊𝒄𝒐'}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➤ *𝑪𝒉𝒂𝒕 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐*
┃➺ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➤ *𝑼𝒔𝒖𝒂𝒓𝒊𝒐 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐*
┃➺ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
╰─────────────────❊`, footer: `${wm}`, pp,
title: null,
buttonText: "𝑺𝒆𝒍𝒆𝒄𝒄𝒊𝒐́𝒏𝒆𝒔 𝒂𝒒𝒖𝒊́", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
//handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
