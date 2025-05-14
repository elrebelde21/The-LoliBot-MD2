import FormData from "form-data"
import Jimp from "jimp"

const handler = async (m, {conn, usedPrefix, command}) => {
try {    
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ""

if (!mime.startsWith('image')) throw await tr(`⚠️ Responde a una imagen!`)
await m.react('⌛')

let img = await q.download?.()
if (!img) throw await tr(`⚠️ No se pudo descargar la imagen. Por favor intenta nuevamente.`)
let pr = await remini(img, "enhance")
    
if (!pr) throw await tr(`⚠️ Hubo un problema al procesar la imagen. Intenta nuevamente más tarde.`)
await conn.sendFile(m.chat, pr, 'thumbnail.jpg', await tr("*Aqui tiene sus imagen en HD*"), m, null, fake)
await m.react('✅')
} catch (e) {
handler.limit = 0
await m.react('❌')
console.error(e)
m.reply(`⚠️ Ocurrió un error: ${e.message}`)
}}
handler.help = ["hd"]
handler.tags = ["tools"]
handler.command = ["remini", "hd", "enhance"]
handler.register = true 
handler.limit = 1
export default handler

async function remini(imageData, operation) {
  return new Promise(async (resolve, reject) => {
    const availableOperations = ["enhance", "recolor", "dehaze"]
    if (!availableOperations.includes(operation)) {
      operation = availableOperations[0]
    }
    
    const baseUrl = "https://inferenceengine.vyro.ai/" + operation + ".vyro"
    const formData = new FormData()
    formData.append("image", Buffer.from(imageData), {filename: "enhance_image_body.jpg", contentType: "image/jpeg"})
    formData.append("model_version", 1, {"Content-Transfer-Encoding": "binary", contentType: "multipart/form-data; charset=utf-8"})

    formData.submit({
      url: baseUrl,
      host: "inferenceengine.vyro.ai",
      path: "/" + operation,
      protocol: "https:",
      headers: {
        "User-Agent": "okhttp/4.9.3",
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip"
      }
    }, function (err, res) {
      if (err) {
        reject(new Error(`Error en la solicitud a la API: ${err.message}`))
      }
      const chunks = []
      res.on("data", function (chunk) { chunks.push(chunk) })
      res.on("end", function () { resolve(Buffer.concat(chunks)) })
      res.on("error", function (err) {
        reject(new Error(`Error al recibir la respuesta: ${err.message}`))
      })
    })
  })
}
