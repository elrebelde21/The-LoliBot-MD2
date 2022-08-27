let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([` 𝑨𝒔𝒊́ 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒂 𝒉𝒂𝒈𝒂 𝒑𝒖𝒕𝒊𝒕𝒐 🧐`, `_uff mire un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣`, `_pasa el pack de tu hermana😏_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexo😈_`, '_callarte putito_'])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
}
handler.customPrefix = /Mande porno|porno|paja/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
