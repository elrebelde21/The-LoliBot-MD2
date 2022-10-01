import axiostal from "axios"
import fetch from 'node-fetch'
let handler = async(m, { conn, text, xteamkey }) => {
if (!text) throw `${mg} 𝙔 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚?\n 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙣𝙡𝙖𝙘𝙚 𝙥𝙖𝙧𝙖 𝙖𝙘𝙤𝙧𝙩𝙖`
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `✅ 𝑺𝒆 𝒓𝒆𝒂𝒍𝒊𝒛𝒐  𝒄𝒐𝒏 𝒆́𝒙𝒊𝒕𝒐\n\n𝑬𝒏𝒍𝒂𝒄𝒆𝒔 𝒅𝒆 𝒂𝒏𝒕𝒆𝒔\n*${json.result}*`.trim()   
m.reply(hasil)
}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.limit = 1
handler.register = true
handler.fail = null
export default handler
