import fetch from 'node-fetch'
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(global.API('https://api.simsimi.net/v2/?text=${encodeURIComponent(m.text)}&lc=es" }, ''))
        if (!res.ok) throw error
        let json = await res.json()
        if (json.success == 'botsito :v') return m.reply('no hablado taka taka')
        await m.reply(`${json.success}`)
        return !0
    }
    return true
}
export default handler