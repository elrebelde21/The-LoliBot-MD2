let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('El bot abandonara el grupo, a sido todo un placer, nos vemos👋🏻', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'salir']
handler.tags = ['owner']
handler.command = /^(salir|leavegc)$/i

handler.rowner = true

export default handler
 