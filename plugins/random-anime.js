import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-${command}.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
await delay(5000)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['🔄 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 🔄', `${usedPrefix + command}`]], m)    
}
handler.command = handler.help = ['akira', 'akiyama', 'anna', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'deidara', 'erza', 'elaina', 'eba', 'emilia', 'hestia', 'hinata', 'inori', 'isuzu', 'itachi', 'itori', 'kaga', 'kagura', 'kaori', 'keneki', 'kotori', 'kurumi', 'madara', 'mikasa', 'miku', 'minato', 'naruto', 'nezuko', 'sagiri', 'sasuke', 'sakura', 'cosplay']
handler.tags = ['anime']
handler.money = 25
export default handler
const delay = time => new Promise(res => setTimeout(res, time))