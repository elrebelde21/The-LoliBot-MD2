import db from '../lib/database.js'
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
if (isAdmin && chat.antifakes) return 
if (isBotAdmin) {
	
if (m.sender.startsWith('91' || '91')) {
global.db.data.users[m.sender].banned = true
await m.reply('  𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒏𝒐 𝒔𝒆 𝒑𝒆𝒓𝒎𝒊𝒕𝒆 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒇𝒂𝒌𝒆𝒔 🤨 ')
await m.reply(' 𝑬𝒙𝒑𝒖𝒍𝒔𝒂𝒓 𝒂𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐🤑 ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
		
if (m.sender.startsWith('92' || '92')) {
global.db.data.users[m.sender].banned = true
await m.reply(' 𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒏𝒐 𝒔𝒆 𝒑𝒆𝒓𝒎𝒊𝒕𝒆 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒇𝒂𝒌𝒆𝒔 😯 ')
await m.reply(' 𝑬𝒙𝒑𝒖𝒍𝒔𝒂𝒓 𝒂𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
await m.reply(' 𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒏𝒐 𝒔𝒆 𝒑𝒆𝒓𝒎𝒊𝒕𝒆 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒇𝒂𝒌𝒆𝒔 ')
await m.reply(' 𝑬𝒙𝒑𝒖𝒍𝒔𝒂𝒓 𝒂𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 🤑 ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('210' || '210')) {
global.db.data.users[m.sender].banned = true
await m.reply('  𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒏𝒐 𝒔𝒆 𝒑𝒆𝒓𝒎𝒊𝒕𝒆 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒇𝒂𝒌𝒆𝒔 😯 ')
await m.reply(' 𝑬𝒙𝒑𝒖𝒍𝒔𝒂𝒓 𝒂𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 🤑 ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('61' || '61')) {
global.db.data.users[m.sender].banned = true
await m.reply(' 𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒏𝒐 𝒔𝒆 𝒑𝒆𝒓𝒎𝒊𝒕𝒆 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒇𝒂𝒌𝒆𝒔 🤨')
await m.reply(' 𝑬𝒙𝒑𝒖𝒍𝒔𝒂𝒓 𝒂𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('9' || '9')) {
global.db.data.users[m.sender].banned = true
await m.reply('  𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒏𝒐 𝒔𝒆 𝒑𝒆𝒓𝒎𝒊𝒕𝒆 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒇𝒂𝒌𝒆𝒔 🤨 ')
await m.reply(' 𝑬𝒙𝒑𝒖𝒍𝒔𝒂𝒓 𝒂𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 🤑 ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('7' || '7')) {
global.db.data.users[m.sender].banned = true
await m.reply('  𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒏𝒐 𝒔𝒆 𝒑𝒆𝒓𝒎𝒊𝒕𝒆 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒇𝒂𝒌𝒆𝒔 🤨 ')
await m.reply(' 𝑬𝒙𝒑𝒖𝒍𝒔𝒂𝒓 𝒂𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 🤑 ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('62' || '62')) {
global.db.data.users[m.sender].banned = true
await m.reply('  𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒏𝒐 𝒔𝒆 𝒑𝒆𝒓𝒎𝒊𝒕𝒆 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒇𝒂𝒌𝒆𝒔 🤨 ')
await m.reply(' 𝑬𝒙𝒑𝒖𝒍𝒔𝒂𝒓 𝒂𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 🤑 ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('4' || '4')) {
global.db.data.users[m.sender].banned = true
await m.reply('  𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒏𝒐 𝒔𝒆 𝒑𝒆𝒓𝒎𝒊𝒕𝒆 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒇𝒂𝒌𝒆𝒔 🤨 ')
await m.reply(' 𝑬𝒙𝒑𝒖𝒍𝒔𝒂𝒓 𝒂𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
}
}
export default handler
