/* TravelScene: reusable 16-bit tour map between shows.
 TravelScene.play({canvas, from, to, stops, gag:'lizard'|'fish', vehicle:'bus'|'plane', music:true, onDone})
 city = {name, lon, lat, date, venue}; stops = small dots on route (real shows only). */
(function(){
const LW=256,LH=144;let BX=-6,BY=55.5,SX=LW/18,SY=LH/7;
const P=(lon,lat)=>[(lon-BX)*SX,(BY-lat)*SY];
const GB=[[-5.7,50.0],[-4.2,50.3],[-3.5,50.2],[-2.5,50.6],[-1.2,50.7],[0.3,50.75],[1.4,51.1],[1.5,51.4],[0.9,51.8],[1.75,52.5],[1.6,52.9],[0.3,53.1],[0,53.6],[-0.5,54.5],[-1.6,55.6],[-6.5,55.6],[-6.5,50]];
const EU=[[-6.5,48.4],[-4.5,48.6],[-1.6,48.7],[-1.3,49.7],[0.2,49.5],[1.6,50.2],[1.6,50.9],[2.5,51.1],[3.4,51.4],[3.9,51.7],[4.1,52.0],[4.5,52.4],[4.7,52.9],[4.9,53.2],[5.6,53.4],[6.9,53.4],[8.0,53.6],[8.5,53.6],[8.9,54.0],[8.6,54.9],[8.6,55.6],[12.5,55.6],[12.5,48.4]];
const IJ=[[5.1,52.4],[5.0,52.9],[5.4,53.1],[5.9,52.8],[5.6,52.4]];
const BORD=[[[2.5,51.1],[3.2,50.7],[4.2,49.95],[5.8,49.5]],[[3.4,51.4],[4.4,51.4],[5.2,51.3],[5.9,50.8],[6.1,50.15],[5.8,49.5]],[[5.9,50.8],[6.0,51.85],[6.8,51.95],[7.05,52.6],[7.2,53.3]]];
const LAB=[['ENGLAND',-2.2,52.4],['FRANCE',1.8,49.2],['BELGIUM',4.4,50.4],['NETHERLANDS',7.0,53.0],['GERMANY',9.2,51.2],['NORTH SEA',2.2,54.0]];
const EUR=[[-8.5,43.7],[-1.8,43.4],[-1.2,46.0],[-2.2,47.1],[-4.6,47.9],[-4.5,48.6],[-1.6,48.7],[-1.3,49.7],[0.2,49.5],[1.6,50.2],[1.6,50.9],[2.5,51.1],[3.4,51.4],[4.1,52.0],[4.7,52.9],[5.6,53.4],[6.9,53.4],[8.5,53.6],[8.9,54.0],[8.6,55.0],[8.1,56.2],[10.4,56.2],[10.5,55.6],[9.9,54.6],[11,54],[12.5,54.4],[14.2,53.9],[16.5,54.5],[18.6,54.4],[20.6,54.6],[20.6,56.2],[20.6,39.5],[19.4,40.4],[19.5,41.8],[18.5,42.5],[16,43.5],[15.2,44.3],[14,45.2],[13.7,45.6],[12.3,45.4],[12.3,44.5],[13.5,43.6],[14.2,42.4],[15.9,41.9],[16.2,41.3],[18.5,40.2],[18.4,39.5],[15.7,39.5],[15.6,40.1],[14.9,40.3],[14.3,40.8],[13.0,41.2],[12.2,41.8],[11.1,42.4],[10.5,43.0],[10.2,43.9],[9.0,44.4],[8.0,43.9],[7.0,43.5],[5.4,43.2],[4.0,43.5],[3.1,43.1],[3.2,41.9],[2.1,41.3],[0.9,41.0],[0,39.5],[-8.5,39.5]];
const GB2=[[-5.7,50.0],[-3.5,50.2],[-1.2,50.7],[1.4,51.1],[1.5,51.4],[0.9,51.8],[1.75,52.5],[1.6,52.9],[0.3,53.1],[0,53.6],[-0.5,54.5],[-1.6,55.6],[-2.2,56.2],[-8.5,56.2],[-8.5,50]];
const COR=[[8.6,43.0],[9.5,42.9],[9.5,41.4],[8.8,41.5],[8.6,42.3]],SAR=[[8.2,41.1],[9.7,41.0],[9.7,39.5],[8.4,39.5],[8.4,40.6]];
const NDE=[[3,53.4],[4.7,52.9],[5.6,53.4],[6.9,53.4],[8.5,53.6],[8.9,54.0],[8.6,55.0],[8.1,55.6],[8.2,56.6],[8.6,57.1],[10.0,57.6],[10.6,57.7],[10.3,57.0],[10.2,56.5],[10.9,56.4],[10.0,55.7],[10.5,55.6],[9.9,54.8],[10.0,54.5],[10.9,54.4],[10.7,54.0],[11.2,54.0],[12.1,54.2],[13.0,54.4],[13.6,54.6],[14.2,53.9],[17,54.3],[17,49],[3,49]];
const ZEA=[[11.1,55.2],[11.7,55.0],[12.2,55.1],[12.5,55.3],[12.7,55.7],[12.6,56.05],[12.1,56.1],[11.5,55.95],[11.0,55.7]],LOL=[[11.0,54.65],[11.5,54.62],[12.0,54.7],[12.1,54.9],[11.6,54.95],[11.0,54.85]],FEH=[[11.0,54.42],[11.3,54.4],[11.3,54.53],[11.05,54.52]],FYN=[[9.8,55.2],[10.6,55.0],[10.8,55.4],[10.4,55.6],[9.8,55.5]],SKA=[[12.5,55.4],[12.9,55.4],[13.3,55.5],[14.3,55.6],[14.2,56.5],[12.6,56.4],[12.9,56.0]];
const MAPS={benelux:{v:[-6,55.5,18,7],land:[[GB,'#3f7d36'],[EU,'#4b8a3c']],water:[IJ],bord:BORD,lab:LAB},
 north:{v:[3.5,57.6,14,8.4],land:[[NDE,'#4b8a3c'],[ZEA,'#4b8a3c'],[LOL,'#4b8a3c'],[FEH,'#4b8a3c'],[FYN,'#4b8a3c'],[SKA,'#3f7d36']],water:[],bord:[[[8.6,54.9],[9.4,54.8],[9.9,54.8]],[[7.2,53.3],[7.05,52.6],[6.0,51.85]]],lab:[['NORTH SEA',5.5,55.4],['BALTIC SEA',13.4,54.95],['DENMARK',9.2,56.3],['GERMANY',10.5,52.3],['SWEDEN',14.6,56.9]]},
 europe:{v:[-8,55.5,28,15.5],land:[[GB2,'#3f7d36'],[EUR,'#4b8a3c'],[COR,'#4b8a3c'],[SAR,'#4b8a3c']],water:[],
  bord:[[[2.5,51.1],[4.2,49.95],[5.8,49.5]],[[5.8,49.5],[8.2,49.0],[7.6,47.6]],[[6.1,46.2],[7.0,45.9],[8.4,46.4],[9.3,46.5],[10.5,46.9],[12.4,47.0],[13.7,46.5]],[[-1.8,43.4],[3.2,42.4]],[[6.0,51.85],[7.05,52.6],[7.2,53.3]],[[7.6,47.6],[10.5,47.5],[13.0,47.6],[14.8,50.9]]],
  lab:[['NORTH SEA',3,54.2],['FRANCE',2.2,46.8],['GERMANY',10.3,51.2],['ITALY',14.4,42.6],['SWITZERLAND',8.2,46.9],['MEDITERRANEAN',5.6,42.2],['AUSTRIA',14.6,47.9]]}};
let ac=null,mus=null;
function startMusic(){try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();if(ac.state==='suspended')ac.resume();
 const g=ac.createGain();g.gain.value=.05;g.connect(ac.destination);const mel=[72,76,79,76,74,77,81,77,72,76,79,84,83,79,76,74],bas=[48,48,55,55,50,50,53,53];let i=0,nt=ac.currentTime+.05;
 const tick=()=>{while(nt<ac.currentTime+.3){const f=m=>440*Math.pow(2,(m-69)/12);const o=ac.createOscillator(),e=ac.createGain();o.type='square';o.frequency.value=f(mel[i%16]);e.gain.setValueAtTime(.6,nt);e.gain.exponentialRampToValueAtTime(.01,nt+.13);o.connect(e).connect(g);o.start(nt);o.stop(nt+.14);
  if(i%2===0){const b=ac.createOscillator(),be=ac.createGain();b.type='triangle';b.frequency.value=f(bas[(i/2)%8]);be.gain.setValueAtTime(1.2,nt);be.gain.exponentialRampToValueAtTime(.01,nt+.26);b.connect(be).connect(g);b.start(nt);b.stop(nt+.27)}
  i++;nt+=.15}};
 tick();const id=setInterval(tick,100);mus={stop(){clearInterval(id);try{g.gain.setTargetAtTime(0,ac.currentTime,.05)}catch(e){}}}}catch(e){}}
function poly(c,pts){c.beginPath();pts.forEach((p,i)=>{const[x,y]=P(p[0],p[1]);i?c.lineTo(x,y):c.moveTo(x,y)});c.closePath();c.fill()}
function bakeMap(M){M=M||MAPS.benelux;const m=document.createElement('canvas');m.width=LW;m.height=LH;const c=m.getContext('2d');
 c.fillStyle='#1b3a6b';c.fillRect(0,0,LW,LH);
 for(let y=0;y<LH;y+=3)for(let x=(y*7)%11;x<LW;x+=11){c.fillStyle='#24508a';c.fillRect(x,y,2,1)}
 c.fillStyle='#2c5f2a';c.fillRect(0,0,0,0);
 M.land.forEach(([p,col])=>{c.fillStyle='#e8d9a0';c.save();c.translate(1,1);poly(c,p);c.restore();c.fillStyle=col;poly(c,p)});
 c.fillStyle='#1b3a6b';M.water.forEach(w=>poly(c,w));
 const d=c.getImageData(0,0,LW,LH),a=d.data;for(let y=0;y<LH;y++)for(let x=0;x<LW;x++){const k=(y*LW+x)*4;if(a[k+1]>100&&a[k+2]<90&&((x*13+y*7)%17===0)){a[k]=58;a[k+1]=110;a[k+2]=48}}c.putImageData(d,0,0);
 c.fillStyle='#24521f';M.bord.forEach(b=>{for(let i=0;i<b.length-1;i++){const[x0,y0]=P(...b[i]),[x1,y1]=P(...b[i+1]);const n=Math.hypot(x1-x0,y1-y0);for(let s=0;s<n;s+=3)c.fillRect(Math.round(x0+(x1-x0)*s/n),Math.round(y0+(y1-y0)*s/n),1,1)}});
 return m}
const MAPC={};
function drawBus(c,x,y,dir,t){c.save();c.translate(Math.round(x),Math.round(y));c.scale(dir,1);
 c.fillStyle='#000';c.fillRect(-9,-8,19,9);c.fillStyle='#f2ead2';c.fillRect(-8,-7,17,7);c.fillStyle='#c8102e';c.fillRect(-8,-3,17,2);
 c.fillStyle='#4aa3df';for(let i=-6;i<6;i+=3)c.fillRect(i,-6,2,2);c.fillRect(6,-6,2,3);
 c.fillStyle='#111';const b=(t*10|0)%2;c.fillRect(-6,0,3,2+b*0);c.fillRect(4,0,3,2);c.restore()}
function drawLizard(c,x,y,t,fall){c.save();c.translate(Math.round(x),Math.round(y));const s=(t*12|0)%2;
 c.fillStyle='#000';c.fillRect(-3,-7,7,8);c.fillStyle='#9a7448';c.fillRect(-2,-7,5,4);c.fillStyle='#5fbf4a';c.fillRect(-2,-3,5,3);c.fillRect(-4+s,-1,2,1);c.fillRect(2-s,0,2,1);c.fillRect(-5,-2,2,1);c.restore()}
function fishZ(c,x,y,t){x=Math.round(x);y=Math.round(y);c.fillStyle='#000';c.fillRect(x-7,y-11,14,4);c.fillStyle='#5a3a1a';c.fillRect(x-6,y-10,3,2);c.fillStyle='#c83a3a';c.fillRect(x-3,y-10,6,2);c.fillStyle='#e8c8a0';c.fillRect(x+3,y-10,3,2);c.fillStyle='#8a6a40';c.fillRect(x-8,y-9,16,1);for(let i=0;i<3;i++){c.fillStyle='rgba(255,255,255,'+(.4+.6*(((t*1.5+i/3)%1)))+')';c.fillRect(Math.round(x)+4+i*3,Math.round(y)-12-i*3-(t*6%3),2,2)}}
function moo(){try{if(!ac)return;const o=ac.createOscillator(),g=ac.createGain();o.type='sawtooth';o.frequency.setValueAtTime(180,ac.currentTime);o.frequency.linearRampToValueAtTime(130,ac.currentTime+.7);g.gain.setValueAtTime(.12,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.8);o.connect(g).connect(ac.destination);o.start();o.stop(ac.currentTime+.8)}catch(e){}}
function cows(c,x,y,dir,k,t){x=Math.round(x);y=Math.round(y);const off=k>1.3?(k-1.3)*14:0;
 for(let i=0;i<3;i++){const cx=x+dir*(8+i*5)+(i%2?off:-off)*(i===1?1:-1),cy=y-1+(i%2)*3;c.fillStyle='#000';c.fillRect(cx-3,cy-3,7,4);c.fillStyle='#fff';c.fillRect(cx-2,cy-3,5,3);c.fillStyle='#222';c.fillRect(cx-1,cy-3,2,2);c.fillRect(cx+dir*3,cy-4,2,2);c.fillStyle='#000';c.fillRect(cx-2,cy+1,1,1);c.fillRect(cx+2,cy+1,1,1)}
 if(k>.9&&k<2.6){c.fillStyle='#000';c.fillRect(x-dir*2-1,y-12,4,4);c.fillStyle='#e8c8a0';c.fillRect(x-dir*2,y-11,2,2);c.fillStyle='#fff';c.fillRect(x-dir*2-9,y-22,18,7);c.fillStyle='#c8102e';c.fillRect(x-dir*2-7,y-20,14,3)}}
function horn(){try{if(!ac)return;[73,110].forEach((f,i)=>{const o=ac.createOscillator(),g=ac.createGain();o.type=i?'square':'sawtooth';o.frequency.value=f;g.gain.setValueAtTime(.12,ac.currentTime);g.gain.setValueAtTime(.12,ac.currentTime+.9);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+1.3);o.connect(g).connect(ac.destination);o.start();o.stop(ac.currentTime+1.3)})}catch(e){}}
function ferry(c,x,y,t,k){x=Math.round(x);y=Math.round(y)+2+Math.round(Math.sin(t*3));c.fillStyle='#000';c.fillRect(x-15,y-1,30,6);c.fillStyle='#f2f2f2';c.fillRect(x-14,y,28,4);c.fillStyle='#c8102e';c.fillRect(x-14,y+3,28,1);c.fillStyle='#ddd';c.fillRect(x-4,y-6,10,5);c.fillStyle='#4aa3df';c.fillRect(x-3,y-5,2,1);c.fillRect(x+1,y-5,2,1);c.fillStyle='#c8102e';c.fillRect(x+3,y-9,3,3);
 if(k>2.6&&k<3.6){c.fillStyle='rgba(255,255,255,.8)';c.fillRect(x+5,y-13-((t*8|0)%3),2,2);c.fillRect(x+8,y-15-((t*8|0)%3),2,2)}}
function ferryPanel(c,k,t){const w=520,h=150,x=512-w/2,y=330;c.fillStyle='#000';c.fillRect(x+6,y+6,w,h);c.fillStyle='#1a1430';c.fillRect(x,y,w,h);c.strokeStyle='#ffd23f';c.lineWidth=3;c.strokeRect(x,y,w,h);
 c.save();c.beginPath();c.rect(x+3,y+3,w-6,h-6);c.clip();const tilt=Math.sin(t*2.2)*.09;c.translate(512,y+h/2);c.rotate(tilt);
 c.fillStyle='#3a3050';c.fillRect(-300,-80,600,160);for(let i=-5;i<=5;i++){c.fillStyle='#5a4a3a';c.fillRect(i*48-14,-30,28,34);c.fillStyle='#2a2238';c.fillRect(i*48-14,-36,28,8)}
 c.fillStyle='#6a6a7a';c.fillRect(-300,30,600,40);
 const cx=Math.sin(t*2.2)*190;c.fillStyle='#000';c.fillRect(cx-38,10,76,26);c.fillStyle='#222';c.fillRect(cx-36,12,72,22);c.fillStyle='#bbb';c.fillRect(cx-32,14,64,3);c.fillStyle='#ffd23f';c.font='7px "Press Start 2P",monospace';c.textAlign='center';c.fillText('PAGE',cx,30);
 const tx=cx-Math.sign(Math.cos(t*2.2))*70,run=(t*12|0)%2;c.fillStyle='#000';c.fillRect(tx-9,-20,18,44);c.fillStyle='#d9733a';c.fillRect(tx-7,-30,14,12);c.fillStyle='#e8c8a0';c.fillRect(tx-5,-22,10,8);c.fillStyle='#111';c.fillRect(tx-7,-12,14,18);c.fillStyle='#2a3a6a';c.fillRect(tx-7,6,6,16-run*4);c.fillRect(tx+1,6,6,12+run*4);c.fillStyle='#e8c8a0';c.fillRect(tx+(Math.cos(t*2.2)<0?7:-11),-8,4,4);
 c.restore();
 const line=k<1.2?'ALL ABOARD THE PUTTGARDEN-RODBY FERRY!':k<2.6?"THE SHIP ROCKS... PAGE'S KEYBOARD CASE SLIDES!":k<3.6?"TOOOOT! THE SHIP'S HORN! EVERYONE JUMPS!":'TREY CATCHES THE CASE. WELCOME TO DENMARK!';
 txt(c,line,512,y-14,9,k>=2.6&&k<3.6?'#ffd23f':'#fff');if(k>=2.6&&k<3.6)txt(c,'TOOOOT!',512,y+40,26,'#ff3b3b')}
function txt(c,s,x,y,sz,col,al){c.font=sz+'px "Press Start 2P",monospace';c.textAlign=al||'center';c.fillStyle='#000';c.fillText(s,x+2,y+2);c.fillStyle=col;c.fillText(s,x,y)}
function play(o){const M=MAPS[o.map||'benelux'];[BX,BY]=M.v;SX=LW/M.v[2];SY=LH/M.v[3];const MAP=MAPC[o.map||'benelux']=MAPC[o.map||'benelux']||bakeMap(M);const cv=o.canvas,c=cv.getContext('2d'),low=document.createElement('canvas');low.width=LW;low.height=LH;const l=low.getContext('2d');
 const pts=[o.from,...(o.stops||[]),o.to].map(s=>P(s.lon,s.lat));const seg=[];let tot=0;for(let i=1;i<pts.length;i++){const d=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);seg.push(d);tot+=d}
 const T0=.9,TD=5.2,TA=T0+TD,TEND=TA+2.4;let t=0,lastT=performance.now(),done=false,raf=0,trail=[],hT=0,cowT=0,lastE=0,mooed=0,fT=0,honk=0;
 if(o.music!==false)startMusic();
 const posAt=u=>{let d=u*tot;for(let i=0;i<seg.length;i++){if(d<=seg[i]||i===seg.length-1){const k=seg[i]?Math.min(1,d/seg[i]):1;return[pts[i][0]+(pts[i+1][0]-pts[i][0])*k,pts[i][1]+(pts[i+1][1]-pts[i][1])*k,Math.sign(pts[i+1][0]-pts[i][0])||1,i]}d-=seg[i]}};
 const reach=[0];{let a=0;seg.forEach(s=>{a+=s;reach.push(a/tot)})}
 function finish(){if(done)return;done=true;cancelAnimationFrame(raf);mus&&mus.stop();mus=null;cv.removeEventListener('pointerdown',finish);o.onDone&&o.onDone()}
 cv.addEventListener('pointerdown',finish);
 function frame(now){if(done)return;const dt=Math.min(.05,(now-lastT)/1000);lastT=now;t+=dt;o.sync&&o.sync();
  if(o.gag==='cows'){const cowE=reach[1]+(reach[2]-reach[1])*.5;if(lastE>=cowE&&cowT<2.4){hT+=dt;cowT+=dt}else if(cowT>0)cowT+=dt;if(cowT>1.1&&!mooed){mooed=1;moo()}}
  if(o.gag==='ferry'){const fi=o.ferryLeg||2,fE=reach[fi]+(reach[fi+1]-reach[fi])*.45;if(lastE>=fE&&fT<4.2){hT+=dt;fT+=dt}else if(fT>0)fT+=dt;if(fT>2.6&&!honk){honk=1;horn()}}
  const u=Math.max(0,Math.min(1,(t-hT-T0)/TD)),e=u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;const[bx,by,dir]=posAt(e);lastE=e;
  l.drawImage(MAP,0,0);
  l.fillStyle='#ffd23f';for(let i=0;i<pts.length-1;i++){const[x0,y0]=pts[i],[x1,y1]=pts[i+1];const n=seg[i];for(let s=0;s<n;s+=4){const g=(reach[i]+s/tot);l.fillStyle=g<=e?'#ffd23f':'rgba(255,255,255,.35)';l.fillRect(Math.round(x0+(x1-x0)*s/n),Math.round(y0+(y1-y0)*s/n),1,1)}}
  pts.forEach((p,i)=>{const big=i===0||i===pts.length-1,hit=e>=reach[i]-.001;l.fillStyle='#000';l.fillRect(Math.round(p[0])-(big?3:2),Math.round(p[1])-(big?3:2),big?6:4,big?6:4);l.fillStyle=big?(hit?'#ff3b3b':'#ff8a3d'):(hit?'#ffd23f':'#cfcfcf');l.fillRect(Math.round(p[0])-(big?2:1),Math.round(p[1])-(big?2:1),big?4:2,big?4:2)});
  if(o.gag==='lizard'){const lu=Math.max(0,e-.04-Math.max(0,t-T0)*.03);if(t>T0&&lu>0&&t<TA+.4){const[lx,ly]=posAt(lu);drawLizard(l,lx,ly+5,t)}}
  if(o.vehicle==='plane'){l.fillStyle='#fff';l.fillRect(Math.round(bx)-6,Math.round(by)-1,12,2);l.fillRect(Math.round(bx)-1,Math.round(by)-5,3,10)}else drawBus(l,bx,by+((t*8|0)%2&&u<1?-1:0),dir,t);
  if(o.gag==='fish')fishZ(l,bx,by,t);
  if(o.gag==='ferry'){const fi=o.ferryLeg||2;if(lastE>=reach[fi]&&lastE<=reach[fi+1])ferry(l,bx,by,t,fT)}
  if(o.gag==='cows'&&cowT>0&&cowT<3.4)cows(l,bx,by,dir,cowT,t);
  c.imageSmoothingEnabled=false;c.drawImage(low,0,0,1024,576);
  c.fillStyle='rgba(7,4,13,.75)';c.fillRect(0,0,1024,44);txt(c,'ON THE ROAD · '+o.from.name+' → '+o.to.name,512,30,16,'#ffd23f');
  M.lab.forEach(([s,lo,la])=>{const[x,y]=P(lo,la);txt(c,s,x*4,y*4,10,'rgba(255,255,255,.55)')});
  const all=[o.from,...(o.stops||[]),o.to];all.forEach((s,i)=>{const[x,y]=pts[i];const big=i===0||i===all.length-1;if(!big&&e<reach[i]-.001)return;
   const up=i%2?1:-1;txt(c,s.name,x*4,y*4+(up<0?-28:36),big?12:9,big?'#fff':'#ffd23f');txt(c,s.date,x*4,y*4+(up<0?-14:50),8,'#8fd3ff')});
  if(o.gag==='lizard'&&t>T0+1.2&&t<T0+3.6)txt(c,'"WAIT FOR ME!"',512,530,10,'#7f7');
  if(o.gag==='fish'&&t>T0+.5&&t<TA)txt(c,'FISH IS NAPPING ON THE LUGGAGE RACK',512,530,10,'#ffb3b3');
  if(t-hT>=TA){const k=Math.min(1,(t-TA)/.25),w=560*k,h=130*k,x=512-w/2,y=288-h/2-20;c.fillStyle='#000';c.fillRect(x+8,y+8,w,h);c.fillStyle='#14102a';c.fillRect(x,y,w,h);c.strokeStyle='#ffd23f';c.lineWidth=4;c.strokeRect(x,y,w,h);
   if(k>=1){txt(c,'NEXT SHOW',512,y+32,10,'#ff8a3d');txt(c,o.to.date+' · '+o.to.venue,512,y+68,16,'#fff');txt(c,o.to.name,512,y+104,14,'#ffd23f')}}
  if(o.gag==='ferry'&&fT>0&&fT<4.6)ferryPanel(c,fT,t);
  if(o.gag==='cows'&&cowT>0&&cowT<3.2)txt(c,cowT<1.1?'COWS ON THE ALPINE PASS! THE BUS STOPS...':'"MOOOOO!" MIKE MOOS THEM OFF THE ROAD',512,530,10,cowT<1.1?'#fff':'#ffd23f');
  if(t>1.2)txt(c,'TAP TO SKIP',1012,566,8,'rgba(255,255,255,.6)','right');
  if(t-hT>=TEND){finish();return}raf=requestAnimationFrame(frame)}
 raf=requestAnimationFrame(frame);return{skip:finish}}
window.TravelScene={play,bakeMap};
})();
