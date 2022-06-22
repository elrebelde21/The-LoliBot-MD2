import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/no soy pati.mp3'
conn.sendFile(m.chat, vn, 'no soy pati.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /no soy pati|no soy pa ti/
handler.command = new RegExp
export default handler