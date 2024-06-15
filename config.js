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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233249914269";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_48_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgODAsXG4gICAgICAgIDUzLFxuICAgICAgICA2MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE5LFxuICAgICAgICA0OCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICA3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNixcbiAgICAgICAgMTYwLFxuICAgICAgICAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI4LFxuICAgICAgICA3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5LFxuICAgICAgICA3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJra3pob1J6NVJ5bFRtZGowcnlSRmlOblJpbVBlSXB5SHhKTUpqNTh3TFdFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqdTF4bk8yRVFJaXNnTlJsUktVYnpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY0ODgyNDRkLWNjMzQtNGE0NS1hMWQ0LWY4YWQxOWMxZDViMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICAxNTEsXG4gICAgICAxMjYsXG4gICAgICAxOCxcbiAgICAgIDE3OCxcbiAgICAgIDEyOSxcbiAgICAgIDM0LFxuICAgICAgMTU3LFxuICAgICAgMTI0LFxuICAgICAgMjQwLFxuICAgICAgOTksXG4gICAgICAxNDksXG4gICAgICAyNTAsXG4gICAgICAxODQsXG4gICAgICA3MSxcbiAgICAgIDE3OSxcbiAgICAgIDI0NyxcbiAgICAgIDE4NixcbiAgICAgIDU4LFxuICAgICAgODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICAxNDgsXG4gICAgICAyMzAsXG4gICAgICAyMzYsXG4gICAgICAxOSxcbiAgICAgIDU1LFxuICAgICAgMTAwLFxuICAgICAgMTY1LFxuICAgICAgMTk2LFxuICAgICAgMjIzLFxuICAgICAgMTE3LFxuICAgICAgMjEyLFxuICAgICAgMTY4LFxuICAgICAgODQsXG4gICAgICAyMjEsXG4gICAgICAyMDksXG4gICAgICAxNzMsXG4gICAgICA0NCxcbiAgICAgIDEzNixcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHSFY5MjdFQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQ5OTE0MjY5OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPLkQuUCBHcmFwaGl4c1wiLFxuICAgIFwibGlkXCI6IFwiMTUyNjU2MTA2NTQxMDY4OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWo2OTlvREVJM1d0TE1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4NGRxT2NtWks4QW1ucUNrbUZPc29wK3cxWWgvd2FOekZkRkhGY1UvQkZBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNmYVBiU1RuRFNia0RmTUFWMDBGU2JxRmRrVS9GdXRaaUhnVXh2S1R0WEpxRVc5a3Zrcm5HS3I3YjVUSTc2UUFQY1owUm0ybVVMbEl0L0VRbFNJa2pnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkI2WHNFMXFCTFNTWmNFbWpRYlE4dndxNmxPS090UlRBNS9kelBXdkZnRStaN3RjN3puay9WTmJOOXJQVmRoT2FhcHNxbitBRmpmeVN6dEYyY3R4K0JnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0OTkxNDI2OTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODQzMDQ4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNZMVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1kxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaGljbmJuV0V6eDFQVjRrK2hpaGlqam1UYldLaTFIK040emZheUZwSmI3RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5OTYwMTUzNjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODA4MzE0MTg2M1wifSIKfQ=="  // PUT your SESSION_ID 


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
