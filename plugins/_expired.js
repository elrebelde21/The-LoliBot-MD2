export async function all(m, conn) {
    //let res = await conn.groupAcceptInvite(code)
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        let caption = `*𝑩𝒖𝒆𝒏𝒐 ${this.user.name}* *𝑺𝒆 𝒗𝒂 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐!!!, 𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒒𝒖𝒆 𝒗𝒖𝒆𝒍𝒗𝒂, 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 _#bottemporal_ 𝑷𝒂𝒓𝒂 𝒒𝒖𝒆 𝒗𝒖𝒆𝒍𝒗𝒆 𝒂𝒍 𝒈𝒓𝒖𝒑𝒐!!*\n\n✅ *𝑨𝒔𝒊𝒔𝒕𝒆𝒏𝒄𝒊𝒂 𝒑𝒂𝒓𝒂 𝒖𝒔𝒖𝒂𝒓𝒊𝒐𝒔\n*https://facebook.com/groups/721802642266362/*`
        let pp = './media/menus/Menu2.jpg'
    //await this.sendButton(m.chat, caption, wm, null, [['Eliminar caducado', '/delexpired'], ['Cec caducado', '/cekexpired']], null)
await this.sendButton(m.chat, caption, wm, pp, [['𝑯𝒂𝒔𝒕𝒂 𝒑𝒓𝒐𝒏𝒕𝒐 🤑', '.hastapronto']], null)
//await conn.sendHydrated2(m.chat, caption, wm, pp, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, m,)
        
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}

