// Código adaptado por https://github.com/GataNina-Li
// Código compatible con canales y comunidades de WhatsApp 

import { getUrlFromDirectPath } from "@whiskeysockets/baileys";
import _ from "lodash";
import axios from 'axios';

let handler = async (m, { conn, command, usedPrefix, args, text, groupMetadata, isOwner, isROwner }) => {
 const channelUrl = text?.match(/(?:https:\/\/)?(?:www\.)?(?:chat\.|wa\.)?whatsapp\.com\/(?:channel\/|joinchat\/)?([0-9A-Za-z]{22,24})/i)?.[1];
let txtBotAdminCh = await tr('\n\n> *Verifique que el Bot sea admin en el canal, de lo contrario no funcionará el comando*')
let thumb = img.getRandom();
let pp, ch, q, mime, buffer, media, inviteUrlch, imageBuffer;

let inviteCode
if (!text) return await m.reply(await tr(`*⚠️ Ingrese un enlace de un grupo/comunidad/canal de WhatsApp para obtener información.*`))
const MetadataGroupInfo = async (res, isInviteInfo = false) => {
let nameCommunity = await tr("no pertenece a ninguna Comunidad")
let groupPicture = await tr("No se pudo obtener")
let msgTxt1 = await tr("No encontrado")  

if (res.linkedParent) {
let linkedGroupMeta = await conn.groupMetadata(res.linkedParent).catch(e => { return null })
nameCommunity = linkedGroupMeta ? "\n" + ("`Nombre:` " + linkedGroupMeta.subject || "") : nameCommunity
}
pp = await conn.profilePictureUrl(res.id, 'image').catch(e => { return null })
inviteCode = await conn.groupInviteCode(m.chat).catch(e => { return null })
const formatParticipants = (participants) =>
participants && participants.length > 0
? participants.map((user, i) => `${i + 1}. @${user.id?.split("@")[0]}${user.admin === "superadmin" ? " (superadmin)" : user.admin === "admin" ? " (admin)" : ""}`).join("\n")
: "No encontrado"
let caption = `🆔 *${await tr("Identificador del grupo")}:*\n${res.id || msgTxt1}\n\n` +
`👑 *${await tr("Creado por")}:*\n${res.owner ? `@${res.owner?.split("@")[0]}` : msgTxt1} ${res.creation ? `el ${formatDate(res.creation)}` : msgTxt1}\n\n` +
`🏷️ *${await tr("Nombre")}:*\n${res.subject || msgTxt1}\n\n` +
`✏️ *${await tr("Nombre cambiado por")}:*\n${res.subjectOwner ? `@${res.subjectOwner?.split("@")[0]}` : msgTxt1} ${res.subjectTime ? `el ${formatDate(res.subjectTime)}` : msgTxt1}\n\n` +
`📄 *${await tr("Descripción")}:*\n${res.desc || msgTxt1}\n\n` +
`📝 *${await tr("Descripción cambiado por")}:*\n${res.descOwner ? `@${res.descOwner?.split("@")[0]}` : msgTxt1}\n\n` +
`🗃️ *${await tr("Id de la descripción")}:*\n${res.descId || msgTxt1}\n\n` +
`🖼️ *${await tr("Imagen del grupo")}:*\n${pp ? pp : groupPicture}\n\n` +
`💫 *${await tr("Autor")}:*\n${res.author || msgTxt1}\n\n` +
`🎫 *${await tr("Código de invitación")}:*\n${res.inviteCode || inviteCode || msgTxt1}\n\n` +
`⌛ *${await tr("Duración")}:*\n${res.ephemeralDuration !== undefined ? `${res.ephemeralDuration} segundos` : "Desconocido"}\n\n` +
`🛃 *${await tr("Admins")}:*\n` + (res.participants && res.participants.length > 0 ? res.participants.filter(user => user.admin === "admin" || user.admin === "superadmin").map((user, i) => `${i + 1}. @${user.id?.split("@")[0]}${user.admin === "superadmin" ? " (superadmin)" : " (admin)"}`).join("\n") : msgTxt1) + `\n\n` +
`🔰 *${await tr("Usuarios en total")}:*\n${res.size || "Cantidad no encontrada"}\n\n` +
`✨ *${await tr("Información avanzada")}* ✨\n\n🔎 ${await tr("*Comunidad vinculada al grupo:*")}\n${res.isCommunity ? "Este grupo es un chat de avisos" : `${res.linkedParent ? "`Id:` " + res.linkedParent : "Este grupo"} ${nameCommunity}`}\n\n` +
`⚠️ *${await tr("Restricciones")}:* ${res.restrict ? "✅" : "❌"}\n` +
`📢 *${await tr("Anuncios")}:* ${res.announce ? "✅" : "❌"}\n` +
`🏘️ *${await tr("¿Es comunidad?")}:* ${res.isCommunity ? "✅" : "❌"}\n` +
`📯 *${await tr("¿Es anuncio de comunidad?")}:* ${res.isCommunityAnnounce ? "✅" : "❌"}\n` +
`🤝 *${await tr("Tiene aprobación de miembros")}:* ${res.joinApprovalMode ? "✅" : "❌"}\n` +
`🆕 *${await tr("Puede Agregar futuros miembros")}:* ${res.memberAddMode ? "✅" : "❌"}\n\n` 
return caption.trim()
}
        
const inviteGroupInfo = async (groupData) => {
const { id, subject, subjectOwner, subjectTime, size, creation, owner, desc, descId, linkedParent, restrict, announce, isCommunity, isCommunityAnnounce, joinApprovalMode, memberAddMode, ephemeralDuration } = groupData
let nameCommunity = await tr("no pertenece a ninguna Comunidad")
let groupPicture = await tr("No se pudo obtener")
if (linkedParent) {
let linkedGroupMeta = await conn.groupMetadata(linkedParent).catch(e => { return null })
nameCommunity = linkedGroupMeta ? "\n" + ("`Nombre:` " + linkedGroupMeta.subject || "") : nameCommunity
}
pp = await conn.profilePictureUrl(id, 'image').catch(e => { return null })
const formatParticipants = (participants) =>
participants && participants.length > 0
? participants.map((user, i) => `${i + 1}. @${user.id?.split("@")[0]}${user.admin === "superadmin" ? " (superadmin)" : user.admin === "admin" ? " (admin)" : ""}`).join("\n")
: msgTxt1

let caption = `🆔 *${await tr("Identificador del grupo")}:*\n${id || msgTxt1}\n\n` +
`👑 *${await tr("Creado por")}:*\n${owner ? `@${owner?.split("@")[0]}` : msgTxt1} ${creation ? `el ${formatDate(creation)}` : msgTxt1}\n\n` +
`🏷️ *${await tr("Nombre")}:*\n${subject || msgTxt1}\n\n` +
`✏️ *${await tr("Nombre cambiado por")}:*\n${subjectOwner ? `@${subjectOwner?.split("@")[0]}` : msgTxt1} ${subjectTime ? `el ${formatDate(subjectTime)}` : msgTxt1}\n\n` +
`📄 *${await tr("Descripción")}:*\n${desc || msgTxt1}\n\n` +
`💠 *${await tr("ID de la descripción")}:*\n${descId || msgTxt1}\n\n` +
`🖼️ *${await tr("Imagen del grupo")}:*\n${pp ? pp : groupPicture}\n\n` +
`🏆 *${await tr("Miembros destacados")}:*\n${formatParticipants(groupData.participants)}\n\n` +
`👥 *${await tr("Destacados total")}:*\n${size || msgTxt1}\n\n` +
`✨ *${await tr("Información avanzada")}* ✨\n\n🔎 *${await tr("Comunidad vinculada al grupo")}:*\n${isCommunity ? await tr("Este grupo es un chat de avisos") : `${linkedParent ? "`Id:` " + linkedParent : await tr("Este grupo")} ${nameCommunity}`}\n\n` +
`📢 *${await tr("Anuncios")}:* ${announce ? "✅ Yes" : "❌ No"}\n` +
`🏘️ *${await tr("¿Es comunidad?")}:* ${isCommunity ? "✅ Yes" : "❌ No"}\n` +
`📯 *${await tr("¿Es anuncio de comunidad?")}:* ${isCommunityAnnounce ? "✅" : "❌"}\n` +
`🤝 *${await tr("Tiene aprobación de miembros")}:* ${joinApprovalMode ? "✅" : "❌"}\n`
return caption.trim()
}

let info
try {
let res = text ? null : await conn.groupMetadata(m.chat)
info = await MetadataGroupInfo(res) // Si el bot esta en el grupo
console.log('Método de metadatos')
} catch {
const inviteUrl = text?.match(/(?:https:\/\/)?(?:www\.)?(?:chat\.|wa\.)?whatsapp\.com\/(?:invite\/|joinchat\/)?([0-9A-Za-z]{22,24})/i)?.[1]
//if (!inviteUrl &&) return await conn.reply(m.chat, "*Verifique que sea un enlace de grupo o comunidad de WhatsApp.*", m)
let inviteInfo
if (inviteUrl) {
try {
inviteInfo = await conn.groupGetInviteInfo(inviteUrl)
info = await inviteGroupInfo(inviteInfo) // Para cualquier enlace de grupo/comunidad
console.log(info)
console.log('Método de enlace')    
} catch (e) {
m.reply('Grupo no encontrado')
return
}}}
if (info) {
await conn.sendMessage(m.chat, { text: info, contextInfo: {
mentionedJid: conn.parseMention(info),
externalAdReply: {
title: "🔰 Inspector de Grupos",
body: packname,
thumbnailUrl: pp ? pp : thumb,
sourceUrl: args[0] ? args[0] : inviteCode ? `https://chat.whatsapp.com/${inviteCode}` : md,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: true
}}}, { quoted: fkontak })
} else {
// Manejo de enlaces de canales
let newsletterInfo
if (!channelUrl) return await conn.reply(m.chat, "*Verifique que sea un enlace de canal de WhatsApp.*", m)
if (channelUrl) {
try {
newsletterInfo = await conn.newsletterMetadata("invite", channelUrl).catch(e => { return null })
if (!newsletterInfo) return await conn.reply(m.chat, await tr("*No se encontró información del canal.* Verifique que el enlace sea correcto."), m)       
let caption = await tr("*Inspector de enlaces de Canales*\n\n") + processObject(newsletterInfo, "", newsletterInfo?.preview)
if (newsletterInfo?.preview) {
pp = getUrlFromDirectPath(newsletterInfo.preview)
} else {
pp = thumb
}
if (channelUrl && newsletterInfo) {
await conn.sendMessage(m.chat, { text: caption, contextInfo: {
mentionedJid: conn.parseMention(caption),
externalAdReply: {
title: "📢 Inspector de Canales",
body: packname,
thumbnailUrl: pp,
sourceUrl: args[0],
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: true
}}}, { quoted: fkontak })}
newsletterInfo.id ? conn.sendMessage(m.chat, { text: newsletterInfo.id }, { quoted: null }) : ''
} catch (e) {
reportError(e)
}}}}
handler.help = ["superinspect", "inspect"]
handler.tags = ['tools'];
handler.command = /^(superinspect|inspect|revisar|inspeccionar)$/i;
handler.register = true;

export default handler;

function formatDate(n, locale = "es", includeTime = true) {
if (n > 1e12) {
n = Math.floor(n / 1000)  // Convertir de milisegundos a segundos
} else if (n < 1e10) {
n = Math.floor(n * 1000)  // Convertir de segundos a milisegundos
}
const date = new Date(n)
if (isNaN(date)) return "Fecha no válida"
// Formato de fecha: día/mes/año
const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' }
const formattedDate = date.toLocaleDateString(locale, optionsDate)
if (!includeTime) return formattedDate
// horas, minutos y segundos
const hours = String(date.getHours()).padStart(2, '0')
const minutes = String(date.getMinutes()).padStart(2, '0')
const seconds = String(date.getSeconds()).padStart(2, '0')
const period = hours < 12 ? 'AM' : 'PM'
const formattedTime = `${hours}:${minutes}:${seconds} ${period}`
return `${formattedDate}, ${formattedTime}`
}

function formatValue(key, value, preview) {
switch (key) {
case "subscribers":
return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "No hay suscriptores"
case "creation_time":
case "nameTime":
case "descriptionTime":
return formatDate(value)
case "description": 
case "name":
return value || "No hay información disponible"
case "state":
switch (value) {
case "ACTIVE": return "Activo"
case "GEOSUSPENDED": return "Suspendido por región"
case "SUSPENDED": return "Suspendido"
default: return "Desconocido"
}
case "reaction_codes":
switch (value) {
case "ALL": return "Todas las reacciones permitidas"
case "BASIC": return "Reacciones básicas permitidas"
case "NONE": return "No se permiten reacciones"
default: return "Desconocido"
}
case "verification":
switch (value) {
case "VERIFIED": return "Verificado"
case "UNVERIFIED": return "No verificado"
default: return "Desconocido"
}
case "mute":
switch (value) {
case "ON": return "Silenciado"
case "OFF": return "No silenciado"
case "UNDEFINED": return "Sin definir"
default: return "Desconocido"
}
case "view_role":
switch (value) {
case "ADMIN": return "Administrador"
case "OWNER": return "Propietario"
case "SUBSCRIBER": return "Suscriptor"
case "GUEST": return "Invitado"
default: return "Desconocido"
}
case "picture":
if (preview) {
return getUrlFromDirectPath(preview)
} else {
return "No hay imagen disponible"
}
default:
return value !== null && value !== undefined ? value.toString() : "No hay información disponible"
}}

function newsletterKey(key) {
return _.startCase(key.replace(/_/g, " "))
.replace("Id", "🆔 Identificador")
.replace("State", "📌 Estado")
.replace("Creation Time", "📅 Fecha de creación")
.replace("Name Time", "✏️ Fecha de modificación del nombre")
.replace("Name", "🏷️ Nombre")
.replace("Description Time", "📝 Fecha de modificación de la descripción")
.replace("Description", "📜 Descripción")
.replace("Invite", "📩 Invitación")
.replace("Handle", "👤 Alias")
.replace("Picture", "🖼️ Imagen")
.replace("Preview", "👀 Vista previa")
.replace("Reaction Codes", "😃 Reacciones")
.replace("Subscribers", "👥 Suscriptores")
.replace("Verification", "✅ Verificación")
.replace("Viewer Metadata", "🔍 Datos avanzados")
}

function processObject(obj, prefix = "", preview) {
let caption = ""
Object.keys(obj).forEach(key => {
const value = obj[key]
if (typeof value === "object" && value !== null) {
if (Object.keys(value).length > 0) {
const sectionName = newsletterKey(prefix + key)
caption += `\n*\`${sectionName}\`*\n`
caption += processObject(value, `${prefix}${key}_`)
}} else {
const shortKey = prefix ? prefix.split("_").pop() + "_" + key : key
const displayValue = formatValue(shortKey, value, preview)
const translatedKey = newsletterKey(shortKey)
caption += `- *${translatedKey}:*\n${displayValue}\n\n`
}})
return caption.trim()
}

