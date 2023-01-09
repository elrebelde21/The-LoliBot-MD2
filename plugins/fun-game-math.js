global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
await delay(6000)
let mat =`${lenguajeGB['smsAvisoIIG']()}\n\n✨ 𝙋𝙪𝙚𝙙𝙚 𝙪𝙨𝙖𝙧 𝙡𝙤𝙨 𝙗𝙤𝙩𝙤𝙣𝙚𝙨 𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙞́ 𝙡𝙖 𝙙𝙞𝙛𝙞𝙘𝙪𝙡𝙩𝙖𝙙

𝑵𝒊𝒗𝒆𝒍 𝒅𝒆𝒍 𝒅𝒊𝒇𝒊𝒄𝒖𝒍𝒕𝒂𝒅
${Object.keys(modes).join('  |  ')}

𝑬𝒋𝒆𝒎𝒑𝒍𝒐
${usedPrefix + command} noob
${usedPrefix + command} impossible2

😼 𝑴𝒊𝒆𝒏𝒕𝒓𝒂𝒔 𝒎𝒂́𝒔 𝒅𝒊𝒇𝒊𝒄𝒖𝒍𝒕𝒂𝒅 𝒎𝒂𝒚𝒐𝒓 𝒓𝒆𝒄𝒐𝒎𝒑𝒆𝒏𝒔𝒂
`.trim()
if (args.length < 1) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['😋 𝙁𝙖𝙘𝙞𝙡', `${usedPrefix + command} easy`], 
['😎 𝘿𝙞𝙛𝙞𝙘𝙞𝙡', `${usedPrefix + command} hard`], 
['🤑 𝙀𝙭𝙩𝙧𝙚𝙢𝙤', `${usedPrefix + command} extreme`]], m)
  
let mode = args[0].toLowerCase()
if (!(mode in modes)) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['😋 𝙁𝙖𝙘𝙞𝙡', `${usedPrefix + command} easy`], 
['😎 𝘿𝙞𝙛𝙞𝙘𝙞𝙡', `${usedPrefix + command} hard`], 
['🤑 𝙀𝙭𝙩𝙧𝙚𝙢𝙤', `${usedPrefix + command} extreme`]], m) 
  
let id = m.chat
if (id in global.math) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}𝑻𝒐𝒅𝒂𝒗𝒊́𝒂 𝒉𝒂𝒚 𝒑𝒓𝒆𝒈𝒖𝒏𝒕𝒂𝒔 𝒔𝒊𝒏 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓 𝒆𝒍 𝒆𝒔𝒕𝒆 𝒄𝒉𝒂𝒕!!`, global.math[id][0])
//let ii = global.db.data.users[m.sender].limit += 10 math.dia
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `╭┄〔 *${wm}* 〕┄⊱
┆𝘾𝙪𝙖𝙡 𝙚𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚 *${math.str} = ?*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆𝙏𝙞𝙚𝙢𝙥𝙤
┆🧭 *${(math.time / 1000).toFixed(0)} 𝚜 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙚 𝙖 𝙚𝙨𝙩𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙮 𝙂𝙖𝙣𝙖 
┆🏆 *${math.bonus} 𝙓𝙋*
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ`, m),
math, 4,
  
await conn.sendHydrated(m.chat, `⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️`, `ʀᴇsᴘᴏɴᴅᴇ ᴀʟ ᴍᴇɴsᴀᴊᴇ ᴅᴇʟ ᴀʀʀɪʙᴀ  ᴄᴏɴ ʟᴀ ʀᴇsᴘᴜᴇsᴛᴀ`, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫', null, null, [ 
['𝙏𝙤𝙥𝙨 🏆', `${usedPrefix}top`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪 ☘️', `${usedPrefix}menu`]
], m), math, 4,

setTimeout(() => { 
if (global.math[id]) conn.sendButton(m.chat, `${lenguajeGB['smsAvisoAG']()}𝑺𝒆 𝒂𝒄𝒂𝒃𝒐 𝒆𝒍 𝒕𝒊𝒆𝒎𝒑𝒐!!\n𝑳𝒂 𝒓𝒆𝒔𝒑𝒖𝒆𝒔𝒕𝒂 𝒆𝒔 *${math.result}*`, wm, null, [['𝙄𝙣𝙩𝙚𝙣𝙩𝙖𝙧 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤', `${usedPrefix + command} ${math.mode}`], ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 🎡', `/juegosmenu`]], global.math[id][0])
delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math|mates|matemáticas/i

handler.register = true
export default handler
const delay = time => new Promise(res => setTimeout(res, time))

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 30], 
easy: [-10, 10, -10, 10, '*/+-', 20000, 50],
medium: [-40, 40, -20, 20, '*/+-', 30000, 200],
hard: [-100, 100, -70, 70, '*/+-', 40000, 500],
extreme: [-999999, 999999, -999999, 999999, '*/', 40000, 2500],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 50000, 5500],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 60000, 8500]
} 

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

// XP
function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
