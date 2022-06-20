import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/nos vale.mp3'
conn.sendFile(m.chat, vn, 'nos vale.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Nos vale|nos vale/
handler.command = new RegExp
export default handler