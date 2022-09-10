let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `𝙇𝙖𝙨 𝙛𝙪𝙣𝙘𝙞𝙤𝙣𝙚𝙨 #𝙟𝙖𝙙𝙞𝙗𝙤𝙩 #𝙗𝙤𝙩𝙨 #𝙨𝙚𝙧𝙗𝙤𝙩 #𝙨𝙪𝙗𝙗𝙤𝙩 #𝙜𝙚𝙩𝙘𝙤𝙙𝙚. 𝙉𝙤 𝙚𝙨𝙩𝙖𝙣 𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚𝙨 𝙚𝙣 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫  𝙨𝙞 𝙦𝙪𝙞𝙚𝙧𝙚 𝙝𝙖𝙘𝙚𝙧𝙩𝙚 𝙗𝙤𝙩 𝙞𝙣𝙩𝙚𝙣𝙩𝙖 𝙝𝙖𝙘𝙚𝙧𝙡𝙤 𝙫𝙤𝙨 𝙢𝙞𝙨𝙢𝙤 𝙞𝙣𝙨𝙩𝙖𝙡𝙖𝙙𝙤 𝙥𝙤𝙣𝙚𝙧 #𝙞𝙣𝙨𝙩𝙖𝙡𝙖𝙧𝙗𝙤𝙩  𝙮 𝙨𝙞 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖𝙨 𝙖𝙮𝙪𝙙𝙖 𝙝𝙖𝙗𝙡𝙖 𝙘𝙤𝙣 𝙚𝙡 𝙤𝙬𝙣𝙚𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩

*—◉ 𝑷𝒖𝒆𝒅𝒆 𝒑𝒓𝒐𝒃𝒂𝒓 𝒊𝒏𝒔𝒕𝒂𝒍𝒂𝒓 𝒅𝒆𝒔𝒅𝒆 𝒄𝒆𝒓𝒐 𝒆𝒍 𝒃𝒐𝒕. 𝑽𝒐𝒔 𝒎𝒊𝒔𝒎𝒐.
𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒅𝒐 𝒖𝒏𝒐𝒔 𝒗𝒊́𝒅𝒆𝒐 𝒕𝒖𝒕𝒐𝒓𝒊𝒂𝒍 𝒒𝒖𝒆 𝒉𝒂𝒚 𝒆𝒍 𝒄𝒂𝒏𝒂𝒍 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫
*◉ https://youtu.be/wWyBHtKzx9Q*
ㅤ`
let buttonMessage= {
'document': { url: `https://youtu.be/gh5NajZOTA8` },
'mimetype': `application/${document}`,
'fileName': `𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://youtu.be/gh5NajZOTA8',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: '𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
handler.limit = 1
export default handler

