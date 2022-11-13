import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  
  let neww = performance.now()
  let speed = neww - old
 let txt = `*_𝘾𝙤𝙢𝙚𝙣𝙯𝙖𝙣𝙙𝙤 𝙥𝙧𝙪𝙚𝙗𝙖 𝙙𝙚𝙡 𝙫𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙..._*`.trim()
  m.reply(txt)

await m.reply('🚀')
await m.reply('🚀🚀')
await m.reply('🚀🚀🚀')
await m.reply(`╰⊱✅⊱ *𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐𝒔* ⊱✅⊱╮`)
 
let infobt = `
🚄 *𝑽𝒆𝒍𝒐𝒄𝒊𝒅𝒂𝒅:*\n *${speed}* *Milisegundos*\n\n🚄 *𝑺𝒑𝒆𝒆𝒅:*\n *${speed}* *Milliseconds*

≡ *INFO BOT*
  
*ESTADO*
▢ *${groupsIn.length}* Chats de grupo
▢ *${groupsIn.length}* Gropos unidos
▢ *${groupsIn.length - groupsIn.length}* Grupos abandonados
▢ *${chats.length - groupsIn.length}* Chats privados
▢ *${chats.length}* Total Chats

 *≡ S E R V E R*
*🛑 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 FreeRAM:* ${format(freemem())}

*≡  NodeJS Uso de memoria*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
`
conn.sendButton(m.chat, infobt, igfg, null, [
  ['🔰 menu', `${usedPrefix}menu`],
   ['❇️ Grupos', `${usedPrefix}grupos`]
 ], m)

}
handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler
