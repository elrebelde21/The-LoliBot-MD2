import {sticker} from '../lib/sticker.js';
//const handler = (m) => m;
//handler.all = async function(m) {
export async function before(m, { conn }) {
const chat = db.data.chats[m.chat];
const user = db.data.users[m.sender];

if (chat.autosticker && m.isGroup) {
const q = m;
let stiker = false;
const mime = (q.msg || q).mimetype || q.mediaType || '';
if (/webp/g.test(mime)) return;
if (/image/g.test(mime)) {
const img = await q.download?.();
if (!img) return;
stiker = await sticker(img, false, packname, author);
} else if (/video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return await m.reply(`*⚠️ ${await tr("El video solo puede durar 8 seg")}*`);
const img = await q.download();
if (!img) return;
stiker = await sticker(img, false, packname, author);
} else if (m.text.split(/\n| /i)[0]) {
if (isUrl(m.text)) stiker = await sticker(false, m.text.split(/\n| /i)[0], packname, author);
else return;
}
if (stiker) {
await conn.sendFile(m.chat, stiker, null, null, fake, {asSticker: true});
}}
return !0;
};
//export default handler;

const isUrl = (text) => {
return text.match(new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'));
};
