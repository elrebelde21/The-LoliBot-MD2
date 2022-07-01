import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
const sections = [
{
title: `𝑳𝒊𝒔𝒕𝒂 𝒅𝒆𝒔𝒑𝒍𝒆𝒈𝒂𝒃𝒍𝒆`,
rows: [
      {title: "🙂 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 🙃", description: null, rowId: `${usedPrefix}creadora`},
      {title: "🚀 𝑽𝒆𝒍𝒐𝒄𝒊𝒅𝒂𝒅 | 𝒔𝒆𝒆𝒅 🚀", description: null, rowId: `${usedPrefix}ping`},
      {title: "🎁 𝑴𝒆𝒏𝒖 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒐 🎁", description: null, rowId: `${usedPrefix}allmenu`},
      {title: "🌟 𝑰𝒏𝒇𝒐𝒎𝒂𝒄𝒊𝒐𝒏 🌟", description: null, rowId: `${usedPrefix}infomenu`},
      {title: "🎡 𝑱𝒖𝒆𝒈𝒐𝒔 𝒅𝒊𝒏𝒂𝒎𝒊𝒄𝒐𝒔 🎡", description: null, rowId: `${usedPrefix}juegosmenu`},
      {title: "🔊 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒂𝒖𝒅𝒊𝒐𝒔 🔊", description: null, rowId: `${usedPrefix}audios`},
      {title: "🔰 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒈𝒓𝒖𝒑𝒐𝒔 🔰", description: null, rowId: `${usedPrefix}grupomenu`},
      {title: "📲 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔 📲", description: null, rowId: `${usedPrefix}descargasmenu`},
      {title: "🔍 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒃𝒖𝒔𝒒𝒖𝒆𝒂𝒅𝒂  🔍", description: null, rowId: `${usedPrefix}buscarmenu`},
      {title: "💎 𝑴𝒆𝒏𝒖 𝒑𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐(𝒂) 💎", description: null, rowId: `${usedPrefix}ownermenu`},
      

]}, ]
 
let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)
const listMessage = {
text: `╭─────────────────────❀\n│${ucapan()}\n│💖•.¸💝¸.• *${name}* •.¸💝¸.•💖\n╰─────────────────────❀
╭━━━〔 *${wm}* 〕━━━⬣
┃✪ *𝑻𝒊𝒆𝒎𝒑𝒐 𝒂𝒄𝒕𝒖𝒂𝒍*	    
┃➺ ${time}   
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *𝑨𝒄𝒕𝒊𝒗𝒐 𝒅𝒖𝒓𝒂𝒏𝒕𝒆* 
┃➺ ${uptime} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *𝑴𝒐𝒅𝒐*
┃➺ ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊'}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *𝑽𝒆𝒓𝒔𝒊𝒐𝒏 𝒅𝒆 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫*
┃➺ ${vs}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *𝑼𝒔𝒖𝒂𝒓𝒊𝒐(s)*
┃➺ ${Object.keys(global.db.data.users).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *𝑪𝒉𝒂𝒕(𝒔) 𝑷𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐(𝒔)*
┃➺ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *𝑼𝒔𝒖𝒂𝒓𝒊𝒐(𝒔) 𝑷𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐(𝒔)*
┃➺ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
╰━━━━━━━━━━━━━━━━━━━━━⬣`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝙢𝙚𝙣𝙪", 
sections }

await conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾(𝙰) | 𝚆𝙴𝙻𝙲𝙾𝙼𝙴* 👋"
  if (time >= 4) {
    res = "🌇 *𝙱𝚞𝚎𝚗𝚘𝚜 𝙳𝚒𝚊𝚜* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *𝙱𝚞𝚎𝚗𝚊𝚜 𝚃𝚊𝚛𝚍𝚎𝚜* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *𝙱𝚞𝚎𝚗𝚊𝚜 𝚃𝚊𝚛𝚍𝚎𝚜* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *𝙱𝚞𝚎𝚗𝚊𝚜 𝚗𝚘𝚌𝚑𝚎𝚜* 💫"
  }
  return res
}
