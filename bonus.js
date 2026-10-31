/* VespaRun: Rome bonus round (Out Run-style). VespaRun.play({canvas,sync,img,atlas,music,onDone(score)}) */
(function(){
const W=1024,H=576,HOR=318,LEN=30000;
function txt(c,s,x,y,sz,col,al,sh){c.font=sz+'px "Press Start 2P",monospace';c.textAlign=al||'center';c.fillStyle=sh||'#000';c.fillText(s,x+2,y+2);c.fillStyle=col;c.fillText(s,x,y)}
let ac=null;
function play(o){const cv=o.canvas,c=cv.getContext('2d'),A=o.atlas,IM=o.img;
 const spr=(n,x,y,s,rot)=>{const m=A[n];if(!m||!IM.atlas3)return;c.save();c.translate(x,y);if(rot)c.rotate(rot);c.scale(s,s);c.drawImage(IM.atlas3,m[0],m[1],m[2],m[3],-m[2]/2,-m[3],m[2],m[3]);c.restore()};
 let mus=null;if(o.music!==false){try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();if(ac.state==='suspended')ac.resume();const g=ac.createGain();g.gain.value=.05;g.connect(ac.destination);
  const mel=[69,72,76,72,74,77,81,77,76,72,69,72,71,74,76,74],bas=[45,45,50,50,52,52,45,45];let i=0,nt=ac.currentTime+.05;const f=m=>440*Math.pow(2,(m-69)/12);
  const tick=()=>{while(nt<ac.currentTime+.3){const os=ac.createOscillator(),e=ac.createGain();os.type='square';os.frequency.value=f(mel[i%16]);e.gain.setValueAtTime(.5,nt);e.gain.exponentialRampToValueAtTime(.01,nt+.11);os.connect(e).connect(g);os.start(nt);os.stop(nt+.12);
   if(i%2===0){const b=ac.createOscillator(),be=ac.createGain();b.type='triangle';b.frequency.value=f(bas[(i/2)%8]);be.gain.setValueAtTime(1.2,nt);be.gain.exponentialRampToValueAtTime(.01,nt+.2);b.connect(be).connect(g);b.start(nt);b.stop(nt+.22)}i++;nt+=.125}};
  tick();const id=setInterval(tick,100);mus={stop(){clearInterval(id);try{g.gain.setTargetAtTime(0,ac.currentTime,.05)}catch(e){}}}}catch(e){}}
 const blip=(fr,d,ty)=>{if(!ac||o.music===false)return;try{const os=ac.createOscillator(),e=ac.createGain();os.type=ty||'square';os.frequency.value=fr;e.gain.setValueAtTime(.08,ac.currentTime);e.gain.exponentialRampToValueAtTime(.001,ac.currentTime+d);os.connect(e).connect(ac.destination);os.start();os.stop(ac.currentTime+d)}catch(e){}};
 // course
 const curve=z=>Math.sin(z/2600)*.9+Math.sin(z/1100+1)*.5;
 const obj=[];let seed=7;const R=()=>(seed=(seed*16807)%2147483647)/2147483647;
 for(let z=1500;z<LEN-800;z+=420+R()*380){const r=R(),ln=[-.62,0,.62][Math.floor(R()*3)];
  if(r<.5)obj.push({z,lane:ln,k:R()<.5?'bon_fiat1':'bon_fiat2',car:1,v:300+R()*200});else obj.push({z,lane:ln,k:['gelato','pizza','suppli'][Math.floor(R()*3)]})}
 for(let z=400;z<LEN;z+=260)obj.push({z,lane:(z/260|0)%2?-1.7:1.7,k:'pine',deco:1});
 const F={};let pos=0,spd=0,px=0,steer=0,score=0,crash=0,food=0,t=0,inv=0,flash=0,shake=0,done=false,end=0,raf=0,last=performance.now(),pops=[];
 const keys={};const kd=e=>{keys[e.code]=true},ku=e=>{keys[e.code]=false};addEventListener('keydown',kd);addEventListener('keyup',ku);
 const ptr=new Map();const pt=e=>{const r=cv.getBoundingClientRect();return{x:(e.clientX-r.left)/r.width*W,y:(e.clientY-r.top)/r.height*H}};
 const pd=e=>{const q=pt(e);if(q.x>W-170&&q.y<60){finish();return}if(end>1.2){finish();return}ptr.set(e.pointerId,q.x);try{cv.setPointerCapture(e.pointerId)}catch(_){}},pm=e=>{if(ptr.has(e.pointerId))ptr.set(e.pointerId,pt(e).x)},pu=e=>{ptr.delete(e.pointerId)};
 cv.addEventListener('pointerdown',pd);cv.addEventListener('pointermove',pm);cv.addEventListener('pointerup',pu);cv.addEventListener('pointercancel',pu);
 function finish(){if(done)return;done=true;cancelAnimationFrame(raf);mus&&mus.stop();removeEventListener('keydown',kd);removeEventListener('keyup',ku);cv.removeEventListener('pointerdown',pd);cv.removeEventListener('pointermove',pm);cv.removeEventListener('pointerup',pu);cv.removeEventListener('pointercancel',pu);o.onDone&&o.onDone(score)}
 function food_(k,x,y,s){c.save();c.translate(x,y);c.scale(s*1.6,s*1.6);
  if(k==='gelato'){c.fillStyle='#000';c.beginPath();c.moveTo(-14,-24);c.lineTo(14,-24);c.lineTo(0,12);c.fill();c.fillStyle='#d9a250';c.beginPath();c.moveTo(-12,-23);c.lineTo(12,-23);c.lineTo(0,8);c.fill();c.fillStyle='#7aa84a';c.beginPath();c.arc(-6,-30,11,0,7);c.fill();c.fillStyle='#f3a6c0';c.beginPath();c.arc(7,-30,11,0,7);c.fill();c.fillStyle='#fff3d8';c.beginPath();c.arc(0,-43,11,0,7);c.fill()}
  if(k==='pizza'){c.fillStyle='#000';c.fillRect(-28,-30,56,30);c.fillStyle='#d9a250';c.fillRect(-26,-28,52,26);c.fillStyle='#c8281e';c.fillRect(-23,-25,46,20);c.fillStyle='#f6e7b0';[[-16,-20],[-2,-14],[12,-21],[6,-10]].forEach(([a,b])=>c.fillRect(a,b,7,5))}
  if(k==='suppli'){c.fillStyle='#000';c.beginPath();c.ellipse(0,-14,20,14,0,0,7);c.fill();c.fillStyle='#c97a24';c.beginPath();c.ellipse(0,-15,18,12,0,0,7);c.fill()}
  c.restore()}
 function frame(now){if(done)return;const dt=Math.min(.05,(now-last)/1000);last=now;t+=dt;o.sync&&o.sync();
  // input
  let inp=(keys.ArrowRight||keys.KeyD?1:0)-(keys.ArrowLeft||keys.KeyA?1:0);for(const x of ptr.values())inp+=x<W/2?-1:1;inp=Math.max(-1,Math.min(1,inp));
  steer+=(inp-steer)*Math.min(1,dt*8);
  const go=t>2.6&&!end;
  if(go){spd+=(1100-spd)*dt*.5;pos+=spd*dt;px+=steer*1.7*dt-curve(pos+300)*spd/1100*.55*dt;if(Math.abs(px)>1.4){spd*=1-dt*1.8;px=Math.max(-1.55,Math.min(1.55,px))}}
  if(!end&&pos>=LEN){end=.001;blip(784,.3);blip(1047,.5)}if(end)end+=dt;
  inv-=dt;flash-=dt;shake-=dt;
  for(const b of obj){if(b.car)b.z+=b.v*dt*(go?1:0);if(b.gone||b.deco)continue;const zr=b.z-pos;if(zr>0&&zr<60&&Math.abs(b.lane-px)<.34){b.gone=1;
    if(b.car){if(inv<=0){spd*=.3;crash++;flash=.25;shake=.4;inv=1;pops.push({s:'CRASH!',c:'#ff4040',t:0});blip(110,.4,'sawtooth')}}else{food++;score+=250;pops.push({s:(b.k==='gelato'?'GELATO':b.k==='pizza'?'PIZZA':'SUPPLÌ')+' +250',c:'#7f7',t:0});blip(988,.12);blip(1319,.15)}}}
  if(go)score+=Math.round(spd*dt*.05);
  // draw
  const sx=shake>0?(Math.random()-.5)*10:0;c.save();c.translate(sx,0);
  c.drawImage(IM.bonussky,0,0,W,H*.55,0,0,W,HOR);c.fillStyle='#2f4a2a';c.fillRect(0,HOR,W,H-HOR);
  const cur=curve(pos+300);
  for(let y=HOR;y<H;y+=2){const s=(y-HOR)/(H-HOR)+.001,zr=34/s,hw=30+620*s,cx=W/2-px*hw*.66+cur*Math.pow(1-s,2)*560;const band=Math.floor((pos+zr*40)/320)%2;
   c.fillStyle=band?'#3d6a32':'#335c2b';c.fillRect(0,y,W,2);
   c.fillStyle=band?'#c8102e':'#f2f2f2';c.fillRect(cx-hw*1.12,y,hw*.12,2);c.fillRect(cx+hw,y,hw*.12,2);
   c.fillStyle=band?'#5c5c64':'#55555d';c.fillRect(cx-hw,y,hw*2,2);
   if(band){c.fillStyle='#e8e0c0';c.fillRect(cx-hw*.33-hw*.015,y,hw*.03,2);c.fillRect(cx+hw*.33-hw*.015,y,hw*.03,2)}}
  // objects far to near
  const vis=obj.filter(b=>!b.gone&&b.z-pos>20&&b.z-pos<1400).sort((a,b)=>b.z-a.z);
  for(const b of vis){const zr=(b.z-pos)/40,s=Math.min(1.4,34/Math.max(zr,1)*.0+34/(zr*1)),ss=34/((b.z-pos)/40);const sc=Math.min(1.3,1/((b.z-pos)/80)),sv=sc;const s2=Math.min(1,80/(b.z-pos));
   const y=HOR+s2*(H-HOR),hw=30+620*s2,cx=W/2-px*hw*.66+cur*Math.pow(1-s2,2)*560,x=cx+b.lane*hw*.66;
   if(b.k==='pine'){c.fillStyle='#3a2410';c.fillRect(x-4*s2*3,y-150*s2*3,8*s2*3,150*s2*3);c.fillStyle='#24461e';c.beginPath();c.ellipse(x,y-150*s2*3,60*s2*3,22*s2*3,0,0,7);c.fill();continue}
   if(b.car)spr(b.k,x,y,s2*1.25);else food_(b.k,x,y,s2*1.25)}
  // player
  const lean=steer*.18,bob=Math.sin(t*20)*(go?2:0);spr('bon_vespa',W/2,H-6+bob,.95,lean);if(inv>0&&Math.floor(t*20)%2){c.fillStyle='rgba(255,255,255,.25)';c.fillRect(W/2-60,H-190,120,190)}
  c.restore();
  if(flash>0){c.fillStyle='rgba(255,60,60,.35)';c.fillRect(0,0,W,H)}
  // HUD
  c.fillStyle='rgba(7,4,13,.7)';c.fillRect(0,0,W,46);txt(c,'BONUS ROUND · VESPA RUN',20,30,13,'#ffd23f','left');txt(c,String(score).padStart(6,'0'),W/2+120,30,14,'#fff');
  c.fillStyle='rgba(7,4,13,.7)';c.fillRect(W-170,6,160,34);txt(c,'SKIP ▶',W-90,30,11,'#fff');
  const prog=Math.min(1,pos/LEN);c.fillStyle='#000';c.fillRect(200,56,624,12);c.fillStyle='#ffd23f';c.fillRect(202,58,620*prog,8);txt(c,'COLOSSEUM',196,68,7,'#fff','right');txt(c,'TEATRO OLIMPICO',830,68,7,'#fff','left');
  pops=pops.filter(p=>(p.t+=dt)<1);pops.forEach(p=>{c.globalAlpha=1-p.t;txt(c,p.s,W/2,H-240-p.t*60,16,p.c);c.globalAlpha=1});
  if(t<2.6){c.fillStyle='rgba(7,4,13,.65)';c.fillRect(0,170,W,170);txt(c,'RIDE TO THE TEATRO OLIMPICO!',W/2,215,16,'#ffd23f');txt(c,'HOLD LEFT / RIGHT SIDE OF THE SCREEN TO STEER',W/2,250,10,'#fff');txt(c,'DODGE THE FIAT 500s · GRAB FOOD FOR POINTS',W/2,275,10,'#8fd3ff');txt(c,String(3-Math.floor(t/.87)),W/2,322,26,'#ff8a3d');
   const k=Math.floor(t/.87);if(!F['b'+k]){F['b'+k]=1;blip(k>=2?880:440,.15)}}
  if(end){c.fillStyle='rgba(7,4,13,.8)';c.fillRect(212,170,600,220);c.strokeStyle='#ffd23f';c.lineWidth=4;c.strokeRect(212,170,600,220);txt(c,'ARRIVED AT THE TEATRO OLIMPICO!',W/2,215,13,'#ffd23f');
   txt(c,'FOOD GRABBED: '+food+'   CRASHES: '+crash,W/2,260,10,'#fff');const bonus=crash===0?2000:0;if(bonus&&!F.nb){F.nb=1;score+=bonus}txt(c,crash===0?'NO-CRASH BONUS +2000!':'',W/2,290,10,'#7f7');txt(c,'BONUS SCORE '+score,W/2,330,16,'#fff');if(end>1.2&&Math.floor(t*2)%2)txt(c,'TAP TO CONTINUE',W/2,372,10,'#8fd3ff');if(end>6){finish();return}}
  raf=requestAnimationFrame(frame)}
 raf=requestAnimationFrame(frame);
 return{skip:finish}}
window.VespaRun={play};
})();
