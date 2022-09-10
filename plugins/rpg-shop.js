const xpperlimit = 400
let handler = async (m, { conn, command, args, usedPrefix }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    //conn.reply(m.chat, `
    let gata = `
╭━━〔 𝑫𝒂𝒕𝒐𝒔 𝒅𝒆 𝒄𝒐𝒎𝒑𝒓𝒂 〕━━⬣
┃ 𝑪𝒐𝒎𝒑𝒓𝒂 𝒆𝒇𝒆𝒄𝒕𝒖𝒂𝒅𝒂  : +${count} 💎 
┃ *𝑯𝒂 𝒈𝒂𝒔𝒕𝒂𝒅𝒐* :  -${xpperlimit * count} 𝙓𝙋
╰━━━━━〔 *𓃠 ${vs}* 〕━━━━⬣`.trim()
    
await conn.sendHydrated(m.chat, gata, wm, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['💵 𝑪𝒐𝒎𝒑𝒓𝒂 𝙓10', '.buy 10'],
['💸 𝑪𝒐𝒎𝒑𝒓𝒂 𝙓20', '.buy 20'],
['🐈 𝑪𝒐𝒎𝒑𝒓𝒂 𝒄𝒐𝒏 𝒍𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔', '/buy2']
], m,)
    
  } else //conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantes💎`, m)
  await conn.sendHydrated(m.chat, `*𝑵𝒐 𝒕𝒊𝒆𝒏𝒆 𝒔𝒖𝒇𝒊𝒄𝒊𝒆𝒏𝒕𝒆 𝑿𝑷 𝒑𝒂𝒓𝒂 𝒄𝒐𝒎𝒑𝒓𝒂𝒓 ${count} 𝒅𝒊𝒂𝒎𝒂𝒏𝒕𝒆* 💎\n\n*𝑳𝒆 𝒓𝒆𝒄𝒐𝒎𝒊𝒆𝒏𝒅𝒐 𝒒𝒖𝒆 𝒊𝒏𝒕𝒆𝒓𝒂𝒄𝒕𝒖́𝒆𝒔 𝒄𝒐𝒏 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒊𝒂, 𝒑𝒖𝒆𝒅𝒆 𝒗𝒆𝒛 𝒔𝒖 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒊𝒂 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 ${usedPrefix}exp o ${usedPrefix}experiencia. 𝑻𝒂𝒎𝒃𝒊𝒆́𝒏 𝒑𝒖𝒆𝒅𝒆 𝒄𝒐𝒎𝒑𝒓𝒂𝒓 𝒄𝒐𝒏 𝒍𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐${usedPrefix}buy2*`, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['🐈 𝑪𝒐𝒎𝒑𝒓𝒂 𝒄𝒐𝒏 𝒍𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔', '/buy2'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)
}
handler.help = ['Buy', 'Buyall']
handler.tags = ['xp']
handler.register = true
handler.command = ['buy', 'buyall'] 

handler.disabled = false

export default handler
