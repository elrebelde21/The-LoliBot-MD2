let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
//m.reply('Hecho')
conn.sendHydrated(m.chat, `𝑳𝒂 𝒃𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒂 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒉𝒂 𝒔𝒊𝒅𝒐 𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂𝒅𝒂`, wm, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)
} else throw `𝑼𝒔𝒆 𝒍𝒐 𝒒𝒖𝒆 𝒆𝒔𝒕𝒂 𝒄𝒐𝒏  *"@"* 𝒑𝒂𝒓𝒂 𝒅𝒂𝒓 𝒍𝒐𝒔 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆𝒔 𝒔𝒊𝒈𝒏𝒊𝒇𝒊𝒄𝒂𝒅𝒐:\n*⚡ @user (Mención al usuario(a))*\n*⚡ @subject (Nombre de grupo)*\n*⚡ @desc (Description de grupo)*\n\n𝑹𝒆𝒄𝒖𝒆𝒓𝒅𝒆 𝒒𝒖𝒆 𝒍𝒐𝒔 *"@"* 𝒍𝒐𝒔 𝒑𝒖𝒆𝒅𝒆 𝒐𝒎𝒊𝒕𝒊𝒓 𝒅𝒆 𝒔𝒆𝒓 𝒄𝒐𝒏𝒗𝒆𝒏𝒊𝒆𝒏𝒕𝒆 𝒂𝒍 𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂𝒓 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.botAdmin = true
handler.admin = true

export default handler
