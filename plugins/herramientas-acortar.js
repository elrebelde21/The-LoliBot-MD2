import axiostal from "axios"
import fetch from 'node-fetch'
let handler = async(m, { conn, text, xteamkey }) => {
if (!text) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝘼𝙍𝘼 𝘼𝘾𝙊𝙍𝙏𝘼𝙍`
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `✅ 𝙎𝙀 𝙍𝙀𝘼𝙇𝙄𝙕𝙊 𝘾𝙊𝙉 𝙀𝙓𝙄𝙏𝙊\n\n𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝘼𝙉𝙏𝙀𝙎\n*${json.result}*`.trim()   
m.reply(hasil)
}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.limit = 1
handler.register = true
handler.fail = null
export default handler
