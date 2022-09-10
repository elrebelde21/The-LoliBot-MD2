let handler = async (m, { command, text }) => m.reply(`
🤔 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼 🤔
  
 🤔 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼: ${text}
 ✅ 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼: ${['Si','Tal vez sí','Tal vez no','Posiblemente','Probablemente no','Probablemente no','Puede ser','No puede ser','No','Imposible','Depende','Creo que si','Creo que no','Claro no lo dudes','Hasta yo lo dudo','No tengo palabras jajaja','Es altamente posible','Es bajamente posible'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i
export default handler
