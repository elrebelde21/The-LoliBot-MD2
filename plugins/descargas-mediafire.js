import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let user = db.data.users[m.sender]
let time = global.db.data.users[m.sender].prue + 60000
if (new Date - global.db.data.users[m.sender].prue < 60000) throw `*ESPERA UNOS MINUTOS PARA USAR OTRO COMANDO*`
if (!args[0]) throw `${mg}𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚𝙡 𝙢𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n ${usedPrefix + command} https://www.mediafire.com/file/cv64tns6co3272q/Lolibot.zip/file`
   try {  
      let res = await mediafireDl(args[0])
      let { name, size, date, mime, link } = res
      let caption = `
╭┄ ${eg}
┆ 𓃠 ${wm}*    
┆——————«•»——————
┆ 💫 𝙉𝙤𝙢𝙗𝙧𝙚   
┆ ${name}
┆——————«•»——————
┆ 💪 𝙋𝙚𝙨𝙤
┆ ${size}
┆——————«•»——————
┆ 🚀 𝙏𝙞𝙥𝙤
┆ ${mime}
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ`.trim()
//let author = global.author
await conn.sendButton(m.chat, caption, `*⏳ 𝐸𝑆𝑃𝐸𝑅𝐸 𝐸𝑁 𝐿𝑂 𝑄𝑈𝐸 𝐸𝑁𝑉𝐼𝑂 𝑆𝑈𝑆 𝐴𝑅𝐶𝐻𝐼𝑉𝑂. . . .* `, [['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ⚡', '.menu']], m)
   await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true })
   } catch {  
     let sticker = './src/stickers1.webp'
conn.sendFile(m.chat, sticker, 'error.webp', '', m)}
/* conn.sendFile(m.chat, vn, 'descarga.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
*/
global.db.data.users[m.sender].prue = new Date * 1
}

handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.register = true
handler.limit = 3
handler.exp = 100
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}


async function mediafireDl(url) {
   const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`)
   const $ = cheerio.load(res.data)
   const link = $('#downloadButton').attr('href')
   const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','')
   const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text()
   const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','')
   let mime = ''
   let rese = await axios.head(link)
   mime = rese.headers['content-type']
   return { name, size, date, mime, link }
}
