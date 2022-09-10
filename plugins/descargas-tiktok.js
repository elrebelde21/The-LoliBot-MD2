import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝙄𝙣𝙛𝙤❗] 𝑬𝒏𝒍𝒂𝒄𝒆 𝒅𝒆 𝒕𝒊𝒌𝒕𝒐𝒌 𝒇𝒂𝒍𝒕𝒂𝒏𝒕𝒆, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒊𝒏𝒈𝒓𝒆𝒔𝒆 𝒆𝒏 𝒆𝒏𝒍𝒂𝒄𝒆/𝒍𝒊𝒏𝒌 𝒅𝒆 𝒂𝒍𝒈𝒖́𝒏 𝒗𝒊́𝒅𝒆𝒐 𝒅𝒆 𝒕𝒊𝒌𝒕𝒐𝒌\n\n*—◉ 𝑬𝒋𝒆𝒎𝒑𝒍𝒐:*\n*${usedPrefix + command} https://vm.tiktok.com/ZMNQvKJqL/?k=1*`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[❗𝙄𝙣𝙛𝙤❗] 𝑬𝒏𝒍𝒂𝒄𝒆 𝒅𝒆 𝒕𝒊𝒌𝒕𝒐𝒌 𝒊𝒏𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒐, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒊𝒏𝒈𝒓𝒆𝒔𝒆 𝒆𝒍 𝒆𝒏𝒍𝒂𝒄𝒆/𝒍𝒊𝒏𝒌 𝒅𝒆 𝒂𝒍𝒈𝒖́𝒏 𝒗𝒊́𝒅𝒆𝒐 𝒅𝒆 𝒕𝒊𝒌𝒕𝒐𝒌\n\n*—◉ 𝑬𝒋𝒆𝒎𝒑𝒍𝒐:*\n*${usedPrefix + command} https://vm.tiktok.com/ZMNQvKJqL/?k=1*`
let url = (await fetch(text)).url
let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
let data = res.aweme_detail.video.play_addr.url_list
if (!data.length) throw '*[❗𝙄𝙣𝙛𝙤❗] 𝑳𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐, 𝒐𝒄𝒖𝒓𝒓𝒊𝒐́ 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒂𝒍 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒓 𝒔𝒖 𝒗𝒊𝒅𝒆𝒐, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒗𝒖𝒆𝒍𝒗𝒂 𝒂 𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒍𝒐'
let meta = await getInfo(url).catch(_ => {})
await m.reply('⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱\n𝙀𝙨𝙥𝙚𝙧𝙚 𝙪𝙣𝙤𝙨 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 𝙚𝙡 𝙦𝙪𝙚 𝙢𝙖𝙣𝙙𝙤 𝙨𝙪𝙨 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 🔰')
let buttons = [{ buttonText: { displayText: '𝑨𝒖𝒅𝒊𝒐' }, buttonId: `${usedPrefix}tomp3` }]
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