let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*𝙈𝙚𝙣𝙨𝙖𝙟𝙚:* ${pesan}`
let text = 
`╭━━[ *𝙄𝙣𝙫𝙤𝙘𝙖𝙣𝙙𝙤 𝙖𝙙𝙢𝙞𝙣𝙨* ]━━━⬣ 
${oi}

*𝙖𝙙𝙢𝙞𝙣𝙨:*
${listAdmin}

𝙐𝙨𝙖𝙧 𝙚𝙡 𝙘𝙖𝙨𝙤 𝙙𝙚 𝙚𝙢𝙚𝙧𝙜𝙚𝙣𝙘𝙞𝙖
╰━━━━━━[ *𓃠 ${vs}* ]━━━━━⬣`.trim()

conn.sendHydrated(m.chat, text, `𝙖𝙙𝙢𝙞𝙣𝙨 | ${wm}`, pp, 'https://github.com/elrebelde21/The-LoliBot-MD', '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘', '.menu']
], m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

//conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['admins <texto>']
handler.tags = ['group'] 
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler
