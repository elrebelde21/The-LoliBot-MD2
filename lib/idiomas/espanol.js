const lenguaje = () => { return 'es' } //Español 

//AVISOS DE MENSAJE
const smsAvisoRG = () => { return `╰⊱✅⊱ *RESULTADO* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *ADVERTENCIA* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFORMACIÓN* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *ACCIÓN MAL USADA* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *REPORTE* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *ÉXITO* ⊱💚⊱╮\n\n` }

//PARÁMETROS EN COMANDOS
const smsRowner = () => { return `${global.lenguajeGB['smsAvisoAG']()} ¡¡𝑬𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒔𝒐𝒍𝒐 𝒑𝒖𝒆𝒅𝒆 𝒔𝒆𝒓 𝒖𝒔𝒂𝒅𝒐 𝒑𝒐𝒓 𝒎𝒊 𝒑𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐/𝒂 (𝒐𝒘𝒏𝒆𝒓) 𝒅𝒆𝒍 𝒃𝒐𝒕!!` }//NUMERO DE BOT
const smsOwner = () => { return `${global.lenguajeGB['smsAvisoAG']()} ¡¡𝑬𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒔𝒐𝒍𝒐 𝒑𝒖𝒆𝒅𝒆 𝒔𝒆𝒓 𝒖𝒔𝒂𝒅𝒐 𝒑𝒐𝒓 𝒎𝒊 𝒑𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐/𝒂 (𝒐𝒘𝒏𝒆𝒓) 𝒅𝒆𝒍 𝒃𝒐𝒕!!` }//OWNER
const smsMods = () => { return `${global.lenguajeGB['smsAvisoAG']()} ¡¡𝑬𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒔𝒐𝒍𝒐 𝒑𝒖𝒆𝒅𝒆 𝒔𝒆𝒓 𝒖𝒕𝒊𝒍𝒊𝒛𝒂𝒅𝒐 𝒑𝒐𝒓 𝒎𝒐𝒅𝒆𝒓𝒂𝒅𝒐𝒓𝒆𝒔 𝒚 𝒆𝒍 𝒑𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐/𝒂 (𝒐𝒘𝒏𝒆𝒓) 𝒅𝒆𝒍 𝒃𝒐𝒕!!` }//MODERADORES
const smsPremium = () => { return `${global.lenguajeGB['smsAvisoAG']()} ¡¡𝑬𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒔𝒐𝒍𝒐 𝒑𝒖𝒆𝒅𝒆 𝒔𝒆𝒓 𝒖𝒕𝒊𝒍𝒊𝒛𝒂𝒅𝒐 𝒑𝒐𝒓 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 𝒚 𝒆𝒍 𝒑𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐/𝒂 (𝒐𝒘𝒏𝒆𝒓) 𝒅𝒆𝒍 𝒃𝒐𝒕!!` }//USUARIOS PREMIUM
const smsGroup = () => { return `${global.lenguajeGB['smsAvisoAG']()} ¡¡𝑬𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒔𝒐𝒍𝒐 𝒑𝒖𝒆𝒅𝒆 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒈𝒓𝒖𝒑𝒐!!` }//PARA GRUPOS
const smsPrivate = () => { return `${global.lenguajeGB['smsAvisoAG']()} ¡¡𝑬𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒔𝒐𝒍𝒐 𝒑𝒖𝒆𝒅𝒆 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒉𝒂𝒕 𝒑𝒓𝒊𝒗𝒂𝒅𝒐 𝒅𝒆𝒍 𝒃𝒐𝒕!!` }//AL PRIVADO
const smsAdmin = () => { return `${global.lenguajeGB['smsAvisoAG']()} ¡¡𝑬𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒔𝒐𝒍𝒐 𝒔𝒆 𝒑𝒖𝒆𝒅𝒆 𝒖𝒔𝒂𝒓 𝒑𝒐𝒓 𝒂𝒅𝒎𝒊𝒏 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐!!` }//ADMINS
const smsBotAdmin = () => { return `${global.lenguajeGB['smsAvisoAG']()} ¡¡𝑷𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒖𝒔𝒂𝒓 𝒆𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒆𝒍 𝒃𝒐𝒕 (𝒚𝒐) 𝒏𝒆𝒄𝒆𝒔𝒊𝒕𝒂 𝒂𝒅𝒎𝒊𝒏, 𝒉𝒂𝒈𝒂 𝒒𝒖𝒆 𝒃𝒐𝒕 𝒔𝒆𝒂 𝒂𝒅𝒎𝒊𝒏 𝒑𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒖𝒔𝒂𝒓 𝒆𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐!!` }//BOT CON ADMIN
const smsUnreg = () => { return `${global.lenguajeGB['smsAvisoAG']()} [ 🛑 𝙃𝙚𝙮!! 𝘼𝙡𝙩𝙤, 𝙣𝙤 𝙚𝙨𝙩𝙖́ 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤 🛑 ] \n𝑷𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒃𝒐𝒕 𝒏𝒆𝒄𝒆𝒔𝒊𝒕𝒂 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒓𝒕𝒆, 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐* #𝒗𝒆𝒓𝒊𝒇𝒊𝒄𝒂𝒓!! ` }//VERIFICAR
const smsRestrict = () => { return `${global.lenguajeGB['smsAvisoAG']()} ¡¡𝑬𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒆𝒔𝒕𝒂́ 𝒓𝒆𝒔𝒕𝒓𝒊𝒏𝒈𝒊𝒅𝒐/𝒅𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂𝒅𝒐 𝒑𝒐𝒓 𝒅𝒆𝒔𝒊𝒄𝒊𝒐𝒏 𝒅𝒆𝒍 𝒑𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐/𝒂 (𝒐𝒘𝒏𝒆𝒓) 𝒅𝒆𝒍 𝒃𝒐𝒕!!` }//RESTRINGIR COMANDO

//MENU LISTA
const smsTime = () => { return `𝙏𝙞𝙚𝙢𝙥𝙤 𝘼𝙘𝙩𝙪𝙖𝙡`}
const smsUptime = () => { return `𝙏𝙞𝙚𝙢𝙥𝙤 𝙖𝙘𝙩𝙞𝙫𝙤`}
const smsVersion = () => { return `𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙙𝙚𝙡 𝙏𝙝𝙚-𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿`}
const smsTotalUsers = () => { return `𝙏𝙤𝙩𝙖𝙡 𝙙𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤`}
const smsMode = () => { return `𝙀𝙨𝙩𝙖 𝙚𝙣 𝙈𝙤𝙙𝙤`}
const smsModePublic = () => { return `PÚBLICO`}
const smsModePrivate = () => { return `PRIVADO`}
const smsBanChats = () => { return `𝘾𝙝𝙖𝙩 𝙋𝙧𝙤𝙝𝙞𝙗𝙞𝙙𝙤`}
const smsBanUsers = () => { return `𝙐𝙨𝙪𝙖𝙧𝙞𝙤 𝙋𝙧𝙤𝙝𝙞𝙗𝙞𝙙𝙤`}
const smsPareja = () => { return `Pareja`}
const smsResultPareja = () => { return `No tiene Pareja`}
const smsSaludo = () => { return `👋 !HOLA! BIENVENIDO(A) 👋`}
const smsDia = () => { return `🌇 Buenos Días ⛅`}
const smsTarde = () => { return `🏙️ Buenas Tardes 🌤️`}
const smsTarde2 = () => { return `🌆 Buenas tardes 🌥️`}
const smsNoche = () => { return `🌃 Buenas noches 💫`}
const smsListaMenu = () => { return `𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙚 𝙖𝙦𝙪𝙞`}
const smsLista1 = () => { return `🌟 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 🌟`}
const smsLista2 = () => { return `🔰 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 🔰`}
const smsLista3 = () => { return `🎁 𝘿𝙤𝙣𝙖𝙧 🎁`}
const smsLista4 = () => { return `🚀 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 🚀`}
const smsLista5 = () => { return `💡 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 𝙙𝙚𝙡 𝙈𝙚𝙣𝙪  💡`}
const smsLista6 = () => { return `🌀 𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 🌀`}
const smsLista7 = () => { return `♨️ 𝙄𝙣𝙨𝙩𝙖𝙡𝙖𝙧 𝘽𝙤𝙩 ♨️`}
const smsLista8 = () => { return `😛 𝙎𝙚𝙧 𝙎𝙪𝙗 𝘽𝙤𝙩 😛`}
const smsLista9 = () => { return `📄 𝙏𝙚𝙧𝙢𝙞𝙣𝙤𝙨 𝙮 𝘾𝙤𝙣𝙙𝙞𝙘𝙞𝙤𝙣𝙚𝙨 📄`}
const smsLista10 = () => { return `🌟 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 𝙮 𝙩𝙤𝙥 🌟`}
const smsLista11 = () => { return `🏆 𝙏𝙤𝙥 𝙂𝙡𝙤𝙗𝙖𝙡 🏆`}
const smsLista12 = () => { return `🏅 𝙐𝙨𝙪𝙖𝙧𝙞𝙤 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 🏅`}
const smsLista13 = () => { return `🎟️ 𝙎𝙚𝙧 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 🎟️`}
const smsLista14 = () => { return `🛣️ 𝙈𝙞𝙨𝙞𝙤𝙣𝙚𝙨 🛣️`}
const smsLista15 = () => { return `⚗️ 𝙈𝙚𝙣𝙪 𝙧𝙥𝙜 ⚗️`}
const smsLista16 = () => { return `🏪 𝙏𝙞𝙚𝙣𝙙𝙖 𝙥𝙖𝙧𝙖 𝙘𝙤𝙢𝙥𝙧𝙖𝙧 🏪`}
const smsLista17 = () => { return `🎒 INVENTARIO 🎒`}
const smsLista18 = () => { return `🌟 𝙈𝙪𝙡𝙩𝙞𝙢𝙚𝙙𝙞𝙖 🌟`}
const smsLista19 = () => { return `📲 𝙈𝙚𝙣𝙪 𝙙𝙚 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖 📲`}
const smsLista20 = () => { return `🔍 𝙈𝙚𝙣𝙪 𝙙𝙚 𝙗𝙪𝙨𝙦𝙪𝙚𝙙𝙖🔍`}
const smsLista21 = () => { return `🛰️ 𝙈𝙚𝙣𝙪 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙙𝙤 🛰️`}
const smsLista22 = () => { return `🧰 𝙈𝙚𝙣𝙪 𝙢𝙤𝙙𝙞𝙛𝙞𝙘𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙖𝙪𝙙𝙞𝙤 🧰`}
const smsLista22_1 = () => { return `🔩 𝙈𝙚𝙣𝙪 𝙙𝙚 𝙝𝙚𝙧𝙧𝙖𝙢𝙞𝙚𝙣𝙩𝙖𝙨  🔩`}
const smsLista23 = () => { return `🌟 𝘿𝙞𝙫𝙚𝙧𝙨𝙞𝙤𝙣 🌟`}
const smsLista24 = () => { return `🎡 𝙅𝙪𝙚𝙜𝙤𝙨 𝙙𝙞𝙣𝙖𝙢𝙞𝙘𝙤 🎡`}
const smsLista25 = () => { return `🔊 𝙈𝙚𝙣𝙪 𝙙𝙚 𝘼𝙪𝙙𝙞𝙤𝙨  🔊`}
const smsLista26 = () => { return `🎈 𝙈𝙚𝙣𝙪  𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙮 𝙛𝙞𝙡𝙩𝙧𝙤 🎈`}
const smsLista27 = () => { return `✨ 𝙈𝙚𝙣𝙪 𝙚𝙛𝙚𝙘𝙩𝙤 𝙮 𝙡𝙤𝙜𝙤𝙨 ✨`}
const smsLista28 = () => { return `🌅 𝙈𝙚𝙣𝙪 𝙡𝙤𝙜𝙤 2 🌅`}
const smsLista29 = () => { return `⛩️ 𝙍𝙖𝙣𝙙𝙤𝙬 𝙢𝙚𝙢𝙚 𝙖𝙣𝙞𝙢𝙚 ⛩️`}
const smsLista30 = () => { return `🔞 𝙈𝙚𝙣𝙪 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 +18 🔞`}
const smsLista31 = () => { return `🌟 𝙖𝙟𝙪𝙨𝙩𝙚 🌟`}
const smsLista32 = () => { return `🔰 𝙈𝙚𝙣𝙪 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤 🔰`}
const smsLista33 = () => { return `📑 𝙏𝙞𝙥𝙤𝙨 𝙙𝙚 𝙡𝙞𝙨𝙩𝙖𝙨 📑`}
const smsLista34 = () => { return `⚙️ 𝘾𝙚𝙣𝙩𝙧𝙤𝙨 𝙙𝙚𝙡 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤𝙣 ⚙️`}
const smsLista35 = () => { return `💎 𝙈𝙚𝙣𝙪  𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤𝙨 💎`}

//main.js
const smsWelcome = () => { return '┏━━━━━━━━━━━━\n┃──〘 *𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼/𝗮* 〙──\n┃━━━━━━━━━━━━\n┃ ✨ *_@user_* _𝗔𝗹_ \n┃ *_@subject ✨_* \n┃\n┃=> *_𝗘𝗻 𝗲𝘀𝘁𝗲 𝗴𝗿𝘂𝗽𝗼 𝗽𝗼𝗱𝗿𝗮́𝘀_*\n┃ *_𝗘𝗻𝗰𝗼𝗻𝘁𝗿𝗮𝗿:_*\n┠⊷ *_𝗔𝗺𝗶𝘀𝘁𝗮𝗱𝗲𝘀_* 🫂 \n┠⊷ *_𝗗𝗲𝘀𝗺𝗮𝗱𝗿𝗲 💃🕺_* \n┠⊷ *_𝗕𝗮𝗿𝗱𝗼 🤺_* \n┠⊷ *_𝗝𝗼𝗱𝗮😛_* \n┠⊷ *_𝗨𝗻 𝗯𝗼𝘁 𝘀𝗲𝘅𝘆_*\n┃=> *_𝗣𝘂𝗲𝗱𝗲 𝘀𝗼𝗹𝗶𝗰𝗶𝘁𝗮𝗿 𝗺𝗶 𝗹𝗶𝘀𝘁𝗮 𝗱𝗲_*\n┃ *_𝗖𝗼𝗺𝗮𝗻𝗱𝗼 𝗰𝗼𝗻:_*\n┠⊷ *#menu*\n┃\n┃=> *_𝗔𝗾𝘂𝗶́ 𝘁𝗶𝗲𝗻𝗲 𝗹𝗮 𝗱𝗲𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼́𝗻_* \n┃ *_𝗗𝗲𝗹 𝗴𝗿𝘂𝗽𝗼, 𝗹𝗲́𝗲𝗹𝗮!!_*\n┃\n\n@desc\n\n┃ \n┃ *_🔰 𝗗𝗶𝘀𝗳𝗿𝘂𝘁𝗮 𝗱𝗲 𝘁𝘂_* \n┃ *_𝗘𝘀𝘁𝗮𝗱𝗶́𝗮 𝗲𝗻 𝗲𝗹 𝗚𝗿𝘂𝗽𝗼 🔰_*  \n┃\n┗━━━━━━━━━━━'}
const smsBye = () => { return '*╔══════════════*\n*╟❧ @user*\n*╟❧ 𝙷𝙰𝚂𝚃𝙰 𝙿𝚁𝙾𝙽𝚃𝙾 👋🏻* \n*╚══════════════*'}
const smsSpromote = () => { return '*𝙃𝙚𝙮 @user 𝘼𝙝𝙤𝙧𝙖 𝙚𝙧𝙚𝙨 𝙖𝙙𝙢𝙞𝙣, 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤😛!!*'}
const smsSdemote = () => { return '*𝙃𝙚𝙮 @user 𝙔𝙖 𝙣𝙤 𝙚𝙧𝙚𝙨 𝙖𝙙𝙢𝙞𝙣😐!!*'}
const smsSdesc = () => { return '*𝑺𝒆 𝒉𝒂 𝒎𝒐𝒅𝒊𝒇𝒊𝒄𝒂𝒅𝒐 𝒍𝒂 𝒅𝒆𝒔𝒄𝒓𝒊𝒑𝒄𝒊𝒐𝒏 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐*\n\n*𝑵𝒖𝒆𝒗𝒐 𝒅𝒆𝒔𝒄𝒓𝒊𝒑𝒄𝒊𝒐𝒏:*\n\n@desc'}
const smsSsubject = () => { return '*𝑺𝒆 𝒉𝒂 𝒎𝒐𝒅𝒊𝒇𝒊𝒄𝒂𝒅𝒐 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐*\n*𝑵𝒖𝒆𝒗𝒐 𝒏𝒐𝒎𝒃𝒓𝒆:*\n\n@subject'}
const smsSicon = () => { return '*𝑺𝒆 𝒉𝒂 𝒄𝒂𝒎𝒃𝒊𝒂𝒅𝒐 𝒍𝒂 𝒇𝒐𝒕𝒐 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐!!*'}
const smsSrevoke = () => { return '*𝑺𝒆 𝒉𝒂 𝒂𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒅𝒐 𝒆𝒍 𝒍𝒊𝒏𝒌 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐!!*\n*𝑳𝒊𝒏𝒌 𝒏𝒖𝒆𝒗𝒐!!*\n\n*@revoke*'}
const smsConexion = () => { return `▣─────────────────────────────···\n│\n│❧ 𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 𝙰𝙻 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 ✅\n│\n▣─────────────────────────────···`}
const smsClearTmp = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 𝘼𝙐𝙏𝙊𝘾𝙇𝙀𝘼𝙍𝙏𝙈𝙋 ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ 𝙇𝙊𝙎 𝘼𝙍𝘾𝙃𝙄𝙑𝙊𝙎 𝘿𝙀 𝙇𝘼 𝘾𝘼𝙍𝙋𝙀𝙏𝘼 𝙏𝙈𝙋 𝙃𝘼𝙉 𝙎𝙄𝘿𝙊 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊𝙎 𝘾𝙊𝙉 𝙀𝙓𝙄𝙏𝙊 😼✨\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsCargando = () => { return `Ƈᴀʀɢᴀɴᴅᴏ．．．.\n`}
const smsCodigoQR = () => { return `\n✅ ESCANEA EL CÓDIGO QR EXPIRA EN 45 SEGUNDOS ✅`}
const smsConexionOFF = () => { return `\n⚠️ SIN CONEXIÓN, BORRE LA CARPETA ${global.authFile} Y ESCANEA EL CÓDIGO QR ⚠️`}

//_allantilink.js
const smsTextoYT = () => { return 'The LoliBot-MD'}
const smsApagar = () => { return '❌ DESACTIVAR'}
const smsEncender = () => { return '✅ ACTIVAR'}
const smsEnlaceTik = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceYt = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙔𝙊𝙐 𝙏𝙐𝘽𝙀 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceTel = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceFb = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceIg = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceTw = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙒𝙄𝙏𝙏𝙀𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsAllAdmin = () => { return `𝘿𝙀𝘽𝙊 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎(𝘼𝙎)`}
const smsSoloOwner = () => { return `𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉\n*#on restrict*`}

//handler.js
const smsCont1 = () => { return `*⚠️ 𝙍𝙚𝙥𝙤𝙧𝙩𝙚 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙘𝙤𝙣 𝙛𝙖𝙡𝙡𝙤𝙨 ⚠️*`}
const smsCont2 = () => { return `*—◉ 𝑷𝒍𝒖𝒈𝒊𝒏:*`}
const smsCont3 = () => { return `*—◉️ 𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔:*`}
const smsCont4 = () => { return `*—◉ 𝑪𝒐𝒎𝒂𝒏𝒅𝒐:*`}
const smsCont5 = () => { return `*—◉ 𝑬𝒓𝒓𝒐𝒓:*`}
const smsCont6 = () => { return `*[❗] 𝑹𝒆𝒑𝒐𝒓𝒕𝒆𝒍𝒐 𝒂𝒍 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒅𝒆𝒍 𝒃𝒐𝒕 𝒑𝒂𝒓𝒂 𝒅𝒂𝒓𝒍𝒆 𝒖𝒏𝒂 𝒔𝒐𝒍𝒖𝒄𝒊𝒐́𝒏, 𝒑𝒖𝒆𝒅𝒆 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 #𝒓𝒆𝒑𝒐𝒓𝒕𝒆*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*𝑺𝒖𝒔 𝒅𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔 💎 𝒔𝒆 𝒉𝒂𝒏 𝒂𝒈𝒐𝒕𝒂𝒅𝒐. 𝒑𝒖𝒆𝒅𝒆 𝒄𝒐𝒎𝒑𝒓𝒂𝒓 𝒎𝒂́𝒔 𝒖𝒔𝒂𝒏𝒅𝒐 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐*`}
const smsCont8 = () => { return ` *𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔 💎 𝒖𝒔𝒂𝒅𝒐𝒔*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*𝑵𝒆𝒄𝒆𝒔𝒊𝒕𝒂 𝒆𝒍 𝒏𝒊𝒗𝒆𝒍 ➡️️*`}
const smsCont10 = () => { return `*𝑷𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒖𝒔𝒂𝒓 𝒆𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐́ 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍 𝒆𝒔 ➡️*`}
const smsCont11 = () => { return `*𝑨𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒓 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐*`}
const smsCont12 = () => { return `𝗨𝗡 𝗚𝗥𝗨𝗣𝗢 𝗚𝗘𝗡𝗜𝗔𝗟!! 😼`}
const smsCont13 = () => { return `𝗔𝗟𝗚𝗨𝗜𝗘𝗡 𝗦𝗘 𝗨𝗡𝗜𝗢!! 🥳`}
const smsCont14 = () => { return `𝗦𝗘 𝗙𝗨𝗘 𝗔𝗟𝗚𝗨𝗜𝗘𝗡!! 🧐`}
const smsCont15 = () => { return `𝗛𝗼𝗹𝗮`}
const smsCont16 = () => { return `𝙇𝘼𝙎 𝙑𝙄𝘿𝙀𝙊𝙇𝙇𝘼𝙈𝘼𝘿𝘼𝙎 📲`}
const smsCont17 = () => { return `𝙇𝘼𝙎 𝙇𝙇𝘼𝙈𝘼𝘿𝘼𝙎 📞`}
const smsCont18 = () => { return `𝗡𝗼 𝗲𝘀𝘁𝗮𝗻 𝗽𝗲𝗿𝗺𝗶𝘁𝗶𝗱𝗮𝘀, 𝘀𝗲𝗿𝗮́𝘀 𝗯𝗹𝗼𝗾𝘂𝗲𝗮𝗱𝗼\n\n 𝗦𝗶 𝗮𝗰𝗰𝗶𝗱𝗲𝗻𝘁𝗮𝗹𝗺𝗲𝗻𝘁𝗲 𝗹𝗹𝗮𝗺𝗮𝘀𝘁𝗲 𝗽𝗼́𝗻𝗴𝗮𝗻𝘀𝗲 𝗲𝗻 𝗰𝗼𝗻𝘁𝗮𝗰𝘁𝗼 𝗰𝗼𝗻 𝗺𝗶 𝗰𝗿𝗲𝗮𝗱𝗼𝗿 𝗽𝗮𝗿𝗮 𝗾𝘂𝗲 𝘁𝗲 𝗱𝗲𝘀𝗯𝗹𝗼𝗾𝘂𝗲𝗲! \n 𝗚𝗿𝘂𝗽𝗼 𝗮𝘀𝗶𝘀𝘁𝗲𝗻𝗰𝗶𝗮 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://facebook.com/groups/721802642266362/`}
const smsCont19 = () => { return `𝘼𝙣𝙩𝙞 𝙙𝙚𝙡𝙚𝙩𝙚`}
const smsCont20 = () => { return `*┃▢ 𝑵𝒐𝒎𝒃𝒓𝒆:*`}
const smsCont21 = () => { return `*┃▢ 𝑬𝒏𝒗𝒊𝒂𝒅𝒐 𝒆𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆....*\n\n *▢ Para desactivar esta función envie el comando: .disable delete*`}

//_anti-internacional.js
const smsInt1 = () => { return `𝙀𝙎𝙏𝙀 𝙉𝙐𝙈𝙀𝙍𝙊`}
const smsInt2 = () => { return `𝙉𝙊 𝙀𝙎𝙏𝘼 𝙋𝙀𝙍𝙈𝙄𝙏𝙄𝘿𝙊 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}𝘾𝙊𝙈𝙊 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙉𝙊 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊(𝘼)`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝙌𝙐𝙀 𝘾𝙊𝙉𝙏𝙄𝙀𝙉𝙀 𝙃𝙏𝙏𝙋𝙎 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}

//_antispam.js
const smsNoSpam = () => { return `🤨 NO HAGAS SPAM, NO PODRÁ USAR A 𝙏𝙝𝙚 𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿 POR ${60000 / 1000 - 59} MINUTO`}

//_antispam_.js
const smsNoSpam2 = () => { return `FUE DESBANEADO DESPUÉS DE ${60000 / 1000 - 59} MINUTO. POR FAVOR NO HAGA SPAM!!`}

//Texto
const smsConMenu = () => { return `☘️ 𝗠 𝗘 𝗡 𝗨`}

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`OCURRIÓ UN ERROR INESPERADO.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`SURGIÓ UN INCONVENIENTE. INTENTE DE NUEVO.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ALGO SALIÓ MAL, REPORTE ESTE COMANDO USANDO:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `𝑵𝒐𝒐!!! 🤬 𝑫𝒆𝒄𝒊𝒓 𝒆𝒔𝒕𝒂́ 𝒑𝒂𝒍𝒂𝒃𝒓𝒂`}
const smsToxic2 = () => { return `𝑬𝒔𝒕𝒂́ 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒂 𝒏𝒐 𝒔𝒆𝒂𝒔 𝒕𝒐́𝒙𝒊𝒄𝒐(𝘼)🤬`}
const smsToxic3 = () => { return `*𝑨𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂*\n⚠️`}
const smsToxic4 = () => { return `😭 𝑳𝒐 𝒔𝒊𝒆𝒏𝒕𝒐`}
const smsToxic5 = () => { return `☢️ 𝑫𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂 𝒂𝒏𝒕𝒊𝒕𝒐𝒙𝒊𝒄`}
const smsToxic6 = () => { return `𝑻𝒆 𝒍𝒐 𝒂𝒅𝒗𝒆𝒓𝒕𝒊́ 𝒗𝒂𝒓𝒊𝒂𝒔 𝒗𝒆𝒄𝒆𝒔!!`}
const smsToxic7 = () => { return `𝑺𝒖𝒑𝒆𝒓𝒂𝒔𝒕𝒆 𝒍𝒂𝒔 *4* 𝑨𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂 𝒂𝒉𝒐𝒓𝒂 𝒔𝒆𝒓𝒂́ 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐(𝘼) 😐`}

//Tienda
const eExp = () => { return '⚡ Experiencia' } 
const eDiamante = () => { return '💎 Diamante' } 
const eDiamantePlus = () => { return '💎+ Diamante+' }
const eToken = () => { return '🪙 Token' } 
const eEsmeralda = () => { return '💚 Esmeralda' } 
const eJoya = () => { return '♦️ Joya' }
const eMagia = () => { return '🌀 Magia' } 
const eOro = () => { return '👑 Oro' } 
const eGataCoins = () => { return '🐱 LoliCoins' }
const eGataTickers = () => { return '🎫 Loli Tickers' } 
const eEnergia = () => { return '✨ Energía' }

const ePocion = () => { return '🥤 Poción' }
const eAgua = () => { return '💧 Agua' }
const eBasura = () => { return '🗑 Basura' }
const eMadera = () => { return '🪵 Madera' }
const eRoca = () => { return '🪨 Roca' }
const ePiedra = () => { return '🥌 Piedra' }
const eCuerda = () => { return '🕸️ Cuerda' }
const eHierro = () => { return '⛓️ Hierro' }
const eCarbon = () => { return '⚱️ Carbón' }
const eBotella = () => { return '🍶 Botella' }
const eLata = () => { return '🥫 Lata' }
const eCarton = () => { return '🪧 Cartón' } 

const eEletric = () => { return '💡 Electricidad' }
const eBarraOro = () => { return '〽️ Barra de Oro' }
const eOroComun = () => { return '🧭 Oro Común' }
const eZorroG = () => { return '🦊🌫️ Zorro Grande' }
const eBasuraG = () => { return '🗑🌫️ Super Basura' }
const eLoboG = () => { return '🐺🌫️ Super Lobo' }
const eMaderaG = () => { return '🛷🌫️ Super Madera' }
const eEspada = () => { return '⚔️ Espada' }
const eCarnada = () => { return '🪱 Carnada' }
const eBillete = () => { return '💵 Billetes' }
const ePinata = () => { return '🪅 Piñata' }
const eGancho = () => { return '🪝 Gancho' }
const eCanaPescar = () => { return '🎣 Caña de Pescar' } 

const eCComun = () => { return '📦 Caja Común' }
const ePComun = () => { return '🥡 Caja Poco Común' }
const eCMistica = () => { return '🗳️ Caja Mítica' }
const eCMascota = () => { return '📫 Caja de Mascotas' }
const eCJardineria = () => { return '💐 Caja de Jardinería' }
const eClegendaria = () => { return '🎁 Caja Legendaria' } 

const eUva = () => { return '🍇 Uva' }
const eManzana = () => { return '🍎 Manzana' }
const eNaranja = () => { return '🍊 Naranja' }
const eMango = () => { return '🥭 Mango' }
const ePlatano = () => { return '🍌 Platano' } 

const eSUva = () => { return '🌾🍇 Semillas de uva' }
const eSManzana = () => { return '🌾🍎 Semillas de manzana' }
const eSNaranja = () => { return '🌾🍊 Semillas de naranja' }
const eSMango = () => { return '🌾🥭 Semillas de Mango' }
const eSPlatano = () => { return '🌾🍌 Semillas de plátano' } 

const eCentauro = () => { return '🐐 Centauro' }
const eAve = () => { return '🦅 Ave' }
const eGato = () => { return '🐈 Gato' }
const eDragon = () => { return '🐉 Dragón' }
const eZorro = () => { return '🦊 Zorro' }
const eCaballo = () => { return '🐎 Caballo' }
const eFenix = () => { return '🕊️ Fénix' }
const eLobo = () => { return '🐺 Lobo' }
const ePerro = () => { return '🐶 Perro' } 

const eAMascots = () => { return '🍖 Alimento para Mascota' }
const eCCentauro = () => { return '🐐🥩 Comida de Centauro' }
const eCAve = () => { return '🦅🥩 Comida de Ave' }
const eCMagica = () => { return '🌀🥩 Comida Mágica' }
const eCDragon = () => { return '🐉🥩 Comida de Dragón' }
const eACaballo = () => { return '🐎🥩 Alimentos Para Caballo' }
const eCFenix = () => { return '🕊️🥩 Comida de Fénix' } 

//config-on y off.js
const smsWel1 = () => { return `🎉 BIENVENIDA`}
const smsWel2 = () => { return `Mensaje de Bienvenida para nuevos Miembros en Grupos`}
const smsDete1 = () => { return `🔔 AVISOS`}
const smsDete2 = () => { return `Avisos de acciones dentro del Grupo`}
const smsANivel1 = () => { return `🆙 NIVEL AUTOMÁTICO`}
const smsANivel2 = () => { return `Sube de nivel a todos de manera automática; (Aplica recompensas por subir de Nivel)`}
const smsRestri1 = () => { return `⛔ RESTRINGIR`}
const smsRestri2 = () => { return `Habilitar función para agregar o eliminar personas en Grupos`}
const smsLlamar1 = () => { return `🚫 ANTI LLAMADAS`}
const smsLlamar2 = () => { return `Bloquea a Personas que hagan llamadas`}
const smsAntiSp1 = () => { return `🚯 ANTI SPAM`}
const smsAntiSp2 = () => { return `Banear el Uso de Comados cuando alguien realice algún tipo de Spam`}
const smsModP1 = () => { return `🌐 MODO PÚBLICO`}
const smsModP2 = () => { return `Habilitar función para que todos puedan usar al el Bot`}
const smsModAd1 = () => { return `🛂 MODO ADMIN`}
const smsModAd2 = () => { return `Solo los Admins podrán usar al el Bot en Grupos`}
const smsLect1 = () => { return `✅ LECTURA AUTOMÁTICA`}
const smsLect2 = () => { return `Dejar los mensajes o chats como Leídos`}
const smsTempo1 = () => { return `🐈 BOT TEMPORAL`}
const smsTempo2 = () => { return `Función que permite estadía temporalmente en Grupos`}
const smsStik1 = () => { return `🎠 STICKERS`}
const smsStik2 = () => { return `Habilitar el envio automático de Stickers a todos`}
const smsStickA1 = () => { return `🪄 STICKERS AUTOMÁTICOS`}
const smsStickA2 = () => { return `Los vídeos, Gif, imágenes, enlaces jpg o jpeg; Se convertirán en Stickers Automáticamente`}
const smsReacc1 = () => { return `🤡 REACCIÓN `}
const smsReacc2 = () => { return `Habilitar el envio automático de Reacciones a mensajes`}
const smsAudi1 = () => { return `🔊 AUDIOS`}
const smsAudi2 = () => { return `Habilitar el envio automático de Audios a todos`}
const smsModHor1 = () => { return `🔞 MODO HORNY`}
const smsModHor2 = () => { return `Mostrar contenido para Adulto en los Chats`}
const smsAntitoc1 = () => { return `☢️ ANTI TÓXICOS`}
const smsAntitoc2 = () => { return `Enviar Advertencias aquellas personas que insulten`}
const smsModOb1 = () => { return `👀 MODO OBSERVAR`}
const smsModOb2 = () => { return `Permitir que las imágenes, Gif y Vídeos se puedan ver para todos`}
const smsAntiEli1 = () => { return `🗑️ ANTI ELIMINAR`}
const smsAntiEli2 = () => { return `Todo mensaje eliminado será reenviado al Chat o Grupo`}
const smsAntiInt1 = () => { return `🌏 ANTI INTERNACIONAL`}
const smsAntiInt2 = () => { return `Eliminar Números internacionales considerados falsos`}
const smsAntiE1 = () => { return `🔗 ANTI ENLACES`}
const smsAntiE2 = () => { return `Eliminar Personas que envíen enlaces de Grupos de WhatsApp`}
const smsAntiEE1 = () => { return `🔗 ANTI ENLACES 2`}
const smsAntiEE2 = () => { return `Eliminar Personas que envíen enlaces que contengan https`}
const smsAntiTT1 = () => { return `🔗 ANTI TIKTOK`}
const smsAntiTT2 = () => { return `Eliminar Personas que envíen enlaces de TikTok`}
const smsAntiYT1 = () => { return `🔗 ANTI YOUTUBE`}
const smsAntiYT2 = () => { return `Eliminar Personas que envíen enlaces de YouTube`}
const smsAntiTEL1 = () => { return `🔗 ANTI TELEGRAM`}
const smsAntiTEL2 = () => { return `Eliminar Personas que envíen enlaces de Telegram`}
const smsAntiFB1 = () => { return `🔗 ANTI FACEBOOK`}
const smsAntiFB2 = () => { return `Eliminar Personas que envíen enlaces de Facebbok`}
const smsAntiIG1 = () => { return `🔗 ANTI INSTAGRAM`}
const smsAntiIG2 = () => { return `Eliminar Personas que envíen enlaces de Instagram`}
const smsAntiTW1 = () => { return `🔗 ANTI TWITTER `}
const smsAntiTW2 = () => { return `Eliminar Personas que envíen enlaces de Twitter`}
const smsSOLOP1 = () => { return `⚜️ SOLO PRIVADOS`}
const smsSOLOP2 = () => { return `Permitir que solo se use en Chats Privados`}
const smsSOLOG1 = () => { return `⚜️ SOLO GRUPOS`}
const smsSOLOG2 = () => { return `Permitir que solo se use en Chats Grupales`}
const smsConfi1 = () => { return `AJUSTES`}
const smsConfi2 = () => { return `*¡Hola!*`}
const smsConfi3 = () => { return `┃ *Seleccione una opción de la lista*`}
const smsConfi4 = () => { return `┃ *Para empezar a Configurar*`}
const smsConfi5 = () => { return `┃● *Avisos de la Configuracion:*`}
const smsConfi6 = () => { return `┃ ✅ ⇢ *Función Activada*`}
const smsConfi7 = () => { return `┃ ❌ ⇢ *Función Desactivada*`}
const smsConfi8 = () => { return `┃ ⚠️ ⇢ *Este Chat no es un Grupo*`}
const smsConfi9 = () => { return `┃ *Recomendación: Para ver la configuración*\n┃ *Completa use este Menú en Grupo*\n┃`}
const smsConfi10 = () => { return `*~ CENTRO DE CONFIGURACIÓN*`}
const smsParaAdmins = () => { return `PARA ADMINS Y CREADOR(A) : GRUPOS`}
const smsParaAdYOw = () => { return `PARA ADMINS Y CREADOR(A) : CHATS`}
const smsParaOw = () => { return `PARA CREADOR(A) : CHATS`}
const smsNoGg = () => { return ` | ⚠️`}
const smsMens1 = () => { return `COMANDO`} 
const smsMens2 = () => { return `ACTUALMENTE`} 
const smsMens3 = () => { return `EN ESTE`} 
const smsMens4 = () => { return `BOT`} 
const smsMens5 = () => { return `CHAT`} 

//Error2
const smsMensError1 = () => { return `❕ REPORTAR COMANDO ❕`} 
const smsMensError2 = () => { return `Está Fallando el siguiente comando`} 

//_antiviewonce.js
const smsAntiView = () => { return `*𝙈𝘼𝙎𝙏𝙀𝙍 𝙔𝙊 𝙇𝙊 𝙑𝙀𝙊 𝙏𝙊𝘿𝙊 𝘼𝙌𝙐Í* 😎`} 

//_autolevelup.js
const smsAutoLv1 = () => { return `🎖️ NUEVO NIVEL 🎖️`} 
const smsAutoLv2 = () => { return `NIVEL ANTERIOR:`} 
const smsAutoLv3 = () => { return `NIVEL ACTUAL:`} 
const smsAutoLv4 = () => { return `RANGO:`} 
const smsAutoLv5 = () => { return `FECHA:`} 
const smsAutoLv6 = () => { return `Has alcanzado un Nuevo Nivel!!!`} 
const smsAutoLv7 = () => { return `🥳 RECOMPENSA POR SU NUEVO NIVEL`} 

//_autosticker.js
const smsAutoStik = () => { return `${lenguajeGB['smsAvisoFG']()}*EL VÍDEO NO DEBE DE DURAR MÁS DE 7 SEGUNDOS.*`} 

//_expired.js
const smsBottem1 = () => { return `*SE VA DEL GRUPO!!! 🤝 SI QUIERE QUE VUELVA, USE EL COMANDO _#bottemporal_ PARA QUE VUELVA AL GRUPO!!*`} 
const smsBottem2 = () => { return `*💕 ASISTENCIA PARA USUARIOS*\n*_${global.ig}_*\n`} 
const smsBottem3 = () => { return `HASTA PRONTO 💖`} 

//_premium.js
const smsPremI = () => { return `*¡SE ACABÓ TÚ TIEMPO PREMIUM!* 🎟️\n*PARA OBTENER UN NUEVO PASE PREMIUM USE EL COMANDO:*\n*#pase premium*`} 

//afk-_afk.js
const smsAfkM1 = () => { return `${lenguajeGB['smsAvisoEG']()}*DEJASTE DE ESTAR INACTIVO AFK*`} 
const smsAfkM2 = () => { return `*EL MOTIVO DE INACTIVIDAD ERA:*`} 
const smsAfkM3 = () => { return `*TIEMPO INACTIVO:*`} 
const smsAfkM4 = () => { return `${lenguajeGB['smsAvisoAG']()}*NO ETIQUETES A ESTE(A) USUARIO(A)!! ESTÁ INACTIVO(A)*`} 
const smsAfkM5 = () => { return `*MOTIVO DE LA INACTIVIDAD AFK:*`} 
const smsAfkM6 = () => { return `*MOTIVO DE LA INACTIVIDAD AFK: NO ESPECIFICÓ MOTIVO DE INACTIVIDAD*`} 

//afk-afk.js
const smsAfkM1A = () => { return `${lenguajeGB['smsAvisoAG']()}*NO ETIQUETEN A*`} 
const smsAfkM1B = () => { return `*ESTARÁ INACTIVO(A) AFK*\n\n*MOTIVO DE LA INACTIVIDAD AFK*`} 

//anonymous_chat.js
const smsChatAn1 = () => { return `${lenguajeGB['smsAvisoFG']()}*NO ESTÁS EN CHAT ANÓNIMO*`} 
const smsChatAn2 = () => { return `*SI QUIERES INICIAR UN CHAT ANÓNIMO USA EL COMANDO #start O USAR EL BOTÓN DE ABAJO*\n`} 
const smsChatAn3 = () => { return `⚡ INICIAR CHAT ANÓNIMO`} 
const smsChatAn4 = () => { return `${lenguajeGB['smsAvisoRG']()}🪐 *USTED SE FUE DEL CHAT ANÓNIMO*`} 
const smsChatAn5 = () => { return `${lenguajeGB['smsAvisoAG']()}*EL OTRO USUARIO SALIÓ DEL CHAT ANÓNIMO*`}  
const smsChatAn6 = () => { return `*SI QUIERES IR A OTRO CHAT ANÓNIMO USA EL COMANDO #start O USAR EL BOTÓN DE ABAJO*\n`} 
const smsChatAn7 = () => { return `${lenguajeGB['smsAvisoAG']()}*TODAVÍA ESTÁS EN UN CHAT ANÓNIMO O EN ESPERA A QUE ALGUIEN SE UNA PARA CHATEAR*`} 
const smsChatAn8 = () => { return `*SI QUIERES SALIR DEL CHAT ANÓNIMO USE EL COMANDO #leave O PUEDES USAR EL BOTÓN DE ABAJO*\n`} 
const smsChatAn9 = () => { return `🍁 SALIR DEL CHAT ANÓNIMO`} 
const smsChatAn10 = () => { return `${lenguajeGB['smsAvisoEG']()}✨ *YA PUEDEN CHATEAR*`} 
const smsChatAn11 = () => { return `*ALGUIEN SE HA UNIDO AL CHAT ANÓNIMO!!*`} 
const smsChatAn12 = () => { return `❇️ OTRO(A) USUARIO(A)`} 
const smsChatAn13 = () => { return `${lenguajeGB['smsAvisoRG']()}🐈 *ESPERANDO A QUE ALGUIEN SE UNA AL CHAT ANÓNIMO, TENGA PACIENCIA POR FAVOR*`} 

//Botones de Menú 
const smsBotonM1 = () => { return `⚡ MENÚ DE INICIO ⚡`} 
const smsBotonM2 = () => { return `💫 MENÚ COMPLETO 💫`} 
const smsBotonM3 = () => { return `🔰 INFOBOT 🔰`} 
const smsBotonM4 = () => { return `𝙐𝙨𝙪𝙖𝙧𝙞𝙤`}
const smsBotonM5 = () => { return `RANGO`}
const smsBotonM6 = () => { return `NIVEL`}
const smsBotonM7 = () => { return `PREMIUM`}
const smsTex1 = () => { return '*MENÚ DE BUSQUEDA*'}
const smsTex2 = () => { return '*MODIFICADOR DE AUDIO*'}
const smsTex3 = () => { return '*MENÚ +18*'}
const smsTex4 = () => { return '*CONTENIDO DINÁMICO*'}
const smsTex5 = () => { return '*BUSCAR Y DESCARGAR*'}
const smsTex6 = () => { return '*MENÚ +18 PREMIUM*'}
const smsTex7 = () => { return '⠇ *Vídeos Aleatorios, Alta Calidad*\n⠇ *Y Más duración*'}
const smsTex8 = () => { return '*MENÚ CONVERTIDOR*'}
const smsTex9 = () => { return '*MENÚ DE DESCARGAS*'}
const smsTex10 = () => { return '*MENU JUEGOS DINÁMICOS*'}
const smsTex11 = () => { return '*MENU PARA GRUPOS*'}
const smsTex12 = () => { return '*MENU DE HERRAMIENTAS*'}
const smsTex13 = () => { return '*MENU DE INFORMACIÓN*'}
const smsTex14 = () => { return '*MENU DE EFECTOS Y LOGOS*'}
const smsTex15 = () => { return '*MENU DE LOGOS 2*'}
const smsTex16 = () => { return 'MENU DE AUDIOS'}
const smsTex17 = () => { return '*NO ES NECESARIO USAR PREFIJO EN AUDIOS*'}
const smsTex18 = () => { return 'LISTA DE AUDIOS'}
const smsTex19 = () => { return '*PUEDE SELECCIONAR EL AUDIO!!*'}
const smsTex20 = () => { return '*MENU PARA PROPIETARIO(A)*'}
const smsTex21 = () => { return '*MENU RPG*'}
const smsTex22 = () => { return '*MENU DE STICKERS Y FILTROS*'}
const smsTex23 = () => { return '*MENU DE MEMES Y ANIMES RANDOMS*'}

//ad
const smsMalused = () => { return '⚡ *USAR EL COMANDO DE ESTA FORMA:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *DEBE DE USAR EL COMANDO COMO EN ESTE EJEMPLO:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *DEBE DE USAR EL COMANDO O RESPONDER AL MENSAJE DE ALGUIEN COMO EN ESTE EJEMPLO:*\n`}

//gc-config_time.js
const smsGrupoTime1 = () => { return '🔓 *_ABRIR GRUPO EN UNA HORA_*'}
const smsGrupoTime2 = () => { return '🔒 *_CERRAR GRUPO EN UNA HORA_*'}
const smsGrupoTime3 = () => { return '*GRUPO'}
const smsGrupoTime4 = () => { return 'CERRADO'}
const smsGrupoTime5 = () => { return 'ABIERTO'}
const smsGrupoTime6 = () => { return '*DURANTE'}
const smsGrupoTime7 = () => { return '🔒 *EL GRUPO ESTA CERRADO, SOLO ADMINS PUEDEN ENVIAR MENSAJES*'}
const smsGrupoTime8 = () => { return '🔓 *EL GRUPO ESTA ABIERTO, TODOS PUEDEN ENVIAR MENSAJES*'}
const smsGrupoTime9 = () => { return '🔓 ABRIR GRUPO DURANTE '}
const smsGrupoTime10 = () => { return '🔒 CERRAR GRUPO DURANTE '}
const smsGrupoTime11 = () => { return ' HORA'}
const smsGrupoTime12 = () => { return 'PERMITIR QUE EL GRUPO SE HABRA POR '}
const smsGrupoTime13 = () => { return 'PERMITIR QUE EL GRUPO SE CIERRE POR '}

//grupo-add.js
const smsAddB1 = () => { return `${lenguajeGB['smsAvisoFG']()}*NO SE PUEDE AGREGAR EL NÚMERO, VERFIQUE QUE SEA CORRECTO, TAL VEZ SALIÓ RECIENTEMENTE O SU PRIVACIDAD ESTA CONFIGURADA.*`}
const smsAddB2 = () => { return `${lenguajeGB['smsAvisoFG']()}*NO SE PUEDE AGREGAR EL NÚMERO, VERFIQUE QUE SEA CORRECTO, O AGREGUE LO MANUALMENTE.*`}

//grupo-admins.js
const smsAddB3 = () => { return `*𝙉𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤𝙣 𝙥𝙖𝙧𝙖 𝙖𝙙𝙢𝙞𝙣𝙨*`}
const smsAddB4 = () => { return `*𝙋𝙧𝙚𝙨𝙚𝙣𝙘𝙞𝙖  𝙙𝙚 𝙖𝙙𝙢𝙞𝙣𝙨*`}
const smsAddB5 = () => { return `*𝙈𝙚𝙣𝙨𝙖𝙟𝙚:*`}
const smsAddB6 = () => { return `𝙎𝙤𝙡𝙞𝙘𝙞𝙩𝙤 𝙖𝙡 𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙨  𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.`}

//grupo-advertencia.js
const smsAdveu1 = () => { return `${lenguajeGB['smsAvisoAG']()}*SOLO PUEDE USAR SI ESTÁ ACTIVADA LA FUNCIÓN:*\n`}
const smsAdveu2 = () => { return 'Motivo'}
const smsAdveu3 = () => { return `${lenguajeGB['smsAvisoMG']()}*RECUERDE ESCRIBIR EL MOTIVO DE LA ADVERTENCIA*\n`}
const smsAdveu4 = () => { return '*RECIBIÓ UNA ADVERTENCIA EN ESTE GRUPO!!*'}
const smsAdveu5 = () => { return 'ADVERTENCIA'}
const smsAdveu6 = () => { return '🎒 INVENTARIO'}
const smsAdveu7 = () => { return '*TE LO ADVERTI VARIAS VECES!!*'}
const smsAdveu8 = () => { return '*AHORA SERÁS ELIMINADO(A)* 🙄'}
const smsAdveu9 = () => { return '😇 MUCHAS GRACIAS'}
const smsAdveu10 = () => { return '*SE LE ELIMINÓ UNA ADVERTENCIA EN ESTE GRUPO!!*'}
const smsAdveu11 = () => { return 'Antes:'}
const smsAdveu12 = () => { return 'Ahora:'}

//grupo-demote.js || grupo-promote.js 
const smsDemott = () => { return '*EL NÚMERO NO ES VÁLIDO, VUELVA INTENTAR RESPONDA AL MENSAJE DE ALGUIEN O USE COMO EN ESTE EJEMPLO:*\n'}
const smsDemott2 = () => { return '*AHORA TIENE PODER EN EL GRUPO!!*'}
const smsDemott3 = () => { return '*YA NO TIENE PODER EN EL GRUPO!!*'}

//grupo-info.js
const smsGI1 = () => { return '*INFORMACIÓN DEL GRUPO*'}
const smsGI2 = () => { return '*ID DEL GRUPO*'}
const smsGI3 = () => { return '*NOMBRE DEL GRUPO*'}
const smsGI4 = () => { return '*DESCRIPCIÓN DEL GRUPO*'}
const smsGI5 = () => { return '*NO HAY DESCRIPCIÓN*'}
const smsGI6 = () => { return '*NÚMERO DE USUARIOS*'}
const smsGI7 = () => { return '*Usuarios*'}
const smsGI8 = () => { return '*CREADOR(A) DEL GRUPO*'}
const smsGI9 = () => { return '*ADMINS DEL GRUPO*'}
const smsGI10 = () => { return '⚙️ CONFIGUARACIONES DEL GRUPO'}

//grupo-kick.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*ETIQUETE A LA PERSONA O RESPONDA AL MENSAJE DE LA PERSONA QUE QUIERE ELIMINAR*\n\n*EJEMPLO: `}
const smskick2 = () => { return `ELIMINADO(A) 😼🫵`}
const smskick3 = () => { return `NO PUEDO ELIMINAR AL CREADOR DEL GRUPO 😆🫵`}
const smskick4 = () => { return `NO ESTÁ EN ESTE GRUPO 👻`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ INVOCANDO AL GRUPO ⚡`}

//grupo-setbye.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*LA DESPEDIDA DEL GRUPO HA SIDO CONFIGURADA*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_ESCRIBA EL MENSAJE DE DESPEDIDA_*\n*_OPCIONAL PUEDE USAR LO QUE ESTA CON "@" PARA AGREGAR MÁS INFORMACIÓN:_*\n\n*⚡ @user (Mención al usuario(a))*\n\n*RECUERDE QUE EL "@" ES OPCIONAL*`}

//grupo-setwelcome.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*LA BIENVENIDA DEL GRUPO HA SIDO CONFIGURADA*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_ESCRIBA EL MENSAJE DE BIENVENIDA_*\n*_OPCIONAL PUEDE USAR LO QUE ESTA CON "@" PARA AGREGAR MÁS INFORMACIÓN:_*\n\n*⚡ @user (Mención al usuario(a))*\n*⚡ @subject (Nombre de grupo)*\n*⚡ @desc (Description de grupo)*\n\n*RECUERDE QUE LOS "@" SON OPCIONALES*`}

//grupo-setdesc.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*LA DESCRIPCIÓN DEL GRUPO HA SIDO CONFIGURADA*`}

//grupo-setname.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*EL NOMBRE DEL GRUPO HA SIDO CONFIGURADO*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 ESCRIBA EL NUEVO NOMBRE DEL GRUPO*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*EL NOMBRE DEL GRUPO NO DEBE DE TENER MÁS DE 25 CARACTERES*`}

//grupo-restaurarEnlace.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*EL ENLACE DEL GRUPO HA SIDO RESTABLECIDO*`}


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10, smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18, smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsNoSpam, smsNoSpam2, smsConMenu, smsMalError, smsMalError2, smsMalError3, smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eGataCoins, eGataTickers, eEnergia, ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar, eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eClegendaria, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano, eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix, smsWel1, smsWel2, smsParaAdmins, smsDete1, smsDete2, smsANivel1, smsANivel2, smsParaAdYOw, smsParaOw, smsRestri1, smsRestri2, smsLlamar1, smsLlamar2, smsModP1, smsModP2, smsModAd1, smsModAd2, smsLect1, smsLect2, smsTempo1, smsTempo2, smsStik1, smsStik2, smsStickA1, smsStickA2, smsReacc1, smsReacc2, smsAudi1, smsAudi2, smsModHor1, smsModHor2, smsAntitoc1, smsAntitoc2, smsModOb1, smsModOb2,
smsAntiEli1, smsAntiEli2, smsAntiInt1, smsAntiInt2, smsAntiE1, smsAntiE2, smsAntiEE1, smsAntiEE2, smsAntiTT1, smsAntiTT2, smsAntiYT1, smsAntiYT2, smsAntiTEL1, smsAntiTEL2, smsAntiFB1, smsAntiFB2, smsAntiIG1, smsAntiIG2, smsAntiTW1, smsAntiTW2, smsSOLOP1, smsSOLOP2, smsSOLOG1, smsSOLOG2, smsNoGg, smsConfi1, smsConfi2, smsConfi3, smsConfi4, smsConfi5, smsConfi6, smsConfi7, smsConfi8, smsConfi9, smsConfi10, smsMens1, smsMens2, smsMens3, smsMens4, smsMens5, smsMensError1, smsMensError2, smsAntiView, smsAutoLv1, smsAutoLv2, smsAutoLv3, smsAutoLv4, smsAutoLv5, smsAutoLv6, smsAutoLv7, smsAntiSp1, smsAntiSp2, smsAutoStik, smsBottem1, smsBottem2, smsBottem3, smsPremI,
smsAfkM1, smsAfkM2, smsAfkM3, smsAfkM4, smsAfkM5, smsAfkM6, smsAfkM1A, smsAfkM1B, smsChatAn1, smsChatAn2, smsChatAn3, smsChatAn4, smsChatAn5, smsChatAn6, smsChatAn7, smsChatAn8, smsChatAn9, smsChatAn10, smsChatAn11, smsChatAn12, smsChatAn13, smsBotonM1, smsBotonM2, smsBotonM3, smsBotonM4, smsBotonM5, smsBotonM6, smsBotonM7, smsTex1, smsTex2, smsTex3, smsTex4, smsTex5, smsTex6, smsTex7, smsTex8, smsTex9, smsTex10, smsTex11, smsTex12, smsTex13, smsTex14, smsTex15, smsTex16, smsTex17, smsTex18, smsTex19, smsTex20, smsTex21, smsTex22, smsTex23, smsMalused, smsGrupoTime1, smsGrupoTime2, smsGrupoTime3, smsGrupoTime4, smsGrupoTime5, smsGrupoTime6, smsGrupoTime7, smsGrupoTime8, smsGrupoTime9, smsGrupoTime10, smsGrupoTime11, smsGrupoTime12, smsGrupoTime13, smsAddB1, smsAddB2, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsAdveu1, smsMalused2, smsAdveu2, smsAdveu3, smsAdveu4, smsAdveu5, smsAdveu6, smsAdveu7, smsAdveu8, smsAdveu9, smsMalused3, smsAdveu10, smsAdveu11, smsAdveu12, smsDemott, smsDemott2, smsDemott3,
smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsGI10, smsLista22_1, smsCodigoQR, smsConexionOFF, smskick1, smskick2, smskick3, smskick4, smstagaa,
smsSetB, smsSetB2, smsSetW, smsSetW2, smsDest, smsNam1, smsNam2, smsNam3, smsRestGp};
