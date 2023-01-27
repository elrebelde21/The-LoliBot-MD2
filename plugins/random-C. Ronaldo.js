import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
await delay(5000)
conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['⚽ 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo', 'cr7']
handler.tags = ['internet']
handler.command = /^(cristianoronaldo|cr7)$/i
handler.money = 25
export default handler
const delay = time => new Promise(res => setTimeout(res, time))