import { facebookDl } from './scraper.js'
import { savefrom } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `𝙌𝙪𝙚 𝙗𝙪𝙨𝙘𝙖𝙧?🤔  𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠, \n𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command}* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl`
try {
m.reply(`*[❗] 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤 𝙨𝙪 𝙫𝙞𝙙𝙚𝙤, 𝙖𝙜𝙪𝙖𝙧𝙙𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙚𝙨𝙩𝙚 𝙥𝙧𝙤𝙘𝙚𝙨𝙤 𝙥𝙪𝙚𝙙𝙚 𝙙𝙪𝙧𝙖𝙧 𝙚𝙣𝙩𝙧𝙚 2 𝙮 10 𝙢𝙞𝙣𝙪𝙩𝙤𝙨 𝙙𝙚𝙥𝙚𝙣𝙙𝙞𝙚𝙣𝙙𝙤 𝙙𝙚 𝙡𝙖 𝙙𝙪𝙧𝙖𝙘𝙞𝙤́𝙣 𝙙𝙚𝙡 𝙫𝙞́𝙙𝙚𝙤...*`)
let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '*𝘼𝙦𝙪𝙞́ 𝙚𝙨𝙩𝙖́ 𝙨𝙪 𝙫𝙞𝙙𝙚𝙤 *' }, { quoted: m })
} catch (e) {
m.reply('*[❗𝙄𝙣𝙛𝙤❗] 𝙐𝙛𝙛, 𝙚𝙧𝙧𝙤𝙧, 𝙫𝙪𝙚𝙡𝙫𝙖 𝙖𝙡 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧, \n\n𝙛𝙞́𝙟𝙖𝙩𝙚 𝙦𝙪𝙚 𝙚𝙣𝙡𝙖𝙘𝙚 𝙨𝙚𝙖 𝙙𝙚𝙡 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠. 𝙀𝙟𝙚𝙢𝙥𝙡𝙤 𝙨𝙞𝙢𝙞𝙡𝙖𝙧 𝙖 𝙚𝙨𝙩𝙚*\n*◉* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl')
}}
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler