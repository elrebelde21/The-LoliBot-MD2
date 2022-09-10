let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ 𝑴𝒆𝒅𝒊𝒅𝒐𝒓 𝒅𝒆 𝒂𝒎𝒐𝒓 ❤️❤️*
*𝑬𝒍 𝒂𝒎𝒐𝒓 𝒅𝒆 ${text} 𝑷𝒐𝒓 𝒕𝒊 𝒆𝒔 𝒅𝒆* *${Math.floor(Math.random() * 100)}%* *𝑫𝒆 𝒖𝒏  100%*
*𝑫𝒆𝒃𝒆𝒓𝒊́𝒂𝒔 𝒑𝒆𝒅𝒊𝒓𝒍𝒆 𝒒𝒖𝒆 𝒔𝒆𝒂 𝒕𝒖 𝒏𝒐𝒗𝒊𝒂/𝒐?*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler
