import{addExif}from'../lib/sticker.js';let handler=async(_0x56da97,{conn:_0x105a3d,text:_0x4f04f6})=>{let _0x22d6a8={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x56da97['sender']['split']('@')[0x0]+':'+_0x56da97['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'};if(!_0x56da97['quoted'])return _0x105a3d['reply'](_0x56da97['chat'],'[❗]\x20Please\x20label\x20the\x20sticker\x20you\x20want\x20to\x20steal\x20and\x20enter\x20the\x20name\x20you\x20want\x20to\x20give\x20to\x20the\x20sticker.',_0x22d6a8,_0x56da97);let _0x3baddb=![];try{let [_0x374253,..._0x42a22e]=_0x4f04f6['split']('|');_0x42a22e=(_0x42a22e||[])['join']('|');let _0x4b6494=_0x56da97['quoted']['mimetype']||'';if(!/webp/['test'](_0x4b6494))return _0x105a3d['reply'](_0x56da97['chat'],'[❗]\x20Respond\x20to\x20a\x20sticker\x20you\x20want\x20to\x20steal\x20and\x20enter\x20a\x20name',_0x22d6a8,_0x56da97);let _0x3ac5dd=await _0x56da97['quoted']['download']();if(!_0x3ac5dd)return _0x105a3d['reply'](_0x56da97['chat'],'[❗]Respond\x20to\x20a\x20sticker\x20you\x20want\x20to\x20steal\x20and\x20enter\x20the\x20name\x20you\x20want\x20to\x20give\x20to\x20the\x20sticker',_0x22d6a8,_0x56da97);_0x3baddb=await addExif(_0x3ac5dd,_0x374253||global['igfg'],_0x42a22e||global['author']);}catch(_0x5bcb2a){console['error'](_0x5bcb2a);if(Buffer['isBuffer'](_0x5bcb2a))_0x3baddb=_0x5bcb2a;}finally{if(_0x3baddb)_0x105a3d['sendFile'](_0x56da97['chat'],_0x3baddb,'wm.webp','',_0x56da97,![],{'asSticker':!![]});else return _0x105a3d['reply'](_0x56da97['chat'],'[❗]\x20sorry\x20an\x20error\x20occurred',_0x22d6a8,_0x56da97);}};handler['help']=['wm\x20<packname>|<author>'],handler['tags']=['sticker'],handler['command']=/^take|robar|wm$/i,handler['register']=!![],handler['limit']=0x3;export default handler;