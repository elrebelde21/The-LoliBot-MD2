let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('𝑬𝒍 𝒃𝒐𝒕  𝒂𝒃𝒂𝒏𝒅𝒐𝒏𝒂 𝒆𝒍 𝒈𝒓𝒖𝒑𝒐, 𝒄𝒉𝒂𝒖👋🏻', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'salir']
handler.tags = ['owner']
handler.command = /^(salir|leavegc)$/i

handler.rowner = true

export default handler
 