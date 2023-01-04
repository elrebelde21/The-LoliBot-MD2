let handler  = async (m, { conn, usedPrefix, command }) => {
let res = "https://recoders-area.caliph.repl.co/api/lolivid"
await delay(5000)
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 🆕', `/${command}`]], m)}
handler.help = ['lolivid']
handler.tags = ['random']
handler.command = /^(lolivid|lolivideos|lolívid)$/i
export default handler
const delay = time => new Promise(res => setTimeout(res, time))