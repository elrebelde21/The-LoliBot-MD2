let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let name = await conn.getName(m.sender)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
let totalreg = Object.keys(global.db.data.users).length
  let vn = './media/creador.mp3'

//------- Nombre
  let nowner = `${wm.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `
• @${wm.split`@`[0]} •
------- ${wm} -------
`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => imagen1[1]) 
let teksbio = `
*𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤* 
*Wa.me/56964787183 (no bot)*
*Wa.me/59895551199 (bot)*
*Wa.me/18134037792 (Bot ²)*
*wa.me/56977774738 (bot ³)*
*Wa.me/18134031118 (sub bot ofc)*
`
  let teks = ' '
const sections = [
   {
	title: `𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊/𝙊𝙒𝙉𝙀𝙍`,
	rows: [
	    {title: "🔰 • NUMERO", rowId: ".owner bio"},
	{title: "🌐 • CUENTAS OFICIALES", rowId: ".cuentasgb"},
	{title: "🙌 • GRUPOS", rowId: ".grupos"},
	]
    },{
	title: `–––––––·• 𝘼𝙋𝙊𝙔𝘼 𝘼𝙇 𝘽𝙊𝙏 –––––––·•`,
	rows: [
	{title: "🤖 • INSTALARBOT", rowId: ".instalarbot"},
	{title: "🌟 • SC", rowId: "Sc"},
	]
  },
]

const listMessage = {
text: `~ *PROPIETARIO/OWNER DEL BOT*`,
footer: `╭┄〔 *OWNER* 〕┄⊱
┆ *Hola👋 ${name}*
┆——————«•»——————
┆• 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙙𝙚𝙡 𝙗𝙤𝙩: ${vs}  
┆———————————
┆• 𝙏𝙤𝙩𝙖𝙡 𝙙𝙚𝙡 𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨: *${totalreg}* 
┆———————————
┆• 𝙈𝙤𝙙𝙤: ${global.db.data.settings[conn.user.jid].self ? '*Privado*' : '*Público*'}
┆———————————
┆• 𝙋𝙧𝙚𝙛𝙞𝙟𝙤: *${usedPrefix}* 
┆———————————
┆• 𝙋𝙧𝙚𝙢𝙞𝙪𝙢: ${user.premiumTime > 0 ? 'Siu ✅' : 'No ❌'}
┆———————————
┆• 𝘾𝙝𝙖𝙩(𝙨) 𝙋𝙧𝙤𝙝𝙞𝙗𝙞𝙙𝙤(𝙨): ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┆———————————
┆• 𝙐𝙨𝙪𝙖𝙧𝙞𝙤(𝙨) 𝙋𝙧𝙤𝙝𝙞𝙗𝙞𝙙𝙤(𝙨): ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ
${wm}`,
title: null,
buttonText: `HAGA CLICK AQUI`,
sections }

  try {
    if (/(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, "The-LoliBot-MD", m, { contextInfo: { mentionedJid: [nowner] }})
           break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "https://github.com/elrebelde21/The-LoliBot-MD", "𝙂𝙞𝙩𝙝𝙪𝙗",null, [null, null], m)
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
conn.sendFile(m.chat, vn, 'creador.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
