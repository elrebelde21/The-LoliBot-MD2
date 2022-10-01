let handler = async (m, { conn, args }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
  
//m.reply('*✅ La descripción del grupo se modifico correctamente*')
conn.sendButton(m.chat, `𝑳𝒊𝒔𝒕𝒐 𝒚𝒂 𝒄𝒂𝒎𝒃𝒊𝒆 𝒍𝒂 𝒅𝒆𝒔𝒄𝒓𝒊𝒑𝒄𝒊𝒐́𝒏 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐.`, `${wm}`, pp, [['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅', `.cuentasgb`], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m)
}
handler.help = ['Setdesc <text>']
handler.tags = ['group']
handler.command = /^setdesk|setdesc|newdesc$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
