(()=>{
'use strict';
const ATLAS={"sarge_w1": [0, 0, 118, 215, 61], "sarge_w2": [120, 0, 130, 213, 72], "sarge_atk": [252, 0, 188, 209, 129], "sarge_block": [442, 0, 120, 208, 61], "trey_atk": [564, 0, 134, 206, 55], "sarge_hurt": [700, 0, 125, 203, 52], "trey_idle": [827, 0, 119, 200, 50], "trey_w1": [948, 0, 120, 200, 51], "trey_w2": [1070, 0, 120, 200, 52], "page_idle": [1192, 0, 94, 200, 40], "page_atk": [1288, 0, 117, 200, 35], "mike_idle": [1407, 0, 109, 200, 43], "mike_w1": [1518, 0, 111, 200, 41], "fish_idle": [1631, 0, 107, 200, 52], "sarge_charge": [1740, 0, 127, 200, 72], "page_w1": [1869, 0, 82, 198, 40], "mike_w2": [0, 217, 113, 198, 45], "page_w2": [115, 217, 92, 197, 46], "mike_rock": [209, 217, 103, 196, 46], "fish_w1": [314, 217, 87, 196, 43], "mike_hurt": [403, 217, 107, 195, 40], "fish_w2": [512, 217, 91, 195, 45], "mike_atk": [605, 217, 135, 191, 52], "fish_atk": [742, 217, 143, 191, 49], "props_phone": [887, 217, 91, 190, 45], "trey_hurt": [980, 217, 85, 185, 41], "trey_rock": [1067, 217, 107, 185, 50], "page_hurt": [1176, 217, 99, 185, 48], "fish_rock": [1277, 217, 114, 183, 53], "page_rock": [1393, 217, 103, 180, 49], "fish_hurt": [1498, 217, 91, 178, 42], "grunt_w1": [1591, 217, 132, 175, 55], "grunt_w2": [1725, 217, 121, 175, 48], "guard_w1": [1848, 217, 104, 175, 42], "bobby_w1": [0, 417, 114, 175, 54], "grunt_atk": [116, 417, 152, 173, 81], "guard_w2": [270, 417, 104, 173, 47], "bobby_w2": [376, 417, 116, 172, 58], "bobby_atk": [494, 417, 125, 172, 68], "bobby_hurt": [621, 417, 197, 170, 98], "grunt_hurt": [820, 417, 107, 164, 45], "guard_atk": [929, 417, 132, 161, 67], "guard_hurt": [1063, 417, 91, 156, 44], "props_cart": [1156, 417, 159, 150, 79], "grunt_free": [1317, 417, 121, 142, 61], "guard_free": [1440, 417, 109, 133, 54], "bobby_free": [1551, 417, 106, 125, 53], "grunt_down": [1659, 417, 142, 100, 80], "props_crate": [1803, 417, 76, 80, 33], "props_chips": [1881, 417, 28, 44, 3], "props_glow": [1911, 417, 17, 44, 3], "props_page": [1930, 417, 38, 44, 18], "guard_down": [0, 594, 127, 42, 56], "props_tea": [129, 594, 41, 36, 21], "bobby_down": [172, 594, 57, 23, 10]};
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
 sarge:{hp:260,dmg:16,spd:110,reach:125,sc:1,pts:3000,block:1,boss:1,tele:.6}};
// world: 5 screens
const SEG=[['tube',0,425,505],['tube',1024,425,505],['market',2048,450,565],['market',3072,450,565],['venue',4096,478,565]];
const WORLD=5120, DOOR=4096+735;
const WAVES=[
 {at:250,list:['grunt','grunt']},
 {at:1150,list:['grunt','bobby','grunt']},
 {at:2150,list:['guard','grunt','bobby','pruss']},
 {at:3050,list:['guard','bobby','grunt','guard','pruss']},
 {at:4096,list:['sarge'],boss:1}];
const BREAK=[[700,470,'crate','tea'],[1700,490,'crate','chips'],[2500,470,'cart','glow'],[2850,540,'crate','tea'],[3450,500,'cart','chips'],[4150,500,'phone','chips']];
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
 moo(){tone(180,.6,'sawtooth',.12,.75);tone(184,.6,'square',.05,.72)}};
let musT=0,musStep=0;
const BASS=[45,45,57,45,52,45,55,57, 43,43,55,43,50,43,52,55];// midi
function music(dt){if(!musicOn||!AC||!G||G.mode==='end')return;musT-=dt;if(musT<=0){musT=60/132/2;const n=BASS[musStep%16];const f=440*Math.pow(2,(n-69)/12);tone(f,.16,'triangle',.11);if(musStep%4===0)noise(.05,.06,5000);if(musStep%8===4)noise(.09,.08,1500);musStep++}}
// ---------- helpers ----------
const rnd=(a,b)=>a+Math.random()*(b-a),clamp=(v,a,b)=>v<a?a:v>b?b:v;
function lane(x){// returns [top,bottom] at world x with blend near seams
 let s=SEG[clamp(Math.floor(x/1024),0,4)];let n=SEG[clamp(Math.floor(x/1024)+1,0,4)];const f=x-s[1];
 if(f>924&&n!==s){const t=(f-924)/100;return[s[2]+(n[2]-s[2])*t,s[3]+(n[3]-s[3])*t]}return[s[2],s[3]]}
function spr(name,x,y,flip,sc=1,alpha=1,tint=null){const m=ATLAS[name];if(!m)return;const[sx,sy,w,h,fx]=m;ctx.save();ctx.globalAlpha=alpha;ctx.translate(Math.round(x),Math.round(y));if(flip)ctx.scale(-1,1);ctx.scale(sc,sc);ctx.drawImage(img.atlas,sx,sy,w,h,-fx,-h,w,h);if(tint){ctx.globalCompositeOperation='source-atop';ctx.fillStyle=tint;ctx.fillRect(-fx,-h,w,h)}ctx.restore()}
function shadow(x,y,w){ctx.fillStyle='rgba(0,0,0,.35)';ctx.beginPath();ctx.ellipse(x,y,w,w*.28,0,0,7);ctx.fill()}
function txt(s,x,y,sz=16,c='#fff',al='center',sh='#000'){ctx.font=sz+'px "Press Start 2P",monospace';ctx.textAlign=al;ctx.fillStyle=sh;ctx.fillText(s,x+3,y+3);ctx.fillStyle=c;ctx.fillText(s,x,y)}
// ---------- game ----------
function newGame(cid){
 const c=CH[cid];
 G={cid,c,t:0,cam:0,camLock:null,wave:0,waveActive:false,go:0,score:0,lives:3,mode:'intro',modeT:0,shake:0,
  p:{x:120,y:470,z:0,vz:0,face:1,hp:c.hp,jam:0,st:'idle',t:0,combo:0,comboT:0,inv:1.5,boost:0,hitList:[]},
  en:[],fx:[],items:[],brk:BREAK.map(b=>({x:b[0],y:b[1],k:b[2],drop:b[3],hp:3,shake:0})),rain:[],boss:null,hits:0,freed:0,time:0};
 for(let i=0;i<120;i++)G.rain.push({x:rnd(0,W),y:rnd(0,H),v:rnd(700,1000)});
}
function spawn(type,side,i){const t=ET[type];const x=side>0?G.cam+W+60+i*70:G.cam-60-i*70;const ln=lane(clamp(x,0,WORLD-1));
 const e={type,t:0,x,y:rnd(ln[0]+10,ln[1]-5),z:0,vz:0,vx:0,hp:t.hp,max:t.hp,st:'walk',stT:0,face:-side,cd:rnd(.6,1.6),slotY:rnd(-30,30),stun:0,tok:0,blockT:0,phase:0,flash:0,anim:rnd(0,1)};
 if(t.boss){G.boss=e;e.x=G.cam+W-120;e.y=520;e.st='intro';e.stT=0}
 G.en.push(e);G.spawned=(G.spawned||0)+1;return e}
function startWave(){const w=WAVES[G.wave];G.waveActive=true;G.camLock=w.at;G.spawned=0;
 if(w.boss){spawn('sarge',1,0);G.bossIntro=2.2;SFX.big()}
 else w.list.forEach((ty,i)=>{setTimeout(()=>{if(G&&G.waveActive)spawn(ty,i%2?-1:1,0)},i*700)});
 G.waveLeft=w.list.length}
function addFx(o){G.fx.push(Object.assign({t:0,life:.5},o))}
function damageEnemy(e,dmg,dir,kd,src){
 const t=ET[e.type];if(e.st==='dead'||e.st==='free'||e.st==='intro')return false;
 if(t.block&&e.st==='block'&&Math.sign(G.p.x-e.x)===e.face&&!src){
  if(kd){addFx({k:'txt',s:'GUARD BREAK!',x:e.x,y:e.y-200,c:'#ffd23f'});SFX.big();dmg*=.6}
  else{SFX.block();addFx({k:'txt',s:'BLOCK',x:e.x,y:e.y-170,c:'#9cf'});e.blocks=(e.blocks||0)+1;if(e.blocks>=3){e.blocks=0;e.st='tele';e.stT=.35}return false}}
 e.hp-=dmg;e.flash=.12;G.score+=dmg*10;G.hits++;
 G.p.jam=Math.min(100,G.p.jam+(src?0:7));
 addFx({k:'spark',x:e.x+dir*-20,y:e.y-90-rnd(0,40),life:.25});
 if(e.hp<=0){e.hp=0;e.st='down';e.stT=1.1;e.vx=dir*320;e.vz=380;G.score+=t.pts;G.shake=.2;SFX.big();
  if(t.boss){G.shake=.6;addFx({k:'txt',s:'SERGEANT DOWN!',x:e.x,y:e.y-230,c:'#ffd23f',life:1.6})}
  return true}
 if(kd||(t.boss&&Math.random()<.12)){e.st='down';e.stT=1;e.vx=dir*(t.boss?160:300);e.vz=t.boss?200:330;SFX.big()}
 else{e.st='hurt';e.stT=t.boss?.18:.32;e.vx=dir*120;SFX.hit()}
 if(e.tok){e.tok=0}
 return true}
function hurtPlayer(dmg,dir){const p=G.p;if(p.inv>0||p.st==='special'||G.mode!=='play')return;
 p.hp-=dmg;p.inv=1;G.shake=.25;SFX.hurt();addFx({k:'spark',x:p.x,y:p.y-110,life:.25,c:'#f44'});
 if(dmg>=14||p.hp<=0){p.st='down';p.t=1;p.vx=dir*260;p.vz=300}else{p.st='hurt';p.t=.3;p.vx=dir*120}
 if(p.hp<=0){p.hp=0;p.dead=1}}
function playerHit(range,dmg,kd,arc){const p=G.p;let any=false;
 for(const e of G.en){if(e.st==='dead'||e.st==='free'||e.st==='down'&&!arc)continue;const dx=(e.x-p.x)*p.face;
  if(dx>-20&&dx<range&&Math.abs(e.y-p.y)<(arc?60:32)&&Math.abs(e.z-p.z)<80){if(damageEnemy(e,dmg,p.face,kd))any=true}}
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
 if(G.mode==='stage'){if(G.modeT>10.5&&!G.sent){G.sent=1;onExit&&onExit('done',{score:G.score,freed:G.freed,hits:G.hits,time:G.time,cid:G.cid,lives:G.lives})}return}
 G.time+=dt;
 const p=G.p,c=G.c;
 // input
 let ix=(keys.ArrowRight||keys.KeyD?1:0)-(keys.ArrowLeft||keys.KeyA?1:0)+touch.x,iy=(keys.ArrowDown||keys.KeyS?1:0)-(keys.ArrowUp||keys.KeyW?1:0)+touch.y;
 ix=clamp(ix,-1,1);iy=clamp(iy,-1,1);
 const atk=keys.KeyJ||keys.KeyZ||touch.a,jmp=keys.KeyK||keys.KeyX||keys.Space||touch.j,spc=keys.KeyL||keys.KeyC||touch.s;
 p.inv-=dt;p.boost-=dt;p.t-=dt;p.comboT-=dt;
 const spd=c.spd*(p.boost>0?1.45:1);
 if(p.st==='special'){if(G.cid==='fish'){/* vacuum pull */G.en.forEach(e=>{const dx=(e.x-p.x)*p.face;if(dx>0&&dx<520&&Math.abs(e.y-p.y)<90&&e.st!=='free'&&e.st!=='dead'){e.x-=p.face*420*dt;e.y+=(p.y-e.y)*2*dt;if(dx<80&&!e.vacHit){e.vacHit=1;damageEnemy(e,26,p.face,1,1)}}})}
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
  if(atk&&!p._a&&(p.st!=='atk'||p.t<p.atkDur*.3)){p.combo=p.comboT>0?p.combo%3+1:1;p.comboT=.55;p.st='atk';p.atkDur=p.combo===3?.36:.26;p.t=p.atkDur;p.hitDone=0;SFX.swing();if(!air)p.x+=p.face*8}
  if(p.z>0){p.z+=p.vz*dt;p.vz-=1600*dt;if(p.z<=0){p.z=0;p.vz=0}}
 }
 p._a=atk;p._j=jmp;p._s=spc;
 // bounds
 const ln=lane(p.x);p.y=clamp(p.y,ln[0],ln[1]);
 const minX=G.camLock!=null?G.camLock+40:G.cam+40,maxX=G.camLock!=null?G.camLock+W-40:WORLD-40;
 p.x=clamp(p.x,minX,maxX);
 // camera
 if(G.camLock!=null){G.cam+=(G.camLock-G.cam)*Math.min(1,dt*5)}
 else{const target=clamp(p.x-W*.4,G.cam,WORLD-W);G.cam+=(target-G.cam)*Math.min(1,dt*6)}
 // wave triggers
 if(!G.waveActive&&G.wave<WAVES.length&&G.cam>=WAVES[G.wave].at-(WAVES[G.wave].boss?0:60)&&p.x>WAVES[G.wave].at+W*.3){startWave()}
 if(!G.waveActive&&G.wave<WAVES.length&&WAVES[G.wave].boss&&p.x>4096+250){G.cam=4096;startWave()}
 if(G.bossIntro>0){G.bossIntro-=dt}
 updateEnemies(dt);
 // wave cleared?
 if(G.waveActive){const alive=G.en.filter(e=>e.st!=='free'&&e.st!=='dead').length;const pending=G.spawned<G.waveLeft;
  if(!alive&&!pending&&G.spawned>=1){G.waveActive=false;G.camLock=null;G.en=G.en.filter(e=>e.st==='free');G.wave++;G.go=3;SFX.go();
   if(G.wave>=WAVES.length){G.go=0;G.doorOpen=1;addFx({k:'banner',s:'TO THE EMPIRE!',life:2})}}}
 if(G.go>0)G.go-=dt*.6;
 // items
 for(const it of G.items){it.t+=dt;if(!it.got&&Math.abs(it.x-p.x)<45&&Math.abs(it.y-p.y)<35&&p.z<30){it.got=1;SFX.pick();
  if(it.k==='chips'){p.hp=Math.min(c.hp,p.hp+45);addFx({k:'txt',s:'FISH & CHIPS +45',x:p.x,y:p.y-200,c:'#7f7'})}
  if(it.k==='tea'){p.hp=Math.min(c.hp,p.hp+18);addFx({k:'txt',s:'CUPPA TEA +18',x:p.x,y:p.y-200,c:'#7f7'})}
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
  if(e.st==='free'){e.x+=e.face*-1*0+e.runDir*260*dt;continue}
  if(e.st==='dead'){continue}
  if(e.st==='intro'){e.face=-1;if(G.bossIntro<=0){e.st='walk'}continue}
  if(e.st==='down'){e.x+=e.vx*dt;e.vx*=.92;e.z+=e.vz*dt;e.vz-=1400*dt;if(e.z<0){e.z=0;e.vz=0}
   if(e.stT<=0){if(e.hp<=0){if(t.liz){e.st='free';e.runDir=e.x>G.cam+W/2?1:-1;e.face=-e.runDir;G.freed++;SFX.free();addFx({k:'bag',x:e.x,y:e.y-120,vx:rnd(-80,80),life:1});addFx({k:'txt',s:'FREED!',x:e.x,y:e.y-190,c:'#7f7',life:1.1})}else{e.st='dead';addFx({k:'poof',x:e.x,y:e.y,life:.6})}}else{e.st='walk';e.cd=.5}}
   continue}
  if(e.st==='hurt'){e.x+=e.vx*dt;e.vx*=.85;if(e.stT<=0){e.st='walk';if(t.block&&Math.random()<.35){e.st='block';e.stT=.7}}continue}
  if(e.st==='stun'){e.stun-=dt;if(e.stun<=0)e.st='walk';continue}
  if(e.st==='block'){e.face=p.x<e.x?-1:1;if(e.stT<=0)e.st='walk';continue}
  if(e.st==='tele'){if(e.stT<=0){e.st='atk';e.stT=.25;e.hitDone=0;SFX.swing()}continue}
  if(e.st==='atk'){if(!e.hitDone&&e.stT<.18){e.hitDone=1;const dx=(p.x-e.x)*e.face;if(dx>-10&&dx<t.reach+10&&Math.abs(p.y-e.y)<30&&p.z<60)hurtPlayer(t.dmg,e.face)}
   if(e.stT<=0){e.st='walk';e.cd=rnd(.9,1.8);if(e.tok){e.tok=0;tokens--}}continue}
  if(e.st==='charge'){e.x+=e.face*520*dt;if(Math.abs(p.x-e.x)<60&&Math.abs(p.y-e.y)<40)hurtPlayer(t.dmg+2,e.face);
   if(e.stT<=0||e.x<G.cam+60||e.x>G.cam+W-60){e.x=clamp(e.x,G.cam+60,G.cam+W-60);e.st='hurt';e.stT=.9;e.vx=0;G.shake=.2;SFX.big();addFx({k:'txt',s:'DAZED!',x:e.x,y:e.y-230,c:'#ffd23f'})}continue}
  // walk/AI
  e.face=p.x<e.x?-1:1;
  if(t.boss){if(e.hp<e.max*.5&&!e.phase){e.phase=1;addFx({k:'banner',s:'SHIELD WALL!',life:1.4});spawn('pruss',1,0);spawn('pruss',-1,0);}
   if(e.cd<=0&&Math.random()<.5&&Math.abs(p.y-e.y)<50&&Math.abs(p.x-e.x)>220){e.st='tele';e.stT=.7;e.nextCharge=1;e.cd=2.5;continue}}
  const wantX=p.x+(e.x<p.x?-1:1)*(t.reach*.8+ (e.tok?0:90)),wantY=p.y+(e.tok?0:e.slotY);
  const wx=clamp(wantX,G.cam+50,G.cam+W-50);const dx=wx-e.x,dy=wantY-e.y,d=Math.hypot(dx,dy);
  if(d>8){e.x+=dx/d*t.spd*dt;e.y+=dy/d*t.spd*.6*dt}
  const ln=lane(e.x);e.y=clamp(e.y,ln[0],ln[1]);
  const inRange=Math.abs(p.x-e.x)<t.reach&&Math.abs(p.y-e.y)<26;
  if(!e.tok&&tokens<2&&e.cd<=0){e.tok=1;tokens++}
  if(e.tok&&inRange&&e.cd<=0){e.st='tele';e.stT=t.tele}
  if(t.block&&e.cd>0&&Math.random()<dt*(t.boss?.45:.5)&&Math.abs(p.x-e.x)<200){e.st='block';e.stT=t.boss?.8:.7}
 }
 if(G.camLock!=null)for(const e of G.en){if(e.st==='free')continue;const lo=G.camLock+15,hi=G.camLock+W-15;if(e.x>lo&&e.x<hi)e.entered=1;if(e.entered)e.x=clamp(e.x,lo,hi);else if(e.x<lo-300||e.x>hi+300)e.x=clamp(e.x,lo-300,hi+300)}
 for(const e of G.en){if(e.st==='atk'&&e.nextCharge){e.nextCharge=0;e.st='charge';e.stT=1.4}}
 // separation
 for(let i=0;i<G.en.length;i++)for(let j=i+1;j<G.en.length;j++){const a=G.en[i],b=G.en[j];if(a.st==='free'||b.st==='free')continue;const dx=b.x-a.x,dy=(b.y-a.y)*2;if(Math.abs(dx)<50&&Math.abs(dy)<40){const s=dx>=0?1:-1;a.x-=s*40*.016;b.x+=s*40*.016}}
 G.en=G.en.filter(e=>!(e.st==='free'&&(e.x<G.cam-200||e.x>G.cam+W+200)));
 G.en=G.en.filter(e=>!(e.st==='dead'&&e.t>0&&!G.fx.some(f=>f.k==='poof'&&f.x===e.x)));
}
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
 // draw list
 const L=[];
 for(const b of G.brk)if(b.hp>0)L.push({y:b.y,d:()=>{shadow(b.x-cam,b.y,45);spr('props_'+b.k,b.x-cam+(b.shake>0?rnd(-4,4):0),b.y,false,b.k==='phone'?1:1)}});
 for(const it of G.items)L.push({y:it.y,d:()=>{shadow(it.x-cam,it.y,18);const bob=Math.sin(it.t*6)*4;spr('props_'+it.k,it.x-cam,it.y-8+bob);if(it.t>6&&Math.floor(it.t*8)%2)return}});
 for(const e of G.en){L.push({y:e.y,d:()=>drawEnemy(e,cam)})}
 L.push({y:G.p.y+.1,d:()=>drawPlayer(cam)});
 L.sort((a,b)=>a.y-b.y).forEach(o=>o.d());
 // fx
 for(const f of G.fx)drawFx(f,cam);
 // rain outdoors
 if(cam>1700){const a=clamp((cam-1700)/400,0,1)*(cam>3900?1:.55);ctx.strokeStyle='rgba(170,190,255,'+(.35*a)+')';ctx.lineWidth=1.5;ctx.beginPath();for(const r of G.rain){ctx.moveTo(r.x,r.y);ctx.lineTo(r.x-4,r.y+18)}ctx.stroke()}
 ctx.restore();
 hud();
}
function drawPlayer(cam){const p=G.p,id=G.cid;let fr;
 if(p.st==='atk')fr=id+(p.t<p.atkDur*.75?'_atk':'_idle');else if(p.st==='hurt'||p.st==='down')fr=id+'_hurt';else if(p.st==='special')fr=id+'_rock';else if(p.st==='walk')fr=frameName(id,'walk',G.t);else fr=id+'_idle';
 if(p.z>0&&p.st!=='atk')fr=id+'_w1';
 const x=p.x-cam,y=p.y-p.z;shadow(x,p.y,44);
 if(p.inv>0&&p.st!=='special'&&Math.floor(G.t*20)%2)return;
 let rot=0;if(p.st==='down'){ctx.save();ctx.translate(x,y);ctx.rotate(-p.face*1.2*Math.min(1,(1-p.t)*4));ctx.translate(-x,-y)}
 if(p.boost>0){ctx.save();ctx.globalAlpha=.3;spr(fr,x-p.face*18,y,p.face<0,1,.35,'#6f6');ctx.restore()}
 const lunge=p.st==='atk'&&p.combo===3?Math.sin((1-p.t/p.atkDur)*Math.PI)*16*p.face:0;
 spr(fr,x+lunge,y,p.face<0);
 if(p.st==='down')ctx.restore();
 if(p.st==='atk'&&p.t<p.atkDur*.75&&p.t>p.atkDur*.3){ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=4;ctx.beginPath();ctx.arc(x+p.face*40,y-100,G.c.reach*.6,p.face>0?-1:Math.PI-.4,p.face>0?.4:Math.PI+1);ctx.stroke()}
}
function drawEnemy(e,cam){const t=ET[e.type];const pre=e.type==='pruss'?'sarge':e.type;let fr;
 if(e.st==='free')fr=pre+'_free';
 else if(e.st==='down')fr=(t.liz?pre+'_down':pre+'_hurt');
 else if(e.st==='hurt'||e.st==='stun')fr=pre+'_hurt';
 else if(e.st==='atk')fr=pre+'_atk';
 else if(e.st==='tele')fr=t.liz?pre+'_w1':(e.nextCharge?'sarge_charge':'sarge_w1');
 else if(e.st==='block')fr='sarge_block';
 else if(e.st==='charge')fr='sarge_charge';
 else if(e.st==='intro')fr='sarge_block';
 else fr=pre+(Math.floor(e.anim*6)%2?'_w1':'_w2');
 const x=e.x-cam,y=e.y-e.z;shadow(x,e.y,40*t.sc);
 const flip=e.st==='free'?e.runDir>0:e.face>0;// enemy art faces left
 if(e.st==='down'&&!t.liz){ctx.save();ctx.translate(x,y);ctx.rotate(e.face*1.3*Math.min(1,(1.1-e.stT)*4));ctx.translate(-x,-y)}
 let tint=e.flash>0?'rgba(255,255,255,.7)':(e.st==='tele'?'rgba(255,60,60,'+(.25+.25*Math.sin(G.t*40))+')':null);
 if(e.type==='pruss'&&!tint)tint=null;
 if(e.st==='stun')tint='rgba(120,200,255,.3)';
 spr(fr,x,y,flip,t.sc,1,tint);
 if(e.st==='down'&&!t.liz)ctx.restore();
 if(e.st==='tele')txt('!',x,y-175*t.sc-10,22,'#ff4040');
 if(e.st==='stun'){for(let i=0;i<3;i++){const a=G.t*4+i*2.1;txt('*',x+Math.cos(a)*28,y-180+Math.sin(a)*8,12,'#ffd23f')}}
 if(!t.boss&&e.st!=='free'&&e.hp<e.max&&e.hp>0){ctx.fillStyle='#000';ctx.fillRect(x-30,y-190*t.sc,60,6);ctx.fillStyle='#f33';ctx.fillRect(x-29,y-189*t.sc,58*e.hp/e.max,4)}
}
function drawFx(f,cam){const k=f.t/f.life;
 if(f.k==='spark'){ctx.save();ctx.translate(f.x-cam,f.y);ctx.rotate(k*3);ctx.fillStyle=f.c||'#fff6a0';const s=28*(1-k)+8;for(let i=0;i<4;i++){ctx.rotate(Math.PI/2);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(s*.25,s*.25);ctx.lineTo(0,s);ctx.lineTo(-s*.25,s*.25);ctx.fill()}ctx.restore()}
 if(f.k==='txt'){ctx.globalAlpha=1-k;txt(f.s,f.x-cam,f.y-k*40,12,f.c);ctx.globalAlpha=1}
 if(f.k==='chip'){f.vx=f.vx||0;f.vy=(f.vy||-150)+900*.016;f.x+=f.vx*.016;f.y+=f.vy*.016;ctx.fillStyle='#8a5a2b';ctx.fillRect(f.x-cam,f.y,6,6)}
 if(f.k==='bag'){ctx.globalAlpha=1-k;ctx.fillStyle='#9a7448';ctx.save();ctx.translate(f.x-cam+f.vx*k,f.y-Math.sin(k*Math.PI)*90);ctx.rotate(k*8);ctx.beginPath();ctx.ellipse(0,0,22,26,0,0,7);ctx.fill();ctx.fillStyle='#000';ctx.font='8px "Press Start 2P"';ctx.textAlign='center';ctx.fillText('AC/DC',0,6);ctx.restore();ctx.globalAlpha=1}
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
 txt(String(G.score).padStart(7,'0'),W-20,40,18,'#fff','right');txt('LONDON 2/13/97',W-20,64,9,'#8fd3ff','right');
 if(G.boss&&G.boss.st!=='dead'&&G.boss.hp>0){txt('PRUSSIAN SERGEANT',W/2,H-58,12,'#ff8a3d');bar(W/2-250,H-46,500,14,G.boss.hp/G.boss.max,'#c8102e','#7a0010')}
 if(G.go>0&&Math.floor(G.t*3)%2)txt('GO →',W-120,H/2,34,'#ffd23f','center','#c8102e');
 if(G.bossIntro>0){ctx.fillStyle='rgba(0,0,0,.5)';ctx.fillRect(0,H/2-70,W,120);txt('MINI-BOSS',W/2,H/2-30,14,'#8fd3ff');txt('THE PRUSSIAN SERGEANT',W/2,H/2+10,24,'#ffd23f','center','#c8102e');txt("KING WILSON'S ENFORCER",W/2,H/2+38,10,'#fff')}
 if(G.mode==='intro'){ctx.fillStyle='rgba(7,4,13,.82)';ctx.fillRect(0,0,W,H);
  txt('LEVEL 1',W/2,110,16,'#8fd3ff');txt('LONDON',W/2,170,44,'#ffd23f','center','#c8102e');txt("SHEPHERD'S BUSH EMPIRE · 2/13/97",W/2,215,13,'#fff');
  const lines=["KING WILSON HAS STOLEN THE HELPING FRIENDLY","BOOK AND SCATTERED ITS PAGES ACROSS THE TOUR.","PAGE ONE IS HIDDEN IN LONDON. HIS BAGGED","LIZARDS AND PRUSSIAN GUARDS STAND IN THE WAY.","","FREE THE LIZARDS. REACH THE EMPIRE. PLAY THE SHOW."];
  lines.forEach((l,i)=>txt(l,W/2,280+i*26,11,'#e8dcc0'));
  if(Math.floor(G.t*2)%2)txt('TAP / PRESS ENTER TO START',W/2,500,14,'#fff')}
}
// ---------- loop ----------
function renderStage(){const t=G.modeT;ctx.drawImage(img.stage,0,0,W,H);
 const band=[['trey',300],['fish',440],['page',600],['mike',760]];
 ctx.fillStyle='rgba(0,0,0,.25)';ctx.fillRect(0,0,W,H);
 for(const[id,bx] of band){let x=bx,y=440,fr=id+'_rock',sc=.8;
  if(id==='fish'&&t>3&&t<6.5){x=512;y=470;sc=.95;}
  if(id===G.cid&&t>6.5){const k=clamp((t-6.5)/1.2,0,1);x=bx+(512-bx)*k;y=440-Math.sin(k*Math.PI)*160+k*120;fr=id+'_w1';if(k>=1){y=560+Math.sin(t*10)*6}}
  const bob=Math.abs(Math.sin(t*8+bx))*6;
  if(id==='fish'&&t>3&&t<6.5){const g=ctx.createRadialGradient(512,300,10,512,380,260);g.addColorStop(0,'rgba(255,250,200,.55)');g.addColorStop(1,'rgba(255,250,200,0)');ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(470,0);ctx.lineTo(554,0);ctx.lineTo(700,H);ctx.lineTo(324,H);ctx.fill()}
  spr(fr,x,y-bob,false,sc)}
 // crowd heads bouncing
 ctx.fillStyle='#0a0710';for(let i=0;i<34;i++){const x=i*31+(i%2)*12,y=H-40+Math.abs(Math.sin(t*7+i*1.7))*-14;ctx.beginPath();ctx.arc(x,y,17,0,7);ctx.fill();ctx.fillRect(x-20,y+8,40,60);if(i%3==0){ctx.fillRect(x+10,y-40+Math.sin(t*9+i)*6,7,40)}}
 for(let i=0;i<8;i++){const a=t*2+i;txt(i%2?'♪':'♫',(i*137+t*60)%W,120+Math.sin(a)*40,22,['#ffd23f','#ff3b3b','#8fd3ff'][i%3])}
 if(t<3)txt('LIVE AT SHEPHERD\'S BUSH EMPIRE',W/2,96,16,'#ffd23f','center','#c8102e');
 else if(t<6.5)txt('FISH TAKES A VACUUM SOLO!',W/2,96,18,'#ffd23f','center','#c8102e');
 else txt(CH[G.cid].n+' STAGE DIVES INTO LONDON!',W/2,96,16,'#ffd23f','center','#c8102e');
 if(t>9.5){ctx.fillStyle='rgba(0,0,0,'+clamp(t-9.5,0,1)+')';ctx.fillRect(0,0,W,H)}
}
function loop(ts){const dt=Math.min(.033,(ts-last)/1000||0);last=ts;if(G){try{update(dt);if(G.mode==='stage')renderStage();else if(G.mode!=='end')render()}catch(e){console.error(e)}}raf=requestAnimationFrame(loop)}
function load(src){return new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(i);i.src=src})}
let loaded=null;
function loadAll(){if(!loaded)loaded=Promise.all([['atlas','atlas.webp'],['tube','bg_tube.webp'],['market','bg_market.webp'],['venue','bg_venue.webp'],['stage','bg_stage.webp']].map(([k,s])=>load((window.ASSETS&&ASSETS[s])||s).then(i=>img[k]=i)));return loaded}
window.PhishGame={
 loadAll,img,ATLAS,
 async start(canvas,cid,portraits,exitCb){cv=canvas;ctx=cv.getContext('2d');PORTRAIT=portraits;onExit=exitCb;await loadAll();ac();newGame(cid);cancelAnimationFrame(raf);last=performance.now();raf=requestAnimationFrame(loop)},
 begin(){if(G&&G.mode==='intro'){G.mode='play';G.modeT=0;ac();SFX.go()}},
 continue_(){if(!G)return;G.lives=2;G.score=0;G.p.hp=G.c.hp;G.p.dead=0;G.p.st='idle';G.p.inv=2.5;G.mode='play'},
 stop(){cancelAnimationFrame(raf);G=null},
 setPaused(v){if(G&&(G.mode==='play'||G.mode==='paused'))G.mode=v?'paused':'play'},
 keys,touch,toggleMusic(){musicOn=!musicOn;return musicOn},
 get state(){return G},SFX,ac,tone,noise,
 debugKillAll(){G&&G.en.forEach(e=>{if(e.st!=='free'&&e.st!=='dead'){e.hp=1;damageEnemy(e,5,1,1,1)}})},
};
addEventListener('keydown',e=>{keys[e.code]=true;if(G&&G.mode==='intro'&&(e.code==='Enter'||e.code==='Space'))window.PhishGame.begin();if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code)&&G)e.preventDefault()});
addEventListener('keyup',e=>{keys[e.code]=false});
})();
