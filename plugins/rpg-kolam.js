import fetch from 'node-fetch'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'The LoliBot-MD', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]  

let name = global.db.data.users[m.sender].name
let level = global.db.data.users[m.sender].level
let exp = global.db.data.users[m.sender].exp
let paus = global.db.data.users[m.sender].paus
let kepiting = global.db.data.users[m.sender].kepiting
let gurita = global.db.data.users[m.sender].gurita
let cumi = global.db.data.users[m.sender].cumi
let buntal = global.db.data.users[m.sender].buntal
let dory = global.db.data.users[m.sender].dory
let lumba = global.db.data.users[m.sender].lumba
let lobster = global.db.data.users[m.sender].lobster
let hiu = global.db.data.users[m.sender].hiu
let udang = global.db.data.users[m.sender].udang
let ikan = global.db.data.users[m.sender].ikan
let orca = global.db.data.users[m.sender].orca
//let wm = global.wm 

let peces = `🌊🌊 𝗣𝗜𝗦𝗖𝗜𝗡𝗔 𝗗𝗘 𝗣𝗘𝗖𝗘𝗦 🌊🌊
👤» *${name}*

╭━━━━━━━━━⬣ 
┃ *𝗣𝗜𝗦𝗖𝗜𝗡𝗔 𝗗𝗘 𝗣𝗘𝗖𝗘𝗦*
┃ *╸╸╸╸╸╸╸╸╸╸╸╸╸╸*
┃ 🦈 *Tiburón : Shark » ${hiu}*
┃ 🐟 *Pez : Fish » ${ikan}*
┃ 🐠 *Dory : Surgeonfish » ${dory}*
┃ 🐋 *Orca : Killer whale » ${orca}*
┃ 🐳 *Ballena : Whale » ${paus}*
┃ 🦑 *Calamar : Squid » ${cumi}*
┃ 🐙 *Pulpo : Octopus » ${gurita}*
┃ 🐡 *Pez Globo : Blowfish » ${buntal}*
┃ 🦐 *Camarón : Shrimp » ${udang}*
┃ 🐬 *Delfín : Dolphin » ${lumba}*
┃ 🦞 *Langosta : Lobster » ${lobster}*
┃ 🦀 *Cangrejo : Crab » ${kepiting}*
╰━━━━━━━━━⬣
🎏 *Total: ${paus + kepiting + gurita + cumi + buntal + dory + lumba + lobster + hiu + udang + ikan + orca}*`.trim()
await conn.sendButton(m.chat, wm, peces, img5, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, dos.getRandom())
//conn.sendButton(m.chat, peces, `${wm}`, [['Pasar', '#pasar']], m)
await delay(5 * 5000)
}
handler.help = ['kotakikan', 'kolam', 'kolamikan']
handler.tags = ['rpg']
handler.command = /^(picina|piscina|peces|kotak(ikan)?|kolam(ikan)?)$/i
handler.money = 60
handler.level = 3
handler.register = true
export default handler 
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
