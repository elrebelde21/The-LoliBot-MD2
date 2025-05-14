//Código elaborado por: https://github.com/elrebelde21

import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const filePath = path.resolve('./database/claimed_characters.json');

const rankPriceRanges = {
  'Común': [6500, 8599],
  'Raro': [8600, 10999],
  'Épico': [11000, 14999],
  'Legendario': [15000, 19999],
  'Mítico': [20000, 34999],
  'Divino': [35000, 49999],
  'Supremo': [50000, 100000],
};

function getAvailableCharacters() {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error al cargar el archivo JSON:', error);
    return [];
  }
}

function saveCharacters(characters) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(characters, null, 2), 'utf-8');
    console.log('Archivo JSON guardado exitosamente.');
  } catch (error) {
    console.error('Error al guardar el archivo JSON:', error);
  }
}

async function fetchCharacterDetails(query) {
const prompt = `Proporciona los siguientes detalles del personaje "${query}":
- Breve descripción en 20 palabras o menos relacionada con su historia o habilidades.
- Rango según su nivel de poder, importancia o rareza en su universo (elige entre: "Común", "Raro", "Épico", "Legendario", "Mítico", "Divino", "Supremo").
- Fecha de lanzamiento si está disponible, en formato: dd/mm/yyyy.
Devuelve cada dato en líneas separadas en este formato:
- Descripción: [breve descripción]
- Rango: [rango]
- Fecha de lanzamiento: [fecha]`;
try {
let gpt = await fetch(`${apis}/ia/gptweb?text=${prompt}`);
let res = await gpt.json();
const content = res.data;
const description = content.match(/Descripción:\s*(.+)/i)?.[1]?.trim() || 'Descripción no disponible';
const rank = content.match(/Rango:\s*(.+)/i)?.[1]?.trim() || 'Común';
const release_date = content.match(/Fecha de lanzamiento:\s*(.+)/i)?.[1]?.trim() || 'Desconocida';
return { description, rank, release_date };
} catch (error) {
console.error('Error en la API 1:', error);
try {
const response = await fetch(`https://api.dorratz.com/ai/bing?prompt=${prompt}`);
const data = await response.json();
if (data.result && data.result.ai_response) {
const responseText = data.result.ai_response;
const description = responseText.match(/Descripción:\s*(.+)/i)?.[1]?.trim();
const rank = responseText.match(/Rango:\s*(.+)/i)?.[1]?.trim();
let release_date = responseText.match(/Fecha de lanzamiento:\s*(.+)/i)?.[1]?.trim();
release_date = release_date?.replace(/\[\d+\](?![^[]*\])/g, '').trim();
return {
description: description || null,
rank: rank || 'Común',
release_date: release_date || null,
}}
} catch (e) {
console.error('Error en la API 2:', e);
return {
description: null,
rank: 'Común',
release_date: null,
}}}
}

function calculatePriceByRank(rank) {
if (!rank) {
rank = 'Común';
}

const formattedRank = rank.charAt(0).toUpperCase() + rank.slice(1).toLowerCase();
const [min, max] = rankPriceRanges[formattedRank] || rankPriceRanges['Común'];
return Math.floor(Math.random() * (max - min + 1)) + min;
}

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.text.includes(',')) return await m.reply(await tr(`⚠️ Usa el formato: ${usedPrefix + command} Nombre, URL, Tipo`))

const extractedData = m.text.trim().slice(m.text.indexOf(' ') + 1);
const params = extractedData.split(',');
if (params.length < 3) return await m.reply(await tr(`⚠️ Formato inválido. Ejemplo: ${usedPrefix + command} Light Yagami, URL, Tipo`))

const name = params[0].trim();
const url = params[1].trim();
const type = params[2].trim();
if (!name || !url || !type) return await m.reply(await tr('⚠️ Faltan datos: asegúrate de incluir nombre, URL y tipo.'))
const availableCharacters = getAvailableCharacters();
const characterExists = availableCharacters.some(c => c.name.toLowerCase() === name.toLowerCase());
if (characterExists) return await m.reply(await tr(`⚠️ El personaje "${name}" ya está registrado.`))
const { description, rank, release_date } = await fetchCharacterDetails(name);
const price = calculatePriceByRank(rank);

const newCharacter = {id: `${name.toLowerCase().replace(/\s+/g, '_')}`,
name,
url,
type,
price,
rank,
release_date,
description,
};
availableCharacters.push(newCharacter);
saveCharacters(availableCharacters);
const priceFormatted = price.toLocaleString('en-US');
await conn.sendMessage(m.chat, {text: `*\`${await tr("¡NUEVO PERSONAJE AÑADIDO CON ÉXITO!")}\`*\n\n*• ${await tr("Nombre")}:* ${name}\n*• ${await tr("Precio")}:* ${priceFormatted} exp\n*• ${await tr("Imagen")}:* ${url}\n*• ${await tr("Tipo")}:* ${type}\n*• ${await tr("Rango")}:* ${rank}\n*• ${await tr("Fecha de lanzamiento")}:* ${release_date}\n• ${await tr(`*Descripción:* ${description}`)}` }, { quoted: m });
const newCharacterJson = JSON.stringify(newCharacter, null, 2);
await conn.reply('5214774444444@s.whatsapp.net', `${await tr("Nuevo personaje agregado")}: \n\`\`\`${newCharacterJson}\`\`\``, null, {contextInfo: { mentionedJid: [m.sender] }});
};
handler.help = ['addpersonajes'];
handler.tags = ['gacha'];
handler.command = ['addpersonajes', 'addcharacter'];
handler.register = true;
export default handler;