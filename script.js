const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.16});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const statObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return; const el=entry.target; const target=Number(el.dataset.count); if(!target)return; let start=0; const duration=1300; const tick=now=>{start||(start=now);const p=Math.min((now-start)/duration,1);el.textContent=Math.floor((1-Math.pow(1-p,3))*target)+(target===1?'B+':'+');if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick);statObserver.unobserve(el)}),{threshold:.8});
document.querySelectorAll('[data-count]').forEach(el=>statObserver.observe(el));

// Restrained 3D tilt gives the service cards an architectural, tactile feel.
document.querySelectorAll('.service-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(700px) rotateX(${y*-5}deg) rotateY(${x*5}deg) translateY(-4px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});

document.querySelectorAll('.magnetic').forEach(button=>{button.addEventListener('pointermove',e=>{const r=button.getBoundingClientRect();button.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.08}px)`});button.addEventListener('pointerleave',()=>button.style.transform='')});

const sculpture=document.querySelector('.sculpture');window.addEventListener('scroll',()=>{if(window.innerWidth>800){const p=Math.min(window.scrollY/window.innerHeight,1);sculpture.style.animationPlayState='paused';sculpture.style.transform=`rotateY(${-24+p*38}deg) rotateX(${9+p*12}deg) translateY(${p*-45}px)`}});

document.querySelector('.contact-form').addEventListener('submit',e=>{e.preventDefault();const button=e.currentTarget.querySelector('button');button.innerHTML='Thank you <span>✓</span>';button.disabled=true});
