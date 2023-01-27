import hispamemes from 'hispamemes'
let handler = async (m, { conn, usedPrefix, command }) => {
const meme = hispamemes.meme()
await delay(5000)
await conn.sendButton(m.chat, `*_${command}_*`.trim(), wm, meme, [['𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 🆕', `/${command}`]], m)
}
handler.command = ['meme2', 'memes2'] 
handler.level = 3
handler.money = 20
export default handler
const delay = time => new Promise(res => setTimeout(res, time))