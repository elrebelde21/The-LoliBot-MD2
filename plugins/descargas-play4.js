
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `Que esta buscado? ingrese el nombre del tema\n\nEjemplo *${usedPrefix + command}* ozuna`
	let vid = (await yts(text)).all[0]
	if (!vid) throw `tema no encontrado/ o el serve esta caido intente de nuevo`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId<
	let play = `┌───⊷ 🅟🅛🅐🅨
│📌 *Título* : ${title}
│📆 *Publicado:* ${ago}
│⌚ *Duración:* ${timestamp}
│👀 *Vistas:* ${views}
│
╰─────────────────`
 await conn.sendButton(m.chat, play, lb, thumbnail, [
    ['AUDIO', `${usedPrefix}fgmp3 ${url}`],
    ['VIDEO', `${usedPrefix}fgmp4 ${url}`]
  ], m, nn)
}
handler.help = ['play4']
handler.tags = ['downloader']
handler.command = ['play4', 'playvid']

export default handler

