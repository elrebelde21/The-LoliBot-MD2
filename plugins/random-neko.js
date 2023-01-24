import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
let nek = ne.split('\n')
let neko = pickRandom(nek)
await delay(5000)
conn.sendButton(m.chat, 'Nyaww~ 🐾💗', wm, neko, [['𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 🆕', `/${command}`]],m)
}
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
export default handler
const delay = time => new Promise(res => setTimeout(res, time))

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
