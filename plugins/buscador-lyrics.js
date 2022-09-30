import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `𝙌𝙪𝙚 𝙚𝙨𝙩𝙖́ 𝙗𝙪𝙨𝙘𝙖𝙣𝙙𝙤❓️\n𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙣𝙖 𝙘𝙖𝙣𝙘𝙞𝙤́𝙣 𝙥𝙖𝙧𝙖 𝙤𝙗𝙩𝙚𝙣𝙚𝙧 𝙡𝙖 𝙡𝙚𝙩𝙧𝙖\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} Runaway*`
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json


let letratexto =`
𝙏𝙞́𝙩𝙪𝙡𝙤
💚 *${result.title}*

𝘼𝙪𝙩𝙤𝙧(𝘼)
💜 *${result.author}*


${result.lyrics}


𝙀𝙣𝙡𝙖𝙘𝙚
🧡 *${result.link}*
`.trim()
conn.sendHydrated(m.chat, letratexto, wm, json.thumbnail.genius, null, null, null, null, [
['𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 🚀', `/play ${text}`],
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 🔎', '#buscarmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m)
}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
handler.limit = 1
handler.level = 3
handler.exp = 55
export default handler 
