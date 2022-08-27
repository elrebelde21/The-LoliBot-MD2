import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, usedPrefix, text, participants, groupMetadata}) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `Escribe un numero, etiqueta o responde al mensaje de destinatario`, m)
  
  if(isNaN(number)) return conn.reply(m.chat, `_*Numero invalido.*_`, m)
  if(number.length > 15) return conn.reply(m.chat, `*_Formato incorrecto.*_`, m)
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
    if(!users) return conn.reply(m.chat, `*_Objetivo o Número no encontrado, puede haber dejado o no ser miembro de este grupo.*_`, m)
    if(user === m.sender) return conn.reply(m.chat, `_*No puedes salir contigo mismo.*_`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `_*No puedes salir conmigo :')*_`, m)

    if (typeof global.db.data.users[user] == "undefined") return m.reply("_*La persona que etiquetaste no está registrada en la base de datos.*_")
    var pacar = global.db.data.users[user].pasangan
    var spac = global.db.data.users[m.sender].pasangan
    if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
      conn.reply(m.chat, `Ya estas saliendo con @${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\nPor favor, deja a tu relacion actual (escribe .dejar para romper relacion) y luego pidele salir a @${user.split('@')[0]}\n\nPor cierto, eres un maldito infiel!`, m , { contextInfo: { mentionedJid: [user, global.db.data.users[m.sender].pasangan]}})
    }else if(global.db.data.users[user].pasangan != ""){
      if (pacar){
        if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return conn.reply(m.chat, `Ya estas saliendo ${spac.split('@')[0]}`, m , { contextInfo: { mentionedJid: [spac]}})
        conn.reply(m.chat, `Lo siento, @${user.split('@')[0]} ya esta saliendo con @${pacar.split('@')[0]}\nBusca otra pareja :)`, m , { contextInfo: { mentionedJid: [user, pacar]}})
      }else{
        global.db.data.users[m.sender].pasangan = user
        conn.reply(m.chat, `Acabas de invitar a @${user.split('@')[0]} a salir\n\nPor favor espera tu respuesta!\n\nEscribe *${usedPrefix}aceptar @user* para aceptar\n*${usedPrefix}rechazar @user para rechazar*`, m , { contextInfo: { mentionedJid: [user]}})
      }
    }else if (global.db.data.users[user].pasangan == m.sender){
      global.db.data.users[m.sender].pasangan = user
      conn.reply(m.chat, `Felicidades, oficialmente estais saliendo. @${user.split('@')[0]}\n\nQue dure para siempre y siempre seais felices ğŸ¥³ğŸ¥³ğŸ¥³`, m , { contextInfo: { mentionedJid: [user]}})
    }else {
      global.db.data.users[m.sender].pasangan = user
      conn.reply(m.chat, `Acabas de invitar a @${user.split('@')[0]} a salir\nPor favor espera tu respuesta!\n\nEscribe \n*${usedPrefix}aceptar @user* para aceptar\n*${usedPrefix}rechazar @user para rechazar*`, m , { contextInfo: { mentionedJid: [user]}})
    }
	}	
}
handler.help = ['tembak *@tag*']
handler.tags = ['jadian']
handler.command = /^(salir)$/i
handler.group = true

export default handler
