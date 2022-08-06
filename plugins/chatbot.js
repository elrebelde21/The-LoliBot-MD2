let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/^todo bien$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `_bien capo😎 y tu_`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^e$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `_eeee_`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^mande porno$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `_asi que quiera haga putito🧐_`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^The lolibot-MD|lolibot$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `_aqui estoy😎_`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^56977774748|972529277406$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `[❗] 𝙽𝙾 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴𝚂 [❗] a mi creador si tiene alguna consulta o duda, hablame el pv. solo por tema de bot`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

   
return !0 }
export default handler