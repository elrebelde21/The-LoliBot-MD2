let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
  if (!global.db.data.settings[conn.user.jid].temporal) throw `𝑴𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒉𝒂 𝒅𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂𝒅𝒐 𝒆𝒔𝒕𝒂́ 𝒇𝒖𝒏𝒄𝒊𝒐𝒏 𝒅𝒆 𝒊𝒏𝒈𝒓𝒆𝒔𝒂 𝒆𝒍 𝒃𝒐𝒕 𝒕𝒆𝒎𝒑𝒐𝒓𝒂𝒍𝒎𝒆𝒏𝒕𝒆 𝒂 𝒈𝒓𝒖𝒑𝒐𝒔 𝒗𝒖𝒆𝒍𝒗𝒂 𝒎𝒂́𝒔 𝒕𝒂𝒓𝒅𝒆 𝒐 𝒔𝒊 𝒆𝒔 𝒐𝒘𝒏𝒆𝒓 𝒅𝒆𝒍 𝒃𝒐𝒕 𝒖𝒔𝒆  *#on temporal* 𝑷𝒂𝒓𝒂 𝒂𝒄𝒕𝒊𝒗𝒂𝒓`
  
  if (!args[0]) throw `𝙐𝙨𝙚𝙧 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙘𝙤𝙢𝙤 𝙚𝙨𝙩𝙚 𝙚𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} 𝙀𝙣𝙡𝙖𝙘𝙚 𝙣𝙪𝙣𝙚𝙧𝙤 𝙙𝙚𝙡 𝙩𝙤𝙠𝙚𝙣𝙨*\n\n*𝙚𝙟𝙚𝙢𝙥𝙡𝙤*\n*${usedPrefix + command} ${nn} 3*\n\n*3 𝑻𝒐𝒌𝒆𝒎 🪙 = 30 𝒎𝒊𝒏𝒖𝒕𝒐𝒔`
let [_, code] = args[0].match(linkRegex) || [] 
if (!linkRegex.test(args[0])) throw `${fg}𝑬𝒏𝒍𝒂𝒄𝒆 𝒏𝒐 𝒗𝒂́𝒍𝒊𝒅𝒐.` //Aquí 

    
  //if (!code) throw `${fg}*ENLACE INCORRECTO, VERIFIQUE QUE EL ENLACE SEA DE UN GRUPO DE WHATSAPP Y QUE NO ESTE CADUCADO*`
let user = db.data.users[m.sender]

  if (!(isPrems || isOwner || isROwner)) { //Para Usuarios
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let img = 'https://i.imgur.com/8fK4h6F.jpg'
if (user.joincount < 1) throw `*¡𝒀𝒂 𝒏𝒐 𝒕𝒊𝒆𝒏𝒆 𝒕𝒐𝒌𝒆𝒏𝒔! 🪙*\n\n*𝑪𝒐𝒎𝒑𝒓𝒂 𝒕𝒐𝒌𝒆𝒏𝒔 𝒑𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒊𝒏𝒗𝒊𝒕𝒂𝒓 𝒂 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫 𝒂 𝒕𝒖 𝒈𝒓𝒖𝒑𝒐 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 ${usedPrefix}buy3 o ${usedPrefix}buyall3* *𝑪𝒂𝒏𝒕𝒊𝒅𝒂𝒅*`
 //if (user.joincount === 0 ) throw `${ag}*¡YA NO TIENES TOKENS! 🪙*\n\n*COMPRA TOKENS PARA PODER INVITAR A GATABOT A TÚ GRUPO CON EL COMANDO ${usedPrefix}buy3* *cantidad*`  
 if (!args[1]) throw `𝙐𝙨𝙚𝙧 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙘𝙤𝙢𝙤 𝙚𝙨𝙩𝙚 𝙚𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} 𝙀𝙣𝙡𝙖𝙘𝙚 𝙣𝙪𝙣𝙚𝙧𝙤 𝙙𝙚𝙡 𝙩𝙤𝙠𝙚𝙣𝙨*\n\n*𝙚𝙟𝙚𝙢𝙥𝙡𝙤*\n*${usedPrefix + command} ${nn} 3*\n\n*3 𝑻𝒐𝒌𝒆𝒎 🪙 = 30 𝒎𝒊𝒏𝒖𝒕𝒐𝒔*`
 if (!linkRegex.test(args[0])) throw `𝑬𝒏𝒍𝒂𝒄𝒆 𝒏𝒐 𝒗𝒂́𝒍𝒊𝒅𝒐` //Aquí 
 if (isNaN(args[1])) throw `*𝑺𝒐𝒍𝒐 𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒆𝒍 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆 𝒕𝒐𝒌𝒆𝒏(S)*`
 if (args[1] < 3) throw `*𝑴𝒂́𝒙𝒊𝒎𝒐 3 𝒕𝒐𝒌𝒆𝒎(S) 𝒑𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒊𝒏𝒗𝒊𝒕𝒂𝒓 𝒂 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫`
 if (args[1] > 3) throw `*𝑴𝒊́𝒏𝒊𝒎𝒐 3 𝒕𝒐𝒌𝒆𝒏(S) 𝑷𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒊𝒏𝒗𝒊𝒕𝒂𝒓 𝒂 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫*` //Solo ingresará si tiene 3 Token(s)
 
let res = await conn.groupAcceptInvite(code) 
conn.reply(m.chat, `😛 𝙎𝙚 𝙝𝙖 𝙪𝙣𝙞𝙙𝙤 𝙡𝙤𝙡𝙞𝙗𝙤𝙩 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤!!!*`, m).then(async() => { 
  user.joincount -= args[1] 
 var jumlahHari = 600000 * args[1] // 10 minutos | Usuarios
 var now = new Date() * 1
//let res = await conn.groupAcceptInvite(code) 
//conn.reply(m.chat, `${eg}😻 *𝑺𝒆 𝒉𝒂 𝒖𝒏𝒊𝒅𝒐 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫 𝒂𝒍 𝒈𝒓𝒖𝒑𝒐!!!*`, m).then(async() => {
 //var jumlahHari = 600000 * 1 // 10 minutos | Usuarios
// var now = new Date() * 1 
 
 if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari
await conn.reply(m.chat, `✅ 𝙎𝙚 𝙝𝙖 𝙪𝙣𝙞𝙙𝙤 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤!!!\n${await conn.getName(res)}\n\n𝙍𝙚𝙘𝙪𝙚𝙧𝙙𝙚 𝙦𝙪𝙚 𝙚𝙨 ⏳𝙏𝙚𝙢𝙥𝙤𝙧𝙖𝙡, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 ${usedPrefix}menu 𝙋𝙖𝙧𝙖 𝙫𝙚𝙯 𝙚𝙡 𝙢𝙚𝙣𝙪́*\n\n🚪 𝙈𝙚 𝙨𝙖𝙡𝙙𝙧𝙚́ 𝙖𝙪𝙩𝙤𝙢𝙖́𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚 𝙚𝙣:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} 𝙇𝙚 𝙦𝙪𝙚𝙙𝙖 ${user.joincount} 𝙩𝙤𝙠𝙚𝙣𝙨(S) 🪙*\n\n❕ *𝙋𝙪𝙚𝙙𝙚 𝙪𝙨𝙖𝙧 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙩𝙖𝙢𝙗𝙞𝙚́𝙣 𝙚𝙣 𝙜𝙧𝙪𝙥𝙤 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙚𝙨𝙩𝙚́ 𝙮𝙤\n\n❕ *𝙎𝙞 𝙦𝙪𝙞𝙚𝙧𝙚 𝙦𝙪𝙚 𝙚𝙨𝙩𝙚 𝙥𝙤𝙧 𝙢𝙖́𝙨 𝙩𝙞𝙚𝙢𝙥𝙤 𝙖𝙪𝙢𝙚𝙣𝙩𝙚 𝙚𝙡 𝙣𝙪𝙣𝙚𝙧𝙤 𝙙𝙚𝙡 𝙩𝙤𝙠𝙚𝙣𝙨 𝙘𝙪𝙖𝙣𝙙𝙤 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 \n*${usedPrefix + command}*\n\n❗ *𝙀𝙣 𝙘𝙖𝙨𝙤  𝙦𝙪𝙚 𝙪𝙣 𝙖𝙙𝙢𝙞𝙣 𝙢𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙮 𝙦𝙪𝙞𝙚𝙧𝙖 𝙦𝙪𝙚 𝙫𝙪𝙚𝙡𝙫𝙖,  𝙟𝙤́𝙙𝙚𝙩𝙚 𝙣𝙤 𝙨𝙚 𝙫𝙖𝙣 𝙥𝙤𝙙𝙚𝙧`, m)
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
  conn.reply(m.chat, `😛 𝙎𝙚 𝙝𝙖 𝙪𝙣𝙞𝙙𝙤 𝙡𝙤𝙡𝙞𝙗𝙤𝙩 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤!!!`, m).then(async() => { //Si el Owner se une al Grupo no habrá temporizador
let img = 'https://i.imgur.com/8fK4h6F.jpg'
 var jumlahHari = 600000 * args[1] // 10 minutos | Owner
 var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari

await conn.reply(m.chat, `✅ 𝙎𝙚 𝙝𝙖 𝙪𝙣𝙞𝙙𝙤 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤!!!\n${await conn.getName(res)}\n\n𝙍𝙚𝙘𝙪𝙚𝙧𝙙𝙚 𝙦𝙪𝙚 𝙚𝙨 ⏳ 𝙏𝙚𝙢𝙥𝙤𝙧𝙖𝙡, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 ${usedPrefix}menu 𝙋𝙖𝙧𝙖 𝙫𝙚𝙯 𝙚𝙡 𝙢𝙚𝙣𝙪́\n\n🚪 *𝙈𝙚 𝙨𝙖𝙡𝙙𝙧𝙚́ 𝙖𝙪𝙩𝙤𝙢𝙖́𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚 𝙚𝙣:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} 𝙇𝙚 𝙦𝙪𝙚𝙙𝙖  ${user.joincount} 𝙩𝙤𝙠𝙚𝙣𝙨(S) 🪙\n\n❕ *𝙋𝙪𝙚𝙙𝙚 𝙪𝙨𝙖𝙧 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙩𝙖𝙢𝙗𝙞𝙚́𝙣 𝙚𝙣 𝙜𝙧𝙪𝙥𝙤 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙚𝙨𝙩𝙚́ 𝙮𝙤*\n\n❕ 𝙎𝙞 𝙦𝙪𝙞𝙚𝙧𝙚 𝙦𝙪𝙚 𝙚𝙨𝙩𝙚 𝙥𝙤𝙧 𝙢𝙖́𝙨 𝙩𝙞𝙚𝙢𝙥𝙤 𝙖𝙪𝙢𝙚𝙣𝙩𝙚 𝙚𝙡 𝙣𝙪𝙣𝙚𝙧𝙤 𝙙𝙚𝙡 𝙩𝙤𝙠𝙚𝙣𝙨 𝙘𝙪𝙖𝙣𝙙𝙤 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 \n*${usedPrefix + command}*\n\n❗ 𝙀𝙣 𝙘𝙖𝙨𝙤  𝙦𝙪𝙚 𝙪𝙣 𝙖𝙙𝙢𝙞𝙣 𝙢𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙮 𝙦𝙪𝙞𝙚𝙧𝙖 𝙦𝙪𝙚 𝙫𝙪𝙚𝙡𝙫𝙖,  𝙟𝙤́𝙙𝙚𝙩𝙚 𝙣𝙤 𝙨𝙚 𝙫𝙖𝙣 𝙥𝙤𝙙𝙚𝙧.`, m)  
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
