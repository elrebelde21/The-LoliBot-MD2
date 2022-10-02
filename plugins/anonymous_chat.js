async function handler(m, { command }) {
command = command.toLowerCase()
this.anonymous = this.anonymous ? this.anonymous : {}
switch (command) {
case 'next':
case 'leave': {
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) return this.sendButton(m.chat, `𝑵𝒐 𝒆𝒔𝒕𝒂 𝒆𝒍 𝒄𝒉𝒂𝒕 𝒂𝒏𝒐́𝒏𝒊𝒎𝒐\n𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒊𝒏𝒊𝒄𝒊𝒂𝒓 𝒖𝒏 𝒄𝒉𝒂𝒕 𝒂𝒏𝒐́𝒏𝒊𝒎𝒐 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 *#start* 𝑶 𝒑𝒖𝒆𝒅𝒆 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 𝒃𝒐𝒕𝒐́𝒏,`, wm, null, [['𝑰𝒏𝒊𝒄𝒊𝒂 𝒄𝒉𝒂𝒕 𝒂𝒏𝒐́𝒏𝒊𝒎𝒐', `.start`]], m)
m.reply(`❇️ 𝑼𝒔𝒕𝒆𝒅 𝒔𝒆 𝒇𝒖𝒆 𝒅𝒆𝒍 𝒄𝒉𝒂𝒕 𝒂𝒏𝒐́𝒏𝒊𝒎𝒐`)
let other = room.other(m.sender) 
if (other) await this.sendButton(other, `𝑬𝒍 𝒐𝒕𝒓𝒐 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒂𝒃𝒂𝒏𝒅𝒐𝒏𝒐 𝒆𝒍 𝒄𝒉𝒂𝒕 𝒂𝒏𝒐́𝒏𝒊𝒎𝒐 \n𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒊𝒓 𝒂 𝒐𝒕𝒓𝒐 𝒄𝒉𝒂𝒕 𝒂𝒏𝒐́𝒏𝒊𝒎𝒐 𝒖𝒔𝒆𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *#start* 𝑶 𝒑𝒖𝒆𝒅𝒆 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 𝒃𝒐𝒕𝒐́𝒏 `, wm, null, [['𝑰𝒏𝒊𝒄𝒊𝒂 𝒄𝒉𝒂𝒕 𝒂𝒏𝒐́𝒏𝒊𝒎𝒐', `.start`]], m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'start': {
if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, `𝑻𝒐𝒅𝒂𝒗𝒊́𝒂 𝒆𝒔𝒕𝒂 𝒆𝒍 𝒄𝒉𝒂𝒕 𝒂𝒏𝒐́𝒏𝒊𝒎𝒐 𝒐 𝒆𝒏 𝒆𝒔𝒑𝒆𝒓𝒂 𝒂 𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒔𝒆 𝒖𝒏𝒂 𝒑𝒂𝒓𝒂 𝒄𝒉𝒂𝒕𝒆𝒂𝒓\n𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒔𝒂𝒍𝒊𝒓 𝒅𝒆𝒍 𝒄𝒉𝒂𝒕 𝒂𝒏𝒐́𝒏𝒊𝒎𝒐 𝒖𝒔𝒆𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *#leave* 𝑶 𝒑𝒖𝒆𝒅𝒆 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 𝒃𝒐𝒕𝒐́𝒏`, wm, null, [['𝑺𝒂𝒍𝒊𝒓 𝒅𝒆𝒍 𝒄𝒉𝒂𝒕 𝒂𝒏𝒐́𝒏𝒊𝒎𝒐', `.leave`]], m)
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
await this.sendButton(room.a, `𝑨𝒍𝒈𝒖𝒊𝒆𝒏 𝒔𝒆 𝒉𝒂 𝒖𝒏𝒊𝒅𝒐 𝒂𝒍 𝒄𝒉𝒂𝒕 𝑨𝒏𝒐́𝒏𝒊𝒎𝒐!!\n\n✅ 𝒀𝒂 𝒑𝒖𝒆𝒅𝒆 𝒄𝒉𝒂𝒕𝒆𝒂\n✅`,wm, null, [['𝑶𝒕𝒓𝒐𝒔 𝒖𝒔𝒖𝒂𝒓𝒊𝒐𝒔', `.next`]], m)
room.b = m.sender
room.state = 'CHATTING'
await this.sendButton(m.chat, `𝑨𝒍𝒈𝒖𝒊𝒆𝒏 𝒔𝒆 𝒉𝒂 𝒖𝒏𝒊𝒅𝒐 𝒂𝒍 𝒄𝒉𝒂𝒕 𝑨𝒏𝒐́𝒏𝒊𝒎𝒐!!\n\n✅ 𝒀𝒂 𝒑𝒖𝒆𝒅𝒆 𝒄𝒉𝒂𝒕𝒆𝒂`, wm, null, [['𝑶𝒕𝒓𝒐𝒔 𝒖𝒔𝒖𝒂𝒓𝒊𝒐𝒔', `.next`]], m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
await this.sendButton(m.chat, `𝑬𝒔𝒑𝒆𝒓𝒂 𝒂 𝒒𝒖𝒆 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒔𝒆 𝒖𝒏𝒂𝒓 𝒂𝒍 𝒄𝒉𝒂𝒕 𝑨𝒏𝒐́𝒏𝒊𝒎𝒐 𝒕𝒆𝒏𝒈𝒂 𝒑𝒂𝒄𝒊𝒆𝒏𝒄𝒊𝒂\n𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒔𝒂𝒍𝒊𝒓 𝒖𝒔𝒆𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *#leave*  𝑶 𝒑𝒖𝒆𝒅𝒆 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 𝒃𝒐𝒕𝒐́𝒏`, wm, null, [['𝑺𝒂𝒍𝒊𝒓 𝒅𝒆𝒍 𝒄𝒉𝒂𝒕 𝒂𝒏𝒐́𝒏𝒊𝒎𝒐', `.leave`]], m)
}
break
}}}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']
handler.private = true
export default handler
