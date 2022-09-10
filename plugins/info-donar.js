let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let pp = './src/apoyo.jpg'
//await conn.sendButton(m.chat, wm, `https://paypal.me/OficialGD`, pp, m)
await conn.sendButton(m.chat, `${wm}`, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
  
let str = `
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇💖 𝙃𝙤𝙡𝙖!!  *si quiere apoya al bot. con cosa mucha gracias*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*forma parte grupo asistencia de facebook*
*┃*
*┃* *https://facebook.com/groups/721802642266362/*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* *YouTube*
*┃*  *https://youtube.com/channel/UCPSrzHooOjQMRmUK_2RLcSw*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* *agracimiento al themystic-bot-MD* . 𝙂𝙧𝙖𝙘𝙞𝙖𝙨!
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
  
await conn.sendHydrated(m.chat, str, wm, media, 'https://www.paypal.me/TheShadowBrokers133', '🎁 𝘿𝙤𝙣𝙖𝙧', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}



handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
