import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn}) => {
try {
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
let res = await fetch('https://api.waifu.pics/sfw/pat')
let json = await res.json()
let { url } = json
await delay(5 * 5000)
let stiker = await sticker(null, url, `+${m.sender.split('@')[0]} le dio palmaditas a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) { }}
handler.command = /^(pat|palmaditas|cariños|mimos|patt)$/i 
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))