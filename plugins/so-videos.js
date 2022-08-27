import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/mi bebito.mp4'
conn.sendFile(m.chat, vn, 'mi bebito.mp4', '😏', m, true, {
type: 'videoMessage', 
ptt: true
})
}

handler.customPrefix = /mi bebito|creadoramibb/i
handler.command = new RegExp
export default handler
