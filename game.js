(()=>{
'use strict';
const ATLAS={"sarge_w1": [0, 0, 118, 215, 61], "sarge_w2": [120, 0, 130, 213, 72], "sarge_atk": [252, 0, 188, 209, 129], "sarge_block": [442, 0, 120, 208, 61], "trey_atk": [564, 0, 134, 206, 55], "sarge_hurt": [700, 0, 125, 203, 52], "trey_idle": [827, 0, 119, 200, 50], "trey_w1": [948, 0, 120, 200, 51], "trey_w2": [1070, 0, 120, 200, 52], "page_idle": [1192, 0, 94, 200, 40], "page_atk": [1288, 0, 117, 200, 35], "mike_idle": [1407, 0, 109, 200, 43], "mike_w1": [1518, 0, 111, 200, 41], "fish_idle": [1631, 0, 107, 200, 52], "fish_vac": [1740, 0, 138, 200, 69], "sarge_charge": [1880, 0, 127, 200, 72], "page_w1": [0, 217, 82, 198, 40], "mike_w2": [84, 217, 113, 198, 45], "page_w2": [199, 217, 92, 197, 46], "mike_rock": [293, 217, 103, 196, 46], "fish_w1": [398, 217, 87, 196, 43], "mike_hurt": [487, 217, 107, 195, 40], "fish_w2": [596, 217, 91, 195, 45], "mike_atk": [689, 217, 135, 191, 52], "fish_atk": [826, 217, 143, 191, 49], "props_phone": [971, 217, 91, 190, 45], "trey_hurt": [1064, 217, 85, 185, 41], "trey_rock": [1151, 217, 107, 185, 50], "page_hurt": [1260, 217, 99, 185, 48], "page_rock": [1361, 217, 103, 180, 49], "fish_drums": [1466, 217, 124, 180, 63], "fish_hurt": [1592, 217, 91, 178, 42], "grunt_w1": [1685, 217, 132, 175, 55], "grunt_w2": [1819, 217, 121, 175, 48], "guard_w1": [1942, 217, 104, 175, 42], "bobby_w1": [0, 417, 114, 175, 54], "grunt_atk": [116, 417, 152, 173, 81], "guard_w2": [270, 417, 104, 173, 47], "bobby_w2": [376, 417, 116, 172, 58], "bobby_atk": [494, 417, 125, 172, 68], "bobby_hurt": [621, 417, 197, 170, 98], "grunt_hurt": [820, 417, 107, 164, 45], "guard_atk": [929, 417, 132, 161, 67], "guard_hurt": [1063, 417, 91, 156, 44], "props_cart": [1156, 417, 159, 150, 79], "grunt_free": [1317, 417, 121, 142, 61], "guard_free": [1440, 417, 109, 133, 54], "bobby_free": [1551, 417, 106, 125, 53], "grunt_down": [1659, 417, 142, 100, 80], "props_crate": [1803, 417, 76, 80, 33], "props_chips": [1881, 417, 28, 44, 3], "props_glow": [1911, 417, 17, 44, 3], "props_page": [1930, 417, 38, 44, 18], "guard_down": [0, 594, 127, 42, 56], "props_tea": [129, 594, 41, 36, 21], "bobby_down": [172, 594, 57, 23, 10]};
const ATLAS2={"carini_big": [0, 0, 353, 420, 173], "unit_tele": [355, 0, 329, 397, 164], "unit_idle": [686, 0, 302, 330, 141], "unit_hurt": [990, 0, 299, 315, 138], "unit_grab": [1291, 0, 378, 314, 242], "unit_slam": [1671, 0, 324, 296, 161], "unit_ko": [0, 422, 289, 267, 139], "clogger_w1": [291, 422, 132, 190, 56], "clogger_w2": [425, 422, 125, 186, 51], "cyclist_w1": [552, 422, 117, 185, 50], "cyclist_w2": [671, 422, 115, 184, 49], "cyclist_charge": [788, 422, 114, 184, 49], "clogger_atk": [904, 422, 139, 182, 66], "cyclist_hurt": [1045, 422, 111, 178, 47], "clogger_free": [1158, 422, 125, 178, 58], "clogger_hurt": [1285, 422, 112, 177, 43], "agrunt_w1": [1399, 422, 114, 175, 49], "striper_idle": [1515, 422, 106, 175, 62], "striper_tele": [1623, 422, 102, 174, 58], "agrunt_w2": [1727, 422, 116, 173, 46], "agrunt_atk": [1845, 422, 138, 171, 90], "striper_hurt": [0, 691, 104, 167, 56], "agrunt_free": [106, 691, 107, 164, 52], "cyclist_free": [215, 691, 112, 154, 56], "agrunt_hurt": [329, 691, 112, 153, 66], "striper_atk": [443, 691, 118, 130, 81], "cyclist_down": [563, 691, 162, 91, 119], "clogger_down": [727, 691, 143, 86, 70], "striper_down": [872, 691, 116, 75, 59], "agrunt_down": [990, 691, 132, 57, 54]};for(const k in ATLAS2){ATLAS[k]=ATLAS2[k].slice(0,5);ATLAS[k][5]=2}
const W=1024,H=576;
const CH={
 trey:{n:'TREY',spd:250,dmg:10,reach:100,hp:100,sp:'RIFF BLAST'},
 page:{n:'PAGE',spd:195,dmg:15,reach:95,hp:115,sp:'SOUND WAVE'},
 mike:{n:'MIKE',spd:315,dmg:9,reach:140,hp:90,sp:'COW-FUNK STUN'},
 fish:{n:'FISH',spd:205,dmg:11,reach:90,hp:145,sp:'VACUUM SUCK'}};
const ET={
 grunt:{hp:30,dmg:8,spd:115,reach:70,sc:1,pts:100,liz:1,tele:.45},
 bobby:{hp:36,dmg:9,spd:105,reach:90,sc:1,pts:150,liz:1,tele:.5},
 guard:{hp:46,dmg:11,spd:95,reach:75,sc:1.05,pts:200,liz:1,tele:.4},
 pruss:{hp:50,dmg:10,spd:90,reach:110,sc:.82,pts:250,block:1,tele:.55},
 sarge:{hp:260,dmg:16,spd:110,reach:125,sc:1,pts:3000,block:1,boss:1,tele:.6},
 agrunt:{hp:30,dmg:8,spd:115,reach:70,sc:1,pts:120,liz:1,tele:.45,clog:1},
 cyclist:{hp:34,dmg:12,spd:150,reach:60,sc:1,pts:200,liz:1,tele:.6,bike:1},
 clogger:{hp:62,dmg:13,spd:80,reach:85,sc:1.05,pts:250,liz:1,tele:.6,stomp:1},
 striper:{hp:40,dmg:11,spd:75,reach:210,sc:1,pts:250,tele:.55,canal:1},
 unit:{hp:420,dmg:16,spd:70,reach:200,sc:1,pts:4000,boss:1,big:1,tele:.85}};
// ---------- levels ----------
const LEVELS={
1:{key:'london',seg:[['tube',0,425,505],['tube',1024,425,505],['market',2048,450,565],['market',3072,450,565],['venue',4096,478,565]],door:4096+735,
 waves:[{at:250,list:['grunt','grunt']},{at:1150,list:['grunt','bobby','grunt']},{at:2150,list:['guard','grunt','bobby','pruss']},{at:3050,list:['guard','bobby','grunt','guard','pruss']},{at:4096,list:['sarge'],boss:'sarge'}],
 brk:[[700,470,'crate','tea'],[1700,490,'crate','chips'],[2500,470,'cart','glow'],[2850,540,'crate','tea'],[3450,500,'cart','chips'],[4150,500,'phone','chips'],[1300,480,'crate','note'],[2700,520,'crate','note'],[4330,545,'crate','note'],[3800,470,'crate','setlist']],
 bass:[45,45,57,45,52,45,55,57, 43,43,55,43,50,43,52,55],hud:'LONDON 2/13/97',bossName:'PRUSSIAN SERGEANT',bossTitle:'THE PRUSSIAN SERGEANT',bossSub:"KING WILSON'S ENFORCER",bossBanner:'SERGEANT DOWN!',doorMsg:'TO THE EMPIRE!',setlistMsg:'2/13/97 SETLIST PAGE FOUND!',stageLen:10.5,
 imgs:[['tube','bg_tube.webp'],['market','bg_market.webp'],['venue','bg_venue.webp'],['stage','bg_stage.webp']],
 intro:['LEVEL 1','LONDON',"SHEPHERD'S BUSH EMPIRE · 2/13/97",["KING WILSON HAS STOLEN THE HELPING FRIENDLY","BOOK AND SCATTERED ITS PAGES ACROSS THE TOUR.","PAGE ONE IS HIDDEN IN LONDON. HIS BAGGED","LIZARDS AND PRUSSIAN GUARDS STAND IN THE WAY.","","FREE THE LIZARDS. REACH THE EMPIRE. PLAY THE SHOW."]]},
2:{key:'ams',seg:[['centraal',0,468,565],['centraal',1024,468,565],['canals',2048,452,565],['canals',3072,452,565],['paradiso',4096,480,565]],door:4096+745,
 waves:[{at:250,list:['agrunt','agrunt','guard']},{at:1150,list:['cyclist','agrunt','clogger','cyclist']},{at:2150,list:['striper','agrunt','cyclist','clogger','striper']},{at:3072,list:['unit'],boss:'unit'},{at:4096,list:['clogger','agrunt','pruss','cyclist','guard']}],
 brk:[[650,500,'crate','waffle'],[1500,520,'crate','note'],[1800,490,'cart','frites'],[2350,530,'crate','gin'],[2780,545,'crate','setlist'],[3250,545,'crate','waffle'],[3560,535,'crate','note'],[3900,550,'crate','frites'],[4250,525,'crate','gin']],
 bass:[43,43,50,43,55,43,53,50, 41,41,48,41,53,41,51,48],hud:'AMSTERDAM 2/17/97',bossName:'UNIT MONSTER',bossTitle:'THE UNIT MONSTER',bossSub:'IT RISES FROM THE CANAL...',bossBanner:'UNIT MONSTER SUNK!',doorMsg:'TO THE PARADISO!',setlistMsg:'2/17/97 SETLIST PAGE FOUND!',stageLen:16.6,
 imgs:[['centraal','bg_centraal.webp'],['canals','bg_canals.webp'],['paradiso','bg_paradiso.webp'],['amsstage','bg_amsstage.webp'],['atlas2','atlas_ams.webp']],scripts:['assets3.js','assets4.js'],
 intro:['LEVEL 2','AMSTERDAM','PARADISO · 2/17/97',["PAGE TWO SLEEPS BENEATH A CHURCH OF SONG.","WILSON'S BAGGED LIZARDS RULE THE BIKE LANES,","AND SOMETHING HUGE STIRS IN THE COLD CANALS.","","FREE THE LIZARDS. REACH THE PARADISO. PLAY THE SHOW."]]}};
let LV=LEVELS[1],LVN=1,SEG=LV.seg,WAVES=LV.waves,BREAK=LV.brk,DOOR=LV.door;const WORLD=5120;
const DEBUTS=['WALFREDO','LOVE ME','MY SOUL','WHEN THE CIRCUS COMES','ROCK A WILLIAM'];
let cv,ctx,img={},G=null,raf=0,last=0,keys={},touch={x:0,y:0,a:0,j:0,s:0},AC=null,master=null,musicOn=true,onExit=null,PORTRAIT=null;
// ---------- audio ----------
function ac(){if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)();master=AC.createGain();master.gain.value=.5;master.connect(AC.destination)}catch(e){}}if(AC&&AC.state==='suspended')AC.resume();return AC}
function tone(f,d,type='square',v=.12,slide=0,t0=0){const a=ac();if(!a)return;const t=a.currentTime+t0,o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(30,f*slide),t+d);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(master);o.start(t);o.stop(t+d+.02)}
let noiseBuf=null;function noise(d,v=.2,hp=800){const a=ac();if(!a)return;if(!noiseBuf){noiseBuf=a.createBuffer(1,a.sampleRate*.5,a.sampleRate);const c=noiseBuf.getChannelData(0);for(let i=0;i<c.length;i++)c[i]=Math.random()*2-1}const s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();s.buffer=noiseBuf;f.type='highpass';f.frequency.value=hp;g.gain.setValueAtTime(v,a.currentTime);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+d);s.connect(f).connect(g).connect(master);s.start();s.stop(a.currentTime+d)}
const SFX={
 swing(){noise(.08,.08,2500)},
 hit(){noise(.1,.25,600);tone(140,.1,'square',.12,.5)},
 big(){noise(.2,.3,300);tone(90,.25,'sawtooth',.15,.4)},
 block(){tone(900,.06,'square',.08);tone(1300,.08,'triangle',.06,1,.03)},
 hurt(){tone(300,.18,'sawtooth',.14,.4)},
 pick(){[523,659,784,1047].forEach((f,i)=>tone(f,.09,'square',.08,1,i*.06))},
 brk(){noise(.25,.25,400);tone(110,.15,'square',.1,.6)},
 jump(){tone(300,.15,'square',.07,2.2)},
 special(){[262,330,392,523,659,784].forEach((f,i)=>tone(f,.14,'sawtooth',.08,1,i*.05));noise(.5,.15,200)},
 free(){[784,988,1175].forEach((f,i)=>tone(f,.08,'triangle',.1,1,i*.07))},
 go(){tone(660,.1,'square',.08);tone(880,.12,'square',.08,1,.12)},
 whistle(){tone(2200,.25,'square',.08,1.1);tone(2600,.3,'square',.07,1,.28)},
 moo(){tone(180,.6,'sawtooth',.12,.75);tone(184,.6,'square',.05,.72)},
 splash(){noise(.45,.25,900);noise(.25,.15,3000);tone(160,.3,'triangle',.08,.5)},
 bell(){tone(2350,.09,'square',.06);tone(2350,.09,'square',.06,1,.13);tone(2350,.12,'square',.05,1,.26)},
 tequila(){[392,392,392,330,392].forEach((f,i)=>tone(f,.12,'square',.08,1,i*.13))},
 gin(){const n=[72,76,78,81,79,76,72,69,66,66,66,67],d=[.24,.24,.12,.36,.24,.24,.12,.24,.12,.12,.12,.36];let t=0;n.forEach((m,i)=>{tone(440*Math.pow(2,(m-69)/12),d[i]*.9,'square',.07,1,t);t+=d[i]*.9})}};
let musT=0,musStep=0;
function music(dt){if(!musicOn||!AC||!G||G.mode==='end')return;musT-=dt;if(musT<=0){musT=60/132/2;const n=LV.bass[musStep%16];const f=440*Math.pow(2,(n-69)/12);tone(f,.16,'triangle',.11);if(musStep%4===0)noise(.05,.06,5000);if(musStep%8===4)noise(.09,.08,1500);musStep++}}
// ---------- helpers ----------
const rnd=(a,b)=>a+Math.random()*(b-a),clamp=(v,a,b)=>v<a?a:v>b?b:v;
function lane(x){// returns [top,bottom] at world x with blend near seams
 let s=SEG[clamp(Math.floor(x/1024),0,4)];let n=SEG[clamp(Math.floor(x/1024)+1,0,4)];const f=x-s[1];
 if(f>924&&n!==s){const t=(f-924)/100;return[s[2]+(n[2]-s[2])*t,s[3]+(n[3]-s[3])*t]}return[s[2],s[3]]}
const TINTS={};function tintAtlas(c,w){const key=c+(w||1);if(TINTS[key])return TINTS[key];const a=w===2?img.atlas2:img.atlas,cv2=document.createElement('canvas');cv2.width=a.width;cv2.height=a.height;const x=cv2.getContext('2d');x.drawImage(a,0,0);x.globalCompositeOperation='source-atop';x.fillStyle=c;x.fillRect(0,0,a.width,a.height);return TINTS[key]=cv2}
function spr(name,x,y,flip,sc=1,alpha=1,tint=null){const m=ATLAS[name];if(!m)return;const[sx,sy,w,h,fx]=m;ctx.save();ctx.globalAlpha=alpha;ctx.translate(Math.round(x),Math.round(y));if(flip)ctx.scale(-1,1);ctx.scale(sc,sc);const A=m[5]===2?img.atlas2:img.atlas;if(!A)return ctx.restore();ctx.drawImage(A,sx,sy,w,h,-fx,-h,w,h);
 if(tint){ctx.globalAlpha=alpha*tint[1];ctx.drawImage(tintAtlas(tint[0],m[5]),sx,sy,w,h,-fx,-h,w,h)}ctx.restore()}
function shadow(x,y,w){ctx.fillStyle='rgba(0,0,0,.35)';ctx.beginPath();ctx.ellipse(x,y,w,w*.28,0,0,7);ctx.fill()}
function txt(s,x,y,sz=16,c='#fff',al='center',sh='#000'){ctx.font=sz+'px "Press Start 2P",monospace';ctx.textAlign=al;ctx.fillStyle=sh;ctx.fillText(s,x+3,y+3);ctx.fillStyle=c;ctx.fillText(s,x,y)}
// ---------- game ----------
function newGame(cid,lvl){
 const c=CH[cid];LVN=LEVELS[lvl]?lvl:1;LV=LEVELS[LVN];SEG=LV.seg;WAVES=LV.waves;BREAK=LV.brk;DOOR=LV.door;musStep=0;
 G={cid,c,t:0,cam:0,camLock:null,wave:0,waveActive:false,go:0,score:0,lives:3,mode:'intro',modeT:0,shake:0,
  p:{x:120,y:470,z:0,vz:0,face:1,hp:c.hp,jam:0,st:'idle',t:0,combo:0,comboT:0,inv:1.5,boost:0,hitList:[]},
  en:[],fx:[],items:[],brk:BREAK.map(b=>({x:b[0],y:b[1],k:b[2],drop:b[3],hp:3,shake:0})),rain:[],boss:null,hits:0,freed:0,time:0,eproj:[],bikes:[],bikeT:3.5,lvl:LVN};
 for(let i=0;i<120;i++)G.rain.push({x:rnd(0,W),y:rnd(0,H),v:rnd(700,1000)});
}
function spawn(type,side,i){const t=ET[type];const x=side>0?G.cam+W+60+i*70:G.cam-60-i*70;const ln=lane(clamp(x,0,WORLD-1));
 const e={type,t:0,x,y:rnd(ln[0]+10,ln[1]-5),z:0,vz:0,vx:0,hp:t.hp,max:t.hp,st:'walk',stT:0,face:-side,cd:rnd(.6,1.6),slotY:rnd(-30,30),stun:0,tok:0,blockT:0,phase:0,flash:0,anim:rnd(0,1)};
 if(t.boss){G.boss=e;e.x=G.cam+W-120;e.y=520;e.st='intro';e.stT=0;if(type==='unit'){e.x=(G.camLock!=null?G.camLock:G.cam)+W-250;e.y=505;e.rise=0;e.face=-1}}
 if(t.canal){const cx=(G.camLock!=null?G.camLock:G.cam);e.x=cx+rnd(560,930);e.y=canalY(e.x)+rnd(4,20);e.st='emerge';e.stT=.8;addFx({k:'splash',x:e.x,y:e.y,life:.6})}
 G.en.push(e);G.spawned=(G.spawned||0)+1;return e}
function startWave(){const w=WAVES[G.wave];G.waveActive=true;G.camLock=w.at;G.spawned=0;
 if(w.boss){spawn(w.boss,1,0);G.bossIntro=2.2;SFX.big();if(w.boss==='unit')SFX.splash()}
 else w.list.forEach((ty,i)=>{setTimeout(()=>{if(G&&G.waveActive)spawn(ty,i%2?-1:1,0)},i*700)});
 G.waveLeft=w.list.length}
function addFx(o){G.fx.push(Object.assign({t:0,life:.5},o))}
function damageEnemy(e,dmg,dir,kd,src){
 const t=ET[e.type];if(e.st==='dead'||e.st==='free'||e.st==='intro')return false;
 if(t.block&&e.st==='block'&&Math.sign(G.p.x-e.x)===e.face&&!src){
  if(kd){addFx({k:'txt',s:'GUARD BREAK!',x:e.x,y:e.y-200,c:'#ffd23f'});SFX.big();dmg*=.6}
  else{SFX.block();addFx({k:'txt',s:'BLOCK',x:e.x,y:e.y-170,c:'#9cf'});e.blocks=(e.blocks||0)+1;if(e.blocks>=3){e.blocks=0;e.st='tele';e.stT=.35}return false}}
 if(t.bike&&e.st==='charge'){kd=1;dmg*=1.5;addFx({k:'txt',s:'KNOCKED OFF!',x:e.x,y:e.y-200,c:'#ffd23f'})}
 e.hp-=dmg;e.flash=.12;G.score+=dmg*10;G.hits++;
 G.p.jam=Math.min(100,G.p.jam+(src?0:7));
 addFx({k:'spark',x:e.x+dir*-20,y:e.y-90-rnd(0,40),life:.25});
 if(e.hp<=0){e.hp=0;e.st='down';e.stT=1.1;e.vx=dir*320;e.vz=380;G.score+=t.pts;G.shake=.2;SFX.big();
  if(t.boss){G.shake=.8;G.slowmo=1.6;e.stT=2.2;e.vx=dir*220;e.vz=420;if(t.big){e.stT=3.4;e.vx=0;e.vz=0;e.sink=0;SFX.splash();setTimeout(()=>SFX.big(),300);if(G.p.st==='held'){G.p.st='down';G.p.t=.6;G.p.vz=300;G.p.vx=-120;G.p.held=null}}addFx({k:'flash',life:.5});addFx({k:'banner',s:LV.bossBanner,life:2.4});G.en.forEach(o=>{if(o!==e&&ET[o.type].liz&&o.hp>0){o.hp=0;o.st='down';o.stT=.9;o.vz=250;o.vx=0}})}
  return true}
 if(t.big){if(e.st==='walk'){e.st='hurt';e.stT=.22}SFX.hit();return true}
 if(kd||(t.boss&&Math.random()<.12)){e.st='down';e.stT=1;e.vx=dir*(t.boss?160:300);e.vz=t.boss?200:330;SFX.big()}
 else{e.st='hurt';e.stT=t.boss?.18:.32;e.vx=dir*120;SFX.hit()}
 if(e.tok){e.tok=0}
 return true}
function hurtPlayer(dmg,dir){const p=G.p;if(p.inv>0||p.st==='special'||p.st==='held'||G.mode!=='play')return;
 p.hp-=dmg;p.inv=1;G.shake=.25;SFX.hurt();addFx({k:'spark',x:p.x,y:p.y-110,life:.25,c:'#f44'});
 if(dmg>=14||p.hp<=0){p.st='down';p.t=1;p.vx=dir*260;p.vz=300}else{p.st='hurt';p.t=.3;p.vx=dir*120}
 if(p.hp<=0){p.hp=0;p.dead=1}}
function playerHit(range,dmg,kd,arc){const p=G.p;let any=false;
 for(const e of G.en){if(e.st==='dead'||e.st==='free'||e.st==='down'&&!arc)continue;const dx=(e.x-p.x)*p.face;
  const big=ET[e.type].big;if(dx>-20-(big?60:0)&&dx<range+(big?90:0)&&Math.abs(e.y-p.y)<(big?80:arc?60:32)&&Math.abs(e.z-p.z)<(big?200:80)){if(damageEnemy(e,dmg,p.face,kd))any=true}}
 for(const b of G.brk){if(b.hp<=0)continue;const dx=(b.x-p.x)*p.face;if(dx>-20&&dx<range+30&&Math.abs(b.y-p.y)<45){b.hp--;b.shake=.2;SFX.brk();addFx({k:'chip',x:b.x,y:b.y-50});
  if(b.hp<=0){G.items.push({k:b.drop,x:b.x,y:b.y+4,t:0});G.score+=50;for(let i=0;i<8;i++)addFx({k:'chip',x:b.x+rnd(-30,30),y:b.y-rnd(10,90),vx:rnd(-200,200),vy:rnd(-400,-100),life:.7})}any=true}}
 return any}
function doSpecial(){const p=G.p;if(p.jam<100||p.st==='special'||p.st==='down')return;p.jam=0;p.st='special';p.t=1.1;p.inv=1.3;SFX.special();G.shake=.4;
 const id=G.cid;
 addFx({k:'banner',s:G.c.sp+'!',life:1.3});
 if(id==='trey'){addFx({k:'riff',x:p.x,y:p.y,dir:p.face,life:1,hit:new Set()})}
 if(id==='page'){addFx({k:'ring',x:p.x,y:p.y,life:.8});G.en.forEach(e=>{if(Math.abs(e.x-p.x)<380)damageEnemy(e,24,Math.sign(e.x-p.x)||1,1,1)})}
 if(id==='mike'){SFX.moo();G.en.forEach(e=>{if(e.x>G.cam-50&&e.x<G.cam+W+50&&e.st!=='down'&&e.st!=='free'&&e.st!=='dead'){damageEnemy(e,12,Math.sign(e.x-p.x)||1,0,1);if(e.hp>0){e.stun=3.2;e.st='stun'}}});addFx({k:'cows',x:p.x,y:p.y,life:1.4})}
 if(id==='fish'){addFx({k:'vac',x:p.x,y:p.y,dir:p.face,life:1.1})}
}
function update(dt){
 G.t+=dt;G.modeT+=dt;music(dt);
 for(const r of G.rain){r.y+=r.v*dt;r.x-=r.v*.15*dt;if(r.y>H){r.y=-10;r.x=rnd(0,W+100)}}
 G.fx=G.fx.filter(f=>(f.t+=dt)<f.life);
 if(G.shake>0)G.shake-=dt;
 if(G.mode==='intro'||G.mode==='over'||G.mode==='end'||G.mode==='paused')return;
 if(G.mode==='walkin'){updatePlayerAuto(dt);return}
 if(G.mode==='stage'){if(G.modeT>LV.stageLen&&!G.sent){G.sent=1;onExit&&onExit('done',{score:G.score,freed:G.freed,hits:G.hits,time:G.time,cid:G.cid,lives:G.lives,setlist:!!G.setlist,lvl:LVN})}if(LVN===2)stageAmsSfx();return}
 if(G.slowmo>0){G.slowmo-=dt;dt*=.3}
 G.time+=dt;
 updateProj(dt);p_note(dt);
 const p=G.p,c=G.c;
 // input
 let ix=(keys.ArrowRight||keys.KeyD?1:0)-(keys.ArrowLeft||keys.KeyA?1:0)+touch.x,iy=(keys.ArrowDown||keys.KeyS?1:0)-(keys.ArrowUp||keys.KeyW?1:0)+touch.y;
 ix=clamp(ix,-1,1);iy=clamp(iy,-1,1);
 const atk=keys.KeyJ||keys.KeyZ||touch.a,jmp=keys.KeyK||keys.KeyX||keys.Space||touch.j,spc=keys.KeyL||keys.KeyC||touch.s;
 p.inv-=dt;p.boost-=dt;p.t-=dt;p.comboT-=dt;
 const spd=c.spd*(p.boost>0?1.45:1);
 if(p.st==='held'){if(atk&&!p._a){p.mash=(p.mash||0)+1;G.shake=.08;SFX.hit();addFx({k:'spark',x:p.x,y:p.y-p.z-80,life:.2})}}
 else if(p.st==='special'){if(G.cid==='fish'){/* vacuum pull */G.en.forEach(e=>{const dx=(e.x-p.x)*p.face;if(dx>0&&dx<520&&Math.abs(e.y-p.y)<90&&e.st!=='free'&&e.st!=='dead'){e.x-=p.face*420*dt;e.y+=(p.y-e.y)*2*dt;if(dx<80&&!e.vacHit){e.vacHit=1;damageEnemy(e,26,p.face,1,1)}}})}
  if(p.t<=0){p.st='idle';G.en.forEach(e=>e.vacHit=0)}}
 else if(p.st==='hurt'||p.st==='down'){p.x+=p.vx*dt;p.vx*=.9;if(p.st==='down'){p.z+=p.vz*dt;p.vz-=1400*dt;if(p.z<0){p.z=0;p.vz=0}}
  if(p.t<=0){if(p.dead){loseLife();return}p.st='idle';if(p.st==='down')p.inv=1}}
 else{
  if(spc&&!p._s)doSpecial();
  const air=p.z>0;
  if(p.st==='atk'){if(p.t<=0)p.st='idle';else{const ph=p.atkDur-p.t;if(!p.hitDone&&ph>p.atkDur*.35){p.hitDone=1;const third=p.combo===3||air;const any=playerHit(c.reach+(third?15:0),c.dmg*(third?1.8:1),third,0);if(any&&third)G.shake=.15}}
   if(air){p.x+=p.vx*dt}}
  if(p.st!=='atk'||air){
   if(!air){p.vx=ix*spd;p.y+=iy*spd*.55*dt}
   p.x+=p.vx*dt;if(ix)p.face=ix>0?1:-1;
   if(p.st!=='atk')p.st=(ix||iy)?'walk':'idle';
   if(jmp&&!p._j&&!air){p.vz=620;p.z=.1;SFX.jump()}
  }
  if(atk&&!p._a&&(p.st!=='atk'||p.t<p.atkDur*.3)){p.combo=p.comboT>0?p.combo%3+1:1;p.comboT=.55;p.st='atk';if(p.note>0)fireNote();p.atkDur=p.combo===3?.36:.26;p.t=p.atkDur;p.hitDone=0;SFX.swing();if(!air)p.x+=p.face*8}
  if(p.z>0){p.z+=p.vz*dt;p.vz-=1600*dt;if(p.z<=0){p.z=0;p.vz=0}}
 }
 p._a=atk;p._j=jmp;p._s=spc;
 // bounds
 const ln=lane(p.x);if(p.st!=='held')p.y=clamp(p.y,ln[0],ln[1]);
 const minX=G.camLock!=null?G.camLock+40:G.cam+40,maxX=G.camLock!=null?G.camLock+W-40:WORLD-40;
 p.x=clamp(p.x,minX,maxX);
 // camera
 if(G.camLock!=null){G.cam+=(G.camLock-G.cam)*Math.min(1,dt*5)}
 else{const target=clamp(p.x-W*.4,G.cam,WORLD-W);G.cam+=(target-G.cam)*Math.min(1,dt*6)}
 // wave triggers
 if(!G.waveActive&&G.wave<WAVES.length&&G.cam>=WAVES[G.wave].at-(WAVES[G.wave].boss?0:60)&&p.x>WAVES[G.wave].at+W*.3){startWave()}
 if(!G.waveActive&&G.wave<WAVES.length&&WAVES[G.wave].boss&&p.x>WAVES[G.wave].at+250){if(WAVES[G.wave].at>=4096)G.cam=4096;startWave()}
 if(G.bossIntro>0){G.bossIntro-=dt}
 updateEnemies(dt);updateEproj(dt);if(LVN===2)hazAms(dt);
 // wave cleared?
 if(G.waveActive){const alive=G.en.filter(e=>e.st!=='free'&&e.st!=='dead').length;const pending=G.spawned<G.waveLeft;
  if(!alive&&!pending&&G.spawned>=1){G.waveActive=false;G.camLock=null;G.en=G.en.filter(e=>e.st==='free');G.wave++;G.go=3;SFX.go();
   if(G.wave>=WAVES.length){G.go=0;G.doorOpen=1;addFx({k:'banner',s:LV.doorMsg,life:2})}}}
 if(G.go>0)G.go-=dt*.6;
 // items
 for(const it of G.items){it.t+=dt;if(!it.got&&Math.abs(it.x-p.x)<45&&Math.abs(it.y-p.y)<35&&p.z<30){it.got=1;SFX.pick();
  if(it.k==='chips'){p.hp=Math.min(c.hp,p.hp+45);addFx({k:'txt',s:'FISH & CHIPS +45',x:p.x,y:p.y-200,c:'#7f7'})}
  if(it.k==='tea'){p.hp=Math.min(c.hp,p.hp+18);addFx({k:'txt',s:'CUPPA TEA +18',x:p.x,y:p.y-200,c:'#7f7'})}
  if(it.k==='setlist'){G.setlist=1;G.score+=400;addFx({k:'banner',s:LV.setlistMsg,life:1.8})}
  if(it.k==='waffle'){p.hp=Math.min(c.hp,p.hp+25);addFx({k:'txt',s:'STROOPWAFEL +25',x:p.x,y:p.y-200,c:'#7f7'})}
  if(it.k==='frites'){p.hp=Math.min(c.hp,p.hp+45);addFx({k:'txt',s:'FRITES MET MAYO +45',x:p.x,y:p.y-200,c:'#7f7'})}
  if(it.k==='gin'){p.hp=Math.min(c.hp,p.hp+30);G.score+=300;SFX.gin();addFx({k:'banner',s:'♪ BATHTUB GIN ♪ +30',life:1.8})}
  if(it.k==='note'){p.note=10;addFx({k:'txt',s:'MUSIC NOTE POWER!',x:p.x,y:p.y-200,c:'#ffd23f'})}
  if(it.k==='glow'){p.boost=9;addFx({k:'txt',s:'GLOW STICK SPEED!',x:p.x,y:p.y-200,c:'#8f8'})}
  G.score+=100}}
 G.items=G.items.filter(i=>!i.got);
 for(const b of G.brk)if(b.shake>0)b.shake-=dt;
 if(G.doorOpen&&p.x>DOOR-30&&G.mode==='play'){G.mode='walkin';G.modeT=0}
}
function updatePlayerAuto(dt){const p=G.p;p.st='walk';p.face=1;p.x+=120*dt;p.y+=(500-p.y)*dt*2;G.cam+=(4096-G.cam)*dt*3;if(G.modeT>1.6){G.mode='stage';G.modeT=0;musicOn&&SFX.special()}}
function updateEnemies(dt){const p=G.p;
 let tokens=G.en.filter(e=>e.tok).length;
 for(const e of G.en){const t=ET[e.type];e.t+=dt;e.anim+=dt;e.flash-=dt;e.stT-=dt;e.cd-=dt;e.blockT-=dt;
  if(e.type==='unit'){updUnit(e,dt);continue}
  if(e.st==='emerge'){e.face=p.x<e.x?-1:1;if(e.stT<=0){e.st='walk';e.cd=.7}continue}
  if(e.st==='lunge'){e.x+=e.face*560*dt;if(!e.hitDone&&Math.abs(p.x-e.x)<75&&Math.abs(p.y-e.y)<40&&p.z<50){e.hitDone=1;hurtPlayer(t.dmg,e.face)}if(e.stT<=0){e.st='walk';e.cd=rnd(1.2,2);if(e.tok){e.tok=0;tokens--}}continue}
  if(e.st==='free'){e.x+=e.face*-1*0+e.runDir*260*dt;continue}
  if(e.st==='dead'){continue}
  if(e.st==='intro'){e.face=-1;if(G.bossIntro<=0){e.st='walk'}continue}
  if(e.st==='down'){e.x+=e.vx*dt;e.vx*=.92;e.z+=e.vz*dt;e.vz-=1400*dt;if(e.z<0){e.z=0;e.vz=0}
   if(e.stT<=0){if(e.hp<=0){if(t.canal){e.st='dead';addFx({k:'splash',x:e.x,y:e.y,life:.7});addFx({k:'poof',x:e.x,y:e.y,life:.6});continue}if(t.liz){e.st='free';e.runDir=e.x>G.cam+W/2?1:-1;e.face=-e.runDir;G.freed++;SFX.free();addFx({k:'bag',x:e.x,y:e.y-120,vx:rnd(-80,80),life:1});addFx({k:'txt',s:'FREED!',x:e.x,y:e.y-190,c:'#7f7',life:1.1})}else{e.st='dead';addFx({k:'poof',x:e.x,y:e.y,life:.6})}}else{e.st='walk';e.cd=.5}}
   continue}
  if(e.st==='hurt'){e.x+=e.vx*dt;e.vx*=.85;if(e.stT<=0){e.st='walk';if(t.block&&Math.random()<.35){e.st='block';e.stT=.7}}continue}
  if(e.st==='stun'){e.stun-=dt;if(e.stun<=0)e.st='walk';continue}
  if(e.st==='block'){e.face=p.x<e.x?-1:1;if(e.stT<=0)e.st='walk';continue}
  if(e.st==='whistle'){if(e.stT<=0)e.st='walk';continue}
  if(e.st==='tele'){if(e.stT<=0){if(e.next==='clog'){e.next=0;e.st='atk';e.stT=.3;e.hitDone=1;e.face=p.x<e.x?-1:1;G.eproj.push({k:'clog',x:e.x+e.face*40,y:e.y,vx:e.face*430,t:0});SFX.swing();e.cd=rnd(2.2,3.2)}
    else if(t.canal){e.face=p.x<e.x?-1:1;e.st='lunge';e.stT=.36;e.hitDone=0;SFX.splash()}
    else if(e.next==='charge'){e.next=0;e.face=p.x<e.x?-1:1;e.st='charge';e.stT=t.bike?2.4:1.5;t.bike?SFX.bell():SFX.big()}else if(e.next==='pound'){e.next=0;e.st='block';e.stT=.7;G.shake=.5;SFX.big();addFx({k:'shock',x:e.x,y:e.y,life:1.3,hp:0})}else{e.st='atk';e.stT=.25;e.hitDone=0;SFX.swing()}}continue}
  if(e.st==='atk'){if(!e.hitDone&&e.stT<.18){e.hitDone=1;if(t.stomp){G.shake=.25;SFX.big();addFx({k:'shock',x:e.x+e.face*40,y:e.y,life:.55,hp:0,max:210})}const dx=(p.x-e.x)*e.face;if(dx>-10&&dx<t.reach+10&&Math.abs(p.y-e.y)<30&&p.z<60)hurtPlayer(t.dmg,e.face)}
   if(e.stT<=0){e.st='walk';e.cd=rnd(.9,1.8);if(e.tok){e.tok=0;tokens--}}continue}
  if(e.st==='charge'){e.x+=e.face*(t.bike?560:600)*dt;if(t.bike&&Math.random()<dt*20)addFx({k:'speed',x:e.x-e.face*60,y:e.y-rnd(30,140),life:.25});if(Math.abs(p.x-e.x)<60&&Math.abs(p.y-e.y)<45&&p.z<40)hurtPlayer(t.dmg+2,e.face);
   if(t.bike&&(e.stT<=0||e.x<G.cam+50||e.x>G.cam+W-50)){e.x=clamp(e.x,G.cam+50,G.cam+W-50);e.st='walk';e.cd=rnd(1.6,2.6);continue}
   if(e.stT<=0||e.x<G.cam+60||e.x>G.cam+W-60){e.x=clamp(e.x,G.cam+60,G.cam+W-60);e.st='hurt';e.stT=.9;e.vx=0;G.shake=.2;SFX.big();addFx({k:'txt',s:'DAZED!',x:e.x,y:e.y-230,c:'#ffd23f'})}continue}
  // walk/AI
  e.face=p.x<e.x?-1:1;
  if(t.clog&&e.cd<=0&&!e.tok&&Math.abs(p.x-e.x)>230&&Math.abs(p.x-e.x)<560&&Math.abs(p.y-e.y)<40&&Math.random()<dt*1.5){e.st='tele';e.stT=.5;e.next='clog';continue}
  if(t.bike&&e.cd<=0&&!e.tok&&Math.abs(p.x-e.x)>180&&Math.random()<dt*1.2){e.st='tele';e.stT=t.tele;e.next='charge';e.y+=(p.y-e.y)*.6;continue}
  if(t.boss){if(e.hp<e.max*.5&&!e.phase){e.phase=1;addFx({k:'banner',s:'HE\'S FURIOUS!',life:1.4})}
   if(e.cd<=0){const r=Math.random(),liz=G.en.filter(o=>ET[o.type].liz&&o.hp>0).length,far=Math.abs(p.x-e.x)>200;let pick=null;
    if(e.phase&&r<.35)pick='pound';else if(far&&r<.7)pick='charge';else if(liz<2&&r<.9)pick='whistle';
    if(pick==='whistle'){e.st='whistle';e.stT=1;e.cd=rnd(2.6,3.4);SFX.whistle();addFx({k:'txt',s:'TWEEEET!',x:e.x,y:e.y-240,c:'#fff',life:1});const n=2+(Math.random()<.5?1:0);for(let i=0;i<n;i++)spawn(['grunt','bobby','guard'][i%3],i%2?-1:1,i);continue}
    if(pick){e.st='tele';e.stT=pick==='pound'?.9:.75;e.next=pick;e.cd=rnd(2.4,3.2);continue}}}
  const wantX=p.x+(e.x<p.x?-1:1)*(t.reach*.8+ (e.tok?0:90)),wantY=p.y+(e.tok?0:e.slotY);
  const wx=clamp(wantX,G.cam+50,G.cam+W-50);const dx=wx-e.x,dy=wantY-e.y,d=Math.hypot(dx,dy);
  if(d>8){e.x+=dx/d*t.spd*dt;e.y+=dy/d*t.spd*.6*dt}
  const ln=lane(e.x);e.y=clamp(e.y,ln[0],t.canal?Math.min(ln[1],canalY(e.x)+40):ln[1]);
  const inRange=Math.abs(p.x-e.x)<t.reach&&Math.abs(p.y-e.y)<(t.canal?60:26);
  if(!e.tok&&tokens<2&&e.cd<=0){e.tok=1;tokens++}
  if(e.tok&&inRange&&e.cd<=0){e.st='tele';e.stT=t.tele}
  if(t.block&&e.cd>0&&Math.random()<dt*(t.boss?.45:.5)&&Math.abs(p.x-e.x)<200){e.st='block';e.stT=t.boss?.8:.7}
 }
 if(G.camLock!=null)for(const e of G.en){if(e.st==='free')continue;const lo=G.camLock+15,hi=G.camLock+W-15;if(e.x>lo&&e.x<hi)e.entered=1;if(e.entered)e.x=clamp(e.x,lo,hi);else if(e.x<lo-300||e.x>hi+300)e.x=clamp(e.x,lo-300,hi+300)}
 // separation
 for(let i=0;i<G.en.length;i++)for(let j=i+1;j<G.en.length;j++){const a=G.en[i],b=G.en[j];if(a.st==='free'||b.st==='free'||a.type==='unit'||b.type==='unit')continue;const dx=b.x-a.x,dy=(b.y-a.y)*2;if(Math.abs(dx)<50&&Math.abs(dy)<40){const s=dx>=0?1:-1;a.x-=s*40*.016;b.x+=s*40*.016}}
 G.en=G.en.filter(e=>!(e.st==='free'&&(e.x<G.cam-200||e.x>G.cam+W+200)));
 G.en=G.en.filter(e=>!(e.st==='dead'&&e.t>0&&!G.fx.some(f=>f.k==='poof'&&f.x===e.x)));
}
function p_note(dt){const p=G.p;if(p.note>0)p.note=Math.max(0,p.note-dt)}
function fireNote(){const p=G.p,id=G.cid,y=p.y,x=p.x+p.face*50;G.proj=G.proj||[];const P=o=>G.proj.push(Object.assign({x,y,z:90,t:0,hit:new Set(),dir:p.face},o));
 if(id==='trey'){P({k:'riffn',vx:p.face*950,vy:0,dmg:7,life:.9});tone(988,.06,'square',.06)}
 if(id==='page'){[-60,0,60].forEach(v=>P({k:'chord',vx:p.face*640,vy:v,dmg:6,life:1}));[523,659,784].forEach(f=>tone(f,.08,'triangle',.05))}
 if(id==='mike'){P({k:'bassw',vx:p.face*380,vy:0,dmg:12,kd:1,pierce:1,life:1.3});tone(70,.25,'sawtooth',.12,.6)}
 if(id==='fish'){P({k:'stick',vx:p.face*720,vy:0,dmg:8,pierce:1,life:1});noise(.06,.1,3000)}}
function updateProj(dt){if(!G.proj)return;for(const pr of G.proj){pr.t+=dt;pr.x+=pr.vx*dt;pr.y+=pr.vy*dt;
 for(const e of G.en){if(pr.dead||pr.hit.has(e)||['free','dead','down'].includes(e.st))continue;if(Math.abs(e.x-pr.x)<(pr.k==='bassw'?60:40)&&Math.abs(e.y-pr.y)<(pr.k==='bassw'?50:35)){pr.hit.add(e);damageEnemy(e,pr.dmg,pr.dir,pr.kd,0);if(!pr.pierce)pr.dead=1}}
 for(const b of G.brk){if(!pr.dead&&b.hp>0&&Math.abs(b.x-pr.x)<40&&Math.abs(b.y-pr.y)<45&&!pr.hit.has(b)){pr.hit.add(b);b.hp--;b.shake=.2;SFX.brk();if(b.hp<=0){G.items.push({k:b.drop,x:b.x,y:b.y+4,t:0})}if(!pr.pierce)pr.dead=1}}}
 G.proj=G.proj.filter(pr=>!pr.dead&&pr.t<pr.life&&pr.x>G.cam-100&&pr.x<G.cam+W+100)}
function drawProj(pr,cam){const x=pr.x-cam,y=pr.y-pr.z;
 if(pr.k==='riffn'){txt('♪',x,y,26,'#ffd23f','center','#c8102e')}
 if(pr.k==='chord'){txt('♫',x,y,24,'#8fd3ff','center','#1b2a8a')}
 if(pr.k==='bassw'){ctx.strokeStyle='rgba(255,90,60,.85)';ctx.lineWidth=6;for(let i=0;i<3;i++){ctx.beginPath();ctx.ellipse(x-pr.dir*i*18,y,14+i*6,46+i*8,0,-Math.PI/2*pr.dir,Math.PI/2*pr.dir,pr.dir<0);ctx.stroke()}}
 if(pr.k==='stick'){ctx.save();ctx.translate(x,y);ctx.rotate(pr.t*24);ctx.fillStyle='#d9b47a';ctx.fillRect(-26,-4,52,8);ctx.fillStyle='#f3e2bd';ctx.fillRect(20,-5,8,10);ctx.restore()}}
function marquee(x,y,w,t,title){ctx.fillStyle='#120a06';ctx.fillRect(x-w/2,y,w,46);ctx.strokeStyle='#c99a3c';ctx.lineWidth=3;ctx.strokeRect(x-w/2,y,w,46);
 for(let i=0;i<Math.floor(w/14);i++){const on=(i+Math.floor(t*8))%3===0;ctx.fillStyle=on?'#fff3b0':'#7a5a20';ctx.fillRect(x-w/2+4+i*14,y-5,5,5);ctx.fillRect(x-w/2+4+i*14,y+46,5,5)}
 txt(title,x,y+17,10,'#ff5a5a','center','#000');const n=Math.floor(t/1.6)%DEBUTS.length;ctx.globalAlpha=Math.min(1,(t%1.6)*4);txt(DEBUTS[n],x,y+37,DEBUTS[n].length>14?9:12,'#ffd23f','center','#000');ctx.globalAlpha=1}
function drawSigns(cam){const t=G.t;
 // Tube: Rock A William gig poster (over the 2nd tube screen's left poster)
 let x=1024+478-cam;if(x>-120&&x<W+40){ctx.fillStyle='#1a1020';ctx.fillRect(x,118,92,128);ctx.fillStyle='#7a1022';ctx.fillRect(x+4,122,84,120);const g=ctx.createRadialGradient(x+46,170,4,x+46,170,50);g.addColorStop(0,'#ffcf5a');g.addColorStop(1,'rgba(255,120,40,0)');ctx.fillStyle=g;ctx.fillRect(x+4,122,84,120);
  txt('PHISH',x+46,142,10,'#fff','center','#000');txt('ROCK A',x+46,184,10,'#ffd23f','center','#000');txt('WILLIAM',x+46,198,10,'#ffd23f','center','#000');txt('NEW SONG',x+46,222,6,'#fff','center','#000');txt('2.13.97',x+46,234,6,'#8fd3ff','center','#000')}
 // Market: NEW SONG! sign-board NPC (friendly freed lizard busker)
 x=2048+900-cam;if(x>-150&&x<W+150){const yb=458,n=Math.floor(t/2)%DEBUTS.length,bob=Math.abs(Math.sin(t*3))*4;shadow(x,yb,30);spr('guard_free',x,yb-bob,false,.8);
  ctx.fillStyle='#5a3b1d';ctx.fillRect(x-3,yb-250-bob,6,90);ctx.fillStyle='#f1e6c8';ctx.fillRect(x-80,yb-300-bob,160,54);ctx.strokeStyle='#5a3b1d';ctx.lineWidth=3;ctx.strokeRect(x-80,yb-300-bob,160,54);
  txt('NEW SONG!',x,yb-280-bob,10,'#c8102e','center','rgba(0,0,0,.2)');txt(DEBUTS[n],x,yb-258-bob,DEBUTS[n].length>12?6:9,'#1b2a8a','center','rgba(0,0,0,.15)')}
 // Empire: DEBUT NIGHT marquee under PHISH TONIGHT
 x=4096+738-cam;if(x>-200&&x<W+200)marquee(x,352,236,t,'DEBUT NIGHT · 5 NEW SONGS')}
function loseLife(){const p=G.p;G.lives--;if(G.lives<0){G.lives=0;G.mode='over';G.modeT=0;onExit&&onExit('over');return}
 p.hp=G.c.hp;p.dead=0;p.st='idle';p.inv=2.5;p.z=0;addFx({k:'banner',s:'ROCK ON!',life:1});
 G.en.forEach(e=>{if(e.st!=='free'&&e.st!=='dead'){e.vx=Math.sign(e.x-p.x)*400;e.st='down';e.stT=.8;e.vz=200}})}
// ---------- render ----------
function frameName(prefix,st,t){if(st==='walk')return prefix+(Math.floor(t*7)%2?'_w1':'_w2');return prefix+'_'+st}
function render(){
 const sx=G.shake>0?rnd(-6,6):0,sy=G.shake>0?rnd(-4,4):0;
 ctx.save();ctx.translate(sx,sy);
 const cam=Math.round(G.cam);
 for(const s of SEG){const x=s[1]-cam;if(x>-1030&&x<W)ctx.drawImage(img[s[0]],x,0,1025,H)}
 // seam fades
 for(const b of[2048,4096]){const x=b-cam;if(x>-100&&x<W+100){const g=ctx.createLinearGradient(x-90,0,x+90,0);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(.5,'rgba(0,0,0,.85)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(x-90,0,180,H)}}
 if(LVN===2)signsAms(cam);else drawSigns(cam);
 // draw list
 const L=[];
 for(const b of G.brk)if(b.hp>0)L.push({y:b.y,d:()=>{shadow(b.x-cam,b.y,45);spr('props_'+b.k,b.x-cam+(b.shake>0?rnd(-4,4):0),b.y,false,b.k==='phone'?1:1)}});
 for(const it of G.items)L.push({y:it.y,d:()=>{shadow(it.x-cam,it.y,18);const bob=Math.sin(it.t*6)*4;if(it.k==='setlist'){const yy=it.y-50+bob;ctx.fillStyle='rgba(255,240,180,.35)';ctx.beginPath();ctx.arc(it.x-cam,yy,30,0,7);ctx.fill();ctx.save();ctx.translate(it.x-cam,yy);ctx.rotate(-.12);ctx.fillStyle='#f1e6c8';ctx.fillRect(-16,-21,32,42);ctx.strokeStyle='#6b5434';ctx.lineWidth=2;ctx.strokeRect(-16,-21,32,42);ctx.fillStyle='#6b5434';for(let i=0;i<6;i++)ctx.fillRect(-11,-14+i*6,i%2?16:22,2);ctx.fillStyle='#c8102e';ctx.fillRect(-11,-19,14,3);ctx.restore()}else if(it.k==='note'){const g=ctx.createRadialGradient(it.x-cam,it.y-40+bob,2,it.x-cam,it.y-40+bob,34);g.addColorStop(0,'rgba(255,230,120,.9)');g.addColorStop(1,'rgba(255,200,60,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(it.x-cam,it.y-40+bob,34,0,7);ctx.fill();txt('♪',it.x-cam,it.y-26+bob,34,'#ffd23f','center','#c8102e')}else if(it.k==='waffle'||it.k==='frites'||it.k==='gin')drawFood(it.k,it.x-cam,it.y-14+bob);else spr('props_'+it.k,it.x-cam,it.y-8+bob);if(it.t>6&&Math.floor(it.t*8)%2)return}});
 for(const e of G.en){L.push({y:e.type==='unit'?e.y-60:e.y,d:()=>drawEnemy(e,cam)})}
 for(const b of G.bikes)if(b.warn<=0)L.push({y:b.y,d:()=>drawBike(b.x-cam,b.y,b.dir)});
 for(const pr of G.eproj)L.push({y:pr.y,d:()=>drawClog(pr,cam)});
 L.push({y:G.p.y+.1,d:()=>drawPlayer(cam)});
 L.sort((a,b)=>a.y-b.y).forEach(o=>o.d());
 // fx
 for(const pr of G.proj||[])drawProj(pr,cam);
 for(const f of G.fx)drawFx(f,cam);
 // rain outdoors
 const ra=LVN===2?(cam<1700?.7:cam<3900?.3:.9):cam>1700?clamp((cam-1700)/400,0,1)*(cam>3900?1:.55):0;
 for(const b of G.bikes)if(b.warn>0&&Math.floor(G.t*8)%2){const sx=b.dir>0?60:W-60;txt('TRING!',sx,b.y-150,12,'#ffd23f');txt(b.dir>0?'→':'←',sx,b.y-120,22,'#ff4040')}
 if(ra>0){const a=ra;ctx.strokeStyle='rgba(170,190,255,'+(.35*a)+')';ctx.lineWidth=1.5;ctx.beginPath();for(const r of G.rain){ctx.moveTo(r.x,r.y);ctx.lineTo(r.x-4,r.y+18)}ctx.stroke()}
 ctx.restore();
 hud();
}
function drawPlayer(cam){const p=G.p,id=G.cid;let fr;
 if(p.st==='atk')fr=id+(p.t<p.atkDur*.75?'_atk':'_idle');else if(p.st==='hurt'||p.st==='down')fr=id+'_hurt';else if(p.st==='special')fr=id==='fish'?'fish_vac':id+'_rock';else if(p.st==='walk')fr=frameName(id,'walk',G.t);else fr=id+'_idle';
 if(p.z>0&&p.st!=='atk')fr=id+'_w1';
 const x=p.x-cam,y=p.y-p.z;shadow(x,p.y,44);
 if(p.inv>0&&p.st!=='special'&&Math.floor(G.t*20)%2)return;
 let rot=0;if(p.st==='down'){ctx.save();ctx.translate(x,y);ctx.rotate(-p.face*1.2*Math.min(1,(1-p.t)*4));ctx.translate(-x,-y)}
 if(p.boost>0){ctx.save();ctx.globalAlpha=.3;spr(fr,x-p.face*18,y,p.face<0,1,.35,['#6f6',.8]);ctx.restore()}
 const lunge=p.st==='atk'&&p.combo===3?Math.sin((1-p.t/p.atkDur)*Math.PI)*16*p.face:0;
 spr(fr,x+lunge,y,p.face<0);
 if(p.st==='down')ctx.restore();
 if(p.st==='atk'&&p.t<p.atkDur*.75&&p.t>p.atkDur*.3){ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=4;ctx.beginPath();ctx.arc(x+p.face*40,y-100,G.c.reach*.6,p.face>0?-1:Math.PI-.4,p.face>0?.4:Math.PI+1);ctx.stroke()}
}
function drawEnemy(e,cam){const t=ET[e.type];const pre=e.type==='pruss'?'sarge':e.type;let fr;
 if(e.type==='unit')return drawUnit(e,cam);
 if(e.type==='striper'){fr='striper_'+({tele:'tele',lunge:'atk',atk:'atk',hurt:'hurt',stun:'hurt',down:'down',dead:'down'}[e.st]||'idle')}
 else if(e.type==='cyclist'&&(e.st==='tele'||e.st==='charge'||e.st==='atk'))fr='cyclist_charge';
 else if(e.st==='free')fr=pre+'_free';
 else if(e.st==='down')fr=(t.liz?pre+'_down':pre+'_hurt');
 else if(e.st==='hurt'||e.st==='stun')fr=pre+'_hurt';
 else if(e.st==='atk')fr=pre+'_atk';
 else if(e.st==='tele')fr=t.liz?pre+'_w1':(e.next==='charge'?'sarge_charge':e.next==='pound'?'sarge_atk':'sarge_w1');
 else if(e.st==='block')fr='sarge_block';
 else if(e.st==='charge')fr='sarge_charge';
 else if(e.st==='whistle')fr='sarge_block';
 else if(e.st==='intro')fr='sarge_block';
 else fr=pre+(Math.floor(e.anim*6)%2?'_w1':'_w2');
 let x=e.x-cam,y=e.y-e.z;shadow(x,e.y,40*t.sc);
 if(e.type==='striper'&&e.st==='walk')y+=Math.sin(e.anim*5)*4;
 if(e.st==='emerge'){ctx.save();ctx.beginPath();ctx.rect(x-200,0,400,e.y+2);ctx.clip();spr(fr,x,y+e.stT/.8*170,e.face>0,t.sc);ctx.restore();return}
 const flip=e.st==='free'?e.runDir>0:e.face>0;// enemy art faces left
 if(e.st==='down'&&!t.liz&&!t.canal){ctx.save();ctx.translate(x,y);ctx.rotate(e.face*1.3*Math.min(1,(1.1-e.stT)*4));ctx.translate(-x,-y)}
 let tint=e.flash>0?['#fff',.75]:(e.st==='tele'?['#ff3c3c',.25+.25*Math.sin(G.t*40)]:null);
 if(e.type==='pruss'&&!tint)tint=null;
 if(e.st==='stun')tint=['#78c8ff',.35];
 spr(fr,x,y,flip,t.sc,1,tint);
 if(e.st==='down'&&!t.liz&&!t.canal)ctx.restore();
 if(e.st==='charge'&&t.bike)txt('TRING!',x,y-200,10,'#ffd23f');
 if(e.st==='tele')txt(e.next==='pound'?'JUMP!':e.next==='charge'||e.next==='clog'?'!!':'!',x,y-175*t.sc-10,22,'#ff4040');
 if(e.st==='stun'){for(let i=0;i<3;i++){const a=G.t*4+i*2.1;txt('*',x+Math.cos(a)*28,y-180+Math.sin(a)*8,12,'#ffd23f')}}
 if(!t.boss&&e.st!=='free'&&e.hp<e.max&&e.hp>0){ctx.fillStyle='#000';ctx.fillRect(x-30,y-190*t.sc,60,6);ctx.fillStyle='#f33';ctx.fillRect(x-29,y-189*t.sc,58*e.hp/e.max,4)}
}
function drawFx(f,cam){const k=f.t/f.life;
 if(f.k==='flash'){ctx.fillStyle='rgba(255,255,255,'+(1-k)*.85+')';ctx.fillRect(0,0,W,H)}
 if(f.k==='shock'){const r=k*(f.max||720),p=G.p;if(!f.hp&&Math.abs(Math.abs(p.x-f.x)-r)<40&&Math.abs(p.y-f.y)<90&&p.z<25){f.hp=1;hurtPlayer(14,Math.sign(p.x-f.x)||1)}
  ctx.strokeStyle='rgba(255,160,60,'+(1-k)+')';ctx.lineWidth=10*(1-k)+3;for(const d of[-1,1]){ctx.beginPath();ctx.ellipse(f.x-cam+d*r,f.y,18,40,0,0,7);ctx.stroke()}
  ctx.fillStyle='rgba(255,200,120,'+(.5*(1-k))+')';ctx.fillRect(f.x-cam-r,f.y-6,r*2,12)}
 if(f.k==='spark'){ctx.save();ctx.translate(f.x-cam,f.y);ctx.rotate(k*3);ctx.fillStyle=f.c||'#fff6a0';const s=28*(1-k)+8;for(let i=0;i<4;i++){ctx.rotate(Math.PI/2);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(s*.25,s*.25);ctx.lineTo(0,s);ctx.lineTo(-s*.25,s*.25);ctx.fill()}ctx.restore()}
 if(f.k==='txt'){ctx.globalAlpha=1-k;txt(f.s,f.x-cam,f.y-k*40,12,f.c);ctx.globalAlpha=1}
 if(f.k==='chip'){f.vx=f.vx||0;f.vy=(f.vy||-150)+900*.016;f.x+=f.vx*.016;f.y+=f.vy*.016;ctx.fillStyle='#8a5a2b';ctx.fillRect(f.x-cam,f.y,6,6)}
 if(f.k==='bag'){ctx.globalAlpha=1-k;ctx.fillStyle='#9a7448';ctx.save();ctx.translate(f.x-cam+f.vx*k,f.y-Math.sin(k*Math.PI)*90);ctx.rotate(k*8);ctx.beginPath();ctx.ellipse(0,0,22,26,0,0,7);ctx.fill();ctx.fillStyle='#000';ctx.font='8px "Press Start 2P"';ctx.textAlign='center';ctx.fillText('AC/DC',0,6);ctx.restore();ctx.globalAlpha=1}
  if(f.k==='splash'){ctx.globalAlpha=1-k;ctx.fillStyle='#bfe3ff';for(let i=0;i<9;i++){const a=i/9*Math.PI;ctx.fillRect(f.x-cam+Math.cos(a)*k*70,f.y-Math.sin(a)*k*90-30*k,5,9)}ctx.strokeStyle='rgba(200,230,255,.8)';ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(f.x-cam,f.y,20+k*60,6+k*12,0,0,7);ctx.stroke();ctx.globalAlpha=1}
 if(f.k==='drop'){f.vy=(f.vy||0)+1200*.016;f.x+=(f.vx||0)*.016;f.y+=f.vy*.016;ctx.fillStyle='rgba(190,225,255,'+(1-k)+')';ctx.fillRect(f.x-cam,f.y-120,4,8)}
 if(f.k==='speed'){ctx.globalAlpha=1-k;ctx.fillStyle='#fff';ctx.fillRect(f.x-cam-30,f.y,60*(1-k),2);ctx.globalAlpha=1}
 if(f.k==='wave'){const wx=f.x+f.dir*f.t*520,p=G.p,ln=lane(clamp(wx,0,WORLD-1));if(!f.hit&&Math.abs(p.x-wx)<38&&p.z<48&&G.mode==='play'){f.hit=1;hurtPlayer(12,f.dir);addFx({k:'txt',s:'SPLASHED!',x:p.x,y:p.y-200,c:'#8fd3ff'})}
  const x=wx-cam,top=ln[0]-70,bot=ln[1]+8,gr=ctx.createLinearGradient(x-f.dir*60,0,x+f.dir*26,0);gr.addColorStop(0,'rgba(40,100,170,.15)');gr.addColorStop(1,'rgba(110,175,235,.92)');ctx.fillStyle=gr;
  ctx.beginPath();ctx.moveTo(x-f.dir*90,bot);ctx.lineTo(x-f.dir*90,top+50);ctx.quadraticCurveTo(x-f.dir*10,top-30,x+f.dir*34,top+20);ctx.lineTo(x+f.dir*14,bot);ctx.closePath();ctx.fill();
  ctx.fillStyle='#eef8ff';for(let i=0;i<8;i++)ctx.fillRect(x+f.dir*(8+Math.sin(G.t*20+i)*8)-3,top+14+i*((bot-top-14)/8),7,5);for(let i=0;i<4;i++)ctx.fillRect(x+f.dir*rnd(0,30),top+rnd(-10,20),5,5)}
 if(f.k==='crater'){ctx.globalAlpha=1-k;ctx.fillStyle='rgba(30,20,10,.55)';ctx.beginPath();ctx.ellipse(f.x-cam,f.y,150,30,0,0,7);ctx.fill();ctx.fillStyle='#8a7a66';for(let i=0;i<12;i++){const a=i*.52;ctx.fillRect(f.x-cam+Math.cos(a)*(40+k*150),f.y-Math.abs(Math.sin(a*3+1))*Math.sin(k*Math.PI)*110,8,8)}ctx.globalAlpha=1}

 if(f.k==='poof'){ctx.globalAlpha=1-k;ctx.fillStyle='#ccc';for(let i=0;i<6;i++){ctx.beginPath();ctx.arc(f.x-cam+Math.cos(i)*k*60,f.y-40-Math.sin(i*2)*k*40,18*(1-k)+4,0,7);ctx.fill()}ctx.globalAlpha=1}
 if(f.k==='banner'){const a=k<.15?k/.15:k>.8?(1-k)/.2:1;ctx.globalAlpha=a;ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,170,W,70);txt(f.s,W/2,220,30,'#ffd23f','center','#c8102e');ctx.globalAlpha=1}
 if(f.k==='ring'){ctx.strokeStyle='rgba(140,220,255,'+(1-k)+')';ctx.lineWidth=14*(1-k)+2;for(let r=0;r<3;r++){ctx.beginPath();ctx.ellipse(f.x-cam,f.y-60,Math.max(1,k*420-r*40),Math.max(1,(k*420-r*40)*.45),0,0,7);ctx.stroke()}}
 if(f.k==='riff'){const x=f.x+f.dir*k*900;for(const e of G.en){if(!f.hit.has(e)&&Math.abs(e.x-x)<60&&Math.abs(e.y-f.y)<80){f.hit.add(e);damageEnemy(e,30,f.dir,1,1)}}
  ctx.save();ctx.translate(x-cam,f.y-90);for(let i=0;i<5;i++){ctx.fillStyle=['#ff3b3b','#ffd23f','#ff8a3d','#8fd3ff','#fff'][i];ctx.font='28px "Press Start 2P"';ctx.textAlign='center';ctx.fillText('♪',-f.dir*i*30,Math.sin(G.t*20+i)*30)}ctx.fillStyle='rgba(255,210,63,.25)';ctx.fillRect(-80,-70,160,140);ctx.restore()}
 if(f.k==='cows'){for(let i=0;i<5;i++){ctx.globalAlpha=1-k;txt(i%2?'MOO!':'♫',f.x-cam+(i-2)*130,f.y-180-k*120-(i%2)*30,i%2?18:26,i%2?'#fff':'#ff8a3d');}ctx.globalAlpha=1}
 if(f.k==='vac'){ctx.save();ctx.translate(f.x-cam,f.y-70);ctx.strokeStyle='rgba(200,230,255,.6)';ctx.lineWidth=3;for(let i=0;i<10;i++){const r=((i*50+G.t*700)%500);ctx.beginPath();ctx.ellipse(f.dir*(500-r),0,14,40*(1-(500-r)/600),0,0,7);ctx.stroke()}ctx.restore()}
}
function bar(x,y,w,h,v,c1,c2){ctx.fillStyle='#000';ctx.fillRect(x-2,y-2,w+4,h+4);ctx.fillStyle='#3a2a55';ctx.fillRect(x,y,w,h);ctx.fillStyle=c1;ctx.fillRect(x,y,w*clamp(v,0,1),h);ctx.fillStyle=c2;ctx.fillRect(x,y+h-3,w*clamp(v,0,1),3)}
function hud(){const p=G.p;
 ctx.fillStyle='rgba(7,4,13,.6)';ctx.fillRect(10,10,380,86);ctx.strokeStyle='#ffd23f';ctx.lineWidth=2;ctx.strokeRect(10,10,380,86);
 if(PORTRAIT[G.cid].complete){ctx.drawImage(PORTRAIT[G.cid],PORTRAIT[G.cid].naturalWidth*.22,PORTRAIT[G.cid].naturalHeight*.06,PORTRAIT[G.cid].naturalWidth*.56,PORTRAIT[G.cid].naturalWidth*.56,16,16,74,74)}
 ctx.strokeStyle='#c8102e';ctx.strokeRect(16,16,74,74);
 txt(G.c.n,100,36,14,'#ffd23f','left');txt('x'+G.lives,365,36,12,'#fff','right');
 bar(100,46,280,14,p.hp/G.c.hp,p.hp/G.c.hp<.3?'#ff3030':'#3ad65a','rgba(0,0,0,.3)');
 const full=p.jam>=100;bar(100,70,280,12,p.jam/100,full?(Math.floor(G.t*6)%2?'#ffd23f':'#ff8a3d'):'#8fd3ff','rgba(0,0,0,.3)');
 txt(full?'JAM! SPECIAL READY':'JAM',104,81,8,'#fff','left','rgba(0,0,0,.6)');
 if(p.note>0){ctx.fillStyle='rgba(7,4,13,.6)';ctx.fillRect(10,100,200,26);txt('♪ NOTE POWER '+p.note.toFixed(1),18,119,10,Math.floor(G.t*6)%2?'#ffd23f':'#ff8a3d','left')}
 txt(String(G.score).padStart(7,'0'),W-20,40,18,'#fff','right');txt(LV.hud,W-20,64,9,'#8fd3ff','right');if(G.p.st==='held'&&Math.floor(G.t*6)%2)txt('TAP ATTACK TO BREAK FREE!',W/2,H/2+70,16,'#ffd23f','center','#c8102e');
 if(G.boss&&G.boss.st!=='dead'&&G.boss.hp>0){const fl=G.boss.flash>0;txt(LV.bossName,W/2,116,12,fl?'#fff':'#ff8a3d');bar(W/2-230,124,460,14,G.boss.hp/G.boss.max,fl?'#fff':'#c8102e','#7a0010')}
 if(G.go>0&&Math.floor(G.t*3)%2)txt('GO →',W-120,H/2,34,'#ffd23f','center','#c8102e');
 if(G.bossIntro>0){ctx.fillStyle='rgba(0,0,0,.5)';ctx.fillRect(0,H/2-70,W,120);txt('MINI-BOSS',W/2,H/2-30,14,'#8fd3ff');txt(LV.bossTitle,W/2,H/2+10,24,'#ffd23f','center','#c8102e');txt(LV.bossSub,W/2,H/2+38,10,'#fff')}
 if(G.mode==='intro'){ctx.fillStyle='rgba(7,4,13,.82)';ctx.fillRect(0,0,W,H);
  const I=LV.intro;txt(I[0],W/2,110,16,'#8fd3ff');txt(I[1],W/2,170,44,'#ffd23f','center','#c8102e');txt(I[2],W/2,215,13,'#fff');
  const lines=I[3];
  lines.forEach((l,i)=>txt(l,W/2,280+i*26,11,'#e8dcc0'));
  if(Math.floor(G.t*2)%2)txt('TAP / PRESS ENTER TO START',W/2,500,14,'#fff')}
}
// ---------- level 2: Amsterdam ----------
function canalY(x){const lx=((x%1024)+1024)%1024;return lx<540?0:466+(lx-540)*.12}
function hazAms(dt){const p=G.p;
 if(G.cam<1850&&p.x<1950){G.bikeT-=dt*(G.waveActive?.6:1);if(G.bikeT<=0){G.bikeT=rnd(4.5,7);const dir=Math.random()<.5?1:-1,ln=lane(p.x);G.bikes.push({dir,y:clamp(p.y+rnd(-14,14),ln[0]+4,ln[1]),x:dir>0?G.cam-140:G.cam+W+140,warn:1.1,hit:0})}}
 for(const b of G.bikes){if(b.warn>0){b.warn-=dt;if(b.warn<=0)SFX.bell();continue}b.x+=b.dir*640*dt;
  if(!b.hit&&Math.abs(b.x-p.x)<50&&Math.abs(b.y-p.y)<26&&p.z<38&&p.st!=='held'){b.hit=1;if(p.inv<=0)addFx({k:'txt',s:'WATCH THE BIKE LANE!',x:p.x,y:p.y-210,c:'#ffd23f'});hurtPlayer(10,b.dir)}}
 G.bikes=G.bikes.filter(b=>b.warn>0||(b.x>G.cam-260&&b.x<G.cam+W+260));
 if(p.x>2048&&p.x<4096&&p.st!=='held'&&p.st!=='down'&&p.z<5){const ey=canalY(p.x);if(p.y<ey){p.canalT=(p.canalT||0)+dt;if(p.canalT>.12){p.canalT=0;addFx({k:'splash',x:p.x,y:p.y,life:.6});SFX.splash();addFx({k:'txt',s:'BRRR! COLD CANAL!',x:p.x,y:p.y-210,c:'#8fd3ff'});
   if(p.inv<=0){p.hp-=5;p.inv=.9;if(p.hp<=0){p.hp=0;p.dead=1}}p.st='hurt';p.t=.35;p.vx=0;p.y=ey+30;G.shake=.15}}else p.canalT=0}}
function updateEproj(dt){const p=G.p;for(const pr of G.eproj){pr.t+=dt;pr.x+=pr.vx*dt;if(!pr.dead&&Math.abs(pr.x-p.x)<34&&Math.abs(pr.y-p.y)<28&&p.z<45&&p.inv<=0){pr.dead=1;hurtPlayer(8,Math.sign(pr.vx));addFx({k:'txt',s:'CLONK!',x:p.x,y:p.y-190,c:'#ffd23f'})}}
 G.eproj=G.eproj.filter(pr=>!pr.dead&&pr.t<1.8)}
function drawClog(pr,cam){const x=pr.x-cam,y=pr.y-48;shadow(x,pr.y,16);ctx.save();ctx.translate(x,y);ctx.rotate(pr.t*14*Math.sign(pr.vx));ctx.fillStyle='#000';ctx.beginPath();ctx.ellipse(0,0,25,13,0,0,7);ctx.fill();ctx.fillStyle='#e0a72a';ctx.beginPath();ctx.ellipse(0,0,22,10,0,0,7);ctx.fill();ctx.fillStyle='#8a5a12';ctx.beginPath();ctx.ellipse(7,-1,8,5,0,0,7);ctx.fill();ctx.restore()}
function drawBike(x,y,dir){shadow(x,y,60);ctx.save();ctx.translate(x,y);ctx.scale(dir,1);const sp=G.t*20;
 ctx.strokeStyle='#111';ctx.lineWidth=5;for(const wx of[-38,38]){ctx.beginPath();ctx.arc(wx,-26,25,0,7);ctx.stroke();ctx.save();ctx.translate(wx,-26);ctx.rotate(sp);ctx.lineWidth=1.5;ctx.strokeStyle='#777';for(let i=0;i<4;i++){ctx.rotate(Math.PI/4);ctx.beginPath();ctx.moveTo(-23,0);ctx.lineTo(23,0);ctx.stroke()}ctx.restore()}
 ctx.strokeStyle='#1c1c22';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-38,-26);ctx.lineTo(-8,-60);ctx.lineTo(28,-58);ctx.lineTo(38,-26);ctx.moveTo(-8,-60);ctx.lineTo(4,-26);ctx.lineTo(-38,-26);ctx.moveTo(28,-58);ctx.lineTo(24,-80);ctx.lineTo(38,-82);ctx.stroke();
 ctx.fillStyle='#2b3550';ctx.fillRect(-20,-122,28,58);ctx.fillStyle='#22283a';ctx.fillRect(-6,-72,10,42);ctx.fillStyle='#e6c3a0';ctx.beginPath();ctx.arc(-6,-134,12,0,7);ctx.fill();ctx.fillStyle='#c8102e';ctx.fillRect(-18,-126,26,8);ctx.fillStyle='#6b4a2a';ctx.fillRect(-18,-150,26,10);ctx.strokeStyle='#2b3550';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(4,-112);ctx.lineTo(32,-82);ctx.stroke();
 ctx.fillStyle='#ffd23f';ctx.fillRect(40,-86,6,5);ctx.restore()}
function drawFood(k,x,y){ctx.save();ctx.translate(x,y);
 const g=ctx.createRadialGradient(0,-10,2,0,-10,36);g.addColorStop(0,'rgba(255,240,180,.45)');g.addColorStop(1,'rgba(255,240,180,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,-10,36,0,7);ctx.fill();
 if(k==='waffle'){for(const dy of[0,-9]){ctx.fillStyle='#000';ctx.beginPath();ctx.ellipse(0,dy,26,11,0,0,7);ctx.fill();ctx.fillStyle='#c98a3a';ctx.beginPath();ctx.ellipse(0,dy-2,23,8,0,0,7);ctx.fill();ctx.strokeStyle='#8a5a20';ctx.lineWidth=2;for(let i=-15;i<=15;i+=7){ctx.beginPath();ctx.moveTo(i-3,dy-8);ctx.lineTo(i+3,dy+4);ctx.stroke()}ctx.fillStyle='#7a3f12';ctx.fillRect(-22,dy+1,44,2)}}
 if(k==='frites'){ctx.fillStyle='#000';ctx.beginPath();ctx.moveTo(-20,-30);ctx.lineTo(20,-30);ctx.lineTo(9,8);ctx.lineTo(-9,8);ctx.fill();ctx.fillStyle='#ffd84a';for(let i=-14;i<=14;i+=5){ctx.fillRect(i,-48+Math.abs(i)%7,4,22)}ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(-18,-28);ctx.lineTo(18,-28);ctx.lineTo(8,6);ctx.lineTo(-8,6);ctx.fill();ctx.fillStyle='#c8102e';ctx.fillRect(-14,-20,28,6);ctx.fillRect(-11,-8,22,5);ctx.fillStyle='#fffbe8';ctx.beginPath();ctx.arc(-2,-46,9,0,7);ctx.arc(6,-50,6,0,7);ctx.fill()}
 if(k==='gin'){ctx.fillStyle='#000';ctx.fillRect(-30,-26,60,26);ctx.fillStyle='#f4f4f4';ctx.fillRect(-28,-24,56,22);ctx.fillStyle='#6fc3ff';ctx.fillRect(-26,-24,52,6);ctx.fillStyle='#d9b25a';ctx.fillRect(-24,0,6,6);ctx.fillRect(18,0,6,6);ctx.fillStyle='#fff';for(let i=0;i<4;i++){ctx.beginPath();ctx.arc(-18+i*12,-30-((G.t*30+i*9)%22),3+i%2,0,7);ctx.fill()}ctx.font='9px "Press Start 2P"';ctx.textAlign='center';ctx.fillStyle='#1b2a8a';ctx.fillText('GIN',0,-7)}
 ctx.restore()}
function signsAms(cam){const t=G.t;
 // Soul Shakedown Party poster on the KRANTEN kiosk (2nd Centraal screen)
 let x=1024+784-cam;if(x>-120&&x<W+40){ctx.fillStyle='#111';ctx.fillRect(x,403,98,80);ctx.fillStyle='#f2c230';ctx.fillRect(x+3,406,92,74);ctx.fillStyle='#1f7a35';ctx.fillRect(x+3,406,92,13);ctx.fillStyle='#c8102e';ctx.fillRect(x+3,467,92,13);
  txt('PHISH',x+49,416,6,'#fff','center','#000');txt('SOUL',x+49,436,9,'#c8102e','center','#000');txt('SHAKEDOWN',x+49,449,7,'#1b1b1b','center','rgba(0,0,0,0)');txt('PARTY',x+49,463,9,'#1f7a35','center','#000');txt('PARADISO 2.17.97',x+49,477,5,'#fff','center','#000')}
 // "CARINI HAD A LUMPY HEAD" graffiti on the canal-house wall (1st canals screen)
 x=2048+28-cam;if(x>-320&&x<W+40){ctx.save();ctx.translate(x,196);ctx.rotate(-.06);ctx.font='13px "Press Start 2P",monospace';ctx.textAlign='left';
  const l1='CARINI HAD A',l2='LUMPY HEAD';ctx.lineWidth=5;ctx.strokeStyle='#120a14';ctx.strokeText(l1,0,0);ctx.strokeText(l2,14,24);ctx.fillStyle='#ff5fb0';ctx.fillText(l1,0,0);ctx.fillStyle='#7dff6a';ctx.fillText(l2,14,24);
  ctx.fillStyle='#ff5fb0';for(const[dx,h]of[[18,10],[60,16],[110,8],[150,13]])ctx.fillRect(dx,4,3,h);ctx.fillStyle='#7dff6a';for(const[dx,h]of[[40,12],[96,18]])ctx.fillRect(dx,28,3,h);ctx.restore()}}
function updUnit(e,dt){const p=G.p,ph2=e.hp<e.max*.5,sp=ph2?.75:1;
 if(e.st==='intro'){e.rise=Math.min(1,(e.rise||0)+dt/1.8);if(Math.random()<dt*14)addFx({k:'drop',x:e.x+rnd(-140,140),y:e.y+10,vy:-rnd(300,600),vx:rnd(-90,90),life:.8});if(G.bossIntro<=0&&e.rise>=1){e.st='walk';e.cd=1.2}return}
 if(e.st==='down'){e.sink=Math.min(1,(e.sink||0)+dt/3);if(Math.random()<dt*12)addFx({k:'drop',x:e.x+rnd(-140,140),y:e.y+10,vy:-rnd(200,500),vx:rnd(-90,90),life:.8});if(Math.random()<dt*3)addFx({k:'splash',x:e.x+rnd(-120,120),y:e.y+15,life:.6});if(e.stT<=0){e.st='dead';addFx({k:'splash',x:e.x,y:e.y+10,life:.9})}return}
 if(e.st==='dead')return;
 if(ph2&&!e.phase){e.phase=1;addFx({k:'banner',s:'THE UNIT MONSTER IS ENRAGED!',life:1.4});SFX.big();G.shake=.4}
 if(e.wave2>0){e.wave2-=dt;if(e.wave2<=0){addFx({k:'wave',x:e.x+e.wdir*120,dir:e.wdir,life:2.2});SFX.splash()}}
 if(e.st==='hurt'||e.st==='recover'){if(e.stT<=0)e.st='walk';return}
 if(e.st==='tele'){if(e.next==='slam'&&e.stT>.4){const ln=lane(e.x);e.tx=clamp(p.x,e.x-320,e.x+320);e.ty=clamp(p.y,ln[0],ln[1])}
  if(e.stT<=0){const n=e.next;e.next=0;e.last=n;
   if(n==='splash'){const d=Math.sign(p.x-e.x)||-1;e.wdir=d;addFx({k:'wave',x:e.x+d*120,dir:d,life:2.2});SFX.splash();G.shake=.35;e.st='recover';e.stT=1.1*sp;if(ph2)e.wave2=.6}
   else if(n==='slam'){e.st='recover';e.stT=1.3*sp;G.shake=.6;SFX.big();SFX.splash();addFx({k:'crater',x:e.tx,y:e.ty,life:.9});if(Math.abs(p.x-e.tx)<130&&Math.abs(p.y-e.ty)<50&&p.z<35)hurtPlayer(16,Math.sign(p.x-e.tx)||1);if(ph2)addFx({k:'shock',x:e.tx,y:e.ty,life:.9,hp:0,max:420})}
   else{e.st='grab';e.stT=.45;e.hitDone=0;SFX.swing()}}
  return}
 if(e.st==='grab'){const dx=(p.x-e.x)*e.face;if(!e.hitDone&&e.stT<.3){e.hitDone=1;if(dx>-40&&dx<400&&Math.abs(p.y-e.y)<80&&p.z<70&&p.inv<=0&&p.st!=='special'&&p.st!=='down'){p.st='held';p.held=e;p.mash=0;p.vx=0;e.st='hold';e.stT=1.8;e.tick=.4;SFX.big();addFx({k:'txt',s:'GRABBED!',x:p.x,y:p.y-220,c:'#ff4040'});return}}
  if(e.stT<=0){e.st='recover';e.stT=1*sp;addFx({k:'txt',s:'MISSED!',x:e.x,y:e.y-330,c:'#ffd23f'})}return}
 if(e.st==='hold'){p.x+=(e.x+e.face*170-p.x)*Math.min(1,dt*10);p.z+=(150-p.z)*Math.min(1,dt*8);p.y=e.y+10;e.tick-=dt;if(e.tick<=0){e.tick=.45;p.hp-=3;SFX.hurt();G.shake=.12;if(p.hp<=0){p.hp=0;p.dead=1}}
  const rel=bad=>{p.st='down';p.t=bad?1:.6;p.held=null;p.vz=bad?520:300;p.vx=e.face*(bad?380:220);p.inv=1.4;e.st=bad?'recover':'hurt';e.stT=bad?.9:1.3};
  if((p.mash||0)>=6){rel(false);addFx({k:'banner',s:'BROKE FREE!',life:1});e.flash=.3;e.hp=Math.max(1,e.hp-12)}
  else if(e.stT<=0||p.dead){if(!p.dead){p.hp-=8;if(p.hp<=0){p.hp=0;p.dead=1}}rel(true);G.shake=.5;SFX.big();addFx({k:'txt',s:'THROWN!',x:p.x,y:p.y-220,c:'#ff4040'})}return}
 e.face=p.x<e.x?-1:1;const lo=G.cam+500,hi=G.cam+W-130,tx=clamp(p.x+(e.face<0?260:-260),lo,hi);if(Math.abs(tx-e.x)>6)e.x+=Math.sign(tx-e.x)*ET.unit.spd*(ph2?1.4:1)*dt;
 if(e.cd<=0&&p.st!=='down'){const d=Math.abs(p.x-e.x),r=Math.random();let n;if(d>430)n='splash';else if(r<.4)n='slam';else if(r<.75)n='grab';else n='splash';
  e.next=n;e.st='tele';e.stT=(n==='slam'?.95:n==='grab'?.7:.85)*sp;e.cd=rnd(1.5,2.3)*sp;if(n==='slam'){e.tx=p.x;e.ty=p.y}SFX.big()}}
function drawUnit(e,cam){const x=e.x-cam,wl=e.y+18,yo=(1-(e.rise==null?1:e.rise))*330+(e.sink||0)*320;
 const fr='unit_'+({intro:'idle',walk:'idle',tele:e.next==='grab'?'idle':'tele',grab:'grab',hold:'grab',recover:e.last==='grab'?'idle':'slam',hurt:'hurt',down:'ko',dead:'ko'}[e.st]||'idle');
 if(e.st==='tele'&&e.next==='slam'){const zx=e.tx-cam;ctx.fillStyle='rgba(255,40,40,'+(.22+.18*Math.sin(G.t*30))+')';ctx.beginPath();ctx.ellipse(zx,e.ty,130,30,0,0,7);ctx.fill();ctx.strokeStyle='#ff4040';ctx.lineWidth=3;ctx.stroke();txt('MOVE!',zx,e.ty-40,14,'#ff4040')}
 ctx.fillStyle='rgba(30,60,100,.45)';ctx.beginPath();ctx.ellipse(x,wl+4,185,26,0,0,7);ctx.fill();
 let tint=e.flash>0?['#fff',.75]:(e.st==='tele'?['#ff3c3c',.18+.18*Math.sin(G.t*40)]:e.phase?['#ff2020',.06]:null);
 const br=e.st==='walk'?Math.sin(G.t*2.5)*5:0,lean=e.st==='grab'||e.st==='hold'?e.face*40:0,shk=e.st==='tele'?rnd(-3,3):0;
 ctx.save();ctx.beginPath();ctx.rect(x-450,0,900,wl);ctx.clip();spr(fr,x+lean+shk,wl+yo+br,e.face>0,1,1,tint);ctx.restore();
 ctx.strokeStyle='rgba(200,230,255,.6)';ctx.lineWidth=3;for(let i=0;i<3;i++){const r=(G.t*40+i*30)%90;ctx.beginPath();ctx.ellipse(x,wl,150+r,16+r*.18,0,0,7);ctx.stroke()}
 if(e.st==='tele'&&e.next!=='slam')txt(e.next==='splash'?'JUMP!':'!!',x,wl-360+yo,24,'#ff4040');
 if(e.st==='down')for(let i=0;i<3;i++){const a=G.t*4+i*2.1;txt('*',x+Math.cos(a)*60,wl-280+yo+Math.sin(a)*12,16,'#ffd23f')}}
function stageAmsSfx(){const t=G.modeT;G.sfx=G.sfx||{};const at=(k,tt,f)=>{if(t>=tt&&!G.sfx[k]){G.sfx[k]=1;musicOn&&f()}};
 at('q1',.5,SFX.tequila);at('q2',1.9,SFX.tequila);at('c1',3,SFX.big);at('pop',9.6,()=>{SFX.big();SFX.special()});at('k1',11.7,()=>{noise(.5,.3,2500);tone(700,.3,'square',.06,.5)});at('k2',12.5,()=>{tone(120,.25,'square',.12,.5)});at('k3',13.1,()=>noise(.6,.3,1200));at('rt',13.7,SFX.special)}
function stageAms(){const t=G.modeT;ctx.drawImage(img.amsstage,0,0,W,H);ctx.fillStyle='rgba(0,0,0,.15)';ctx.fillRect(0,0,W,H);
 // stained-glass glow pulses with the jam
 if(t>=3&&t<9.6){ctx.fillStyle='rgba(255,200,80,'+(.08+.08*Math.sin(t*6))+')';ctx.fillRect(320,60,390,270)}
 // giant lumpy-headed Carini rises behind the band
 if(t>=3&&t<9.6){const k=clamp((t-3)/2.2,0,1),wob=Math.sin(t*3)*8;ctx.save();ctx.beginPath();ctx.rect(0,0,W,402);ctx.clip();spr('carini_big',800,402+(1-k)*430+wob,false,.82+Math.sin(t*6)*.025);ctx.restore()}
 // 47:00 timer on the stained glass
 if(t>=3&&t<10.8){const rem=Math.max(0,Math.round(47*60*(1-clamp((t-3.8)/5.6,0,1)))),s=String(Math.floor(rem/60)).padStart(2,'0')+':'+String(rem%60).padStart(2,'0');
  ctx.fillStyle='rgba(10,6,20,.8)';ctx.fillRect(430,222,172,58);ctx.strokeStyle='#ffd23f';ctx.lineWidth=3;ctx.strokeRect(430,222,172,58);txt(s,516,264,26,rem<=0&&Math.floor(t*8)%2?'#ff4040':'#ffd23f','center','#000')}
 if(t>=9.6&&t<10.9){const k=(t-9.6)/1.3;for(let i=0;i<18;i++){const a=i/18*Math.PI*2;ctx.fillStyle=i%3?'#e8e0cc':'#b9ad94';ctx.beginPath();ctx.arc(800+Math.cos(a)*k*460,230+Math.sin(a)*k*300+k*k*220,Math.max(2,24*(1-k)+5),0,7);ctx.fill()}
  if(k<.25){ctx.fillStyle='rgba(255,255,255,'+(1-k/.25)*.8+')';ctx.fillRect(0,0,W,H)}txt('POP!',800,230,Math.round(36+k*30),'#fff','center','#c8102e')}
 // band
 const enc=t>=10.9&&t<13.7;
 const band=[['page',250],['trey',390],['fish',512],['mike',650]];
 for(const[id,bx]of band){let x=bx,y=440,fr=id==='fish'?'fish_drums':id+'_rock',sc=.75;const bob=Math.abs(Math.sin(t*8+bx))*6;
  if(enc&&id==='fish'){const k=clamp((t-10.9)/1,0,1);x=512+k*20;y=440+k*110;sc=.75+k*.2;fr=k<1?(Math.floor(t*7)%2?'fish_w1':'fish_w2'):'fish_idle'}
  if(enc&&id==='page'){const k=clamp((t-10.9)/1,0,1);x=250+(505-250)*k;y=430;fr=k<1?'page_w1':'page_rock'}
  if(enc&&id==='page'&&t>11.9){ctx.save();ctx.translate(x,y);ctx.rotate(Math.sin(t*14)*.08);spr(fr,0,-bob,false,sc);ctx.restore();continue}
  spr(fr,x,y-bob,false,sc)}
 if(enc){// the kit falls apart under Page
  const c1=clamp((t-11.7)/1.2,0,1),c2=clamp((t-12.5)/1.1,0,1);
  if(t>11.7){ctx.save();ctx.translate(575+c1*300,330-Math.sin(c1*Math.PI)*120+c1*c1*160);ctx.rotate(c1*12);ctx.fillStyle='#000';ctx.beginPath();ctx.ellipse(0,0,34,10,0,0,7);ctx.fill();ctx.fillStyle='#e8c050';ctx.beginPath();ctx.ellipse(0,0,31,7,0,0,7);ctx.fill();ctx.restore();if(t<12.4)txt('CLANG!',600,300,16,'#ffd23f','center','#c8102e')}
  if(t>12.5){ctx.save();ctx.translate(470-c2*260,400+c2*90);ctx.rotate(-c2*9);ctx.fillStyle='#000';ctx.beginPath();ctx.arc(0,0,24,0,7);ctx.fill();ctx.fillStyle='#b8202a';ctx.beginPath();ctx.arc(0,0,21,0,7);ctx.fill();ctx.fillStyle='#eee';ctx.beginPath();ctx.arc(0,0,14,0,7);ctx.fill();ctx.restore();if(t<13.1)txt('BONK!',440,380,16,'#ffd23f','center','#c8102e')}
  if(t>13.1){for(let i=0;i<2;i++){ctx.save();ctx.translate(505+(i?1:-1)*(t-13.1)*260,360-Math.sin((t-13.1)*5)*100);ctx.rotate((t-13.1)*20);ctx.fillStyle='#d9b47a';ctx.fillRect(-20,-3,40,6);ctx.restore()}txt('OOPS!',505,330,14,'#fff','center','#c8102e')}
  for(let i=0;i<3;i++)txt(i%2?'♪':'♫',540+Math.sin(t*3+i)*50+i*30,440-((t*70+i*40)%140),20,'#ffd23f')}
 // crowd
 ctx.fillStyle='#0a0710';for(let i=0;i<34;i++){const x=i*31+(i%2)*12,y=H-40+Math.abs(Math.sin(t*7+i*1.7))*-14;ctx.beginPath();ctx.arc(x,y,17,0,7);ctx.fill();ctx.fillRect(x-20,y+8,40,60);if(i%3==0){ctx.fillRect(x+10,y-40+Math.sin(t*9+i)*6,7,40)}}
 // Rocky Top: freed lizards kick their clogs in the crowd
 if(t>=13.7){const L=[['agrunt_free',170],['clogger_free',400],['cyclist_free',640],['agrunt_free',860]];L.forEach(([f,x],i)=>{const hop=Math.abs(Math.sin(t*9+i))*22;spr(f,x,H+30-hop,i%2===0,.85);
   const ph=((t-13.7)*1.3+i*.37)%1;ctx.save();ctx.translate(x+(i%2?-1:1)*ph*90,H-150-Math.sin(ph*Math.PI)*170);ctx.rotate(ph*14);ctx.fillStyle='#000';ctx.beginPath();ctx.ellipse(0,0,19,10,0,0,7);ctx.fill();ctx.fillStyle='#e0a72a';ctx.beginPath();ctx.ellipse(0,0,16,7,0,0,7);ctx.fill();ctx.restore()})}
 // the bar: a regular shouts TEQUILA! during Bathtub Gin
 if(t<3.2){spr('clogger_free',110,500,true,.6);ctx.fillStyle='#2a1508';ctx.fillRect(0,462,220,80);ctx.fillStyle='#6b3a16';ctx.fillRect(0,456,220,12);ctx.fillStyle='#c9a24a';for(let i=0;i<4;i++)ctx.fillRect(30+i*45,438,10,18);
  const s=1+Math.abs(Math.sin(t*6))*.15;ctx.save();ctx.translate(140,330);ctx.scale(s,s);ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(0,0,96,30,0,0,7);ctx.fill();ctx.beginPath();ctx.moveTo(-20,24);ctx.lineTo(-40,56);ctx.lineTo(4,26);ctx.fill();txt('TEQUILA!',0,8,16,'#c8102e','center','rgba(0,0,0,.15)');ctx.restore()}
 for(let i=0;i<8;i++){const a=t*2+i;txt(i%2?'♪':'♫',(i*137+t*60)%W,120+Math.sin(a)*40,22,['#ffd23f','#ff3b3b','#8fd3ff'][i%3])}
 // captions
 const cap=(a,b)=>{ctx.fillStyle='rgba(7,4,13,.6)';ctx.fillRect(0,62,W,b?62:42);txt(a,W/2,92,16,'#ffd23f','center','#c8102e');if(b)txt(b,W/2,114,10,'#fff')};
 if(t<3)cap('LIVE AT THE PARADISO · SET 1: BATHTUB GIN','(WITH A TEQUILA TEASE)');
 else if(t<9.6)cap('SET 2: THE ~47-MINUTE SUITE','DOWN WITH DISEASE > CARINI > TASTE > DOWN WITH DISEASE');
 else if(t<10.9)cap('...AND BACK INTO DOWN WITH DISEASE!');
 else if(t<13.7)cap('ENCORE: SLEEPING MONKEY','FISH SINGS UP FRONT. PAGE ON DRUMS... SORT OF.');
 else cap('ROCKY TOP!','THE FREED LIZARDS KICK UP THEIR CLOGS');
 if(t>15.6){ctx.fillStyle='rgba(0,0,0,'+clamp(t-15.6,0,1)+')';ctx.fillRect(0,0,W,H)}}

// ---------- loop ----------
function renderStage(){const t=G.modeT;ctx.drawImage(img.stage,0,0,W,H);
 const band=[['trey',300],['fish',440],['page',600],['mike',760]];
 ctx.fillStyle='rgba(0,0,0,.25)';ctx.fillRect(0,0,W,H);
 for(const[id,bx] of band){let x=bx,y=440,fr=id==='fish'?'fish_drums':id+'_rock',sc=.8;
  if(id==='fish'&&t>3&&t<6.5){x=512;y=470;sc=.95;fr='fish_vac'}
  if(id===G.cid&&t>6.5){const k=clamp((t-6.5)/1.2,0,1);x=bx+(512-bx)*k;y=440-Math.sin(k*Math.PI)*160+k*120;fr=id+'_w1';if(k>=1){y=560+Math.sin(t*10)*6}}
  const bob=Math.abs(Math.sin(t*8+bx))*6;
  if(id==='fish'&&t>3&&t<6.5){const g=ctx.createRadialGradient(512,300,10,512,380,260);g.addColorStop(0,'rgba(255,250,200,.55)');g.addColorStop(1,'rgba(255,250,200,0)');ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(470,0);ctx.lineTo(554,0);ctx.lineTo(700,H);ctx.lineTo(324,H);ctx.fill()}
  spr(fr,x,y-bob,false,sc)}
 // crowd heads bouncing
 ctx.fillStyle='#0a0710';for(let i=0;i<34;i++){const x=i*31+(i%2)*12,y=H-40+Math.abs(Math.sin(t*7+i*1.7))*-14;ctx.beginPath();ctx.arc(x,y,17,0,7);ctx.fill();ctx.fillRect(x-20,y+8,40,60);if(i%3==0){ctx.fillRect(x+10,y-40+Math.sin(t*9+i)*6,7,40)}}
 for(let i=0;i<8;i++){const a=t*2+i;txt(i%2?'♪':'♫',(i*137+t*60)%W,120+Math.sin(a)*40,22,['#ffd23f','#ff3b3b','#8fd3ff'][i%3])}
 marquee(W/2,470,300,t,'DEBUT NIGHT · 5 NEW SONGS');
 if(t<3)txt('LIVE AT SHEPHERD\'S BUSH EMPIRE',W/2,96,16,'#ffd23f','center','#c8102e');
 else if(t<6.5)txt('FISH TAKES A VACUUM SOLO!',W/2,96,18,'#ffd23f','center','#c8102e');
 else txt(CH[G.cid].n+' STAGE DIVES INTO LONDON!',W/2,96,16,'#ffd23f','center','#c8102e');
 if(t>9.5){ctx.fillStyle='rgba(0,0,0,'+clamp(t-9.5,0,1)+')';ctx.fillRect(0,0,W,H)}
}
function loop(ts){const dt=Math.min(.033,(ts-last)/1000||0);last=ts;if(G){try{update(dt);if(G.mode==='stage')(LVN===2?stageAms:renderStage)();else if(G.mode!=='end')render()}catch(e){console.error(e)}}raf=requestAnimationFrame(loop)}
function load(src){return new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(i);i.src=src})}
const loaded={};
function loadScript(src){return new Promise(r=>{const s=document.createElement('script');s.src=src;s.onload=r;s.onerror=r;document.head.appendChild(s)})}
function loadAll(lvl=1){const L=LEVELS[lvl]||LEVELS[1];if(!loaded[lvl])loaded[lvl]=Promise.all((L.scripts||[]).filter(s=>!document.querySelector('script[src="'+s+'"]')).map(loadScript)).then(()=>Promise.all([['atlas','atlas.webp'],...L.imgs].map(([k,s])=>img[k]&&img[k].complete&&img[k].naturalWidth?0:load((window.ASSETS&&ASSETS[s])||s).then(i=>img[k]=i))));return loaded[lvl]}
window.PhishGame={
 loadAll,img,ATLAS,
 async start(canvas,cid,portraits,exitCb,lvl=1){cv=canvas;ctx=cv.getContext('2d');PORTRAIT=portraits;onExit=exitCb;G=null;await loadAll(lvl);ac();newGame(cid,lvl);cancelAnimationFrame(raf);last=performance.now();raf=requestAnimationFrame(loop)},
 begin(){if(G&&G.mode==='intro'){G.mode='play';G.modeT=0;ac();SFX.go()}},
 continue_(){if(!G)return;G.lives=2;G.score=0;G.p.hp=G.c.hp;G.p.dead=0;G.p.st='idle';G.p.inv=2.5;G.mode='play'},
 stop(){cancelAnimationFrame(raf);G=null},
 setPaused(v){if(G&&(G.mode==='play'||G.mode==='paused'))G.mode=v?'paused':'play'},
 keys,touch,toggleMusic(){musicOn=!musicOn;return musicOn},
 get state(){return G},SFX,ac,tone,noise,LEVELS,get musicOn(){return musicOn},
 debugKillAll(){G&&G.en.forEach(e=>{if(e.st!=='free'&&e.st!=='dead'){e.hp=1;damageEnemy(e,5,1,1,1)}})},
};
addEventListener('keydown',e=>{keys[e.code]=true;if(G&&G.mode==='intro'&&(e.code==='Enter'||e.code==='Space'))window.PhishGame.begin();if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code)&&G)e.preventDefault()});
addEventListener('keyup',e=>{keys[e.code]=false});
})();
