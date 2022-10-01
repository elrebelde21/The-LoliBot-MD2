import fetch from 'node-fetch'
/**
 * @type {import('@adiwajshing/baileys')}
 */
const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙨𝙩𝙖 𝙖𝙥𝙖𝙜𝙖𝙙𝙤, 𝙀𝙡 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙙𝙚𝙗𝙚𝙧 𝙖𝙘𝙩𝙞𝙫𝙖𝙡𝙤𝙨 𝘾𝙤𝙣 \n#on restrict | #off restrict`
try {
  let _participants = participants.map(user => user.jid)
  let users = (await Promise.all(
    text.split(',')
      .map(v => v.replace(/[^0-9]/g, ''))
      .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
      .map(async v => [
        v,
        await conn.onWhatsApp(v + '@s.whatsapp.net')
      ])
  )).filter(v => v[1]).map(v => v[0] + '@c.us')
  let response = await conn.query({
        tag: 'iq',
        attrs: {
            type: 'set',
            xmlns: 'w:g2',
            to: m.chat,
        },
        content: users.map(jid => ({
            tag: 'add',
            attrs: {},
            content: [{ tag: 'participant', attrs: { jid } }]
}))})
    const pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
    const add = getBinaryNodeChild(response, 'add')
    const participant = getBinaryNodeChildren(add, 'participant')
    for (const user of participant.filter(item => item.attrs.error == 403)) {
        const content = getBinaryNodeChild(user, 'add_request')
        const invite_code = content.attrs.code
        const invite_code_exp = content.attrs.expiration
        let teks = `𝑵𝒐 𝒔𝒆 𝒑𝒖𝒅𝒐 𝒂𝒈𝒓𝒆𝒈𝒂𝒓 𝒂𝒍 𝒏𝒖́𝒎𝒆𝒓𝒐, 𝒇𝒊́𝒋𝒂𝒕𝒆 𝒔𝒊 𝒆𝒍 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒆𝒔 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒐, 𝒕𝒂𝒍 𝒗𝒆𝒛 𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒔𝒂𝒍𝒊𝒐́ 𝒓𝒆𝒄𝒊𝒆𝒏𝒕𝒆𝒎𝒆𝒏𝒕𝒆 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐, 𝒐 𝒕𝒊𝒆𝒏𝒆 𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂𝒅𝒐 𝒍𝒂 𝒑𝒓𝒊𝒗𝒂𝒄𝒊𝒅𝒂𝒅 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐. 𝑫𝒆 𝒔𝒆𝒓 𝒂𝒔𝒊́ 𝒆𝒏𝒗𝒊𝒆́ 𝒖𝒏𝒂 𝒊𝒏𝒗𝒊𝒕𝒂𝒄𝒊𝒐́𝒏 𝒎𝒂𝒏𝒖𝒂𝒍𝒎𝒆𝒏𝒕𝒆.`
        m.reply(teks, null, {
        mentions: conn.parseMention(teks)
})}
} catch (e) {
throw m.reply(`𝑵𝒐 𝒔𝒆 𝒑𝒖𝒅𝒐 𝒂𝒈𝒓𝒆𝒈𝒂𝒓 𝒂𝒍 𝒏𝒖́𝒎𝒆𝒓𝒐, 𝒇𝒊́𝒋𝒂𝒕𝒆 𝒔𝒊 𝒆𝒍 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒆𝒔 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒐, 𝒕𝒂𝒍 𝒗𝒆𝒛 𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒔𝒂𝒍𝒊𝒐́ 𝒓𝒆𝒄𝒊𝒆𝒏𝒕𝒆𝒎𝒆𝒏𝒕𝒆 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐, 𝒐 𝒕𝒊𝒆𝒏𝒆 𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂𝒅𝒐 𝒍𝒂 𝒑𝒓𝒊𝒗𝒂𝒄𝒊𝒅𝒂𝒅 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐. 𝑫𝒆 𝒔𝒆𝒓 𝒂𝒔𝒊́ 𝒆𝒏𝒗𝒊𝒆́ 𝒖𝒏𝒂 𝒊𝒏𝒗𝒊𝒕𝒂𝒄𝒊𝒐́𝒏 𝒎𝒂𝒏𝒖𝒂𝒍𝒎𝒆𝒏𝒕𝒆.`)}
}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(add|agregar|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
