let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
//if (!(isAdmin || isOwner)) {
//global.dfail('admin', m, conn)
//throw false
//}
let pesan = args.join` `
let oi = `*ღ 𝑴𝒆𝒏𝒔𝒂𝒋𝒆:* ${pesan}`
let teks = `╭━〔 *𝑷𝒊𝒅𝒊𝒆𝒏𝒅𝒐 𝒂𝒚𝒖𝒅𝒂𝒓* 〕━⬣\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃➥ @${mem.id.split('@')[0]}\n`}
teks += `╰━━━━━━[ *𓃠 ${vs}* ]━━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(pedirayuda)$/i
handler.group = true
handler.register = true
export default handler
