import fs from 'fs'
let handler = async (m, { conn, text }) => {
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
for (let id of chats) { 
conn.sendButton(id, `*╭━━[ 𝘾𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙙𝙤 ]━━━⬣*\n*┃*\n*┃💌* ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`, '✅ *𝑪𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒅𝒐 𝒐𝒇𝒊𝒄𝒊𝒂𝒍*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🎁 𝙄𝙣𝙛𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡', '.cuentasgb'],['🐈 𝙈𝙚𝙣𝙪', '.menu']], false, {
contextInfo: { externalAdReply: {
title: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫',
body: '𝑺𝒖𝒑𝒆𝒓 𝒃𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑', 
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} ✅ *𝑬𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒇𝒖𝒆 𝒆𝒏𝒗𝒊𝒂𝒅𝒐 𝒂 ${chats.length} 𝑪𝒉𝒂𝒕𝒔 𝑷𝒓𝒊𝒗𝒂𝒅𝒐𝒔*\n*𝑬𝒔 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒒𝒖𝒆 𝒏𝒐 𝒔𝒆 𝒉𝒂𝒚𝒂 𝒆𝒏𝒗𝒊𝒂𝒅𝒐 𝒂 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝑪𝒉𝒂𝒕𝒔 𝑷𝒓𝒊𝒗𝒂𝒅𝒐𝒔. 𝑫𝒊𝒔𝒄𝒖𝒍𝒑𝒆.*`)
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicarpv|anunciopv|annunciopv|broadcastchats?|bcc(hats?)?)$/i
handler.exp = 500
handler.rowner = true
export default handler