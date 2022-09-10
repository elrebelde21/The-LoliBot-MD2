import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, text, participants, groupMetadata }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `Escribe un numero etiqueta o responde al mensaje del destinatario `, m)
  
  if(isNaN(number)) return conn.reply(m.chat, `El número que ingresaste no es válido!`, m)
  if(number.length > 15) return conn.reply(m.chat, `Formato erroneo!`, m)
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
    if(!users) return conn.reply(m.chat, `Objetivo o número no encontrado, puede haber dejado o no ser miembro de este grupo.`, m)
    if(user === m.sender) return conn.reply(m.chat, `No puedes salir contigo mismo!`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `*No puedes salir conmigo* T_T`, m)
    
    if(global.db.data.users[user].pasangan != m.sender){
      conn.reply(m.chat,`Lo siento  @${user.split('@')[0]} no te ha pedido salir`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }else{
      global.db.data.users[user].pasangan = ""
      conn.reply(m.chat,`Le negaste a @${user.split('@')[0]} para ser tu pareja!`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }
	}	
}
handler.help = ['tolak *@tag*']
handler.tags = ['jadian']
handler.command = /^(rechazar)$/i
handler.mods = false
handler.group = true
handler.fail = null
export default handler
