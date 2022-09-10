let handler = async (m, { conn, text, usedPrefix, command }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘼𝙇 𝙌𝙐𝙀 𝙎𝙀 𝙇𝙀 𝙃𝘼𝙍𝘼 𝙎𝙋𝘼𝙈\n*❊ ${usedPrefix + command} numero|texto|cantidad*\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*❊ ${usedPrefix + command} 999999999999|Holaaa|35*`
if (!pesan) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘼𝙇 𝙌𝙐𝙀 𝙎𝙀 𝙇𝙀 𝙃𝘼𝙍𝘼 𝙎𝙋𝘼𝙈\n*❊ ${usedPrefix + command} numero|texto|cantidad*\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*❊ ${usedPrefix + command} 999999999999|Holaaa|35*`
if (jumlah && isNaN(jumlah)) throw `𝙀𝙉 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙄𝙍 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘼𝙇 𝙌𝙐𝙀 𝙎𝙀 𝙇𝙀 𝙃𝘼𝙍𝘼 𝙎𝙋𝘼𝙈\n*❊ ${usedPrefix + command} numero|texto|cantidad*\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*❊ ${usedPrefix + command} 999999999999|Holaaa|35*`
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 5) throw `${fg}𝙈𝙄𝙉𝙄𝙈𝙊 *5* 𝙈𝙀𝙉𝙎𝘼𝙅𝙀𝙎 𝙋𝘼𝙍𝘼 𝙃𝘼𝘾𝙀𝙍 𝙀𝙇 𝙎𝙋𝘼𝙈`
await m.reply(`${eg}𝙀𝙇 𝙎𝙋𝘼𝙈 𝙎𝙀 𝙀𝙉𝙑𝙄𝙊 *${fixedJumlah}* 𝙑𝙀𝘾𝙀𝙎 𝘼 *${nomor}*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.level = 8
handler.limit = 80
handler.register = true
export default handler 
