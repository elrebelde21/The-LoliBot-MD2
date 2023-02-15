let handler = async (m, { conn }) => {
    let txt = ''
    let vn = './media/listas.mp3'
    const groupsIn = chats.filter(([jid]) => jid.endsWith('@g.us'))
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('https://chat.whatsapp.com/') + conn.groupInviteCode(jid) && chat.isChats)) txt += `${await conn.getName(jid)}\n✳ ${jid} [${chat?.metadata?.read_only ? '❌ *No estoy aquí*' : '✅ *Si estoy aquí*'}]\n\n`
    m.reply(`${lb} Esta en estos grupos:\n *✦ Total de Grupos:* *${groupsIn.length}*
    
${txt}
`.trim())   
conn.sendFile(m.chat, vn, 'listas.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i

export default handler