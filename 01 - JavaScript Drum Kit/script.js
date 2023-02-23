// Play sound and animate key when key is pressed
function playSound(e) {
    // Get audio element associated with pressed key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Get key element associated with pressed key
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // If there is no audio element associated with pressed key, return
    if (!audio) return;
  
    // Reset audio element to start and play sound
    audio.currentTime = 0;
    audio.play();
  
    // Add 'playing' class to key element to animate it
    key.classList.add('playing');
  }
  
  // Remove 'playing' class from key when transition ends
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  
  // Add event listeners to all keys to play sound and animate on click
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);