import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable modohorny para activar`
try{
const { levelling } = '../lib/levelling.js'
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let name = await conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
//user.registered = false
 
let pp = './src/+18.jpg'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}

let menuA = `😏 ${lenguajeGB['smsConfi2']()} *${username}*`.trim()
let menuB = `┌───⊷ *${wm}*
┆😏😏😏😏😏😏😏😏😏
┆❏ *𝙁𝙚𝙘𝙝𝙖 ➺ ${week}, ${date}*
┆❏ *𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖  ➺ ${exp}*
┆❏ *𝙉𝙞𝙫𝙚𝙡  ➺ ${level}*
┆❏ *𝙍𝙤𝙡 ➺  ${role}*
┆❏ *𝙇𝙤𝙡𝙞𝙘𝙤𝙞𝙣𝙨 ➺ $ ${money}*
┆❏ *𝙐𝙨𝙪𝙖𝙧𝙞𝙤 ➺ ${Object.keys(global.db.data.users).length}* 
┆❏ *𝙏𝙞𝙚𝙢𝙥𝙤 𝙖𝙘𝙩𝙞𝙫𝙤 ➺ ${uptime}*
┆😏😏😏😏😏😏😏😏😏
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ • • •「𝗠𝗲𝗻𝘂 +𝟭𝟴 」• • •
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝑼́𝒔𝒂𝒍𝒐𝒔 𝒃𝒂𝒋𝒐𝒔 𝒕𝒖 𝒓𝒆𝒔𝒑𝒐𝒏𝒔𝒂𝒃𝒊𝒍𝒊𝒅𝒂𝒅*
┆ *𝑵𝒐𝒕𝒂: 𝒏𝒐 𝒔𝒆𝒂 𝒑𝒂𝒋𝒆𝒓𝒐*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🔞➺ _${usedPrefix}nsfwloli_
┆🔞➺ _${usedPrefix}nsfwfoot_
┆🔞➺ _${usedPrefix}nsfwass_
┆🔞➺ _${usedPrefix}nsfwbdsm_
┆🔞➺ _${usedPrefix}nsfwcum_
┆🔞➺ _${usedPrefix}nsfwero_
┆🔞➺ _${usedPrefix}nsfwfemdom_
┆🔞➺ _${usedPrefix}nsfwfoot_
┆🔞➺ _${usedPrefix}nsfwglss_
┆🔞➺ _${usedPrefix}nsfworgy_
┆🔞➺ _${usedPrefix}pies_
┆🔞➺ _${usedPrefix}yuri_
┆🔞➺ _${usedPrefix}yuri2_ 
┆🔞➺ _${usedPrefix}yaoi_
┆🔞➺ _${usedPrefix}yaoi2_
┆🔞➺ _${usedPrefix}panties_ 
┆🔞➺ _${usedPrefix}tetas_ 
┆🔞➺ _${usedPrefix}booty_
┆🔞➺ _${usedPrefix}ecchi_
┆🔞➺ _${usedPrefix}furro_
┆🔞➺ _${usedPrefix}hentai_
┆🔞➺ _${usedPrefix}trapito_
┆🔞➺ _${usedPrefix}imagenlesbians_
┆🔞➺ _${usedPrefix}pene_
┆🔞➺ _${usedPrefix}porno_
┆🔞➺ _${usedPrefix}porno2_
┆🔞➺ _${usedPrefix}randomxxx_
┆🔞➺ _${usedPrefix}pechos_
┆🔞➺ _${usedPrefix}pack_
┆🔞➺ _${usedPrefix}pack2_
┆🔞➺ _${usedPrefix}pack3_
┆🔞➺ _${usedPrefix}videoxxx_
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ 🥵 𝑪𝒐𝒏𝒕𝒆𝒏𝒊𝒅𝒐 𝒅𝒊𝒏𝒂́𝒎𝒊𝒄𝒐  🥵
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆»🥵 _${usedPrefix}pornovideo | pornovid_
┆»🥵 _${usedPrefix}pornovidgay | pornogayv_
┆»🥵 _${usedPrefix}pornolesbivid | pornolesbiv_
┆»🥵 _${usedPrefix}pornobisexualvid | pornobiv_
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ❤️‍🔥 𝑩𝒖𝒔𝒄𝒂𝒓 𝒚 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒓 ❤️‍🔥
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆❤️‍🔥➺ _${usedPrefix}xnxxsearch | buscarxnxx *texto*_
┆❤️‍🔥➺ _${usedPrefix}xvideossearch *texto*_
┆❤️‍🔥➺ _${usedPrefix}xnxxdl | xnxx *enlace*_
┆❤️‍🔥➺ _${usedPrefix}xvideosdl | xvideos *enlace*_
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ 🔥 𝑪𝒐𝒏𝒕𝒆𝒏𝒊𝒅𝒐 𝒑𝒍𝒖𝒔  🔥
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝑼𝒔𝒂𝒓 𝒃𝒂𝒋𝒐 𝒕𝒖 𝒓𝒆𝒔𝒑𝒐𝒏𝒔𝒂𝒃𝒊𝒍𝒊𝒅𝒂𝒅*
┆ *𝑽𝒊𝒅𝒆𝒐 +18 𝒂𝒍𝒆𝒂𝒕𝒐𝒓𝒊𝒐*
┆ *𝑷𝒖𝒆𝒅𝒆 𝒕𝒂𝒓𝒅𝒂𝒓 𝒆𝒏 𝒆𝒏𝒗𝒊𝒂𝒓*
┆ *𝑪𝒐𝒏𝒕𝒆𝒏𝒊𝒅𝒐 𝒅𝒆 𝒄𝒂𝒍𝒊𝒅𝒂𝒅*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆»🔥 _${usedPrefix}pornopremium_
╰──────────
`.trim()

await conn.sendButton(m.chat, menuA, menuB, pp, [
[lenguajeGB.smsBotonM1(), '.menu'], [lenguajeGB.smsBotonM2(), '/allmenu'], [lenguajeGB.smsBotonM3(), '#infobot']], fkontak, adReply, m) 

} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(hornymenu)$/i
//handler.register = true
handler.exp = 50
handler.money = 20
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
