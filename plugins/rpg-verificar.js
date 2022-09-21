import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ Ya estás registrado\n\n¿Quiere volver a registrarse?\n\n 📌 Use este comando para eliminar su registro \n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `⚠️ Formato incorrecto\n\n ✳️ Uso del comamdo: *${usedPrefix + command} nombre.edad*\n📌Ejemplo : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ El nombre no puede estar vacío'
  if (!age) throw '✳️ La edad no puede estar vacía'
  if (name.length >= 30) throw '✳️ El nombre es demasiado largo' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Wow el abuelo quiere jugar al bot'
  if (age < 5) throw '🚼  los bebes saber escribir 😳 '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
global.db.data.users[m.sender].money += 200
global.db.data.users[m.sender].limit += 2
global.db.data.users[m.sender].exp += 350
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 Registro Completado  」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *𝑵𝑶𝑴𝑩𝑹𝑬:* ${name}
┃ *𝑬𝑫𝑨𝑫:* ${age} años
┃  *𝑩𝑶𝑵𝑶* 
┃ *$350 XP*
┃ *$200 𝑳𝑶𝑳𝑰𝑪𝑶𝑰𝑵𝑺*
┃ *$2 𝑫𝑰𝑨𝑴𝑨𝑵𝑻𝑬*
┗┅ ━━━━━━━━━━━━ ┅ ━
`.trim())
//let author = global.author
await m.reply(`𝙏𝙐 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙎𝙀𝙍𝙄𝙀 𝙏𝙀 𝙎𝙀𝙍𝙑𝙄𝙍𝘼 𝙀𝙉 𝘾𝘼𝙎𝙊 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝘼 𝘽𝙊𝙍𝙍𝘼𝙍 𝙎𝙐 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊 👇👇👇`)
await m.reply(`${sn}`) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i

export default handler
