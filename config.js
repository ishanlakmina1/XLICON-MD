const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94715947925"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'ishanlakmina6@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94715947925' 
global.devs = '94715947925';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0IwTVgwSXg0Y00rcEdndW00aEpFOVI1VklZNWQ4TFZOS3lUVldsQ1BuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXdvYlBuaFZGRnczaWE0NWtiaFo0djBKdFpKZ1djMmEzZFp6b1A4eFVuZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0UFM5UldtYVZIZHdGR1ZrVkQzK3dZN3JKY2RUMEpabVczNGhSZXdBa1VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4cnRsQmFxbSt0alZXcXBlb2FzVHNhb0RLeGNpcXlHNlVHYnhYTHhZQ1ZzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldFTDhsYnM5YmpISjlBamdLWkQ3bSs4dEdUSi9LdWlpa2xBbi9IRlJpR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImljSmQvbnZ0VVIzTjdVZVNab3RXajc0enA5ZDJ3WXJ2ankxelIzNGpYZ3M9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxTlZrNFlTUVA4ODdmbEhKcWNFRWI5WTBXY1FzQXU1ZTVVZDlzNm9kNi9yTjJCd1BzUGk0Z1BzODdQUU1rd2c1elh0cjY4ZTNGaS9IN3VUSUJTY2pqQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjAsImFkdlNlY3JldEtleSI6IkNqUTJ1Z040UEZGR09sWVp4MlVDQ1d4azlLdjdoUkl5ek0yTEpkZHNibjQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InA1OThUdm5nUjlhMi1FWDVkZWdQUmciLCJwaG9uZUlkIjoiY2ViODZkNmQtZWEwMC00YWQxLWJlM2QtMDgyZjRmYWFhYzU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRNalNuOVh6OG1rbjNOdkszT0RwbEx2czVpUT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEg5Mk9rbXB6QmxuVzZINFk2S2JKTEpjUmZzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDNPc3pNUW9xYU5xd1lZQnc9PSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvMFdydDJDdjZucVJvRVpwZklUT1Q2bE9TRXNPVjY3Y01pUmkvcVpyZFNZPSIsImFjY291bnRTaWduYXR1cmUiOiJHd3FEdVpnQlRhNEFaZUI4dUVRODNQYWFRcGJURTg3QU5tdjRsbVNjV2FQMFpMbkQrR25wQmhkV2RsaUNzR1BZTGFmdzdtVWh1RnZQeXNhKzBYV09CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNC8yL2lkSzlCbFo5Q0psbmhkblJGRzRsVlBmK1g3Zlc2b3RHZHlnSHI0T2lUOXRXOHJISUtxbDgrZTV5UUtvT01UZC9zSnVNbklFR0pMZzI4MHVLamc9PSJ9LCJtZSI6eyJpZCI6Ijk0NzE1OTQ3OTI1OjE3QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzE1OTQ3OTI1OjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFORnE3ZGdyK3A2a2FCR2FYeUV6aytwVGtoTERsZXUzRElrWXY2bWEzVW0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDEwMDgxNjZ9
",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '𝙸𝚂𝙷𝙰𝙽',
  packname:  process.env.PACK_NAME || '𝙸𝚂𝙷𝙰𝙽 𝙻𝙰𝙺𝙼𝙸𝙽𝙰',
   
  botname:   process.env.BOT_NAME === undefined ? "𝙸𝚂𝙷𝙰𝙽-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝙸𝚂𝙷𝙰𝙽 𝙻𝙰𝙺𝙼𝙸𝙽𝙰' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'xnxx.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hi Im Alive' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
