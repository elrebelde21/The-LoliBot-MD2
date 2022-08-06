import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
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
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║🔰 *Creador/Editor: LoliBot* 
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ 𝙩𝙞𝙚𝙢𝙥𝙤 𝙖𝙘𝙩𝙞𝙫𝙤𝙨: ${uptime}
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━━━━━━┓
┃ *INFORMACIÓN | MENU SIMPLE*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠⚜️ _${usedPrefix}donar_
┣ ↠⚜️ _${usedPrefix}creditos_
┣ ↠⚜️ _${usedPrefix}infobot_
┣ ↠⚜️ _${usedPrefix}grupos_
┣ ↠⚜️ _${usedPrefix}reglas_
┣ ↠⚜️ _${usedPrefix}menusimple_ 
┣ ↠⚜️ _${usedPrefix}menuaudios_
┣ ↠⚜️ _${usedPrefix}menu2_
┣ ↠⚜️ _${usedPrefix}estado_
┣ ↠⚜️ _¿Qué es un Bot?_
┣ ↠⚜️ _Términos y condiciones_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🛎 _${usedPrefix}instalarbot_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠📮 _${usedPrefix}bug *tal comando con fallas*_
┣ ↠📮 _${usedPrefix}report *tal comando con fallas*_
┣ ↠📮 _${usedPrefix}reporte *tal comando con fallas*_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🔰 _${usedPrefix}owner_
┣ ↠🔰 _${usedPrefix}contacto_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🤖 _${usedPrefix}join *enlace del grupo*_ 
┣ ↠🤖 _${usedPrefix}bottemporal *link de grupo*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🎖️ _${usedPrefix}top10gays_
┣ ↠🎖️ _${usedPrefix}toplind@s_
┣ ↠🎖️ _${usedPrefix}topput@s_
┣ ↠🎖️ _${usedPrefix}toppajer@s_
┣ ↠🎖️ _${usedPrefix}topotakus_
┣ ↠🎖️ _${usedPrefix}topintegrantes_
┣ ↠🎖️ _${usedPrefix}toplagrasa_
┣ ↠🎖️ _${usedPrefix}toppanafrescos_
┣ ↠🎖️ _${usedPrefix}topshiposters_
┣ ↠🎖️ _${usedPrefix}toppajeros_
┣ ↠🎖️ _${usedPrefix}toplind@s_
┣ ↠🎖️ _${usedPrefix}topfamosos_
┣ ↠🎖️ _${usedPrefix}topsoltero
┣ ↠🎖️ _${usedPrefix}topparejas_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🧩 _${usedPrefix}math | mates | matemáticas *modo*_
┣ ↠👾 _${usedPrefix}ttt | tictactoe *nombre del la sala*_
┣ ↠🧩 _${usedPrefix}delttt *nombre del la sala*_
┣ ↠👾 _${usedPrefix}gay2 *@tag*_
┣ ↠👾 _${usedPrefix}gay2 *yo*_
┣ ↠🧩 _${usedPrefix}gay *@tag / nombre*_
┣ ↠👾 _${usedPrefix}lesbi *@tag / nombre*_
┣ ↠🧩 _${usedPrefix}pajero *@tag / nombre*_
┣ ↠👾 _${usedPrefix}pajera *@tag / nombre*_
┣ ↠🧩 _${usedPrefix}puta *@tag / nombre*_
┣ ↠👾 _${usedPrefix}puto *@tag / nombre*_
┣ ↠🧩 _${usedPrefix}rata *@tag / nombre*_
┣ ↠👾 _${usedPrefix}manco *@tag / nombre*_
┣ ↠🧩 _${usedPrefix}manca *@tag / nombre*_
┣ ↠👾 _${usedPrefix}formarpareja | pareja5_
┣ ↠🧩 _${usedPrefix}dado_
┣ ↠👾 _${usedPrefix}simsimi | simi | bot *texto*_
┣ ↠🧩 _${usedPrefix}formartrio_
┣ ↠👾 _${usedPrefix}love *@tag / nombre*_
┣ ↠🧩 _${usedPrefix}amigorandom | amigo | amistad_
┣ ↠👾 _${usedPrefix}slot *cantidad*_
┣ ↠🧩 _${usedPrefix}ppt *piedra / papel / tijera*_
┣ ↠👾 _${usedPrefix}prostituta *@tag / nombre*_
┣ ↠🧩 _${usedPrefix}prostituto *@tag / nombre*_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠☀️ _${usedPrefix}imagen | image | gimage *texto*_
┣ ↠❄️ _${usedPrefix}ytsearch *texto*_
┣ ↠☀️ _${usedPrefix}dlaudio *link yt*_
┣ ↠❄️ _${usedPrefix}dlvid *link yt*_
┣ ↠☀️ _${usedPrefix}ytmp3 *link yt*_
┣ ↠❄️ _${usedPrefix}ytmp4 *link yt*_
┣ ↠☀️ _${usedPrefix}play *titulo del audio*_
┣ ↠❄️ _${usedPrefix}play2 *titulo del video*_
┣ ↠❄️ _${usedPrefix}letra *nombredelacanción*_
┣ ↠☀️ _${usedPrefix}google *texto*_
┣ ↠☀️ _${usedPrefix}pinterestvideo | pintvid *linkPinterest*_
┣ ↠☀️ _${usedPrefix}tiktok *link*_
┣ ↠☀️ _${usedPrefix}acortar | reducir *link*_
┣ ↠❄️ _${usedPrefix}pinterest | pinterest2 *texto*_
┣ ↠☀️ _${usedPrefix}ssweb | capturar | captura *link*_
┣ ↠❄️ _${usedPrefix}animeinfo *nombre del anime*_
┣ ↠☀️ _${usedPrefix}wpanime | fondoanime_
┣ ↠❄️ _${usedPrefix}verinstagram | verig |igver *usuario*_
┣ ↠❄️ _${usedPrefix}twittervideo | twvid *link de twitter*_
┣ ↠☀️ _${usedPrefix}wikipedia | wiki | internet *texto*_
┣ ↠❄️ _${usedPrefix}spotify | spotimusica *autor, cancion*_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🔐 _${usedPrefix}admins *texto*_ 
┣ ↠🔒 _${usedPrefix}añadir *numero*_ (desactivado)
┣ ↠🔐 _${usedPrefix}sacar @tag_ (desactivado)
┣ ↠🔒 _${usedPrefix}save *@tag + nombre de contacto*_
┣ ↠🔐 _${usedPrefix}daradmin | darpoder *@tag*_
┣ ↠🔒 _${usedPrefix}quitaradmin | quitarpoder *@tag*_
┣ ↠🔐 _${usedPrefix}grupo *abierto / cerrado*_
┣ ↠🔒 _${usedPrefix}enable welcome_
┣ ↠🔐 _${usedPrefix}disable welcome_
┣ ↠🔒 _${usedPrefix}enable antilink_ *(WhatsApp)*
┣ ↠🔐 _${usedPrefix}disable antilink_ 
┣ ↠🔒 _${usedPrefix}enable antilink2_ *(https:)*
┣ ↠🔐 _${usedPrefix}disable antilink2_
┣ ↠🔒 _${usedPrefix}enable delete_
┣ ↠🔐 _${usedPrefix}disable  delete_ 
┣ ↠🔒 _${usedPrefix}link_
┣ ↠🔐 _${usedPrefix}notificar | hidetag *texto*_
┣ ↠🔒 _${usedPrefix}setname *Nuevo nombre del grupo*_
┣ ↠🔐 _${usedPrefix}setdesc *Nueva descripción grupo*_
┣ ↠🔒 _${usedPrefix}infogrupo_
┣ ↠🔐 _${usedPrefix}invocar *texto*_
┣ ↠🔒 _${usedPrefix}del *responder a un mensaje del bot*_
┣ ↠🔐 _${usedPrefix}fantasmas_
┣ ↠🔒 _${usedPrefix}banchat_
┣ ↠🔐 _${usedPrefix}unbanchat_
┣ ↠🎨 _${usedPrefix}s_
┣ ↠🎨 _${usedPrefix}sticker_
┣ ↠🎨 _${usedPrefix}semoji | emoji_
┣ ↠🎨 _${usedPrefix}wasted_
┣ ↠🎨 _${usedPrefix}stonks_
┣ ↠🎨 _${usedPrefix}trash *Responda a una foto*_
┣ ↠🎨 _${usedPrefix}sgay *Responda a una foto*_
┣ ↠🎨 _${usedPrefix}circle *Responda a una foto*_
┣ ↠🎨 _${usedPrefix}stickermaker_
┣ ↠🎨 _${usedPrefix}attp *texto*_
┣ ↠🎨 _${usedPrefix}attp2 | s1 | sa *texto*_
┣ ↠🎨 _${usedPrefix}stickerfilter | cs2_
┣ ↠🎨 _${usedPrefix}tomp3 | mp3 *responde a un video*_
┣ ↠🎨 _${usedPrefix}toimg | img *responde a un sticker*_
┣ ↠🎨 _${usedPrefix}togif | gif *responde a sticker/video*_
┣ ↠🎨 _${usedPrefix}ytcomentario | ytcomentar *texto*_
┣ ↠🎨 _${usedPrefix}blur *responde a una imagen*_
┣ ↠🎨 _${usedPrefix}jaal *Responda a una foto*_
┣ ↠🎨 _${usedPrefix}swm *imagen | video | gif*_
┣ ↠🎨 _${usedPrefix}tovideo *responde a una nota de voz*_
┣ ↠🎨 _${usedPrefix}wanted *Responda a una foto*_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🪄 _${usedPrefix}style *texto*_
┣ ↠🪄 _${usedPrefix}estilo *texto*_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠📸 _${usedPrefix}subirestado *texto / video|imagen*_
┣ ↠📸 _${usedPrefix}subirestado *texto / gif*_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🎯 _${usedPrefix}randomwallpaper_
┣ ↠🎲 _${usedPrefix}compartirfoto_
┣ ↠🎳 _${usedPrefix}futbol_
┣ ↠🎯 _${usedPrefix}Messi_
┣ ↠🎲 _${usedPrefix}animal_
┣ ↠🎳 _${usedPrefix}meme_
┣ ↠🎯 _${usedPrefix}meme2_
┣ ↠🎲 _${usedPrefix}meme3_
┣ ↠🎳 _${usedPrefix}cat | gato | gata_
┣ ↠🎯 _${usedPrefix}dog | perro | perra_
┣ ↠🎲 _${usedPrefix}pikachu_
┣ ↠🎳 _${usedPrefix}waifu_
┣ ↠🎯 _${usedPrefix}blackpink_
┣ ↠🎲 _${usedPrefix}reto_
┣ ↠🎳 _${usedPrefix}verdad_
┣ ↠🎯 _${usedPrefix}imagenrandom | random | epico_
┣ ↠🎲 _${usedPrefix}neko_
┣ ↠🎳 _${usedPrefix}lolivid_
┣ ↠🎯 _${usedPrefix}iqtest | iq | inteligencia_
┣ ↠🎲 _${usedPrefix}kpopitzy_
┣ ↠🎳 _${usedPrefix}navidad_
┣ ↠🎯 _${usedPrefix}loli_
┣ ↠🎲 _${usedPrefix}gawrgura_
┣ ↠🎳 _${usedPrefix}miku_
┣ ↠🎯 _${usedPrefix}nyan_
┣ ↠🎲 _${usedPrefix}pat_
┣ ↠🎳 _${usedPrefix}itachi_
┣ ↠🎯 _${usedPrefix}slap_
┣ ↠🎲 _${usedPrefix}pat_
┣ ↠🎳 _${usedPrefix}perfil_
┣ ↠🎯 _${usedPrefix}scan | datos | escaneo_
┣ ↠🎲 _${usedPrefix}kpop_
┣ ↠🎳 _${usedPrefix}qr *texto*_
┣ ↠🎯 _${usedPrefix}afk | aviso | informo *motivo*_
┣ ↠🎲 _${usedPrefix}CristianoRonaldo_
┣ ↠🎳 _${usedPrefix}pregunta *pregunta*_
┣ ↠🎯 _${usedPrefix}mention | mensaje *texto*_
┣ ↠🎲 _${usedPrefix}spamchat *texto*_
┣ ↠🎳 _${usedPrefix}traducir es *texto*_
┣ ↠🎯 _${usedPrefix}zodiac | zodiaco *AAAA MM DD*_
┣ ↠🎲 _${usedPrefix}readmore | leermas *texto1| texto2*_
┣ ↠🎳 _${usedPrefix}calc | calculadora *expresión mat.*_ 
┣ ↠🎯 _${usedPrefix}spamwa *numero|texto|cantidad*_
┣ ↠🎲 _${usedPrefix}readqr *responde a un código QR*_
┣ ↠🎳 _${usedPrefix}anime *random / waifu / husbu /neko*_
┣ ↠🎯 _${usedPrefix}agendar *@tag + nombre contacto*_
┣ ↠🎲 _${usedPrefix}guardar *@tag + nombre contacto*_
┣ ↠🎳 _${usedPrefix}spam *numero|texto|cantidad*_ 
┣ ↠🎯 _${usedPrefix}spoiler | hidetext *texto1| texto2*_
┣ ↠🎲 _${usedPrefix}experiencia | exp
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🔞 _${usedPrefix}hornymenu_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🎤 _${usedPrefix}audioefectomenu_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🔊 _${usedPrefix}menu2_
┣ ↠🔊 _${usedPrefix}menuaudios_
┣ ↠🔊 _${usedPrefix}audios_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠📦 _${usedPrefix}caja_
┣ ↠📦 _${usedPrefix}almacen_
┣ ↠📦 _${usedPrefix}cjalmacen_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠👤 _${usedPrefix}chatanonimo | anonimochat_
┣ ↠👤 _${usedPrefix}anonimoch_
┣ ↠👤 _${usedPrefix}start_
┣ ↠👤 _${usedPrefix}next_
┣ ↠👤 _${usedPrefix}leave_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠🪅 _${usedPrefix}lolice_
┣ ↠🎀 _${usedPrefix}simpcard_
┣ ↠🪅 _${usedPrefix}hornycard_ 
┣ ↠🎀 _${usedPrefix}lblackpink_
┣ ↠🪅 _${usedPrefix}logocorazon_
┣ ↠🎀 _${usedPrefix}tahta *texto*_
┣ ↠🪅 _${usedPrefix}nulis | notas *texto*_
┣ ↠🎀 _${usedPrefix}nulis2 | notas2 *texto*_
┣ ↠🪅 _${usedPrefix}lolice *@tag*_
┣ ↠🪅 _${usedPrefix}simpcard *@tag*_
┣ ↠🔮 _${usedPrefix}logos_ (lista)
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ↠👑 _${usedPrefix}boost | acelerar_
┣ ↠💎 _${usedPrefix}restart_
┣ ↠👑 _${usedPrefix}banlist_
┣ ↠💎 _${usedPrefix}virtext1 | traba1_
┣ ↠👑 _${usedPrefix}actualizar | update_
┣ ↠👑 _${usedPrefix}bc *texto*_
┣ ↠💎 _${usedPrefix}bcgc *texto*_
┣ ↠👑 _${usedPrefix}bcbot *texto*_
┣ ↠💎 _${usedPrefix}setbye *@tag*_
┣ ↠👑 _${usedPrefix}banuser *@tag*_
┣ ↠💎 _${usedPrefix}enable *public*_
┣ ↠👑 _${usedPrefix}disable *public*_
┣ ↠💎 _${usedPrefix}unbanuser *@tag*_
┣ ↠👑 _${usedPrefix}listgroup_
┣ ↠💎 _${usedPrefix}enable *restrict*_
┣ ↠👑 _${usedPrefix}enable *autoread*_
┣ ↠💎 _${usedPrefix}setwelcome *@tag*_
┣ ↠👑 _${usedPrefix}enable *autoread*_
┣ ↠💎 _${usedPrefix}disable *autoread*_
┣ ↠👑 _${usedPrefix}bcbot *texto*_
┣ ↠💎 _${usedPrefix}bcgc *texto*_
┗━━━━━━━━━━━━━━━━━━┛
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/elrebelde21/The-LoliBot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['🔰grupos', '.grupos'],
['🔰 𝙈𝙚𝙣𝙪 𝘼𝙪𝙙𝙞𝙤𝙨 🔰', '.audios']

], m,)
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menusimple', 'help', '?']
handler.tags = ['main']
handler.command = /^(menusimple|simplemenu|menusimple|simplemenu\?)$/i
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
