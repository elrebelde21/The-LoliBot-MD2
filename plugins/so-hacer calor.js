import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/calor.mp4'
conn.sendFile(m.chat, vn, 'calor.mp4', '🥵🤣', m, true, {
type: 'videoMessage', 
ptt: true
})
}

handler.customPrefix = /hacer calor|calor/i
handler.command = new RegExp
export default handler
 