import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. Que nombre le pongo al plugin?`
    if (!m.quoted.text) throw `Responder al mensaje!`
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`tersimpan di ${path}`)
}
handler.help = ['sfp'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^sfp|savep$/i

handler.rowner = true
export default handler
