import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw 
	
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
if (!chat.autolevelup)
return !0
	
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
	  	 
conn.sendButton(m.chat, '🐈 ' + wm, `*┌───⊷ 𝙉𝙄𝙑𝙀𝙇*
▢  𝙁𝙚𝙡𝙞𝙘𝙞𝙩𝙖𝙘𝙞𝙤𝙣𝙚𝙨 𝙨𝙪𝙗𝙞𝙧𝙩𝙚 𝙙𝙚 𝙣𝙞𝙫𝙚𝙡 🎉 
▢  𝙎𝙚𝙜𝙪𝙞́ 𝙖𝙨𝙞́ 🥳🤑
▢ 𝙉𝙞𝙫𝙚𝙡 𝙖𝙣𝙩𝙚𝙧𝙞𝙤𝙧: *${before}*
▢ 𝙉𝙞𝙫𝙚𝙡 𝙖𝙘𝙩𝙪𝙖𝙡: *${user.level}*
└──────────────
*𝘾𝙪𝙖́𝙣𝙩𝙤𝙨 𝙢𝙖́𝙨 𝙞𝙣𝙩𝙚𝙧𝙖𝙘𝙩𝙪́𝙚𝙨 𝙘𝙤𝙣 𝙏𝙝𝙚 𝙇𝙤𝙡𝙞𝙗𝙤𝙩-𝙈𝘿, 𝙢𝙖𝙮𝙤𝙧 𝙨𝙚𝙧𝙖́ 𝙩𝙪 𝙣𝙞𝙫𝙚𝙡!!!*`.trim())
    }
}	
//export const disabled = false 
