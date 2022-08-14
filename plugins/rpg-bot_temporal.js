let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
  if (!global.db.data.settings[conn.user.jid].temporal) throw `${ag}𝑴𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒉𝒂 𝒅𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂𝒅𝒐 𝒆𝒔𝒕𝒂́ 𝒇𝒖𝒏𝒄𝒊𝒐𝒏 𝒅𝒆 𝒊𝒏𝒈𝒓𝒆𝒔𝒂 𝒆𝒍 𝒃𝒐𝒕 𝒕𝒆𝒎𝒑𝒐𝒓𝒂𝒍𝒎𝒆𝒏𝒕𝒆 𝒂 𝒈𝒓𝒖𝒑𝒐𝒔 𝒗𝒖𝒆𝒍𝒗𝒂 𝒎𝒂́𝒔 𝒕𝒂𝒓𝒅𝒆 𝒐 𝒔𝒊 𝒆𝒔 𝒐𝒘𝒏𝒆𝒓 𝒅𝒆𝒍 𝒃𝒐𝒕 𝒖𝒔𝒆  *#on temporal* 𝑷𝒂𝒓𝒂 𝒂𝒄𝒕𝒊𝒗𝒂𝒓`
  
  if (!args[0]) throw `${mg}𝑼𝒔𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒄𝒐𝒎𝒐 𝒆𝒔𝒕𝒆 𝒆𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command} 𝑬𝒏𝒍𝒂𝒄𝒆 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆 𝒕𝒐𝒌𝒆𝒎(s)*\n\n*𝑬𝒋𝒆𝒎𝒑𝒍𝒐*\n*${usedPrefix + command} ${nn} 3*\n\n*3 𝑻𝒐𝒌𝒆𝒎 🪙 = 30 𝒎𝒊𝒏𝒖𝒕𝒐𝒔`
let [_, code] = args[0].match(linkRegex) || [] 
if (!linkRegex.test(args[0])) throw `${fg}𝑬𝒏𝒍𝒂𝒄𝒆 𝒏𝒐 𝒗𝒂́𝒍𝒊𝒅𝒐.` //Aquí 

    
  //if (!code) throw `${fg}*ENLACE INCORRECTO, VERIFIQUE QUE EL ENLACE SEA DE UN GRUPO DE WHATSAPP Y QUE NO ESTE CADUCADO*`
let user = db.data.users[m.sender]

  if (!(isPrems || isOwner || isROwner)) { //Para Usuarios
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let img = 'https://i.imgur.com/8fK4h6F.jpg'
if (user.joincount < 1) throw `${ag}*¡𝒀𝒂 𝒏𝒐 𝒕𝒊𝒆𝒏𝒆 𝒕𝒐𝒌𝒆𝒏𝒔! 🪙*\n\n*𝑪𝒐𝒎𝒑𝒓𝒂 𝒕𝒐𝒌𝒆𝒏𝒔 𝒑𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒊𝒏𝒗𝒊𝒕𝒂𝒓 𝒂 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫 𝒂 𝒕𝒖 𝒈𝒓𝒖𝒑𝒐 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 ${usedPrefix}buy3 o ${usedPrefix}buyall3* *𝑪𝒂𝒏𝒕𝒊𝒅𝒂𝒅*`
 //if (user.joincount === 0 ) throw `${ag}*¡YA NO TIENES TOKENS! 🪙*\n\n*COMPRA TOKENS PARA PODER INVITAR A GATABOT A TÚ GRUPO CON EL COMANDO ${usedPrefix}buy3* *cantidad*`  
 if (!args[1]) throw `${mg}𝑼𝒔𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒄𝒐𝒎𝒐 𝒆𝒔𝒕𝒆 𝒆𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command} 𝑬𝒏𝒍𝒂𝒄𝒆 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆 𝒕𝒐𝒌𝒆𝒎(s)*\n\n*𝑬𝒋𝒆𝒎𝒑𝒍𝒐*\n*${usedPrefix + command} ${nn} 3*\n\n*3 𝑻𝒐𝒌𝒆𝒎 🪙 = 30 𝒎𝒊𝒏𝒖𝒕𝒐𝒔*`
 if (!linkRegex.test(args[0])) throw `${fg}𝑬𝒏𝒍𝒂𝒄𝒆 𝒏𝒐 𝒗𝒂́𝒍𝒊𝒅𝒐` //Aquí 
 if (isNaN(args[1])) throw `${mg}*𝑺𝒐𝒍𝒐 𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒆𝒍 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆 𝒕𝒐𝒌𝒆𝒏(S)*`
 if (args[1] < 3) throw `${fg}*𝑴𝒂́𝒙𝒊𝒎𝒐 3 𝒕𝒐𝒌𝒆𝒎(S) 𝒑𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒊𝒏𝒗𝒊𝒕𝒂𝒓 𝒂 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫`
 if (args[1] > 3) throw `${fg}*𝑴𝒊́𝒏𝒊𝒎𝒐 3 𝒕𝒐𝒌𝒆𝒏(S) 𝑷𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒊𝒏𝒗𝒊𝒕𝒂𝒓 𝒂 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫*` //Solo ingresará si tiene 3 Token(s)
 
let res = await conn.groupAcceptInvite(code) 
conn.reply(m.chat, `${eg}😛 𝑺𝒆 𝒉𝒂 𝒖𝒏𝒊𝒅𝒐 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫 𝒂𝒍 𝒈𝒓𝒖𝒑𝒐!!!*`, m).then(async() => { 
  user.joincount -= args[1] 
 var jumlahHari = 600000 * args[1] // 10 minutos | Usuarios
 var now = new Date() * 1
//let res = await conn.groupAcceptInvite(code) 
//conn.reply(m.chat, `${eg}😻 *𝑺𝒆 𝒉𝒂 𝒖𝒏𝒊𝒅𝒐 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫 𝒂𝒍 𝒈𝒓𝒖𝒑𝒐!!!*`, m).then(async() => {
 //var jumlahHari = 600000 * 1 // 10 minutos | Usuarios
// var now = new Date() * 1 
 
 if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari
await conn.reply(m.chat, `✅ 𝑺𝒆 𝒉𝒂 𝒖𝒏𝒊𝒅𝒐 𝒂𝒍 𝒈𝒓𝒖𝒑𝒐!!!\n${await conn.getName(res)}\n\n𝑹𝒆𝒄𝒖𝒆𝒓𝒅𝒆 𝒒𝒖𝒆 𝒆𝒔 ⏳ 𝒕𝒆𝒎𝒑𝒐𝒓𝒂𝒍, 𝒖𝒔𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 ${usedPrefix}menu 𝑷𝒂𝒓𝒂 𝒗𝒆𝒛 𝒆𝒍 𝒎𝒆𝒏𝒖́*\n\n🚪 𝑴𝒆 𝒔𝒂𝒍𝒅𝒓𝒆́ 𝒂𝒖𝒕𝒐𝒎𝒂́𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆 𝒆𝒏:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} 𝑳𝒆 𝒒𝒖𝒆𝒅𝒂 ${user.joincount} 𝒕𝒐𝒌𝒆𝒏(S) 🪙*\n\n❕ *𝑷𝒖𝒆𝒅𝒆 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒕𝒂𝒎𝒃𝒊𝒆́𝒏 𝒆𝒏 𝒈𝒓𝒖𝒑𝒐 𝒎𝒊𝒆𝒏𝒕𝒓𝒂𝒔 𝒆𝒔𝒕𝒆́ 𝒚𝒐\n\n❕ *𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒒𝒖𝒆 𝒆𝒔𝒕𝒆́ 𝒑𝒐𝒓 𝒎𝒂́𝒔 𝒕𝒊𝒆𝒎𝒑𝒐 𝒂𝒖𝒎𝒆𝒏𝒕𝒆 𝒆𝒍 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆 𝒕𝒐𝒌𝒆𝒏𝒔 𝑪𝒖𝒂𝒏𝒅𝒐 𝒖𝒔𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐\n*${usedPrefix + command}*\n\n❗ *𝑬𝒏 𝒄𝒂𝒔𝒐 𝒒𝒖𝒆  𝒖𝒏 𝒂𝒅𝒎𝒊𝒏 𝒎𝒆 𝒆𝒍𝒊𝒎𝒊𝒏𝒆́ 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒚 𝒒𝒖𝒊𝒆𝒓𝒂 𝒒𝒖𝒆 𝒗𝒖𝒆𝒍𝒗𝒂 𝒋𝒐𝒅𝒆𝒓𝒕𝒆 𝒏𝒐 𝒔𝒆 𝒗𝒂𝒏 𝒑𝒐𝒅𝒆𝒓`, m)
await conn.reply(m.chat, `${wm} *𝑬𝒔 𝒖𝒏 𝒃𝒐𝒕 𝒅𝒆 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 𝒒𝒖𝒆 𝒕𝒆 𝒂𝒚𝒖𝒅𝒂𝒓𝒂́ 𝒂 𝒓𝒆𝒂𝒍𝒊𝒛𝒂𝒓 𝒅𝒊𝒇𝒆𝒓𝒆𝒏𝒕𝒆 𝒂𝒄𝒕𝒊𝒗𝒊𝒅𝒂𝒅𝒆𝒔 🪄 𝑨𝒍 𝒑𝒓𝒊𝒗𝒂𝒅𝒐 𝒐 𝒈𝒓𝒖𝒑𝒐 𝒚 𝒕𝒂𝒎𝒃𝒊𝒆́𝒏 𝒕𝒆 𝒗𝒂𝒔 𝒂 𝒅𝒊𝒗𝒆𝒓𝒕𝒊𝒓 🎈  𝑪𝒐𝒏 𝒔𝒖𝒔 𝒎𝒖́𝒍𝒕𝒊𝒑𝒍𝒆𝒔 𝒇𝒖𝒏𝒄𝒊𝒐𝒏𝒆𝒔, 𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝒅𝒆 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫!!! 😸*\n\n💖 *𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫 𝒇𝒖𝒆 𝒊𝒏𝒗𝒊𝒕𝒂𝒅𝒐 𝒑𝒐𝒓:*\n${username}`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} 𝑨𝒅𝒊𝒄𝒊𝒐𝒏𝒂𝒍 ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, 𝑬𝒍 𝒃𝒐𝒕 𝒔𝒆 𝒂𝒑𝒂𝒈𝒂 𝒂 𝒕𝒊𝒆𝒎𝒑𝒐: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m) 
}})

       
} else if ((isOwner || !isPrems || isROwner)) { //Para Owner
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
  
if (user.joincount === 0 ) throw `${ag}*¡𝒀𝒂 𝒏𝒐 𝒕𝒊𝒆𝒏𝒆 𝒕𝒐𝒌𝒆𝒏𝒔! 🪙*\n\n*𝑪𝒐𝒎𝒑𝒓𝒂 𝒕𝒐𝒌𝒆𝒏𝒔 𝒑𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒊𝒏𝒗𝒊𝒕𝒂𝒓 𝒂 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫 𝒂 𝒕𝒖 𝒈𝒓𝒖𝒑𝒐 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 ${usedPrefix}buy3* *𝑪𝒂𝒏𝒕𝒊𝒅𝒂𝒅*`
  if (!args[1]) throw `${mg}*𝑼𝒔𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒄𝒐𝒎𝒐 𝒆𝒔𝒕𝒆 𝒆𝒋𝒆𝒎𝒑𝒍𝒐*\n*${usedPrefix + command} 𝑬𝒏𝒍𝒂𝒄𝒆 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆 𝒕𝒐𝒌𝒆𝒎(s)*\n\n*𝑬𝒋𝒆𝒎𝒑𝒍𝒐*\n*${usedPrefix + command} ${nn} 3*\n\n*3 𝑻𝒐𝒌𝒆𝒎 🪙 = 30 𝒎𝒊𝒏𝒖𝒕𝒐𝒔*`
if (!linkRegex.test(args[0])) throw `${fg}𝑬𝒏𝒍𝒂𝒄𝒆 𝒏𝒐 𝒗𝒂́𝒍𝒊𝒅𝒐 .` //Aquí 

  let res = await conn.groupAcceptInvite(code) 
  conn.reply(m.chat, `${eg}😛 𝑺𝒆 𝒉𝒂 𝒖𝒏𝒊𝒅𝒐 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫 𝒂𝒍 𝒈𝒓𝒖𝒑𝒐!!!`, m).then(async() => { //Si el Owner se une al Grupo no habrá temporizador
let img = 'https://i.imgur.com/8fK4h6F.jpg'
 var jumlahHari = 600000 * args[1] // 10 minutos | Owner
 var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari

await conn.reply(m.chat, `✅ 𝑺𝒆 𝒉𝒂 𝒖𝒏𝒊𝒅𝒐 𝒂𝒍 𝒈𝒓𝒖𝒑𝒐!!!\n${await conn.getName(res)}\n\n*𝑹𝒆𝒄𝒖𝒆𝒓𝒅𝒆 𝒒𝒖𝒆 𝒆𝒔 ⏳ 𝒕𝒆𝒎𝒑𝒐𝒓𝒂𝒍, 𝒖𝒔𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 ${usedPrefix}menu 𝑷𝒂𝒓𝒂 𝒗𝒆𝒛 𝒆𝒍 𝒎𝒆𝒏𝒖́\n\n🚪 *𝑴𝒆 𝒔𝒂𝒍𝒅𝒓𝒆́ 𝒂𝒖𝒕𝒐𝒎𝒂́𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆 𝒆𝒏:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} 𝑳𝒆 𝒒𝒖𝒆𝒅𝒂 ${user.joincount} 𝒕𝒐𝒌𝒆𝒏(S) 🪙*\n\n❕ *𝑷𝒖𝒆𝒅𝒆 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒕𝒂𝒎𝒃𝒊𝒆́𝒏 𝒆𝒏 𝒈𝒓𝒖𝒑𝒐 𝒎𝒊𝒆𝒏𝒕𝒓𝒂𝒔 𝒆𝒔𝒕𝒆́ 𝒚𝒐*\n\n❕ 𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒒𝒖𝒆 𝒆𝒔𝒕𝒆́ 𝒑𝒐𝒓 𝒎𝒂́𝒔 𝒕𝒊𝒆𝒎𝒑𝒐 𝒂𝒖𝒎𝒆𝒏𝒕𝒆 𝒆𝒍 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆 𝒕𝒐𝒌𝒆𝒏𝒔 𝑪𝒖𝒂𝒏𝒅𝒐 𝒖𝒔𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐\n*${usedPrefix + command}*\n\n❗ 𝑬𝒏 𝒄𝒂𝒔𝒐 𝒒𝒖𝒆  𝒖𝒏 𝒂𝒅𝒎𝒊𝒏 𝒎𝒆 𝒆𝒍𝒊𝒎𝒊𝒏𝒆́ 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒚 𝒒𝒖𝒊𝒆𝒓𝒂 𝒒𝒖𝒆 𝒗𝒖𝒆𝒍𝒗𝒂 𝒋𝒐𝒅𝒆𝒓𝒕𝒆 𝒏𝒐 𝒔𝒆 𝒗𝒂𝒏 𝒑𝒐𝒅𝒆𝒓.`, m)  
await conn.reply(m.chat, `${wm} 𝑬𝒔 𝒖𝒏 𝒃𝒐𝒕 𝒅𝒆 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 𝒒𝒖𝒆 𝒕𝒆 𝒂𝒚𝒖𝒅𝒂𝒓𝒂́ 𝒂 𝒓𝒆𝒂𝒍𝒊𝒛𝒂𝒓 𝒅𝒊𝒇𝒆𝒓𝒆𝒏𝒕𝒆 𝒂𝒄𝒕𝒊𝒗𝒊𝒅𝒂𝒅𝒆𝒔 🪄 𝑨𝒍 𝒑𝒓𝒊𝒗𝒂𝒅𝒐 𝒐 𝒈𝒓𝒖𝒑𝒐 𝒚 𝒕𝒂𝒎𝒃𝒊𝒆́𝒏 𝒕𝒆 𝒗𝒂𝒔 𝒂 𝒅𝒊𝒗𝒆𝒓𝒕𝒊𝒓 🎈 𝑪𝒐𝒏 𝒔𝒖𝒔 𝒎𝒖́𝒍𝒕𝒊𝒑𝒍𝒆𝒔 𝒇𝒖𝒏𝒄𝒊𝒐𝒏𝒆𝒔, 𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝒅𝒆 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫!!! 😸*\n\n💖 *𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫 𝒇𝒖𝒆 𝒊𝒏𝒗𝒊𝒕𝒂𝒅𝒐 𝒑𝒐𝒓:*\n${username}`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} 𝑨𝒅𝒊𝒄𝒊𝒐𝒏𝒂𝒍 ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, 𝑬𝒍 𝒃𝒐𝒕 𝒔𝒆 𝒂𝒑𝒂𝒈𝒂 𝒂 𝒕𝒊𝒆𝒎𝒑𝒐: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m)
                
} conn.sendButton(m.chat, '', wm, null, [['Creadora', `/creadora`], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m, res) })}
    
}

handler.help = ['temporal', 'tiempo']
handler.command = ['bottemporal', 'botemporal', 'addbot', 'botadd'] ///^(temporal|tiempo)$/i
export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " *Día(s)* ☀️\n" + hours + " *Hora(s)* ⏳\n" + minutes + " *Minuto(s)* ⏰\n" + sec + " *Segundo(s)* 🕐\n";
    //return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}
