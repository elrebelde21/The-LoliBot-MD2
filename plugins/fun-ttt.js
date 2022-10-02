import TicTacToe from '../lib/tictactoe.js' 
let handler = async (m, { conn, usedPrefix, command, text }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `𝑻𝒐𝒅𝒂𝒗𝒊́𝒂 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒆𝒔𝒕𝒂́ 𝒋𝒖𝒈𝒂𝒅𝒐 𝒆𝒏 𝒍𝒂 𝒔𝒂𝒍𝒂 𝒔𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒂𝒃𝒂𝒏𝒅𝒐𝒏𝒂𝒓 𝒆𝒔𝒄𝒓𝒊𝒃𝒂 *salir*\n𝑻𝒂𝒎𝒃𝒊𝒆́𝒏 𝒑𝒖𝒆𝒅𝒆 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒓 𝒍𝒂 𝒔𝒂𝒍𝒂 𝒖𝒔𝒂𝒅𝒐 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐*${usedPrefix}delttt*`
if (!text) throw `𝘿𝙚𝙗𝙚 𝙙𝙚 𝙖𝙜𝙧𝙚𝙜𝙖 𝙪𝙣 𝙣𝙤𝙢𝙗𝙧𝙚 𝙖𝙡 𝙡𝙖 𝙨𝙖𝙡𝙖\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} Sala bot*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true)) 
if (room) {
await conn.sendButton(m.chat, `𝑨𝒍𝒈𝒖𝒊𝒆𝒏 𝒔𝒆 𝒉𝒂𝒔 𝒖𝒏𝒊𝒅𝒐 𝒂𝒍 𝒍𝒂 𝒔𝒂𝒍𝒂 *${text}*\n𝒀𝒂 𝒑𝒖𝒆𝒅𝒆 𝒋𝒖𝒈𝒂𝒔!! 😼`, wm, null, [['𝑸𝒖𝒆 𝒈𝒂𝒏𝒆 𝒆𝒍 𝒎𝒆𝒋𝒐𝒓 🤝', '👻'] ], fkontak, m)

await conn.sendButton(m.chat, `${rg}⭕️ *𝑪𝒍𝒂́𝒔𝒊𝒄𝒐 𝑱𝒖𝒆𝒈𝒐 𝒅𝒆𝒍 𝑮𝒂𝒕𝒐,3 𝒆𝒏 𝒓𝒂𝒚𝒂 𝑶 𝒕𝒂𝒕𝒆𝒕𝒊* ❌\n\n*¿𝑪𝒐́𝒎𝒐 𝒋𝒖𝒈𝒂𝒓?*\𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝑱𝒖𝒆𝒈𝒐 𝒄𝒐𝒏 𝒖𝒏 𝑵𝒖́𝒎𝒆𝒓𝒐, 𝒆𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒅𝒆𝒃𝒆 𝒄𝒐𝒏𝒕𝒆𝒏𝒆𝒓 𝒍𝒂 𝒑𝒐𝒔𝒊𝒔𝒄𝒊𝒐𝒏 𝒆𝒏 𝒍𝒂 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒂𝒔 𝒆𝒔𝒕𝒂𝒓 (1,2,3,4,5,6,7,8,9)_`, wm, null, [['😽 𝑶𝑲 𝒈𝒓𝒂𝒄𝒊𝒂𝒔', 'ok'] ], fkontak, m)

room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
let str = `💖 𝙅𝙪𝙚𝙜𝙤 𝙩𝙖𝙩𝙚𝙩𝙞
🫂 𝙅𝙪𝙜𝙖𝙙𝙤𝙧𝙚𝙨:
*┈┈┈┈┈┈┈┈┈*
❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}
*┈┈┈┈┈┈┈┈┈*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*┈┈┈┈┈┈┈┈┈*
𝙏𝙪𝙧𝙣𝙤 𝙙𝙚:
@${room.game.currentTurn.split('@')[0]}
`.trim()

if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: fkontak, m })
        
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
        
if (text) room.name = text     
let imgplay = `https://img.freepik.com/vector-premium/juego-tres-raya-icono-contorno-lineal-neon_7280-2422.jpg`
conn.sendButton(m.chat, `😼 𝑱𝒖𝒆𝒈𝒐 𝒕𝒂𝒕𝒆𝒕𝒊

🐈 𝑬𝒔𝒑𝒆𝒓𝒂𝒅𝒐 𝒂𝒍 𝒔𝒆𝒈𝒖𝒏𝒅𝒐 𝒋𝒖𝒈𝒂𝒅𝒐𝒓 𝒑𝒖𝒆𝒅𝒆 𝒊𝒏𝒈𝒓𝒆𝒔𝒂𝒓  𝒄𝒐𝒏 𝒆𝒍 𝒃𝒐𝒕𝒐́𝒏 𝒅𝒆 𝒂𝒃𝒂𝒋𝒐 𝒐 𝒖𝒔𝒂𝒅𝒐 𝒆𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐
*${usedPrefix + command} ${text}*

𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒂𝒃𝒂𝒏𝒅𝒐𝒏𝒂𝒓 𝒍𝒂 𝒔𝒂𝒍𝒂 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *${usedPrefix}delttt*

`, wm, imgplay, [['😎 𝑼𝒏𝒊𝒓𝒎𝒆 𝒂𝒍 𝒋𝒖𝒆𝒈𝒐𝒔', `${usedPrefix + command} ${text}`]], fkontak, m, { mentions: conn.parseMention(text) })
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler
