import translate from 'translate-google-api'
const defaultLang = 'es'
const tld = 'cn'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `${mg}𝙔 𝙚𝙡 𝙩𝙚𝙭𝙩𝙤🤔 𝙌𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙚 𝙩𝙧𝙖𝙙𝙪𝙘𝙞𝙧\n 𝙐𝙨𝙚𝙧 𝙙𝙚 𝙚𝙨𝙩𝙖 𝙛𝙤𝙧𝙢𝙖\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} (idioma) (texto)*\n*${usedPrefix + command} es hello*\n\n𝑰𝒅𝒊𝒐𝒎𝒂 𝒂𝒅𝒎𝒊𝒕𝒊𝒅𝒐𝒔\n*https://cloud.google.com/translate/docs/languages*`
if (!args || !args[0]) return m.reply(msg)
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ') }
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {
tld,
to: lang, })
} catch (e) {
result = await translate(`${text}`, {
tld,
to: defaultLang, })
} finally {
m.reply('*Traducción:* ' +  result[0]) }}
handler.help = ['translate', 'traducir']
handler.tags = ['General']
handler.command = /^(tr(anslate)|traducir?)$/i
export default handler
