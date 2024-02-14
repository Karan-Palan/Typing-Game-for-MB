const targetDiv = document.getElementById('target');
const feedbackDiv = document.getElementById('feedback');
const bgMusic = document.getElementById('bg-music');

const keys = ['A', 'S', 'D', 'F', 'J', 'K', 'L', ';'];

function generateRandomKey() {
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}

function displayKey() {
  const randomKey = generateRandomKey();
  targetDiv.textContent = randomKey;
}

function initializeGame() {
  displayKey();
  document.addEventListener('keydown', checkKey);
  bgMusic.play();
}

function checkKey(event) {
  const pressedKey = event.key.toUpperCase();
  const targetKey = targetDiv.textContent;
  
  if (pressedKey === targetKey) {
    feedbackDiv.textContent = 'Correct!';
    setTimeout(() => {
      feedbackDiv.textContent = '';
      displayKey();
    }, 1000);
  } else {
    feedbackDiv.textContent = 'Incorrect! Try again.';
  }
}

initializeGame();
