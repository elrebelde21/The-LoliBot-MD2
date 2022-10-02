/* CREDITOS: https://github.com/FG98F */

let handler = async (m, { args, usedPrefix, command, conn }) => {
let fa = `
𝙐𝙨𝙖𝙧 𝙙𝙚𝙡 𝙡𝙖 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙢𝙖𝙣𝙚𝙧𝙖: 

𝙀𝙟𝙚𝙢𝙥𝙡𝙤
*${usedPrefix + command} 50*`.trim()

if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let apuesta = parseInt(args[0])

let users = global.db.data.users[m.sender]
//let time = global.db.data.users[m.sender].lastwork + 30000
//if (new Date - users.lastwork < 30000) throw `*𝙑𝙐𝙀𝙇𝙑𝘼 𝙀𝙉 ${msToTime(time - new Date())} 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙏𝙄𝙉𝙐𝘼𝙍 𝘼𝙋𝙊𝙎𝙏𝘼𝙉𝘿𝙊* 🎰\n\n*𝘾𝙊𝙈𝙀 𝘽𝘼𝘾𝙆 𝙄𝙉 ${msToTime(time - new Date())} 𝙏𝙊 𝘾𝙊𝙉𝙏𝙄𝙉𝙐𝙀 𝘽𝙀𝙏𝙏𝙄𝙉𝙂* 💰`

if (apuesta < 10) throw `𝑫𝒆𝒃𝒆𝒓 𝒅𝒆𝒍 𝒂𝒑𝒐𝒔𝒕𝒂𝒓 𝒖𝒏 𝒎𝒊́𝒏𝒊𝒎𝒐 𝒅𝒆 *10*`

if (users.exp < apuesta) {
throw `𝑵𝒐 𝒂𝒍𝒄𝒂𝒏𝒛𝒂 𝒑𝒂𝒓𝒂 𝒂𝒑𝒐𝒔𝒕𝒂𝒓 𝒆𝒙𝒑, 𝒍𝒆 𝒓𝒆𝒄𝒐𝒎𝒊𝒆𝒏𝒅𝒐 𝒊𝒏𝒕𝒆𝒓𝒂𝒄𝒕𝒖𝒂𝒓 𝒄𝒐𝒏 𝒆𝒍 𝒃𝒐𝒕 𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒎𝒂́𝒔 𝒓𝒆𝒄𝒖𝒓𝒔𝒐𝒔`    
}
if (command == 'slot1') {
let time = global.db.data.users[m.sender].lastslot + 30000
if (new Date - users.lastslot < 30000) throw `*𝑽𝒖𝒆𝒍𝒗𝒂 𝒆𝒏 ${msToTime(time - new Date())} 𝑷𝒂𝒓𝒂 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒂𝒓 𝒂 𝒑𝒐𝒔𝒕𝒂𝒏𝒅𝒐 𝒆𝒙𝒑* 🎰`
users.lastslot = new Date * 1
    
let emojis = ["🍁", "⚡", "🍇"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ *𝙌𝙪𝙚 𝙥𝙧𝙤!! 𝙝𝙖𝙨 𝙜𝙖𝙣𝙖𝙙𝙤𝙨 +${apuesta + apuesta} 𝙚𝙭𝙥*\n\n🥳 *`
users.exp += apuesta
} else if (a == b || a == c || b == c) {
end = `🙀 *𝘾𝙖𝙨𝙞!!! 𝙫𝙪𝙚𝙡𝙫𝙖 𝙖 𝙞𝙣𝙩𝙚𝙣𝙩𝙖*\n*𝘽𝙤𝙣𝙤 𝙙𝙚 +50 𝙚𝙭𝙥*\n\n😯 *`
users.exp += 50
} else {
end = `😿 *𝙃𝙖𝙨 𝙥𝙚𝙧𝙙𝙞𝙙𝙤!! ❌ -${apuesta} 𝙚𝙭𝙥*`
users.exp -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let s = `
🎰 | *RANURAS* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *SLOTS*   | 🎰`
await conn.sendHydrated(m.chat, `${s}\n\n${end}`, wm, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['⚡ 𝑨𝒑𝒐𝒔𝒕𝒂𝒓 𝒐𝒕𝒓𝒂 𝒗𝒆𝒛', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝑨𝒑𝒐𝒔𝒕𝒂𝒓 𝒄𝒐𝒏 𝑳𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝑨𝒑𝒐𝒔𝒕𝒂𝒓 𝒄𝒐𝒏 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆', `${usedPrefix}slot3 ${apuesta}`]
], m,)}   


if (users.money < apuesta)  { 
throw `𝑵𝒐 𝒂𝒍𝒄𝒂𝒏𝒛𝒂 𝒑𝒂𝒓𝒂 𝒂𝒑𝒐𝒔𝒕𝒂𝒓 𝑳𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔, 𝒍𝒆 𝒓𝒆𝒄𝒐𝒎𝒊𝒆𝒏𝒅𝒐 𝒊𝒏𝒕𝒆𝒓𝒂𝒄𝒕𝒖𝒂𝒓 𝒄𝒐𝒏 𝒆𝒍 𝒃𝒐𝒕 𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒎𝒂́𝒔 𝒓𝒆𝒄𝒖𝒓𝒔𝒐𝒔`    
}
if (command == 'slot2') {
let time = global.db.data.users[m.sender].lastslot + 30000
if (new Date - users.lastslot < 30000) throw `*𝑽𝒖𝒆𝒍𝒗𝒂 𝒆𝒏 ${msToTime(time - new Date())} 𝑷𝒂𝒓𝒂 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒂𝒓 𝒂 𝒑𝒐𝒔𝒕𝒂𝒏𝒅𝒐 𝑳𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔* 🎰*`
users.lastslot = new Date * 1
    
let emojis = ["🐈", "🐓", "🐙"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ *𝙌𝙪𝙚 𝙥𝙧𝙤!! 𝙝𝙖𝙨 𝙜𝙖𝙣𝙖𝙙𝙤𝙨 +${apuesta + apuesta} 𝑳𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔*`
users.money += apuesta
} else if (a == b || a == c || b == c) {
end = `🙀 *𝘾𝙖𝙨𝙞!!, 𝙫𝙪𝙚𝙡𝙫𝙖 𝙖 𝙞𝙣𝙩𝙚𝙣𝙩𝙖*\n*𝘽𝙤𝙣𝙤 𝙙𝙚 +30 𝑳𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔*`
users.money += 30
} else {
end = `😿 *𝙃𝙖𝙨 𝙥𝙚𝙧𝙙𝙞𝙙𝙤!! ❌ -${apuesta} 𝑳𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔*`
users.money -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let ss = `
🎰 | *RANURAS* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *SLOTS*   | 🎰`
await conn.sendHydrated(m.chat, `${ss}\n\n${end}`, wm, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['🐈 𝑨𝒑𝒐𝒔𝒕𝒂𝒓 𝒐𝒕𝒓𝒂 𝒗𝒆𝒛', `${usedPrefix}slot2 ${apuesta}`],
['⚡ 𝑨𝒑𝒐𝒔𝒕𝒂𝒓 𝒄𝒐𝒏 𝒆𝒙𝒑', `${usedPrefix}slot1 ${apuesta}`],
['💎 𝑨𝒑𝒐𝒔𝒕𝒂𝒓 𝒄𝒐𝒏 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆', `${usedPrefix}slot3 ${apuesta}`]
], m,)}

    
if (users.limit < apuesta) {  
throw `𝑵𝒐 𝒂𝒍𝒄𝒂𝒏𝒛𝒂 𝒑𝒂𝒓𝒂 𝒂𝒑𝒐𝒔𝒕𝒂𝒓 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆, 𝒍𝒆 𝒓𝒆𝒄𝒐𝒎𝒊𝒆𝒏𝒅𝒐 𝒊𝒏𝒕𝒆𝒓𝒂𝒄𝒕𝒖𝒂𝒓 𝒄𝒐𝒏 𝒆𝒍 𝒃𝒐𝒕 𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒎𝒂́𝒔 𝒓𝒆𝒄𝒖𝒓𝒔𝒐𝒔`    
}
if (command == 'slot3') {
let time = global.db.data.users[m.sender].lastslot + 30000
if (new Date - users.lastslot < 30000) throw `*𝑽𝒖𝒆𝒍𝒗𝒂 𝒆𝒏 ${msToTime(time - new Date())} 𝑷𝒂𝒓𝒂 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒂𝒓 𝒂 𝒑𝒐𝒔𝒕𝒂𝒏𝒅𝒐 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆* 🎰`
users.lastslot = new Date * 1
    
let emojis = ["🪵", "💣", "💎"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ *𝙌𝙪𝙚 𝙥𝙧𝙤!! 𝙝𝙖𝙨 𝙜𝙖𝙣𝙖𝙙𝙤𝙨 +${apuesta + apuesta} 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆*`
users.limit += apuesta
} else if (a == b || a == c || b == c) {
end = `😯 *𝘾𝙖𝙨𝙞!!, 𝙫𝙪𝙚𝙡𝙫𝙖 𝙖 𝙞𝙣𝙩𝙚𝙣𝙩𝙖*\n*𝘽𝙤𝙣𝙤 𝙙𝙚 +2 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆*`
users.limit += 2
} else {
end = `😿 *𝙃𝙖𝙨 𝙥𝙚𝙧𝙙𝙞𝙙𝙤!! ❌ -${apuesta} 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆*`
users.limit -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let sss = `
🎰 | *RANURAS* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *SLOTS*   | 🎰`
await conn.sendHydrated(m.chat, `${sss}\n\n${end}`, wm, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['💎 𝑨𝒑𝒐𝒔𝒕𝒂𝒓 𝒐𝒕𝒓𝒂 𝒗𝒆𝒛', `${usedPrefix}slot3 ${apuesta}`],
['⚡ 𝑨𝒑𝒐𝒔𝒕𝒂𝒓 𝒄𝒐𝒏 𝒆𝒙𝒑', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝑨𝒑𝒐𝒔𝒕𝒂𝒓 𝒄𝒐𝒏 𝑳𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔', `${usedPrefix}slot2 ${apuesta}`]
], m,)}
        
        
if (command == 'slot') {       
await conn.sendHydrated(m.chat, `*𝑬𝒍𝒊𝒋𝒂 𝒆𝒍 𝒒𝒖𝒆 𝒂𝒑𝒐𝒔𝒕𝒂𝒓𝒂́ ${apuesta}*`, wm, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫', null, null, [
['⚡ 𝒆𝒙𝒑', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝑳𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆', `${usedPrefix}slot3 ${apuesta}`]
], m,)}
        
if (command == 'apostar') {       
await conn.sendHydrated(m.chat, `*𝑬𝒍𝒊𝒋𝒂 𝒆𝒍 𝒒𝒖𝒆 𝒂𝒑𝒐𝒔𝒕𝒂𝒓𝒂́ ${apuesta}*`, wm, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫', null, null, [
['⚡ 𝒆𝒙𝒑', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝑳𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆', `${usedPrefix}slot3 ${apuesta}`]
], m,)}

//global.db.data.users[m.sender].lastwork = new Date * 1
       
}
handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['slot', 'apostar', 'slot1', 'slot2', 'slot3']
handler.limit = 1
handler.register = true
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}
