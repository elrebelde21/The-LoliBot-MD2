import fs from 'fs'
//import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let pp = 'https://i.imgur.com/WwxBm8o.jpg' //'./media/menus/Menu1.jpg'
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//try {
//pp = await conn.getProfilePicture(who)
//} catch (e) {

//} finally { }
  await m.reply(`╰⊱⚠️⊱ *𝘼𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖𝙨* ⊱⚠️⊱╮`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let text = `
*𝙇𝙖𝙨 𝙛𝙪𝙣𝙘𝙞𝙤𝙣𝙚𝙨 #𝙟𝙖𝙙𝙞𝙗𝙤𝙩 #𝙗𝙤𝙩𝙨 #𝙨𝙚𝙧𝙗𝙤𝙩 #𝙨𝙪𝙗𝙗𝙤𝙩 #𝙜𝙚𝙩𝙘𝙤𝙙𝙚. 𝙉𝙤 𝙚𝙨𝙩𝙖𝙣 𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚𝙨 𝙚𝙣 ${gt} 𝙨𝙞 𝙦𝙪𝙞𝙚𝙧𝙚 𝙝𝙖𝙘𝙚𝙧𝙩𝙚 𝙗𝙤𝙩 𝙞𝙣𝙩𝙚𝙣𝙩𝙖 𝙝𝙖𝙘𝙚𝙧𝙡𝙤 𝙫𝙤𝙨 𝙢𝙞𝙨𝙢𝙤 𝙞𝙣𝙨𝙩𝙖𝙡𝙖𝙙𝙤 𝙥𝙤𝙣𝙚𝙧 #𝙞𝙣𝙨𝙩𝙖𝙡𝙖𝙧𝙗𝙤𝙩  𝙮 𝙨𝙞 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖𝙨 𝙖𝙮𝙪𝙙𝙖 𝙝𝙖𝙗𝙡𝙖 𝙘𝙤𝙣 𝙚𝙡 𝙤𝙬𝙣𝙚𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫',
body: '𝙎𝙪𝙥𝙚𝙧 𝙗𝙤𝙩 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})  
  
  let info = `✨ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙚 𝙨𝙤𝙗𝙧𝙚 𝙡𝙖𝙨 𝙉𝙤𝙫𝙚𝙙𝙖𝙙𝙚𝙨 𝙮 𝙧𝙚𝙘𝙪𝙚𝙧𝙙𝙖 𝙩𝙚𝙣𝙚𝙧 𝙡𝙖 𝙪𝙡𝙩𝙞𝙢𝙖 𝙫𝙚𝙧𝙨𝙞𝙤𝙣.
  `.trim()
  
  await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [

['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅', '/cuentasgb'],
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)
  
  //await conn.sendButton(m.chat, `Infórmate sobre las Novedades y recuerda tener la última versión.\nFind out about what's new and remember to have the latest version.`, author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', /${command}], ['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 2 🔄', /${command}]], m)
}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler
