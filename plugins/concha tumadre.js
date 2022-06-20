import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/concha tu madre.mp3'
conn.sendFile(m.chat, vn, 'concha tu madre.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Concha tu madre|concha tu madre/
handler.command = new RegExp
export default handler