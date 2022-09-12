let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([` _Hola ${name}_\n\n_Estoy aquí😎_`, `_Si?👀_`, `_q te pica_`, `_que_`, `_q quieres_`, `que paso mirey`, `_q pasa conmigo_`, `_aqui estoy😎_`, `q pasa mi amor`, 'no estoy😸', 'aca estoy🥳'])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
}
handler.customPrefix = /Lolibot|The LoliBot-MD|lolibot|al bot|elbot|el bot|haybot/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
