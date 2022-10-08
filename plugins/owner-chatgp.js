/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ALBERTO9883
  🍀 • ⚘Alberto Y Ashly⚘
-----------------------------------------------------------------------------------------*/

import { randomBytes } from 'crypto'
let link = /chat.whatsapp.com/
let handler = async (m, { conn, text, groupMetadata }) => {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
if (!text) throw '_⚠ • ️𝙔 𝙚𝙡 𝙩𝙚𝙭𝙩𝙤🤔  𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙚𝙣𝙫𝙞́𝙖 𝙪𝙣 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙖𝙡 𝙩𝙤𝙙𝙤 𝙡𝙤𝙨 𝙜𝙧𝙪𝙥𝙤._'
const linkThisGroup = `${link}`
if (m.text.includes(linkThisGroup)) return conn.reply(m.chat, '❌ *_No puedes espamear enlaces a otros grupos._*', m)
let time = global.db.data.users[m.sender].msgwait + 300000
if (new Date - db.data.users[m.sender].msgwait < 300000) throw `*_⚠️ • 𝑻𝒊𝒆𝒏𝒆 𝒒𝒖𝒆 𝒆𝒔𝒑𝒆𝒓𝒂𝒔 ${msToTime(time - new Date())} 𝑷𝒂𝒓𝒂 𝒗𝒐𝒍𝒗𝒆𝒓 𝒆𝒏𝒗𝒊𝒂𝒓 𝒖𝒏 𝒎𝒆𝒏𝒔𝒂𝒋𝒆._*`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(m.sender)
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫🍁⃨፝⃕✰', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': '🧿 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', 'jpegThumbnail': false }}}
let teks = `*🌺 • 𝙂𝙧𝙪𝙥𝙤:* ${groupMetadata.subject}\n*🍀 • 𝙳𝚎:* ${name}\n*🍁 • 𝙉𝙪́𝙢𝙚𝙧𝙤:* wa.me/${who.split`@`[0]}\n*📧 • 𝙈𝙚𝙣𝙨𝙖𝙟𝙚:* ${text}`
for (let id of groups) {
await conn.sendMessage(id, { text: teks }, { quoted: fakegif })
global.db.data.users[m.sender].msgwait = new Date * 1
}}
handler.command = /^(msg)$/i
handler.owner = true
handler.group = true
export default handler
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return minutes + " m " + seconds + " s " }
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
