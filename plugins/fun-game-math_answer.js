global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  
let id = m.chat
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^𝘾𝙪𝙖𝙡 𝙚𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return 
await delay(5000)  
conn.sendButton(m.chat, `${lenguajeGB['smsAvisoMG']()}𝒀𝒂 𝒔𝒆 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒊𝒐́  𝒆𝒔𝒕𝒂 𝒑𝒓𝒆𝒈𝒖𝒏𝒕𝒂`, wm, null, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖 𝙅𝙪𝙜𝙖𝙧 🧮', `/math`], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m)
if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
let gatacoins = global.db.data.users[m.sender].money += 500
if (m.text == math.result) {
 
conn.sendButton(m.chat, `💖 𝙍𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖\n𝙌𝙪𝙚 𝙥𝙧𝙤 😎\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝙂𝙖𝙣𝙖𝙨𝙩𝙚\n🏆 *_${math.bonus}_* 𝙓𝙋\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝘽𝙤𝙣𝙤\n🎁 *_$500_* 𝙇𝙤𝙡𝙞𝙘𝙤𝙞𝙣𝙨\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤\n💵 *_$${gatacoins}_* 𝙇𝙤𝙡𝙞𝙘𝙤𝙞𝙣𝙨`, wm, null, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖 𝙅𝙪𝙜𝙖𝙧 🧮', `/math ${math.mode}`], ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 🎡', `.juegosmenu`]], m)
global.db.data.users[m.sender].exp += math.bonus

clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
conn.sendButton(m.chat, `${lenguajeGB['smsAvisoAG']()}𝑺𝒆 𝒂𝒄𝒂𝒃𝒂𝒓𝒐𝒏 𝒕𝒖𝒔 𝒐𝒑𝒐𝒓𝒕𝒖𝒏𝒊𝒅𝒂𝒅𝒆𝒔\n𝑳𝒂 𝒓𝒆𝒔𝒑𝒖𝒆𝒔𝒕𝒂 𝒆𝒔 *${math.result}*`, wm, null, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖 𝙅𝙪𝙜𝙖𝙧 🧮', `/math ${math.mode}`], ['𝙏𝙤𝙥𝙨 🏆', `.top`]], m)
clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}❌️ 𝑹𝒆𝒔𝒑𝒖𝒆𝒔𝒕𝒂 𝒊𝒏𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒂!!\n𝑻𝒆 𝒒𝒖𝒆𝒅𝒂𝒏 *${global.math[id][2]}* 𝑶𝒑𝒐𝒓𝒕𝒖𝒏𝒊𝒅𝒂𝒅𝒆𝒔 😱`, m)
}}}

handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0
export default handler
const delay = time => new Promise(res => setTimeout(res, time))