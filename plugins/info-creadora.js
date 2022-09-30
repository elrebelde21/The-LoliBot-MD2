import fs from 'fs'
function handler(m, { conn }) {
let vn = './media/creador.mp3'
let text = `
*𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤* 
*Wa.me/5492266466080 (no bot)*
*wa.me/972529277518 (bot)*
*wa.me/12267784150 (bot²)*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫',
body: '𝐂𝐫𝐞𝐚𝐝𝐨𝐫',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/5492266466080`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `🧡 *Eso son los contactos para ti.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k', 'grupos', null, null, [
['🐈 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣', '.infobot'],
['🎁 𝘿𝙤𝙣𝙖𝙧', '.donar'],
['☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤', '/menu']
], m,)
conn.sendFile(m.chat, vn, 'creador.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler
