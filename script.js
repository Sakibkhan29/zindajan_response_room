
const screens = [...document.querySelectorAll('.screen')];
const progress = document.getElementById('progress');

function show(id) {
  screens.forEach(s => s.classList.toggle('active', s.id === id));

  const index = screens.findIndex(s => s.id === id);
  progress.textContent =
    String(index + 1).padStart(2, '0') +
    ' / ' +
    String(screens.length).padStart(2, '0');
}

document.querySelectorAll('[data-next]').forEach(btn =>
  btn.addEventListener('click', () => show(btn.dataset.next))
);

document.getElementById('restart').addEventListener('click', () => show('s0'));

// Background audio controls
const ambient = document.getElementById('ambient');
const soundToggle = document.getElementById('soundToggle');

if (ambient && soundToggle) {
  soundToggle.addEventListener('click', async () => {
    if (ambient.paused) {
      try {
        await ambient.play();
        soundToggle.textContent = '♫ Sound on';
        soundToggle.setAttribute('aria-pressed', 'true');
      } catch (error) {
        console.error('Audio playback failed:', error.name, error.message);
        soundToggle.textContent = '♫ Audio unavailable';
        alert('Audio error: ' + error.name + ' — ' + error.message);
      }
    } else {
      ambient.pause();
      soundToggle.textContent = '♫ Sound off';
      soundToggle.setAttribute('aria-pressed', 'false');
    }
  });
}
