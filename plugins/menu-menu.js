import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
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
    

let str = `
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║═ *𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝗛ola como esta, ${name}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩: el rebelde* 
║➤ *𝙉𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧:* *wa.me/5492266466080 (No Bot)*
║➤ *𝙉𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 :* *wa.me/972529277518*
║➤ *𝙉𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘²:* *wa.me/12267784150*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ 𝙏𝙞𝙚𝙢𝙥𝙤𝙨 𝙖𝙘𝙩𝙞𝙫𝙤𝙨 : ${uptime}
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┃ *<𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤́𝙣 𝙙𝙚𝙡 𝙗𝙤𝙩//>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
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
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝙍𝙚𝙥𝙤𝙧𝙩𝙖𝙧 𝙛𝙖𝙡𝙡𝙤𝙨 𝙚𝙣 𝙖𝙡𝙜𝙪́𝙣 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ Reporta cualquier comando que falle para poder solucionarlo
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟📬 _${usedPrefix}report *comando con fallas*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝙐𝙣𝙚 𝙖𝙡 𝙗𝙤𝙩 𝙖 𝙩𝙪 𝙜𝙧𝙪𝙥𝙤/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🤖 _${usedPrefix}join *link del grupo*_ 
┣ ඬ⃟🤖 _${usedPrefix}botemporal *link de grupo*
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝙏𝙤𝙥𝙨/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🎖️ _${usedPrefix}top10gays_
┣ ඬ⃟🎖️ _${usedPrefix}toplind@s_
┣ ඬ⃟🎖️ _${usedPrefix}topput@s_
┣ ඬ⃟🎖️ _${usedPrefix}toppajer@s_
┣ ඬ⃟🎖️ _${usedPrefix}topotakus_
┣ ඬ⃟🎖️ _${usedPrefix}topintegrantes_
┣ ඬ⃟🎖️ _${usedPrefix}toplagrasa_
┣ ඬ⃟🎖️ _${usedPrefix}toppanafrescos_
┣ ඬ⃟🎖️ _${usedPrefix}topshiposters_
┣ ඬ⃟🎖️ _${usedPrefix}toppajeros_
┣ ඬ⃟🎖️ _${usedPrefix}toplind@s_
┣ ඬ⃟🎖️ _${usedPrefix}topfamosos_
┣ ඬ⃟🎖️ _${usedPrefix}topsoltero
┣ ඬ⃟🎖️ _${usedPrefix}topparejas_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝙉𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🤖 _${usedPrefix}owner_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝙅𝙪𝙚𝙜𝙤𝙨/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🕹 _${usedPrefix}math *modo*_
┣ ඬ⃟🎮 _${usedPrefix}ttt *nombre del la sala*_
┣ ඬ⃟🕹 _${usedPrefix}delttt *nombre del la sala*_
┣ ඬ⃟🕹 _${usedPrefix}gay *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}lesbi *@tag / nombre*_
┣ ඬ⃟🕹 _${usedPrefix}pajero *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}pajera *@tag / nombre*_
┣ ඬ⃟🕹 _${usedPrefix}puta *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}puto *@tag / nombre*_
┣ ඬ⃟🕹 _${usedPrefix}rata *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}manco *@tag / nombre*_
┣ ඬ⃟🕹 _${usedPrefix}manca *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}formarpareja_
┣ ඬ⃟🕹 _${usedPrefix}dado_
┣ ඬ⃟🎮 _${usedPrefix}simsimi *texto*_
┣ ඬ⃟🕹 _${usedPrefix}formartrio_
┣ ඬ⃟🎮 _${usedPrefix}love *@tag / nombre*_
┣ ඬ⃟🕹 _${usedPrefix}amigorandom_
┣ ඬ⃟🎮 _${usedPrefix}slot *cantidad*_
┣ ඬ⃟🕹 _${usedPrefix}ppt *piedra / papel / tijera*_
┣ ඬ⃟🕹 _${usedPrefix}prostituto *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}doxear *@tag / nombre*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟📥 _${usedPrefix}imagen *texto*_
┣ ඬ⃟📥 _${usedPrefix}ytsearch *texto*_
┣ ඬ⃟📥 _${usedPrefix}ytmp3 *link yt*_
┣ ඬ⃟📥 _${usedPrefix}ytmp4 *link yt*_
┣ ඬ⃟📥 _${usedPrefix}play *titulo del audio*_
┣ ඬ⃟📥 _${usedPrefix}play2 *titulo del audio*_
┣ ඬ⃟📥 _${usedPrefix}play.1 *titulo del video*_
┣ ඬ⃟📥 _${usedPrefix}play.2 *titulo del video*_
┣ ඬ⃟📥 _${usedPrefix}play4 *titulo del video*_
┣ ඬ⃟📥 _${usedPrefix}letra *nombredelacanción*_
┣ ඬ⃟📥 _${usedPrefix}google *texto*_
┣ ඬ⃟📥 _${usedPrefix}pinterestvideo *link de pinterest*_
┣ ඬ⃟📥 _${usedPrefix}tiktok *link*_
┣ ඬ⃟📥 _${usedPrefix}pinterest *texto*_
┣ ඬ⃟📥 _${usedPrefix}xnxxsearch *texto*_
┣ ඬ⃟📥 _${usedPrefix}ssweb *link*_
┣ ඬ⃟📥 _${usedPrefix}igstory *username*_
┣ ඬ⃟📥 _${usedPrefix}igstalk *username*_
┣ ඬ⃟📥 _${usedPrefix}animeinfo *nombre del anime*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝙂𝙚𝙨𝙩𝙞𝙤́𝙣 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤𝙨/>* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💎 _${usedPrefix}admins *texto*_ 
┣ ඬ⃟💎 _${usedPrefix}añadir *numero*_ 
┣ ඬ⃟💎 _${usedPrefix}sacar @tag_
┣ ඬ⃟💎 _${usedPrefix}daradmin *@tag*_
┣ ඬ⃟💎 _${usedPrefix}quitaradmin *@tag*_
┣ ඬ⃟💎 _${usedPrefix}grupo *abrir / cerrar*_
┣ ඬ⃟💎 _${usedPrefix}enable
┣ ඬ⃟💎 _${usedPrefix}link_
┣ ඬ⃟💎 _${usedPrefix}notificar *texto*_
┣ ඬ⃟💎 _${usedPrefix}setname *Nuevo nombre del grupo*_
┣ ඬ⃟💎 _${usedPrefix}setdesc *Nueva descripción del grupo*_
┣ ඬ⃟💎 _${usedPrefix}infogrupo_
┣ ඬ⃟💎 _${usedPrefix}tagall *texto*_
┣ ඬ⃟💎 _${usedPrefix}del *responder a un mensaje*_
┣ ඬ⃟💎 _${usedPrefix}fantasmas_
┣ ඬ⃟💎 _${usedPrefix}banchat_
┣ ඬ⃟💎 _${usedPrefix}unbanchat_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙚𝙨/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🧧 _${usedPrefix}s_
┣ ඬ⃟🧧 _${usedPrefix}sticker_
┣ ඬ⃟🧧 _${usedPrefix}robar_
┣ ඬ⃟🧧 _${usedPrefix}wm_
┣ ඬ⃟🧧 _${usedPrefix}semoji_
┣ ඬ⃟🧧 _${usedPrefix}stickermaker_
┣ ඬ⃟🧧 _${usedPrefix}attp *texto*_
┣ ඬ⃟🧧 _${usedPrefix}attp2 *texto*_
┣ ඬ⃟🧧 _${usedPrefix}stickerfilter_
┣ ඬ⃟🧧 _${usedPrefix}mp3 *responde a un video*_
┣ ඬ⃟🧧 _${usedPrefix}img *responde a un sticker*_
┣ ඬ⃟🧧 _${usedPrefix}swm *link de imagen de google*_
┣ ඬ⃟🧧 _${usedPrefix}gif *responde a un sticker/video*_
┣ ඬ⃟🧧 _${usedPrefix}tovideo *responde a una nota de voz*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝙍𝙖𝙣𝙙𝙤𝙬 𝙚𝙭𝙩𝙧𝙖𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟👾 _${usedPrefix}frase_
┣ ඬ⃟👾 _${usedPrefix}futbol_
┣ ඬ⃟👾 _${usedPrefix}Messi_
┣ ඬ⃟👾 _${usedPrefix}animal_
┣ ඬ⃟👾 _${usedPrefix}meme_
┣ ඬ⃟👾 _${usedPrefix}meme2_
┣ ඬ⃟👾 _${usedPrefix}cat_
┣ ඬ⃟👾 _${usedPrefix}pikachu_
┣ ඬ⃟👾 _${usedPrefix}waifu_
┣ ඬ⃟👾 _${usedPrefix}blackpink_
┣ ඬ⃟👾 _${usedPrefix}reto_
┣ ඬ⃟👾 _${usedPrefix}verdad_
┣ ඬ⃟👾 _${usedPrefix}neko_
┣ ඬ⃟👾 _${usedPrefix}lolivid_
┣ ඬ⃟👾 _${usedPrefix}navidad_
┣ ඬ⃟👾 _${usedPrefix}loli_
┣ ඬ⃟👾 _${usedPrefix}gawrgura_
┣ ඬ⃟👾 _${usedPrefix}miku_
┣ ඬ⃟👾 _${usedPrefix}nyan_
┣ ඬ⃟👾 _${usedPrefix}pat_
┣ ඬ⃟👾 _${usedPrefix}itachi_
┣ ඬ⃟👾 _${usedPrefix}slap_
┣ ඬ⃟👾️ _${usedPrefix}pat_
┣ ඬ⃟👾 _${usedPrefix}perfil_
┣ ඬ⃟👾 _${usedPrefix}scan_
┣ ඬ⃟👾 _${usedPrefix}kpop_
┣ ඬ⃟👾 _${usedPrefix}qr *texto*_
┣ ඬ⃟👾 _${usedPrefix}afk *motivo*_
┣ ඬ⃟👾 _${usedPrefix}CristianoRonaldo_
┣ ඬ⃟👾 _${usedPrefix}pregunta *pregunta*_
┣ ඬ⃟👾 _${usedPrefix}mention *texto*_
┣ ඬ⃟👾 _${usedPrefix}spamchat *texto*_
┣ ඬ⃟👾 _${usedPrefix}traducir es *texto*_
┣ ඬ⃟👾 _${usedPrefix}readmore *texto1| texto2*_
┣ ඬ⃟👾 _${usedPrefix}calc *expresión matemática*_ 
┣ ඬ⃟👾 _${usedPrefix}readqr *responde a un código QR*_
┣ ඬ⃟👾 _${usedPrefix}anime *random / waifu / husbu /neko*_
┣ ඬ⃟👾 _${usedPrefix}subirestado *texto / responder video, imagen o gif*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝘾𝙤𝙢𝙖𝙣𝙙𝙤 +18/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃*Usar bajo su responsabilidad*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *nota: no sea pajero*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🔞 _${usedPrefix}hornymenu_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝙀𝙛𝙚𝙘𝙩𝙤𝙨 𝙥𝙖𝙧𝙖 𝙣𝙤𝙩𝙖𝙨 𝙙𝙚 𝙫𝙤𝙯 𝙤 𝙖𝙪𝙙𝙞𝙤𝙨/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ Responde a un audio o nota de voz
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🎤 _${usedPrefix}audioefectomenu_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝘼𝙪𝙙𝙞𝙤𝙨/>* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🔊 _${usedPrefix}menu2_
┣ ඬ⃟🔊 _${usedPrefix}audios_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝘾𝙝𝙖𝙩 𝙖𝙣𝙤́𝙣𝙞𝙢𝙤/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟📳 _${usedPrefix}start_
┣ ඬ⃟📳 _${usedPrefix}next_
┣ ඬ⃟📳 _${usedPrefix}leave_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝙇𝙤𝙜𝙤𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙡𝙞𝙯𝙖𝙙𝙤𝙨/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟📝️ _${usedPrefix}logos_ (lista)
┣ ඬ⃟📝️ _${usedPrefix}lolice_
┣ ඬ⃟📝️ _${usedPrefix}simpcard_
┣ ඬ⃟📝️ _${usedPrefix}hornycard_ 
┣ ඬ⃟📝️ _${usedPrefix}lblackpink_
┣ ඬ⃟📝️ _${usedPrefix}nulis *texto*_
┣ ඬ⃟📝️ _${usedPrefix}lolice *@tag*_
┣ ඬ⃟📝️ _${usedPrefix}simpcard *@tag*_
┣ ඬ⃟📝️ _${usedPrefix}logotaza *texto*_ 
┣ ඬ⃟📝️ _${usedPrefix}logofire *texto*_
┣ ඬ⃟📝️ _${usedPrefix}logocorazon *texto*_
┣ ඬ⃟📝️ _${usedPrefix}logorandom *texto*_
┣ ඬ⃟📝️ _${usedPrefix}neonfire *texto*_ 
┣ ඬ⃟📝️ _${usedPrefix}technology *texto*_ 
┣ ඬ⃟📝️ _${usedPrefix}playa *texto*_ 
┣ ඬ⃟📝️ _${usedPrefix}ytcomment *texto*_ 
┣ ඬ⃟📝️ _${usedPrefix}romanticmessages *texto*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<𝙋𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟👑 _${usedPrefix}boost_
┣ ඬ⃟👑 _${usedPrefix}restart_
┣ ඬ⃟👑 _${usedPrefix}banlist_
┣ ඬ⃟👑 _${usedPrefix}binario1_
┣ ඬ⃟👑 _${usedPrefix}actualizar_
┣ ඬ⃟👑 _${usedPrefix}CajaFuerte_
┣ ඬ⃟👑 _${usedPrefix}bc *texto*_
┣ ඬ⃟👑 _${usedPrefix}deletechat_
┣ ඬ⃟👑 _${usedPrefix}bcgc *texto*_
┣ ඬ⃟👑 _${usedPrefix}bcbot *texto*_
┣ ඬ⃟👑 _${usedPrefix}banuser *@tag*_
┣ ඬ⃟👑 _${usedPrefix}deletechat *all*_
┣ ඬ⃟👑 _${usedPrefix}enable *public*_
┣ ඬ⃟👑 _${usedPrefix}disable *public*_
┣ ඬ⃟👑 _${usedPrefix}unbanuser *@tag*_
┣ ඬ⃟👑 _${usedPrefix}listgroup *@tag*_
┣ ඬ⃟👑 _${usedPrefix}enable *restrict*_
┣ ඬ⃟👑 _${usedPrefix}enable *autoread*_
┣ ඬ⃟👑 _${usedPrefix}setwelcome *@tag*_
┣ ඬ⃟👑 _${usedPrefix}enable *autoread*_
┣ ඬ⃟👑 _${usedPrefix}disable *autoread*_
┗━━━━━━━━━━━━━┛
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/elrebelde21/The-LoliBot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['🔰grupos', '.grupos'],
['🔰 𝙈𝙚𝙣𝙪 𝘼𝙪𝙙𝙞𝙤𝙨 🔰', '.audios']

], m,)
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
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
