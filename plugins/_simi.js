export async function before(m) {
    let chat = db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned && !m.fromMe) {
    	if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let ressimi = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(m.text)}&lc=es`)
        if (!ressimi.ok) throw 'no entendi :v'
        let data = await ressimi.json();
        if (data.success == 'No s\u00e9 lo qu\u00e9 est\u00e1s diciendo. Por favor ense\u00f1ame.') await m.reply("No habla taka taka xd")
        await m.reply(data.success)
        return !0
    }
    return true
}