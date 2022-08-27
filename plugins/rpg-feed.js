let handler = async (m, { conn, args, usedPrefix }) => {
    let type = (args[0] || '').toLowerCase()
    let fox = global.db.data.users[m.sender].fox
    let horse = global.db.data.users[m.sender].horse
    let kucing = global.db.data.users[m.sender].kucing
    switch (type) {
        case 'zorro':
            if (fox == 0) return m.reply('*Aún no tienes un 🦊zorro de mascota*')
            if (fox == 5) return m.reply('*Tu mascota es nvl max*')
            let __waktur = (new Date - global.db.data.users[m.sender].foxlastclaim)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - global.db.data.users[m.sender].foxlastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakfox += 20
                    global.db.data.users[m.sender].foxlastclaim = new Date * 1
                    conn.reply(m.chat, `Alimentado con éxito a la mascota 🦊${type}`, m)
                    if (fox > 0) {
                        let naiklvl = ((fox * 100) - 1)
                        if (global.db.data.users[m.sender].anakfox > naiklvl) {
                            global.db.data.users[m.sender].fox += 1
                            global.db.data.users[m.sender].anakfox -= (fox * 100)
                            conn.reply(m.chat, `*Felicidades tu 🦊zorro mascota subio de nivel*`, m)
                        }
                    }
                } else m.reply(`La comida de tu mascota no es suficiente`)
            } else m.reply(`Tu mascota está llena, prueba a darle de comer en *${waktur}*`)
            break
        case 'caballo':
            if (horse == 0) return m.reply('*Aún no tienes un 🐴Caballo de mascota*')
            if (horse == 5) return m.reply('*Tu mascota es nvl max*')
            let __waktuk = (new Date - global.db.data.users[m.sender].horselastclaim)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - global.db.data.users[m.sender].horselastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakhorse += 20
                    global.db.data.users[m.sender].horselastclaim = new Date * 1
                    conn.reply(m.chat, `Alimentado con éxito a la mascota 🐴${type}`, m)
                    if (horse > 0) {
                        let naiklvl = ((horse * 100) - 1)
                        if (global.db.data.users[m.sender].anakhorse > naiklvl) {
                            global.db.data.users[m.sender].horse += 1
                            global.db.data.users[m.sender].anakhorse -= (horse * 100)
                            conn.reply(m.chat, `*Felicitaciones tu 🐴caballo mascota subio de nivel*`, m)
                        }
                    }
                } else m.reply(`La comida de tu mascota no es suficiente`)
            } else m.reply(`Tu mascota está llena, prueba a darle de comer en *${waktuk}*`)
            break
        case 'gato':
            if (kucing == 0) return m.reply('*Aún no tienes un 🐱gato mascota*')
            if (kucing == 5) return m.reply('*Tu mascota es nvl max*')
            let __waktu = (new Date - global.db.data.users[m.sender].kucinglastclaim)
            let _waktu = (600000 - __waktu)
            let waktu = clockString(_waktu)
            if (new Date - global.db.data.users[m.sender].kucinglastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakkucing += 20
                    global.db.data.users[m.sender].kucinglastclaim = new Date * 1
                    conn.reply(m.chat, `Alimentado con éxito a la mascota 🐱${type}`, m)
                    if (kucing > 0) { 
                        let naiklvl = ((kucing * 100) - 1)
                        if (global.db.data.users[m.sender].anakkucing > naiklvl) {
                            global.db.data.users[m.sender].kucing += 1
                            global.db.data.users[m.sender].anakkucing -= (kucing * 100)
                            conn.reply(m.chat, `*Felicitaciones tu 🐱gato subio de nivel*`, m)
                        }
                    }
                } else m.reply(`La comida de tu mascota no es suficiente`)
            } else m.reply(`Tu mascota está llena, prueba a darle de comer en *${waktu}*`)
            break
        default:
            return conn.reply(m.chat, `${usedPrefix}feed [ gato | zorro | caballo ]\nEjemplos de uso: *${usedPrefix}feed gato*`, m)
    }
}
handler.help = ['feed [pet type]']
handler.tags = ['rpg']
handler.command = /^(feed(ing)?)$/i

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
