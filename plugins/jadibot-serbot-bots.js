import ws from 'ws';

async function handler(m, { conn: _envio, usedPrefix }) {
const msgTxt = await tr("✅ Prestar el bot para unirlo a grupos")
const msgTxt2 = await tr("Tiempo activo")
const msgTxt3 = await tr("*No hay Sub bots conectado, verifique mas tardes.*")
const msgTxt4 = await tr("Username")
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];

function convertirMsADiasHorasMinutosSegundos(ms) {
var segundos = Math.floor(ms / 1000);
var minutos = Math.floor(segundos / 60);
var horas = Math.floor(minutos / 60);
var días = Math.floor(horas / 24);
segundos %= 60;
minutos %= 60;
horas %= 24;
var resultado = "";
if (días !== 0) {
resultado += días + " días, ";
}
if (horas !== 0) {
resultado += horas + " horas, ";
}
if (minutos !== 0) {
resultado += minutos + " minutos, ";
}
if (segundos !== 0) {
resultado += segundos + " segundos";
}
return resultado;
}

const message = users.map((v, index) => {
const botConfig = global.db.data.users[v.user.jid] || {};
const botNumber = botConfig.privacy ? `${msgTxt4}: ` : `wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado`
const prestarStatus = botConfig.privacy ? '' : (botConfig.prestar ? msgTxt : '');
return `👉🏻 ${botNumber} (${v.user.name || '-'})\n*🔰 ${msgTxt2} :* ${v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}\n${prestarStatus}`}).join('\n\n');
const replyMessage = message.length === 0 ? msgTxt3 : message;
const totalUsers = users.length;
const responseMessage = await tr(`*🤖 Aquí tienes la lista de algunos sub bots (jadibot/serbot) 🤖️*\n\n*👉🏻 Puedes contactarlos para ver si se unen a tu grupo*\n\n*Te pedimos de favor que:*\n*1.- Seas amable ✅*\n*2.- No insistas ni discutas ✅*\n\n*✳ ️Si le aparece el siguiente texto en blanco es que no hay ningún sub bot disponible en este momento inténtelo mas tarde*\n\n*_⚠ NOTA: ️ELLOS SON PERSONAS QUE NO CONOCEMOS.. POR LO QUE EL EQUIPO DE LOLIBOT NO SE HACE RESPONSABLE DE LO QUE PUEDA OCURRIR AHI.._*\n\n*🤖 SUBBOTS CONECTADO :* `) + `${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await _envio.sendMessage(m.chat, {text: responseMessage, contextInfo: { mentionedJid: _envio.parseMention(responseMessage), externalAdReply: { mediaUrl: null, mediaType: 1, description: null, title: wm, body: '𝐒𝐮𝐩𝐞𝐫 𝐁𝐨𝐭 𝐃𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}}, { quoted: m });
}
handler.command = handler.help = ['listjadibot', 'bots'];
handler.tags = ['jadibot'];
handler.register = true;
export default handler;
