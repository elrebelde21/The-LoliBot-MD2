import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙜𝙞𝙩𝙝𝙪𝙗\𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} ${md}*`
if (!regex.test(args[0])) throw `${lenguajeGB['smsAvisoFG']()}𝙀𝙣𝙡𝙖𝙘𝙚 𝙣𝙤 𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚𝙗𝙚𝙧 𝙨𝙚𝙧 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙜𝙞𝙩𝙝𝙪𝙗`
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`${eg}𝙀𝙣𝙫𝙞𝙖𝙙𝙤 𝙚𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤, 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 🚀\n𝙎𝙞 𝙣𝙤 𝙡𝙚 𝙡𝙡𝙚𝙜𝙖 𝙚𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙚𝙨 𝙙𝙚𝙗𝙞𝙙𝙤 𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙧𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤 𝙚𝙨 𝙥𝙚𝙨𝙖𝙙𝙤.`)
conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
handler.limit = 2
handler.level = 2
export default handler
