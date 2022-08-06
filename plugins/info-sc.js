let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/^sc|github$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `_https://github.com/elrebelde21/The-LoliBot-MD_`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

   
return !0 }
export default handler