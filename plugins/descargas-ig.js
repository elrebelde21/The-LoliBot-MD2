import instagramGetUrl from 'fg-ig'
let handler = async (m, { conn, args, usedPrefix, command }) => {
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

if (!args[0]) throw `𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙨𝙪 𝙫𝙞𝙙𝙚𝙤 𝙤 𝙞𝙢𝙖𝙜𝙚𝙣 \n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} https://www.instagram.com/tv/Cd8U99IloVA/?igshid=YmMyMTA2M2Y=*`
let results = (await instagramGetUrl(args[0])).url_list[0]

await conn.reply(m.chat, wait, fkontak,  m)
await conn.reply(m.chat, waitt, fkontak,  m)
await conn.reply(m.chat, waittt, fkontak,  m)
await conn.reply(m.chat, waitttt, fkontak,  m)
await conn.sendFile(m.chat, results, 'instagram.mp4', `✨ *ENLACE:*\n${args}\n\n${wm}`, m)}

handler.help = ['instagram <link ig>']
handler.tags = ['downloader']
handler.command =/^(instagram|ig(dl)?)$/i
handler.limit = 2
handler.exp = 70

export default handler
