let handler = async (m, { conn }) => {
global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

m.reply(`Hola 👋🏻, Bienvenido a los grupos oficiales, te invito a unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de The-LoliBot-MD 😸

➤ Grupos oficiales del bot:
1) *${nn}*

2) *${nnn}*

➤ Grupo del Colaboracion LoliBot-MD y GataBot-MD
 *${nnnt}*
 
➤ Grupo del col 2 (Aqui se permiti todos los comandos del bot)
*${nnntt}*

➤ Infomarte sobre las nuevas actualizaciones del bot
 *${nna}*
 
➤ Grupos del ayuda sobre el bot
 *${nnntttt}*
 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
Grupos del amistades donde esta el bot

*ஓீ͜ঔৣ͡🍒STICKER/𝑩Ø𝑻🔥ঔৣ͡ஓ*
https://chat.whatsapp.com/DCJclB8oBAPIAoleUtNEaN

*꧁⁣𓆩Aᴹᴵᴳᴼˢ Cᴴᴬᵀˢ Y Aᴾᴼᴿᵀᴱ*
https://chat.whatsapp.com/JZaD3sfNoVW4JvaoQ4uVwF

*⇶⃤꙰𝑬𝒏𝒍𝒂𝒄𝒆 𝒍𝒐𝒍𝒊𝒃𝒐𝒕ꦿ⃟⃢*
*${nnnttt}*

*꧁⃢⃟҉💫🌺ঔঔ𝔼ℕ𝕃𝔸ℂ𝔼𝕊 𝕃𝔸 𝕁𝔼𝔽𝔸✨*
https://chat.whatsapp.com/JegOp8NUSMd0vn75s4hkaj
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

Si quieres que tu grupo aparezca aca habla con mi creador`)

}
handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i

export default handler

