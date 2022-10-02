let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*𝙌𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤?𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 /𝙩𝙞́𝙩𝙪𝙡𝙤𝙨 𝙙𝙚𝙡 𝙡𝙖 𝙘𝙖𝙣𝙘𝙞𝙤́𝙣*\n\n*—◉ 𝙀𝙟𝙚𝙢𝙥𝙡𝙤:*\n*${usedPrefix + command} bad bunny*`    
try {
let search = await yts(args.join(" "))
let listSerch = []
let listSerch2 = []
let listSerch3 = []
let listSerch4 = []
let teskd = `𝑴𝒖́𝒔𝒊𝒄𝒂 𝒓𝒆𝒍𝒂𝒄𝒊𝒐𝒏𝒂𝒅𝒂 𝒄𝒐𝒏: ${args.join(" ")}`
const sections = [{
title: `|－－－－－{ 𝑨𝒖𝒅𝒊𝒐 }－－－－－|`,
rows: listSerch },
{              
title: `|－－－－－{ 𝑽𝒊𝒅𝒆𝒐 }－－－－－|`,
rows: listSerch2 },
{              
title: `|－－{ 𝑫𝒐𝒄𝒖𝒎𝒆𝒏𝒕𝒐𝒔  ＭＰ３ }－－|`,
rows: listSerch3 },
{              
title: `|－－{ 𝑫𝒐𝒄𝒖𝒎𝒆𝒏𝒕𝒐𝒔  ＭＰ４ }－－|`,
rows: listSerch4 }]
const listMessage = {
text: teskd,
footer: '𝑬𝒍𝒊𝒋𝒂 𝒖𝒏𝒂 𝒐𝒑𝒄𝒊𝒐́𝒏 𝒚 𝒑𝒓𝒆𝒔𝒊𝒐𝒏𝒆 𝒆𝒏𝒗𝒊𝒂𝒓',
title: " 『 𝑴𝒖́𝒔𝒊𝒄𝒂 𝒓𝒆𝒍𝒂𝒄𝒊𝒐𝒏𝒂𝒅𝒂 』",
buttonText: "[♦ 𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐𝒔 ♦]",
sections}
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})
listSerch2.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})
listSerch3.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3doc ${i.url}`})
listSerch4.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4doc ${i.url}`})}
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*𝑼𝒇𝒇, 𝒆𝒓𝒓𝒐, 𝒗𝒖𝒆𝒍𝒗𝒆 𝒂𝒍 𝒊𝒏𝒕𝒆𝒏𝒕𝒂 𝒄𝒐𝒏 𝒐𝒕𝒓𝒐𝒔 𝒏𝒐𝒎𝒃𝒓𝒆𝒔*')
}}
handler.command = /^playlist|playlist2$/i
export default handler
