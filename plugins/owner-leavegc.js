let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, await tr("*El bot abandona el grupo, chau 👋*", '*𝐄𝐥 𝐁𝐨𝐭 𝐚𝐛𝐚𝐧𝐝𝐨𝐧𝐚 𝐞𝐥 𝐠𝐫𝐮𝐩𝐨, 𝐜𝐡𝐚𝐮 👋*'))
await conn.groupLeave(id)}
handler.help = ["leave"]
handler.tags = ["owner"]
handler.command = /^(salir|leavegc|salirdelgrupo|leave)$/i
handler.owner = true
export default handler
