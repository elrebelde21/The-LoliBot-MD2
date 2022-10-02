import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `𝙌𝙪𝙚 𝙗𝙪𝙨𝙘𝙖𝙧❓\n ️𝘿𝙚𝙗𝙚 𝙚𝙨𝙘𝙧𝙞𝙗𝙞𝙧 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} loli*`
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
let link = img
//conn.sendFile(m.chat, img, 'error.jpg', `*𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴 ${text}*`, m)
  
  conn.sendHydrated(m.chat, `💞 𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐𝒔: ${text}`, `𝑭𝒐𝒏𝒅𝒐𝒔 | ${wm}`, img, img, '☘️ 𝙐𝙍𝙇', null, null, [
['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚', `${usedPrefix + command} ${text}`],
['🔍 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 ', `#pinterest ${text}`],
['🔍 𝙂𝙤𝙤𝙜𝙡𝙚 ', `#image ${text}`],
], m)

}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wp|wallpaper2?)$/i
handler.exp = 29
export default handler 
