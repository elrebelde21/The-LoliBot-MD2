let handler = async (m, { conn, usedPrefix }) => { // @${global.db.data.users[m.sender].pasangan.split('@')[0]}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let usuario = conn.getName(who)
let persona = global.db.data.users[m.sender].pasangan

if (global.db.data.users[m.sender].pasangan == "") return await conn.sendButton(m.chat, `*${usuario}* 𝑵𝒐 𝒕𝒊𝒆𝒏𝒆 𝒑𝒂𝒋𝒆𝒓𝒂`, `*_𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒕𝒆𝒏𝒆𝒓 𝒖𝒏𝒂 𝒑𝒂𝒋𝒆𝒓𝒂 𝒖𝒔𝒆𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 ${usedPrefix}pareja etiquetando a alguien._*\n\n` + wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
  
if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return await conn.sendButton(m.chat, `*${usuario}* 💗 𝑬𝒔𝒕𝒂 𝒆𝒏 𝒖𝒏𝒂 𝒓𝒆𝒍𝒂𝒄𝒊𝒐́𝒏 𝒄𝒐𝒏 *${await conn.getName(persona)}* 💖`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m, {contextInfo: { mentionedJid: [ m.sender, who ] }})

conn.sendButton(m.chat, `🤨 𝑷𝒂𝒓𝒆𝒄𝒆 𝒒𝒖𝒆 *${await conn.getName(persona)}* 𝑵𝒐 𝒉𝒂 𝒂𝒄𝒆𝒓𝒕𝒂𝒅𝒐 𝒏𝒊 𝒓𝒆𝒄𝒉𝒂𝒛𝒂𝒅𝒐 𝒕𝒖 𝒑𝒓𝒐𝒑𝒖𝒆𝒔𝒕𝒂 𝒅𝒆 𝒆𝒔𝒕𝒂𝒓 𝒂𝒎𝒃𝒐𝒔 𝒆𝒏 𝒖𝒏𝒂 𝒓𝒆𝒍𝒂𝒄𝒊𝒐́𝒏`, `*_Vista la situación se anulará este pendiente_*\n\n` + wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m, {contextInfo: { mentionedJid: [ persona, m.sender ] }})
global.db.data.users[m.sender].pasangan = ""
}
handler.command = /^(sinceridad|mipareja|miamor|minovio|minovia|mylove)$/i
handler.group = true
export default handler
