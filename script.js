const screens=[...document.querySelectorAll('.screen')];
const progress=document.getElementById('progress');
function show(id){
  screens.forEach(s=>s.classList.toggle('active',s.id===id));
  const index=screens.findIndex(s=>s.id===id);
  progress.textContent=String(index+1).padStart(2,'0')+' / '+String(screens.length).padStart(2,'0');
}
document.querySelectorAll('[data-next]').forEach(btn=>btn.addEventListener('click',()=>show(btn.dataset.next)));
document.getElementById('restart').addEventListener('click',()=>show('s0'));

// Optional audio: place a licensed/royalty-free audio file named ambient.mp3
// in this same folder. Audio is never forced on visitors.
const audio=document.getElementById('ambient');
const soundBtn=document.getElementById('soundToggle');
audio.src='ambient.mp3';
let playing=false;
soundBtn.addEventListener('click',async()=>{
  if(!playing){
    try{await audio.play();playing=true;soundBtn.textContent='♫ Sound on';}
    catch(e){soundBtn.textContent='♫ Add ambient.mp3';}
  }else{audio.pause();playing=false;soundBtn.textContent='♫ Sound off';}
});

const ambient = document.getElementById("ambient");
const soundToggle = document.getElementById("soundToggle");

if (ambient && soundToggle) {
  soundToggle.addEventListener("click", async () => {
    if (ambient.paused) {
      try {
        await ambient.play();
        soundToggle.textContent = "♫ Sound on";
        soundToggle.setAttribute("aria-pressed", "true");
      } catch (error) {
        console.error("Audio playback failed:", error);
        soundToggle.textContent = "♫ Audio unavailable";
      }
    } else {
      ambient.pause();
      soundToggle.textContent = "♫ Sound off";
      soundToggle.setAttribute("aria-pressed", "false");
    }
  });
}
