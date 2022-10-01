let handler = async (m, { conn, isOwner }) => {
let vip = global.db.data.users[m.sender].premium
let prem = Object.entries(global.db.data.users).filter(user => user[1].premium)
let caption = `🎟️ 𝑼𝒔𝒖𝒂𝒓𝒊𝒐 𝑷𝒓𝒆𝒎𝒊𝒖𝒎
*╭•·–––––––––––––––––––·•*
│ *𝑻𝒐𝒕𝒂𝒍 : ${prem.length} 𝑼𝒔𝒖𝒂𝒓𝒊𝒐* ${prem ? '\n' + prem.map(([jid], i) => `
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Usuarios' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`
await conn.sendButton(m.chat, caption, `🎟️ 𝒑𝒓𝒆𝒎𝒊𝒖𝒎  ⇢ ${vip ? '✅' : '❌'}\n${wm}`, null, [ 
[`${vip ? '✦ 𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝒅𝒆𝒍 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 ✦': '✦ 𝑪𝒐𝒎𝒑𝒓𝒂 𝒑𝒂𝒔𝒆 𝒑𝒓𝒆𝒎𝒊𝒖𝒎✦'}`, `${vip ? '.allmenu': '.pase premium'}`]], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(listapremium)$/i

export default handler
