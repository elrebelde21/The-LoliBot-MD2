let media = './media/menus/Menuvid2.mp4'
let vn = './media/cuenta.mp3'
let handler = async (m, { conn, command }) => {
let str = `
🔰 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝘼𝙎 𝘾𝙐𝙀𝙉𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝗡𝘂𝗺𝗲𝗿𝗼 𝗱𝗲𝗹 𝗯𝗼𝘁 𝗼𝗳𝗰
🔰 *wa.me/972529277479*
🔰 *wa.me/12268879246*
🔰 *wa.me/12262703138*
🔰 *wa.me/573183650526*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝗚𝗶𝘁𝗵𝘂𝗯
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝗚𝗿𝘂𝗽𝗼𝘀 𝗼𝗳𝗰 𝗱𝗲𝗹 𝗯𝗼𝘁
1) *https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k*

2) *https://chat.whatsapp.com/IJmvzc45SVg1lbErQqysc8*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅𝙂𝙧𝙪𝙥𝙤 𝙤𝙛𝙘 𝙙𝙚𝙡 𝙗𝙤𝙩 (𝙖𝙨𝙞𝙨𝙩𝙚𝙣𝙘𝙞𝙖)
*https://chat.whatsapp.com/Byyrc8RJnUkJw6vvUgsbDF*

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝗚𝗿𝘂𝗽𝗼𝘀 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 - 𝗮𝘀𝗶𝘀𝘁𝗲𝗻𝗰𝗶𝗮
*https://facebook.com/groups/721802642266362/*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ grupo telegram
*https://t.me/+EcdN9fktnQQwY2Ex*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ canal del YouTube oficial del bot
*https://youtube.com/channel/UCPSrzHooOjQMRmUK_2RLcSw*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙎𝙞 𝙩𝙞𝙚𝙣𝙚𝙣 𝙙𝙪𝙙𝙖𝙨, 𝙨𝙪𝙜𝙚𝙧𝙚𝙣𝙘𝙞𝙖𝙨, 𝙤 𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖𝙨 𝗲𝘀𝗰𝗿𝗶𝗯𝗶 𝗽𝗼𝗿 𝗲𝗹 𝗴𝗿𝘂𝗽𝗼
`.trim()
conn.sendFile(m.chat, vn, 'cuenta.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/elrebelde21/The-LoliBot-MD', '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 🙂', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}

handler.command = /^cuentasoficiales|gataig|cuentaslb|cuentalb|accounts|loliiccounts|account|ilolii|cuentasdeloli|cuentasdelolibot|cuentalolibot|cuentaslolibot$/i
handler.exp = 35
export default handler
