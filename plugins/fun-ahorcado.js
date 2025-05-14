const palabras = ["gato", "perro", "pájaro", "elefante", "tigre", "ballena", "mariposa", "tortuga", "conejo", "rana", "pulpo", "ardilla", "jirafa", "cocodrilo", "pingüino", "delfín", "serpiente", "hámster", "mosquito", "abeja", "Porno", "negro", "television", "computadora", "botsito", "reggaeton", "economía", "electrónica", "facebook", "WhatsApp", "Instagram", "tiktok", "milanesa", "presidente", "bot", "películas", 
]

const intentosMaximos = 6
const gam = new Map()

function elegirPalabraAleatoria() {
return palabras[Math.floor(Math.random() * palabras.length)]
}

function ocultarPalabra(palabra, letrasAdivinadas) {
let palabraOculta = "";
for (const letra of palabra) {
if (letrasAdivinadas.includes(letra)) {
palabraOculta += letra + " "; 
} else {
palabraOculta += "_ "; 
}}
return palabraOculta.trim(); 
}


function mostrarAhorcado(intentos) {
const dibujo = [
" ____",
" |  |",
intentos < 6 ? " |  O" : " |",
intentos < 5 ? " | /" : intentos < 4 ? " | / " : intentos < 3 ? " | / \\" : intentos < 2 ? " | / \\ " : " |",
intentos < 2 ? "_|_" : " |",
]
return dibujo.slice(0, intentosMaximos - intentos).join("\n")
}

function juegoTerminado(sender, mensaje, palabra, letrasAdivinadas, intentos) {
if (intentos === 0) {
gam.delete(sender);
return `❌ ${msgGame}: ${palabra}\n\n${mostrarAhorcado(intentos)}`;
} else if (!mensaje.includes("_")) {
let expGanada = Math.floor(Math.random() * 300); //fáciles
if (palabra.length >= 8) {
expGanada = Math.floor(Math.random() * 3500); //difíciles
}
global.db.data.users[sender].exp += expGanada;
gam.delete(sender);
return `${msgGame} "${palabra}".\n\n*${msgGame3}* ${expGanada} Exp.`;
} else {
return `${mostrarAhorcado(intentos)}\n\n${mensaje}`;
}}

let handler = async (m, { conn }) => {
let msgGame = await tr("¡Perdiste! La palabra correcta era")
let msgGame2 = await tr("¡Que pro Ganaste 🥳! Adivinaste la palabra")
let msgGame3 = await tr("Has ganado:")

let users = global.db.data.users[m.sender]
if (gam.has(m.sender)) {
return conn.reply(m.chat, await tr("Ya tienes un juego en curso. ¡Termina ese primero!"), m)
}
let palabra = elegirPalabraAleatoria()
let letrasAdivinadas = []
let intentos = intentosMaximos
let mensaje = ocultarPalabra(palabra, letrasAdivinadas)
gam.set(m.sender, { palabra, letrasAdivinadas, intentos })
let text = `${await tr("¡Adivina la palabra:")}\n\n${mensaje}\n\n${await tr("Intentos restantes")}: ${intentos}`
conn.reply(m.chat, text, m)
}

handler.before = async (m, { conn }) => {

let users = global.db.data.users[m.sender]
let juego = gam.get(m.sender)
if (!juego) return
let { palabra, letrasAdivinadas, intentos } = juego
if (m.text.length === 1 && m.text.match(/[a-zA-Z]/)) {
let letra = m.text.toLowerCase()
if (!letrasAdivinadas.includes(letra)) {
letrasAdivinadas.push(letra)
if (!palabra.includes(letra)) {
intentos--
}}
let mensaje = ocultarPalabra(palabra, letrasAdivinadas)
let respuesta = juegoTerminado(m.sender, mensaje, palabra, letrasAdivinadas, intentos)
if (respuesta.includes("¡Perdiste!") || respuesta.includes("¡Ganaste!")) {
conn.reply(m.chat, respuesta, m)
} else {
gam.set(m.sender, { palabra, letrasAdivinadas, intentos })
conn.reply(m.chat, respuesta + `\n\n${await tr("Intentos restantes")}: ${intentos}`, m)
}} else {
let mensaje = ocultarPalabra(palabra, letrasAdivinadas);
let respuesta = juegoTerminado(m.sender, mensaje, palabra, letrasAdivinadas, intentos)
conn.reply(m.chat, respuesta, m)
gam.delete(m.sender)
}}
handler.help = ['ahorcado']
handler.tags = ['game']
handler.command = ['ahorcado']
handler.register = true
export default handler

