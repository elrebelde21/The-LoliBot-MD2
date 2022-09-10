import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝙀𝙉 𝘾𝙊𝘿𝙄𝙂𝙊 𝙌𝙍`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', wm, m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
handler.limit = 1
handler.register = true
export default handler
