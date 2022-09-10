let handler = async (m, { conn }) => {
  if (global.db.data.users[m.sender].pasangan == "") return conn.reply(m.chat, `*No has pedido salir a nadie!*`, m)
  if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return conn.reply(m.chat, `Has huido de @${global.db.data.users[m.sender].pasangan.split('@')[0]}`, m, {contextInfo: {
    mentionedJid: [global.db.data.users[m.sender].pasangan]
  }})
  conn.reply(m.chat, `Has cancelado tu peticion de salir a @${global.db.data.users[m.sender].pasangan.split('@')[0]} porque no dio una respuesta de aceptar o rechazar`, m, {contextInfo: {
    mentionedJid: [global.db.data.users[m.sender].pasangan]
  }})
  global.db.data.users[m.sender].pasangan = ""
}
handler.help = ['ikhlasin']
handler.tags = ['jadian']
handler.command = /^(huir)$/i
handler.mods = false
handler.group = true
handler.fail = null
export default handler

