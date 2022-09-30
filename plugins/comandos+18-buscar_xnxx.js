//Creditos https://github.com/BrunoSobrino

import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 +18 𝙚𝙨𝙩𝙖́𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨 𝙪𝙨𝙚 #𝙤𝙣 𝙢𝙤𝙙𝙤𝙝𝙤𝙧𝙣𝙮 𝙥𝙖𝙧𝙖 𝙖𝙘𝙩𝙞𝙫𝙖𝙧\n\n`
if (!text) throw `𝙌𝙪𝙚 𝙗𝙪𝙨𝙘𝙖? \n𝙐𝙨𝙚𝙧 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙙𝙚 𝙚𝙨𝙩𝙖 𝙢𝙖𝙣𝙚𝙧𝙖\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} Sexo*`
try {
//let apikey = keysxxx[Math.floor(Math.random() * keysxxx.length)]
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚 𝙡𝙖 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖 | ${args.join(" ")}`
const sections = [{
title: `𝑪𝒐𝒏𝒕𝒆𝒏𝒊𝒅𝒐 𝒓𝒆𝒍𝒂𝒄𝒊𝒐𝒏𝒂𝒅𝒐`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '𝑬𝒍𝒊𝒋𝒂 𝒚 𝒑𝒓𝒆𝒔𝒊𝒐𝒏𝒆 𝒆𝒏𝒗𝒊𝒂𝒓',
title: " ➤ 𝑪𝒐𝒏𝒕𝒆𝒏𝒊𝒅𝒐 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒅𝒐",
buttonText: "➤ 𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐𝒔",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: `⊹ 𝑺𝒆𝒍𝒆𝒄𝒄𝒊𝒐𝒏𝒆 𝒂𝒒𝒖𝒊 𝑷𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒓 𝒆𝒍 𝒗𝒊́𝒅𝒆𝒐`, rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply(`𝑼𝒇𝒇, 𝒔𝒆 𝒎𝒆 𝒄𝒂𝒚𝒐́ 𝒆𝒍 𝒔𝒆𝒓𝒗𝒊𝒅𝒐🤡, 𝒗𝒖𝒆𝒍𝒗𝒂 𝒂𝒍 𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓 𝒑𝒂𝒋𝒆𝒓𝒐`)
console.log(e)
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch|buscarxnxx|xnxxbuscar$/i
handler.level = 5
handler.limit = 1
handler.register = true
export default handler

