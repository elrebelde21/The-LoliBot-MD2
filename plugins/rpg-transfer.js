const items = [
    'limit', 'exp',
]
let confirmation = {} 
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('𝙴𝚜𝚝𝚊́ 𝚑𝚊𝚌𝚒𝚎𝚗𝚍𝚘 𝚞𝚗𝚊 𝚝𝚛𝚊𝚗𝚜𝚏𝚎𝚛𝚎𝚗𝚌𝚒𝚊')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `✳️ 𝚄𝚜𝚘 𝚍𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘
*${usedPrefix + command}*  [tipo] [cantidad] [@user]
📌 𝙴𝚓𝚎𝚖𝚙𝚕𝚘 : ${usedPrefix + command} exp 65 @59172945992


📍 𝙰𝚛𝚝𝚒́𝚌𝚞𝚕𝚘𝚜 𝚝𝚛𝚊𝚗𝚜𝚏𝚎𝚛𝚒𝚋𝚕𝚎
┌──────────────
▢ *𝙻𝚒́𝚖𝚒𝚝* = 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎
▢ *𝙴𝚡𝚙* = 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊
└──────────────
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('✳️ 𝚃𝚊𝚐𝚞𝚎𝚊 𝚊𝚕 𝚞𝚜𝚞𝚊𝚛𝚒𝚘')
    if (!(who in global.db.data.users)) return m.reply(`✳️ 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 ${who} 𝙽𝚘 𝚎𝚜𝚝𝚊́ 𝚎𝚗 𝚕𝚊 𝚍𝚊𝚝𝚊𝚋𝚊𝚜𝚎`)
    if (user[type] * 1 < count) return m.reply(`✳️  *${type}*  𝙸𝚗𝚜𝚞𝚏𝚒𝚌𝚒𝚎𝚗𝚝𝚎𝚜 𝚙𝚊𝚛𝚊 𝚝𝚛𝚊𝚗𝚜𝚏𝚎𝚛𝚒𝚛`)
    let confirm = `
¿Está seguro de que desea transferir *${count}* ${type} a  *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 

Tienes  *60* s
`.trim()
    let c = '𝚃𝚑𝚎 𝙻𝚘𝚕𝚒𝚋𝚘𝚝-𝙼𝙳'
    conn.sendButton(m.chat, confirm, c, null, [['si'], ['no']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('𝚂𝚎 𝚊𝚌𝚊𝚋𝚘́ 𝚎𝚕 𝚝𝚒𝚎𝚖𝚙𝚘'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/no?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('𝙲𝚊𝚗𝚌𝚎𝚕𝚊𝚍𝚘')
    }
    if (/si?/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`✅ 𝚃𝚛𝚊𝚗𝚜𝚏𝚎𝚛𝚎𝚗𝚌𝚒𝚊 𝚎𝚡𝚒𝚝𝚘𝚜𝚘 𝚍𝚎 \n\n*${count}* *${type}*  𝙰 @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`𝙴𝚛𝚛𝚘𝚛 𝚊 𝚝𝚛𝚊𝚗𝚜𝚏𝚎𝚛𝚒𝚛 *${count}* ${type} to *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer'].map(v => v + ' [tipo] [cantidad] [@tag]')
handler.tags = ['xp']
handler.register = true
handler.command = ['payxp', 'transfer', 'darxp'] 

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}
