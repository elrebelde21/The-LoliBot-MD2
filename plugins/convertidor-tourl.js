import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏 𝒗𝒊́𝒅𝒆𝒐 𝒐 𝒊𝒎𝒂𝒈𝒆𝒏 𝒑𝒂𝒓𝒂 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒓 𝒆𝒏 𝒆𝒏𝒍𝒂𝒄𝒆 `
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
m.reply(`*𝒆𝒏𝒍𝒂𝒄𝒆* \n*${link}*`)
}
handler.help = ['tourl <reply image>']
handler.tags = ['sticker']
handler.command = /^(upload|tourl|toenlace)$/i
export default handler
