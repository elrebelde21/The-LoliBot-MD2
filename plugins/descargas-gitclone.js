import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙜𝙞𝙩𝙝𝙪𝙗\𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} https://github.com/GataNina-Li/GataBot-MD*`
if (!regex.test(args[0])) throw `${fg}𝙀𝙣𝙡𝙖𝙘𝙚 𝙣𝙤 𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚𝙗𝙚𝙧 𝙨𝙚𝙧 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙜𝙞𝙩𝙝𝙪𝙗`
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`${eg}𝙀𝙣𝙫𝙞𝙖𝙙𝙤 𝙚𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤, 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 🚀\n𝙎𝙞 𝙣𝙤 𝙡𝙚 𝙡𝙡𝙚𝙜𝙖 𝙚𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙚𝙨 𝙙𝙚𝙗𝙞𝙙𝙤 𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙧𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤 𝙚𝙨 𝙥𝙚𝙨𝙖𝙙𝙤.`)
conn.sendFile(m.chat, url, filename, null, m)
let info = `💖 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒆 𝒔𝒐𝒃𝒓𝒆 𝒍𝒂𝒔 𝑵𝒐𝒗𝒆𝒅𝒂𝒅𝒆𝒔 𝒚 𝒓𝒆𝒄𝒖𝒆𝒓𝒅𝒂 𝒕𝒆𝒏𝒆𝒓 𝒍𝒂 𝒖𝒍𝒕𝒊𝒎𝒂 𝒗𝒆𝒓𝒔𝒊𝒐𝒏..
  `.trim()
  let vn = './media/descarga.mp3'
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)  
conn.sendFile(m.chat, vn, 'descarga.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
handler.exp = 59
export default handler
