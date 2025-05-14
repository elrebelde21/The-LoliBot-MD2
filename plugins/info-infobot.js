import db from '../lib/database.js';
import fs from 'fs';
import path from 'path';
import ws from 'ws';
import { cpus as _cpus, totalmem, freemem, platform, hostname, version, release, arch } from 'os';
import os from 'os';
import moment from 'moment';
import speed from 'performance-now';
import diskusage from 'diskusage';
import { sizeFormatter } from 'human-readable';

let format = sizeFormatter({std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`,});

const used = process.memoryUsage();

function getCpuUsage() {
    let load = os.loadavg()[0]; 
    let cores = os.cpus().length;
    let usage = (load / cores) * 100;
    return usage.toFixed(2) + '%';
}

async function getSystemInfo() {
    let cpuInfo = os.cpus();
    let modeloCPU = cpuInfo && cpuInfo.length > 0 ? cpuInfo[0].model : null;

    let memoriaUso = process.memoryUsage();
    let usoRam = humanFileSize(memoriaUso.rss); 
    let usoCpu = getCpuUsage();
   let diskUsage = await getDiskUsage();

    const data = {
        plataforma: os.platform(),
        núcleosCPU: cpuInfo ? cpuInfo.length : null,
        modeloCPU: modeloCPU,
        arquitecturaSistema: os.arch(),
        versiónSistema: os.release(),
        procesosActivos: os.loadavg()[0],
        usoRam: usoRam,  
        usoCpu: usoCpu,  
        memory: humanFileSize(memoriaUso.free, true, 1) + ' libre de ' + humanFileSize(memoriaUso.total, true, 1),
        espacioUsado: diskUsage.usado,
        espacioTotal: diskUsage.total,
        espacioLibre: diskUsage.libre,
    tiempoActividad: toTime(os.uptime() * 1000),
        cargaPromedio: os.loadavg().map((avg, index) => `${index + 1} min: ${avg.toFixed(2)}.`).join('\n'),
        horaActual: new Date().toLocaleString(),
    };

    const startTime = Date.now();
    const endTime = Date.now();
    data.latencia = `${endTime - startTime} ms`;
    return data;
}

let handler = async (m, { conn, usedPrefix }) => {
let totalStats = Object.values(global.db.data.stats).reduce((total, stat) => {
if (typeof stat.total === 'number' && !isNaN(stat.total)) {
return total + stat.total;
} else {
return total;
}}, 0);
let formattedTotalStats = !isNaN(totalStats) ? toNum(totalStats) : 'N/A';
let bot = global.db.data.settings[conn.user.jid];
let _uptime = process.uptime() * 1000;
let uptime = new Date(_uptime).toISOString().substr(11, 8);
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
let totalbots = Object.keys(global.db.data.settings).length;
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
let totalchats = Object.keys(global.db.data.chats).length;
let totalf = Object.values(global.plugins).filter(v => v.help && v.tags).length;
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'));
let totaljadibot = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
const totalUsers = totaljadibot.length;
let timestamp = speed();
let latensi = speed() - timestamp;
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts    

getSystemInfo().then(async (data) => {
let teks = `*≡ INFOBOT*

*${await tr("INFORMACIÓN")}*
*▣ ${await tr("Grupos total")}:* ${groupsIn.length}
*▣ ${await tr("Grupos unidos")}:* ${groupsIn.length}
*▣ ${await tr("Grupo salidos")}:* ${groupsIn.length - groupsIn.length}
*▣ ${await tr("Chats privado")}:* ${chats.length - groupsIn.length}
*▣ ${await tr("Chats totales")}:* ${chats.length}
*▣ ${await tr("Sub-Bots conectado")}:* ${totalUsers}
*▣ ${await tr("Total plugins")}:* ${totalf}
*▣ ${await tr("Velocidad")}:* ${latensi.toFixed(4)} ms
*▣ ${await tr("Actividad")}:* ${uptime}

*▣ ${await tr("Comando Ejecutando")}:* ${formattedTotalStats}/${totalStats}
*▣ ${await tr("Grupos registrado")}:* ${toNum(totalchats)}/${totalchats}
*▣ ${await tr("Usuarios registrado")}:* ${toNum(rtotalreg)} de ${toNum(totalreg)} users totales 

*≡ S E R V E R*
▣ *${await tr("Servidor")}:* ${hostname()}
▣ *${await tr("Plataforma")}:* ${platform()}
▣ *${await tr("Ram usada")}:* ${data.usoRam}
▣ *${await tr("Espacio usado en disco")}:* ${data.espacioUsado}
▣ *${await tr("Uso de CPU")}:* ${data.usoCpu}  
▣ *${await tr("Uptime")}:* ${toTime(os.uptime() * 1000)}`;

await conn.sendMessage(m.chat, {text: teks, contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363355261011910@newsletter', serverMessageId: '', newsletterName: 'LoliBot ✨' }, externalAdReply : {mediaUrl: null, mediaType: 1, description: null, title: `INFO - BOT`, previewType: 0, thumbnailUrl: "https://telegra.ph/file/39fb047cdf23c790e0146.jpg", sourceUrl: redes.getRandom()}}}, { quoted: m })
//conn.sendMessage(m.chat, {image: { url: "https://telegra.ph/file/39fb047cdf23c790e0146.jpg" }, caption: teks, contextInfo: {externalAdReply: { title: `INFO - BOT`, sourceUrl: redes.getRandom(), mediaType: 1, renderLargerThumbnail: true, showAdAttribution: true, thumbnailUrl: img1}}}, { quoted: m })
});
}
handler.help = ['infobot'];
handler.tags = ['main'];
handler.command = /^(infobot|informacionbot|infololi)$/i;
handler.register = true;
export default handler;

function getFolderSize(folderPath) {
let totalSize = 0;

function calculateSize(directory) {
const files = fs.readdirSync(directory);

        for (const file of files) {
            const filePath = path.join(directory, file);
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                calculateSize(filePath);
            } else {
                totalSize += stats.size;
            }
        }
    }

    calculateSize(folderPath);
    return humanFileSize(totalSize);
}

async function getDiskUsage() {
    try {
        const path = "/home/container"; // Asegúrate de que este sea el directorio del bot
        const usado = getFolderSize(path);
        return { total: 'N/A', usado, libre: 'N/A' };
    } catch (err) {
        return { total: 'N/A', usado: 'N/A', libre: 'N/A' };
    }
}

function toNum(number) {
    if (number >= 1000 && number < 1000000) {
        return (number / 1000).toFixed(1) + 'k';
    } else if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else if (number <= -1000 && number > -1000000) {
        return (number / 1000).toFixed(1) + 'k';
    } else if (number <= -1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else {
        return number.toString();
    }
}

function humanFileSize(bytes) {
    const unidades = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const exponente = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, exponente)).toFixed(2)} ${unidades[exponente]}`;
}

function toTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  return `${days} d, ${hours % 24} hs, ${minutes % 60} min, ${seconds % 60} seg`;
}