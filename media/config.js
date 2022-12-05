const fs = require('fs')
const chalk = require('chalk')


global.owner = ['6285878178292'] //Masukin nomor mu
global.ownernomer = "6285878178292" //Masukin nomor mu
global.premium = ['6285878178292'] //Masukin nomor mu
global.namanya = 'KatsuXD Official' //Masukin nama mu
global.fakename = '© Katsuu' //Masukin nama mu
global.botname = 'SIMPEL BOT' //Masukin nama bot kamu
global.packname = 'Sticker By' //Gakusah di ubah kalau mau di ubah Monggo 
global.author = 'Katsuu' //Monggo kalau mau ubah
global.sessionName = 'session' //Gak usah di ubah
global.jumlha = '999' //Gak usah di ubah
global.jumhal = '100000000000000' //Gak usah di ubah
global.jumlah = '1000000000' //Gak usah di ubah
global.prefa = ['','!','.','#','&'] //Gak usah di ubah
global.sp = '' 
global.simbol1 = '々' //Monggo kalau mau ubah
global.simbol2 = '◩' //Monggo kalau mau ubah
global.simbol3 = '▣' //Monggo kalau mau ubah
global.gaya01 = '🎫' //Monggo kalau mau ubah
global.gaya02 = '🎟️' //Monggo kalau mau ubah
global.gaya03 =  '⚔️' //Monggo kalau mau ubah
global.gayar = '❏' //Monggo kalau mau ubah
global.gayas = '❏' //Monggo kalau mau ubah
global.scmu = 'Sc?\nEmang mau buat apa?' //Monggo kalau mau ubah
global.githubmu = 'https://github.com/KatsuXD55' //Isi nama github mu
global.ytmu = 'https://youtube.com/@katsuxdofficial' //Gak usah di ubah
global.ytvmu = 'https://youtube.com/shorts/Mo0cwJa3Ntg?feature=share' //Gak usah di ubah
global.mess = {
    success: '✅Done',
    admin: '_Fitur Hanya Dapat Di Gunakan Oleh Admin Group!_',
    botAdmin: '_Bot Harus Menjadi Admin Terdahulu!_',
    premium: '_Fitur Hanya Dapat Di Gunakan User Premium!_',
    ban: '_Kamu Telah Di Banned Oleh Bot, Silakan Hubungi Owner Untuk Di Buka!_',
    owner: '_Fitur Hanya Dapat Di Gunakan Oleh Owner Bot!_',
    group: '_Fitur Hanya Dapat Di Gunakan Di Dalam Group!_',
    private: '_Fitur Hanya Dapat Di Gunakan Di Chat Pribadi!_',
    bot: '_Fitur Hanya Dapat Di Gunakan User Bot!_',
    wait: '_Loading . . ._',
    errapi: '_Error Mungkin Apikey Tidak Valid!_',
    errmor: '_Error Kesalahan Sistem_',
}

global.fake = fs.readFileSync('./media/image/katsu.jpg')
global.thumb = fs.readFileSync('./media/image/katsu2.jpg')

global.apidhaniofc = `https://api-dhaniofc.herokuapp.com`
global.dhakey = `exptgl30`



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
