const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233206818255";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_43_06_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MixcbiAgICAgICAgMTE0LFxuICAgICAgICA0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMyxcbiAgICAgICAgODEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQyLFxuICAgICAgICAzNixcbiAgICAgICAgNzksXG4gICAgICAgIDMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxODksXG4gICAgICAgIDU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDczLFxuICAgICAgICAxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTczLFxuICAgICAgICA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDgyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRC9GMzVVbGtaUk94Skl3WVdmYlQxT2hGV2hpb294UU53U2hMWmtqTThNbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV3FIamxpSGVSWWlvYktiSnFYcTdaQVwiLFxuICBcInBob25lSWRcIjogXCIxNjU5NDk5ZS0yZGQzLTQ1YzktOWQ2Yi1kZGQzMjRhZjRjNzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICA4MSxcbiAgICAgIDEwOCxcbiAgICAgIDEzMyxcbiAgICAgIDI0NCxcbiAgICAgIDcwLFxuICAgICAgODgsXG4gICAgICAyNTUsXG4gICAgICAxNDMsXG4gICAgICAxMzQsXG4gICAgICAxNjUsXG4gICAgICAyNTAsXG4gICAgICAxMjMsXG4gICAgICAzNyxcbiAgICAgIDIxNSxcbiAgICAgIDYwLFxuICAgICAgNzYsXG4gICAgICAxMzEsXG4gICAgICAxNDYsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDIxMyxcbiAgICAgIDUzLFxuICAgICAgMTM0LFxuICAgICAgMTE3LFxuICAgICAgMTM5LFxuICAgICAgMTkyLFxuICAgICAgMjA1LFxuICAgICAgMTI4LFxuICAgICAgMTc1LFxuICAgICAgMjI3LFxuICAgICAgMjgsXG4gICAgICAyMDUsXG4gICAgICAxMDgsXG4gICAgICA4NSxcbiAgICAgIDExMixcbiAgICAgIDE5OSxcbiAgICAgIDE2MSxcbiAgICAgIDkzLFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMks3V0RMWTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzIwNjgxODI1NToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQxNjAxMDQ1MjIxNDQ2OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01ycnZld0JFSkNwb2JNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK2lmQy9PTVk1MDlGN0J0VHpyVDVJMFRNeHdaR2ZmNFU3SVI0SEtsMURCND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmTVUzUy93bS9lMTNJKzhlb0pQMHREaVRtc2gweklmNDZuVEtkd01xbGswV25GdnBDOXVqWTJ2blpQYlIzWUViYW9Sc205QTFBY3BtbHVTV1dpU29ndz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvamdLOHdxSnh6cytiYmdKZnJiZmtpT1JoUHUwOHRsK2k1c3kwMkx6K3ZQU2JOL1BLN2thY1U3M0I5TUpXaE1jd3dqWVhiTjZ1cThySkFwRTdQUzlodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyMDY4MTgyNTU6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODExMzQyOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
