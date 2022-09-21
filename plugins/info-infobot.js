import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let pp = './media/menus/Menu1.jpg'
let vn = './media/infobot.mp3'
let old = performance.now()
let neww = performance.now()
let speed = neww - old

let info = `
╭━━━━[ ${gt} ]━━━━━⬣
┃
┃[🤴🏻] 𝘾𝙧𝙚𝙖𝙙𝙤𝙧: 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[#️⃣] *𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤:*  *wa.me/5492266466080*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[✅] *𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙖𝙘𝙩𝙪𝙖𝙡:*  ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ [🎳] *𝙋𝙧𝙚𝙛𝙞𝙟𝙤:* *${usedPrefix}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[🔐] *𝘾𝙝𝙖𝙩𝙨 𝙥𝙧𝙞𝙫𝙖𝙙𝙤:* *${chats.length - groups.length}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[🦜] *𝘾𝙝𝙖𝙩𝙨 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤𝙨:* *${groups.length}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[💡] *𝘾𝙝𝙖𝙩𝙨 𝙚𝙣 𝙩𝙤𝙩𝙖𝙡:* *${chats.length}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[🚀] *𝘼𝙘𝙩𝙞𝙫𝙞𝙙𝙖𝙙:* *${uptime}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[🎩] *𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨:* *${totalreg}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[🐢] *𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙:* *${speed}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[🌎] 𝐌𝐨𝐝𝐨: ${global.db.data.settings[conn.user.jid].self ? '*𝚙𝚛𝚒𝚟𝚊𝚍𝚘*' : '*𝚙𝚞𝚋𝚕𝚒𝚌𝚘*'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[💬] 𝐀𝐧𝐭𝐢𝐩𝐫𝐢𝐯𝐚𝐝𝐨: ${global.db.data.settings[conn.user.jid].antiprivado ? '*Activado ✔*' : '*Desactivado ✘*'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[📵] 𝐀𝐧𝐭𝐢𝐥𝐥𝐚𝐦𝐚𝐝𝐚: ${global.db.data.settings[conn.user.jid].antiCall ? '*Activado ✔*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[🤖] *𝐁𝐨𝐭𝐞𝐦𝐩𝐨𝐫𝐚:* *${global.db.data.settings[conn.user.jid].temporal ? 'Activado ✔' : 'Desactivado ✘'}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[☑️] *𝘼𝙪𝙩𝙤𝙧𝙚𝙖𝙙:*  ${autoread ? '*Activado ✔*' : '*Desactivado ✘*'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[❗] *𝙍𝙚𝙨𝙩𝙧𝙞𝙘𝙩:* ${restrict ? '*Activado ✔*' : '*Desactivado ✘*'} 
┃
╰━━━[ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 ]━━⬣`.trim()
conn.sendFile(m.chat, vn, 'infobot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })

conn.sendHydrated(m.chat, info, wm, pp, 'https://github.com/elrebelde21/The-LoliBot-MD', '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✨', '#menu'],
['𝘼𝙪𝙙𝙞𝙤𝙨 🔰', '/audios'],
], m,)
//conn.reply(m.chat, info, m)
}
handler.help = ['infobot']
handler.tags = ['info', 'tools']
handler.command = /^(infobot|informacionbot|infogata|informacióngata|informaciongata)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
