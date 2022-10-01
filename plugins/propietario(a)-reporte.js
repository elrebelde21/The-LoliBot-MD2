let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}*𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙧𝙚𝙥𝙤𝙧𝙩𝙚*\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤:*\n*${usedPrefix + command} el comando ${usedPrefix}los stickers no funka.*`
if (text.length < 8) throw `${fg} ✨ *𝑴𝒊́𝒏𝒊𝒎𝒐 10 𝒄𝒂𝒓𝒂𝒄𝒕𝒆𝒓𝒆𝒔 𝒑𝒂𝒓𝒂 𝒉𝒂𝒄𝒆𝒓 𝒆𝒍 𝒓𝒆𝒑𝒐𝒓𝒕𝒆..*`
if (text.length > 1000) throw `${fg} 😼 *𝑴𝒂́𝒙𝒊𝒎𝒐 1000 𝑪𝒂𝒓𝒂𝒄𝒕𝒆𝒓𝒆𝒔 𝒑𝒂𝒓𝒂 𝒉𝒂𝒄𝒆𝒓 𝒆𝒍 𝒓𝒆𝒑𝒐𝒓𝒕𝒆.*`
let teks = `*╭━━[ 𝑹𝒆𝒑𝒐𝒓𝒕𝒆 ]━━━⬣*\n*┃*\n*┃* *𝑵𝒖́𝒎𝒆𝒓𝒐*\n┃ ✦ Wa.me/${m.sender.split`@`[0]}\n*┃*\n*┃* *𝑴𝒆𝒏𝒔𝒂𝒋𝒆*\n*┃* ✦ ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`
conn.reply('5492266466080@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`╰⊱💚⊱ *𝑬́𝒙𝒊𝒕𝒐𝒔* ⊱💚⊱╮\n\n*𝑬𝒍 𝒓𝒆𝒑𝒐𝒓𝒕𝒆 𝒉𝒂 𝒔𝒊𝒅𝒐 𝒆𝒏𝒗𝒊𝒂𝒅𝒐 𝒂 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 , 𝒕𝒆𝒏𝒅𝒓𝒂́ 𝒖𝒏𝒂 𝒓𝒆𝒔𝒑𝒖𝒆𝒔𝒕𝒂 𝒑𝒓𝒐𝒏𝒕𝒐. 𝑫𝒆 𝒔𝒆𝒓 𝒇𝒂𝒍𝒔𝒐 𝒔𝒆𝒓𝒂́ 𝒊𝒈𝒏𝒐𝒓𝒂𝒅𝒐 𝒆𝒍 𝒓𝒆𝒑𝒐𝒓𝒕𝒆.*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
