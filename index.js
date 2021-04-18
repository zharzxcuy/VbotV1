//CASE AUTHOR
//YOGI {YOGI CHANNEL} 
//IFIN
//DAPHUY {DAPPHUY CHANNEL} 
//ZX {ZHAXC CHANNEL} 
//Lol Human {Lol Api Human} 
//ONLYDEVCTY {API} 

//wa connection
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const request = require('request')
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { snk } = require('./lib/snk')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const imgbb = require('imgbb-uploader')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./zharbot')

//apikey
const LeysApi = 'apikeyluapaan' //Onlydev,lolhuman,zekais,dappuhy//

//kontak
const vcard1 = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN:IFIN\n' //ganti nama lu! 
              + 'ORG: ZX.BOT;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=6285790763534:+62 85790763534\n'  //ganti nomor lu! 
              + 'END:VCARD'
             
//settings            
prefix = '#'
blocked = []   
limitawal = '99999'
memberlimit = 1
cr = '*ZX.BOT*'

fake = 'ZX.BOT'
numbernye = '0'
NamaOwner = 'ZX.BOT'
NamaBot = 'ZX.BOT'

//owner number
const ownerNumber = ["6285790763534@s.whatsapp.net","6285790763534@s.whatsapp.net"]   //ganti nomor lu! 
       
//file json
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const antifirtex = JSON.parse(fs.readFileSync('./lib/antifirtex.json'))
//tambahan
 const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
//function
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }


        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
		
//function
const zharzx = new WAConnection()
zharzx.logger.level = 'warn'
console.log(banner.string)
   zharzx.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('(+)','white'), color('ZXc','red'), color('(+)','white'), color(' SQAN CODENYA','aqua'), color('ZXBOT','yellow'))
})

	zharzx.on('credentials-updated', () => {
		fs.writeFileSync('./zharbotzx.json', JSON.stringify(zharzx.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'info!')
	})
	fs.existsSync('./zharbotzx.json') && zharzx.loadAuthInfo('./zharbotzx.json')
	zharzx.on('connecting', () => {
		start('2', color('[ ! ]Scan Codenya Ngab','aqua'))
	})
	zharzx.on('open', () => {
		success('2', color('[ ! ]Tersambung','red'))
	})
	zharzx.connect({timeoutMs: 30*1000})
    
          zharzx.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await zharzx.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await zharzx.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			teks = `*Hallo* @${num.split('@')[0]}\n*
┏━━━━━━━━━━━━━━━
┃「 *_ɪɴᴛʀᴏ_* 」
┃${mdata.subject}\n*
┃━━━━━━━━━━━━━━━
┠⊷️ *ɴᴀᴍᴀ* :
┠⊷️ *ᴜᴍᴜʀ* :
┠⊷️ *ʜᴏʙʙʏ* :
┠⊷️ *ɢᴇɴᴅᴇʀ* :
┠⊷️ *ᴀꜱᴀʟ ᴋᴏᴛᴀ* :
┗━━━━━━━━━━━━━━━
 @${num.split('@')[0]} 🗣`
 
				let buff = await getBuffer(ppimg)
				zharzx.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await zharzx.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `┏━━━━━━━━━━━━━━━
┠⊷️ *ASEK ADA YANG OUT BISSMILLAH BACAYASIN*
┗━━━━━━━━━━━━━━━
* @${num.split('@')[0]}\n━━⊱ ❰ *SELAMAT JALAN AKU DAPAT BERKAT NASI* ❱ ⊰━━`
				let buff = await getBuffer(ppimg)
				zharzx.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}

	})
	zharzx.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	zharzx.on('message-new', async (mek) => {
		try {
		
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const testing = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = zharzx.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = zharzx.contacts[sender] != undefined ? zharzx.contacts[sender].vname || zharzx.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await zharzx.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
		    const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
			const isBanned = ban.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				zharzx.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				zharzx.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? zharzx.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : zharzx.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    zharzx.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			zharzx.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    zharzx.sendMessage(from, audio, mp3, {quoted:mek})
		    }
	        /*****************END SCURITY FEATURE ********/

			
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return zharzx.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            zharzx.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        zharzx.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    zharzx.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     	
        
      
            //function balance
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
          
// ANTI LINK GRUP
               	       if (messagesLink.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        zharzx.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes(",izinkak")) return reply("LIHAT ATURAN GRUP KAGA ")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link, siap siap kamu di kick`)
		        setTimeout( () => {
			        zharzx.groupRemove(from, [kic]).catch((e)=>{reply(`*ZXBOT~ HARUS JADI ADMINâ—*`)})
		        }, 2000)
		        setTimeout( () => {
			        zharzx.updatePresence(from, Presence.composing)
			        reply("Bismillah")
		        }, 1000)
		        setTimeout( () => {
			        zharzx.updatePresence(from, Presence.composing)
			        reply("Nice Shot")
			        }, 0)
		  }
		  
           if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`hmmm...`)
						setTimeout( () => {
 	                           zharzx.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								zharzx.updatePresence(from, Presence.composing)
								reply("byee")
							}, 4000)
								setTimeout( () => {
								zharzx.updatePresence(from, Presence.composing)
								reply("awokaowkaowk")
							}, 3000)
								setTimeout( () => {
								zharzx.updatePresence(from, Presence.composing)
								reply("sehat sehat semua ya")
							}, 2000)
								setTimeout( () => {
								zharzx.updatePresence(from, Presence.composing)
								reply("gw keluar ye")
							}, 1000)
								setTimeout( () => {
								zharzx.updatePresence(from, Presence.composing)
								reply(`sorry ngab member minimal ${memberlimit}`)
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 
        	if (bad.includes(messagesLink)) {
		if (!isGroup) return
		if (isGroupAdmins) return reply(`*${pushname}* ᴀᴅᴀʟᴀʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ`)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*sᴀʏᴏɴᴀʀᴀ ʙᴇʙᴀɴ ɢʀᴜᴘ*`)
		}, 100)
		setTimeout( () => {
		zharzx.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
		}, 10)
		setTimeout( () => {
		reply(`*_「 ʙᴀᴅᴡᴏʀᴅ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\nᴍᴀᴀғ *${pushname}* ᴀɴᴅᴀ ʙᴇʀʙɪᴄᴀʀᴀ ᴋᴏᴛᴏʀ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ *${groupMetadata.subject}*`)
		}, 0)
		}

           		  //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//chat message
		if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && !isCmd) console.log(color([time], "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
            if (!isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
			
			switch(command) {
//============================CASE DASAR============================\\
                case 'limitcheck':
				//JANGAN CUMRI SC GOBLOK //ZX // YOGI // DAPHUY
                 if (!isRegistered) return reply( ind.noregis())
				checkLimit(sender)
				break
                  case 'admin':
                  case 'owner':
                  case 'creator':
                  case 'developer':
                  zharzx.sendMessage(from, {displayname: "IFIN", vcard: vcard1}, MessageType.contact, { quoted: mek})
                  zharzx.sendMessage(from, 'Tuh nomer owner ku 😎 jangan spam goblog atau gw block lu',MessageType.text, { quoted: mek} )
					break 
	case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                			if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                					try {
								ppimg = await zharzx.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await zharzx.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await zharzx.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
					break
				       case 'test':
					   zharzx.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					   break
		               case 'ping':
					   zharzx.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					   break
					   case 'donasi':
		               case 'donate':
                       if (!isRegistered) return reply(ind.noregis())
				       if (isLimit(sender)) return reply(ind.limitend(pusname))
					   zharzx.sendMessage(from, donasi(), text)
					   break
				case 'toimg':
				if (isLimit(sender)) return reply(limitend(pushname))
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zharzx.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						zharzx.sendMessage(from, buffer, image, {quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break
					   case 'bahasa':
					// ZX.BOT 
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zharzx.sendMessage(from, bahasa(), text)
					await limitAdd(sender)
			
				break
		            case 'kodenegara':
					// ZX.BOT 
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zharzx.sendMessage(from, negara(), text)
					await limitAdd(sender)
					break
		            case 'del':
		            case 'd':
		            case 'delete':
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zharzx.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
					case 'info':
					me = zharzx.user
					uptime = process.uptime()
					teks = `*INFO OWNER*\n*Owner bot* : IFIN&Rekan\n*No Owner* : wa.me/6285790763534\n*━━━━━━━━━━━━━━━━━━━━\n*INFO BOT*\n*Nama bot* : ${me.name}\n*Nomor bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Ketik* : ${prefix}lpr _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.`
					buffer = await getBuffer(me.imgUrl)
					zharzx.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					case 'snk':
		            case 'peraturan':
			        if (isLimit(sender)) return reply(ind.limitend(pusname))
		            zharzx.sendMessage(from, snk(), text)
		            break
// MENU COMMAND1
        case 'animesaran':
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    wew = fs.readFileSync(`./lib/animesaran.jpg`)
                    zxzz = `
  |ANIME NAMA + GENRE 
  
  DRAMA+KESEDIHAN
- Pʟᴀsᴛɪᴄ ᴍᴇᴍᴏʀɪᴇs
- Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
- Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
- Kᴏᴋᴏʀᴏ Cᴏɴɴᴇᴄᴛ
- Cʜᴜᴜɴɪʙʏᴏᴜ Dᴇᴍᴏ Kᴏɪ ɢᴀ Sʜɪᴛᴀɪ
- Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
- Nᴀɢɪ ɴᴏ Asᴜᴋᴀʀᴀ (Rᴇᴄᴏᴍᴇɴᴅᴇᴅ)
- Jᴜsᴛ Bᴇᴄᴀᴜsᴇ
- Iɴᴜʏᴀsʜɪᴋɪ
- Cʟᴀɴɴᴀᴅ
- Aɴɢᴇʟ Bᴇᴀᴛs
- Yᴀʜᴀʀɪ Oʀᴇ ɴᴏ Sᴇɪsʜᴜᴜɴ Lᴏᴠᴇ Cᴏᴍᴇᴅʏ Mᴀᴄʜɪɢᴀᴛᴛᴇɪʀᴜ
- Rᴇ : LIFE
- Aɴᴏ Hᴀɴᴀ
- Kᴏɪ ᴛᴏ Usᴏ
- Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
- Hᴏᴛᴀʀᴜʙɪ ɴᴏ Mᴏʀɪ E
- Sᴀɴᴋᴀ Rᴇᴀ
- Kʏᴏᴜᴋᴀɪ ɴᴏ Kᴀɴᴀᴛᴀ
- Gᴜɪʟᴛʏ Cʀᴏᴡɴ 

GENRE HAREM:

- Tᴏ Lᴏᴠᴇ - ʀᴜ
- Hɪɢʜsᴄʜᴏᴏʟ DxD 
- Hᴇɴᴛᴀɪ Oᴜᴊɪ Wᴀʀᴀᴡᴀɴᴀɪ Nᴇᴋᴏ
- Isᴇᴋᴀɪ ᴡᴀ Sᴍᴀʀᴛᴘʜᴏɴᴇ Tᴏᴍᴏ ɴɪ 
- Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
- Mᴀsᴀᴍᴜɴᴇ - Kᴜɴ Rᴇᴠᴇɴɢᴇ
- Lᴀᴅɪᴇs Vs Bᴜᴛʟᴇʀ
- Oʀᴇ ɴᴏ Iᴍᴏᴜᴛᴏ ɢᴀ Kᴏɴɴᴀɴɪ Kᴀᴡᴀɪ Wᴀᴋᴇ ɢᴀ Nᴀɪ
- Mᴀsᴏᴜ Gᴀᴋᴜᴇɴ HxH 
- Mᴏɴsᴛᴇʀ Mᴜsᴜᴍᴇ 
- Sᴇɪʀᴇɪ Tsᴜᴋᴀɪ ɴᴏ Bʟᴀᴅᴇ Dᴀɴᴄᴇ
- Sᴇɪᴋᴇɴ Tsᴜᴋᴀɪ ɴᴏ Wᴏʀʟᴅ Bʀᴇᴀᴋ
- Sᴀɪᴊᴀᴋᴜ Mᴜʜᴀɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ
- Mᴜsᴀɪɢᴇɴ ɴᴏ Pʜᴀɴᴛᴏᴍ Wᴏʀʟᴅ
- Tʀɪɴɪᴛʏ Sᴇᴠᴇɴ
- Hᴜɴᴅʀᴇᴅ
- Dᴀᴋᴀʀᴀ Bᴏᴋᴜ ᴡᴀ H, Dᴇᴋɪɴᴀɪ? 
- Kᴏʀᴇ ᴡᴀ Zᴏᴍʙɪᴇ Dᴇsᴜ Kᴀ?
- Sʜɪᴏᴍɪɴ Sᴀᴍᴘʟᴇ
- Sʜɪɴᴍᴀɪ Mᴀᴏᴜ ɴᴏ Tᴇsᴛᴀᴍᴇɴᴛ 
- Dᴀᴛᴇ A Lɪᴠᴇ
- Kᴏɴᴏ Nᴀᴋᴀ ɴɪ Hɪᴛᴏʀɪ, Iᴍᴏᴜᴛᴏ ɢᴀ Iʀᴜ
- Oɴɪɪ - Cʜᴀɴ Dᴀᴋᴇᴅᴏ Aɪ Sᴀʀᴇʙᴀ Kᴀɴᴋᴇɪ Nᴀɪʏᴏɴᴇ
- Oʀᴇ ɴᴏ Nᴏᴜɴᴀɪ Sᴇɴᴛᴀᴋᴜsʜɪ ɢᴀ, Gᴀᴋᴜᴇɴ Lᴏᴠᴇ Cᴏᴍᴇᴅʏ Zᴇɴʀʏᴏᴋᴜ ᴅᴇ Jᴀᴍᴀ Sʜɪᴛᴇʀᴜ 
- Oʀᴇ ɴᴏ Kᴀɴᴏᴊᴏ ᴛᴏ Osᴀɴᴀɴᴀᴊɪᴍɪ ɢᴀ Sʜᴜʀᴀʙᴀ Sᴜɢɪʀᴜ
- Kᴀɴᴏᴋᴏɴ
- Rᴏᴋᴜᴊᴜᴍᴀ ɴᴏ Sʜɪɴʀʏᴀᴋᴜsʜᴀ
- Nɪsᴇᴋᴏɪ
- Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ Sᴏᴅᴀᴛᴇᴋᴀᴛᴀ
- Bᴏᴋᴜ ᴡᴀ Tᴏᴍᴏᴅᴀᴄʜɪ ɢᴀ Sᴜᴋᴜɴᴀɪ
- Kᴀᴍɪ Nᴏᴍɪ ᴢᴏ Sʜɪʀᴜ Sᴇᴋᴀɪ
- Rᴇɴᴀɪ Bᴏᴜᴋᴜɴ
- Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
- Yᴏsᴜɢᴀ ɴᴏ Sᴏʀᴀ

GENRE COMEDY

- Gɪɴᴛᴀᴍᴀ 
- Tᴀɴᴀᴋᴀ - ᴋᴜɴ ᴡᴀ Iᴛsᴜᴍᴏ Kᴇᴅᴀʀᴜɢᴇ
- Wᴏʀᴋɪɴɢ!!!
- Bᴀʀᴀᴋᴀᴍᴏɴ
- Bʟᴇɴᴅ S
- Hɪᴍᴏᴜᴛᴏ Uᴍᴀʀᴜ - Cʜᴀɴ
- Nᴇᴡ Gᴀᴍᴇ
- Aɴɪᴍᴇɢᴀᴛᴀʀɪs
- Gᴇᴋᴋᴀɴ Sʜᴏᴜᴊᴏ Nᴏᴢᴀᴋɪ - ᴋᴜɴ
- Gᴀʙʀɪᴇʟ DʀᴏᴘOᴜᴛ
- Kᴏʙᴀʏᴀsʜɪ - ᴄʜᴀɴ Cʜɪ ɴᴏ Mᴀɪᴅ Dʀᴀɢᴏɴ
- Dᴀɴsʜɪ Kᴏᴜᴋᴏsᴇɪ ɴᴏ Nɪᴄʜɪᴊᴏᴜ 

GENRE ROMANCE

- Iᴍᴏᴜᴛᴏ Sᴀᴇ Iʀᴇʙᴀ Iɪ
- Eʀᴏᴍᴀɴɢᴀ Sᴇɴsᴇɪ
- Oʀᴇ ɴᴏ Iᴍᴏᴜᴛᴏ Kᴏɴɴᴀɴɪ Kᴀᴡᴀɪɪ Wᴀᴋᴇ ɢᴀ Nᴀɪ
- Yᴀʜᴀʀɪ Oʀᴇ ɴᴏ Sᴇɪsʜᴜᴜɴ ᴡᴀ Lᴏᴠᴇ Cᴏᴍᴇᴅʏ Mᴀᴄʜɪɢᴀᴛᴛᴇɪʀᴜ
- Bᴏᴋᴜ ᴡᴀ Tᴏᴍᴏᴅᴀᴄʜɪ ɢᴀ Sᴜᴋᴜɴᴀɪ
- Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ

GENRE ACTION

- Fᴀᴛᴇ/Sᴛᴀʏ Nɪɢʜᴛ 
- UQ Hᴏʟᴅᴇʀ! Mᴀʜᴏᴜ Nᴇɢɪᴍᴀ Sᴇɴsᴇɪ 2
- Aʙsᴏʟᴜᴛᴇ Dᴜᴏ
- Rᴏᴋᴜᴅᴇɴᴀsʜɪ Mᴀᴊᴜᴛsᴜ Kᴏᴜsɪ ɴᴏ Aᴋᴀsʜɪᴄ Rᴇᴄᴏʀᴅ
- Oᴠᴇʀʟᴏʀᴅ
- Kᴇᴋᴋᴀɪ Sᴇɴsᴇɴ
- Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
- Gᴜɪʟᴛʏ Cʀᴏᴡɴ
- Sᴀɪᴊᴀᴋᴜ Mᴜʜᴀɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ
- Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
- Sᴛᴇɪɴ Gᴀᴛᴇ
- Tᴏᴀʀᴜ Kᴀɢᴀᴋᴜ ɴᴏ Rᴀɪʟɢᴜɴ
- Bʟᴀᴄᴋ Bᴜʟʟᴇᴛ
- Iɴᴜʏᴀsʜɪᴋɪ
- Oɴᴇ Pᴜɴᴄʜ Mᴀɴ
- Mᴏʙ Psʏᴄʜᴏ 100
- Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
- Sʜɪɴᴍᴀɪ Mᴀᴏᴜ ɴᴏ Tᴇsᴛᴀᴍᴇɴᴛ
- Bᴜɴɢᴏᴜ Sᴛʀᴀʏ Dᴏɢs

GENRE PHSYCOLOGICAL
- Iɴᴜʏᴀsʜɪᴋɪ
- Mᴀᴅᴏᴋᴀ Mᴀɢɪᴄᴀ
- Mɪʀᴀɪ Nɪᴋᴋɪ
- Kᴀᴋᴇɢᴜʀᴜɪ
- K-Pʀᴏᴊᴇᴄᴛ
- Gʀɪsᴀɪᴀ ɴᴏ Rᴀᴋᴜᴇɴ & Kᴀᴊɪᴛsᴜ
- Dᴇᴀᴛʜ Nᴏᴛᴇ
- Dᴇᴀᴛʜ Pᴀʀᴀᴅᴇ
- Dᴇᴀᴅᴍᴀɴ Wᴏɴᴅᴇʀʟᴀɴᴅ
- Rᴇ : Zᴇʀᴏ Kᴀʀᴀ Hᴀᴊɪᴍᴇʀᴜ Isᴇᴋᴀɪ Sᴇɪᴋᴀᴛsᴜ
- Dᴀɴɢᴀɴʀᴏɴᴘᴀ
- BTOOOM!
- Psʏᴄʜᴏ Pᴀss
- Kɪsᴇɪᴊᴜᴜ : Sᴇɪ ɴᴏ Kᴀᴋᴜʀɪᴛsᴜ
- Tᴏᴋʏᴏ Gʜᴏᴜʟ
- NHK ɴɪ Yᴏᴜᴋᴏsᴏ 

GENRE GAME & ISEKAI

- Mᴏɴᴅᴀɪᴊɪ - ᴛᴀᴄʜɪ ɢᴀ Isᴇᴋᴀɪ Kᴀʀᴀ Kᴜʀᴜ Sᴏ Dᴇsᴜ Yᴏ?
- Nᴏ Gᴀᴍᴇ Nᴏ Lɪғᴇ
- Aᴄᴄᴇʟ Wᴏʀʟᴅ
- Kᴏɴᴏ Sᴜʙᴀʀᴀsʜɪ Isᴇᴋᴀɪ Sᴏɴᴏ Sʜᴜᴋᴜғᴜᴋᴜ ᴡ
- 3 Gᴀᴛsᴜ ɴᴏ Lɪᴏɴ
- Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
- Mᴀᴅᴀɴ Oᴜ Vᴀɴᴀᴅɪs

GENRE MYSTERI

- Sᴀᴋᴜʀᴀᴅᴀ Rᴇsᴇᴛ
- Hʏᴏᴜᴋᴀ
- Mᴏɴᴏɢᴀᴛᴀʀɪ ᴜʀᴜᴛᴀɴ ᴄᴇʀɪᴛᴀɴʏᴀ
1. Kɪᴢᴜᴍᴏɴᴏɢᴀᴛᴀʀɪ 
2. Nᴇᴋᴏᴍᴏɴᴏɢᴀᴛᴀʀɪ : Kᴜʀᴏ
3. Bᴀᴋᴇᴍᴏɴᴏɢᴀᴛᴀʀɪ
4. Nɪsᴇᴍᴏɴᴏɢᴀᴛᴀʀɪ
5. Mᴏɴᴏɢᴀᴛᴀʀɪ Sᴇʀɪᴇs Sᴇᴄᴏɴᴅ Sᴇᴀsᴏɴ
6. Tsᴜᴋɪᴍᴏɴᴏɢᴀᴛᴀʀɪ
7. Kᴏʏᴏᴍɪᴍᴏɴᴏɢᴀᴛᴀʀɪ (Dᴜʀᴀsɪ 12 ᴍɪɴ)
8. Oᴡᴀʀɪᴍᴏɴᴏɢᴀᴛᴀʀɪ S1
9. Oᴡᴀʀɪᴍᴏɴᴏɢᴀᴛᴀʀɪ S2
10. Hᴀɴᴀᴍᴏɴᴏɢᴀᴛᴀʀɪ
- Dᴀɴɢᴀɴʀᴏɴᴘᴀ
- Mɪʀᴀɪ Nɪᴋᴋɪ
- Dᴇᴀᴛʜ Nᴏᴛᴇ
- Bʟᴀᴄᴋ Bᴜʟʟᴇᴛ
- Aɴᴏᴛʜᴇʀ

SPORT :

- Yᴀᴡᴀᴍᴜsʜɪ ᴘᴇᴅᴀʟ
- Mᴀᴊᴏʀ
- Eʏᴇsʜɪʟᴇᴅ 21
- Dɪᴀᴍᴏɴᴅ ɴᴏ ᴀᴄᴇ
- Sʟᴀᴍ ᴅᴜɴᴋ
- Hᴀᴊɪᴍᴇ ɴᴏ ɪᴘᴘᴏ
- Fʀᴇᴇ
- Pɪɴɢ ᴘᴏɴɢ ᴛʜᴇ ᴀɴɪᴍᴀᴛɪᴏɴ
- Bᴀʙʏ sᴛᴇᴘ
- Aʀᴇᴀ ɴᴏ ᴋɪsʜɪ
- Cᴀᴘᴛᴇɪɴ ᴛsᴜʙᴀᴀᴀ
- Aɪʀ ɢᴇᴀʀ
- Cʜɪʜᴀғᴜʏᴜ
- Cʀᴏss ɢᴀᴍᴇ
- Iɴᴀᴢᴜᴍᴀ ᴇʟᴇᴠᴇɴ

 ROMANCE SAD

- Kɪᴍɪᴋɪss ᴘᴜʀᴇ ʀᴀᴏᴜɢᴇ
- Kᴀᴍɪᴋɪss
- Tᴏʀᴀᴅᴏʀᴀ
- Lᴏᴠᴇʟʏ ᴄᴏᴍᴘʟᴇx
- Sᴀᴋᴜʀᴀsᴏᴜ
- Wʜɪᴛᴇ ᴀʟʙᴜᴍ
- Tᴏɴᴀʀɪ ɴᴏ ᴋᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
- 11ᴇʏᴇs
- Aɴɢᴇʟ ʙᴇᴀᴛs
- Pʟᴀsᴛɪᴄ ᴍᴇᴍᴏʀɪᴇ
- Aᴋᴀᴍᴇ ɢᴀ ᴋɪʟʟ
- Aᴋᴀᴛsᴜᴋɪ ɴᴏ ʏᴏɴᴀ
- Bᴇʀsᴇʀᴋ
- Sᴀᴏ
- Bᴏᴋᴜ ᴡᴀ ᴛᴏᴍᴏᴅᴀᴄʜɪ ᴡᴀ sᴜᴋᴜɴᴀɪ
- Bᴏᴋᴜʀᴀ ᴡᴀ ᴍɪɴɴᴀ ᴋᴀᴡᴀɪsᴏᴜ
- Bᴛᴏᴏᴏᴍ
- Bᴜɴɢᴀᴋᴜ sʜᴏᴜᴊᴏ
- C ᴛʜᴇ ᴍᴏɴᴇʏ ᴏғ sᴏᴜʟ ᴀɴᴅ ᴘᴏssɪʙɪʟɪᴛʏ ᴄᴏɴᴛʀᴏʟ
- Cʜᴀʀʟᴏᴛᴛᴇ
- Cʜɪʜᴀʏᴀғᴜʏᴜ
- Cʜᴜᴜɴɪʙʏᴏᴜ
- Cʟᴀɴɴᴀᴅ
- Dᴀɴᴄᴇ ɪɴ ᴛʜᴇ ᴠᴀᴍᴘɪʀᴇ ʙᴜɴᴅ
- Dᴀɴsᴀɪ ʙᴜɴʀɪ ɴᴏ ᴄʀɪᴍᴇ ᴇᴅɢᴇ
- Dᴀʀᴋᴇɴ ᴛʜᴀɴ ʙʟᴀᴄᴋ
- Dᴇᴠɪʟs ʟɪɴᴇ
- Dᴀᴛᴇ ᴀ ʟɪᴠᴇ
- Dᴇ ᴄᴀᴘɪ sᴇʀɪᴇs
- Tʀᴜᴇᴇ ᴛᴇᴀʀs
- ᴅᴇᴀᴅᴍᴇᴀɴ ᴡᴏɴᴅᴇʀʟᴀɴᴅ
- ʙʟᴏᴏᴅ ʟᴀᴅ
- ᴅᴇɴsᴇᴛsᴜ ɴᴏ ʏᴜsᴀ ɴᴏ ᴅᴇɴsᴇᴛsᴜ
- ᴋʏᴏᴜᴋᴀɪ ɴᴏ ᴋᴀɴᴀᴛᴀ
- Fᴀᴛᴇ/sᴛᴀʏ 
- Mᴀɢɪ
- Gᴇᴋᴋᴀɴ sʜᴏᴜᴊᴏ
- Gᴏʟᴅᴇɴ ᴛɪᴍᴇ
- Gᴜɪʟᴛʏ ᴄʀᴏᴡɴ
- Gᴏsɪᴄᴋ
- Hᴇɴᴛᴀɪ ᴏᴜᴊɪ ᴛᴏ ᴡᴀʀᴀᴡᴀɴᴀɪ ɴᴇᴋᴏ
- Kɪsᴇɪᴊᴜᴜ
- Kᴏᴋᴏʀᴏ ᴄᴏɴɴᴇᴄᴛ
- Mɪᴋᴀᴋᴜɴɪɴ
- Mɪʀᴀɪ ɴɪᴋɪ
- Nᴀɢɪ ɴᴏ ᴀsᴜᴋᴀʀᴀ
- Oʀᴇʟᴍᴏ
- Pᴜɴᴄʜ ʟɪɴᴇ
- Rᴏᴋᴋᴀ ɴᴏ ʏᴜᴜsʜᴀ
- Sʜɪɢᴀᴛᴜ ᴡᴀ ᴋɪᴍɪ ɴᴏ ᴜsᴏ
- Kᴏᴛᴏɴᴏʜᴀ ɴᴏ ᴍɪᴡᴀ
- Kɪᴍɪ ɴᴏ ɴᴀᴡᴀ
- Kᴀɪᴄʜᴏᴜ ᴡᴀ ᴍᴀɪᴅ sᴀᴍᴀ
- Oʀᴇɢᴀɪʀᴜ
- Oᴏᴋᴀᴍɪ ɴᴏ ᴋᴏᴜsʜɪɴʀʏᴏᴜ
- Zᴇʀᴏ ɴᴏ ᴛsᴜᴋᴀɪᴍᴀ
- Asᴛᴇʀɪᴋ
- Kᴏʀᴇ ᴡᴀ ᴢᴏᴍʙɪᴇ ᴅᴇsᴜ ᴋᴀ
- Kᴏᴇ ɴᴏ ᴋᴀᴛᴀᴄʜɪ
- Kɪᴍɪ ɴᴏ ᴛᴇᴅᴏᴋᴇ
- Rᴇʟɪғᴇ
- Tsᴜᴋɪɢᴀ ᴋɪʀᴇɪ
- Tᴀᴍᴀᴋᴏ ᴍᴀʀᴋᴇᴛ
- Sᴜᴋɪᴛᴛᴇ ʟɪ ɴᴀʏᴏᴜ
- Oʀᴇ ᴍᴏɴᴏɢᴀᴛᴀʀɪ
- Mᴏɴᴏɢᴀᴛᴀʀɪ
- Aᴋᴀɢᴀᴍɪ ɴᴏ sʜɪʀᴀʏᴜᴋɪ
- Sᴀɴᴋᴀʀᴇᴀ
- Aᴍᴀɢᴀᴍɪ ss
- Issᴜᴋᴀɴ ғʀɪᴇɴᴅ
- Aᴏ ʜᴀʀᴜ ʀɪᴅᴇ
- Nɪᴊɪʀᴏ ᴅᴀʏs
- Fᴜᴜᴋᴀ
- Aɴᴏ ʜᴀɴᴀ
- Yᴏsᴜɢᴀ ɴᴏ sᴏʀᴀ
MYSTERI:
- Dᴇᴀᴛʜ ɴᴏᴛᴇ
- Gᴏsɪᴄᴋ
- Bᴏᴋᴜ ᴅᴀᴋᴇ ɢᴀ ɪɴᴀɪ ᴍᴀᴄʜɪ
- Bᴀᴄᴄᴀɴᴏ
- Dᴜʀᴀʀᴀʀᴀ
- Sʜɪɴsᴇᴋᴀɪ ʏᴏʀɪ
- Bᴀᴋᴇᴍᴏɴᴏɢᴀᴛᴀʀɪ
- Dᴇᴀᴛʜ ᴘᴀʀᴀᴅᴇ
- Dᴀʀᴋᴇɴ ᴛʜᴀɴ ʙʟᴀᴄᴋ
- Zᴀᴛsᴜᴇɴ ɴᴏ ᴛᴇᴍᴘᴇsᴛ
- Eғ: A ᴛᴀʟᴇ ᴍᴇʟᴏᴅɪᴇs
- Hɪɢᴜʀᴀsʜɪ ɴᴏ ɴᴀᴋᴜ ᴋᴏʀᴏ ɴɪ
- Pᴀᴘʀɪᴋᴀ
- Tɪɢᴇʀ ᴀɴᴅ ʙᴜɴɴʏ
- Tᴀsᴏɢᴀʀᴇ ᴏᴛᴏᴍᴇ x ᴀᴍɴᴇsɪᴀ
- Mɪʀᴀɪ ɴɪᴋɪ
- Tᴏᴋʏᴏᴜ ɢʜᴏᴜʟ
- Eʀɢᴏ ᴘʀᴏxʏ 
- Aɴᴏᴛʜᴇʀ
- Yᴀᴍᴀᴅᴀ ᴋᴜɴ ᴛᴏ 7 ɴɪɴ ɴᴏ ᴍᴀᴊᴏ
- Gᴀᴋᴋᴏᴜ ɢᴜʀᴀsʜɪ
- Kᴀᴍɪsᴀᴍᴀ ɴᴏ ᴍᴇᴍᴏᴄʜᴏᴜ
- Hᴀᴍᴀᴛᴏʀᴀ
- Bʟᴀᴄᴋ ʙᴜʟʟᴇᴛ
- Kᴀᴍɪsᴀᴍᴀ ɴᴏ ɪɴᴀɪ ɴɪᴄʜɪʏᴜʙɪ
- Dᴀɴᴛᴀʟɪᴀɴ ɴᴏ sʜᴏᴋᴀ
- Kᴜᴊɪʀᴀ ɴᴏ ᴋᴏʀᴀ ᴡᴀ sᴀᴊᴏᴜ ɴɪ  ᴊᴀᴍ
- Sᴜʙᴇᴛᴇ ɢᴀ ғ ɴɪ ɴᴀʀᴜ
- Gᴀᴋᴜᴋᴏᴋᴜ ɴᴏ ʙʀʏɴʜɪʟᴅʀ
- Sᴇɪᴋɪᴍᴀᴛsᴜ ᴏᴄᴄᴜʟᴛ ɢᴀᴋᴜɪɴ
- Kᴏɴɪ ɴᴀᴋᴀ ɴɪ ʜɪᴛᴏʀɪ ɪᴍᴏᴜᴛᴏ ɢᴀ ɪʀᴜ 
- Mᴀʏᴏɪɢᴀ
- Kʏᴏᴛᴏ ᴛᴇʀᴀᴍᴀᴄʜɪ sᴀɴᴊᴏᴜ ɴᴏ ʜᴏʟᴍᴇs
- 18ɪғ
- ᴏᴜsᴀᴍᴀ ɢᴀᴍᴇ ᴛʜᴇ ᴀɴɪᴍᴀᴛɪᴏɴ
- ᴍᴀᴅᴇ ɪɴ ᴀʙʏss

COMEDY SCHOOL :
- Pʀᴇsᴏɴ sᴄʜᴏᴏʟ
- Gᴇᴋᴋᴀɴ sʜᴏᴜᴊᴏ ɴᴏᴢᴀᴋɪ ᴋᴜɴ
- Bᴇᴇʟᴢᴇʙᴜʙ
- Sʜɪᴍᴏɴᴇᴛᴀ
- Aʜᴏ ɢɪʀʟ
- Tᴀɴᴀᴋᴀ ᴋᴜɴ
- D ғʀᴀɢ
- Hᴀɴᴅᴀ ᴋᴜɴ
- Tᴏɴᴀʀᴜ ɴᴏ sᴇᴋɪ ᴋᴜɴ
- Aɴsᴀᴛsᴜ ᴋʏᴏᴜsʜɪᴛᴇ
- Sᴀɪᴋɪ ᴋᴜsᴜᴏ
- Tᴏʀᴀᴅᴏʀᴀ
- Bᴀᴋᴀ ᴛᴏ ᴛᴇsᴛ
- Sᴀᴋᴀᴍᴏᴛᴏ ᴅᴇsᴜ ɢᴀ
- Gʀᴇᴀᴛ ᴛᴇᴀᴄʜsʀ ᴏɴɪᴢᴜᴋᴀ
- Nɪᴄʜɪᴊᴏᴜ
- Sᴋᴇᴛ ᴅᴀɴᴄᴇ
- Dᴀɴsʜɪ ᴋᴏᴜᴋᴏᴜsᴇɪ ɴᴏ ɴɪᴄʜɪᴊᴏ

Aɴɪᴍᴇ ᴅᴜʀᴀsɪ ᴘᴇɴᴅᴇᴋ:
Aʜᴏ ɢɪʀʟ
Tsᴜʀᴇᴛᴢᴜʀᴇ ᴄʜɪʟᴅᴇʀɴ
Uᴄʜᴜᴜ sᴇɴᴋᴀɴ ᴛɪʀᴀᴍɪsᴜ
Mᴀɴɢᴀᴋᴀ sᴀɴ ᴛᴏ ᴀssɪsᴛᴀɴᴛ sᴀɴ
Tᴏɴᴀʀɪ ɴᴏ sᴇᴋɪ ᴋᴜɴ
Dᴀɴɴᴀ ɢᴀ ɪᴛᴛᴇɪʀᴜ ᴋᴀ ᴡᴀᴋᴀʀᴀɴᴀɪ ᴋᴇɴ
Fᴜᴍɪᴋɪʀɪ ᴊɪᴋᴀɴ
Oɴᴇᴇ ᴄʜᴀɴ ɢᴀ ᴋɪᴛᴀ
Osᴀᴋᴇ ғᴜғᴜ ɴɪɴᴀᴛᴛᴇ
Aᴄᴛɪᴏɴ Sᴜᴘᴇʀɴᴀᴛᴜʀᴀʟ :
- Sᴀɪᴋɪ ᴋᴜsᴜᴏ
- Oᴠᴇʀʟᴏʀᴅ
- Hᴀᴛᴀʀᴀᴋᴜ ᴍᴀᴏ sᴀᴍᴀ
- Mᴀʜᴏᴜᴋᴀ ᴋᴏᴜᴋᴀ
- Bʟᴏᴏᴅ ʟᴀᴅ
- Sᴀᴏ
- Nᴀɴᴀᴛsᴜ ɴᴏ ᴛᴀɪᴢᴀɪ
- Aɴsʏᴀᴛsᴜ ᴋʏᴏᴜʜɪᴛsᴜ
- Cᴏᴅᴇ ɢᴇᴀss
- Nᴏ ɢᴀᴍᴇ ɴᴏ ʟɪғᴇ
- Mᴏʙ ᴘsʏᴄᴏ 100
- Mᴏɴᴅᴀɪᴊɪ-ᴛᴀᴄʜɪ ɢᴀ ɪsᴇᴋᴀɪ ᴋᴀʀᴀ ᴋᴜʀᴜ ᴢᴏᴜ ᴅᴇsᴜ ʏᴏ

Rᴏᴍᴀɴᴄᴇ Sʜᴏᴜᴊᴏ
- Sᴀᴇɪᴋᴀɴᴏ
- Sᴘᴇᴄɪᴀʟ A
- Cᴏᴄᴏʀᴏ ᴄᴏɴɴᴇᴄᴛ
- Kᴀᴍɪsʜᴀᴍᴀ ʜᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
- Lᴏᴠᴇʟʏ ᴄᴏᴍᴘʟᴇx
- Gᴏʟᴅᴇɴ ᴛɪᴍᴇ
- Tᴏɴᴀʀɪ ɴᴏ ᴋᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
- Sɪᴋɪᴛᴛᴇ ʟɪ ɴᴀ ʏᴏ
- Bᴀᴋᴀ ᴛᴏ ᴛᴇsᴛ
- Cʜᴜᴜɴɪʙʏᴏᴜ
- Aɴᴏ ɴᴀᴛsᴜ ᴅᴇ ᴍᴀᴛᴛᴇʀᴜ
- Aᴏ ʜᴀʀᴜ ʀɪᴅᴇ
- Nɪᴊɪʀᴏ ᴅᴀʏs
- Rᴇ ᴢᴇʀᴏ ᴋᴀʀᴀ
- Dᴇɴsᴇᴛsᴜ ɴᴏ ʏᴜᴜsʜᴀ ɴᴏ ᴅᴇɴsᴇᴛsᴜ
- Dᴀɴᴍᴀᴄʜɪ
- Sᴜᴋᴀsᴜᴋᴀ
- Rᴀᴋᴜᴅᴀʏ ᴋɪsʜʏ ɴᴏ ᴄᴀᴠᴀʟʀʏ
- Cᴏᴅᴇ:Rᴇᴀʟɪᴢᴇ
- Cᴏᴅᴇ ʙʀᴇᴀᴋᴇʀ
- ᴢᴇʀᴏ ɴᴏ ᴛsᴜᴋᴀɪᴍᴀ

Cʜᴀʀᴀ GENIUS :
-ᴍᴀsᴀᴍᴜɴᴇ ᴋᴜɴ ɴᴏ ʀᴇᴠᴇɴɢᴇ
-ᴀᴍᴀɢɪ ʙʀɪʟʟɪᴀɴᴛ ᴘᴀʀᴋ
-ʜʏᴏᴜᴋᴀ
-ᴏʀᴇɢᴀɪʀᴜ
-ᴛᴀɴᴀᴋᴀ ᴋᴜɴ
-ᴋɪsʜᴜᴋᴜ ɢᴀᴋᴋᴏᴜ ᴊᴜʟʟɪᴇᴛ
-ʏᴏᴜᴋᴏsᴏ ᴊᴏᴛsᴜʀʏᴏᴋᴜ sʜɪᴊᴏᴜ sʜᴜɢɪ ɴᴏ ᴋʏᴏᴜsʜɪᴛsᴜ ᴇ
-ᴀᴍᴀɢᴀᴍɪ SS
HOROR:
- Gʜᴏsᴛ ᴀᴛ sᴄʜᴏᴏʟ
- Bᴏᴏɢɪᴇᴘᴏᴘ ᴘʜᴀɴᴛᴏᴍ
- Pᴇᴛ sʜᴏᴘs ᴏғ ʜᴏʀʀᴏʀ
- Cᴀᴛ sᴏᴜᴘ
- Hɪʜᴜʀᴀsʜɪ ɴᴏ ɴᴀᴋᴜ ᴋᴏʀᴏ ɴɪ

- Iᴛᴏᴜ ᴊᴜɴᴊɪ
- Aɴᴏᴛʜᴇʀ
- Kᴏᴡᴀʙᴏɴ
- Bʟᴏᴏᴅ ᴄ
- Bʟᴏᴏᴅ +
- Kᴀᴋᴜʀᴇɴʙᴏ
- Jɪᴋᴏɢᴜ sʜᴏᴜᴊᴏ
- Gʜᴏsᴛ ʜᴜɴᴛ
- Kᴀɢᴇᴡᴀɴɪ
- Yᴀᴍɪ sʜɪʙᴀɪɪ
- Hɪɢᴜʀᴀsʜɪ ɴᴏ ɴᴀᴋᴜ ᴋᴏʀᴏ ɴɪ
- Cᴏʀᴘsᴇ ᴘᴀʀᴛʏ
- Sᴇʀɪᴀʟ ᴇxᴘᴇʀɪᴍᴇɴᴛ ʟᴀɪɴ
- Eʟғᴇɴ ʟᴇɪᴅ
- Sʜɪᴋɪ
- Gᴀɴᴛᴢ
- Gʏᴏ : Tᴏᴋʏᴏ ғɪsʜ ᴀᴛᴛᴀᴄᴋ
- Tᴏᴋʏᴏ ɢʜᴏᴜʟ
- Kɪsᴇɪᴊᴜ
- Mᴏɴᴏɴᴏᴋᴇ
- Aᴊɪɴ
- Gᴀᴋᴋᴏᴜɢᴜʀᴀsʜɪ
- Dᴇᴀᴅᴍᴀɴ ᴡᴏɴᴅᴇʀʟᴀɴᴅ
- Hᴇʟʟsɪɴɢ
Cᴀʀɪ ʏɢ ʟᴜ sᴜᴋᴀ
Rᴇᴋᴏᴍᴇɴᴅᴀsɪ Aɴɪᴍᴇ

Aᴄᴛɪᴏɴ
1. Oɴᴇ Pɪᴇᴄᴇ
2. Nᴀʀᴜᴛᴏ
3. Dʀᴀɢᴏɴ Bᴀʟʟ
4. Sʜɪɴɢᴇᴋɪ ɴᴏ Kʏᴏᴊɪɴ
5. Oɴᴇ Pᴜɴᴄʜ Mᴀɴ
6. Hᴜɴᴛᴇʀ x Hᴜɴᴛᴇʀ
7. Bʟᴇᴀᴄʜ
8. Cᴏᴅᴇ: Bʀᴇᴀᴋᴇʀ
9. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ : Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
10. Fᴀɪʀʏ Tᴀɪʟ
11. Gɪɴᴛᴀᴍᴀ
12. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
13. 91 Dᴀʏs
14. Aᴄᴄᴇʟ Wᴏʀʟᴅ
15. Aɪʀ Gᴇᴀʀ
16. Aᴋᴀᴍᴇ ɢᴀ Kɪʟʟ!
17. Aʟᴅɴᴏᴀʜ.Zᴇʀᴏ
18. Aɴsᴀᴛsᴜ Kʏᴏᴜsʜɪᴛsᴜ
19. Aᴏ ɴᴏ Exᴏʀᴄɪsᴛ
20. Aʀsʟᴀɴ Sᴇɴᴋɪ
21. Bᴀᴄᴄᴀɴᴏ!
22. Bᴇᴇʟᴢᴇʙᴜʙ
23. Bᴇʀsᴇʀᴋ
24. Bʟᴀᴄᴋ Bᴜʟʟᴇᴛ
25. Bʟᴏᴏᴅ Lᴀᴅ
26. Bʟᴏᴏᴅ+
27. Bᴏᴋᴜ ɴᴏ Hᴇʀᴏ Aᴄᴀᴅᴇᴍɪᴀ
28. Bᴏʀᴜᴛᴏ
29. Bᴛᴏᴏᴏᴍ!
30. Cʟᴀʏᴍᴏʀᴇ
31. Cᴏᴅᴇ Gᴇᴀss
32. Cᴏᴡʙᴏʏ Bᴇʙᴏᴘ
33. D.Gʀᴀʏ-ᴍᴀɴ
34. Dᴀɴɢᴀɴʀᴏɴᴘᴀ Sᴇʀɪᴇs
35. Dᴀʀᴋᴇʀ ᴛʜᴀɴ Bʟᴀᴄᴋ Sᴇʀɪᴇs
36. Dᴇᴀᴅᴍᴀɴ Wᴏɴᴅᴇʀʟᴀɴᴅ
37. Fᴀᴛᴇ Sᴇʀɪᴇs
38. Fʟᴀᴍᴇ ᴏғ Rᴇᴄᴄᴀ
39. Fᴜʟʟ Mᴇᴛᴀʟ Pᴀɴɪᴄ!
40. Gᴀɴɢsᴛᴀ
41. Gᴀɴᴛᴢ
42. Gᴀ-Rᴇɪ: Zᴇʀᴏ
43. Gᴏᴅ Eᴀᴛᴇʀ
44. Gᴜɪʟᴛʏ Cʀᴏᴡɴ
45. Hᴇʟʟsɪɴɢ
46. Hɪɢᴀsʜɪ ɴᴏ Eᴅᴇɴ
47. Hɪɢʜsᴄʜᴏᴏʟ ᴏғ ᴛʜᴇ Dᴇᴀᴅ
48. IɴᴜYᴀsʜᴀ
49. K (Pʀᴏᴊᴇᴄᴛ K)
50. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ
51. Kᴀᴛᴇᴋʏᴏ Hɪᴛᴍᴀɴ Rᴇʙᴏʀɴ!
52. Kɪʟʟ ʟᴀ Kɪʟʟ
53. Kɪsᴇɪᴊᴜᴜ: Sᴇɪ ɴᴏ Kᴀᴋᴜʀɪᴛsᴜ
54. Kᴏᴜᴛᴇᴛsᴜᴊᴏᴜ ɴᴏ Kᴀʙᴀɴᴇʀɪ
55. Kᴜʀᴏsʜɪᴛsᴜᴊɪ (Bʟᴀᴄᴋ Bᴜᴛʟᴇʀ)
56. Mᴀɢɪ Sᴇʀɪᴇs
57. Mɪʀᴀɪ Nɪᴋᴋɪ
58. Mᴏʙ Psʏᴄʜᴏ 100
59. Nᴀɴᴀᴛsᴜ ɴᴏ Tᴀɪᴢᴀɪ
60. Nᴇᴏɴ Gᴇɴᴇsɪs Eᴠᴀɴɢᴇʟɪᴏɴ
61. Nᴏʀᴀɢᴀᴍɪ
62. Nᴜʀᴀʀɪʜʏᴏɴ ɴᴏ Mᴀɢᴏ
63. Oᴠᴇʀʟᴏʀᴅ
64. Oᴡᴀʀɪ ɴᴏ Sᴇʀᴀᴘʜ
65. Psʏᴄʜᴏ-Pᴀss
66. Rᴜʀᴏᴜɴɪ Kᴇɴsʜɪɴ
67. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
68. Sʜᴀᴋᴜɢᴀɴ ɴᴏ Sʜᴀɴᴀ
69. Sʜɪᴊᴏᴜ Sᴀɪᴋʏᴏᴜ ɴᴏ Dᴇsʜɪ Kᴇɴɪᴄʜɪ
70. Sʜɪɴɢᴇᴋɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ Sᴇʀɪᴇs
71. Sᴏᴜʟ Eᴀᴛᴇʀ
72. Sᴛʀɪᴋᴇ ᴛʜᴇ Bʟᴏᴏᴅ
73. Tᴀʟᴇs ᴏғ Zᴇsᴛɪʀɪᴀ ᴛʜᴇ X
74. Tᴏᴀʀᴜ Sᴇʀɪᴇs
75. Tᴏᴋʏᴏ Gʜᴏᴜʟ
76. Usʜɪᴏ ᴛᴏ Tᴏʀᴀ
77. Zᴇᴛsᴜᴇɴ ɴᴏ Tᴇᴍᴘᴇsᴛ

Aᴅᴠᴇɴᴛᴜʀᴇ
1. Oɴᴇ Pɪᴇᴄᴇ
2. Mᴜsʜɪsʜɪ
3. Zᴇʀᴏ ɴᴏ Tsᴜᴋᴀɪᴍᴀ
4. Mᴀᴅᴇ Iɴ Aʙʏss
5. Cʟᴀʏᴍᴏʀᴇ
6. BTOOOM
7. Sʜɪɴɢᴇᴋɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ Sᴇʀɪᴇs
8. Rᴏᴋᴋᴀ Nᴏ Yᴜᴜsʜᴀ
9. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
10. Mᴀɢɪ Sᴇʀɪᴇs
11. Hᴜɴᴛᴇʀ x Hᴜɴᴛᴇʀ 
12. Aᴋᴀᴛsᴜᴋɪ ɴᴏ Yᴏɴᴀ 
13. Nᴀʀᴜᴛᴏ Sᴇʀɪᴇs
14. Oᴏᴋᴀᴍɪ ᴛᴏ Kᴏᴜsʜɪɴʀʏᴏᴜ 
15. Fᴀɪʀʏ Tᴀɪʟ
16. Hᴏᴡʟ ɴᴏ Uɢᴏᴋᴜ Sʜɪʀᴏ
17. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ 
18. Cᴏᴅᴇ Gᴇᴀss
19. Kɪɴᴏ ɴᴏ Tᴀʙɪ: Tʜᴇ Bᴇᴀᴜᴛɪғᴜʟ Wᴏʀʟᴅ
20. Sᴏᴜʟ Eᴀᴛᴇʀ
21. Tᴇɴɢᴇɴ Tᴏᴘᴘᴀ Gᴜʀʀᴇɴ Lᴀɢᴀɴɴ
22. Aᴋᴀᴍᴇ ɢᴀ Kɪʟʟ!
23. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
24. Dʀᴀɢᴏɴ Bᴀʟʟ
25. Nᴀɴᴀᴛsᴜ ɴᴏ Tᴀɪᴢᴀɪ 
26. Lɪᴛᴛʟᴇ Wɪᴛᴄʜ Aᴄᴀᴅᴇᴍɪᴀ
27. Rᴏᴍᴇᴏ ɴᴏ Aᴏɪ Sᴏʀᴀ
28. Sᴏʀᴀ ʏᴏʀɪ ᴍᴏ Tᴏᴏɪ Bᴀsʜᴏ
29. Cᴏᴡʙᴏʏ Bᴇʙᴏᴘ
30. Sᴇɴ ᴛᴏ Cʜɪʜɪʀᴏ ɴᴏ Kᴀᴍɪᴋᴀᴋᴜsʜɪ
31. Nᴜʀᴀʀɪʜʏᴏɴ Nᴏ Mᴀɢᴏ
32. Lᴏɢ Hᴏʀɪᴢᴏɴ
33. Tᴏʀɪᴋᴏ
34. Gᴀʀɢᴀɴᴛɪᴀ ᴏɴ ᴛʜᴇ Vᴇʀᴅᴜʀᴏᴜs Pʟᴀɴᴇᴛ
35. Jᴏᴊᴏ’s Bɪᴢᴀʀʀᴇ Aᴅᴠᴇɴᴛᴜʀᴇ
36. Eᴜʀᴇᴋᴀ Sᴇᴠᴇɴ
37. Bʟᴀᴄᴋ Lᴀɢᴏᴏɴ
38. D.Gʀᴀʏ-ᴍᴀɴ
39. Aᴛᴛᴀᴄᴋ ᴏɴ Tɪᴛᴀɴ
40. IɴᴜYᴀsʜᴀ
41. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
42. Nᴏʀᴀɢᴀᴍɪ
43. Nᴏ Gᴀᴍᴇ Nᴏ Lɪғᴇ
44. Rᴀᴅɪᴀɴᴛ

Mᴇᴄʜᴀ
1. Tᴇɴɢᴇɴ Tᴏᴘᴘᴀ Gᴜʀʀᴇɴ Lᴀɢᴀɴɴ
2. Fᴜʟʟ Mᴇᴛᴀʟ Pᴀɴɪᴄ!
3. Cʀᴏss Aɴɢᴇ: Tᴇɴsʜɪ ᴛᴏ Rʏᴜᴜ ɴᴏ Rᴏɴᴅᴏ
4. Nᴇᴏɴ Gᴇɴᴇsɪs Eᴠᴀɴɢᴇʟɪᴏɴ
5. Eᴜʀᴇᴋᴀ Sᴇᴠᴇɴ
6. Kᴀᴋᴜᴍᴇɪᴋɪ Vᴀʟᴠʀᴀᴠᴇ (Vᴀʟᴠʀᴀᴠᴇ ᴛʜᴇ Lɪʙᴇʀᴀᴛᴏʀ)
7. Mᴏʙɪʟᴇ Sᴜɪᴛ Gᴜɴᴅᴀᴍ 00
8. Bᴜᴅᴅʏ Cᴏᴍᴘʟᴇx
9. Aʟᴅɴᴏᴀʜ.Zᴇʀᴏ
10. Cᴏᴅᴇ Gᴇᴀss
11. Dᴀᴛᴇ A Lɪᴠᴇ
12. Gᴇɴᴇsɪs ᴏғ Aϙᴜᴀʀɪᴏɴ (Sᴏᴜsᴇɪ ɴᴏ Aϙᴜᴀʀɪᴏɴ)
13. Vɪsɪᴏɴ ᴏғ Esᴄᴀғʟᴏᴡɴᴇ 
14. Mᴀᴄʀᴏss Sᴇʀɪᴇs
15. Gʜᴏsᴛ ɪɴ ᴛʜᴇ Sʜᴇʟʟ: Sᴛᴀɴᴅ Aʟᴏɴᴇ Cᴏᴍᴘʟᴇx
16. RᴀʜXᴇᴘʜᴏɴ
17. Yᴜᴜsʜᴀ-Oᴜ GᴀᴏGᴀɪGᴀʀ
18. FLCL
19. IS: Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
20. Dᴀʀʟɪɴɢ ɪɴ ᴛʜᴇ FʀᴀɴXX
21. Sᴜɪsᴇɪ ɴᴏ Gᴀʀɢᴀɴᴛɪᴀ
22. Uɴᴅᴇғᴇᴀᴛᴇᴅ Bᴀʜᴀᴍᴜᴛ Cʜʀᴏɴɪᴄʟᴇ
23. Hᴜɴᴅʀᴇᴅ
24. Sɪᴅᴏɴɪᴀ ɴᴏ Kɪsʜɪ
25. Rᴏʙᴏᴛɪᴄs;Nᴏᴛᴇs
26. Hᴏsʜɪ ɴᴏ Kᴏᴇ
27. Gᴜɴᴅᴀᴍ Wɪɴɢ
28. Bᴏᴋᴜʀᴀɴᴏ
29. MᴏʙɪʟᴇSᴜɪᴛGᴜɴᴅᴀᴍ:Iʀᴏɴ-Bʟᴏᴏᴅᴇᴅ Oʀᴘʜᴀɴs
30. Kɴɪɢʜᴛ’s & Mᴀɢɪᴄ
31. Hᴇᴀᴠʏ Oʙᴊᴇᴄᴛ
32. Sᴀᴍᴜʀᴀɪ Sᴇᴠᴇɴ
33. Cᴏᴍᴇᴛ Lᴜᴄɪғᴇʀ
34. Sᴛᴀʀ Dʀɪᴠᴇʀ: Kᴀɢᴀʏᴀᴋɪ ɴᴏ Tᴀᴋᴜᴛᴏ
35. Asᴜʀᴀ Cʀʏɪɴ'
36. Hᴇʀᴏɪᴄ Aɢᴇ
37. Aϙᴜᴀʀɪᴏɴ Eᴠᴏʟ
38. Kᴜʀᴏᴍᴜᴋᴜʀᴏ
39. Nᴏʙᴜɴᴀɢᴀ ᴛʜᴇ Fᴏᴏʟ
40. Sᴄʜᴡᴀʀᴢᴇsᴍᴀʀᴋᴇɴ
41. Tᴏᴘ ᴡᴏ Nᴇʀᴀᴇ! Gᴜɴʙᴜsᴛᴇʀ
42. Sᴄʀᴀᴘᴘᴇᴅ Pʀɪɴᴄᴇss
43. Bʀᴇᴀᴋ Bʟᴀᴅᴇ
44. Mᴜᴠ-Lᴜᴠ Aʟᴛᴇʀɴᴀᴛɪᴠᴇ: Tᴏᴛᴀʟ Eᴄʟɪᴘsᴇ
45. Rᴀᴋᴜᴇɴ Tsᴜɪʜᴏᴜ 
46. Vᴀɴᴅʀᴇᴀᴅ
47. Bᴜʙᴜᴋɪ Bᴜʀᴀɴᴋɪ
48. Aᴘᴘʟᴇsᴇᴇᴅ (2004)
49. Dʀᴀɢᴏɴᴀᴜᴛ: Tʜᴇ Rᴇsᴏɴᴀɴᴄᴇ
50. Gᴜɴ X Sᴡᴏʀᴅ

Cᴀʀs
1. Tᴀᴋᴜᴍɪ's AE86 / Iɴɪᴛɪᴀʟ D
2. Aᴋɪᴏ's Fᴀɪʀ Lᴀᴅʏ Z / Wᴀɴɢᴀɴ Mɪᴅɴɪɢʜᴛ
3. JP's Tʀᴀɴsᴀᴍ / Rᴇᴅʟɪɴᴇ
4. Nɪᴄᴏ's Mᴇʀᴄᴇᴅᴇs A-ᴄʟᴀss / Nᴇxᴛ A-ᴄʟᴀss
5. Kᴀᴋᴇʀᴜ's Rᴀɪʟʙɪʀᴅ / Cʜᴏᴜsᴏᴋᴜ Hᴇɴᴋᴇɪ Gʏʀᴏᴢᴇᴛᴛᴇʀ
6. Sᴏɪᴄʜɪ's Lᴏᴛᴜs Sᴜᴘᴇʀ 7 / ᴇX-Dʀɪᴠᴇʀ: Tʜᴇ ᴍᴏᴠɪᴇ
7. Sʜɪʀᴏ's ᴍᴏᴅɪғɪᴇᴅ F-1 / Tᴀɪʟᴇɴᴅᴇʀs
8. Vɪᴄᴇ Pʀɪɴᴄɪᴘᴀʟ Uᴄʜɪʏᴀᴍᴀᴅᴀ's Tᴏʏᴏᴛᴀ Cʀᴇsᴛᴀ / GTO
9. Cᴀᴘᴇᴛᴀ's Fᴏʀᴍᴜʟᴀ Oɴᴇ / Cᴀᴘᴇᴛᴀ
10. Rᴏᴍᴀɴ ᴀɴᴅ Oᴛᴛᴏ's sʜᴀʀᴋ ᴄᴀʀ / Cᴏᴍᴇᴛ Lᴜᴄɪғᴇʀ

Dʀᴀᴍᴀ
1. RᴇLIFE
2. Tsᴜᴋɪ ɢᴀ Kɪʀᴇɪ
3. AɴᴏHᴀɴᴀ
4. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
5. Mᴀᴅᴇ Iɴ Aʙʏss
6. Kɪᴍɪ ɴᴏ Nᴀᴡᴀ
7. Rᴇ: Zᴇʀᴏ ᴋᴀʀᴀ Hᴀᴊɪᴍᴇʀᴜ Isᴇᴋᴀɪ Sᴇɪᴋᴀᴛsᴜ
8. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
9. Aɴɢᴇʟ Bᴇᴀᴛs
10. Cʜᴜᴜɴɪʙʏᴏᴜ ᴅᴇᴍᴏ Kᴏɪ ɢᴀ Sʜɪᴛᴀɪ!
11. Cʜᴀʀʟᴏᴛᴛᴇ
12. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
13. Kᴜᴢᴜ ɴᴏ Hᴏɴᴋᴀɪ
14. Eʀᴏᴍᴀɴɢᴀ-sᴇɴsᴇɪ
15. Aᴏ Hᴀʀᴜ Rɪᴅᴇ
16. Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
17. Sʜɪɴɢᴇᴋɪ ɴᴏ Kʏᴏᴜᴊɪɴ
18. Cʟᴀɴɴᴀᴅ
19. Wʜɪᴛᴇ Aʟʙᴜᴍ

Fᴀɴᴛᴀsʏ
1. Oɴᴇ Pɪᴇᴄᴇ
2. Mᴀᴅᴇ ɪɴ Aʙʏss
3. Rᴇ:Zᴇʀᴏ ᴋᴀʀᴀ Hᴀᴊɪᴍᴇʀᴜ Isᴇᴋᴀɪ Sᴇɪᴋᴀᴛsᴜ
4. DᴀɴMᴀᴄʜɪ
5. OᴠᴇʀLᴏʀᴅ
6. Sᴀʏᴏɴᴀʀᴀ ɴᴏ Asᴀ ɴɪ Yᴀᴋᴜsᴏᴋᴜhɴᴏ Hᴀɴᴀ ᴡᴏ 
7. Tᴀʟᴇs ᴏғ Zᴇsᴛɪʀɪᴀ ᴛʜᴇ X
8. Oᴏᴋᴀᴍɪ ᴛᴏ Kᴏᴜsʜɪɴʀʏᴏᴜ
9. Aᴋᴀᴛsᴜᴋɪ ɴᴏ Yᴏɴᴀ
10. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
11. Lᴏɢ Hᴏʀɪᴢᴏɴ
12. Bᴇʀsᴇʀᴋ
13. Nᴏ Gᴀᴍᴇ Nᴏ Lɪғᴇ
14. Nᴀɴᴀᴛsᴜ ɴᴏ Tᴀɪᴢᴀɪ
15. Mᴀɢɪ Sᴇʀɪᴇs
16. Fᴀɪʀʏ Tᴀɪʟ
17. Hᴜɴᴛᴇʀ x Hᴜɴᴛᴇʀ
18. Nᴀᴛsᴜᴍᴇ Yᴜᴜᴊɪɴᴄʜᴏᴜ
19. Sᴏᴜʟ Eᴀᴛᴇʀ
20. Fᴀᴛᴇ/sᴛᴀʏ ɴɪɢʜᴛ: Uɴʟɪᴍɪᴛᴇᴅ Bʟᴀᴅᴇ Wᴏʀᴋs
21. Zᴇᴛsᴜᴇɴ ɴᴏ Tᴇᴍᴘᴇsᴛ
22. Kᴇᴋᴋᴀɪ Sᴇɴsᴇɴ
23. Kᴏʙᴀᴛᴏ.
24. Dʀɪғᴛᴇʀs
25. Hᴀɪʙᴀɴᴇ Rᴇɴᴍᴇɪ
26. Mᴀʜᴏᴜᴊɪɴ Gᴜʀᴜɢᴜʀᴜ
27. Gᴀᴛᴇ: Jɪᴇɪᴛᴀɪ Kᴀɴᴏᴄʜɪ Nɪᴛᴇ, Kᴀᴋᴜ Tᴀᴛᴀᴋᴀᴇʀɪ
28. Sʜɪɴɢᴇᴋɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ Sᴇʀɪᴇs
29. Kᴏɴᴏsᴜʙᴀ
30. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
31. Vɪᴏʟᴇᴛ Eᴠᴇʀɢᴀʀᴅᴇɴ
32. Mᴜsʜɪsʜɪ
33. Hᴏᴡʟ ɴᴏ Uɢᴏᴋᴜ Sʜɪʀᴏ
34. Aʀɪᴀ Tʜᴇ Oʀɪɢɪɴᴀᴛɪᴏɴ
35. Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
36. Hᴏᴜsᴇᴋɪ ɴᴏ Kᴜɴɪ
37. Pʀɪɴᴄᴇss Mᴏɴᴏɴᴏᴋᴇ
38. Kᴇᴍᴏɴᴏ ɴᴏ Sᴏᴜᴊᴀ Eʀɪɴ
39. Yᴀᴏɢᴜᴀɪ Mɪɴɢᴅᴀɴ
40. Jᴜᴜɴɪ Kᴏᴋᴜᴋɪ
41. Cᴀʀᴅᴄᴀᴘᴛᴏʀ Sᴀᴋᴜʀᴀ: Cʟᴇᴀʀ Cᴀʀᴅ-ʜᴇɴ
42. Kᴏʙᴀʏᴀsʜɪ-sᴀɴ Cʜɪ ɴᴏ Mᴀɪᴅ Dʀᴀɢᴏɴ
43. Uᴄʜᴏᴜᴛᴇɴ Kᴀᴢᴏᴋᴜ
44. Nᴀɢɪ ɴᴏ Asᴜᴋᴀʀᴀ
45. Mᴀʜᴏᴜᴛsᴜᴋᴀɪ ɴᴏ Yᴏᴍᴇ
46. Lɪᴛᴛʟᴇ Wɪᴛᴄʜ Aᴄᴀᴅᴇᴍɪᴀ

Sᴄʜᴏᴏʟ Lɪғᴇ
1. Aᴏ Hᴀʀᴜ Rɪᴅᴇ
2. Hʏᴏᴜᴋᴀ
3. Cʜᴀʀʟᴏᴛᴛᴇ
4. Kᴏᴋᴏʀᴏ Cᴏɴɴᴇᴄᴛ
5. Kᴀʀᴀᴋᴀɪ Jᴏᴜᴢᴜ ɴᴏ Tᴀᴋᴀɢɪ-sᴀɴ
6. Bᴏᴋᴜ Dᴀᴋᴇ ɢᴀ Iɴᴀɪ Mᴀᴄʜɪ
7. Tᴏʀᴀᴅᴏʀᴀ!
8. Tsᴜᴋɪ ɢᴀ Kɪʀᴇɪ
9. Kʏᴏᴜᴋᴀɪ ɴᴏ Kᴀɴᴀᴛᴀ
10. RᴇLIFE
11. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
12. AɴᴏHᴀɴᴀ
13. Issʜᴜᴋᴀɴ Fʀɪᴇɴᴅs
14. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
15. Kᴜᴢᴜ ɴᴏ Hᴏɴᴋᴀɪ
16. Kɪᴍɪ ɴᴏ Nᴀᴡᴀ
17. Sᴜᴋɪᴛᴛᴇ Iɪ ɴᴀ ʏᴏ
18. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
19. Tᴏᴋʏᴏ Rᴀᴠᴇɴs
20. Hɪᴍᴏᴜᴛᴏ Uᴍᴀʀᴜ-ᴄʜᴀɴ
21. Mᴀsᴀᴍᴜɴᴇ-ᴋᴜɴ ɴᴏ Rᴇᴠᴇɴɢᴇ
22. Tʀɪɴɪᴛʏ Sᴇᴠᴇɴ
23. Aɴɢᴇʟ Bᴇᴀᴛs
24. Bʟᴇᴀᴄʜ
25. Bʟᴏᴏᴅ-C
26. Hɪɢʜ Sᴄʜᴏᴏʟ DxD
27. Bᴏᴋᴜ ɴᴏ Hᴇʀᴏ Aᴄᴀᴅᴇᴍɪᴀ
28. Sʜᴏᴋᴜɢᴇᴋɪ ɴᴏ Sᴏᴜᴍᴀ
29. Aɴsᴀᴛsᴜ Kʏᴏᴜsʜɪᴛsᴜ
30. Tᴏɴᴀʀɪ ɴᴏ Kᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
31. Oʀᴀɴɢᴇ
32. Kɪᴍɪ ɴɪ Tᴏᴅᴏᴋᴇ
33. Sᴀᴋᴀᴍᴏᴛᴏ ᴅᴇsᴜ ɢᴀ?
34. Cʜᴜᴜɴɪʙʏᴏᴜ ᴅᴇᴍᴏ Kᴏɪ ɢᴀ Sʜɪᴛᴀɪ!
35. Kᴜʀᴏᴋᴏ ɴᴏ Bᴀsᴜᴋᴇ
36. Nɪsᴇᴋᴏɪ
37. Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ ɴᴏ Sᴏᴅᴀᴛᴇᴋᴀᴛᴀ
38. Hɪʙɪᴋᴇ! Eᴜᴘʜᴏɴɪᴜᴍ
39. Nᴏɴ Nᴏɴ Bɪʏᴏʀɪ
40. Gᴀʙʀɪᴇʟ DʀᴏᴘOᴜᴛ
41. Aʜᴏ Gɪʀʟ
42. Iᴛsᴜᴅᴀᴛᴛᴇ Bᴏᴋᴜʀᴀ ɴᴏ Kᴏɪ ᴡᴀ 10-Cᴇɴᴛɪᴍᴇᴛᴇʀs Dᴀᴛᴛᴀ
43. Jᴜsᴛ Bᴇᴄᴀᴜsᴇ!
44. Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
45. Kᴏᴋᴏʀᴏ ɢᴀ Sᴀᴋᴇʙɪᴛᴀɢᴀᴛᴛᴇʀᴜɴᴅᴀ

Sʟɪᴄᴇ ᴏғ Lɪғᴇ
1. Gᴇɴsʜɪᴋᴇɴ
2. Sʜɪɴʀʏᴀᴋᴜ! Iᴋᴀ Mᴜsᴜᴍᴇ
3. Uᴄʜᴏᴜᴛᴇɴ Kᴀᴢᴏᴋᴜ
4. Kᴏᴛᴏɴᴏʜᴀ ɴᴏ Nɪᴡᴀ
5. Mᴜsʜɪsʜɪ
6. Pᴀᴘᴀ ɴᴏ Iᴜᴋᴏᴛᴏ ᴡᴏ Kɪᴋɪɴᴀsᴀɪ!
7. Aɪʀ
8. Aɴᴏ Hɪ Mɪᴛᴀ Hᴀɴᴀ ɴᴏ Nᴀᴍᴀᴇ ᴡᴏ Bᴏᴋᴜᴛᴀᴄʜɪ ᴡᴀ Mᴀᴅᴀ Sʜɪʀᴀɴᴀɪ.
9. Nᴀᴛsᴜᴍᴇ Yᴜᴜᴊɪɴᴄʜᴏᴜ
10. Bᴀʀᴀᴋᴀᴍᴏɴ ᴅᴀɴ Hᴀɴᴅᴀ-ᴋᴜɴ
11. Dᴀɢᴀsʜɪ Kᴀsʜɪ
12. Aᴍᴀᴀᴍᴀ ᴛᴏ Iɴᴀᴢᴜᴍᴀ
13. Cʟᴀɴɴᴀᴅ
14. Kᴏʙᴀʏᴀsʜɪ-sᴀɴ Cʜɪ ɴᴏ Mᴀɪᴅ Dʀᴀɢᴏɴ
15. Hɪᴍᴏᴜᴛᴏ! Uᴍᴀʀᴜ-ᴄʜᴀɴ
16. Sᴀᴋᴜʀᴀ Qᴜᴇsᴛ
17. Mᴀʜᴏᴜᴛsᴜᴋᴀɪ ɴᴏ Yᴏᴍᴇ
18. Kᴀʀᴀᴋᴀɪ Jᴏᴜᴢᴜ ɴᴏ Tᴀᴋᴀɢɪ-sᴀɴ
19. Sᴏʀᴀ ʏᴏʀɪ ᴍᴏ Tᴏᴏɪ Bᴀsʜᴏ
20. Sᴇʀᴠᴀɴᴛ x Sᴇʀᴠɪᴄᴇ
21. Tᴀᴍᴀᴋᴏ Lᴏᴠᴇ Sᴛᴏʀʏ
22. Nᴏɴ Nᴏɴ Bɪʏᴏʀɪ
23. Usᴀɢɪ Dʀᴏᴘ
24. Nᴇᴡ Gᴀᴍᴇ!
25. Wᴏʀᴋɪɴɢ!! (Wᴀɢɴᴀʀɪᴀ!!) Sᴇʀɪᴇs
26. Gᴏᴄʜᴜᴜᴍᴏɴ ᴡᴀ Usᴀɢɪ ᴅᴇsᴜ ᴋᴀ??
27. Aʀɪᴀ Tʜᴇ Oʀɪɢɪɴᴀᴛɪᴏɴ
28. Uᴄʜᴜᴜ Kʏᴏᴜᴅᴀɪ
28. Nɪᴄʜɪᴊᴏᴜ
30. Nᴀɴᴀ
31. Kᴇᴍᴏɴᴏ ɴᴏ Sᴏᴜᴊᴀ Eʀɪɴ
32. Nᴏᴅᴀᴍᴇ Cᴀɴᴛᴀʙɪʟᴇ
33. Dᴀɴsʜɪ Kᴏᴜᴋᴏᴜsᴇɪ ɴᴏ Nɪᴄʜɪᴊᴏᴜ
34. K-Oɴ!
35. Yᴜʀᴜ Cᴀᴍᴘ
36. Gɪɴ ɴᴏ Sᴀᴊɪ
37. Hᴀᴄʜɪᴍɪᴛsᴜ ᴛᴏ Cʟᴏᴠᴇʀ
38. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
39. RᴇLIFE
40. Kᴜʀᴀɢᴇʜɪᴍᴇ
41. Sʜᴏᴜᴊᴏ Sʜᴜᴜᴍᴀᴛsᴜ Rʏᴏᴋᴏᴜ
42. Eᴠᴇ ɴᴏ Jɪᴋᴀɴ
43. Hʏᴏᴜᴋᴀ
44. Iᴇ Nᴀᴋɪ Kᴏ Rᴇᴍʏ
45. Tᴀɴᴀᴋᴀ-ᴋᴜɴ ᴡᴀ Iᴛsᴜᴍᴏ Kᴇᴅᴀʀᴜɢᴇ
46. Sʜɪʀᴏʙᴀᴋᴏ
47. Gʀᴇᴀᴛ Tᴇᴀᴄʜᴇʀ Oɴɪᴢᴜᴋᴀ
48. Sᴀɪᴋɪ Kᴜsᴜᴏ ɴᴏ Ψ Nᴀɴ
49. Vɪᴏʟᴇᴛ Eᴠᴇʀɢᴀʀᴅᴇɴ
50. 3-ɢᴀᴛsᴜ ɴᴏ Lɪᴏɴ
51. Gᴀᴋᴜᴇɴ Bᴀʙʏsɪᴛᴛᴇʀs
52. Mɪᴛsᴜʙᴏsʜɪ Cᴏʟᴏʀs
53. Hɪɴᴀᴍᴀᴛsᴜʀɪ
54. Tᴀᴅᴀ-ᴋᴜɴ ᴡᴀ Kᴏɪ ᴡᴏ Sʜɪɴᴀɪ
55. Cᴏᴍɪᴄ Gɪʀʟs
56. Bʏᴏᴜsᴏᴋᴜ 5 Cᴇɴᴛɪᴍᴇᴛᴇʀ
57. Hᴀɴᴀsᴀᴋᴜ Iʀᴏʜᴀ
58. Dᴇɴᴘᴀ Oɴɴᴀ ᴛᴏ Sᴇɪsʜᴜɴ Oᴛᴏᴋᴏ

Sᴀᴍᴜʀᴀɪ
1. Sᴀᴍᴜʀᴀɪ 7
2. Rᴜʀᴏᴜɴɪ Kᴇɴsʜɪɴ
3. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
4. Aғʀᴏ Sᴀᴍᴜʀᴀɪ
5. Sᴇɴɢᴏᴋᴜ Bᴀsᴀʀᴀ: Sᴀᴍᴜʀᴀɪ Kɪɴɢs
6. Gɪɴᴛᴀᴍᴀ
7. Hᴀᴋᴜᴏᴜᴋɪ
8. Sᴡᴏʀᴅ ᴏғ ᴛʜᴇ Sᴛʀᴀɴɢᴇʀ
9. Bʟᴀᴅᴇ ᴏғ ᴛʜᴇ Iᴍᴍᴏʀᴛᴀʟ
10. Rᴏɴɪɴ Wᴀʀʀɪᴏʀs
11.Sᴀᴍᴜʀᴀɪ X

Mɪʟɪᴛᴀʀʏ
1. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
2. Sʜɪɴɢᴇᴋɪ ɴᴏ Kʏᴏᴊɪɴ
3. Cᴏᴅᴇ Gᴇᴀss: Hᴀɴɢʏᴀᴋᴜ ɴᴏ Lᴇʟᴏᴜᴄʜ
4. Oᴡᴀʀɪ ɴᴏ Sᴇʀᴀᴘʜ
5. Gᴀᴛᴇ: Jɪᴇɪᴛᴀɪ Kᴀɴᴏᴄʜɪ ɴɪᴛᴇ, Kᴀᴋᴜ Tᴀᴛᴀᴋᴀᴇʀɪ
6. Aʟᴅɴᴏᴀʜ .Zᴇʀᴏ
7. Gᴏᴅ Eᴀᴛᴇʀ
8. Yᴏᴜᴊᴏ Sᴇɴᴋɪ 
9. SAO Aʟᴛᴇʀɴᴀᴛɪᴠᴇ: Gᴜɴ Gᴀʟᴇ Oɴʟɪɴᴇ
10. Nᴇᴊɪᴍᴀᴋɪ Sᴇɪʀᴇɪ Sᴇɴᴋɪ: Tᴇɴᴋʏᴏᴜ ɴᴏ Aʟᴅᴇʀᴀᴍɪɴ
11. Gɪʀʟs ᴜɴᴅ Pᴀɴᴢᴇʀ
12. Kᴀɴᴛᴀɪ Cᴏʟʟᴇᴄᴛɪᴏɴ
13. Mᴜᴠ-Lᴜᴠ Aʟᴛᴇʀɴᴀᴛɪᴠᴇ: Tᴏᴛᴀʟ Eᴄʟɪᴘsᴇ
14. 07-Gʜᴏsᴛ
15. Mᴏʙɪʟᴇ Sᴜɪᴛ Gᴜɴᴅᴀᴍ 00
16. Kɪɴɢᴅᴏᴍ
17. Kᴀᴋᴜᴍᴇɪᴋɪ Vᴀʟᴠʀᴀᴠᴇ
18. Sᴛʀɪᴋᴇ Wɪᴛᴄʜᴇs
19. Mᴀᴄʀᴏss Fʀᴏɴᴛɪᴇʀ
20. Sᴏ Rᴀ Nᴏ Wᴏ Tᴏ
21. Hᴇᴀᴠʏ Oʙᴊᴇᴄᴛ
22. Sᴇɴᴊᴏᴜ ɴᴏ Vᴀʟᴋʏʀɪᴀ
23. Oᴛᴏᴍᴇ Yᴏᴜᴋᴀɪ Zᴀᴋᴜʀᴏ
24. Aɴɢᴏʟᴍᴏɪs: Gᴇɴᴋᴏᴜ Kᴀssᴇɴᴋɪ
25. Bʀᴇᴀᴋ Bʟᴀᴅᴇ
26. Hɪɢʜ Sᴄʜᴏᴏʟ Fʟᴇᴇᴛ
27. Tᴏsʜᴏᴋᴀɴ Sᴇɴsᴏᴜ
28. Sᴀʙᴀɢᴇʙᴜ!
29. Tᴀɪᴍᴀᴅᴏᴜ Gᴀᴋᴜᴇɴ 35 Sʜɪᴋᴇɴ Sʜᴏᴜᴛᴀɪ
30. Jᴏᴋᴇʀ Gᴀᴍᴇ

Hɪsᴛᴏʀɪᴄᴀʟ
1. Gɪɴᴛᴀᴍᴀ
2. Mᴜsʜɪsʜɪ
3. Dᴏʀᴏʀᴏ
4. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
5. Bᴀᴄᴄᴀɴᴏ!
6. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ
7. Rᴜʀᴏᴜɴɪ Kᴇɴsʜɪɴ: Mᴇɪᴊɪ Kᴇɴᴋᴀᴋᴜ Rᴏᴍᴀɴᴛᴀɴ
8. Gᴏsɪᴄᴋ
9. Kɪɴɢᴅᴏᴍ
10. Kᴜʀᴏsʜɪᴛsᴜᴊɪ
11. Aᴏɪ Bᴜɴɢᴀᴋᴜ Sᴇʀɪᴇs
12. Hᴇᴛᴀʟɪᴀ Axɪs Pᴏᴡᴇʀs
13. Hᴀᴋᴜᴏᴜᴋɪ
14. Sᴇɴɢᴏᴋᴜ Bᴀsᴀʀᴀ
15. Jᴏᴋᴇʀ Gᴀᴍᴇ
16. Kᴀɢᴜʏᴀ Hɪᴍᴇ ɴᴏ Mᴏɴᴏɢᴀᴛᴀʀɪ
17. Eɪᴋᴏᴋᴜ Kᴏɪ Mᴏɴᴏɢᴀᴛᴀʀɪ 

Pᴏʟɪᴄᴇ
1. Tᴀɪʜᴏ Sʜɪᴄʜᴀᴜ ᴢᴏ
2. Gʜᴏsᴛ ɪɴ ᴛʜᴇ Sʜᴇʟʟ
3. Kᴏᴄʜɪʀᴀ Kᴀᴛsᴜsʜɪᴋᴀᴋᴜ Kᴀᴍᴇᴀʀɪ Kᴏᴜᴇɴᴍᴀᴇ 
4. Hᴀsʜᴜᴛsᴜᴊᴏ
5. Psʏᴄʜᴏ-Pᴀss
6. Mᴏʙɪʟᴇ Pᴏʟɪᴄᴇ Pᴀᴛʟᴀʙᴏʀ
7. Mɪʀᴀɪ Kᴇɪsᴀᴛsᴜ Uʀᴀsʜɪᴍᴀɴ
8. Wɪʟᴅ 7
9. Yᴜᴜsʜᴀ Kᴇɪsᴀᴛsᴜ J-Dᴇᴄᴋᴇʀ
10. Hɪᴍɪᴛsᴜ: Tʜᴇ Rᴇᴠᴇʟᴀᴛɪᴏɴ
11. Sᴀᴍᴜʀᴀɪ Fʟᴀᴍᴇɴᴄᴏ
12. B: Tʜᴇ Bᴇɢɪɴɴɪɴɢ
13. Jɪɴ-Rᴏʜ: Tʜᴇ Wᴏʟғ Bʀɪɢᴀᴅᴇ
14. Oɴɪʜᴇɪ
15. Kɪᴅᴏᴜ Kᴇɪsᴀᴛsᴜ Pᴀᴛʟᴀʙᴏʀ: Oɴ ᴛᴇʟᴇᴠɪsɪᴏɴ
16. Mᴏᴜsᴏᴜ Dᴀɪʀɪɴɪɴ
17. Pᴇᴀᴄᴇ Mᴀᴋᴇʀ Kᴜʀᴏɢᴀɴᴇ
18. Hʏᴘᴇʀ Pᴏʟɪᴄᴇ

Sᴄɪ-ғɪ
1. Sᴛᴇɪɴs;Gᴀᴛᴇ
2. Iɴᴜʏᴀsʜɪᴋɪ
3. Mᴀᴅᴇ ɪɴ Aʙʏss
4. Cᴏᴡʙᴏʏ Bᴇʙᴏᴘ
5. Pʟᴀsᴛɪᴄ Mᴇᴍᴏʀɪᴇs
6. Eᴜʀᴇᴋᴀ Sᴇᴠᴇɴ
7. Mᴀʜᴏᴜᴋᴀ Kᴏᴜᴋᴏᴜ ɴᴏ Rᴇᴛᴛᴏᴜsᴇɪ
8. Dɪᴍᴇɴsɪᴏɴ W
9. Dᴀʀʟɪɴɢ ɪɴ ᴛʜᴇ FʀᴀɴXX
10. Dᴇɴɴᴏᴜ Cᴏɪʟ
11. Sᴘᴀᴄᴇ☆Dᴀɴᴅʏ
12. Kɪᴢɴᴀɪᴠᴇʀ
13. Nᴇᴏɴ Gᴇɴᴇsɪs Eᴠᴀɴɢᴇʟɪᴏɴ
14. Rᴏʙᴏᴛɪᴄs;Nᴏᴛᴇs
15. Pᴀᴘʀɪᴋᴀ
16. Mᴇɢᴀʟᴏ Bᴏx
17. Gʜᴏsᴛ ɪɴ ᴛʜᴇ Sʜᴇʟʟ
18. Gᴀᴛᴄʜᴀᴍᴀɴ Cʀᴏᴡᴅs
19. Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
20. Gɪɴᴛᴀᴍᴀ
21. Sᴀᴋᴀsᴀᴍᴀ ɴᴏ Pᴀᴛᴇᴍᴀ
22. Eᴠᴇ ɴᴏ Jɪᴋᴀɴ
23. Psʏᴄʜᴏ-Pᴀss
24. Dᴇɴᴘᴀ Oɴɴᴀ ᴛᴏ Sᴇɪsʜᴜɴ Oᴛᴏᴋᴏ
25. Mᴇᴋᴀᴋᴜᴄɪᴛʏ Aᴄᴛᴏʀs
26. Pʟᴀɴᴇᴛᴇs
27. Bᴜᴅᴅʏ Cᴏᴍᴘʟᴇx
28. Pᴇʀsᴏɴᴀ Sᴇʀɪᴇs
29. Sᴏʀᴀ ɴᴏ Oᴛᴏsʜɪᴍᴏɴᴏ

Sᴘᴏʀᴛ
1. Cᴀᴘᴛᴀɪɴ Tsᴜʙᴀsᴀ
2. Gɪᴀɴᴛ Kɪʟʟɪɴɢ
3. Tʜᴇ Kɴɪɢʜᴛ ɪɴ Tʜᴇ Aʀᴇᴀ (Aʀᴇᴀ ɴᴏ Kɪsʜɪ )
4. Aᴏᴋɪ Dᴇɴsᴇᴛsᴜ Sʜᴏᴏᴛ! (Bʟᴜᴇ Lᴇɢᴇɴᴅ Sʜᴏᴏᴛ!)
5. Dᴀʏs
6. Wʜɪsᴛʟᴇ!
7. Oғғsɪᴅᴇ
8. Dʀᴀɢᴏɴ Lᴇᴀɢᴜᴇ
9. Fᴀɴᴛᴀsɪsᴛᴀ Sᴛᴇʟʟᴀ
10. Iɴᴀᴢᴜᴍᴀ Eʟᴇᴠᴇɴ
11. Gɪɴɢᴀ ᴇ Kɪᴄᴋᴏғғ!!
12. Hᴜɴɢʀʏ Hᴇᴀʀᴛ Wɪʟᴅ Sᴛʀɪᴋᴇʀ
13. Gᴀɴʙᴀʀᴇ Kɪᴄᴋᴇʀs
14. Kᴜʀᴏᴋᴏ Nᴏ Bᴀsᴋᴇᴛ
15. Sʟᴀᴍ Dᴜɴᴋ
16. Dᴇᴀʀ Bᴏʏs
17. I’ʟʟ/CKBC
18. Bᴜᴢᴢᴇʀ Bᴇᴀᴛᴇʀ
19. Bᴀsϙᴜᴀsʜ!
20. Rᴏ-Kʏᴜ-Bᴜ!
21. Dᴀsʜ Kᴀᴘᴘᴇɪ
22. Dɪᴀᴍᴏɴᴅ ɴᴏ Aᴄᴇ (Aᴄᴇ ᴏғ Dɪᴀᴍᴏɴᴅ)
23. Pʀɪɴᴄᴇss Nɪɴᴇ: Kɪsᴀʀᴀɢɪ Jᴏsʜɪᴋᴏᴜ Yᴀᴋʏᴜᴜʙᴜ
24. Mᴀᴊᴏʀ
25. Tᴏᴜᴄʜ
26. H2
27. Cʀᴏss Gᴀᴍᴇ
28. Tᴀɪsʜᴏᴜ Yᴀᴋʏᴜᴜ Mᴜsᴜᴍᴇ
29. Mᴏsʜɪᴅᴏʀᴀ (Wʜᴀᴛ Iғ ᴀ Fᴇᴍᴀʟᴇ Mᴀɴᴀɢᴇʀ ᴏғ ᴀ Hɪɢʜ Sᴄʜᴏᴏʟ Bᴀsᴇʙᴀʟʟ Tᴇᴀᴍ Rᴇᴀᴅ Dʀᴜᴄᴋᴇʀ’s)
30. Oɴᴇ Oᴜᴛs
31. Oᴏᴋɪᴋᴜ Fᴜʀɪᴋᴀʙᴜᴛᴛᴇ (Bɪɢ Wɪɴᴅᴜᴘ!)
32. Hᴀɪᴋʏᴜᴜ
33. Aᴛᴛᴀᴄᴋ ᴏɴ Tᴏᴍᴏʀʀᴏᴡ
34. Aᴛᴛᴀᴄᴋ Nᴏ.1
35. Aᴛᴛᴀᴄᴋᴇʀ Yᴏᴜ
36. Yᴏᴡᴀᴍᴜsʜɪ Pᴇᴅᴀʟ
37. Iᴅᴀᴛᴇɴ Jᴜᴍᴘ
38. Oᴠᴇʀ Dʀɪᴠᴇ
39. Nᴀsᴜ: Sᴜᴍᴍᴇʀ ɪɴ Aɴᴅᴀʟᴜsɪᴀ
40. Nᴀsᴜ : A Mɪɢʀᴀᴛᴏʀʏ Bɪʀᴅ ᴡɪᴛʜ Sᴜɪᴛᴄᴀsᴇ
41. Hᴀᴊɪᴍᴇ ɴᴏ Iᴘᴘᴏ
42. Asʜɪᴛᴀ ɴᴏ Jᴏᴇ
43. Gᴀɴʙᴀʀᴇ Gᴇɴᴋɪ
44. Nᴏᴢᴏᴍɪ Wɪᴛᴄʜᴇs
45. Oɴᴇ Pᴏᴜɴᴅ Gᴏsᴘᴇʟ
46. Aɪᴍ ғᴏʀ ᴛʜᴇ Aᴄᴇ!
47. Tʜᴇ Pʀɪɴᴄᴇ ᴏғ Tᴇɴɴɪs
48. Bᴀʙʏ Sᴛᴇᴘs
49. Eʏᴇsʜɪᴇʟᴅ 21
50. Sᴍᴀsʜ
51. Sʜᴀᴋᴜɴᴇᴛsᴜ ɴᴏ ᴛᴀᴋᴋʏᴜᴜ ᴍᴜsᴜᴍᴇ
52. Aɪʀ ɢᴇᴀʀ
53. Pʀɪɴᴄᴇ Oғ Sᴛʀɪᴅᴇ Aʟᴛᴇʀɴᴀᴛɪᴠᴇ
54. Fʀᴇᴇ!
55. Kᴇɴᴋᴏᴜ Zᴇɴʀᴀᴋᴇɪ Sᴜɪᴇɪʙᴜ Uᴍɪsʜᴏᴜ

Mᴀʀᴛɪᴀʟ Aʀᴛ
1. Bᴏʀᴜᴛᴏ: Nᴀʀᴜᴛᴏ Nᴇxᴛ Gᴇɴᴇʀᴀᴛɪᴏɴs
2. Sʜɪᴋᴀʙᴀɴᴇ Hɪᴍᴇ: Aᴋᴀ
3. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ
4. Sʜɪᴊᴏᴜ Sᴀɪᴋʏᴏᴜ ɴᴏ Dᴇsʜɪ Kᴇɴɪᴄʜɪ (KᴇɴIᴄʜɪ: Tʜᴇ Mɪɢʜᴛɪᴇsᴛ Dɪsᴄɪᴘʟᴇ)
5. Mᴀᴊɪ ᴅᴇ Wᴀᴛᴀsʜɪ ɴɪ Kᴏɪ Sʜɪɴᴀsᴀɪ!
6. Tᴀʙᴏᴏ Tᴀᴛᴛᴏᴏ
7. Sᴇɴɢᴏᴋᴜ Bᴀsᴀʀᴀ
8. Bᴇɴ-ᴛᴏ
9. Mᴇᴅᴀᴋᴀ Bᴏx
10. Mᴜsʜɪʙᴜɢʏᴏᴜ
11. Mᴀᴋᴇɴ-ᴋɪ!
12. Bʟᴀᴅᴇ & Sᴏᴜʟ
13. Fʀᴇᴇᴢɪɴɢ
14. Iᴋᴋɪᴛᴏᴜsᴇɴ (Iᴋᴋɪ Tᴏᴜsᴇɴ)
15. Asᴜ ɴᴏ Yᴏɪᴄʜɪ!
16. Kᴜʀᴏᴋᴀᴍɪ Tʜᴇ Aɴɪᴍᴀᴛɪᴏɴ
17. Tᴏᴋʏᴏ Mᴀᴊɪɴ Gᴀᴋᴜᴇɴ Kᴇɴᴘᴜᴄʜᴏ: Tᴏᴜ
18. Tᴇɴᴊᴏᴜ Tᴇɴɢᴇ
19. Bᴀᴋɪ (2018)
20. Kᴏɪʜɪᴍᴇ †Mᴜsᴏᴜ
21. Dʀᴀɢᴏɴ Bᴀʟʟ

Mᴜsɪᴋ
1. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
2. Hɪʙɪᴋᴇ! Eᴜᴘʜᴏɴɪᴜᴍ
3. Zᴏᴍʙɪᴇʟᴀɴᴅ Sᴀɢᴀ
4. K-Oɴ!
5. Nᴏᴅᴀᴍᴇ Cᴀɴᴛᴀʙɪʟᴇ
6. Sᴏ Rᴀ Nᴏ Wᴏ Tᴏ
7. Bᴇᴄᴋ
8. BᴀɴG Dʀᴇᴀᴍ!
9. Tʜᴇ ɪDOLM@STER
10. Lᴏᴠᴇ Lɪᴠᴇ! Sᴄʜᴏᴏʟ Iᴅᴏʟ Pʀᴏᴊᴇᴄᴛ
11. Dᴇᴛʀᴏɪᴛ Mᴇᴛᴀʟ Cɪᴛʏ
12. Nᴀɴᴀ
13. IDOLɪSH7
14. Sᴀᴋᴀᴍɪᴄʜɪ ɴᴏ Aᴘᴏʟʟᴏɴ
15. Kɪɴɪʀᴏ ɴᴏ Cᴏʀᴅᴀ
16. Mᴀɢɪᴄ-Kʏᴜɴ! Rᴇɴᴀɪssᴀɴᴄᴇ
17. Pɪᴀɴᴏ ɴᴏ Mᴏʀɪ
18. Fᴜʟʟ Mᴏᴏɴ ᴡᴏ Sᴀɢᴀsʜɪᴛᴇ
19. Wʜɪᴛᴇ Aʟʙᴜᴍ
20. Wᴀᴋᴇ Uᴘ, Gɪʀʟs!
21. Tᴀʀɪ Tᴀʀɪ
22. Gʀᴀᴠɪᴛᴀᴛɪᴏɴ
23. Mᴀᴄʀᴏss Sᴇʀɪᴇs
24. ᴇғ: A Tᴀʟᴇ ᴏғ Mᴇᴍᴏʀɪᴇs.
25. Kᴀᴄʜᴏᴜ Oᴜᴊɪ
26. Lɪᴢ ᴛᴏ Aᴏɪ Tᴏʀɪ
27. Yᴏᴀᴋᴇ Tsᴜɢᴇʀᴜ Lᴜ ɴᴏ Uᴛᴀ
28. Aɪᴋᴀᴛsᴜ!
29. Sᴛᴀʀᴍʏᴜ
30. Fᴜᴜᴋᴀ
31. Sʜᴇʟᴛᴇʀ
32. AKB0048
33. Sʜᴏᴡ Bʏ Rᴏᴄᴋ!!
34. Sʏᴍᴘʜᴏɢᴇᴀʀ 

Hᴀʀᴇᴍ
1. Dᴀᴛᴇ ᴀ Lɪᴠᴇ
2.Mᴀʏᴏ Cʜɪᴋɪ!
3. Mᴏɴsᴛᴇʀ Mᴜsᴜᴍᴇ Nᴏ Iʀᴜ Nɪᴄʜɪᴊᴏᴜ
4. Tᴀɪᴍᴀᴅᴏᴜ Gᴀᴋᴜᴇɴ 35 Sʜᴏᴜᴛᴀɪ
5. Tʜᴇ Wᴏʀʟᴅ Gᴏᴅ Oɴʟʏ Kɴᴏᴡs
6. Dᴇɴᴘᴀ Kʏᴏᴜsʜɪ
7. Kᴏʀᴇ Wᴀ Zᴏᴍʙɪᴇ Dᴇsᴜᴋᴀ
8. Mᴏɴᴏɢᴀᴛᴀʀɪ Sᴇʀɪᴇs
9. OʀᴇIᴍᴏ
10. Zᴇʀᴏ ɴᴏ Tsᴜᴋᴀɪᴍᴀ
11. Mᴀʜᴏᴜ Sᴇɴsᴇɪ Nᴇɢɪᴍᴀ!
12. Isᴇᴋᴀɪ ɴᴏ Sᴇɪᴋɪsʜɪ Mᴏɴᴏɢᴀᴛᴀʀɪ
13. Mᴀɴɢᴀᴋᴀ-sᴀɴ ᴛᴏ Assɪsᴛᴀɴᴛ-sᴀɴ ᴛᴏ Tʜᴇ Aɴɪᴍᴀᴛɪᴏɴ
14. Iᴄʜɪɢᴏ 100%
15. Hᴀɪʏᴏʀᴇ! Nʏᴀʀᴜᴋᴏ-sᴀɴ
16. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
17. Cᴀᴍᴘɪᴏɴᴇ!
18. Gʀɪsᴀɪᴀ Sᴇʀɪᴇs
19. Fʀᴇᴇᴢɪɴɢ
20. MM!
21. NᴏᴜCᴏᴍᴇ
22. Aʜ, Mʏ Gᴏᴅᴅᴇss
23. Lᴏᴠᴇ Hɪɴᴀ
24. Hɪɢʜ Sᴄʜᴏᴏʟ ᴏғ ᴛʜᴇ Dᴇᴀᴅ
25. Kɪss x sɪs
26. Hᴇɴᴛᴀɪ Oᴜᴊɪ ᴛᴏ Wᴀʀᴀᴡᴀɴᴀɪ Nᴇᴋᴏ.
27. Sʜɪɴᴍᴀɪ Mᴀᴏᴜ ɴᴏ Tᴇsᴛᴀᴍᴇɴᴛ
28. Sᴇᴋɪʀᴇɪ
29. Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
30. Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ ɴᴏ Sᴏᴅᴀᴛᴇᴋᴀᴛᴀ
31. Mᴀsᴀᴍᴜɴᴇ-ᴋᴜɴ ɴᴏ Rᴇᴠᴇɴɢᴇ
32. Oʀᴇ ɴᴏ Kᴀɴᴏᴊᴏ ᴛᴏ Osᴀɴᴀɴᴀᴊɪᴍɪ ɢᴀ Sʜᴜʀᴀʙᴀ Sᴜɢɪʀᴜ
33. Sʜᴜғғʟᴇ!
34. Nʏᴀɴ Kᴏɪ!
35. Oᴜᴛʙʀᴇᴀᴋ Cᴏᴍᴘᴀɴʏ
36. Mᴀᴅᴀɴ ɴᴏ Oᴜ ᴛᴏ Vᴀɴᴀᴅɪs
37. Mᴀᴊɪ ᴅᴇ Wᴀᴛᴀsʜɪ ɴɪ Kᴏɪ Sʜɪɴᴀsᴀɪ!
38. Pʀɪɴᴄᴇss Lᴏᴠᴇʀ!
29. Sᴇɪᴋᴇɴ Tsᴜᴋᴀɪ ɴᴏ Wᴏʀʟᴅ Bʀᴇᴀᴋ
40. Rᴏᴋᴜᴊᴏᴜᴍᴀ ɴᴏ Sʜɪɴʀʏᴀᴋᴜsʜᴀ!?
41. Hɪɢʜ Sᴄʜᴏᴏʟ DxD
42. Nɪsᴇᴋᴏɪ
43. Bᴏᴋᴜ ᴡᴀ Tᴏᴍᴏᴅᴀᴄʜɪ ɢᴀ Sᴜᴋᴜɴᴀɪ
44. Rᴏsᴀʀɪᴏ ᴛᴏ Vᴀᴍᴘɪʀᴇ
45. IS: Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
46. Tᴏ LOVE-Rᴜ Sᴇʀɪᴇs
47. Sᴏʀᴀ ɴᴏ Oᴛᴏsʜɪᴍᴏɴᴏ
48. Tʀɪɴɪᴛʏ Sᴇᴠᴇɴ
49. Yᴀᴍᴀᴅᴀ-ᴋᴜɴ ᴛᴏ 7-ɴɪɴ ɴᴏ Mᴀᴊᴏ
50. Iᴄʜɪʙᴀɴ Usʜɪʀᴏ ɴᴏ Dᴀɪᴍᴀᴏᴜ

Rᴇᴠᴇʀsᴇ Hᴀʀᴇᴍ
1. Hᴀɴᴀsᴀᴋᴇʀᴜ Sᴇɪsʜᴏᴜɴᴇɴ
2. Uᴛᴀ ɴᴏ☆Pʀɪɴᴄᴇ-sᴀᴍᴀ♪
3. Hᴀᴋᴜᴏᴜᴋɪ
4. Yᴀᴍᴀᴛᴏ Nᴀᴅᴇsʜɪᴋᴏ Sʜɪᴄʜɪ Hᴇɴɢᴇ
5. Aᴋᴀᴛsᴜᴋɪ ɴᴏ Yᴏɴᴀ
6. Fᴜsʜɪɢɪ Yᴜᴜɢɪ (Mʏsᴛᴇʀɪᴏᴜs Pʟᴀʏ)
7. Dɪᴀʙᴏʟɪᴋ Lᴏᴠᴇʀs
8. Aʀᴄᴀɴᴀ Fᴀᴍɪɢʟɪᴀ
9. Bʀᴏᴛʜᴇʀs Cᴏɴғʟɪᴄᴛ
10. Dᴀɴᴄᴇ ᴡɪᴛʜ Dᴇᴠɪʟs
11. Oᴜʀᴀɴ Hɪɢʜ Sᴄʜᴏᴏʟ Hᴏsᴛ Cʟᴜʙ
12. Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
13. Aᴍɴᴇsɪᴀ
14. Bᴏɴᴊᴏᴜʀ Sᴡᴇᴇᴛ Lᴏᴠᴇ Pᴀᴛɪssᴇʀɪᴇ
15. Kᴀᴍɪɢᴀᴍɪ ɴᴏ Asᴏʙɪ
16. Hɪɪʀᴏ ɴᴏ Kᴀᴋᴇʀᴀ

Rᴏᴍᴀɴᴄᴇ
1 Cʟᴀʏ & Mᴀʀɪᴀ
2. Wʜɪᴛᴇ Aʟʙᴜᴍ 
3. Cʟᴀɴɴᴀᴅ Aғᴛᴇʀ Sᴛᴏʀʏ
4. Aɴɢᴇʟ Bᴇᴀᴛs
5. Isʜᴜᴜᴋᴀɴ Fʀɪᴇɴᴅs.
6. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
7. Nɪsᴇᴋᴏɪ
8. Gᴏʟᴅᴇɴ Tɪᴍᴇ
9. Nᴀɢɪ ɴᴏ Asᴜᴋᴀʀᴀ
10. Aᴏ Hᴀʀᴜ Rɪᴅᴇ
11. Oʀᴇ Mᴏɴᴏɢᴀᴛᴀʀɪ
12. Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ Nᴏ Sᴏᴅᴀᴛᴇᴋᴀ
13. Gᴇᴋᴋᴀɴ Sʜᴏᴊᴏᴜ Nᴏᴢᴀᴋɪ-Kᴜɴ
14. Sᴀɴᴋᴀʀᴇᴀ
15. Kᴏᴋᴏʀᴏ Cᴏɴɴᴇᴄᴛ
16. Aᴍᴀɢᴀᴍɪ SS
17. Kᴏᴛᴏᴜʀᴀ-sᴀɴ (Mᴀsᴜᴋɪɴ Dᴀғᴛᴀʀ Cᴀᴅᴀɴɢᴀɴ Aᴊᴀʜ)
18. Hᴇɴᴛᴀɪ Oᴜᴊɪ ᴛᴏ Wᴀʀᴀᴡᴀɴᴀɪ Nᴇᴋᴏ
19. Tᴏɴᴀʀɪ ɴᴏ Kᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
20. Kᴀɪᴄʜᴏᴜ ᴡᴀ Mᴀɪᴅ-sᴀᴍᴀ!
21. Pʟᴀsᴛɪᴄ Mᴇᴍᴏʀɪᴇs
22. Tᴏʀᴀᴅᴏʀᴀ!
23. Aɴᴏ Hɪ Mɪᴛᴀ Hᴀɴᴀ
24. Zᴇʀᴏ ɴᴏ Tsᴜᴋᴀɪᴍᴀ
25. Bᴏᴋᴜʀᴀ ᴡᴀ Mɪɴɴᴀ Kᴀᴡᴀɪsᴏᴜ
26. Iᴛᴀᴢᴜʀᴀ ɴᴀ Kɪss
27. Yᴀᴍᴀᴅᴀ-ᴋᴜɴ ᴛᴏ 7 ɴɪɴ ɴᴏ Mᴀᴊᴏ
28. Aᴋᴀᴛsᴜᴋɪ Nᴏ Yᴏɴᴀ
29. Oʀᴇ ɴᴏ Kᴀɴᴏᴊᴏ ᴛᴏ Osᴀɴᴀɴᴀᴊɪᴍɪ ɢᴀ Sʜᴜʀᴀʙᴀ Sᴜɢɪʀᴜ
30. Yᴏsᴜɢᴀ ɴᴏ Sᴏʀᴀ
31. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
32. Aɴᴏ Nᴀᴛsᴜ ᴅᴇ Mᴀᴛᴛᴇʀᴜ
33. Nᴀʀᴜᴛᴏ Sʜɪᴘᴘᴜᴅᴇɴ : Tʜᴇ Lᴀsᴛ
34. Kɪᴍɪ ɴɪ Tᴏᴅᴏᴋᴇ
35. Gᴏsɪᴄᴋ
36. Nᴀɢᴀᴛᴏ Yᴜᴋɪ-Cʜᴀɴ ɴᴏ Sᴏᴜsʜɪᴛsᴜ (Gᴀᴍʙᴀʀ ᴅᴀʀɪ Sᴢᴜᴍɪʏᴀ Hᴀʀᴜʜɪ ɴᴏ Sᴏᴜsʜɪᴛsᴜ)
37. Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
38. Oʀᴇɢᴀɪʀᴜ
39. Sᴏʀᴇᴅᴇᴍᴏ Sᴇᴋᴀɪ ᴡᴀ Uᴛsᴜᴋᴜsʜɪɪ
42. Sᴇʀᴠᴀɴᴛ x Sᴇʀᴠɪᴄᴇ
43. Wᴏʀᴋɪɴɢ
44. Aᴋᴀɢᴀᴍɪ ɴᴏ Sʜɪʀᴀʏᴜᴋɪ Hɪᴍᴇ
45. Dᴇɴᴘᴀ Oɴɴᴀ ᴛᴏ Sᴇɪsʜᴜɴ Oᴛᴏᴋᴏ
46. Tᴀsᴏɢᴀʀᴇ Oᴛᴏᴍᴇ x Aᴍɴᴇsɪᴀ
47. NHK Nɪ Yᴏᴜᴋᴏsᴏ
48. Bᴏᴋᴜ Dᴀᴋᴇ ɢᴀ Iɴᴀɪ Mᴀᴄʜɪ
49. Iɴᴜ x Bᴏᴋᴜ Sᴇᴄʀᴇᴛ Sᴇʀᴠɪᴄᴇ
50. Nᴀᴢᴏ ɴᴏ Kᴀɴᴏᴊᴏ X
51. Sᴘᴇᴄɪᴀʟ A
52. Lᴏᴠᴇʟʏ Cᴏᴍᴘʟᴇx
53. Sᴜᴋɪᴛᴛᴇ Iɪ ɴᴀ ʏᴏ
54. Eɪᴋᴏᴋᴜ Kᴏɪ Mᴏɴᴏɢᴀᴛᴀʀɪ Eᴍᴍᴀ
55. Nᴀɴᴀ
56. Rᴏᴍᴇᴏ x Jᴜʟɪᴇᴛ
57. Hᴀᴄʜɪᴍɪᴛsᴜ ᴛᴏ Cʟᴏᴠᴇʀ
58. Bʏᴏᴜsᴏᴋᴜ 5 Cᴇɴᴛɪᴍᴇᴛᴇʀ
59. Bᴏᴋᴜʀᴀ ɢᴀ Iᴛᴀ
60. Kᴏɪ Kᴀᴢᴇ
61. Oᴏᴋᴀᴍɪ ᴛᴏ Kᴏᴜsʜɪɴʀʏᴏᴜ
62. Nᴏᴅᴀᴍᴇ Cᴀɴᴛᴀʙɪʟᴇ 
63. Hᴏᴛᴀʀᴜʙɪ ɴᴏ Mᴏʀɪ ᴇ
64. Kɪᴍɪ ɴᴏ Nᴀ Wᴀ?
65. Hᴏʀɪ-sᴀɴ ᴛᴏ Mɪʏᴀᴍᴜʀᴀ-ᴋᴜɴ
66. Rᴇᴄ
67. Cʜɪʜᴀʏᴀғᴜʀᴜ
68. Mᴀsʜɪʀᴏ-ɪʀᴏ Sʏᴍᴘʜᴏɴʏ
70. Cʀᴏss Gᴀᴍᴇ
71. Tʀᴜᴇ Tᴇᴀʀs
72. Mᴀsᴀᴍᴜɴᴇ-ᴋᴜɴ ɴᴏ Rᴇᴠᴇɴɢᴇ 
73. Sᴇɪʀᴇɴ 
74. RᴇLIFE
75. Hᴏsʜɪᴢᴏʀᴀ ᴇ Kᴀᴋᴀʀᴜ Hᴀsʜɪ
76. Eʀᴏᴍᴀɴɢᴀ-Sᴇɴsᴇɪ
77. Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
78. Nᴏɢɪᴢᴀᴋᴀ Hᴀʀᴜᴋᴀ ɴᴏ Hɪᴍɪᴛsᴜ
79. Kɪᴢɴᴀɪᴠᴇʀ
80. Gᴜɪʟᴛʏ Cʀᴏᴡɴ
81. Oʀᴀɴɢᴇ
82. Tsᴜᴋɪ ɢᴀ Kɪʀᴇɪ
83. Gᴀᴍᴇʀs
84. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ ᴘᴇᴛ ɴᴀ ᴋᴀɴᴏᴊᴏᴜ
85. Oʀᴇ ɴᴏ Iᴍᴏᴜᴛᴏ ɢᴀ Kᴏɴɴᴀɴɪ Kᴀᴡᴀɪɪ Wᴀᴋᴇ ɢᴀ Nᴀɪ
`
                    
                    
                    
                      zharzx.sendMessage(from, wew, image, { quoted: mek, caption: zxzz })
                      break
// MENU COMMAND
				case 'simplemenu':
                if (!isRegistered) return reply(ind.noregis())
			   	if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    wew = fs.readFileSync(`./lib/logo.jpg`)
                    zxzz = `
┌──────────────
│  *SIMPLE MENU*
│
┣𖥻ꦼꦽ➳${prefix}stiker
┣𖥻ꦼꦽ➳${prefix}ttp
┣𖥻ꦼꦽ➳${prefix}attp
┣𖥻ꦼꦽ➳${prefix}tts
┣𖥻ꦼꦽ➳${prefix}soundlist
┣𖥻ꦼꦽ➳${prefix}toimg
└────────────────
` 
                    zharzx.sendMessage(from, wew, image, { quoted: mek, caption: zxzz })
					break
				 case 'soundlist':
			   	if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    wew = fs.readFileSync(`./lib/logo.jpg`)
                    zxzz= `
┌────────────────
│ 「 *SOUND MENU* 」 
│
┣𖥻ꦼꦽ➳${prefix}iri
┣𖥻ꦼꦽ➳${prefix}pale
┣𖥻ꦼꦽ➳${prefix}sound
┣𖥻ꦼꦽ➳${prefix}sound1
┣𖥻ꦼꦽ➳${prefix}sound2
┣𖥻ꦼꦽ➳${prefix}sound3
┣𖥻ꦼꦽ➳${prefix}sound4
┣𖥻ꦼꦽ➳${prefix}sound5
┣𖥻ꦼꦽ➳${prefix}sound6
┣𖥻ꦼꦽ➳${prefix}sound7
┣𖥻ꦼꦽ➳${prefix}sound 8-71
┣𖥻ꦼꦽ➳${prefix}tapi
┣𖥻ꦼꦽ➳${prefix}boong
┣𖥻ꦼꦽ➳${prefix}magic
┣𖥻ꦼꦽ➳${prefix}menyukaiku
│
│ *Musik🎧* 
│
┣𖥻ꦼꦽ➳${prefix}sad
┣𖥻ꦼꦽ➳${prefix}sad2
┣𖥻ꦼꦽ➳${prefix}sad3
┣𖥻ꦼꦽ➳${prefix}sad4
┣𖥻ꦼꦽ➳${prefix}aeshtetic
┣𖥻ꦼꦽ➳${prefix}aeshtetic2
┣𖥻ꦼꦽ➳${prefix}aeshtetic3
┣𖥻ꦼꦽ➳${prefix}aeshtetic4
┣𖥻ꦼꦽ➳${prefix}home
┣𖥻ꦼꦽ➳${prefix}gettingold
┣𖥻ꦼꦽ➳${prefix}allnight
┣𖥻ꦼꦽ➳${prefix}lucas
┣𖥻ꦼꦽ➳${prefix}wanna
┣𖥻ꦼꦽ➳${prefix}yourskin
┣𖥻ꦼꦽ➳${prefix}up
┣𖥻ꦼꦽ➳${prefix}cutmeoff
┣𖥻ꦼꦽ➳${prefix}beautiful
┣𖥻ꦼꦽ➳${prefix}loosinggame
┣𖥻ꦼꦽ➳${prefix}loosinginterest
┣𖥻ꦼꦽ➳${prefix}playdate
│
│ *islam☪️*
│
┣𖥻ꦼꦽ➳${prefix}Arrahman {8,5mb} 
┣𖥻ꦼꦽ➳${prefix}Yasin {23,8mb} 
┣𖥻ꦼꦽ➳${prefix}ayatkursi2
┣𖥻ꦼꦽ➳${prefix}tilawah
┣𖥻ꦼꦽ➳${prefix}sholawatnabi
┣𖥻ꦼꦽ➳${prefix}ngaji
┣𖥻ꦼꦽ➳${prefix}ngaji2
└───────────────
` 
                    zharzx.sendMessage(from, wew, image, { quoted: mek, caption: zxzz })
					break
	            	case 'help': 
		            case 'menu':
                    //Gak Usah Di Hapus TQTO Gblk anak babi
                    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    wew = fs.readFileSync(`./lib/logo.jpg`)
                    zxzz = `
╔════•ೋೋ•════╗
          *ZX.BOT*
╚════•ೋೋ•════╝

❒ NAMA : ZX.BOT 

❒ BACA ATURAN BOT

❒ GUNAKAN BOT DENGAN BIJAK DAN BAIK
❒ MENGGUNAKAN BOT [JANGAN GUNA IN DOANG DONASINYA MANA] 
   ┌─────────────
   │  *ZX.BOT*
   ┣𖥻ꦼꦽ➳❒ NAMA :${NamaBot}
   ┣𖥻ꦼꦽ➳❒ PREFIX :${prefix}
   ┣𖥻ꦼꦽ➳❒ KECEPATAN :${process.uptime()}
   ┣𖥻ꦼꦽ➳*${prefix}snk*
   ┣𖥻ꦼꦽ➳*${prefix}info*
   ┣𖥻ꦼꦽ➳*${prefix}ping*
   │
   │*NEW FITUR EDIT SERTI*
   │
   ┣𖥻ꦼꦽ➳${prefix}fuckboyserti
   ┣𖥻ꦼꦽ➳${prefix}fuckgirlserti
   ┣𖥻ꦼꦽ➳${prefix}bucinserti
   │
   │*NEW FITUR EDIT TEXT*
   │
   ┣𖥻ꦼꦽ➳${prefix}cartoongv 
   ┣𖥻ꦼꦽ➳${prefix}anonymtext
   ┣𖥻ꦼꦽ➳${prefix}rlvintage
   ┣𖥻ꦼꦽ➳${prefix}cdwar
   ┣𖥻ꦼꦽ➳${prefix}vtbanner
   ┣𖥻ꦼꦽ➳${prefix}jvtsthirt
   ┣𖥻ꦼꦽ➳${prefix}ctgravity
   │
   │*VID/GIF EDIT SMENU*
   ┣𖥻ꦼꦽ➳*${prefix}ubahstk*
   │
   │*JOMBLO MENU*
   │
   ┣𖥻ꦼꦽ➳lagi apa sayang
   ┣𖥻ꦼꦽ➳kita putus
   ┣𖥻ꦼꦽ➳iloveyou / I LOVE YOU
   ┣𖥻ꦼꦽ➳sayangku
   ┣𖥻ꦼꦽ➳sayang kangen
   ┣𖥻ꦼꦽ➳masasih sayang
   ┣𖥻ꦼꦽ➳${prefix}cogan
   ┣𖥻ꦼꦽ➳${prefix}cecan
   │
   │*GROUP MENU*
   │
   ┣𖥻ꦼꦽ➳${prefix}antilink 1/0
   ┣𖥻ꦼꦽ➳${prefix}nobadword 1/0
   ┣𖥻ꦼꦽ➳${prefix}nsfw 1/0
   ┣𖥻ꦼꦽ➳${prefix}welcome 1/0
   ┣𖥻ꦼꦽ➳${prefix}leveling 1/0
   ┣𖥻ꦼꦽ➳${prefix}event 1/0
   ┣𖥻ꦼꦽ➳${prefix}grup buka/tutup
   ┣𖥻ꦼꦽ➳${prefix}level
   ┣𖥻ꦼꦽ➳${prefix}hidetag
   ┣𖥻ꦼꦽ➳${prefix}linkgc
   ┣𖥻ꦼꦽ➳${prefix}tagall
   ┣𖥻ꦼꦽ➳${prefix}mentionall  
   ┣𖥻ꦼꦽ➳${prefix}leave
   ┣𖥻ꦼꦽ➳${prefix}kick
   ┣𖥻ꦼꦽ➳${prefix}promote
   ┣𖥻ꦼꦽ➳${prefix}demote
   ┣𖥻ꦼꦽ➳${prefix}setdesc
   ┣𖥻ꦼꦽ➳${prefix}setname
   │
   │*DOWNLOADER MENU*
   │
   ┣𖥻ꦼꦽ➳${prefix}ytplay
   ┣𖥻ꦼꦽ➳${prefix}ytcari
   ┣𖥻ꦼꦽ➳${prefix}ytmp3
   ┣𖥻ꦼꦽ➳${prefix}ytmp4
   ┣𖥻ꦼꦽ➳${prefix}spotify
   ┣𖥻ꦼꦽ➳${prefix}spotifysearch
   ┣𖥻ꦼꦽ➳${prefix}jooxplay
   │
   │*STICKER MENU*
   │
   ┣𖥻ꦼꦽ➳${prefix}cry 
   ┣𖥻ꦼꦽ➳${prefix}cium 
   ┣𖥻ꦼꦽ➳${prefix}hug 
   ┣𖥻ꦼꦽ➳${prefix}blush 
   ┣𖥻ꦼꦽ➳${prefix}feed 
   ┣𖥻ꦼꦽ➳${prefix}wink 
   ┣𖥻ꦼꦽ➳${prefix}lick 
   ┣𖥻ꦼꦽ➳${prefix}dance 
   ┣𖥻ꦼꦽ➳${prefix}cringe 
   ┣𖥻ꦼꦽ➳${prefix}poke 
   ┣𖥻ꦼꦽ➳${prefix}cudle 
   ┣𖥻ꦼꦽ➳${prefix}tickle 
   ┣𖥻ꦼꦽ➳${prefix}baka 
   │
   │*STICKER FOTO MENU*
   │
   ┣𖥻ꦼꦽ➳${prefix}triggered 
   ┣𖥻ꦼꦽ➳${prefix}pencil
   ┣𖥻ꦼꦽ➳${prefix}wasted
   ┣𖥻ꦼꦽ➳${prefix}fisheye
   ┣𖥻ꦼꦽ➳${prefix}skullmask
   ┣𖥻ꦼꦽ➳${prefix}alien
   ┣𖥻ꦼꦽ➳${prefix}tosmile
   ┣𖥻ꦼꦽ➳${prefix}invert 
   ┣𖥻ꦼꦽ➳${prefix}pixelate 
   ┣𖥻ꦼꦽ➳${prefix}deepfry 
   │
   │*OWNER MENU*
   │
   │  
   ┣𖥻ꦼꦽ➳${prefix}antidelete aktif/off
   ┣𖥻ꦼꦽ➳${prefix}banlist
   ┣𖥻ꦼꦽ➳${prefix}blocklist
   ┣𖥻ꦼꦽ➳${prefix}addlimit
   ┣𖥻ꦼꦽ➳${prefix}setlimit
   ┣𖥻ꦼꦽ➳${prefix}setmemlimit
   ┣𖥻ꦼꦽ➳${prefix}addbadword
   ┣𖥻ꦼꦽ➳${prefix}dellbadword
   ┣𖥻ꦼꦽ➳${prefix}clearall
   ┣𖥻ꦼꦽ➳${prefix}setprefix
   ┣𖥻ꦼꦽ➳${prefix}bc
   ┣𖥻ꦼꦽ➳${prefix}event 1/0
   ┣𖥻ꦼꦽ➳${prefix}block
   ┣𖥻ꦼꦽ➳${prefix}unblock
   ┣𖥻ꦼꦽ➳${prefix}ban
   ┣𖥻ꦼꦽ➳${prefix}unban
   │
   │*ISLAM MENU*
   │
   ┣𖥻ꦼꦽ➳ ${prefix}tahlil
   ┣𖥻ꦼꦽ➳${prefix}jadwalsholat
   ┣𖥻ꦼꦽ➳${prefix}kisahnabi
   ┣𖥻ꦼꦽ➳${prefix}ayatkursi
   ┣𖥻ꦼꦽ➳${prefix}doaharian
   ┣𖥻ꦼꦽ➳${prefix}niatsholat
   ┣𖥻ꦼꦽ➳${prefix}bacaansholat
   ┣𖥻ꦼꦽ➳${prefix}listsurah
   ┣𖥻ꦼꦽ➳${prefix}alquran
   ┣𖥻ꦼꦽ➳${prefix}alquranaudio
   ┣𖥻ꦼꦽ➳${prefix}asmaulhusna
   ┣𖥻ꦼꦽ➳${prefix}niatsholat
   ┣𖥻ꦼꦽ➳${prefix}bacaansholat
   │
   │*MAKER MENU*
   │
   ┣𖥻ꦼꦽ➳${prefix}hartatahta 
   ┣𖥻ꦼꦽ➳${prefix}harta2 
   ┣𖥻ꦼꦽ➳${prefix}darkneon
   ┣𖥻ꦼꦽ➳${prefix}candlemug
   ┣𖥻ꦼꦽ➳${prefix}lovemsg
   ┣𖥻ꦼꦽ➳${prefix}mugflower
   ┣𖥻ꦼꦽ➳${prefix}narutobanner
   ┣𖥻ꦼꦽ➳${prefix}paperonglass
   ┣𖥻ꦼꦽ➳${prefix}romancetext
   ┣𖥻ꦼꦽ➳${prefix}shadowtext
   ┣𖥻ꦼꦽ➳${prefix}coffeecup
   ┣𖥻ꦼꦽ➳${prefix}coffeecup2
   ┣𖥻ꦼꦽ➳${prefix}glowingneon
   ┣𖥻ꦼꦽ➳${prefix}underwater
   ┣𖥻ꦼꦽ➳${prefix}hpotter
   ┣𖥻ꦼꦽ➳${prefix}woodblock
   ┣𖥻ꦼꦽ➳${prefix}gplaybutton
   ┣𖥻ꦼꦽ➳${prefix}splaybutton
   ┣𖥻ꦼꦽ➳${prefix}qrencode
   ┣𖥻ꦼꦽ➳${prefix}barcode
   ┣𖥻ꦼꦽ➳${prefix}pubglogo teks/teks
   ┣𖥻ꦼꦽ➳${prefix}glitchtext teks/teks
   ┣𖥻ꦼꦽ➳${prefix}battlefield teks/teks
   ┣𖥻ꦼꦽ➳${prefix}sticker
   ┣𖥻ꦼꦽ➳${prefix}blackpink
   ┣𖥻ꦼꦽ➳${prefix}neon
   ┣𖥻ꦼꦽ➳${prefix}metaldark
   ┣𖥻ꦼꦽ➳${prefix}neonlight
   ┣𖥻ꦼꦽ➳${prefix}holographic
   ┣𖥻ꦼꦽ➳${prefix}jokerlogo
   ┣𖥻ꦼꦽ➳${prefix}fireworksparkle
   ┣𖥻ꦼꦽ➳${prefix}natureleaves
   ┣𖥻ꦼꦽ➳${prefix}summersand
   ┣𖥻ꦼꦽ➳${prefix}horrorblood
   ┣𖥻ꦼꦽ➳${prefix}thunder
   ┣𖥻ꦼꦽ➳${prefix}glitch
   ┣𖥻ꦼꦽ➳${prefix}avenger
   │
   │*IMAGE EDIT MENU*
   │
   ┣𖥻ꦼꦽ➳${prefix}wanted
   ┣𖥻ꦼꦽ➳${prefix}removebg
   ┣𖥻ꦼꦽ➳${prefix}gtav
   ┣𖥻ꦼꦽ➳${prefix}facebookpage
   ┣𖥻ꦼꦽ➳${prefix}costumwp
   ┣𖥻ꦼꦽ➳${prefix}pantaimalam
   ┣𖥻ꦼꦽ➳${prefix}pensil
   ┣𖥻ꦼꦽ➳${prefix}bakar
   ┣𖥻ꦼꦽ➳${prefix}crossgun
   ┣𖥻ꦼꦽ➳${prefix}hitler
   ┣𖥻ꦼꦽ➳${prefix}trash
   ┣𖥻ꦼꦽ➳${prefix}picture
   ┣𖥻ꦼꦽ➳${prefix}blur
   ┣𖥻ꦼꦽ➳${prefix}invert
   ┣𖥻ꦼꦽ➳${prefix}meme atas/bawah
   ┣𖥻ꦼꦽ➳${prefix}deteksiwajah
   ┣𖥻ꦼꦽ➳${prefix}deteksiumur
   │
   │*SERTIFIKAT MENU*
   │
   ┣𖥻ꦼꦽ➳${prefix}fftourserti [ON] 
   ┣𖥻ꦼꦽ➳${prefix}fftourserti2 [ON]
   ┣𖥻ꦼꦽ➳${prefix}fftourserti3 [ON]
   ┣𖥻ꦼꦽ➳${prefix}fftourserti4 [ON]
   ┣𖥻ꦼꦽ➳${prefix}fftourserti5 [ON]
   ┣𖥻ꦼꦽ➳${prefix}pubgtourserti [ON]
   ┣𖥻ꦼꦽ➳${prefix}pubgtourserti2 [ON]
   ┣𖥻ꦼꦽ➳${prefix}pubgtourserti3 [ON]
   ┣𖥻ꦼꦽ➳${prefix}pubgtourserti4 [ON]
   ┣𖥻ꦼꦽ➳${prefix}pubgtourserti5 [ON]
   ┣𖥻ꦼꦽ➳${prefix}tololserti
   ┣𖥻ꦼꦽ➳${prefix}mltourserti [ON]
   ┣𖥻ꦼꦽ➳${prefix}mltourserti2 [ON]
   ┣𖥻ꦼꦽ➳${prefix}mltourserti3 [ON]
   ┣𖥻ꦼꦽ➳${prefix}mltourserti4 [ON]
   ┣𖥻ꦼꦽ➳${prefix}mltourserti5 [ON]
   │
   │*MEDIA MENU*
   │
   ┣𖥻ꦼꦽ➳${prefix}dare
   ┣𖥻ꦼꦽ➳${prefix}bacotandilan
   ┣𖥻ꦼꦽ➳${prefix}hemkel
   ┣𖥻ꦼꦽ➳${prefix}katadoi
   ┣𖥻ꦼꦽ➳${prefix}turth
   ┣𖥻ꦼꦽ➳${prefix}heroml
   ┣𖥻ꦼꦽ➳${prefix}trendtwit
   ┣𖥻ꦼꦽ➳${prefix}tts
   ┣𖥻ꦼꦽ➳${prefix}darkjokes
   ┣𖥻ꦼꦽ➳${prefix}darkjokes1
   ┣𖥻ꦼꦽ➳${prefix}memeindo
   ┣𖥻ꦼꦽ➳${prefix}nickff
   ┣𖥻ꦼꦽ➳${prefix}pinterest
   ┣𖥻ꦼꦽ➳${prefix}translate
   ┣𖥻ꦼꦽ➳${prefix}lirik
   ┣𖥻ꦼꦽ➳${prefix}cuaca
   │
   │*SEARCH MENU*
   │
   ┣𖥻ꦼꦽ➳${prefix}gimage
   ┣𖥻ꦼꦽ➳${prefix}gimage2
   ┣𖥻ꦼꦽ➳${prefix}konachan
   ┣𖥻ꦼꦽ➳${prefix}wallpapersearch
   ┣𖥻ꦼꦽ➳${prefix}wallpapersearch2
   ┣𖥻ꦼꦽ➳${prefix}playstore
   ┣𖥻ꦼꦽ➳${prefix}shopee
   ┣𖥻ꦼꦽ➳${prefix}google
   ┣𖥻ꦼꦽ➳${prefix}stickerwa
   │
   │*KOREA KPOP MENU*
   │
   ┣𖥻ꦼꦽ➳${prefix}bts
   ┣𖥻ꦼꦽ➳${prefix}exo
   │
   │*FUN MENU*
   │
   ┣𖥻ꦼꦽ➳${prefix}caklontong
   ┣𖥻ꦼꦽ➳${prefix}tebakgambar
   ┣𖥻ꦼꦽ➳${prefix}terganteng
   ┣𖥻ꦼꦽ➳${prefix}tercantik
   ┣𖥻ꦼꦽ➳${prefix}putus
   ┣𖥻ꦼꦽ➳${prefix}beban
   ┣𖥻ꦼꦽ➳${prefix}gantengcek
   ┣𖥻ꦼꦽ➳${prefix}cantikcek
   ┣𖥻ꦼꦽ➳${prefix}jadian
   ┣𖥻ꦼꦽ➳${prefix}bagaimanakah
   ┣𖥻ꦼꦽ➳${prefix}apakah
   ┣𖥻ꦼꦽ➳${prefix}bisakah
   ┣𖥻ꦼꦽ➳${prefix}rate
   ┣𖥻ꦼꦽ➳${prefix}kapankah
   ┣𖥻ꦼꦽ➳${prefix}watak
   ┣𖥻ꦼꦽ➳${prefix}hobby
   ┣𖥻ꦼꦽ➳${prefix}artinama
   │
   │
   │  *RANDOM TEXT*
   │
   ┣𖥻ꦼꦽ➳${prefix}quotes
   ┣𖥻ꦼꦽ➳${prefix}quotesanime
   ┣𖥻ꦼꦽ➳${prefix}dilan
   ┣𖥻ꦼꦽ➳${prefix}quotesimage
   ┣𖥻ꦼꦽ➳${prefix}faktaunik
   ┣𖥻ꦼꦽ➳${prefix}katabijak
   ┣𖥻ꦼꦽ➳${prefix}katabucin
   ┣𖥻ꦼꦽ➳${prefix}bucin
   ┣𖥻ꦼꦽ➳${prefix}islami
   ┣𖥻ꦼꦽ➳${prefix}pantun
   ┣𖥻ꦼꦽ➳${prefix}animesaran
   │
   │   *TTP MENU*
   │
   ┣𖥻ꦼꦽ➳${prefix}ttp
   ┣𖥻ꦼꦽ➳${prefix}ttp2
   ┣𖥻ꦼꦽ➳${prefix}ttp3
   ┣𖥻ꦼꦽ➳${prefix}ttp4
   ┣𖥻ꦼꦽ➳${prefix}attp
   │
   │
   │*RANDOM IMAGE MENU*
   ┣𖥻ꦼꦽ➳${prefix}ww2
   ┣𖥻ꦼꦽ➳${prefix}anjing
   ┣𖥻ꦼꦽ➳${prefix}kucing
   ┣𖥻ꦼꦽ➳${prefix}doraemon
   ┣𖥻ꦼꦽ➳${prefix}hamster
   ┣𖥻ꦼꦽ➳${prefix}kelinci
   │
   │*OTHER MENU*
   │
   ╠➥${prefix}simplemenu
   ╠➥${prefix}soundlist
   └──────────────
` 

                    zharzx.sendMessage(from, wew, image, { quoted: mek, caption: zxzz })
					break
//==============================SERTIFIKAT==================================//
		case 'tololserti': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(12)
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=muzharzain&name=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'fuckboyserti': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(12)
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/fuckboy?apikey=muzharzain&name=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'fuckgirlserti': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/fuckgirl?apikey=muzharzain&name=${ct}`)
					zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
					case 'bucinserti': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ZX.BOTツ`)
				reply(ind.wait())
				ct = body.slice(11)
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/bucinserti?apikey=muzharzain&name=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
					case 'fftourserti': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(12)
				zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'fftourserti2': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti2 ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'fftourserti3': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti3 ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'fftourserti4': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti4 ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'fftourserti5': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti5 ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
			
				case 'mltourserti': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(12)
				zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'mltourserti2': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti2 ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'mltourserti3': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti3 ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'mltourserti4': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti4 ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'mltourserti5': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti5 ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'pubgtourserti': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(14)
				zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'pubgtourserti2': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti2 ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(15)
				zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'pubgtourserti3': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti3 ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(15)
				zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'pubgtourserti4': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti4 ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(15)
				zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
				case 'pubgtourserti5': 				
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti5 ZX.BOTツNGAB`)
				reply(ind.wait())
				ct = body.slice(15)
				zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
				break
//==============================EDITTEXT==================================//
                   case 'freefire':
                       if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} ZX-BOT`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=muzharzain&text=${txt}`)
                    zharzx.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*_*', quoted: mek})
                    break
                    
case 'cartoongv': 
                        if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} ZX-BOT`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/cartoongravity?apikey=muzharzain&text=${txt}`)
                  zharzx.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*_*', quoted: mek})
                    break
                    case 'anonymtext':
                        if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} ZX-BOT`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=muzharzain&text=${txt}`)
                  zharzx.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*_*', quoted: mek})
                    break
                     case 'logolol':
                        if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} ZX-BOT`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy3/bannerlol?apikey=muzharzain&text=${txt}`)
                  zharzx.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*_*', quoted: mek})
                    break
                    case 'jvtsthirt':
                   	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti ZX.BOT/NGAB`)
				reply(ind.wait())
				ct = body.slice(10)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/juventusshirt?apikey=muzharzain&text1=${zha1}&text2=${zha2}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
                    break
                    case 'ctgravity':
                     	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti ZX.BOT/NGAB`)
				reply(ind.wait())
				ct = body.slice(10)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/cutegravity?apikey=muzharzain&text1=${zha1}&text2=${zha2}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
                    break
                        case 'rlvintage':
                     	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti ZX.BOT/NGAB`)
				reply(ind.wait())
				ct = body.slice(11)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/realvintage?apikey=muzharzain&text1=${zha1}&text2=${zha2}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
                    break
                    case 'quotemaker3':
                    		if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	     if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} ZX-BOT`)
      txt = args.join(" ")
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://api.lolhuman.xyz/api/quotemaker3?apikey=muzharzain&text=${txt}&img=${anu.display_url}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	 }
                           case 'cdwar':
                     	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti ZX.BOT/NGAB`)
				reply(ind.wait())
				ct = body.slice(7)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=muzharzain&text1=${zha1}&text2=${zha2}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
                    break
                   case 'vtbanner':
                     	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti ZX.BOT/NGAB`)
				reply(ind.wait())
				ct = body.slice(9)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
                zha3 = ct.split("/")[2];
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=muzharzain&text1=${zha1}&text2=${zha2}&text3=${zha3}`)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*' })
                    break

                case 'logogaming':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}logogaming Srbot*`)
game = await getBuffer(`http://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(12)}`)
zharzx.sendMessage(from, game, image, {quoted: mek})
break
                case 'gplaybutton':
                case 'splaybutton':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} ZX-BOT`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    zharzx.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*_*', quoted: mek})
                    break
         
               case 'qrencode':
                case 'barcode':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} ZX-BOT`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=apivinz&text=${txt}`)
                    zharzx.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*_*', quoted: mek})
                break
                case 'googlesearch':
			    
	        	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
		        if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlesearch Ifin|Bot|Ajg`)
				reply(ind.wait())
				ct = body.slice(14)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				zha3 = ct.split("/")[2];
				anu = await fetchJson(`https://dappuhy-apikey.herokuapp.com/api/textmaker?text=${zha1}&text2=${zha2}&text3=${zha3}&theme=google-suggestion&apikey=dappabotwa`)
				buffer = await getBuffer(anu.result.url)
				zharzx.sendMessage(from, buffer, image, { quoted: mek, caption: 'Sudah Jadi Kak' })
				break
				case 'pubglogo':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname)) 
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubglogo ZX.BOT`)
				reply(ind.wait())
				ct = body.slice(9)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${zha1}&text2=${zha2}&theme=pubg&apikey=muzharzain`)
				buffer = await getBuffer(anu.result.url)
				zharzx.sendMessage(from, buffer, image, { quoted: mek, caption: 'Sudah Jadi Kak' })
				break
				case 'glitchtext':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}glitchtext ZX.BOT`)
				reply(ind.wait())
				ct = body.slice(11)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker?text=${zha1}&text2=${zha2}&theme=glitch&apikey=${muzharzain}`)
				zhain = await getBuffer(anu.result.url)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: 'Sudah Jadi Kak' })
				break
				case 'cup':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}cup ZX.BOT*`)
				reply(ind.wait())
				ct = body.slice(4)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup&apikey=muzharzain`)
				zhain = await getBuffer(anu.result.url)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: 'Sudah Jadi Kak' })
				break
				case 'cup2':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}cup2 ZX.BOT*`)
				reply(ind.wait())
				ct = body.slice(5)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text={ct}&theme=coffee-cup2&apikey=muzharzain`)
				zhain = await getBuffer(anu.result.url)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: 'Sudah Jadi Kak' })
				break
				
				case 'battlefield':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}battlefield ZX.BOT`)
				reply(ind.wait())
				ct = body.slice(12)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${zha1}&text2=${zha2}&theme=battlefield&apikey=${muzharzain}`)
				buffer = await getBuffer(anu.result.url)
				zhain = await getBuffer(anu.result.url)
				zharzx.sendMessage(from, zhain, image, { quoted: mek, caption: 'Sudah Jadi Kak' })
				break
				case 'hartatahta':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}hartatahta *ZX.BOT*`)
				zhain = body.slice(11)
				reply(ind.wait())
				zein = await getBuffer(`http://zekais-api.herokuapp.com/hartatahta?text=${zhain}`)
				zharzx.sendMessage(from, zein, image, {quoted: mek})
				await limitAdd(sender)
				break
				 case 'darkneon':
                case 'candlemug':
                case 'lovemsg':
                case 'mugflower':
                case 'narutobanner':
                case 'paperonglass':
                case 'romancetext':
                case 'shadowtext':
                case 'coffeecup':
                case 'coffeecup2':
                case 'glowingneon':
                case 'underwater':
                case 'hpotter':
                case 'woodblock':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} ZX-BOT`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${txt}`)
                    zharzx.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*_*', quoted: mek})
                break
                      break
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} ZX.BOT`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=muzharzain&text1=${txt1}&text2=${txt2}`)
                    zharzx.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                    case 'blackpink':
                case 'neon':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'luxury':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} ZX.BOT`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=muzharzain&text=${ini_txt}`)
                  zharzx.sendMessage(from, ini_buffer, image, { quoted: mek })
              break
               case 'luxurygold':
                case 'galaxywallpaper':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'metallogo':
                case 'glittergold':
                case 'textcake':
                case 'wooden3d':
                case 'textbyname':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
            if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} ZX-BOT`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=muzharzain&text=${txt}`)
                  zharzx.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*_*', quoted: mek})
                    break
                     //============================Batas======================================\\
//mediamenu
            
			case 'stiker': 
			case 'sticker':
			case 's':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await zharzx.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								zharzx.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await zharzx.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								zharzx.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
			    break
		
			case 'ubahstk':
			
			  if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await zharzx.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								zharzx.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await zharzx.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								zharzx.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
				
			
			
			break
//============================GROUP MENU==================================\\
case 'infogc':
			case 'grouplist':
			  if (!isRegistered) return reply( ind.noregis())
					zharzx.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group ZX BOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					zharzx.sendMessage(from, teks.trim(), extendedText, {quoted: iky})
				break
case 'mining':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
  case 'bukatime':
		case 'opentime': 
					if (!isRegistered) return reply(ind.noregis())
                if (!isGroupAdmins) return reply(ind.admin())
              zharzx.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪʙᴜᴋᴀ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ᴍᴇᴍʙᴇʀ* ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
					contextInfo: { mentionedJid: [nomor] }
					}
					zharzx.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break
				case 'tutuptime':
              zharzx.updatePresence(from, Presence.composing) 
		if (!isRegistered) return reply(ind.noregis())
		if (!isGroupAdmins) return reply(ind.admin())
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					zharzx.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
 case 'nobadword':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (args[0] === '1') {
                if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                badword.push(from)
                fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Enable!`)
              	} else if (args[0] === '0') {
                badword.splice(from, 1)
                fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Disable`)
                } else {
                reply(ind.satukos())
                }
                break
		
                case 'mutual':
                // ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		        case 'next':
                // ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
				case 'setname':
		        if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				zharzx.groupUpdateSubject(from, `${body.slice(9)}`)
				zharzx.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
				break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                zharzx.groupUpdateDescription(from, `${body.slice(9)}`)
                zharzx.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
                break
                case 'demote':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                zharzx.groupDemoteAdmin(from, mentioned)
                } else {
                mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
                zharzx.groupDemoteAdmin(from, mentioned)
                }
                break
			    case 'promote':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Selamat* 🥳 *Anda naik menjadi admin group* 🎉 :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                zharzx.groupMakeAdmin(from, mentioned)
                } else {
                mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
                zharzx.groupMakeAdmin(from, mentioned)
                }
                break
		        case 'kick':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Asek jatah kick, otw kick* 🤭 :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                zharzx.groupRemove(from, mentioned)
                } else {
                mentions(`*Asek jatah kick, otw kick* @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
                zharzx.groupRemove(from, mentioned)
                }
                break
		        case 'listadmin':
                if (!isGroup) return reply(ind.groupo())
                teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
                no = 0
                for (let admon of groupAdmins) {
                no += 1
                teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
                }
                mentions(teks, groupAdmins, true)
                break			
                case 'blockk':
				zharzx.updatePresence(from, Presence.composing) 
				zharzx.chatRead (from)
                if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
                zharzx.blockUser (`${body.slice(8)}@c.us`, "add")
                zharzx.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
                break
	        	
		        case 'unblock':
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerb())
			    zharzx.blockUser (`${body.slice(9)}@c.us`, "remove")
                zharzx.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
                break
		        case 'leave':
                // ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerb())
                setTimeout( () => {
                zharzx.groupLeave (from) 
                }, 2000)
                setTimeout( () => {
                zharzx.updatePresence(from, Presence.composing) 
                zharzx.sendMessage(from, 'Bye cuk🗣', text) // ur cods
                }, 0)
                break
                case 'linkgc':
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await zharzx.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				zharzx.sendMessage(from, yeh, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'hidetag':
                // ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                var value = body.slice(9)
                var group = await zharzx.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                zharzx.sendMessage(from, options, text)
                await limitAdd(sender)
                break
                case 'level':
                // ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `◪ *LEVEL*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  ├─ ❏ *User XP* : ${userXp}/${requiredXp}\n  └─ ❏ *User Level* : ${userLevel}\n`
                zharzx.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                console.error(err)
                await reply(`Error!\n${err}`)
                })
                break
		        case 'grup':
		        case 'group':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args[0] === 'buka') {
				reply(`*BERHASIL MEMBUKA GROUP*`)
                zharzx.groupSettingChange(from, GroupSettingChange.messageSend, false)
                } else if (args[0] === 'tutup') {
                reply(`*BERHASIL MENUTUP GROUP*`)
				zharzx.groupSettingChange(from, GroupSettingChange.messageSend, true)
                }
                break
                case 'simih':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
				samih.push(from)
				fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
				reply('Sukses mengaktifkan mode simi di group ini ✔️')
				} else if (Number(args[0]) === 0) {
				samih.splice(from, 1)
				fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
				reply('Sukes menonaktifkan mode simi di group ini ✔️')
				} else {
				reply(ind.satukos())
				}
				break
		        case 'nsfw':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
				nsfw.push(from)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes mengaktifkan mode nsfw di group ini ✔️')
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes menonaktifkan mode nsfw di group ini ✔️')
				} else {
				reply(ind.satukos())
				}
				break
				case 'leveling':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (args[0] === '1') {
				if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
				_leveling.push(from)
				fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
				reply('Sukes mengaktifkan mode leveling di group ini ✔')
				} else if (args[0] === '0') {
				_leveling.splice(from, 1)
				fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
				reply('Sukes menonaktifkan mode leveling di group ini ✔')
				} else {
				reply(ind.satukos())
				}
				break
				case 'welcome':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
				welkom.push(from)
				fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
				reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
				} else if (Number(args[0]) === 0) {
				welkom.splice(from, 1)
				fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
				reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
				} else {
				reply(ind.satukos())
				}
				break
                case 'antilink':
		        if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())					
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isAntiLink) return reply('UDAH NYALA KAK')
				antilink.push(from)
				fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
				reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP')
				zharzx.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
				} else if (Number(args[0]) === 0) {
				if (!isAntiLink) return reply('EMANG AKTIF?')
				var ini = anti.botLangsexOf(from)
				antilink.splice(ini, 1)
				fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
				reply('SUKSES MEMATIKAN ANTI LINK DI GROUP')
				} else {
				reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
				}
				break
                case 'event':
			    if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isEventon) return reply('*SUDAH AKTIF* !!!')
				event.push(from)
				fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
				reply('Sukes mengaktifkan mode event di group ini ✔')
				} else if (Number(args[0]) === 0) {
				event.splice(from, 1)
				fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
				reply('Sukes menonaktifkan mode event di group ini ✔')
				} else {
				reply(ind.satukos())
				}
				break
				case 'clone':
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerg()) 
				if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
				try {
				pp = await zharzx.getProfilePicture(id)
				buffer = await getBuffer(pp)
				zharzx.updateProfilePicture(botNumber, buffer)
				mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
				} catch (e) {
				reply(ind.stikga())
				}
				await limitAdd(sender)
				break
//============================DOWNLOAD MENU==================================\\
case 'ytplay':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    zharzx.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    zharzx.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video[0].link)
                    zharzx.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek })
                    break
                case 'ytplay2':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    zharzx.sendMessage(from, ini_buffer, image, { quoted: mek, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    zharzx.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video)
                    zharzx.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                    
                case 'ytmp3':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=muzharzain&url=h${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    zharzx.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    zharzx.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp32':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=muzharzain&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    zharzx.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    zharzx.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp4':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=muzharzain&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    zharzx.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    zharzx.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'ytmp42':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=muzharzain&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    zharzx.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    zharzx.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                    case 'spotify':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=muzharzain&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    zharzx.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    zharzx.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'spotifysearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                     case 'jooxplay':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    zharzx.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    zharzx.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break
//==============================STICKER FOTO MENU==================================//
case 'triggered':
case 'pencil':
case 'wasted':
case 'fisheye':
case 'skullmask':
case 'alien':
case 'tosmile':
case 'invert':
case 'pixelate':
case 'deepfry':
		if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://api.lolhuman.xyz/api/editor/${command}?apikey=muzharzain&img=${anu.display_url}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	//===========================STICKER MENU==============================//
	case 'cium':
                  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/kiss?apikey=muzharzain`)
                  zharzx.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*'})
                    break
             
		        case 'baka': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/baka?apikey=syahri2k21`)
				buffer = await getBuffer(anu.result.url)
				zharzx.sendMessage(from, buffer, image, {quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*'})
				break
			case 'nangis':
                   if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/cry?apikey=muzharzain`)
                    zharzx.sendMessage(from, buffer, image, {quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*'})
                    break
		case 'resepmasakan':  
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
                   anu = await fetchJson(`http://zekais-api.herokuapp.com/resep?menu=${body.slice(12)}`, {method: 'get'})
                   buff = await getBuffer(anu.result.image)
                   resep = `*${anu.result.title}*\n${anu.result.desc}\n\n*BAHAN² YG DIPERLUKAN*\n${anu.result.bahan}\n\n*CARA MASAKNYA*\n${anu.result.cara}`
                   zharzx.sendMessage(from, buff, image, {quoted: mek, caption: resep})
                   await limitAdd(sender) 
                   break 
                                      break
                   case 'feed':
                    case 'poke':
                    case 'baka':
                    case 'tickle':
                    case 'cudle':
                    case 'wink':
                    case 'dance':
                    case 'lick':
                    case 'blush':
                    case 'cry':
                    case 'cringe':
                   if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=muzharzain`)
                   zharzx.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*'})
                    break
//=====================================OWNERMENU=====================================\\
//ownermenu
                    case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break

					case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await zharzx.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await zharzx.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							zharzx.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST ZX_BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
					case 'block':
				 zharzx.updatePresence(from, Presence.composing) 
				 zharzx.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					zharzx.blockUser (`${body.slice(7)}@c.us`, "add")
					zharzx.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		            case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    zharzx.blockUser (`${body.slice(9)}@c.us`, "remove")
					zharzx.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
					case 'leave':
                 // ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					zharzx.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					zharzx.updatePresence(from, Presence.composing) 
					zharzx.sendMessage(from, 'BYE NGAB HATI HATI🗣', text) // ur cods
					}, 0)
					break
					case 'tagall':
			    if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			     if (!isRegistered) return reply(ind.noregis())
	   					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]} wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔═══✪ Tag By *${pushname}* ✪══`+ teks +'╚═══〘 ZX.BOT*〙═══', members_id, true)
					break
			    case 'mentionall':
			  	    if (isBanned) return reply('Maaf kamu sudah terbenned!') 
			  	     if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔══〘 Tag By *${pushname}* 〙✪══`+teks+'╚═〘 ZX.BOT* 〙', members_id, true)
					break
		            case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await zharzx.chats.all()
					zharzx.setMaxListeners(25)
					for (let _ of anu) {
						zharzx.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
					case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
		            case 'setlimit':
		            case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		            case 'setlimitt':
		            case 'addlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		            case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		            case 'setmemlimitt':
					if (args.length < 1) return
				    if (!isAdmin) return reply('*Only Admin bot*')
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
					case 'addbadword':  // Fix Bug By ZX.BOT* & IFIN*
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                    case 'delbadword':  
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                    case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					zharzx.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zharzx.downloadAndSaveMediaMessage(enmedia)
					await zharzx.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
					case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		        case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
					case 'unblockk':
                if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
				zharzx.blockUser (`${body.slice(10)}@c.us`, "remove")
                zharzx.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
                break
		        case 'block':
				zharzx.updatePresence(from, Presence.composing) 
				zharzx.chatRead (from)
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerb())
                zharzx.blockUser (`${body.slice(7)}@c.us`, "add")
                zharzx.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
                break
//===================================>ISLAMMENU===========================
             case 'tahlil': 
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/tahlil?apikey=${muzharzain}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\n*Arab* : ${i.arabic}\n*Terjemah* : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
               case 'jadwalsholat':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
		        case 'ayatkursi': 
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/ayatkursi?apikey=muzharzain`)
				teks = `➸ *Arab* : ${anu.result.data.arabic}\n*➸ Latin :* ${anu.result.data.latin}\n*➸ Arti :* ${anu.result.data.translation}\n*➸ Tafsir :* ${anu.result.data.tafsir}`
				zharzx.sendMessage(from, teks, text, {quoted: mek})
				break
				 	case 'doaharian': 
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				zharzx.updatePresence(from, Presence.composing) 
				reply(ind.wait())
				zein = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/doaharian?apikey=${muzharzain}`, {method: 'get'})
				teks = '=================\n'
				for (let i of zein.result.data) {
					teks += `*Nama Doa:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		        case 'niatsholat':  
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/niatshalat?apikey=muzharzain`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		        case 'bacaansholat': 
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/bacaanshalat?apikey=muzharzain`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
               break
  case 'listsurah':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=muzharzain`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=muzharzain`)
                    zharzx.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
//=============================EDITIMAGEMENU==============================

case 'wanted':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksiwajah':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=muzharzain&img=${anu.display_url}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
		case 'removebg':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://api.lolhuman.xyz/api/removebg?apikey=muzharzain&img=${anu.display_url}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksigender':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJso(`https://api.lolhuman.xyz/api/genderdetect?apikey=muzharzain&img=${anu.display_url}`)
	  gender = `[ DETEKSI GENDER ] \nMenurut bot.. seseorang di gambar bergender = *${hehe.result}*\n\nFEMALE = PEREMPUAN\nMALE = LAKI-LAKI`
	 zharzx.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksiumur':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=muzharzain&img=${anu.display_url}`)
	  gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	 zharzx.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'gtav':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'facebookpage':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pensil':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break 
	case 'bakar':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'hitler':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/hitler?url=${anu.display_url}&apikey=${LeysApi}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'trash':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${anu.display_url}&apikey=${LeysApi}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'picture':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${anu.display_url}&apikey=${LeysApi}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'blur':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${anu.display_url}&apikey=${LeysApi}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'invert':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await zharzx.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${anu.display_url}&apikey=${LeysApi}`)
	 zharzx.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
//===========================MEDIA MENU===================================

	case 'truth':
					// ZX.BOT 
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					zharzx.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
		            case 'dare':
					// ZX.BOT 
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					zharzx.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break
			case 'bacotandilan':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatadilan.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
					break
					case 'katadoi':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katadoi.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
					break
					case 'hemkel':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatahacker.php?apikey=xptn3`, {method: 'get'})
					reply(anu.result)
					break
	case 'heroml':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait()) 
				cuk = await fetchJson(`http://docs-jojo.herokuapp.com/api/heroml?hero=alucard`) 
				buffer = await getBuffer(cuk.result.hero.img) 
				ml = `*「 HERO ML 」*\n\nNama : ${cuk.result.hero.name}\nQuotes : ${cuk.result.hero.quotes}\nRole : ${cuk.result.hero.role}\nRelease : ${cuk.result.hero.release_date}\nSpeciality : ${cuk.result.hero.release_date}`
				zharzx.sendMessage(from, buffer, image, {quoted: mek, caption: ml}) 
				break

case 'trendtwit':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
zharzx.updatePresence(from, Presence.composing) 
data = await fetchJson(`http://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
teks = '=====================\n'
for (let i of data.result) {
teks += `*Hastag* : ${i.hastag}\n*Peringkat* : ${i.rank}\n*Tweet* : ${i.tweet}\n*Link* : ${i.link}\n=====================\n`
					}
					reply(teks.trim())
					break
break
                case 'gtts':
		        case 'tts':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return zharzx.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return zharzx.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							zharzx.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
			    break
			    case 'darkjokes1': 
				 // Fix Bug By RzkyO				
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=muzharzain`, {method: 'get'})
				zharzx.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
                case 'darkjokes':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				 data = fs.readFileSync('./lib/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 zharzx.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`DARK JOKES\`\`\`'})
				break
				

				case 'memeindo': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`http://api.lolhuman.xyz/api/meme/memeindo?apikey=muzharzain`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				zharzx.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
					case 'nickff': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zharzx.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'pinterest':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zharzx.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zharzx.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*`})
					await limitAdd(sender)
					break 
					  case 'pinterest':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=muzharzain&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    zharzx.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                    case 'translate':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=muzharzain&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
                case 'brainly':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/brainly?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    break
                   
                case 'lirik':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=muzharzain&query=${query}`)
                    reply(get_result.result)
                    break
                        case 'cuaca':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    zharzx.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
                    reply(ini_txt)
                    break
//=======================SEARCH MENU==================================
case 'gimage':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=muzharzain&query=${query}`)
                    zharzx.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*'})
                    break
                case 'gimage2':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        zharzx.sendMessage(from, ini_buffer, image)
                    }
                    break
                    case 'konachan':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=muzharzain&query=${query}`)
                    zharzx.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*'})
                    break
                case 'wallpapersearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=muzharzain&query=${query}`)
                    zharzx.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*'})
                    break
                case 'wallpapersearch2':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=muzharzain&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    zharzx.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*'})
                    break
                case 'playstore':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'shopee':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'google':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `• Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'stickerwa':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=muzharzain&img=${x}`)
                        zharzx.sendMessage(from, ini_buffer, sticker)
                    }
                    break
//========================KPOP MENU==================================
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'cogan':
                case 'cecan':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=muzharzain`)
                     zharzx.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*'})
                    break
//======================FUN MENU===================================
case 'bisakah':
					// ZX.BOT 

                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					zharzx.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'kapankah':
					// ZX.BOT 

                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					zharzx.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'apakah':
					// ZX.BOT 
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					zharzx.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'bagaimanakah':
					// ZX.BOT 
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					zharzx.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'rate':
					// ZX.BOT 

                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					zharzx.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'gantengcek':
					// ZX.BOT 
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					zharzx.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'cantikcek':
					// ZX.BOT 
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					zharzx.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'watak':
					// ZX.BOT 
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					zharzx.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
		         case 'hobby':
					// ZX.BOT 
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					zharzx.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'jadian':
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
					case 'beban':
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdoo = groupMembers
					const kposs = groupMembers
					const akii = jdoo[Math.floor(Math.random() * jdoo.length)]
					teks = `Nih beban Grup@${akii.jid.split('@')[0]}`
					jds.push(akii.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
					               case 'putus':
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdip = groupMembers
					const kosp = groupMembers
					const akup = jdip[Math.floor(Math.random() * jdip.length)]
					const diap = kosp[Math.floor(Math.random() * kosp.length)]
					teks = `Cie Yang jadi kenangan ups mantan canda mantan @${akup.jid.split('@')[0]} 💔️ @${diap.jid.split('@')[0]} `
					jds.push(akup.jid)
					jds.push(diap.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case 'terganteng':
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case 'tercantik':
				// ZX.BOT 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
				case 'caklontong':
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kuis/caklontong?apikey=muzharzain`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					zharzx.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+ '\n\n• Penjelasan: *'+ anu.result.desk+'*', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					zharzx.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					zharzx.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					zharzx.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					zharzx.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
			        
				    case 'tebakgambar':
				    if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kuis/tebakgambar?apikey=muzharzain`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.images)
					tebak = `➸ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					zharzx.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					zharzx.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					zharzx.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					zharzx.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					zharzx.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
    case 'artinama':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                reply(ind.wait())
                anu = await fetchJson(`http://zekais-api.herokuapp.com/artinama?nama=${body.slice(9)}`)
                zhain = `Nama : ${anu.name}\nArti : ${anu.result}`
                zharzx.sendMessage(from, zhain, text, {quoted: mek })
                await limitAdd(sender)
                break
                case 'artimimpi':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                reply(ind.wait())
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/primbon/artimimpi?q=${body.slice(10)}&apikey=${muzharzain}`)
                zhain = `${anu.hasil.result}`
                zharzx.sendMessage(from, zhain, text, {quoted: mek })
                await limitAdd(sender)
                break
                case 'jodoh':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu & Bacem`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(txt)
                    break
                case 'weton':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break
                case 'jadian':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'tebakumur':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} ZX.BOT`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Example: ${prefix + command} ZX.BOT`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebakumur?apikey=SoftApikey&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break

                    // Entertainment
                case 'asupan':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=muzharzain`)
                    ini_buffer = await getBuffer(get_result.result)
                    zharzx.sendMessage(from, ini_buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                case 'wancak':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=muzharzain`)
                    zharzx.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*'})
                    break
case 'lpr':
					const bug = body.slice(5)
					if (pesan.length > 300) return zharzx.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					teks1 = `*[LAPORAN]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					zharzx.sendMessage('6285790763534@s.whatsapp.net', options, text, {quoted: mek})
					reply('Masalah telah di laporkan ke owner ZX-BOT, Laporan palsu atau main² tidak akan ditanggapi.')
					break
		case 'request':
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return zharzx.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					zharzx.sendMessage('6285790763534@s.whatsapp.net', options, text, {quoted: mek})
					zharzx.sendMessage('6285790763534@s.whatsapp.net', options, text, {quoted: mek})
					zharzx.sendMessage('6285790763534@s.whatsapp.net', options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER ZX-BOT, Requests palsu atau main² tidak akan ditanggapi.')
					break
                    // Creator
                
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} ZX.BOT`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=muzharzain&text=${ini_txt}`)
                    zharzx.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
//====================QUOTE MENU=====================================
case 'quotes':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=muzharzain`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*― ${author}*`)
                    break
                case 'quotesanime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=muzharzain`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break
                case 'dilan':
                case 'islami':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/${command}?apikey=muzharzain`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                 case 'katabucin':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=muzharzain`)
                    reply(get_result.result)
                    break
                case 'randomnama':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=muzharzain`)
                    reply(anu.result)
                    break
//================================ANIME MENU=============================
case 'waifu':
                     if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    anu = await fetchJson(`https://arugaz.herokuapp.com/api/waifu`)
				  	buf = await getBuffer(anu.image)
				 	texs = ` *anime name* : ${anu.name} \n*deskripsi* : ${anu.desc} \n*source* : ${anu.source}`
				   	zharzx.sendMessage(from, buf, image, { quoted: mek, caption: `${texs}`})
				    break
					case 'animeboy':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20boy`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zharzx.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'samehadaku':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
reply(ind.wait()) 
anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/samehadaku?q=${body.slice(12)}`) 
buffer = await getBuffer(anu.thumb) 
yogigans = `*[ SAMEHADAKU ]*\n\n\nJudul : ${anu.title}\nDesc : ${anu.desc}\nLink : ${anu.link}`
zharzx.sendMessage(from, buffer, image, {quoted: mek, caption: yogigans})
break
case 'neonime':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
zharzx.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
teks = '=====================\n'
for (let i of data.result) {
teks += `*Title* : ${i.judul}\n*Link* : ${i.link}\n*Release* : ${i.rilis}\n=====================\n`
					}
					reply(teks.trim())
					break
					case 'dewabatch':
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait()) 
				anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/dewabatch?q=${body.slice(11)}`) 
				buffer = await getBuffer(anu.thumb) 
			    yogi = `*「 DEWABATCH 」*\n\n${anu.result}\n\nSinopsis : ${anu.sinopsis}`
			    zharzx.sendMessage(from, buffer, image, {quoted: mek, caption: yogi})
			    break
					case 'animegirl':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20girl`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zharzx.sendMessage(from, pok, image, { quoted: mek })
					break
				    case 'animeimg':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zharzx.sendMessage(from, pok, image, { quoted: mek })
					break
				    case 'loli':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=loli`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zharzx.sendMessage(from, pok, image, { quoted: mek })
					break
                	case 'dewabatch':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    teks = body.slice(11)
                    anu = await fetchJson(`https://arugaz.herokuapp.com/api/dewabatch?q=${teks}` , {method: 'get'})
                    thum = await getBuffer(anu.thumb)
                    zharzx.sendMessage(from, thum, image, {quoted: mek, caption: `${anu.result}`})
                 	break
//==============================MENU SOUND====================
	case 'home':
const home = fs.readFileSync('mp3/home.mp3')
zharzx.sendMessage(from, home, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
const getting = fs.readFileSync('mp3/gettingold.mp3')
zharzx.sendMessage(from, getting, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tapi':
const tapi = fs.readFileSync('mp3/tapi.mp3')
zharzx.sendMessage(from, tapi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'boong':
const boong = fs.readFileSync('mp3/boong.mp3')
zharzx.sendMessage(from, boong, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'iri':
const iri = fs.readFileSync('mp3/iri.mp3')
zharzx.sendMessage(from, iri, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'magic':
const magic = fs.readFileSync('mp3/magic.mp3')
zharzx.sendMessage(from, magic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'menyukaiku':
const menyukaiku = fs.readFileSync('mp3/menyukaiku.mp3')
zharzx.sendMessage(from, menyukaiku, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sad':
const sad1 = fs.readFileSync('mp3/sad.mp3')
zharzx.sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
const sad2 = fs.readFileSync('mp3/sad2.mp3')
zharzx.sendMessage(from, sad2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
const sad3 = fs.readFileSync('mp3/sad3.mp3')
zharzx.sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('mp3/sad4.mp3')
zharzx.sendMessage(from, sad4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('mp3/aeshtetic.mp3')
zharzx.sendMessage(from, tetik, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('mp3/aeshtetic2.mp3')
zharzx.sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('mp3/aeshtetic3.mp3')
zharzx.sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('mp3/aeshtetic4.mp3')
zharzx.sendMessage(from, tetik4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('mp3/allnight.mp3')
zharzx.sendMessage(from, allnight, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'lucas':
const lucas = fs.readFileSync('mp3/lucas.mp3')
zharzx.sendMessage(from, lucas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sowell':
const well = fs.readFileSync('mp3/sowell.mp3')
zharzx.sendMessage(from, well, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('mp3/wanna.mp3')
zharzx.sendMessage(from, wanna, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('mp3/up.mp3')
zharzx.sendMessage(from, ups, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('mp3/yourskin.mp3')
zharzx.sendMessage(from, skin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('mp3/cutmeoff.mp3')
zharzx.sendMessage(from, moff, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('mp3/beautiful.mp3')
zharzx.sendMessage(from, ful, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('mp3/loosinggame.mp3')
zharzx.sendMessage(from, gam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('mp3/loosinginterest.mp3')
zharzx.sendMessage(from, rest, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('mp3/playdate.mp3')
zharzx.sendMessage(from, date, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('mp3/ayatkursi2.mp3')
zharzx.sendMessage(from, kursi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'yasin':
yasin = fs.readFileSync('mp3/yasin.mp3')
zharzx.sendMessage(from, yasin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'arrahman':
arrahman = fs.readFileSync('mp3/arrahman.mp3')
zharzx.sendMessage(from, arrahman, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('mp3/tilawah.mp3')
zharzx.sendMessage(from, tilawah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawatnabi':
const nabi = fs.readFileSync('mp3/sholawatnabi.mp3')
zharzx.sendMessage(from, nabi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('mp3/ngaji.mp3')
zharzx.sendMessage(from, ngaji1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('mp3/ngaji2.mp3')
zharzx.sendMessage(from, ngaji2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
zharzx.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pale = fs.readFileSync('mp3/pale.mp3')
zharzx.sendMessage(from, pale, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('mp3/sound.mp3')
zharzx.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'hallo':
const hallo = fs.readFileSync('./mp3/hallo.mp3')
zharzx.sendMessage(from, hallo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
zharzx.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
zharzx.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
zharzx.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
zharzx.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
zharzx.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
zharzx.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
zharzx.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
delapan = fs.readFileSync('mp3/sound8.mp3');
zharzx.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('mp3/sound9.mp3');
zharzx.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('mp3/sound10.mp3');
zharzx.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('mp3/sound11.mp3');
zharzx.sendMessage(from, sebelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('mp3/sound12.mp3');
zharzx.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('mp3/sound13.mp3');
zharzx.sendMessage(from, tigabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('mp3/sound14.mp3');
zharzx.sendMessage(from, empatbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('mp3/sound15.mp3');
zharzx.sendMessage(from, limabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('mp3/sound16.mp3');
zharzx.sendMessage(from, enambelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('mp3/sound17.mp3');
zharzx.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound18':
delapanbelas = fs.readFileSync('mp3/sound18.mp3');
zharzx.sendMessage(from, delapanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('mp3/sound19.mp3');
zharzx.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('mp3/sound20.mp3');
zharzx.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('mp3/sound21.mp3');
zharzx.sendMessage(from, duasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('mp3/sound22.mp3');
zharzx.sendMessage(from, duadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('mp3/sound23.mp3');
zharzx.sendMessage(from, duatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('mp3/sound24.mp3');
zharzx.sendMessage(from, duaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('mp3/sound25.mp3');
zharzx.sendMessage(from, dualima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('mp3/sound26.mp3');
zharzx.sendMessage(from, duaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('mp3/sound27.mp3');
zharzx.sendMessage(from, duatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('mp3/sound28.mp3');
zharzx.sendMessage(from, duadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('mp3/sound29.mp3');
zharzx.sendMessage(from, duasembilansembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('mp3/sound30.mp3');
zharzx.sendMessage(from, tigapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('mp3/sound31.mp3');
zharzx.sendMessage(from, tigasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('mp3/sound32.mp3');
zharzx.sendMessage(from, tigadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('mp3/sound33.mp3');
zharzx.sendMessage(from, tigatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('mp3/sound34.mp3');
zharzx.sendMessage(from, tigaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('mp3/sound35.mp3');
zharzx.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('mp3/sound36.mp3');
zharzx.sendMessage(from, tigaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('mp3/sound37.mp3');
zharzx.sendMessage(from, tigatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('mp3/sound38.mp3');
zharzx.sendMessage(from, tigadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('mp3/sound39.mp3');
zharzx.sendMessage(from, tigasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('mp3/sound40.mp3');
zharzx.sendMessage(from, empatpuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('mp3/sound41.mp3');
zharzx.sendMessage(from, empatsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('mp3/sound42.mp3');
zharzx.sendMessage(from, empatdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('mp3/sound43.mp3');
zharzx.sendMessage(from, empattiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('mp3/sound44.mp3');
zharzx.sendMessage(from, empatempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('mp3/sound45.mp3');
zharzx.sendMessage(from, empatlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('mp3/sound46.mp3');
zharzx.sendMessage(from, empatenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('mp3/sound47.mp3');
zharzx.sendMessage(from, empattujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('mp3/sound48.mp3');
zharzx.sendMessage(from, empatdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('mp3/sound49.mp3');
zharzx.sendMessage(from, empatsembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('mp3/sound50.mp3');
zharzx.sendMessage(from, limapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound51':
limasatu = fs.readFileSync('mp3/sound51.mp3');
zharzx.sendMessage(from, limasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound52':
limadua = fs.readFileSync('mp3/sound52.mp3');
zharzx.sendMessage(from, limadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound53':
limatiga = fs.readFileSync('mp3/sound53.mp3');
zharzx.sendMessage(from, limatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound54':
limaempat = fs.readFileSync('mp3/sound54.mp3');
zharzx.sendMessage(from, limaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound55':
limalima = fs.readFileSync('mp3/sound55.mp3');
zharzx.sendMessage(from, limalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound56':
limaenam = fs.readFileSync('mp3/sound56.mp3');
zharzx.sendMessage(from, limaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound57':
limatujuh = fs.readFileSync('mp3/sound57.mp3');
zharzx.sendMessage(from, limatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound58':
limadelapan = fs.readFileSync('mp3/sound58.mp3');
zharzx.sendMessage(from, limadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound59':
limasembilan = fs.readFileSync('mp3/sound59.mp3');
zharzx.sendMessage(from, limasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound60':
enampuluh = fs.readFileSync('mp3/sound60.mp3');
zharzx.sendMessage(from, enampuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound61':
enamsatu = fs.readFileSync('mp3/sound61.mp3');
zharzx.sendMessage(from, enamsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound62':
enamdua = fs.readFileSync('mp3/sound62.mp3');
zharzx.sendMessage(from, enamdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound63':
enamtiga = fs.readFileSync('mp3/sound63.mp3');
zharzx.sendMessage(from, enamtiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound64':
enamempat = fs.readFileSync('mp3/sound64.mp3');
zharzx.sendMessage(from, enamempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound65':
enamlima = fs.readFileSync('mp3/sound65.mp3');
zharzx.sendMessage(from, enamlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound66':
enamenam = fs.readFileSync('mp3/sound66.mp3');
zharzx.sendMessage(from, enamenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound67':
enamtujuh = fs.readFileSync('mp3/sound67.mp3');
zharzx.sendMessage(from, enamtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound68':
enamdelapan = fs.readFileSync('mp3/sound68.mp3');
zharzx.sendMessage(from, enamdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound69':
enamsembilan = fs.readFileSync('mp3/sound69.mp3');
zharzx.sendMessage(from, enamsembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound70':
tujuhpuluh = fs.readFileSync('mp3/sound10.mp3');
zharzx.sendMessage(from, tujuhpuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound71':
tujuhsatu = fs.readFileSync('mp3/sound10.mp3');
zharzx.sendMessage(from, tujuhsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
	case 'ww2':
					
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ww2`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zharzx.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
					
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zharzx.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break

                case 'kucing':
					
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zharzx.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'doraemon':
					
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zharzx.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'hamster':
					
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zharzx.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-hamsters`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zharzx.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kelinci':
					
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					zharzx.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					zharzx.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					  case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} ZX.BOT`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=muzharzain&text=${ini_txt}`)
                    zharzx.sendMessage(from, ini_buffer, sticker, { quoted: mek })

				break
				case 'attp':
                
			    if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}attp ZX.BOT`)
                zhain = body.slice(5)
				mzha = await getBuffer(`https://api.xteam.xyz/attp?file&text=${zhain}`)
				zharzx.sendMessage(from, mzha, sticker, {quoted: mek})
				break
				case 'harta2':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}hartatahta *ZX.BOT*`)
				zhain = body.slice(11)
				reply(ind.wait())
				zein = await getBuffer(`https://api.lolhuman.xyz/api/hartatahta?apikey=muzharzain&text=${zhain}`)
				zharzx.sendMessage(from, zein, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'wetglass':
                     if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} ZX-BOT`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=muzharzain&text=${txt}`)
                    zharzx.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*_*', quoted: mek})
                    break
                case 'multicolor3d':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} ZX-BOT`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/multicolor3d?apikey=muzharzain&text=${txt}`)
                    zharzx.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*_*', quoted: mek})
                    break
                case 'watercolor':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} ZX-BOT`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/watercolor?apikey=muzharzain&text=${txt}`)
                    zharzx.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK JANGAN LUPA SUBS CHANNEL [ZZCX]_*_*', quoted: mek})
                    break
                
               
 
                    
                  
				
				case 'wait':
					
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await zharzx.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							zharzx.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
				default:
            if (budy.includes(`assalamualaikum`)) {

                  reply(`Waalaikumsalam ${pushname}`)

                  }

          if (budy.includes(`Lagi Apa Sayang`)) {

                  reply(`Lagi mikirin ${pushname} sayang😍`)

                  }
                  if (budy.includes(`Lagi apa sayang`)) {

                  reply(`Lagi mikirin ${pushname} sayang😍`)

                  }
  
  
        if (budy.includes(`lagi apa sayang`)) {

                  reply(`Lagi mikirin ${pushname} sayang😍`)

                  }
 
 if (budy.includes(`Kita Putus`)) {

                  reply(`Kamu jahat banget ke aku sih sayang. 😭😭`)

                  }
                   
                   if (budy.includes(`Kita putus`)) {

                  reply(`Kamu jahat banget ke aku sih sayang. 😭😭`)

                  }
                   
 if (budy.includes(`kita putus`)) {

                  reply(`Kamu jahat banget ke aku sih sayang. 😭😭`)

                  }

		if (budy.includes(`Sayangku`)) {

                  reply(`Iya ${pushname} sayang 😍`)

                  }
                  
                  if (budy.includes(`SAYANGKU`)) {

                  reply(`Iya ${pushname} sayang 😍`)

                  }
                  
                  if (budy.includes(`sayangku`)) {

                  reply(`Iya ${pushname} sayang 😍`)

                  }


		if (budy.includes(`I LOVE YOU`)) {

                  reply(`Ilove you too ${pushname} sayang😍`)

                  }
                  
                  if (budy.includes(`iloveyou`)) {

                  reply(`Ilove you too ${pushname} sayang😍`)

                  }
                  
                   if (budy.includes(`Iloveyou`)) {

                  reply(`Ilove you too ${pushname} sayang😍`)

                  }



		if (budy.includes(`sayang kangen`)) {

                  reply(`Aku Juga Sayang kangen kamunya 😍`)

                  }
                  
                  
		if (budy.includes(`Sayang kangen`)) {

                  reply(`Aku Juga Sayang kangen kamunya 😍`)

                  }

if (budy.includes(`Sayang Kangen `)) {

                  reply(`Aku Juga Sayang kangen kamunya 😍`)

                  }
                  
                  if (budy.includes(`SAYANG KANGEN`)) {

                  reply(`Aku Juga Sayang kangen kamunya 😍`)

                  }
                  
  if (budy.includes(`masasih sayang`)) {

                  reply(`Iya sayang apasih yang engga buat ${pushname} sayang😍`)

                  }
if (budy.includes(`Masasih sayang`)) {

                  reply(`Iya sayang apasih yang engga buat ${pushname} sayang😍`)

                  }
if (budy.includes(`Masasih Sayang`)) {

                  reply(`Iya sayang apasih yang engga buat ${pushname} sayang😍`)

                  }
if (budy.includes(`MASASIH SAYANG`)) {

                  reply(`Iya sayang apasih yang engga buat ${pushname} sayang😍`)

                  }


		if (budy.includes(`Assalamualaikum`)) {

                  reply(`Waalaikumsalam ${pushname}`)

                  }


		if (budy.includes(`ASSALAMUALAIKUM`)) {

                  reply(`Waalaikumsalam ${pushname}`)

                  }



		if (budy.includes(`assalamualaikum`)) {

                  reply(`Waalaikumsalam ${pushname}`)

                  }



		if (budy.includes(`Hai`)) {

                  reply(`Hai Juga,\nUntuk Menggunakan Bot Ketik ${prefix}daftar ${pushname}|17 Kemudian #menu `)

                  }





		if (budy.includes(`Hallo`)) {

                  reply(`Hallo Juga,\nUntuk Menggunakan Bot Ketik ${prefix}daftar ${pushname}|17 Kemudian #menu`)

                  }



		if (budy.includes(`Thanks`)) {

                  reply(`Sama-sama ${pushname}`)

                  }

		if (budy.includes(`Makasih`)) {

                  reply(`Sama-sama ${pushname}`)

                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
