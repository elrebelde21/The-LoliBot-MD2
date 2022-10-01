let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*「 𝙄𝙣𝙛𝙤 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 」*\n
*𝙄𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤́𝙣 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤:* 
${groupMetadata.id}

*𝙉𝙤𝙢𝙗𝙧𝙚:* 
${groupMetadata.subject}

*𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤:* 
@${owner.split('@')[0]}

*𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤́𝙣:* 
${groupMetadata.desc?.toString() || '𝚂𝙸𝙽 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽'}

*𝙏𝙤𝙩𝙖𝙡 𝙙𝙚𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚:*
${participants.length} Participantes

*𝘼𝙙𝙢𝙞𝙣𝙨:*
${listAdmin}

*𝙊𝙥𝙘𝙞𝙤𝙣𝙚𝙨 𝙖𝙪𝙩𝙤𝙢𝙖́𝙩𝙞𝙘𝙖:*
—◉ 𝙒𝙚𝙡𝙘𝙤𝙢𝙚: ${welcome ? '✅' : '❌'}
—◉ 𝘼𝙣𝙩𝙞𝙡𝙞𝙣𝙠: ${antiLink ? '✅' : '❌'} 
—◉ 𝘼𝙣𝙩𝙞𝙡𝙞𝙣𝙠 𝟸: ${antiLink2 ? '✅' : '❌'} 
—◉ 𝘼𝙣𝙩𝙞𝙩𝙧𝙖𝙗𝙖: ${antiTraba ? '✅' : '❌'} 
—◉ 𝘼𝙪𝙩𝙤𝙨𝙩𝙞𝙘𝙠𝙚𝙧: ${autosticker ? '✅' : '❌'} 
—◉ 𝘿𝙚𝙩𝙚𝙘𝙩: ${detect ? '✅' : '❌'} 
—◉ 𝙈𝙤𝙙𝙤 𝙝𝙤𝙧𝙣𝙮 (+18): ${modohorny ? '✅' : '❌'} 
—◉ 𝘼𝙪𝙙𝙞𝙤𝙨: ${audios ? '✅' : '❌'} 
—◉ 𝙖𝙣𝙩𝙞𝙫𝙞𝙚𝙬𝙤𝙣𝙘𝙚: ${antiviewonce ? '✅' : '❌'} 
—◉ 𝘼𝙣𝙩𝙞𝙩𝙤𝙭𝙞𝙘: ${antiToxic ? '✅' : '❌'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
