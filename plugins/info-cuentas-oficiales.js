let media = './media/menus/Menuvid2.mp4'
let vn = './media/cuenta.mp3'
let handler = async (m, { conn, command }) => {
let str = `
🔰 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝘼𝙎 𝘾𝙐𝙀𝙉𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*nunero del bot ofc*
🔰 *wa.me/447441419651*
🔰 *wa.me/50495745934*
🔰 *wa.me/56936442119*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *GITHUB*
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *grupos - ASISTENCIA*
*https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Si tienen dudas, sugerencias, o preguntas escribi por el grupo*
`.trim()
conn.sendFile(m.chat, vn, 'cuenta.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/elrebelde21/The-LoliBot-MD', 'The Lolibot-MD', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 🙂', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}

handler.command = /^cuentasoficiales|gataig|cuentaslb|cuentalb|accounts|loliiccounts|account|ilolii|cuentasdeloli|cuentasdelolibot|cuentalolibot|cuentaslolibot$/i
handler.exp = 35
export default handler
