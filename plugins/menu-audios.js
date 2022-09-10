const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
 *ミ✨ 𝙷𝙾𝙻𝙰 _${name}_ 💖彡*

   *𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎*
   
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *𝑵𝒐 𝒆𝒔 𝒏𝒆𝒄𝒆𝒔𝒂𝒓𝒊𝒐 𝒆𝒍 𝒑𝒓𝒆𝒇𝒊𝒋𝒐*
┃ *𝑷𝒖𝒆𝒅𝒆 𝒔𝒐𝒍𝒐 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒓 𝒍𝒂*
┃ *𝑷𝒂𝒍𝒂𝒃𝒓𝒂 𝒐 𝑭𝒓𝒂𝒔𝒆.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➫🔊 _Noche de paz_
┃➫🔊 _Buenos dias_
┃➫🔊 _Audio hentai_
┃➫🔊 _Fiesta del admin_
┃➫🔊 _Fiesta del admin 2_
┃➫🔊 _Fiesta del administrador_ 
┃➫🔊 _Viernes_
┃➫🔊 _Mierda de Bot_
┃➫🔊 _Me olvidé_
┃➫🔊 _Baneado_
┃➫🔊 _Feliz navidad_
┃➫🔊 _A nadie le importa_
┃➫🔊 _Sexo_
┃➫🔊 _Vete a la vrg_
┃➫🔊 _Ara ara_
┃➫🔊 _Hola_
┃➫🔊 _Un pato_
┃➫🔊 _Nyanpasu_
┃➫🔊 _Te amo_
┃➫🔊 _Yamete_
┃➫🔊 _Te diagnostico con gay_
┃➫🔊 _Quien es tu sempai botsito 7w7_
┃➫🔊 _Bañate_
┃➫🔊 _Vivan los novios_
┃➫🔊 _Marica quien_
┃➫🔊 _Es puto_
┃➫🔊 _La biblia_
┃➫🔊 _Onichan_
┃➫🔊 _Bot puto_
┃➫🔊 _Feliz cumpleaños_
┃➫🔊 _Pasa pack Bot_
┃➫🔊 _Atencion grupo_
┃➫🔊 _Homero chino_
┃➫🔊 _Oh me vengo_
┃➫🔊 _Murio el grupo_
┃➫🔊 _Siuuu_
┃➫🔊 _Rawr_
┃➫🔊 _UwU_
┃➫🔊 _:c_
┃➫🔊 _a_
┃➫🔊 _Hey_
┃➫🔊 _Enojado_
┃➫🔊 _Enojada_
┃➫🔊 _Chao_
┃➫🔊 _Hentai_
┃➫🔊 _Triste_
┃➫🔊 _Estoy triste_
┃➫🔊 _Me pican los cocos_
┃➫🔊 _Contexto_
┃➫🔊 _Me voy_
┃➫🔊 _Tengo los calzones del admin_
┃➫🔊 _Entrada épica_ 
┃➫🔊 _Esto va ser épico papus_
┃➫🔊 _Ingresa épicamente_
┃➫🔊 _Bv_
┃➫🔊 _Yoshi_
┃➫🔊 _No digas eso papu_
┃➫🔊 _Ma ma masivo_
┃➫🔊 _Masivo_
┃➫🔊 _Basado_
┃➫🔊 _Basada_
┃➫🔊 _Fino señores_
┃➫🔊 _Verdad que te engañe_
┃➫🔊 _Sus_
┃➫🔊 _Ohayo_
┃➫🔊 _La voz de hombre_
┃➫🔊 _Pero esto_
┃➫🔊 _Bien pensado Woody_
┃➫🔊 _Jesucristo_
┃➫🔊 _Wtf_
┃➫🔊 _Una pregunta_
┃➫🔊 _Que sucede_
┃➫🔊 _Hablame_
┃➫🔊 _Pikachu_
┃➫🔊 _Niconico_
┃➫🔊 _Yokese_
┃➫🔊 _Omaiga_
┃➫🔊 _Nadie te preguntó_
┃➫🔊 _Bueno si_
┃➫🔊 _Usted está detenido_
┃➫🔊 _No me hables_
┃➫🔊 _No chu_
┃➫🔊 _El pepe_
┃➫🔊 _Pokémon_
┃➫🔊 _No me hagas usar esto_
┃➫🔊 _Esto va para ti_
┃➫🔊 _Abduzcan_
┃➫🔊 _Joder_
┃➫🔊 _Hablar primos_
┃➫🔊 _Mmm_
┃➫🔊 _Orale_
┃➫🔊 _Me anda buscando anonymous_
┃➫🔊 _Blackpink in your area_
┃➫🔊 _Cambiate a Movistar_
┃➫🔊 _Momento equisde | Momento XD_
┃➫🔊 _Todo bien | 😇_
┃➫🔊 _Te gusta el Pepino | 🥒_
┃➫🔊 _El tóxico_
┃➫🔊 _Moshi moshi_
┃➫🔊 _Calla Fan de BTS_
┃➫🔊 _Que tal grupo_
┃➫🔊 _Muchachos_
┃➫🔊 _Está Zzzz | 😴_
┃➫🔊 _Goku Pervertido_
┃➫🔊 _Potaxio | 🥑_
┃➫🔊 _Nico nico_
┃➫🔊 _El rap de Fernanfloo_
┃➫🔊 _Tal vez_
┃➫🔊 _Corte corte_
┃➫🔊 _Buenas noches_
┃➫🔊 _Porque ta tite_
┃➫🔊 _Eres Fuerte_
┃➫🔊 _Bueno Master | 🫂_
┃➫🔊 _No Rompas más | 💔_
┃➫🔊 _Traiganle una falda_
┃➫🔊 _Se están riendo de mí_
┃➫🔊 _Su nivel de pendejo_
┃➫🔊 _Bienvenido/a | 🥳 | 🤗 | 👋_
┃➫🔊 _Elmo sabe donde vives_
┃➫🔊 _tunometecabrasaramambiche_
┃➫🔊 _Y este quien es_
┃➫🔊 _Motivación_
┃➫🔊 _En caso de una investigación_
┃➫🔊 _Buen día grupo | 🙌_
┃➫🔊 _mi bebito fiu fiu
┃➫🔊 _sabosito
┃➫🔊 _Freefire 
┃➫🔊 _Aguanta
┃➫🔊 _Es viernes
┃➫🔊 _Que quede vos
┃➫🔊 _Feriado 
┃➫🔊 _Me emociono | borracho
┃➫🔊 _Delivery 
┃➫🔊 _Tarado | putos
┃➫🔊 _Bardo
┃➫🔊 _Saliste del grupo
┃➫🔊 _No agregué 
┃➫🔊 _Quiere tener internet gratis
┃➫🔊 _Donde esta?
┃➫🔊 _Q onda | 🤪
┃➫🔊 _La tóxica
┃➫🔊 _Bebesita
┃➫🔊 _Tka 
┃➫🔊 _No la pienso 
┃➫🔊 _Taka Taka 
┃➫🔊 _Bot canta 
┃➫🔊 _Loli conmigo | Loli venir
┃➫🔊 _Grap | trap 
┃➫🔊 _Bruno
┃➫🔊 _Bot dj
┃➫🔊 _Soy guapo
┃➫🔊 _Las reglas del grupo_
𝑺𝒆 𝒗𝒂𝒏 𝒂𝒈𝒓𝒆𝒈𝒂𝒅𝒐 𝒎𝒂𝒔 𝒂𝒖𝒅𝒊𝒐 𝒅𝒆 𝒑𝒐𝒄𝒐,
𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒂𝒈𝒓𝒆𝒈𝒂𝒓 𝒂𝒍𝒈𝒖𝒏 𝒂𝒖𝒅𝒊𝒐 𝒏𝒖𝒆𝒗𝒐, 𝒐 𝒄𝒐𝒔𝒂 𝒏𝒖𝒆𝒗𝒂 𝒉𝒂𝒃𝒍𝒂 𝒄𝒐𝒏 𝒂𝒅𝒎𝒊𝒏 𝒐𝒇𝒄 𝒅𝒆𝒍 𝒃𝒐𝒕
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/elrebelde21/The-LoliBot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
export default  handler
