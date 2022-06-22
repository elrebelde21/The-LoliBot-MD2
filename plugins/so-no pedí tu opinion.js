import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/no pedi tu opinion.mp3'
conn.sendFile(m.chat, vn, 'no pide tu opinion.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /no pide tu opinion|que me importa/
handler.command = new RegExp
export default handler