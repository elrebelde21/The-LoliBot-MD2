import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `${mg}𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙣 𝙖𝙣𝙞𝙢𝙚`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = 
`𝙏𝙞́𝙩𝙪𝙡𝙤
❣ ${title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙀𝙥𝙞𝙨𝙤𝙙𝙞𝙤𝙨
❣ ${episodes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙏𝙧𝙖𝙣𝙨𝙢𝙞𝙩𝙞𝙙𝙤 𝙥𝙤𝙧:
❣ ${type}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝘾𝙡𝙖𝙨𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤́𝙣
❣ ${rated}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙋𝙪𝙣𝙩𝙖𝙟𝙚
❣ ${score}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙈𝙞𝙚𝙢𝙗𝙧𝙤𝙨
❣ ${members}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙎𝙞𝙣𝙤𝙥𝙨𝙞𝙨
❣ ${synopsis}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙀𝙣𝙡𝙖𝙘𝙚
❣ ${url}`
await conn.sendFile(m.chat, image_url, '', animeingfo, m) 
let info = `💖 *𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙧𝙩𝙚 𝙨𝙤𝙗𝙧𝙚 𝙡𝙖𝙨 𝙣𝙤𝙫𝙚𝙙𝙖𝙙𝙚𝙨 𝙮 𝙧𝙚𝙘𝙪𝙚𝙧𝙙𝙖 𝙩𝙚𝙣𝙚𝙧 𝙡𝙖 𝙪́𝙡𝙩𝙞𝙢𝙖 𝙫𝙚𝙧𝙨𝙞𝙤́𝙣.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 🔎', '#buscarmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣 ☘️', '/menu']
], m,)  
  
}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(animeinfo)$/i
handler.exp = 50
handler.level = 4 
export default handler
