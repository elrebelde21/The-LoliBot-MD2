let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `*_𝘾𝙤𝙢𝙚𝙣𝙯𝙖𝙣𝙙𝙤 𝙥𝙧𝙪𝙚𝙗𝙖 𝙙𝙚𝙡 𝙫𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙..._*`.trim()
  m.reply(txt)

await m.reply('🚀')
await m.reply('🚀🚀')
await m.reply('🚀🚀🚀')
await m.reply(`╰⊱✅⊱ *𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐𝒔* ⊱✅⊱╮`)
 
let veloz = 
`🚄 *𝑽𝒆𝒍𝒐𝒄𝒊𝒅𝒂𝒅:*\n *${speed}* *Milisegundos*\n\n🚄 *𝑺𝒑𝒆𝒆𝒅:*\n *${speed}* *Milliseconds*`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', url: 'https://github.com/elrebelde21/The-LoliBot-MD'}},
{index: 2, urlButton: {displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', url: 'https://www.instagram.com/gata_dios/'}},
{index: 3, quickReplyButton: {displayText: '𝙊𝙩𝙧𝙖 𝙫𝙚𝙯', id: '#ping'}},
{index: 4, quickReplyButton: {displayText: '𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣', id: '#infobot'}},
{index: 5, quickReplyButton: {displayText: '𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́', id: '#menu'}},
]
let tm = {
text: veloz,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
}
conn.sendMessage(m.chat, tm, m)
}
// let veloz = `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`.trim() 
//conn.sendButton(m.chat, `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`, wm, veloz, [['Vista', /${command}]], m)
                                               
//m.reply(`${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`)

 

handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler
