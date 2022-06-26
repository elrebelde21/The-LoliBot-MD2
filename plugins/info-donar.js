let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let pp = './src/apoyo.jpg'
//await conn.sendButton(m.chat, wm, `https://paypal.me/OficialGD`, pp, m)
await conn.sendButton(m.chat, `${wm}`, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
  
let str = `
💖 𝙃𝙤𝙡𝙖!!  *si quiere apoya al bot. con cosa mucha gracias*

*agradecimiento al gatabot-MD*
esto es alguno dato si quiere  𝘼𝙥𝙤𝙮𝙖𝙨 𝘿𝙤𝙣𝙖𝙣𝙙𝙤🎁 gatabot-MD
*agracimiento al themystic-bot-MD . 𝙂𝙧𝙖𝙘𝙞𝙖𝙨!
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
`.trim()
  
await conn.sendHydrated(m.chat, str, wm, media, 'https://paypal.me/OficialGD', '🎁 𝘿𝙤𝙣𝙖𝙧', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}



handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
