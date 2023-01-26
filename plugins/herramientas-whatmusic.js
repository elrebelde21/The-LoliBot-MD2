import fs from 'fs'
import acrcloud from 'acrcloud'
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})

let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) {
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `
𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨 𝙙𝙚  𝙡𝙖 𝙗𝙪𝙨𝙦𝙪𝙚𝙙𝙖 

• 📌 𝙏𝙞𝙩𝙪𝙡𝙤: ${title}
• 👨‍🎤 𝘼𝙧𝙩𝙞𝙨𝙩𝙖: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'No encontrado'}
• 💾 𝘼𝙡𝙗𝙪𝙢: ${album.name || 'No encontrado'}
• 🌐 𝙂𝙚𝙣𝙚𝙧𝙤: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'No encontrado'}
• 📆 𝙁𝙚𝙘𝙝𝙖 𝙙𝙚 𝙡𝙖𝙣𝙯𝙖𝙢𝙞𝙚𝙣𝙩𝙤: ${release_date || 'No encontrado'}
`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else throw '*❗𝙄𝙣𝙛𝙤, 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙖𝙪𝙙𝙞𝙤*'
}
handler.command = /^quemusica|quemusicaes|whatmusic$/i
handler.money = 20
export default handler
