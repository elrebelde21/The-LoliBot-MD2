let handler = async (m, { conn }) => {
let txt = ''
let vn = './media/listas.mp3'
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\n🐈 ${await conn.getName(jid)}\n🔸 ${jid} \n${chat?.metadata?.read_only ? '❌ *𝑺𝒊𝒏 𝒆𝒔𝒕𝒂𝒓 𝒂𝒒𝒖𝒊 | 𝑵𝒐*' : '✅ *𝑺𝒊𝒈𝒐 𝒂𝒒𝒖𝒊 | 𝒀𝒆𝒔*'}\n\n`
m.reply(`*${gt} 𝑬𝒔𝒕𝒂 𝒆𝒏 𝒆𝒔𝒕𝒐𝒔 𝒈𝒓𝒖𝒑𝒐𝒔:*`.trim())

conn.sendHydrated(m.chat, txt, wm, null, 'https://github.com/elrebelde21/The-LoliBot-MD', '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '.menu'],
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅', '/cuentasgb']
], m,)
conn.sendFile(m.chat, vn, 'listas.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i
handler.exp = 30
export default handler
