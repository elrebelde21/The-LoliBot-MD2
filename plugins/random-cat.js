import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://cataas.com/cat')
let img = await res.buffer()
let caption = `
𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫
`.trim()
await delay(5000)
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.help = ['cat']
handler.tags = ['random']
handler.command = /^cat$/i
handler.register = true
handler.fail = null
export default handler
const delay = time => new Promise(res => setTimeout(res, time))