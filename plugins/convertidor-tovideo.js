import {webp2mp4} from '../lib/webp2mp4.js';
import {ffmpeg} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
if (!m.quoted) throw `*⚠️ ${await tr("Responde a un sticker que desee convertir en video con el comando")}: ${usedPrefix + command}*`;
const mime = m.quoted.mimetype || '';
if (!/webp/.test(mime)) throw `*⚠️ ${await tr("Responde a un sticker que desee convertir en video con el comando")}: ${usedPrefix + command}*`;
const media = await m.quoted.download();
let out = Buffer.alloc(0);
if (/webp/.test(mime)) {
out = await webp2mp4(media);
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, ['-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest', 
], 'mp3', 'mp4')}
await conn.sendFile(m.chat, out, 'error.mp4', `*✅ ${await tr("Exitos")}*`, m, null, fake, 0, {thumbnail: out});
};
handler.help = ['tovideo'];
handler.tags = ['convertidor']
handler.command = ['tovideo', 'tomp4', 'mp4', 'togif'];
handler.register = true
export default handler;
