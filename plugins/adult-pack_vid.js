import fetch from 'node-fetch';
import moment from 'moment-timezone';
const handler = async (m, {conn, command, usedPrefix}) => {
const fakee2 = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: '', newsletterName: channelRD.name }, externalAdReply: { title: `🥵 ${await tr("CONTENIDO +18")} 🥵`, body: `${await tr("No alto para menores..")}`, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnail: imagen3, sourceUrl: redes.getRandom() }}}
let porn = 'https://qu.ax/bXMB.webp'
let porn2 = 'https://qu.ax/TxtQ.webp'
if (!db.data.chats[m.chat].modohorny && m.isGroup) {
handler.limit = false
conn.sendFile(m.chat, [porn, porn2].getRandom(), 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `ᴸᵒˢ ᶜᵒᵐᵃⁿᵈᵒ ʰᵒʳⁿʸ ᵉˢᵗᵃ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵒ ᵖᵃʳᵃ ᵃᶜᵗᶦᵛᵃʳ ᵘˢᵃʳ:`, body: '#enable modohorny', mediaType: 2, sourceUrl: md, thumbnail: imagen3}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
return
}
const horarioNsfw = db.data.chats[m.chat].horarioNsfw
const now = moment.tz('America/Argentina/Buenos_Aires'); 
const currentTime = now.format('HH:mm'); 

if (horarioNsfw) {
const { inicio, fin } = horarioNsfw;
const inicioTime = moment(inicio, 'HH:mm').tz('America/Argentina/Buenos_Aires');
const finTime = moment(fin, 'HH:mm').tz('America/Argentina/Buenos_Aires');
const currentMoment = moment(currentTime, 'HH:mm').tz('America/Argentina/Buenos_Aires');
let isWithinTimeRange = false;
if (inicioTime.isAfter(finTime)) {
if (currentMoment.isBetween(inicioTime, moment('23:59', 'HH:mm').tz('America/Argentina/Buenos_Aires')) || 
currentMoment.isBetween(moment('00:00', 'HH:mm').tz('America/Argentina/Buenos_Aires'), finTime)) {
isWithinTimeRange = true;
}} else {
if (currentMoment.isBetween(inicioTime, finTime)) {
isWithinTimeRange = true;
}}
if (!isWithinTimeRange) {
handler.limit = false
conn.sendFile(m.chat, [porn, porn2].getRandom(), 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ˢᵒˡᵒ ᶠᵘⁿᶜᶦᵒⁿᵃ ᵉˡ ʰᵒʳᵃʳᶦᵒ ʰᵃᵇᶦˡᶦᵗᵃᵈᵒ ᵉˡ ᵍʳᵘᵖᵒ:`, body: `${inicio} a ${fin}`, mediaType: 2, sourceUrl: md, thumbnail: imagen3}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
return
}
//.catch(m.reply(`*[ ALTO HAY PAJIN ]*n\nLos comando +18 solo funcióna el horario habilitado el grupo:* ${inicio} a ${fin}`))   
}

switch (command) {
case 'pack':
const url = await pack[Math.floor(Math.random() * pack.length)];
conn.sendFile(m.chat, url, 'error.jpg', `_🥵 ${await tr("aqui tiene mi Pack")} 😏_`, m, null, fakee2);
//conn.sendButton(m.chat, '_🥵 aqui tiene mi Pack 😏_', botname, url, [['🥵 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🥵', `/${command}`]], null, null, m)
break;
case 'pack2':
const url2 = await packgirl[Math.floor(Math.random() * packgirl.length)];
conn.sendFile(m.chat, url2, 'error.jpg', `_🥵 ${await tr("aqui tiene mi Pack")} 😏_`, m, null, fakee2);
//conn.sendButton(m.chat, '_🥵 aqui tiene mi Pack 😏_', botname, url2, [['🥵 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🥵', `/${command}`]], null, null, m)
break;
case 'pack3':
const url3 = await packmen[Math.floor(Math.random() * packmen.length)];
conn.sendFile(m.chat, url3, 'error.jpg', `_🥵 ${await tr("aqui tiene mi Pack")} 😏_`, m, null, fakee2);
//conn.sendButton(m.chat, '_🥵 aqui tiene mi Pack 😏_', botname, url3, [['🥵 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🥵', `/${command}`]], null, null, m) 
break;
case 'girls': case 'pack4':
conn.sendFile(m.chat, `${apis}/api/girls`, 'error.jpg', "🥵", m, null, fakee2);
//conn.sendButton(m.chat, '🥵', botname, "https://delirius-api-oficial.vercel.app/api/girls", [['🔄 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🔄', `/${command}`]], null, null, m)
break
case 'videoxxx': case 'vídeoxxx':
const url4 = await videosxxxc[Math.floor(Math.random() * videosxxxc.length)];
await conn.sendFile(m.chat, url4, 'error.jpg', `_*${await tr("Disfruta del video")} 🥵_`, m, null, fakee2);
//conn.sendButton(m.chat, '_*ᴅɪsғʀᴜᴛᴀ ᴅᴇʟ ᴠɪᴅᴇᴏ 🥵*_', botname, url4, [['🥵 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🥵', `/${command}`]], null, null, m)       
break;
case 'videoxxxlesbi': case 'videolesbixxx': case 'pornolesbivid': case 'pornolesbianavid': case 'pornolesbiv': case 'pornolesbianav': case 'pornolesv':
const url5 = await videosxxxc2[Math.floor(Math.random() * videosxxxc2.length)];
await conn.sendFile(m.chat, url5, 'error.jpg', `_*${await tr("Disfruta del video")} 🥵_`, m, null, fakee2);
//conn.sendButton(m.chat, '_*ᴅɪsғʀᴜᴛᴀ ᴅᴇʟ ᴠɪᴅᴇᴏ 🥵*_', botname, url5, [['🥵 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 🥵', `/${command}`]], null, null, m)   
break;
}};
handler.help = ['pack', 'pack2', 'pack3', 'pack4', 'videoxxx', 'videoxxxlesbi', 'girls', 'pornolesbiv'];
handler.tags = ['nsfw'];
handler.command = /^(pack|pack2|pack3|videoxxx|vídeoxxx|videoxxxlesbi|videolesbixxx|pornolesbivid|pornolesbianavid|pornolesbiv|pornolesbianav|pornolesv|girls|pack4)$/i;
handler.limit = 2
handler.register = true
export default handler;

global.pack = [
  'https://telegra.ph/file/957fe4031132ef90b66ec.jpg',
  'https://telegra.ph/file/c4b85bd53030cb648382f.jpg',
  'https://telegra.ph/file/df56f8a76145df9c923ad.jpg',
  'https://telegra.ph/file/d5d1c2c710c4b5ee8bc6c.jpg',
  'https://telegra.ph/file/d0c0cd47e87535373ab68.jpg',
  'https://telegra.ph/file/651a5a9dc96c97c8ef8fc.jpg',
  'https://telegra.ph/file/f857ae461ceab18c38de2.jpg',
  'https://telegra.ph/file/5d2a2aeff5e6fbd229eff.jpg',
  'https://telegra.ph/file/b93573531f898ea875dd0.jpg',
  'https://telegra.ph/file/c798b3959f84d345b0f25.jpg',
  'https://telegra.ph/file/de820647f8cabce533557.jpg',
  'https://telegra.ph/file/e105097d5fadf3e522eb5.jpg',
  'https://telegra.ph/file/8592e352a9ee6c7244737.jpg',
  'https://telegra.ph/file/bb9c7d879b7dc1d86a2ce.jpg',
  'https://telegra.ph/file/83f108601e6105446ad1f.jpg',
  'https://telegra.ph/file/2a6bff14e53ed2533ad25.jpg',
  'https://telegra.ph/file/e37d74aeccc5bdfd6be3e.jpg',
  'https://telegra.ph/file/ca984650af06b951e961d.jpg',
  'https://telegra.ph/file/ebb3ac7f7498dd09f6afc.jpg',
  'https://telegra.ph/file/6192305a24ffb8fa30942.jpg',
  'https://telegra.ph/file/ee67c17d0043b98dc757e.jpg',
  'https://telegra.ph/file/6ae756b686cd2b5950721.jpg',
  'https://telegra.ph/file/b1e1da38d897d117c2aa9.jpg',
  'https://telegra.ph/file/6b759437dc8b863c2fa19.jpg',
  'https://telegra.ph/file/960d8c268aecb5eb117f0.jpg',
  'https://telegra.ph/file/d0dd518bdd147cb10b0b5.jpg',
  'https://telegra.ph/file/31f2d59b5cd68ec5acb21.jpg',
  'https://telegra.ph/file/14ab9bd02f24e0f1a1a03.jpg',
  'https://telegra.ph/file/e02bf6bc9227f7f8b7e2a.jpg',
  'https://telegra.ph/file/ab55fca1d6b602b1a69df.jpg',
  'https://telegra.ph/file/42105cac3666b37da3d1c.jpg',
];
global.packgirl = [
  'https://telegra.ph/file/c0da7289bee2d97048feb.jpg',
  'https://telegra.ph/file/b8564166f9cac4d843db3.jpg',
  'https://telegra.ph/file/fdefd621a17712be15e0e.jpg',
  'https://telegra.ph/file/6e1a6dcf1c91bf62d3945.jpg',
  'https://telegra.ph/file/0224c1ecf6b676dda3ac0.jpg',
  'https://telegra.ph/file/b71b8f04772f1b30355f1.jpg',
  'https://telegra.ph/file/6561840400444d2d27d0c.jpg',
  'https://telegra.ph/file/37e445df144e1dfcdb744.jpg',
  'https://telegra.ph/file/155b6ac6757bdd9cd05f9.jpg',
  'https://telegra.ph/file/2255a8a013540c2820a2b.jpg',
  'https://telegra.ph/file/450e901ac153765f095c5.jpg',
  'https://telegra.ph/file/f18e421a70810015be505.jpg',
  'https://telegra.ph/file/d3d190691ec399431434e.jpg',
  'https://telegra.ph/file/1fd2b897a1dbc3fdc2a70.jpg',
  'https://telegra.ph/file/607d54a909035bca7444f.jpg',
  'https://telegra.ph/file/818ba7c0ae82876b190b6.jpg',
  'https://telegra.ph/file/0f2bb426951b4a8fe1e5a.jpg',
  'https://telegra.ph/file/7e895b5b933226a07558a.jpg',
  'https://telegra.ph/file/f9d9f0da337512a1b1882.jpg',
  'https://telegra.ph/file/09ff5bfce02f1f78e3861.jpg',
  'https://telegra.ph/file/4ad840d401ab1f90444df.jpg',
  'https://telegra.ph/file/7b4bdcad3dde870355c94.jpg',
  'https://telegra.ph/file/f69a5beaca50fc52a4a71.jpg',
  'https://telegra.ph/file/411d7cdee24669e167adb.jpg',
  'https://telegra.ph/file/36a63288e27e88e2f8e10.jpg',
  'https://telegra.ph/file/1ac7657a5e7b354cd9991.jpg',
  'https://telegra.ph/file/14161eab0c1d919dc3218.jpg',
  'https://telegra.ph/file/810411b9128fe11dd639a.jpg',
  'https://telegra.ph/file/5fe7e98533754b007e7a1.jpg',
];
global.packmen = [
  'https://telegra.ph/file/bf303b19b9834f90e9617.jpg',
  'https://telegra.ph/file/36ef2b807251dfccd17c2.jpg',
  'https://telegra.ph/file/bcc34403d16de829ea5d2.jpg',
  'https://telegra.ph/file/5c6b7615662fb53a39e53.jpg',
  'https://telegra.ph/file/1a8183eff48671ea265c2.jpg',
  'https://telegra.ph/file/f9745dcd22f67cbc62e08.jpg',
  'https://telegra.ph/file/02219f503317b0596e101.jpg',
  'https://telegra.ph/file/470c8ec30400a73d03207.jpg',
  'https://telegra.ph/file/c94fa8ed20f2c0cf16786.jpg',
  'https://telegra.ph/file/1b02a1ca6a39e741faec7.jpg',
  'https://telegra.ph/file/eea58bf7043fd697cdb43.jpg',
  'https://telegra.ph/file/ee3db7facdfe73c8df05a.jpg',
  'https://telegra.ph/file/d45b4e4af4f2139507f8c.jpg',
  'https://telegra.ph/file/d176e7fc8720f98f6b182.jpg',
  'https://telegra.ph/file/ce1e072829d1fa5d99f5f.jpg',
  'https://telegra.ph/file/a947933701be6d579c958.jpg',
  'https://telegra.ph/file/9027e5a464ec88e8ab5c1.jpg',
  'https://telegra.ph/file/049a8c611a838ea2f6daa.jpg',
  'https://telegra.ph/file/37b35fbc7e2ee73482ee1.jpg',
  'https://telegra.ph/file/9bcfade24ae85cd417f06.jpg',
  'https://telegra.ph/file/ac0c711585f4300c54355.jpg',
];
global.videosxxxc = [
  'https://telegra.ph/file/4a270d9945ac46f42d95c.mp4',
  'https://telegra.ph/file/958c11e84d271e783ea3f.mp4',
  'https://telegra.ph/file/f753759342337c4012b3f.mp4',
  'https://telegra.ph/file/379cee56c908dd536dd33.mp4',
  'https://telegra.ph/file/411d8f59a5cefc2a1d227.mp4',
  'https://telegra.ph/file/ee2cf1b359d6eef50d7b7.mp4',
  'https://telegra.ph/file/1e316b25c787f94a0f8fd.mp4',
  'https://telegra.ph/file/c229d33edce798cde0ca4.mp4',
  'https://telegra.ph/file/b44223e72dd7e80e415f2.mp4',
  'https://telegra.ph/file/61486d45a8a3ea95a7c86.mp4',
  'https://telegra.ph/file/76ba0dc2a07f491756377.mp4',
  'https://telegra.ph/file/831bb88f562bef3f1a15d.mp4',
  'https://telegra.ph/file/ee2cf1b359d6eef50d7b7.mp4',
  'https://telegra.ph/file/598857924f3a29ffd37ae.mp4',
  'https://telegra.ph/file/528caef6ea950ec45aeef.mp4',
  'https://telegra.ph/file/4a270d9945ac46f42d95c.mp4',
  'https://telegra.ph/file/958c11e84d271e783ea3f.mp4',
  'https://telegra.ph/file/f753759342337c4012b3f.mp4',
  'https://telegra.ph/file/379cee56c908dd536dd33.mp4',
  'https://telegra.ph/file/411d8f59a5cefc2a1d227.mp4',
  'https://telegra.ph/file/76ba0dc2a07f491756377.mp4',
  'https://telegra.ph/file/831bb88f562bef3f1a15d.mp4',
];

global.videosxxxc2 = [
  'https://l.top4top.io/m_2257y4pyl0.mp4',
  'https://c.top4top.io/m_2274woesg0.mp4',
  'https://k.top4top.io/m_2257pdwjy0.mp4',
  'https://a.top4top.io/m_2257qulmx0.mp4',
  'https://a.top4top.io/m_2257vxzr62.mp4',
  'https://b.top4top.io/m_2257wjmbh3.mp4',
  'https://b.top4top.io/m_2257sen2a1.mp4',
  'https://c.top4top.io/m_2257hpo9v3.mp4',
  'https://e.top4top.io/m_2257pye7u1.mp4',
  'https://c.top4top.io/m_2257p7xg14.mp4',
  'https://c.top4top.io/m_2257p4v9i3.mp4',
  'https://l.top4top.io/m_2257jvkrv3.mp4',
  'https://b.top4top.io/m_2257pl7wh1.mp4',
  'https://e.top4top.io/m_2257fiwnp2.mp4',
  'https://b.top4top.io/m_22578b1nk1.mp4',
  'https://k.top4top.io/m_22572gv7q1.mp4',
  'https://i.top4top.io/m_2257pu90l2.mp4',
  'https://d.top4top.io/m_2257vcwiw3.mp4',
  'https://j.top4top.io/m_2258joebc2.mp4',
  'https://g.top4top.io/m_2258kvnba4.mp4',
  'https://f.top4top.io/m_2258nm8pe1.mp4',
  'https://g.top4top.io/m_2258af7bc2.mp4',
  'https://l.top4top.io/m_2258f0ci92.mp4',
  'https://j.top4top.io/m_2258ehqpb2.mp4',
  'https://h.top4top.io/m_2258pckkf3.mp4',
  'https://e.top4top.io/m_225857rs20.mp4',
  'https://k.top4top.io/m_225863kpa0.mp4',
  'https://j.top4top.io/m_2258s6we62.mp4',
  'https://i.top4top.io/m_2258if6l13.mp4',
  'https://b.top4top.io/m_2258lmd2h1.mp4',
  'https://j.top4top.io/m_2258a9oah2.mp4',
  'https://i.top4top.io/m_22588w3xh0.mp4',
  'https://g.top4top.io/m_225885lm14.mp4',
  'https://e.top4top.io/m_2258buxc30.mp4',
  'https://e.top4top.io/m_2258fvra62.mp4',
  'https://l.top4top.io/m_22588mx7k4.mp4',
  'https://g.top4top.io/m_2258zhldg1.mp4',
];
