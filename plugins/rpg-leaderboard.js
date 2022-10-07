let handler = async (m, { conn, args, participants, usedPrefix }) => {
  //let user = global.db.data.users[m.sender] 
   //user.registered = false
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
   let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
     let sortedRole = users.map(toNumber('role')).sort(sort('role'))
      let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
     
      let usersExp = sortedExp.map(enumGetKey)
       let usersLim = sortedLim.map(enumGetKey)
        let usersLevel = sortedLevel.map(enumGetKey)
         let usersRole = sortedRole.map(enumGetKey)
          let usersMoney = sortedMoney.map(enumGetKey)
  console.log(participants)
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length)
  let text = `
       🏆 𝚃𝚊𝚋𝚕𝚊 𝚍𝚎 𝚌𝚕𝚊𝚜𝚒𝚏𝚒𝚌𝚊𝚌𝚒𝚘́𝚗
    
💠 *𝚃𝙾𝙿 ${len} 𝚇𝙿 🎯* 
Tú : *${usersExp.indexOf(m.sender) + 1}* de *${usersExp.length} 𝚞𝚜𝚞𝚊𝚛𝚒𝚘𝚜*

${sortedExp.slice(0, len).map(({ jid, exp }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${exp} Exp*`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *𝚃𝙾𝙿 ${len} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴💎* 
Tú : *${usersLim.indexOf(m.sender) + 1}* de *${usersLim.length} 𝚞𝚜𝚞𝚊𝚛𝚒𝚘𝚜*

${sortedLim.slice(0, len).map(({ jid, limit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} Diamantes*`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *𝚃𝙾𝙿 ${len} 𝙽𝙸𝚅𝙴𝙻 💪* 
Tú : *${usersLevel.indexOf(m.sender) + 1}* de *${usersLevel.length} 𝚞𝚜𝚞𝚊𝚛𝚒𝚘𝚜*

${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Nivel ${level}*`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *𝚃𝙾𝙿 ${len} 𝚁𝙾𝙻 🌟* 
Tú : *${usersRole.indexOf(m.sender) + 1}* de *${usersRole.length} 𝚞𝚜𝚞𝚊𝚛𝚒𝚘𝚜*

${sortedRole.slice(0, len).map(({ jid, role }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${role}`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *𝚃𝙾𝙿 ${len} 𝙻𝙾𝙻𝙸𝙲𝙾𝙸𝙽𝚂 🐈*
Tú : *${usersMoney.indexOf(m.sender) + 1}* de *${usersMoney.length} 𝚞𝚜𝚞𝚊𝚛𝚒𝚘𝚜*

${sortedMoney.slice(0, len).map(({ jid, money }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${money} LoliCoins*`).join`\n`}
`.trim()
  await conn.reply(m.chat, text, m, { 
    contextInfo: {
      mentionedJid: [...usersExp.slice(0, len), ...usersLim.slice(0, len), ...usersLevel.slice(0, len), ...usersRole.slice(0, len), ...usersMoney.slice(0, len)].filter(v => !participants.some(p => v === p.jid))
    }
  })
await conn.sendHydrated(m.chat, wm, `𝚊𝚌𝚝𝚞𝚊𝚕𝚒𝚣𝚊𝚛 𝚝𝚞 𝚍𝚊𝚝𝚘𝚜 𝚌𝚘𝚗 𝚕𝚘𝚜 𝚋𝚘𝚝𝚘𝚗𝚎𝚜 𝚍𝚎 𝚊𝚋𝚊𝚓𝚘 | 𝚎𝚗 𝚎𝚕 𝚝𝚘𝚙 𝚛𝚊𝚗𝚔𝚒𝚗𝚐 𝚘 𝚌𝚘𝚗 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘:\n${usedPrefix}nivel\n${usedPrefix}exp\n${usedPrefix}rol`, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 🎡', '#juegosmenu'],
['𝙍𝙖𝙣𝙜𝙤𝙨 🚹', '#rol'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `${usedPrefix}menu`]
], m,)  
  
}
handler.help = ['top']
handler.tags = ['xp']
handler.command = ['leaderboard', 'lb', 'top'] 
handler.register = true
handler.fail = null
handler.exp = 0

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
