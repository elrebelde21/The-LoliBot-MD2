import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, text, participants, groupMetadata }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `Escribe un numero, etiqueta o responde al mensaje de destinatario.`, m)
  
  if(isNaN(number)) return conn.reply(m.chat, `El n�mero que ingresaste est� mal!`, m)
  if(number.length > 15) return conn.reply(m.chat, `Formato incorrecto!`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
    if(!users) return conn.reply(m.chat, `Objetivo o N�mero no encontrado, puede haber dejado o no ser miembro de este grupo.`, m)
    if(user === m.sender) return conn.reply(m.chat, `No puedo salir contigo mismo!`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `No puedes salir conmigo T_T`, m)
    let me = m.sender

    if(global.db.data.users[user].pasangan != m.sender){
      conn.reply(m.chat, `Lo siento @${user.split('@')[0]} No te pidio salir`, m, { contextInfo: { mentionedJid: [user]}})
    }else{
      global.db.data.users[m.sender].pasangan = user
      conn.reply(m.chat, `Felicidades, oficialmente estan saliendo. @${user.split('@')[0]}\n\nQue dure para siempre y siempre seais felices @${user.split('@')[0]} 💓 @${me.split('@')[0]} 🥳🥳🥳`,m, { contextInfo: { mentionedJid: [user, me]}})
    }
	}	
}
handler.help = ['terima *@tag*']
handler.tags = ['jadian']
handler.command = /^(aceptar)$/i
handler.group = true
handler.fail = null
export default handler
