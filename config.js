import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

//⊱ ━━━━━.⋅ owner/propietario del bot  ⋅.━━━━ ⊰
global.owner = [
  ['56977774748', 'creador', true],
  ['212614486339'],
  ['+506 6070 8539'], //aqui cambia el numero por el tuyo
]
//aqui poner los numero premium 
global.mods = [] 
global.prems = ['+506 6070 8539'], 

global.APIs = { // API Prefix.
  
//⊱ ━━━━━.⋅ name: 'https://website' ⋅.━━━━ ⊰
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz'
},
  
global.APIKeys = { // APIKey Here
  //⊱ ━━━━━.⋅ 'https://website': 'apikey' ⋅.━━━━ ⊰
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}


//⊱ ━━━━━.⋅ Sticker WM ⋅.━━━━ ⊰

global.packname = 'toma tu sticker'
global.author = '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫'

//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.vs = '1.1.5'
global.version = vs

global.gt = '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫'
global.gatabot = gt

global.yt = 'https://youtube.com/channel/UC9b3UIVnVb5eQt7_Y-Qz-3A'
global.youtube = yt

global.ig = ''
global.gatadiosig = ig

global.md = 'https://github.com/elrebelde21/The-LoliBot-MD'
global.gatabot = md

global.nn = 'https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k'
global.nngrupo = nn

global.nnn = 'https://chat.whatsapp.com/Byyrc8RJnUkJw6vvUgsbDF'
global.nnngrupo = nnn

global.paypal = 'https://www.instagram.com/gata_dios  https://paypal.me/OficialGD'
global.donar = paypal


//⊱ ━━━━━━━━━━━━━.⋅ Datos ⋅.━━━━━━━━━━━━━━ ⊰
global.rg = '╰⊱✅⊱ *𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐* ⊱✅⊱╮\n\n'
global.resultado = rg

global.ag = '╰⊱⚠️⊱ *𝑨𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂𝒔* ⊱⚠️⊱╮\n\n'
global.advertencia = ag

global.iig = '╰⊱❕⊱ *𝑰𝒏𝒇𝒐𝒎𝒂𝒄𝒊𝒐𝒏* ⊱❕⊱╮\n\n'
global.informacion = iig

global.fg = '╰⊱❌⊱ *𝑭𝒂𝒍𝒍𝒐 | 𝒆𝒓𝒓𝒐𝒓* ⊱❌⊱╮\n\n'
global.fallo = fg

global.mg = '╰⊱❗️⊱ *𝑳𝒐 𝒖𝒔𝒐 𝒎𝒂𝒍* ⊱❗️⊱╮\n\n'
global.mal = mg

global.eeg = '╰⊱📩⊱ *𝑹𝒆𝒑𝒐𝒓𝒕𝒆* ⊱📩⊱╮\n\n'
global.envio = eeg

global.eg = '╰⊱💚⊱ *𝑬𝒙𝒊𝒕𝒐𝒔* ⊱💚⊱╮\n\n'
global.exito = eg

//⊱ ━━━━━.⋅ Información ⋅.━━━━ ⊰

global.wm = '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫'
global.igfg = 'The Lolibot-MD'
global.wait = '*⌛ _Cargando..._ ▬▬▬▭*'

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.multiplier = 100 // Cuanto más alto, más difícil subir de nivel

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🏆',
      limit: '💎',
      exp: '🕹️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
