import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `🤔𝙦𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤?🤔 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚/𝙩𝙞𝙩𝙪𝙡𝙤 𝙙𝙚 𝙘𝙖𝙣𝙘𝙞𝙤𝙣\n\n*—◉ 𝙀𝙟𝙚𝙢𝙥𝙡𝙤:\n#play lgante - bar*`
  await m.reply(wait)
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Error'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId

  let captvid = `┌───⊷ 🅟🅛🅐🅨
│📌 𝗧𝗶𝘁𝘂𝗹𝗼: ${title}
│⏲️ 𝘿𝙪𝙧𝙖𝙘𝙞𝙤𝙣: ${durationH}
│👀 𝗩𝗶𝘀𝘁𝗮𝘀: ${viewH}
│📆 𝗣𝘂𝗯𝗹𝗶𝗰𝗮𝗰𝗶𝗼𝗻: ${publishedTime}
│
│         *████████████┃%100*
╰─────────────────`
  conn.sendButton(m.chat, `┌───⊷ 🅟🅛🅐🅨
│📌 𝗧𝗶𝘁𝘂𝗹𝗼: ${title}
│⏲️ 𝘿𝙪𝙧𝙖𝙘𝙞𝙤𝙣: ${durationH}
│👀 𝗩𝗶𝘀𝘁𝗮𝘀: : ${viewH}
│📆 𝗣𝘂𝗯𝗹𝗶𝗰𝗮𝗰𝗶𝗼𝗻: ${publishedTime}
│
│         *████████████┃%100*
╰─────────────────`, author.trim(), await( await conn.getFile(thumbnail)).data, ['📽VIDEO', `${usedPrefix}getvid ${url} 360`], false, { quoted: m, 'document': { 'url':'https://wa.me/923470027813' },
'mimetype': global.dpdf,
'fileName': `𝕐𝕠𝕦𝕋𝕦𝕓𝕖 ℙ𝕝𝕒𝕪𝕤`,
'fileLength': 666666666666666,
'pageCount': 666,contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: `${url}`,
title: `The-Loliabot-MD`,
body: wm,
sourceUrl: 'https://chat.whatsapp.com/GGZtt70qqdf1x2mYAKWfuQ', thumbnail: await ( await conn.getFile(thumbnail)).data
  }
 } 
})
  
  //let buttons = [{ buttonText: { displayText: '📽VIDEO' }, buttonId: `${usedPrefix}ytv ${url} 360` }]
 //let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, footer: author, buttons }, { quoted: m })

  const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }

  return conn.sendMessage(m.chat, doc, { quoted: m })
	// return conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m})
	// return await conn.sendFile(m.chat, link, title + '.mp3', '', m, false, { asDocument: true })
}
handler.help = ['play4'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play4$/i

handler.exp = 0
handler.money = 80
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

