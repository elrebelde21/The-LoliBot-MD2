import fetch from 'node-fetch';
import axios from 'axios';
import * as cheerio from "cheerio"

const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw await tr(`*⚠️ Ingrese un texto para crear una imagen y asi usar la función de dall-e*\n\n*• Ejemplo:*\n*${usedPrefix + command} gatitos llorando*`)
m.react('⌛') 
try {
let response = await fetch(`https://api.dorratz.com/v3/ai-image?prompt=${text}`) 
let res = await response.json()
if (res.data.status === "success") {
const imageUrl = res.data.image_link;
await conn.sendFile(m.chat, imageUrl, 'error.jpg', await tr(`_💫 Resutados: ${text}_\n\n> *✨ Imagen generada por IA ✨*`), m, null, fake);
m.react('✅');
}
} catch {
try {       
let answer = await flux(text)
await conn.sendFile(m.chat, answer, 'error.jpg', await tr(`_💫 Resutados: ${text}_\n\n> *✨ Imagen generada por IA ✨*`), m, null, fake);
//conn.sendMessage(m.chat, { image: { url: answer }, caption: `_💫 Resutados: ${text}_\n\n> *✨ Imagen generada por IA ✨*`, mentions: [m.sender],}, { quoted: m })
m.react('✅');
} catch {
try {            
const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(text)}&client_id=YuKJ2TeTdI2x92PLBA3a11kCEqxjrwVsGhrVRyLBEfU`;
const response = await axios.get(url);
if (response.data.results.length === 0) return m.react("❌") 
const imageUrl = response.data.results[0].urls.regular; 
await conn.sendFile(m.chat, imageUrl, 'error.jpg', await tr(`_💫 Resutados: ${text}_\n\n> *✨ Imagen generada por IA ✨*`), m, null, fake);
m.react('✅');
} catch {  
try {        
const url = `https://api.betabotz.eu.org/api/search/bing-img?text=${encodeURIComponent(text)}&apikey=7gBNbes8`;
const response = await axios.get(url);
if (!response.data.result || response.data.result.length === 0) return m.react("❌") 
const imageUrl = response.data.result[0];
await conn.sendFile(m.chat, imageUrl, 'error.jpg', await tr(`_💫 Resutados: ${text}_\n\n> *✨ Imagen generada por IA ✨*`), m, null, fake);
m.react('✅');
} catch {  
try {
const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
const json1 = await tiores1.json();
await conn.sendFile(m.chat, json1.data, 'error.jpg', await tr(`_💫 Resutados: ${text}_\n\n> *✨ Imagen generada por IA ✨*`), m, null, fake);
} catch {
try {
const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
await conn.sendFile(m.chat, tiores4.data, 'error.jpg', await tr(`_💫 Resutados: ${text}_\n\n> *✨ Imagen generada por IA ✨*`), m, null, fake);
m.react('✅') 
} catch (error) {
m.reply(`\`\`\`⚠️ ${await tr("OCURRIO UN ERROR")} ⚠️\`\`\`\n\n> *${await tr("Reporta el siguiente error a mi creador con el comando:")}* #report\n\n>>> ${e} <<<< `)    
console.log('[❗] Error, ninguna api funcional.\n' + error);
m.react('❌') 
}}}}}}}
handler.help = ["dalle"]
handler.tags = ["buscadores"]
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3', 'a-img', 'aimg', 'imagine'];
handler.register = true
handler.limit = 1
export default handler;

const flux = async (prompt) => {
  const url = `https://lusion.regem.in/access/flux.php?prompt=${encodeURIComponent(prompt)}`
  const headers = {
    Accept: "*/*",
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/129.0.0.0 Mobile Safari/537.36",
    Referer: "https://lusion.regem.in/?ref=taaft&utm_source=taaft&utm_medium=referral",
  }
  const response = await fetch(url, { headers })
  const html = await response.text()
  const $ = cheerio.load(html)
  return $("a.btn-navy.btn-sm.mt-2").attr("href") || null
}

const writer = async (input) => {
  const url = `https://ai-server.regem.in/api/index.php`
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Accept: "*/*",
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/129.0.0.0 Mobile Safari/537.36",
    Referer: "https://regem.in/ai-writer/",
  }
  const formData = new URLSearchParams()
  formData.append("input", input)
  const response = await fetch(url, { method: "POST", headers, body: formData })
  return response.text()
}

const rephrase = async (input) => {
  const url = `https://ai-server.regem.in/api/rephrase.php`
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Accept: "*/*",
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/129.0.0.0 Mobile Safari/537.36",
    Referer: "https://regem.in/ai-rephrase-tool/",
  }
  const formData = new URLSearchParams()
  formData.append("input", input)
  const response = await fetch(url, { method: "POST", headers, body: formData })
  return response.text()
}