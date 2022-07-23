import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙽 𝙴𝙽𝙻𝙰𝙲𝙴/𝙻𝙸𝙽𝙺 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} https://vm.tiktok.com/ZMNQvKJqL/?k=1*`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙽 𝙴𝙽𝙻𝙰𝙲𝙴/𝙻𝙸𝙽𝙺 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} https://vm.tiktok.com/ZMNQvKJqL/?k=1*`
let url = (await fetch(text)).url
let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
let data = res.aweme_detail.video.play_addr.url_list
if (!data.length) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*'
let meta = await getInfo(url).catch(_ => {})
await m.reply('⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱\n𝙀𝙨𝙥𝙚𝙧𝙚 𝙪𝙣𝙤𝙨 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 𝙚𝙡 𝙦𝙪𝙚 𝙢𝙖𝙣𝙙𝙤 𝙨𝙪𝙨 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 🔰')
let buttons = [{ buttonText: { displayText: '𝙰𝚄𝙳𝙸𝙾' }, buttonId: `${usedPrefix}tomp3` }]
conn.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', footer: await shortUrl(data[data.length - 1]), buttons }, { quoted: m })}

handler.help = ['tiktok']
handler.tags = ['downloader']
handler.alias = ['tiktok', 'tikdl', 'tiktokdl', 'tiktoknowm']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
export default handler

async function getInfo(url) {
let id = url.split('?')[0].split('/')
let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
return res?.seoProps?.metaParams}
async function shortUrl(url) {
return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()}