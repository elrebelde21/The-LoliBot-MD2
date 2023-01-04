import  fetch from 'node-fetch'
let handler = async(m, { conn, args, usedPrefix }) => {
if (args.length == 0) return conn.reply(m.chat, `𝑼𝒔𝒂𝒓 𝒅𝒆 𝒆𝒔𝒕𝒂 𝒎𝒂𝒏𝒆𝒓𝒂 𝒆𝒔𝒄𝒓𝒊𝒃𝒊\n  ${usedPrefix}kpop\n 𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix}kpop bts\n\nBusquedas disponibles:\nblackpink, exo, bts`, m)
if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
.then(res => res.text())
.then(body => {
let randomkpop = body.split('\n')
let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
conn.sendFile(m.chat, randomkpopx, '', 'Dasar Kpopers', m)
})
.catch(() => {
conn.reply(m.chat, '𝑼𝒇𝒇, 𝒐𝒄𝒖𝒓𝒓𝒊𝒐́ 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓,  𝒗𝒖𝒆𝒍𝒗𝒆 𝒂𝒍 𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓', m)
})
} else {
conn.reply(m.chat, `𝑳𝒂 𝒃𝒖́𝒔𝒒𝒖𝒆𝒅𝒂 𝒏𝒐 𝒆𝒔𝒕𝒂́ 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆, 𝒆𝒔𝒄𝒓𝒊𝒃𝒆 𝒑𝒂𝒓𝒂 ${usedPrefix}kpop  𝒗𝒆𝒛 𝒍𝒂 𝒍𝒊𝒔𝒕𝒂 𝒃𝒖́𝒔𝒒𝒖𝒆𝒅𝒂 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆`, m)
}
await delay(9000)
}
handler.help = ['kpop'].map(v => v + ' <query>')
handler.tags = ['image']
handler.command = /^(kpop)$/i
handler.register = true
export default handler 
const delay = time => new Promise(res => setTimeout(res, time))