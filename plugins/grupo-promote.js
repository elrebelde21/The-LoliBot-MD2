let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `𝙒𝙩𝙛 𝙖 𝙦𝙪𝙞𝙚𝙣 𝙡𝙚 𝙙𝙤𝙮 𝙖𝙙𝙢𝙞𝙣 🤔\n 𝙐𝙨𝙚 𝙙𝙚 𝙚𝙨𝙩𝙖 𝙢𝙖𝙣𝙚𝙧𝙖:\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix}darpoder @tag*\n*${usedPrefix}daradmin responder a un mensaje*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `𝑬𝒍 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒆𝒔 𝒊𝒏𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒐,𝒊𝒏𝒕𝒆𝒏𝒕𝒂 𝒅𝒆 𝒏𝒖𝒆𝒗𝒐`, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
//conn.reply(m.chat, `${eg}𝘼𝙃𝙊𝙍𝘼 𝙏𝙄𝙀𝙉𝙀 𝙀𝙇 𝙋𝙊𝘿𝙀𝙍 𝘿𝙀𝙇 𝘼𝘿𝙈𝙄𝙉 😼\n\n𝙐𝙎𝙀𝙍 𝙄𝙎 𝙉𝙊𝙒 𝘼𝘿𝙈𝙄𝙉 🤠`, m)
	
conn.sendHydrated(m.chat, `𝑨𝒉𝒐𝒓𝒂 𝒚𝒂 𝒇𝒐𝒓𝒎𝒂 𝒑𝒂𝒓𝒕𝒆 𝒅𝒆𝒍 𝒍𝒐𝒔 𝒂𝒅𝒎𝒊𝒏𝒔 😼`, wm, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu'] 
], m)
}}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'promote ' + v)
handler.tags = ['group']
handler.command = /^(promote|daradmin|darpoder)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
