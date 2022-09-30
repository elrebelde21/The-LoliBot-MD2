async function handler(m, { command }) {
command = command.toLowerCase()
this.anonymous = this.anonymous ? this.anonymous : {}
switch (command) {
case 'next':
case 'leave': {
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) return this.sendButton(m.chat, `${fg}𝙉𝙊 𝙀𝙎𝙏𝘼𝙎 𝙀𝙉 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊\n𝙎𝙄 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝙄𝙉𝙄𝘾𝙄𝘼𝙍 𝙐𝙉 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊 𝙐𝙎𝘼 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *#start* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙐𝙎𝘼𝙍 𝙀𝙇 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝘽𝙊𝙏𝙊𝙉`, wm, null, [['𝙄𝙉𝙄𝘾𝙄𝘼𝙍 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊', `.start`]], m)
m.reply(`${rg}❇️ 𝙐𝙎𝙏𝙀𝘿 𝙎𝙀 𝙁𝙐𝙀 𝘿𝙀𝙇 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊`)
let other = room.other(m.sender) 
if (other) await this.sendButton(other, `${ag}𝙀𝙇 𝙊𝙏𝙍𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘼𝘽𝘼𝙉𝘿𝙊𝙉𝙊 𝙀𝙇 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊\n𝙎𝙄 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝙄𝙍 𝘼 𝙊𝙏𝙍𝙊 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊 𝙐𝙎𝘼 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *#start* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙐𝙎𝘼𝙍 𝙀𝙇 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝘽𝙊𝙏𝙊𝙉`, wm, null, [['𝙄𝙉𝙄𝘾𝙄𝘼𝙍 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊', `.start`]], m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'start': {
if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, `${ag}𝙏𝙊𝘿𝘼𝙑𝙄𝘼 𝙀𝙎𝙏𝘼𝙎 𝙀𝙉 𝙐𝙉 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊 𝙊 𝙀𝙉 𝙀𝙎𝙋𝙀𝙍𝘼 𝘼 𝙌𝙐𝙀 𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙎𝙀 𝙐𝙉𝘼 𝙋𝘼𝙍𝘼 𝘾𝙃𝘼𝙏𝙀𝘼𝙍\n𝙎𝙄 𝙌𝙐𝙄𝙀𝙍𝙀 𝙎𝘼𝙇𝙄𝙍 𝘿𝙀𝙇 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊 𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *#leave* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙐𝙎𝘼𝙍 𝙀𝙇 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝘽𝙊𝙏𝙊𝙉`, wm, null, [['𝙎𝘼𝙇𝙄𝙍 𝘿𝙀𝙇 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊', `.leave`]], m)
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
await this.sendButton(room.a, `${eg}𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙎𝙀 𝙃𝘼 𝙐𝙉𝙄𝘿𝙊 𝘼𝙇 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊!!\n\n✅ 𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝘾𝙃𝘼𝙏𝙀𝘼𝙍\n✅`,wm, null, [['𝙊𝙏𝙍𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊', `.next`]], m)
room.b = m.sender
room.state = 'CHATTING'
await this.sendButton(m.chat, `${eg}𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙎𝙀 𝙃𝘼 𝙐𝙉𝙄𝘿𝙊 𝘼𝙇 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊!!\n\n✅ 𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝘾𝙃𝘼𝙏𝙀𝘼𝙍`, wm, null, [['𝙊𝙏𝙍𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊', `.next`]], m)
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
await this.sendButton(m.chat, `${rg}𝙀𝙎𝙋𝙀𝙍𝘼𝙉𝘿𝙊 𝘼 𝙌𝙐𝙀 𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙎𝙀 𝙐𝙉𝘼 𝘼𝙇 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊 𝙏𝙀𝙉𝙂𝘼 𝙋𝘼𝘾𝙄𝙀𝙉𝘾𝙄𝘼 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍\n𝙎𝙄 𝙌𝙐𝙄𝙀𝙍𝙀 𝙎𝘼𝙇𝙄𝙍 𝘿𝙀𝙇 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊 𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *#leave* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙐𝙎𝘼𝙍 𝙀𝙇 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝘽𝙊𝙏𝙊𝙉`, wm, null, [['𝙎𝘼𝙇𝙄𝙍 𝘿𝙀𝙇 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊', `.leave`]], m)
}
break
}}}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']
handler.private = true
export default handler
