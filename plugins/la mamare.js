import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/la mamare.mp3'
conn.sendFile(m.chat, vn, 'la mamare.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /La mamare|la mamare/
handler.command = new RegExp
export default handler