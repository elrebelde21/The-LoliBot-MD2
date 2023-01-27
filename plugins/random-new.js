import axios from "axios"  
import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, command, conn, text}) => {

if (command == 'chica') {
let pp = 'https://source.unsplash.com/featured/?girl,woman'
await delay(5000)
conn.sendHydrated(m.chat, wm, null, pp, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫', null, null, [
['😻 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆', `.chica`],
['✨ 𝑪𝒉𝒊𝒄𝒐', `.chico`],
['𝑽𝒐𝒍𝒗𝒆 𝒂𝒍 𝒎𝒆𝒏𝒖́ ☘️', '/menu']
], m,)}
  
  
if (command == 'chico') {
 let pp = 'https://source.unsplash.com/featured/?boy,man'
 await delay(5000)
conn.sendHydrated(m.chat, wm, null, pp, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫', null, null, [
['😻 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆', `.chico`],
['✨ 𝑪𝒉𝒊𝒄𝒂', `.chica`],
['𝑽𝒐𝒍𝒗𝒆 𝒂𝒍 𝒎𝒆𝒏𝒖́☘️', '/menu']
], m,)}  

  
if (command == 'clima') {
 if (!text) return conn.reply(m.chat, `${mg}𝑬𝒔𝒄𝒓𝒊𝒃𝒂 𝒆𝒍 𝒑𝒂𝒊́𝒔 𝒚 𝒄𝒖𝒊𝒅𝒂𝒅 𝒑𝒂𝒓𝒂 𝒔𝒂𝒃𝒆𝒓 𝒆𝒍 𝒄𝒍𝒊𝒎𝒂\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command} Francia París*`, m)  
//const clima = await axios.get(`https://es.wttr.in/${text}?format=Cidade%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nUmidade%20=%20%h\n\nVento%20=%20%w\n\nLua agora%20=%20%m\n\nNascer%20do%20Sol%20=%20%S\n\nPor%20do%20Sol%20=%20%s`)

let pp = `https://es.wttr.in/${text}.png`
await delay(5000)
conn.sendHydrated(m.chat, `✨ *AQUÍ TIENE EL CLIMA EN ESPAÑOL*`, wm, pp, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫', null, null, [
['💜 𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙫𝙚𝙧𝙨𝙞𝙤𝙣', `.clima2 ${text}`],
['💚 𝙑𝙚𝙧𝙨ã𝙤 𝙚𝙢 𝙋𝙤𝙧𝙩𝙪𝙜𝙪ê𝙨', `.clima3 ${text}`],
['𝑽𝒐𝒍𝒗𝒆 𝒂𝒍 𝒎𝒆𝒏𝒖́ ☘️', '/menu']
], m,)}  
  
  
if (command == 'clima2') {
 if (!text) return conn.reply(m.chat, `${mg}𝑬𝒔𝒄𝒓𝒊𝒃𝒂 𝒆𝒍 𝒑𝒂𝒊́𝒔 𝒚 𝒄𝒖𝒊𝒅𝒂𝒅 𝒑𝒂𝒓𝒂 𝒔𝒂𝒃𝒆𝒓 𝒆𝒍 𝒄𝒍𝒊𝒎𝒂\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command} Ecuador Quito*`, m)  

let pp = `https://en.wttr.in/${text}.png`
await delay(5000)
conn.sendHydrated(m.chat, `✨ *HERE IS THE WEATHER IN ENGLISH*`, wm, pp, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫', null, null, [
['💙 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙀𝙨𝙥𝙖𝙣𝙤𝙡', `.clima ${text}`],
['💚 𝙑𝙚𝙧𝙨ã𝙤 𝙚𝙢 𝙋𝙤𝙧𝙩𝙪𝙜𝙪ê𝙨', `.clima3 ${text}`],
['𝑽𝒐𝒍𝒗𝒆 𝒂𝒍 𝒎𝒆𝒏𝒖́ ☘️', '/menu']
], m,)}  
  
  
if (command == 'clima3') {
 if (!text) return conn.reply(m.chat, `${mg}𝑬𝒔𝒄𝒓𝒊𝒃𝒂 𝒆𝒍 𝒑𝒂𝒊́𝒔 𝒚 𝒄𝒖𝒊𝒅𝒂𝒅 𝒑𝒂𝒓𝒂 𝒔𝒂𝒃𝒆𝒓 𝒆𝒍 𝒄𝒍𝒊𝒎𝒂\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command} Ecuador Quito*`, m)  

let pp = `https://pt.wttr.in/${text}.png`
await delay(5000)
conn.sendHydrated(m.chat, `✨ *AQUI ESTÁ O TEMPO EM PORTUGUÊS*`, wm, pp, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫', null, null, [
['💙 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙀𝙨𝙥𝙖𝙣𝙤𝙡', `.clima ${text}`],
['💜 𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙫𝙚𝙧𝙨𝙞𝙤𝙣', `.clima2 ${text}`],  
['𝑽𝒐𝒍𝒗𝒆 𝒂𝒍 𝒎𝒆𝒏𝒖́ ☘️', '/menu']
], m,)}  
   
} 
handler.help = ['chica', 'chico', 'clima', 'clima2', 'clima3'] 
handler.command = ['chica', 'chico', 'clima', 'clima2', 'clima3'] 
handler.money = 40
handler.register = true
export default handler
const delay = time => new Promise(res => setTimeout(res, time))