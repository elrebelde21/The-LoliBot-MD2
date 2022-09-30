let handler  = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 +18 𝙚𝙨𝙩𝙖́𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨 𝙪𝙨𝙚  #𝙤𝙣 𝙢𝙤𝙙𝙤𝙝𝙤𝙧𝙣𝙮 𝙥𝙖𝙧𝙖 𝙖𝙘𝙩𝙞𝙫𝙖𝙧`
let res = pickRandom(asupan)
conn.sendHydrated(m.chat, null, null, res, 'https://github.com/elrebelde21/The-LoliBot-MD', '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 🥵', `/${command}`]], m)}
handler.help = ['videoxxx']
handler.tags = ['random']
handler.command = /^(pornobivid|pornobisexualvid|Pornobivid|pornovidbi|pornovidbisexual|Pornovidbisexual|pornobiv|Pornobiv|pornovbi)$/i
handler.level = 5
handler.limit = 4
handler.register = true
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

const asupan = [
"https://k.top4top.io/m_2263d17nb0.mp4",
"https://l.top4top.io/m_2263rs1410.mp4",
"https://g.top4top.io/m_2263qat3w0.mp4",
"https://e.top4top.io/m_2263reat85.mp4",
"https://d.top4top.io/m_2263bdzwa0.mp4",
"https://k.top4top.io/m_22636swzc0.mp4",
"https://l.top4top.io/m_2263h1jc03.mp4",
"https://k.top4top.io/m_2263mh8u04.mp4",
"https://l.top4top.io/m_2263wonsx1.mp4",
"https://f.top4top.io/m_22631d63o0.mp4",
"https://e.top4top.io/m_22630da3s0.mp4",
"https://j.top4top.io/m_2263e0tg90.mp4",
"https://e.top4top.io/m_226338lts5.mp4",
"https://e.top4top.io/m_226307zk80.mp4",
"https://h.top4top.io/m_2263q60k60.mp4",
"https://a.top4top.io/m_2263xdx270.mp4",
]
