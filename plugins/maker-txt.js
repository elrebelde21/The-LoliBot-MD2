let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''

if (command == 'txt' || command == 'escribir') {
if (!teks) throw await tr(`⚠️ Que quiere escribir? usar este comando de la siguiente manera\n\nEjemplo: *${usedPrefix + command}* Hola LoliBot`)
let img = `${global.APIs.fgmods.url}/maker/txt?text=${encodeURIComponent(teks)}&apikey=${global.APIs.fgmods.key}`;
conn.sendFile(m.chat, img, 'img.png', `\`✍🏻 ${await tr("ESTA LISTO!!")}\`\n${wm}`, m, null, fake);
}

if (command == 'brat') {    
if (!teks) throw `⚠️ ${await tr("Ingresar en texto\nEjemplo:")} *${usedPrefix + command}* case "hola":\nm.reply("que onda")\nbreak`
let res = `${global.APIs.fgmods.url}/maker/carbon?text=${teks}&apikey=${global.APIs.fgmods.key}`
await conn.sendFile(m.chat, res, 'error.jpg', null, m, null, fake)
}
}
handler.help = ['txt', 'brat']
handler.tags = ['game']
handler.command = ['txt', 'escribir', 'brat']
handler.limit = 1
handler.register = true 
export default handler
  
