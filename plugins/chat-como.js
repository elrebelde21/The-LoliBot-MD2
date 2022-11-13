let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([` Hola ${name}_\n\nquiere instalar el bot pues facil mira este tutorial, que hizo mi creador esta bien explicado 👇👇👇\n\n https://youtu.be/i1xjB4bmYCc`, `_pues wey poner el comando #instalarbot me dar paja explicar 😄_`, `_pues facil manda .serbot a privado y escanea el qr y ya listo eres un bot 😃_`, `_quiere un bot 24/7 activo hots mira este video tutorial boxmine https://youtu.be/wWyBHtKzx9Q_`, 'pues facil manda < .serbot & .jadibot > al este numero al chat privado quiere mas explicado mira este video https://youtu.be/u59dE6t9_CQ de paso Suscríbete 😄'])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
}
handler.customPrefix = /Como puedo instalar bot|instalaciones para bot|cómo puedo tener el servido del bot|crea un bot|como crea un bot/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
