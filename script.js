const textEl = document.getElementById('text');
const playBtn = document.getElementById('playBtn');

const MESSAGE = textEl.textContent.trim();

function speak(text) {
  if (!('speechSynthesis' in window)) {
    alert('Lo siento, tu navegador no soporta síntesis de voz.');
    return;
  }

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'es-ES';
  utter.rate = 0.95;
  utter.pitch = 1.05;

  // Intentar seleccionar una voz en español, preferir femenina
  const voices = speechSynthesis.getVoices();
  const preferred = voices.find(v => /es(-|_)?(ES|MX|AR|CO)?/i.test(v.lang) && /female|woman|female/i.test(v.name))
                  || voices.find(v => /es(-|_)?/i.test(v.lang))
                  || voices[0];
  if (preferred) utter.voice = preferred;

  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

playBtn.addEventListener('click', () => speak(MESSAGE));

// Autoplay attempt: wait for voices to load then speak once.
function tryAutoplay() {
  // Some browsers require a user gesture; we'll try but it's optional.
  const speakIfAllowed = () => {
    try { speak(MESSAGE); } catch(e) { /* ignore */ }
  };

  // If voices already loaded
  if (speechSynthesis.getVoices().length > 0) {
    speakIfAllowed();
    return;
  }

  // Otherwise wait for voiceschanged
  window.speechSynthesis.onvoiceschanged = () => {
    speakIfAllowed();
  };
}

// Run autoplay attempt after a short delay to allow page to settle.
setTimeout(tryAutoplay, 500);
