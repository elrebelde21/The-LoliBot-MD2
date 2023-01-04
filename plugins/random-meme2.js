import hispamemes from 'hispamemes'
let handler = async (m, { conn, usedPrefix, command }) => {
const meme = hispamemes.meme()
await delay(5000)
await conn.sendButton(m.chat, `*_😹${command}😹_*`.trim(), wm, meme, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 🆕', `/${command}`]], m)
}
handler.command = ['meme2', 'memes2'] 
handler.level = 3
export default handler
const delay = time => new Promise(res => setTimeout(res, time))