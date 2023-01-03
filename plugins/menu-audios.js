import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
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
 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
//user.registered = false

let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}

let menuA = `🎶 ${lenguajeGB['smsConfi2']()} *${username}*`.trim()
let menuB = `
┌───⊷  
┆ *Menu de audios*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝑵𝒐 𝒆𝒔 𝒏𝒆𝒄𝒆𝒔𝒂𝒓𝒊𝒐 𝒆𝒍 𝒑𝒓𝒆𝒇𝒊𝒋𝒐*
┆ *𝑷𝒖𝒆𝒅𝒆 𝒔𝒐𝒍𝒐 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒓 𝒍𝒂*
┆ *𝑷𝒂𝒍𝒂𝒃𝒓𝒂 𝒐 𝑭𝒓𝒂𝒔𝒆.*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆➫🔊 _Noche de paz_
┆➫🔊 _Buenos dias_
┆➫🔊 _Audio hentai_
┆➫🔊 _Fiesta del admin_
┆➫🔊 _Fiesta del admin 2_
┆➫🔊 _Fiesta del administrador_ 
┆➫🔊 _Viernes_
┆➫🔊 _Mierda de Bot_
┆➫🔊 _Me olvidé_
┆➫🔊 _Baneado_
┆➫🔊 _Feliz navidad_
┆➫🔊 _A nadie le importa_
┆➫🔊 _Sexo_
┆➫🔊 _Vete a la vrg_
┆➫🔊 _Ara ara_
┆➫🔊 _Hola_
┆➫🔊 _Un pato_
┆➫🔊 _Nyanpasu_
┆➫🔊 _Te amo_
┆➫🔊 _Yamete_
┆➫🔊 _Te diagnostico con gay_
┆➫🔊 _Quien es tu sempai botsito 7w7_
┆➫🔊 _Bañate_
┆➫🔊 _Vivan los novios_
┆➫🔊 _Marica quien_
┆➫🔊 _Es puto_
┆➫🔊 _La biblia_
┆➫🔊 _Onichan_
┆➫🔊 _Bot puto_
┆➫🔊 _Feliz cumpleaños_
┆➫🔊 _Pasa pack Bot_
┆➫🔊 _Atencion grupo_
┆➫🔊 _Homero chino_
┆➫🔊 _Oh me vengo_
┆➫🔊 _Murio el grupo_
┆➫🔊 _Siuuu_
┆➫🔊 _Rawr_
┆➫🔊 _UwU_
┆➫🔊 _:c_
┆➫🔊 _a_
┆➫🔊 _Hey_
┆➫🔊 _Enojado_
┆➫🔊 _Enojada_
┆➫🔊 _Chao_
┆➫🔊 _Hentai_
┆➫🔊 _Triste_
┆➫🔊 _Estoy triste_
┆➫🔊 _Me pican los cocos_
┆➫🔊 _Contexto_
┆➫🔊 _Me voy_
┆➫🔊 _Tengo los calzones del admin_
┆➫🔊 _Entrada épica_ 
┆➫🔊 _Esto va ser épico papus_
┆➫🔊 _Ingresa épicamente_
┆➫🔊 _Bv_
┆➫🔊 _Yoshi_
┆➫🔊 _No digas eso papu_
┆➫🔊 _Ma ma masivo_
┆➫🔊 _Masivo_
┆➫🔊 _Basado_
┆➫🔊 _Basada_
┆➫🔊 _Fino señores_
┆➫🔊 _Verdad que te engañe_
┆➫🔊 _Sus_
┆➫🔊 _Ohayo_
┆➫🔊 _La voz de hombre_
┆➫🔊 _Pero esto_
┆➫🔊 _Bien pensado Woody_
┆➫🔊 _Jesucristo_
┆➫🔊 _Wtf_
┆➫🔊 _Una pregunta_
┆➫🔊 _Que sucede_
┆➫🔊 _Hablame_
┆➫🔊 _Pikachu_
┆➫🔊 _Niconico_
┆➫🔊 _Yokese_
┆➫🔊 _Omaiga_
┆➫🔊 _Nadie te preguntó_
┆➫🔊 _Bueno si_
┆➫🔊 _Usted está detenido_
┆➫🔊 _No me hables_
┆➫🔊 _No chu_
┆➫🔊 _El pepe_
┆➫🔊 _Pokémon_
┆➫🔊 _No me hagas usar esto_
┆➫🔊 _Esto va para ti_
┆➫🔊 _Abduzcan_
┆➫🔊 _Joder_
┆➫🔊 _Hablar primos_
┆➫🔊 _Mmm_
┆➫🔊 _Orale_
┆➫🔊 _Me anda buscando anonymous_
┆➫🔊 _Blackpink in your area_
┆➫🔊 _Cambiate a Movistar_
┆➫🔊 _Momento equisde | Momento XD_
┆➫🔊 _Todo bien | 😇_
┆➫🔊 _Te gusta el Pepino | 🥒_
┆➫🔊 _El tóxico_
┆➫🔊 _Moshi moshi_
┆➫🔊 _Calla Fan de BTS_
┆➫🔊 _Que tal grupo_
┆➫🔊 _Muchachos_
┆➫🔊 _Está Zzzz | 😴_
┆➫🔊 _Goku Pervertido_
┆➫🔊 _Potaxio | 🥑_
┆➫🔊 _Nico nico_
┆➫🔊 _El rap de Fernanfloo_
┆➫🔊 _Tal vez_
┆➫🔊 _Corte corte_
┆➫🔊 _Buenas noches_
┆➫🔊 _Porque ta tite_
┆➫🔊 _Eres Fuerte_
┆➫🔊 _Bueno Master | 🫂_
┆➫🔊 _No Rompas más | 💔_
┆➫🔊 _Traiganle una falda_
┆➫🔊 _Se están riendo de mí_
┆➫🔊 _Su nivel de pendejo_
┆➫🔊 _Bienvenido/a | 🥳 | 🤗 | 👋_
┆➫🔊 _Elmo sabe donde vives_
┆➫🔊 _tunometecabrasaramambiche_
┆➫🔊 _Y este quien es_
┆➫🔊 _Motivación_
┆➫🔊 _En caso de una investigación_
┆➫🔊 _Buen día grupo | 🙌_
┆➫🔊 _mi bebito fiu fiu
┆➫🔊 _sabosito
┆➫🔊 _Freefire 
┆➫🔊 _Aguanta
┆➫🔊 _Es viernes
┆➫🔊 _Que quede vos
┆➫🔊 _Feriado 
┆➫🔊 _Me emociono | borracho
┆➫🔊 _Delivery 
┆➫🔊 _Tarado | putos
┆➫🔊 _Bardo
┆➫🔊 _Saliste del grupo
┆➫🔊 _No agregué 
┆➫🔊 _Quiere tener internet gratis
┆➫🔊 _Donde esta?
┆➫🔊 _Q onda | 🤪
┆➫🔊 _La tóxica
┆➫🔊 _Bebesita
┆➫🔊 _Tka 
┆➫🔊 _No la pienso 
┆➫🔊 _Taka Taka 
┆➫🔊 _Bot canta 
┆➫🔊 _Loli conmigo | Loli venir
┆➫🔊 _Grap | trap 
┆➫🔊 _Bruno
┆➫🔊 _Bot dj
┆➫🔊 _Soy guapo
┆➫🔊 _Dragon ball 
┆➫🔊 _Las reglas del grupo_
┆ Pequeña canciones 
┆➫🔊 _Quevedo 
┆➫🔊 _Quédate 
┆➫🔊 _Fernet 
┆➫🔊 _Emilia 
┆➫🔊 _cuantros veintes
┆➫🔊 _Turrito
┆➫🔊 _Allá 
┆➫🔊 _cumbia 420
┆➫🔊 _lgante
┆➫🔊 _esaa |😎
┆➫🔊 _bar 
┆➫🔊 _Le mando fui  
┆ 𝑺𝒆 𝒗𝒂𝒏 𝒂𝒈𝒓𝒆𝒈𝒂𝒅𝒐 𝒎𝒂𝒔 𝒂𝒖𝒅𝒊𝒐 𝒅𝒆 𝒑𝒐𝒄𝒐,
┆ 𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒂𝒈𝒓𝒆𝒈𝒂𝒓 𝒂𝒍𝒈𝒖𝒏 𝒂𝒖𝒅𝒊𝒐 𝒏𝒖𝒆𝒗𝒐,
┆ 𝒐 𝒄𝒐𝒔𝒂 𝒏𝒖𝒆𝒗𝒂 𝒉𝒂𝒃𝒍𝒂 𝒄𝒐𝒏 𝒂𝒅𝒎𝒊𝒏 𝒐𝒇𝒄 𝒅𝒆𝒍 𝒃𝒐𝒕
╰─────────────────`.trim()
  
await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#infobot', fkontak, adReply)

} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.exp = 60
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
