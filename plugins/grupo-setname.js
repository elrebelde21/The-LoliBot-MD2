import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `𝙔 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚🤔\n 𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙥𝙖𝙧𝙖 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) { 
if (text.length < 25) throw `𝑪𝒉𝒆 𝒕𝒂𝒍 𝒍𝒂𝒓𝒈𝒐 𝒗𝒂𝒏 𝒔𝒆𝒓 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆.\n 𝑬𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒏𝒐 𝒑𝒖𝒆𝒅𝒆 𝒔𝒆𝒓 𝒎𝒂́𝒔 𝒅𝒆 25 𝒄𝒂𝒓𝒂𝒄𝒕𝒆𝒓𝒆𝒔`  
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(setname|newnombre)$/i
handler.group = true
handler.admin = true
export default handler
