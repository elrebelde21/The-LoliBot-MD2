let handler = async (m, { conn }) => {
    let txt = ''
    let vn = './media/listas.mp3'
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `${await conn.getName(jid)}\n✳ ${jid} [${chat?.metadata?.read_only ? '✅ *Si estoy aquí*' : '❌ *No estoy aquí*'}]\n\n`
    m.reply(`${lb} Esta en estos grupos:
    
${txt}
`.trim())   
conn.sendFile(m.chat, vn, 'listas.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i

export default handler