import fs from 'fs'
let vn = './media/instalar.mp3'
//import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let pp = 'https://i.imgur.com/WwxBm8o.jpg' //'./media/menus/Menu1.jpg'
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//try {
//pp = await conn.getProfilePicture(who)
//} catch (e) {

//} finally { }
  await m.reply(`╰⊱🔰⊱ *𝑰𝒏𝒔𝒕𝒂𝒍𝒂𝒄𝒊𝒐𝒏* ⊱🔰⊱╮`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let text = `
 𝙋𝙖𝙨𝙤 𝙙𝙚 𝙡𝙖 𝙞𝙣𝙨𝙩𝙖𝙡𝙖𝙘𝙞𝙤𝙣
 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫 𝒚𝒂 𝒆𝒔𝒕𝒂 𝒍𝒊𝒔𝒕𝒂 𝒑𝒂𝒓𝒂 𝒍𝒂 𝒊𝒏𝒔𝒕𝒂𝒍𝒂𝒄𝒊𝒐𝒏

 𝒔𝒊 𝒏𝒆𝒄𝒆𝒔𝒊𝒕𝒂𝒔 𝒂𝒚𝒖𝒅𝒂 𝒆𝒏𝒕𝒓𝒂 𝒂𝒍 𝒈𝒓𝒖𝒑𝒐 𝒅𝒆𝒍 𝒃𝒐𝒕

📌 *https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k*

 𝑶 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒎𝒆 𝒂𝒍 wa.me/56977774748*
 𝒔𝒐𝒍𝒐 𝒑𝒐𝒓 𝒕𝒆𝒎𝒂 𝒅𝒆𝒍 𝒃𝒐𝒕

📌 𝒑𝒂𝒔𝒐 𝒑𝒂𝒓𝒂 𝒊𝒏𝒔𝒕𝒂𝒍𝒂𝒓 𝒆𝒍 𝒃𝒐𝒕 𝒆𝒍 𝒕𝒆𝒓𝒎𝒖𝒙
 
📌 𝒄𝒐𝒎𝒐 𝒊𝒏𝒔𝒕𝒂𝒍𝒂𝒓 𝒆𝒍 𝒃𝒐𝒕 *https://youtu.be/gh5NajZOTA8*

🔸 𝒏𝒆𝒄𝒆𝒔𝒊𝒕𝒂 2 𝒄𝒆𝒍𝒖 𝒔𝒐𝒍𝒐 𝒑𝒂𝒓𝒂 𝒆𝒔𝒄𝒂𝒏𝒆𝒂𝒓 𝒆𝒍 𝑸𝑹
🔸 𝑰𝒏𝒔𝒕𝒂𝒍𝒂𝒓 𝒕𝒆𝒓𝒎𝒖𝒙 𝒅𝒆 𝑮𝒐𝒐𝒈𝒍𝒆

 𝒑𝒂𝒔𝒐 𝒏𝒖𝒎𝒆𝒓𝒐 1*

🔸 termux-setup-storage
    (𝒍𝒆 𝒅𝒂𝒓 𝒆𝒍 𝒑𝒆𝒓𝒎𝒊𝒕𝒆)

🔸  apt update 

🔸  pkg upgrade 

🔸 pkg install git -y

🔸 pkg install nodejs -y

🔸 pkg install ffmpeg -y

🔸 pkg install imagemagick -y

🔸 pkg install yarn

🔸 git clone https://github.com/elrebelde21/The-LoliBot-MD

🔸  cd The-LoliBot-MD

🔸 npm install

🔸 yarn install 

🔸 npm install

🔸 npm update

🔸 ls

🔸 npm start 
 (𝒚 𝒂𝒄𝒂 𝒒𝒖𝒆 𝒗𝒂𝒏 𝒎𝒂𝒏𝒅𝒂 𝒆𝒍 𝑸𝑹 𝒕𝒆𝒏𝒆𝒓 𝒍𝒂  𝒐𝒑𝒄𝒊𝒐𝒏 𝒔𝒂𝒄𝒂 𝒖𝒏𝒂 𝒄𝒂𝒑𝒕𝒖𝒓𝒂 𝒚 𝒎𝒂𝒏𝒅𝒂𝒍𝒂  𝒂 𝒕𝒖 𝒐𝒕𝒓𝒐 𝒄𝒆𝒍𝒖 𝒚 𝒆𝒔𝒄𝒂𝒏𝒆𝒂)

 𝒄𝒖𝒂𝒍𝒒𝒖𝒊𝒆𝒓 𝒄𝒐𝒔𝒂 𝒉𝒂𝒃𝒍𝒂𝒎𝒆 𝒔𝒐𝒍𝒐 𝒑𝒐𝒓 𝒕𝒆𝒎𝒂 𝒅𝒆𝒍 𝒃𝒐𝒕🔰🤖
 𝑺𝒂𝒍𝒖𝒅𝒐𝒔🔰🤖`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫',
body: 'Super Bot WhatsApp',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})  
  
  let info = `✨ *Infórmate sobre las Novedades y recuerda tener la última versión..*
  `.trim()
  
  await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [

['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅', '/cuentasgb'],
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)
conn.sendFile(m.chat, vn, 'instalar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
  
  //await conn.sendButton(m.chat, `Infórmate sobre las Novedades y recuerda tener la última versión.\nFind out about what's new and remember to have the latest version.`, author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', /${command}], ['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 2 🔄', /${command}]], m)
}
handler.command = /^(Instalarbot|botinstalacion|instalarbot|botinstalacion)/i
export default handler
