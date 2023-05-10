import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*INGRESE UN ENLACE DE GITHUB*\nEJEMPLO:\n*${usedPrefix + command} ${md}*`
if (!regex.test(args[0])) throw `${lenguajeGB['smsAvisoFG']()}ENLACE NO ES VALIDO DEBER SER UN ENLACE DE GITHUB`
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`*Enviado el archivo, un momento 🚀*\n*Si no le llega el archivo es debido a que el reposito es muy pesado.`)
conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
handler.limit = 2
handler.level = 2
export default handler
