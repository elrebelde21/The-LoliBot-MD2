import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
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
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(global.img)).buffer(), sourceUrl: redesMenu.getRandom() }}}


let menuA = `
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║═ *𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ ${lenguajeGB['smsConfi2']()} *${username}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩: el rebelde* 
║➤ *𝙉𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧:* *wa.me/5492266466080 (No Bot)*
║➤ *𝙉𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 :* *wa.me/51984498676*
║➤ *𝙏𝙞𝙚𝙢𝙥𝙤𝙨 𝙖𝙘𝙩𝙞𝙫𝙤𝙨 :* *${uptime}*
║➤ *${lenguajeGB['smsBotonM4']()} :* *${Object.keys(global.db.data.users).length}* 
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯`.trim()

let menuB = `
┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙄𝙣𝙛𝙤 𝙙𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *🎖️ Nivel:* ${level}
┣ *💎 Diamantes:* ${limit}
┣ *👾 LoliCoins:* ${money}
┣ *🪙 Tokens:* ${joincount}
┣ *🧰 Experiencia:* ${exp}
┣ *⚓ Rango:* ${role}
┣ *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : '❌'}
┗━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙄𝙣𝙛𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ℹ️️ _${usedPrefix}infobot_
┣ ඬ⃟ℹ️️ _${usedPrefix}grupos_
┣ ඬ⃟ℹ️ _${usedPrefix}instalarbot_
┣ ඬ⃟ℹ️ _${usedPrefix}menusimple_
┣ ඬ⃟ℹ️️ _${usedPrefix}menuaudios_
┣ ඬ⃟ℹ️️ _${usedPrefix}menu2_
┣ ඬ⃟ℹ️ _${usedPrefix}estado_
┣ ඬ⃟ℹ️️ _${usedPrefix}sc_
┣ ඬ⃟ℹ️ _${usedPrefix}ping_
┣ ඬ⃟ℹ️ _${usedPrefix}infomenu
┣ ඬ⃟ℹ️ _${usedPrefix}juegosmenu
┣ ඬ⃟ℹ️ _${usedPrefix}grupomenu
┣ ඬ⃟ℹ️ _${usedPrefix}descargasmenu
┣ ඬ⃟ℹ️ _${usedPrefix}búsquedarmenu
┣ ඬ⃟ℹ️ _${usedPrefix}ownermenu
┣ ඬ⃟ℹ️ _Bot_
┣ ඬ⃟ℹ️ _¿Qué es un Bot?_
┣ ඬ⃟ℹ️ _Términos y condiciones_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙐𝙣𝙚 𝙖𝙡 𝙗𝙤𝙩 𝙖 𝙩𝙪 𝙜𝙧𝙪𝙥𝙤 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟🤖 _${usedPrefix}join *link del grupo*_ 
┣ ඬ⃟🤖 _${usedPrefix}botemporal *link de grupo*
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙎𝙚𝙧𝙗𝙤𝙩 - 𝙟𝙖𝙙𝙞𝙗𝙤𝙩 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🤖 _${usedPrefix}serbot_
┣ ඬ⃟ 🤖 _${usedPrefix}stop_
┣ ඬ⃟ 🤖 _${usedPrefix}bots_
┗━━━━━━━━━━━━━━━━━━━┛  

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙅𝙪𝙚𝙜𝙤𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🕹 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┣ ඬ⃟ ️🕹 _${usedPrefix}prostituto *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}prostituta *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}gay2 *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}lesbiana *<nombre / @tag>*_
┣ ඬ⃟ 🕹 _${usedPrefix}pajero *<nombre / @tag>*_
┣ ඬ⃟ 🕹 _${usedPrefix}pajera *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}puto *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}puta *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}manco *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}manca *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}rata *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}love *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}doxear *<nombre / @tag>*_
┣ ඬ⃟ 🕹 _${usedPrefix}pregunta *<texto>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}suitpvp *<@tag>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}slot *<apuesta>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}ttt *<nombre sala>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}delttt_
┣ ඬ⃟ 🕹️ _${usedPrefix}simi *<texto>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}top *<texto>*_
┣ ඬ⃟ 🕹️ _${usedPrefix}topotakus_
┣ ඬ⃟🕹️️ _${usedPrefix}top10gays_
┣ ඬ⃟🕹️️ _${usedPrefix}toplind@s_
┣ ඬ⃟🕹️️ _${usedPrefix}topput@s_
┣ ඬ⃟🕹️️ _${usedPrefix}toppajer@s_
┣ ඬ⃟🕹️️ _${usedPrefix}topotakus_
┣ ඬ⃟🕹️️ _${usedPrefix}topintegrantes_
┣ ඬ⃟🕹️️ _${usedPrefix}toplagrasa_
┣ ඬ⃟🕹️️ _${usedPrefix}toppanafrescos_
┣ ඬ⃟🕹️ _${usedPrefix}topshiposters_
┣ ඬ⃟🕹️️ _${usedPrefix}toppajeros_
┣ ඬ⃟🕹️️ _${usedPrefix}toplind@s_
┣ ඬ⃟🕹️️ _${usedPrefix}topfamosos_
┣ ඬ⃟🕹️️ _${usedPrefix}topsoltero
┣ ඬ⃟🕹️️ _${usedPrefix}topparejas_
┣ ඬ⃟ 🕹️ _${usedPrefix}formarpareja_
┣ ඬ⃟ 🕹️ _${usedPrefix}verdad_
┣ ඬ⃟ 🕹️ _${usedPrefix}reto_
┣ ඬ⃟ 🕹️ _${usedPrefix}cancion_
┣ ඬ⃟ 🕹️ _${usedPrefix}pista_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *< 𝙋𝙖𝙧𝙚𝙟𝙖𝙨 💞  />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *Declarate con alguien*
┃ *para que sean Parejas!!*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ ❤️➺ _${usedPrefix}listaparejas_
┣ ඬ⃟ ❤️➺ _${usedPrefix}mipareja_
┣ ඬ⃟ ❤️➺ _${usedPrefix}pareja *@tag*_
┣ ඬ⃟ ❤️➺ _${usedPrefix}aceptar *@tag*_
┣ ඬ⃟ ❤️➺ _${usedPrefix}rechazar *@tag*_
┣ ඬ⃟ ❤️➺ _${usedPrefix}terminar *@tag*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓
┃ *<𝙉𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🤖 _${usedPrefix}owner_
┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝘼𝙘𝙩𝙞𝙫𝙖 𝙤 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙧 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ _${usedPrefix}enable
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┣ *< 𝙍𝙚𝙥𝙤𝙧𝙩𝙖𝙧 𝙛𝙖𝙡𝙡𝙤𝙨 𝙚𝙣 𝙖𝙡𝙜𝙪́𝙣 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ Reporta cualquier comando que falle para poder solucionarlo
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔰 _${usedPrefix}reporte *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┣ *< 𝙎𝙚𝙧 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *Convierte en un(a)*
┃ *Usuario(a) Premium!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🎟️ _${usedPrefix}listapremium_
┣ ඬ⃟ 🎟️ _${usedPrefix}pase premium_
┣ ඬ⃟ 🎟️ _${usedPrefix}pass premium_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}mediafire *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}gitclone *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}gdrive *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}twitter *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}fb *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}fb2 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}fb3 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}fb4 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}fb5 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}play *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}play.1 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}play.2 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playdoc *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playlist *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playlist2 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}spotify *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}stickerly *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}ringtone *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}soundcloud *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}imagen *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}pinteret *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}wallpaper *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}wallpaper2 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
┣ ඬ⃟ 📥 _${usedPrefix}igstalk *<nombre de usuario>*_
┣ ඬ⃟ 📥 _${usedPrefix}igstory *<nombre de usuario>*_
┣ ඬ⃟ 📥 _${usedPrefix}tiktokstalk *<username>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙜𝙧𝙪𝙥𝙤𝙨 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 _${usedPrefix}add *<numero>*_
┣ ඬ⃟ 💎 _${usedPrefix}kick *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣ ඬ⃟ 💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣ ඬ⃟ 💎 _${usedPrefix}promote *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟ 💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 💎 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}infogroup_
┣ ඬ⃟ 💎 _${usedPrefix}resetlink_
┣ ඬ⃟ 💎 _${usedPrefix}link_
┣ ඬ⃟ 💎 _${usedPrefix}setname *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setdesc *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}invocar *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setwelcome *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setbye *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}hidetag *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}warn *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}unwarn *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}listwarn_
┣ ඬ⃟ 💎 _${usedPrefix}fantasmas_
┣ ඬ⃟ 💎 _${usedPrefix}destraba_
┣ ඬ⃟ 💎 _${usedPrefix}setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝘾𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙙𝙤𝙧𝙚𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧧 _${usedPrefix}togifaud *<video>*_
┣ ඬ⃟ 🧧 _${usedPrefix}robar *texto*
┣ ඬ⃟ 🧧 _${usedPrefix}wm *texto*
┣ ඬ⃟ 🧧 _${usedPrefix}toimg *<sticker>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tomp3 *<video>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tomp3 *<nota de voz>*_
┣ ඬ⃟ 🧧 _${usedPrefix}toptt *<video / audio>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tovideo *<sticker>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tourl *<video / imagen / audio>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tts es *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙀𝙛𝙚𝙘𝙩𝙤𝙨 𝙮 𝙡𝙤𝙜𝙤𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🖍️ _${usedPrefix}mensajefalso *<nombre|mensaje>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}phmaker *<opcion> <imagen>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logos *<efecto> <texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logochristmas *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logocorazon *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}ytcomment *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}hornycard *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}simpcard *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}lolice *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}itssostupid_
┣ ඬ⃟ 🖍️ _${usedPrefix}pixelar_
┣ ඬ⃟ 🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙁𝙧𝙖𝙨𝙚𝙨 𝙮 𝙩𝙚𝙭𝙩𝙤𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🥀 _${usedPrefix}piropo_
┣ ඬ⃟ 🥀 _${usedPrefix}consejo_
┣ ඬ⃟ 🥀 _${usedPrefix}fraseromantica_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙍𝙖𝙣𝙙𝙤𝙬 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣ ඬ⃟ 👾 _${usedPrefix}cristianoronaldo_
┣ ඬ⃟ 👾 _${usedPrefix}messi_
┣ ඬ⃟ 👾 _${usedPrefix}meme_
┣ ඬ⃟ 👾 _${usedPrefix}itzy_
┣ ඬ⃟ 👾 _${usedPrefix}blackpink_
┣ ඬ⃟ 👾 _${usedPrefix}lolivid_
┣ ඬ⃟ 👾 _${usedPrefix}loli_
┣ ඬ⃟ 👾 _${usedPrefix}navidad_
┣ ඬ⃟ 👾 _${usedPrefix}ppcouple_
┣ ඬ⃟ 👾 _${usedPrefix}wpmontaña_
┣ ඬ⃟ 👾 _${usedPrefix}pubg_
┣ ඬ⃟ 👾 _${usedPrefix}wpgaming_
┣ ඬ⃟ 👾 _${usedPrefix}wpaesthetic_
┣ ඬ⃟ 👾 _${usedPrefix}wpaesthetic2_
┣ ඬ⃟ 👾 _${usedPrefix}wprandom_
┣ ඬ⃟ 👾 _${usedPrefix}wallhp_
┣ ඬ⃟ 👾 _${usedPrefix}wpvehiculo_
┣ ඬ⃟ 👾 _${usedPrefix}wpmoto_
┣ ඬ⃟ 👾 _${usedPrefix}coffee_
┣ ඬ⃟ 👾 _${usedPrefix}pentol_
┣ ඬ⃟ 👾 _${usedPrefix}caricatura_
┣ ඬ⃟ 👾 _${usedPrefix}ciberespacio_
┣ ඬ⃟ 👾 _${usedPrefix}technology_
┣ ඬ⃟ 👾 _${usedPrefix}doraemon_
┣ ඬ⃟ 👾 _${usedPrefix}hacker_
┣ ඬ⃟ 👾 _${usedPrefix}planeta_
┣ ඬ⃟ 👾 _${usedPrefix}randomprofile_
┣ ඬ⃟ 👾 _${usedPrefix}neko_
┣ ඬ⃟ 👾 _${usedPrefix}waifu_
┣ ඬ⃟ 👾 _${usedPrefix}akira_
┣ ඬ⃟ 👾 _${usedPrefix}akiyama_
┣ ඬ⃟ 👾 _${usedPrefix}anna_
┣ ඬ⃟ 👾 _${usedPrefix}asuna_
┣ ඬ⃟ 👾 _${usedPrefix}ayuzawa_
┣ ඬ⃟ 👾 _${usedPrefix}boruto_
┣ ඬ⃟ 👾 _${usedPrefix}chiho_
┣ ඬ⃟ 👾 _${usedPrefix}chitoge_
┣ ඬ⃟ 👾 _${usedPrefix}deidara_
┣ ඬ⃟ 👾 _${usedPrefix}erza_
┣ ඬ⃟ 👾 _${usedPrefix}elaina_
┣ ඬ⃟ 👾 _${usedPrefix}eba_
┣ ඬ⃟ 👾 _${usedPrefix}emilia_
┣ ඬ⃟ 👾 _${usedPrefix}hestia_
┣ ඬ⃟ 👾 _${usedPrefix}hinata_
┣ ඬ⃟ 👾 _${usedPrefix}inori_
┣ ඬ⃟ 👾 _${usedPrefix}isuzu_
┣ ඬ⃟ 👾 _${usedPrefix}itachi_
┣ ඬ⃟ 👾 _${usedPrefix}itori_
┣ ඬ⃟ 👾 _${usedPrefix}kaga_
┣ ඬ⃟ 👾 _${usedPrefix}kagura_
┣ ඬ⃟ 👾 _${usedPrefix}kaori_
┣ ඬ⃟ 👾 _${usedPrefix}keneki_
┣ ඬ⃟ 👾 _${usedPrefix}kotori_
┣ ඬ⃟ 👾 _${usedPrefix}kurumi_
┣ ඬ⃟ 👾 _${usedPrefix}madara_
┣ ඬ⃟ 👾 _${usedPrefix}mikasa_
┣ ඬ⃟ 👾 _${usedPrefix}miku_
┣ ඬ⃟ 👾 _${usedPrefix}minato_
┣ ඬ⃟ 👾 _${usedPrefix}naruto_
┣ ඬ⃟ 👾 _${usedPrefix}nezuko_
┣ ඬ⃟ 👾 _${usedPrefix}sagiri_
┣ ඬ⃟ 👾 _${usedPrefix}sasuke_
┣ ඬ⃟ 👾 _${usedPrefix}sakura_
┣ ඬ⃟ 👾 _${usedPrefix}cosplay_
┗━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 +18/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃*Usar bajo su responsabilidad*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *nota: no sea pajero*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🔞 _${usedPrefix}hornymenu_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙀𝙛𝙚𝙘𝙩𝙤𝙨 𝙥𝙖𝙧𝙖 𝙣𝙤𝙩𝙖𝙨 𝙙𝙚 𝙫𝙤𝙯 𝙤 𝙖𝙪𝙙𝙞𝙤𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ Responde a un audio o nota de voz
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🎤 _${usedPrefix}audioefectomenu_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓
┃ *<𝘼𝙪𝙙𝙞𝙤𝙨/>* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🔊 _${usedPrefix}menu2_
┣ ඬ⃟🔊 _${usedPrefix}audios_
┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝘾𝙝𝙖𝙩 𝙖𝙣𝙤́𝙣𝙞𝙢𝙤 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📳 _${usedPrefix}start_
┣ ඬ⃟ 📳 _${usedPrefix}next_
┣ ඬ⃟ 📳 _${usedPrefix}leave_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝘽𝙪𝙨𝙘𝙖𝙙𝙤𝙧𝙚𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔍 _${usedPrefix}stickersearch *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}stickersearch2 *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}xnxxsearch *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}animeinfo *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}google *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}letra *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}wikipedia *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}ytsearch *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}apkdone *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}apkgoogle *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}apkmody *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}apkshub *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}happymod *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}hostapk *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}revdl *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}toraccino *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}uapkpro *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙃𝙚𝙧𝙧𝙖𝙢𝙞𝙚𝙣𝙩𝙖𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}clima *<país> <ciudad>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}afk *<motivo>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}ocr *<responde a imagen>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}calc *<operacion math>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}del *<mensaje>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}whatmusic *<audio>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}qrcode *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}styletext *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}traducir *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}zoom *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}nowa *<numero>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}horario_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙍𝙋𝙂 - 𝙡𝙞𝙢𝙞𝙩𝙚𝙨 - 𝙚𝙘𝙤𝙣𝙤𝙢𝙞𝙖𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💵 _${usedPrefix}verificar_
┣ ඬ⃟ 💵 _${usedPrefix}unreg *<numero de serie>*_
┣ ඬ⃟ 💵 _${usedPrefix}claim_
┣ ඬ⃟ 💵 _${usedPrefix}lb_
┣ ඬ⃟ 💵 _${usedPrefix}levelup_
┣ ඬ⃟ 💵 _${usedPrefix}perfil_
┣ ඬ⃟ 💵 _${usedPrefix}minar_
┣ ඬ⃟ 💵 _${usedPrefix}buy_
┣ ඬ⃟ 💵 _${usedPrefix}balance_
┣ ඬ⃟ 💵 _${usedPrefix}myns_
┣ ඬ⃟ 💵 _${usedPrefix}work_
┣ ඬ⃟ 💵 _${usedPrefix}buyall_
┣ ඬ⃟ 💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙎𝙩𝙞𝙘𝙠𝙚𝙧𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}s *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}s *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}sfull *<imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ ඬ⃟ 👽 _${usedPrefix}scircle *<imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}sremovebg *<imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}semoji *<tipo> <emoji>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp2 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp3 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp2 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp3 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp4 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp5 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}pat *<@tag>*_
┣ ඬ⃟ 👽 _${usedPrefix}slap *<@tag>*_
┣ ඬ⃟ 👽 _${usedPrefix}kiss *<@tag>*_
┣ ඬ⃟ 👽 _${usedPrefix}dado_
┣ ඬ⃟ 👽 _${usedPrefix}wm *<packname> <author>*_
┣ ඬ⃟ 👽 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙋𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👑 > *<funcion>*
┣ ඬ⃟ 👑 => *<funcion>*
┣ ඬ⃟ 👑 $ *<funcion>*
┣ ඬ⃟ 👑 _${usedPrefix}setprefix *<prefijo>*_
┣ ඬ⃟ 👑 _${usedPrefix}resetprefix_
┣ ඬ⃟ 👑 _${usedPrefix}autoadmin_
┣ ඬ⃟ 👑 _${usedPrefix}leavegc_
┣ ඬ⃟ 👑 _${usedPrefix}cajafuerte_
┣ ඬ⃟ 👑 _${usedPrefix}blocklist_
┣ ඬ⃟ 👑 _${usedPrefix}block *<@tag / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}unblock *<@tag / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *restrict*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *restrict*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *autoread*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *autoread*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *public*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *public*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *pconly*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *pconly*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *gconly*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *gconly*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *anticall*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *anticall*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *antiprivado*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *antiprivado*_
┣ ඬ⃟ 👑 _${usedPrefix}msg *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}banchat_
┣ ඬ⃟ 👑 _${usedPrefix}unbanchat_
┣ ඬ⃟ 👑 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}unbanuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}dardiamantes *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}añadirxp *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}bc *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcchats *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcbot *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}cleartpm_
┣ ඬ⃟ 👑 _${usedPrefix}restart_
┣ ඬ⃟ 👑 _${usedPrefix}update_
┣ ඬ⃟ 👑 _${usedPrefix}banlist_
┣ ඬ⃟ 👑 _${usedPrefix}addprem *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}delprem *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}listprem_
┣ ඬ⃟ 👑 _${usedPrefix}listcmd_
┣ ඬ⃟ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
┣ ඬ⃟ 👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┣ ඬ⃟ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┗━━━━━━━━━━━━━━━━━━━┛
`.trim()

await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', '🎧 ' + lenguajeGB.smsTex16() + ' 🎧', '/audios', lenguajeGB.smsBotonM3(), '#infobot', fkontak, adReply)
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
	
} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menucompleto|allmenu|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
