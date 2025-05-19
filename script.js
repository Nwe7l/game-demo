const storyText = document.getElementById('story-text');
const userInput = document.getElementById('user-input');

const beginnings = [
  "The city was asleep, but the green lights under the sewer flickered with life...",
  "She woke up in a cold room, a glowing symbol pulsing on the ceiling...",
  "Through the fog, a neon tower blinked silently, calling her name..."
];

let currentStory = "";

// Pick a random beginning
function getRandomBeginning() {
  return beginnings[Math.floor(Math.random() * beginnings.length)];
}

// Typing effect
function typeText(text, callback) {
  let index = 0;
  const interval = setInterval(() => {
    storyText.textContent += text[index];
    index++;
    if (index === text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 30);
}

// Handle user input
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && userInput.value.trim() !== "") {
    const userLine = userInput.value.trim();
    currentStory += "\n" + userLine;
    storyText.textContent += "\n" + userLine + "\n";
    userInput.value = "";

    // Placeholder for generated continuation (will be replaced by AI)
    const continuation = "She looked around, unsure what to expect next...\n";
    typeText(continuation);
  }
});

// Start with a random beginning
const beginning = getRandomBeginning();
currentStory = beginning;
typeText(beginning);
