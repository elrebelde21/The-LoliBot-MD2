import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠 𝙨𝙞𝙣 𝙪𝙨𝙖𝙧 "@"\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} mundo_dos_animes81*`, m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let gata = `
👤 𝙐𝙨𝙪𝙖𝙧𝙞𝙤(𝘼)
${json.result.username}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ 𝙉𝙤𝙢𝙗𝙧𝙚
${json.result.nickname}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙎𝙚𝙜𝙪𝙞𝙙𝙤𝙧𝙚𝙨
${json.result.followers}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
❇️ 𝙎𝙚𝙜𝙪𝙞𝙙𝙤𝙨
${json.result.followings}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
❤️ 𝙈𝙚 𝙜𝙪𝙨𝙩𝙖 
${json.result.likes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🎁 𝙋𝙪𝙗𝙡𝙞𝙘𝙖𝙘𝙞𝙤́𝙣𝙚𝙨
${json.result.video}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👀 𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤́𝙣
${json.result.bio}
`.trim()
await conn.sendFile(m.chat, res2, 'error.jpg', gata, m, false)
} catch (e) {
throw `𝙐𝙛𝙛, 𝙚𝙧𝙧𝙤𝙧, 𝙫𝙪𝙚𝙡𝙫𝙖 𝙖𝙡 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧.`
}
/*
let info = `💖 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙚 𝙨𝙤𝙗𝙧𝙚 𝙡𝙖𝙨 𝙉𝙤𝙫𝙚𝙙𝙖𝙙𝙚𝙨 𝙮 𝙧𝙚𝙘𝙪𝙚𝙧𝙙𝙖 𝙩𝙚𝙣𝙚𝙧 𝙡𝙖 𝙪𝙡𝙩𝙞𝙢𝙖 𝙫𝙚𝙧𝙨𝙞𝙤𝙣.
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)  
*/
}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
handler.exp = 48
export default handler
