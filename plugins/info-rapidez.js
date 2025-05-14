import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import os from 'os'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command, isRowner}) => {
try {
//let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: accountsgb, thumbnailUrl: await(await fetch(gataMenu)).buffer() }}}
//let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(gataMenu)).buffer(), sourceUrl: accountsgb }}}
//let dos = [enlace, enlace2]

let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000 }
  
let muptime = clockString(_muptime)
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
}})

let msgTxt = await tr("Comenzado prueba del velocidad", "𝘾𝙤𝙢𝙚𝙣𝙯𝙖𝙣𝙙𝙤 𝙥𝙧𝙪𝙚𝙗𝙖 𝙙𝙚𝙡 𝙫𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙")
let old = performance.now()
const { key } = await conn.sendMessage(m.chat, {text: `${msgTxt} 🚀...`}, {quoted: fkontak});

let neww = performance.now()
let speed = neww - old
let caption = `*🚀 ${await tr("Velocidad")} 🚀*

🚄 *${Math.round(neww - old)}* ms
🚄 *${speed}* ms

*🕕 ${await tr("TIEMPO ACTIVOS")}*
${muptime}
${readMore}
*🟢 ${await tr("CHATS", "C H A T S")}*
▢ *${groupsIn.length}* _${await tr("Chats de grupo")}_
▢ *${groupsIn.length}* _${await tr("Grupos unidos")}_
▢ *${groupsIn.length - groupsIn.length}* _${await tr("Grupos abandonados")}_
▢ *${chats.length - groupsIn.length}* _${await tr("Chats Privados")}_
▢ *${chats.length}* _${await tr("Total Chats")}_

*🔰 ${await tr("SERVIDOR", "S E R V I D O R : S E R V E R")}*
*🟢 ${await tr("RAM")}:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 ${await tr("RAM Libre")}:* ${format(freemem())}
*💻 ${await tr("Plataforma")} :* \`\`\`${os.platform()}\`\`\`
*📡 ${await tr("Servidor")} :* _${os.hostname()}_
*⏳ ${await tr("Uptime")} :* ${toTime(os.uptime() * 1000)}
${readMore}
*${await tr("NodeJS Uso de memoria")}*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `*${await tr("Uso total de la CPU")}*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

*${await tr("CPU Core(s) Uso")} (${cpus.length} Core CPU)*
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`
await conn.sendMessage(m.chat, {text: caption, edit: key});
} catch (e) {
m.reply(`\`\`\`⚠️ ${await tr("OCURRIO UN ERROR")} ⚠️\`\`\`\n\n> *${await tr("Reporta el siguiente error a mi creador con el comando:")}* #report\n\n>>> ${e} <<<< `)    
console.log(e) 
}}
handler.help = ['ping', 'speed']
handler.tags = ['main']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
handler.register = true 
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [' ' + d, ' dias, ', h, ' hs, ', m, ' min, ', s, ' seg '].map(v => v.toString().padStart(2, 0)).join('')
}

function toTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  return `${days} dias, ${hours % 24} horas, ${minutes % 60} minutos, ${seconds % 60} segundos `;
}