let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
await m.reply(`╰⊱🔰⊱ *𝑰𝒏𝒔𝒕𝒂𝒍𝒂𝒄𝒊𝒐𝒏* ⊱🔰⊱╮`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let texto1 = `
 ⚡▁ ▂ ▄ ▅ ▆ ▇ █ 🚆 █ ▇ ▆ ▅ ▄ ▂ ▁⚡

💥 𝙔𝘼 𝙋𝙐𝙀𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝘼 𝙏𝙝𝙚-𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿 ❕

*VÍDEO DE INSTALACIÓN*
*https://youtu.be/gh5NajZOTA8*

✨ *Si necesitas ayuda entra al grupo del bot*
📌 *${global.nna}*

💛 *Si tienes dudas o necesitas ayuda en el proceso de la instalación puede escribir me a este número (No es Bot el número)*

📲 *Wa.me/56964787183*

❗ *_Solo para temas de instalación_*

───────•••───────

✨ 𝙍𝙀𝙌𝙐𝙄𝙎𝙄𝙏𝙊𝙎 𝙋𝘼𝙍𝘼 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙏𝙝𝙚-𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿

✅ _1 GB de almacenamiento_
✅ _Aplicación Termux (actualizada)_
✅ _Un WhatsApp recomiendo el WhatsApp normal_
✅ _Un número virtual (si es ofc mejor)_
✅ _2 dispositivos o una PC para escanear_

───────•••───────

✨ 𝙂𝙄𝙏𝙃𝙐𝘽 > 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊
*_Visita mí repositorio 😸 para más información, si te agrada el Bot apoya me con una ⭐️ ¡Gracias!_*

${md}

───────•••───────

📌 *PASO PARA INSTALAR EL BOT EL TERMUX*

🔸 termux-setup-storage
🔸 apt update 
🔸 pkg upgrade 
🔸 pkg install git -y
🔸 pkg install nodejs -y
🔸 pkg install ffmpeg -y
🔸 pkg install imagemagick -y
🔸 pkg install yarn
🔸 cd storage/downloads/LoliBot
🔸 npm install
🔸 ls
🔸 npm start

───────•••───────

📌 𝗜𝗡𝗦𝗧𝗔𝗟𝗔𝗥 𝗘𝗡 𝗕𝗢𝗫𝗠𝗜𝗡𝗘

*𝙏𝙝𝙚-𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿 : 𝘽𝙤𝙭𝙈𝙞𝙣𝙚*
*_https://youtu.be/wWyBHtKzx9Q_*

_Pagina Oficial_ 
_https://boxmineworld.com_

_Panel_
_https://panel.boxmineworld.com_

───────•••───────

📌 𝗜𝗡𝗦𝗧𝗔𝗟𝗔𝗥 𝗘𝗡 𝙍𝙀𝙋𝙇𝙄𝙏 

*𝙏𝙝𝙚-𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿 : 𝙍𝙀𝙋𝙇𝙄𝙏*
https://youtu.be/SMjCcfuyWQE

_Pagina Oficial_ 
https://replit.com/

───────•••───────
𝒄𝒖𝒂𝒍𝒒𝒖𝒊𝒆𝒓 𝒄𝒐𝒔𝒂 𝒉𝒂𝒃𝒍𝒂𝒎𝒆 𝒔𝒐𝒍𝒐 𝒑𝒐𝒓 𝒕𝒆𝒎𝒂 𝒅𝒆𝒍 𝒃𝒐𝒕🔰🤖
 𝑺𝒂𝒍𝒖𝒅𝒐𝒔🔰🤖

⚡▁ ▂ ▄ ▅ ▆ ▇ █ 🚆 █ ▇ ▆ ▅ ▄ ▂ ▁⚡
                           𝙏𝙝𝙚-𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿`
let buttonMessage= {
'document': { url: `https://youtu.be/HyCqmXDHGeQ` },
'mimetype': `application/${document}`,
'fileName': `𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://youtu.be/HyCqmXDHGeQ',
'mediaType': 2,
'previewType': 'pdf',
'title': 'tutorial del instalación',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(instalarbot|instalarbot)$/i
export default handler
