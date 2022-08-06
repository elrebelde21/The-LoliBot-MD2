let handler = async (m, { usedPrefix, conn}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
await m.reply(`
╭━〔 👝 *CARTERA* 〕━⬣
┃ ${name} 𝙀𝙣 𝙨𝙪 𝘾𝙖𝙧𝙩𝙚𝙧𝙖 𝙩𝙞𝙚𝙣𝙚...
┃ *${global.db.data.users[who].limit} Diamante(s)* 💎
┃ *${global.db.data.users[who].money} LoliCoin(s)* 🐈
┃ *${global.db.data.users[who].exp} EXP* ⚡
┃ *${global.db.data.users[who].joincount} Token(s)* 🪙
╰━━━━〔 *𓃠 ${vs}* 〕━━━⬣`)

await conn.sendHydrated(m.chat, wm, `Puede comprar más recuersos económicos usando estos comandos\n\nCOMPRAR DIAMANTES CON EXP\n${usedPrefix}buy cantidad\n${usedPrefix}buyall cantidad\n\nCOMPRAR DIAMANTES CON LOLICOINS\n${usedPrefix}buy2 cantidad\n${usedPrefix}buyall2 cantidad\n\nCOMPRAR TOKENS CON DIAMANTES\n${usedPrefix}buy3 cantidad\n${usedPrefix}buyall3 cantidad`, null, md, 'The LoliBot-MD', null, null, [
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ⚡', '#menu'],
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 💫', '.allmenu']
], m,)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2'] 
export default handler
