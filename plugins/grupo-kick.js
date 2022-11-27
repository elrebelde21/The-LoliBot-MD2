let handler = async (m, { conn, participants, command, usedPrefix }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] 𝙀𝙡 𝙤𝙬𝙣𝙚𝙧 𝙩𝙞𝙚𝙣𝙚 𝙖𝙥𝙖𝙜𝙖𝙙𝙤 𝙚𝙨𝙩𝙖 𝙤𝙥𝙘𝙞𝙤́𝙣 (𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝 / 𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝙀𝙡 𝙪𝙨𝙤 𝙙𝙚𝙡 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤*'
let kicktext = `**[❗] 𝑾𝒕𝒇 𝒂 𝒒𝒖𝒊𝒆𝒏 𝒒𝒖𝒊𝒆𝒓𝒆 𝒆𝒍𝒊𝒎𝒊𝒏𝒂, 🤔*\n *𝒆𝒕𝒊𝒒𝒖𝒆𝒕𝒂𝒔 𝒂𝒍 𝒑𝒆𝒓𝒔𝒐𝒏𝒂, 𝒐 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆*\n\n*—◉ 𝑬𝒋𝒆𝒎𝒑𝒍𝒐:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('*[❗] 𝑾𝒕𝒇 𝒂 𝒒𝒖𝒊𝒆𝒏 𝒒𝒖𝒊𝒆𝒓𝒆 𝒆𝒍𝒊𝒎𝒊𝒏𝒂, 🤔*\n *𝒆𝒕𝒊𝒒𝒖𝒆𝒕𝒂𝒔 𝒂𝒍 𝒑𝒆𝒓𝒔𝒐𝒏𝒂, 𝒐 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆*') 
if(m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== "") {
var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant
if(conn.user.jid.includes(mentioned)) return m.reply("*[❗] 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁𝙼𝙴 𝙰 𝙼𝙸 𝙼𝙸𝚂𝙼𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝙰𝙲𝙰𝙼𝙴 𝙼𝙰𝙽𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴 𝚂𝙸 𝙰𝚂𝙸 𝙻𝙾 𝙳𝙴𝚂𝙴𝙰𝚂*")
let responseb = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove')
let exitoso1 = `*@${mentioned.split("@")[0]} ғᴜᴇ ᴇʟɪᴍɪɴᴀᴅᴏ ᴇxɪᴛᴏsᴀᴍᴇɴᴛᴇ ᴅᴇʟ ɢʀᴜᴘᴏ*`
let error1 = `*@${mentioned.split("@")[0]} ᴇs ᴇʟ ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ɢʀᴜᴘᴏ, ɴᴏ ᴘᴜᴇᴅᴏ ᴇʟɪᴍɪɴᴀʀ ᴀʟ ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ɢʀᴜᴘᴏ*`
let error2 = `@${mentioned.split("@")[0]} ʏᴀ ʜᴀ sɪᴅᴏ ᴇʟɪᴍɪɴᴀᴅᴏ ᴏ ʜᴀ ᴀʙᴀɴᴅᴏɴᴀᴅᴏ ᴇʟ ɢʀᴜᴘᴏ*`
if (responseb[0].status === "200") m.reply(exitoso1, m.chat, { mentions: conn.parseMention(exitoso1)})  
else if (responseb[0].status === "406") m.reply(error1, m.chat, { mentions: conn.parseMention(error1)})   
else if (responseb[0].status === "404") m.reply(error2, m.chat, { mentions: conn.parseMention(error2)})  
else conn.sendMessage(m.chat, {text: `*[❗] 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙸𝙽𝙴𝚂𝙿𝙴𝚁𝙰𝙳𝙾*`, mentions: [m.sender], contextInfo:{forwardingScore:999, isForwarded:true}}, {quoted: m})
} else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
return
}}
handler.help = ['kick']
handler.tags = ['group']
handler.command = /^(kick|echar|hechar|sacar)$/i
handler.admin = handler.group = handler.botAdmin = true
export default handler