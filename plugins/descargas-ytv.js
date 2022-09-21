import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, command, usedPrefix }) => {
if (!args || !args[0]) throw `${mg}𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤\nn𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*`
try {
let { thumbnail, video, title } = await youtubedl(args[0])
.catch(async () => await youtubedlv2(args[0]))
let link = await video['480p'].download()
const isY = /y(es)/gi.test(args[1])
const limitedSize = (isPrems || isOwner ? 350 : 200) * 3074
let isLimit = limitedSize < video['480p'].fileSize
if (!isY) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
╭━━❰  ${wm}  ❱━━⬣
┃🔰 𝙏𝙞𝙩𝙪𝙡𝙤
┃ ${title}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ✨ 𝙋𝙚𝙨𝙤 
┃ ${video['480p'].fileSizeH}
╰━━━━━━❰ *𓃠 ${vs}* ❱━━━━━⬣`.trim(), m)
  
await conn.sendFile(m.chat, link, title + '.mp3', `
 🔰 𝘼𝙦𝙪𝙞 𝙚𝙨𝙩𝙖 𝙩𝙪 𝙫𝙞𝙙𝙚𝙤 
 🔥 𝙏𝙞𝙩𝙪𝙡𝙤: ${title}`.trim(), m, null, {
  
asDocument: 0
})
}catch(e){
m.reply(`${fg}𝑬𝒔 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒒𝒖𝒆 𝒆𝒍 𝒂𝒓𝒄𝒉𝒊𝒗𝒐 𝒔𝒆𝒂 𝒎𝒖𝒚 𝒑𝒆𝒔𝒂𝒅𝒐 𝒊𝒏𝒕𝒆𝒏𝒕𝒆́ 𝒄𝒐𝒏 𝒐𝒕𝒓𝒐`)
console.log(e)  
}
/* 
let info = `💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()
  
conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu'] 
], m,) 
*/
}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.exp = 100
export default handler
