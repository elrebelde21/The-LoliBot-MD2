import fetch from 'node-fetch'
import { facebookDl } from './scraper.js'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
let handler = async (m, { conn, args, command, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`, fkontak, m)
if (!args[0].match(/www.facebook.com|fb.watch/g)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`, fkontak, m)
const sections = [
{
title: htjava + ' 📡 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 ' + htjava,
rows: [
{title: "📡 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 (𝙤𝙥𝙘𝙞𝙤𝙣 1) ", rowId: `${usedPrefix}fb1 ${args[0]}`},
{title: "📡 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 (𝙤𝙥𝙘𝙞𝙤𝙣 2) ", rowId: `${usedPrefix}fb2 ${args[0]}`},
//{title: "📡 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 (𝙤𝙥𝙘𝙞𝙤𝙣 3) ", rowId: `${usedPrefix}fb3 ${args[0]}`},
//{title: "📡 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 (𝙤𝙥𝙘𝙞𝙤𝙣 4) ", rowId: `${usedPrefix}fb4 ${args[0]}`},
//{title: "📡 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 (𝙤𝙥𝙘𝙞𝙤𝙣 5) ", rowId: `${usedPrefix}fb5 ${args[0]}`}
]}]	
const listMessage = {
text: `𝙎𝙀𝙇𝙀𝘾𝘾𝙄𝙊𝙉𝙀 𝙐𝙉𝘼 𝙊𝙋𝘾𝙄𝙊𝙉 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍`,
footer: `*𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ${user.premium ? "✅": "❌"}*\n${wm}`,
title: `*⎔───ꕤ 📡 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 ꕤ───⎔*`,
buttonText: `🛰️ 𝙀𝙡𝙚𝙜𝙞𝙧 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖 🛰️`,
sections }  
try {
let contenido = `✅ 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆\n${wm}`
switch (command) { 
case "facebook": case "fb": case "facebookdl": case "fbdl":                
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak} )
break      
case "facebook1": case "fb1": case "facebookdl1": case "fbdl1": 
let vio = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=beta&url=${args[0]}`)  
let vioo = await vio.json()
let videovio = `${vioo.result.hd.url || vioo.result.sd.url}`
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆`, fkontak, m)
await conn.sendFile(m.chat, videovio, `error.mp4`, contenido, m)
break
//let res = await fbDownloader(args[0])
//for (let result of res.download) {
//let ur = result.url
//await conn.sendMessage(m.chat, { video: { ur }, caption: contenido }, { quoted: m })}


case "facebook2": case "fb2": case "facebookdl2": case "fbdl2":   
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆`, fkontak, m)
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) await conn.sendMessage(m.chat, { video: { url }, fileName: `error.mp4`, mimetype: 'video/mp4' , caption: contenido }, { quoted: m })   
break
//let ress = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
//let urll = ress?.url?.[0]?.url || ress?.url?.[1]?.url || ress?.['720p'] || ress?.['360p']
//await conn.sendMessage(m.chat, { video: { urll }, caption: contenido }, { quoted: m })  

}} catch {
}}
handler.command = /^(facebook|fb|facebookdl|fbdl|facebook1|fb1|facebookdl1|fbdl1|facebook2|fb2|facebookdl2|fbdl2)$/i
handler.limit = 3
export default handler
