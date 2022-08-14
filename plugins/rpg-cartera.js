let handler = async (m, { usedPrefix, conn}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
await m.reply(`
╭━〔 👝 *𝑪𝒂𝒏𝒕𝒆𝒓𝒂 * 〕━⬣
┃ ${name} 𝑬𝒏 𝒔𝒖 𝒄𝒂𝒓𝒕𝒆𝒓𝒂 𝒕𝒊𝒆𝒏𝒆...
┃ *${global.db.data.users[who].limit} 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆(s)* 💎
┃ *${global.db.data.users[who].money} 𝑳𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔(s)* 🐈
┃ *${global.db.data.users[who].exp} 𝑬𝑿𝑷* ⚡
┃ *${global.db.data.users[who].joincount} 𝑻𝒐𝒌𝒆𝒏(s)* 🪙
╰━━━━〔 *𓃠 ${vs}* 〕━━━⬣`)

await conn.sendHydrated(m.chat, wm, `𝑷𝒖𝒆𝒅𝒆 𝒄𝒐𝒎𝒑𝒓𝒂𝒓 𝒎𝒂́𝒔 𝒓𝒆𝒄𝒖𝒆𝒓𝒅𝒐𝒔 𝒆𝒄𝒐𝒏𝒐́𝒎𝒊𝒄𝒐 𝒖𝒔𝒂𝒅𝒐 𝒆𝒔𝒕𝒐𝒔 𝒄𝒐𝒎𝒂𝒏𝒅𝒐\n\n𝑪𝒐𝒎𝒑𝒓𝒂 𝒅𝒊𝒂𝒎𝒂𝒏𝒕𝒆 𝒄𝒐𝒏 𝑬𝑿𝑷\n${usedPrefix}buy cantidad\n${usedPrefix}buyall cantidad\n\n𝑪𝒐𝒎𝒑𝒓𝒂 𝒅𝒊𝒂𝒎𝒂𝒏𝒕𝒆 𝒄𝒐𝒏 𝒍𝒐𝒍𝒊𝒄𝒐𝒊𝒏𝒔\n${usedPrefix}buy2 cantidad\n${usedPrefix}buyall2 cantidad\n\n𝑪𝒐𝒎𝒑𝒓𝒂 𝒅𝒊𝒂𝒎𝒂𝒏𝒕𝒆 𝒄𝒐𝒏 𝒕𝒐𝒌𝒆𝒏\n${usedPrefix}buy3 cantidad\n${usedPrefix}buyall3 cantidad`, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ⚡', '#menu'],
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤  💫', '.allmenu']
], m,)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2'] 
export default handler
